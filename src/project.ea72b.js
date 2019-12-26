window.__require = function e(t, o, n) {
    function i(r, c) {
        if (!o[r]) {
            if (!t[r]) {
                var s = r.split("/");
                if (s = s[s.length - 1],
                !t[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l)
                        return l(s, !0);
                    if (a)
                        return a(s, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
            }
            var u = o[r] = {
                exports: {}
            };
            t[r][0].call(u.exports, function(e) {
                return i(t[r][1][e] || e)
            }, u, u.exports, e, t, o, n)
        }
        return o[r].exports
    }
    for (var a = "function" == typeof __require && __require, r = 0; r < n.length; r++)
        i(n[r]);
    return i
}({
    Ads: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2126e3f1INOrr1U6NyF16C+", "Ads");
        var n = {
            getNoAds: function() {
                return Tools.boolForKey(GameConfig.localKeys.isNoAds, !1)
            },
            noAds: function() {
                Tools.setBool(GameConfig.localKeys.isNoAds, !0),
                n.dismissBannerAds()
            },
            randomIos: function() {
                return 1
            },
            showBannerAds: function() {
                n.getNoAds() || (cc.sys.os == cc.sys.OS_ANDROID ? native.callClz("JSCall", "showBannerAds", function(e) {}) : cc.sys.os == cc.sys.OS_IOS && native.callClz("JSAds", "showBannerAds", function(e) {}))
            },
            dismissBannerAds: function() {
                cc.sys.os == cc.sys.OS_ANDROID ? native.callClz("JSCall", "closeBannerAds") : cc.sys.os == cc.sys.OS_IOS && native.callClz("JSAds", "dismissBannerAds")
            },
            showRewardAds: function(e) {
                if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
                    if (cc.sys.os == cc.sys.OS_ANDROID)
                        ut.pauseBgMp3(),
                        native.callClz("JSCall", "showVideoAds", function(t) {
                            ut.resumeBgMp3(),
                            e(t)
                        });
                    else if (cc.sys.os == cc.sys.OS_IOS) {
                        ut.pauseBgMp3(),
                        0 == n.randomIos() ? native.callClz("JSAds", "rewardVideoAds", function(t) {
                            ut.resumeBgMp3(),
                            t ? e(t) : native.callClz("JSMex", "rewardVideoAds", function(t) {
                                e(t)
                            })
                        }) : native.callClz("JSMex", "rewardVideoAds", function(t) {
                            ut.resumeBgMp3(),
                            t ? e(t) : native.callClz("JSAds", "rewardVideoAds", function(t) {
                                e(t)
                            })
                        })
                    }
                } else
                    e(!0)
            },
            showInterstitialAds: function(e) {
                if (n.getNoAds())
                    e(!0);
                else if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
                    if (cc.sys.os == cc.sys.OS_ANDROID)
                        ut.pauseBgMp3(),
                        native.callClz("JSCall", "showInterstitialAds", function(t) {
                            ut.resumeBgMp3(),
                            e(t)
                        });
                    else if (cc.sys.os == cc.sys.OS_IOS) {
                        ut.pauseBgMp3(),
                        0 == n.randomIos() ? native.callClz("JSAds", "interstitialAds", function(t) {
                            ut.resumeBgMp3(),
                            t ? e(t) : native.callClz("JSMex", "interstitialAds", function(t) {
                                e(t)
                            })
                        }) : native.callClz("JSMex", "interstitialAds", function(t) {
                            ut.resumeBgMp3(),
                            t ? e(t) : native.callClz("JSAds", "interstitialAds", function(t) {
                                e(t)
                            })
                        })
                    }
                } else
                    e(!0)
            }
        };
        window.Ads = n,
        cc._RF.pop()
    }
    , {}],
    AuthScene: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9d651lxqldBTpKZhQcYCabi", "AuthScene");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Scene/SceneItem")
          , r = e("../../Tools/WX/WxTool")
          , c = e("../../Quick")
          , s = e("../../Tools/WX/WxUserInfo")
          , l = e("../../../Scene/SceneManager")
          , u = e("../UIPath")
          , d = e("../../Tools/WX/DB/Hope_DB")
          , p = e("../../Tools/WX/DB/Pf_DB")
          , h = e("../../Configs/PfConfig")
          , f = e("../../Configs/GameConfig")
          , g = e("../../MyProView.ts")
          , y = cc._decorator
          , _ = y.ccclass
          , m = y.property
          , v = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.myPro = null,
                t.loadingLabel = null,
                t.loading = 0,
                t.label_loading = 0,
                t.temp = 0,
                t
            }
            return n(t, e),
            t.prototype.start = function() {
                var e = this;
                this.myPro = this.getComponent(g.default),
                cc.sys.platform == cc.sys.WECHAT_GAME ? (this.myPro.setPro(0),
                r.WxTool.getInstance().login({
                    success: function(t) {
                        e.myPro.setPro(20),
                        e.check()
                    }
                })) : l.default.getInstance().show(u.UIPath.sc_home)
            }
            ,
            t.prototype.check = function() {
                var e = this;
                wx.hsdk.checkIPs({
                    interfaceIds: ["default"],
                    callback: function(t) {
                        e.myPro.setPro(30),
                        console.log("\u68c0\u6d4b\u7ed3\u679c\uff1a", t.result.default),
                        console.log("\u68c0\u6d4b\u7ed3\u679c\uff1a", t.result),
                        f.GameConfig.upok = t.result.default,
                        e.getUserInfo()
                    }
                })
            }
            ,
            t.prototype.update = function(e) {}
            ,
            t.prototype.setLoading = function(e) {
                this.loadingLabel.string = "Loading  " + e + "%"
            }
            ,
            t.prototype.getUserInfo = function() {
                var e = this;
                r.WxTool.getInstance().getUserInfo({
                    success: function(t) {
                        console.log("getUserInfo\u6210\u529f"),
                        console.log(t),
                        c.Quick.myInfo = new s.WxUserInfo(t.avatarUrl,t.nickName,t.gender),
                        c.Quick.myInfo.map = t,
                        e.myPro.setPro(50),
                        e.getOpenid()
                    }
                })
            }
            ,
            t.prototype.getOpenid = function() {
                var e = this;
                r.WxTool.getInstance().cloudCallFunction({
                    name: "userInfo",
                    complete: function(t) {
                        console.log("callFunction test result: ", t),
                        c.Quick.openId = t.result.info.openId,
                        r.WxTool.getInstance().sendMessageOpenData({
                            type: 0,
                            openid: c.Quick.openId
                        }),
                        f.GameConfig.shareContent = t.result.data.share,
                        e.loading = 60,
                        e.updateUserInfo()
                    }
                })
            }
            ,
            t.prototype.updateUserInfo = function() {
                var e = this;
                r.WxTool.getInstance().db.login({
                    openid: c.Quick.openId,
                    info: c.Quick.myInfo.map
                }, function(t) {
                    t && e.hopeQuery(),
                    e.myPro.setPro(80),
                    c.Quick.updateMydata(function() {
                        e.loadRes()
                    })
                })
            }
            ,
            t.prototype.hopeQuery = function() {
                var e = r.WxTool.getInstance().getLaunchOptionsSync().query;
                e.type == r.WxTool.query_hope && d.Hope_DB.addHope(e.id)
            }
            ,
            t.prototype.loadRes = function() {
                var e = this;
                this.myPro.setPro(90),
                p.Pf_DB.request(function() {
                    e.myPro.setPro(100),
                    h.PfConfig.loadAndReleasePf(null, p.Pf_DB.getCurrentPf().getStringId(), function() {
                        l.default.getInstance().show(u.UIPath.sc_home)
                    })
                })
            }
            ,
            i([m(cc.Label)], t.prototype, "loadingLabel", void 0),
            t = i([_], t)
        }(a.default);
        o.default = v,
        cc._RF.pop()
    }
    , {
        "../../../Scene/SceneItem": "SceneItem",
        "../../../Scene/SceneManager": "SceneManager",
        "../../Configs/GameConfig": "GameConfig",
        "../../Configs/PfConfig": "PfConfig",
        "../../MyProView.ts": "MyProView.ts",
        "../../Quick": "Quick",
        "../../Tools/WX/DB/Hope_DB": "Hope_DB",
        "../../Tools/WX/DB/Pf_DB": "Pf_DB",
        "../../Tools/WX/WxTool": "WxTool",
        "../../Tools/WX/WxUserInfo": "WxUserInfo",
        "../UIPath": "UIPath"
    }],
    CellCubeEffect: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a8a5af+ZRpHQ6GSP5Qh98F0", "CellCubeEffect");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../Tools/MathTool")
          , r = e("../Tools/QuickTool")
          , c = cc._decorator
          , s = c.ccclass
          , l = c.property
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.preNode = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.playWithColor = function(e) {
                for (var t = this, o = a.MathTool.randomNum(7, 12), n = [], i = 0; i < o; i++) {
                    var c = a.MathTool.randomNum(30, 40)
                      , s = a.MathTool.randomNum(30, 40)
                      , l = cc.instantiate(this.preNode);
                    l.active = !0,
                    l.setParent(this.node),
                    l.setContentSize(cc.size(c, s)),
                    l.color = e,
                    n.push(l),
                    this.move(l)
                }
                r.QuickTool.delayExec(this.node, .5, function() {
                    t.node.setParent(null)
                })
            }
            ,
            t.prototype.play = function() {
                for (var e = this, t = cc.color(a.MathTool.randomNum(0, 255), a.MathTool.randomNum(0, 255), a.MathTool.randomNum(0, 255)), o = a.MathTool.randomNum(7, 12), n = [], i = 0; i < o; i++) {
                    var c = a.MathTool.randomNum(30, 40)
                      , s = a.MathTool.randomNum(30, 40)
                      , l = cc.instantiate(this.preNode);
                    l.active = !0,
                    l.setParent(this.node),
                    l.setContentSize(cc.size(c, s)),
                    l.color = t,
                    n.push(l),
                    this.move(l)
                }
                r.QuickTool.delayExec(this.node, .5, function() {
                    e.node.setParent(null)
                })
            }
            ,
            t.prototype.move = function(e) {
                var t = Math.random()
                  , o = Math.random()
                  , n = t > o ? t : o
                  , i = a.MathTool.randomNum(30, 80)
                  , r = i / n;
                t > o ? (t = i,
                o *= r) : (o = i,
                t *= r),
                0 == a.MathTool.randomNum(0, 1) && (t = -t),
                0 == a.MathTool.randomNum(0, 1) && (o = -o),
                e.x = .5 * t,
                e.y = .5 * o;
                e.runAction(cc.moveBy(.6, cc.v2(t, o))),
                e.runAction(cc.scaleTo(.6, .3)),
                e.runAction(cc.sequence(cc.delayTime(.3), cc.fadeOut(.3)))
            }
            ,
            i([l(cc.Node)], t.prototype, "preNode", void 0),
            t = i([s], t)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../Tools/MathTool": "MathTool",
        "../Tools/QuickTool": "QuickTool"
    }],
    CellLightEffect: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a212aV0ZY5Mmo7ko/dk4jy1", "CellLightEffect");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../Tools/QuickTool")
          , r = e("../Tools/WX/DB/Pf_DB")
          , c = cc._decorator
          , s = c.ccclass
          , l = c.property
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.anim = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.play = function() {
                var e = this;
                console.log(r.Pf_DB.getCurrentPf().id - 1);
                var t = this.anim.getClips()[r.Pf_DB.getCurrentPf().id - 1];
                this.anim.play(t.name),
                a.QuickTool.delayExec(this.node, .43, function() {
                    e.node.setParent(null)
                })
            }
            ,
            i([l(cc.Animation)], t.prototype, "anim", void 0),
            t = i([s], t)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../Tools/QuickTool": "QuickTool",
        "../Tools/WX/DB/Pf_DB": "Pf_DB"
    }],
    CellView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9f07fZ+rdxD2IDiY4+cYdV8", "CellView");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Configs/GameConfig")
          , r = e("../../../Tools/SpriteTool")
          , c = e("../../../Tools/WX/DB/Pf_DB")
          , s = e("../../../Effect/CellLightEffect")
          , l = e("../../../Effect/CellCubeEffect")
          , u = e("../../../Configs/PfConfig")
          , d = cc._decorator
          , p = d.ccclass
          , h = d.property
          , f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.spriteBg = null,
                t.textLabel = null,
                t.flyX = 0,
                t.flyY = 0,
                t.num = 2,
                t.readyMerge = !1,
                t.isMoveAction = !1,
                t.EndFlyY = o.YNO,
                t.effectPrefab = null,
                t.effectLightPrefab = null,
                t.isSelect = !1,
                t.selectNode = null,
                t
            }
            var o;
            return n(t, e),
            o = t,
            t.prototype.start = function() {
                c.Pf_DB.getCurrentPf().isHaveNum && (this.textLabel.node.active = !1)
            }
            ,
            t.prototype.select = function(e) {
                this.isSelect = e,
                this.selectNode.active = e
            }
            ,
            t.prototype.setNum = function(e) {
                if (this.num = e,
                r.SpriteTool.loadSprite(this.spriteBg, c.Pf_DB.getCurrentPf().getCellPath(e)),
                !c.Pf_DB.getCurrentPf().isHaveNum) {
                    var t = e + "";
                    this.textLabel.string = t,
                    1 == t.length ? this.textLabel.fontSize = 80 : 2 == t.length ? this.textLabel.fontSize = 70 : 3 == t.length ? this.textLabel.fontSize = 50 : 4 == t.length ? this.textLabel.fontSize = 40 : 5 == t.length && (this.textLabel.fontSize = 30)
                }
            }
            ,
            t.prototype.setOriginalNum = function(e) {
                this.num = e,
                this.textLabel.node.active = !0,
                r.SpriteTool.loadSprite(this.spriteBg, u.PfConfig.getPfs()[0].getCellPath(e));
                var t = e + "";
                this.textLabel.string = t,
                1 == t.length ? this.textLabel.fontSize = 80 : 2 == t.length ? this.textLabel.fontSize = 70 : 3 == t.length ? this.textLabel.fontSize = 50 : 4 == t.length ? this.textLabel.fontSize = 40 : 5 == t.length && (this.textLabel.fontSize = 30)
            }
            ,
            t.prototype.changeNum = function(e) {
                var t = this
                  , o = [cc.scaleTo(.8 * a.GameConfig.cellMoveTime, 1.4), cc.scaleTo(.1 * a.GameConfig.cellMoveTime, 1.1), cc.callFunc(function() {
                    t.playMergeEffect(t.num),
                    t.setNum(e)
                }), cc.scaleTo(.1 * a.GameConfig.cellMoveTime, 1)];
                this.spriteBg.node.runAction(cc.sequence(o)),
                this.spriteBg.node.runAction(cc.sequence([cc.fadeTo(.8 * a.GameConfig.cellMoveTime, 153), cc.fadeTo(.1 * a.GameConfig.cellMoveTime, 255)]))
            }
            ,
            t.prototype.playMergeEffect = function(e) {
                var t = cc.instantiate(this.effectLightPrefab);
                t.setParent(this.node),
                t.setPosition(cc.v2(0, 0)),
                t.getComponent(s.default).play();
                var o = cc.instantiate(this.effectPrefab);
                o.setParent(this.node),
                o.setPosition(cc.v2(0, 0)),
                o.getComponent(l.default).playWithColor(a.GameConfig.cellCubeColors[e + ""])
            }
            ,
            t.prototype.move = function(e, t, o) {
                var n = this
                  , i = [cc.moveTo(e, t, o), cc.callFunc(function() {
                    n.isMoveAction = !1
                })];
                this.isMoveAction = !0,
                this.node.runAction(cc.sequence(i))
            }
            ,
            t.YNO = -9999,
            i([h(cc.Sprite)], t.prototype, "spriteBg", void 0),
            i([h(cc.Label)], t.prototype, "textLabel", void 0),
            i([h(cc.Prefab)], t.prototype, "effectPrefab", void 0),
            i([h(cc.Prefab)], t.prototype, "effectLightPrefab", void 0),
            i([h(cc.Node)], t.prototype, "selectNode", void 0),
            t = o = i([p], t)
        }(cc.Component);
        o.default = f,
        cc._RF.pop()
    }
    , {
        "../../../Configs/GameConfig": "GameConfig",
        "../../../Configs/PfConfig": "PfConfig",
        "../../../Effect/CellCubeEffect": "CellCubeEffect",
        "../../../Effect/CellLightEffect": "CellLightEffect",
        "../../../Tools/SpriteTool": "SpriteTool",
        "../../../Tools/WX/DB/Pf_DB": "Pf_DB"
    }],
    DBConfig: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e77a9gfZaRCRY6YbqllgmLq", "DBConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.name_todos = "todos",
            e
        }();
        o.DBConfig = n,
        cc._RF.pop()
    }
    , {}],
    DropConfig: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1b15ed7Gu5PQqf+KPhELGT3", "DropConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../Tools/WX/WxTool")
          , i = function() {
            function e() {
                this.name = "\u6362\u4f4d\u5361",
                this.getType = 1,
                this.diamond = 100,
                this.count = 0,
                this.dropType = a.dropTypeAddition,
                this.sprite = "Sprite/Home/Card/addition"
            }
            return e.prototype.getStringId = function() {
                return "drop" + this.dropType
            }
            ,
            e
        }();
        o.DropData = i;
        var a = function() {
            function e() {}
            return e.getDrops = function() {
                return 0 == this.drops.length && this.createDrop(),
                this.drops
            }
            ,
            e.getDrop = function(e) {
                for (var t = 0; t < this.drops.length; t++)
                    if (this.drops[t].dropType == e)
                        return this.drops[t];
                return null
            }
            ,
            e.createDrop = function() {
                var t = new i;
                if (t.name = "\u6362\u4f4d\u5361",
                t.getType = 1,
                t.diamond = 200,
                t.dropType = e.dropTypeTransposition,
                t.sprite = "Sprite/Home/Card/transposition",
                this.drops.push(t),
                (t = new i).getType = 1,
                t.name = "\u66f4\u6362\u5361",
                t.diamond = 100,
                t.dropType = e.dropTypeConversion,
                t.sprite = "Sprite/Home/Card/conversion",
                this.drops.push(t),
                (t = new i).getType = 1,
                t.name = "\u6d88\u9664\u5361",
                t.diamond = 100,
                t.dropType = e.dropTypeEliminate,
                t.sprite = "Sprite/Home/Card/eliminate",
                this.drops.push(t),
                (t = new i).getType = 1,
                t.name = "\u6682\u505c\u5361",
                t.diamond = 100,
                t.dropType = e.dropTypePause,
                t.sprite = "Sprite/Home/Card/pause",
                this.drops.push(t),
                !n.WxTool.isWx())
                    for (var o = 0; o < this.drops.length; o++)
                        this.drops[o].count = 100
            }
            ,
            e.dropTypeAddition = 1,
            e.dropTypeConversion = 2,
            e.dropTypeEliminate = 3,
            e.dropTypePause = 4,
            e.dropTypeTransposition = 5,
            e.drops = new Array,
            e
        }();
        o.DropConfig = a,
        cc._RF.pop()
    }
    , {
        "../Tools/WX/WxTool": "WxTool"
    }],
    DropTipsLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "adeaaZ9ZNBEX6v9Ca48/T3M", "DropTipsLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../Scene/LayerItem")
          , r = e("../../../../Scene/LayerManager")
          , c = e("../../../Tools/WX/WxTool")
          , s = cc._decorator
          , l = s.ccclass
          , u = (s.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.start = function() {
                c.WxTool.showBanner(c.WxTool.bannerAd_dropTips)
            }
            ,
            t.prototype.onExit = function() {
                c.WxTool.hideAllBanner()
            }
            ,
            t.prototype.onClickCloseButton = function() {
                r.default.getInstance().dismissItem(this)
            }
            ,
            t = i([l], t)
        }(a.default));
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Tools/WX/WxTool": "WxTool"
    }],
    Drop_DB: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f5af6ZH8n5EXbufq8NAeXZF", "Drop_DB"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../WxTool")
          , i = e("../../../Configs/DropConfig")
          , a = e("../../../Quick")
          , r = e("../../QuickTool")
          , c = e("../../../../Scene/LayerManager")
          , s = e("../../../Logic/UIPath")
          , l = function() {
            function e() {}
            return e.values = function(e) {
                for (var t = i.DropConfig.getDrops(), o = 0; o < t.length; o++) {
                    var n = t[o].getStringId();
                    r.QuickTool.isNullToo(e[n]) || (t[o].count = e[n].count)
                }
            }
            ,
            e.request = function(t) {
                var o = this;
                n.WxTool.isWx() ? n.WxTool.getInstance().db.getCollections(e.path).where({
                    _openid: a.Quick.openId
                }).get().then(function(e) {
                    e.data && e.data.length > 0 && o.values(e.data[0]),
                    t(i.DropConfig.getDrops())
                }) : t(i.DropConfig.getDrops())
            }
            ,
            e.buyDrop = function(e) {
                if (!n.WxTool.isWx())
                    return i.DropConfig.getDrop(e.type).count++,
                    void e.success();
                n.WxTool.getInstance().cloudCallFunction({
                    name: "buyDrop",
                    data: {
                        dropid: e.dropid,
                        count: e.count,
                        diamond: e.diamond
                    },
                    complete: function(t) {
                        0 == t.result.success ? (c.default.getInstance().showMomentHint(t.result.msg),
                        e.fail()) : (i.DropConfig.getDrop(e.type).count++,
                        e.success())
                    }
                })
            }
            ,
            e.useDropWithDrop = function(e, t) {
                this.useDrop({
                    success: t.success,
                    fail: t.fail,
                    dropid: e.getStringId()
                }),
                e.count -= 1,
                c.default.getInstance().node.emit(s.UIPath.event_use_drop)
            }
            ,
            e.useDrop = function(t) {
                if (n.WxTool.isWx()) {
                    var o = {}
                      , i = n.WxTool.getInstance().db.getCollections(e.path);
                    i.where({
                        _openid: a.Quick.openId
                    }).get().then(function(e) {
                        e.data && e.data.length > 0 && (o[t.dropid] = {
                            count: e.data[0][t.dropid].count - 1
                        },
                        i.doc(e.data[0]._id).update({
                            data: o,
                            success: t.success,
                            fail: t.fail
                        }))
                    })
                }
            }
            ,
            e.path = "drops",
            e
        }();
        o.Drop_DB = l,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Configs/DropConfig": "DropConfig",
        "../../../Logic/UIPath": "UIPath",
        "../../../Quick": "Quick",
        "../../QuickTool": "QuickTool",
        "../WxTool": "WxTool"
    }],
    FriendHopeLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d70b5C7jWlMMqVPIcyUw6DC", "FriendHopeLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../Scene/LayerManager")
          , r = e("../../../../Scene/LayerItem")
          , c = e("../../../Tools/WX/WxTool")
          , s = e("../../../Tools/WX/DB/Hope_DB")
          , l = e("../../../Quick")
          , u = e("../../../Tools/SoundTool")
          , d = e("../../UIPath")
          , p = cc._decorator
          , h = p.ccclass
          , f = p.property
          , g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.noNode = null,
                t.getNode = null,
                t.countLabel = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {
                var e = this;
                c.WxTool.showBanner(c.WxTool.bannerAd_firendHolp),
                -1 == s.Hope_DB.hope_count ? (s.Hope_DB.request(function(t) {
                    e.setupUI()
                }),
                s.Hope_DB.hope_count = cc.sys.localStorage.getItem("timess"),
                null != s.Hope_DB.hope_count && void 0 != s.Hope_DB.hope_count && "" != s.Hope_DB.hope_count || (s.Hope_DB.hope_count = 1,
                cc.sys.localStorage.setItem("timess", 1)),
                this.setupUI()) : this.setupUI()
            }
            ,
            t.prototype.setupUI = function() {
                0 == s.Hope_DB.hope_count ? (this.noNode.active = !0,
                this.getNode.active = !1,
                this.countLabel.string = "x0") : (this.noNode.active = !1,
                this.getNode.active = !0,
                this.countLabel.string = "x" + s.Hope_DB.hope_count)
            }
            ,
            t.prototype.onClickUseButton = function() {
                u.SoundTool.getInstance().playBtn(),
                a.default.showLoading();
                cc.sys.localStorage.setItem("timess", 0),
                s.Hope_DB.hope_count = 0,
                a.default.dismissLoading(),
                this.setupUI(),
                l.Quick.updateMydata(null),
                a.default.getInstance().show(d.UIPath.layer_reward, {
                    type: d.UIPath.layer_friendHope,
                    diamond: 200
                })
            }
            ,
            t.prototype.onClickShareButton = function() {
                u.SoundTool.getInstance().playBtn(),
                c.WxTool.share({
                    type: c.WxTool.shareType_friendHope
                })
            }
            ,
            t.prototype.onClickCloseButton = function() {
                u.SoundTool.getInstance().playBtn(),
                a.default.getInstance().dismissItem(this)
            }
            ,
            i([f(cc.Node)], t.prototype, "noNode", void 0),
            i([f(cc.Node)], t.prototype, "getNode", void 0),
            i([f(cc.Label)], t.prototype, "countLabel", void 0),
            t = i([h], t)
        }(r.default);
        o.default = g,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Quick": "Quick",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/WX/DB/Hope_DB": "Hope_DB",
        "../../../Tools/WX/WxTool": "WxTool",
        "../../UIPath": "UIPath"
    }],
    GameCellView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4596cfs4PdBtpqcovo93NiJ", "GameCellView");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Configs/GameConfig")
          , r = e("./CellView")
          , c = e("../../../Tools/QuickTool")
          , s = e("../../../Quick")
          , l = e("../../../Tools/MathTool")
          , u = e("../../../Tools/SoundTool")
          , d = e("../../../../Scene/LayerManager")
          , p = e("../../UIPath")
          , h = e("../../../Tools/WX/WxTool")
          , f = cc._decorator
          , g = f.ccclass
          , y = f.property
          , _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cellPrefab = null,
                t.effectPrefab = null,
                t.effectLightPrefab = null,
                t.pointCell = null,
                t.wallView = null,
                t.cellBgNode = null,
                t.diamondTemplateNode = null,
                t.diamondJoinCount = 0,
                t.diamonds = [],
                t.flyCells = [],
                t.flyCell = null,
                t.mergeCells = [],
                t.shootCellView = null,
                t.flyWillCollision = !1,
                t.dropSpeed = a.GameConfig.dropInitialSpeeds[2],
                t.playing = !1,
                t.flying = !1,
                t.isFillup = !1,
                t.upDistance = 0,
                t.mergeDistance = 0,
                t.wallInitialY = 0,
                t.pauseMove = !1,
                t.cells = [],
                t.cellMaxI = [0, 0, 0, 0, 0],
                t.resurgenceState = !1,
                t.isWallDown = !0,
                t
            }
            return n(t, e),
            t.prototype.resetGame = function() {
                this.dropSpeed = a.GameConfig.dropInitialSpeeds[2];
                for (var e = 0; e < a.GameConfig.xMax; e++)
                    for (var t = 0; t < a.GameConfig.yMax; t++)
                        null != this.cells[t][e] && (this.cells[t][e].node.setParent(null),
                        this.cells[t][e] = null);
                this.diamondJoinCount = 0,
                this.cellMaxI = [0, 0, 0, 0, 0],
                this.clearAllDiamond(),
                this.wallView.y = this.wallInitialY,
                this.upDistance = 0,
                this.mergeDistance = 0
            }
            ,
            t.prototype.isTouchCell = function(e) {
                for (var t = this.cellBgNode.convertToNodeSpaceAR(e), o = 0; o < a.GameConfig.xMax; o++)
                    for (var n = 0; n < a.GameConfig.yMax; n++) {
                        var i = this.cells[n][o];
                        if (null != i && i.node.getBoundingBox().contains(t))
                            return i
                    }
                return null
            }
            ,
            t.prototype.transpositionA = function(e, t, o) {
                var n = this
                  , i = t.flyX
                  , a = t.flyY
                  , r = e.node.getPosition()
                  , s = t.node.getPosition();
                this.cells[t.flyY][t.flyX] = e,
                this.cells[e.flyY][e.flyX] = t,
                t.flyX = e.flyX,
                t.flyY = e.flyY,
                e.flyX = i,
                e.flyY = a,
                e.node.runAction(cc.moveTo(o, s)),
                t.node.runAction(cc.moveTo(o, r)),
                c.QuickTool.delayExec(this.node, o, function() {
                    n.mergeCells = [e, t],
                    n.allMerge()
                })
            }
            ,
            t.prototype.clearAllDiamond = function() {
                for (var e = 0; e < this.diamonds.length; e++)
                    this.diamonds[e].diamondNode.setParent(null);
                this.diamonds = []
            }
            ,
            t.prototype.start = function() {
                console.log("start gamecellview")
            }
            ,
            t.prototype.initCells = function() {
                this.wallInitialY = this.wallView.y;
                for (var e = 0; e < a.GameConfig.yMax; e++) {
                    this.cells[e] = [];
                    for (var t = 0; t < a.GameConfig.xMax; t++)
                        this.cells[e][t] = null
                }
                this.playing = !0
            }
            ,
            t.prototype.createStartCell = function() {
                var e = cc.instantiate(this.cellPrefab);
                e.setParent(this.cellBgNode),
                e.x = this.getCellX(2),
                e.y = this.pointCell.y,
                this.cells[0][2] = e.getComponent(r.default)
            }
            ,
            t.prototype.shootCell = function(e, t) {
                var o = cc.instantiate(this.cellPrefab);
                o.setParent(this.cellBgNode),
                o.x = this.getCellX(e),
                o.y = 0 - this.cellBgNode.height / 2 - a.GameConfig.spaceV - a.GameConfig.cellHeight / 2,
                this.shootCellView = o.getComponent(r.default),
                this.shootCellView.flyX = e,
                this.shootCellView.setNum(t),
                this.flying = !0,
                this.cellMaxI[e] >= a.GameConfig.yMax ? (this.flying = !1,
                this.shootCellView = null,
                o.setParent(null),
                this.gameOver()) : (this.cells[this.cellMaxI[e]][e] = this.shootCellView,
                this.shootCellView.flyY = this.cellMaxI[e],
                this.cellMaxI[e] += 1)
            }
            ,
            t.prototype.update = function(e) {
                if (!s.Quick.pauseState) {
                    if (this.playing && !this.pauseMove) {
                        var t = this.dropSpeed;
                        if (this.resurgenceState ? t = -30 : this.upDistance > 0 ? (t = -a.GameConfig.cellFlyUpSpeed,
                        this.upDistance = this.upDistance - Math.abs(t) <= 0 ? 0 : this.upDistance - Math.abs(t)) : this.mergeDistance > 0 && (t = -a.GameConfig.mergeFlyUpSpeed,
                        this.mergeDistance = this.mergeDistance - Math.abs(t) <= 0 ? 0 : this.mergeDistance - Math.abs(t)),
                        t < 0) {
                            var o = this.wallView.y - t;
                            o > this.wallInitialY && (o = this.wallInitialY,
                            this.resurgenceState && (this.resurgenceState = !1)),
                            this.wallView.y = o
                        } else
                            this.isWallDown && (this.wallView.y -= t);
                        for (var n = !1, i = 0; i < a.GameConfig.yMax; i++)
                            for (var r = 0; r < a.GameConfig.xMax; r++) {
                                var c = this.cells[i][r];
                                if (null != c && null != c.node) {
                                    var l = c.flyX
                                      , u = 0;
                                    if (0 != this.cellMaxI[l]) {
                                        var d = c.flyY;
                                        u = this.wallView.y - a.GameConfig.spaceV * (d + 1) - a.GameConfig.cellHeight / 2 - a.GameConfig.cellHeight * d
                                    } else
                                        u = this.wallView.y - a.GameConfig.spaceV - a.GameConfig.cellHeight / 2;
                                    if (u > c.node.y) {
                                        var p = 10;
                                        c == this.shootCellView && (p = a.GameConfig.cellFlySpeed),
                                        f = (f = c.node.y + p) > u ? u : f,
                                        c.node.y = f
                                    } else if (u < c.node.y) {
                                        f = (f = c.node.y - 10) < u ? u : f,
                                        c.node.y = f
                                    }
                                    c == this.shootCellView && c.node.y == u && this.fit(),
                                    c.node.y != u && null == this.shootCellView && (n = !0),
                                    c.node.y == u && (c.isMoveAction = !1)
                                }
                            }
                        this.isFillup && (n || (this.isFillup = !1,
                        this.allMerge()));
                        for (i = 0; i < this.diamonds.length; i++) {
                            var h = this.diamonds[i];
                            l = h.cellX,
                            u = 0;
                            if (0 != this.cellMaxI[l]) {
                                d = this.cellMaxI[l];
                                null != this.shootCellView && this.shootCellView.flyX == l && (d = this.cellMaxI[l] - 1),
                                u = this.wallView.y - a.GameConfig.spaceV * (d + 1) - a.GameConfig.cellHeight / 2 - a.GameConfig.cellHeight * d
                            } else
                                u = this.wallView.y - a.GameConfig.spaceV - a.GameConfig.cellHeight / 2;
                            if (u > h.diamondNode.y)
                                f = (f = h.diamondNode.y + 10) > u ? u : f,
                                h.diamondNode.y = f;
                            else if (u < h.diamondNode.y) {
                                var f;
                                f = (f = h.diamondNode.y - 10) < u ? u : f,
                                h.diamondNode.y = f
                            }
                        }
                    }
                    this.collisionBottomDetetion()
                }
            }
            ,
            t.prototype.collisionBottomDetetion = function() {
                if (!this.flying)
                    for (var e = 0; e < this.cellMaxI.length; e++) {
                        var t = this.cellMaxI[e];
                        if (0 != t && null != this.cells[t - 1][e]) {
                            var o = this.cells[t - 1][e]
                              , n = -o.node.getParent().height / 2;
                            if (o.node.y - a.GameConfig.cellHeight / 2 <= n)
                                return void this.gameOver()
                        }
                    }
            }
            ,
            t.prototype.gameOver = function() {
                this.gameOverBlock()
            }
            ,
            t.prototype.fit = function() {
                for (var e = 0; e < this.diamonds.length; e++)
                    if (this.shootCellView.flyX == this.diamonds[e].cellX) {
                        this.diamonds[e].diamondNode.setParent(null),
                        this.diamonds.splice(e, 1),
                        d.default.getInstance().node.emit(p.UIPath.event_game_give_diamond);
                        break
                    }
                this.flyWillCollision = !1;
                var t = this.shootCellView;
                this.shootCellView = null,
                this.upDistance += a.GameConfig.cellFlyStopUpDistance,
                u.SoundTool.getInstance().playMp3(s.Quick.sound_push),
                this.mergeCells.push(t),
                this.allMerge()
            }
            ,
            t.prototype.allMerge = function() {
                this.allMerge1()
            }
            ,
            t.prototype.allMerge1 = function() {
                var e = this;
                console.log(this.cells);
                var t = this.mergeCells;
                this.mergeCells = [];
                for (var o = 0, n = 0; n < t.length; n++) {
                    var i = t[n];
                    this.mergeLoop(i.flyX, i.flyY, !0) && o++
                }
                0 == o ? this.endMerge() : (c.QuickTool.delayExec(this.node, a.GameConfig.mergePause, function() {
                    e.shakeThis()
                }),
                c.QuickTool.delayExec(this.node, a.GameConfig.mergePause + a.GameConfig.cellMoveTime + .1, function() {
                    e.dropLoopDispose() ? e.isFillup = !0 : e.allMerge()
                }))
            }
            ,
            t.prototype.endMerge = function() {
                var e = this;
                c.QuickTool.delayExec(this.node, .3, function() {
                    e.flying = !1,
                    e.randomDiamond(),
                    d.default.getInstance().node.emit(p.UIPath.event_game_merge_onceOver)
                })
            }
            ,
            t.prototype.mergeLoop = function(e, t, o) {
                var n = this
                  , i = this.detetionMerge(e, t);
                if (null != i) {
                    this.mergeCells.push(i.target);
                    var r = .1;
                    return o && (r = a.GameConfig.mergePause),
                    c.QuickTool.delayExec(this.node, r, function() {
                        u.SoundTool.getInstance().playMp3(s.Quick.sound_merge),
                        n.merge(i),
                        c.QuickTool.delayExec(n.node, a.GameConfig.cellMoveTime + .01, function() {
                            n.mergeDistance = a.GameConfig.mergeFlyStopUpDistance
                        })
                    }),
                    !0
                }
                return !1
            }
            ,
            t.prototype.isExist = function(e, t) {
                for (var o = 0; o < e.length; o++)
                    if (t === e[o])
                        return !0;
                return !1
            }
            ,
            t.prototype.borderUpon = function(e, t, o, n, i) {
                if (t > a.GameConfig.xMax - 1 || t < 0 || o > a.GameConfig.yMax - 1 || o < 0)
                    return !1;
                if (null == this.cells[o][t])
                    return !1;
                if (this.isExist(i, o + "" + t))
                    return !1;
                i.push(o + "" + t);
                var r = {
                    cell: null,
                    weight: 0
                };
                if (null != this.cells[o][t] && e == this.cells[o][t].num) {
                    r.cell = this.cells[o][t],
                    n.push(r);
                    var c = this.getCell(t, o - 1)
                      , s = this.getCell(t, o + 1)
                      , l = this.getCell(t - 1, o)
                      , u = this.getCell(t + 1, o);
                    return null != c && c.num == e && (r.weight += 1),
                    null != s && s.num == e && (r.weight += 1),
                    null != l && l.num == e && (r.weight += 1),
                    null != u && u.num == e && (r.weight += 1),
                    this.borderUpon(e, t, o - 1, n, i),
                    this.borderUpon(e, t, o + 1, n, i),
                    this.borderUpon(e, t - 1, o, n, i),
                    this.borderUpon(e, t + 1, o, n, i),
                    !0
                }
                return !1
            }
            ,
            t.prototype.detetionMerge = function(e, t) {
                var o = this.cells[t][e];
                if (console.log(o.readyMerge),
                o.readyMerge)
                    return null;
                var n = [];
                if (this.borderUpon(o.num, e, t, n, []),
                1 == n.length)
                    return null;
                if (2 == n.length) {
                    var i = this.getCell(e, t - 1);
                    return n[0].cell.readyMerge = !0,
                    n[1].cell.readyMerge = !0,
                    null != i && i.num == o.num ? {
                        cur: o,
                        move: [o],
                        target: n[1].cell
                    } : {
                        cur: o,
                        move: [n[1].cell],
                        target: o
                    }
                }
                for (var a = null, r = [], c = 0; c < n.length; c++)
                    n[c].weight >= 2 ? a = n[c].cell : r.push(n[c].cell);
                for (c = 0; c < r.length; c++)
                    r[c].readyMerge = !0;
                return a.readyMerge = !0,
                {
                    cur: o,
                    move: r,
                    target: a
                }
            }
            ,
            t.prototype.detetionMerge1 = function(e, t) {
                console.log(e, t);
                var o = this.cells[t][e];
                if (console.log(o.readyMerge),
                o.readyMerge)
                    return null;
                var n = o.num
                  , i = [e, t - 1]
                  , a = [e - 1, t]
                  , r = [e + 1, t]
                  , c = this.getCell(i[0], i[1])
                  , s = this.getCell(a[0], a[1])
                  , l = this.getCell(e - 2, t)
                  , u = this.getCell(r[0], r[1])
                  , d = this.getCell(e + 2, t)
                  , p = this.getCell(e, t + 1)
                  , h = c && c.num == n && !c.readyMerge && !c.isMoveAction
                  , f = s && s.num == n && !s.readyMerge && !s.isMoveAction
                  , g = u && u.num == n && !u.readyMerge && !u.isMoveAction
                  , y = p && p.num == n && !p.readyMerge && !p.isMoveAction
                  , _ = l && l.num == n && !l.readyMerge && !l.isMoveAction
                  , m = d && d.num == n && !d.readyMerge && !d.isMoveAction;
                console.log(h);
                var v = null;
                if (h || f || g || y || _ && f || m && g) {
                    var T = null;
                    if (f && _ ? (T = [l, o],
                    v = s) : g && m ? (T = [d, o],
                    v = u) : !h || f || g || y ? (T = [],
                    h && T.push(c),
                    f && T.push(s),
                    g && T.push(u),
                    y && T.push(p),
                    v = o) : (T = [o],
                    v = c),
                    null == T || 0 == T.length)
                        return null;
                    for (var C = 0; C < T.length; C++)
                        T[C].readyMerge = !0;
                    return v.readyMerge = !0,
                    {
                        cur: o,
                        move: T,
                        target: v
                    }
                }
                return null
            }
            ,
            t.prototype.dropLoopDispose = function() {
                for (var e = !1, t = 0; t < a.GameConfig.xMax; t++) {
                    for (var o = 0; o < a.GameConfig.yMax; o++)
                        if (null == this.cells[o][t])
                            for (var n = o + 1; n < a.GameConfig.yMax; n++)
                                if (null != this.cells[n][t]) {
                                    e = !0,
                                    this.cells[o][t] = this.cells[n][t],
                                    this.cells[n][t] = null,
                                    this.cells[o][t].isMoveAction = !0,
                                    this.cells[o][t].flyY = o,
                                    this.cells[o][t].flyX = t,
                                    this.mergeCells.push(this.cells[o][t]);
                                    break
                                }
                    for (o = a.GameConfig.yMax - 1; o >= 0; o--)
                        null == this.cells[o][t] && (this.cellMaxI[t] = o)
                }
                return !!e || (this.pauseMove = !1,
                !1)
            }
            ,
            t.prototype.deleteYCells = function(e) {}
            ,
            t.prototype.merge = function(e) {
                for (var t = e.target, o = e.move, n = 1 + o.length, i = t.num * Math.pow(2, n - 1), r = a.GameConfig.cellMoveTime, c = 0; c < o.length; c++)
                    o[c].move(r, t.node.x, t.node.y);
                t.changeNum(i),
                this.node.emit("merge", i, t.node.getParent().convertToWorldSpaceAR(t.node.getPosition())),
                h.WxTool.vibrateShort();
                for (c = 0; c < o.length; c++) {
                    var s = o[c];
                    this.cells[s.flyY][s.flyX] = null
                }
                this.node.runAction(cc.sequence(cc.delayTime(r), cc.callFunc(function() {
                    t.readyMerge = !1;
                    for (var e = 0; e < o.length; e++) {
                        o[e].node.setParent(null)
                    }
                })))
            }
            ,
            t.prototype.getCell = function(e, t) {
                return e < 0 || t < 0 ? null : e > a.GameConfig.xMax - 1 || t > a.GameConfig.yMax - 1 ? null : this.cells[t][e]
            }
            ,
            t.prototype.detectionFlyCollision = function(e, t) {
                this.cells[e][t].node.y - a.GameConfig.spaceV <= this.flyCell.node.y + a.GameConfig.cellHeight + a.GameConfig.cellFlySpeed && (this.flyWillCollision = !0)
            }
            ,
            t.prototype.setGameOverBlock = function(e) {
                this.gameOverBlock = e
            }
            ,
            t.prototype.getCellMaxY = function() {
                return this.wallView.y - a.GameConfig.spaceV - a.GameConfig.cellHeight / 2
            }
            ,
            t.prototype.getCellX = function(e) {
                var t = a.GameConfig.cellWidth;
                return this.pointCell.x - t / 2 + e * t + t / 2 + e * a.GameConfig.spaceH
            }
            ,
            t.prototype.randomDiamond = function() {
                if (this.diamondJoinCount++,
                !(this.diamondJoinCount < 5))
                    if (this.diamonds.length > 0)
                        this.diamondJoinCount = 0;
                    else {
                        this.diamondJoinCount = 0;
                        var e = l.MathTool.randomNum(0, a.GameConfig.xMax - 1)
                          , t = cc.instantiate(this.diamondTemplateNode);
                        t.active = !0,
                        t.setParent(this.cellBgNode),
                        t.x = this.getCellX(e);
                        var o = new m;
                        if (o.diamondNode = t,
                        o.cellX = e,
                        0 == this.cellMaxI[e])
                            t.y = this.wallView.y - a.GameConfig.spaceV - a.GameConfig.cellHeight / 2,
                            o.cellY = 0;
                        else {
                            var n = this.cells[this.cellMaxI[e] - 1][e];
                            t.y = n.node.y - a.GameConfig.spaceV - a.GameConfig.cellHeight,
                            o.cellY = this.cellMaxI[e]
                        }
                        this.diamonds.push(o)
                    }
            }
            ,
            t.prototype.resurgence = function() {
                for (var e = 0; e < a.GameConfig.xMax; e++) {
                    for (var t = 3; t < a.GameConfig.yMax; t++)
                        null != this.cells[t][e] && (this.cells[t][e].node.setParent(null),
                        this.cells[t][e] = null);
                    for (t = 2; t >= 0; t--) {
                        if (null != this.cells[t][e]) {
                            this.cellMaxI[e] = t + 1;
                            break
                        }
                        0 == t && (this.cellMaxI[e] = 0)
                    }
                }
                this.clearAllDiamond(),
                this.resurgenceState = !0
            }
            ,
            t.prototype.eliminateMaxLine = function() {
                for (var e = !1, t = a.GameConfig.yMax - 1; t >= 0; t--) {
                    for (var o = a.GameConfig.xMax - 1; o >= 0; o--)
                        null != this.cells[t][o] && (this.cells[t][o].node.setParent(null),
                        this.cells[t][o] = null,
                        this.cellMaxI[o]--,
                        e = !0);
                    if (e)
                        break
                }
                return e
            }
            ,
            t.prototype.shakeThis = function() {
                var e = this.node
                  , t = .01
                  , o = e.x
                  , n = e.y
                  , i = [cc.moveTo(t, cc.v2(o - 7, n + 7)), cc.moveTo(t, cc.v2(o + 7, n - 7)), cc.moveTo(t, cc.v2(o - 7, n + 7)), cc.moveTo(t, cc.v2(o + 7, n - 7)), cc.moveTo(t, cc.v2(o - 7, n + 7)), cc.moveTo(t, cc.v2(o + 7, n - 7)), cc.moveTo(t, cc.v2(o, n))];
                e.runAction(cc.sequence(i))
            }
            ,
            i([y(cc.Prefab)], t.prototype, "cellPrefab", void 0),
            i([y(cc.Prefab)], t.prototype, "effectPrefab", void 0),
            i([y(cc.Prefab)], t.prototype, "effectLightPrefab", void 0),
            i([y(cc.Node)], t.prototype, "pointCell", void 0),
            i([y(cc.Node)], t.prototype, "wallView", void 0),
            i([y(cc.Node)], t.prototype, "cellBgNode", void 0),
            i([y(cc.Node)], t.prototype, "diamondTemplateNode", void 0),
            t = i([g], t)
        }(cc.Component);
        o.default = _;
        var m = function() {
            return function() {
                this.cellX = 0,
                this.cellY = 0,
                this.diamondNode = null
            }
        }();
        o.DiamondCell = m,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Configs/GameConfig": "GameConfig",
        "../../../Quick": "Quick",
        "../../../Tools/MathTool": "MathTool",
        "../../../Tools/QuickTool": "QuickTool",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/WX/WxTool": "WxTool",
        "../../UIPath": "UIPath",
        "./CellView": "CellView"
    }],
    GameConfig: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ef291FTdL9Gg633xWoOuM/W", "GameConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../Tools/MathTool")
          , i = function() {
            function e() {}
            return e.randomNum = function() {
                var e = n.MathTool.randomNum(0, this.randomArray.length - 1);
                return this.randomArray[e]
            }
            ,
            e.getShare = function(t) {
                if (!e.upok)
                    return e.shareContent.no;
                var o = this.shareContent[t];
                return 1 == o.length ? o[0] : o[n.MathTool.randomNum(0, o.length - 1)]
            }
            ,
            e.xMax = 5,
            e.yMax = 7,
            e.spaceH = 6,
            e.spaceV = 2.5,
            e.cellWidth = 120,
            e.cellHeight = 120,
            e.cellFlySpeed = 45,
            e.cellFlyStopUpDistance = 20,
            e.cellFlyUpSpeed = 2,
            e.mergeFlyStopUpDistance = 30,
            e.mergeFlyUpSpeed = 8,
            e.cellMoveTime = .2,
            e.mergePause = .2,
            e.dropPauseTime = 10,
            e.dropTranspositionWait = 5,
            e.randomArray = [2, 4, 8, 16, 32, 64],
            e.cellCubeColors = {
                2: cc.color(246, 183, 116),
                4: cc.color(160, 196, 86),
                8: cc.color(84, 178, 188),
                16: cc.color(254, 128, 212),
                32: cc.color(110, 149, 228),
                64: cc.color(107, 179, 80),
                128: cc.color(242, 129, 73),
                256: cc.color(80, 155, 248),
                512: cc.color(224, 68, 195),
                1024: cc.color(227, 50, 79),
                2048: cc.color(242, 101, 73),
                4096: cc.color(235, 89, 138),
                8192: cc.color(168, 68, 226),
                16384: cc.color(243, 73, 74),
                32768: cc.color(98, 49, 166),
                65536: cc.color(35, 28, 44)
            },
            e.dropInitialSpeeds = {
                2: .2,
                4: .2,
                8: .2,
                16: .2,
                32: .2,
                64: .2,
                128: .2,
                256: .2,
                512: .2,
                1024: .2,
                2048: .4,
                4096: .6,
                8192: .8,
                16384: 1,
                32768: 1.2,
                65536: 1.4
            },
            e.giftAddDiamonds = [50, 100, 150, 150, 100, 0],
            e.giftGiveCD = 3e5,
            e.dropMayUseCounts = [5, 5, 5, 5],
            e.dropAddValue = 1.5,
            e.signinDiamonds = [20, 50, 80, 100, 120, 150, 200],
            e.upok = !1,
            e.shareContent = {
                no: {
                    content: "\u6c42\u5173\u6ce8\uff0c\u6c42\u5206\u4eab!",
                    url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3712522495,1070174743&fm=200&gp=0.jpg"
                },
                three: [{
                    content: "\u6ee1\u6ee1\u7684\u56de\u5fc6,\u56de\u4e0d\u53bb\u7684\u9752\u6625,\u8ba9\u6211\u4eec\u4e00\u8d77\u91cd\u6e29\u90a3\u7f8e\u597d\u7684\u56de\u5fc6!",
                    url: ""
                }, {
                    content: "\u7f8e\u597d\u7684\u56de\u5fc6,\u5e0c\u671b\u6709\u7f8e\u597d\u7684\u4f60\u6765\u966a\u4f34!",
                    url: ""
                }],
                friendHope: [{
                    content: "\u55e8!\u5144dei!\u6c42\u5e2e\u5fd9,\u5c0f\u624b\u4e00\u70b9\u52a9\u6211\u767b\u4e0a\u6570\u5b57\u5dc5\u5cf0",
                    url: ""
                }],
                signin: [{
                    content: "\u8001\u94c1\u4eec,\u5feb\u6765\u6253\u5361,\u548c\u6211\u4e00\u8d77\u6765\u6311\u6218\u6570\u5b57\u5dc5\u5cf0!",
                    url: ""
                }, {
                    content: "\u8fd9\u662f\u4e00\u4e2a\u795e\u5947\u7684\u6570\u5b57\u6e38\u620f",
                    url: ""
                }],
                gameDiamondDouble: [{
                    content: "\u4e00\u8d77\u73a9\u6570\u5b57\u5403\u9e21,\u548c\u6211\u4e00\u8d77\u74dc\u52061\u4e2a\u4ebf!",
                    url: ""
                }],
                gameover: [{
                    content: "\u8fd9\u6e38\u620f,\u6211\u662f\u5b8c\u5168\u505c\u4e0d\u4e0b\u6765\u554a,XXX\u5206,\u6211\u9a84\u50b2\u4e86\u561b?!",
                    url: ""
                }, {
                    content: "XXX\u5206,\u4e0d\u662f\u9488\u5bf9\u8c01,\u6211\u662f\u8bf4\u7fa4\u5185\u90fd\u6ca1\u6211\u5206\u9ad8",
                    url: ""
                }],
                grouprank: [{
                    content: "\u638c\u63a7\u6570\u5b57,\u8fd9\u91cc\u662f\u6211\u7684\u4e3b\u573a!",
                    url: ""
                }]
            },
            e
        }();
        o.GameConfig = i,
        cc._RF.pop()
    }
    , {
        "../Tools/MathTool": "MathTool"
    }],
    GameOverData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "131ed6puGNC7q3Cj2T2We5c", "GameOverData"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            return function() {
                this.maxNum = 2,
                this.diamond = 0,
                this.score = 0
            }
        }();
        o.GameOverData = n,
        cc._RF.pop()
    }
    , {}],
    GameOverLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ff8a8RdzRpEWYY2E6M0qWLp", "GameOverLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../Scene/LayerItem")
          , r = e("../../../../Scene/LayerManager")
          , c = e("../../../../Scene/SceneManager")
          , s = e("../../UIPath")
          , l = e("../../../Quick")
          , u = e("../../../Tools/WX/WxTool")
          , d = e("../../../Tools/WX/DB/Task_DB")
          , p = e("../../../Configs/GameConfig")
          , h = e("../../../Tools/SoundTool")
          , f = cc._decorator
          , g = f.ccclass
          , y = f.property
          , _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.curScoreLabel = null,
                t.maxScoreLabel = null,
                t.screenSprite = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {
                var e = this;
                console.log("1111"),
                console.log(l.Quick.tempFilePath),
                l.Quick.tempFilePath && cc.loader.load({
                    url: l.Quick.tempFilePath,
                    type: "jpg"
                }, function(t, o) {
                    t && console.error(t),
                    e.screenSprite.spriteFrame = new cc.SpriteFrame(o)
                })
            }
            ,
            t.prototype.onShow = function() {
                u.WxTool.showBanner(u.WxTool.bannerAd_gameover)
            }
            ,
            t.prototype.onExit = function() {
                u.WxTool.hideAllBanner()
            }
            ,
            t.prototype.onEnter = function(e) {
                if (u.WxTool.showBanner(u.WxTool.bannerAd_gameover),
                u.WxTool.getInstance().sendMessageOpenData({
                    type: 6,
                    score: e.score
                }),
                console.log(l.Quick.myData),
                console.log(e),
                l.Quick.myData.maxScore < e.score ? this.maxScoreLabel.string = e.score + "" : this.maxScoreLabel.string = l.Quick.myData.maxScore + "",
                this.curScoreLabel.string = e.score + "",
                u.WxTool.isWx() && (d.Task_DB.updateMaxScore(e.score),
                d.Task_DB.AddGameCount(),
                l.Quick.myData.maxScore < e.score || l.Quick.myData.maxNum < e.maxNum)) {
                    var t = l.Quick.myData.maxScore < e.score ? e.score : l.Quick.myData.maxScore
                      , o = l.Quick.myData.maxNum < e.maxNum ? e.maxNum : l.Quick.myData.maxNum;
                    l.Quick.myData.maxScore = t,
                    l.Quick.myData.maxNum = o,
                    wx.setUserCloudStorage({
                        KVDataList: [{
                            key: "score",
                            value: t + ""
                        }, {
                            key: "maxNum",
                            value: o + ""
                        }],
                        success: console.log
                    }),
                    u.WxTool.getInstance().db.updateScore({
                        maxNum: o,
                        score: t,
                        openid: l.Quick.openId
                    })
                }
            }
            ,
            t.prototype.onClickReplayButton = function() {
                h.SoundTool.getInstance().playBtn(),
                r.default.getInstance().node.emit(s.UIPath.event_game_restart),
                r.default.getInstance().dismissItem(this),
                u.WxTool.getInstance().sendMessageOpenData({
                    type: 5
                })
            }
            ,
            t.prototype.onClickGoMainButton = function() {
                h.SoundTool.getInstance().playBtn(),
                c.default.getInstance().show(s.UIPath.sc_home),
                u.WxTool.getInstance().sendMessageOpenData({
                    type: 5
                })
            }
            ,
            t.prototype.onClickShareButton = function() {
                h.SoundTool.getInstance().playBtn();
                var e = p.GameConfig.getShare("gameover");
                e.content = e.content.replace("XXX", this.curScoreLabel.string),
                u.WxTool.share({
                    type: u.WxTool.shareType_gameOver,
                    title: e.content,
                    url: e.url
                })
            }
            ,
            t.prototype.onClickSettingButton = function() {
                h.SoundTool.getInstance().playBtn()
            }
            ,
            t.prototype.onClickShopButton = function() {
                h.SoundTool.getInstance().playBtn(),
                r.default.getInstance().show(s.UIPath.layer_shop)
            }
            ,
            i([y(cc.Label)], t.prototype, "curScoreLabel", void 0),
            i([y(cc.Label)], t.prototype, "maxScoreLabel", void 0),
            i([y(cc.Sprite)], t.prototype, "screenSprite", void 0),
            t = i([g], t)
        }(a.default);
        o.default = _,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../../Scene/SceneManager": "SceneManager",
        "../../../Configs/GameConfig": "GameConfig",
        "../../../Quick": "Quick",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/WX/DB/Task_DB": "Task_DB",
        "../../../Tools/WX/WxTool": "WxTool",
        "../../UIPath": "UIPath"
    }],
    GameScene: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "08c8b3KuTNGCYL4LhFEgZJ5", "GameScene");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Scene/SceneItem")
          , r = e("../ui/Game_ui/GameCellView")
          , c = e("../ui/Game_ui/CellView")
          , s = e("../../Configs/GameConfig")
          , l = e("../../../Scene/LayerManager")
          , u = e("../UIPath")
          , d = e("../../Quick")
          , p = e("../ui/GameLayer/ReviveLayer")
          , h = e("../Data/GameOverData")
          , f = e("../../Tools/WX/DB/Pf_DB")
          , g = e("../../Tools/SpriteTool")
          , y = e("../../Tools/WX/WxTool")
          , _ = e("../../Tools/QuickTool")
          , m = e("../../Configs/DropConfig")
          , v = e("../../Tools/WX/DB/Drop_DB")
          , T = e("../ui/Game_ui/GameStartHintView")
          , C = e("../../Tools/SoundTool")
          , S = cc._decorator
          , I = S.ccclass
          , w = S.property
          , D = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.event_layer_pushpop_Action = null,
                t.qmpNode = null,
                t.addScoreNode = null,
                t.pfbgSprite = null,
                t.pauseSprite = null,
                t.cellBg = null,
                t.dropLayoutNode = null,
                t.cellPrefab = null,
                t.cellPlayView = null,
                t.cellCreateView = null,
                t.currentCell = null,
                t.curScoreLabel1 = null,
                t.maxScoreLabel1 = null,
                t.curScoreLabel2 = null,
                t.maxScoreLabel2 = null,
                t.gx_Node = null,
                t.gameStartHintNode = null,
                t.curScore = 0,
                t.pauseState = !1,
                t.reviveCount = 0,
                t.popMax = 2,
                t.addDiamond = 0,
                t.maxNum = 2,
                t.isAddDropUse = !1,
                t.dropbfNode = null,
                t.dropFlickerNode = null,
                t.dropCountdownNodeBg = null,
                t.dropCountdownLabel = null,
                t.dropCountDownCall = null,
                t.dropCountDown = 0,
                t.isDropUseing = !1,
                t.isTranspositioning = !1,
                t.dropSelectCell = null,
                t.dropTranspositioning = !1,
                t
            }
            return n(t, e),
            t.prototype.clearState = function() {
                this.dropbfNode.active = !1,
                this.createCell(!1),
                this.showCountDown(0),
                this.isDropUseing = !1,
                this.isTranspositioning = !1,
                this.popMax = 2,
                this.dropMayUseCounts = s.GameConfig.dropMayUseCounts.slice(0, s.GameConfig.dropMayUseCounts.length),
                this.curScore = 0,
                this.addScore(0),
                this.reviveCount = 0,
                this.maxNum = 2,
                this.addDiamond = 0,
                this.maxScoreLabel1.string = d.Quick.myData.maxScore + "",
                this.maxScoreLabel2.string = d.Quick.myData.maxScore + "",
                this.dropFlickerNode.active = !1,
                this.updateDropCounts(),
                d.Quick.gameid = d.Quick.gameid + 1
            }
            ,
            t.prototype.updateTheme = function() {
                var e = f.Pf_DB.getCurrentPf();
                this.qmpNode.color = e.qmpColor,
                console.log(e.getStringId()),
                g.SpriteTool.loadSprite(this.pauseSprite, "Sprite/Theme/bgs/pause" + e.bgid),
                g.SpriteTool.loadSprite(this.pfbgSprite, e.getBgPath()),
                console.log("pf.getBgPath()"),
                console.log(e.getBgPath()),
                this.maxScoreLabel1.node.active = 1 == e.bgid,
                this.maxScoreLabel2.node.active = 2 == e.bgid,
                this.curScoreLabel1.node.active = 1 == e.bgid,
                this.curScoreLabel2.node.active = 2 == e.bgid;
                for (var t = 1; t <= 4; t++) {
                    this.dropLayoutNode.getChildByName("cardbg" + t).getChildByName("label").color = e.dropCountColor
                }
                var o = this.cellPlayView.wallView.children;
                for (t = 0; t < o.length; t++)
                    "bfxg" != o[t].name && g.SpriteTool.loadSprite(o[t].getComponent(cc.Sprite), e.getWallPath())
            }
            ,
            t.prototype.start = function() {
                var e = this;
                l.default.dismissLoading(),
                y.WxTool.hideAllBanner(),
                this.event_layer_pushpop_Action = function() {
                    l.default.getInstance().isHaveShow() || y.WxTool.hideAllBanner()
                }
                ,
                l.default.getInstance().node.on(u.UIPath.event_layer_pushpop, this.event_layer_pushpop_Action, this),
                C.SoundTool.getInstance().pauseBgMp3(),
                d.Quick.game = this,
                d.Quick.pauseState = !1,
                this.calcCellXS(),
                this.registerTouchEvent(),
                this.clearState(),
                this.cellPlayView = this.cellBg.getComponent(r.default),
                this.cellPlayView.initCells(),
                this.cellPlayView.setGameOverBlock(function() {
                    e.gameOver()
                }),
                this.registerGameEvent(),
                this.updateTheme(),
                l.default.getInstance().node.on(u.UIPath.event_theme_change, function() {
                    e.updateTheme()
                }),
                this.updateDropCounts(),
                l.default.getInstance().node.on(u.UIPath.event_use_drop, function() {
                    e.updateDropCounts()
                }),
                l.default.getInstance().show(u.UIPath.layer_startGameReward),
                d.Quick.pauseState = !0,
                l.default.getInstance().node.on(u.UIPath.event_use_add_drop, function(t) {
                    e.isAddDropUse = t,
                    e.popStartHint()
                })
            }
            ,
            t.prototype.updateDropCounts = function() {
                var e = m.DropConfig.getDrop(m.DropConfig.dropTypeConversion);
                this.updateDropIndex(1, e.count),
                e = m.DropConfig.getDrop(m.DropConfig.dropTypeTransposition),
                this.updateDropIndex(2, e.count),
                e = m.DropConfig.getDrop(m.DropConfig.dropTypePause),
                this.updateDropIndex(3, e.count),
                e = m.DropConfig.getDrop(m.DropConfig.dropTypeEliminate),
                this.updateDropIndex(4, e.count)
            }
            ,
            t.prototype.updateDropIndex = function(e, t) {
                this.dropLayoutNode.getChildByName("cardbg" + e).getChildByName("label").getComponent(cc.Label).string = t + "",
                this.dropLayoutNode.getChildByName("cardbg" + e).getChildByName("labelUse").getComponent(cc.Label).string = this.dropMayUseCounts[e - 1] + ""
            }
            ,
            t.prototype.addScore = function(e, t) {
                void 0 === t && (t = null),
                this.curScore += e,
                this.curScoreLabel1.string = this.curScore + "",
                this.curScoreLabel2.string = this.curScore + "",
                0 != this.curScore && y.WxTool.getInstance().sendMessageOpenData({
                    type: 4,
                    id: d.Quick.gameid,
                    score: this.curScore,
                    worldPoint: t
                })
            }
            ,
            t.prototype.createCell = function(e) {
                null != this.currentCell && (this.currentCell.node.setParent(null),
                this.currentCell = null);
                var t = cc.instantiate(this.cellPrefab);
                t.setParent(this.cellCreateView.getChildByName("cell3")),
                this.currentCell = t.getComponent(c.default),
                e ? this.currentCell.setNum(2) : this.currentCell.setNum(s.GameConfig.randomNum()),
                t.x = 0,
                t.y = 0
            }
            ,
            t.prototype.shootCell = function(e) {
                this.currentCell.num > this.maxNum && (this.maxNum = this.currentCell.num),
                this.cellPlayView.shootCell(e, this.currentCell.num),
                this.currentCell.node.setParent(null),
                this.createCell(!1)
            }
            ,
            t.prototype.addScoreEffect = function(e, t) {
                var o = cc.instantiate(this.addScoreNode);
                o.active = !0;
                var n = this.node.convertToNodeSpaceAR(t);
                n.y -= 50,
                o.position = n,
                o.getComponent(cc.Label).string = "+" + e,
                o.setParent(this.node);
                var i = [cc.moveBy(.5, new cc.Vec2(0,-50)), cc.spawn(cc.fadeOut(.3), cc.moveBy(.3, new cc.Vec2(0,-30))), cc.callFunc(function() {
                    o.setParent(null)
                })];
                o.runAction(cc.sequence(i))
            }
            ,
            t.prototype.onDestroy = function() {
                l.default.getInstance().node.off(p.default.revive_call),
                l.default.getInstance().node.off(u.UIPath.event_game_restart),
                l.default.getInstance().node.off(u.UIPath.event_game_give_diamond),
                l.default.getInstance().node.off(u.UIPath.event_game_merge_onceOver),
                l.default.getInstance().node.off(u.UIPath.event_game_pause_end),
                l.default.getInstance().node.off(u.UIPath.event_theme_change),
                l.default.getInstance().node.off(u.UIPath.event_use_drop),
                l.default.getInstance().node.off(u.UIPath.event_use_add_drop),
                l.default.getInstance().node.off(u.UIPath.event_layer_pushpop, this.event_layer_pushpop_Action, this)
            }
            ,
            t.prototype.registerGameEvent = function() {
                var e = this;
                this.cellPlayView.node.on("merge", function(t, o) {
                    var n = t;
                    e.isAddDropUse && (n = Math.ceil(s.GameConfig.dropAddValue * t)),
                    e.addScore(n, o),
                    e.addScoreEffect(n, o),
                    t > e.maxNum && (e.maxNum = t,
                    e.cellPlayView.dropSpeed = s.GameConfig.dropInitialSpeeds[t])
                }),
                l.default.getInstance().node.on(p.default.revive_call, function() {
                    e.resurgence()
                }),
                l.default.getInstance().node.on(u.UIPath.event_game_restart, function() {
                    e.replay()
                }),
                l.default.getInstance().node.on(u.UIPath.event_game_give_diamond, function() {
                    e.addDiamond += 1,
                    console.log(e.addDiamond),
                    d.Quick.addDiamond(1)
                }),
                l.default.getInstance().node.on(u.UIPath.event_game_merge_onceOver, function() {
                    e.maxNum >= 2048 && e.popMax < e.maxNum && (e.cellPlayView.flying,
                    e.gx_Node.active = !0,
                    d.Quick.pauseState = !0,
                    2048 == e.maxNum ? (e.gx_Node.getChildByName("bg").active = !0,
                    e.gx_Node.getChildByName("gx_more").active = !1) : (e.gx_Node.getChildByName("bg").active = !1,
                    e.gx_Node.getChildByName("gx_more").active = !0),
                    e.popMax = e.maxNum,
                    y.WxTool.showBanner(y.WxTool.bannerAd_levelup))
                }),
                l.default.getInstance().node.on(u.UIPath.event_game_pause_end, function() {
                    e.popContiuneHint()
                })
            }
            ,
            t.prototype.transpositionA = function(e) {
                var t = this
                  , o = this.dropSelectCell
                  , n = Math.abs(e.flyX - o.flyX)
                  , i = Math.abs(e.flyY - o.flyY);
                (1 == n && 0 == i || 0 == n && 1 == i) && (this.cellPlayView.transpositionA(e, o, .3),
                this.dropTranspositioning = !0,
                _.QuickTool.delayExec(this.node, .3, function() {
                    t.dropTranspositioning = !1,
                    t.finishTransposition()
                }))
            }
            ,
            t.prototype.registerTouchEvent = function() {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
                    if (!e.cellPlayView.flying && !d.Quick.pauseState || 0 != e.gameStartHintNode.active) {
                        var o = t.touch
                          , n = e.getIndexWithX(e.node.convertToNodeSpaceAR(o.getLocation()).x);
                        e.currentCell.node.setParent(e.cellCreateView.getChildByName("cell" + (n + 1)))
                    }
                }),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    if (!e.cellPlayView.flying && !d.Quick.pauseState || 0 != e.gameStartHintNode.active) {
                        var o = t.touch
                          , n = e.getIndexWithX(e.node.convertToNodeSpaceAR(o.getLocation()).x);
                        e.currentCell.node.setParent(e.cellCreateView.getChildByName("cell" + (n + 1)))
                    }
                }),
                this.node.on(cc.Node.EventType.TOUCH_END, function(t) {
                    if (e.isTranspositioning) {
                        var o = t.touch
                          , n = e.cellPlayView.isTouchCell(o.getLocation());
                        null != n && (e.dropSelectCell == n ? (e.dropSelectCell.select(!1),
                        e.dropSelectCell = null) : null == e.dropSelectCell ? (e.dropSelectCell = n,
                        e.dropSelectCell.select(!0)) : e.transpositionA(n))
                    } else if (!e.cellPlayView.flying && !d.Quick.pauseState || 0 != e.gameStartHintNode.active) {
                        e.gameStartHintNode.active && e.onClickGameStartHintButton();
                        var i = t.touch
                          , a = e.getIndexWithX(e.node.convertToNodeSpaceAR(i.getLocation()).x);
                        e.shootCell(a)
                    }
                })
            }
            ,
            t.prototype.getIndexWithX = function(e) {
                return e < this.cellXS[0] ? 0 : e < this.cellXS[1] ? 1 : e < this.cellXS[2] ? 2 : e < this.cellXS[3] ? 3 : e >= this.cellXS[3] ? 4 : 0
            }
            ,
            t.prototype.calcCellXS = function() {
                var e = s.GameConfig.cellWidth
                  , t = s.GameConfig.spaceH;
                this.cellXS = [0 - (e + e / 2 + 2 * t), 0 - (e / 2 + t), 0 + e / 2, 0 + (e / 2 + e + t), e / 2 + 2 * e + 2 * t + 0]
            }
            ,
            t.prototype.onClickCE = function(e, t) {
                this.currentCell.setNum(t)
            }
            ,
            t.prototype.onClickPauseButton = function() {
                C.SoundTool.getInstance().playBtn(),
                this.isDropUseing || (d.Quick.pauseState = !0,
                l.default.getInstance().show(u.UIPath.layer_pause, this.curScore))
            }
            ,
            t.prototype.onClickGameOver = function() {
                C.SoundTool.getInstance().playBtn(),
                this.gameOver()
            }
            ,
            t.prototype.gameOver = function() {
                null != this.dropCountDownCall && (this.unschedule(this.dropCountDownCall),
                this.showCountDown(0)),
                d.Quick.pauseState = !0;
                var e = new h.GameOverData;
                e.maxNum = this.maxNum,
                e.diamond = this.addDiamond,
                e.score = this.curScore,
                1 == this.reviveCount ? l.default.getInstance().show(u.UIPath.layer_reward, {
                    type: u.UIPath.sc_game,
                    data: e
                }) : l.default.getInstance().show(u.UIPath.layer_revive, e)
            }
            ,
            t.prototype.popStartHint = function() {
                this.gameStartHintNode.active = !0,
                this.gameStartHintNode.getComponent(T.default).show(1)
            }
            ,
            t.prototype.popContiuneHint = function() {
                this.gameStartHintNode.active = !0,
                this.gameStartHintNode.getComponent(T.default).show(2)
            }
            ,
            t.prototype.onClickGameStartHintButton = function() {
                this.gameStartHintNode.active = !1,
                this.gameStartHintNode.getComponent(T.default).dismiss(),
                d.Quick.pauseState = !1
            }
            ,
            t.prototype.replay = function() {
                this.clearState(),
                this.cellPlayView.resetGame(),
                l.default.getInstance().show(u.UIPath.layer_startGameReward),
                d.Quick.pauseState = !0
            }
            ,
            t.prototype.resurgence = function() {
                this.cellPlayView.resurgence(),
                this.reviveCount += 1,
                d.Quick.pauseState = !1
            }
            ,
            t.prototype.showCountDown = function(e) {
                0 == e ? this.dropCountdownNodeBg.active = !1 : (this.dropCountdownNodeBg.active = !0,
                this.dropCountdownLabel.string = e)
            }
            ,
            t.prototype.onClickPauseCard = function() {
                var e = this;
                if (C.SoundTool.getInstance().playBtn(),
                this.isDropUseing)
                    return l.default.getInstance().showMomentHint("\u9053\u5177\u5361\u4e0d\u53ef\u540c\u65f6\u4f7f\u7528"),
                    !1;
                var t = m.DropConfig.getDrop(m.DropConfig.dropTypePause);
                0 != t.count ? 0 != this.dropMayUseCounts[2] ? (this.dropMayUseCounts[2] -= 1,
                v.Drop_DB.useDropWithDrop(t, {
                    success: function() {}
                }),
                this.dropbfNode.opacity = 255,
                this.dropbfNode.active = !0,
                this.dropbfNode.runAction(cc.sequence([cc.fadeOut(s.GameConfig.dropPauseTime), cc.callFunc(function() {
                    e.dropbfNode.active = !1
                })])),
                this.cellPlayView.isWallDown = !1,
                this.isDropUseing = !0,
                this.dropCountDownCall = function() {
                    this.dropCountDown--,
                    this.showCountDown(this.dropCountDown),
                    this.dropCountDown <= 0 && (this.unschedule(this.dropCountDownCall),
                    this.dropCountDownCall = null)
                }
                ,
                this.dropCountDown = s.GameConfig.dropPauseTime,
                this.showCountDown(this.dropCountDown),
                this.schedule(this.dropCountDownCall, 1),
                _.QuickTool.delayExec(this.node, s.GameConfig.dropPauseTime, function() {
                    e.cellPlayView.isWallDown = !0,
                    e.isDropUseing = !1,
                    null != e.dropCountDownCall && (e.unschedule(e.dropCountDownCall),
                    e.showCountDown(0))
                })) : l.default.getInstance().showMomentHint("\u672c\u5c40\u4f7f\u7528\u6b21\u6570\u5df2\u8fbe\u4e0a\u9650") : l.default.getInstance().showMomentHint("\u6682\u65e0\u8be5\u9053\u5177\u5361")
            }
            ,
            t.prototype.finishTransposition = function() {
                this.dropTranspositioning || (this.qmpNode.stopAllActions(),
                null != this.dropCountDownCall && (this.unschedule(this.dropCountDownCall),
                this.showCountDown(0)),
                this.isDropUseing = !1,
                this.isTranspositioning = !1,
                d.Quick.pauseState = !1,
                this.dropFlickerNode.active = !1,
                this.dropFlickerNode.getComponent(cc.Animation).stop(),
                null != this.dropSelectCell && (this.dropSelectCell.select(!1),
                this.dropSelectCell = null))
            }
            ,
            t.prototype.onClickTranspositionCard = function() {
                var e = this;
                if (C.SoundTool.getInstance().playBtn(),
                this.isDropUseing)
                    return l.default.getInstance().showMomentHint("\u9053\u5177\u5361\u4e0d\u53ef\u540c\u65f6\u4f7f\u7528"),
                    !1;
                var t = m.DropConfig.getDrop(m.DropConfig.dropTypeTransposition);
                0 != t.count ? 0 != this.dropMayUseCounts[1] ? (this.dropMayUseCounts[1] -= 1,
                v.Drop_DB.useDropWithDrop(t, {
                    success: function() {}
                }),
                this.isDropUseing = !0,
                this.isTranspositioning = !0,
                d.Quick.pauseState = !0,
                this.dropFlickerNode.active = !0,
                this.dropFlickerNode.getComponent(cc.Animation).play(),
                _.QuickTool.delayExec(this.qmpNode, s.GameConfig.dropTranspositionWait, function() {
                    e.finishTransposition()
                }),
                this.dropCountDownCall = function() {
                    this.dropCountDown--,
                    this.showCountDown(this.dropCountDown),
                    this.dropCountDown <= 0 && (this.unschedule(this.dropCountDownCall),
                    this.dropCountDownCall = null)
                }
                ,
                this.dropCountDown = s.GameConfig.dropTranspositionWait,
                this.showCountDown(this.dropCountDown),
                this.schedule(this.dropCountDownCall, 1)) : l.default.getInstance().showMomentHint("\u672c\u5c40\u4f7f\u7528\u6b21\u6570\u5df2\u8fbe\u4e0a\u9650") : l.default.getInstance().showMomentHint("\u6682\u65e0\u8be5\u9053\u5177\u5361")
            }
            ,
            t.prototype.onClickConversionCard = function() {
                if (C.SoundTool.getInstance().playBtn(),
                this.isDropUseing)
                    return l.default.getInstance().showMomentHint("\u9053\u5177\u5361\u4e0d\u53ef\u540c\u65f6\u4f7f\u7528"),
                    !1;
                var e = m.DropConfig.getDrop(m.DropConfig.dropTypeConversion);
                if (0 != e.count)
                    if (0 != this.dropMayUseCounts[0]) {
                        this.dropMayUseCounts[0] -= 1,
                        v.Drop_DB.useDropWithDrop(e, {
                            success: function() {}
                        });
                        for (var t = s.GameConfig.randomNum(); t == this.currentCell.num; )
                            t = s.GameConfig.randomNum();
                        this.currentCell.setNum(t)
                    } else
                        l.default.getInstance().showMomentHint("\u672c\u5c40\u4f7f\u7528\u6b21\u6570\u5df2\u8fbe\u4e0a\u9650");
                else
                    l.default.getInstance().showMomentHint("\u6682\u65e0\u8be5\u9053\u5177\u5361")
            }
            ,
            t.prototype.onClickEliminateCard = function() {
                if (C.SoundTool.getInstance().playBtn(),
                this.isDropUseing)
                    return l.default.getInstance().showMomentHint("\u9053\u5177\u5361\u4e0d\u53ef\u540c\u65f6\u4f7f\u7528"),
                    !1;
                var e = m.DropConfig.getDrop(m.DropConfig.dropTypeEliminate);
                0 != e.count ? 0 != this.dropMayUseCounts[3] ? (this.dropMayUseCounts[3] -= 1,
                v.Drop_DB.useDropWithDrop(e, {
                    success: function() {}
                }),
                this.cellPlayView.eliminateMaxLine()) : l.default.getInstance().showMomentHint("\u672c\u5c40\u4f7f\u7528\u6b21\u6570\u5df2\u8fbe\u4e0a\u9650") : l.default.getInstance().showMomentHint("\u6682\u65e0\u8be5\u9053\u5177\u5361")
            }
            ,
            t.prototype.onClickGxButton = function() {
                C.SoundTool.getInstance().playBtn(),
                this.gx_Node.active = !1,
                d.Quick.pauseState = !1,
                y.WxTool.hideAllBanner()
            }
            ,
            i([w(cc.Node)], t.prototype, "qmpNode", void 0),
            i([w(cc.Node)], t.prototype, "addScoreNode", void 0),
            i([w(cc.Sprite)], t.prototype, "pfbgSprite", void 0),
            i([w(cc.Sprite)], t.prototype, "pauseSprite", void 0),
            i([w(cc.Node)], t.prototype, "cellBg", void 0),
            i([w(cc.Node)], t.prototype, "dropLayoutNode", void 0),
            i([w(cc.Prefab)], t.prototype, "cellPrefab", void 0),
            i([w(cc.Node)], t.prototype, "cellCreateView", void 0),
            i([w(cc.Label)], t.prototype, "curScoreLabel1", void 0),
            i([w(cc.Label)], t.prototype, "maxScoreLabel1", void 0),
            i([w(cc.Label)], t.prototype, "curScoreLabel2", void 0),
            i([w(cc.Label)], t.prototype, "maxScoreLabel2", void 0),
            i([w(cc.Node)], t.prototype, "gx_Node", void 0),
            i([w(cc.Node)], t.prototype, "gameStartHintNode", void 0),
            i([w(cc.Node)], t.prototype, "dropbfNode", void 0),
            i([w(cc.Node)], t.prototype, "dropFlickerNode", void 0),
            i([w(cc.Node)], t.prototype, "dropCountdownNodeBg", void 0),
            i([w(cc.Label)], t.prototype, "dropCountdownLabel", void 0),
            t = i([I], t)
        }(a.default);
        o.default = D,
        cc._RF.pop()
    }
    , {
        "../../../Scene/LayerManager": "LayerManager",
        "../../../Scene/SceneItem": "SceneItem",
        "../../Configs/DropConfig": "DropConfig",
        "../../Configs/GameConfig": "GameConfig",
        "../../Quick": "Quick",
        "../../Tools/QuickTool": "QuickTool",
        "../../Tools/SoundTool": "SoundTool",
        "../../Tools/SpriteTool": "SpriteTool",
        "../../Tools/WX/DB/Drop_DB": "Drop_DB",
        "../../Tools/WX/DB/Pf_DB": "Pf_DB",
        "../../Tools/WX/WxTool": "WxTool",
        "../Data/GameOverData": "GameOverData",
        "../UIPath": "UIPath",
        "../ui/GameLayer/ReviveLayer": "ReviveLayer",
        "../ui/Game_ui/CellView": "CellView",
        "../ui/Game_ui/GameCellView": "GameCellView",
        "../ui/Game_ui/GameStartHintView": "GameStartHintView"
    }],
    GameStartHintView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "add82Zgs5VKNIBtheEF0uYT", "GameStartHintView");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.startNode = null,
                t.continueNode = null,
                t.dropNode = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.registerTouchEvent = function() {}
            ,
            t.prototype.show = function(e) {
                this.startNode.active = 1 == e,
                this.continueNode.active = !(1 == e);
                var t = cc.repeatForever(cc.sequence([cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1)]));
                1 == e ? this.startNode.runAction(t) : this.continueNode.runAction(t)
            }
            ,
            t.prototype.dismiss = function() {
                this.startNode.stopAllActions(),
                this.continueNode.stopAllActions()
            }
            ,
            i([c(cc.Node)], t.prototype, "startNode", void 0),
            i([c(cc.Node)], t.prototype, "continueNode", void 0),
            i([c(cc.Node)], t.prototype, "dropNode", void 0),
            t = i([r], t)
        }(cc.Component);
        o.default = s,
        cc._RF.pop()
    }
    , {}],
    Gift_DB: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "80fd1uM/qJLLYpMF6msCSsx", "Gift_DB"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../WxTool")
          , i = e("../../../Quick")
          , a = e("../../../Configs/GameConfig")
          , r = e("./Task_DB")
          , c = function() {
            function e() {
                this.gift_give_count = 0,
                this.date = null,
                this.oldGiveDate = null
            }
            return e.prototype.mayGive = function() {
                return this.gift_give_count < 5 && 0 == this.getTime()
            }
            ,
            e.prototype.max = function() {
                return this.gift_give_count >= 5
            }
            ,
            e.prototype.getTime = function() {
                if (null == this.oldGiveDate)
                    return 0;
                var e = Math.ceil(this.oldGiveDate.getTime() / 1e3 - (new Date).getTime() / 1e3);
                return e < 0 ? 0 : e
            }
            ,
            e.dbToRevive = function(e) {
                this.giftData.gift_give_count = e.gift_give_count,
                this.giftData.date = e.date,
                this.giftData.oldGiveDate = new Date(this.giftData.date.getTime() + a.GameConfig.giftGiveCD)
            }
            ,
            e.request = function(t) {
                var o = this;
                (this.giftData.gift_give_count = Number(cc.sys.localStorage.getItem("gift_give_count")),
                this.giftData.date = Number(cc.sys.localStorage.getItem("givwdate")),
                "" != this.gift_give_count && void 0 != this.gift_give_count && null != this.gift_give_count || (this.gift_give_count = 0,
                cc.sys.localStorage.setItem("gift_give_count", 0)),
                "" != this.date && void 0 != this.date && null != this.date || (this.date = 0,
                cc.sys.localStorage.setItem("givwdate", 0)),
                n.WxTool.isWx()) ? n.WxTool.getInstance().db.getCollections(e.path).where({
                    _openid: i.Quick.openId
                }).get().then(function(n) {
                    n.data && n.data.length > 0 && (e.dbToRevive(n.data[0]),
                    o.giftData.date.toDateString() != (new Date).toDateString() && (o.giftData.date = new Date,
                    o.giftData.oldGiveDate = null,
                    o.giftData.gift_give_count = 0)),
                    t(o.giftData)
                }) : t(this.giftData)
            }
            ,
            e.give = function(t) {
                var o = this;
                if (console.log("give :--------------------------------------"),
                this.giftData.gift_give_count += 1,
                this.giftData.date = new Date,
                cc.sys.localStorage.setItem("gift_give_count", this.giftData.gift_give_count),
                cc.sys.localStorage.setItem("givwdate", this.giftData.date),
                !n.WxTool.isWx())
                    return console.log("give : " + a.GameConfig.giftAddDiamonds[this.giftData.gift_give_count - 1]),
                    void i.Quick.addDiamond(a.GameConfig.giftAddDiamonds[this.giftData.gift_give_count - 1]);
                if (this.giftData.gift_give_count >= 5)
                    t.fail();
                else {
                    this.giftData.oldGiveDate = new Date(this.giftData.date.getTime() + a.GameConfig.giftGiveCD);
                    var c = n.WxTool.getInstance().db.getCollections(e.path);
                    c.where({
                        _openid: i.Quick.openId
                    }).get().then(function(e) {
                        e.data && e.data.length > 0 ? c.doc(e.data[0]._id).update({
                            data: o.giftData.uploadData(),
                            success: console.log,
                            fail: console.error
                        }) : c.add({
                            data: o.giftData.uploadData(),
                            success: console.log,
                            fail: console.error
                        }),
                        i.Quick.addDiamond(a.GameConfig.giftAddDiamonds[o.giftData.gift_give_count - 1]),
                        r.Task_DB.updateGiftCount(o.giftData.gift_give_count)
                    })
                }
            }
            ,
            e.prototype.uploadData = function() {
                return cc.sys.localStorage.setItem("gift_give_count", this.giftData.gift_give_count),
                cc.sys.localStorage.setItem("givwdate", this.giftData.date),
                {
                    gift_give_count: this.gift_give_count,
                    date: this.date
                }
            }
            ,
            e.giftData = new e,
            e.path = "gifts",
            e
        }();
        o.Gift_DB = c,
        cc._RF.pop()
    }
    , {
        "../../../Configs/GameConfig": "GameConfig",
        "../../../Quick": "Quick",
        "../WxTool": "WxTool",
        "./Task_DB": "Task_DB"
    }],
    GroupRankListLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ba8deficqJMHKd6iGphEVuw", "GroupRankListLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../Scene/LayerItem")
          , r = e("../../../Tools/WX/WxTool")
          , c = e("../../../../Scene/LayerManager")
          , s = e("../../../Tools/SoundTool")
          , l = cc._decorator
          , u = l.ccclass
          , d = (l.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.onEnter = function(e) {
                r.WxTool.getInstance().sendMessageOpenData({
                    type: 2,
                    shareTicket: e
                }),
                r.WxTool.showBanner(r.WxTool.bannerAd_groupRank)
            }
            ,
            t.prototype.onExit = function() {
                r.WxTool.hideAllBanner()
            }
            ,
            t.prototype.onClickBack = function() {
                s.SoundTool.getInstance().playBtn(),
                c.default.getInstance().dismissItem(this),
                r.WxTool.getInstance().sendMessageOpenData({
                    type: 5
                })
            }
            ,
            t = i([u], t)
        }(a.default));
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/WX/WxTool": "WxTool"
    }],
    HomeScene: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f6dd9I50yhNWYwBt3yxNPYt", "HomeScene");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Scene/SceneItem")
          , r = e("../../../Scene/SceneManager")
          , c = e("../UIPath")
          , s = e("../../Tools/WX/WxTool")
          , l = e("../../Quick")
          , u = e("../../../Scene/LayerManager")
          , d = e("../../Tools/WX/DB/Signin_DB")
          , p = e("../../Tools/WX/DB/Task_DB")
          , h = e("../../Tools/WX/DB/Pf_DB")
          , f = e("../../Tools/SpriteTool")
          , g = e("../../Tools/SoundTool")
          , y = e("../../Tools/WX/DB/Gift_DB")
          , _ = e("../../Tools/WX/DB/Drop_DB")
          , m = e("../../Tools/WX/DB/Hope_DB")
          , v = e("../../Configs/TaskConfig")
          , T = e("../../Configs/GameConfig")
          , C = cc._decorator
          , S = C.ccclass
          , I = C.property
          , w = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.kfNode = null,
                t.addMyXcxNode = null,
                t.diamondLabel = null,
                t.startSprite = null,
                t.giftMaskNode = null,
                t.giftLabel = null,
                t.giftData = null,
                t.hopePointNode = null,
                t.taskPointNode = null,
                t.giftCountLabel = null,
                t.gzhNode = null,
                t.dragonDisplay = null,
                t.adG = null,
                t.adItemsNode = null,
                t.isOpenAds = !1,
                t
            }
            return n(t, e),
			t.prototype.onLoad = function(){
				var addmyxcx = cc.find("ui/addmyxcx", this.node);
				addmyxcx.active = 0;
			},
            t.prototype.unregisterEvent = function() {
                this.closeCrossOneAd(),
                console.log("ununun" + u.default.getInstance().isHaveShow()),
                u.default.getInstance().node.off(l.Quick.myDataUpdateEvent, null, this),
                u.default.getInstance().node.off(c.UIPath.event_theme_change, null, this),
                u.default.getInstance().node.off(c.UIPath.event_gift_shareBegin, null, this),
                u.default.getInstance().node.off(c.UIPath.event_get_task_reward, null, this),
                u.default.getInstance().node.off(c.UIPath.event_layer_pushpop, null, this),
                this.unschedule(this.updateGift),
                this.unschedule(this.updateHope),
                this.unschedule(this.updateTask)
            }
            ,
            t.prototype.onDestroy = function() {
                s.WxTool.dismissClueButton()
            }
            ,
            t.prototype.start = function() {
                var e = this;
                s.WxTool.hideAllBanner(),
                this.onClickOpenAdItemsNode(!1, !1),
                this.crossOne(),
                this.crossList(),
                console.log("regreg" + u.default.getInstance().isHaveShow()),
                u.default.getInstance().node.on(c.UIPath.event_layer_pushpop, function() {
                    console.log("---+" + u.default.getInstance().isHaveShow()),
                    u.default.getInstance().isHaveShow() ? (s.WxTool.dismissClueButton(),
                    console.log("  have--------------- ")) : (s.WxTool.showClueButton(null),
                    s.WxTool.hideAllBanner(),
                    console.log("  have---------------no "))
                }, this),
                s.WxTool.isWx() && wx.getSystemInfo({
                    success: function(t) {
                        if (t.statusBarHeight > 20) {
                            var o = e.addMyXcxNode.getPosition();
                            e.addMyXcxNode.setPosition(cc.v2(o.x, o.y + (t.statusBarHeight - 20) / .244))
                        }
                        var n = e.node.convertToWorldSpaceAR(cc.v2(299, 388 - (t.statusBarHeight - 20) / .352));
                        s.WxTool.showClueButton(cc.v2(t.screenWidth / 750 * n.x, t.screenHeight / 1334 * n.y))
                    }
                }),
                s.WxTool.isWx() && s.WxTool.getInstance().onShow(function(e) {
                    console.log("111111111111111111"),
                    console.log(e),
                    void 0 != e.shareTicket && null != e.shareTicket && null != e.query && e.query.type == s.WxTool.query_groupRank && u.default.getInstance().show(c.UIPath.layer_groupRank, e.shareTicket)
                }),
                g.SoundTool.getInstance().playBgMp3(),
                this.updateSignData(),
                this.updateViewWithData(),
                u.default.getInstance().node.on(l.Quick.myDataUpdateEvent, function() {
                    e.updateViewWithData()
                }, this),
                this.updateStartButtonSprite(),
                u.default.getInstance().node.on(c.UIPath.event_theme_change, function() {
                    console.log("\u5207\u6362\u76ae\u80a4\u5566"),
                    e.updateStartButtonSprite()
                }, this),
                u.default.getInstance().node.on(c.UIPath.event_gift_shareBegin, function() {
                    e.onClickGift()
                }, this),
                _.Drop_DB.request(function() {}),
                y.Gift_DB.request(function() {
                    e.giftData = y.Gift_DB.giftData
                }),
                this.giftCountLabel.string = "+" + T.GameConfig.giftAddDiamonds[0],
                this.schedule(this.updateGift, 1),
                this.updateHope(),
                this.schedule(this.updateHope, 5),
                this.updateTask(),
                this.schedule(this.updateTask, 5),
                u.default.getInstance().node.on(c.UIPath.event_get_task_reward, function() {
                    var t = v.TaskConfig.getTasks();
                    e.updateWithTasks(t)
                }, this)
            }
            ,
            t.prototype.update = function(e) {
                this.updateViewWithData()
            }
            ,
            t.prototype.updateHope = function() {
                var e = this;
                m.Hope_DB.request(function(t) {
                    e.hopePointNode.active = !(0 == t)
                })
            }
            ,
            t.prototype.updateTask = function() {
                var e = this;
                p.Task_DB.request(function(t) {
                    e.updateWithTasks(t)
                })
            }
            ,
            t.prototype.updateWithTasks = function(e) {
                if (null != this && null != this.taskPointNode) {
                    for (var t = !1, o = 0; o < e.length; o++)
                        if (e[o].setup == v.TaskItem.taskSetupNoGet) {
                            t = !0;
                            break
                        }
                    this.taskPointNode.active = t
                }
            }
            ,
            t.prototype.updateGift = function() {
                if (this.giftData) {
                    if (this.giftData.mayGive())
                        this.giftMaskNode.active = !1;
                    else if (this.giftMaskNode.active = !0,
                    this.giftData.max())
                        this.giftLabel.string = "OK";
                    else {
                        var e = this.giftData.getTime();
                        this.giftLabel.string = e + "S"
                    }
                    this.giftCountLabel.string = "+" + T.GameConfig.giftAddDiamonds[this.giftData.gift_give_count]
                }
            }
            ,
            t.prototype.updateStartButtonSprite = function() {
                console.log("111111111"),
                f.SpriteTool.loadSprite(this.startSprite, h.Pf_DB.getCurrentPf().getStartPath())
            }
            ,
            t.prototype.updateViewWithData = function() {
                this.diamondLabel.string = l.Quick.myData.diamond + ""
            }
            ,
            t.prototype.updateSignData = function() {
                s.WxTool.isWx() && d.Signin_DB.request(function(e) {
                    e.toDay() || u.default.getInstance().show(c.UIPath.layer_signin, e)
                })
            }
            ,
            t.prototype.onClickStartGame = function() {
                u.default.showLoading(),
                g.SoundTool.getInstance().playBtn(),
                r.default.getInstance().show(c.UIPath.sc_game)
            }
            ,
            t.prototype.onUpdateScore = function() {}
            ,
            t.prototype.onClickRank = function() {
                g.SoundTool.getInstance().playBtn(),
                u.default.getInstance().show(c.UIPath.layer_rank)
            }
            ,
            t.prototype.onClickTask = function() {
                g.SoundTool.getInstance().playBtn(),
                u.default.getInstance().show(c.UIPath.layer_task)
            }
            ,
            t.prototype.onClickShop = function() {
                g.SoundTool.getInstance().playBtn(),
                u.default.getInstance().show(c.UIPath.layer_shop)
            }
            ,
            t.prototype.onClickGift = function() {
                return u.default.showLoading(),
                g.SoundTool.getInstance().playBtn(),
                this.giftData.max() ? (u.default.dismissLoading(),
                void u.default.getInstance().showMomentHint("\u4eca\u65e5\u7684\u5956\u52b1\u5df2\u5168\u90e8\u9886\u53d6\u5b8c")) : this.giftData.mayGive() ? (u.default.dismissLoading(),
                void y.Gift_DB.give(function() {
                    u.default.getInstance().showMomentHint("\u606d\u559c\uff01\u9886\u53d6\u6210\u529f")
                })) : (u.default.dismissLoading(),
                void u.default.getInstance().showMomentHint("\u6b63\u5904\u4e8ecd\u671f\u95f4"))
            }
            ,
            t.prototype.onClickSignIn = function() {
                g.SoundTool.getInstance().playBtn(),
                u.default.getInstance().show(c.UIPath.layer_signin)
            }
            ,
            t.prototype.onClickGroupRank = function() {
                g.SoundTool.getInstance().playBtn(),
                s.WxTool.share({
                    type: s.WxTool.shareType_groupRank
                })
            }
            ,
            t.prototype.onClickHuzhuLi = function() {
                g.SoundTool.getInstance().playBtn(),
                u.default.getInstance().show(c.UIPath.layer_friendHope)
            }
            ,
            t.prototype.onClickSetting = function() {
                g.SoundTool.getInstance().playBtn()
            }
            ,
            t.prototype.onClickOpenKfViewButton = function() {
                this.kfNode.active = !0
            }
            ,
            t.prototype.onClickCloseKfViewButton = function() {
                this.kfNode.active = !1
            }
            ,
            t.prototype.onClickOpenKfButton = function() {}
            ,
            t.prototype.onClickDropTipsButton = function() {
                u.default.getInstance().show(c.UIPath.layer_dropTips)
            }
            ,
            t.prototype.onClickWxQuanButton = function() {}
            ,
            t.prototype.onClickGzh = function() {}
            ,
            t.prototype.onClickCloseGzh = function() {
                this.gzhNode.active = !1
            }
            ,
            t.prototype.closeCrossOneAd = function() {}
            ,
            t.prototype.crossOne = function() {
                if (s.WxTool.isWx())
                    ;
            }
            ,
            t.prototype.crossList = function() {
                var e = this;
                if (s.WxTool.isWx())
                    if (null == l.Quick.getCross("homeList") || void 0 == l.Quick.getCross("homeList"))
                        var t = s.WxTool.openFksdkOneAd(function(o) {
                            o && (t.data = t.ad.getAdsData().ads,
                            l.Quick.crossAds.homeList = t.data,
                            e.showList())
                        }, "homeList");
                    else
                        this.showList()
            }
            ,
            t.prototype.showList = function() {
                var e = this;
                if (s.WxTool.isWx())
                    for (var t = l.Quick.getCross("homeList"), o = this.adItemsNode.getChildByName("layout"), n = function(n) {
                        var i = o.children[n];
                        i.on(cc.Node.EventType.TOUCH_END, function(t) {
                            e.onClickAdListItem(n)
                        });
                        var a = i.getChildByName("label").getComponent(cc.Label)
                          , r = i.getChildByName("sprite").getComponent(cc.Sprite)
                          , c = t[n];
                        a.string = c.gameName,
                        console.log("\u52a0\u8f7d\u5e7f\u544a+++" + c.gameName + "..." + c.prId),
                        null != c.icon && void 0 != c.icon && c.icon.length > 0 ? cc.loader.load({
                            url: c.icon,
                            type: "png"
                        }, function(e, t) {
                            e && console.error(e),
                            r.spriteFrame = new cc.SpriteFrame(t)
                        }) : f.SpriteTool.loadSprite(r, "Sprite/default_avatar")
                    }, i = 0; i < 9; i++)
                        n(i)
            }
            ,
            t.prototype.onClickAdListItem = function(e) {
                console.log("\u70b9\u51fb\u4e86\u5e7f\u544a+++" + e);
                var t = l.Quick.getCross("homeList")[e];
                s.WxTool.openFksdkOneAd(function(e) {}, "homeList").ad.show({
                    prId: t.prId,
                    success: function() {
                        console.log("\u5e7f\u544a\u5c55\u793a\u6210\u529f\uff01")
                    },
                    fail: function(e) {
                        console.log("\u5e7f\u544a\u5c55\u793a\u5931\u8d25", e)
                    }
                })
            }
            ,
            t.prototype.onClickAdItemsRight = function() {
                this.isOpenAds ? (this.onClickOpenAdItemsNode(!1, !0),
                this.isOpenAds = !1) : (this.onClickOpenAdItemsNode(!0, !0),
                this.isOpenAds = !0)
            }
            ,
            t.prototype.onClickOpenAdItemsNode = function(e, t) {
                var o = cc.director.getWinSize().width;
                if (e) {
                    s.WxTool.isWx() && s.WxTool.openFksdkOneAd(function(e) {}, "homeList").ad.adsPointShowLog();
                    var n = 0 - o / 2 + 492;
                    t ? this.adItemsNode.runAction(cc.moveTo(.2, cc.p(n, this.adItemsNode.y))) : this.adItemsNode.x = n
                } else {
                    n = 0 - o / 2 + 55;
                    t ? this.adItemsNode.runAction(cc.moveTo(.2, cc.p(n, this.adItemsNode.y))) : (console.log(n),
                    this.adItemsNode.x = n)
                }
            }
            ,
            i([I(cc.Node)], t.prototype, "kfNode", void 0),
            i([I(cc.Node)], t.prototype, "addMyXcxNode", void 0),
            i([I(cc.Label)], t.prototype, "diamondLabel", void 0),
            i([I(cc.Sprite)], t.prototype, "startSprite", void 0),
            i([I(cc.Node)], t.prototype, "giftMaskNode", void 0),
            i([I(cc.Label)], t.prototype, "giftLabel", void 0),
            i([I(cc.Node)], t.prototype, "hopePointNode", void 0),
            i([I(cc.Node)], t.prototype, "taskPointNode", void 0),
            i([I(cc.Label)], t.prototype, "giftCountLabel", void 0),
            i([I(cc.Node)], t.prototype, "gzhNode", void 0),
            i([I(cc.Node)], t.prototype, "adItemsNode", void 0),
            t = i([S], t)
        }(a.default);
        o.default = w,
        cc._RF.pop()
    }
    , {
        "../../../Scene/LayerManager": "LayerManager",
        "../../../Scene/SceneItem": "SceneItem",
        "../../../Scene/SceneManager": "SceneManager",
        "../../Configs/GameConfig": "GameConfig",
        "../../Configs/TaskConfig": "TaskConfig",
        "../../Quick": "Quick",
        "../../Tools/SoundTool": "SoundTool",
        "../../Tools/SpriteTool": "SpriteTool",
        "../../Tools/WX/DB/Drop_DB": "Drop_DB",
        "../../Tools/WX/DB/Gift_DB": "Gift_DB",
        "../../Tools/WX/DB/Hope_DB": "Hope_DB",
        "../../Tools/WX/DB/Pf_DB": "Pf_DB",
        "../../Tools/WX/DB/Signin_DB": "Signin_DB",
        "../../Tools/WX/DB/Task_DB": "Task_DB",
        "../../Tools/WX/WxTool": "WxTool",
        "../UIPath": "UIPath"
    }],
    Hope_DB: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1df20llRttM1poI3qhoTl9W", "Hope_DB"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../WxTool")
          , i = e("../../../Quick")
          , a = function() {
            function e() {}
            return e.addHope = function(e) {
                n.WxTool.getInstance().cloudCallFunction({
                    data: {
                        targetid: e
                    },
                    name: "addHope",
                    complete: function(e) {}
                })
            }
            ,
            e.useHope = function(e) {
                var t = this;
                n.WxTool.getInstance().cloudCallFunction({
                    name: "useHope",
                    complete: function(o) {
                        o.result && 0 == o.result.success ? e(!1) : (t.hope_count--,
                        e(!0, o.result.diamond))
                    }
                })
            }
            ,
            e.request = function(t) {
                var o = this;
                n.WxTool.isWx() ? n.WxTool.getInstance().db.getCollections(e.path).where({
                    targetid: i.Quick.openId
                }).get().then(function(e) {
                    console.log("resresresresresresresresres"),
                    console.log(e),
                    e.data && e.data.length > 0 ? o.hope_count = e.data[0].count : o.hope_count = 0,
                    t(o.hope_count)
                }) : t(5)
            }
            ,
            e.path = "friendhopes",
            e.hope_count = -1,
            e
        }();
        o.Hope_DB = a,
        cc._RF.pop()
    }
    , {
        "../../../Quick": "Quick",
        "../WxTool": "WxTool"
    }],
    Item_Addxcx: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a1b0fJ+rURCML4hs1MaY74n", "Item_Addxcx");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , r = a.ccclass
          , c = (a.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.start = function() {
                this.node.runAction(cc.repeatForever(cc.sequence([cc.moveBy(.5, cc.v2(0, -20)), cc.moveBy(.5, cc.v2(0, 20))])))
            }
            ,
            t = i([r], t)
        }(cc.Component));
        o.default = c,
        cc._RF.pop()
    }
    , {}],
    Item_drop_buy: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d4dd0UwVQtGOIsG/a5qQYZ/", "Item_drop_buy");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Tools/WX/DB/Drop_DB")
          , r = e("../../../Quick")
          , c = e("../../../Tools/SpriteTool")
          , s = e("../../../../Scene/LayerManager")
          , l = e("../../UIPath")
          , u = e("../../../Tools/WX/WxTool")
          , d = e("../../../Tools/SoundTool")
          , p = cc._decorator
          , h = p.ccclass
          , f = p.property
          , g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nameLabel = null,
                t.videoNode = null,
                t.diamondNode = null,
                t.diamondLabel = null,
                t.dropCountLabel = null,
                t.dropSprite = null,
                t.dropData = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.setData = function(e, t) {
                this.dropData = e,
                this.nameLabel.string = e.name,
                this.diamondLabel.string = e.diamond + "",
                this.dropCountLabel.string = this.dropData.count + "",
                c.SpriteTool.loadSprite(this.dropSprite, e.sprite)
            }
            ,
            t.prototype.onClickBuy = function() {
                var e = this;
                d.SoundTool.getInstance().playBtn(),
                r.Quick.myData.diamond < this.dropData.diamond ? s.default.getInstance().showMomentHint("\u94bb\u77f3\u4e0d\u8db3") : (s.default.showLoading(),
                a.Drop_DB.buyDrop({
                    dropid: this.dropData.getStringId(),
                    count: 1,
                    diamond: this.dropData.diamond,
                    type: this.dropData.dropType,
                    success: function() {
                        e.dropCountLabel.string = e.dropData.count + "",
                        r.Quick.updateMydata(null),
                        s.default.dismissLoading(),
                        s.default.getInstance().node.emit(l.UIPath.event_shop_obtain_drop, e.dropData.sprite)
                    },
                    fail: function() {
                        s.default.dismissLoading()
                    }
                }))
            }
            ,
            t.prototype.onClickVideoBuy = function() {
                var e = this;
                s.default.showLoading(),
                d.SoundTool.getInstance().playBtn(),
                u.WxTool.getInstance().videoAd({
                    type: u.WxTool.rewardAd_drop,
                    success: function() {
                        e.freeBuy()
                    },
                    fail: function(e) {
                        s.default.dismissLoading()
                    }
                })
            }
            ,
            t.prototype.freeBuy = function() {
                var e = this;
                a.Drop_DB.buyDrop({
                    dropid: this.dropData.getStringId(),
                    count: 1,
                    diamond: 0,
                    type: this.dropData.dropType,
                    success: function() {
                        e.dropCountLabel.string = e.dropData.count + "",
                        r.Quick.updateMydata(null),
                        s.default.dismissLoading(),
                        s.default.getInstance().node.emit(l.UIPath.event_shop_obtain_drop, e.dropData.sprite)
                    },
                    fail: function() {
                        s.default.dismissLoading()
                    }
                })
            }
            ,
            i([f(cc.Label)], t.prototype, "nameLabel", void 0),
            i([f(cc.Node)], t.prototype, "videoNode", void 0),
            i([f(cc.Node)], t.prototype, "diamondNode", void 0),
            i([f(cc.Label)], t.prototype, "diamondLabel", void 0),
            i([f(cc.Label)], t.prototype, "dropCountLabel", void 0),
            i([f(cc.Sprite)], t.prototype, "dropSprite", void 0),
            t = i([h], t)
        }(cc.Component);
        o.default = g,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Quick": "Quick",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/SpriteTool": "SpriteTool",
        "../../../Tools/WX/DB/Drop_DB": "Drop_DB",
        "../../../Tools/WX/WxTool": "WxTool",
        "../../UIPath": "UIPath"
    }],
    Item_pf: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "23aa9cy2LZKirbLyRlQq8QG", "Item_pf");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Tools/SpriteTool")
          , r = e("../../../Tools/WX/DB/Pf_DB")
          , c = e("../../../../Scene/LayerManager")
          , s = e("../../UIPath")
          , l = e("../../../Tools/SoundTool")
          , u = e("../../../Tools/WX/WxTool")
          , d = e("../../../Quick")
          , p = cc._decorator
          , h = p.ccclass
          , f = p.property
          , g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.bgSprite = null,
                t.btnSprite = null,
                t.countLabel = null,
                t.buyNode = null,
                t.selectNode = null,
                t.pfData = null,
                t.event_theme_change_Action = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {
                var e = this;
                this.event_theme_change_Action = function() {
                    e.updatePfSelect()
                }
                ,
                c.default.getInstance().node.on(s.UIPath.event_theme_change, this.event_theme_change_Action, this.node)
            }
            ,
            t.prototype.onEnable = function() {}
            ,
            t.prototype.onDisable = function() {
                c.default.getInstance().node.off(s.UIPath.event_theme_change, this.event_theme_change_Action, this.node)
            }
            ,
            t.prototype.updatePfSelect = function() {
                this.pfData.getStringId() == r.Pf_DB.curSelectId ? (this.selectNode.active = !0,
                a.SpriteTool.loadSprite(this.selectNode.getComponent(cc.Sprite), this.pfData.getSelectSpritePath())) : this.selectNode.active = !1
            }
            ,
            t.prototype.setData = function(e, t) {
                this.pfData = e,
                a.SpriteTool.loadSprite(this.bgSprite, e.getItemSpritePath()),
                this.updatePfSelect(),
                e.videoOpen ? this.buyNode.active = !1 : (this.buyNode.active = !0,
                a.SpriteTool.loadSprite(this.btnSprite, e.getBtnSpritePath()),
                this.countLabel.string = e.diamond + "")
            }
            ,
            t.prototype.onClickVideoButton = function() {
                var e = this;
                l.SoundTool.getInstance().playBtn(),
                c.default.showLoading(),
                u.WxTool.getInstance().cloudCallFunction({
                    data: {
                        pfid: this.pfData.getStringId(),
                        diamond: this.pfData.diamond
                    },
                    name: "buyTheme",
                    complete: function(t) {
                        c.default.dismissLoading(),
                        0 == t.result.success ? c.default.getInstance().showMomentHint(t.result.msg) : (d.Quick.updateMydata(function() {}),
                        r.Pf_DB.request(function(t) {
                            for (var o = 0; o < t.length; o++)
                                if (t[o].getStringId() === e.pfData.getStringId())
                                    return e.pfData = t[o],
                                    void e.setData(e.pfData, 1)
                        }))
                    }
                })
            }
            ,
            i([f(cc.Sprite)], t.prototype, "bgSprite", void 0),
            i([f(cc.Sprite)], t.prototype, "btnSprite", void 0),
            i([f(cc.Label)], t.prototype, "countLabel", void 0),
            i([f(cc.Node)], t.prototype, "buyNode", void 0),
            i([f(cc.Node)], t.prototype, "selectNode", void 0),
            t = i([h], t)
        }(cc.Component);
        o.default = g,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Quick": "Quick",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/SpriteTool": "SpriteTool",
        "../../../Tools/WX/DB/Pf_DB": "Pf_DB",
        "../../../Tools/WX/WxTool": "WxTool",
        "../../UIPath": "UIPath"
    }],
    Item_rank: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "84a1dMroipFfqXQvbKI91w+", "Item_rank");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Quick")
          , r = e("../Game_ui/CellView")
          , c = e("../../../../tableView/viewCell")
          , s = e("../../../Tools/QuickTool")
          , l = e("../../../Tools/SpriteTool")
          , u = cc._decorator
          , d = u.ccclass
          , p = u.property
          , h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.medals = [null],
                t.levelLabel = null,
                t.nameLabel = null,
                t.scoreLabel = null,
                t.avatar = null,
                t.cellNode = null,
                t.bgNode1 = null,
                t.bgNode2 = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.setModel = function(e, t, o) {
                void 0 === o && (o = !1),
                void 0 != e.maxNum && null != e.maxNum || (e.maxNum = 2);
                for (var n = 0; n < this.medals.length; n++)
                    this.medals[n].node.active = t == n;
                t < 3 ? this.levelLabel.node.active = !1 : (this.levelLabel.node.active = !0,
                this.levelLabel.string = t + 1),
                o || (this.bgNode1.active = t % 2 == 0,
                this.bgNode2.active = !(t % 2 == 0)),
                this.cellNode.getComponent(r.default).setNum(e.maxNum);
                var i = e.nickName ? e.nickName : e.nickname;
                if (this.nameLabel.string = s.QuickTool.formatName(i),
                this.scoreLabel.string = e.maxScore + "",
                null != e.avatarUrl && void 0 != e.avatarUrl && e.avatarUrl.length > 0) {
                    var a = this.avatar;
                    cc.loader.load({
                        url: e.avatarUrl,
                        type: "png"
                    }, function(e, t) {
                        e && console.error(e),
                        a.spriteFrame = new cc.SpriteFrame(t)
                    })
                } else
                    l.SpriteTool.loadSprite(this.avatar, "Sprite/default_avatar")
            }
            ,
            t.prototype.init = function(e, t, o, n) {
                var i = a.Quick.rankListData[e];
                this.setModel(i, e)
            }
            ,
            i([p(cc.Sprite)], t.prototype, "medals", void 0),
            i([p(cc.Label)], t.prototype, "levelLabel", void 0),
            i([p(cc.Label)], t.prototype, "nameLabel", void 0),
            i([p(cc.Label)], t.prototype, "scoreLabel", void 0),
            i([p(cc.Sprite)], t.prototype, "avatar", void 0),
            i([p(cc.Node)], t.prototype, "cellNode", void 0),
            i([p(cc.Node)], t.prototype, "bgNode1", void 0),
            i([p(cc.Node)], t.prototype, "bgNode2", void 0),
            t = i([d], t)
        }(c.default);
        o.default = h,
        cc._RF.pop()
    }
    , {
        "../../../../tableView/viewCell": "viewCell",
        "../../../Quick": "Quick",
        "../../../Tools/QuickTool": "QuickTool",
        "../../../Tools/SpriteTool": "SpriteTool",
        "../Game_ui/CellView": "CellView"
    }],
    Item_task: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4115aAZzWlJabSW/IND/2PJ", "Item_task");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Configs/TaskConfig")
          , r = e("../../../Tools/WX/DB/Task_DB")
          , c = e("../../../../Scene/LayerManager")
          , s = e("../../UIPath")
          , l = e("../../../../Scene/SceneManager")
          , u = e("../../../Tools/WX/DB/Signin_DB")
          , d = e("../../../Tools/SoundTool")
          , p = cc._decorator
          , h = p.ccclass
          , f = p.property
          , g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.yilingquNode = null,
                t.goNode = null,
                t.getNode = null,
                t.contentLabel = null,
                t.oneDiamondNode = null,
                t.twoDiamondNode = null,
                t.countLabel = null,
                t.rewardLabel = null,
                t.signinSprite = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.setData = function(e, t) {
                this.data = e,
                this.contentLabel.string = e.name,
                this.signinSprite.active = 1 == e.type,
                1 == e.type ? this.rewardLabel.node.active = !1 : (this.rewardLabel.node.active = !0,
                this.rewardLabel.string = "+" + e.reward),
                this.twoDiamondNode.active = e.reward >= 100,
                this.oneDiamondNode.active = !(e.reward >= 100),
                this.goNode.active = !1,
                this.yilingquNode.active = !1,
                this.getNode.active = !1,
                1 == e.setup ? (this.goNode.active = !0,
                this.countLabel.string = "( " + e.cur + "/" + e.value + " )") : (this.countLabel.string = "( " + e.value + "/" + e.value + " )",
                2 == e.setup ? this.getNode.active = !0 : this.yilingquNode.active = !0)
            }
            ,
            t.prototype.onClickGetButton = function() {
                var e = this;
                d.SoundTool.getInstance().playBtn(),
                c.default.showLoading(),
                r.Task_DB.receiveReward({
                    item: this.data,
                    success: function() {
                        c.default.dismissLoading(),
                        e.setData(e.data, 1),
                        c.default.getInstance().node.emit(s.UIPath.event_get_task_reward)
                    },
                    fail: function() {
                        c.default.dismissLoading()
                    }
                })
            }
            ,
            t.prototype.onClickGoButton = function() {
                d.SoundTool.getInstance().playBtn(),
                c.default.getInstance().dismiss(s.UIPath.layer_task),
                this.data.type == a.TaskConfig.signinType ? u.Signin_DB.request(function(e) {
                    c.default.getInstance().show(s.UIPath.layer_signin, e)
                }) : this.data.type == a.TaskConfig.scoreType || this.data.type == a.TaskConfig.gameCountType ? l.default.getInstance().show(s.UIPath.sc_game) : this.data.type == a.TaskConfig.allWelfareType ? c.default.getInstance().node.emit(s.UIPath.event_gift_shareBegin) : this.data.type == a.TaskConfig.mutualRewardType && c.default.getInstance().show(s.UIPath.layer_friendHope)
            }
            ,
            i([f(cc.Node)], t.prototype, "yilingquNode", void 0),
            i([f(cc.Node)], t.prototype, "goNode", void 0),
            i([f(cc.Node)], t.prototype, "getNode", void 0),
            i([f(cc.Label)], t.prototype, "contentLabel", void 0),
            i([f(cc.Node)], t.prototype, "oneDiamondNode", void 0),
            i([f(cc.Node)], t.prototype, "twoDiamondNode", void 0),
            i([f(cc.Label)], t.prototype, "countLabel", void 0),
            i([f(cc.Label)], t.prototype, "rewardLabel", void 0),
            i([f(cc.Node)], t.prototype, "signinSprite", void 0),
            t = i([h], t)
        }(cc.Component);
        o.default = g,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../../Scene/SceneManager": "SceneManager",
        "../../../Configs/TaskConfig": "TaskConfig",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/WX/DB/Signin_DB": "Signin_DB",
        "../../../Tools/WX/DB/Task_DB": "Task_DB",
        "../../UIPath": "UIPath"
    }],
    LanguageData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var n = e("polyglot.min")
          , i = null;
        function a(e) {
            return window.i18n.languages[e]
        }
        function r(e) {
            e && (i ? i.replace(e) : i = new n({
                phrases: e,
                allowMissing: !0
            }))
        }
        window.i18n || (window.i18n = {
            languages: {},
            curLang: ""
        }),
        t.exports = {
            init: function(e) {
                if (e !== window.i18n.curLang) {
                    var t = a(e) || {};
                    window.i18n.curLang = e,
                    r(t),
                    this.inst = i
                }
            },
            t: function(e, t) {
                if (i)
                    return i.t(e, t)
            },
            inst: i,
            updateSceneRenderers: function() {
                for (var e = cc.director.getScene().children, t = [], o = 0; o < e.length; ++o) {
                    var n = e[o].getComponentsInChildren("LocalizedLabel");
                    Array.prototype.push.apply(t, n)
                }
                for (var i = 0; i < t.length; ++i) {
                    var a = t[i];
                    a.node.active && a.updateLabel()
                }
                for (var r = [], c = 0; c < e.length; ++c) {
                    var s = e[c].getComponentsInChildren("LocalizedSprite");
                    Array.prototype.push.apply(r, s)
                }
                for (var l = 0; l < r.length; ++l) {
                    var u = r[l];
                    u.node.active && u.updateSprite(window.i18n.curLang)
                }
            }
        },
        cc._RF.pop()
    }
    , {
        "polyglot.min": "polyglot.min"
    }],
    LayerItem: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "66f188nTnlNP61PuxOm3eWf", "LayerItem");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , r = a.ccclass
          , c = (a.property,
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.openPath = null,
                t
            }
            return n(t, e),
            t.prototype.onEnter = function(e) {}
            ,
            t.prototype.onExit = function() {}
            ,
            t.prototype.onShow = function() {}
            ,
            t = i([r], t)
        }(cc.Component));
        o.default = c,
        cc._RF.pop()
    }
    , {}],
    LayerManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b959bLx8GhNjZGTq7+Fk+tx", "LayerManager");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("./LayerItem")
          , r = e("../script/Logic/UIPath")
          , c = cc._decorator
          , s = c.ccclass
          , l = c.property
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.layerParent = null,
                t.maskLayer = null,
                t.hintNode = null,
                t.hintLabel = null,
                t.layerPrefabs = {},
                t.layerItems = [],
                t.layerCacheItems = {},
                t.layerStack = [],
                t
            }
            var o;
            return n(t, e),
            o = t,
            t.getInstance = function() {
                return this.s_instance
            }
            ,
            t.prototype.onLoad = function() {
                o.s_instance = this,
                this.loadLayer(r.UIPath.loading, function() {})
            }
            ,
            t.prototype.loadLayer = function(e, t) {
                var o = this;
                this.layerPrefabs[e] ? t() : cc.loader.loadRes("Prefabs/Layer/" + e, function(n, i) {
                    n ? console.log(n) : (o.layerPrefabs[e] = i,
                    t())
                })
            }
            ,
            t.prototype.show = function(e, t, o) {
                var n = this;
                void 0 === t && (t = null),
                void 0 === o && (o = !1),
                this.layerCacheItems[e] ? this.show_item(e, this.layerCacheItems[e], t) : this.loadLayer(e, function() {
                    var i = cc.instantiate(n.layerPrefabs[e]).getComponent(a.default);
                    o && (n.layerCacheItems[e] = i),
                    n.show_item(e, i, t)
                })
            }
            ,
            t.prototype.getShowItemWithKey = function(e) {
                for (var t = 0; t < this.layerItems.length; t++)
                    if (this.layerItems[t].openPath == e)
                        return [this.layerItems[t], t];
                return null
            }
            ,
            t.prototype.dismiss = function(e) {
                var t = this.getShowItemWithKey(e);
                t && (t[0].onExit(),
                t[0].node.parent = null,
                this.layerItems.splice(t[1], 1),
                this.layoutLayerIfNeed(!0)),
                o.getInstance().node.emit(r.UIPath.event_layer_pushpop)
            }
            ,
            t.prototype.dismissItem = function(e) {
                this.dismiss(e.openPath)
            }
            ,
            t.prototype.show_item = function(e, t, n) {
                void 0 === n && (n = null),
                t.openPath = e,
                t.node.parent = this.layerParent,
                this.layerItems.push(t),
                this.layoutLayerIfNeed(),
                t.onEnter(n),
                o.getInstance().node.emit(r.UIPath.event_layer_pushpop)
            }
            ,
            t.prototype.isHaveShow = function() {
                return this.layerItems.length > 0
            }
            ,
            t.prototype.layoutLayerIfNeed = function(e) {
                void 0 === e && (e = !1);
                for (var t = 0; t < this.layerItems.length; t++) {
                    this.layerItems[t].node.zIndex = 2 * t + 2
                }
                0 == this.layerItems.length ? this.maskLayer.active = !1 : (this.layerItems[this.layerItems.length - 1].onShow(),
                this.maskLayer.active = !0,
                this.maskLayer.zIndex = 2 * (this.layerItems.length - 1))
            }
            ,
            t.prototype.clearAll = function() {
                for (var e = 0; e < this.layerItems.length; e++) {
                    this.layerItems[e].node.parent = null
                }
                this.layerItems = [],
                this.layoutLayerIfNeed()
            }
            ,
            t.prototype.showMomentHint = function(e) {
                var t = this;
                if (!this.hintNode.active) {
                    this.hintNode.opacity = 255,
                    this.hintNode.active = !0,
                    this.hintLabel.string = e;
                    var o = [cc.delayTime(1), cc.fadeOut(1), cc.callFunc(function() {
                        t.hintNode.active = !1
                    })];
                    this.hintNode.runAction(cc.sequence(o))
                }
            }
            ,
            t.showLoading = function() {
                o.getInstance().show(r.UIPath.loading, null, !0)
            }
            ,
            t.dismissLoading = function() {
                o.getInstance().dismiss(r.UIPath.loading)
            }
            ,
            t.s_instance = null,
            i([l(cc.Node)], t.prototype, "layerParent", void 0),
            i([l(cc.Node)], t.prototype, "maskLayer", void 0),
            i([l(cc.Node)], t.prototype, "hintNode", void 0),
            i([l(cc.Label)], t.prototype, "hintLabel", void 0),
            t = o = i([s], t)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../script/Logic/UIPath": "UIPath",
        "./LayerItem": "LayerItem"
    }],
    LocalizedLabel: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var n = e("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                menu: "i18n/LocalizedLabel"
            },
            properties: {
                dataID: {
                    get: function() {
                        return this._dataID
                    },
                    set: function(e) {
                        this._dataID !== e && (this._dataID = e,
                        this.updateLabel())
                    }
                },
                _dataID: ""
            },
            onLoad: function() {
                n.inst || n.init(),
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Label);
                if (e)
                    return this.label = e,
                    void this.updateLabel()
            },
            updateLabel: function() {
                this.label ? n.t(this.dataID) && (this.label.string = n.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        LanguageData: "LanguageData"
    }],
    LocalizedSprite: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var n = e("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {
                spriteFrameSet: {
                    default: [],
                    type: n
                }
            },
            onLoad: function() {
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Sprite);
                if (e)
                    return this.sprite = e,
                    void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function(e) {
                for (var t = 0; t < this.spriteFrameSet.length; ++t)
                    if (this.spriteFrameSet[t].language === e)
                        return this.spriteFrameSet[t].spriteFrame
            },
            updateSprite: function(e) {
                if (this.sprite) {
                    var t = this.getSpriteFrameByLang(e);
                    !t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame),
                    this.sprite.spriteFrame = t
                } else
                    cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        SpriteFrameSet: "SpriteFrameSet"
    }],
    MathTool: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0b823FxYQRBApQhBGsJau7d", "MathTool"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = (n.ccclass,
        n.property,
        function() {
            function e() {}
            return e.randomNum = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e)
            }
            ,
            e
        }());
        o.MathTool = i,
        cc._RF.pop()
    }
    , {}],
    MyData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0491c1hk9hEVaxvX7RhlXnH", "MyData"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.maxScore = 1010,
                this.maxNum = 2,
                this.diamond = 0,
                this.thisTime = null,
                cc.sys.platform != cc.sys.WECHAT_GAME && (this.diamond = 100);
                var e = cc.sys.localStorage.getItem("zhuanshi");
                e = null == e || void 0 == e ? 100 : Number(e),
                this.diamond = e
            }
            return e.prototype.fulsh = function() {
                cc.sys.localStorage.setItem("zhuanshi", this.diamond)
            }
            ,
            e
        }();
        o.MyData = n,
        cc._RF.pop()
    }
    , {}],
    "MyProView.ts": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ca728vcjo9CyIPkCgBvMWd9", "MyProView.ts");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.maskNode = null,
                t.itemNode = null,
                t.maxNum = 0,
                t.minNum = 0,
                t.itemOffsetX = 0,
                t.itemMax = -1,
                t.proType = 0,
                t.curPro = 0,
                t.truePro = 0,
                t
            }
            return n(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {
                0 == this.proType && this.curPro <= this.truePro && this.setTruePro(this.curPro + 2)
            }
            ,
            t.prototype.setPro = function(e) {
                e > 100 && (e = 100),
                e < 0 && (e = 0),
                0 == this.proType ? this.truePro = e : this.setTruePro(e)
            }
            ,
            t.prototype.setTruePro = function(e) {
                this.curPro = e;
                var t = this.maxNum - this.minNum
                  , o = t / (100 / e);
                if (this.maskNode.width = o + this.minNum,
                null != this.itemNode) {
                    var n = o + -t / 2 - this.itemOffsetX;
                    this.itemNode.x = -1 != this.itemMax && n > this.itemMax ? this.itemMax : n
                }
            }
            ,
            i([c(cc.Node)], t.prototype, "maskNode", void 0),
            i([c(cc.Node)], t.prototype, "itemNode", void 0),
            i([c], t.prototype, "maxNum", void 0),
            i([c], t.prototype, "minNum", void 0),
            i([c], t.prototype, "itemOffsetX", void 0),
            i([c], t.prototype, "itemMax", void 0),
            t = i([r], t)
        }(cc.Component);
        o.default = s,
        cc._RF.pop()
    }
    , {}],
    NativeApi: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "db41da8sJBIR6KBwTvKV/ot", "NativeApi");
        var n = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, o, n) {
                return o && e(t.prototype, o),
                n && e(t, n),
                t
            }
        }();
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var a = function() {
            function e() {
                i(this, e)
            }
            return n(e, [{
                key: "startRec",
                value: function(e) {
                    null != cc.sys.localStorage.getItem("is_bg_on") && "true" !== cc.sys.localStorage.getItem("is_bg_on") || cc.audioEngine.setVolume(cc.sys.localStorage.getItem("bgID"), 0),
                    native.callClz("Rec", "startRec", e)
                }
            }, {
                key: "stopRec",
                value: function() {
                    null != cc.sys.localStorage.getItem("is_bg_on") && "true" !== cc.sys.localStorage.getItem("is_bg_on") || cc.audioEngine.setVolume(cc.sys.localStorage.getItem("bgID"), .5),
                    native.callClz("Rec", "stopRec")
                }
            }, {
                key: "playRec",
                value: function(e, t) {
                    null != cc.sys.localStorage.getItem("is_bg_on") && "true" !== cc.sys.localStorage.getItem("is_bg_on") || cc.audioEngine.setVolume(cc.sys.localStorage.getItem("bgID"), 0),
                    setTimeout(function() {
                        null != cc.sys.localStorage.getItem("is_bg_on") && "true" !== cc.sys.localStorage.getItem("is_bg_on") || cc.audioEngine.setVolume(cc.sys.localStorage.getItem("bgID"), .5)
                    }, 1e3 * t),
                    native.callClz("Rec", "playRec", e)
                }
            }, {
                key: "getNetworkType",
                value: function(e) {
                    native.callClz("gmut", "getNetworkType", e)
                }
            }, {
                key: "getNetStrength",
                value: function(e) {
                    native.callClz("gmut", "getNetStrength", e)
                }
            }, {
                key: "getBatteryState",
                value: function(e) {
                    native.callClz("gmut", "getBatteryState", e)
                }
            }, {
                key: "getBatteryLevel",
                value: function(e) {
                    native.callClz("gmut", "getBatteryLevel", e)
                }
            }, {
                key: "getPhoto",
                value: function(e) {
                    native.callClz("gmut", "getPhoto", function(t, o) {
                        if (!t)
                            return e(t, o);
                        cc.textureCache.removeTextureForKey(o),
                        cc.sys.os == cc.sys.OS_ANDROID ? cc.loader.load(o, function(t, n) {
                            t ? (cc.error(t),
                            e(!1)) : e(!0, new cc.SpriteFrame(n), jsb.Helper.readFileAsBase64String(o))
                        }) : cc.sys.os == cc.sys.OS_IOS && e(!0, new cc.SpriteFrame(o), jsb.Helper.readFileAsBase64String(o))
                    })
                }
            }, {
                key: "getVersion",
                value: function() {
                    return native.getStr("gmut", "getVersion")
                }
            }, {
                key: "share",
                value: function(e, t, o, n, i, a) {
                    n = n || "",
                    i = i || "",
                    native.callClz("WeChat", "share", e, t, o, n, i, a)
                }
            }, {
                key: "wxLogin",
                value: function(e) {
                    native.callClz("WeChat", "login", e)
                }
            }, {
                key: "getBKValue",
                value: function() {
                    return native._callClz("gmut", "getBKValue", "I", "bk_value")
                }
            }, {
                key: "getAppQuery",
                value: function(e) {
                    native.callClz("gmut", "getAppQuery", e)
                }
            }, {
                key: "getClipboard",
                value: function(e) {
                    native.callClz("gmut", "getClipboard", e)
                }
            }, {
                key: "setClipboard",
                value: function(e) {
                    native.callClz("gmut", "setClipboard", e)
                }
            }]),
            e
        }();
        window.nativeApi = new a,
        cc._RF.pop()
    }
    , {}],
    Native: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8d551C8G/ZLspVkpmGpJXVd", "Native");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, o, n) {
                return o && e(t.prototype, o),
                n && e(t, n),
                t
            }
        }();
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
            function e() {
                a(this, e),
                this.cbIdx = 0,
                this.cbs = {};
                var t = this;
                window.js_native_cb = function(e) {
                    var o = t.cbs[e];
                    if (o) {
                        delete t.cbs[e];
                        var n = Array.prototype.slice.call(arguments);
                        n.splice(0, 1),
                        o.apply(null, n)
                    } else
                        cc.log("no func ", e)
                }
            }
            return i(e, [{
                key: "_newCB",
                value: function(e) {
                    this.cbIdx++;
                    var t = "" + this.cbIdx;
                    return this.cbs[t] = e,
                    t
                }
            }, {
                key: "call",
                value: function() {
                    var e = Array.prototype.slice.call(arguments);
                    if (cc.sys.os == cc.sys.OS_ANDROID)
                        e.splice(0, 0, "Native");
                    else {
                        if (cc.sys.os != cc.sys.OS_IOS)
                            return;
                        e.splice(0, 0, "Native")
                    }
                    this.callClz.apply(this, e)
                }
            }, {
                key: "getStr",
                value: function(e, t) {
                    var o = Array.prototype.slice.call(arguments);
                    return o.splice(2, 0, "Ljava/lang/String;"),
                    this._callClz.apply(this, o)
                }
            }, {
                key: "callClz",
                value: function(e, t) {
                    var o = Array.prototype.slice.call(arguments);
                    return o.splice(2, 0, "V"),
                    this._callClz.apply(this, o)
                }
            }, {
                key: "_callClz",
                value: function(e, t, o) {
                    var i = this
                      , a = Array.prototype.slice.call(arguments);
                    a.splice(0, 3);
                    var r = [e, t];
                    if (cc.sys.os == cc.sys.OS_ANDROID) {
                        if (r[0] = "string" != typeof e ? e.bao : "org/cocos2dx/javascript/" + e,
                        r[2] = "()" + o,
                        a.length > 0) {
                            var c = "";
                            a.forEach(function(e) {
                                switch (void 0 === e ? "undefined" : n(e)) {
                                case "boolean":
                                    c += "Z",
                                    r.push(e);
                                    break;
                                case "string":
                                    c += "Ljava/lang/String;",
                                    r.push(e);
                                    break;
                                case "number":
                                    c += "D",
                                    r.push(e);
                                    break;
                                case "function":
                                    c += "Ljava/lang/String;",
                                    r.push(i._newCB(e))
                                }
                            }),
                            r[2] = "(" + c + ")" + o
                        }
                    } else {
                        if (cc.sys.os != cc.sys.OS_IOS)
                            return;
                        if (a.length > 0) {
                            for (var s = 0; s < a.length; s++) {
                                var l = a[s];
                                "function" == typeof l ? r.push(this._newCB(l)) : r.push(l),
                                t += 0 == s ? ":" : "arg" + s + ":"
                            }
                            r[1] = t
                        }
                    }
                    return jsb.reflection.callStaticMethod.apply(jsb.reflection, r)
                }
            }]),
            e
        }();
        window.native = new r,
        cc._RF.pop()
    }
    , {}],
    PauseLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bb332rGCJ9DeqSE9jdw4ssY", "PauseLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../Scene/LayerItem")
          , r = e("../../../../Scene/LayerManager")
          , c = e("../../../../Scene/SceneManager")
          , s = e("../../UIPath")
          , l = e("../../../Tools/SoundTool")
          , u = e("../../../Tools/WX/WxTool")
          , d = cc._decorator
          , p = d.ccclass
          , h = d.property
          , f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.scoreLabel = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.onEnter = function(e) {
                this.scoreLabel.string = e,
                u.WxTool.showBanner(u.WxTool.bannerAd_pause),
                u.WxTool.getInstance().videoAd({
                    type: u.WxTool.rewardAd_pause,
                    success: function() {}
                })
            }
            ,
            t.prototype.onExit = function() {
                u.WxTool.hideAllBanner()
            }
            ,
            t.prototype.onClickGoMainButton = function() {
                l.SoundTool.getInstance().playBtn(),
                c.default.getInstance().show(s.UIPath.sc_home)
            }
            ,
            t.prototype.onClickContinueButton = function() {
                l.SoundTool.getInstance().playBtn(),
                r.default.getInstance().node.emit(s.UIPath.event_game_pause_end),
                r.default.getInstance().dismissItem(this)
            }
            ,
            t.prototype.onClickRankButton = function() {
                l.SoundTool.getInstance().playBtn(),
                r.default.getInstance().show(s.UIPath.layer_rank)
            }
            ,
            t.prototype.onClickRestartButton = function() {
                l.SoundTool.getInstance().playBtn(),
                r.default.getInstance().node.emit(s.UIPath.event_game_restart),
                r.default.getInstance().dismissItem(this)
            }
            ,
            i([h(cc.Label)], t.prototype, "scoreLabel", void 0),
            t = i([p], t)
        }(a.default);
        o.default = f,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../../Scene/SceneManager": "SceneManager",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/WX/WxTool": "WxTool",
        "../../UIPath": "UIPath"
    }],
    PfConfig: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0d4f7+CHotOqbMbkHCeGz6v", "PfConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../Tools/WX/WxTool")
          , i = e("../../Scene/LayerManager")
          , a = function() {
            function e() {
                this.dropCountColor = cc.color(0, 0, 0),
                this.qmpColor = cc.color(217, 249, 248),
                this.bgid = 1,
                this.id = 1,
                this.videoMaxCount = 20,
                this.videoCurCount = 0,
                this.videoOpen = !1,
                this.isHaveNum = !0,
                this.diamond = 2e3
            }
            return e.prototype.getStringId = function() {
                return "pifu" + this.id
            }
            ,
            e.prototype.getStartPath = function() {
                return "Sprite/Theme/Theme" + this.id + "/start"
            }
            ,
            e.prototype.getBgPath = function() {
                return "Sprite/Theme/Theme" + this.id + "/bg"
            }
            ,
            e.prototype.getWallPath = function() {
                return "Sprite/Theme/Theme" + this.id + "/wall"
            }
            ,
            e.prototype.getCellPath = function(e) {
                return "Sprite/Theme/Theme" + this.id + "/Cells/" + e
            }
            ,
            e.prototype.getItemSpritePath = function() {
                return "Sprite/Theme/Theme" + this.id + "/pfbg"
            }
            ,
            e.prototype.getBtnSpritePath = function() {
                return "Sprite/Theme/Theme" + this.id + "/pfbtn"
            }
            ,
            e.prototype.getSelectSpritePath = function() {
                return "Sprite/Theme/Theme" + this.id + "/pfselect"
            }
            ,
            e
        }();
        o.PfData = a;
        var r = function() {
            function e() {}
            return e.getPfs = function() {
                return 0 == this.pfs.length && this.createPfs(),
                this.pfs
            }
            ,
            e.createPfs = function() {
                var e = new a;
                if (e.videoOpen = !0,
                e.id = 1,
                this.pfs.push(e),
                (e = new a).id = 2,
                e.dropCountColor = cc.color(255, 255, 255),
                e.qmpColor = cc.color(22, 20, 31),
                e.diamond = 1e3,
                this.pfs.push(e),
                (e = new a).id = 3,
                e.dropCountColor = cc.color(255, 255, 255),
                e.qmpColor = cc.color(20, 28, 31),
                e.bgid = 2,
                e.diamond = 5e3,
                this.pfs.push(e),
                (e = new a).id = 4,
                e.dropCountColor = cc.color(255, 255, 255),
                e.qmpColor = cc.color(253, 218, 224),
                e.bgid = 2,
                e.diamond = 8888,
                e.isHaveNum = !0,
                this.pfs.push(e),
                (e = new a).id = 5,
                e.dropCountColor = cc.color(255, 255, 255),
                e.qmpColor = cc.color(255, 255, 255),
                e.bgid = 2,
                e.diamond = 2e4,
                e.isHaveNum = !0,
                this.pfs.push(e),
                (e = new a).id = 6,
                e.dropCountColor = cc.color(255, 255, 255),
                e.qmpColor = cc.color(34, 73, 114),
                e.bgid = 2,
                e.diamond = 3e4,
                e.isHaveNum = !0,
                this.pfs.push(e),
                !n.WxTool.isWx())
                    for (var t = 0; t < this.pfs.length; t++)
                        this.pfs[t].videoOpen = !0
            }
            ,
            e.loadAndReleasePf = function(t, o, n) {
                for (var a = null, r = e.getPfs(), c = 0; c < r.length; c++)
                    r[c].getStringId() == t ? r[c].id : r[c].getStringId() == o && (a = r[c].id);
                i.default.showLoading(),
                cc.loader.loadResDir("Sprite/Theme/Theme" + a, function(e, t) {
                    cc.loader.loadResDir("Sprite/Theme/Theme" + a + "/Cells", function(e, t) {
                        i.default.dismissLoading(),
                        n()
                    })
                })
            }
            ,
            e.pfSelectChange = "pfSelectChange",
            e.pfs = new Array,
            e
        }();
        o.PfConfig = r,
        cc._RF.pop()
    }
    , {
        "../../Scene/LayerManager": "LayerManager",
        "../Tools/WX/WxTool": "WxTool"
    }],
    Pf_DB: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "189b7C61eZPvIn/7Mqx2ieN", "Pf_DB"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../WxTool")
          , i = e("../../../Quick")
          , a = e("../../../Configs/PfConfig")
          , r = e("../../QuickTool")
          , c = e("../../../../Scene/LayerManager")
          , s = e("../../../Logic/UIPath")
          , l = function() {
            function e() {}
            return e.values = function(e) {
                null != e.curSelectId && void 0 != e.curSelectId && (this.curSelectId = e.curSelectId);
                for (var t = a.PfConfig.getPfs(), o = 0; o < t.length; o++) {
                    var n = t[o].getStringId();
                    r.QuickTool.isNullToo(e[n]) || (t[o].videoCurCount = e[n].videoCurCount,
                    t[o].videoOpen = e[n].videoOpen)
                }
            }
            ,
            e.getCurrentPf = function() {
                for (var e = a.PfConfig.getPfs(), t = 0; t < e.length; t++) {
                    if (e[t].getStringId() == this.curSelectId)
                        return e[t]
                }
            }
            ,
            e.request = function(t) {
                var o = this;
                n.WxTool.isWx() ? n.WxTool.getInstance().db.getCollections(e.path).where({
                    _openid: i.Quick.openId
                }).get().then(function(e) {
                    e.data && e.data.length > 0 && o.values(e.data[0]),
                    t(a.PfConfig.getPfs())
                }) : t(a.PfConfig.getPfs())
            }
            ,
            e.selectPfId = function(e, t) {
                if (this.curSelectId !== e) {
                    var o = this.curSelectId;
                    if (!n.WxTool.isWx())
                        return this.curSelectId = e,
                        void a.PfConfig.loadAndReleasePf(o, this.curSelectId, function() {
                            t.success(),
                            c.default.getInstance().node.emit(s.UIPath.event_theme_change)
                        });
                    this.curSelectId = e,
                    a.PfConfig.loadAndReleasePf(o, this.curSelectId, function() {
                        t.success(),
                        c.default.getInstance().node.emit(s.UIPath.event_theme_change)
                    }),
                    this.update({
                        curSelectId: e
                    }, {
                        success: function() {},
                        fail: t.fail
                    })
                }
            }
            ,
            e.addWatchCount = function(e, t) {
                var o = e.getStringId();
                if (!e.videoOpen)
                    if (e.videoCurCount += 1,
                    e.videoOpen = e.videoCurCount == e.videoMaxCount,
                    n.WxTool.isWx()) {
                        var i = {};
                        i[o] = {
                            videoCurCount: e.videoCurCount,
                            videoOpen: e.videoOpen
                        },
                        this.update(i, t)
                    } else
                        t.success()
            }
            ,
            e.update = function(t, o) {
                var a = this;
                null == o && (o = {
                    success: console.log,
                    fail: console.log
                });
                var r = n.WxTool.getInstance().db.getCollections(e.path);
                r.where({
                    _openid: i.Quick.openId
                }).get().then(function(e) {
                    e.data && e.data.length > 0 ? r.doc(e.data[0]._id).update({
                        data: t,
                        success: o.success,
                        fail: o.fail
                    }) : (t.curSelectId = a.curSelectId,
                    r.add({
                        data: t,
                        success: o.success,
                        fail: o.fail
                    }))
                })
            }
            ,
            e.path = "pifus",
            e.curSelectId = "pifu1",
            e
        }();
        o.Pf_DB = l,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Configs/PfConfig": "PfConfig",
        "../../../Logic/UIPath": "UIPath",
        "../../../Quick": "Quick",
        "../../QuickTool": "QuickTool",
        "../WxTool": "WxTool"
    }],
    QuickTool: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b886a0qLatHDLgnuRkOqDuz", "QuickTool"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = (n.ccclass,
        n.property,
        function() {
            function e() {}
            return e.delayExec = function(e, t, o) {
                e.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(o)))
            }
            ,
            e.isNullToo = function(e) {
                return null == e || void 0 == e
            }
            ,
            e.formatName = function(e, t) {
                void 0 === t && (t = 6);
                for (var o = 0, n = 0, i = 0; i < e.length && (e.charCodeAt(i) > 255 ? n += 2 : n++,
                o = i + 1,
                !(n >= 2 * t)); i++)
                    ;
                if (o < t)
                    return e;
                var a = e.charCodeAt(o - 1) > 255 ? o - 1 : o - 2
                  , r = e.substring(0, a);
                return r += "..."
            }
            ,
            e
        }());
        o.QuickTool = i,
        cc._RF.pop()
    }
    , {}],
    Quick: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d1e5bInu2FE7rRyXo6cSrFY", "Quick"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./MyData")
          , i = e("./Tools/WX/WxTool")
          , a = e("../Scene/LayerManager")
          , r = function() {
            function e() {}
            return e.getCross = function(e) {
                return null == this.crossAds[e] || void 0 == this.crossAds[e] ? null : this.crossAds[e]
            }
            ,
            e.updateMydata = function(e) {
                var t = this;
                i.WxTool.isWx() ? i.WxTool.getInstance().db.db_getMyData(this.openId, function(o) {
                    e && e(),
                    t.myData.maxScore = o.maxScore || 0,
                    t.myData.maxNum = o.maxNum || 2,
                    t.myData.diamond = o.diamond || 0,
                    t.myData.thisTime = o.thisTime || null,
                    a.default.getInstance().node.emit("myDataUpdateEvent")
                }) : e && e()
            }
            ,
            e.addDiamond = function(t) {
                console.log("  addDiamond :  " + t),
                this.myData.diamond += t,
                this.myData.fulsh(),
                a.default.getInstance().node.emit("myDataUpdateEvent"),
                i.WxTool.isWx() && i.WxTool.getInstance().addDiamond(t, function() {
                    e.updateMydata(function() {})
                })
            }
            ,
            e.gameid = 0,
            e.sound_push = "push",
            e.sound_merge = "merge",
            e.texture = null,
            e.game = null,
            e.pauseState = !1,
            e.openId = null,
            e.myInfo = null,
            e.myData = new n.MyData,
            e.myDataUpdateEvent = "myDataUpdateEvent",
            e.tempFilePath = null,
            e.rankListData = null,
            e.rankMyData = null,
            e.isShouldUpdateMyRank = !0,
            e.crossAds = {},
            e
        }();
        o.Quick = r,
        cc._RF.pop()
    }
    , {
        "../Scene/LayerManager": "LayerManager",
        "./MyData": "MyData",
        "./Tools/WX/WxTool": "WxTool"
    }],
    RankListLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "13c894E3EtDYIkTd79eJ/T5", "RankListLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../Scene/LayerItem")
          , r = e("../../../Tools/SpriteTool")
          , c = e("../../../Tools/WX/WxTool")
          , s = e("../Item/Item_rank")
          , l = e("../../../../Scene/LayerManager")
          , u = e("../../../Quick")
          , d = e("../../../Tools/SoundTool")
          , p = cc._decorator
          , h = p.ccclass
          , f = p.property
          , g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.friendBtn = null,
                t.worldBtn = null,
                t.friendRankView = null,
                t.myRankItemNode = null,
                t.myRankNode = null,
                t.myRankNoNode = null,
                t.prefab = null,
                t.tableView = null,
                t.isInitRank = !1,
                t
            }
            return n(t, e),
            t.prototype.start = function() {
                this.myRankNode.active = !1,
                this.friendRankView.active = !0,
                c.WxTool.getInstance().sendMessageOpenData({
                    type: 1
                }),
                c.WxTool.showBanner(c.WxTool.bannerAd_rank)
            }
            ,
            t.prototype.onExit = function() {
                c.WxTool.hideAllBanner()
            }
            ,
            t.prototype.updateData = function(e) {
                l.default.showLoading(),
                this.isInitRank = !0,
                l.default.dismissLoading()
            }
            ,
            t.prototype.updateList = function() {
                this.tableView.getComponent(cc.tableView).initTableView(u.Quick.rankListData.length),
                c.WxTool.showBanner(c.WxTool.bannerAd_wordRank)
            }
            ,
            t.prototype.onClickWorldButton = function() {
                d.SoundTool.getInstance().playBtn(),
                this.friendRankView.active = !1,
                this.tableView.active = !0,
                this.myRankNode.active = !0,
                r.SpriteTool.loadSprite(this.worldBtn.getComponent(cc.Sprite), "Sprite/Game/word_select"),
                r.SpriteTool.loadSprite(this.friendBtn.getComponent(cc.Sprite), "Sprite/Game/friend_noselect"),
                this.isInitRank || (this.updateData(1),
                u.Quick.rankMyData && !u.Quick.isShouldUpdateMyRank && this.updateMyRank()),
                c.WxTool.showBanner(c.WxTool.bannerAd_wordRank)
            }
            ,
            t.prototype.onClickFriendButton = function() {
                d.SoundTool.getInstance().playBtn(),
                this.friendRankView.active = !0,
                this.tableView.active = !1,
                this.myRankNode.active = !1,
                r.SpriteTool.loadSprite(this.worldBtn.getComponent(cc.Sprite), "Sprite/Game/word_noselect"),
                r.SpriteTool.loadSprite(this.friendBtn.getComponent(cc.Sprite), "Sprite/Game/friend_select"),
                c.WxTool.showBanner(c.WxTool.bannerAd_rank)
            }
            ,
            t.prototype.onClickShowDetailButton = function() {
                var e = this;
                d.SoundTool.getInstance().playBtn(),
                l.default.showLoading(),
                u.Quick.rankMyData && !u.Quick.isShouldUpdateMyRank ? this.updateMyRank() : c.WxTool.getInstance().videoAd({
                    type: c.WxTool.rewardAd_showMyRank,
                    success: function() {
                        e.showMyRank()
                    },
                    fail: function() {
                        l.default.dismissLoading()
                    }
                })
            }
            ,
            t.prototype.showMyRank = function() {
                var e = this;
                c.WxTool.getInstance().cloudCallFunction({
                    data: {
                        type: 3
                    },
                    name: "ranklist",
                    complete: function(t) {
                        l.default.dismissLoading(),
                        null != t.result && (u.Quick.rankMyData = t.result.my,
                        e.updateMyRank())
                    }
                })
            }
            ,
            t.prototype.updateMyRank = function() {
                c.WxTool.showBanner(c.WxTool.bannerAd_wordRank),
                u.Quick.isShouldUpdateMyRank = !1,
                this.myRankNoNode.active = !1,
                this.myRankItemNode.active = !0,
                this.myRankItemNode.getComponent(s.default).setModel(u.Quick.rankMyData.obj, u.Quick.rankMyData.index - 1, !0)
            }
            ,
            t.prototype.onClickBack = function() {
                d.SoundTool.getInstance().playBtn(),
                l.default.getInstance().dismissItem(this),
                c.WxTool.getInstance().sendMessageOpenData({
                    type: 5
                })
            }
            ,
            i([f(cc.Button)], t.prototype, "friendBtn", void 0),
            i([f(cc.Button)], t.prototype, "worldBtn", void 0),
            i([f(cc.Node)], t.prototype, "friendRankView", void 0),
            i([f(cc.Node)], t.prototype, "myRankItemNode", void 0),
            i([f(cc.Node)], t.prototype, "myRankNode", void 0),
            i([f(cc.Node)], t.prototype, "myRankNoNode", void 0),
            i([f(cc.Prefab)], t.prototype, "prefab", void 0),
            i([f(cc.Node)], t.prototype, "tableView", void 0),
            t = i([h], t)
        }(a.default);
        o.default = g,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Quick": "Quick",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/SpriteTool": "SpriteTool",
        "../../../Tools/WX/WxTool": "WxTool",
        "../Item/Item_rank": "Item_rank"
    }],
    ReviveLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2c8657MdZJEtJixQzpOuh57", "ReviveLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../Game_ui/CellView")
          , r = e("../../../../Scene/LayerItem")
          , c = e("../../../../Scene/LayerManager")
          , s = e("../../../Tools/WX/DB/Revive_DB")
          , l = e("../../../Tools/WX/WxTool")
          , u = e("../../UIPath")
          , d = e("../../../Tools/SoundTool")
          , p = cc._decorator
          , h = p.ccclass
          , f = p.property
          , g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.freeNode = null,
                t.shareNode = null,
                t.videoNode = null,
                t.cellNode = null,
                t
            }
            var o;
            return n(t, e),
            o = t,
            t.prototype.start = function() {}
            ,
            t.prototype.onExit = function() {
                l.WxTool.hideAllBanner()
            }
            ,
            t.prototype.onEnter = function(e) {
                var t = this;
                this.freeNode.active = !1,
                this.shareNode.active = !1,
                this.videoNode.active = !0,
                this.overData = e,
                this.cellNode.getComponent(a.default).setOriginalNum(this.overData.maxNum),
                s.Revive_DB.request(function(e) {
                    t.setupUI(e)
                }),
                l.WxTool.showBanner(l.WxTool.bannerAd_revive)
            }
            ,
            t.prototype.setupUI = function(e) {
                this.freeNode.active = !1,
                this.shareNode.active = !1,
                this.videoNode.active = !0
            }
            ,
            t.prototype.revive = function() {
                s.Revive_DB.addCount(),
                c.default.getInstance().node.emit(o.revive_call),
                c.default.getInstance().dismissItem(this)
            }
            ,
            t.prototype.onClickSkipButton = function() {
                d.SoundTool.getInstance().playBtn(),
                c.default.getInstance().dismissItem(this),
                c.default.getInstance().show(u.UIPath.layer_reward, {
                    type: u.UIPath.sc_game,
                    data: this.overData
                })
            }
            ,
            t.prototype.onClickFreeButton = function() {
                d.SoundTool.getInstance().playBtn(),
                this.revive()
            }
            ,
            t.prototype.onClickShareButton = function() {
                var e = this;
                d.SoundTool.getInstance().playBtn(),
                l.WxTool.share({
                    success: function() {
                        e.revive()
                    },
                    fail: function(e) {
                        c.default.getInstance().showMomentHint(e.msg)
                    }
                })
            }
            ,
            t.prototype.onClickVideoButton = function() {
                var e = this;
                c.default.showLoading(),
                d.SoundTool.getInstance().playBtn(),
                l.WxTool.getInstance().videoAd({
                    type: l.WxTool.rewardAd_revive,
                    success: function() {
                        e.revive(),
                        c.default.dismissLoading()
                    },
                    fail: function(e) {
                        c.default.dismissLoading()
                    }
                })
            }
            ,
            t.revive_call = "revive_call",
            i([f(cc.Node)], t.prototype, "freeNode", void 0),
            i([f(cc.Node)], t.prototype, "shareNode", void 0),
            i([f(cc.Node)], t.prototype, "videoNode", void 0),
            i([f(cc.Node)], t.prototype, "cellNode", void 0),
            t = o = i([h], t)
        }(r.default);
        o.default = g,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/WX/DB/Revive_DB": "Revive_DB",
        "../../../Tools/WX/WxTool": "WxTool",
        "../../UIPath": "UIPath",
        "../Game_ui/CellView": "CellView"
    }],
    Revive_DB: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "adfb1o4oERPtaHzGOoDSthY", "Revive_DB"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../WxTool")
          , i = e("../../../Quick")
          , a = function() {
            function e() {
                this.reviveCount = 0,
                this.date = new Date
            }
            return e.dbToRevive = function(e) {
                this.reviveData.reviveCount = e.reviveCount,
                this.reviveData.date = e.date
            }
            ,
            e.request = function(t) {
                var o = this;
                n.WxTool.isWx() ? n.WxTool.getInstance().db.getCollections(e.path).where({
                    _openid: i.Quick.openId
                }).get().then(function(n) {
                    n.data && n.data.length > 0 && (e.dbToRevive(n.data[0]),
                    o.reviveData.date.toDateString() != (new Date).toDateString() && (o.reviveData.date = new Date,
                    o.reviveData.reviveCount = 0)),
                    t(o.reviveData)
                }) : t(this.reviveData)
            }
            ,
            e.addCount = function() {
                var t = this;
                if (n.WxTool.isWx()) {
                    this.reviveData.reviveCount += 1;
                    var o = n.WxTool.getInstance().db.getCollections(e.path);
                    o.where({
                        _openid: i.Quick.openId
                    }).get().then(function(e) {
                        e.data && e.data.length > 0 ? o.doc(e.data[0]._id).update({
                            data: t.reviveData.uploadData(),
                            success: console.log,
                            fail: console.error
                        }) : o.add({
                            data: t.reviveData.uploadData(),
                            success: console.log,
                            fail: console.error
                        })
                    })
                } else
                    this.reviveData.reviveCount += 1
            }
            ,
            e.prototype.uploadData = function() {
                return {
                    reviveCount: this.reviveCount,
                    date: this.date
                }
            }
            ,
            e.reviveData = new e,
            e.path = "revives",
            e
        }();
        o.Revive_DB = a,
        cc._RF.pop()
    }
    , {
        "../../../Quick": "Quick",
        "../WxTool": "WxTool"
    }],
    RewardLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "49eefsaW4lNm6G60H1/DUy8", "RewardLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../Scene/LayerItem")
          , r = e("../../../../Scene/LayerManager")
          , c = e("../../UIPath")
          , s = e("../../../Tools/WX/WxTool")
          , l = e("../../../Quick")
          , u = e("../../../Tools/SoundTool")
          , d = e("../../../Configs/GameConfig")
          , p = cc._decorator
          , h = p.ccclass
          , f = p.property
          , g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.diamondCountLabel = null,
                t.okNode = null,
                t.skipNode = null,
                t.doubleNode = null,
                t.diamond = 0,
                t.oldType = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.onEnter = function(e) {
                if (d.GameConfig.upok || (this.skipNode.active = !1,
                this.doubleNode.active = !1,
                this.okNode.active = !0),
                e.type == c.UIPath.layer_friendHope)
                    this.skipNode.active = !1,
                    this.doubleNode.active = !1,
                    this.okNode.active = !0,
                    this.diamondCountLabel.string = e.diamond + "",
                    s.WxTool.showBanner(s.WxTool.bannerAd_doubleReward);
                else if (e.type == c.UIPath.layer_signin)
                    this.diamondCountLabel.string = e.diamond + "",
                    this.diamond = e.diamond,
                    s.WxTool.showBanner(s.WxTool.bannerAd_doubleReward);
                else {
                    var t = e.data;
                    this.diamondCountLabel.string = t.diamond + "",
                    this.overData = t,
                    this.diamond = t.diamond,
                    s.WxTool.showBanner(s.WxTool.bannerAd_gameReward)
                }
                this.oldType = e.type
            }
            ,
            t.prototype.onExit = function() {
                s.WxTool.hideAllBanner()
            }
            ,
            t.prototype.onOkButton = function() {
                u.SoundTool.getInstance().playBtn(),
                r.default.getInstance().dismissItem(this),
                this.oldType != c.UIPath.layer_signin && this.oldType != c.UIPath.layer_friendHope && r.default.getInstance().show(c.UIPath.layer_gameover, this.overData)
            }
            ,
            t.prototype.onClickSkipButton = function() {
                u.SoundTool.getInstance().playBtn(),
                r.default.getInstance().dismissItem(this),
                this.oldType != c.UIPath.layer_signin && r.default.getInstance().show(c.UIPath.layer_gameover, this.overData)
            }
            ,
            t.prototype.onClickDoubleButton = function() {
                var e = this;
                u.SoundTool.getInstance().playBtn(),
                this.oldType == c.UIPath.layer_signin ? s.WxTool.share({
                    type: s.WxTool.shareType_sign,
                    success: function() {
                        l.Quick.addDiamond(e.diamond),
                        r.default.getInstance().showMomentHint("\u7ffb\u500d\u6210\u529f"),
                        e.onClickSkipButton()
                    }
                }) : s.WxTool.share({
                    type: s.WxTool.shareType_gameOverDiamondDouble,
                    success: function() {
                        l.Quick.addDiamond(e.diamond),
                        r.default.getInstance().showMomentHint("\u7ffb\u500d\u6210\u529f"),
                        e.onClickSkipButton()
                    }
                })
            }
            ,
            i([f(cc.Label)], t.prototype, "diamondCountLabel", void 0),
            i([f(cc.Node)], t.prototype, "okNode", void 0),
            i([f(cc.Node)], t.prototype, "skipNode", void 0),
            i([f(cc.Node)], t.prototype, "doubleNode", void 0),
            t = i([h], t)
        }(a.default);
        o.default = g,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Configs/GameConfig": "GameConfig",
        "../../../Quick": "Quick",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/WX/WxTool": "WxTool",
        "../../UIPath": "UIPath"
    }],
    SceneItem: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "abf0fMPNv5Pya5uBqbp9v3l", "SceneItem");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , r = a.ccclass
          , c = (a.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.unregisterEvent = function() {}
            ,
            t.prototype.hidden = function() {}
            ,
            t.prototype.dismiss = function() {}
            ,
            t = i([r], t)
        }(cc.Component));
        o.default = c,
        cc._RF.pop()
    }
    , {}],
    SceneManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e530fntF99Kx7v2d1WGYeIH", "SceneManager");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("./SceneItem")
          , r = e("./LayerManager")
          , c = cc._decorator
          , s = c.ccclass
          , l = c.property
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.sceneParent = null,
                t.mask = null,
                t.scenePrefabs = {},
                t.sceneItems = {},
                t.currentItem = null,
                t
            }
            var o;
            return n(t, e),
            o = t,
            t.getInstance = function() {
                return this.s_instance
            }
            ,
            t.prototype.onLoad = function() {
                o.s_instance = this,
                this.show("auth")
            }
            ,
            t.prototype.loadScene = function(e, t) {
                var o = this;
                this.scenePrefabs[e] ? t() : cc.loader.loadRes("Prefabs/Scenes/sc_" + e, function(n, i) {
                    n ? console.log(n) : (o.scenePrefabs[e] = i,
                    t())
                })
            }
            ,
            t.prototype.show = function(e) {
                var t = this;
                this.loadScene(e, function() {
                    t.show_loaded(e)
                })
            }
            ,
            t.prototype.show_loaded = function(e) {
                r.default.getInstance().clearAll(),
                this.currentItem && (this.currentItem.node.setParent(null),
                this.currentItem.node.destroy(),
                this.currentItem.unregisterEvent()),
                this.currentItem = cc.instantiate(this.scenePrefabs[e]).getComponent(a.default),
                console.log(this.currentItem),
                this.currentItem.node.setParent(this.sceneParent)
            }
            ,
            t.s_instance = null,
            i([l(cc.Node)], t.prototype, "sceneParent", void 0),
            i([l(cc.Node)], t.prototype, "mask", void 0),
            t = o = i([s], t)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "./LayerManager": "LayerManager",
        "./SceneItem": "SceneItem"
    }],
    SettingNode: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "78a3cgzDm5Ev7BeaoAgu7Jx", "SettingNode");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Tools/SoundTool")
          , r = e("../../../Tools/SpriteTool")
          , c = cc._decorator
          , s = c.ccclass
          , l = c.property
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.closeStateNode = null,
                t.openStateNode = null,
                t.musicSprite = null,
                t.soundSprite = null,
                t.isOpen = !1,
                t
            }
            return n(t, e),
            t.prototype.start = function() {
                this.updateState()
            }
            ,
            t.prototype.updateState = function() {
                a.SoundTool.getInstance().isMusic() ? r.SpriteTool.loadSprite(this.musicSprite, "Sprite/Home/Setting/music_open") : r.SpriteTool.loadSprite(this.musicSprite, "Sprite/Home/Setting/music_close"),
                a.SoundTool.getInstance().isSound() ? r.SpriteTool.loadSprite(this.soundSprite, "Sprite/Home/Setting/sound_open") : r.SpriteTool.loadSprite(this.soundSprite, "Sprite/Home/Setting/sound_close")
            }
            ,
            t.prototype.onClickSettingButton = function() {
                a.SoundTool.getInstance().playBtn(),
                this.isOpen = !this.isOpen,
                this.isOpen ? (this.closeStateNode.opacity = 0,
                this.openStateNode.active = !0,
                this.updateState()) : (this.closeStateNode.opacity = 255,
                this.openStateNode.active = !1)
            }
            ,
            t.prototype.onClickSoundButton = function() {
                a.SoundTool.getInstance().soundSet(!a.SoundTool.getInstance().isSound()),
                a.SoundTool.getInstance().playBtn(),
                this.updateState()
            }
            ,
            t.prototype.onClickMusicButton = function() {
                a.SoundTool.getInstance().playBtn(),
                a.SoundTool.getInstance().musicSet(!a.SoundTool.getInstance().isMusic()),
                this.updateState()
            }
            ,
            i([l(cc.Node)], t.prototype, "closeStateNode", void 0),
            i([l(cc.Node)], t.prototype, "openStateNode", void 0),
            i([l(cc.Sprite)], t.prototype, "musicSprite", void 0),
            i([l(cc.Sprite)], t.prototype, "soundSprite", void 0),
            t = i([s], t)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/SpriteTool": "SpriteTool"
    }],
    ShopLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ba4adje4OFEMpKp6qP4wQcr", "ShopLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../Scene/LayerItem")
          , r = e("../../../Tools/SpriteTool")
          , c = e("../../../../Scene/LayerManager")
          , s = e("../Item/Item_pf")
          , l = e("../Item/Item_drop_buy")
          , u = e("../../../Configs/PfConfig")
          , d = e("../../../Tools/WX/DB/Pf_DB")
          , p = e("../../../Quick")
          , h = e("../../UIPath")
          , f = e("../../../Tools/WX/DB/Drop_DB")
          , g = e("../../../Tools/SoundTool")
          , y = e("../../../Tools/WX/WxTool")
          , _ = cc._decorator
          , m = _.ccclass
          , v = _.property
          , T = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dropItemPrefab = null,
                t.dropScrollView = null,
                t.dropListLayout = null,
                t.pfItemPrefab = null,
                t.pfScrollView = null,
                t.pfListLayout = null,
                t.pfBtnSprite = null,
                t.dropBtnSprite = null,
                t.diamondLabel = null,
                t.gx_Node = null,
                t.gx_Sprite = null,
                t.curIndex = 0,
                t
            }
            return n(t, e),
            t.prototype.start = function() {
                var e = this;
                this.switchButton(1),
                this.updateViewWithData(),
                c.default.getInstance().node.on(p.Quick.myDataUpdateEvent, function() {
                    e.updateViewWithData()
                }),
                c.default.getInstance().node.on(h.UIPath.event_shop_obtain_drop, function(t) {
                    e.gx_Node.active = !0,
                    r.SpriteTool.loadSprite(e.gx_Sprite, t)
                }),
                y.WxTool.showBanner(y.WxTool.bannerAd_dropShop)
            }
            ,
            t.prototype.updateViewWithData = function() {
                this.diamondLabel.string = p.Quick.myData.diamond + ""
            }
            ,
            t.prototype.onExit = function() {
                y.WxTool.hideAllBanner()
            }
            ,
            t.prototype.switchButton = function(e) {
                this.curIndex != e && (this.dropScrollView.node.active = 1 == e,
                this.pfScrollView.node.active = 2 == e,
                1 == e ? (r.SpriteTool.loadSprite(this.dropBtnSprite, "Sprite/Home/Shop/drop_btn_select"),
                r.SpriteTool.loadSprite(this.pfBtnSprite, "Sprite/Home/Shop/pf_btn_noselect"),
                0 == this.dropListLayout.childrenCount && this.initPropList(),
                y.WxTool.showBanner(y.WxTool.bannerAd_dropShop)) : (r.SpriteTool.loadSprite(this.dropBtnSprite, "Sprite/Home/Shop/drop_btn_noselect"),
                r.SpriteTool.loadSprite(this.pfBtnSprite, "Sprite/Home/Shop/pf_btn_select"),
                0 == this.pfListLayout.childrenCount && this.initPfList(),
                y.WxTool.showBanner(y.WxTool.bannerAd_pfShop)))
            }
            ,
            t.prototype.initPfList = function() {
                var e = this;
                d.Pf_DB.request(function(t) {
                    for (var o = function(o) {
                        var n = cc.instantiate(e.pfItemPrefab);
                        n.setParent(e.pfListLayout),
                        n.getComponent(s.default).setData(t[o], o),
                        n.on(cc.Node.EventType.TOUCH_END, function(t) {
                            e.onClickSelectPfButton(o)
                        })
                    }, n = 0; n < t.length; n++)
                        o(n);
                    e.pfScrollView.scrollToTop()
                })
            }
            ,
            t.prototype.initPropList = function() {
                var e = this;
                f.Drop_DB.request(function(t) {
                    for (var o = 0; o < t.length; o++) {
                        var n = cc.instantiate(e.dropItemPrefab);
                        n.setParent(e.dropListLayout),
                        n.getComponent(l.default).setData(t[o], o)
                    }
                    e.dropScrollView.scrollToTop()
                })
            }
            ,
            t.prototype.onClickSelectPfButton = function(e) {
                g.SoundTool.getInstance().playBtn();
                var t = u.PfConfig.getPfs();
                t[e].videoOpen && d.Pf_DB.selectPfId(t[e].getStringId(), {
                    success: function() {},
                    fail: console.log
                })
            }
            ,
            t.prototype.onClickDropButton = function() {
                g.SoundTool.getInstance().playBtn(),
                this.switchButton(1)
            }
            ,
            t.prototype.onClickPfButton = function() {
                g.SoundTool.getInstance().playBtn(),
                this.switchButton(2)
            }
            ,
            t.prototype.onClickClose = function() {
                g.SoundTool.getInstance().playBtn(),
                c.default.getInstance().dismissItem(this)
            }
            ,
            t.prototype.onClickGxClose = function() {
                g.SoundTool.getInstance().playBtn(),
                this.gx_Node.active = !1
            }
            ,
            i([v(cc.Prefab)], t.prototype, "dropItemPrefab", void 0),
            i([v(cc.ScrollView)], t.prototype, "dropScrollView", void 0),
            i([v(cc.Node)], t.prototype, "dropListLayout", void 0),
            i([v(cc.Prefab)], t.prototype, "pfItemPrefab", void 0),
            i([v(cc.ScrollView)], t.prototype, "pfScrollView", void 0),
            i([v(cc.Node)], t.prototype, "pfListLayout", void 0),
            i([v(cc.Sprite)], t.prototype, "pfBtnSprite", void 0),
            i([v(cc.Sprite)], t.prototype, "dropBtnSprite", void 0),
            i([v(cc.Label)], t.prototype, "diamondLabel", void 0),
            i([v(cc.Node)], t.prototype, "gx_Node", void 0),
            i([v(cc.Sprite)], t.prototype, "gx_Sprite", void 0),
            t = i([m], t)
        }(a.default);
        o.default = T,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Configs/PfConfig": "PfConfig",
        "../../../Quick": "Quick",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/SpriteTool": "SpriteTool",
        "../../../Tools/WX/DB/Drop_DB": "Drop_DB",
        "../../../Tools/WX/DB/Pf_DB": "Pf_DB",
        "../../../Tools/WX/WxTool": "WxTool",
        "../../UIPath": "UIPath",
        "../Item/Item_drop_buy": "Item_drop_buy",
        "../Item/Item_pf": "Item_pf"
    }],
    SigninLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "22284w9FZdJyJP+fAD0c3+2", "SigninLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../Scene/LayerItem")
          , r = e("../../../../Scene/LayerManager")
          , c = e("../../../Tools/WX/DB/Signin_DB")
          , s = e("../../../Tools/WX/WxTool")
          , l = e("../../../Quick")
          , u = e("../../UIPath")
          , d = e("../../../Configs/GameConfig")
          , p = e("../../../Tools/SoundTool")
          , h = cc._decorator
          , f = h.ccclass
          , g = h.property
          , y = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dayLabel = null,
                t.itemsNode = null,
                t.okGetNode = null,
                t.curIndex = 0,
                t.curCount = 0,
                t.signin = null,
                t
            }
            return n(t, e),
            t.prototype.onLoad = function() {
                this.itemsNode.active = !1
            }
            ,
            t.prototype.start = function() {
                s.WxTool.showBanner(s.WxTool.bannerAd_home)
            }
            ,
            t.prototype.onEnter = function(e) {
                console.log(" onEnter " + c.Signin_DB.signinData),
                this.setData(c.Signin_DB.signinData)
            }
            ,
            t.prototype.setData = function(e) {
                console.log("setData : " + e),
                this.itemsNode.active = !0,
                this.signin = e,
                this.curIndex = e.signinCount,
                this.curCount = e.signinCount,
                this.dayLabel.string = this.curCount + "";
                for (var t = 0; t < 7; t++) {
                    var o = this.itemsNode.getChildByName("sign" + (t + 1));
                    e.signinCount > t ? o.getChildByName("getend").active = !0 : o.getChildByName("getend").active = !1,
                    o.getChildByName("label").getComponent(cc.Label).string = d.GameConfig.signinDiamonds[t] + ""
                }
                e.signinCount > 6 && (e.toDay() ? this.itemsNode.getChildByName("sign7").getChildByName("getend").active = !0 : (this.itemsNode.getChildByName("sign7").getChildByName("getend").active = !1,
                this.curIndex = 6)),
                e.toDay() ? this.okGetNode.active = !0 : this.okGetNode.active = !1
            }
            ,
            t.prototype.onClickGetButton = function() {
                var e = this;
                p.SoundTool.getInstance().playBtn(),
                this.signin.toDay() || (r.default.showLoading(),
                c.Signin_DB.signin({
                    success: function() {
                        r.default.dismissLoading(),
                        l.Quick.addDiamond(d.GameConfig.signinDiamonds[e.curIndex]),
                        e.curCount++,
                        e.dayLabel.string = e.curCount + "",
                        e.okGetNode.active = !0,
                        e.itemsNode.getChildByName("sign" + (e.curIndex + 1)).getChildByName("getend").active = !0,
                        r.default.getInstance().dismissItem(e),
                        r.default.getInstance().show(u.UIPath.layer_reward, {
                            type: u.UIPath.layer_signin,
                            diamond: d.GameConfig.signinDiamonds[e.curIndex]
                        })
                    },
                    fail: function() {
                        r.default.dismissLoading(),
                        r.default.getInstance().showMomentHint("\u7b7e\u5230\u5931\u8d25")
                    }
                }))
            }
            ,
            t.prototype.onClickCloseButton = function() {
                p.SoundTool.getInstance().playBtn(),
                r.default.getInstance().dismissItem(this)
            }
            ,
            i([g(cc.Label)], t.prototype, "dayLabel", void 0),
            i([g(cc.Node)], t.prototype, "itemsNode", void 0),
            i([g(cc.Node)], t.prototype, "okGetNode", void 0),
            t = i([f], t)
        }(a.default);
        o.default = y,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Configs/GameConfig": "GameConfig",
        "../../../Quick": "Quick",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/WX/DB/Signin_DB": "Signin_DB",
        "../../../Tools/WX/WxTool": "WxTool",
        "../../UIPath": "UIPath"
    }],
    Signin_DB: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "cab51WGiYtLhJMlRqBy56aS", "Signin_DB"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../WxTool")
          , i = e("../../../Quick")
          , a = e("./Task_DB")
          , r = function() {
            function e() {
                this.oldDate = null,
                this.signinCount = 0
            }
            return e.prototype.toDay = function() {
                return null != this.oldDate && (new Date).toDateString() == this.oldDate.toDateString()
            }
            ,
            e.doToSignin = function(e) {
                var t = new Date((new Date).getTime() - 864e5)
                  , o = new Date;
                null == e.oldDate || void 0 == e.oldDate ? this.signinData.signinCount = 0 : t.toDateString() != e.oldDate.toDateString() && o.toDateString() != e.oldDate.toDateString() ? this.signinData.signinCount = 0 : (this.signinData.oldDate = e.oldDate,
                this.signinData.signinCount = e.signinCount)
            }
            ,
            e.request = function(t) {
                var o = this;
                (this.signinCount = cc.sys.localStorage.getItem("signinCount"),
                this.oldDate = cc.sys.localStorage.getItem("oldDate"),
                "" != this.signinCount && void 0 != this.signinCount && null != this.signinCount || (this.signinCount = 0,
                cc.sys.localStorage.setItem("signinCount", 0)),
                "" != this.oldDate && void 0 != this.oldDate && null != this.oldDate || (this.oldDate = 0,
                cc.sys.localStorage.setItem("oldDate", 0)),
                console.log("signinCount :" + this.signinCount),
                console.log("oldDate :" + this.oldDate),
                n.WxTool.isWx()) ? n.WxTool.getInstance().db.getCollections(e.path).where({
                    _openid: i.Quick.openId
                }).get().then(function(n) {
                    n.data && n.data.length > 0 && e.doToSignin(n.data[0]),
                    t(o.signinData)
                }) : t(this.signinData)
            }
            ,
            e.signin = function(t) {
                var o = this;
                if (this.signinData.signinCount += 1,
                this.signinData.oldDate = new Date,
                cc.sys.localStorage.setItem("signinCount", this.signinCount),
                cc.sys.localStorage.setItem("oldDate", this.oldDate),
                n.WxTool.isWx()) {
                    var r = n.WxTool.getInstance().db.getCollections(e.path);
                    r.where({
                        _openid: i.Quick.openId
                    }).get().then(function(e) {
                        e.data && e.data.length > 0 ? r.doc(e.data[0]._id).update({
                            data: o.signinData.uploadData(),
                            success: t.success,
                            fail: t.fail
                        }) : r.add({
                            data: o.signinData.uploadData(),
                            success: t.success,
                            fail: t.fail
                        }),
                        a.Task_DB.completeSignin()
                    })
                } else
                    t.success()
            }
            ,
            e.prototype.uploadData = function() {
                return cc.sys.localStorage.setItem("signinCount", this.signinCount),
                cc.sys.localStorage.setItem("oldDate", this.oldDate),
                {
                    signinCount: this.signinCount,
                    oldDate: this.oldDate
                }
            }
            ,
            e.signinData = new e,
            e.path = "signins",
            e
        }();
        o.Signin_DB = r,
        cc._RF.pop()
    }
    , {
        "../../../Quick": "Quick",
        "../WxTool": "WxTool",
        "./Task_DB": "Task_DB"
    }],
    SoundTool: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "83dbbiiQy1PM6CsVjgs0HgA", "SoundTool"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.curBgmName = null,
                this.bgID = null
            }
            return e.getInstance = function() {
                return null == this.s_instance && (this.s_instance = new e),
                this.s_instance
            }
            ,
            e.prototype.playBgMp3 = function(e) {
                void 0 === e && (e = null)
            }
            ,
            e.prototype.pauseBgMp3 = function() {
                null != this.bgID && cc.audioEngine.pause(this.bgID)
            }
            ,
            e.prototype.resumeBgMp3 = function() {
                null != this.bgID && this.isMusic() && cc.audioEngine.resume(this.bgID)
            }
            ,
            e.prototype.playMp3 = function(e) {
                if (this.isSound()) {
                    var t = cc.url.raw("resources/sound/" + e + ".mp3");
                    cc.loader.load(t, function(e, t) {
                        cc.audioEngine.play(t, !1, 1)
                    })
                }
            }
            ,
            e.prototype.playBtn = function() {
                this.playMp3("click")
            }
            ,
            e.prototype.soundSet = function(t) {
                var o = "off";
                t && (o = "on"),
                this.setItem(e.is_sound_on, o)
            }
            ,
            e.prototype.musicSet = function(t) {
                var o = "off";
                t && (o = "on"),
                this.setItem(e.is_bg_on, o),
                t ? null != this.bgID ? this.resumeBgMp3() : this.playBgMp3() : this.pauseBgMp3()
            }
            ,
            e.prototype.isMusic = function() {
                var t = this.getItem(e.is_bg_on) || "on";
                return void 0 == t || null == t || "on" === t
            }
            ,
            e.prototype.isSound = function() {
                var t = this.getItem(e.is_sound_on) || "on";
                return void 0 == t || null == t || "on" === t
            }
            ,
            e.prototype.getItem = function(e) {
                return cc.sys.platform == cc.sys.WECHAT_GAME ? wx.getStorageSync(e) : cc.sys.localStorage.getItem(e)
            }
            ,
            e.prototype.setItem = function(e, t) {
                cc.sys.platform != cc.sys.WECHAT_GAME ? cc.sys.localStorage.setItem(e, t) : wx.setStorageSync(e, t)
            }
            ,
            e.s_instance = null,
            e.is_bg_on = "is_bg_on",
            e.is_sound_on = "is_sound_on",
            e
        }();
        o.SoundTool = n,
        cc._RF.pop()
    }
    , {}],
    SpriteFrameSet: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var n = cc.Class({
            name: "SpriteFrameSet",
            properties: {
                language: "",
                spriteFrame: cc.SpriteFrame
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {}],
    SpriteTool: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "85d93hAqRBE7p+8zO3DKmhN", "SpriteTool"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = (n.ccclass,
        n.property,
        function() {
            function e() {}
            return e.loadSprite = function(e, t) {
                cc.loader.loadRes(t, cc.SpriteFrame, function(t, o) {
                    if (t)
                        return console.log(t);
                    e.spriteFrame = o
                })
            }
            ,
            e
        }());
        o.SpriteTool = i,
        cc._RF.pop()
    }
    , {}],
    StartGameRewardLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d2bf1ZKro9GRLkQpAZWnlSj", "StartGameRewardLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../Scene/LayerManager")
          , r = e("../../UIPath")
          , c = e("../../../../Scene/LayerItem")
          , s = e("../../../Tools/SoundTool")
          , l = e("../../../Tools/WX/WxTool")
          , u = cc._decorator
          , d = u.ccclass
          , p = u.property
          , h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.introLabel = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {
                l.WxTool.showBanner(l.WxTool.bannerAd_startGameGift)
            }
            ,
            t.prototype.onExit = function() {
                l.WxTool.hideAllBanner()
            }
            ,
            t.prototype.onClickUseButton = function() {
                var e = this;
                s.SoundTool.getInstance().playBtn(),
                a.default.showLoading(),
                l.WxTool.getInstance().videoAd({
                    type: l.WxTool.rewardAd_gameGift,
                    success: function() {
                        a.default.dismissLoading(),
                        a.default.getInstance().node.emit(r.UIPath.event_use_add_drop, !0),
                        a.default.getInstance().dismissItem(e)
                    },
                    fail: function() {
                        a.default.dismissLoading()
                    }
                })
            }
            ,
            t.prototype.onClickCloseButton = function() {
                s.SoundTool.getInstance().playBtn(),
                a.default.getInstance().node.emit(r.UIPath.event_use_add_drop, !1),
                a.default.getInstance().dismissItem(this)
            }
            ,
            i([p(cc.Label)], t.prototype, "introLabel", void 0),
            t = i([d], t)
        }(c.default);
        o.default = h,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/WX/WxTool": "WxTool",
        "../../UIPath": "UIPath"
    }],
    SwitchButton: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "51529mLj4JOJL7vB46U411y", "SwitchButton"),
        cc.Class({
            extends: cc.Component,
            properties: {
                sprite_on: cc.SpriteFrame,
                sprite_off: cc.SpriteFrame,
                is_on: !0,
                statusChange: [cc.Component.EventHandler]
            },
            onLoad: function() {
                var e = this;
                null == cc.sys.localStorage.getItem(this.node.name) || "true" === cc.sys.localStorage.getItem(this.node.name) ? this.is_on = !0 : this.is_on = !1,
                this.node.on(cc.Node.EventType.TOUCH_END, function(t) {
                    e.is_on = !e.is_on,
                    e._updateStatus()
                }),
                this._updateStatus()
            },
            setIsOn: function(e) {
                this.is_on = e,
                this._updateStatus()
            },
            _updateStatus: function() {
                this.is_on ? this.node.getComponent(cc.Sprite).spriteFrame = this.sprite_on : this.node.getComponent(cc.Sprite).spriteFrame = this.sprite_off;
                for (var e = 0; e < this.statusChange.length; e++)
                    this.statusChange[e].emit([this.is_on])
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TaskConfig: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "341d1TrTCtFPYOBcLBc7PTu", "TaskConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t, o, n, i, a, r) {
                this.type = 2,
                this.id = 2,
                this.name = "\u5728\u4e00\u5c40\u6e38\u620f\u4e2d\u5206\u6570\u6253\u52301000\u5206",
                this.target = 1e3,
                this.value = 1,
                this.cur = 0,
                this.reward = 0,
                this.setup = 1,
                this.type = e,
                this.id = t,
                this.name = o,
                this.target = n,
                this.value = i,
                this.cur = a,
                this.reward = r
            }
            return e.taskSetupNoComplete = 1,
            e.taskSetupNoGet = 2,
            e.taskSetupOK = 3,
            e
        }();
        o.TaskItem = n;
        var i = function() {
            function e() {}
            return e.getTasks = function() {
                return 0 == this.tasks.length && this.createDefaultTasks(),
                this.tasks
            }
            ,
            e.reset = function() {
                this.tasks = new Array,
                this.createDefaultTasks()
            }
            ,
            e.createDefaultTasks = function() {
                this.tasks.push(new n(this.signinType,1,"\u7b7e\u5230\u4efb\u52a1",0,1,0,0)),
                this.tasks.push(new n(this.scoreType,2,"\u5728\u4e00\u5c40\u6e38\u620f\u4e2d\u5206\u6570\u6253\u523010000\u5206",1e4,1,0,50)),
                this.tasks.push(new n(this.allWelfareType,3,"\u6210\u529f\u9886\u53d6\u6240\u6709\u798f\u5229\u5956\u52b1",0,5,0,100)),
                this.tasks.push(new n(this.gameCountType,4,"\u8fdb\u884c10\u5c40\u6e38\u620f",10,10,0,200)),
                this.tasks.push(new n(this.scoreType,5,"\u5728\u4e00\u5c40\u6e38\u620f\u4e2d\u5206\u6570\u6253\u523030000\u5206",3e4,1,0,100)),
                this.tasks.push(new n(this.mutualRewardType,6,"\u6210\u529f\u83b7\u5f97\u4e92\u52a9\u5956\u52b1\u4e00\u6b21",0,1,0,100))
            }
            ,
            e.getTypeTasks = function(e) {
                0 == this.tasks.length && this.createDefaultTasks();
                for (var t = [], o = 0; o < this.tasks.length; o++)
                    this.tasks[o].type == e && t.push(this.tasks[o]);
                return t
            }
            ,
            e.tasks = new Array,
            e.signinType = 1,
            e.scoreType = 2,
            e.allWelfareType = 3,
            e.gameCountType = 4,
            e.mutualRewardType = 5,
            e
        }();
        o.TaskConfig = i,
        cc._RF.pop()
    }
    , {}],
    TaskLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "23a77lXioRMzrZZ4TJAQeYZ", "TaskLayer");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../Scene/LayerItem")
          , r = e("../Item/Item_task")
          , c = e("../../../../Scene/LayerManager")
          , s = e("../../../Tools/WX/DB/Task_DB")
          , l = e("../../../Tools/SoundTool")
          , u = e("../../../Tools/WX/WxTool")
          , d = cc._decorator
          , p = d.ccclass
          , h = d.property
          , f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.taskItemPrefab = null,
                t.scrollView = null,
                t.listLayout = null,
                t
            }
            return n(t, e),
            t.prototype.start = function() {
                var e = this;
                u.WxTool.showBanner(u.WxTool.bannerAd_task),
                s.Task_DB.request(function(t) {
                    e.updateView(t)
                })
            }
            ,
            t.prototype.onExit = function() {
                u.WxTool.hideAllBanner()
            }
            ,
            t.prototype.updateView = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var o = cc.instantiate(this.taskItemPrefab);
                    o.setParent(this.listLayout),
                    o.getComponent(r.default).setData(e[t], t)
                }
                this.scrollView.scrollToTop()
            }
            ,
            t.prototype.onClickClose = function() {
                l.SoundTool.getInstance().playBtn(),
                c.default.getInstance().dismissItem(this)
            }
            ,
            i([h(cc.Prefab)], t.prototype, "taskItemPrefab", void 0),
            i([h(cc.ScrollView)], t.prototype, "scrollView", void 0),
            i([h(cc.Node)], t.prototype, "listLayout", void 0),
            t = i([p], t)
        }(a.default);
        o.default = f,
        cc._RF.pop()
    }
    , {
        "../../../../Scene/LayerItem": "LayerItem",
        "../../../../Scene/LayerManager": "LayerManager",
        "../../../Tools/SoundTool": "SoundTool",
        "../../../Tools/WX/DB/Task_DB": "Task_DB",
        "../../../Tools/WX/WxTool": "WxTool",
        "../Item/Item_task": "Item_task"
    }],
    Task_DB: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "166fd8v1lNFK7CUXSoIrj8z", "Task_DB"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../WxTool")
          , i = e("../../../Quick")
          , a = e("../../../Configs/TaskConfig")
          , r = e("../../QuickTool")
          , c = function() {
            function e() {}
            return e.del = function() {
                var t = n.WxTool.getInstance().db.getCollections(e.path);
                t.where({
                    _openid: i.Quick.openId
                }).get().then(function(e) {
                    e.data && e.data.length > 0 && t.doc(e.data[0]._id).remove()
                }),
                this.date = new Date,
                a.TaskConfig.reset()
            }
            ,
            e.values = function(e) {
                if (e.date.toDateString() == (new Date).toDateString()) {
                    this.date = e.date;
                    var t = a.TaskConfig.getTypeTasks(a.TaskConfig.signinType)[0]
                      , o = "task" + t.id;
                    r.QuickTool.isNullToo(e[o]) || (t.setup = e[o].setup);
                    for (var n = a.TaskConfig.getTypeTasks(a.TaskConfig.scoreType), i = 0; i < n.length; i++) {
                        var c = n[i]
                          , s = "task" + c.id;
                        r.QuickTool.isNullToo(e[s]) || (c.setup = e[s].setup)
                    }
                    var l = a.TaskConfig.getTypeTasks(a.TaskConfig.gameCountType);
                    for (i = 0; i < l.length; i++) {
                        var u = l[i]
                          , d = "task" + u.id;
                        r.QuickTool.isNullToo(e[d]) || (u.setup = e[d].setup,
                        u.cur = e[d].cur)
                    }
                    var p = a.TaskConfig.getTypeTasks(a.TaskConfig.allWelfareType)[0]
                      , h = "task" + p.id;
                    r.QuickTool.isNullToo(e[h]) || (p.setup = e[h].setup,
                    p.cur = e[h].cur);
                    var f = a.TaskConfig.getTypeTasks(a.TaskConfig.mutualRewardType)[0];
                    h = "task" + f.id,
                    r.QuickTool.isNullToo(e[h]) || (f.setup = e[h].setup,
                    f.cur = e[h].cur)
                } else
                    this.del()
            }
            ,
            e.request = function(t) {
                var o = this;
                n.WxTool.isWx() ? n.WxTool.getInstance().db.getCollections(e.path).where({
                    _openid: i.Quick.openId
                }).get().then(function(e) {
                    e.data && e.data.length > 0 && o.values(e.data[0]),
                    t(a.TaskConfig.getTasks())
                }) : t([])
            }
            ,
            e.update = function(t, o) {
                null == o && (o = {
                    success: console.log,
                    fail: console.log
                });
                var a = n.WxTool.getInstance().db.getCollections(e.path);
                a.where({
                    _openid: i.Quick.openId
                }).get().then(function(e) {
                    e.data && e.data.length > 0 ? (t.date = new Date,
                    t.date.toDateString() != (new Date).toDateString() ? (a.doc(e.data[0]._id).remove(),
                    a.add({
                        data: t,
                        success: o.success,
                        fail: o.fail
                    })) : a.doc(e.data[0]._id).update({
                        data: t,
                        success: o.success,
                        fail: o.fail
                    })) : (t.date = new Date,
                    a.add({
                        data: t,
                        success: o.success,
                        fail: o.fail
                    }))
                })
            }
            ,
            e.localPast = function() {
                null != this.date && this.date.toDateString() != (new Date).toDateString() && (this.del(),
                a.TaskConfig.reset())
            }
            ,
            e.completeSignin = function() {
                this.localPast();
                var e = {};
                e["task" + a.TaskConfig.getTypeTasks(a.TaskConfig.signinType)[0].id] = {
                    setup: a.TaskItem.taskSetupOK
                },
                this.update(e, null)
            }
            ,
            e.updateMaxScore = function(e) {
                this.localPast();
                for (var t = a.TaskConfig.getTypeTasks(a.TaskConfig.scoreType), o = [], n = 0; n < t.length; n++)
                    t[n].setup == a.TaskItem.taskSetupNoComplete && t[n].target <= e && (t[n].setup = a.TaskItem.taskSetupNoGet,
                    o.push(t[n]));
                for (n = 0; n < o.length; n++) {
                    var i = {};
                    i["task" + o[n].id] = {
                        setup: a.TaskItem.taskSetupNoGet
                    },
                    this.update(i, null)
                }
            }
            ,
            e.AddGameCount = function() {
                this.localPast();
                for (var e = a.TaskConfig.getTypeTasks(a.TaskConfig.gameCountType), t = [], o = 0; o < e.length; o++)
                    e[o].setup == a.TaskItem.taskSetupNoComplete && (e[o].cur += 1,
                    e[o].cur == e[o].value && (e[o].setup = a.TaskItem.taskSetupNoGet),
                    t.push(e[o]));
                for (o = 0; o < t.length; o++) {
                    var n = t[o]
                      , i = {};
                    i["task" + n.id] = {
                        setup: n.setup,
                        cur: n.cur
                    },
                    this.update(i, null)
                }
            }
            ,
            e.updateGiftCount = function(e) {
                this.localPast();
                var t = a.TaskConfig.getTypeTasks(a.TaskConfig.allWelfareType)[0];
                t.setup == a.TaskItem.taskSetupNoComplete && (t.cur = e,
                t.cur >= t.value && (t.setup = a.TaskItem.taskSetupNoGet));
                var o = {};
                o["task" + t.id] = {
                    setup: t.setup,
                    cur: t.cur
                },
                this.update(o, null)
            }
            ,
            e.updateHopeCount = function(e) {
                this.localPast();
                var t = a.TaskConfig.getTypeTasks(a.TaskConfig.mutualRewardType)[0];
                t.setup == a.TaskItem.taskSetupNoComplete && (t.cur = e,
                t.cur >= t.value && (t.setup = a.TaskItem.taskSetupNoGet));
                var o = {};
                o["task" + t.id] = {
                    setup: t.setup,
                    cur: t.cur
                },
                this.update(o, null)
            }
            ,
            e.receiveReward = function(t) {
                var o = "task" + t.item.id
                  , r = n.WxTool.getInstance().db.getCollections(e.path);
                r.where({
                    _openid: i.Quick.openId
                }).get().then(function(e) {
                    if (e.data && e.data.length > 0 && e.data[0][o].setup == a.TaskItem.taskSetupNoGet) {
                        e.data[0][o].setup = a.TaskItem.taskSetupOK,
                        t.item.setup = a.TaskItem.taskSetupOK;
                        var n = {};
                        n[o] = e.data[0][o],
                        r.doc(e.data[0]._id).update({
                            data: n,
                            success: t.success,
                            fail: t.fail
                        }),
                        i.Quick.addDiamond(t.item.reward)
                    }
                })
            }
            ,
            e.path = "tasks",
            e.date = null,
            e
        }();
        o.Task_DB = c,
        cc._RF.pop()
    }
    , {
        "../../../Configs/TaskConfig": "TaskConfig",
        "../../../Quick": "Quick",
        "../../QuickTool": "QuickTool",
        "../WxTool": "WxTool"
    }],
    Test: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4d562jfHixBWYYCUOyNV1vC", "Test");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Scene/LayerManager")
          , r = e("../../../Scene/LayerItem")
          , c = cc._decorator
          , s = c.ccclass
          , l = c.property
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null,
                t.text = "hello",
                t
            }
            return n(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.onClickBack = function() {
                a.default.getInstance().dismiss("test")
            }
            ,
            t.prototype.onClickTestAdd = function() {
                this.label.string = "123"
            }
            ,
            i([l(cc.Label)], t.prototype, "label", void 0),
            i([l], t.prototype, "text", void 0),
            t = i([s], t)
        }(r.default);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../../Scene/LayerItem": "LayerItem",
        "../../../Scene/LayerManager": "LayerManager"
    }],
    Tools: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "47cebWLcvxCMbear+f+fDqz", "Tools");
        var n = {
            loadSprites: function(e, t) {
                cc.loader.loadRes(t, cc.SpriteFrame, function(t, o) {
                    e.spriteFrame = o
                })
            },
            addZero: function(e, t) {
                var o = "" + e
                  , n = t - o.length;
                if (n <= 0)
                    return o;
                for (var i = 0; i < n; i++)
                    o = "0" + o;
                return o
            },
            randomNum: function(e, t) {
                switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * e + 1, 10);
                case 2:
                    return parseInt(Math.random() * (t - e + 1) + e, 10);
                default:
                    return 0
                }
            },
            boolForKey: function(e, t) {
                var o = cc.sys.localStorage.getItem(e);
                return null == o || void 0 == o ? null != t && void 0 != t && t : "true" === o
            },
            setBool: function(e, t) {
                t ? cc.sys.localStorage.setItem(e, "true") : cc.sys.localStorage.setItem(e, "false")
            },
            intForKey: function(e, t) {
                var o = cc.sys.localStorage.getItem(e);
                return null == o || void 0 == o ? null != t && void 0 != t ? t : 0 : o
            },
            setInt: function(e, t) {
                cc.sys.localStorage.setItem(e, t)
            }
        };
        window.Tools = n,
        cc._RF.pop()
    }
    , {}],
    UIPath: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3e4f7+zddJE4aEYr/TtS1Qb", "UIPath"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.sc_game = "game",
            e.sc_home = "home",
            e.loading = "ui_Loading",
            e.layer_revive = "layer_revive",
            e.layer_reward = "layer_reward",
            e.layer_startGameReward = "layer_startGameReward",
            e.layer_pause = "layer_pause",
            e.layer_gameover = "layer_gameOver",
            e.layer_rank = "layer_ranklist",
            e.layer_groupRank = "layer_groupRanklist",
            e.layer_task = "Home/layer_task",
            e.layer_shop = "Home/layer_shop",
            e.layer_signin = "Home/layer_signin",
            e.layer_friendHope = "Home/layer_friendHope",
            e.layer_dropTips = "Home/layer_dropTips",
            e.event_layer_pushpop = "event_layer_pushpop",
            e.event_theme_change = "event_theme_change",
            e.event_game_restart = "event_game_restart",
            e.event_get_task_reward = "event_get_task_reward",
            e.event_gift_shareBegin = "event_gift_shareBegin",
            e.event_game_give_diamond = "event_game_give_diamond",
            e.event_use_drop = "event_use_drop",
            e.event_use_add_drop = "event_use_add_drop",
            e.event_shop_obtain_drop = "event_shop_obtain_drop",
            e.event_game_merge_onceOver = "event_game_merge_onceOver",
            e.event_game_pause_end = "event_game_pause_end",
            e
        }();
        o.UIPath = n,
        cc._RF.pop()
    }
    , {}],
    UIQuick: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8e26eNiOqNEAr7vuGnW7XU8", "UIQuick");
        var n = cc.Class({});
        n.showPage = function(e) {
            window.sceneManager.show(e)
        }
        ,
        n.loadSprites = function(e, t) {
            Tools.loadSprites(e, t)
        }
        ,
        cc._RF.pop()
    }
    , {}],
    UI_Loading: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6e02fCUcTNBqaV0RIdo8RHV", "UI_Loading");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../Scene/LayerItem")
          , r = e("../QuickTool")
          , c = cc._decorator
          , s = c.ccclass
          , l = c.property
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.loadImage = null,
                t.isShowing = !1,
                t
            }
            return n(t, e),
            t.prototype.start = function() {
                this.loadImage.runAction(cc.repeatForever(cc.rotateBy(1, 360)))
            }
            ,
            t.prototype.onEnter = function(e) {
                var t = this;
                this.isShowing = !0,
                this.node.opacity = 0,
                console.log("111111"),
                r.QuickTool.delayExec(this.node, .5, function() {
                    console.log("333333333"),
                    t.isShowing && (t.node.opacity = 255)
                })
            }
            ,
            t.prototype.onExit = function() {
                console.log("222222222"),
                this.isShowing = !1,
                this.node.stopAllActions()
            }
            ,
            i([l(cc.Node)], t.prototype, "loadImage", void 0),
            t = i([s], t)
        }(a.default);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../../Scene/LayerItem": "LayerItem",
        "../QuickTool": "QuickTool"
    }],
    Util: [function(e, t, o) {
        (function(o) {
            "use strict";
            cc._RF.push(t, "41ab7/aPS1HcYgn6z9QH3xK", "Util");
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , i = e("uuid")
              , a = {
                runActions: function(e) {
                    cc.assert(e instanceof cc.Node);
                    for (var t = [], o = 1; o < arguments.length; ++o) {
                        var i = arguments[o]
                          , a = void 0 === i ? "undefined" : n(i)
                          , r = null;
                        r = "number" == a ? cc.delayTime(i) : "function" == a ? cc.callFunc(i) : i,
                        t.push(r)
                    }
                    var c = cc.sequence(t);
                    return e.runAction(c),
                    c
                },
                delay: function(e, t, o) {
                    e.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function() {
                        o()
                    })))
                },
                convertSpace: function(e, t, o) {
                    o = o || cc.p(0, 0);
                    var n = e.convertToWorldSpaceAR(o);
                    return t.parent.convertToNodeSpaceAR(n)
                },
                random: function(e, t) {
                    var o = Math.random();
                    return null == e || void 0 == e ? o : null == t || void 0 == t ? (t = e,
                    this.assert(1 <= t),
                    Math.floor(o * t) + 1) : Math.floor(o * (t - e + 1) + e)
                },
                randomFromArray: function(e) {
                    return e[ut.random(0, e.length - 1)]
                },
                assert: function(e, t) {
                    cc.sys.isNative ? cc.assert(e, t) : console.assert(e, t)
                },
                tip: function(e, t) {
                    UIMgr.showTip(e, t)
                },
                alert: function(e, t, o, n, i) {
                    return UIMgr.show({
                        name: "MessageBox",
                        multi: !0
                    }, function(a) {
                        a.setMultiline(i),
                        a.setString(e),
                        t ? a.buttons(t) : a.buttons("ok|close"),
                        a.call_back = o,
                        n && o && (a.call_back = o.bind(n))
                    })
                },
                showOne: function(e, t) {
                    UIMgr.show({
                        name: "MsgBox"
                    }, function(o) {
                        o.setCenterShow(e, "", "", function() {
                            UIMgr.close("MsgBox"),
                            t && t()
                        }),
                        o.typeSet(1)
                    })
                },
                formatName: function(e) {
                    for (var t = 0, o = 0, n = 0; n < e.length && (e.charCodeAt(n) > 255 ? o += 2 : o++,
                    t = n + 1,
                    !(o >= 12)); n++)
                        ;
                    if (t < 6)
                        return e;
                    var i = e.charCodeAt(t - 1) > 255 ? t - 1 : t - 2
                      , a = e.substring(0, i);
                    return a += "..."
                },
                formatGold: function(e) {
                    if (e < 1e4)
                        return e;
                    var t = e / 1e4;
                    return t > 1e4 ? 100 * (t / 1e4).toFixed(2) / 100 + "\u4ebf" : t > 1e3 ? Math.floor(t) + "\u4e07" : t > 100 ? 100 * t.toFixed(1) / 100 + "\u4e07" : 100 * t.toFixed(2) / 100 + "\u4e07"
                },
                playMp3: function(e) {
                    if (e && (null == cc.sys.localStorage.getItem("is_sound_on") || "true" === cc.sys.localStorage.getItem("is_sound_on"))) {
                        cc.log("play", e);
                        var t = cc.url.raw("resources/sound/" + e + ".mp3")
                          , o = cc.audioEngine.play(t, !1, 1);
                        cc.sys.localStorage.getItem("sound_volume") && cc.audioEngine.setVolume(o, cc.sys.localStorage.getItem("sound_volume"))
                    }
                },
                playBgMp3: function() {
                    if (null == cc.sys.localStorage.getItem("is_bg_on") || "true" === cc.sys.localStorage.getItem("is_bg_on")) {
                        if ("bg1" == ut._curBGM)
                            return;
                        ut.__bgID && cc.audioEngine.stop(ut.__bgID),
                        ut._curBGM = "bg1";
                        var e = cc.url.raw("resources/sound/bg1.mp3");
                        cc.log(e),
                        ut.__bgID = cc.audioEngine.play(e, !0, .5)
                    }
                },
                pauseBgMp3: function() {
                    null != cc.sys.localStorage.getItem("is_bg_on") && "true" !== cc.sys.localStorage.getItem("is_bg_on") || cc.audioEngine.pause(ut.__bgID)
                },
                resumeBgMp3: function() {
                    null != cc.sys.localStorage.getItem("is_bg_on") && "true" !== cc.sys.localStorage.getItem("is_bg_on") || cc.audioEngine.resume(ut.__bgID)
                },
                playBtnClickSound: function() {
                    ut.playMp3("click")
                },
                callNativeAndroidZ: function(e) {
                    return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", e, "()Z")
                },
                callNative: function(e, t) {
                    return cc.sys.os == cc.sys.OS_ANDROID ? null != t && void 0 != t ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", e, "(Ljava/lang/String;)V", t) : jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", e, "()V") : cc.sys.os == cc.sys.OS_IOS ? null != t && void 0 != t ? (cc.log("callNative(" + e + ":, " + t),
                    jsb.reflection.callStaticMethod("ShareSdkStuff", e + ":", t)) : (cc.log("callNative(" + e + ", " + t),
                    jsb.reflection.callStaticMethod("ShareSdkStuff", e, t)) : void 0
                },
                disable_when_appstore_checking: function(e) {
                    if (o.appstore)
                        for (var t = 0; t < e.length; t++)
                            e[t].active = !1
                },
                joinRommById: function(e) {
                    client.send("jdc.join", parseInt(e), function(e) {
                        switch (e) {
                        case 0:
                            break;
                        case 1:
                            ut.tip("\u672c\u623f\u95f4\u6e38\u620f\u8fc7\u7a0b\u4e2d\uff0c\u4e0d\u5141\u8bb8\u52a0\u5165");
                            break;
                        case 2:
                            ut.tip("\u623f\u95f4\u4eba\u6570\u5df2\u6ee1");
                            break;
                        case 3:
                            ut.tip("\u91d1\u5e01\u4e0d\u8db3\uff0c\u5feb\u53bb\u5145\u503c\u5427")
                        }
                    })
                },
                stopSoundSomeWhile: function() {
                    cc.audioEngine.setEffectsVolume(0),
                    setTimeout(function() {
                        null != cc.sys.localStorage.getItem("is_sound_on") && "true" !== cc.sys.localStorage.getItem("is_sound_on") || cc.audioEngine.setEffectsVolume(1)
                    }, 4e3)
                },
                pauseAllSound: function(e) {
                    -1 != e && (room.soundAction && room.node.runAction(room.soundAction),
                    room.soundAction = cc.sequence(cc.delayTime(e), cc.callFunc(function() {
                        ut.startAllSound(),
                        room.soundAction = null
                    })),
                    room.node.runAction(room.soundAction)),
                    cc.audioEngine.pauseAll(),
                    cc.sys.localStorage.setItem("is_sound_on", !1)
                },
                startAllSound: function() {
                    cc.audioEngine.resume(ut.__bgID),
                    cc.sys.localStorage.setItem("is_sound_on", !0)
                },
                getWritablePath: function() {
                    return cc.sys.isBrowser ? "/" : jsb.fileUtils.getWritablePath()
                },
                loadImageToNode: function(e, t) {
                    cc.sys.isNative && t && cc.loader.load({
                        url: t,
                        type: "jpg"
                    }, function(t, o) {
                        t ? cc.log("loadImageToNode fail to load ", url) : (e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o),
                        e.width = e.width,
                        e.height = e.height)
                    })
                },
                getUUID: function() {
                    var e = void 0;
                    return null != cc.sys.localStorage.getItem("uuid") && "" != cc.sys.localStorage.getItem("uuid") ? e = cc.sys.localStorage.getItem("uuid") : (e = i.create().toString().substring(0, 12),
                    cc.sys.localStorage.setItem("uuid", e)),
                    e = i.create().toString().substring(0, 12)
                },
                shareRoomInfo: function() {
                    var e = room.model.roomInfo;
                    cc.log("roomInfo", JSON.stringify(e));
                    var t = "\u725b\u75af\u72c2 \u623f\u53f7:\u3010" + e.ID + "\u3011"
                      , o = void 0;
                    switch (e.Params.TurnBankerStyle) {
                    case 0:
                        o = "\u8f6e\u5e84\u6a21\u5f0f";
                        break;
                    case 1:
                        o = "\u62a2\u5e84\u6a21\u5f0f";
                        break;
                    case 2:
                        o = "\u6700\u5927\u5750\u5e84\u6a21\u5f0f"
                    }
                    var n = e.Params.BottomAnte + "\uff0c\u603b\u5c40\u6570:" + e.Params.GameTotal + "\u5c40\uff0c" + o;
                    n = t + "\n\u5e95\u6ce8:" + n,
                    nativeApi.share(!0, t, n, null, "http://bfsh.fhj777.com/share", function() {
                        cc.log("\u5206\u4eab\u56de\u8c03")
                    })
                },
                getStartPlayTip: function() {
                    for (var e = 0, t = 1; t <= room.plrCtrl.players.length; ++t) {
                        room.getPlayerByLocalSeat(t % room.plrCtrl.players.length).sitdown.active && e++
                    }
                    var o = "\u5176\u4ed6\u73a9\u5bb6\u6b63\u5728\u8fdb\u5165\uff08" + e + "/6\uff09";
                    return cc.log(o),
                    o
                },
                updateStartPlayTip: function() {
                    for (var e = 0, t = 1; t <= room.plrCtrl.players.length; ++t) {
                        room.getPlayerByLocalSeat(t % room.plrCtrl.players.length).sitdown.active && e++
                    }
                    1 == e && (room.plrCtrl.playStartTip.node.active = !0,
                    room.plrCtrl.playStartTip.string = "\u5176\u4ed6\u73a9\u5bb6\u6b63\u5728\u8fdb\u5165\uff08" + e + "/6\uff09",
                    room.deckCtrl.setShareButtonStatus(!0))
                },
                shareNode: function(e, t) {},
                youkeLogin: function(e) {
                    cc.log("\u8c03\u7528\u6e38\u5ba2\u767b\u9646"),
                    window.loginType = "youke",
                    null != e ? client.loginWithDev(e) : client.loginWithDev(ut.getUUID())
                },
                wxLogin: function() {
                    cc.log("\u8c03\u7528\u5fae\u4fe1\u767b\u9646"),
                    window.loginType = "wx",
                    null == ut.getWxOpenId() || "" == ut.getWxOpenId() ? (cc.log("\u7b2c\u4e00\u6b21\u767b\u9646\u6216\u8005\u4e4b\u524d\u7684\u5fae\u4fe1\u767b\u9646\u5df2\u7ecf\u5931\u6548,\u8c03\u7528\u5fae\u4fe1sdk\u767b\u9646"),
                    native.callClz("WeChat", "login", function(e) {
                        cc.log("sdk\u767b\u9646\u6210\u529f", e),
                        client.loginWithCode(e)
                    })) : (cc.log("\u4e4b\u524d\u5df2\u7ecf\u767b\u9646\u8fc7\u5fae\u4fe1sdk\u5e76\u4e14\u672a\u5931\u6548,\u5feb\u901f\u767b\u9646"),
                    client.loginWithOpenid(ut.getWxOpenId()))
                },
                saveWxOpenId: function(e) {
                    cc.sys.localStorage.setItem("wxOpenId", e)
                },
                getWxOpenId: function() {
                    return cc.sys.localStorage.getItem("wxOpenId")
                },
                clearWxOpenId: function() {
                    cc.sys.localStorage.setItem("wxOpenId", "")
                },
                reConnectBox: function() {
                    client.reConnecting || (client.reConnecting = !0,
                    client.needReConnect = !0,
                    UIMgr.show({
                        name: "MsgBox"
                    }, function(e) {
                        e.setCenterShow("\u6e38\u620f\u5df2\u65ad\u5f00\u8fde\u63a5 \u8bf7\u91cd\u65b0\u8fde\u63a5", "", " ", function(e) {
                            e ? (client.reConnecting = !1,
                            client.reLogin()) : (lient.reConnecting = !1,
                            client.loginSuccess = !1,
                            sceneManager.show("Login"))
                        }),
                        e.typeSet(2)
                    }))
                }
            };
            window.ut = a,
            cc._RF.pop()
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        uuid: "uuid"
    }],
    WxAds: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "43f8fFsds9KtpH9MUZM6A0i", "WxAds"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.playJLAds = function(e) {
                e.success()
            }
            ,
            e.playCPAds = function(e) {
                e.success()
            }
            ,
            e
        }();
        o.WxAds = n,
        cc._RF.pop()
    }
    , {}],
    WxDBTool: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "15f675w0n1BLqdTyCowtuz3", "WxDBTool"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./DB/Revive_DB")
          , i = e("../../Quick")
          , a = e("../QuickTool")
          , r = function() {
            function e() {
                this.db = null,
                this.collections = {},
                this.db = wx.cloud.database()
            }
            return e.prototype.getCollections = function(e) {
                return null == this.collections[e] && (this.collections[e] = this.db.collection(e)),
                this.collections[e]
            }
            ,
            e.prototype.addOneData = function(e, t) {
                this.getCollections(e).add({
                    data: t.data,
                    success: function(e) {
                        t.success && t.success(e)
                    },
                    fail: function(e) {
                        t.fail && t.fail(e)
                    }
                })
            }
            ,
            e.prototype.login = function(e, t) {
                var o = this;
                this.getCollections("users").where({
                    _openid: e.openid
                }).get().then(function(n) {
                    if (console.log(n.data),
                    n.data && n.data.length > 0) {
                        var i = n.data[0];
                        a.QuickTool.isNullToo(i.thisTime) || i.thisTime.toDateString() != (new Date).toDateString() ? t(!0) : t(!1),
                        o.getCollections("users").doc(i._id).update({
                            data: {
                                thisTime: new Date
                            },
                            success: e.success,
                            fail: e.fail
                        })
                    } else
                        e.info.maxScore = 0,
                        e.info.diamond = 0,
                        e.info.maxNum = 2,
                        o.getCollections("users").add({
                            data: e.info,
                            success: function(e) {
                                t(!0),
                                console.log(e)
                            },
                            fail: console.error
                        })
                })
            }
            ,
            e.prototype.updateScore = function(e) {
                var t = this.getCollections("users");
                t.where({
                    _openid: e.openid
                }).get().then(function(o) {
                    if (console.log(o.data),
                    o.data && o.data.length > 0) {
                        var n = o.data[0];
                        null == n.maxScore && (n.maxScore = 0),
                        null == n.maxNum && (n.maxNum = 0);
                        var a = {}
                          , r = !1;
                        n.maxScore < e.score && (a.maxScore = e.score,
                        r = !0),
                        n.maxNum < e.maxNum && (a.maxNum = e.maxNum,
                        r = !0),
                        r && (i.Quick.isShouldUpdateMyRank = !0,
                        t.doc(n._id).update({
                            data: a,
                            success: e.success,
                            fail: e.fail
                        }))
                    }
                })
            }
            ,
            e.prototype.db_getMyData = function(e, t) {
                this.getCollections("users").where({
                    _openid: e
                }).get().then(function(e) {
                    console.log(e.data[0]),
                    t(e.data[0])
                })
            }
            ,
            e.prototype.db_getMyReviveData = function(e, t) {
                this.getCollections(n.Revive_DB.path).where({
                    _openid: e
                }).get().then(function(e) {
                    e.data && e.data.length > 0 ? t(e.data[0]) : t(null)
                })
            }
            ,
            e
        }();
        o.WxDBTool = r,
        cc._RF.pop()
    }
    , {
        "../../Quick": "Quick",
        "../QuickTool": "QuickTool",
        "./DB/Revive_DB": "Revive_DB"
    }],
    WxTool: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8f044D/hZ5KjLH9qcBET+EI", "WxTool"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./WxDBTool")
          , i = e("../../Quick")
          , a = e("../../Configs/GameConfig")
          , r = e("../../../Scene/LayerManager")
          , c = function() {
            function e() {
                this.db = null,
                this.gameClubButton = null,
                this.rewardedVideoAd = null
            }
            return e.getInstance = function() {
                return null == this.s_instance && (this.s_instance = new e,
                e.isWx() && this.s_instance.init()),
                this.s_instance
            }
            ,
            e.isWx = function() {
                return cc.sys.platform == cc.sys.WECHAT_GAME
            }
            ,
            e.prototype.init = function() {
                wx.cloud.init(),
                this.db = new n.WxDBTool,
                wx.showShareMenu({
                    withShareTicket: !0
                }),
                wx.hsdk.onShareAppMessage(function() {
                    var e = a.GameConfig.getShare("three");
                    return {
                        shareType: "default",
                        title: e.content,
                        imageUrl: e.url
                    }
                }),
                wx.getSystemInfo({
                    success: function(t) {
                        e.systemInfo = t
                    }
                })
            }
            ,
            e.showClueButton = function(t) {
                if (e.isWx())
                    if (null != e.getInstance().gameClubButton)
                        e.getInstance().gameClubButton.show();
                    else {
                        var o = cc.Canvas.instance.designResolution.width / 1334 * 86
                          , n = cc.Canvas.instance.designResolution.width / 1334 * 86;
                        e.getInstance().gameClubButton = wx.createGameClubButton({
                            icon: "light",
                            style: {
                                left: t.x - o / 2,
                                top: t.y - n / 2,
                                width: o,
                                height: n
                            }
                        })
                    }
            }
            ,
            e.dismissClueButton = function() {
                e.isWx() && null != e.getInstance().gameClubButton && e.getInstance().gameClubButton.hide()
            }
            ,
            e.prototype.cloudCallFunction = function(e) {}
            ,
            e.prototype.onShow = function(e) {
                wx.onShow(function(t) {
                    e(t)
                })
            }
            ,
            e.prototype.getLaunchOptionsSync = function() {
                return wx.getLaunchOptionsSync()
            }
            ,
            e.prototype.login = function(e) {
                var t = {
                    config: {
                        type: "image",
                        image: "https://caveman-test-resource.hortorgames.com/resource/btn_enter.png",
                        style: {
                            width: 200,
                            height: 70,
                            top: 0,
                            left: 0
                        }
                    },
                    onShow: function() {
                        console.log("\u6388\u6743\u6309\u94ae\u5c55\u793a")
                    },
                    onTap: function(e, t) {
                        e ? console.log("\u6388\u6743\u6210\u529f\uff01") : t && console.log("\u62d2\u7edd\u6388\u6743\uff01")
                    }
                };
                wx.hsdk.decodeWeakLogin(function(t, o) {
                    t ? (console.log("\u767b\u5f55\u6210\u529f\uff01", t),
                    e.success(t)) : o && (console.log("\u767b\u5f55\u5931\u8d25\uff01", o),
                    e.fail())
                }, t)
            }
            ,
            e.prototype.getUserInfo = function(e) {
                var t = this;
                wx.getUserInfo({
                    withCredentials: !0,
                    lang: "zh_CN",
                    success: function(t) {
                        e.success(t.userInfo),
                        console.log("wx.getUserInfo success")
                    },
                    fail: function(o) {
                        t.getUserInfo_withButton(e),
                        console.log("wx.getUserInfo fail")
                    }
                })
            }
            ,
            e.prototype.getUserInfo_withButton = function(e) {
                var t = wx.getSystemInfoSync()
                  , o = t.windowWidth
                  , n = t.windowHeight
                  , i = wx.createUserInfoButton({
                    type: "text",
                    text: "\u5fae\u4fe1\u767b\u9646",
                    style: {
                        left: o / 2 - 100,
                        top: n / 2 - 20,
                        width: 200,
                        height: 40,
                        lineHeight: 40,
                        backgroundColor: "#00ff00",
                        color: "#ffffff",
                        textAlign: "center",
                        fontSize: 16,
                        borderRadius: 4
                    }
                });
                i.onTap(function(t) {
                    "getUserInfo:ok" == t.errMsg ? (i.hide(),
                    e.success(t.userInfo)) : e.fail()
                })
            }
            ,
            e.prototype.sendMessageOpenData = function(t) {
                e.isWx() && wx.getOpenDataContext().postMessage(t)
            }
            ,
            e.prototype.addDiamond = function(t, o) {
                e.isWx() && e.getInstance().cloudCallFunction({
                    name: "addDiamond",
                    data: {
                        diamond: t
                    },
                    complete: function(e) {
                        o()
                    }
                })
            }
            ,
            e.vibrateShort = function() {
                e.isWx() && wx.vibrateShort()
            }
            ,
            e.prototype.videoAd = function(t) {
                if (e.isWx()) {
                    var o = e.videoIds[t.type].id;
                    wx.hsdk.checkVideoAd({
                        adUnitId: o,
                        success: function() {
                            wx.hsdk.adPointShow(o),
                            wx.hsdk.showVideoAd({
                                adUnitId: o,
                                onShow: function() {},
                                onClose: function(e) {
                                    !e || e.isEnded ? t.success() : null != t.fail && void 0 != t.fail && t.fail()
                                },
                                onError: function() {
                                    null != t.fail && void 0 != t.fail && t.fail()
                                }
                            })
                        },
                        error: function() {
                            r.default.getInstance().showMomentHint("\u4eca\u65e5\u5e7f\u544a\u6b21\u6570\u5df2\u7528\u5b8c\uff0c\u660e\u5929\u6062\u590d"),
                            null != t.fail && void 0 != t.fail && t.fail()
                        }
                    })
                } else
                    t.success()
            }
            ,
            e.hideAllBanner = function(t) {
                if (void 0 === t && (t = null),
                e.isWx())
                    for (var o = 0; o < e.allBannerTypes.length; o++)
                        e.allBannerTypes[o] === t || null != e.bannerIds[e.allBannerTypes[o]].ad && (e.bannerIds[e.allBannerTypes[o]].ad.hide(),
                        e.bannerIds[e.allBannerTypes[o]].ad.destroy(),
                        e.bannerIds[e.allBannerTypes[o]].ad = null)
            }
            ,
            e.showBanner = function(t) {
                e.isWx() && (this.hideAllBanner(t),
                null != e.bannerIds[t].ad ? e.bannerIds[t].ad.show() : (e.createBanner(t),
                e.bannerIds[t].ad.show()))
            }
            ,
            e.createBanner = function(t) {
                var o = {
                    left: 0,
                    top: e.systemInfo.screenHeight - e.systemInfo.screenHeight * (105 / 1334),
                    width: e.systemInfo.screenWidth
                }
                  , n = wx.hsdk.createBannerAd({
                    adUnitId: e.bannerIds[t].id,
                    style: o
                });
                e.bannerIds[t].ad = n;
                var i = wx.getSystemInfoSync()
                  , a = i.screenWidth
                  , r = i.screenHeight;
                n.style.width = .5 * a,
                n.onResize(function(e) {
                    e.statusBarHeight > 20 ? n.style.top = r - n.style.realHeight + 20 : n.style.top = r - n.style.realHeight + .1,
                    n.style.left = a / 2 - n.style.realWidth / 2 + .1
                })
            }
            ,
            e.getHopeStr = function() {
                var t = "type=" + e.query_hope;
                return t = t + "&id=" + i.Quick.openId
            }
            ,
            e.getShareTypeString = function(t) {
                var o = "default";
                return t == e.shareType_friendHope ? o = "friendHope" : t == e.shareType_sign ? o = "signin" : t == e.shareType_groupRank ? o = "grouprank" : t == e.shareType_gameOverDiamondDouble ? o = "gameDiamondDouble" : t == e.shareType_gameOver && (o = "gameover"),
                o
            }
            ,
            e.openFksdkOneAd = function(t, o, n) {
                if (void 0 === t && (t = null),
                void 0 === o && (o = "home"),
                void 0 === n && (n = this.fksdkAd1),
                this.fksdkAds[o])
                    return t && t(null),
                    this.fksdkAds[o];
                var i = wx.hortor.cross.createAd({
                    adsId: e.fksdkAd1,
                    success: function(e) {
                        console.log("\u6210\u529f\u521b\u5efa\u5e7f\u544a\u4f4d\uff0c\u5e7f\u544a\u6570\u636e\uff1a", e),
                        t && t(!0)
                    },
                    fail: function(e) {
                        console.log("\u521b\u5efa\u5e7f\u544a\u4f4d\u5931\u8d25\uff01", e),
                        t && t(null)
                    }
                });
                return this.fksdkAds[o] = {
                    ad: i
                },
                this.fksdkAds[o]
            }
            ,
            e.share = function(t) {
                if (e.isWx()) {
                    var o = null;
                    t.type == e.shareType_friendHope ? (o = a.GameConfig.getShare(e.getShareTypeString(t.type)),
                    t.query = this.getHopeStr()) : t.type == e.shareType_sign ? o = a.GameConfig.getShare(e.getShareTypeString(t.type)) : t.type == e.shareType_groupRank ? (t.query = "type=" + e.query_groupRank,
                    o = a.GameConfig.getShare(e.getShareTypeString(t.type))) : t.type == e.shareType_gameOverDiamondDouble && (o = a.GameConfig.getShare(e.getShareTypeString(t.type)));
                    var n = null
                      , i = null;
                    t.type == e.shareType_gameOver ? (n = t.title,
                    i = t.url) : (n = o.content,
                    i = o.url),
                    wx.hsdk.sharePointShow(e.getShareTypeString(t.type)),
                    wx.hsdk.shareMessage({
                        shareType: e.getShareTypeString(t.type),
                        query: void 0 == t.query ? "" : t.query,
                        imageUrl: i,
                        title: n
                    }),
                    r.default.getInstance().node.runAction(cc.sequence([cc.delayTime(2), cc.callFunc(function() {
                        null != t.success && void 0 != t.success && t.success()
                    })]))
                }
            }
            ,
            e.s_instance = null,
            e.systemInfo = null,
            e.fksdkAds = {},
            e.fksdkAd1 = "Va3Zj6gZLd",
            e.shareType_three = 2,
            e.shareType_give = 3,
            e.shareType_sign = 1,
            e.shareType_friendHope = 4,
            e.shareType_groupRank = 5,
            e.shareType_gameOver = 6,
            e.shareType_gameOverDiamondDouble = 7,
            e.rewardAd_gift = "100",
            e.rewardAd_revive = "101",
            e.rewardAd_drop = "102",
            e.rewardAd_pause = "103",
            e.rewardAd_gameGift = "104",
            e.rewardAd_showMyRank = "105",
            e.bannerAd_home = "111",
            e.bannerAd_rank = "112",
            e.bannerAd_groupRank = "113",
            e.bannerAd_pause = "114",
            e.bannerAd_revive = "115",
            e.bannerAd_gameReward = "116",
            e.bannerAd_gameover = "117",
            e.bannerAd_levelup = "118",
            e.bannerAd_dropShop = "119",
            e.bannerAd_pfShop = "120",
            e.bannerAd_doubleReward = "121",
            e.bannerAd_wordRank = "122",
            e.bannerAd_dropTips = "123",
            e.bannerAd_firendHolp = "124",
            e.bannerAd_startGameGift = "125",
            e.bannerAd_task = "126",
            e.query_hope = "query_hope",
            e.query_groupRank = "query_groupRank",
            e.videoIds = {
                100: {
                    id: "adunit-a56a5c0e506bd918",
                    ad: null
                },
                101: {
                    id: "adunit-e2c1413a53f6f36b",
                    ad: null
                },
                102: {
                    id: "adunit-0e02e920d9c16bc0",
                    ad: null
                },
                103: {
                    id: "adunit-23292eceeb7734e7",
                    ad: null
                },
                104: {
                    id: "adunit-258c517a334afc1c",
                    ad: null
                },
                105: {
                    id: "adunit-a59840748598ac22",
                    ad: null
                }
            },
            e.bannerIds = {
                111: {
                    id: "adunit-c3de2679fc0b83b2",
                    ad: null
                },
                112: {
                    id: "adunit-646dd7ec8e0b7038",
                    ad: null
                },
                113: {
                    id: "adunit-0cb0cc7a2b75e7a2",
                    ad: null
                },
                114: {
                    id: "adunit-5e235b031031a2f3",
                    ad: null
                },
                115: {
                    id: "adunit-589cfe446309e679",
                    ad: null
                },
                116: {
                    id: "adunit-34630e2b85effd82",
                    ad: null
                },
                117: {
                    id: "adunit-7ec286afdd0290cc",
                    ad: null
                },
                118: {
                    id: "adunit-4ab9c1731095ab13",
                    ad: null
                },
                119: {
                    id: "adunit-2d03c16c7744514c",
                    ad: null
                },
                120: {
                    id: "adunit-49375e34003fc097",
                    ad: null
                },
                121: {
                    id: "adunit-3e214e73bc96e7e4",
                    ad: null
                },
                122: {
                    id: "adunit-3d8919fb2d4dab25",
                    ad: null
                },
                123: {
                    id: "adunit-7d055480c2123921",
                    ad: null
                },
                124: {
                    id: "adunit-58c9ce756805f3c1",
                    ad: null
                },
                125: {
                    id: "adunit-255540c60a316cfe",
                    ad: null
                },
                126: {
                    id: "adunit-0b248434470956dc",
                    ad: null
                }
            },
            e.allBannerTypes = ["111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126"],
            e
        }();
        o.WxTool = c,
        cc._RF.pop()
    }
    , {
        "../../../Scene/LayerManager": "LayerManager",
        "../../Configs/GameConfig": "GameConfig",
        "../../Quick": "Quick",
        "./WxDBTool": "WxDBTool"
    }],
    WxUserInfo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3611cLGvk1Gs60POPWOP21R", "WxUserInfo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            return function(e, t, o) {
                this.map = null,
                this.avatarUrl = null,
                this.city = null,
                this.country = null,
                this.province = null,
                this.language = null,
                this.nickName = null,
                this.gender = 1,
                this.avatarUrl = e,
                this.nickName = t,
                this.gender = o
            }
        }();
        o.WxUserInfo = n,
        cc._RF.pop()
    }
    , {}],
    "my.d": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9c10eBRnzxBCLe2OcDkMdRd", "my.d");
        var n = {};
        t.exports.myJsLib = n,
        n.UIQuick = e("./UIQuick.js"),
        cc._RF.pop()
    }
    , {
        "./UIQuick.js": "UIQuick"
    }],
    "polyglot.min": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        (function(e, i) {
            "function" == typeof define && define.amd ? define([], function() {
                return i(e)
            }) : "object" == (void 0 === o ? "undefined" : n(o)) ? t.exports = i(e) : e.Polyglot = i(e)
        }
        )(void 0, function(e) {
            function t(e) {
                e = e || {},
                this.phrases = {},
                this.extend(e.phrases || {}),
                this.currentLocale = e.locale || "en",
                this.allowMissing = !!e.allowMissing,
                this.warn = e.warn || l
            }
            function o(e) {
                var t, o, n, i = {};
                for (t in e)
                    if (e.hasOwnProperty(t))
                        for (n in o = e[t])
                            i[o[n]] = t;
                return i
            }
            function i(e) {
                return e.replace(/^\s+|\s+$/g, "")
            }
            function a(e, t, o) {
                var n, a;
                return null != o && e ? n = i((a = e.split(d))[c(t, o)] || a[0]) : n = e,
                n
            }
            function r(e) {
                var t = o(h);
                return t[e] || t.en
            }
            function c(e, t) {
                return p[r(e)](t)
            }
            function s(e, t) {
                for (var o in t)
                    "_" !== o && t.hasOwnProperty(o) && (e = e.replace(new RegExp("%\\{" + o + "\\}","g"), t[o]));
                return e
            }
            function l(t) {
                e.console && e.console.warn && e.console.warn("WARNING: " + t)
            }
            function u(e) {
                var t = {};
                for (var o in e)
                    t[o] = e[o];
                return t
            }
            t.VERSION = "0.4.3",
            t.prototype.locale = function(e) {
                return e && (this.currentLocale = e),
                this.currentLocale
            }
            ,
            t.prototype.extend = function(e, t) {
                var o;
                for (var i in e)
                    e.hasOwnProperty(i) && (o = e[i],
                    t && (i = t + "." + i),
                    "object" == (void 0 === o ? "undefined" : n(o)) ? this.extend(o, i) : this.phrases[i] = o)
            }
            ,
            t.prototype.clear = function() {
                this.phrases = {}
            }
            ,
            t.prototype.replace = function(e) {
                this.clear(),
                this.extend(e)
            }
            ,
            t.prototype.t = function(e, t) {
                var o, n;
                return "number" == typeof (t = null == t ? {} : t) && (t = {
                    smart_count: t
                }),
                "string" == typeof this.phrases[e] ? o = this.phrases[e] : "string" == typeof t._ ? o = t._ : this.allowMissing ? o = e : (this.warn('Missing translation for key: "' + e + '"'),
                n = e),
                "string" == typeof o && (t = u(t),
                n = s(n = a(o, this.currentLocale, t.smart_count), t)),
                n
            }
            ,
            t.prototype.has = function(e) {
                return e in this.phrases
            }
            ;
            var d = "||||"
              , p = {
                chinese: function(e) {
                    return 0
                },
                german: function(e) {
                    return 1 !== e ? 1 : 0
                },
                french: function(e) {
                    return e > 1 ? 1 : 0
                },
                russian: function(e) {
                    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                czech: function(e) {
                    return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
                },
                polish: function(e) {
                    return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                icelandic: function(e) {
                    return e % 10 != 1 || e % 100 == 11 ? 1 : 0
                }
            }
              , h = {
                chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                french: ["fr", "tl", "pt-br"],
                russian: ["hr", "ru"],
                czech: ["cs"],
                polish: ["pl"],
                icelandic: ["is"]
            };
            return t
        }),
        cc._RF.pop()
    }
    , {}],
    tableView: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9aba29YKexFXolpweZzJPKj", "tableView");
        var n = cc.Enum({
            Horizontal: 0,
            Vertical: 1
        })
          , i = cc.Enum({
            None: 0,
            Up: 1,
            Down: 2,
            Left: 3,
            Rigth: 4
        })
          , a = cc.Enum({
            LEFT_TO_RIGHT__TOP_TO_BOTTOM: 0,
            TOP_TO_BOTTOM__LEFT_TO_RIGHT: 1
        })
          , r = cc.Enum({
            Scroll: 0,
            Flip: 1
        });
        function c(e, t) {
            return cc.v2(e.x - t.x, e.y - t.y)
        }
        function s(e, t) {
            if (e.length <= 1)
                return e;
            for (var o = Math.floor(e.length / 2), n = e[o], i = [], a = [], r = 0; r < e.length; r++)
                r !== o && (t ? t(e[r], n) ? i.push(e[r]) : a.push(e[r]) : e[r] <= n ? i.push(e[r]) : a.push(e[r]));
            return s(i, t).concat([n], s(a, t))
        }
        function l(e, t) {
            for (var o = 0, n = e.children, i = n.length; o < i; o++)
                if (n[o]._cellIndex === t)
                    return n[o];
            return null
        }
        var u = cc.Class({
            extends: cc.ScrollView,
            editor: !1,
            properties: {
                _data: null,
                _minCellIndex: 0,
                _maxCellIndex: 0,
                _paramCount: 0,
                _count: 0,
                _cellCount: 0,
                _showCellCount: 0,
                _groupCellCount: null,
                _scrollDirection: i.None,
                _cellPool: null,
                _viewnode: null,
                _page: 0,
                _pageTotal: 0,
                cell: {
                    default: null,
                    type: cc.Prefab,
                    notify: function(e) {}
                },
                ScrollModel: {
                    default: 0,
                    type: n,
                    notify: function(e) {
                        this.ScrollModel === n.Horizontal ? (this.horizontal = !0,
                        this.vertical = !1,
                        this.verticalScrollBar = null) : (this.vertical = !0,
                        this.horizontal = !1,
                        this.horizontalScrollBar = null)
                    },
                    tooltip: "\u6a2a\u5411\u7eb5\u5411\u6ed1\u52a8"
                },
                ViewType: {
                    default: 0,
                    type: r,
                    notify: function(e) {
                        this.ViewType === r.Flip ? this.inertia = !1 : this.inertia = !0
                    },
                    tooltip: "\u4e3aScroll\u65f6,\u4e0d\u505a\u89e3\u91ca\n\u4e3aFlipw\u65f6\uff0c\u5728Scroll\u7684\u57fa\u7840\u4e0a\u589e\u52a0\u7ffb\u9875\u7684\u884c\u4e3a"
                },
                isFill: {
                    default: !1,
                    tooltip: "\u5f53\u8282\u70b9\u4e0d\u80fd\u94fa\u6ee1\u4e00\u9875\u65f6\uff0c\u9009\u62e9isFill\u4e3atrue\u4f1a\u586b\u5145\u8282\u70b9\u94fa\u6ee1\u6574\u4e2aview"
                },
                Direction: {
                    default: 0,
                    type: a,
                    tooltip: "\u89c4\u5b9acell\u7684\u6392\u5217\u65b9\u5411"
                },
                pageChangeEvents: {
                    default: [],
                    type: cc.Component.EventHandler,
                    tooltip: "\u4ec5\u5f53ViewType\u4e3apageView\u65f6\u6709\u6548\uff0c\u521d\u59cb\u5316\u6216\u7ffb\u9875\u65f6\u89e6\u53d1\u56de\u8c03\uff0c\u5411\u56de\u8c03\u4f20\u5165\u4e24\u4e2a\u53c2\u6570\uff0c\u53c2\u6570\u4e00\u4e3a\u5f53\u524d\u5904\u4e8e\u54ea\u4e00\u9875\uff0c\u53c2\u6570\u4e8c\u4e3a\u4e00\u5171\u591a\u5c11\u9875"
                }
            },
            statics: {
                _cellPoolCache: {}
            },
            onLoad: function() {
                var e = this;
                u._tableView.push(this);
                var t = this.node.destroy;
                this.node.destroy = function() {
                    e.clear(),
                    t.call(e.node)
                }
                ;
                var o = this.node._onPreDestroy;
                this.node._onPreDestroy = function() {
                    e.clear(),
                    o.call(e.node)
                }
            },
            onDestroy: function() {
                for (var e in u._tableView)
                    if (u._tableView[e] === this)
                        return void u._tableView.splice(e)
            },
            _initCell: function(e, t) {
                if (this.ScrollModel === n.Horizontal && this.Direction === a.TOP_TO_BOTTOM__LEFT_TO_RIGHT || this.ScrollModel === n.Vertical && this.Direction === a.LEFT_TO_RIGHT__TOP_TO_BOTTOM)
                    for (var o = e._cellIndex * e.childrenCount, i = 0; i < e.childrenCount; ++i) {
                        (s = e.children[i].getComponent("viewCell")) && (s._cellInit_(this),
                        s.init(o + i, this._data, t, [e._cellIndex, i]))
                    }
                else if (this.ViewType === r.Flip) {
                    var c = (o = Math.floor(e._cellIndex / this._showCellCount)) * this._showCellCount * e.childrenCount;
                    for (i = 0; i < e.childrenCount; ++i) {
                        (s = e.children[i].getComponent("viewCell")) && (s._cellInit_(this),
                        s.init(this._showCellCount * i + e._cellIndex % this._showCellCount + c, this._data, t, [i + o * e.childrenCount, i]))
                    }
                } else
                    for (i = 0; i < e.childrenCount; ++i) {
                        var s;
                        (s = e.children[i].getComponent("viewCell")) && (s._cellInit_(this),
                        s.init(i * this._count + e._cellIndex, this._data, t, [i, i]))
                    }
            },
            _setCellPosition: function(e, t) {
                this.ScrollModel === n.Horizontal ? (e.x = 0 === t ? -this.content.width * this.content.anchorX + e.width * e.anchorX : l(this.content, t - 1).x + e.width,
                e.y = (e.anchorY - this.content.anchorY) * e.height) : (e.y = 0 === t ? this.content.height * (1 - this.content.anchorY) - e.height * (1 - e.anchorY) : l(this.content, t - 1).y - e.height,
                e.x = (e.anchorX - this.content.anchorX) * e.width)
            },
            _addCell: function(e) {
                var t = this._getCell();
                this._setCellAttr(t, e),
                this._setCellPosition(t, e),
                t.parent = this.content,
                this._initCell(t)
            },
            _setCellAttr: function(e, t) {
                e.setSiblingIndex(t >= e._cellIndex ? this._cellCount : 0),
                e._cellIndex = t
            },
            _addCellsToView: function() {
                for (var e = 0; e <= this._maxCellIndex; ++e)
                    this._addCell(e)
            },
            _getCell: function() {
                if (0 === this._cellPool.size()) {
                    var e = cc.instantiate(this.cell)
                      , t = new cc.Node;
                    t.anchorX = .5,
                    t.anchorY = .5;
                    var o = 0;
                    if (this.ScrollModel === n.Horizontal) {
                        t.width = e.width;
                        var i = Math.floor(this.content.height / e.height);
                        t.height = this.content.height;
                        for (var a = 0; a < i; ++a)
                            e || (e = cc.instantiate(this.cell)),
                            e.x = (e.anchorX - .5) * e.width,
                            e.y = t.height / 2 - e.height * (1 - e.anchorY) - o,
                            o += e.height,
                            e.parent = t,
                            e = null
                    } else {
                        t.height = e.height;
                        i = Math.floor(this.content.width / e.width);
                        t.width = this.content.width;
                        for (a = 0; a < i; ++a)
                            e || (e = cc.instantiate(this.cell)),
                            e.y = (e.anchorY - .5) * e.height,
                            e.x = -t.width / 2 + e.width * e.anchorX + o,
                            o += e.width,
                            e.parent = t,
                            e = null
                    }
                    this._cellPool.put(t)
                }
                return e = this._cellPool.get()
            },
            _getCellSize: function() {
                var e = this._getCell()
                  , t = e.getContentSize();
                return this._cellPool.put(e),
                t
            },
            _getGroupCellCount: function() {
                var e = this._getCell()
                  , t = e.childrenCount;
                return this._cellPool.put(e),
                t
            },
            clear: function() {
                for (var e = this.content.childrenCount - 1; e >= 0; --e)
                    this._cellPool.put(this.content.children[e]);
                this._cellCount = 0,
                this._showCellCount = 0
            },
            reload: function(e) {
                void 0 !== e && (this._data = e);
                for (var t = this.content.childrenCount - 1; t >= 0; --t)
                    this._initCell(this.content.children[t], !0)
            },
            _getCellPoolCacheName: function() {
                return this.ScrollModel === n.Horizontal ? this.cell.name + "h" + this.content.height : this.cell.name + "w" + this.content.width
            },
            _initTableView: function() {
                this._cellPool && this.clear();
                var e = this._getCellPoolCacheName();
                u._cellPoolCache[e] || (u._cellPoolCache[e] = new cc.NodePool("viewCell")),
                this._cellPool = u._cellPoolCache[e],
                this._cellSize = this._getCellSize(),
                this._groupCellCount = this._getGroupCellCount(),
                this._count = Math.ceil(this._paramCount / this._groupCellCount),
                this.ScrollModel === n.Horizontal ? (this._viewnode.width = this.node.width,
                this._viewnode.x = (this._viewnode.anchorX - this.node.anchorX) * this._viewnode.width,
                this._cellCount = Math.ceil(this._viewnode.width / this._cellSize.width) + 1,
                this.ViewType === r.Flip ? this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this._viewnode.width / this._cellSize.width) : this._cellCount = this._count,
                this._showCellCount = this._cellCount,
                this._pageTotal = 1) : (this._pageTotal = Math.ceil(this._count / (this._cellCount - 1)),
                this._count = this._pageTotal * (this._cellCount - 1),
                this._showCellCount = this._cellCount - 1) : this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this._viewnode.width / this._cellSize.width) : this._cellCount = this._count,
                this._showCellCount = this._cellCount) : this._showCellCount = this._cellCount - 1,
                this.content.width = this._count * this._cellSize.width,
                this.stopAutoScroll(),
                this.scrollToLeft()) : (this._viewnode.height = this.node.height,
                this._viewnode.y = (this._viewnode.anchorY - this.node.anchorY) * this._viewnode.height,
                this._cellCount = Math.ceil(this._viewnode.height / this._cellSize.height) + 1,
                this.ViewType === r.Flip ? this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this._viewnode.height / this._cellSize.height) : this._cellCount = this._count,
                this._showCellCount = this._cellCount,
                this._pageTotal = 1) : (this._pageTotal = Math.ceil(this._count / (this._cellCount - 1)),
                this._count = this._pageTotal * (this._cellCount - 1),
                this._showCellCount = this._cellCount - 1) : this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this._viewnode.height / this._cellSize.height) : this._cellCount = this._count,
                this._showCellCount = this._cellCount) : this._showCellCount = this._cellCount - 1,
                this.content.height = this._count * this._cellSize.height,
                this.stopAutoScroll(),
                this.scrollToTop()),
                this._changePageNum(1 - this._page),
                this._lastOffset = this.getScrollOffset(),
                this._minCellIndex = 0,
                this._maxCellIndex = this._cellCount - 1,
                this._addCellsToView()
            },
            initTableView: function(e, t) {
                this._paramCount = e,
                this._data = t,
                this.ScrollModel === n.Horizontal ? (this.horizontal = !0,
                this.vertical = !1) : (this.vertical = !0,
                this.horizontal = !1),
                this._viewnode = this.content.parent,
                this.verticalScrollBar && this.verticalScrollBar.node.on("size-changed", function() {
                    this._updateScrollBar(this._getHowMuchOutOfBoundary())
                }, this),
                this.horizontalScrollBar && this.horizontalScrollBar.node.on("size-changed", function() {
                    this._updateScrollBar(this._getHowMuchOutOfBoundary())
                }, this),
                this.node.getComponent(cc.Widget) && this.node.getComponent(cc.Widget).updateAlignment(),
                this._initTableView()
            },
            _onTouchBegan: function(e, t) {
                this._super(e, t),
                this._touchstart(e)
            },
            _onTouchMoved: function(e, t) {
                if (this.enabledInHierarchy && !this._hasNestedViewGroup(e, t)) {
                    var o = e.touch;
                    if (this.content && this._handleMoveLogic(o),
                    this.cancelInnerEvents) {
                        if (c(o.getLocation(), o.getStartLocation()).mag() > 7 && !this._touchMoved && e.target !== this.node) {
                            var n = new cc.Event.EventTouch(e.getTouches(),e.bubbles);
                            n.type = cc.Node.EventType.TOUCH_CANCEL,
                            n.touch = e.touch,
                            n.simulate = !0,
                            e.target.emit(cc.Node.EventType.TOUCH_CANCEL, n),
                            this._touchMoved = !0
                        }
                        this._stopPropagationIfTargetIsMe(e),
                        this._touchmove(e)
                    }
                }
            },
            _onTouchEnded: function(e, t) {
                this._super(e, t),
                this._touchend(e)
            },
            _onTouchCancelled: function(e, t) {
                this._super(e, t),
                this._touchend(e)
            },
            stopAutoScroll: function() {
                this._scrollDirection = i.None,
                this._super()
            },
            scrollToBottom: function(e, t) {
                this._scrollDirection = i.Up,
                this._super(e, t)
            },
            scrollToTop: function(e, t) {
                this._scrollDirection = i.Down,
                this._super(e, t)
            },
            scrollToLeft: function(e, t) {
                this._scrollDirection = i.Rigth,
                this._super(e, t)
            },
            scrollToRight: function(e, t) {
                this._scrollDirection = i.Left,
                this._super(e, t)
            },
            scrollToOffset: function(e, t, o) {
                var a = c(e, this.getScrollOffset());
                this.ScrollModel === n.Horizontal ? a.x > 0 ? this._scrollDirection = i.Left : a.x < 0 && (this._scrollDirection = i.Rigth) : a.y > 0 ? this._scrollDirection = i.Up : a.y < 0 && (this._scrollDirection = i.Down),
                this._super(e, t, o)
            },
            addScrollEvent: function(e, t, o) {
                var n = new cc.Component.EventHandler;
                n.target = e,
                n.component = t,
                n.handler = o,
                this.scrollEvents.push(n)
            },
            removeScrollEvent: function(e) {
                for (var t in this.scrollEvents) {
                    if (this.scrollEvents[t].target === e)
                        return void this.scrollEvents.splice(t, 1)
                }
            },
            clearScrollEvent: function() {
                this.scrollEvents = []
            },
            addPageEvent: function(e, t, o) {
                var n = new cc.Component.EventHandler;
                n.target = e,
                n.component = t,
                n.handler = o,
                this.pageChangeEvents.push(n)
            },
            removePageEvent: function(e) {
                for (var t = 0; t < this.pageChangeEvents.length; t++) {
                    if (this.pageChangeEvents[t].target === e)
                        return void this.pageChangeEvents.splice(t, 1)
                }
            },
            clearPageEvent: function() {
                this.pageChangeEvents = []
            },
            scrollToNextPage: function() {
                this.scrollToPage(this._page + 1)
            },
            scrollToLastPage: function() {
                this.scrollToPage(this._page - 1)
            },
            scrollToPage: function(e) {
                if (this.ViewType === r.Flip && e !== this._page && !(e < 1 || e > this._pageTotal)) {
                    var t = .3 * Math.abs(e - this._page);
                    this._changePageNum(e - this._page);
                    var o = this._viewnode.width
                      , n = this._viewnode.height;
                    o = (this._page - 1) * o,
                    n = (this._page - 1) * n,
                    this.scrollToOffset({
                        x: o,
                        y: n
                    }, t)
                }
            },
            getCells: function(e) {
                var t = []
                  , o = s(this.content.children, function(e, t) {
                    return e._cellIndex < t._cellIndex
                });
                for (var n in o) {
                    var i = o[n];
                    for (var a in i.children)
                        t.push(i.children[a])
                }
                e(t)
            },
            getData: function() {
                return this._data
            },
            getGroupsRange: function(e) {
                for (var t = [], o = this._minCellIndex; o <= this._maxCellIndex; o++)
                    t.push(o);
                e(t)
            },
            _changePageNum: function(e) {
                this._page += e,
                this._page <= 0 ? this._page = 1 : this._page > this._pageTotal && (this._page = this._pageTotal);
                for (var t = 0; t < this.pageChangeEvents.length; t++) {
                    this.pageChangeEvents[t].emit([this._page, this._pageTotal])
                }
            },
            _touchstart: function(e) {
                this.ScrollModel === n.Horizontal ? this.horizontal = !1 : this.vertical = !1
            },
            _touchmove: function(e) {
                if (this.horizontal === this.vertical) {
                    var t = e.getStartLocation()
                      , o = e.getLocation();
                    if (this.ScrollModel === n.Horizontal) {
                        if (Math.abs(o.x - t.x) <= 7)
                            return
                    } else if (Math.abs(o.y - t.y) <= 7)
                        return;
                    this.ScrollModel === n.Horizontal ? this.horizontal = !0 : this.vertical = !0
                }
            },
            _touchend: function(e) {
                this.ScrollModel === n.Horizontal ? this.horizontal = !0 : this.vertical = !0,
                this.ViewType === r.Flip && this._pageTotal > 1 && this._pageMove(e)
            },
            _pageMove: function(e) {
                var t = this._viewnode.width
                  , o = this._viewnode.height;
                if (this.ViewType === r.Flip) {
                    var a = this.getScrollOffset()
                      , c = this.getMaxScrollOffset();
                    if (this.ScrollModel === n.Horizontal) {
                        if (a.x >= 0 || a.x <= -c.x)
                            return;
                        if (o = 0,
                        Math.abs(e.getLocation().x - e.getStartLocation().x) > this._viewnode.width / 4)
                            if (this._scrollDirection === i.Left) {
                                if (!(this._page < this._pageTotal))
                                    return;
                                this._changePageNum(1)
                            } else if (this._scrollDirection === i.Rigth) {
                                if (!(this._page > 1))
                                    return;
                                this._changePageNum(-1)
                            }
                    } else {
                        if (a.y >= c.y || a.y <= 0)
                            return;
                        if (t = 0,
                        Math.abs(e.getLocation().y - e.getStartLocation().y) > this._viewnode.height / 4)
                            if (this._scrollDirection === i.Up) {
                                if (!(this._page < this._pageTotal))
                                    return;
                                this._changePageNum(1)
                            } else if (this._scrollDirection === i.Down) {
                                if (!(this._page > 1))
                                    return;
                                this._changePageNum(-1)
                            }
                    }
                    t = (this._page - 1) * t,
                    o = (this._page - 1) * o,
                    this.scrollToOffset({
                        x: t,
                        y: o
                    }, .3)
                }
            },
            _getBoundingBoxToWorld: function(e) {
                var t = e.convertToWorldSpace(cc.v2(0, 0));
                return cc.rect(t.x, t.y, e.width, e.height)
            },
            _updateCells: function() {
                if (this.ScrollModel === n.Horizontal) {
                    if (this._scrollDirection === i.Left) {
                        if (this._maxCellIndex < this._count - 1) {
                            var e = this._getBoundingBoxToWorld(this._viewnode);
                            do {
                                var t = l(this.content, this._minCellIndex);
                                if (!((o = this._getBoundingBoxToWorld(t)).xMax <= e.xMin))
                                    break;
                                t.x = l(this.content, this._maxCellIndex).x + t.width,
                                this._minCellIndex++,
                                this._maxCellIndex++,
                                o.xMax + (this._maxCellIndex - this._minCellIndex + 1) * t.width > e.xMin && (this._setCellAttr(t, this._maxCellIndex),
                                this._initCell(t))
                            } while (this._maxCellIndex !== this._count - 1)
                        }
                    } else if (this._scrollDirection === i.Rigth && this._minCellIndex > 0) {
                        e = this._getBoundingBoxToWorld(this._viewnode);
                        do {
                            t = l(this.content, this._maxCellIndex);
                            if (!((o = this._getBoundingBoxToWorld(t)).xMin >= e.xMax))
                                break;
                            t.x = l(this.content, this._minCellIndex).x - t.width,
                            this._minCellIndex--,
                            this._maxCellIndex--,
                            o.xMin - (this._maxCellIndex - this._minCellIndex + 1) * t.width < e.xMax && (this._setCellAttr(t, this._minCellIndex),
                            this._initCell(t))
                        } while (0 !== this._minCellIndex)
                    }
                } else if (this._scrollDirection === i.Up) {
                    if (this._maxCellIndex < this._count - 1) {
                        e = this._getBoundingBoxToWorld(this._viewnode);
                        do {
                            t = l(this.content, this._minCellIndex);
                            if (!((o = this._getBoundingBoxToWorld(t)).yMin >= e.yMax))
                                break;
                            t.y = l(this.content, this._maxCellIndex).y - t.height,
                            this._minCellIndex++,
                            this._maxCellIndex++,
                            o.yMin - (this._maxCellIndex - this._minCellIndex + 1) * t.height < e.yMax && (this._setCellAttr(t, this._maxCellIndex),
                            this._initCell(t))
                        } while (this._maxCellIndex !== this._count - 1)
                    }
                } else if (this._scrollDirection === i.Down && this._minCellIndex > 0) {
                    e = this._getBoundingBoxToWorld(this._viewnode);
                    do {
                        var o;
                        t = l(this.content, this._maxCellIndex);
                        if (!((o = this._getBoundingBoxToWorld(t)).yMax <= e.yMin))
                            break;
                        t.y = l(this.content, this._minCellIndex).y + t.height,
                        this._minCellIndex--,
                        this._maxCellIndex--,
                        o.yMax + (this._maxCellIndex - this._minCellIndex + 1) * t.width > e.yMin && (this._setCellAttr(t, this._minCellIndex),
                        this._initCell(t))
                    } while (0 !== this._minCellIndex)
                }
            },
            _getScrollDirection: function() {
                var e = this.getScrollOffset()
                  , t = this._lastOffset;
                this._lastOffset = e,
                e = c(e, t),
                this.ScrollModel === n.Horizontal ? e.x > 0 ? this._scrollDirection = i.Rigth : e.x < 0 ? this._scrollDirection = i.Left : this._scrollDirection = i.None : e.y < 0 ? this._scrollDirection = i.Down : e.y > 0 ? this._scrollDirection = i.Up : this._scrollDirection = i.None
            },
            update: function(e) {
                this._super(e),
                this._cellCount !== this._showCellCount && 1 !== this._pageTotal && (this._getScrollDirection(),
                this._updateCells())
            }
        });
        u._tableView = [],
        u.reload = function() {
            for (var e in u._tableView)
                u._tableView[e].reload()
        }
        ,
        u.clear = function() {
            for (var e in u._tableView)
                u._tableView[e].clear()
        }
        ,
        cc.tableView = t.export = u,
        cc._RF.pop()
    }
    , {}],
    uuid: [function(e, t, o) {
        "use strict";
        function n() {}
        function i(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        }
        cc._RF.push(t, "48410puWKBDtJq1T75ktbmZ", "uuid"),
        n.maxFromBits = function(e) {
            return Math.pow(2, e)
        }
        ,
        n.limitUI04 = n.maxFromBits(4),
        n.limitUI06 = n.maxFromBits(6),
        n.limitUI08 = n.maxFromBits(8),
        n.limitUI12 = n.maxFromBits(12),
        n.limitUI14 = n.maxFromBits(14),
        n.limitUI16 = n.maxFromBits(16),
        n.limitUI32 = n.maxFromBits(32),
        n.limitUI40 = n.maxFromBits(40),
        n.limitUI48 = n.maxFromBits(48),
        n.randomUI04 = function() {
            return i(0, n.limitUI04 - 1)
        }
        ,
        n.randomUI06 = function() {
            return i(0, n.limitUI06 - 1)
        }
        ,
        n.randomUI08 = function() {
            return i(0, n.limitUI08 - 1)
        }
        ,
        n.randomUI12 = function() {
            return i(0, n.limitUI12 - 1)
        }
        ,
        n.randomUI14 = function() {
            return i(0, n.limitUI14 - 1)
        }
        ,
        n.randomUI16 = function() {
            return i(0, n.limitUI16 - 1)
        }
        ,
        n.randomUI32 = function() {
            return i(0, n.limitUI32 - 1)
        }
        ,
        n.randomUI40 = function() {
            return (0 | Math.random() * (1 << 30)) + (0 | 1024 * Math.random()) * (1 << 30)
        }
        ,
        n.randomUI48 = function() {
            return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 18)) * (1 << 30)
        }
        ,
        n.paddedString = function(e, t, o) {
            e = String(e),
            o = o || "0";
            for (var n = t - e.length; n > 0; n >>>= 1,
            o += o)
                1 & n && (e = o + e);
            return e
        }
        ,
        n.prototype.fromParts = function(e, t, o, i, a, r) {
            return this.version = o >> 12 & 15,
            this.hex = n.paddedString(e.toString(16), 8) + "-" + n.paddedString(t.toString(16), 4) + "-" + n.paddedString(o.toString(16), 4) + "-" + n.paddedString(i.toString(16), 2) + n.paddedString(a.toString(16), 2) + "-" + n.paddedString(r.toString(16), 12),
            this
        }
        ,
        n.prototype.toString = function() {
            return this.hex
        }
        ,
        n.prototype.toURN = function() {
            return "urn:uuid:" + this.hex
        }
        ,
        n.prototype.toBytes = function() {
            for (var e = this.hex.split("-"), t = [], o = 0, n = 0; n < e.length; n++)
                for (var i = 0; i < e[n].length; i += 2)
                    t[o++] = parseInt(e[n].substr(i, 2), 16);
            return t
        }
        ,
        n.prototype.equals = function(e) {
            return e instanceof UUID && this.hex === e.hex
        }
        ,
        n.getTimeFieldValues = function(e) {
            var t = e - Date.UTC(1582, 9, 15)
              , o = t / 4294967296 * 1e4 & 268435455;
            return {
                low: 1e4 * (268435455 & t) % 4294967296,
                mid: 65535 & o,
                hi: o >>> 16,
                timestamp: t
            }
        }
        ,
        n._create4 = function() {
            return (new n).fromParts(n.randomUI32(), n.randomUI16(), 16384 | n.randomUI12(), 128 | n.randomUI06(), n.randomUI08(), n.randomUI48())
        }
        ,
        n._create1 = function() {
            var e = (new Date).getTime()
              , t = n.randomUI14()
              , o = 1099511627776 * (1 | n.randomUI08()) + n.randomUI40()
              , i = n.randomUI04()
              , a = 0;
            e != a ? (e < a && t++,
            a = e,
            i = n.randomUI04()) : Math.random() < .25 && i < 9984 ? i += 1 + n.randomUI04() : t++;
            var r = n.getTimeFieldValues(a)
              , c = r.low + i
              , s = 4095 & r.hi | 4096
              , l = (t &= 16383) >>> 8 | 128
              , u = 255 & t;
            return (new n).fromParts(c, r.mid, s, l, u, o)
        }
        ,
        n.create = function(e) {
            return this["_create" + (e = e || 4)]()
        }
        ,
        n.fromTime = function(e, t) {
            t = t || !1;
            var o = n.getTimeFieldValues(e)
              , i = o.low
              , a = 4095 & o.hi | 4096;
            return !1 === t ? (new n).fromParts(i, o.mid, a, 0, 0, 0) : (new n).fromParts(i, o.mid, a, 128 | n.limitUI06, n.limitUI08 - 1, n.limitUI48 - 1)
        }
        ,
        n.firstFromTime = function(e) {
            return n.fromTime(e, !1)
        }
        ,
        n.lastFromTime = function(e) {
            return n.fromTime(e, !0)
        }
        ,
        n.fromURN = function(e) {
            var t;
            return (t = /^(?:urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\})?$/i.exec(e)) ? (new n).fromParts(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), parseInt(t[4], 16), parseInt(t[5], 16), parseInt(t[6], 16)) : null
        }
        ,
        n.fromBytes = function(e) {
            if (e.length < 5)
                return null;
            for (var t = "", o = 0, i = [4, 2, 2, 2, 6], a = 0; a < i.length; a++) {
                for (var r = 0; r < i[a]; r++) {
                    var c = e[o++].toString(16);
                    1 == c.length && (c = "0" + c),
                    t += c
                }
                6 !== i[a] && (t += "-")
            }
            return n.fromURN(t)
        }
        ,
        n.fromBinary = function(e) {
            for (var t = [], o = 0; o < e.length; o++)
                if (t[o] = e.charCodeAt(o),
                t[o] > 255 || t[o] < 0)
                    throw new Error("Unexpected byte in binary data.");
            return n.fromBytes(t)
        }
        ,
        n.new = function() {
            return this.create(4)
        }
        ,
        n.newTS = function() {
            return this.create(1)
        }
        ,
        t.exports = n,
        cc._RF.pop()
    }
    , {}],
    viewCell: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "93950JrKc1GQLHo7bnR16xr", "viewCell");
        var n = this && this.__extends || function() {
            var e = function(t, o) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var o in t)
                        t.hasOwnProperty(o) && (e[o] = t[o])
                }
                )(t, o)
            };
            return function(t, o) {
                function n() {
                    this.constructor = t
                }
                e(t, o),
                t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
                new n)
            }
        }()
          , i = this && this.__decorate || function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , r = a.ccclass
          , c = (a.property,
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.tableView = null,
                t._isCellInit_ = !1,
                t._longClicked_ = !1,
                t
            }
            return n(t, e),
            t.prototype._cellAddMethodToNode_ = function() {
                this.node.clicked = this.clicked.bind(this)
            }
            ,
            t.prototype._cellAddTouch_ = function() {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
                    !0 === e.node.active && 0 !== e.node.opacity && (e._longClicked_ || (e._longClicked_ = !0,
                    e.scheduleOnce(e._longClicked, 1.5)))
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, function() {
                    e._longClicked_ && (e._longClicked_ = !1,
                    e.unschedule(e._longClicked))
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    e.clicked(),
                    e._longClicked_ && (e._longClicked_ = !1,
                    e.unschedule(e._longClicked))
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
                    e._longClicked_ && (e._longClicked_ = !1,
                    e.unschedule(e._longClicked))
                }, this)
            }
            ,
            t.prototype._cellInit_ = function(e) {
                this.tableView = e,
                this._isCellInit_ || (this._cellAddMethodToNode_(),
                this._cellAddTouch_(),
                this._isCellInit_ = !0)
            }
            ,
            t.prototype._longClicked = function() {
                this._longClicked_ = !1,
                this.node.emit(cc.Node.EventType.TOUCH_CANCEL),
                this.longClicked()
            }
            ,
            t.prototype.longClicked = function() {}
            ,
            t.prototype.clicked = function() {}
            ,
            t.prototype.init = function(e, t, o, n) {}
            ,
            t = i([r], t)
        }(cc.Component));
        o.default = c,
        cc._RF.pop()
    }
    , {}]
}, {}, ["LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min", "LayerItem", "LayerManager", "SceneItem", "SceneManager", "Ads", "Native", "NativeApi", "DBConfig", "DropConfig", "GameConfig", "PfConfig", "TaskConfig", "CellCubeEffect", "CellLightEffect", "GameOverData", "AuthScene", "GameScene", "HomeScene", "UIPath", "DropTipsLayer", "GameOverLayer", "PauseLayer", "ReviveLayer", "RewardLayer", "SigninLayer", "StartGameRewardLayer", "CellView", "GameCellView", "GameStartHintView", "FriendHopeLayer", "GroupRankListLayer", "RankListLayer", "ShopLayer", "TaskLayer", "Item_Addxcx", "Item_drop_buy", "Item_pf", "Item_rank", "Item_task", "SettingNode", "Test", "MyData", "MyProView.ts", "Quick", "UIQuick", "my.d", "MathTool", "QuickTool", "SoundTool", "SpriteTool", "SwitchButton", "Tools", "UI_Loading", "Util", "Drop_DB", "Gift_DB", "Hope_DB", "Pf_DB", "Revive_DB", "Signin_DB", "Task_DB", "WxAds", "WxDBTool", "WxTool", "WxUserInfo", "uuid", "tableView", "viewCell"]);
