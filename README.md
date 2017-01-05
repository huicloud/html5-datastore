# dzh云平台数据查询和存储管理模块
---

### 使用
1.global

    <script src="datastore.all.min.js"></script>
    <script>
        new DataStore({
            address: 'ws://10.15.144.101:80/ws',
            serviceUrl: '/kbspirit', 
            otherParams: {type: 0}
        }).query({input: '600'}).then(function(data) {
            ...
        }).catch(function(err) {
            ...
        });
    </script>

2.requirejs

    <script src="require.js"></script>
    <script>
        require.config({
            paths: {
                jquery: './jquery',
                protobufjs: './ProtoBuf.noparse',
                ByteBuffer: './ByteBufferAB',
                Long: './Long',
                yfloat: './yfloat',
                connection: './connection',
                DataStore: './datastore',
                Promise: './promise'
            },
            deps: ['Promise']
        });
        require(['DataStore'], function(DataStore) {
            ...
        });
    </script>
    
3.nodejs
安装

    npm install git+https://git@github.com/huicloud/html5-datastore.git

使用
    
    var DataStore = require('html5-datastore');
    ...

## API
### DataStore.address = 'ws://10.15.144.101:80/ws'
设置默认服务器地址
协议为http则使用http异步请求数据，例如 http://10.15.144.101:80
协议为ws则为websoctet连接请求数据，例如 ws://10.15.144.101:80/ws

### DataStore.dataType = 'pb'
设置默认请求数据格式，不设置默认为'pb'，可设置为'pb'/'json'

### DataStore.compresser = 'snappy'
设置数据的压缩格式，不设置默认为null表示不压缩数据，可设置为'snappy'
注意同一个连接上压缩格式需要相同

### DataStore.token = 'XXXXXXXX'
设置云平台访问令牌，需自维护，

### DataStore.tokenManager
{DzhyunTokenManager} 云平台令牌管理器，自动申请和刷新令牌

### DataStore.pushInterval
用于http协议订阅查询时推送数据（定时请求）的间隔时间毫秒数

### DataStore.pause
{boolean} 用于控制http协议订阅查询的状态，默认false

### new DataStore(options)
创建数据存储对象，options设置参数如下

address: {string=} 连接服务器地址，不设置则使用DataStore.address

dataType: {string=} 请求数据格式，可设置为'pb'/'json'，不设置则使用DataStore.dataType

compresser: {string=} 请求数据的压缩格式，可设置为'snappy'，不设置则使用DataStore.compresser

serviceUrl: {!string} 请求数据url，例如'/quote/dyna'

connectionType: {string=} 连接协议类型，可设置为'http'/'ws'，不设置则根据address地址判断

alone: {boolean=} 是否创建独立连接，只对于ws类型的连接每个请求单独创建连接还是共用一个连接，默认为false

idProperty: {string=} datastore中存储数据的id字段属性值，默认'obj'，对于可以缓存的数据将使用该字段指定值作为key缓存

cacheEnable: {'auto'|boolean} 是否缓存数据，默认值为'auto'将根据请求和响应数据自动判断是否缓存数据

fields: {string|Array<string>=} 请求字段，以逗号分隔的字符串或者字符串数组

otherParams: {object=} 其它固定值参数字段，参照具体服务api文档
    例如
    otherParams: {
        prefix: 1,
        split: 2
    }

token: {string=} 云平台访问令牌

tokenManager: {DzhyunTokenManager=} 云平台令牌管理器，自动申请和刷新令牌

pushInterval: 用于http协议订阅查询时推送数据（定时请求）的间隔时间毫秒数

### DataStore.prototype.query(params)
根据指定参数查询数据，返回类似Promise对象<http://es6.ruanyifeng.com/#docs/promise>，返回对象中有请求的qid字段

params: {object=} 查询对象参数，和otherParams可设值相同

例如，datastore.query({obj: 'SH600000'}).then(function(data) {
    // data 为查询结果
}).catch(function(error) {
    // error 错误信息
});

### DataStore.prototype.subscribe(params, callback)
订阅推送，返回Promise对象
callback: {function({Error|object})=} 服务器推送回调函数，回调结果为Error表示错误，其它表示得到的推送数据

### DataStore.prototype.cancel(id)
取消指定的请求或者订阅
pid: {string|number=} 字符串表示idProperty(obj)，数字表示qid，为空则取消所有请求

### DataStore.prototype.reset(options)
重置store，清除缓存，重新设置datastore设置参数


### new DzhyunDataParser(serviceUrl)
另提供全局DzhyunDataParser类型用于解析大智慧云平台数据

