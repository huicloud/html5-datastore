var gulp = require('gulp');
var browserify = require('browserify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var es = require('event-stream');
var babel = require('gulp-babel');
var git = require('gulp-git');
var del = require('del');
var fs = require('fs');

gulp.task('clean:proto', function(cb) {
  del('proto', cb);
});

gulp.task('clone', ['clean:proto'], function(cb){
  git.clone('ssh://git@git.gw.com.cn:7999/dzhyun/design.git', {args: 'proto'}, cb);
});

function pbjs(cb) {
  var pb = require('protobufjs');
  pb.loadProtoFile('proto/MSG.proto', function(err, builder) {
    var commonjs = require('protobufjs/cli/pbjs/targets/commonjs');
    pb.loadProtoFile('proto/dzhua.proto', function(err, builder) {
      fs.writeFile('lib/dzhyun/dzhyun.js', commonjs(builder, {dependency: './protobuf', exports: 'dzhyun'}), 'utf8', cb);
    }, builder);
  });
}

gulp.task('pbjs', ['clone', 'babel'], function(cb) {
  pbjs(cb);
});

// 不等待babel编译完成，直接编译pbjs
gulp.task('pbjs-direct', ['clone'], function(cb) {
  pbjs(cb);
});

gulp.task('babel', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel({optional: ['es7.classProperties']}))
    .pipe(gulp.dest('lib'));
});

gulp.task('browserify', ['babel', 'pbjs'], function () {
  bundle('./index.js', ['connection', 'protobufjs', 'yfloat'], ['promise'])
    .pipe(rename('datastore.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
    .on('error', gutil.log);

  bundle('./index.js', [], [], null, 'aliasify')
    .pipe(rename('datastore.all.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
    .on('error', gutil.log);

  // json格式不需要pb解析和yfloat解析
  bundle('./index.js', ['protobufjs'], [require.resolve('./lib/dzhyun/dzhyun'), 'yfloat'], null)
    .pipe(rename('datastore.json.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
    .on('error', gutil.log);
});

function bundle(entires, externals, ignores, amdRequires, transform) {
  var b = browserify({
    entries: './index.js',
    standalone: 'DataStore'
  });

  amdRequires = amdRequires || externals;

  b.external(externals);
  ignores.forEach(function(ignore) {
    b.ignore(ignore);
  });

  transform && b.transform(transform);

  var output = '';
  return b.bundle()
    .pipe(es.through(function write(data) {
      output += data;
    }, function end() {

      // 添加amd依赖
      if (amdRequires) {
        output = output.replace(/define\(\[\],f\)/, 'define(' + JSON.stringify(amdRequires) + ',f)');
      }

      // 避免IE9中ArrayBuffer不存在引起的问题，添加ArrayBuffer的定义（并不做完整实现）
      output = "(typeof ArrayBuffer==='undefined')&&(ArrayBuffer=function(){});" + output;
      this.emit('data', output);
      this.emit('end');
    }))
    .pipe(source('bundle.js'))
    .pipe(buffer());
}

gulp.task('default', ['browserify', 'polyfill']);

gulp.task('updateProto', ['pbjs-direct'], function(cb) {

  // 完成后删除proto目录
  del('proto', cb);
});

gulp.task('polyfill', function() {

  // 打包合并生成polyfill（包括es5-shim,es5-sham和json2）
  return gulp.src(['node_modules/es5-shim/es5-shim.js', 'node_modules/es5-shim/es5-sham.js', 'vender/json2.js'])
    .pipe(concat('polyfill.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});