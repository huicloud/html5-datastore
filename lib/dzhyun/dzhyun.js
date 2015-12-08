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
            "name": "UserProp",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Lable",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Value",
                    "id": 3
                }
            ]
        },
        {
            "name": "UserPropsMessage",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Name",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "UserProp",
                    "name": "Lables",
                    "id": 2
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
            "name": "DSToken",
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
            "name": "AlarmEvent",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CuoWuMa",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJianBianHao",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Obj",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShiJian",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RenWuBianHao",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ZiDuan",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChuFaFangShi",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShuZhi",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ChuFaXinXi",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "YiYueBiaoJi",
                    "id": 10
                }
            ],
            "enums": [
                {
                    "name": "AlarmEventStatus",
                    "values": [
                        {
                            "name": "STATUS_UnRead",
                            "id": 0
                        },
                        {
                            "name": "STATUS_Read",
                            "id": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "AlarmTask",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "CuoWuMa",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "RenWuBianHao",
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
                    "type": "string",
                    "name": "Obj",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ZiDuan",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ChuFaFangShi",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ShuZhi",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "ZhuangTai",
                    "id": 8
                }
            ],
            "enums": [
                {
                    "name": "AlarmTriggerType",
                    "values": [
                        {
                            "name": "TYPE_CompareGT",
                            "id": 0
                        },
                        {
                            "name": "TYPE_CompareGTE",
                            "id": 1
                        },
                        {
                            "name": "TYPE_CompareLT",
                            "id": 2
                        },
                        {
                            "name": "TYPE_CompareLTE",
                            "id": 3
                        },
                        {
                            "name": "TYPE_CompareCross",
                            "id": 4
                        },
                        {
                            "name": "TYPE_CompareUpCross",
                            "id": 5
                        },
                        {
                            "name": "TYPE_CompareDownCross",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "AlarmTaskStatus",
                    "values": [
                        {
                            "name": "STATUS_Stop",
                            "id": 0
                        },
                        {
                            "name": "STATUS_Running",
                            "id": 1
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
                    "rule": "required",
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
                            "rule": "required",
                            "type": "int64",
                            "name": "BiShu",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "int64",
                            "name": "Liang",
                            "id": 3
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
            "name": "ADPutResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "ErrCode",
                    "id": 1
                }
            ]
        },
        {
            "name": "ADInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Slot",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Data",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Version",
                    "id": 3
                }
            ]
        },
        {
            "name": "ADGetResponse",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ADInfo",
                    "name": "Slots",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "PropVersion",
                    "id": 2
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
                }
            ]
        },
        {
            "name": "MessageChannelSubtype",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "queue_size",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "per_size",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "description",
                    "id": 4
                }
            ]
        },
        {
            "name": "FenJiJiJin",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Type",
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
                    "type": "int64",
                    "name": "ZhengTiYiJia",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MYiJia",
                    "id": 51
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MShiShiJingZhi",
                    "id": 52
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MShangZheXuZhang",
                    "id": 53
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "MXiaZheXuDie",
                    "id": 54
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "YinHanShouYi",
                    "id": 101
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "JiaGeGangGan",
                    "id": 151
                }
            ]
        },
        {
            "name": "FenJiJiJinJingTai",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "FenJiJingTaiShuJu",
                    "name": "ShuJu",
                    "id": 1
                }
            ]
        },
        {
            "name": "FenJiJingTaiShuJu",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "MObj",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "MJingZhi",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "MShangZheFaZhi",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "AObj",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "AZuiXinJingZhi",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "AChangNeiFenE",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "AFenEZhanBi",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "AYueDingShouYi",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "AYueDingShouYi2",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "BObj",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "BZuiXinJingZhi",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "BChangNeiFenE",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "BGenZongObj",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "BChuShiGangGan",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "BFenEZhanBi",
                    "id": 15
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "BXiaZheFaZhi",
                    "id": 16
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
            "name": "SelfStock",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "stock_code",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "add_time",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "op",
                    "id": 3
                }
            ]
        },
        {
            "name": "FullSelfStock",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "SelfStock",
                    "name": "codes",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "position",
                    "id": 2,
                    "options": {
                        "default": 0
                    }
                }
            ]
        },
        {
            "name": "SelfStockGetOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "uid",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "SelfStock",
                    "name": "codes",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "type",
                    "id": 3
                }
            ]
        },
        {
            "name": "SelfStockPutOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "uid",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "status",
                    "id": 2
                }
            ]
        },
        {
            "name": "Privilege",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "value",
                    "id": 2
                }
            ]
        },
        {
            "name": "Privileges",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "Privilege",
                    "name": "items",
                    "id": 1
                }
            ]
        },
        {
            "name": "AppInfo",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Owner",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Desc",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Email",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "ExpireTime",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "CreateTime",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Limit",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "Duration",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "AppId",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "SecretKey",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "ServiceAuth",
                    "name": "Auth",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "CrmAppId",
                    "id": 12
                }
            ]
        },
        {
            "name": "ProfileValue",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "BitPos",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "Privilege",
                    "name": "Priv",
                    "id": 2
                }
            ]
        },
        {
            "name": "ServiceAuth",
            "fields": [
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "AuthBitMask",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "ProfileValue",
                    "name": "BitProfileValue",
                    "id": 2
                }
            ]
        },
        {
            "name": "AccOpResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Result",
                    "id": 1,
                    "options": {
                        "default": "0"
                    }
                },
                {
                    "rule": "optional",
                    "type": "AppInfo",
                    "name": "Info",
                    "id": 2
                }
            ]
        },
        {
            "name": "TokenData",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Token",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Appid",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "CreatedTime",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ExpireTime",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "RefreshTime",
                    "id": 5
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Duration",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "ServiceAuth",
                    "name": "Auth",
                    "id": 7
                }
            ]
        },
        {
            "name": "AppKey",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "AppId",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Secret",
                    "id": 2
                }
            ]
        },
        {
            "name": "AppValue",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Secret",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "AppInfo",
                    "name": "Info",
                    "id": 2
                }
            ]
        },
        {
            "name": "AppInfoServiceAuth",
            "fields": [
                {
                    "rule": "required",
                    "type": "AppInfo",
                    "name": "Info",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "ServiceAuth",
                    "name": "Auth",
                    "id": 2
                }
            ]
        },
        {
            "name": "AppServiceAuth",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "AppId",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "AppInfoServiceAuth",
                    "name": "Data",
                    "id": 2
                }
            ]
        },
        {
            "name": "ServiceAuthList",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "AppServiceAuth",
                    "name": "AppAuthLists",
                    "id": 1
                }
            ]
        },
        {
            "name": "TokenAuth",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "Limit",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "Expireln",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "ExpireTime",
                    "id": 3
                }
            ]
        },
        {
            "name": "YunMsg",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "RecordTime",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "from",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "to",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "type",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "msg",
                    "id": 5
                }
            ]
        },
        {
            "name": "MsgGetOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "to",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "YunMsg",
                    "name": "msgs",
                    "id": 2
                }
            ]
        },
        {
            "name": "MsgPutOutput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "from",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "to",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "status",
                    "id": 3
                }
            ]
        },
        {
            "name": "YunMsgType",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "literalVal",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "numericVal",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "objType",
                    "id": 3
                }
            ]
        },
        {
            "name": "UserGroup",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Name",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "user_prop",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "create_time",
                    "id": 4
                }
            ]
        },
        {
            "name": "UserGroupResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Err_code",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Err_msg",
                    "id": 3
                }
            ]
        },
        {
            "name": "PrivConst",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "urlKey",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "attribute",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "description",
                    "id": 4
                }
            ]
        },
        {
            "name": "ServiceAuthConsts",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "pos",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "description",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "PrivConst",
                    "name": "items",
                    "id": 4
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
                }
            ]
        },
        {
            "name": "AttrsMap",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "key",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "value",
                    "id": 2
                }
            ]
        },
        {
            "name": "UserGetPropResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "userid",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "accounttype",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "timestamp",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "AttrsMap",
                    "name": "attrs",
                    "id": 4
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
            "name": "Stock",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "Price",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Time",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Obj",
                    "id": 3
                }
            ]
        },
        {
            "name": "StkPool",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Text",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "Stock",
                    "name": "Stk",
                    "id": 2
                }
            ]
        },
        {
            "name": "StkPoolOuput",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "CeWenShiJian",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "StkPool",
                    "name": "Pooldata",
                    "id": 2
                }
            ]
        },
        {
            "name": "EventNews",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "id",
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
                    "name": "title",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "context",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "objList",
                    "id": 5
                }
            ]
        },
        {
            "name": "EventNewsList",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "EventNews",
                    "name": "dataList",
                    "id": 1
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
            "name": "FluxValue",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Appid",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "Flux",
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
                    "type": "string",
                    "name": "JsonTbl",
                    "id": 4
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
                    "type": "ZhiBiaoShuChu",
                    "name": "RepDataZhiBiaoShuChu",
                    "id": 25
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
                    "type": "FenJiJiJin",
                    "name": "RepDataFenJiJiJin",
                    "id": 30
                },
                {
                    "rule": "repeated",
                    "type": "MsgGetOutput",
                    "name": "RepDataMsgGetOutput",
                    "id": 31
                },
                {
                    "rule": "repeated",
                    "type": "MsgPutOutput",
                    "name": "RepDataMsgPutOutput",
                    "id": 32
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
                    "type": "SelfStockGetOutput",
                    "name": "RepDataSelfStockGetOutput",
                    "id": 35
                },
                {
                    "rule": "repeated",
                    "type": "SelfStockPutOutput",
                    "name": "RepDataSelfStockPutOutput",
                    "id": 36
                },
                {
                    "rule": "repeated",
                    "type": "AppKey",
                    "name": "RepDataAppKey",
                    "id": 37
                },
                {
                    "rule": "repeated",
                    "type": "AppInfo",
                    "name": "RepDataAppInfo",
                    "id": 38
                },
                {
                    "rule": "repeated",
                    "type": "AppValue",
                    "name": "RepDataAppValue",
                    "id": 39
                },
                {
                    "rule": "repeated",
                    "type": "ServiceAuth",
                    "name": "RepDataServiceAuth",
                    "id": 40
                },
                {
                    "rule": "repeated",
                    "type": "AppServiceAuth",
                    "name": "RepDataAppServiceAuth",
                    "id": 41
                },
                {
                    "rule": "repeated",
                    "type": "TokenAuth",
                    "name": "RepDataTokenAuth",
                    "id": 42
                },
                {
                    "rule": "repeated",
                    "type": "AccOpResponse",
                    "name": "RepDataAccOpResponse",
                    "id": 43
                },
                {
                    "rule": "repeated",
                    "type": "Token",
                    "name": "RepDataToken",
                    "id": 44
                },
                {
                    "rule": "repeated",
                    "type": "Privilege",
                    "name": "RepDataPrivilege",
                    "id": 45
                },
                {
                    "rule": "repeated",
                    "type": "AlarmEvent",
                    "name": "RepDataAlarmEvent",
                    "id": 46
                },
                {
                    "rule": "repeated",
                    "type": "AlarmTask",
                    "name": "RepDataAlarmTask",
                    "id": 47
                },
                {
                    "rule": "repeated",
                    "type": "ADPutResponse",
                    "name": "RepDataADPutResponse",
                    "id": 48
                },
                {
                    "rule": "repeated",
                    "type": "ADGetResponse",
                    "name": "RepDataADGetResponse",
                    "id": 49
                },
                {
                    "rule": "repeated",
                    "type": "UserGroup",
                    "name": "RepDataUserGroup",
                    "id": 50
                },
                {
                    "rule": "repeated",
                    "type": "UserGroupResponse",
                    "name": "RepDataUserGroupResponse",
                    "id": 51
                },
                {
                    "rule": "repeated",
                    "type": "UserPropsMessage",
                    "name": "RepDataUserPropsMessage",
                    "id": 52
                },
                {
                    "rule": "repeated",
                    "type": "TopicInvest",
                    "name": "RepDataTopicInvest",
                    "id": 53
                },
                {
                    "rule": "repeated",
                    "type": "TopicInvestHistory",
                    "name": "RepDataTopicInvestHistory",
                    "id": 54
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
                    "type": "TopicInvestInfo",
                    "name": "RepDataTopicInvestInfo",
                    "id": 67
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
                    "type": "DSToken",
                    "name": "RepDataDSToken",
                    "id": 72
                },
                {
                    "rule": "repeated",
                    "type": "TongJiApp",
                    "name": "RepDataTongJiApp",
                    "id": 73
                },
                {
                    "rule": "repeated",
                    "type": "MessageChannelSubtype",
                    "name": "RepDataMessageChannelSubtype",
                    "id": 74
                },
                {
                    "rule": "repeated",
                    "type": "UserGetPropResponse",
                    "name": "RepDataUserGetPropResponse",
                    "id": 75
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
                    "type": "StkPoolOuput",
                    "name": "RepDataStkPoolOuput",
                    "id": 78
                },
                {
                    "rule": "repeated",
                    "type": "EventNews",
                    "name": "RepDataEventNews",
                    "id": 79
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
                    "type": "ServiceAuthConsts",
                    "name": "RepDataServiceAuthConsts",
                    "id": 112
                },
                {
                    "rule": "repeated",
                    "type": "DXSpiritStat",
                    "name": "RepDataDXSpiritStat",
                    "id": 113
                },
                {
                    "rule": "repeated",
                    "type": "FluxValue",
                    "name": "RepDataFluxValue",
                    "id": 114
                },
                {
                    "rule": "repeated",
                    "type": "PaiMing",
                    "name": "RepDataPaiMing",
                    "id": 115
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
                }
            ]
        },
        {
            "name": "FJJJ_TYPE",
            "values": [
                {
                    "name": "FJJJ_TYPE_A",
                    "id": 1
                },
                {
                    "name": "FJJJ_TYPE_B",
                    "id": 2
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
                    "name": "IDJsonTbl",
                    "id": 4
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
                    "name": "IDZhiBiaoShuChu",
                    "id": 25
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
                    "name": "IDFenJiJiJin",
                    "id": 30
                },
                {
                    "name": "IDMsgGetOutput",
                    "id": 31
                },
                {
                    "name": "IDMsgPutOutput",
                    "id": 32
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
                    "name": "IDSelfStockGetOutput",
                    "id": 35
                },
                {
                    "name": "IDSelfStockPutOutput",
                    "id": 36
                },
                {
                    "name": "IDAppKey",
                    "id": 37
                },
                {
                    "name": "IDAppInfo",
                    "id": 38
                },
                {
                    "name": "IDAppValue",
                    "id": 39
                },
                {
                    "name": "IDServiceAuth",
                    "id": 40
                },
                {
                    "name": "IDAppServiceAuth",
                    "id": 41
                },
                {
                    "name": "IDTokenAuth",
                    "id": 42
                },
                {
                    "name": "IDAccOpResponse",
                    "id": 43
                },
                {
                    "name": "IDToken",
                    "id": 44
                },
                {
                    "name": "IDPrivilege",
                    "id": 45
                },
                {
                    "name": "IDAlarmEvent",
                    "id": 46
                },
                {
                    "name": "IDAlarmTask",
                    "id": 47
                },
                {
                    "name": "IDADPutResponse",
                    "id": 48
                },
                {
                    "name": "IDADGetResponse",
                    "id": 49
                },
                {
                    "name": "IDUserGroup",
                    "id": 50
                },
                {
                    "name": "IDUserGroupResponse",
                    "id": 51
                },
                {
                    "name": "IDUserPropsMessage",
                    "id": 52
                },
                {
                    "name": "IDTopicInvest",
                    "id": 53
                },
                {
                    "name": "IDTopicInvestHistory",
                    "id": 54
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
                    "name": "IDTopicInvestInfo",
                    "id": 67
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
                    "name": "IDDSToken",
                    "id": 72
                },
                {
                    "name": "IDTongJiApp",
                    "id": 73
                },
                {
                    "name": "IDMessageChannelSubtype",
                    "id": 74
                },
                {
                    "name": "IDUserGetPropResponse",
                    "id": 75
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
                    "name": "IDStkPoolOuput",
                    "id": 78
                },
                {
                    "name": "IDEventNews",
                    "id": 79
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
                    "name": "IDServiceAuthConsts",
                    "id": 112
                },
                {
                    "name": "IDDXSpiritStat",
                    "id": 113
                },
                {
                    "name": "IDFluxValue",
                    "id": 114
                },
                {
                    "name": "IDPaiMing",
                    "id": 115
                }
            ]
        }
    ]
}).build(["dzhyun"]);