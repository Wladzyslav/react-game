(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	[, , , , , , , , , ,
		function (e, t, n) {
			e.exports = n(25)
		}, , , , ,
		function (e, t, n) {}, ,
		function (e, t, n) {}, ,
		function (e, t, n) {}, ,
		function (e, t, n) {}, ,
		function (e, t, n) {}, ,
		function (e, t, n) {
			"use strict";
			n.r(t);
			var a = n(0),
				r = n.n(a),
				c = n(9),
				i = n.n(c),
				l = (n(15), n(1)),
				o = n(2),
				u = n(4),
				s = n(3),
				m = n(5),
				f = n(7),
				p = n(6),
				h = {
					TWO_PLAYERS: 0,
					VERSUS_COMPUTER: 1
				},
				y = ["O", "X"],
				T = {
					HUMAN: 0,
					COMPUTER: 1
				},
				v = function (e) {
					return e.map(function (e, t) {
						return [e, t]
					}).filter(function (e) {
						return null === e[0]
					})
				},
				E = function (e) {
					return v(e).length > 0
				},
				b = function (e) {
					for (var t = [
						[0, 1, 2],
						[3, 4, 5],
						[6, 7, 8],
						[0, 3, 6],
						[1, 4, 7],
						[2, 5, 8],
						[0, 4, 8],
						[2, 4, 6]
					], n = 0; n < t.length; n++) {
						var a = Object(p.a)(t[n], 3),
							r = a[0],
							c = a[1],
							i = a[2];
						if (null !== e[r] && e[r] === e[c] && e[r] === e[i]) return {
							position: n >= 0 && n <= 2 ? "h h".concat(n) : n >= 3 && n <= 5 ? "v v".concat(n - 3) : "d".concat(n - 6),
							iconType: e[r],
							isTie: null
						}
					}
					return {
						position: "",
						iconType: null,
						isTie: !E(e) || null
					}
				},
				d = function (e, t) {
					return e + Math.floor(Math.random() * (t - e))
				},
				O = function (e, t, n) {
					return [].concat(Object(f.a)(e.slice(0, t)), [n], Object(f.a)(e.slice(t + 1, e.length)))
				},
				S = function (e) {
					var t = v(e);
					return t.length > 0 ? t[d(0, t.length)][1] : null
				},
				g = function e(t, n, a, r) {
					var c = function (e, t) {
						for (var n = [
							[0, 1, 2],
							[3, 4, 5],
							[6, 7, 8],
							[0, 3, 6],
							[1, 4, 7],
							[2, 5, 8],
							[0, 4, 8],
							[2, 4, 6]
						], a = 0; a < n.length; a++) {
							var r = Object(p.a)(n[a], 3),
								c = r[0],
								i = r[1],
								l = r[2];
							if (null !== e[c] && e[c] === e[i] && e[c] === e[l]) return e[c] === t ? 10 : -10
						}
						return 0
					}(t, a);
					if (10 === c) return c - n;
					if (-10 === c) return c + n;
					if (!E(t)) return 0;
					var i, l = t.length;
					if (r) {
						i = -1e3;
						for (var o = 0; o < l; o++) {
							if (null === t[o]) {
								var u = O(t, o, a);
								i = Math.max(i, e(u, n + 1, a, !r))
							}
						}
					} else {
						i = 1e3;
						for (var s = 0; s < l; s++) {
							if (null === t[s]) {
								var m = O(t, s, 1 - a);
								i = Math.min(i, e(m, n + 1, a, !r))
							}
						}
					}
					return i
				},
				j = function (e, t) {
					for (var n = -1e3, a = null, r = e.length, c = 0; c < r; c++) {
						if (null === e[c]) {
							var i = O(e, c, t),
								l = g(i, 0, t, !1);
							l > n && (n = l, a = c)
						}
					}
					return a
				},
				x = 500,
				P = r.a.createContext(),
				R = function (e) {
					function t() {
						var e, n;
						Object(l.a)(this, t);
						for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++) r[c] = arguments[c];
						return (n = Object(u.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r)))).initState = {
							gameType: h.TWO_PLAYERS,
							currentIcon: d(0, 2),
							playerTurn: d(0, 2),
							cells: new Array(9).fill(null),
							gameState: {
								position: "",
								iconType: null,
								isTie: null
							}
						}, n.state = {
							gameType: n.initState.gameType,
							currentIcon: n.initState.currentIcon,
							playerTurn: n.initState.playerTurn,
							cells: n.initState.cells,
							gameState: n.initState.gameState,
							changeType: function (e) {
								n.state.gameType !== e && n.initNewGame(e)
							},
							humanPlay: function (e) {
								n.humanPlay(e)
							},
							newGame: function () {
								n.initNewGame(n.state.gameType)
							}
						}, n.initGame = function () {
							n.state.gameType === h.VERSUS_COMPUTER && n.state.playerTurn === T.COMPUTER && (n.timeout && clearTimeout(n.timeout), n.timeout = setTimeout(function () {
								var e = S(n.state.cells);
								n.computerPlay(e)
							}, x))
						}, n.initNewGame = function () {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.initState.gameType;
							n.setState(function () {
								return {
									gameType: e,
									currentIcon: d(0, 2),
									playerTurn: d(0, 2),
									cells: n.initState.cells,
									gameState: n.initState.gameState
								}
							}, function () {
								n.initGame()
							})
						}, n.applyState = function (e, t) {
							var n = e.cells,
								a = 1 - e.currentIcon,
								r = 1 - e.playerTurn,
								c = O(n, t, e.currentIcon);
							return {
								gameState: b(c),
								currentIcon: a,
								playerTurn: r,
								cells: c
							}
						}, n.humanPlay = function (e) {
							"" !== n.state.gameState.position || null !== n.state.cells[e] || n.state.gameType !== h.TWO_PLAYERS && n.state.playerTurn !== T.HUMAN || n.setState(function (t) {
								return n.applyState(t, e)
							}, function () {
								"" === n.state.gameState.position && n.state.gameType === h.VERSUS_COMPUTER && n.state.playerTurn === T.COMPUTER && setTimeout(function () {
									n.makeAIMove()
								}, x)
							})
						}, n.computerPlay = function (e) {
							"" === n.state.gameState.position && null === n.state.cells[e] && n.state.gameType === h.VERSUS_COMPUTER && n.state.playerTurn === T.COMPUTER && n.setState(function (t) {
								return n.applyState(t, e)
							})
						}, n.makeAIMove = function () {
							var e = j(n.state.cells, n.state.currentIcon);
							null !== e && n.computerPlay(e)
						}, n
					}
					return Object(m.a)(t, e), Object(o.a)(t, [{
						key: "componentDidMount",
						value: function () {
							this.initGame()
						}
					}, {
						key: "render",
						value: function () {
							return r.a.createElement(P.Provider, {
								value: this.state
							}, this.props.children)
						}
					}]), t
				}(a.Component),
				C = (n(17), function (e) {
					var t = e.value,
						n = e.name;
					return r.a.createElement(P.Consumer, null, function (e) {
						return r.a.createElement("li", {
							onClick: function () {
								return e.changeType(t)
							},
							className: t === e.gameType ? "active" : ""
						}, n)
					})
				}),
				w = function (e) {
					function t() {
						return Object(l.a)(this, t), Object(u.a)(this, Object(s.a)(t).apply(this, arguments))
					}
					return Object(m.a)(t, e), Object(o.a)(t, [{
						key: "render",
						value: function () {
							var e = this;
							return r.a.createElement("header", {
								className: "header"
							}, r.a.createElement("h1", null, "Tic Tac Toe"), r.a.createElement("ul", null, r.a.createElement(C, {
								value: h.TWO_PLAYERS,
								name: "2 Players"
							}), r.a.createElement(C, {
								value: h.VERSUS_COMPUTER,
								name: "Versus Computer"
							})), r.a.createElement("div", null, r.a.createElement("button", {
								onClick: function () {
									return e.context.newGame()
								}
							}, "New Game")))
						}
					}]), t
				}(a.Component);
			w.contextType = P;
			var M = w,
				N = (n(19), function (e) {
					return r.a.createElement(P.Consumer, null, function (t) {
						var n = t.cells[e.index],
							a = null !== n ? y[n] : "I",
							c = "I" !== a ? "done" : "";
						return r.a.createElement("button", {
							className: "cell cell-".concat(e.index, " ").concat(c),
							onClick: function () {
								return t.humanPlay(e.index)
							}
						}, a)
					})
				}),
				U = function (e) {
					function t(e) {
						var n;
						return Object(l.a)(this, t), (n = Object(u.a)(this, Object(s.a)(t).call(this, e))).boardRef = r.a.createRef(), n
					}
					return Object(m.a)(t, e), Object(o.a)(t, [{
						key: "componentDidUpdate",
						value: function () {
							var e = this;
							"" !== this.context.gameState.position ? setTimeout(function () {
								e.boardRef.current.classList.add("full")
							}, 50) : this.boardRef.current.classList.remove("full")
						}
					}, {
						key: "render",
						value: function () {
							return r.a.createElement("div", {
								className: "board ".concat(this.context.gameState.position),
								ref: this.boardRef
							}, r.a.createElement("div", {
								className: "board-row"
							}, r.a.createElement(N, {
								index: 0
							}), r.a.createElement(N, {
								index: 1
							}), r.a.createElement(N, {
								index: 2
							})), r.a.createElement("div", {
								className: "board-row"
							}, r.a.createElement(N, {
								index: 3
							}), r.a.createElement(N, {
								index: 4
							}), r.a.createElement(N, {
								index: 5
							})), r.a.createElement("div", {
								className: "board-row"
							}, r.a.createElement(N, {
								index: 6
							}), r.a.createElement(N, {
								index: 7
							}), r.a.createElement(N, {
								index: 8
							})))
						}
					}]), t
				}(a.Component);
			U.contextType = P;
			var k = function (e) {
				function t() {
					return Object(l.a)(this, t), Object(u.a)(this, Object(s.a)(t).apply(this, arguments))
				}
				return Object(m.a)(t, e), Object(o.a)(t, [{
					key: "render",
					value: function () {
						var e = "",
							t = this.context.currentIcon;
						return e = this.context.gameState.isTie ? "Tie!" : this.context.gameType === h.TWO_PLAYERS ? "" === this.context.gameState.position ? "It's player(".concat(y[t], ") turn") : "Player(".concat(y[1 - t], ") wins!") : "" === this.context.gameState.position ? this.context.playerTurn === T.HUMAN ? "It's your turn" : "It's computer turn" : this.context.playerTurn === T.HUMAN ? "Computer win!" : "You win!", r.a.createElement("main", {
							className: "main"
						}, r.a.createElement("div", {
							className: "info"
						}, e), r.a.createElement(U, null))
					}
				}]), t
			}(a.Component);
			k.contextType = P;
			var I = k,
				A = (n(21), function (e) {
					function t() {
						return Object(l.a)(this, t), Object(u.a)(this, Object(s.a)(t).apply(this, arguments))
					}
					return Object(m.a)(t, e), Object(o.a)(t, [{
						key: "render",
						value: function () {
							return r.a.createElement("footer", {
								className: "footer"
							}, r.a.createElement("a", {
								href: "",
								target: "_blank",
								rel: "noreferrer noopener"
							}, ""), " ", r.a.createElement("a", {
								href: "",
								target: "_blank",
								rel: "noreferrer noopener"
							}, ""))
						}
					}]), t
				}(a.Component)),
				_ = (n(23), function (e) {
					function t() {
						return Object(l.a)(this, t), Object(u.a)(this, Object(s.a)(t).apply(this, arguments))
					}
					return Object(m.a)(t, e), Object(o.a)(t, [{
						key: "render",
						value: function () {
							return r.a.createElement(R, null, r.a.createElement("div", {
								className: "app"
							}, r.a.createElement(M, null), r.a.createElement(I, null), r.a.createElement(A, null)))
						}
					}]), t
				}(a.Component));
			i.a.render(r.a.createElement(_, null), document.getElementById("root"))
		}
	],
	[
		[10, 2, 1]
	]
]);
//# sourceMappingURL=main.8c8e1627.chunk.js.map