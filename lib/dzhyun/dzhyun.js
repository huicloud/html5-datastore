module.exports = require("./protobuf").newBuilder({})['import']({
    "package": "dzhyun",
    "options": {
        "java_package": "com.dzhyun.proto"
    },
    "messages": [
        {
            "name": "CInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Type",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Ratio",
                    "id": 3
                }
            ]
        },
        {
            "name": "CArray",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "int64",
                    "name": "iValues",
                    "id": 1,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "fValues",
                    "id": 2,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "repeated",
                    "type": "double",
                    "name": "dValues",
                    "id": 3,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "sValues",
                    "id": 4
                }
            ]
        },
        {
            "name": "CData",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "Index",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "int64",
                    "name": "iValues",
                    "id": 2,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "fValues",
                    "id": 3,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "repeated",
                    "type": "double",
                    "name": "dValues",
                    "id": 4,
                    "options": {
                        "packed": true
                    }
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "sValues",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "bytes",
                    "name": "bValues",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "Table",
                    "name": "tValues",
                    "id": 7
                },
                {
                    "rule": "repeated",
                    "type": "CArray",
                    "name": "aValues",
                    "id": 8
                },
                {
                    "rule": "repeated",
                    "type": "sint64",
                    "name": "xValues",
                    "id": 9,
                    "options": {
                        "packed": true
                    }
                }
            ]
        },
        {
            "name": "CDataX",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "Index",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "iValue",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "fValue",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "dValue",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sValue",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "bValues",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "Table",
                    "name": "tValue",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "CArray",
                    "name": "aValues",
                    "id": 8
                }
            ]
        },
        {
            "name": "Table",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Tiid",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "CInfo",
                    "name": "Info",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "CData",
                    "name": "Data",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "CDataX",
                    "name": "DataX",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Name",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Memo",
                    "id": 6
                }
            ]
        },
        {
            "name": "LingZhangGuShuJu",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ZhongWenJianCheng",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuiXinJia",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhangFu",
                    "id": 4
                }
            ]
        },
        {
            "name": "TopicInvestRank",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "BianHao",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiFouReMenZhuTi",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiPingJunZhangFuPaiMing14",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiPingJunZhangFuPaiMing30",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiReDuZhi14",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiReDuZhi30",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiReDuZhi10",
                    "id": 7
                }
            ]
        },
        {
            "name": "TopicInvest",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "BianHao",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "MingCheng",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhangFu",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LiangBi",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "HuanShou",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShangZhangJiaShu",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PingPanJiaShu",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "XiaDieJiaShu",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "LingZhangGuShuJu",
                    "name": "LingZhangGu",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiFouReMenZhuTi",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiPingJunZhangFuPaiMing14",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiPingJunZhangFuPaiMing30",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiReDuZhi14",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiReDuZhi30",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiReDuZhi10",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "GeGuShu",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DangYueZhangFu",
                    "id": 18
                }
            ]
        },
        {
            "name": "LiShiHangQing",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ZhangFu",
                    "id": 2
                }
            ]
        },
        {
            "name": "LiShiZouShi",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "LiShiHangQing",
                    "name": "HangQing",
                    "id": 1
                }
            ]
        },
        {
            "name": "TopicInvestHistory",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "BianHao",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "MingCheng",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "LiShiZouShi",
                    "name": "LiShi",
                    "id": 4
                }
            ]
        },
        {
            "name": "TopicInvestInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "BianHao",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "MingCheng",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "ChengFenGu",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LeiBie",
                    "id": 4
                }
            ]
        },
        {
            "name": "StkData",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "JiaoYiDaiMa",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ZhongWenJianCheng",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuiXinJia",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KaiPanJia",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuiGaoJia",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuiDiJia",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuoShou",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JunJia",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhangDie",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhangFu",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhenFu",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoLiang",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "XianShou",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoE",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongChengJiaoBiShu",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MeiBiChengJiaoGuShu",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "HuanShou",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LiangBi",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "NeiPan",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WaiPan",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongMaiRu",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongMaiChu",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongMaiRuJunJia",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongMaiChuJunJia",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia1",
                    "id": 26
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia2",
                    "id": 27
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia3",
                    "id": 28
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia4",
                    "id": 29
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia5",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang1",
                    "id": 31
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang2",
                    "id": 32
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang3",
                    "id": 33
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang4",
                    "id": 34
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang5",
                    "id": 35
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia1",
                    "id": 36
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia2",
                    "id": 37
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia3",
                    "id": 38
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia4",
                    "id": 39
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia5",
                    "id": 40
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang1",
                    "id": 41
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang2",
                    "id": 42
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang3",
                    "id": 43
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang4",
                    "id": 44
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang5",
                    "id": 45
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiBi",
                    "id": 46
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiCha",
                    "id": 47
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhangSu",
                    "id": 48
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JunLiang5Ri",
                    "id": 49
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShangZhangJiaShu",
                    "id": 50
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "XiaDieJiaShu",
                    "id": 51
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PingPanJiaShu",
                    "id": 52
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AGuShangZhangJiaShu",
                    "id": 53
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AGuXiaDieJiaShu",
                    "id": 54
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AGuPingPanJiaShu",
                    "id": 55
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AGuChengJiaoE",
                    "id": 56
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BGuShangZhangJiaShu",
                    "id": 57
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BGuXiaDieJiaShu",
                    "id": 58
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BGuPingPanJiaShu",
                    "id": 59
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BGuChengJiaoE",
                    "id": 60
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiJinShangZhangJiaShu",
                    "id": 61
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiJinXiaDieJiaShu",
                    "id": 62
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiJinPingPanJiaShu",
                    "id": 63
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiJinChengJiaoE",
                    "id": 64
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "QiTaShangZhangJiaShu",
                    "id": 65
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "QiTaXiaDieJiaShu",
                    "id": 66
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "QiTaPingPanJiaShu",
                    "id": 67
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "QiTaChengJiaoE",
                    "id": 68
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiRuDanShu",
                    "id": 69
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiChuDanShu",
                    "id": 70
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FenZhongZhangFu1",
                    "id": 77
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FenZhongZhangFu2",
                    "id": 78
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FenZhongZhangFu3",
                    "id": 79
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FenZhongZhangFu4",
                    "id": 80
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FenZhongZhangFu5",
                    "id": 81
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiYingLv",
                    "id": 82
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhangTing",
                    "id": 83
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DieTing",
                    "id": 84
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ShiChangMingCheng",
                    "id": 85
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ShiChangDuanMingCheng",
                    "id": 86
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiGouChiHuoShu",
                    "id": 87
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiGouTuHuoShu",
                    "id": 88
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiGouChiHuoLiang",
                    "id": 89
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiGouTuHuoLiang",
                    "id": 90
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiGouChiHuoJunE",
                    "id": 91
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiGouTuHuoJunE",
                    "id": 92
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MeiShouGuShu",
                    "id": 93
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiaoYiDanWei",
                    "id": 94
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiXiaoLv",
                    "id": 95
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 96
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJingLv",
                    "id": 97
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongShiZhi",
                    "id": 98
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LiuTongShiZhi",
                    "id": 99
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiZhangFu5",
                    "id": 101
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiPingJunZhangFu3",
                    "id": 102
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JingTaiShiYingLv",
                    "id": 103
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RongZiYuEZhangFu",
                    "id": 104
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RongZiYuELiuTongShiZhiBiLv",
                    "id": 105
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZiChanFuZhaiLv",
                    "id": 106
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiaQuanPingJunWeiTuoMaiRuJia",
                    "id": 107
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuZongLiang",
                    "id": 108
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiaQuanPingJunWeiTuoMaiChuJia",
                    "id": 109
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuZongLiang",
                    "id": 110
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia1",
                    "id": 111
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia2",
                    "id": 112
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia3",
                    "id": 113
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia4",
                    "id": 114
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia5",
                    "id": 115
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang1",
                    "id": 116
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang2",
                    "id": 117
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang3",
                    "id": 118
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang4",
                    "id": 119
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang5",
                    "id": 120
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia1",
                    "id": 121
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia2",
                    "id": 122
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia3",
                    "id": 123
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia4",
                    "id": 124
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia5",
                    "id": 125
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang1",
                    "id": 126
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang2",
                    "id": 127
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang3",
                    "id": 128
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang4",
                    "id": 129
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang5",
                    "id": 130
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanDangRiLiuRuE",
                    "id": 131
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanLiuRuE5",
                    "id": 132
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDX",
                    "id": 133
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDXPiaoHongTianShu10",
                    "id": 134
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDXZongHe10",
                    "id": 135
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDXBiaoZhunCha10",
                    "id": 136
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDXDDXBiaoZhunCha10BiZhi",
                    "id": 137
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiFouTingPai",
                    "id": 138
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanLiuRuZongE",
                    "id": 140
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanLiuChuZongE",
                    "id": 141
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanLiuRuZongE5",
                    "id": 142
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanLiuChuZongE5",
                    "id": 143
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDXLianXuPiaoHongTianShu",
                    "id": 144
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1minMA1",
                    "id": 200
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1minMA2",
                    "id": 201
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1minMA3",
                    "id": 202
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1minMA4",
                    "id": 203
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1minMA5",
                    "id": 204
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1minMA6",
                    "id": 205
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA5minMA1",
                    "id": 206
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA5minMA2",
                    "id": 207
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA5minMA3",
                    "id": 208
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA5minMA4",
                    "id": 209
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA5minMA5",
                    "id": 210
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA5minMA6",
                    "id": 211
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1dayMA1",
                    "id": 212
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1dayMA2",
                    "id": 213
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1dayMA3",
                    "id": 214
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1dayMA4",
                    "id": 215
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1dayMA5",
                    "id": 216
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MA1dayMA6",
                    "id": 217
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BOLL1minMID",
                    "id": 218
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BOLL1minUPPER",
                    "id": 219
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BOLL1minLOWER",
                    "id": 220
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BOLL5minMID",
                    "id": 221
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BOLL5minUPPER",
                    "id": 222
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BOLL5minLOWER",
                    "id": 223
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BOLL1dayMID",
                    "id": 224
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BOLL1dayUPPER",
                    "id": 225
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BOLL1dayLOWER",
                    "id": 226
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL1min",
                    "id": 227
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL1minMA1",
                    "id": 228
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL1minMA2",
                    "id": 229
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL1minMA3",
                    "id": 230
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL5min",
                    "id": 231
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL5minMA1",
                    "id": 232
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL5minMA2",
                    "id": 233
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL5minMA3",
                    "id": 234
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL1day",
                    "id": 235
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL1dayMA1",
                    "id": 236
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL1dayMA2",
                    "id": 237
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "VOL1dayMA3",
                    "id": 238
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ARBR1minAR",
                    "id": 239
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ARBR1minBR",
                    "id": 240
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ARBR5minAR",
                    "id": 241
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ARBR5minBR",
                    "id": 242
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ARBR1dayAR",
                    "id": 243
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ARBR1dayBR",
                    "id": 244
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BIAS1minBIAS1",
                    "id": 245
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BIAS1minBIAS2",
                    "id": 246
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BIAS1minBIAS3",
                    "id": 247
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BIAS5minBIAS1",
                    "id": 248
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BIAS5minBIAS2",
                    "id": 249
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BIAS5minBIAS3",
                    "id": 250
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BIAS1dayBIAS1",
                    "id": 251
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BIAS1dayBIAS2",
                    "id": 252
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BIAS1dayBIAS3",
                    "id": 253
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CCI1min",
                    "id": 254
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CCI5min",
                    "id": 255
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CCI1day",
                    "id": 256
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CJBS1minCJBS",
                    "id": 257
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CJBS5minCJBS",
                    "id": 258
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CJBS1dayCJBS",
                    "id": 259
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR1minCR",
                    "id": 260
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR1minMA1",
                    "id": 261
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR1minMA2",
                    "id": 262
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR1minMA3",
                    "id": 263
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR5minCR",
                    "id": 264
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR5minMA1",
                    "id": 265
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR5minMA2",
                    "id": 266
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR5minMA3",
                    "id": 267
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR1dayCR",
                    "id": 268
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR1dayMA1",
                    "id": 269
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR1dayMA2",
                    "id": 270
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CR1dayMA3",
                    "id": 271
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMA1minDDD",
                    "id": 272
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMA1minAMA",
                    "id": 273
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMA5minDDD",
                    "id": 274
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMA5minAMA",
                    "id": 275
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMA1dayDDD",
                    "id": 276
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMA1dayAMA",
                    "id": 277
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI1minPDI",
                    "id": 278
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI1minMDI",
                    "id": 279
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI1minADX",
                    "id": 280
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI1minADXR",
                    "id": 281
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI5minPDI",
                    "id": 282
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI5minMDI",
                    "id": 283
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI5minADX",
                    "id": 284
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI5minADXR",
                    "id": 285
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI1dayPDI",
                    "id": 286
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI1dayMDI",
                    "id": 287
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI1dayADX",
                    "id": 288
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DMI1dayADXR",
                    "id": 289
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KDJ1minK",
                    "id": 290
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KDJ1minD",
                    "id": 291
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KDJ1minJ",
                    "id": 292
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KDJ5minK",
                    "id": 293
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KDJ5minD",
                    "id": 294
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KDJ5minJ",
                    "id": 295
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KDJ1dayK",
                    "id": 296
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KDJ1dayD",
                    "id": 297
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KDJ1dayJ",
                    "id": 298
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MACD1minDIFF",
                    "id": 299
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MACD1minDEA",
                    "id": 300
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MACD1minMACD",
                    "id": 301
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MACD5minDIFF",
                    "id": 302
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MACD5minDEA",
                    "id": 303
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MACD5minMACD",
                    "id": 304
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MACD1dayDIFF",
                    "id": 305
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MACD1dayDEA",
                    "id": 306
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MACD1dayMACD",
                    "id": 307
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "OBV1min",
                    "id": 308
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "OBV5min",
                    "id": 309
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "OBV1day",
                    "id": 310
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PSY1min",
                    "id": 311
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PSY5min",
                    "id": 312
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PSY1day",
                    "id": 313
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RSI1minRSI1",
                    "id": 314
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RSI1minRSI2",
                    "id": 315
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RSI1minRSI3",
                    "id": 316
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RSI5minRSI1",
                    "id": 317
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RSI5minRSI2",
                    "id": 318
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RSI5minRSI3",
                    "id": 319
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RSI1dayRSI1",
                    "id": 320
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RSI1dayRSI2",
                    "id": 321
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RSI1dayRSI3",
                    "id": 322
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WR1minWR1",
                    "id": 323
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WR1minWR2",
                    "id": 324
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WR5minWR1",
                    "id": 325
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WR5minWR2",
                    "id": 326
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WR1dayWR1",
                    "id": 327
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WR1dayWR2",
                    "id": 328
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDXJinRi",
                    "id": 330
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDX60Ri",
                    "id": 331
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDX5Ri",
                    "id": 332
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDYJinRi",
                    "id": 333
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDY60Ri",
                    "id": 334
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDY5Ri",
                    "id": 335
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DDZJinRi",
                    "id": 336
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LeiXing",
                    "id": 400
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZiLeiXing",
                    "id": 401
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "LeiXingMingCheng",
                    "id": 402
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoLiangDanWei",
                    "id": 403
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "MaBiao",
                    "id": 410
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FJJJLeiXing",
                    "id": 501
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhengTiYiJia",
                    "id": 502
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MYiJia",
                    "id": 551
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MShiShiJingZhi",
                    "id": 552
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MShangZheXuZhang",
                    "id": 553
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MXiaZheXuDie",
                    "id": 554
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "YinHanShouYi",
                    "id": 511
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiaGeGangGan",
                    "id": 512
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "PinZhongObj",
                    "id": 601
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "BaoGaoQi",
                    "id": 602
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ShangShiRiQi",
                    "id": 603
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MeiGuShouYi",
                    "id": 604
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MeiGuJingZiChan",
                    "id": 605
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JingZiChanShouYiLv",
                    "id": 606
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MeiGuJingYingXianJin",
                    "id": 607
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MeiGuGongJiJin",
                    "id": 608
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MeiGuWeiFenPei",
                    "id": 609
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "GuDongQuanYiBi",
                    "id": 610
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JingLiRunTongBi",
                    "id": 611
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhuYingShouRuTongBi",
                    "id": 612
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "XiaoShouMaoLiLv",
                    "id": 613
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TiaoZhengMeiGuJingZi",
                    "id": 614
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongZiChan",
                    "id": 615
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LiuDongZiChan",
                    "id": 616
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "GuDingZiChan",
                    "id": 617
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WuXingZiChan",
                    "id": 618
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LiuDongFuZhai",
                    "id": 619
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChangQiFuZhai",
                    "id": 620
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongFuZhai",
                    "id": 621
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "GuDongQuanYi",
                    "id": 622
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZiBenGongJiJin",
                    "id": 623
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JingYingXianJinLiuLiang",
                    "id": 624
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TouZiXianJinLiuLiang",
                    "id": 625
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChouZiXianJinLiuLiang",
                    "id": 626
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "XianJinZengJiaE",
                    "id": 627
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhuYingShouRu",
                    "id": 628
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhuYingLiRun",
                    "id": 629
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "YingYeLiRun",
                    "id": 630
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TouZiShouYi",
                    "id": 631
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "YingYeWaiShouZhi",
                    "id": 632
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LiRunZongE",
                    "id": 633
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JingLiRun",
                    "id": 634
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiFenPeiLiRun",
                    "id": 635
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongGuBen",
                    "id": 636
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WuXianShouGuHeJi",
                    "id": 637
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LiuTongAGu",
                    "id": 638
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LiuTongBGu",
                    "id": 639
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JingWaiShangShiGu",
                    "id": 640
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "QiTaLiuTongGu",
                    "id": 641
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "XianShouGuHeJi",
                    "id": 642
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "GuoJiaChiGu",
                    "id": 643
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "GuoYouFaRenGu",
                    "id": 644
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JingNeiFaRenGu",
                    "id": 645
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JingNeiZiRanRenGu",
                    "id": 646
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "QiTaFaQiRenGu",
                    "id": 647
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MuJiFaRenGu",
                    "id": 648
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JingWaiFaRenGu",
                    "id": 649
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JingWaiZiRanRenGu",
                    "id": 650
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "YouXianGuHuoQiTa",
                    "id": 651
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRu",
                    "id": 700
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChu",
                    "id": 701
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiRuZhongDanBiLi",
                    "id": 702
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiRuDaDanBiLi",
                    "id": 703
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiRuTeDaDanBiLi",
                    "id": 704
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiChuZhongDanBiLi",
                    "id": 705
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiChuDaDanBiLi",
                    "id": 706
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiChuTeDaDanBiLi",
                    "id": 707
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianMaiRu",
                    "id": 708
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianMaiChu",
                    "id": 709
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianChiHuo",
                    "id": 710
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianTuHuo",
                    "id": 711
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BiShi",
                    "id": 801
                },
                {
                    "rule": "optional",
                    "type": "LingZhangGuShuJu",
                    "name": "LingZhangGu",
                    "id": 901
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChiCang",
                    "id": 1001
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZengCang",
                    "id": 1002
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiZeng",
                    "id": 1003
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JieSuanJia",
                    "id": 1004
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuoRiJieSuanJia",
                    "id": 1005
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KaiPing",
                    "id": 1006
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JieSuanZhangDie",
                    "id": 1007
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JieSuanZhangFu",
                    "id": 1008
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RongZiMaiRuE",
                    "id": 1009
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RongZiRongQuanBiaoJi",
                    "id": 1010
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZiJinJingE",
                    "id": 1011
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JingNeiZongShiZhi",
                    "id": 1012
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "GongXianDianShu",
                    "id": 1013
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "HangYe",
                    "id": 1014
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu1",
                    "id": 1015
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu2",
                    "id": 1016
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu3",
                    "id": 1017
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu4",
                    "id": 1018
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu5",
                    "id": 1019
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu6",
                    "id": 1020
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu7",
                    "id": 1021
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu8",
                    "id": 1022
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu9",
                    "id": 1023
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu10",
                    "id": 1024
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu1",
                    "id": 1025
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu2",
                    "id": 1026
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu3",
                    "id": 1027
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu4",
                    "id": 1028
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu5",
                    "id": 1029
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu6",
                    "id": 1030
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu7",
                    "id": 1031
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu8",
                    "id": 1032
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu9",
                    "id": 1033
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu10",
                    "id": 1034
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiFouGuanZhu",
                    "id": 1100
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "XuHao",
                    "id": 1101
                }
            ]
        },
        {
            "name": "ZhiBiaoShuChu",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ZBShuJu",
                    "name": "ShuJu",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "ZBShuXing",
                    "name": "ShuXing",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "ZBHuiTu",
                    "name": "HuiTu",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "name": "ZBShuJu",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "ShiJian",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "int64",
                            "name": "JieGuo",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "ZBShuXing",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "MingCheng",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "YanSe",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "SXLeiXing",
                            "name": "LeiXing",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "KuanDu",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "JingDu",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "DuiQi",
                            "id": 6
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "ShuXing",
                            "id": 7
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "YiDong",
                            "id": 8
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "CengCi",
                            "id": 9
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "BianLiangWeiZhi",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "KuoZhanShuXing",
                            "id": 11
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "YouXiaoWeiZhi",
                            "id": 12
                        }
                    ],
                    "enums": [
                        {
                            "name": "SXLeiXing",
                            "values": [
                                {
                                    "name": "TYPE_TEMP_EXPRESION",
                                    "id": 0
                                },
                                {
                                    "name": "TYPE_CURV_LINE",
                                    "id": 1
                                },
                                {
                                    "name": "TYPE_STICK_LINE",
                                    "id": 2
                                },
                                {
                                    "name": "TYPE_COLORSTICK_LINE",
                                    "id": 3
                                },
                                {
                                    "name": "TYPE_VOLSTICK_LINE",
                                    "id": 4
                                },
                                {
                                    "name": "TYPE_LINESTICK_LINE",
                                    "id": 5
                                },
                                {
                                    "name": "TYPE_CROSS_DOT",
                                    "id": 6
                                },
                                {
                                    "name": "TYPE_CIRCLE_DOT",
                                    "id": 7
                                },
                                {
                                    "name": "TYPE_POINT_DOT",
                                    "id": 8
                                },
                                {
                                    "name": "TYPE_STICK3D_LINE",
                                    "id": 9
                                },
                                {
                                    "name": "TYPE_COLOR3D_LINE",
                                    "id": 10
                                },
                                {
                                    "name": "TYPE_DOT_DOT",
                                    "id": 11
                                },
                                {
                                    "name": "TYPE_DASH_DOT",
                                    "id": 12
                                },
                                {
                                    "name": "TYPE_PERCENT_BAR",
                                    "id": 13
                                },
                                {
                                    "name": "TYPE_ENTER_LONG",
                                    "id": 100
                                },
                                {
                                    "name": "TYPE_EXIT_LONG",
                                    "id": 101
                                },
                                {
                                    "name": "TYPE_ENTER_SHORT",
                                    "id": 102
                                },
                                {
                                    "name": "TYPE_EXIT_SHORT",
                                    "id": 103
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "ZBHuiTu",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "HTLeiXing",
                            "name": "LeiXing",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "KuanDu",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "ShuXing",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "ShangCiJiSuan",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "YanSe",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "ZBShuXing.SXLeiXing",
                            "name": "ShuChuLeiXing",
                            "id": 6
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "ShuChuShuXing",
                            "id": 7
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "ShuChuKuoZhanShuXing",
                            "id": 8
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "WenBen",
                            "id": 9
                        },
                        {
                            "rule": "repeated",
                            "type": "HTShuJu",
                            "name": "ShuJu",
                            "id": 10
                        }
                    ],
                    "messages": [
                        {
                            "name": "HTShuJu",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "int64",
                                    "name": "WeiZhi",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int64",
                                    "name": "JiaGe",
                                    "id": 2
                                },
                                {
                                    "rule": "required",
                                    "type": "int64",
                                    "name": "CanShu",
                                    "id": 3
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "HTLeiXing",
                            "values": [
                                {
                                    "name": "TYPE_NOLINE",
                                    "id": 0
                                },
                                {
                                    "name": "TYPE_POLYLINE",
                                    "id": 1
                                },
                                {
                                    "name": "TYPE_LINE",
                                    "id": 2
                                },
                                {
                                    "name": "TYPE_STICKLINE",
                                    "id": 3
                                },
                                {
                                    "name": "TYPE_TEXT",
                                    "id": 4
                                },
                                {
                                    "name": "TYPE_ICON",
                                    "id": 5
                                },
                                {
                                    "name": "TYPE_TIP_TEXT",
                                    "id": 6
                                },
                                {
                                    "name": "TYPE_BACK_GRD",
                                    "id": 7
                                },
                                {
                                    "name": "TYPE_BACK_GRDLAST",
                                    "id": 8
                                },
                                {
                                    "name": "TYPE_DRAWBMP",
                                    "id": 9
                                },
                                {
                                    "name": "TYPE_VERTLINE",
                                    "id": 10
                                },
                                {
                                    "name": "TYPE_TEXTABS",
                                    "id": 11
                                },
                                {
                                    "name": "TYPE_TEXTREL",
                                    "id": 12
                                },
                                {
                                    "name": "TYPE_RECTABS",
                                    "id": 13
                                },
                                {
                                    "name": "TYPE_RECTREL",
                                    "id": 14
                                },
                                {
                                    "name": "TYPE_FLAGTEXT",
                                    "id": 15
                                },
                                {
                                    "name": "TYPE_MOVETEXT",
                                    "id": 16
                                },
                                {
                                    "name": "TYPE_HORILINE",
                                    "id": 17
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ZhiBiaoShuXingShuChu",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ZhiBiaoShuChu.ZBShuXing",
                    "name": "ShuChu",
                    "id": 1
                }
            ]
        },
        {
            "name": "ZhiBiaoHuiTuShuChu",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ZhiBiaoShuChu.ZBHuiTu",
                    "name": "ShuChu",
                    "id": 1
                }
            ]
        },
        {
            "name": "ZhiBiao",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "MingCheng",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "MiaoShu",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "YongFa",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "CanShuJingLing",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "JianYiZu",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "WenBen",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "ZBLeiXing",
                    "name": "LeiXing",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "ZBWenBenLeiXing",
                    "name": "WenBenLeiXing",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BanBen",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShuXing",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MoRenLeiXing",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ZiJieMa",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "ChangYong",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "ZiDingYi",
                    "id": 15
                },
                {
                    "rule": "repeated",
                    "type": "int64",
                    "name": "EWaiShuJu",
                    "id": 16
                },
                {
                    "rule": "repeated",
                    "type": "ZBCanShu",
                    "name": "CanShu",
                    "id": 17
                },
                {
                    "rule": "repeated",
                    "type": "ZBShuChu",
                    "name": "ShuChu",
                    "id": 18
                }
            ],
            "messages": [
                {
                    "name": "ZBShuChu",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "MingCheng",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "ZhiBiaoShuChu.ZBShuXing.SXLeiXing",
                            "name": "LeiXing",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "YiDong",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "ShuXing",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "YanSe",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "BianLiangWeiZhi",
                            "id": 6
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "KuoZhanShuXing",
                            "id": 7
                        }
                    ]
                },
                {
                    "name": "ZBCanShu",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "MingCheng",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "MoRenZhi",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "ZuiDaZhi",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "ZuiXiaoZhi",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "BuChang",
                            "id": 5
                        }
                    ]
                }
            ],
            "enums": [
                {
                    "name": "ZBLeiXing",
                    "values": [
                        {
                            "name": "TYPE_EXPLORER",
                            "id": 0
                        },
                        {
                            "name": "TYPE_SYSTEST",
                            "id": 1
                        },
                        {
                            "name": "TYPE_MAIN_PICT",
                            "id": 2
                        },
                        {
                            "name": "TYPE_MAIN_ADD",
                            "id": 3
                        },
                        {
                            "name": "TYPE_SUB_PICT",
                            "id": 4
                        },
                        {
                            "name": "TYPE_PAINT_IT",
                            "id": 5
                        },
                        {
                            "name": "TYPE_TEMP_INDI",
                            "id": 6
                        },
                        {
                            "name": "TYPE_TECHNIQUE",
                            "id": 7
                        },
                        {
                            "name": "TYPE_UNKNOWN",
                            "id": 8
                        }
                    ]
                },
                {
                    "name": "ZBWenBenLeiXing",
                    "values": [
                        {
                            "name": "TEXTTYPE_FORMULA",
                            "id": 0
                        },
                        {
                            "name": "TEXTTYPE_LUA",
                            "id": 1
                        },
                        {
                            "name": "TEXTTYPE_UNKNOWN",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "BlockObjOutput",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                }
            ]
        },
        {
            "name": "BlockPropOutput",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "name",
                    "id": 1
                }
            ]
        },
        {
            "name": "FenBiChengJiao",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoJia",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoLiang",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoE",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoDanBiShu",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiFouZhuDongXingMaiDan",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiMaiFangXiang",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DanCiChengJiaoLiang",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DanCiChengJiaoE",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DanCiChengJiaoDanBiShu",
                    "id": 11
                }
            ]
        },
        {
            "name": "GeGuDongTai",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuiXinJia",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KaiPanJia",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuiGaoJia",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuiDiJia",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuoShou",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JunJia",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhangDie",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhangFu",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhenFu",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoLiang",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "XianShou",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoE",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongChengJiaoBiShu",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MeiBiChengJiaoGuShu",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "HuanShou",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LiangBi",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "NeiPan",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WaiPan",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongMaiRu",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongMaiChu",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongMaiRuJunJia",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongMaiChuJunJia",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhangTing",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DieTing",
                    "id": 26
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FenZhongZhangFu1",
                    "id": 27
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FenZhongZhangFu2",
                    "id": 28
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FenZhongZhangFu3",
                    "id": 29
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FenZhongZhangFu4",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FenZhongZhangFu5",
                    "id": 31
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia1",
                    "id": 32
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang1",
                    "id": 33
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia2",
                    "id": 34
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang2",
                    "id": 35
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia3",
                    "id": 36
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang3",
                    "id": 37
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia4",
                    "id": 38
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang4",
                    "id": 39
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia5",
                    "id": 40
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang5",
                    "id": 41
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia1",
                    "id": 42
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang1",
                    "id": 43
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia2",
                    "id": 44
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang2",
                    "id": 45
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia3",
                    "id": 46
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang3",
                    "id": 47
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia4",
                    "id": 48
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang4",
                    "id": 49
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia5",
                    "id": 50
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang5",
                    "id": 51
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiBi",
                    "id": 52
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiCha",
                    "id": 53
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiaQuanPingJunWeiTuoMaiRuJia",
                    "id": 54
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuZongLiang",
                    "id": 55
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiaQuanPingJunWeiTuoMaiChuJia",
                    "id": 56
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuZongLiang",
                    "id": 57
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia1",
                    "id": 58
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia2",
                    "id": 59
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia3",
                    "id": 60
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia4",
                    "id": 61
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia5",
                    "id": 62
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang1",
                    "id": 63
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang2",
                    "id": 64
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang3",
                    "id": 65
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang4",
                    "id": 66
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang5",
                    "id": 67
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia1",
                    "id": 68
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia2",
                    "id": 69
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia3",
                    "id": 70
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia4",
                    "id": 71
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia5",
                    "id": 72
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang1",
                    "id": 73
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang2",
                    "id": 74
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang3",
                    "id": 75
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang4",
                    "id": 76
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang5",
                    "id": 77
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChiCang",
                    "id": 78
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZengCang",
                    "id": 79
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiZeng",
                    "id": 80
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JieSuanJia",
                    "id": 81
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuoRiJieSuanJia",
                    "id": 82
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KaiPing",
                    "id": 83
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JieSuanZhangDie",
                    "id": 84
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JieSuanZhangFu",
                    "id": 85
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu1",
                    "id": 86
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu2",
                    "id": 87
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu3",
                    "id": 88
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu4",
                    "id": 89
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu5",
                    "id": 90
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu6",
                    "id": 91
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu7",
                    "id": 92
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu8",
                    "id": 93
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu9",
                    "id": 94
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiRu10",
                    "id": 95
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu1",
                    "id": 96
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu2",
                    "id": 97
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu3",
                    "id": 98
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu4",
                    "id": 99
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu5",
                    "id": 100
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu6",
                    "id": 101
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu7",
                    "id": 102
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu8",
                    "id": 103
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu9",
                    "id": 104
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PanKouBianHuaMaiChu10",
                    "id": 105
                }
            ]
        },
        {
            "name": "MaiMaiPan",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia1",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang1",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia2",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang2",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia3",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang3",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia4",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang4",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuJia5",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuLiang5",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia1",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang1",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia2",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang2",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia3",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang3",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia4",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang4",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuJia5",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuLiang5",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiBi",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiCha",
                    "id": 24
                }
            ]
        },
        {
            "name": "KuoZhanMaiMaiPan",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiaQuanPingJunWeiTuoMaiRuJia",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuZongLiang",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiaQuanPingJunWeiTuoMaiChuJia",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuZongLiang",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia1",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia2",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia3",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia4",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuJia5",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang1",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang2",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang3",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang4",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiRuLiang5",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia1",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia2",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia3",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia4",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuJia5",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang1",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang2",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang3",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang4",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KuoZhanMaiChuLiang5",
                    "id": 26
                }
            ]
        },
        {
            "name": "QuanMaiMaiPan",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "MaiMaiBiao",
                    "name": "WeiMaiRuPan",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "MaiMaiBiao",
                    "name": "WeiMaiChuPan",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "name": "MaiMaiBiao",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "WeiZhi",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "Jia",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "Liang",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "DanShu",
                            "id": 4
                        }
                    ]
                }
            ]
        },
        {
            "name": "WeiTuoDuiLie",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "WeiTuo",
                    "name": "MaiRuDuiLie",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "WeiTuo",
                    "name": "MaiChuDuiLie",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "name": "WeiTuo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "Jia",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "BiShu",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "int64",
                            "name": "Liang",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ZongLiang",
                            "id": 4
                        }
                    ]
                }
            ]
        },
        {
            "name": "Level2TongJi",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRu",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChu",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiRuZhongDanBiLi",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiRuDaDanBiLi",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiRuTeDaDanBiLi",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiChuZhongDanBiLi",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiChuDaDanBiLi",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiChuTeDaDanBiLi",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianMaiRu",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianMaiChu",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianChiHuo",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianTuHuo",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoLiang",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoE",
                    "id": 16
                }
            ]
        },
        {
            "name": "DynaMMP",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "DynaMaiMaiPrice",
                    "name": "Rows",
                    "id": 1
                }
            ]
        },
        {
            "name": "DynaMaiMaiPrice",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiaGe",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Liang",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChaZhi",
                    "id": 3
                }
            ]
        },
        {
            "name": "DynaMaiMaiZongLiang",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuZongLiang",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuZongLiang",
                    "id": 3
                }
            ]
        },
        {
            "name": "DynaFenshiStatus",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "IndexStatuc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "GeGuDongTai",
                    "name": "DataStatus",
                    "id": 3
                }
            ]
        },
        {
            "name": "KXian",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KaiPanJia",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuiGaoJia",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuiDiJia",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShouPanJia",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoLiang",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoE",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoBiShu",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShangZhangJiaShu",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "XiaDieJiaShu",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChiCang",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZengCang",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZengLiang",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JieSuanJia",
                    "id": 14
                }
            ]
        },
        {
            "name": "FenShi",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoJia",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoLiang",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoE",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JunJia",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LingXianZhiBiao",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuoKongXian",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRuZongLiang",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChuZongLiang",
                    "id": 9
                }
            ]
        },
        {
            "name": "FenShiLishi",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "FenShi",
                    "name": "Rows",
                    "id": 1
                }
            ]
        },
        {
            "name": "DynaAlib",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ID",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "Objs",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "DynaAlibObj",
                    "name": "DAObjs",
                    "id": 4
                }
            ]
        },
        {
            "name": "DynaAlibObj",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "Objs",
                    "id": 1
                }
            ]
        },
        {
            "name": "BackUpState",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Market",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BackUpTime",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BackUpCloseStatus",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CloseTime",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CloseStatus",
                    "id": 5
                }
            ]
        },
        {
            "name": "LingxianDuokongZhibiao",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LingXianZhiBiao",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuoKongXian",
                    "id": 3
                }
            ]
        },
        {
            "name": "LingxianDuokongZhibiaoStatus",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "JiaoYiRiQi",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "IndexStatuc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "LingxianDuokongZhibiao",
                    "name": "DataStatus",
                    "id": 3
                }
            ]
        },
        {
            "name": "ZhubiDangri",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuiXinJia",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoLiang",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhubiId",
                    "id": 5
                }
            ]
        },
        {
            "name": "QuoteDyna",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Time",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "LastClose",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "High",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Open",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Low",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "New",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Volume",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Amount",
                    "id": 8
                }
            ]
        },
        {
            "name": "QuoteDynaSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "GeGuDongTai",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "QuoteDynaOutput",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "QuoteDynaSingle",
                    "name": "Results",
                    "id": 1
                }
            ]
        },
        {
            "name": "QuoteKline",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Time",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "High",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Open",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Low",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Close",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Volume",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Amount",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "TickCount",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Advance",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Decline",
                    "id": 10
                }
            ]
        },
        {
            "name": "QuoteKlineSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "KXian",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "QuoteKlineOutput",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "QuoteKlineSingle",
                    "name": "Results",
                    "id": 1
                }
            ]
        },
        {
            "name": "QuoteTick",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Time",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Price",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Volume",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Amount",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "TickCount",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "BuyPrice",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "BuyVolume",
                    "id": 7
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "SellPrice",
                    "id": 8
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "SellVolume",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Outter",
                    "id": 10
                }
            ]
        },
        {
            "name": "QuoteTickSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FenBiChengJiao",
                    "name": "Data",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "QingPan",
                    "id": 3
                }
            ]
        },
        {
            "name": "QuoteTickOutput",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "QuoteTickSingle",
                    "name": "Results",
                    "id": 1
                }
            ]
        },
        {
            "name": "QuoteMin",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "Time",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Price",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Volume",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "Amount",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "TickCount",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "BuyPrice",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "BuyVolume",
                    "id": 7
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "SellPrice",
                    "id": 8
                },
                {
                    "rule": "repeated",
                    "type": "float",
                    "name": "SellVolume",
                    "id": 9
                }
            ]
        },
        {
            "name": "QuoteMinSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FenShi",
                    "name": "Data",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RiQi",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiQu",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiHeJingJiaDianShu",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "JiaoYiShiJianDuanJieGou",
                    "name": "JiaoYiShiJianDuan",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuoShou",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "QingPan",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuoRiJieSuanJia",
                    "id": 9
                },
                {
                    "rule": "repeated",
                    "type": "FenShiLishi",
                    "name": "LiShiFenShi",
                    "id": 10
                }
            ],
            "messages": [
                {
                    "name": "JiaoYiShiJianDuanJieGou",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "KaiShiShiJian",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "JieShuShiJian",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "KaiShiRiQi",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "JieShuRiQi",
                            "id": 4
                        }
                    ]
                }
            ]
        },
        {
            "name": "QuoteMinOutput",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "QuoteMinSingle",
                    "name": "Results",
                    "id": 1
                }
            ]
        },
        {
            "name": "QuoteBOrder",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiRu",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WeiTuoMaiChu",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiRuZhongDanBiLi",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiRuDaDanBiLi",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiRuTeDaDanBiLi",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiChuZhongDanBiLi",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiChuDaDanBiLi",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaiChuTeDaDanBiLi",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianMaiRu",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianMaiChu",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianChiHuo",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DuanXianTuHuo",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanLiuRuJinE",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanLiuChuJinE",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanJingLiuRuJinE",
                    "id": 16
                }
            ]
        },
        {
            "name": "QuoteBOrderSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "QuoteBOrder",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "QuoteBOrderOutput",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "QuoteBOrderSingle",
                    "name": "Results",
                    "id": 1
                }
            ]
        },
        {
            "name": "QuoteDivid",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChuQuanChengShu",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChuQuanPianYi",
                    "id": 3
                }
            ]
        },
        {
            "name": "QuoteDividSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "QuoteDivid",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "QuoteDividOutput",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "QuoteDividSingle",
                    "name": "Results",
                    "id": 1
                }
            ]
        },
        {
            "name": "QuoteDynaMinSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "GeGuDongTai",
                    "name": "Data",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "QingPan",
                    "id": 3
                }
            ]
        },
        {
            "name": "QuoteReportSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ZhubiDangri",
                    "name": "Data",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "QingPan",
                    "id": 3
                }
            ]
        },
        {
            "name": "QuoteQueueSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "WeiTuoDuiLie",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "QuoteHistoryMinSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FenShiLishi",
                    "name": "Data",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZuoShou",
                    "id": 3
                }
            ]
        },
        {
            "name": "QuoteFundFlow",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanLiuRuJinE",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanLiuChuJinE",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DaDanJingLiuRuJinE",
                    "id": 4
                }
            ]
        },
        {
            "name": "QuoteFundFlowSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "QuoteFundFlow",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "QuoteQueueMinSingle",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "WeiTuoDuiLie",
                    "name": "Data",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "QingPan",
                    "id": 3
                }
            ]
        },
        {
            "name": "JPBShuJu",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "DaiMa",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "MingCheng",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ShuXing",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "KuoZhan",
                    "id": 4
                }
            ]
        },
        {
            "name": "JPBShuChu",
            "fields": [
                {
                    "rule": "required",
                    "type": "JPBLeiXing",
                    "name": "LeiXing",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "JPBShuJu",
                    "name": "ShuJu",
                    "id": 2
                }
            ]
        },
        {
            "name": "JianPanBaoShuChu",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "GuanJianZi",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "JPBShuChu",
                    "name": "JieGuo",
                    "id": 2
                }
            ]
        },
        {
            "name": "Token",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "result",
                    "id": 1,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "token",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "version",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "create_time",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "refresh_time",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "duration",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "appid",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "device",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "uid",
                    "id": 9
                }
            ]
        },
        {
            "name": "PaiXu",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Value",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Text",
                    "id": 3
                }
            ]
        },
        {
            "name": "PaiMing",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Value",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Text",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MingCi",
                    "id": 4
                }
            ]
        },
        {
            "name": "NewsInfoValue",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "ver",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "act",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "uint64",
                    "name": "newsID",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "newsTitle",
                    "id": 4
                }
            ]
        },
        {
            "name": "XinWenXinXiEx",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "source",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "context",
                    "id": 4
                }
            ]
        },
        {
            "name": "XinWenXinXiOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "TotalCount",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "XinWenXinXiEx",
                    "name": "Data",
                    "id": 3
                }
            ]
        },
        {
            "name": "XinWenXinXiZhongXin",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "context",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "source",
                    "id": 4
                }
            ]
        },
        {
            "name": "XinWenXinXiZhongXinOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "TotalCount",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "XinWenXinXiZhongXin",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "GongGaoXinXi",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "source",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "context",
                    "id": 4
                }
            ]
        },
        {
            "name": "GongGaoXinXiOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "TotalCount",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "GongGaoXinXi",
                    "name": "Data",
                    "id": 3
                }
            ]
        },
        {
            "name": "GongGaoXinXiZhongXin",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "context",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "source",
                    "id": 4
                }
            ]
        },
        {
            "name": "GongGaoXinXiZhongXinOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "TotalCount",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "GongGaoXinXiZhongXin",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "YiZhiXinYeJiYuCe",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "baoGaoRiQi",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "yuCeNianDu",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jingLiRun",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "meiGuShouYi",
                    "id": 4
                }
            ]
        },
        {
            "name": "YiZhiXinYeJiYuCeOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "YiZhiXinYeJiYuCe",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "YiZhiXinTouZiPinJi",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "pinJiRiQi",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zhengTiPinJi",
                    "id": 2
                }
            ]
        },
        {
            "name": "YiZhiXinTouZiPinJiOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "YiZhiXinTouZiPinJi",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "GeGuYeJiYuCe",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "yuCeNianDu",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "meiGuShouYi",
                    "id": 2
                }
            ]
        },
        {
            "name": "GeGuYeJiYuCeData",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "yanJiuJiGou",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "baoGaoRiQi",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "GeGuYeJiYuCe",
                    "name": "data",
                    "id": 3
                }
            ]
        },
        {
            "name": "GeGuYeJiYuCeOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "GeGuYeJiYuCeData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "GeGuTouZiYanBao",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "baoGaoRiQi",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "yanJiuJiGou",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "pinJiLeiBie",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "pinJiBianDong",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "yanBaoBiaoTi",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "yanBaoNeiRong",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "yanJiuZuoZhe",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "muBiaoJiaGe",
                    "id": 8
                }
            ]
        },
        {
            "name": "GeGuTouZiYanBaoOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "GeGuTouZiYanBao",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "TongJiApp",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChengJiaoE",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LiuTongShiZhi",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZongShiZhi",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "ZhangDiePingShuJu",
                    "name": "ZhangDiePing",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "LingZhangGuShuJu",
                    "name": "LingZhangGu",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TingPaiJiaShu",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "ZhangTingDieTingShuJu",
                    "name": "ZhangTingDieTing",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "GuPiaoGeShu",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PingJunJingTaiShiYingLv",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZiJinJingE",
                    "id": 10
                },
                {
                    "rule": "repeated",
                    "type": "ZiJinLiuXiangShuJu",
                    "name": "ZiJinLiuXiang",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JunJia",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiaQuanJunJia",
                    "id": 13
                }
            ],
            "messages": [
                {
                    "name": "LingZhangGuShuJu",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "Obj",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "ZhongWenJianCheng",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ZuiXinJia",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ZhangFu",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "ZhangDiePingShuJu",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ShangZhangJiaShu",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "XiaDieJiaShu",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "PingPanJiaShu",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "ZhangTingDieTingShuJu",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ZhangTingJiaShu",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "DieTingJiaShu",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "ZiJinLiuXiangShuJu",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ShiJian",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ZiJinJingE",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "DXSpirit",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Obj",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "TongZhi",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShuJu",
                    "id": 4
                }
            ]
        },
        {
            "name": "DXSpiritStat",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "HjfsTotal",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "KsftTotal",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "GttsTotal",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JsxdTotal",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DbmrTotal",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DbmrStatistics",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DbmcTotal",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DbmcStatistics",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FztbTotal",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FdtbTotal",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DkztTotal",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DkdtTotal",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "YdmcPTotal",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "YdmrPTotal",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LszsTotal",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DyzsTotal",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JgmrgdTotal",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JgmcgdTotal",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DcjmrdTotal",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DcjmcdTotal",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FdmrgdTotal",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FdmcgdTotal",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MrcdTotal",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MccdTotal",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MrxdTotal",
                    "id": 26
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "McxdTotal",
                    "id": 27
                }
            ]
        },
        {
            "name": "F10CpbdZxzbOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "shiq",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgsy",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgjzc",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zgb",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ltag",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jzcsyl",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgxjl",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mggjj",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgwfplr",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zylrtbzz",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jlrtbzz",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fpyan",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cq",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cym",
                    "id": 16
                }
            ]
        },
        {
            "name": "F10CpbdKpqk",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gdhs",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "rjcltg",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tcsdrjcltg",
                    "id": 4
                }
            ]
        },
        {
            "name": "CpbdCjhbData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cjl",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cjje",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdlx",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zdz",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "yybmc",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mlje",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mcje",
                    "id": 7
                }
            ]
        },
        {
            "name": "F10CpbdCjhb",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "CpbdCjhbData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundCpbdFbsjjzjzData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "dwjz",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "dwljjz",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundCpbdFbsjjzjz",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundCpbdFbsjjzjzData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundCpbdFbsjjzjzOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCpbdFbsjjzjz",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundCpbdJjfebdqkData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qczfe",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bqzsg",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bqzsh",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qmzfe",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bqjsg",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10FundCpbdJjfebdqk",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundCpbdJjfebdqkData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundCpbdJjfebdqkOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCpbdJjfebdqk",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundCpbdJjgbjbData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bqjsy",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qmjzc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qmfejz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gpsz",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqsz",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gpbl",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqbl",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "hjsz",
                    "id": 8
                }
            ]
        },
        {
            "name": "F10FundCpbdJjgbjb",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundCpbdJjgbjbData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundCpbdJjgbjbOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCpbdJjgbjb",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundCpbdJjjzbxData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "qj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jzzzl",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bjjzsyl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cz",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10FundCpbdJjjzbx",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundCpbdJjjzbxData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundCpbdJjjzbxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCpbdJjjzbx",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundCpbdJjxxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjtzmb",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxsytz",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ywbjjz",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10FundCpbdZfeOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "gxrq",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjjc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjlx",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ggrq",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zfe",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ltfe",
                    "id": 7
                }
            ]
        },
        {
            "name": "FundCwsjJyyjData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dw",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "srhj",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gpcjsr",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqcjsr",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqlxsr",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cklxsr",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gxsr",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fyhj",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jjglf",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jjtgf",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jjjsy",
                    "id": 11
                }
            ]
        },
        {
            "name": "F10FundCwsjJyyj",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundCwsjJyyjData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundCwsjJyyjOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCwsjJyyj",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundCwsjZcfzData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dw",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yhck",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qsbfj",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jybzj",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gptzsz",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqtzsz",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yslx",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yssgk",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zczj",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yfjyqsk",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yfjjglf",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yfjjtgf",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yfshk",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fzzj",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ssjj",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cyrqyhj",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fzjqyhj",
                    "id": 17
                }
            ]
        },
        {
            "name": "F10FundCwsjZcfz",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundCwsjZcfzData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundCwsjZcfzOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCwsjZcfz",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundCwsjZycwzbData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bqjsy",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "kgfpsy",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mfkgfpsy",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qmzcjz",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qmfejz",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jqpjjzsyl",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mfjzzzl",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mfljjzzzl",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mfjsy",
                    "id": 9
                }
            ]
        },
        {
            "name": "F10FundCwsjZycwzb",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundCwsjZycwzbData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundCwsjZycwzbOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCwsjZycwzb",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundCyrHshjgData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cyrhs",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "hjfe",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jgcyfe",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jgcybl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "grcyfe",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "grcybl",
                    "id": 6
                }
            ]
        },
        {
            "name": "F10FundCyrHshjg",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundCyrHshjgData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundCyrHshjgOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCyrHshjg",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundFefhFbsjjcyrjgData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zfe",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ltfe",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fqrcylt",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gzcy",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "wltfe",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fqrcywlt",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bdyy",
                    "id": 7
                }
            ]
        },
        {
            "name": "F10FundFefhFbsjjcyrjg",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "bdrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundFefhFbsjjcyrjgData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundFefhFbsjjcyrjgOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundFefhFbsjjcyrjg",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundFefhFhData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dwfh",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cffe",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "qydjr",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cxr",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hlffr",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10FundFefhFh",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "ggrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundFefhFhData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundFefhFhOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundFefhFh",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundFefhKfsjjjdfebdData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qcze",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bqsg",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cfzj",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bqsh",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qmze",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10FundFefhKfsjjjdfebd",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "bbrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundFefhKfsjjjdfebdData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundFefhKfsjjjdfebdOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundFefhKfsjjjdfebd",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundGpmxBqzdmcgpData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gpdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gpjc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ljmcjz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zjzbl",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10FundGpmxBqzdmcgp",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundGpmxBqzdmcgpData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundGpmxBqzdmcgpOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundGpmxBqzdmcgp",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundGpmxBqzdmrgpData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gpdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gpjc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ljmrjz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zjzbl",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10FundGpmxBqzdmrgp",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundGpmxBqzdmrgpData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundGpmxBqzdmrgpOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundGpmxBqzdmrgp",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundGpmxQbcgData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gpdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gpjc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gpsl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sz",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zjzbl",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10FundGpmxQbcg",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundGpmxQbcgData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundGpmxQbcgOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundGpmxQbcg",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundHgzwData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lb",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "nr",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zq",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10FundHgzw",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundHgzwData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundHgzwOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundHgzw",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundHytzData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hydm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hymc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zjzbl",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10FundHytz",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundHytzData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundHytzOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundHytz",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundHytzQdiiData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hydm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hymc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zjzbl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bz",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10FundHytzQdii",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundHytzQdiiData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundHytzQdiiOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundHytzQdii",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundJbxxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dsymbol",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjqc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjmc",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jjlx",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tzlx",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jylb",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxrq",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "clrq",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jzrq",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "glgsqc",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzmb",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzfw",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxsytz",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tgrmc",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "yjbjjz",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "isauto",
                    "id": 17
                }
            ]
        },
        {
            "name": "F10FundFbsjjgkOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjqc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjjc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjlx",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzlx",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjmz",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxrq",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssrq",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjclr",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjzzr",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjcxq",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjtgr",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "glgs",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "clrq",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bgdz",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zcdz",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fddbr",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "lxdh",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cz",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gswz",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dzyx",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "lssws",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "kjssws",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjyjbjjz",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxsytz",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzmb",
                    "id": 26
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzfw",
                    "id": 27
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzcl",
                    "id": 28
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzln",
                    "id": 29
                }
            ]
        },
        {
            "name": "F10FundKfsjjgkOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjqc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjjc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjlx",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzlx",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjmz",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bz",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxrq",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssrq",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjclr",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjcxq",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjtgr",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "glgs",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "clrq",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bgdz",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zcdz",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fddbr",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "lxdh",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cz",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gswz",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dzyx",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "lssws",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "kjssws",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jjyjbjjz",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxsytz",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzmb",
                    "id": 26
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzfw",
                    "id": 27
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzcl",
                    "id": 28
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzln",
                    "id": 29
                }
            ]
        },
        {
            "name": "FundJlggJjgsggryData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xb",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xl",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zw",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lb",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10FundJlggJjgsggry",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "xm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundJlggJjgsggryData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundJlggJjgsggryOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundJlggJjgsggry",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundJlggJjjlData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xb",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xl",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zw",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "rzkssj",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jl",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10FundJlggJjjl",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "xm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundJlggJjjlData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundJlggJjjlOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundJlggJjjl",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundJyyjData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "qsmc",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "xw",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yj",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gpcjje",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gpcjbl",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqcjje",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqbl",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqhgje",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqhgbl",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qzcjje",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qzbl",
                    "id": 12
                }
            ]
        },
        {
            "name": "F10FundJyyj",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundJyyjData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundJyyjOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundJyyj",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundZccgQsmgpmxData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gpdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gpjc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sz",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zjzb",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tbzjc",
                    "id": 6
                }
            ]
        },
        {
            "name": "F10FundZccgQsmgpmx",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundZccgQsmgpmxData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundZccgQsmgpmxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZccgQsmgpmx",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundZccgQdiiData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gpdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gpjc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sz",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zjzb",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10FundZccgQdii",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundZccgQdiiData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundZccgQdiiOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZccgQdii",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundZqtzTzzhData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqlx",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sz",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bl",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10FundZqtzTzzh",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "bgrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundZqtzTzzhData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundZqtzTzzhOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZqtzTzzh",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundZqtzTzzhQdiiData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xydj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sz",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bz",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10FundZqtzTzzhQdii",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundZqtzTzzhQdiiData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundZqtzTzzhQdiiOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZqtzTzzhQdii",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundZqtzZcmxData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqjc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zytz",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10FundZqtzZcmx",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundZqtzZcmxData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundZqtzZcmxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZqtzZcmx",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundZycyrData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cyrmc",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cyfe",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "szbl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cyzjqk",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10FundZycyr",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundZycyrData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundZycyrOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZycyr",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "FundHbjjxeData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "scdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jynm",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jshsx",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jsgsx",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zshsx",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zsgsx",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "dzhjshsx",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "dzhjsgsx",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "dzhzshsx",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "dzhzsgsx",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cptx",
                    "id": 11
                }
            ]
        },
        {
            "name": "F10FundHbjjxe",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "xerq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "FundHbjjxeData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FundHbjjxeOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FundHbjjxe",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10CwtsLrfpbzy",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dw",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yysr",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yycb",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "glfy",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yyfy",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cwfy",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yylr",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tzsy",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yywszje",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lrze",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jlr",
                    "id": 12
                }
            ]
        },
        {
            "name": "F10CwtsZcfzbzy",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dw",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zzc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ldzc",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "hbzj",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jyxjrzc",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ch",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yszkze",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qtysk",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gdzcje",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "kgcsjrzc",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "wxzc",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "dqjk",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yszk",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yfzk",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ldfz",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cqfz",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zfz",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gdqy",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zbgjj",
                    "id": 20
                }
            ]
        },
        {
            "name": "ZygcData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "lb",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hy",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zysr",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zysrzb",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zysrtbbh",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zycb",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zycbtbbh",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zylr",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mll",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mlltbbh",
                    "id": 10
                }
            ]
        },
        {
            "name": "F10Zygc",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ZygcData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10DstxJjlt",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jjgf",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zzgf",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gflx",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10DstxRzrq",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "rzje",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "rzmre",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "rqyl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "rqye",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "rqmcl",
                    "id": 6
                }
            ]
        },
        {
            "name": "DstxJgccData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cgjs",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cgs",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zltgbl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "type",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10DstxJgcc",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "DstxJgccData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10DstxGdzjc",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gdmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bdfx",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gdlx",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bdsl",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zzgb",
                    "id": 6
                }
            ]
        },
        {
            "name": "F10DstxDzjy",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jg",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "drspj",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zjl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cjl",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cjje",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "mf",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "mf2",
                    "id": 8
                }
            ]
        },
        {
            "name": "F10DstxCgbdqk",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bdr",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bdsl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jj",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jcgs",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "djg",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bdyy",
                    "id": 7
                }
            ]
        },
        {
            "name": "GlcData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zw",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "lb",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "rzsj",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xl",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qmcgs",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xcjzrq",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "xc",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xb",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "csrq",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jl",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "px",
                    "id": 12
                }
            ]
        },
        {
            "name": "F10GlcOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "GlcData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10GlcNdbcqk",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ndbcze",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zgqswdsbcze",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zgqswgjglrybcze",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "dldsjt",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10ZxjbDjdxjllb",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jyxjlr",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jyxjlc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jyxjje",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tzxjlr",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tzxjlc",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tzxjje",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "czxjlr",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "czxjlc",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "czxjje",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "xjjzje",
                    "id": 11
                }
            ]
        },
        {
            "name": "F10GdjcKggdOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "mc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "frdb",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zczb",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "clrq",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jyyw",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "qylx",
                    "id": 7
                }
            ]
        },
        {
            "name": "F10GdjcSjkzrOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "mc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sm",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10GbfhGbbd",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zgb",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yltag",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yltbg",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bdrqgbsm",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zxjg",
                    "id": 6
                }
            ]
        },
        {
            "name": "ZbyzCyqtsszqData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "btzzqdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "btzzqjc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cgsl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zbl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cstzje",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10ZbyzCyqtsszq",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ZbyzCyqtsszqData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "ZbyzCyfssgqData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "scdxmc",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cstzje",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cgsl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zbl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qmzmjz",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10ZbyzCyfssgq",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ZbyzCyfssgqData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10zbyzRzqkzfyss",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "rzlb",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "yarq",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gddh",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zgyxspl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "lgdgqdjr",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sgr",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fajc",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxfs",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxgplx",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zzfx",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxjg",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zcxs",
                    "id": 12
                }
            ]
        },
        {
            "name": "F10ZbyzXmtzMjzjqk",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mjzjze",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bqsyje",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jlsyje",
                    "id": 4
                }
            ]
        },
        {
            "name": "ZbyzXmtzMjzjcnxmData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cnxmmc",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ntrje",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sfbgxm",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sjtrje",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sjsy",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sffhjd",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bgyycxsm",
                    "id": 7
                }
            ]
        },
        {
            "name": "F10ZbyzXmtzMjzjcnxm",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ZbyzXmtzMjzjcnxmData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "ZbyzXmtzMjzjbgxmData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bghxmmc",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ycnxmmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ntrje",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sjtrje",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sjsy",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xmjd",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bgxmqksm",
                    "id": 7
                }
            ]
        },
        {
            "name": "F10ZbyzXmtzMjzjbgxm",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ZbyzXmtzMjzjbgxmData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "ZbyzXmtzFmjzjxmData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xmmc",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "xmje",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xmjd",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xmsyqk",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10ZbyzXmtzFmjzjxm",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ZbyzXmtzFmjzjxmData",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "HydwData",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gpmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ltg",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "pm1",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zzc",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "pm2",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zysr",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "pm3",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgsy",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "pm4",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zgb",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "pm5",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jzc",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "pm6",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jlr",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "pm7",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jzcsyl",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "pm8",
                    "id": 18
                }
            ]
        },
        {
            "name": "F10HydwOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sshy",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zjhhy",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "HydwData",
                    "name": "data",
                    "id": 5
                }
            ]
        },
        {
            "name": "RsrProForecastData",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "enddate",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgsy",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jlr",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jlrtb",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zysr",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zysrtb",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yyyqbhl",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "itnum",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgjzc",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lnzz",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "syl",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sjl",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "peg2",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sxl",
                    "id": 14
                }
            ]
        },
        {
            "name": "F10RsrProForecastOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "RsrProForecastData",
                    "name": "data",
                    "id": 3
                }
            ]
        },
        {
            "name": "RsrInvestRatingData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sjdValue",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mr",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zx",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jc",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mc",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jgzs",
                    "id": 7
                }
            ]
        },
        {
            "name": "F10RsrInvestRatingOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "RsrInvestRatingData",
                    "name": "data",
                    "id": 3
                }
            ]
        },
        {
            "name": "RsrEarnPSForeData",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "endDate",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "pj",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "value",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10RsrEarnPSFore",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "companyName",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "RsrEarnPSForeData",
                    "name": "data",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10RsrResReport",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "companyName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "titles",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "investAdvice",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "psName",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10GsgkOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqlx",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gsdm",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gsmc",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ywqc",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zcdz",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bgdz",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssqy",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sshy",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gswz",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dzxx",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssrq",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zgrq",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxl",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxj",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "srkpj",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sstjr",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zcxs",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "frdb",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dsz",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zjl",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dm",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqdb",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dh",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cz",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "yb",
                    "id": 26
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "kjsws",
                    "id": 27
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zyfw",
                    "id": 28
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gsjs",
                    "id": 29
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dmdh",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dmcz",
                    "id": 31
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dmdzyx",
                    "id": 32
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RegionName",
                    "id": 33
                }
            ]
        },
        {
            "name": "F10CwtsZycwzb",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "kjssjyj",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jbmgsy",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "kchjbmgsy",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tbmgsy",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgjzc",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgwfplr",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mggjj",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "xsmll",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yylrl",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jlrl",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jqjzcsyl",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tbjzcsyl",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "gdqy",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ldbl",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sdbl",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgjyxjll",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bbgbr",
                    "id": 18
                }
            ]
        },
        {
            "name": "F10CwtsZycwzbOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10CwtsZycwzb",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10CwtsXjllbzy",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "xjjzje",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dw",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jyxjlr",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jyxjlc",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jyxjje",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tzxjlr",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tzxjlc",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tzxjje",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "czxjlr",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "czxjlc",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "czxjje",
                    "id": 12
                }
            ]
        },
        {
            "name": "F10CwtsXjllbzyOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10CwtsXjllbzy",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ZxjbDjdcwzb",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jlrhb",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgsy",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "xsjll",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jzcsyl",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgjyxjll",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zysrtb",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jlrtb",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zysrhb",
                    "id": 9
                }
            ]
        },
        {
            "name": "F10ZxjbDjdcwzbOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ZxjbDjdcwzb",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10Zxjbdjdleb",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ssgdsy",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yysr",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yycb",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yysjjfj",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "xsfy",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "glfy",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cwfy",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tzsy",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yylr",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yywsr",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "yywzc",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lrze",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sdsfy",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jlr",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mgzjlr",
                    "id": 16
                }
            ]
        },
        {
            "name": "F10ZxjbdjdlebOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10Zxjbdjdleb",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10GdjcGdhs",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Gdzhs",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Hbzj",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Hbbh",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Rjcg",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Ltgdhs",
                    "id": 6
                }
            ]
        },
        {
            "name": "F10GdjcGdhsOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10GdjcGdhs",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10GdjcGd",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Gdrs",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xh",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Gdmc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Cgs",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Zzgs",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Zjqk",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Gbxz",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Gsdm",
                    "id": 8
                }
            ]
        },
        {
            "name": "F10GdjcSdgd",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10GdjcGd",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10GdjcSdgdOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10GdjcSdgd",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10GdjcSdltgd",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Date",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10GdjcGd",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10GdjcSdltgdOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10GdjcSdltgd",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10GbfhFhkg",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Mgsg",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Mgzz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Mgfh",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Mgp",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Pgjg",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Zfgfsl",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Zfjg",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Gqdjr",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Cqcxr",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Zhjyr",
                    "id": 11
                }
            ]
        },
        {
            "name": "F10GbfhFhkgOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10GbfhFhkg",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10GbfhGbjg",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Date",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Zgb",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Ltgf",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Ltag",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Ltbg",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Lthg",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Qtltgf",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xsltg",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xsltag",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xsltbg",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xslthg",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xsgjcg",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xsgyfrcg",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xsjnfrcg",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xsjnzrrcg",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xsggcg",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xsjwfrcg",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Xsjwzrrcg",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Wltg",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Gjg",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Gyfrg",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Jnfgyfr",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Zpg",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Nbzgg",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Yxg",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Jwfrg",
                    "id": 26
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Qtwltgf",
                    "id": 27
                }
            ]
        },
        {
            "name": "F10GbfhGbjgOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10GbfhGbjg",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10CpbdKpqkOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10CpbdKpqk",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10CpbdCjhbOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10CpbdCjhb",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10CwtsLrfpbzyOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10CwtsLrfpbzy",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10CwtsZcfzbzyOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10CwtsZcfzbzy",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ZygcOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10Zygc",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10DstxJjltOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxJjlt",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10DstxRzrqOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxRzrq",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10DstxJgccOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxJgcc",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10DstxGdzjcOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxGdzjc",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10DstxDzjyOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxDzjy",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10DstxCgbdqkOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxCgbdqk",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10GlcNdbcqkOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10GlcNdbcqk",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ZxjbDjdxjllbOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ZxjbDjdxjllb",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10GbfhGbbdOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10GbfhGbbd",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ZbyzCyqtsszqOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzCyqtsszq",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ZbyzCyfssgqOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzCyfssgq",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10zbyzRzqkzfyssOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10zbyzRzqkzfyss",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ZbyzXmtzMjzjqkOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzXmtzMjzjqk",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ZbyzXmtzMjzjcnxmOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzXmtzMjzjcnxm",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ZbyzXmtzMjzjbgxmOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzXmtzMjzjbgxm",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ZbyzXmtzFmjzjxmOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzXmtzFmjzjxm",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10RsrEarnPSForeOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10RsrEarnPSFore",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10RsrResReportOutPut",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10RsrResReport",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10BondDfzfzfxOutput",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxrmc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxqsr",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxzzr",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqze",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxjg",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssrq",
                    "id": 8
                }
            ]
        },
        {
            "name": "F10BondDfzfzqxxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqjc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqqc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jxqsr",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dqr",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cxqx",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "pmll",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xppz",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jxfs",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lllx",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxcs",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxrsm",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "chfs",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sfms",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ktqdf",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bzqzsl",
                    "id": 16
                }
            ]
        },
        {
            "name": "F10BondFlszzfxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxrq",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hzwh",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxfs",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxdx",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxjg",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxsl",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjjg",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cxfs",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zxpgjg",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xydj",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dbr",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dbrlx",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "xygdpsje",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "wssgrq",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "wszqlggr",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "wszql",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zzfx",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sstjr",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "kzzdjjg",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mjzjze",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fyhj",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mjzjje",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tzjyr",
                    "id": 25
                }
            ]
        },
        {
            "name": "F10BondFlszztkOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ybhstk",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "mjzjtxsm",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10BondFlszzxxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqjc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqmc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqmz",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqqx",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jxqsr",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dqr",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ll",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxpl",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxrsm",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssqsr",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "scssgm",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bzqzsl",
                    "id": 13
                }
            ]
        },
        {
            "name": "F10BondGzxxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "gzqc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqlx",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "nd",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxr",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zfe",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mz",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxjg",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "pmll",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "qx",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jxfs",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lllx",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "qxrq",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dqrq",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xppz",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxcs",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxr2",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "chfs",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sfms",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sl",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ktqdf",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssrq",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zyssgdm",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hgdm7",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hgdm28",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hgdm91",
                    "id": 26
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dfqsrq",
                    "id": 27
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bzqzsl",
                    "id": 28
                }
            ]
        },
        {
            "name": "F10BondHgxxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "hgzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hgjc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hgpz",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10BondKzzfxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "faxr",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hzwh",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxfs",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxdx",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxjg",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxsl",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjjg",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cxfs",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zxpgjg",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xydj",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "psje",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "wssgr",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "wszqggr",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "wszql",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zzfx",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sstjr",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "kzzdjjg",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mjzjze",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fyhj",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "mjzjje",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zgqsr",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zgzzr",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zgdm",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zgjc",
                    "id": 26
                }
            ]
        },
        {
            "name": "F10BondKzztkOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tztk",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xztk",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dqshtk",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ybhstk",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "mjzjtX",
                    "id": 6
                }
            ]
        },
        {
            "name": "BondKzztzzgj",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqmc",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sjlx",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bdqzgj",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bdhzgj",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xzgjsxrq",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10BondKzztzzgj",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "ggrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "BondKzztzzgj",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10BondKzztzzgjOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10BondKzztzzgj",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10BondKzzxxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqjc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqmc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqmz",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqqx",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jxqsr",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dqr",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "llsm",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxpl",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxrsm",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cszgj",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zxzgj",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cszgsm",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssqsr",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "scssgm",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bzqzsl",
                    "id": 16
                }
            ]
        },
        {
            "name": "BondQycyr",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "cyrmc",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "cyrmc2",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cyje",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cyl",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cybl",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sid",
                    "id": 6
                }
            ]
        },
        {
            "name": "F10BondQycyr",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "BondQycyr",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10BondQycyrOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10BondQycyr",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10BondQyzfxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxrmc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ywmc",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxqsr",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zqze",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxjg",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssrq",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sstjr",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fzcxs",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tgr",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zcdz",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bgdz",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "frdb",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "yzbm",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hlwdz",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cz",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "zczb",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "kjsws",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "lssws",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxrdm",
                    "id": 21
                }
            ]
        },
        {
            "name": "F10BondQyzxxOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssrq",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jxqsr",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dqr",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "cxqx",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "pmll",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xppz",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jxfs",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "lllx",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "fxcs",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxr",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "chfs",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sfms",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sl",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ktqdf",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "pjjg",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xydj",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dbr",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "dfqsr",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bzqzsl",
                    "id": 21
                }
            ]
        },
        {
            "name": "BondZqgg",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ggbt",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "qw",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zlly",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sid",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10BondZqgg",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "ggrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "BondZqgg",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10BondZqggOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10BondZqgg",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "BondZqxjl",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "fxrq",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "xjlllx",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "je",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zqdjr",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "cqcxr",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sid",
                    "id": 6
                }
            ]
        },
        {
            "name": "F10BondZqxjl",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "ggrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "BondZqxjl",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10BondZqxjlOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10BondZqxjl",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "BondZqzg",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ljzgje",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ljzgs",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bqzgje",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bqzgs",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "sybj",
                    "id": 5
                }
            ]
        },
        {
            "name": "F10BondZqzg",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "jzrq",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "BondZqzg",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10BondZqzgOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zqzhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10BondZqzg",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ForexDqjj",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdzwmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "stype",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10ForexDqjjOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexDqjj",
                    "name": "data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ForexJqjj",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdzwmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "stype",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10ForexJqjjOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexJqjj",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ForexLlhh",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdzwmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "stype",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10ForexLlhhOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexLlhh",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ForexQqwhjbzlOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "whdm",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "whmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sjly",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jysj",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jchbdm",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jchbmc",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jchbgjmc",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "jchbssz",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jchbsszmc",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jchbssdq",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jchbjj",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjhbdm",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjhbmc",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjhbgjmc",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "bjhbssz",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjhbsszmc",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjhbssdq",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjhbjj",
                    "id": 18
                }
            ]
        },
        {
            "name": "F10ForexShiborlv",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdzwmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "stype",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10ForexShiborlvOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexShiborlv",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ForexWbdjq",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdzwmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "stype",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10ForexWbdjqOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexWbdjq",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ForexWhbzMb",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "whbzlx",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "clfs",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zdmc",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdzwmc",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bz",
                    "id": 6
                }
            ]
        },
        {
            "name": "F10ForexWhbzMbOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "stype",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexWhbzMb",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ForexXycj",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdzwmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "stype",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10ForexXycjOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexXycj",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10ForexYqjj",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdzwmc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "stype",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10ForexYqjjOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "zhdm",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexYqjj",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FuturesBzhyOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jydm",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jypz",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssjys",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jydw",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjdw",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zxjwbd",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdbdxz",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zdbzj",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "hyjzj",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jysxf",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hyjgyf",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zhjyr",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zhjgr",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jgpj",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jgdd",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jysjysj",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bdjysj",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jgfs",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jyfs",
                    "id": 20
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jybcj",
                    "id": 21
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jgyq",
                    "id": 22
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "wtjgsxf",
                    "id": 23
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "qtfy",
                    "id": 24
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jchbssdq",
                    "id": 25
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jchbssgj",
                    "id": 26
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jchbsd",
                    "id": 27
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjhbssdq",
                    "id": 28
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjhbssgj",
                    "id": 29
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjhbsd",
                    "id": 30
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "pzdm",
                    "id": 31
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "pzmc",
                    "id": 32
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jgdw",
                    "id": 33
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jgjy",
                    "id": 34
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jgq",
                    "id": 35
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bjfs",
                    "id": 36
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "hybd",
                    "id": 37
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ssrq",
                    "id": 38
                }
            ]
        },
        {
            "name": "F10FuturesCpgk",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10FuturesCpgkOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesCpgk",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FuturesFkbf",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10FuturesFkbfOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesFkbf",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FuturesJsxz",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10FuturesJsxzOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesJsxz",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FuturesJygz",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10FuturesJygzOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesJygz",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FuturesWphy",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10FuturesWphyOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesWphy",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10FuturesYxys",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10FuturesYxysOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesYxys",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10SpotBzhy",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "sourcetable",
                    "id": 4
                }
            ]
        },
        {
            "name": "F10SpotBzhyOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotBzhy",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10SpotFjsm",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10SpotFjsmOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotFjsm",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10SpotJygz",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10SpotJygzOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotJygz",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10SpotPzgk",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10SpotPzgkOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotPzgk",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10SpotWphy",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10SpotWphyOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotWphy",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "F10SpotYxys",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "rn",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "title",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 3
                }
            ]
        },
        {
            "name": "F10SpotYxysOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotYxys",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "OverallInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TotalStockNum",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AgreementStockNum",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BrokerStockNum",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "WaitStockNum",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ApplyStockNum",
                    "id": 5
                }
            ]
        },
        {
            "name": "TodayListStock",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "StockCode",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StockName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "MainBroker",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Industry",
                    "id": 4
                }
            ]
        },
        {
            "name": "TodayListStocks",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ListStockNum",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "TodayListStock",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "TodayBrokerStock",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "StockCode",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StockName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BrokerNum",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "NewAddNum",
                    "id": 4
                }
            ]
        },
        {
            "name": "TodayBrokerStocks",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "BrokerStockNum",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "TodayBrokerStock",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "TodayConvertStock",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "StockCode",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StockName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "BrokerNum",
                    "id": 3
                }
            ]
        },
        {
            "name": "TodayConvertStocks",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ConvertStockNum",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "TodayConvertStock",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "TodayIssueStock",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "StockCode",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StockName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ProjectAdvance",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "IssuePrice",
                    "id": 4
                }
            ]
        },
        {
            "name": "TodayIssueStocks",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "IssueStockNum",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "TodayIssueStock",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "BrokerStock",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "StockCode",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StockName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Price",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "InitAmount",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "InitCost",
                    "id": 5
                }
            ]
        },
        {
            "name": "BrokerDetaileInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "BrokerName",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FirstStockNum",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LastStockNum",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MainStockNum",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AvgPE",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AvgPB",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TotalValue",
                    "id": 7
                },
                {
                    "rule": "repeated",
                    "type": "BrokerStock",
                    "name": "Data",
                    "id": 8
                }
            ]
        },
        {
            "name": "BrokerInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "BrokerName",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "BeginDate",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "InitAmount",
                    "id": 3
                }
            ]
        },
        {
            "name": "StockBrokerInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "StockCode",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StockName",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "BrokerInfo",
                    "name": "Data",
                    "id": 3
                }
            ]
        },
        {
            "name": "IssueDetaileInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "StockCode",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StockName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "IssueAmount",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CollectCapital",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "IssuePrice",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LastClose",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "IssuePE",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "OverflowRatio",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ProjectAdvance",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "IssueDate",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "IssueTarget",
                    "id": 11
                }
            ]
        },
        {
            "name": "IssueStock",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "StockCode",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StockName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "NoticeDate",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "IssueScale",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "IssuePrice",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ProjectAdvance",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PE",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "LatestNoticeDate",
                    "id": 8
                }
            ]
        },
        {
            "name": "IssueStatInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "StockNum",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TotalScale",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AvgPE",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "IssueStock",
                    "name": "Data",
                    "id": 4
                }
            ]
        },
        {
            "name": "BrokerData",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "BrokerName",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LastStockNum",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FirstStockNum",
                    "id": 3
                }
            ]
        },
        {
            "name": "BrokerList",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "BrokerNum",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "BrokerData",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "QuickReportData",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "StockCode",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StockName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ReportDate",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ReportTitle",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Class",
                    "id": 5
                }
            ]
        },
        {
            "name": "FinanceQuickReport",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "QuickReportData",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "NewsDataItem",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "NewsId",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Title",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Context",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Source",
                    "id": 5
                }
            ]
        },
        {
            "name": "StockNews",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "NewsDataItem",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "SelfNews",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "NewsId",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Date",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Title",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Context",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Source",
                    "id": 6
                }
            ]
        },
        {
            "name": "NewsClassData",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Version",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ClassMask",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "NewsDataItem",
                    "name": "Data",
                    "id": 3
                }
            ]
        },
        {
            "name": "AnnouncemtDataItem",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Date",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "AnnouncemId",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Title",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Context",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "type",
                    "id": 5
                }
            ]
        },
        {
            "name": "StockAnnouncemt",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "AnnouncemtDataItem",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "SelfAnnouncemt",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Date",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "AnnouncemId",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Title",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Context",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "type",
                    "id": 6
                }
            ]
        },
        {
            "name": "InnerNewsDataItem",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Version",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "NewsDataItem",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "InnerAnnouncemtDataItem",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Version",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "AnnouncemtDataItem",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "ReportDataItem",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Date",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Title",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Organization",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Context",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "type",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RateClass",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RateDirection",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Author",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "HightPrice",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LowPrice",
                    "id": 11
                }
            ]
        },
        {
            "name": "StockReport",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ReportDataItem",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "SelfReport",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Date",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Title",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Organization",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Context",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "type",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RateClass",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RateDirection",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Author",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "HightPrice",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "LowPrice",
                    "id": 12
                }
            ]
        },
        {
            "name": "InnerReportDataItem",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Version",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "ReportDataItem",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "RepCounterRsp",
            "fields": [
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "RspNo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RspDesc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "Status",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StatusDesc",
                    "id": 4
                }
            ]
        },
        {
            "name": "CounterRsp",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "RspNo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RspDesc",
                    "id": 2
                }
            ]
        },
        {
            "name": "QueryCapitalRsp",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "RspNo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RspDesc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AvailCapital",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FreezeCapital",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Margin",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TotalValue",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TotalCapital",
                    "id": 7
                }
            ]
        },
        {
            "name": "HoldItem",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "HoldNo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ProductCode",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ProductName",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "BuyOrSell",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Margin",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PosAmount",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AvailAmount",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AvgPosPrice",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "NewPrice",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Value",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Profit",
                    "id": 11
                }
            ]
        },
        {
            "name": "QueryHoldRsp",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "RspNo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RspDesc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "AvailCapital",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "FreezeCapital",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TotalMargin",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TotalValue",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TotalCapital",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TotalProfit",
                    "id": 8
                },
                {
                    "rule": "repeated",
                    "type": "HoldItem",
                    "name": "HoldList",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "CapitalId",
                    "id": 10
                }
            ]
        },
        {
            "name": "OrderItem",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "OrderNo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "OrderTime",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ProductCode",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ProductName",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "BuyOrSell",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "OpenOrClose",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "OrderType",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "OrderAmount",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "OrderPrice",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Status",
                    "id": 10
                }
            ]
        },
        {
            "name": "QueryOrderRsp",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "RspNo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RspDesc",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "OrderItem",
                    "name": "OrderList",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "CapitalId",
                    "id": 4
                }
            ]
        },
        {
            "name": "DealItem",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "DealNo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "DealTime",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ProductCode",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ProductName",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "BuyOrSell",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "OpenOrClose",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DealAmount",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "DealPrice",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Fee",
                    "id": 9
                }
            ]
        },
        {
            "name": "QueryDealRsp",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "RspNo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RspDesc",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "DealItem",
                    "name": "DealList",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "CapitalId",
                    "id": 4
                }
            ]
        },
        {
            "name": "CounterSettleRsp",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "RspNo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RspDesc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "SettleTime",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "Status",
                    "id": 4
                }
            ]
        },
        {
            "name": "TradeRuleRsp",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "RspNo",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "RspDesc",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "UpdateTime",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TradeRate",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MinTradeFee",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaxPosAmount",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MaxOrderAmount",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "SettleTime",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "StopTrade",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "TradeRule",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MarginRate",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ForceCloseRate",
                    "id": 12
                }
            ]
        },
        {
            "name": "DanShangPinShuXing",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "shangShiShiJian",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zhongWenJianCheng",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "yingWenQuanCheng",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "xiaoShuDianWeiShu",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "jiaoYiShiJianLeiXin",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "jiaoYiBiZhong",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "tuiShiShiJian",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "shangShiZhuangTai",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "zhengQuanLeiBie",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "tingPai",
                    "id": 11
                }
            ]
        },
        {
            "name": "MarketTradeDate",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Market",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "TradeDate",
                    "id": 2
                }
            ]
        },
        {
            "name": "FutureInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "BeginDate",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "EndDate",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "DeliveryDay",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "TradeUnit",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "MarginRate",
                    "id": 7
                }
            ]
        },
        {
            "name": "NewStockInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "StockCode",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StockName",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "StockSummary",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "BuyCode",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "IssueTotal",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "OnlineTotal",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "BuyLimit",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "IssuePrice",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "FirstClose",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "BuyDate",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "PubDate",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "PayDate",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "TradeDate",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "IssuePE",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "IndustryPE",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "SuccessRate",
                    "id": 16
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "OfferTotal",
                    "id": 17
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "OfferTimes",
                    "id": 18
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "SeriesNum",
                    "id": 19
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "IncreaseTotal",
                    "id": 20
                }
            ]
        },
        {
            "name": "YueKXianShuJu",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Nian",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhangFu",
                    "id": 2
                }
            ]
        },
        {
            "name": "YueZouShiShuJu",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Yue",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "YueKXianShuJu",
                    "name": "YueKXian",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShangZhangGaiLv",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "PingJunZhangFu",
                    "id": 4
                }
            ]
        },
        {
            "name": "HistoryTrends",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "YueZouShiShuJu",
                    "name": "YueZouShi",
                    "id": 2
                }
            ]
        },
        {
            "name": "MonthTrends",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "LiShiHangQing",
                    "name": "HangQing",
                    "id": 2
                }
            ]
        },
        {
            "name": "MSG",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Obj",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "Table",
                    "name": "Tbl",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "ObjCount",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "QuoteDynaSingle",
                    "name": "RepDataQuoteDynaSingle",
                    "id": 20
                },
                {
                    "rule": "repeated",
                    "type": "QuoteKlineSingle",
                    "name": "RepDataQuoteKlineSingle",
                    "id": 21
                },
                {
                    "rule": "repeated",
                    "type": "QuoteTickSingle",
                    "name": "RepDataQuoteTickSingle",
                    "id": 22
                },
                {
                    "rule": "repeated",
                    "type": "QuoteMinSingle",
                    "name": "RepDataQuoteMinSingle",
                    "id": 23
                },
                {
                    "rule": "repeated",
                    "type": "NewsInfoValue",
                    "name": "RepDataNewsInfoValue",
                    "id": 24
                },
                {
                    "rule": "repeated",
                    "type": "ZhiBiao",
                    "name": "RepDataZhiBiao",
                    "id": 26
                },
                {
                    "rule": "repeated",
                    "type": "StkData",
                    "name": "RepDataStkData",
                    "id": 27
                },
                {
                    "rule": "repeated",
                    "type": "PaiXu",
                    "name": "RepDataPaiXu",
                    "id": 28
                },
                {
                    "rule": "repeated",
                    "type": "JianPanBaoShuChu",
                    "name": "RepDataJianPanBaoShuChu",
                    "id": 29
                },
                {
                    "rule": "repeated",
                    "type": "BlockObjOutput",
                    "name": "RepDataBlockObjOutput",
                    "id": 33
                },
                {
                    "rule": "repeated",
                    "type": "BlockPropOutput",
                    "name": "RepDataBlockPropOutput",
                    "id": 34
                },
                {
                    "rule": "repeated",
                    "type": "Token",
                    "name": "RepDataToken",
                    "id": 44
                },
                {
                    "rule": "repeated",
                    "type": "F10GsgkOutput",
                    "name": "RepDataF10GsgkOutput",
                    "id": 55
                },
                {
                    "rule": "repeated",
                    "type": "F10CwtsZycwzbOutput",
                    "name": "RepDataF10CwtsZycwzbOutput",
                    "id": 56
                },
                {
                    "rule": "repeated",
                    "type": "F10CwtsXjllbzyOutput",
                    "name": "RepDataF10CwtsXjllbzyOutput",
                    "id": 57
                },
                {
                    "rule": "repeated",
                    "type": "F10ZxjbDjdcwzbOutput",
                    "name": "RepDataF10ZxjbDjdcwzbOutput",
                    "id": 58
                },
                {
                    "rule": "repeated",
                    "type": "F10ZxjbdjdlebOutput",
                    "name": "RepDataF10ZxjbdjdlebOutput",
                    "id": 59
                },
                {
                    "rule": "repeated",
                    "type": "F10GdjcGdhsOutput",
                    "name": "RepDataF10GdjcGdhsOutput",
                    "id": 60
                },
                {
                    "rule": "repeated",
                    "type": "F10GdjcSdgdOutput",
                    "name": "RepDataF10GdjcSdgdOutput",
                    "id": 61
                },
                {
                    "rule": "repeated",
                    "type": "F10GdjcSdltgdOutput",
                    "name": "RepDataF10GdjcSdltgdOutput",
                    "id": 62
                },
                {
                    "rule": "repeated",
                    "type": "F10GbfhFhkgOutput",
                    "name": "RepDataF10GbfhFhkgOutput",
                    "id": 63
                },
                {
                    "rule": "repeated",
                    "type": "F10GbfhGbjgOutput",
                    "name": "RepDataF10GbfhGbjgOutput",
                    "id": 64
                },
                {
                    "rule": "repeated",
                    "type": "XinWenXinXiOutput",
                    "name": "RepDataXinWenXinXiOutput",
                    "id": 65
                },
                {
                    "rule": "repeated",
                    "type": "XinWenXinXiZhongXinOutput",
                    "name": "RepDataXinWenXinXiZhongXinOutput",
                    "id": 66
                },
                {
                    "rule": "repeated",
                    "type": "YiZhiXinYeJiYuCeOutPut",
                    "name": "RepDataYiZhiXinYeJiYuCeOutPut",
                    "id": 68
                },
                {
                    "rule": "repeated",
                    "type": "YiZhiXinTouZiPinJiOutPut",
                    "name": "RepDataYiZhiXinTouZiPinJiOutPut",
                    "id": 69
                },
                {
                    "rule": "repeated",
                    "type": "GeGuYeJiYuCeOutPut",
                    "name": "RepDataGeGuYeJiYuCeOutPut",
                    "id": 70
                },
                {
                    "rule": "repeated",
                    "type": "GeGuTouZiYanBaoOutPut",
                    "name": "RepDataGeGuTouZiYanBaoOutPut",
                    "id": 71
                },
                {
                    "rule": "repeated",
                    "type": "TongJiApp",
                    "name": "RepDataTongJiApp",
                    "id": 73
                },
                {
                    "rule": "repeated",
                    "type": "QuoteBOrderSingle",
                    "name": "RepDataQuoteBOrderSingle",
                    "id": 76
                },
                {
                    "rule": "repeated",
                    "type": "DXSpirit",
                    "name": "RepDataDXSpirit",
                    "id": 77
                },
                {
                    "rule": "repeated",
                    "type": "GongGaoXinXiOutput",
                    "name": "RepDataGongGaoXinXiOutput",
                    "id": 80
                },
                {
                    "rule": "repeated",
                    "type": "GongGaoXinXiZhongXinOutput",
                    "name": "RepDataGongGaoXinXiZhongXinOutput",
                    "id": 81
                },
                {
                    "rule": "repeated",
                    "type": "F10CpbdZxzbOutput",
                    "name": "RepDataF10CpbdZxzbOutput",
                    "id": 82
                },
                {
                    "rule": "repeated",
                    "type": "F10CpbdKpqkOutput",
                    "name": "RepDataF10CpbdKpqkOutput",
                    "id": 83
                },
                {
                    "rule": "repeated",
                    "type": "F10CpbdCjhbOutput",
                    "name": "RepDataF10CpbdCjhbOutput",
                    "id": 84
                },
                {
                    "rule": "repeated",
                    "type": "F10CwtsLrfpbzyOutput",
                    "name": "RepDataF10CwtsLrfpbzyOutput",
                    "id": 85
                },
                {
                    "rule": "repeated",
                    "type": "F10CwtsZcfzbzyOutput",
                    "name": "RepDataF10CwtsZcfzbzyOutput",
                    "id": 86
                },
                {
                    "rule": "repeated",
                    "type": "F10ZygcOutput",
                    "name": "RepDataF10ZygcOutput",
                    "id": 87
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxJjltOutput",
                    "name": "RepDataF10DstxJjltOutput",
                    "id": 88
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxRzrqOutput",
                    "name": "RepDataF10DstxRzrqOutput",
                    "id": 89
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxJgccOutput",
                    "name": "RepDataF10DstxJgccOutput",
                    "id": 90
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxGdzjcOutput",
                    "name": "RepDataF10DstxGdzjcOutput",
                    "id": 91
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxDzjyOutput",
                    "name": "RepDataF10DstxDzjyOutput",
                    "id": 92
                },
                {
                    "rule": "repeated",
                    "type": "F10DstxCgbdqkOutput",
                    "name": "RepDataF10DstxCgbdqkOutput",
                    "id": 93
                },
                {
                    "rule": "repeated",
                    "type": "F10GlcOutPut",
                    "name": "RepDataF10GlcOutPut",
                    "id": 94
                },
                {
                    "rule": "repeated",
                    "type": "F10GlcNdbcqkOutPut",
                    "name": "RepDataF10GlcNdbcqkOutPut",
                    "id": 95
                },
                {
                    "rule": "repeated",
                    "type": "F10ZxjbDjdxjllbOutPut",
                    "name": "RepDataF10ZxjbDjdxjllbOutPut",
                    "id": 96
                },
                {
                    "rule": "repeated",
                    "type": "F10GdjcKggdOutPut",
                    "name": "RepDataF10GdjcKggdOutPut",
                    "id": 97
                },
                {
                    "rule": "repeated",
                    "type": "F10GdjcSjkzrOutPut",
                    "name": "RepDataF10GdjcSjkzrOutPut",
                    "id": 98
                },
                {
                    "rule": "repeated",
                    "type": "F10GbfhGbbdOutPut",
                    "name": "RepDataF10GbfhGbbdOutPut",
                    "id": 99
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzCyqtsszqOutPut",
                    "name": "RepDataF10ZbyzCyqtsszqOutPut",
                    "id": 100
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzCyfssgqOutPut",
                    "name": "RepDataF10ZbyzCyfssgqOutPut",
                    "id": 101
                },
                {
                    "rule": "repeated",
                    "type": "F10zbyzRzqkzfyssOutPut",
                    "name": "RepDataF10zbyzRzqkzfyssOutPut",
                    "id": 102
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzXmtzMjzjqkOutPut",
                    "name": "RepDataF10ZbyzXmtzMjzjqkOutPut",
                    "id": 103
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzXmtzMjzjcnxmOutPut",
                    "name": "RepDataF10ZbyzXmtzMjzjcnxmOutPut",
                    "id": 104
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzXmtzMjzjbgxmOutPut",
                    "name": "RepDataF10ZbyzXmtzMjzjbgxmOutPut",
                    "id": 105
                },
                {
                    "rule": "repeated",
                    "type": "F10ZbyzXmtzFmjzjxmOutPut",
                    "name": "RepDataF10ZbyzXmtzFmjzjxmOutPut",
                    "id": 106
                },
                {
                    "rule": "repeated",
                    "type": "F10HydwOutPut",
                    "name": "RepDataF10HydwOutPut",
                    "id": 107
                },
                {
                    "rule": "repeated",
                    "type": "F10RsrProForecastOutPut",
                    "name": "RepDataF10RsrProForecastOutPut",
                    "id": 108
                },
                {
                    "rule": "repeated",
                    "type": "F10RsrInvestRatingOutPut",
                    "name": "RepDataF10RsrInvestRatingOutPut",
                    "id": 109
                },
                {
                    "rule": "repeated",
                    "type": "F10RsrEarnPSForeOutPut",
                    "name": "RepDataF10RsrEarnPSForeOutPut",
                    "id": 110
                },
                {
                    "rule": "repeated",
                    "type": "F10RsrResReportOutPut",
                    "name": "RepDataF10RsrResReportOutPut",
                    "id": 111
                },
                {
                    "rule": "repeated",
                    "type": "DXSpiritStat",
                    "name": "RepDataDXSpiritStat",
                    "id": 113
                },
                {
                    "rule": "repeated",
                    "type": "PaiMing",
                    "name": "RepDataPaiMing",
                    "id": 115
                },
                {
                    "rule": "repeated",
                    "type": "OverallInfo",
                    "name": "RepDataOverallInfo",
                    "id": 121
                },
                {
                    "rule": "repeated",
                    "type": "TodayListStocks",
                    "name": "RepDataTodayListStocks",
                    "id": 122
                },
                {
                    "rule": "repeated",
                    "type": "TodayBrokerStocks",
                    "name": "RepDataTodayBrokerStocks",
                    "id": 123
                },
                {
                    "rule": "repeated",
                    "type": "TodayConvertStocks",
                    "name": "RepDataTodayConvertStocks",
                    "id": 124
                },
                {
                    "rule": "repeated",
                    "type": "TodayIssueStocks",
                    "name": "RepDataTodayIssueStocks",
                    "id": 125
                },
                {
                    "rule": "repeated",
                    "type": "BrokerDetaileInfo",
                    "name": "RepDataBrokerDetaileInfo",
                    "id": 126
                },
                {
                    "rule": "repeated",
                    "type": "StockBrokerInfo",
                    "name": "RepDataStockBrokerInfo",
                    "id": 127
                },
                {
                    "rule": "repeated",
                    "type": "IssueDetaileInfo",
                    "name": "RepDataIssueDetaileInfo",
                    "id": 128
                },
                {
                    "rule": "repeated",
                    "type": "IssueStatInfo",
                    "name": "RepDataIssueStatInfo",
                    "id": 129
                },
                {
                    "rule": "repeated",
                    "type": "BrokerList",
                    "name": "RepDataBrokerList",
                    "id": 137
                },
                {
                    "rule": "repeated",
                    "type": "FinanceQuickReport",
                    "name": "RepDataFinanceQuickReport",
                    "id": 138
                },
                {
                    "rule": "repeated",
                    "type": "NewsDataItem",
                    "name": "RepDataNewsDataItem",
                    "id": 147
                },
                {
                    "rule": "repeated",
                    "type": "StockNews",
                    "name": "RepDataStockNews",
                    "id": 148
                },
                {
                    "rule": "repeated",
                    "type": "AnnouncemtDataItem",
                    "name": "RepDataAnnouncemtDataItem",
                    "id": 149
                },
                {
                    "rule": "repeated",
                    "type": "StockAnnouncemt",
                    "name": "RepDataStockAnnouncemt",
                    "id": 150
                },
                {
                    "rule": "repeated",
                    "type": "SelfNews",
                    "name": "RepDataSelfNews",
                    "id": 154
                },
                {
                    "rule": "repeated",
                    "type": "SelfAnnouncemt",
                    "name": "RepDataSelfAnnouncemt",
                    "id": 155
                },
                {
                    "rule": "repeated",
                    "type": "RepCounterRsp",
                    "name": "RepDataRepCounterRsp",
                    "id": 156
                },
                {
                    "rule": "repeated",
                    "type": "CounterRsp",
                    "name": "RepDataCounterRsp",
                    "id": 157
                },
                {
                    "rule": "repeated",
                    "type": "QueryCapitalRsp",
                    "name": "RepDataQueryCapitalRsp",
                    "id": 158
                },
                {
                    "rule": "repeated",
                    "type": "QueryHoldRsp",
                    "name": "RepDataQueryHoldRsp",
                    "id": 159
                },
                {
                    "rule": "repeated",
                    "type": "QueryOrderRsp",
                    "name": "RepDataQueryOrderRsp",
                    "id": 160
                },
                {
                    "rule": "repeated",
                    "type": "QueryDealRsp",
                    "name": "RepDataQueryDealRsp",
                    "id": 161
                },
                {
                    "rule": "repeated",
                    "type": "CounterSettleRsp",
                    "name": "RepDataCounterSettleRsp",
                    "id": 162
                },
                {
                    "rule": "repeated",
                    "type": "TradeRuleRsp",
                    "name": "RepDataTradeRuleRsp",
                    "id": 163
                },
                {
                    "rule": "repeated",
                    "type": "QuoteDividSingle",
                    "name": "RepDataQuoteDividSingle",
                    "id": 170
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCpbdFbsjjzjzOutput",
                    "name": "RepDataF10FundCpbdFbsjjzjzOutput",
                    "id": 179
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCpbdJjfebdqkOutput",
                    "name": "RepDataF10FundCpbdJjfebdqkOutput",
                    "id": 180
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCpbdJjgbjbOutput",
                    "name": "RepDataF10FundCpbdJjgbjbOutput",
                    "id": 181
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCpbdJjjzbxOutput",
                    "name": "RepDataF10FundCpbdJjjzbxOutput",
                    "id": 182
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCpbdJjxxOutput",
                    "name": "RepDataF10FundCpbdJjxxOutput",
                    "id": 183
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCpbdZfeOutput",
                    "name": "RepDataF10FundCpbdZfeOutput",
                    "id": 184
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCwsjJyyjOutput",
                    "name": "RepDataF10FundCwsjJyyjOutput",
                    "id": 185
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCwsjZcfzOutput",
                    "name": "RepDataF10FundCwsjZcfzOutput",
                    "id": 186
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCwsjZycwzbOutput",
                    "name": "RepDataF10FundCwsjZycwzbOutput",
                    "id": 187
                },
                {
                    "rule": "repeated",
                    "type": "NewStockInfo",
                    "name": "RepDataNewStockInfo",
                    "id": 188
                },
                {
                    "rule": "repeated",
                    "type": "F10FundCyrHshjgOutput",
                    "name": "RepDataF10FundCyrHshjgOutput",
                    "id": 190
                },
                {
                    "rule": "repeated",
                    "type": "F10FundFefhFbsjjcyrjgOutput",
                    "name": "RepDataF10FundFefhFbsjjcyrjgOutput",
                    "id": 191
                },
                {
                    "rule": "repeated",
                    "type": "F10FundFefhFhOutput",
                    "name": "RepDataF10FundFefhFhOutput",
                    "id": 192
                },
                {
                    "rule": "repeated",
                    "type": "F10FundFefhKfsjjjdfebdOutput",
                    "name": "RepDataF10FundFefhKfsjjjdfebdOutput",
                    "id": 193
                },
                {
                    "rule": "repeated",
                    "type": "F10FundGpmxBqzdmcgpOutput",
                    "name": "RepDataF10FundGpmxBqzdmcgpOutput",
                    "id": 194
                },
                {
                    "rule": "repeated",
                    "type": "F10FundGpmxBqzdmrgpOutput",
                    "name": "RepDataF10FundGpmxBqzdmrgpOutput",
                    "id": 195
                },
                {
                    "rule": "repeated",
                    "type": "F10FundGpmxQbcgOutput",
                    "name": "RepDataF10FundGpmxQbcgOutput",
                    "id": 196
                },
                {
                    "rule": "repeated",
                    "type": "F10FundHgzwOutput",
                    "name": "RepDataF10FundHgzwOutput",
                    "id": 197
                },
                {
                    "rule": "repeated",
                    "type": "F10FundHytzOutput",
                    "name": "RepDataF10FundHytzOutput",
                    "id": 198
                },
                {
                    "rule": "repeated",
                    "type": "F10FundHytzQdiiOutput",
                    "name": "RepDataF10FundHytzQdiiOutput",
                    "id": 199
                },
                {
                    "rule": "repeated",
                    "type": "F10FundJbxxOutput",
                    "name": "RepDataF10FundJbxxOutput",
                    "id": 200
                },
                {
                    "rule": "repeated",
                    "type": "F10FundFbsjjgkOutput",
                    "name": "RepDataF10FundFbsjjgkOutput",
                    "id": 201
                },
                {
                    "rule": "repeated",
                    "type": "F10FundKfsjjgkOutput",
                    "name": "RepDataF10FundKfsjjgkOutput",
                    "id": 202
                },
                {
                    "rule": "repeated",
                    "type": "F10FundJlggJjgsggryOutput",
                    "name": "RepDataF10FundJlggJjgsggryOutput",
                    "id": 203
                },
                {
                    "rule": "repeated",
                    "type": "F10FundJlggJjjlOutput",
                    "name": "RepDataF10FundJlggJjjlOutput",
                    "id": 204
                },
                {
                    "rule": "repeated",
                    "type": "F10FundJyyjOutput",
                    "name": "RepDataF10FundJyyjOutput",
                    "id": 205
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZccgQsmgpmxOutput",
                    "name": "RepDataF10FundZccgQsmgpmxOutput",
                    "id": 206
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZccgQdiiOutput",
                    "name": "RepDataF10FundZccgQdiiOutput",
                    "id": 207
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZqtzTzzhOutput",
                    "name": "RepDataF10FundZqtzTzzhOutput",
                    "id": 208
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZqtzTzzhQdiiOutput",
                    "name": "RepDataF10FundZqtzTzzhQdiiOutput",
                    "id": 209
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZqtzZcmxOutput",
                    "name": "RepDataF10FundZqtzZcmxOutput",
                    "id": 210
                },
                {
                    "rule": "repeated",
                    "type": "F10FundZycyrOutput",
                    "name": "RepDataF10FundZycyrOutput",
                    "id": 211
                },
                {
                    "rule": "repeated",
                    "type": "HistoryTrends",
                    "name": "RepDataHistoryTrends",
                    "id": 215
                },
                {
                    "rule": "repeated",
                    "type": "QuoteDynaMinSingle",
                    "name": "RepDataQuoteDynaMinSingle",
                    "id": 218
                },
                {
                    "rule": "repeated",
                    "type": "QuoteHistoryMinSingle",
                    "name": "RepDataQuoteHistoryMinSingle",
                    "id": 221
                },
                {
                    "rule": "repeated",
                    "type": "F10FundHbjjxeOutput",
                    "name": "RepDataF10FundHbjjxeOutput",
                    "id": 222
                },
                {
                    "rule": "repeated",
                    "type": "F10BondDfzfzfxOutput",
                    "name": "RepDataF10BondDfzfzfxOutput",
                    "id": 223
                },
                {
                    "rule": "repeated",
                    "type": "F10BondDfzfzqxxOutput",
                    "name": "RepDataF10BondDfzfzqxxOutput",
                    "id": 224
                },
                {
                    "rule": "repeated",
                    "type": "F10BondFlszzfxOutput",
                    "name": "RepDataF10BondFlszzfxOutput",
                    "id": 225
                },
                {
                    "rule": "repeated",
                    "type": "F10BondFlszztkOutput",
                    "name": "RepDataF10BondFlszztkOutput",
                    "id": 226
                },
                {
                    "rule": "repeated",
                    "type": "F10BondFlszzxxOutput",
                    "name": "RepDataF10BondFlszzxxOutput",
                    "id": 227
                },
                {
                    "rule": "repeated",
                    "type": "F10BondGzxxOutput",
                    "name": "RepDataF10BondGzxxOutput",
                    "id": 228
                },
                {
                    "rule": "repeated",
                    "type": "F10BondHgxxOutput",
                    "name": "RepDataF10BondHgxxOutput",
                    "id": 229
                },
                {
                    "rule": "repeated",
                    "type": "F10BondKzzfxOutput",
                    "name": "RepDataF10BondKzzfxOutput",
                    "id": 230
                },
                {
                    "rule": "repeated",
                    "type": "F10BondKzztkOutput",
                    "name": "RepDataF10BondKzztkOutput",
                    "id": 231
                },
                {
                    "rule": "repeated",
                    "type": "F10BondKzztzzgjOutput",
                    "name": "RepDataF10BondKzztzzgjOutput",
                    "id": 232
                },
                {
                    "rule": "repeated",
                    "type": "F10BondKzzxxOutput",
                    "name": "RepDataF10BondKzzxxOutput",
                    "id": 233
                },
                {
                    "rule": "repeated",
                    "type": "F10BondQycyrOutput",
                    "name": "RepDataF10BondQycyrOutput",
                    "id": 234
                },
                {
                    "rule": "repeated",
                    "type": "F10BondQyzfxOutput",
                    "name": "RepDataF10BondQyzfxOutput",
                    "id": 235
                },
                {
                    "rule": "repeated",
                    "type": "F10BondQyzxxOutput",
                    "name": "RepDataF10BondQyzxxOutput",
                    "id": 236
                },
                {
                    "rule": "repeated",
                    "type": "F10BondZqggOutput",
                    "name": "RepDataF10BondZqggOutput",
                    "id": 237
                },
                {
                    "rule": "repeated",
                    "type": "F10BondZqxjlOutput",
                    "name": "RepDataF10BondZqxjlOutput",
                    "id": 238
                },
                {
                    "rule": "repeated",
                    "type": "F10BondZqzgOutput",
                    "name": "RepDataF10BondZqzgOutput",
                    "id": 239
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexDqjjOutput",
                    "name": "RepDataF10ForexDqjjOutput",
                    "id": 240
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexJqjjOutput",
                    "name": "RepDataF10ForexJqjjOutput",
                    "id": 241
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexLlhhOutput",
                    "name": "RepDataF10ForexLlhhOutput",
                    "id": 242
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexQqwhjbzlOutput",
                    "name": "RepDataF10ForexQqwhjbzlOutput",
                    "id": 243
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexShiborlvOutput",
                    "name": "RepDataF10ForexShiborlvOutput",
                    "id": 244
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexWbdjqOutput",
                    "name": "RepDataF10ForexWbdjqOutput",
                    "id": 245
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexWhbzMbOutput",
                    "name": "RepDataF10ForexWhbzMbOutput",
                    "id": 246
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexXycjOutput",
                    "name": "RepDataF10ForexXycjOutput",
                    "id": 247
                },
                {
                    "rule": "repeated",
                    "type": "F10ForexYqjjOutput",
                    "name": "RepDataF10ForexYqjjOutput",
                    "id": 248
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesBzhyOutput",
                    "name": "RepDataF10FuturesBzhyOutput",
                    "id": 249
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesCpgkOutput",
                    "name": "RepDataF10FuturesCpgkOutput",
                    "id": 250
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesFkbfOutput",
                    "name": "RepDataF10FuturesFkbfOutput",
                    "id": 251
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesJsxzOutput",
                    "name": "RepDataF10FuturesJsxzOutput",
                    "id": 252
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesJygzOutput",
                    "name": "RepDataF10FuturesJygzOutput",
                    "id": 253
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesWphyOutput",
                    "name": "RepDataF10FuturesWphyOutput",
                    "id": 254
                },
                {
                    "rule": "repeated",
                    "type": "F10FuturesYxysOutput",
                    "name": "RepDataF10FuturesYxysOutput",
                    "id": 255
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotBzhyOutput",
                    "name": "RepDataF10SpotBzhyOutput",
                    "id": 256
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotFjsmOutput",
                    "name": "RepDataF10SpotFjsmOutput",
                    "id": 257
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotJygzOutput",
                    "name": "RepDataF10SpotJygzOutput",
                    "id": 258
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotPzgkOutput",
                    "name": "RepDataF10SpotPzgkOutput",
                    "id": 259
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotWphyOutput",
                    "name": "RepDataF10SpotWphyOutput",
                    "id": 260
                },
                {
                    "rule": "repeated",
                    "type": "F10SpotYxysOutput",
                    "name": "RepDataF10SpotYxysOutput",
                    "id": 261
                },
                {
                    "rule": "repeated",
                    "type": "ReportDataItem",
                    "name": "RepDataReportDataItem",
                    "id": 262
                },
                {
                    "rule": "repeated",
                    "type": "StockReport",
                    "name": "RepDataStockReport",
                    "id": 263
                },
                {
                    "rule": "repeated",
                    "type": "SelfReport",
                    "name": "RepDataSelfReport",
                    "id": 264
                },
                {
                    "rule": "repeated",
                    "type": "QuoteFundFlowSingle",
                    "name": "RepDataQuoteFundFlowSingle",
                    "id": 265
                },
                {
                    "rule": "repeated",
                    "type": "MonthTrends",
                    "name": "RepDataMonthTrends",
                    "id": 266
                },
                {
                    "rule": "repeated",
                    "type": "QuoteQueueMinSingle",
                    "name": "RepDataQuoteQueueMinSingle",
                    "id": 269
                }
            ]
        },
        {
            "name": "UAResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Qid",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "Err",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "Counter",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "Data",
                    "id": 4
                }
            ]
        },
        {
            "name": "ChildResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "No",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "GroupResponse",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ChildResponse",
                    "name": "ChildRes",
                    "id": 1
                }
            ]
        }
    ],
    "enums": [
        {
            "name": "InfoType",
            "values": [
                {
                    "name": "Type_Unknow",
                    "id": 0
                },
                {
                    "name": "Type_Int",
                    "id": 105
                },
                {
                    "name": "Type_SInt",
                    "id": 120
                },
                {
                    "name": "Type_Float",
                    "id": 102
                },
                {
                    "name": "Type_Double",
                    "id": 100
                },
                {
                    "name": "Type_String",
                    "id": 115
                },
                {
                    "name": "Type_Binary",
                    "id": 98
                },
                {
                    "name": "Type_Table",
                    "id": 116
                },
                {
                    "name": "Type_Array",
                    "id": 128
                },
                {
                    "name": "Type_ArrayInt",
                    "id": 233
                },
                {
                    "name": "Type_ArraySInt",
                    "id": 248
                },
                {
                    "name": "Type_ArrayFloat",
                    "id": 230
                },
                {
                    "name": "Type_ArrayDouble",
                    "id": 228
                },
                {
                    "name": "Type_ArrayString",
                    "id": 243
                }
            ]
        },
        {
            "name": "JPBLeiXing",
            "values": [
                {
                    "name": "TYPE_OBJ",
                    "id": 0
                },
                {
                    "name": "TYPE_INDI",
                    "id": 1
                },
                {
                    "name": "TYPE_TOPIC",
                    "id": 2
                },
                {
                    "name": "TYPE_LHB",
                    "id": 3
                },
                {
                    "name": "TYPE_BLKOBJ",
                    "id": 4
                },
                {
                    "name": "TYPE_TOPICANALY",
                    "id": 5
                },
                {
                    "name": "TYPE_OBJPHONE",
                    "id": 6
                }
            ]
        },
        {
            "name": "EnumID",
            "values": [
                {
                    "name": "IDId",
                    "id": 1
                },
                {
                    "name": "IDObj",
                    "id": 2
                },
                {
                    "name": "IDTbl",
                    "id": 3
                },
                {
                    "name": "IDObjCount",
                    "id": 5
                },
                {
                    "name": "IDQuoteDynaSingle",
                    "id": 20
                },
                {
                    "name": "IDQuoteKlineSingle",
                    "id": 21
                },
                {
                    "name": "IDQuoteTickSingle",
                    "id": 22
                },
                {
                    "name": "IDQuoteMinSingle",
                    "id": 23
                },
                {
                    "name": "IDNewsInfoValue",
                    "id": 24
                },
                {
                    "name": "IDZhiBiao",
                    "id": 26
                },
                {
                    "name": "IDStkData",
                    "id": 27
                },
                {
                    "name": "IDPaiXu",
                    "id": 28
                },
                {
                    "name": "IDJianPanBaoShuChu",
                    "id": 29
                },
                {
                    "name": "IDBlockObjOutput",
                    "id": 33
                },
                {
                    "name": "IDBlockPropOutput",
                    "id": 34
                },
                {
                    "name": "IDToken",
                    "id": 44
                },
                {
                    "name": "IDF10GsgkOutput",
                    "id": 55
                },
                {
                    "name": "IDF10CwtsZycwzbOutput",
                    "id": 56
                },
                {
                    "name": "IDF10CwtsXjllbzyOutput",
                    "id": 57
                },
                {
                    "name": "IDF10ZxjbDjdcwzbOutput",
                    "id": 58
                },
                {
                    "name": "IDF10ZxjbdjdlebOutput",
                    "id": 59
                },
                {
                    "name": "IDF10GdjcGdhsOutput",
                    "id": 60
                },
                {
                    "name": "IDF10GdjcSdgdOutput",
                    "id": 61
                },
                {
                    "name": "IDF10GdjcSdltgdOutput",
                    "id": 62
                },
                {
                    "name": "IDF10GbfhFhkgOutput",
                    "id": 63
                },
                {
                    "name": "IDF10GbfhGbjgOutput",
                    "id": 64
                },
                {
                    "name": "IDXinWenXinXiOutput",
                    "id": 65
                },
                {
                    "name": "IDXinWenXinXiZhongXinOutput",
                    "id": 66
                },
                {
                    "name": "IDYiZhiXinYeJiYuCeOutPut",
                    "id": 68
                },
                {
                    "name": "IDYiZhiXinTouZiPinJiOutPut",
                    "id": 69
                },
                {
                    "name": "IDGeGuYeJiYuCeOutPut",
                    "id": 70
                },
                {
                    "name": "IDGeGuTouZiYanBaoOutPut",
                    "id": 71
                },
                {
                    "name": "IDTongJiApp",
                    "id": 73
                },
                {
                    "name": "IDQuoteBOrderSingle",
                    "id": 76
                },
                {
                    "name": "IDDXSpirit",
                    "id": 77
                },
                {
                    "name": "IDGongGaoXinXiOutput",
                    "id": 80
                },
                {
                    "name": "IDGongGaoXinXiZhongXinOutput",
                    "id": 81
                },
                {
                    "name": "IDF10CpbdZxzbOutput",
                    "id": 82
                },
                {
                    "name": "IDF10CpbdKpqkOutput",
                    "id": 83
                },
                {
                    "name": "IDF10CpbdCjhbOutput",
                    "id": 84
                },
                {
                    "name": "IDF10CwtsLrfpbzyOutput",
                    "id": 85
                },
                {
                    "name": "IDF10CwtsZcfzbzyOutput",
                    "id": 86
                },
                {
                    "name": "IDF10ZygcOutput",
                    "id": 87
                },
                {
                    "name": "IDF10DstxJjltOutput",
                    "id": 88
                },
                {
                    "name": "IDF10DstxRzrqOutput",
                    "id": 89
                },
                {
                    "name": "IDF10DstxJgccOutput",
                    "id": 90
                },
                {
                    "name": "IDF10DstxGdzjcOutput",
                    "id": 91
                },
                {
                    "name": "IDF10DstxDzjyOutput",
                    "id": 92
                },
                {
                    "name": "IDF10DstxCgbdqkOutput",
                    "id": 93
                },
                {
                    "name": "IDF10GlcOutPut",
                    "id": 94
                },
                {
                    "name": "IDF10GlcNdbcqkOutPut",
                    "id": 95
                },
                {
                    "name": "IDF10ZxjbDjdxjllbOutPut",
                    "id": 96
                },
                {
                    "name": "IDF10GdjcKggdOutPut",
                    "id": 97
                },
                {
                    "name": "IDF10GdjcSjkzrOutPut",
                    "id": 98
                },
                {
                    "name": "IDF10GbfhGbbdOutPut",
                    "id": 99
                },
                {
                    "name": "IDF10ZbyzCyqtsszqOutPut",
                    "id": 100
                },
                {
                    "name": "IDF10ZbyzCyfssgqOutPut",
                    "id": 101
                },
                {
                    "name": "IDF10zbyzRzqkzfyssOutPut",
                    "id": 102
                },
                {
                    "name": "IDF10ZbyzXmtzMjzjqkOutPut",
                    "id": 103
                },
                {
                    "name": "IDF10ZbyzXmtzMjzjcnxmOutPut",
                    "id": 104
                },
                {
                    "name": "IDF10ZbyzXmtzMjzjbgxmOutPut",
                    "id": 105
                },
                {
                    "name": "IDF10ZbyzXmtzFmjzjxmOutPut",
                    "id": 106
                },
                {
                    "name": "IDF10HydwOutPut",
                    "id": 107
                },
                {
                    "name": "IDF10RsrProForecastOutPut",
                    "id": 108
                },
                {
                    "name": "IDF10RsrInvestRatingOutPut",
                    "id": 109
                },
                {
                    "name": "IDF10RsrEarnPSForeOutPut",
                    "id": 110
                },
                {
                    "name": "IDF10RsrResReportOutPut",
                    "id": 111
                },
                {
                    "name": "IDDXSpiritStat",
                    "id": 113
                },
                {
                    "name": "IDPaiMing",
                    "id": 115
                },
                {
                    "name": "IDOverallInfo",
                    "id": 121
                },
                {
                    "name": "IDTodayListStocks",
                    "id": 122
                },
                {
                    "name": "IDTodayBrokerStocks",
                    "id": 123
                },
                {
                    "name": "IDTodayConvertStocks",
                    "id": 124
                },
                {
                    "name": "IDTodayIssueStocks",
                    "id": 125
                },
                {
                    "name": "IDBrokerDetaileInfo",
                    "id": 126
                },
                {
                    "name": "IDStockBrokerInfo",
                    "id": 127
                },
                {
                    "name": "IDIssueDetaileInfo",
                    "id": 128
                },
                {
                    "name": "IDIssueStatInfo",
                    "id": 129
                },
                {
                    "name": "IDBrokerList",
                    "id": 137
                },
                {
                    "name": "IDFinanceQuickReport",
                    "id": 138
                },
                {
                    "name": "IDNewsDataItem",
                    "id": 147
                },
                {
                    "name": "IDStockNews",
                    "id": 148
                },
                {
                    "name": "IDAnnouncemtDataItem",
                    "id": 149
                },
                {
                    "name": "IDStockAnnouncemt",
                    "id": 150
                },
                {
                    "name": "IDSelfNews",
                    "id": 154
                },
                {
                    "name": "IDSelfAnnouncemt",
                    "id": 155
                },
                {
                    "name": "IDRepCounterRsp",
                    "id": 156
                },
                {
                    "name": "IDCounterRsp",
                    "id": 157
                },
                {
                    "name": "IDQueryCapitalRsp",
                    "id": 158
                },
                {
                    "name": "IDQueryHoldRsp",
                    "id": 159
                },
                {
                    "name": "IDQueryOrderRsp",
                    "id": 160
                },
                {
                    "name": "IDQueryDealRsp",
                    "id": 161
                },
                {
                    "name": "IDCounterSettleRsp",
                    "id": 162
                },
                {
                    "name": "IDTradeRuleRsp",
                    "id": 163
                },
                {
                    "name": "IDQuoteDividSingle",
                    "id": 170
                },
                {
                    "name": "IDF10FundCpbdFbsjjzjzOutput",
                    "id": 179
                },
                {
                    "name": "IDF10FundCpbdJjfebdqkOutput",
                    "id": 180
                },
                {
                    "name": "IDF10FundCpbdJjgbjbOutput",
                    "id": 181
                },
                {
                    "name": "IDF10FundCpbdJjjzbxOutput",
                    "id": 182
                },
                {
                    "name": "IDF10FundCpbdJjxxOutput",
                    "id": 183
                },
                {
                    "name": "IDF10FundCpbdZfeOutput",
                    "id": 184
                },
                {
                    "name": "IDF10FundCwsjJyyjOutput",
                    "id": 185
                },
                {
                    "name": "IDF10FundCwsjZcfzOutput",
                    "id": 186
                },
                {
                    "name": "IDF10FundCwsjZycwzbOutput",
                    "id": 187
                },
                {
                    "name": "IDNewStockInfo",
                    "id": 188
                },
                {
                    "name": "IDF10FundCyrHshjgOutput",
                    "id": 190
                },
                {
                    "name": "IDF10FundFefhFbsjjcyrjgOutput",
                    "id": 191
                },
                {
                    "name": "IDF10FundFefhFhOutput",
                    "id": 192
                },
                {
                    "name": "IDF10FundFefhKfsjjjdfebdOutput",
                    "id": 193
                },
                {
                    "name": "IDF10FundGpmxBqzdmcgpOutput",
                    "id": 194
                },
                {
                    "name": "IDF10FundGpmxBqzdmrgpOutput",
                    "id": 195
                },
                {
                    "name": "IDF10FundGpmxQbcgOutput",
                    "id": 196
                },
                {
                    "name": "IDF10FundHgzwOutput",
                    "id": 197
                },
                {
                    "name": "IDF10FundHytzOutput",
                    "id": 198
                },
                {
                    "name": "IDF10FundHytzQdiiOutput",
                    "id": 199
                },
                {
                    "name": "IDF10FundJbxxOutput",
                    "id": 200
                },
                {
                    "name": "IDF10FundFbsjjgkOutput",
                    "id": 201
                },
                {
                    "name": "IDF10FundKfsjjgkOutput",
                    "id": 202
                },
                {
                    "name": "IDF10FundJlggJjgsggryOutput",
                    "id": 203
                },
                {
                    "name": "IDF10FundJlggJjjlOutput",
                    "id": 204
                },
                {
                    "name": "IDF10FundJyyjOutput",
                    "id": 205
                },
                {
                    "name": "IDF10FundZccgQsmgpmxOutput",
                    "id": 206
                },
                {
                    "name": "IDF10FundZccgQdiiOutput",
                    "id": 207
                },
                {
                    "name": "IDF10FundZqtzTzzhOutput",
                    "id": 208
                },
                {
                    "name": "IDF10FundZqtzTzzhQdiiOutput",
                    "id": 209
                },
                {
                    "name": "IDF10FundZqtzZcmxOutput",
                    "id": 210
                },
                {
                    "name": "IDF10FundZycyrOutput",
                    "id": 211
                },
                {
                    "name": "IDHistoryTrends",
                    "id": 215
                },
                {
                    "name": "IDQuoteDynaMinSingle",
                    "id": 218
                },
                {
                    "name": "IDQuoteHistoryMinSingle",
                    "id": 221
                },
                {
                    "name": "IDF10FundHbjjxeOutput",
                    "id": 222
                },
                {
                    "name": "IDF10BondDfzfzfxOutput",
                    "id": 223
                },
                {
                    "name": "IDF10BondDfzfzqxxOutput",
                    "id": 224
                },
                {
                    "name": "IDF10BondFlszzfxOutput",
                    "id": 225
                },
                {
                    "name": "IDF10BondFlszztkOutput",
                    "id": 226
                },
                {
                    "name": "IDF10BondFlszzxxOutput",
                    "id": 227
                },
                {
                    "name": "IDF10BondGzxxOutput",
                    "id": 228
                },
                {
                    "name": "IDF10BondHgxxOutput",
                    "id": 229
                },
                {
                    "name": "IDF10BondKzzfxOutput",
                    "id": 230
                },
                {
                    "name": "IDF10BondKzztkOutput",
                    "id": 231
                },
                {
                    "name": "IDF10BondKzztzzgjOutput",
                    "id": 232
                },
                {
                    "name": "IDF10BondKzzxxOutput",
                    "id": 233
                },
                {
                    "name": "IDF10BondQycyrOutput",
                    "id": 234
                },
                {
                    "name": "IDF10BondQyzfxOutput",
                    "id": 235
                },
                {
                    "name": "IDF10BondQyzxxOutput",
                    "id": 236
                },
                {
                    "name": "IDF10BondZqggOutput",
                    "id": 237
                },
                {
                    "name": "IDF10BondZqxjlOutput",
                    "id": 238
                },
                {
                    "name": "IDF10BondZqzgOutput",
                    "id": 239
                },
                {
                    "name": "IDF10ForexDqjjOutput",
                    "id": 240
                },
                {
                    "name": "IDF10ForexJqjjOutput",
                    "id": 241
                },
                {
                    "name": "IDF10ForexLlhhOutput",
                    "id": 242
                },
                {
                    "name": "IDF10ForexQqwhjbzlOutput",
                    "id": 243
                },
                {
                    "name": "IDF10ForexShiborlvOutput",
                    "id": 244
                },
                {
                    "name": "IDF10ForexWbdjqOutput",
                    "id": 245
                },
                {
                    "name": "IDF10ForexWhbzMbOutput",
                    "id": 246
                },
                {
                    "name": "IDF10ForexXycjOutput",
                    "id": 247
                },
                {
                    "name": "IDF10ForexYqjjOutput",
                    "id": 248
                },
                {
                    "name": "IDF10FuturesBzhyOutput",
                    "id": 249
                },
                {
                    "name": "IDF10FuturesCpgkOutput",
                    "id": 250
                },
                {
                    "name": "IDF10FuturesFkbfOutput",
                    "id": 251
                },
                {
                    "name": "IDF10FuturesJsxzOutput",
                    "id": 252
                },
                {
                    "name": "IDF10FuturesJygzOutput",
                    "id": 253
                },
                {
                    "name": "IDF10FuturesWphyOutput",
                    "id": 254
                },
                {
                    "name": "IDF10FuturesYxysOutput",
                    "id": 255
                },
                {
                    "name": "IDF10SpotBzhyOutput",
                    "id": 256
                },
                {
                    "name": "IDF10SpotFjsmOutput",
                    "id": 257
                },
                {
                    "name": "IDF10SpotJygzOutput",
                    "id": 258
                },
                {
                    "name": "IDF10SpotPzgkOutput",
                    "id": 259
                },
                {
                    "name": "IDF10SpotWphyOutput",
                    "id": 260
                },
                {
                    "name": "IDF10SpotYxysOutput",
                    "id": 261
                },
                {
                    "name": "IDReportDataItem",
                    "id": 262
                },
                {
                    "name": "IDStockReport",
                    "id": 263
                },
                {
                    "name": "IDSelfReport",
                    "id": 264
                },
                {
                    "name": "IDQuoteFundFlowSingle",
                    "id": 265
                },
                {
                    "name": "IDMonthTrends",
                    "id": 266
                },
                {
                    "name": "IDQuoteQueueMinSingle",
                    "id": 269
                }
            ]
        }
    ]
}).build(["dzhyun"]);