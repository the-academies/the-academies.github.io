/*!
* Bootstrap v4.1.3 (https://getbootstrap.com/)
* Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.bootstrap = {}, e.jQuery)
}(this, function(e, t) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function s(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function l(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable
            }))), t.forEach(function(e) {
                var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return r
    }
    for (var r, n, o, a, c, u, f, h, d, p, m, g, _, v, y, E, b, w, C, T, S, D, A, I, O, N, k, x, P, L, j, H, M, F, W, R, U, B, q, K, Q, Y, V, z, G, J, Z, X, $, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, fe, he, de, pe, me, ge, _e, ve, ye, Ee, be, we = function(i) {
            var t = "transitionend";

            function e(e) {
                var t = this,
                    n = !1;
                return i(this).one(l.TRANSITION_END, function() {
                    n = !0
                }), setTimeout(function() {
                    n || l.triggerTransitionEnd(t)
                }, e), this
            }
            var l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(e) {
                    for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                    return e
                },
                getSelectorFromElement: function(e) {
                    var t = e.getAttribute("data-target");
                    t && "#" !== t || (t = e.getAttribute("href") || "");
                    try {
                        return document.querySelector(t) ? t : null
                    } catch (e) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function(e) {
                    if (!e) return 0;
                    var t = i(e).css("transition-duration");
                    return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
                },
                reflow: function(e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function(e) {
                    i(e).trigger(t)
                },
                supportsTransitionEnd: function() {
                    return Boolean(t)
                },
                isElement: function(e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function(e, t, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                o = t[i],
                                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                        }
                    var a
                }
            };
            return i.fn.emulateTransitionEnd = e, i.event.special[l.TRANSITION_END] = {
                bindType: t,
                delegateType: t,
                handle: function(e) {
                    if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }, l
        }(t = t && t.hasOwnProperty("default") ? t.default : t), Ce = (n = "alert", a = "." + (o = "bs.alert"), c = (r = t).fn[n], u = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        }, f = "alert", h = "fade", d = "show", p = function() {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, e.dispose = function() {
                r.removeData(this._element, o), this._element = null
            }, e._getRootElement = function(e) {
                var t = we.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n || (n = r(e).closest("." + f)[0]), n
            }, e._triggerCloseEvent = function(e) {
                var t = r.Event(u.CLOSE);
                return r(e).trigger(t), t
            }, e._removeElement = function(t) {
                var n = this;
                if (r(t).removeClass(d), r(t).hasClass(h)) {
                    var e = we.getTransitionDurationFromElement(t);
                    r(t).one(we.TRANSITION_END, function(e) {
                        return n._destroyElement(t, e)
                    }).emulateTransitionEnd(e)
                } else this._destroyElement(t)
            }, e._destroyElement = function(e) {
                r(e).detach().trigger(u.CLOSED).remove()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = r(this),
                        t = e.data(o);
                    t || (t = new i(this), e.data(o, t)), "close" === n && t[n](this)
                })
            }, i._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), i
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function() {
            return r.fn[n] = c, p._jQueryInterface
        }, p), Te = (g = "button", v = "." + (_ = "bs.button"), y = ".data-api", E = (m = t).fn[g], b = "active", w = "btn", T = '[data-toggle^="button"]', S = '[data-toggle="buttons"]', D = "input", A = ".active", I = ".btn", O = {
            CLICK_DATA_API: "click" + v + y,
            FOCUS_BLUR_DATA_API: (C = "focus") + v + y + " blur" + v + y
        }, N = function() {
            function n(e) {
                this._element = e
            }
            var e = n.prototype;
            return e.toggle = function() {
                var e = !0,
                    t = !0,
                    n = m(this._element).closest(S)[0];
                if (n) {
                    var i = this._element.querySelector(D);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(b)) e = !1;
                            else {
                                var r = n.querySelector(A);
                                r && m(r).removeClass(b)
                            }
                        if (e) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(b), m(i).trigger("change")
                        }
                        i.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), e && m(this._element).toggleClass(b)
            }, e.dispose = function() {
                m.removeData(this._element, _), this._element = null
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = m(this).data(_);
                    e || (e = new n(this), m(this).data(_, e)), "toggle" === t && e[t]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), n
        }(), m(document).on(O.CLICK_DATA_API, T, function(e) {
            e.preventDefault();
            var t = e.target;
            m(t).hasClass(w) || (t = m(t).closest(I)), N._jQueryInterface.call(m(t), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, T, function(e) {
            var t = m(e.target).closest(I)[0];
            m(t).toggleClass(C, /^focus(in)?$/.test(e.type))
        }), m.fn[g] = N._jQueryInterface, m.fn[g].Constructor = N, m.fn[g].noConflict = function() {
            return m.fn[g] = E, N._jQueryInterface
        }, N), Se = (x = "carousel", L = "." + (P = "bs.carousel"), j = ".data-api", H = (k = t).fn[x], M = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, F = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, W = "next", R = "prev", U = "left", B = "right", q = {
            SLIDE: "slide" + L,
            SLID: "slid" + L,
            KEYDOWN: "keydown" + L,
            MOUSEENTER: "mouseenter" + L,
            MOUSELEAVE: "mouseleave" + L,
            TOUCHEND: "touchend" + L,
            LOAD_DATA_API: "load" + L + j,
            CLICK_DATA_API: "click" + L + j
        }, K = "carousel", Q = "active", Y = "slide", V = "carousel-item-right", z = "carousel-item-left", G = "carousel-item-next", J = "carousel-item-prev", Z = ".active", X = ".active.carousel-item", $ = ".carousel-item", ee = ".carousel-item-next, .carousel-item-prev", te = ".carousel-indicators", ne = "[data-slide], [data-slide-to]", ie = '[data-ride="carousel"]', re = function() {
            function o(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = k(e)[0], this._indicatorsElement = this._element.querySelector(te), this._addEventListeners()
            }
            var e = o.prototype;
            return e.next = function() {
                this._isSliding || this._slide(W)
            }, e.nextWhenVisible = function() {
                !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next()
            }, e.prev = function() {
                this._isSliding || this._slide(R)
            }, e.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(ee) && (we.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(X);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) k(this._element).one(q.SLID, function() {
                        return t.to(e)
                    });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var i = n < e ? W : R;
                        this._slide(i, this._items[e])
                    }
            }, e.dispose = function() {
                k(this._element).off(L), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function(e) {
                return e = l({}, M, e), we.typeCheckConfig(x, e, F), e
            }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && k(this._element).on(q.KEYDOWN, function(e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && (k(this._element).on(q.MOUSEENTER, function(e) {
                    return t.pause(e)
                }).on(q.MOUSELEAVE, function(e) {
                    return t.cycle(e)
                }), "ontouchstart" in document.documentElement && k(this._element).on(q.TOUCHEND, function() {
                    t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                        return t.cycle(e)
                    }, 500 + t._config.interval)
                }))
            }, e._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll($)) : [], this._items.indexOf(e)
            }, e._getItemByDirection = function(e, t) {
                var n = e === W,
                    i = e === R,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var s = (r + (e === R ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function(e, t) {
                var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(X)),
                    r = k.Event(q.SLIDE, {
                        relatedTarget: e,
                        direction: t,
                        from: i,
                        to: n
                    });
                return k(this._element).trigger(r), r
            }, e._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                    k(t).removeClass(Q);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && k(n).addClass(Q)
                }
            }, e._slide = function(e, t) {
                var n, i, r, o = this,
                    s = this._element.querySelector(X),
                    a = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval);
                if (e === W ? (n = z, i = G, r = U) : (n = V, i = J, r = B), l && k(l).hasClass(Q)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                    var f = k.Event(q.SLID, {
                        relatedTarget: l,
                        direction: r,
                        from: a,
                        to: c
                    });
                    if (k(this._element).hasClass(Y)) {
                        k(l).addClass(i), we.reflow(l), k(s).addClass(n), k(l).addClass(n);
                        var h = we.getTransitionDurationFromElement(s);
                        k(s).one(we.TRANSITION_END, function() {
                            k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function() {
                                return k(o._element).trigger(f)
                            }, 0)
                        }).emulateTransitionEnd(h)
                    } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(f);
                    u && this.cycle()
                }
            }, o._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = k(this).data(P),
                        t = l({}, M, k(this).data());
                    "object" == typeof i && (t = l({}, t, i));
                    var n = "string" == typeof i ? i : t.slide;
                    if (e || (e = new o(this, t), k(this).data(P, e)), "number" == typeof i) e.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    } else t.interval && (e.pause(), e.cycle())
                })
            }, o._dataApiClickHandler = function(e) {
                var t = we.getSelectorFromElement(this);
                if (t) {
                    var n = k(t)[0];
                    if (n && k(n).hasClass(K)) {
                        var i = l({}, k(n).data(), k(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), e.preventDefault()
                    }
                }
            }, s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return M
                }
            }]), o
        }(), k(document).on(q.CLICK_DATA_API, ne, re._dataApiClickHandler), k(window).on(q.LOAD_DATA_API, function() {
            for (var e = [].slice.call(document.querySelectorAll(ie)), t = 0, n = e.length; t < n; t++) {
                var i = k(e[t]);
                re._jQueryInterface.call(i, i.data())
            }
        }), k.fn[x] = re._jQueryInterface, k.fn[x].Constructor = re, k.fn[x].noConflict = function() {
            return k.fn[x] = H, re._jQueryInterface
        }, re), De = (se = "collapse", le = "." + (ae = "bs.collapse"), ce = (oe = t).fn[se], ue = {
            toggle: !0,
            parent: ""
        }, fe = {
            toggle: "boolean",
            parent: "(string|element)"
        }, he = {
            SHOW: "show" + le,
            SHOWN: "shown" + le,
            HIDE: "hide" + le,
            HIDDEN: "hidden" + le,
            CLICK_DATA_API: "click" + le + ".data-api"
        }, de = "show", pe = "collapse", me = "collapsing", ge = "collapsed", _e = "width", ve = "height", ye = ".show, .collapsing", Ee = '[data-toggle="collapse"]', be = function() {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = oe.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Ee)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        s = we.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                            return e === t
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = a.prototype;
            return e.toggle = function() {
                oe(this._element).hasClass(de) ? this.hide() : this.show()
            }, e.show = function() {
                var e, t, n = this;
                if (!this._isTransitioning && !oe(this._element).hasClass(de) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(ye)).filter(function(e) {
                        return e.getAttribute("data-parent") === n._config.parent
                    })).length && (e = null), !(e && (t = oe(e).not(this._selector).data(ae)) && t._isTransitioning))) {
                    var i = oe.Event(he.SHOW);
                    if (oe(this._element).trigger(i), !i.isDefaultPrevented()) {
                        e && (a._jQueryInterface.call(oe(e).not(this._selector), "hide"), t || oe(e).data(ae, null));
                        var r = this._getDimension();
                        oe(this._element).removeClass(pe).addClass(me), this._element.style[r] = 0, this._triggerArray.length && oe(this._triggerArray).removeClass(ge).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = we.getTransitionDurationFromElement(this._element);
                        oe(this._element).one(we.TRANSITION_END, function() {
                            oe(n._element).removeClass(me).addClass(pe).addClass(de), n._element.style[r] = "", n.setTransitioning(!1), oe(n._element).trigger(he.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                    }
                }
            }, e.hide = function() {
                var e = this;
                if (!this._isTransitioning && oe(this._element).hasClass(de)) {
                    var t = oe.Event(he.HIDE);
                    if (oe(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", we.reflow(this._element), oe(this._element).addClass(me).removeClass(pe).removeClass(de);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var r = 0; r < i; r++) {
                                var o = this._triggerArray[r],
                                    s = we.getSelectorFromElement(o);
                                if (null !== s) oe([].slice.call(document.querySelectorAll(s))).hasClass(de) || oe(o).addClass(ge).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = we.getTransitionDurationFromElement(this._element);
                        oe(this._element).one(we.TRANSITION_END, function() {
                            e.setTransitioning(!1), oe(e._element).removeClass(me).addClass(pe).trigger(he.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, e.setTransitioning = function(e) {
                this._isTransitioning = e
            }, e.dispose = function() {
                oe.removeData(this._element, ae), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function(e) {
                return (e = l({}, ue, e)).toggle = Boolean(e.toggle), we.typeCheckConfig(se, e, fe), e
            }, e._getDimension = function() {
                return oe(this._element).hasClass(_e) ? _e : ve
            }, e._getParent = function() {
                var n = this,
                    e = null;
                we.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(e.querySelectorAll(t));
                return oe(i).each(function(e, t) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
                }), e
            }, e._addAriaAndCollapsedClass = function(e, t) {
                if (e) {
                    var n = oe(e).hasClass(de);
                    t.length && oe(t).toggleClass(ge, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function(e) {
                var t = we.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = oe(this),
                        t = e.data(ae),
                        n = l({}, ue, e.data(), "object" == typeof i && i ? i : {});
                    if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(ae, t)), "string" == typeof i) {
                        if ("undefined" == typeof t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return ue
                }
            }]), a
        }(), oe(document).on(he.CLICK_DATA_API, Ee, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = oe(this),
                t = we.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(t));
            oe(i).each(function() {
                var e = oe(this),
                    t = e.data(ae) ? "toggle" : n.data();
                be._jQueryInterface.call(e, t)
            })
        }), oe.fn[se] = be._jQueryInterface, oe.fn[se].Constructor = be, oe.fn[se].noConflict = function() {
            return oe.fn[se] = ce, be._jQueryInterface
        }, be), Ae = "undefined" != typeof window && "undefined" != typeof document, Ie = ["Edge", "Trident", "Firefox"], Oe = 0, Ne = 0; Ne < Ie.length; Ne += 1)
        if (Ae && 0 <= navigator.userAgent.indexOf(Ie[Ne])) {
            Oe = 1;
            break
        }
    var ke = Ae && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e()
            }))
        }
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e()
            }, Oe))
        }
    };

    function xe(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function Pe(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function Le(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function je(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = Pe(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : je(Le(e))
    }
    var He = Ae && !(!window.MSInputMethodContext || !document.documentMode),
        Me = Ae && /MSIE 10/.test(navigator.userAgent);

    function Fe(e) {
        return 11 === e ? He : 10 === e ? Me : He || Me
    }

    function We(e) {
        if (!e) return document.documentElement;
        for (var t = Fe(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Pe(n, "position") ? We(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function Re(e) {
        return null !== e.parentNode ? Re(e.parentNode) : e
    }

    function Ue(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && We(s.firstElementChild) !== s ? We(l) : l;
        var c = Re(e);
        return c.host ? Ue(c.host, t) : Ue(e, Re(t).host)
    }

    function Be(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function qe(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function Ke(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Fe(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function Qe() {
        var e = document.body,
            t = document.documentElement,
            n = Fe(10) && getComputedStyle(t);
        return {
            height: Ke("Height", e, t, n),
            width: Ke("Width", e, t, n)
        }
    }
    var Ye = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }
        }(),
        Ve = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        ze = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };

    function Ge(e) {
        return ze({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function Je(e) {
        var t = {};
        try {
            if (Fe(10)) {
                t = e.getBoundingClientRect();
                var n = Be(e, "top"),
                    i = Be(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? Qe() : {},
            s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            c = e.offsetHeight - a;
        if (l || c) {
            var u = Pe(e);
            l -= qe(u, "x"), c -= qe(u, "y"), r.width -= l, r.height -= c
        }
        return Ge(r)
    }

    function Ze(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Fe(10),
            r = "HTML" === t.nodeName,
            o = Je(e),
            s = Je(t),
            a = je(e),
            l = Pe(t),
            c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var f = Ge({
            top: o.top - s.top - c,
            left: o.left - s.left - u,
            width: o.width,
            height: o.height
        });
        if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
            var h = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            f.top -= c - h, f.bottom -= c - h, f.left -= u - d, f.right -= u - d, f.marginTop = h, f.marginLeft = d
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = Be(t, "top"),
                r = Be(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(f, t)), f
    }

    function Xe(e) {
        if (!e || !e.parentElement || Fe()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === Pe(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function $e(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            s = r ? Xe(e) : Ue(e, t);
        if ("viewport" === i) o = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = Ze(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : Be(n),
                a = t ? 0 : Be(n, "left");
            return Ge({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
            })
        }(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = je(Le(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = Ze(a, s, r);
            if ("HTML" !== a.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === Pe(t, "position") || e(Le(t)))
                }(s)) o = l;
            else {
                var c = Qe(),
                    u = c.height,
                    f = c.width;
                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
            }
        }
        return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
    }

    function et(e, t, i, n, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = $e(i, n, o, r),
            a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function(e) {
                return ze({
                    key: e
                }, a[e], {
                    area: (t = a[e], t.width * t.height)
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = l.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            f = e.split("-")[1];
        return u + (f ? "-" + f : "")
    }

    function tt(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return Ze(n, i ? Xe(t) : Ue(t, n), i)
    }

    function nt(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function it(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function rt(e, t, n) {
        n = n.split("-")[0];
        var i = nt(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[it(a)], r
    }

    function ot(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function st(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = ot(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && xe(t) && (n.offsets.popper = Ge(n.offsets.popper), n.offsets.reference = Ge(n.offsets.reference), n = t(n, e))
        }), n
    }

    function at(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function lt(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if ("undefined" != typeof document.body.style[o]) return o
        }
        return null
    }

    function ct(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function ut(e, t, n, i) {
        n.updateBound = i, ct(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = je(e);
        return function e(t, n, i, r) {
            var o = "BODY" === t.nodeName,
                s = o ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, {
                passive: !0
            }), o || e(je(s.parentNode), n, i, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function ft() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function ht(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function dt(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ht(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }

    function pt(e, t, n) {
        var i = ot(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var mt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        gt = mt.slice(3);

    function _t(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = gt.indexOf(e),
            i = gt.slice(n + 1).concat(gt.slice(0, n));
        return t ? i.reverse() : i
    }
    var vt = "flip",
        yt = "clockwise",
        Et = "counterclockwise";

    function bt(e, r, o, t) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            i = n.indexOf(ot(n, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width",
                i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        s = r[2];
                    if (!o) return e;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return Ge(a)[t] / 100 * o
                    }
                    if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(e, n, r, o)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                ht(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }), s
    }
    var wt = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                u = {
                                    start: Ve({}, l, o[l]),
                                    end: Ve({}, l, o[l] + o[c] - s[c])
                                };
                            e.offsets.popper = ze({}, s, u[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.offset,
                            i = e.placement,
                            r = e.offsets,
                            o = r.popper,
                            s = r.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = ht(+n) ? [+n, 0] : bt(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, i) {
                        var t = i.boundariesElement || We(e.instance.popper);
                        e.instance.reference === t && (t = We(t));
                        var n = lt("transform"),
                            r = e.instance.popper.style,
                            o = r.top,
                            s = r.left,
                            a = r[n];
                        r.top = "", r.left = "", r[n] = "";
                        var l = $e(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                        var c = i.priority,
                            u = e.offsets.popper,
                            f = {
                                primary: function(e) {
                                    var t = u[e];
                                    return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), Ve({}, e, t)
                                },
                                secondary: function(e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = u[t];
                                    return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), Ve({}, t, n)
                                }
                            };
                        return c.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = ze({}, u, f[t](e))
                        }), e.offsets.popper = u, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!pt(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            f = u.toLowerCase(),
                            h = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = nt(i)[c];
                        a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]), e.offsets.popper = Ge(e.offsets.popper);
                        var m = a[f] + a[c] / 2 - p / 2,
                            g = Pe(e.instance.popper),
                            _ = parseFloat(g["margin" + u], 10),
                            v = parseFloat(g["border" + u + "Width"], 10),
                            y = m - e.offsets.popper[f] - _ - v;
                        return y = Math.max(Math.min(s[c] - p, y), 0), e.arrowElement = i, e.offsets.arrow = (Ve(n = {}, f, Math.round(y)), Ve(n, h, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(p, m) {
                        if (at(p.instance.modifiers, "inner")) return p;
                        if (p.flipped && p.placement === p.originalPlacement) return p;
                        var g = $e(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed),
                            _ = p.placement.split("-")[0],
                            v = it(_),
                            y = p.placement.split("-")[1] || "",
                            E = [];
                        switch (m.behavior) {
                            case vt:
                                E = [_, v];
                                break;
                            case yt:
                                E = _t(_);
                                break;
                            case Et:
                                E = _t(_, !0);
                                break;
                            default:
                                E = m.behavior
                        }
                        return E.forEach(function(e, t) {
                            if (_ !== e || E.length === t + 1) return p;
                            _ = p.placement.split("-")[0], v = it(_);
                            var n, i = p.offsets.popper,
                                r = p.offsets.reference,
                                o = Math.floor,
                                s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom),
                                a = o(i.left) < o(g.left),
                                l = o(i.right) > o(g.right),
                                c = o(i.top) < o(g.top),
                                u = o(i.bottom) > o(g.bottom),
                                f = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && u,
                                h = -1 !== ["top", "bottom"].indexOf(_),
                                d = !!m.flipVariations && (h && "start" === y && a || h && "end" === y && l || !h && "start" === y && c || !h && "end" === y && u);
                            (s || f || d) && (p.flipped = !0, (s || f) && (_ = E[t + 1]), d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n), p.placement = _ + (y ? "-" + y : ""), p.offsets.popper = ze({}, p.offsets.popper, rt(p.instance.popper, p.offsets.reference, p.placement)), p = st(p.instance.modifiers, p, "flip"))
                        }), p
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = it(t), e.offsets.popper = Ge(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!pt(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = ot(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            o = ot(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== o ? o : t.gpuAcceleration,
                            a = Je(We(e.instance.popper)),
                            l = {
                                position: r.position
                            },
                            c = {
                                left: Math.floor(r.left),
                                top: Math.round(r.top),
                                bottom: Math.round(r.bottom),
                                right: Math.floor(r.right)
                            },
                            u = "bottom" === n ? "top" : "bottom",
                            f = "right" === i ? "left" : "right",
                            h = lt("transform"),
                            d = void 0,
                            p = void 0;
                        if (p = "bottom" === u ? -a.height + c.bottom : c.top, d = "right" === f ? -a.width + c.right : c.left, s && h) l[h] = "translate3d(" + d + "px, " + p + "px, 0)", l[u] = 0, l[f] = 0, l.willChange = "transform";
                        else {
                            var m = "bottom" === u ? -1 : 1,
                                g = "right" === f ? -1 : 1;
                            l[u] = p * m, l[f] = d * g, l.willChange = u + ", " + f
                        }
                        var _ = {
                            "x-placement": e.placement
                        };
                        return e.attributes = ze({}, _, e.attributes), e.styles = ze({}, l, e.styles), e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, n;
                        return dt(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, n, i, r) {
                        var o = tt(r, t, e, n.positionFixed),
                            s = et(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), dt(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Ct = function() {
            function o(e, t) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = ke(this.update.bind(this)), this.options = ze({}, o.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(ze({}, o.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = ze({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return ze({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && xe(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return Ye(o, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = rt(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = st(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = ut(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return ft.call(this)
                }
            }]), o
        }();
    Ct.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ct.placements = mt, Ct.Defaults = wt;
    var Tt, St, Dt, At, It, Ot, Nt, kt, xt, Pt, Lt, jt, Ht, Mt, Ft, Wt, Rt, Ut, Bt, qt, Kt, Qt, Yt, Vt, zt, Gt, Jt, Zt, Xt, $t, en, tn, nn, rn, on, sn, an, ln, cn, un, fn, hn, dn, pn, mn, gn, _n, vn, yn, En, bn, wn, Cn, Tn, Sn, Dn, An, In, On, Nn, kn, xn, Pn, Ln, jn, Hn, Mn, Fn, Wn, Rn, Un, Bn, qn, Kn, Qn, Yn, Vn, zn, Gn, Jn, Zn, Xn, $n, ei, ti, ni, ii, ri, oi, si, ai, li, ci, ui, fi, hi, di, pi, mi, gi, _i, vi, yi, Ei, bi, wi, Ci, Ti, Si, Di, Ai, Ii, Oi, Ni, ki, xi, Pi, Li, ji, Hi, Mi, Fi, Wi, Ri, Ui, Bi = (St = "dropdown", At = "." + (Dt = "bs.dropdown"), It = ".data-api", Ot = (Tt = t).fn[St], Nt = new RegExp("38|40|27"), kt = {
            HIDE: "hide" + At,
            HIDDEN: "hidden" + At,
            SHOW: "show" + At,
            SHOWN: "shown" + At,
            CLICK: "click" + At,
            CLICK_DATA_API: "click" + At + It,
            KEYDOWN_DATA_API: "keydown" + At + It,
            KEYUP_DATA_API: "keyup" + At + It
        }, xt = "disabled", Pt = "show", Lt = "dropup", jt = "dropright", Ht = "dropleft", Mt = "dropdown-menu-right", Ft = "position-static", Wt = '[data-toggle="dropdown"]', Rt = ".dropdown form", Ut = ".dropdown-menu", Bt = ".navbar-nav", qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Kt = "top-start", Qt = "top-end", Yt = "bottom-start", Vt = "bottom-end", zt = "right-start", Gt = "left-start", Jt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Zt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Xt = function() {
            function c(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var e = c.prototype;
            return e.toggle = function() {
                if (!this._element.disabled && !Tt(this._element).hasClass(xt)) {
                    var e = c._getParentFromElement(this._element),
                        t = Tt(this._menu).hasClass(Pt);
                    if (c._clearMenus(), !t) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = Tt.Event(kt.SHOW, n);
                        if (Tt(e).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof Ct) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = e : we.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && Tt(e).addClass(Ft), this._popper = new Ct(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === Tt(e).closest(Bt).length && Tt(document.body).children().on("mouseover", null, Tt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Tt(this._menu).toggleClass(Pt), Tt(e).toggleClass(Pt).trigger(Tt.Event(kt.SHOWN, n))
                        }
                    }
                }
            }, e.dispose = function() {
                Tt.removeData(this._element, Dt), Tt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function() {
                var t = this;
                Tt(this._element).on(kt.CLICK, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, e._getConfig = function(e) {
                return e = l({}, this.constructor.Default, Tt(this._element).data(), e), we.typeCheckConfig(St, e, this.constructor.DefaultType), e
            }, e._getMenuElement = function() {
                if (!this._menu) {
                    var e = c._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(Ut))
                }
                return this._menu
            }, e._getPlacement = function() {
                var e = Tt(this._element.parentNode),
                    t = Yt;
                return e.hasClass(Lt) ? (t = Kt, Tt(this._menu).hasClass(Mt) && (t = Qt)) : e.hasClass(jt) ? t = zt : e.hasClass(Ht) ? t = Gt : Tt(this._menu).hasClass(Mt) && (t = Vt), t
            }, e._detectNavbar = function() {
                return 0 < Tt(this._element).closest(".navbar").length
            }, e._getPopperConfig = function() {
                var t = this,
                    e = {};
                "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = l({}, e.offsets, t._config.offset(e.offsets) || {}), e
                } : e.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }), n
            }, c._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = Tt(this).data(Dt);
                    if (e || (e = new c(this, "object" == typeof t ? t : null), Tt(this).data(Dt, e)), "string" == typeof t) {
                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, c._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = t.length; n < i; n++) {
                        var r = c._getParentFromElement(t[n]),
                            o = Tt(t[n]).data(Dt),
                            s = {
                                relatedTarget: t[n]
                            };
                        if (e && "click" === e.type && (s.clickEvent = e), o) {
                            var a = o._menu;
                            if (Tt(r).hasClass(Pt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && Tt.contains(r, e.target))) {
                                var l = Tt.Event(kt.HIDE, s);
                                Tt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Tt(document.body).children().off("mouseover", null, Tt.noop), t[n].setAttribute("aria-expanded", "false"), Tt(a).removeClass(Pt), Tt(r).removeClass(Pt).trigger(Tt.Event(kt.HIDDEN, s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function(e) {
                var t, n = we.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, c._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || Tt(e.target).closest(Ut).length)) : Nt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !Tt(this).hasClass(xt))) {
                    var t = c._getParentFromElement(this),
                        n = Tt(t).hasClass(Pt);
                    if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                        var i = [].slice.call(t.querySelectorAll(qt));
                        if (0 !== i.length) {
                            var r = i.indexOf(e.target);
                            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var o = t.querySelector(Wt);
                            Tt(o).trigger("focus")
                        }
                        Tt(this).trigger("click")
                    }
                }
            }, s(c, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return Jt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Zt
                }
            }]), c
        }(), Tt(document).on(kt.KEYDOWN_DATA_API, Wt, Xt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, Ut, Xt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Xt._clearMenus).on(kt.CLICK_DATA_API, Wt, function(e) {
            e.preventDefault(), e.stopPropagation(), Xt._jQueryInterface.call(Tt(this), "toggle")
        }).on(kt.CLICK_DATA_API, Rt, function(e) {
            e.stopPropagation()
        }), Tt.fn[St] = Xt._jQueryInterface, Tt.fn[St].Constructor = Xt, Tt.fn[St].noConflict = function() {
            return Tt.fn[St] = Ot, Xt._jQueryInterface
        }, Xt),
        qi = (en = "modal", nn = "." + (tn = "bs.modal"), rn = ($t = t).fn[en], on = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, sn = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, an = {
            HIDE: "hide" + nn,
            HIDDEN: "hidden" + nn,
            SHOW: "show" + nn,
            SHOWN: "shown" + nn,
            FOCUSIN: "focusin" + nn,
            RESIZE: "resize" + nn,
            CLICK_DISMISS: "click.dismiss" + nn,
            KEYDOWN_DISMISS: "keydown.dismiss" + nn,
            MOUSEUP_DISMISS: "mouseup.dismiss" + nn,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + nn,
            CLICK_DATA_API: "click" + nn + ".data-api"
        }, ln = "modal-scrollbar-measure", cn = "modal-backdrop", un = "modal-open", fn = "fade", hn = "show", dn = ".modal-dialog", pn = '[data-toggle="modal"]', mn = '[data-dismiss="modal"]', gn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _n = ".sticky-top", vn = function() {
            function r(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(dn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }
            var e = r.prototype;
            return e.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, e.show = function(e) {
                var t = this;
                if (!this._isTransitioning && !this._isShown) {
                    $t(this._element).hasClass(fn) && (this._isTransitioning = !0);
                    var n = $t.Event(an.SHOW, {
                        relatedTarget: e
                    });
                    $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(un), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(an.CLICK_DISMISS, mn, function(e) {
                        return t.hide(e)
                    }), $t(this._dialog).on(an.MOUSEDOWN_DISMISS, function() {
                        $t(t._element).one(an.MOUSEUP_DISMISS, function(e) {
                            $t(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return t._showElement(e)
                    }))
                }
            }, e.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = $t.Event(an.HIDE);
                    if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = $t(this._element).hasClass(fn);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(an.FOCUSIN), $t(this._element).removeClass(hn), $t(this._element).off(an.CLICK_DISMISS), $t(this._dialog).off(an.MOUSEDOWN_DISMISS), i) {
                            var r = we.getTransitionDurationFromElement(this._element);
                            $t(this._element).one(we.TRANSITION_END, function(e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function() {
                $t.removeData(this._element, tn), $t(window, document, this._element, this._backdrop).off(nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, e.handleUpdate = function() {
                this._adjustDialog()
            }, e._getConfig = function(e) {
                return e = l({}, on, e), we.typeCheckConfig(en, e, sn), e
            }, e._showElement = function(e) {
                var t = this,
                    n = $t(this._element).hasClass(fn);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && we.reflow(this._element), $t(this._element).addClass(hn), this._config.focus && this._enforceFocus();
                var i = $t.Event(an.SHOWN, {
                        relatedTarget: e
                    }),
                    r = function() {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, $t(t._element).trigger(i)
                    };
                if (n) {
                    var o = we.getTransitionDurationFromElement(this._element);
                    $t(this._dialog).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            }, e._enforceFocus = function() {
                var t = this;
                $t(document).off(an.FOCUSIN).on(an.FOCUSIN, function(e) {
                    document !== e.target && t._element !== e.target && 0 === $t(t._element).has(e.target).length && t._element.focus()
                })
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? $t(this._element).on(an.KEYDOWN_DISMISS, function(e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || $t(this._element).off(an.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? $t(window).on(an.RESIZE, function(e) {
                    return t.handleUpdate(e)
                }) : $t(window).off(an.RESIZE)
            }, e._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                    $t(document.body).removeClass(un), e._resetAdjustments(), e._resetScrollbar(), $t(e._element).trigger(an.HIDDEN)
                })
            }, e._removeBackdrop = function() {
                this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function(e) {
                var t = this,
                    n = $t(this._element).hasClass(fn) ? fn : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = cn, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(an.CLICK_DISMISS, function(e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                        }), n && we.reflow(this._backdrop), $t(this._backdrop).addClass(hn), !e) return;
                    if (!n) return void e();
                    var i = we.getTransitionDurationFromElement(this._backdrop);
                    $t(this._backdrop).one(we.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    $t(this._backdrop).removeClass(hn);
                    var r = function() {
                        t._removeBackdrop(), e && e()
                    };
                    if ($t(this._element).hasClass(fn)) {
                        var o = we.getTransitionDurationFromElement(this._backdrop);
                        $t(this._backdrop).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else e && e()
            }, e._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var r = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(gn)),
                        t = [].slice.call(document.querySelectorAll(_n));
                    $t(e).each(function(e, t) {
                        var n = t.style.paddingRight,
                            i = $t(t).css("padding-right");
                        $t(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), $t(t).each(function(e, t) {
                        var n = t.style.marginRight,
                            i = $t(t).css("margin-right");
                        $t(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = $t(document.body).css("padding-right");
                    $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }, e._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(gn));
                $t(e).each(function(e, t) {
                    var n = $t(t).data("padding-right");
                    $t(t).removeData("padding-right"), t.style.paddingRight = n || ""
                });
                var t = [].slice.call(document.querySelectorAll("" + _n));
                $t(t).each(function(e, t) {
                    var n = $t(t).data("margin-right");
                    "undefined" != typeof n && $t(t).css("margin-right", n).removeData("margin-right")
                });
                var n = $t(document.body).data("padding-right");
                $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, e._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = ln, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, r._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var e = $t(this).data(tn),
                        t = l({}, on, $t(this).data(), "object" == typeof n && n ? n : {});
                    if (e || (e = new r(this, t), $t(this).data(tn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](i)
                    } else t.show && e.show(i)
                })
            }, s(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return on
                }
            }]), r
        }(), $t(document).on(an.CLICK_DATA_API, pn, function(e) {
            var t, n = this,
                i = we.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var r = $t(t).data(tn) ? "toggle" : l({}, $t(t).data(), $t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var o = $t(t).one(an.SHOW, function(e) {
                e.isDefaultPrevented() || o.one(an.HIDDEN, function() {
                    $t(n).is(":visible") && n.focus()
                })
            });
            vn._jQueryInterface.call($t(t), r, this)
        }), $t.fn[en] = vn._jQueryInterface, $t.fn[en].Constructor = vn, $t.fn[en].noConflict = function() {
            return $t.fn[en] = rn, vn._jQueryInterface
        }, vn),
        Ki = (En = "tooltip", wn = "." + (bn = "bs.tooltip"), Cn = (yn = t).fn[En], Tn = "bs-tooltip", Sn = new RegExp("(^|\\s)" + Tn + "\\S+", "g"), In = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(An = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            }),
            selector: !(Dn = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, Nn = "out", kn = {
            HIDE: "hide" + wn,
            HIDDEN: "hidden" + wn,
            SHOW: (On = "show") + wn,
            SHOWN: "shown" + wn,
            INSERTED: "inserted" + wn,
            CLICK: "click" + wn,
            FOCUSIN: "focusin" + wn,
            FOCUSOUT: "focusout" + wn,
            MOUSEENTER: "mouseenter" + wn,
            MOUSELEAVE: "mouseleave" + wn
        }, xn = "fade", Pn = "show", Ln = ".tooltip-inner", jn = ".arrow", Hn = "hover", Mn = "focus", Fn = "click", Wn = "manual", Rn = function() {
            function i(e, t) {
                if ("undefined" == typeof Ct) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var e = i.prototype;
            return e.enable = function() {
                this._isEnabled = !0
            }, e.disable = function() {
                this._isEnabled = !1
            }, e.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = yn(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (yn(this.getTipElement()).hasClass(Pn)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function() {
                clearTimeout(this._timeout), yn.removeData(this.element, this.constructor.DATA_KEY), yn(this.element).off(this.constructor.EVENT_KEY), yn(this.element).closest(".modal").off("hide.bs.modal"), this.tip && yn(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function() {
                var t = this;
                if ("none" === yn(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = yn.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    yn(this.element).trigger(e);
                    var n = yn.contains(this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(),
                        r = we.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && yn(i).addClass(xn);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        s = this._getAttachment(o);
                    this.addAttachmentClass(s);
                    var a = !1 === this.config.container ? document.body : yn(document).find(this.config.container);
                    yn(i).data(this.constructor.DATA_KEY, this), yn.contains(this.element.ownerDocument.documentElement, this.tip) || yn(i).appendTo(a), yn(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ct(this.element, i, {
                        placement: s,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: jn
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            t._handlePopperPlacementChange(e)
                        }
                    }), yn(i).addClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().on("mouseover", null, yn.noop);
                    var l = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, yn(t.element).trigger(t.constructor.Event.SHOWN), e === Nn && t._leave(null, t)
                    };
                    if (yn(this.tip).hasClass(xn)) {
                        var c = we.getTransitionDurationFromElement(this.tip);
                        yn(this.tip).one(we.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }
            }, e.hide = function(e) {
                var t = this,
                    n = this.getTipElement(),
                    i = yn.Event(this.constructor.Event.HIDE),
                    r = function() {
                        t._hoverState !== On && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), yn(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                if (yn(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (yn(n).removeClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().off("mouseover", null, yn.noop), this._activeTrigger[Fn] = !1, this._activeTrigger[Mn] = !1, this._activeTrigger[Hn] = !1, yn(this.tip).hasClass(xn)) {
                        var o = we.getTransitionDurationFromElement(n);
                        yn(n).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, e.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function() {
                return Boolean(this.getTitle())
            }, e.addAttachmentClass = function(e) {
                yn(this.getTipElement()).addClass(Tn + "-" + e)
            }, e.getTipElement = function() {
                return this.tip = this.tip || yn(this.config.template)[0], this.tip
            }, e.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(yn(e.querySelectorAll(Ln)), this.getTitle()), yn(e).removeClass(xn + " " + Pn)
            }, e.setElementContent = function(e, t) {
                var n = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? n ? yn(t).parent().is(e) || e.empty().append(t) : e.text(yn(t).text()) : e[n ? "html" : "text"](t)
            }, e.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, e._getAttachment = function(e) {
                return An[e.toUpperCase()]
            }, e._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(e) {
                    if ("click" === e) yn(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                        return i.toggle(e)
                    });
                    else if (e !== Wn) {
                        var t = e === Hn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = e === Hn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        yn(i.element).on(t, i.config.selector, function(e) {
                            return i._enter(e)
                        }).on(n, i.config.selector, function(e) {
                            return i._leave(e)
                        })
                    }
                    yn(i.element).closest(".modal").on("hide.bs.modal", function() {
                        return i.hide()
                    })
                }), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Mn : Hn] = !0), yn(t.getTipElement()).hasClass(Pn) || t._hoverState === On ? t._hoverState = On : (clearTimeout(t._timeout), t._hoverState = On, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    t._hoverState === On && t.show()
                }, t.config.delay.show) : t.show())
            }, e._leave = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Mn : Hn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Nn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    t._hoverState === Nn && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, e._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, e._getConfig = function(e) {
                return "number" == typeof(e = l({}, this.constructor.Default, yn(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), we.typeCheckConfig(En, e, this.constructor.DefaultType), e
            }, e._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, e._cleanTipClass = function() {
                var e = yn(this.getTipElement()),
                    t = e.attr("class").match(Sn);
                null !== t && t.length && e.removeClass(t.join(""))
            }, e._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, e._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (yn(e).removeClass(xn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = yn(this).data(bn),
                        t = "object" == typeof n && n;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), yn(this).data(bn, e)), "string" == typeof n)) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return In
                }
            }, {
                key: "NAME",
                get: function() {
                    return En
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return bn
                }
            }, {
                key: "Event",
                get: function() {
                    return kn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return wn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Dn
                }
            }]), i
        }(), yn.fn[En] = Rn._jQueryInterface, yn.fn[En].Constructor = Rn, yn.fn[En].noConflict = function() {
            return yn.fn[En] = Cn, Rn._jQueryInterface
        }, Rn),
        Qi = (Bn = "popover", Kn = "." + (qn = "bs.popover"), Qn = (Un = t).fn[Bn], Yn = "bs-popover", Vn = new RegExp("(^|\\s)" + Yn + "\\S+", "g"), zn = l({}, Ki.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Gn = l({}, Ki.DefaultType, {
            content: "(string|element|function)"
        }), Jn = "fade", Xn = ".popover-header", $n = ".popover-body", ei = {
            HIDE: "hide" + Kn,
            HIDDEN: "hidden" + Kn,
            SHOW: (Zn = "show") + Kn,
            SHOWN: "shown" + Kn,
            INSERTED: "inserted" + Kn,
            CLICK: "click" + Kn,
            FOCUSIN: "focusin" + Kn,
            FOCUSOUT: "focusout" + Kn,
            MOUSEENTER: "mouseenter" + Kn,
            MOUSELEAVE: "mouseleave" + Kn
        }, ti = function(e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(e) {
                Un(this.getTipElement()).addClass(Yn + "-" + e)
            }, r.getTipElement = function() {
                return this.tip = this.tip || Un(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var e = Un(this.getTipElement());
                this.setElementContent(e.find(Xn), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find($n), t), e.removeClass(Jn + " " + Zn)
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var e = Un(this.getTipElement()),
                    t = e.attr("class").match(Vn);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = Un(this).data(qn),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), Un(this).data(qn, e)), "string" == typeof n)) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return zn
                }
            }, {
                key: "NAME",
                get: function() {
                    return Bn
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return qn
                }
            }, {
                key: "Event",
                get: function() {
                    return ei
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Kn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Gn
                }
            }]), i
        }(Ki), Un.fn[Bn] = ti._jQueryInterface, Un.fn[Bn].Constructor = ti, Un.fn[Bn].noConflict = function() {
            return Un.fn[Bn] = Qn, ti._jQueryInterface
        }, ti),
        Yi = (ii = "scrollspy", oi = "." + (ri = "bs.scrollspy"), si = (ni = t).fn[ii], ai = {
            offset: 10,
            method: "auto",
            target: ""
        }, li = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, ci = {
            ACTIVATE: "activate" + oi,
            SCROLL: "scroll" + oi,
            LOAD_DATA_API: "load" + oi + ".data-api"
        }, ui = "dropdown-item", fi = "active", hi = '[data-spy="scroll"]', di = ".active", pi = ".nav, .list-group", mi = ".nav-link", gi = ".nav-item", _i = ".list-group-item", vi = ".dropdown", yi = ".dropdown-item", Ei = ".dropdown-toggle", bi = "offset", wi = "position", Ci = function() {
            function n(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, ni(this._scrollElement).on(ci.SCROLL, function(e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }
            var e = n.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? bi : wi,
                    r = "auto" === this._config.method ? e : this._config.method,
                    o = r === wi ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var t, n = we.getSelectorFromElement(e);
                    if (n && (t = document.querySelector(n)), t) {
                        var i = t.getBoundingClientRect();
                        if (i.width || i.height) return [ni(t)[r]().top + o, n]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, e.dispose = function() {
                ni.removeData(this._element, ri), ni(this._scrollElement).off(oi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function(e) {
                if ("string" != typeof(e = l({}, ai, "object" == typeof e && e ? e : {})).target) {
                    var t = ni(e.target).attr("id");
                    t || (t = we.getUID(ii), ni(e.target).attr("id", t)), e.target = "#" + t
                }
                return we.typeCheckConfig(ii, e, li), e
            }, e._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",");
                e = e.map(function(e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                });
                var n = ni([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass(ui) ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(pi).prev(mi + ", " + _i).addClass(fi), n.parents(pi).prev(gi).children(mi).addClass(fi)), ni(this._scrollElement).trigger(ci.ACTIVATE, {
                    relatedTarget: t
                })
            }, e._clear = function() {
                var e = [].slice.call(document.querySelectorAll(this._selector));
                ni(e).filter(di).removeClass(fi)
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = ni(this).data(ri);
                    if (e || (e = new n(this, "object" == typeof t && t), ni(this).data(ri, e)), "string" == typeof t) {
                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return ai
                }
            }]), n
        }(), ni(window).on(ci.LOAD_DATA_API, function() {
            for (var e = [].slice.call(document.querySelectorAll(hi)), t = e.length; t--;) {
                var n = ni(e[t]);
                Ci._jQueryInterface.call(n, n.data())
            }
        }), ni.fn[ii] = Ci._jQueryInterface, ni.fn[ii].Constructor = Ci, ni.fn[ii].noConflict = function() {
            return ni.fn[ii] = si, Ci._jQueryInterface
        }, Ci),
        Vi = (Di = "." + (Si = "bs.tab"), Ai = (Ti = t).fn.tab, Ii = {
            HIDE: "hide" + Di,
            HIDDEN: "hidden" + Di,
            SHOW: "show" + Di,
            SHOWN: "shown" + Di,
            CLICK_DATA_API: "click" + Di + ".data-api"
        }, Oi = "dropdown-menu", Ni = "active", ki = "disabled", xi = "fade", Pi = "show", Li = ".dropdown", ji = ".nav, .list-group", Hi = ".active", Mi = "> li > .active", Fi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wi = ".dropdown-toggle", Ri = "> .dropdown-menu .active", Ui = function() {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Ti(this._element).hasClass(Ni) || Ti(this._element).hasClass(ki))) {
                    var e, i, t = Ti(this._element).closest(ji)[0],
                        r = we.getSelectorFromElement(this._element);
                    if (t) {
                        var o = "UL" === t.nodeName ? Mi : Hi;
                        i = (i = Ti.makeArray(Ti(t).find(o)))[i.length - 1]
                    }
                    var s = Ti.Event(Ii.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = Ti.Event(Ii.SHOW, {
                            relatedTarget: i
                        });
                    if (i && Ti(i).trigger(s), Ti(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (e = document.querySelector(r)), this._activate(this._element, t);
                        var l = function() {
                            var e = Ti.Event(Ii.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                t = Ti.Event(Ii.SHOWN, {
                                    relatedTarget: i
                                });
                            Ti(i).trigger(e), Ti(n._element).trigger(t)
                        };
                        e ? this._activate(e, e.parentNode, l) : l()
                    }
                }
            }, e.dispose = function() {
                Ti.removeData(this._element, Si), this._element = null
            }, e._activate = function(e, t, n) {
                var i = this,
                    r = ("UL" === t.nodeName ? Ti(t).find(Mi) : Ti(t).children(Hi))[0],
                    o = n && r && Ti(r).hasClass(xi),
                    s = function() {
                        return i._transitionComplete(e, r, n)
                    };
                if (r && o) {
                    var a = we.getTransitionDurationFromElement(r);
                    Ti(r).one(we.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, e._transitionComplete = function(e, t, n) {
                if (t) {
                    Ti(t).removeClass(Pi + " " + Ni);
                    var i = Ti(t.parentNode).find(Ri)[0];
                    i && Ti(i).removeClass(Ni), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (Ti(e).addClass(Ni), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), we.reflow(e), Ti(e).addClass(Pi), e.parentNode && Ti(e.parentNode).hasClass(Oi)) {
                    var r = Ti(e).closest(Li)[0];
                    if (r) {
                        var o = [].slice.call(r.querySelectorAll(Wi));
                        Ti(o).addClass(Ni)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = Ti(this),
                        t = e.data(Si);
                    if (t || (t = new i(this), e.data(Si, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), i
        }(), Ti(document).on(Ii.CLICK_DATA_API, Fi, function(e) {
            e.preventDefault(), Ui._jQueryInterface.call(Ti(this), "show")
        }), Ti.fn.tab = Ui._jQueryInterface, Ti.fn.tab.Constructor = Ui, Ti.fn.tab.noConflict = function() {
            return Ti.fn.tab = Ai, Ui._jQueryInterface
        }, Ui);
    ! function(e) {
        if ("undefined" == typeof e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = we, e.Alert = Ce, e.Button = Te, e.Carousel = Se, e.Collapse = De, e.Dropdown = Bi, e.Modal = qi, e.Popover = Qi, e.Scrollspy = Yi, e.Tab = Vi, e.Tooltip = Ki, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=bootstrap.bundle.min.js.map