serviceUrl: {string=} 需要解析数据的服务url，可以为空则按默认解析

### DzhyunDataParser.prototype.direct
{boolean} 用于标识解析跳过数据格式化过程直接返回，默认false，像分时（/quote/min）等服务需要除了Obj:Data以外的其它数据时请设置为true

### DzhyunDataParser.prototype.parse(data)
将云平台数据转换为js对象类型，包含了下面提供的MSGAdapter,pbTable和yloat的转换

data: {string|ArrayBuffer|Buffer|ByteBuffer} 支持多种数据类型，json和pb格式，对应ajax或者ws请求到的原始数据（不支持Blob）

### DzhyunDataParser.parser.parse(data, message)
将云平台数据转换为js对象类型

data: {string|ArrayBuffer|Buffer|ByteBuffer} 支持多种数据类型，json和pb格式，对应ajax或者ws请求到的原始数据（不支持Blob）

message: {string} 对应需转换的数据对应proto定义message名称

### DzhyunDataParser.MSGAdapter
用于将云平台的MSG结构简化数据层次，转换为简单key:value结构对象

### DzhyunDataParser.MSGAdapter.prototype.adapt(data)
主要的转换方法，包括转换pbTable，解码yfloat数据，并且简化输出格式（转换后MSG结构对外不可见）

### DzhyunDataParser.pbTable
用于转换云平台pbTable格式数据

### DzhyunDataParser.pbTable.convertToJsonArray(data)
pbTable结构的数据转换为普通的js对象数组结构

### DzhyunDataParser.pbTable.convertToJsonTable(data)
pbTable结构的数据转换为普通行列格式的table对象（二维数组）

### DzhyunDataParser.yfloat
用于云平台int64位数字类型的yloat格式解码

### DzhyunDataParser.yfloat.unmakeValue(value)
将yloat格式的数值解码成[数值,精度]的数组

value: {number|Long}

### DzhyunDataParser.yfloat.unmakeValueToNumber(value)
将yloat格式的数值解码成普通的js number格式数值

value: {number|Long}

### new DzhyunTokenManager(address, params, refreshSecond)
用于云平台权限管理

address: {!string} 服务器地址（注意使用http方式地址，不能用WebSocket地址）

params: {Object=} 权限认证参数，参照<https://elsejj.gitbooks.io/dzhyun/content/src/1-3%E6%8E%88%E6%9D%83%E8%AE%A4%E8%AF%81.html>

refreshSecond: {Number=} 自动刷新token时间秒数，每隔指定时间则自动刷新当前token，设置为0表示不自动刷新token，不设置或者null则表示根据请求到的数据中duration来计算刷新时间

### DzhyunTokenManager.prototype.getToken()
获取当前访问令牌，第一次会根据权限认证参数申请令牌，并且自动刷新

### DzhyunTokenManager.prototype.access(params)
申请令牌

### DzhyunTokenManager.prototype.refresh(params) 已废弃，请使用access方法重新请求新的token
刷新令牌

完整的查询例子如下

    DataStore.address = 'ws://10.15.144.101:80/ws'; // 使用websocket连接
    DataStore.dataType = 'pb';                      //使用pb格式
    
    DataStore.token = 'XXXXXXXXX'                   // 云平台访问令牌（需自维护）
    
    // or 使用tokenManager可以在前端自动申请和刷新令牌
    DataStore.tokenManager = new DzhyunTokenManager('10.15.144.101:80', {
        appid: 'XXXXXXXXX',
        secret_key: 'XXXXXXXXX'
    });

    var dataStore1 = new DataStore({
        serviceUrl: '/kbspirit',                    // 请求键盘宝服务
        otherParams: {type: 0}                      // type=0表示证券
    })
    .query({input: '600'})                          // 查询输入关键字为'600'
    .then(function (data) {
        console.log(data);                          // 查询结果
    })
    .catch(function (err) {
        console.log(err);                           // 错误信息
    });
    
    var dataStore2 = new DataStore({
        serviceUrl: '/quote/dyna'                   // 动态行情数据服务
    })
    .subscribe({
        obj: 'SH600000',
    }, function(data) {
        if (data instanceof Error) {
            console.log(data);                      // 错误信息
        } else {
            console.log(data);                      // 查询结果
        }
    });
    
## 浏览器兼容

\>=IE10的现代浏览器支持ws/http方式请求数据，支持pb和json格式数据解析

<=IE9 只支持http方式请求json格式数据（无法使用订阅推送）

IE7-IE8 需引用dist/polyfill.min.js文件
