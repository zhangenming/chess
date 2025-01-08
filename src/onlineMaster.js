!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).GoEasy = t())
})(this, function () {
  'use strict'
  var e =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {}
  function t(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
  }
  function n(e) {
    if (e.__esModule) return e
    var t = Object.defineProperty({}, '__esModule', { value: !0 })
    return (
      Object.keys(e).forEach(function (n) {
        var o = Object.getOwnPropertyDescriptor(e, n)
        Object.defineProperty(
          t,
          n,
          o.get
            ? o
            : {
                enumerable: !0,
                get: function () {
                  return e[n]
                },
              }
        )
      }),
      t
    )
  }
  var o = {},
    i = {}
  function r() {
    r = function () {
      return t
    }
    var e,
      t = {},
      n = Object.prototype,
      o = n.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value
        },
      s = 'function' == typeof Symbol ? Symbol : {},
      a = s.iterator || '@@iterator',
      c = s.asyncIterator || '@@asyncIterator',
      u = s.toStringTag || '@@toStringTag'
    function l(e, t, n) {
      return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t]
    }
    try {
      l({}, '')
    } catch (e) {
      l = function (e, t, n) {
        return (e[t] = n)
      }
    }
    function f(e, t, n, o) {
      var r = t && t.prototype instanceof v ? t : v,
        s = Object.create(r.prototype),
        a = new P(o || [])
      return i(s, '_invoke', { value: T(e, n, a) }), s
    }
    function d(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    t.wrap = f
    var p = 'suspendedStart',
      h = 'suspendedYield',
      m = 'executing',
      y = 'completed',
      g = {}
    function v() {}
    function S() {}
    function E() {}
    var _ = {}
    l(_, a, function () {
      return this
    })
    var b = Object.getPrototypeOf,
      M = b && b(b(A([])))
    M && M !== n && o.call(M, a) && (_ = M)
    var w = (E.prototype = v.prototype = Object.create(_))
    function C(e) {
      ;['next', 'throw', 'return'].forEach(function (t) {
        l(e, t, function (e) {
          return this._invoke(t, e)
        })
      })
    }
    function I(e, t) {
      function n(i, r, s, a) {
        var c = d(e[i], e, r)
        if ('throw' !== c.type) {
          var u = c.arg,
            l = u.value
          return l && 'object' == typeof l && o.call(l, '__await')
            ? t.resolve(l.__await).then(
                function (e) {
                  n('next', e, s, a)
                },
                function (e) {
                  n('throw', e, s, a)
                }
              )
            : t.resolve(l).then(
                function (e) {
                  ;(u.value = e), s(u)
                },
                function (e) {
                  return n('throw', e, s, a)
                }
              )
        }
        a(c.arg)
      }
      var r
      i(this, '_invoke', {
        value: function (e, o) {
          function i() {
            return new t(function (t, i) {
              n(e, o, t, i)
            })
          }
          return (r = r ? r.then(i, i) : i())
        },
      })
    }
    function T(t, n, o) {
      var i = p
      return function (r, s) {
        if (i === m) throw new Error('Generator is already running')
        if (i === y) {
          if ('throw' === r) throw s
          return { value: e, done: !0 }
        }
        for (o.method = r, o.arg = s; ; ) {
          var a = o.delegate
          if (a) {
            var c = k(a, o)
            if (c) {
              if (c === g) continue
              return c
            }
          }
          if ('next' === o.method) o.sent = o._sent = o.arg
          else if ('throw' === o.method) {
            if (i === p) throw ((i = y), o.arg)
            o.dispatchException(o.arg)
          } else 'return' === o.method && o.abrupt('return', o.arg)
          i = m
          var u = d(t, n, o)
          if ('normal' === u.type) {
            if (((i = o.done ? y : h), u.arg === g)) continue
            return { value: u.arg, done: o.done }
          }
          'throw' === u.type && ((i = y), (o.method = 'throw'), (o.arg = u.arg))
        }
      }
    }
    function k(t, n) {
      var o = n.method,
        i = t.iterator[o]
      if (i === e)
        return (
          (n.delegate = null),
          ('throw' === o && t.iterator.return && ((n.method = 'return'), (n.arg = e), k(t, n), 'throw' === n.method)) ||
            ('return' !== o && ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + o + "' method")))),
          g
        )
      var r = d(i, t.iterator, n.arg)
      if ('throw' === r.type) return (n.method = 'throw'), (n.arg = r.arg), (n.delegate = null), g
      var s = r.arg
      return s
        ? s.done
          ? ((n[t.resultName] = s.value), (n.next = t.nextLoc), 'return' !== n.method && ((n.method = 'next'), (n.arg = e)), (n.delegate = null), g)
          : s
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), g)
    }
    function N(e) {
      var t = { tryLoc: e[0] }
      1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t)
    }
    function R(e) {
      var t = e.completion || {}
      ;(t.type = 'normal'), delete t.arg, (e.completion = t)
    }
    function P(e) {
      ;(this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(N, this), this.reset(!0)
    }
    function A(t) {
      if (t || '' === t) {
        var n = t[a]
        if (n) return n.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var i = -1,
            r = function n() {
              for (; ++i < t.length; ) if (o.call(t, i)) return (n.value = t[i]), (n.done = !1), n
              return (n.value = e), (n.done = !0), n
            }
          return (r.next = r)
        }
      }
      throw new TypeError(typeof t + ' is not iterable')
    }
    return (
      (S.prototype = E),
      i(w, 'constructor', { value: E, configurable: !0 }),
      i(E, 'constructor', { value: S, configurable: !0 }),
      (S.displayName = l(E, u, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor
        return !!t && (t === S || 'GeneratorFunction' === (t.displayName || t.name))
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, E) : ((e.__proto__ = E), l(e, u, 'GeneratorFunction')), (e.prototype = Object.create(w)), e
        )
      }),
      (t.awrap = function (e) {
        return { __await: e }
      }),
      C(I.prototype),
      l(I.prototype, c, function () {
        return this
      }),
      (t.AsyncIterator = I),
      (t.async = function (e, n, o, i, r) {
        void 0 === r && (r = Promise)
        var s = new I(f(e, n, o, i), r)
        return t.isGeneratorFunction(n)
          ? s
          : s.next().then(function (e) {
              return e.done ? e.value : s.next()
            })
      }),
      C(w),
      l(w, u, 'Generator'),
      l(w, a, function () {
        return this
      }),
      l(w, 'toString', function () {
        return '[object Generator]'
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = []
        for (var o in t) n.push(o)
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var o = n.pop()
              if (o in t) return (e.value = o), (e.done = !1), e
            }
            return (e.done = !0), e
          }
        )
      }),
      (t.values = A),
      (P.prototype = {
        constructor: P,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(R),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
        },
        stop: function () {
          this.done = !0
          var e = this.tryEntries[0].completion
          if ('throw' === e.type) throw e.arg
          return this.rval
        },
        dispatchException: function (t) {
          if (this.done) throw t
          var n = this
          function i(o, i) {
            return (a.type = 'throw'), (a.arg = t), (n.next = o), i && ((n.method = 'next'), (n.arg = e)), !!i
          }
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var s = this.tryEntries[r],
              a = s.completion
            if ('root' === s.tryLoc) return i('end')
            if (s.tryLoc <= this.prev) {
              var c = o.call(s, 'catchLoc'),
                u = o.call(s, 'finallyLoc')
              if (c && u) {
                if (this.prev < s.catchLoc) return i(s.catchLoc, !0)
                if (this.prev < s.finallyLoc) return i(s.finallyLoc)
              } else if (c) {
                if (this.prev < s.catchLoc) return i(s.catchLoc, !0)
              } else {
                if (!u) throw new Error('try statement without catch or finally')
                if (this.prev < s.finallyLoc) return i(s.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n]
            if (i.tryLoc <= this.prev && o.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
              var r = i
              break
            }
          }
          r && ('break' === e || 'continue' === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null)
          var s = r ? r.completion : {}
          return (s.type = e), (s.arg = t), r ? ((this.method = 'next'), (this.next = r.finallyLoc), g) : this.complete(s)
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
              ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
              : 'normal' === e.type && t && (this.next = t),
            g
          )
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), R(n), g
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t]
            if (n.tryLoc === e) {
              var o = n.completion
              if ('throw' === o.type) {
                var i = o.arg
                R(n)
              }
              return i
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (t, n, o) {
          return (this.delegate = { iterator: A(t), resultName: n, nextLoc: o }), 'next' === this.method && (this.arg = e), g
        },
      }),
      t
    )
  }
  function s(e) {
    var t = (function (e, t) {
      if ('object' != typeof e || !e) return e
      var n = e[Symbol.toPrimitive]
      if (void 0 !== n) {
        var o = n.call(e, t || 'default')
        if ('object' != typeof o) return o
        throw new TypeError('@@toPrimitive must return a primitive value.')
      }
      return ('string' === t ? String : Number)(e)
    })(e, 'string')
    return 'symbol' == typeof t ? t : String(t)
  }
  function a(e) {
    return (
      (a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }),
      a(e)
    )
  }
  function c(e, t, n, o, i, r, s) {
    try {
      var a = e[r](s),
        c = a.value
    } catch (e) {
      return void n(e)
    }
    a.done ? t(c) : Promise.resolve(c).then(o, i)
  }
  function u(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function l(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n]
      ;(o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(e, s(o.key), o)
    }
  }
  function f(e, t, n) {
    return t && l(e.prototype, t), n && l(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
  }
  function d(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, t) {
        var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
        if (null != n) {
          var o,
            i,
            r,
            s,
            a = [],
            c = !0,
            u = !1
          try {
            if (((r = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return
              c = !1
            } else for (; !(c = (o = r.call(n)).done) && (a.push(o.value), a.length !== t); c = !0);
          } catch (e) {
            ;(u = !0), (i = e)
          } finally {
            try {
              if (!c && null != n.return && ((s = n.return()), Object(s) !== s)) return
            } finally {
              if (u) throw i
            }
          }
          return a
        }
      })(e, t) ||
      p(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function p(e, t) {
    if (e) {
      if ('string' == typeof e) return h(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      return (
        'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0
      )
    }
  }
  function h(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n]
    return o
  }
  function m(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
    if (!n) {
      if (Array.isArray(e) || (n = p(e)) || (t && e && 'number' == typeof e.length)) {
        n && (e = n)
        var o = 0,
          i = function () {}
        return {
          s: i,
          n: function () {
            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }
          },
          e: function (e) {
            throw e
          },
          f: i,
        }
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    var r,
      s = !0,
      a = !1
    return {
      s: function () {
        n = n.call(e)
      },
      n: function () {
        var e = n.next()
        return (s = e.done), e
      },
      e: function (e) {
        ;(a = !0), (r = e)
      },
      f: function () {
        try {
          s || null == n.return || n.return()
        } finally {
          if (a) throw r
        }
      },
    }
  }
  var y = {},
    g = function (e, t) {
      return (
        (g =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }),
        g(e, t)
      )
    }
  function v(e, t) {
    if ('function' != typeof t && null !== t) throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null')
    function n() {
      this.constructor = e
    }
    g(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
  }
  var S = function () {
    return (
      (S =
        Object.assign ||
        function (e) {
          for (var t, n = 1, o = arguments.length; n < o; n++)
            for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          return e
        }),
      S.apply(this, arguments)
    )
  }
  function E(e, t) {
    var n = {}
    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o])
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (o = Object.getOwnPropertySymbols(e); i < o.length; i++)
        t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
    }
    return n
  }
  function _(e, t, n, o) {
    var i,
      r = arguments.length,
      s = r < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, n)) : o
    if ('object' === ('undefined' == typeof Reflect ? 'undefined' : a(Reflect)) && 'function' == typeof Reflect.decorate)
      s = Reflect.decorate(e, t, n, o)
    else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(t, n, s) : i(t, n)) || s)
    return r > 3 && s && Object.defineProperty(t, n, s), s
  }
  function b(e, t) {
    return function (n, o) {
      t(n, o, e)
    }
  }
  function M(e, t) {
    if ('object' === ('undefined' == typeof Reflect ? 'undefined' : a(Reflect)) && 'function' == typeof Reflect.metadata)
      return Reflect.metadata(e, t)
  }
  function w(e, t, n, o) {
    return new (n || (n = Promise))(function (i, r) {
      function s(e) {
        try {
          c(o.next(e))
        } catch (e) {
          r(e)
        }
      }
      function a(e) {
        try {
          c(o.throw(e))
        } catch (e) {
          r(e)
        }
      }
      function c(e) {
        var t
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t)
                })).then(s, a)
      }
      c((o = o.apply(e, t || [])).next())
    })
  }
  function C(e, t) {
    var n,
      o,
      i,
      r,
      s = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1]
          return i[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (r = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (r[Symbol.iterator] = function () {
          return this
        }),
      r
    )
    function a(a) {
      return function (c) {
        return (function (a) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; r && ((r = 0), a[0] && (s = 0)), s; )
            try {
              if (
                ((n = 1), o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, a[1])).done)
              )
                return i
              switch (((o = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                case 0:
                case 1:
                  i = a
                  break
                case 4:
                  return s.label++, { value: a[1], done: !1 }
                case 5:
                  s.label++, (o = a[1]), (a = [0])
                  continue
                case 7:
                  ;(a = s.ops.pop()), s.trys.pop()
                  continue
                default:
                  if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                    s = 0
                    continue
                  }
                  if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                    s.label = a[1]
                    break
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    ;(s.label = i[1]), (i = a)
                    break
                  }
                  if (i && s.label < i[2]) {
                    ;(s.label = i[2]), s.ops.push(a)
                    break
                  }
                  i[2] && s.ops.pop(), s.trys.pop()
                  continue
              }
              a = t.call(e, s)
            } catch (e) {
              ;(a = [6, e]), (o = 0)
            } finally {
              n = i = 0
            }
          if (5 & a[0]) throw a[1]
          return { value: a[0] ? a[1] : void 0, done: !0 }
        })([a, c])
      }
    }
  }
  var I = Object.create
    ? function (e, t, n, o) {
        void 0 === o && (o = n)
        var i = Object.getOwnPropertyDescriptor(t, n)
        ;(i && !('get' in i ? !t.__esModule : i.writable || i.configurable)) ||
          (i = {
            enumerable: !0,
            get: function () {
              return t[n]
            },
          }),
          Object.defineProperty(e, o, i)
      }
    : function (e, t, n, o) {
        void 0 === o && (o = n), (e[o] = t[n])
      }
  function T(e, t) {
    for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || I(t, e, n)
  }
  function k(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      o = 0
    if (n) return n.call(e)
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e }
        },
      }
    throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
  }
  function N(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!n) return e
    var o,
      i,
      r = n.call(e),
      s = []
    try {
      for (; (void 0 === t || t-- > 0) && !(o = r.next()).done; ) s.push(o.value)
    } catch (e) {
      i = { error: e }
    } finally {
      try {
        o && !o.done && (n = r.return) && n.call(r)
      } finally {
        if (i) throw i.error
      }
    }
    return s
  }
  function R() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(N(arguments[t]))
    return e
  }
  function P() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length
    var o = Array(e),
      i = 0
    for (t = 0; t < n; t++) for (var r = arguments[t], s = 0, a = r.length; s < a; s++, i++) o[i] = r[s]
    return o
  }
  function A(e, t, n) {
    if (n || 2 === arguments.length)
      for (var o, i = 0, r = t.length; i < r; i++) (!o && i in t) || (o || (o = Array.prototype.slice.call(t, 0, i)), (o[i] = t[i]))
    return e.concat(o || Array.prototype.slice.call(t))
  }
  function O(e) {
    return this instanceof O ? ((this.v = e), this) : new O(e)
  }
  function D(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
    var o,
      i = n.apply(e, t || []),
      r = []
    return (
      (o = {}),
      s('next'),
      s('throw'),
      s('return'),
      (o[Symbol.asyncIterator] = function () {
        return this
      }),
      o
    )
    function s(e) {
      i[e] &&
        (o[e] = function (t) {
          return new Promise(function (n, o) {
            r.push([e, t, n, o]) > 1 || a(e, t)
          })
        })
    }
    function a(e, t) {
      try {
        !(function (e) {
          e.value instanceof O ? Promise.resolve(e.value.v).then(c, u) : l(r[0][2], e)
        })(i[e](t))
      } catch (e) {
        l(r[0][3], e)
      }
    }
    function c(e) {
      a('next', e)
    }
    function u(e) {
      a('throw', e)
    }
    function l(e, t) {
      e(t), r.shift(), r.length && a(r[0][0], r[0][1])
    }
  }
  function x(e) {
    var t, n
    return (
      (t = {}),
      o('next'),
      o('throw', function (e) {
        throw e
      }),
      o('return'),
      (t[Symbol.iterator] = function () {
        return this
      }),
      t
    )
    function o(o, i) {
      t[o] = e[o]
        ? function (t) {
            return (n = !n) ? { value: O(e[o](t)), done: !1 } : i ? i(t) : t
          }
        : i
    }
  }
  function G(e) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
    var t,
      n = e[Symbol.asyncIterator]
    return n
      ? n.call(e)
      : ((e = k(e)),
        (t = {}),
        o('next'),
        o('throw'),
        o('return'),
        (t[Symbol.asyncIterator] = function () {
          return this
        }),
        t)
    function o(n) {
      t[n] =
        e[n] &&
        function (t) {
          return new Promise(function (o, i) {
            ;(function (e, t, n, o) {
              Promise.resolve(o).then(function (t) {
                e({ value: t, done: n })
              }, t)
            })(o, i, (t = e[n](t)).done, t.value)
          })
        }
    }
  }
  function U(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
  }
  var L = Object.create
    ? function (e, t) {
        Object.defineProperty(e, 'default', { enumerable: !0, value: t })
      }
    : function (e, t) {
        e.default = t
      }
  function F(e) {
    if (e && e.__esModule) return e
    var t = {}
    if (null != e) for (var n in e) 'default' !== n && Object.prototype.hasOwnProperty.call(e, n) && I(t, e, n)
    return L(t, e), t
  }
  function B(e) {
    return e && e.__esModule ? e : { default: e }
  }
  function q(e, t, n, o) {
    if ('a' === n && !o) throw new TypeError('Private accessor was defined without a getter')
    if ('function' == typeof t ? e !== t || !o : !t.has(e))
      throw new TypeError('Cannot read private member from an object whose class did not declare it')
    return 'm' === n ? o : 'a' === n ? o.call(e) : o ? o.value : t.get(e)
  }
  function j(e, t, n, o, i) {
    if ('m' === o) throw new TypeError('Private method is not writable')
    if ('a' === o && !i) throw new TypeError('Private accessor was defined without a setter')
    if ('function' == typeof t ? e !== t || !i : !t.has(e))
      throw new TypeError('Cannot write private member to an object whose class did not declare it')
    return 'a' === o ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n
  }
  function V(e, t) {
    if (null === t || ('object' !== a(t) && 'function' != typeof t)) throw new TypeError("Cannot use 'in' operator on non-object")
    return 'function' == typeof e ? t === e : e.has(t)
  }
  function H(e, t, n) {
    if (null != t) {
      if ('object' !== a(t) && 'function' != typeof t) throw new TypeError('Object expected.')
      var o
      if (n) {
        if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.')
        o = t[Symbol.asyncDispose]
      }
      if (void 0 === o) {
        if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.')
        o = t[Symbol.dispose]
      }
      if ('function' != typeof o) throw new TypeError('Object not disposable.')
      e.stack.push({ value: t, dispose: o, async: n })
    } else n && e.stack.push({ async: !0 })
    return t
  }
  var z =
    'function' == typeof SuppressedError
      ? SuppressedError
      : function (e, t, n) {
          var o = new Error(n)
          return (o.name = 'SuppressedError'), (o.error = e), (o.suppressed = t), o
        }
  function W(e) {
    function t(t) {
      ;(e.error = e.hasError ? new z(t, e.error, 'An error was suppressed during disposal.') : t), (e.hasError = !0)
    }
    return (function n() {
      for (; e.stack.length; ) {
        var o = e.stack.pop()
        try {
          var i = o.dispose && o.dispose.call(o.value)
          if (o.async)
            return Promise.resolve(i).then(n, function (e) {
              return t(e), n()
            })
        } catch (e) {
          t(e)
        }
      }
      if (e.hasError) throw e.error
    })()
  }
  var J = {
      __extends: v,
      __assign: S,
      __rest: E,
      __decorate: _,
      __param: b,
      __metadata: M,
      __awaiter: w,
      __generator: C,
      __createBinding: I,
      __exportStar: T,
      __values: k,
      __read: N,
      __spread: R,
      __spreadArrays: P,
      __spreadArray: A,
      __await: O,
      __asyncGenerator: D,
      __asyncDelegator: x,
      __asyncValues: G,
      __makeTemplateObject: U,
      __importStar: F,
      __importDefault: B,
      __classPrivateFieldGet: q,
      __classPrivateFieldSet: j,
      __classPrivateFieldIn: V,
      __addDisposableResource: H,
      __disposeResources: W,
    },
    X = Object.freeze({
      __proto__: null,
      __extends: v,
      get __assign() {
        return S
      },
      __rest: E,
      __decorate: _,
      __param: b,
      __esDecorate: function (e, t, n, o, i, r) {
        function s(e) {
          if (void 0 !== e && 'function' != typeof e) throw new TypeError('Function expected')
          return e
        }
        for (
          var c,
            u = o.kind,
            l = 'getter' === u ? 'get' : 'setter' === u ? 'set' : 'value',
            f = !t && e ? (o.static ? e : e.prototype) : null,
            d = t || (f ? Object.getOwnPropertyDescriptor(f, o.name) : {}),
            p = !1,
            h = n.length - 1;
          h >= 0;
          h--
        ) {
          var m = {}
          for (var y in o) m[y] = 'access' === y ? {} : o[y]
          for (var y in o.access) m.access[y] = o.access[y]
          m.addInitializer = function (e) {
            if (p) throw new TypeError('Cannot add initializers after decoration has completed')
            r.push(s(e || null))
          }
          var g = (0, n[h])('accessor' === u ? { get: d.get, set: d.set } : d[l], m)
          if ('accessor' === u) {
            if (void 0 === g) continue
            if (null === g || 'object' !== a(g)) throw new TypeError('Object expected')
            ;(c = s(g.get)) && (d.get = c), (c = s(g.set)) && (d.set = c), (c = s(g.init)) && i.unshift(c)
          } else (c = s(g)) && ('field' === u ? i.unshift(c) : (d[l] = c))
        }
        f && Object.defineProperty(f, o.name, d), (p = !0)
      },
      __runInitializers: function (e, t, n) {
        for (var o = arguments.length > 2, i = 0; i < t.length; i++) n = o ? t[i].call(e, n) : t[i].call(e)
        return o ? n : void 0
      },
      __propKey: function (e) {
        return 'symbol' === a(e) ? e : ''.concat(e)
      },
      __setFunctionName: function (e, t, n) {
        return (
          'symbol' === a(t) && (t = t.description ? '['.concat(t.description, ']') : ''),
          Object.defineProperty(e, 'name', { configurable: !0, value: n ? ''.concat(n, ' ', t) : t })
        )
      },
      __metadata: M,
      __awaiter: w,
      __generator: C,
      __createBinding: I,
      __exportStar: T,
      __values: k,
      __read: N,
      __spread: R,
      __spreadArrays: P,
      __spreadArray: A,
      __await: O,
      __asyncGenerator: D,
      __asyncDelegator: x,
      __asyncValues: G,
      __makeTemplateObject: U,
      __importStar: F,
      __importDefault: B,
      __classPrivateFieldGet: q,
      __classPrivateFieldSet: j,
      __classPrivateFieldIn: V,
      __addDisposableResource: H,
      __disposeResources: W,
      default: J,
    }),
    Q = n(X)
  !(function (e) {
    ;(e.__esModule = !0), (e.FrameworkDetector = e.Framework = void 0)
    var t,
      n = Q
    !(function (e) {
      ;(e.UNIAPP = 'uniapp'), (e.REACT_NATIVE = 'rn'), (e.COCOS = 'cocos'), (e.UNKNOWN = 'unknown')
    })((t = e.Framework || (e.Framework = {})))
    var o = (function () {
      function e() {
        var e, o, i
        ;(this.framework = null),
          (this.methods = (((e = {})[t.UNIAPP] = this.isUniApp), (e[t.REACT_NATIVE] = this.isReactNative), (e[t.COCOS] = this.isCocos), e))
        var r = this.methods,
          s = Object.keys(r)
        try {
          for (var a = n.__values(s), c = a.next(); !c.done; c = a.next()) {
            var u = c.value
            if ((0, r[u])()) {
              this.framework = u
              break
            }
          }
        } catch (e) {
          o = { error: e }
        } finally {
          try {
            c && !c.done && (i = a.return) && i.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        ;(this.framework = this.framework || t.UNKNOWN), this.framework
      }
      return (
        (e.currentFramework = function () {
          return this.instance || (this.instance = new e()), this.instance.framework
        }),
        (e.prototype.isUniApp = function () {
          try {
            return 'function' == typeof uni.getSystemInfoSync
          } catch (e) {
            return !1
          }
        }),
        (e.prototype.isReactNative = function () {
          try {
            return 'object' === ('undefined' == typeof navigator ? 'undefined' : a(navigator)) && 'ReactNative' === navigator.product
          } catch (e) {
            return !1
          }
        }),
        (e.prototype.isTaro = function () {
          try {
            return void 0 !== process.env.TARO_ENV
          } catch (e) {
            return !1
          }
        }),
        (e.prototype.isCocos = function () {
          try {
            return void 0 !== cc.sys.localStorage
          } catch (e) {
            return !1
          }
        }),
        e
      )
    })()
    e.FrameworkDetector = o
  })(y),
    (i.__esModule = !0),
    (i.RNPlugins = void 0)
  var Y = y,
    K = (function () {
      function e() {}
      return (
        (e.init = function (e) {
          Y.FrameworkDetector.currentFramework() === Y.Framework.REACT_NATIVE &&
            (this.validate(e), (this.platform = e.platform), (this.asyncStorage = e.asyncStorage))
        }),
        (e.validate = function (e) {
          if (!e) throw new Error("'reactNativeOptions' is missing when calling GoEasy.getInstance()")
          if (!e.platform) throw new Error("'platform' is missing in GoEasy 'reactNativeOptions'")
          if (!e.asyncStorage) throw new Error("'asyncStorage' is missing in GoEasy 'reactNativeOptions'")
        }),
        e
      )
    })()
  i.RNPlugins = K
  var $ = {}
  !(function (e) {
    ;(e.__esModule = !0),
      (e.NetworkStatus = void 0),
      (function (e) {
        ;(e.DISCONNECTED = 'disconnected'),
          (e.DISCONNECTING = 'disconnecting'),
          (e.CONNECTING = 'connecting'),
          (e.CONNECTED = 'connected'),
          (e.RECONNECTING = 'reconnecting'),
          (e.RECONNECTED = 'reconnected'),
          (e.EXPIRED_RECONNECTED = 'reconnected'),
          (e.CONNECT_FAILED = 'connect_failed')
      })(e.NetworkStatus || (e.NetworkStatus = {}))
  })($)
  var Z = {}
  !(function (e) {
    ;(e.__esModule = !0),
      (e.CustomerStatusOptions =
        e.User =
        e.AgentOnlineOptions =
        e.ConversationDTO =
        e.MessageStatus =
        e.Scene =
        e.CallBackOptions =
        e.version =
          void 0)
    var t = Q
    e.version = '2.13.8'
    var n,
      o,
      i = function () {}
    ;(e.CallBackOptions = i),
      ((n = e.Scene || (e.Scene = {})).PRIVATE = 'private'),
      (n.GROUP = 'group'),
      (n.SYSTEM = 'system'),
      (n.CS = 'cs'),
      ((o = e.MessageStatus || (e.MessageStatus = {})).NEW = 'new'),
      (o.SENDING = 'sending'),
      (o.SUCCESS = 'success'),
      (o.FAIL = 'fail')
    var r = function () {}
    e.ConversationDTO = r
    var s = (function (e) {
      function n() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return t.__extends(n, e), n
    })(i)
    e.AgentOnlineOptions = s
    var a = function (e, t) {
      ;(this.id = e), (this.data = t)
    }
    e.User = a
    var c = (function (e) {
      function n() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return t.__extends(n, e), n
    })(i)
    e.CustomerStatusOptions = c
  })(Z)
  var ee = {},
    te = {}
  !(function (e) {
    e.__esModule = !0
    var t = (function () {
        function e() {}
        return (
          (e.prototype.isDef = function (e) {
            return !this.isUndef(e)
          }),
          (e.prototype.isUndef = function (e) {
            return null == e
          }),
          (e.prototype.isPrimitive = function (e) {
            return 'string' == typeof e || 'number' == typeof e || 'symbol' === a(e) || 'boolean' == typeof e
          }),
          (e.prototype.isObject = function (e) {
            return null !== e && 'object' === a(e)
          }),
          (e.prototype.isPlainObject = function (e) {
            return '[object Object]' === Object.prototype.toString.call(e)
          }),
          (e.prototype.isRegExp = function (e) {
            return '[object RegExp]' === Object.prototype.toString.call(e)
          }),
          (e.prototype.isValidArrayIndex = function (e) {
            var t = parseFloat(String(e))
            return t >= 0 && Math.floor(t) === t && isFinite(e)
          }),
          (e.prototype.isString = function (e) {
            return 'string' == typeof e
          }),
          (e.prototype.isNumber = function (e) {
            return 'number' == typeof e
          }),
          (e.prototype.isStringOrNumber = function (e) {
            return this.isString(e) || this.isNumber(e)
          }),
          (e.prototype.isArray = function (e) {
            return '[object Array]' === Object.prototype.toString.call(e)
          }),
          (e.prototype.isEmpty = function (e) {
            return this.isArray(e)
              ? 0 === e.length
              : this.isObject(e)
              ? !this.isDef(e)
              : !this.isNumber(e) && (this.isString(e) ? '' === e.trim() : !this.isDef(e))
          }),
          (e.prototype.isNative = function (e) {
            return 'function' == typeof e && /native code/.test(e.toString())
          }),
          (e.prototype.isFunction = function (e) {
            return 'function' == typeof e
          }),
          (e.prototype.isBoolean = function (e) {
            return 'boolean' == typeof e
          }),
          (e.prototype.isTrue = function (e) {
            return !0 === e
          }),
          (e.prototype.isFalse = function (e) {
            return !1 === e
          }),
          (e.prototype.isNull = function (e) {
            return null === e
          }),
          e
        )
      })(),
      n = new t()
    e.default = n
  })(te)
  var ne = {}
  !(function (e) {
    ;(e.__esModule = !0), (e.Platform = e.PlatformDetector = e.PlatformType = void 0)
    var t,
      n = Q,
      o = i
    !(function (e) {
      ;(e.MP_WX = 'mp-wx'),
        (e.MP_WGAME = 'mp-wgame'),
        (e.MP_BYTE = 'mp-byte'),
        (e.MP_BAIDU = 'mp-baidu'),
        (e.MP_ALI = 'mp-ali'),
        (e.BROWSER = 'browser'),
        (e.NODE = 'node'),
        (e.UNI_IOS = 'uni-ios'),
        (e.UNI_ANDROID = 'uni-android'),
        (e.COCOS_IOS = 'cocos-ios'),
        (e.COCOS_ANDROID = 'cocos-android'),
        (e.RN_IOS = 'rn-ios'),
        (e.RN_ANDROID = 'rn-android'),
        (e.UNKNOWN = 'unknown')
    })((t = e.PlatformType || (e.PlatformType = {})))
    var r = (function () {
      function e() {
        var e, o, i
        ;(this.platform = null),
          (this.methods =
            (((e = {})[t.BROWSER] = this.isBrowser),
            (e[t.MP_WX] = this.isMPWX),
            (e[t.MP_WGAME] = this.isMPWeGame),
            (e[t.MP_BYTE] = this.isMPByte),
            (e[t.MP_BAIDU] = this.isMPBaidu),
            (e[t.MP_ALI] = this.isMPAli),
            (e[t.NODE] = this.isNode),
            (e[t.UNI_IOS] = this.isUniAppIOS),
            (e[t.UNI_ANDROID] = this.isUniAppAndroid),
            (e[t.COCOS_IOS] = this.isCocosIOS),
            (e[t.COCOS_ANDROID] = this.isCocosAndroid),
            (e[t.RN_IOS] = this.isRNiOS),
            (e[t.RN_ANDROID] = this.isRNAndroid),
            e))
        var r = this.methods,
          s = Object.keys(r)
        try {
          for (var a = n.__values(s), c = a.next(); !c.done; c = a.next()) {
            var u = c.value
            if ((0, r[u])()) {
              this.platform = u
              break
            }
          }
        } catch (e) {
          o = { error: e }
        } finally {
          try {
            c && !c.done && (i = a.return) && i.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        ;(this.platform = this.platform || t.UNKNOWN), this.platform
      }
      return (
        (e.currentPlatform = function () {
          return this.instance || (this.instance = new e()), e.instance.platform
        }),
        (e.prototype.isBrowser = function () {
          return (
            'undefined' != typeof navigator &&
            'Taro' !== navigator.product &&
            'ReactNative' !== navigator.product &&
            'undefined' == typeof GameGlobal &&
            ('undefined' == typeof cc || null !== cc.sys.browserType) &&
            'undefined' == typeof my &&
            'undefined' == typeof tt &&
            'undefined' == typeof swan
          )
        }),
        (e.prototype.isMPWX = function () {
          return (
            'object' === ('undefined' == typeof wx ? 'undefined' : a(wx)) &&
            'function' == typeof wx.getSystemInfoSync &&
            'undefined' == typeof WebSocket &&
            'undefined' == typeof XMLHttpRequest &&
            'undefined' == typeof plus &&
            'undefined' == typeof tt
          )
        }),
        (e.prototype.isMPWeGame = function () {
          return 'object' === ('undefined' == typeof GameGlobal ? 'undefined' : a(GameGlobal))
        }),
        (e.prototype.isMPByte = function () {
          return 'object' === ('undefined' == typeof tt ? 'undefined' : a(tt)) && 'function' == typeof tt.getSystemInfoSync
        }),
        (e.prototype.isMPBaidu = function () {
          return 'object' === ('undefined' == typeof swan ? 'undefined' : a(swan)) && 'function' == typeof swan.getSystemInfoSync
        }),
        (e.prototype.isMPAli = function () {
          return 'object' === ('undefined' == typeof my ? 'undefined' : a(my)) && 'function' == typeof my.getSystemInfoSync
        }),
        (e.prototype.isNode = function () {
          try {
            return 'node' === process.release.name
          } catch (e) {
            return !1
          }
        }),
        (e.prototype.isUniAppIOS = function () {
          try {
            return 'ios' === uni.getSystemInfoSync().platform && 'app' === uni.getSystemInfoSync().uniPlatform
          } catch (e) {
            return !1
          }
        }),
        (e.prototype.isUniAppAndroid = function () {
          try {
            return 'android' === uni.getSystemInfoSync().platform && 'app' === uni.getSystemInfoSync().uniPlatform
          } catch (e) {
            return !1
          }
        }),
        (e.prototype.isCocosIOS = function () {
          try {
            return 'iOS' === cc.sys.os
          } catch (e) {
            return !1
          }
        }),
        (e.prototype.isCocosAndroid = function () {
          try {
            return 'Android' === cc.sys.os
          } catch (e) {
            return !1
          }
        }),
        (e.prototype.isRNiOS = function () {
          try {
            return 'ios' === o.RNPlugins.platform.OS
          } catch (e) {
            return !1
          }
        }),
        (e.prototype.isRNAndroid = function () {
          try {
            return 'android' === o.RNPlugins.platform.OS
          } catch (e) {
            return !1
          }
        }),
        e
      )
    })()
    e.PlatformDetector = r
    var s = (function () {
      function e() {}
      return (e.type = t), (e.current = r.currentPlatform()), e
    })()
    e.Platform = s
  })(ne)
  var oe = { __esModule: !0, runStatus: void 0 },
    ie = Q,
    re = ne,
    se = (function () {
      function e() {
        var e = this
        ;[new ce(), new ue()].forEach(function (t) {
          if (t.support()) return (e.checker = t), void e.checker.startCheck()
        })
      }
      return (
        (e.prototype.isBackend = function () {
          return this.checker && this.checker.isBackend()
        }),
        (e.prototype.onFrontend = function (e) {
          this.checker.onFrontend(e)
        }),
        e
      )
    })(),
    ae = (function () {
      function e() {}
      return (
        (e.prototype.onFrontend = function (e) {
          this.onFrontendCallback = e
        }),
        e
      )
    })(),
    ce = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.runningBackend = !1), t
      }
      return (
        ie.__extends(t, e),
        (t.prototype.startCheck = function () {
          var e = this
          'object' === ('undefined' == typeof plus ? 'undefined' : a(plus)) &&
            (plus.globalEvent.addEventListener(
              'resume',
              function () {
                ;(e.runningBackend = !1), e.runningBackend, e.onFrontendCallback && e.onFrontendCallback()
              },
              !1
            ),
            plus.globalEvent.addEventListener(
              'pause',
              function () {
                ;(e.runningBackend = !0), e.runningBackend
              },
              !1
            ))
        }),
        (t.prototype.isBackend = function () {
          return this.runningBackend
        }),
        (t.prototype.support = function () {
          var e = re.PlatformDetector.currentPlatform()
          return [re.PlatformType.UNI_IOS, re.PlatformType.UNI_ANDROID].includes(e)
        }),
        t
      )
    })(ae),
    ue = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.runningBackend = !1), t
      }
      return (
        ie.__extends(t, e),
        (t.prototype.startCheck = function () {
          var e = this
          wx.onAppShow(function () {
            e.runningBackend = !1
          }),
            wx.onAppHide(function () {
              e.runningBackend = !0
            })
        }),
        (t.prototype.isBackend = function () {
          return this.runningBackend
        }),
        (t.prototype.support = function () {
          return re.PlatformDetector.currentPlatform() === re.PlatformType.MP_WX
        }),
        t
      )
    })(ae),
    le = new se()
  oe.runStatus = le
  var fe = {}
  !(function (e) {
    ;(e.__esModule = !0),
      (e.RocketTypes = void 0),
      (function (e) {
        ;(e.authorize = 'authorize'),
          (e.manualDisconnect = 'manualDisconnect'),
          (e.subscribe = 'subscribe'),
          (e.unsubscribe = 'unsubscribe'),
          (e.publish = 'publish'),
          (e.ack = 'ack'),
          (e.historyMessages = 'historyMessages'),
          (e.hereNow = 'hereNow'),
          (e.hereNowByUserIds = 'hereNowByUserIds'),
          (e.PUBSUB_PRESENCE_SUBSCRIBE = 'PUBSUB_PRESENCE_SUBSCRIBE'),
          (e.PUBSUB_PRESENCE_UNSUBSCRIBE = 'PUBSUB_PRESENCE_UNSUBSCRIBE'),
          (e.PUBSUB_PRESENCE_HERENOW = 'PUBSUB_PRESENCE_HERENOW'),
          (e.imLastConversations = 'imLastConversations'),
          (e.markPrivateMessageAsRead = 'markPrivateMessageAsRead'),
          (e.markGroupMessageAsRead = 'markGroupMessageAsRead'),
          (e.imGroupOnlineCount = 'imGroupOnlineCount'),
          (e.imHereNow = 'imHereNow'),
          (e.imGroupHereNow = 'imGroupHereNow'),
          (e.publishIM = 'publishIM'),
          (e.subscribeUserPresence = 'subscribeUserPresence'),
          (e.unsubscribeUserPresence = 'unsubscribeUserPresence'),
          (e.subscribeGroupPresence = 'subscribeGroupPresence'),
          (e.unsubscribeGroupPresence = 'unsubscribeGroupPresence'),
          (e.removeConversation = 'removeConversation'),
          (e.topConversation = 'topConversation'),
          (e.imData = 'imData'),
          (e.subscribeGroups = 'subscribeGroups'),
          (e.unsubscribeGroup = 'unsubscribeGroup'),
          (e.IM_DELETE_MESSAGE = 'IM_DELETE_MESSAGE'),
          (e.IM_HISTORY = 'IM_HISTORY'),
          (e.IM_HISTORY_CHANGE = 'IM_HISTORY_CHANGE'),
          (e.IM_RECALL_MESSAGE = 'IM_RECALL_MESSAGE'),
          (e.IM_MARK_AS_READ = 'IM_MARK_AS_READ'),
          (e.CS_PENDING_CONVERSATION = 'CS_PENDING_CONVERSATION'),
          (e.CS_ACCEPT = 'CS_ACCEPT'),
          (e.CS_END = 'CS_END'),
          (e.CS_TRANSFER = 'CS_TRANSFER'),
          (e.CS_AGENTS = 'CS_AGENTS'),
          (e.CS_CUSTOMER_STATUS = 'CS_CUSTOMER_STATUS'),
          (e.CS_MY_TEAMS = 'CS_MY_TEAMS'),
          (e.CS_ONLINE = 'CS_ONLINE'),
          (e.CS_OFFLINE = 'CS_OFFLINE'),
          (e.CS_LIVE_SESSION = 'CS_LIVE_SESSION'),
          (e.CS_QUIT_LIVE = 'CS_QUIT_LIVE'),
          (e.SET_IOS_BADGE = 'SET_IOS_BADGE'),
          (e.MD_CMD = 'MD_CMD')
      })(e.RocketTypes || (e.RocketTypes = {}))
  })(fe)
  var de = {}
  !(function (e) {
    ;(e.__esModule = !0),
      (e.SocketTimeout = void 0),
      (function (e) {
        ;(e[(e.connect = 3e3)] = 'connect'),
          (e[(e.reconnectionDelayMax = 3e3)] = 'reconnectionDelayMax'),
          (e[(e.commonQuerySingle = 2500)] = 'commonQuerySingle'),
          (e[(e.commonQueryTotal = 12e3)] = 'commonQueryTotal'),
          (e[(e.commonRequestSingle = 1700)] = 'commonRequestSingle'),
          (e[(e.commonRequestTotal = 12e3)] = 'commonRequestTotal'),
          (e[(e.commonInfiniteSingle = 1700)] = 'commonInfiniteSingle'),
          (e[(e.commonInfiniteTotal = 864e5)] = 'commonInfiniteTotal')
      })(e.SocketTimeout || (e.SocketTimeout = {}))
  })(de)
  var pe = { __esModule: !0, CallbackUtils: void 0 },
    he = te,
    me = (function () {
      function e() {}
      return (
        (e.onSuccess = function (e, t) {
          he.default.isFunction(e.onSuccess) && e.onSuccess(t)
        }),
        (e.onFailed = function (e, t) {
          if (!he.default.isObject(e) || !he.default.isFunction(e.onFailed)) throw t
          e.onFailed(t)
        }),
        e
      )
    })()
  pe.CallbackUtils = me
  var ye = {},
    ge = { exports: {} }
  !(function (e) {
    function t(e) {
      if (e)
        return (function (e) {
          for (var n in t.prototype) e[n] = t.prototype[n]
          return e
        })(e)
    }
    ;(e.exports = t),
      (t.prototype.on = t.prototype.addEventListener =
        function (e, t) {
          return (this._callbacks = this._callbacks || {}), (this._callbacks['$' + e] = this._callbacks['$' + e] || []).push(t), this
        }),
      (t.prototype.once = function (e, t) {
        function n() {
          this.off(e, n), t.apply(this, arguments)
        }
        return (n.fn = t), this.on(e, n), this
      }),
      (t.prototype.off =
        t.prototype.removeListener =
        t.prototype.removeAllListeners =
        t.prototype.removeEventListener =
          function (e, t) {
            if (((this._callbacks = this._callbacks || {}), 0 == arguments.length)) return (this._callbacks = {}), this
            var n,
              o = this._callbacks['$' + e]
            if (!o) return this
            if (1 == arguments.length) return delete this._callbacks['$' + e], this
            for (var i = 0; i < o.length; i++)
              if ((n = o[i]) === t || n.fn === t) {
                o.splice(i, 1)
                break
              }
            return this
          }),
      (t.prototype.emit = function (e) {
        this._callbacks = this._callbacks || {}
        var t = [].slice.call(arguments, 1),
          n = this._callbacks['$' + e]
        if (n) for (var o = 0, i = (n = n.slice(0)).length; o < i; ++o) n[o].apply(this, t)
        return this
      }),
      (t.prototype.listeners = function (e) {
        return (this._callbacks = this._callbacks || {}), this._callbacks['$' + e] || []
      }),
      (t.prototype.hasListeners = function (e) {
        return !!this.listeners(e).length
      })
  })(ge)
  var ve = ge.exports,
    Se = { exports: {} },
    Ee =
      ('undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
      ('undefined' != typeof msCrypto && 'function' == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))
  if (Ee) {
    var _e = new Uint8Array(16)
    Se.exports = function () {
      return Ee(_e), _e
    }
  } else {
    var be = new Array(16)
    Se.exports = function () {
      for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), (be[t] = (e >>> ((3 & t) << 3)) & 255)
      return be
    }
  }
  for (var Me = [], we = 0; we < 256; ++we) Me[we] = (we + 256).toString(16).substr(1)
  var Ce,
    Ie,
    Te = function (e, t) {
      var n = t || 0,
        o = Me
      return [
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
        '-',
        o[e[n++]],
        o[e[n++]],
        '-',
        o[e[n++]],
        o[e[n++]],
        '-',
        o[e[n++]],
        o[e[n++]],
        '-',
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
        o[e[n++]],
      ].join('')
    },
    ke = Se.exports,
    Ne = Te,
    Re = 0,
    Pe = 0
  var Ae = function (e, t, n) {
      var o = (t && n) || 0,
        i = t || [],
        r = (e = e || {}).node || Ce,
        s = void 0 !== e.clockseq ? e.clockseq : Ie
      if (null == r || null == s) {
        var a = ke()
        null == r && (r = Ce = [1 | a[0], a[1], a[2], a[3], a[4], a[5]]), null == s && (s = Ie = 16383 & ((a[6] << 8) | a[7]))
      }
      var c = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
        u = void 0 !== e.nsecs ? e.nsecs : Pe + 1,
        l = c - Re + (u - Pe) / 1e4
      if ((l < 0 && void 0 === e.clockseq && (s = (s + 1) & 16383), (l < 0 || c > Re) && void 0 === e.nsecs && (u = 0), u >= 1e4))
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
      ;(Re = c), (Pe = u), (Ie = s)
      var f = (1e4 * (268435455 & (c += 122192928e5)) + u) % 4294967296
      ;(i[o++] = (f >>> 24) & 255), (i[o++] = (f >>> 16) & 255), (i[o++] = (f >>> 8) & 255), (i[o++] = 255 & f)
      var d = ((c / 4294967296) * 1e4) & 268435455
      ;(i[o++] = (d >>> 8) & 255),
        (i[o++] = 255 & d),
        (i[o++] = ((d >>> 24) & 15) | 16),
        (i[o++] = (d >>> 16) & 255),
        (i[o++] = (s >>> 8) | 128),
        (i[o++] = 255 & s)
      for (var p = 0; p < 6; ++p) i[o + p] = r[p]
      return t || Ne(i)
    },
    Oe = Se.exports,
    De = Te
  var xe = function (e, t, n) {
      var o = (t && n) || 0
      'string' == typeof e && ((t = 'binary' === e ? new Array(16) : null), (e = null))
      var i = (e = e || {}).random || (e.rng || Oe)()
      if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) for (var r = 0; r < 16; ++r) t[o + r] = i[r]
      return t || De(i)
    },
    Ge = Ae,
    Ue = xe,
    Le = Ue
  ;(Le.v1 = Ge), (Le.v4 = Ue)
  var Fe = Le,
    Be = (function () {
      function e() {
        u(this, e)
      }
      return (
        f(e, [
          {
            key: 'support',
            value: function () {
              return !0
            },
          },
          {
            key: 'getParams',
            value: function () {
              return this.params
            },
          },
          {
            key: 'setData',
            value: function (e) {
              ;(this.active = e.a), (this.data = e.d)
            },
          },
          { key: 'preConnect', value: function (e) {} },
          { key: 'postConnect', value: function () {} },
        ]),
        e
      )
    })(),
    qe = (function () {
      function e() {
        u(this, e)
      }
      return (
        f(e, null, [
          {
            key: 'initModule',
            value: function (e) {
              e.support() && this.modules.set(e.name, e)
            },
          },
          {
            key: 'getParams',
            value: function () {
              return w(
                this,
                void 0,
                void 0,
                r().mark(function e() {
                  var t, n, o, i, s, a
                  return r().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ;(t = {}), (n = m(this.modules)), (e.prev = 2), n.s()
                          case 4:
                            if ((o = n.n()).done) {
                              e.next = 14
                              break
                            }
                            return (i = d(o.value, 2)), (s = i[0]), (a = i[1]), (e.next = 8), a.getParams()
                          case 8:
                            if (((e.t0 = e.sent), e.t0)) {
                              e.next = 11
                              break
                            }
                            e.t0 = null
                          case 11:
                            t[s] = e.t0
                          case 12:
                            e.next = 4
                            break
                          case 14:
                            e.next = 19
                            break
                          case 16:
                            ;(e.prev = 16), (e.t1 = e.catch(2)), n.e(e.t1)
                          case 19:
                            return (e.prev = 19), n.f(), e.finish(19)
                          case 22:
                            return e.abrupt('return', t)
                          case 23:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this,
                    [[2, 16, 19, 22]]
                  )
                })
              )
            },
          },
          {
            key: 'setDatas',
            value: function (e) {
              var t = this
              Object.keys(e).forEach(function (n) {
                t.modules.get(n).setData(e[n])
              })
            },
          },
          {
            key: 'preConnect',
            value: function (e) {
              this.modules.forEach(function (t, n) {
                t.preConnect(e)
              })
            },
          },
          {
            key: 'postConnect',
            value: function () {
              this.modules.forEach(function (e, t) {
                e.postConnect()
              })
            },
          },
        ]),
        e
      )
    })()
  ;(qe.Module = Be), (qe.modules = new Map())
  var je,
    Ve,
    He = ve,
    ze = (function () {
      function e() {
        u(this, e), (this.emitter = new He())
      }
      return (
        f(e, [
          {
            key: 'on',
            value: function (e, t) {
              return this.emitter.on(e, t), this
            },
          },
          {
            key: 'once',
            value: function (e, t) {
              return this.emitter.once(e, t), this
            },
          },
          {
            key: 'off',
            value: function (e, t) {
              return this.emitter.off(e, t), this
            },
          },
          {
            key: 'fire',
            value: function (e, t) {
              return this.emitter.emit(e, t), this
            },
          },
        ]),
        e
      )
    })(),
    We = (function () {
      function e() {
        u(this, e), (this.eventDriver = new ze())
      }
      return (
        f(e, [
          {
            key: 'on',
            value: function (e, t) {
              this.eventDriver.on(e, t)
            },
          },
          {
            key: 'off',
            value: function (e, t) {
              this.eventDriver.off(e, t)
            },
          },
          {
            key: 'fire',
            value: function (e, t) {
              this.eventDriver.fire(e, t)
            },
          },
        ]),
        e
      )
    })(),
    Je = new ((function () {
      function e() {
        u(this, e)
      }
      return (
        f(e, [
          {
            key: 'isDef',
            value: function (e) {
              return !this.isUndef(e)
            },
          },
          {
            key: 'isUndef',
            value: function (e) {
              return null == e
            },
          },
          {
            key: 'isPrimitive',
            value: function (e) {
              return 'string' == typeof e || 'number' == typeof e || 'symbol' == a(e) || 'boolean' == typeof e
            },
          },
          {
            key: 'isObject',
            value: function (e) {
              return null !== e && 'object' == a(e)
            },
          },
          {
            key: 'isPlainObject',
            value: function (e) {
              return '[object Object]' === Object.prototype.toString.call(e)
            },
          },
          {
            key: 'isRegExp',
            value: function (e) {
              return '[object RegExp]' === Object.prototype.toString.call(e)
            },
          },
          {
            key: 'isValidArrayIndex',
            value: function (e) {
              var t = parseFloat(String(e))
              return t >= 0 && Math.floor(t) === t && isFinite(e)
            },
          },
          {
            key: 'isString',
            value: function (e) {
              return 'string' == typeof e
            },
          },
          {
            key: 'isNumber',
            value: function (e) {
              return 'number' == typeof e
            },
          },
          {
            key: 'isStringOrNumber',
            value: function (e) {
              return this.isString(e) || this.isNumber(e)
            },
          },
          {
            key: 'isArray',
            value: function (e) {
              return '[object Array]' === Object.prototype.toString.call(e)
            },
          },
          {
            key: 'isEmpty',
            value: function (e) {
              return this.isArray(e)
                ? 0 === e.length
                : this.isObject(e)
                ? !this.isDef(e)
                : !this.isNumber(e) && (this.isString(e) ? '' === e.trim() : !this.isDef(e))
            },
          },
          {
            key: 'isNative',
            value: function (e) {
              return 'function' == typeof e && /native code/.test(e.toString())
            },
          },
          {
            key: 'isFunction',
            value: function (e) {
              return 'function' == typeof e
            },
          },
          {
            key: 'isBoolean',
            value: function (e) {
              return 'boolean' == typeof e
            },
          },
          {
            key: 'isTrue',
            value: function (e) {
              return !0 === e
            },
          },
          {
            key: 'isFalse',
            value: function (e) {
              return !1 === e
            },
          },
          {
            key: 'isNull',
            value: function (e) {
              return null === e
            },
          },
        ]),
        e
      )
    })())(),
    Xe = ve,
    Qe = (function () {
      function e() {
        u(this, e), (this.emitter = new Xe())
      }
      return (
        f(e, [
          {
            key: 'on',
            value: function (e, t) {
              if (!Je.isString(e)) throw Error('event require a string.')
              if (!Je.isFunction(t)) throw Error('callback must be a function')
              this.emitter.on(e, t)
            },
          },
          {
            key: 'fire',
            value: function (e, t) {
              this.emitter.emit(e, t)
            },
          },
          {
            key: 'off',
            value: function (e, t) {
              this.emitter.off(e, t)
            },
          },
        ]),
        e
      )
    })(),
    Ye = (function () {
      function e() {
        u(this, e)
      }
      return (
        f(e, null, [
          {
            key: 'init',
            value: function (e, t, n, o, i, r) {
              ;(this.Socket = e), (this.N = t), (this.Member = n), (this.v = o), (this.Platform = i), (this.GModules = r)
            },
          },
        ]),
        e
      )
    })(),
    Ke = Fe,
    $e = (function () {
      function e() {
        u(this, e)
      }
      return (
        f(e, null, [
          {
            key: 'get',
            value: function () {
              return Ke.v1().replace(/-/g, '')
            },
          },
        ]),
        e
      )
    })()
  ;((Ve = je || (je = {})).WRITE = 'WRITE'), (Ve.READ = 'READ'), (Ve.NONE = 'NONE')
  var Ze = (function () {
      function e(t) {
        var n = this
        u(this, e),
          (this.permission = je.NONE),
          (this.singleTimeout = 0),
          (this.totalTimeout = 0),
          (this.startTime = 0),
          (this.complete = !1),
          (this.retried = 0),
          (this.unique = !1),
          (this.uuid = $e.get()),
          (this.name = t.name),
          (this.params = t.params),
          (this.permission = t.permission),
          (this.totalTimeout = t.totalTimeout),
          (this.singleTimeout = t.singleTimeout),
          t.unique && (this.unique = t.unique),
          (this.success = function (e) {
            n.complete || (n.end(), t.success(e))
          }),
          (this.fail = function (e) {
            n.complete || (n.end(), t.fail(e))
          })
      }
      return (
        f(e, [
          {
            key: 'start',
            value: function () {
              ;(this.startTime = Date.now()), this.initAutoTimeout()
            },
          },
          {
            key: 'end',
            value: function () {
              ;(this.complete = !0), clearTimeout(this.timeoutHandler)
            },
          },
          {
            key: 'initAutoTimeout',
            value: function () {
              var e = this
              this.timeoutHandler = setTimeout(function () {
                e.complete || e.fail({ resultCode: 408, content: 'Host unreachable or timeout' })
              }, this.totalTimeout)
            },
          },
        ]),
        e
      )
    })(),
    et = n(
      Object.freeze({
        __proto__: null,
        AbstractEventCenter: We,
        ApiEventCenter: Qe,
        EmitterEventDriver: ze,
        G: Ye,
        GModule: Be,
        GModules: qe,
        get Permission() {
          return je
        },
        Rocket: Ze,
        UUID: $e,
      })
    )
  ;(ye.__esModule = !0), (ye.GNModule = void 0)
  var nt = Q,
    ot = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        nt.__extends(t, e),
        (t.init = function () {
          return (this.module = new t()), (this.module.name = this.GN_MODULE_NAME), this.module
        }),
        (t.setRegId = function (e, t) {
          if (e) {
            this.module.regIdPromise = e
            var n = t
            this.module.params = { v: { npv: n } }
          }
        }),
        (t.prototype.preConnect = function (e) {
          this.wxmpId = e.wxmpId
        }),
        (t.prototype.getParams = function () {
          return nt.__awaiter(this, void 0, void 0, function () {
            var e, t
            return nt.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  if (((this.params = this.params || {}), !this.regIdPromise)) return [3, 4]
                  n.label = 1
                case 1:
                  return n.trys.push([1, 3, , 4]), (e = this.params), [4, this.regIdPromise]
                case 2:
                  return (e.regId = n.sent()), [3, 4]
                case 3:
                  return (t = n.sent()), console.warn('Failed to register the Manufacturers Push service:' + JSON.stringify(t)), [3, 4]
                case 4:
                  return (this.params.wxmpId = this.wxmpId), [2, this.params]
              }
            })
          })
        }),
        (t.GN_MODULE_NAME = 'GN'),
        t
      )
    })(et.GModule)
  ;(ye.GNModule = ot), (ee.__esModule = !0), (ee.GN = void 0)
  var it = te,
    rt = ne,
    st = oe,
    at = fe,
    ct = de,
    ut = pe,
    lt = ye,
    ft = et,
    dt = (function () {
      function e() {}
      return (
        (e.init = function (e) {
          this.allowNotification = !0 === e
          var t = lt.GNModule.init()
          ft.GModules.initModule(t),
            this.supportAppNotification() &&
              ((this.uniappPlugin = uni.requireNativePlugin('GoEasy-Uniapp')),
              this.uniappPlugin
                ? ((this.regIdPromise = this.askRegId()), (this.v = this.uniappPlugin.v()), lt.GNModule.setRegId(this.regIdPromise, this.v))
                : console.warn('No GoEasy-Uniapp Native Plugin.'),
              this.setClientBadge(0))
        }),
        (e.addAssembler = function (e) {
          this.payloadAssemblers.push(e)
        }),
        (e.assemblePayload = function (e) {
          var t = this.payloadAssemblers.find(function (t) {
            return t.support(e)
          })
          return t ? t.assemble(e) : e
        }),
        (e.createLocalNotification = function (t, n, o, i, r) {
          st.runStatus.isBackend() &&
            ((o.g = 1),
            'undefined' != typeof plus &&
              (i
                ? (this.uniappPlugin && this.uniappPlugin.playSound(i), plus.push.createMessage(n, JSON.stringify(o), { title: t, sound: 'none' }))
                : plus.push.createMessage(n, JSON.stringify(o), { title: t }),
              '+1' === r && this.setClientBadge(e.badge + 1)))
        }),
        (e.setBadge = function (t) {
          var n = this
          if (!Number.isInteger(t.badge) || t.badge < 0) ut.CallbackUtils.onFailed(t, 'badge must be an integer greater than or equal to 0.')
          else if (e.supportAppNotification())
            if (this.uniappPlugin && rt.PlatformDetector.currentPlatform() === rt.PlatformType.UNI_IOS) {
              var o = new ft.Rocket({
                name: at.RocketTypes.SET_IOS_BADGE,
                params: { badge: t.badge },
                unique: !0,
                singleTimeout: ct.SocketTimeout.commonRequestSingle,
                totalTimeout: ct.SocketTimeout.commonRequestTotal,
                permission: ft.Permission.WRITE,
                success: function () {
                  ut.CallbackUtils.onSuccess(t), n.setClientBadge(t.badge)
                },
                fail: function (e) {
                  ut.CallbackUtils.onFailed(t, e.content)
                },
              })
              ft.G.Socket.e(o)
            } else ut.CallbackUtils.onSuccess(t), this.setClientBadge(t.badge)
        }),
        (e.setClientBadge = function (t) {
          'vivo' !== plus.device.vendor && ((e.badge = t), plus.runtime.setBadgeNumber(t))
        }),
        (e.askRegId = function () {
          var e = this,
            t = null,
            n = 0,
            o = (function o() {
              return new Promise(function (i, r) {
                e.uniappPlugin.regId(
                  function (e) {
                    i(e)
                  },
                  function (i) {
                    if (!(1e6 === i.data.code && n <= 10)) return clearTimeout(t), r(i)
                    t = setTimeout(function () {
                      n++, (e.regIdPromise = o())
                    }, 3500)
                  }
                )
              })
            })()
          return o
        }),
        (e.getRegIdPromise = function () {
          return this.regIdPromise
        }),
        (e.supportAppNotification = function () {
          var e = rt.PlatformDetector.currentPlatform()
          return this.allowNotification && (e === rt.PlatformType.UNI_ANDROID || e === rt.PlatformType.UNI_IOS)
        }),
        (e.listenPlusClickNotification = function () {
          var e = this
          plus.push.addEventListener('click', function (t) {
            try {
              if (t) {
                var n = 'string' == typeof t.payload ? JSON.parse(t.payload) : t.payload
                if (e.availableIntent(n)) {
                  var o = e.assemblePayload(n)
                  plus.push.clear(), e.onClickNotificationCallback(o)
                }
              }
            } catch (e) {}
          })
        }),
        (e.availableIntent = function (e) {
          return e && Object.keys(e).length && e.g && 1 === parseInt(e.g)
        }),
        (e.getIntentData = function () {
          var e = this
          this.uniappPlugin.getIntentData(function (t) {
            if (e.availableIntent(t)) {
              var n = e.assemblePayload(t),
                o = rt.PlatformDetector.currentPlatform()
              plus.push.clear(), o === rt.PlatformType.UNI_ANDROID && e.uniappPlugin.clearAll(), e.onClickNotificationCallback(n)
            }
          })
        }),
        (e.listenClick = function () {
          var e = this
          this.listenPlusClickNotification()
          var t = rt.PlatformDetector.currentPlatform()
          this.uniappPlugin &&
            t === rt.PlatformType.UNI_ANDROID &&
            (this.getIntentData(),
            st.runStatus.onFrontend(function () {
              e.getIntentData()
            }))
        }),
        (e.onClickNotification = function (t) {
          if (e.supportAppNotification()) {
            if (!it.default.isFunction(t)) throw new Error('The arguments must be a function.')
            null === this.onClickNotificationCallback
              ? ((this.onClickNotificationCallback = t), this.listenClick())
              : console.warn('The onClickNotification event has been listened on. Please do not listen to it more than once.')
          } else console.warn("The current environment doesn't support or allowNotification is false.")
        }),
        (e.uniappPlugin = null),
        (e.v = null),
        (e.regIdPromise = null),
        (e.onClickNotificationCallback = null),
        (e.payloadAssemblers = new Array()),
        e
      )
    })()
  ee.GN = dt
  var pt = {},
    ht = {},
    mt = {},
    yt = {}
  !(function (e) {
    ;(e.__esModule = !0), (e.default = function () {})
  })(yt)
  var gt = {}
  !(function (e) {
    e.__esModule = !0
    var t = te,
      n = (function () {
        function e() {}
        return (
          (e.prototype.validateId = function (e, n) {
            if (t.default.isEmpty(e)) throw { code: 400, content: ' '.concat(n, ' is required.') }
            if (!t.default.isString(e)) throw { code: 400, content: 'TypeError: '.concat(n, ' require string.') }
          }),
          (e.prototype.validateIdArray = function (e, n) {
            if (!Array.isArray(e) || 0 === e.length) throw { code: 400, content: 'TypeError: '.concat(n, ' require array.') }
            if (e.length > 100) throw { code: 400, content: ''.concat(n, ' is over max length 100.') }
            for (var o = 0; o < e.length; o++) {
              if (!t.default.isStringOrNumber(e[o])) throw { code: 400, content: 'TypeError: '.concat(n, ' item require string or number.') }
              if ((t.default.isNumber(e[o]) && (e[o] = e[o].toString()), 0 == e[o].length))
                throw { code: 400, content: ''.concat(n, ' has empty item.') }
            }
            if (Array.from(new Set(e)).length < e.length) throw { code: 400, content: 'Duplicate element in '.concat(n) }
          }),
          (e.prototype.validateChannel = function (e, n) {
            if (t.default.isEmpty(e)) throw { code: 400, content: ' '.concat(n, ' is required.') }
            if (!t.default.isStringOrNumber(e)) throw { code: 400, content: 'TypeError: '.concat(n, ' require string or number.') }
          }),
          (e.prototype.validateChannelArray = function (e, t) {
            this.validateIdArray(e, t)
          }),
          (e.prototype.validateChannelAndChannels = function (e, n) {
            var o = !t.default.isEmpty(e),
              i = !t.default.isEmpty(n)
            if (!o && !i) throw { code: 400, content: 'channel is required.' }
            if (o && i) throw { code: 400, content: 'subscribe to either channel or channels, not both.' }
            o && this.validateChannel(e, 'channel'), i && this.validateChannelArray(n, 'channels')
          }),
          (e.prototype.validateCallbackOptions = function (e) {
            if (!t.default.isObject(e)) throw { code: 400, content: 'bad parameters' }
          }),
          (e.prototype.validateNotification = function (e) {
            function n(e, n, o) {
              if (!(t.default.isString(e[n]) && e[n].length <= o))
                throw { code: 400, content: 'notification.'.concat(n, ' must be a string of no more than ').concat(o, ' characters') }
            }
            function o(e, n, o, i) {
              var r = e[n]
              if (t.default.isObject(r) && t.default.isDef(r[o])) {
                var s = { code: 400, content: 'notification.vendorOptions.'.concat(n, '.').concat(o, ' require a ').concat(i, '}') },
                  a = r[o]
                if ('string' === i && !t.default.isString(a)) throw s
                if ('number' === i && !t.default.isNumber(a)) throw s
              }
            }
            if (!t.default.isObject(e)) throw { code: 400, content: 'TypeError: notification requires an object.' }
            if ((n(e, 'title', 32), n(e, 'body', 50), t.default.isDef(e.sound) && !t.default.isString(e.sound)))
              throw { code: 400, content: 'notification.sound must be a string' }
            if (t.default.isDef(e.badge) && !t.default.isString(e.badge)) throw { code: 400, content: 'notification.badge must be a string' }
            e.badge = e.badge || '0'
            var i = e.vendorOptions
            t.default.isObject(i) &&
              (o(i, 'huawei', 'category', 'string'),
              o(i, 'xiaomi', 'channel_id', 'string'),
              o(i, 'oppo', 'channel_id', 'string'),
              o(i, 'vivo', 'classification', 'number'),
              o(i, 'vivo', 'category', 'string'))
          }),
          (e.prototype.validateValIsEmpty = function (e, n) {
            if (t.default.isUndef(e) || t.default.isEmpty(e)) throw { code: 400, content: ''.concat(n, ' is empty') }
          }),
          (e.prototype.validateWXMPTemplateMsg = function (e) {
            if (t.default.isObject(e)) {
              if (!t.default.isString(e.template_id)) throw { code: 400, content: 'template_id must be string.' }
              if (!t.default.isEmpty(e.url) && !t.default.isString(e.url)) throw { code: 400, content: 'url must be string' }
              if (!(t.default.isEmpty(e.miniprogram) || (t.default.isString(e.miniprogram.appid) && t.default.isString(e.miniprogram.pagepath))))
                throw { code: 400, content: 'miniprogram.appid and miniprogram.pagepath must be strings.' }
              if (!t.default.isObject(e.data)) throw { code: 400, content: 'data requires an object.' }
            } else if (t.default.isPrimitive(e)) throw { code: 400, content: 'wxmpTemplateMsg must be an object.' }
          }),
          (e.prototype.validateObject = function (e, n) {
            if (t.default.isUndef(e) || !t.default.isObject(e)) throw { code: 400, content: n + ' must be an object.' }
          }),
          (e.prototype.validateString = function (e, n) {
            if (t.default.isUndef(e) || !t.default.isString(e)) throw { code: 400, content: n + ' must be a string.' }
          }),
          e
        )
      })(),
      o = new n()
    e.default = o
  })(gt)
  var vt = {}
  !(function (e) {
    ;(e.__esModule = !0),
      (e.default = function e(t) {
        if (null === t || 'object' !== a(t) || 'isActiveClone' in t) return t
        var n = t instanceof Array ? [] : {}
        for (var o in t) 'object' === a(t[o]) ? (n[o] = e(t[o])) : (n[o] = t[o])
        return n
      })
  })(vt),
    (function (e) {
      e.__esModule = !0
      var t = yt,
        n = te,
        o = de,
        i = fe,
        r = gt,
        s = et,
        a = vt,
        c = (function () {
          function e() {}
          return (
            (e.prototype.publish = function (e) {
              n.default.isFunction(e.onFailed) || (e.onFailed = t.default),
                n.default.isFunction(e.onSuccess) || (e.onSuccess = t.default),
                this.validate(e),
                (e.channel = e.channel.toString())
              var r = { channel: e.channel, content: e.message, nt: e.notification, at: e.accessToken, guid: s.UUID.get(), q: e.qos }
              e.wxmpTemplateMsg &&
                ((r.wxmpTemplateMsg = (0, a.default)(e.wxmpTemplateMsg)), (r.wxmpTemplateMsg.data = JSON.stringify(r.wxmpTemplateMsg.data)))
              var c = new s.Rocket({
                name: i.RocketTypes.publish,
                params: r,
                unique: !0,
                singleTimeout: o.SocketTimeout.commonRequestSingle,
                totalTimeout: o.SocketTimeout.commonRequestTotal,
                permission: s.Permission.WRITE,
                success: function (t) {
                  e.onSuccess({ code: 200, content: 'ok' })
                },
                fail: function (t) {
                  e.onFailed({ code: t.resultCode, content: t.content })
                },
              })
              s.G.Socket.e(c)
            }),
            (e.prototype.validate = function (e) {
              if ((r.default.validateChannel(e.channel, 'channel'), n.default.isEmpty(e.message)))
                throw { code: 400, content: 'message is required.' }
              if (!n.default.isString(e.message)) throw { code: 400, content: 'TypeError: message requires string.' }
              if (e.message.length > 1e4) throw { code: 400, content: 'Message over max length 10000.' }
              if (e.qos && !(e.qos in [0, 1])) throw { code: 400, content: 'Qos must be 0 or 1.' }
              e.wxmpTemplateMsg && r.default.validateWXMPTemplateMsg(e.wxmpTemplateMsg),
                n.default.isDef(e.notification) && r.default.validateNotification(e.notification)
            }),
            e
          )
        })()
      e.default = c
    })(mt)
  var St = {},
    Et = { __esModule: !0, Subscription: void 0 },
    _t = te,
    bt = function (e) {
      if (((this.options = e), (this.channels = e.channels || [e.channel]), !_t.default.isEmpty(e.channel))) {
        var t = e.channel.toString()
        this.channels = [t]
      }
      _t.default.isEmpty(e.channels) || (this.channels = e.channels.toString().split(','))
    }
  Et.Subscription = bt
  var Mt = {}
  !(function (e) {
    ;(e.__esModule = !0),
      (e.RemoteEvents = void 0),
      (function (e) {
        ;(e.message = 'message'),
          (e.imMessage = 'imMessage'),
          (e.userPresence = 'userPresence'),
          (e.groupPresence = 'groupPresence'),
          (e.PS_PRESENCE_EVENT = 'PS_PRESENCE_EVENT'),
          (e.IM_MSG_READ = 'IM_MSG_READ'),
          (e.IM_MSG_DELETED = 'IM_MSG_DELETED'),
          (e.IM_MSG_RECALLED = 'IM_MSG_RECALLED'),
          (e.CS_ONLINE_CHANGED = 'CS_ONLINE_CHANGED')
      })(e.RemoteEvents || (e.RemoteEvents = {}))
  })(Mt)
  var wt = {}
  !(function (e) {
    ;(e.__esModule = !0),
      (e.SocketEvent = void 0),
      (function (e) {
        ;(e.CONNECTED = 'CONNECTED'),
          (e.RECONNECTED = 'RECONNECTED'),
          (e.DISCONNECTED = 'DISCONNECTED'),
          (e.LOST = 'LOST'),
          (e.EXPIRED_RECONNECTED = 'EXPIRED_RECONNECTED'),
          (e.NEW_MESSAGE = 'NEW_MESSAGE'),
          (e.CONNECTING = 'CONNECTING')
      })(e.SocketEvent || (e.SocketEvent = {}))
  })(wt),
    (St.__esModule = !0),
    (St.Subscriber = void 0)
  var Ct = te,
    It = Et,
    Tt = de,
    kt = fe,
    Nt = Mt,
    Rt = gt,
    Pt = et,
    At = pe,
    Ot = wt,
    Dt = (function () {
      function e() {
        ;(this.subscriptions = []),
          Pt.G.Socket.onMessage(Nt.RemoteEvents.message, this.onNewMessage.bind(this)),
          Pt.G.Socket.on(Ot.SocketEvent.EXPIRED_RECONNECTED, this.expiredResubscribe.bind(this)),
          Pt.G.Socket.on(Ot.SocketEvent.RECONNECTED, this.resubscribePresenceChannel.bind(this))
      }
      return (
        (e.prototype.expiredResubscribe = function () {
          var e = this
          this.subscriptions.forEach(function (t) {
            e.doSubscribe(t, !1)
          })
        }),
        (e.prototype.resubscribePresenceChannel = function () {
          var e = this
          this.subscriptions.forEach(function (t) {
            var n = t.options
            n.presence && n.presence.enable && e.doSubscribe(t, !0)
          })
        }),
        (e.prototype.onNewMessage = function (e) {
          if (!(e.n.indexOf('_presence') > -1)) {
            e.a && Pt.G.Socket.sendAck('ack', { i: e.i, c: e.n })
            var t = { time: e.t, channel: e.n, content: e.c }
            this.createNotification(e), this.findSubscriptionByChannel(t.channel).options.onMessage(t)
          }
        }),
        (e.prototype.createNotification = function (e) {
          var t = Pt.G.N.supportAppNotification()
          if (Ct.default.isObject(e.nt) && t) {
            var n = { ch: e.n, ctt: e.c }
            Pt.G.N.createLocalNotification(e.nt.t, e.nt.c, n, e.nt.sound, e.nt.badge)
          }
        }),
        (e.prototype.subscribe = function (e) {
          var t = this
          if ((Rt.default.validateChannelAndChannels(e.channel, e.channels), Ct.default.isDef(e.presence))) {
            var n = e.presence.enable
            if (!Ct.default.isBoolean(n)) throw { code: 400, content: 'Subscription failed. presence.enable must be a boolean' }
            if (n && !Pt.G.Socket.user().id)
              throw { code: 400, content: 'Subscription failed. If presence is enable, the id must be specified when calling the connect method' }
          }
          var o = new It.Subscription(e)
          this.doSubscribe(o, !1)
            .then(function () {
              t.subscriptions.push(o), At.CallbackUtils.onSuccess(e, { code: 200, content: 'ok' })
            })
            .catch(function (t) {
              At.CallbackUtils.onFailed(e, { code: t.resultCode, content: t.content })
            })
        }),
        (e.prototype.doSubscribe = function (e, t) {
          var n = e.options
          return new Promise(function (o, i) {
            var r = new Pt.Rocket({
              name: kt.RocketTypes.subscribe,
              permission: Pt.Permission.READ,
              singleTimeout: Tt.SocketTimeout.commonRequestSingle,
              totalTimeout: Tt.SocketTimeout.commonRequestTotal,
              params: { channels: e.channels, accessToken: n.accessToken, presence: n.presence, resubscribe: t },
              success: function () {
                o()
              },
              fail: function (e) {
                i(e)
              },
            })
            Pt.G.Socket.e(r)
          })
        }),
        (e.prototype.unsubscribe = function (e) {
          var t = this
          Rt.default.validateChannel(e.channel, 'channel'), (e.channel = e.channel.toString())
          var n = this.findSubscriptionByChannel(e.channel)
          if (n) {
            var o = new Pt.Rocket({
              name: kt.RocketTypes.unsubscribe,
              params: { channel: e.channel, presence: n.options.presence },
              permission: Pt.Permission.READ,
              singleTimeout: Tt.SocketTimeout.commonRequestSingle,
              totalTimeout: Tt.SocketTimeout.commonRequestTotal,
              success: function () {
                e.onSuccess({ code: 200, content: 'ok' }), t.removeChannel(e.channel)
              },
              fail: function (t) {
                e.onFailed({ code: t.resultCode, content: t.content })
              },
            })
            Pt.G.Socket.e(o)
          } else e.onFailed({ code: 400, content: 'channel[' + e.channel + '] is not subscribed' })
        }),
        (e.prototype.removeChannel = function (e) {
          for (var t = this.subscriptions.length - 1; t >= 0; t--) {
            var n = this.subscriptions[t].channels,
              o = n.indexOf(e)
            if (o > -1) {
              n.splice(o, 1), 0 === n.length && this.subscriptions.splice(t, 1)
              break
            }
          }
        }),
        (e.prototype.findSubscriptionByChannel = function (e) {
          for (var t = !1, n = null, o = this.subscriptions.length - 1; o >= 0; o--) {
            for (var i = this.subscriptions[o].channels, r = 0; r < i.length; r++)
              if (i[r] == e) {
                ;(t = !0), (n = this.subscriptions[o])
                break
              }
            if (t) break
          }
          return n
        }),
        e
      )
    })()
  St.Subscriber = Dt
  var xt = { __esModule: !0, History: void 0 },
    Gt = yt,
    Ut = te,
    Lt = de,
    Ft = fe,
    Bt = gt,
    qt = et,
    jt = (function () {
      function e() {}
      return (
        (e.prototype.get = function (e) {
          Ut.default.isFunction(e.onSuccess) || (e.onSuccess = Gt.default),
            Ut.default.isFunction(e.onFailed) || (e.onFailed = Gt.default),
            Bt.default.validateChannel(e.channel, 'channel'),
            (e.channel = e.channel.toString())
          var t = new qt.Rocket({
            name: Ft.RocketTypes.historyMessages,
            permission: qt.Permission.READ,
            params: e,
            singleTimeout: Lt.SocketTimeout.commonQuerySingle,
            totalTimeout: Lt.SocketTimeout.commonQueryTotal,
            success: function (t) {
              e.onSuccess({ code: t.resultCode || t.code || 200, content: t.content })
            },
            fail: function (t) {
              e.onFailed({ code: t.resultCode || t.code, content: t.content })
            },
          })
          qt.G.Socket.e(t)
        }),
        e
      )
    })()
  xt.History = jt
  var Vt = { __esModule: !0 }
  Vt.ChannelPresence = Vt.PresenceService = void 0
  var Ht = Q,
    zt = et,
    Wt = de,
    Jt = Mt,
    Xt = fe,
    Qt = te,
    Yt = wt,
    Kt = gt,
    $t = (function () {
      function e() {
        var e = this
        ;(this.channelPresenceMap = new Map()),
          (this.onPresenceEvent = function (t) {
            var n = e.channelPresenceMap.get(t.channel)
            null == n || n.onPresence(t)
          }),
          (this.expireAllChannelPresences = function () {
            e.channelPresenceMap.forEach(function (e, t) {
              e.expire()
            })
          }),
          (this.resubscribe = function () {
            e.channelPresenceMap.forEach(function (e, t) {
              e.subscribed() && e.doSubscribe()
            })
          }),
          zt.G.Socket.on(Yt.SocketEvent.LOST, this.expireAllChannelPresences),
          zt.G.Socket.on(Yt.SocketEvent.RECONNECTED, this.resubscribe),
          zt.G.Socket.onMessage(Jt.RemoteEvents.PS_PRESENCE_EVENT, this.onPresenceEvent)
      }
      return (
        (e.prototype.hereNow = function (e) {
          Kt.default.validateChannel(e.channel, 'channel')
          var t,
            n = this.channelPresenceMap.get(e.channel.toString())
          n && n.queryPromise ? (e.limit && e.limit > n.membersLimit && n.doQuery(e.limit), (t = n.queryPromise)) : (t = en(e.channel, e.limit)),
            t
              .then(function (t) {
                e.onSuccess(t)
              })
              .catch(function (t) {
                e.onFailed(t)
              })
        }),
        (e.prototype.subscribe = function (e) {
          if ((Kt.default.validateChannel(e.channel, 'channel'), Qt.default.isUndef(e.onPresence) || !Qt.default.isFunction(e.onPresence)))
            throw { code: 400, content: 'Subscription Presence failed. onPresence callback function is required' }
          var t = e.channel.toString(),
            n = this.channelPresenceMap.get(t)
          n || ((n = new Zt(t)), this.channelPresenceMap.set(t, n)), n.subscribe(e)
        }),
        (e.prototype.unsubscribe = function (e) {
          var t = this
          Kt.default.validateChannel(e.channel, 'channel')
          var n = e.channel.toString()
          if (this.channelPresenceMap.get(n)) {
            var o = new zt.Rocket({
              name: Xt.RocketTypes.PUBSUB_PRESENCE_UNSUBSCRIBE,
              permission: zt.Permission.READ,
              singleTimeout: Wt.SocketTimeout.commonRequestSingle,
              totalTimeout: Wt.SocketTimeout.commonRequestTotal,
              params: { channel: n },
              success: function (o) {
                t.channelPresenceMap.delete(n), e.onSuccess()
              },
              fail: function (t) {
                e.onFailed(t)
              },
            })
            zt.G.Socket.e(o)
          } else e.onSuccess()
        }),
        e
      )
    })()
  Vt.PresenceService = $t
  var Zt = (function () {
    function e(e) {
      ;(this.membersLimit = 10), (this.queried = !1), (this.channel = e)
    }
    return (
      (e.prototype.onPresence = function (e) {
        return Ht.__awaiter(this, void 0, void 0, function () {
          return Ht.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.queried ? (this.update(e), [3, 3]) : [3, 1]
              case 1:
                return [4, this.queryPromise]
              case 2:
                t.sent(), (t.label = 3)
              case 3:
                return (
                  this.on({
                    channel: this.channel,
                    action: e.action,
                    member: e.member,
                    time: e.time,
                    amount: this.amount,
                    members: this.membersByLimit(),
                  }),
                  [2]
                )
            }
          })
        })
      }),
      (e.prototype.membersByLimit = function () {
        return this.members.slice(0, this.membersLimit)
      }),
      (e.prototype.subscribe = function (e) {
        return Ht.__awaiter(this, void 0, void 0, function () {
          var t
          return Ht.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                if ((e.membersLimit && (this.membersLimit = Math.min(e.membersLimit, 300)), this.subscribed())) return [3, 4]
                n.label = 1
              case 1:
                return n.trys.push([1, 3, , 4]), [4, this.doSubscribe()]
              case 2:
                return n.sent(), [3, 4]
              case 3:
                return (t = n.sent()), e.onFailed(t), [2]
              case 4:
                return (this.on = e.onPresence), e.onSuccess(), [2]
            }
          })
        })
      }),
      (e.prototype.doSubscribe = function () {
        var e = this
        return (
          this.doQuery(this.membersLimit),
          new Promise(function (t, n) {
            var o = new zt.Rocket({
              name: Xt.RocketTypes.PUBSUB_PRESENCE_SUBSCRIBE,
              permission: zt.Permission.READ,
              params: { channel: e.channel },
              singleTimeout: Wt.SocketTimeout.commonRequestSingle,
              totalTimeout: Wt.SocketTimeout.commonRequestTotal,
              success: function (e) {
                t()
              },
              fail: function (e) {
                n(e)
              },
            })
            zt.G.Socket.e(o)
          })
        )
      }),
      (e.prototype.doQuery = function (e) {
        var t = this
        ;(this.queryPromise = en(this.channel, e)),
          this.queryPromise
            .then(function (e) {
              ;(t.members = e.content.members), (t.amount = e.content.amount), (t.queried = !0)
            })
            .catch(function (e) {
              throw e
            })
      }),
      (e.prototype.update = function (e) {
        if (['join', 'back'].includes(e.action)) this.members.unshift(e.member)
        else if (['leave', 'timeout'].includes(e.action)) {
          var t = this.members.findIndex(function (t) {
            return t.id === e.member.id
          })
          t > -1 && this.members.splice(t, 1)
        }
        this.amount = e.amount
      }),
      (e.prototype.expire = function () {
        ;(this.queried = !1), (this.queryPromise = null)
      }),
      (e.prototype.subscribed = function () {
        return void 0 !== this.on
      }),
      e
    )
  })()
  function en(e, t) {
    return (
      t || (t = 10),
      new Promise(function (n, o) {
        var i = { channel: e, limit: t },
          r = new zt.Rocket({
            name: Xt.RocketTypes.PUBSUB_PRESENCE_HERENOW,
            permission: zt.Permission.READ,
            params: i,
            singleTimeout: Wt.SocketTimeout.commonQuerySingle,
            totalTimeout: Wt.SocketTimeout.commonQueryTotal,
            success: function (e) {
              n(e)
            },
            fail: function (e) {
              o(e)
            },
          })
        zt.G.Socket.e(r)
      })
    )
  }
  ;(Vt.ChannelPresence = Zt), (ht.__esModule = !0), (ht.PubSub = void 0)
  var tn = mt,
    nn = St,
    on = xt,
    rn = Vt,
    sn = (function () {
      function e() {
        ;(this.publisher = new tn.default()),
          (this.subscriber = new nn.Subscriber()),
          (this.presence2 = new rn.PresenceService()),
          (this.histories = new on.History())
      }
      return (
        (e.init = function () {
          this.instance = new e()
        }),
        (e.prototype.publish = function (e) {
          this.publisher.publish(e)
        }),
        (e.prototype.subscribe = function (e) {
          this.subscriber.subscribe(e)
        }),
        (e.prototype.unsubscribe = function (e) {
          this.subscriber.unsubscribe(e)
        }),
        (e.prototype.subscribePresence = function (e) {
          this.presence2.subscribe(e)
        }),
        (e.prototype.unsubscribePresence = function (e) {
          this.presence2.unsubscribe(e)
        }),
        (e.prototype.history = function (e) {
          this.histories.get(e)
        }),
        (e.prototype.hereNow = function (e) {
          this.presence2.hereNow(e)
        }),
        e
      )
    })()
  ht.PubSub = sn
  var an = { __esModule: !0, GWSModule: void 0 },
    cn = Q,
    un = ht,
    ln = ee,
    fn = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        cn.__extends(t, e),
        (t.init = function () {
          return (this.module = new t()), (this.module.name = this.GWS_MODULE_NAME), this.initGN(), this.module
        }),
        (t.initGN = function () {
          ln.GN.addAssembler(
            new ((function () {
              function e() {}
              return (
                (e.prototype.assemble = function (e) {
                  return { channel: e.ch, content: e.ctt }
                }),
                (e.prototype.support = function (e) {
                  return !!e.ch
                }),
                e
              )
            })())()
          )
        }),
        (t.prototype.postConnect = function () {
          un.PubSub.init()
        }),
        (t.check = function () {
          if (!this.module)
            throw { code: 400, content: "PubSub not initialized. Please include 'PUBSUB' in the 'modules' during GoEasy initialization." }
        }),
        (t.GWS_MODULE_NAME = 'GWS'),
        t
      )
    })(et.GModule)
  ;(an.GWSModule = fn), (pt.__esModule = !0), (pt.GWS = void 0)
  var dn = ht,
    pn = pe,
    hn = an,
    mn = $,
    yn = et,
    gn = (function () {
      function e() {}
      return (
        (e.publish = function (e) {
          this.catch(function () {
            dn.PubSub.instance.publish(e)
          }, e)
        }),
        (e.subscribe = function (e) {
          this.catch(function () {
            dn.PubSub.instance.subscribe(e)
          }, e)
        }),
        (e.unsubscribe = function (e) {
          this.catch(function () {
            dn.PubSub.instance.unsubscribe(e)
          }, e)
        }),
        (e.subscribePresence = function (e) {
          this.catch(function () {
            dn.PubSub.instance.subscribePresence(e)
          }, e)
        }),
        (e.unsubscribePresence = function (e) {
          this.catch(function () {
            dn.PubSub.instance.unsubscribePresence(e)
          }, e)
        }),
        (e.history = function (e) {
          this.catch(function () {
            dn.PubSub.instance.history(e)
          }, e)
        }),
        (e.hereNow = function (e) {
          this.catch(function () {
            dn.PubSub.instance.hereNow(e)
          }, e)
        }),
        (e.catch = function (e, t) {
          try {
            if (
              (hn.GWSModule.check(),
              [mn.NetworkStatus.DISCONNECTED, mn.NetworkStatus.DISCONNECTING, mn.NetworkStatus.CONNECT_FAILED].includes(yn.G.Socket.status()))
            )
              throw new Error('Please call connect() first.')
            e()
          } catch (e) {
            pn.CallbackUtils.onFailed(t, e)
          }
        }),
        e
      )
    })()
  pt.GWS = gn
  var vn = {},
    Sn = {},
    En = {},
    _n = {},
    bn = {},
    Mn = {}
  !(function (e) {
    e.__esModule = !0
    var t = function () {}
    e.default = t
  })(Mn)
  var wn = {}
  !(function (e) {
    ;(e.__esModule = !0),
      (e.FileStorageLocation = void 0),
      (function (e) {
        ;(e.aliYun = 'ALI'), (e.qiNiu = 'QN'), (e.tencent = 'TX'), (e.s3 = 'S3')
      })(e.FileStorageLocation || (e.FileStorageLocation = {}))
  })(wn),
    (bn.__esModule = !0),
    (bn.uniAppFileUploader = void 0)
  var Cn = Q,
    In = wn,
    Tn = (function (e) {
      function t() {
        return e.call(this) || this
      }
      return (
        Cn.__extends(t, e),
        (t.prototype.upload = function (e, t) {
          var n = this
          try {
            return e.storageLocation === In.FileStorageLocation.s3
              ? this.uploadToS3(e, t)
              : (delete e.parameters.fileRes,
                new Promise(function (o, i) {
                  uni
                    .uploadFile({
                      url: e.host,
                      filePath: n.getTempFilePath(e),
                      name: 'file',
                      formData: e.parameters,
                      success: function (e) {
                        200 === e.statusCode ? o() : i({ code: e.statusCode, content: e.errMsg })
                      },
                      fail: function (e) {
                        i({ code: 500, content: e.errMsg })
                      },
                    })
                    .onProgressUpdate(function (e) {
                      t && t(e)
                    })
                }))
          } catch (e) {
            return new Promise(function (t, n) {
              n({ code: 500, content: e })
            })
          }
        }),
        (t.prototype.getTempFilePath = function (e) {
          var t = e.file
          return t.tempFilePath || t.fullPath || t.path
        }),
        (t.prototype.uploadToS3 = function (e, t) {
          var n = this
          return new Promise(function (t, o) {
            return Cn.__awaiter(n, void 0, void 0, function () {
              var n
              return Cn.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, this.fileToArrayBuffer(e)]
                  case 1:
                    return (
                      (n = i.sent()),
                      uni.request({
                        url: e.url,
                        method: 'PUT',
                        header: e.headers,
                        data: n,
                        success: function (n) {
                          200 === n.statusCode
                            ? (e.storageLocation === In.FileStorageLocation.s3 && (e.url = e.url.split('?')[0]), t())
                            : o({ code: n.statusCode, content: n.errMsg })
                        },
                        fail: function (e) {
                          o({ code: 500, content: e.errMsg })
                        },
                      }),
                      [2]
                    )
                }
              })
            })
          })
        }),
        (t.prototype.fileToArrayBuffer = function (e) {
          var t = this
          return new Promise(function (n, o) {
            var i = t.getTempFilePath(e)
            if ('undefined' != typeof plus)
              plus.io.resolveLocalFileSystemURL(
                i,
                function (e) {
                  e.file(function (e) {
                    var t = new plus.io.FileReader()
                    ;(t.onloadend = function (e) {
                      var t = uni.base64ToArrayBuffer(e.target.result.split(',')[1])
                      n(t)
                    }),
                      (t.onerror = function (e) {
                        o(e)
                      }),
                      t.readAsDataURL(e)
                  })
                },
                function (e) {
                  o('Resolve file URL failed: ' + e.message)
                }
              )
            else if ('undefined' != typeof FileReader) {
              var r = new FileReader()
              ;(r.onload = function () {
                n(r.result)
              }),
                (r.onerror = function (e) {
                  o(e)
                }),
                r.readAsArrayBuffer(e.file)
            } else if ('object' === ('undefined' == typeof wx ? 'undefined' : a(wx)) && wx.canIUse('getFileSystemManager'))
              try {
                var s = wx.getFileSystemManager().readFileSync(i)
                n(s)
              } catch (e) {
                o(e)
              }
          })
        }),
        t
      )
    })(Mn.default),
    kn = new Tn()
  bn.uniAppFileUploader = kn
  var Nn = { __esModule: !0, wxFileUploader: void 0 },
    Rn = Q,
    Pn = wn,
    An = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Rn.__extends(t, e),
        (t.prototype.upload = function (e, t) {
          var n = this
          try {
            return e.storageLocation === Pn.FileStorageLocation.s3
              ? this.uploadToS3(e, t)
              : new Promise(function (o, i) {
                  wx.uploadFile({
                    url: e.host,
                    filePath: n.getTempFilePath(e),
                    name: 'file',
                    formData: e.parameters,
                    success: function (e) {
                      200 === e.statusCode ? o() : i({ code: e.statusCode, content: e.errMsg })
                    },
                    fail: function (e) {
                      i({ code: 500, content: e.errMsg })
                    },
                  }).onProgressUpdate(function (e) {
                    t && t(e)
                  })
                })
          } catch (e) {
            return new Promise(function (t, n) {
              n({ code: 500, content: e })
            })
          }
        }),
        (t.prototype.getTempFilePath = function (e) {
          var t = e.file || e.fileRes
          return t.path || t.tempFilePath
        }),
        (t.prototype.uploadToS3 = function (e, t) {
          var n = this
          return new Promise(function (t, o) {
            return Rn.__awaiter(n, void 0, void 0, function () {
              var n
              return Rn.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, this.fileToArrayBuffer(this.getTempFilePath(e))]
                  case 1:
                    return (
                      (n = i.sent()),
                      wx.request({
                        url: e.url,
                        method: 'PUT',
                        header: e.headers,
                        data: n,
                        success: function (n) {
                          200 === n.statusCode
                            ? (e.storageLocation === Pn.FileStorageLocation.s3 && (e.url = e.url.split('?')[0]), t())
                            : o({ code: n.statusCode, content: n.errMsg })
                        },
                        fail: function (e) {
                          o({ code: 500, content: e.errMsg })
                        },
                      }),
                      [2]
                    )
                }
              })
            })
          })
        }),
        (t.prototype.fileToArrayBuffer = function (e) {
          return new Promise(function (t, n) {
            try {
              t(wx.getFileSystemManager().readFileSync(e))
            } catch (e) {
              n(e)
            }
          })
        }),
        t
      )
    })(Mn.default),
    On = new An()
  Nn.wxFileUploader = On
  var Dn = { __esModule: !0, htmlFileUploader: void 0 },
    xn = Q,
    Gn = wn,
    Un = (function (e) {
      function t() {
        return e.call(this) || this
      }
      return (
        xn.__extends(t, e),
        (t.prototype.upload = function (e, t) {
          return new Promise(function (n, o) {
            try {
              var i = new XMLHttpRequest(),
                r = e.storageLocation === Gn.FileStorageLocation.s3,
                s = r ? 'PUT' : 'POST',
                a = r ? e.url : e.host
              for (var c in (i.open(s, a, !0), e.headers)) i.setRequestHeader(c, e.headers[c])
              ;(i.upload.onprogress = function (e) {
                t && t(e)
              }),
                (i.upload.onloadstart = function (e) {
                  t && t(e)
                }),
                (i.upload.onloadend = function (e) {
                  t && t(e)
                })
              var u = new FormData()
              for (var l in e.parameters) 'fileRes' == l ? u.append('file', e.parameters[l]) : u.append(l, e.parameters[l])
              var f = r ? e.file : u
              i.send(f),
                (i.onreadystatechange = function () {
                  4 == i.readyState &&
                    ((i.status >= 200 && i.status < 300) || 304 == i.status
                      ? (r && (e.url = e.url.split('?')[0]), n())
                      : o({ code: i.status, content: i.responseText }))
                })
            } catch (e) {
              o({ code: 500, content: e })
            }
          })
        }),
        (t.prototype.fileToArrayBuffer = function (e) {
          return new Promise(function (t, n) {
            var o = new FileReader()
            ;(o.onload = function () {
              t(o.result)
            }),
              (o.onerror = function (e) {
                n(e)
              }),
              o.readAsArrayBuffer(e)
          })
        }),
        t
      )
    })(Mn.default),
    Ln = new Un()
  Dn.htmlFileUploader = Ln
  var Fn = { __esModule: !0, aliFileUploader: void 0 },
    Bn = Q,
    qn = wn,
    jn = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Bn.__extends(t, e),
        (t.prototype.upload = function (e, t) {
          var n = this
          try {
            return e.storageLocation === qn.FileStorageLocation.s3
              ? this.uploadToS3(e, t)
              : (delete e.parameters.fileRes,
                new Promise(function (o, i) {
                  my.uploadFile({
                    url: e.host,
                    filePath: n.getTempFilePath(e),
                    fileType: 'image',
                    name: 'file',
                    formData: e.parameters,
                    success: function (e) {
                      200 === e.statusCode ? o() : i({ code: e.statusCode, content: e.errMsg })
                    },
                    fail: function (e) {
                      i({ code: 500, content: e.errMsg })
                    },
                  }).onProgressUpdate(function (e) {
                    t && t(e)
                  })
                }))
          } catch (e) {
            return new Promise(function (t, n) {
              n({ code: 500, content: e })
            })
          }
        }),
        (t.prototype.getTempFilePath = function (e) {
          var t = e.file
          return t.path || t.tempFilePath
        }),
        (t.prototype.uploadToS3 = function (e, t) {
          var n = this
          return new Promise(function (t, o) {
            return Bn.__awaiter(n, void 0, void 0, function () {
              var n
              return Bn.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, this.fileToArrayBuffer(this.getTempFilePath(e))]
                  case 1:
                    return (
                      (n = i.sent()),
                      my.request({
                        url: e.url,
                        method: 'PUT',
                        header: e.headers,
                        data: n,
                        success: function (n) {
                          200 === n.statusCode
                            ? (e.storageLocation === qn.FileStorageLocation.s3 && (e.url = e.url.split('?')[0]), t())
                            : o({ code: n.statusCode, content: n.errMsg })
                        },
                        fail: function (e) {
                          o({ code: 500, content: e.errMsg })
                        },
                      }),
                      [2]
                    )
                }
              })
            })
          })
        }),
        (t.prototype.fileToArrayBuffer = function (e) {
          return new Promise(function (t, n) {
            my.getFileSystemManager().readFile({
              filePath: e,
              success: function (e) {
                t(e.data)
              },
              fail: function (e) {
                n(e)
              },
            })
          })
        }),
        t
      )
    })(Mn.default),
    Vn = new jn()
  Fn.aliFileUploader = Vn
  var Hn = { __esModule: !0, baiduFileUploader: void 0 },
    zn = Q,
    Wn = wn,
    Jn = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        zn.__extends(t, e),
        (t.prototype.upload = function (e, t) {
          var n = this
          try {
            return e.storageLocation === Wn.FileStorageLocation.s3
              ? this.uploadToS3(e, t)
              : (delete e.parameters.fileRes,
                new Promise(function (o, i) {
                  swan
                    .uploadFile({
                      url: e.host,
                      filePath: n.getTempFilePath(e),
                      name: 'file',
                      formData: e.parameters,
                      success: function (e) {
                        200 === e.statusCode ? o() : i({ code: e.statusCode, content: e.errMsg })
                      },
                      fail: function (e) {
                        i({ code: 500, content: e.errMsg })
                      },
                    })
                    .onProgressUpdate(function (e) {
                      t && t(e)
                    })
                }))
          } catch (e) {
            return new Promise(function (t, n) {
              n({ code: 500, content: e })
            })
          }
        }),
        (t.prototype.getTempFilePath = function (e) {
          var t = e.file
          return t.path || t.tempFilePath
        }),
        (t.prototype.uploadToS3 = function (e, t) {
          var n = this
          return new Promise(function (t, o) {
            return zn.__awaiter(n, void 0, void 0, function () {
              var n
              return zn.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, this.fileToArrayBuffer(this.getTempFilePath(e))]
                  case 1:
                    return (
                      (n = i.sent()),
                      swan.request({
                        url: e.url,
                        method: 'PUT',
                        header: e.headers,
                        data: n,
                        success: function (n) {
                          200 === n.statusCode
                            ? (e.storageLocation === Wn.FileStorageLocation.s3 && (e.url = e.url.split('?')[0]), t())
                            : o({ code: n.statusCode, content: n.errMsg })
                        },
                        fail: function (e) {
                          o({ code: 500, content: e.errMsg })
                        },
                      }),
                      [2]
                    )
                }
              })
            })
          })
        }),
        (t.prototype.fileToArrayBuffer = function (e) {
          return new Promise(function (t, n) {
            swan.getFileSystemManager().readFile({
              filePath: e,
              success: function (e) {
                t(e.data)
              },
              fail: function (e) {
                n(e)
              },
            })
          })
        }),
        t
      )
    })(Mn.default),
    Xn = new Jn()
  Hn.baiduFileUploader = Xn
  var Qn = { __esModule: !0, FileUploadResponse: void 0 },
    Yn = function (e, t, n) {
      ;(this.storageLocation = e), (this.url = t), (this.name = n)
    }
  ;(Qn.FileUploadResponse = Yn), (_n.__esModule = !0), (_n.fileUploader = _n.FileUploader = void 0)
  var Kn = Q,
    $n = bn,
    Zn = Nn,
    eo = Dn,
    to = Fn,
    no = Hn,
    oo = y,
    io = ne,
    ro = Qn,
    so = (function () {
      function e() {
        var e
        this.uploader =
          (((e = {})[oo.Framework.UNIAPP] = $n.uniAppFileUploader),
          (e[io.PlatformType.MP_WX] = Zn.wxFileUploader),
          (e[io.PlatformType.BROWSER] = eo.htmlFileUploader),
          (e[io.PlatformType.MP_ALI] = to.aliFileUploader),
          (e[io.PlatformType.MP_BAIDU] = no.baiduFileUploader),
          (e[oo.Framework.REACT_NATIVE] = eo.htmlFileUploader),
          (e[io.PlatformType.MP_BYTE] = Zn.wxFileUploader),
          e)
      }
      return (
        (e.prototype.upload = function (e, t) {
          return Kn.__awaiter(this, void 0, void 0, function () {
            var n, o, i
            return Kn.__generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (n = oo.FrameworkDetector.currentFramework()),
                    (o = io.PlatformDetector.currentPlatform()),
                    (i = n === oo.Framework.UNKNOWN ? o : n),
                    [4, this.uploader[i].upload(e, t)]
                  )
                case 1:
                  return r.sent(), [2, new ro.FileUploadResponse(e.storageLocation, e.url, e.newFileName)]
              }
            })
          })
        }),
        e
      )
    })()
  _n.FileUploader = so
  var ao = new so()
  _n.fileUploader = ao
  var co = {},
    uo = {}
  !(function (e) {
    e.__esModule = !0
    var t = de,
      n = et,
      o = (function () {
        function e() {}
        return (
          (e.prototype.resolve = function (e) {
            return new Promise(function (o, i) {
              var r = new n.Rocket({
                name: 'uploadToken',
                params: { filename: e },
                permission: n.Permission.WRITE,
                singleTimeout: t.SocketTimeout.commonRequestSingle,
                totalTimeout: t.SocketTimeout.commonRequestTotal,
                fail: function (e) {
                  i(e.content)
                },
                success: function (e) {
                  200 === e.code ? o(e.content) : i(e.content)
                },
              })
              n.G.Socket.e(r)
            })
          }),
          e
        )
      })()
    e.default = o
  })(uo)
  var lo = {},
    fo = {}
  !(function (e) {
    e.__esModule = !0
    var t = function (e, t, n, o, i, r, s) {
      ;(this.storageLocation = e), (this.host = t), (this.headers = n), (this.parameters = o), (this.file = i), (this.newFileName = r), (this.url = s)
    }
    e.default = t
  })(fo)
  var po = {}
  !(function (e) {
    e.__esModule = !0
    var t = (function () {
      function e() {}
      return (
        (e.prototype.newFileName = function (e) {
          return (e && e.newFilename) || ''
        }),
        e
      )
    })()
    e.default = t
  })(po),
    (lo.__esModule = !0),
    (lo.aliYunOSSRequestBuilder = lo.AliYunOSSRequestBuilder = void 0)
  var ho = Q,
    mo = fo,
    yo = wn,
    go = (function (e) {
      function t() {
        return e.call(this) || this
      }
      return (
        ho.__extends(t, e),
        (t.prototype.url = function (e) {
          return e.host + '/' + e.dir + '/' + this.newFileName(e)
        }),
        (t.prototype.build = function (e, t, n) {
          var o,
            i = this.newFileName(e)
          return (
            (o = {
              key: e.dir + '/' + i,
              OSSAccessKeyId: e.accessKeyId,
              policy: e.policy,
              signature: e.signature,
              success_action_status: '200',
              fileRes: t,
            }),
            n &&
              (o = {
                key: e.dir + '/' + i,
                OSSAccessKeyId: e.accessKeyId,
                policy: e.policy,
                signature: e.signature,
                success_action_status: '200',
                'Content-Disposition': 'attachment;filename=' + t.name,
                fileRes: t,
              }),
            new mo.default(yo.FileStorageLocation.aliYun, e.host, null, o, t, i, this.url(e))
          )
        }),
        t
      )
    })(po.default)
  lo.AliYunOSSRequestBuilder = go
  var vo = new go()
  lo.aliYunOSSRequestBuilder = vo
  var So = { __esModule: !0 }
  So.tencentOSSRequestBuilder = So.TencentOSSRequestBuilder = void 0
  var Eo = Q,
    _o = fo,
    bo = wn,
    Mo = (function (e) {
      function t() {
        return e.call(this) || this
      }
      return (
        Eo.__extends(t, e),
        (t.prototype.url = function (e) {
          return e.host + '/' + e.key
        }),
        (t.prototype.build = function (e, t, n) {
          var o = {
            'q-sign-algorithm': e.qSignAlgorithm,
            'q-ak': e.qAk,
            'q-key-time': e.qKeyTime,
            'q-signature': e.qSignature,
            policy: e.policy,
            'x-cos-security-token': e.xCosSecurityToken,
            success_action_status: '200',
            key: e.key,
            fileRes: t,
          }
          return (
            n &&
              (o = {
                'q-sign-algorithm': e.qSignAlgorithm,
                'q-ak': e.qAk,
                'q-key-time': e.qKeyTime,
                'q-signature': e.qSignature,
                policy: e.policy,
                'x-cos-security-token': e.xCosSecurityToken,
                success_action_status: '200',
                key: e.key,
                'Content-Disposition': 'attachment;filename='.concat(t.name),
                fileRes: t,
              }),
            new _o.default(bo.FileStorageLocation.tencent, e.host, null, o, t, e.key, this.url(e))
          )
        }),
        t
      )
    })(po.default)
  So.TencentOSSRequestBuilder = Mo
  var wo = new Mo()
  So.tencentOSSRequestBuilder = wo
  var Co = { __esModule: !0 }
  Co.s3OSSRequestBuilder = Co.S3OSSRequestBuilder = void 0
  var Io = Q,
    To = fo,
    ko = wn,
    No = (function (e) {
      function t() {
        return e.call(this) || this
      }
      return (
        Io.__extends(t, e),
        (t.prototype.url = function (e) {
          return e.uploadUrl
        }),
        (t.prototype.build = function (e, t, n) {
          var o = { file: t }
          return new To.default(ko.FileStorageLocation.s3, null, { 'Content-Type': 'application/octet-stream' }, o, t, t.name, this.url(e))
        }),
        t
      )
    })(po.default)
  Co.S3OSSRequestBuilder = No
  var Ro = new No()
  ;(Co.s3OSSRequestBuilder = Ro),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = uo,
        o = wn,
        i = lo,
        r = So,
        s = Co,
        a = (function () {
          function e() {
            this.uploadTokenResolver = new n.default()
          }
          return (
            (e.prototype.builder = function (e) {
              if (e === o.FileStorageLocation.aliYun) return i.aliYunOSSRequestBuilder
              if (e === o.FileStorageLocation.tencent) return r.tencentOSSRequestBuilder
              if (e === o.FileStorageLocation.s3) return s.s3OSSRequestBuilder
              throw new Error('Only Ali OSS and Tencent COS are supported, unknown storage location:' + e)
            }),
            (e.prototype.build = function (e, n, o) {
              return t.__awaiter(this, void 0, void 0, function () {
                var i, r, s
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return t.trys.push([0, 2, , 3]), [4, this.uploadTokenResolver.resolve(n)]
                    case 1:
                      return (i = t.sent()), (r = this.builder(i.vendor).build(i, e, o)), [2, Promise.resolve(r)]
                    case 2:
                      return (s = t.sent()), [2, Promise.reject(s)]
                    case 3:
                      return [2]
                  }
                })
              })
            }),
            e
          )
        })()
      e.default = a
    })(co),
    (En.__esModule = !0),
    (En.GoEasyUploader = void 0)
  var Po = Q,
    Ao = _n,
    Oo = co,
    Do = (function () {
      function e() {
        ;(this.requestBuilder = new Oo.default()), (this.fileUploader = Ao.fileUploader)
      }
      return (
        (e.prototype.upload = function (e, t, n, o) {
          return Po.__awaiter(this, void 0, void 0, function () {
            var i, r
            return Po.__generator(this, function (s) {
              switch (s.label) {
                case 0:
                  return s.trys.push([0, 2, , 3]), [4, this.requestBuilder.build(e, t, o)]
                case 1:
                  return (i = s.sent()), [2, this.fileUploader.upload(i, n)]
                case 2:
                  return (r = s.sent()), [2, Promise.reject(r)]
                case 3:
                  return [2]
              }
            })
          })
        }),
        e
      )
    })()
  En.GoEasyUploader = Do
  var xo = {},
    Go = {}
  !(function (e) {
    var t
    ;(e.__esModule = !0),
      (e.IM_INTERNAL_EVENTS = void 0),
      ((t = e.IM_INTERNAL_EVENTS || (e.IM_INTERNAL_EVENTS = {})).MESSAGE_SENDING = 'IM_INTERNAL_MESSAGE_SENDING'),
      (t.MESSAGE_SEND_SUCCESS = 'IM_INTERNAL_MESSAGE_SEND_SUCCESS'),
      (t.MESSAGE_SEND_FAILED = 'IM_INTERNAL_MESSAGE_SEND_FAILED'),
      (t.MESSAGE_RECEIVED = 'IM_INTERNAL_MESSAGE_RECEIVED'),
      (t.MESSAGE_RECALLED = 'IM_INTERNAL_MESSAGE_RECALLED'),
      (t.MAX_MESSAGE_CHANGED = 'IM_INTERNAL_MAX_MESSAGE_CHANGED'),
      (t.MAX_MESSAGE_DELETED = 'IM_INTERNAL_MAX_MESSAGE_DELETED'),
      (t.UNREAD_AMOUNT_CHANGED = 'IM_INTERNAL_UNREAD_MESSAGE_CHANGED'),
      (t.CS_ONLINE_SUCCESS = 'CS_ONLINE_SUCCESS'),
      (t.CS_OFFLINE_SUCCESS = 'CS_OFFLINE_SUCCESS'),
      (t.CS_ACCEPTED = 'CS_ACCEPTED'),
      (t.CS_ENDED = 'CS_ENDED'),
      (t.CS_TRANSFER = 'CS_TRANSFER'),
      (t.CS_AGENT_MESSAGE_RECEIVED = 'CS_AGENT_MESSAGE_RECEIVED')
  })(Go)
  var Uo = { __esModule: !0, AbstractMessage: void 0 },
    Lo = et,
    Fo = (function () {
      function e() {}
      return (
        (e.prototype.clearUseLessAttribute = function () {
          delete this.buildOptions
        }),
        (e.prototype.isOtherSent = function () {
          return this.senderId !== Lo.G.Socket.user().id
        }),
        (e.prototype.getToData = function () {
          return this.buildOptions.createOptions.to.data
        }),
        e
      )
    })()
  Uo.AbstractMessage = Fo
  var Bo = {},
    qo = {},
    jo = { __esModule: !0, AbstractPayloadImprover: void 0 },
    Vo = function () {}
  jo.AbstractPayloadImprover = Vo
  var Ho = {}
  !(function (e) {
    ;(e.__esModule = !0),
      (e.MessageType = void 0),
      (function (e) {
        ;(e.TEXT = 'text'), (e.IMAGE = 'image'), (e.FILE = 'file'), (e.VIDEO = 'video'), (e.AUDIO = 'audio')
      })(e.MessageType || (e.MessageType = {}))
  })(Ho),
    (qo.__esModule = !0),
    (qo.FileMessagePayloadImprover = void 0)
  var zo = Q,
    Wo = En,
    Jo = Ho,
    Xo = wn,
    Qo = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.goEasyUploader = new Wo.GoEasyUploader()), t
      }
      return (
        zo.__extends(t, e),
        (t.prototype.improve = function (e) {
          var t = this,
            n = e.message
          return new Promise(function (e, o) {
            var i,
              r = n.buildOptions.createOptions
            ;(i = n.type === Jo.MessageType.VIDEO ? n.payload.video.name : n.payload.name),
              t.goEasyUploader
                .upload(r.file, i, r.onProgress, n.type === Jo.MessageType.FILE)
                .then(function (o) {
                  o.storageLocation !== Xo.FileStorageLocation.s3 && (o.url = encodeURI(o.url)), t.setPayload(o, n), e()
                })
                .catch(function (e) {
                  o(e)
                })
          })
        }),
        (t.prototype.setPayload = function (e, t) {
          t.payload.url = e.url
        }),
        t
      )
    })(jo.AbstractPayloadImprover)
  qo.FileMessagePayloadImprover = Qo
  var Yo = { __esModule: !0, VideoMessagePayloadImprover: void 0 },
    Ko = Q,
    $o = wn,
    Zo = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Ko.__extends(t, e),
        (t.prototype.setPayload = function (e, t) {
          var n,
            o = t.payload
          switch (
            ((o.video.url = e.url),
            (o.video.name = e.name),
            o.thumbnail.height > 200 && ((o.thumbnail.height = 200), (o.thumbnail.width = (200 * o.video.width) / o.video.height)),
            e.storageLocation)
          ) {
            case $o.FileStorageLocation.aliYun:
              n = '?x-oss-process=video/snapshot,t_0000,f_jpg,h_' + o.thumbnail.height + ',m_fast,ar_auto'
              break
            case $o.FileStorageLocation.tencent:
              n = '?ci-process=snapshot&time=1&format=jpg&height=' + o.thumbnail.height
              break
            case $o.FileStorageLocation.s3:
              n = '?process=video&height=' + o.thumbnail.height
              break
            default:
              throw new Error('Only Ali OSS and Tencent COS are supported, unknown storage location:' + e.storageLocation)
          }
          o.thumbnail.url = e.url + n
        }),
        t
      )
    })(qo.FileMessagePayloadImprover)
  Yo.VideoMessagePayloadImprover = Zo
  var ei = { __esModule: !0, ImageMessagePayloadImprover: void 0 },
    ti = Q,
    ni = wn,
    oi = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        ti.__extends(t, e),
        (t.prototype.setPayload = function (e, t) {
          var n,
            o = t.payload
          o.url = e.url
          var i = o.height > 200 ? 200 : o.height
          switch (e.storageLocation) {
            case ni.FileStorageLocation.aliYun:
              n = '?x-oss-process=image/resize,m_lfit,h_' + i
              break
            case ni.FileStorageLocation.tencent:
              n = '?imageMogr2/thumbnail/x'.concat(i)
              break
            case ni.FileStorageLocation.s3:
              n = '?process=image&height='.concat(i)
              break
            default:
              throw new Error('Only Ali OSS and Tencent COS are supported, unknown storage location:' + e.storageLocation)
          }
          o.thumbnail = e.url + n
        }),
        t
      )
    })(qo.FileMessagePayloadImprover)
  ;(ei.ImageMessagePayloadImprover = oi), (Bo.__esModule = !0), (Bo.PayloadImprover = void 0)
  var ii = qo,
    ri = Yo,
    si = Ho,
    ai = ei,
    ci = (function () {
      function e() {
        var e
        this.improvers =
          (((e = {})[si.MessageType.FILE] = new ii.FileMessagePayloadImprover()),
          (e[si.MessageType.AUDIO] = new ii.FileMessagePayloadImprover()),
          (e[si.MessageType.IMAGE] = new ai.ImageMessagePayloadImprover()),
          (e[si.MessageType.VIDEO] = new ri.VideoMessagePayloadImprover()),
          e)
      }
      return (
        (e.prototype.improve = function (e) {
          var t = this.improvers[e.message.type]
          if (t)
            try {
              return t.improve(e)
            } catch (e) {
              return Promise.reject(e)
            }
          return Promise.resolve()
        }),
        e
      )
    })()
  Bo.PayloadImprover = ci
  var ui = { __esModule: !0, IMEC: void 0 },
    li = Q,
    fi = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        li.__extends(t, e),
        (t.init = function () {
          this.i = new t()
        }),
        t
      )
    })(et.AbstractEventCenter)
  ui.IMEC = fi
  var di = {}
  !(function (e) {
    e.__esModule = !0
    var t = Ho,
      n = Z,
      o = vt,
      i = (function () {
        function e(e, t, i, r, s) {
          this.validate(e),
            (this.mt = e.type),
            (this.to = t.id.toString()),
            (this.d = JSON.stringify(t.data)),
            (this.p = JSON.stringify(e.payload)),
            i && (this.nt = i),
            s && (this.at = s),
            r && ((this.wxmpTemplateMsg = (0, o.default)(r)), (this.wxmpTemplateMsg.data = JSON.stringify(this.wxmpTemplateMsg.data)))
          var a = t.type
          if (((this.t = a), a === n.Scene.CS)) {
            var c = e
            this.tid = c.teamId
          }
          this.guid = e.messageId
        }
        return (
          (e.prototype.validate = function (e) {
            if (e.type === t.MessageType.TEXT && JSON.stringify(e.payload).length > 3072) throw Error('message-length limit 3kb')
          }),
          e
        )
      })()
    e.default = i
  })(di),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = Go,
        o = Z,
        i = Uo,
        r = fe,
        s = et,
        a = pe,
        c = Bo,
        u = ui,
        l = di,
        f = de,
        d = et,
        p = (function () {
          function e() {
            this.payloadImprover = new c.PayloadImprover()
          }
          return (
            (e.prototype.send = function (e) {
              var n = this
              this.validate(e)
              var i = e.message,
                r = e.accessToken,
                s = i.buildOptions,
                c = s.createOptions,
                u = c.notification,
                l = c.wxmpTemplateMsg,
                f = c.to
              f.data || (f.data = {}), (i.status = o.MessageStatus.SENDING)
              var d = s.complete,
                p = this.payloadImprover.improve(e)
              Promise.all([d, p])
                .then(function () {
                  return t.__awaiter(n, void 0, void 0, function () {
                    var n
                    return t.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return c.beforeSend ? ((n = JSON.parse(JSON.stringify(i))), [4, c.beforeSend(n)]) : [3, 2]
                        case 1:
                          t.sent(), (t.label = 2)
                        case 2:
                          return this.doSend(i, f, u, l, r, e), [2]
                      }
                    })
                  })
                })
                .catch(function (t) {
                  ;(i.status = o.MessageStatus.FAIL), a.CallbackUtils.onFailed(e, { code: (t && t.code) || 400, content: (t && t.content) || t })
                })
            }),
            (e.prototype.doSend = function (e, t, i, c, p, h) {
              var m = new l.default(e, t, i, c, p)
              u.IMEC.i.fire(n.IM_INTERNAL_EVENTS.MESSAGE_SENDING, e)
              var y = new d.Rocket({
                name: r.RocketTypes.publishIM,
                params: m,
                unique: !0,
                permission: d.Permission.WRITE,
                singleTimeout: f.SocketTimeout.commonRequestSingle,
                totalTimeout: f.SocketTimeout.commonRequestTotal,
                fail: function (t) {
                  ;(e.status = o.MessageStatus.FAIL),
                    u.IMEC.i.fire(n.IM_INTERNAL_EVENTS.MESSAGE_SEND_FAILED, e),
                    a.CallbackUtils.onFailed(h, { code: t.resultCode, content: t.content })
                },
                success: function (t) {
                  if (
                    ((e.status = o.MessageStatus.SUCCESS),
                    (e.timestamp = t.content.timestamp),
                    (e.messageId = JSON.stringify(t.content.id)),
                    e.scene() === o.Scene.CS)
                  ) {
                    var i = e
                    i.customerId() !== s.G.Socket.user().id && (i.sessionId = t.content.sessionId)
                  }
                  e.clearUseLessAttribute(), u.IMEC.i.fire(n.IM_INTERNAL_EVENTS.MESSAGE_SEND_SUCCESS, e), a.CallbackUtils.onSuccess(h, e)
                },
              })
              s.G.Socket.e(y)
            }),
            (e.prototype.validate = function (e) {
              var t = e.message
              if (!(t instanceof i.AbstractMessage)) throw new Error('it is invalid message')
              if (t.status !== o.MessageStatus.NEW) throw new Error('Please create a new message, a message can only be sent once')
            }),
            e
          )
        })()
      e.default = p
    })(xo)
  var pi = {},
    hi = {},
    mi = {},
    yi = {},
    gi = {},
    vi = {},
    Si = { __esModule: !0, SortedInserter: void 0 },
    Ei = (function () {
      function e() {}
      return (
        (e.prototype.insert = function (e, t) {
          var n = this.binarySearch(e, t)
          if (n >= 0) e.splice(n, 1, t)
          else {
            var o = -n - 1
            e.splice(o, 0, t)
          }
        }),
        (e.prototype.binarySearch = function (e, t) {
          for (var n = 0, o = e.length - 1; n <= o; ) {
            var i = (o + n) >> 1,
              r = this.compare(t, e[i])
            if (r > 0) n = i + 1
            else {
              if (!(r < 0)) return i
              o = i - 1
            }
          }
          return -n - 1
        }),
        e
      )
    })()
  ;(Si.SortedInserter = Ei),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = Z,
        o = te,
        i = Si,
        r = (function () {
          function e(e) {
            ;(this.messages = new Array()), (this.allLoaded = !1), (this.target = e)
          }
          return (
            (e.prototype.all = function () {
              return this.messages
            }),
            (e.prototype.sliceOverLengthMessages = function () {
              this.messages.length > e.CACHE_MAX_LENGTH &&
                ((this.messages = this.messages.slice(-e.CACHE_MAX_LENGTH)), !0 === this.allLoaded && (this.allLoaded = !1))
            }),
            (e.prototype.getMaxMessage = function () {
              return this.messages[this.messages.length - 1]
            }),
            (e.prototype.loadLocalMessages = function (e, t) {
              var n = [],
                o = this.messages.length
              if (t) {
                if (o > 0) {
                  var i = this.messages[0].timestamp,
                    r = this.messages[o - 1].timestamp
                  if (t >= i && t <= r)
                    for (var s = o - 1; s >= 0; s--) {
                      var a = this.messages[s]
                      if (a.timestamp < t) {
                        if (!(n.length < e)) break
                        n.unshift(a)
                      }
                    }
                }
              } else n = this.messages.slice(-e)
              return n
            }),
            (e.prototype.cacheServerMessages = function (t, n) {
              var o = this,
                i = this.messages[0]
              this.messages.length < e.CACHE_MAX_LENGTH &&
                (!t.lastTimestamp || (this.messages.length > 0 && i.timestamp === t.lastTimestamp)) &&
                (n.forEach(function (t) {
                  e.sortedInserter.insert(o.messages, t)
                }),
                n.length < t.limit && (this.allLoaded = !0))
            }),
            (e.prototype.findMessageByTime = function (e) {
              return this.messages.find(function (t) {
                return e === t.timestamp
              })
            }),
            (e.prototype.findMessagesByTimes = function (e) {
              var t = this,
                n = []
              return (
                e.forEach(function (e) {
                  var i = t.findMessageByTime(e)
                  o.default.isDef(i) && n.push(i)
                }),
                n
              )
            }),
            (e.prototype.existsMessage = function (e) {
              return this.findMessageIndexById(e) > -1
            }),
            (e.prototype.findMessageIndexById = function (e) {
              return this.messages.findIndex(function (t) {
                return e === t.messageId
              })
            }),
            (e.prototype.deleteMessage = function (e) {
              var t = this.findMessageIndexById(e)
              t >= 0 && this.messages.splice(t, 1)
            }),
            (e.prototype.recallMessage = function (e) {
              var t = this
              return e.times
                .map(function (e) {
                  return t.findMessageByTime(e)
                })
                .filter(function (e) {
                  return o.default.isDef(e)
                })
                .map(function (t) {
                  return (t.recalled = !0), (t.recaller = e.recaller), t
                })
            }),
            (e.prototype.isEmpty = function () {
              return 0 === this.messages.length
            }),
            (e.prototype.deleteMessages = function (e) {
              var t = this
              e.forEach(function (e) {
                t.deleteMessage(e.messageId)
              })
            }),
            (e.prototype.saveMessage = function (t) {
              e.sortedInserter.insert(this.messages, t), this.sliceOverLengthMessages()
            }),
            (e.prototype.maxSuccessMessageTime = function () {
              for (var e = this.messages.length - 1; e >= 0; e--)
                if (this.messages[e].status === n.MessageStatus.SUCCESS) return this.messages[e].timestamp
              return 0
            }),
            (e.prototype.minTime = function () {
              return this.isEmpty() ? 0 : this.messages[0].timestamp
            }),
            (e.prototype.correctPosition = function (e) {
              this.deleteMessage(e.messageId), this.saveMessage(e)
            }),
            (e.CACHE_MAX_LENGTH = 200),
            (e.sortedInserter = new ((function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this
              }
              return (
                t.__extends(n, e),
                (n.prototype.compare = function (e, t) {
                  var n = e.timestamp - t.timestamp
                  return n > 0 ? 1 : 0 === n ? 0 : -1
                }),
                n
              )
            })(i.SortedInserter))()),
            e
          )
        })()
      e.default = r
    })(vi)
  var _i = {},
    bi = {},
    Mi = { __esModule: !0, Target: void 0 },
    wi = Z,
    Ci = te,
    Ii = et,
    Ti = (function () {
      function e(e, t, n) {
        ;(this.scene = e), (this.id = t), Ci.default.isDef(n) && (this.teamId = n)
      }
      return (
        (e.prototype.toString = function () {
          return wi.Scene.PRIVATE === this.scene || wi.Scene.GROUP === this.scene
            ? this.scene + '#' + this.id
            : this.scene + '#' + this.id + '#' + this.teamId
        }),
        (e.prototype.customerId = function () {
          if (wi.Scene.CS === this.scene) return this.id === this.teamId ? Ii.G.Socket.user().id : this.id
        }),
        (e.byScene = function (t, n, o) {
          return new e(t, n, o)
        }),
        (e.byIMMessage = function (t) {
          var n,
            o,
            i = t.scene()
          if (i === wi.Scene.PRIVATE) {
            var r = t.senderId,
              s = t.targetId()
            o = Ii.G.Socket.user().id === r ? s : r
          } else if (i === wi.Scene.GROUP) o = t.targetId()
          else {
            if (i !== wi.Scene.CS) throw { code: 400, content: 'scene '.concat(i, ' not exists') }
            ;(o = t.targetId()), (n = t.teamId)
          }
          return new e(i, o, n)
        }),
        (e.byMessageReadRemoteEvent = function (t) {
          var n,
            o = t.scene,
            i = t.targetId,
            r = t.markerId,
            s = t.teamId
          return (
            o === wi.Scene.PRIVATE
              ? (n = Ii.G.Socket.user().id === r ? i : r)
              : o === wi.Scene.GROUP
              ? (n = i)
              : o === wi.Scene.CS && (n = i === s ? (r === Ii.G.Socket.user().id ? s : r) : r === Ii.G.Socket.user().id ? i : s),
            new e(o, n, s)
          )
        }),
        (e.byIMMessageDeletedEvent = function (t) {
          var n = t.scene,
            o = t.deleterId
          return n === wi.Scene.PRIVATE
            ? new e(n, Ii.G.Socket.user().id === o ? t.targetId : o)
            : n === wi.Scene.GROUP
            ? new e(n, t.targetId)
            : void 0
        }),
        (e.byConversationDTO = function (e) {
          var t = e.lastMessage
          return this.byIMMessage(t)
        }),
        (e.byConversationId = function (t, n) {
          var o
          if (t === wi.Scene.PRIVATE) {
            var i = n.split(':', 2)
            o = i[0] === Ii.G.Socket.user().id ? i[1] : i[0]
          } else o = n
          return new e(t, o)
        }),
        e
      )
    })()
  ;(Mi.Target = Ti), (bi.__esModule = !0), (bi.DeleteMessageRequest = void 0)
  var ki = Z,
    Ni = Mi,
    Ri = function (e) {
      var t = this
      this.times = new Array()
      var n = e[0],
        o = Ni.Target.byIMMessage(n)
      ;(this.scene = o.scene),
        (this.targetId = o.id),
        e.forEach(function (e) {
          e.status === ki.MessageStatus.SUCCESS && t.times.push(e.timestamp)
        }),
        this.times.sort(function (e, t) {
          return e < t ? -1 : e == t ? 0 : 1
        })
    }
  ;(bi.DeleteMessageRequest = Ri),
    (function (e) {
      e.__esModule = !0
      var t = Z,
        n = bi,
        o = de,
        i = fe,
        r = et,
        s = (function () {
          function e() {}
          return (
            (e.deleteServerMessages = function (e) {
              var t = new n.DeleteMessageRequest(e)
              return t.times.length < 0
                ? Promise.resolve()
                : new Promise(function (e, n) {
                    var s = new r.Rocket({
                      name: i.RocketTypes.IM_DELETE_MESSAGE,
                      params: t,
                      permission: r.Permission.WRITE,
                      singleTimeout: o.SocketTimeout.commonQuerySingle,
                      totalTimeout: o.SocketTimeout.commonQueryTotal,
                      success: function (t) {
                        200 === t.code ? e(t) : n(t)
                      },
                      fail: function (e) {
                        n(e)
                      },
                    })
                    r.G.Socket.e(s)
                  })
            }),
            (e.validate = function (e) {
              for (var n = e.messages, o = 0; o < n.length; o++) {
                var i = n[o]
                if (i.status === t.MessageStatus.SENDING)
                  throw { code: 400, content: 'message[' + o + "] is '" + i.status + "' and cannot be deleted" }
              }
            }),
            e
          )
        })()
      e.default = s
    })(_i)
  var Pi = {},
    Ai = {}
  !(function (e) {
    e.__esModule = !0
    var t = function (e, t, n, o, i) {
      ;(this.scene = e), (this.id = t), (this.after = n), (this.min = o), (this.teamId = i)
    }
    e.default = t
  })(Ai)
  var Oi = { __esModule: !0, ReadMessageMarkRequest: void 0 },
    Di = function (e, t, n, o) {
      ;(this.id = e), (this.scene = t), (this.lastTimestamp = n), (this.teamId = o)
    }
  Oi.ReadMessageMarkRequest = Di
  var xi = {},
    Gi = { __esModule: !0, PrivateMessage: void 0 },
    Ui = Q,
    Li = Z,
    Fi = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.read = !1), t
      }
      return (
        Ui.__extends(t, e),
        (t.prototype.scene = function () {
          return Li.Scene.PRIVATE
        }),
        (t.prototype.targetId = function () {
          return this.receiverId
        }),
        t
      )
    })(Uo.AbstractMessage)
  Gi.PrivateMessage = Fi
  var Bi = { __esModule: !0, GroupMessage: void 0 },
    qi = Q,
    ji = Z,
    Vi = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        qi.__extends(t, e),
        (t.prototype.scene = function () {
          return ji.Scene.GROUP
        }),
        (t.prototype.targetId = function () {
          return this.groupId
        }),
        t
      )
    })(Uo.AbstractMessage)
  Bi.GroupMessage = Vi
  var Hi = { __esModule: !0, CSMessage: void 0 },
    zi = Q,
    Wi = Z,
    Ji = et,
    Xi = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.accepted = !1), t
      }
      return (
        zi.__extends(t, e),
        (t.prototype.scene = function () {
          return Wi.Scene.CS
        }),
        (t.prototype.targetId = function () {
          return Ji.G.Socket.user().id === this.customerId() ? this.teamId : this.customerId()
        }),
        (t.prototype.sendByCustomer = function () {
          return this.to === this.teamId
        }),
        (t.prototype.customerId = function () {
          return this.sendByCustomer() ? this.senderId : this.to
        }),
        (t.prototype.isOtherSent = function () {
          return Ji.G.Socket.user().id === this.customerId() ? this.senderId !== Ji.G.Socket.user().id : this.senderId === this.customerId()
        }),
        t
      )
    })(Uo.AbstractMessage)
  Hi.CSMessage = Xi
  var Qi = {}
  !(function (e) {
    var t
    ;(e.__esModule = !0),
      (e.CSMessageType = void 0),
      ((t = e.CSMessageType || (e.CSMessageType = {})).ACCEPT = 'CS_ACCEPT'),
      (t.END = 'CS_END'),
      (t.TRANSFER = 'CS_TRANSFER')
  })(Qi),
    (xi.__esModule = !0),
    (xi.RemoteAbbrMessageBuilder = void 0)
  var Yi = Z,
    Ki = Gi,
    $i = Bi,
    Zi = Hi,
    er = te,
    tr = et,
    nr = Qi,
    or = (function () {
      function e() {}
      return (
        (e.prototype.build = function (e) {
          var t,
            n = e.t
          n === Yi.Scene.PRIVATE
            ? (((t = new Ki.PrivateMessage()).read = !1), (t.receiverId = e.r))
            : n === Yi.Scene.GROUP
            ? (((t = new $i.GroupMessage()).groupId = e.r), (t.senderData = e.d ? JSON.parse(e.d) : {}))
            : n === Yi.Scene.CS &&
              (((t = new Zi.CSMessage()).to = e.r),
              (t.teamId = e.tid),
              (t.senderData = e.d ? JSON.parse(e.d) : {}),
              (t.accepted = e.accepted),
              t.customerId() !== tr.G.Socket.user().id && (t.sessionId = e.sessionId)),
            (t.senderId = e.s),
            (t.messageId = e.i),
            (t.timestamp = e.ts),
            (t.type = e.mt)
          var o = e.p
          if (er.default.isDef(o))
            if (n === Yi.Scene.CS && t.type === nr.CSMessageType.TRANSFER) {
              var i = JSON.parse(o)
              ;(i.transferTo.data = JSON.parse(i.transferTo.data)), (t.payload = i)
            } else t.payload = JSON.parse(o)
          var r = e.rc
          return (
            er.default.isDef(r) && !0 === r ? ((t.recalled = r), (t.recaller = e.recaller)) : (t.recalled = !1),
            (t.status = Yi.MessageStatus.SUCCESS),
            t
          )
        }),
        e
      )
    })()
  ;(xi.RemoteAbbrMessageBuilder = or), (Pi.__esModule = !0), (Pi.RemoteHistory = void 0)
  var ir = Q,
    rr = Z,
    sr = Ai,
    ar = fe,
    cr = de,
    ur = et,
    lr = Oi,
    fr = xi,
    dr = (function () {
      function e() {
        this.builder = new fr.RemoteAbbrMessageBuilder()
      }
      return (
        (e.prototype.sync = function (e, t, n, o, i) {
          var r = new sr.default(e, t, n, o, i)
          return new Promise(function (e, t) {
            var n = new ur.Rocket({
              name: ar.RocketTypes.IM_HISTORY_CHANGE,
              params: r,
              permission: ur.Permission.READ,
              singleTimeout: cr.SocketTimeout.commonQuerySingle,
              totalTimeout: cr.SocketTimeout.commonQueryTotal,
              fail: function (e) {
                t(e)
              },
              success: function (t) {
                var n = t.content
                e(n)
              },
            })
            ur.G.Socket.e(n)
          })
        }),
        (e.prototype.loadServerMessages = function (e, t) {
          var n = this
          return new Promise(function (o, i) {
            var r = new ur.Rocket({
              name: ar.RocketTypes.IM_HISTORY,
              params: t,
              permission: ur.Permission.READ,
              singleTimeout: cr.SocketTimeout.commonQuerySingle,
              totalTimeout: cr.SocketTimeout.commonQueryTotal,
              fail: function (e) {
                i(e)
              },
              success: function (t) {
                var i = t.content
                ;(i.messages = n.convertServerMessages(e, i.messages)), o(i)
              },
            })
            ur.G.Socket.e(r)
          })
        }),
        (e.prototype.convertServerMessages = function (e, t) {
          var n = this,
            o = [],
            i = e.scene,
            r = e.id
          return (
            t.forEach(function (t) {
              if (((t.t = i), rr.Scene.PRIVATE === i)) t.r = t.s === ur.G.Socket.user().id ? r : ur.G.Socket.user().id
              else if (rr.Scene.GROUP === i) t.r = r
              else if (rr.Scene.CS === i) {
                var s = e.customerId(),
                  a = e.teamId
                s === ur.G.Socket.user().id ? (t.r = a) : (t.r = s)
              }
              var c = n.builder.build(t)
              o.push(c)
            }),
            o
          )
        }),
        (e.prototype.updateServerOffsets = function (e, t) {
          return ir.__awaiter(this, void 0, void 0, function () {
            var n
            return ir.__generator(this, function (o) {
              return (
                (n = new lr.ReadMessageMarkRequest(t.id, t.scene, e, t.teamId)),
                [
                  2,
                  new Promise(function (e, t) {
                    var o = new ur.Rocket({
                      name: ar.RocketTypes.IM_MARK_AS_READ,
                      params: n,
                      permission: ur.Permission.WRITE,
                      singleTimeout: cr.SocketTimeout.commonRequestSingle,
                      totalTimeout: cr.SocketTimeout.commonRequestTotal,
                      success: function (t) {
                        e(t)
                      },
                      fail: function (e) {
                        t(e)
                      },
                    })
                    ur.G.Socket.e(o)
                  }),
                ]
              )
            })
          })
        }),
        (e.instance = new e()),
        e
      )
    })()
  Pi.RemoteHistory = dr
  var pr = { __esModule: !0, UserOffsets: void 0 },
    hr = te,
    mr = et,
    yr = (function () {
      function e() {
        ;(this.offsetMap = new Map()), (this.markingTime = 0), (this.userId = mr.G.Socket.user().id)
      }
      return (
        (e.prototype.updateOffset = function (e, t) {
          var n = this.offsetMap.get(e)
          return hr.default.isDef(n) ? t > n && (this.offsetMap.set(e, t), !0) : (this.offsetMap.set(e, t), !0)
        }),
        (e.prototype.updateUserOffsets = function (e) {
          var t = this
          e.forEach(function (e) {
            var n = e.userId,
              o = e.offset
            t.updateOffset(n, o)
          })
        }),
        (e.prototype.updateMyOffset = function (e) {
          return this.updateOffset(this.userId, e)
        }),
        (e.prototype.myOffset = function () {
          return this.getOffset(this.userId)
        }),
        (e.prototype.getOffset = function (e) {
          var t = this.offsetMap.get(e)
          return t || 0
        }),
        e
      )
    })()
  pr.UserOffsets = yr
  var gr = {}
  !(function (e) {
    e.__esModule = !0
    var t = function (e, t, n, o, i) {
      ;(this.id = e), (this.scene = t), (this.lastTimestamp = n), (this.limit = o), (this.teamId = i)
    }
    e.default = t
  })(gr)
  var vr = { __esModule: !0, UnreadAmountMaxMessageChangeDetector: void 0 },
    Sr = Go,
    Er = ui,
    _r = (function () {
      function e(e) {
        this.history = e
      }
      return (
        (e.prototype.pre = function () {
          ;(this.oldLastMessage = this.history.getMaxMessage()),
            (this.oldUnreadAmount = this.history.unreadAmount()),
            this.oldLastMessage &&
              ((this.oldLastMessageRecalled = this.oldLastMessage.recalled),
              (this.oldLastMessageRead = this.oldLastMessage.read),
              (this.oldLastMessageStatus = this.oldLastMessage.status))
        }),
        (e.prototype.post = function () {
          var e,
            t,
            n,
            o = this.history.unreadAmount(),
            i = this.history.getMaxMessage()
          i && ((n = i.status), (e = i.read), (t = i.recalled))
          var r = this.history.target
          this.oldLastMessage !== i || this.oldLastMessageRead !== e || this.oldLastMessageRecalled !== t || this.oldLastMessageStatus !== n
            ? i
              ? Er.IMEC.i.fire(Sr.IM_INTERNAL_EVENTS.MAX_MESSAGE_CHANGED, i)
              : Er.IMEC.i.fire(Sr.IM_INTERNAL_EVENTS.MAX_MESSAGE_DELETED, r)
            : this.oldUnreadAmount !== o && Er.IMEC.i.fire(Sr.IM_INTERNAL_EVENTS.UNREAD_AMOUNT_CHANGED, r)
        }),
        e
      )
    })()
  vr.UnreadAmountMaxMessageChangeDetector = _r
  var br = { __esModule: !0, ServerRecalledEvent: void 0 },
    Mr = function (e, t, n, o) {
      ;(this.scene = e), (this.conversationId = t), (this.recaller = n), (this.times = o)
    }
  br.ServerRecalledEvent = Mr
  var wr = { __esModule: !0, AEC: void 0 },
    Cr = et,
    Ir = (function () {
      function e() {}
      return (
        (e.init = function () {
          this.eventCenter = new Cr.ApiEventCenter()
        }),
        (e.on = function (e, t) {
          this.eventCenter.on(e, t)
        }),
        (e.fire = function (e, t) {
          this.eventCenter.fire(e, t)
        }),
        (e.off = function (e, t) {
          this.eventCenter.off(e, t)
        }),
        e
      )
    })()
  wr.AEC = Ir
  var Tr = {}
  !(function (e) {
    var t
    ;(e.__esModule = !0),
      (e.ImApiEvents = void 0),
      ((t = e.ImApiEvents || (e.ImApiEvents = {})).PRIVATE_MESSAGE_RECEIVED = 'PRIVATE_MESSAGE_RECEIVED'),
      (t.GROUP_MESSAGE_RECEIVED = 'GROUP_MESSAGE_RECEIVED'),
      (t.SYSTEM_MESSAGE_RECEIVED = 'SYSTEM_MESSAGE_RECEIVED'),
      (t.CONVERSATIONS_UPDATED = 'CONVERSATIONS_UPDATED'),
      (t.USER_PRESENCE = 'USER_PRESENCE'),
      (t.GROUP_PRESENCE = 'GROUP_PRESENCE'),
      (t.MESSAGE_DELETED = 'MESSAGE_DELETED'),
      (t.MESSAGE_READ = 'MESSAGE_READ'),
      (t.MESSAGE_RECALLED = 'MESSAGE_RECALLED'),
      (t.CS_MESSAGE_RECEIVED = 'CS_MESSAGE_RECEIVED'),
      (t.PENDING_CONVERSATIONS_UPDATED = 'PENDING_CONVERSATIONS_UPDATED')
  })(Tr),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = Z,
        o = pe,
        i = vi,
        r = _i,
        s = et,
        a = Pi,
        c = pr,
        u = gr,
        l = te,
        f = vr,
        d = Go,
        p = br,
        h = ui,
        m = wr,
        y = Tr,
        g = (function () {
          function e(e) {
            ;(this.expiredTime = 0),
              (this.remoteHistory = a.RemoteHistory.instance),
              (this.target = e),
              (this.userOffsets = new c.UserOffsets()),
              (this.messageCache = new i.default(e))
          }
          return (
            (e.prototype.initMaxMessageAndOffsets = function (e, t) {
              var n = this
              this.existsMessage(e) ||
                (this.messageCache.saveMessage(e),
                t.forEach(function (e) {
                  n.markLocalMessagesRead(n.messageCache.all(), e.userId, e.offset, !1)
                }))
            }),
            (e.prototype.existsMessage = function (e) {
              return this.messageCache.existsMessage(e.messageId)
            }),
            (e.prototype.loadHistory = function (e, n) {
              return t.__awaiter(this, void 0, void 0, function () {
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.expiredTime > 0 && !this.messageCache.isEmpty() ? [4, this.updateByServerChange()] : [3, 2]
                    case 1:
                      t.sent(), (t.label = 2)
                    case 2:
                      return l.default.isUndef(n) ? (n = 10) : n > 30 && (n = 30), [4, this.loadServerMessages(e, n)]
                    case 3:
                      return [2, t.sent()]
                  }
                })
              })
            }),
            (e.prototype.loadServerMessages = function (e, n) {
              return t.__awaiter(this, void 0, void 0, function () {
                var o,
                  i,
                  r,
                  s,
                  a,
                  c,
                  l = this
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (o = this.messageCache.loadLocalMessages(n, e)),
                        !1 !== this.messageCache.allLoaded || o.length === n
                          ? [3, 2]
                          : ((i = n - o.length),
                            (r = o[0] ? o[0].timestamp : e),
                            (s = new u.default(this.target.id.toString(), this.target.scene, r, i, this.target.teamId)),
                            [4, this.remoteHistory.loadServerMessages(this.target, s)])
                      )
                    case 1:
                      ;(a = t.sent()),
                        (c = a.messages),
                        (o = c.concat(o)),
                        this.messageCache.cacheServerMessages(s, c),
                        a.userOffsets.forEach(function (e) {
                          l.userOffsets.updateOffset(e.userId, e.offset)
                        }),
                        this.userOffsets.offsetMap.forEach(function (e, t) {
                          l.markLocalMessagesRead(c, t, e, !1)
                        }),
                        (t.label = 2)
                    case 2:
                      return [2, o]
                  }
                })
              })
            }),
            (e.prototype.deleteMessages = function (e) {
              return t.__awaiter(this, void 0, void 0, function () {
                var n = this
                return t.__generator(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [
                        4,
                        this.aopUnreadAmountMaxMessage(function () {
                          return t.__awaiter(n, void 0, void 0, function () {
                            var n
                            return t.__generator(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return (n = e.messages), [4, r.default.deleteServerMessages(n)]
                                case 1:
                                  return t.sent(), this.messageCache.deleteMessages(n), o.CallbackUtils.onSuccess(e), [2]
                              }
                            })
                          })
                        }),
                      ]
                    case 1:
                      return i.sent(), [2]
                  }
                })
              })
            }),
            (e.prototype.syncDeletedMessage = function (e, t) {
              var n = this
              this.aopUnreadAmountMaxMessage(function () {
                n.doSyncDeletedMessage(e, t)
              })
            }),
            (e.prototype.doSyncDeletedMessage = function (e, t) {
              if (e === s.G.Socket.user().id) {
                var n = this.messageCache.findMessagesByTimes(t)
                this.messageCache.deleteMessages(n), n.length > 0 && m.AEC.fire(y.ImApiEvents.MESSAGE_DELETED, n)
              }
            }),
            (e.prototype.recallMessages = function (e) {
              return t.__awaiter(this, void 0, void 0, function () {
                var n = this
                return t.__generator(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [
                        4,
                        this.aopUnreadAmountMaxMessage(function () {
                          return t.__awaiter(n, void 0, void 0, function () {
                            return t.__generator(this, function (t) {
                              return this.doRecall(e), [2]
                            })
                          })
                        }),
                      ]
                    case 1:
                      return o.sent(), [2]
                  }
                })
              })
            }),
            (e.prototype.doRecall = function (e) {
              var t = this.messageCache.recallMessage(e)
              t.length > 0 && m.AEC.fire(y.ImApiEvents.MESSAGE_RECALLED, t)
            }),
            (e.prototype.expire = function () {
              this.messageCache.isEmpty() || (this.expiredTime = this.messageCache.maxSuccessMessageTime())
            }),
            (e.prototype.updateByServerChange = function () {
              return t.__awaiter(this, void 0, void 0, function () {
                var e = this
                return t.__generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        this.aopUnreadAmountMaxMessage(function () {
                          return t.__awaiter(e, void 0, void 0, function () {
                            var e,
                              n,
                              o,
                              i = this
                            return t.__generator(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return [
                                    4,
                                    this.remoteHistory.sync(
                                      this.target.scene,
                                      this.target.id,
                                      this.expiredTime,
                                      this.messageCache.minTime(),
                                      this.target.teamId
                                    ),
                                  ]
                                case 1:
                                  return (
                                    (e = t.sent()).userOffsets.forEach(function (e) {
                                      i.markLocalMessagesRead(i.messageCache.all(), e.userId, e.offset, !0)
                                    }),
                                    (n = e.deletedMessageTimes).length > 0 && this.doSyncDeletedMessage(s.G.Socket.user().id, n),
                                    (o = e.recalledMessages).length > 0 &&
                                      o.forEach(function (e) {
                                        var t = new p.ServerRecalledEvent(i.target.scene, i.target.id, e.recaller, e.times)
                                        i.doRecall(t)
                                      }),
                                    (this.expiredTime = 0),
                                    [2]
                                  )
                              }
                            })
                          })
                        }),
                      ]
                    case 1:
                      return n.sent(), [2]
                  }
                })
              })
            }),
            (e.prototype.markRead = function () {
              return t.__awaiter(this, void 0, void 0, function () {
                var e = this
                return t.__generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        this.aopUnreadAmountMaxMessage(function () {
                          return t.__awaiter(e, void 0, void 0, function () {
                            var e, n
                            return t.__generator(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return (
                                    (e = this.messageCache.maxSuccessMessageTime()),
                                    (n = this.userOffsets.myOffset()),
                                    e > n ? ((this.userOffsets.markingTime = e), [4, this.remoteHistory.updateServerOffsets(e, this.target)]) : [3, 2]
                                  )
                                case 1:
                                  t.sent(),
                                    e === this.userOffsets.markingTime &&
                                      this.markLocalMessagesRead(this.messageCache.all(), s.G.Socket.user().id, e, !0),
                                    (t.label = 2)
                                case 2:
                                  return [2]
                              }
                            })
                          })
                        }),
                      ]
                    case 1:
                      return n.sent(), [2]
                  }
                })
              })
            }),
            (e.prototype.syncMarkedMessage = function (e) {
              var t = this
              this.aopUnreadAmountMaxMessage(function () {
                t.markLocalMessagesRead(t.messageCache.all(), e.markerId, e.time, !0)
              })
            }),
            (e.prototype.onMessageSending = function (e) {
              var t = this
              this.aopUnreadAmountMaxMessage(function () {
                t.messageCache.saveMessage(e)
              })
            }),
            (e.prototype.onMessageSendSuccess = function (e) {
              var t = this
              this.aopUnreadAmountMaxMessage(function () {
                t.messageCache.correctPosition(e), t.markLocalMessagesRead(t.messageCache.all(), s.G.Socket.user().id, e.timestamp, !0)
              })
            }),
            (e.prototype.onMessageSendFailed = function (e) {
              this.getMaxMessage() === e && h.IMEC.i.fire(d.IM_INTERNAL_EVENTS.MAX_MESSAGE_CHANGED, e)
            }),
            (e.prototype.onMessageReceived = function (e) {
              var t = this
              this.aopUnreadAmountMaxMessage(function () {
                t.messageCache.saveMessage(e), t.markLocalMessagesRead(t.messageCache.all(), e.senderId, e.timestamp, !0)
              })
            }),
            (e.prototype.aopUnreadAmountMaxMessage = function (e, n) {
              return t.__awaiter(this, void 0, void 0, function () {
                var i, r
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return t.trys.push([0, 2, , 3]), (i = new f.UnreadAmountMaxMessageChangeDetector(this)).pre(), [4, e()]
                    case 1:
                      return t.sent(), i.post(), [3, 3]
                    case 2:
                      return (r = t.sent()), o.CallbackUtils.onFailed(n, r), [3, 3]
                    case 3:
                      return [2]
                  }
                })
              })
            }),
            (e.prototype.markLocalMessagesRead = function (e, t, n, o) {
              if ((this.userOffsets.updateOffset(t, n), this.isOtherUserId(t))) {
                var i = this.markMySentRead(e, n)
                o && i.length > 0 && m.AEC.fire(y.ImApiEvents.MESSAGE_READ, i)
              } else t === s.G.Socket.user().id && this.markOthersSentRead(e, n)
            }),
            (e.prototype.markOthersSentRead = function (e, t) {
              if (this.target.scene === n.Scene.PRIVATE)
                for (var o = e.length - 1; o >= 0; o--) {
                  var i = e[o]
                  if (i.isOtherSent() && i.timestamp <= t) {
                    if (i.read) break
                    i.read = !0
                  }
                }
            }),
            (e.prototype.markMySentRead = function (e, t) {
              var o = new Array()
              if (this.target.scene === n.Scene.PRIVATE)
                for (var i = e.length - 1; i >= 0; i--) {
                  var r = e[i]
                  if (!r.isOtherSent() && r.timestamp <= t && r.status === n.MessageStatus.SUCCESS) {
                    if (r.read) break
                    ;(r.read = !0), o.push(r)
                  }
                }
              return o
            }),
            (e.prototype.isOtherUserId = function (e) {
              if (this.target.scene === n.Scene.CS) {
                var t = this.target.customerId()
                return s.G.Socket.user().id === t ? e !== s.G.Socket.user().id : e === t
              }
              return e !== s.G.Socket.user().id
            }),
            (e.prototype.unreadAmount = function (e) {
              var n,
                o,
                i = 0,
                r = this.userOffsets.myOffset(),
                s = this.messageCache.all()
              try {
                for (var a = t.__values(s), c = a.next(); !c.done; c = a.next()) {
                  var u = c.value
                  u.isOtherSent() && !1 === u.recalled && u.timestamp > r && (i += 1)
                }
              } catch (e) {
                n = { error: e }
              } finally {
                try {
                  c && !c.done && (o = a.return) && o.call(a)
                } finally {
                  if (n) throw n.error
                }
              }
              return i
            }),
            (e.prototype.getMaxMessage = function (e) {
              return this.messageCache.getMaxMessage()
            }),
            (e.prototype.maxTime = function (e) {
              var t = this.getMaxMessage()
              return l.default.isDef(t) ? t.timestamp : 0
            }),
            e
          )
        })()
      e.default = g
    })(gi)
  var kr = {},
    Nr = {},
    Rr = { __esModule: !0, LiveSessionRequest: void 0 },
    Pr = function (e, t) {
      ;(this.teamId = e), (this.customerId = t)
    }
  Rr.LiveSessionRequest = Pr
  var Ar = { __esModule: !0, CustomerStatus: void 0 },
    Or = function () {}
  Ar.CustomerStatus = Or
  var Dr = {},
    xr = { __esModule: !0, CSOnlineRequest: void 0 },
    Gr = function (e, t, n) {
      ;(this.teamId = e), (this.teamData = JSON.stringify(t)), (this.agentData = JSON.stringify(n))
    }
  xr.CSOnlineRequest = Gr
  var Ur = { __esModule: !0, CSOfflineRequest: void 0 },
    Lr = function (e) {
      this.teamId = e
    }
  Ur.CSOfflineRequest = Lr
  var Fr = { __esModule: !0, CsAgentsQueryRequest: void 0 },
    Br = function (e) {
      this.teamId = e
    }
  Fr.CsAgentsQueryRequest = Br
  var qr = {},
    jr = {},
    Vr = {},
    Hr = { exports: {} },
    zr =
      /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Wr = [
      'source',
      'protocol',
      'authority',
      'userInfo',
      'user',
      'password',
      'host',
      'port',
      'relative',
      'path',
      'directory',
      'file',
      'query',
      'anchor',
    ],
    Jr = function (e) {
      var t = e,
        n = e.indexOf('['),
        o = e.indexOf(']')
      ;-1 != n && -1 != o && (e = e.substring(0, n) + e.substring(n, o).replace(/:/g, ';') + e.substring(o, e.length))
      for (var i = zr.exec(e || ''), r = {}, s = 14; s--; ) r[Wr[s]] = i[s] || ''
      return (
        -1 != n &&
          -1 != o &&
          ((r.source = t),
          (r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ':')),
          (r.authority = r.authority.replace('[', '').replace(']', '').replace(/;/g, ':')),
          (r.ipv6uri = !0)),
        r
      )
    },
    Xr = { exports: {} },
    Qr = { exports: {} },
    Yr = 1e3,
    Kr = 60 * Yr,
    $r = 60 * Kr,
    Zr = 24 * $r,
    es = 365.25 * Zr,
    ts = function (e, t) {
      t = t || {}
      var n = a(e)
      if ('string' === n && e.length > 0)
        return (function (e) {
          if (((e = String(e)), e.length > 100)) return
          var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e)
          if (!t) return
          var n = parseFloat(t[1])
          switch ((t[2] || 'ms').toLowerCase()) {
            case 'years':
            case 'year':
            case 'yrs':
            case 'yr':
            case 'y':
              return n * es
            case 'days':
            case 'day':
            case 'd':
              return n * Zr
            case 'hours':
            case 'hour':
            case 'hrs':
            case 'hr':
            case 'h':
              return n * $r
            case 'minutes':
            case 'minute':
            case 'mins':
            case 'min':
            case 'm':
              return n * Kr
            case 'seconds':
            case 'second':
            case 'secs':
            case 'sec':
            case 's':
              return n * Yr
            case 'milliseconds':
            case 'millisecond':
            case 'msecs':
            case 'msec':
            case 'ms':
              return n
            default:
              return
          }
        })(e)
      if ('number' === n && !1 === isNaN(e))
        return t.long
          ? (function (e) {
              return ns(e, Zr, 'day') || ns(e, $r, 'hour') || ns(e, Kr, 'minute') || ns(e, Yr, 'second') || e + ' ms'
            })(e)
          : (function (e) {
              if (e >= Zr) return Math.round(e / Zr) + 'd'
              if (e >= $r) return Math.round(e / $r) + 'h'
              if (e >= Kr) return Math.round(e / Kr) + 'm'
              if (e >= Yr) return Math.round(e / Yr) + 's'
              return e + 'ms'
            })(e)
      throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(e))
    }
  function ns(e, t, n) {
    if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + ' ' + n : Math.ceil(e / t) + ' ' + n + 's'
  }
  !(function (e, t) {
    function n(e) {
      var n
      function i() {
        if (i.enabled) {
          var e = i,
            o = +new Date(),
            r = o - (n || o)
          ;(e.diff = r), (e.prev = n), (e.curr = o), (n = o)
          for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a]
          ;(s[0] = t.coerce(s[0])), 'string' != typeof s[0] && s.unshift('%O')
          var c = 0
          ;(s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, o) {
            if ('%%' === n) return n
            c++
            var i = t.formatters[o]
            if ('function' == typeof i) {
              var r = s[c]
              ;(n = i.call(e, r)), s.splice(c, 1), c--
            }
            return n
          })),
            t.formatArgs.call(e, s),
            (i.log || t.log || console.log.bind(console)).apply(e, s)
        }
      }
      return (
        (i.namespace = e),
        (i.enabled = t.enabled(e)),
        (i.useColors = t.useColors()),
        (i.color = (function (e) {
          var n,
            o = 0
          for (n in e) (o = (o << 5) - o + e.charCodeAt(n)), (o |= 0)
          return t.colors[Math.abs(o) % t.colors.length]
        })(e)),
        (i.destroy = o),
        'function' == typeof t.init && t.init(i),
        t.instances.push(i),
        i
      )
    }
    function o() {
      var e = t.instances.indexOf(this)
      return -1 !== e && (t.instances.splice(e, 1), !0)
    }
    ;((t = e.exports = n.debug = n.default = n).coerce = function (e) {
      return e instanceof Error ? e.stack || e.message : e
    }),
      (t.disable = function () {
        t.enable('')
      }),
      (t.enable = function (e) {
        var n
        t.save(e), (t.names = []), (t.skips = [])
        var o = ('string' == typeof e ? e : '').split(/[\s,]+/),
          i = o.length
        for (n = 0; n < i; n++)
          o[n] &&
            ('-' === (e = o[n].replace(/\*/g, '.*?'))[0]
              ? t.skips.push(new RegExp('^' + e.substr(1) + '$'))
              : t.names.push(new RegExp('^' + e + '$')))
        for (n = 0; n < t.instances.length; n++) {
          var r = t.instances[n]
          r.enabled = t.enabled(r.namespace)
        }
      }),
      (t.enabled = function (e) {
        if ('*' === e[e.length - 1]) return !0
        var n, o
        for (n = 0, o = t.skips.length; n < o; n++) if (t.skips[n].test(e)) return !1
        for (n = 0, o = t.names.length; n < o; n++) if (t.names[n].test(e)) return !0
        return !1
      }),
      (t.humanize = ts),
      (t.instances = []),
      (t.names = []),
      (t.skips = []),
      (t.formatters = {})
  })(Qr, Qr.exports),
    (function (e, t) {
      function n() {
        var e
        try {
          e = t.storage.debug
        } catch (e) {}
        return !e && 'undefined' != typeof process && 'env' in process && (e = process.env.DEBUG), e
      }
      ;((t = e.exports = Qr.exports).log = function () {
        return (
          'object' === ('undefined' == typeof console ? 'undefined' : a(console)) &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        )
      }),
        (t.formatArgs = function (e) {
          var n = this.useColors
          if (((e[0] = (n ? '%c' : '') + this.namespace + (n ? ' %c' : ' ') + e[0] + (n ? '%c ' : ' ') + '+' + t.humanize(this.diff)), !n)) return
          var o = 'color: ' + this.color
          e.splice(1, 0, o, 'color: inherit')
          var i = 0,
            r = 0
          e[0].replace(/%[a-zA-Z%]/g, function (e) {
            '%%' !== e && (i++, '%c' === e && (r = i))
          }),
            e.splice(r, 0, o)
        }),
        (t.save = function (e) {
          try {
            null == e ? t.storage.removeItem('debug') : (t.storage.debug = e)
          } catch (e) {}
        }),
        (t.load = n),
        (t.useColors = function () {
          if ('undefined' != typeof window && window.process && 'renderer' === window.process.type) return !0
          if ('undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1
          return (
            ('undefined' != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ('undefined' != typeof window && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
            ('undefined' != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ('undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          )
        }),
        (t.storage =
          'undefined' != typeof chrome && void 0 !== chrome.storage
            ? chrome.storage.local
            : (function () {
                try {
                  return window.localStorage
                } catch (e) {}
              })()),
        (t.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33',
        ]),
        (t.formatters.j = function (e) {
          try {
            return JSON.stringify(e)
          } catch (e) {
            return '[UnexpectedJSONParseError]: ' + e.message
          }
        }),
        t.enable(n())
    })(Xr, Xr.exports)
  var os = Jr,
    is = Xr.exports('socket.io-client:url'),
    rs = function (e, t) {
      var n = e
      ;(t = t || ('undefined' != typeof location && location)), null == e && (e = t.protocol + '//' + t.host)
      'string' == typeof e &&
        ('/' === e.charAt(0) && (e = '/' === e.charAt(1) ? t.protocol + e : t.host + e),
        /^(https?|wss?):\/\//.test(e) || (is('protocol-less url %s', e), (e = void 0 !== t ? t.protocol + '//' + e : 'https://' + e)),
        is('parse %s', e),
        (n = os(e)))
      n.port || (/^(http|ws)$/.test(n.protocol) ? (n.port = '80') : /^(http|ws)s$/.test(n.protocol) && (n.port = '443'))
      n.path = n.path || '/'
      var o = -1 !== n.host.indexOf(':') ? '[' + n.host + ']' : n.host
      return (n.id = n.protocol + '://' + o + ':' + n.port), (n.href = n.protocol + '://' + o + (t && t.port === n.port ? '' : ':' + n.port)), n
    }
  var ss = {},
    as = {}.toString,
    cs =
      Array.isArray ||
      function (e) {
        return '[object Array]' == as.call(e)
      }
  !(function (e) {
    Xr.exports('socket.io-parser')
    var t = ge.exports,
      n = cs
    function o() {}
    ;(e.protocol = 4),
      (e.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK']),
      (e.CONNECT = 0),
      (e.DISCONNECT = 1),
      (e.EVENT = 2),
      (e.ACK = 3),
      (e.ERROR = 4),
      (e.BINARY_EVENT = 5),
      (e.BINARY_ACK = 6),
      (e.Encoder = o),
      (e.Decoder = r)
    var i = e.ERROR + '"encode error"'
    function r() {
      this.reconstructor = null
    }
    function s(t) {
      return { type: e.ERROR, data: 'parser error: ' + t }
    }
    ;(o.prototype.encode = function (t, n) {
      var o = (function (t) {
        var n = '' + t.type
        ;(e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type) || (n += t.attachments + '-')
        t.nsp && '/' !== t.nsp && (n += t.nsp + ',')
        null != t.id && (n += t.id)
        if (null != t.data) {
          var o = (function (e) {
            try {
              return JSON.stringify(e)
            } catch (e) {
              return !1
            }
          })(t.data)
          if (!1 === o) return i
          n += o
        }
        return n
      })(t)
      n([o])
    }),
      t(r.prototype),
      (r.prototype.add = function (t) {
        var o
        if ('string' != typeof t) throw new Error('Unknown type: ' + t)
        ;(o = (function (t) {
          var o = 0,
            i = { type: Number(t.charAt(0)) }
          if (null == e.types[i.type]) return s('unknown packet type ' + i.type)
          if (e.BINARY_EVENT === i.type || e.BINARY_ACK === i.type) {
            for (var r = ''; '-' !== t.charAt(++o) && ((r += t.charAt(o)), o != t.length); );
            if (r != Number(r) || '-' !== t.charAt(o)) throw new Error('Illegal attachments')
            i.attachments = Number(r)
          }
          if ('/' === t.charAt(o + 1))
            for (i.nsp = ''; ++o; ) {
              if (',' === (c = t.charAt(o))) break
              if (((i.nsp += c), o === t.length)) break
            }
          else i.nsp = '/'
          var a = t.charAt(o + 1)
          if ('' !== a && Number(a) == a) {
            for (i.id = ''; ++o; ) {
              var c
              if (null == (c = t.charAt(o)) || Number(c) != c) {
                --o
                break
              }
              if (((i.id += t.charAt(o)), o === t.length)) break
            }
            i.id = Number(i.id)
          }
          if (t.charAt(++o)) {
            var u = (function (e) {
              try {
                return JSON.parse(e)
              } catch (e) {
                return !1
              }
            })(t.substr(o))
            if (!(!1 !== u && (i.type === e.ERROR || n(u)))) return s('invalid payload')
            i.data = u
          }
          return i
        })(t)),
          this.emit('decoded', o)
      }),
      (r.prototype.destroy = function () {
        this.reconstructor && this.reconstructor.finishedReconstruction()
      })
  })(ss)
  var us = { exports: {} },
    ls = {},
    fs = {},
    ds =
      Object.keys ||
      function (e) {
        var t = [],
          n = Object.prototype.hasOwnProperty
        for (var o in e) n.call(e, o) && t.push(o)
        return t
      },
    ps = cs,
    hs = Object.prototype.toString,
    ms = 'function' == typeof Blob || ('undefined' != typeof Blob && '[object BlobConstructor]' === hs.call(Blob)),
    ys = 'function' == typeof File || ('undefined' != typeof File && '[object FileConstructor]' === hs.call(File)),
    gs = function e(t) {
      if (!t || 'object' !== a(t)) return !1
      if (ps(t)) {
        for (var n = 0, o = t.length; n < o; n++) if (e(t[n])) return !0
        return !1
      }
      if (
        ('function' == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(t)) ||
        ('function' == typeof ArrayBuffer && t instanceof ArrayBuffer) ||
        (ms && t instanceof Blob) ||
        (ys && t instanceof File)
      )
        return !0
      if (t.toJSON && 'function' == typeof t.toJSON && 1 === arguments.length) return e(t.toJSON(), !0)
      for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i) && e(t[i])) return !0
      return !1
    }
  var vs = function (e, t, n) {
    var o = !1
    return (n = n || Ss), (i.count = e), 0 === e ? t() : i
    function i(e, r) {
      if (i.count <= 0) throw new Error('after called too many times')
      --i.count, e ? ((o = !0), t(e), (t = n)) : 0 !== i.count || o || t(null, r)
    }
  }
  function Ss() {}
  var Es,
    _s,
    bs,
    Ms = String.fromCharCode
  function ws(e) {
    for (var t, n, o = [], i = 0, r = e.length; i < r; )
      (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < r
        ? 56320 == (64512 & (n = e.charCodeAt(i++)))
          ? o.push(((1023 & t) << 10) + (1023 & n) + 65536)
          : (o.push(t), i--)
        : o.push(t)
    return o
  }
  function Cs(e, t) {
    if (e >= 55296 && e <= 57343) {
      if (t) throw Error('Lone surrogate U+' + e.toString(16).toUpperCase() + ' is not a scalar value')
      return !1
    }
    return !0
  }
  function Is(e, t) {
    return Ms(((e >> t) & 63) | 128)
  }
  function Ts(e, t) {
    if (0 == (4294967168 & e)) return Ms(e)
    var n = ''
    return (
      0 == (4294965248 & e)
        ? (n = Ms(((e >> 6) & 31) | 192))
        : 0 == (4294901760 & e)
        ? (Cs(e, t) || (e = 65533), (n = Ms(((e >> 12) & 15) | 224)), (n += Is(e, 6)))
        : 0 == (4292870144 & e) && ((n = Ms(((e >> 18) & 7) | 240)), (n += Is(e, 12)), (n += Is(e, 6))),
      (n += Ms((63 & e) | 128))
    )
  }
  function ks() {
    if (bs >= _s) throw Error('Invalid byte index')
    var e = 255 & Es[bs]
    if ((bs++, 128 == (192 & e))) return 63 & e
    throw Error('Invalid continuation byte')
  }
  function Ns(e) {
    var t, n
    if (bs > _s) throw Error('Invalid byte index')
    if (bs == _s) return !1
    if (((t = 255 & Es[bs]), bs++, 0 == (128 & t))) return t
    if (192 == (224 & t)) {
      if ((n = ((31 & t) << 6) | ks()) >= 128) return n
      throw Error('Invalid continuation byte')
    }
    if (224 == (240 & t)) {
      if ((n = ((15 & t) << 12) | (ks() << 6) | ks()) >= 2048) return Cs(n, e) ? n : 65533
      throw Error('Invalid continuation byte')
    }
    if (240 == (248 & t) && (n = ((7 & t) << 18) | (ks() << 12) | (ks() << 6) | ks()) >= 65536 && n <= 1114111) return n
    throw Error('Invalid UTF-8 detected')
  }
  var Rs = {
      version: '2.1.2',
      encode: function (e, t) {
        for (var n = !1 !== (t = t || {}).strict, o = ws(e), i = o.length, r = -1, s = ''; ++r < i; ) s += Ts(o[r], n)
        return s
      },
      decode: function (e, t) {
        var n = !1 !== (t = t || {}).strict
        ;(Es = ws(e)), (_s = Es.length), (bs = 0)
        for (var o, i = []; !1 !== (o = Ns(n)); ) i.push(o)
        return (function (e) {
          for (var t, n = e.length, o = -1, i = ''; ++o < n; )
            (t = e[o]) > 65535 && ((i += Ms((((t -= 65536) >>> 10) & 1023) | 55296)), (t = 56320 | (1023 & t))), (i += Ms(t))
          return i
        })(i)
      },
    },
    Ps =
      void 0 !== Ps
        ? Ps
        : 'undefined' != typeof WebKitBlobBuilder
        ? WebKitBlobBuilder
        : 'undefined' != typeof MSBlobBuilder
        ? MSBlobBuilder
        : 'undefined' != typeof MozBlobBuilder && MozBlobBuilder,
    As = (function () {
      try {
        return 2 === new Blob(['hi']).size
      } catch (e) {
        return !1
      }
    })(),
    Os =
      As &&
      (function () {
        try {
          return 2 === new Blob([new Uint8Array([1, 2])]).size
        } catch (e) {
          return !1
        }
      })(),
    Ds = Ps && Ps.prototype.append && Ps.prototype.getBlob
  function xs(e) {
    return e.map(function (e) {
      if (e.buffer instanceof ArrayBuffer) {
        var t = e.buffer
        if (e.byteLength !== t.byteLength) {
          var n = new Uint8Array(e.byteLength)
          n.set(new Uint8Array(t, e.byteOffset, e.byteLength)), (t = n.buffer)
        }
        return t
      }
      return e
    })
  }
  function Gs(e, t) {
    t = t || {}
    var n = new Ps()
    return (
      xs(e).forEach(function (e) {
        n.append(e)
      }),
      t.type ? n.getBlob(t.type) : n.getBlob()
    )
  }
  function Us(e, t) {
    return new Blob(xs(e), t || {})
  }
  'undefined' != typeof Blob && ((Gs.prototype = Blob.prototype), (Us.prototype = Blob.prototype))
  var Ls = As ? (Os ? Blob : Us) : Ds ? Gs : void 0
  !(function (e) {
    var t = ds,
      n = gs,
      o = vs,
      i = Rs
    'undefined' != typeof navigator && /Android/i.test(navigator.userAgent),
      'undefined' != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
      (e.protocol = 3)
    var r = (e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 }),
      s = t(r),
      a = { type: 'error', data: 'parser error' },
      c = Ls
    ;(e.encodePacket = function (e, t, n, o) {
      'function' == typeof t && ((o = t), (t = !1)), 'function' == typeof n && ((o = n), (n = null)), void 0 === e.data || e.data.buffer || e.data
      var s = r[e.type]
      return void 0 !== e.data && (s += n ? i.encode(String(e.data), { strict: !1 }) : String(e.data)), o('' + s)
    }),
      (e.decodePacket = function (e, t, n) {
        if (void 0 === e) return a
        if ('string' == typeof e) {
          if (
            n &&
            !1 ===
              (e = (function (e) {
                try {
                  e = i.decode(e, { strict: !1 })
                } catch (e) {
                  return !1
                }
                return e
              })(e))
          )
            return a
          var o = e.charAt(0)
          return Number(o) == o && s[o] ? (e.length > 1 ? { type: s[o], data: e.substring(1) } : { type: s[o] }) : a
        }
        o = new Uint8Array(e)[0]
        var r = sliceBuffer(e, 1)
        return c && 'blob' === t && (r = new c([r])), { type: s[o], data: r }
      }),
      (e.encodePayload = function (t, i, r) {
        'function' == typeof i && ((r = i), (i = null))
        var s = n(t)
        if (!t.length) return r('0:')
        !(function (e, t, n) {
          for (
            var i = new Array(e.length),
              r = o(e.length, n),
              s = function (e, n, o) {
                t(n, function (t, n) {
                  ;(i[e] = n), o(t, i)
                })
              },
              a = 0;
            a < e.length;
            a++
          )
            s(a, e[a], r)
        })(
          t,
          function (t, n) {
            e.encodePacket(t, !!s && i, !0, function (e) {
              n(
                null,
                (function (e) {
                  return e.length + ':' + e
                })(e)
              )
            })
          },
          function (e, t) {
            return r(t.join(''))
          }
        )
      }),
      (e.decodePayload = function (t, n, o) {
        var i
        if (('function' == typeof n && ((o = n), (n = null)), '' === t)) return o(a, 0, 1)
        for (var r, s, c = '', u = 0, l = t.length; u < l; u++) {
          var f = t.charAt(u)
          if (':' === f) {
            if ('' === c || c != (r = Number(c))) return o(a, 0, 1)
            if (c != (s = t.substr(u + 1, r)).length) return o(a, 0, 1)
            if (s.length) {
              if (((i = e.decodePacket(s, n, !0)), a.type === i.type && a.data === i.data)) return o(a, 0, 1)
              if (!1 === o(i, u + r, l)) return
            }
            ;(u += r), (c = '')
          } else c += f
        }
        return '' !== c ? o(a, 0, 1) : void 0
      })
  })(fs)
  var Fs = fs,
    Bs = qs
  function qs(e) {
    ;(this.path = e.path),
      (this.hostname = e.hostname),
      (this.port = e.port),
      (this.secure = e.secure),
      (this.query = e.query),
      (this.timestampParam = e.timestampParam),
      (this.timestampRequests = e.timestampRequests),
      (this.readyState = ''),
      (this.agent = e.agent || !1),
      (this.socket = e.socket),
      (this.enablesXDR = e.enablesXDR),
      (this.pfx = e.pfx),
      (this.key = e.key),
      (this.passphrase = e.passphrase),
      (this.cert = e.cert),
      (this.ca = e.ca),
      (this.ciphers = e.ciphers),
      (this.rejectUnauthorized = e.rejectUnauthorized),
      (this.forceNode = e.forceNode),
      (this.isReactNative = e.isReactNative),
      (this.extraHeaders = e.extraHeaders),
      (this.localAddress = e.localAddress)
  }
  ;(0, ge.exports)(qs.prototype),
    (qs.prototype.onError = function (e, t) {
      var n = new Error(e)
      return (n.type = 'TransportError'), (n.description = t), this.emit('error', n), this
    }),
    (qs.prototype.open = function () {
      return ('closed' !== this.readyState && '' !== this.readyState) || ((this.readyState = 'opening'), this.doOpen()), this
    }),
    (qs.prototype.close = function () {
      return ('opening' !== this.readyState && 'open' !== this.readyState) || (this.doClose(), this.onClose()), this
    }),
    (qs.prototype.send = function (e) {
      if ('open' !== this.readyState) throw new Error('Transport not open')
      this.write(e)
    }),
    (qs.prototype.onOpen = function () {
      ;(this.readyState = 'open'), (this.writable = !0), this.emit('open')
    }),
    (qs.prototype.onData = function (e) {
      var t = Fs.decodePacket(e, this.socket.binaryType)
      this.onPacket(t)
    }),
    (qs.prototype.onPacket = function (e) {
      this.emit('packet', e)
    }),
    (qs.prototype.onClose = function () {
      ;(this.readyState = 'closed'), this.emit('close')
    })
  var js,
    Vs = {
      encode: function (e) {
        var t = ''
        for (var n in e) e.hasOwnProperty(n) && (t.length && (t += '&'), (t += encodeURIComponent(n) + '=' + encodeURIComponent(e[n])))
        return t
      },
      decode: function (e) {
        for (var t = {}, n = e.split('&'), o = 0, i = n.length; o < i; o++) {
          var r = n[o].split('=')
          t[decodeURIComponent(r[0])] = decodeURIComponent(r[1])
        }
        return t
      },
    },
    Hs = function (e, t) {
      var n = function () {}
      ;(n.prototype = t.prototype), (e.prototype = new n()), (e.prototype.constructor = e)
    },
    zs = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    Ws = 64,
    Js = {},
    Xs = 0,
    Qs = 0
  function Ys(e) {
    var t = ''
    do {
      ;(t = zs[e % Ws] + t), (e = Math.floor(e / Ws))
    } while (e > 0)
    return t
  }
  function Ks() {
    var e = Ys(+new Date())
    return e !== js ? ((Xs = 0), (js = e)) : e + '.' + Ys(Xs++)
  }
  for (; Qs < Ws; Qs++) Js[zs[Qs]] = Qs
  ;(Ks.encode = Ys),
    (Ks.decode = function (e) {
      var t = 0
      for (Qs = 0; Qs < e.length; Qs++) t = t * Ws + Js[e.charAt(Qs)]
      return t
    })
  var $s = Ks,
    Zs = { exports: {} }
  try {
    Zs.exports = 'undefined' != typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()
  } catch (e) {
    Zs.exports = !1
  }
  var ea = Zs.exports,
    ta = function (e) {
      var t = e.xdomain,
        n = e.xscheme,
        o = e.enablesXDR
      try {
        if ('undefined' != typeof XMLHttpRequest && (!t || ea)) return new XMLHttpRequest()
      } catch (e) {}
      try {
        if ('undefined' != typeof XDomainRequest && !n && o) return new XDomainRequest()
      } catch (e) {}
      if (!t)
        try {
          return new self[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP')
        } catch (e) {}
    },
    na = Bs,
    oa = Vs,
    ia = fs,
    ra = Hs,
    sa = $s,
    aa = Xr.exports('engine.io-client:polling'),
    ca = la,
    ua = null != new ta({ xdomain: !1 }).responseType
  function la(e) {
    var t = e && e.forceBase64
    ;(ua && !t) || (this.supportsBinary = !1), na.call(this, e)
  }
  ra(la, na),
    (la.prototype.name = 'polling'),
    (la.prototype.doOpen = function () {
      this.poll()
    }),
    (la.prototype.pause = function (e) {
      var t = this
      function n() {
        aa('paused'), (t.readyState = 'paused'), e()
      }
      if (((this.readyState = 'pausing'), this.polling || !this.writable)) {
        var o = 0
        this.polling &&
          (aa('we are currently polling - waiting to pause'),
          o++,
          this.once('pollComplete', function () {
            aa('pre-pause polling complete'), --o || n()
          })),
          this.writable ||
            (aa('we are currently writing - waiting to pause'),
            o++,
            this.once('drain', function () {
              aa('pre-pause writing complete'), --o || n()
            }))
      } else n()
    }),
    (la.prototype.poll = function () {
      aa('polling'), (this.polling = !0), this.doPoll(), this.emit('poll')
    }),
    (la.prototype.onData = function (e) {
      var t = this
      aa('polling got data %s', e)
      ia.decodePayload(e, this.socket.binaryType, function (e, n, o) {
        if (('opening' === t.readyState && t.onOpen(), 'close' === e.type)) return t.onClose(), !1
        t.onPacket(e)
      }),
        'closed' !== this.readyState &&
          ((this.polling = !1),
          this.emit('pollComplete'),
          'open' === this.readyState ? this.poll() : aa('ignoring poll - transport state "%s"', this.readyState))
    }),
    (la.prototype.doClose = function () {
      var e = this
      function t() {
        aa('writing close packet'), e.write([{ type: 'close' }])
      }
      'open' === this.readyState ? (aa('transport open - closing'), t()) : (aa('transport not open - deferring close'), this.once('open', t))
    }),
    (la.prototype.write = function (e) {
      var t = this
      this.writable = !1
      var n = function () {
        ;(t.writable = !0), t.emit('drain')
      }
      ia.encodePayload(e, this.supportsBinary, function (e) {
        t.doWrite(e, n)
      })
    }),
    (la.prototype.uri = function () {
      var e = this.query || {},
        t = this.secure ? 'https' : 'http',
        n = ''
      return (
        !1 !== this.timestampRequests && (e[this.timestampParam] = sa()),
        this.supportsBinary || e.sid || (e.b64 = 1),
        (e = oa.encode(e)),
        this.port && (('https' === t && 443 !== Number(this.port)) || ('http' === t && 80 !== Number(this.port))) && (n = ':' + this.port),
        e.length && (e = '?' + e),
        t + '://' + (-1 !== this.hostname.indexOf(':') ? '[' + this.hostname + ']' : this.hostname) + n + this.path + e
      )
    })
  var fa,
    da = ca,
    pa = va,
    ha = /\n/g,
    ma = /\\n/g
  function ya() {}
  function ga() {
    return 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0 !== e ? e : {}
  }
  function va(e) {
    if ((da.call(this, e), (this.query = this.query || {}), !fa)) {
      var t = ga()
      fa = t.___eio = t.___eio || []
    }
    this.index = fa.length
    var n = this
    fa.push(function (e) {
      n.onData(e)
    }),
      (this.query.j = this.index),
      'function' == typeof addEventListener &&
        addEventListener(
          'beforeunload',
          function () {
            n.script && (n.script.onerror = ya)
          },
          !1
        )
  }
  Hs(va, da),
    (va.prototype.supportsBinary = !1),
    (va.prototype.doClose = function () {
      this.script && (this.script.parentNode.removeChild(this.script), (this.script = null)),
        this.form && (this.form.parentNode.removeChild(this.form), (this.form = null), (this.iframe = null)),
        da.prototype.doClose.call(this)
    }),
    (va.prototype.doPoll = function () {
      var e = this,
        t = document.createElement('script')
      this.script && (this.script.parentNode.removeChild(this.script), (this.script = null)),
        (t.async = !0),
        (t.src = this.uri()),
        (t.onerror = function (t) {
          e.onError('jsonp poll error', t)
        })
      var n = document.getElementsByTagName('script')[0]
      n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t),
        (this.script = t),
        'undefined' != typeof navigator &&
          /gecko/i.test(navigator.userAgent) &&
          setTimeout(function () {
            var e = document.createElement('iframe')
            document.body.appendChild(e), document.body.removeChild(e)
          }, 100)
    }),
    (va.prototype.doWrite = function (e, t) {
      var n = this
      if (!this.form) {
        var o,
          i = document.createElement('form'),
          r = document.createElement('textarea'),
          s = (this.iframeId = 'eio_iframe_' + this.index)
        ;(i.className = 'socketio'),
          (i.style.position = 'absolute'),
          (i.style.top = '-1000px'),
          (i.style.left = '-1000px'),
          (i.target = s),
          (i.method = 'POST'),
          i.setAttribute('accept-charset', 'utf-8'),
          (r.name = 'd'),
          i.appendChild(r),
          document.body.appendChild(i),
          (this.form = i),
          (this.area = r)
      }
      function a() {
        c(), t()
      }
      function c() {
        if (n.iframe)
          try {
            n.form.removeChild(n.iframe)
          } catch (e) {
            n.onError('jsonp polling iframe removal error', e)
          }
        try {
          var e = '<iframe src="javascript:0" name="' + n.iframeId + '">'
          o = document.createElement(e)
        } catch (e) {
          ;((o = document.createElement('iframe')).name = n.iframeId), (o.src = 'javascript:0')
        }
        ;(o.id = n.iframeId), n.form.appendChild(o), (n.iframe = o)
      }
      ;(this.form.action = this.uri()), c(), (e = e.replace(ma, '\\\n')), (this.area.value = e.replace(ha, '\\n'))
      try {
        this.form.submit()
      } catch (e) {}
      this.iframe.attachEvent
        ? (this.iframe.onreadystatechange = function () {
            'complete' === n.iframe.readyState && a()
          })
        : (this.iframe.onload = a)
    })
  var Sa,
    Ea,
    _a = Bs,
    ba = fs,
    Ma = Vs,
    wa = Hs,
    Ca = $s,
    Ia = Xr.exports('engine.io-client:websocket')
  ;(('undefined' == typeof uni && 'undefined' == typeof wx && 'undefined' == typeof my && 'undefined' == typeof swan) ||
    'undefined' != typeof WebSocket) &&
    ('undefined' != typeof WebSocket ? (Sa = WebSocket) : 'undefined' != typeof self && (Sa = self.WebSocket || self.MozWebSocket))
  var Ta = Sa || Ea
  ;((('undefined' == typeof uni && 'undefined' == typeof wx && 'undefined' == typeof my && 'undefined' == typeof swan) ||
    'undefined' != typeof WebSocket) &&
    'undefined' == typeof GameGlobal) ||
    (Ta = function (e) {
      var t = this
      if (
        ((t.onopen = function () {}),
        (t.onclose = function () {}),
        (t.onmessage = function (e) {}),
        (t.onerror = function (e) {}),
        'object' === ('undefined' == typeof tt ? 'undefined' : a(tt)) && tt.getSystemInfo)
      ) {
        var n = tt.connectSocket({ url: e })
        ;(t.send = function (e) {
          n.send({ data: e })
        }),
          (t.close = function () {
            n.close()
          }),
          n.onOpen(function () {
            t.onopen()
          }),
          n.onError(function (e) {
            t.onerror(e)
          }),
          n.onMessage(function (e) {
            t.onmessage(e)
          }),
          n.onClose(function () {
            t.onclose()
          })
      } else if ('undefined' != typeof my)
        my.connectSocket({ url: e }),
          (t.send = function (e) {
            my.sendSocketMessage({ data: e })
          }),
          (t.close = function (e) {
            my.closeSocket()
          }),
          my.onSocketOpen(function (e) {
            t.onopen()
          }),
          my.onSocketError(function (e) {
            t.onerror(e)
          }),
          my.onSocketMessage(function (e) {
            t.onmessage(e)
          }),
          my.onSocketClose(function (e) {
            t.onclose(e)
          })
      else if ('undefined' != typeof swan)
        swan.connectSocket({ url: e }),
          (t.send = function (e) {
            swan.sendSocketMessage({ data: e })
          }),
          (t.close = function (e) {
            swan.closeSocket()
          }),
          swan.onSocketOpen(function (e) {
            t.onopen()
          }),
          swan.onSocketError(function (e) {
            t.onerror(e)
          }),
          swan.onSocketMessage(function (e) {
            t.onmessage(e)
          }),
          swan.onSocketClose(function (e) {
            t.onclose(e)
          })
      else if ('undefined' != typeof uni) {
        var o = uni.connectSocket({ url: e, complete: function () {} })
        ;(t.send = function (e) {
          o.send({ data: e })
        }),
          (t.close = function () {
            o.close()
          }),
          o.onOpen(function (e) {
            t.onopen()
          }),
          o.onError(function (e) {
            t.onerror(e)
          }),
          o.onMessage(function (e) {
            t.onmessage(e)
          }),
          o.onClose(function (e) {
            t.onclose()
          })
      } else {
        var i = wx.connectSocket({ url: e })
        ;(t.send = function (e) {
          i.send({ data: e })
        }),
          (t.close = function (e) {
            i.close({ code: 1e3 })
          }),
          i.onOpen(function () {
            t.onopen()
          }),
          i.onError(function (e) {
            t.onerror(e)
          }),
          i.onMessage(function (e) {
            t.onmessage(e)
          }),
          i.onClose(function (e) {
            t.onclose(e)
          })
      }
    })
  var ka = Na
  function Na(e) {
    e && e.forceBase64 && (this.supportsBinary = !1),
      (('undefined' == typeof uni && 'undefined' == typeof wx && 'undefined' == typeof my && 'undefined' == typeof swan) ||
        'undefined' != typeof WebSocket) &&
        ((this.perMessageDeflate = e.perMessageDeflate),
        (this.usingBrowserWebSocket = Sa && !e.forceNode),
        (this.protocols = e.protocols),
        this.usingBrowserWebSocket || (Ta = Ea)),
      _a.call(this, e)
  }
  wa(Na, _a),
    (Na.prototype.name = 'websocket'),
    (Na.prototype.supportsBinary = !1),
    (Na.prototype.doOpen = function () {
      var e = this
      if (this.check()) {
        var t,
          n,
          o = this.uri()
        if (
          ((('undefined' == typeof uni && 'undefined' == typeof wx && 'undefined' == typeof my && 'undefined' == typeof swan) ||
            'undefined' != typeof WebSocket) &&
            (t = this.protocols),
          ((n =
            ('undefined' == typeof uni && 'undefined' == typeof wx && 'undefined' == typeof my && 'undefined' == typeof swan) ||
            'undefined' != typeof WebSocket
              ? { agent: this.agent, perMessageDeflate: this.perMessageDeflate }
              : { agent: this.agent }).pfx = this.pfx),
          (n.key = this.key),
          (n.passphrase = this.passphrase),
          (n.cert = this.cert),
          (n.ca = this.ca),
          (n.ciphers = this.ciphers),
          (n.rejectUnauthorized = this.rejectUnauthorized),
          'object' === ('undefined' == typeof navigator ? 'undefined' : a(navigator)) && 'ReactNative' === navigator.product && (n = {}),
          this.extraHeaders && (n.headers = this.extraHeaders),
          this.localAddress && (n.localAddress = this.localAddress),
          'undefined' != typeof cc && 'Windows' === cc.sys.os)
        )
          cc.resources.load('cacert', function (t, n) {
            var i = n.nativeUrl
            ;(e.ws = new Ta(o, [], i)), (e.ws.binaryType = 'arraybuffer'), e.addEventListeners()
          })
        else {
          try {
            ;('undefined' == typeof uni && 'undefined' == typeof wx && 'undefined' == typeof my && 'undefined' == typeof swan) ||
            'undefined' != typeof WebSocket
              ? (this.ws = this.usingBrowserWebSocket && !this.isReactNative ? (t ? new Ta(o, t) : new Ta(o)) : new Ta(o, t, n))
              : (this.ws = new Ta(o))
          } catch (e) {
            return this.emit('error', e)
          }
          void 0 === this.ws.binaryType && (this.supportsBinary = !1),
            this.ws.supports && this.ws.supports.binary
              ? ((this.supportsBinary = !0), (this.ws.binaryType = 'nodebuffer'))
              : (this.ws.binaryType = 'arraybuffer'),
            this.addEventListeners()
        }
      }
    }),
    (Na.prototype.addEventListeners = function () {
      var e = this
      ;(this.ws.onopen = function () {
        e.onOpen()
      }),
        (this.ws.onclose = function () {
          e.onClose()
        }),
        (this.ws.onmessage = function (t) {
          e.onData(t.data)
        }),
        (this.ws.onerror = function (t) {
          e.onError('websocket error', t)
        })
    }),
    (Na.prototype.write = function (e) {
      var t = this
      this.writable = !1
      for (var n = e.length, o = 0, i = n; o < i; o++)
        !(function (e) {
          ba.encodePacket(e, t.supportsBinary, function (o) {
            if (
              ('undefined' == typeof uni && 'undefined' == typeof wx && 'undefined' == typeof my && 'undefined' == typeof swan) ||
              'undefined' != typeof WebSocket
            ) {
              if (!t.usingBrowserWebSocket) {
                var i = {}
                if ((e.options && (i.compress = e.options.compress), t.perMessageDeflate))
                  ('string' == typeof o ? Buffer.byteLength(o) : o.length) < t.perMessageDeflate.threshold && (i.compress = !1)
              }
              try {
                t.usingBrowserWebSocket ? t.ws.send(o) : t.ws.send(o, i)
              } catch (e) {
                Ia('websocket closed before onclose event')
              }
            } else
              try {
                t.ws.send(o)
              } catch (e) {
                Ia('websocket closed before onclose event')
              }
            --n || r()
          })
        })(e[o])
      function r() {
        t.emit('flush'),
          setTimeout(function () {
            ;(t.writable = !0), t.emit('drain')
          }, 0)
      }
    }),
    (Na.prototype.onClose = function () {
      _a.prototype.onClose.call(this)
    }),
    (Na.prototype.doClose = function () {
      void 0 !== this.ws && this.ws.close()
    }),
    (Na.prototype.uri = function () {
      var e = this.query || {},
        t = this.secure ? 'wss' : 'ws',
        n = ''
      return (
        this.port && (('wss' === t && 443 !== Number(this.port)) || ('ws' === t && 80 !== Number(this.port))) && (n = ':' + this.port),
        this.timestampRequests && (e[this.timestampParam] = Ca()),
        this.supportsBinary || (e.b64 = 1),
        (e = Ma.encode(e)).length && (e = '?' + e),
        t + '://' + (-1 !== this.hostname.indexOf(':') ? '[' + this.hostname + ']' : this.hostname) + n + this.path + e
      )
    }),
    (Na.prototype.check = function () {
      return !(!Ta || ('__initialize' in Ta && this.name === Na.prototype.name))
    })
  var Ra = pa,
    Pa = ka
  ;(ls.polling = function (e) {
    var t = !1,
      n = !1
    if ((e.jsonp, 'undefined' != typeof location)) {
      var o = 'https:' === location.protocol,
        i = location.port
      i || (i = o ? 443 : 80), (t = e.hostname !== location.hostname || i !== e.port), (n = e.secure !== o)
    }
    return (e.xdomain = t), (e.xscheme = n), new Ra(e)
  }),
    (ls.websocket = Pa)
  var Aa = [].indexOf,
    Oa = function (e, t) {
      if (Aa) return e.indexOf(t)
      for (var n = 0; n < e.length; ++n) if (e[n] === t) return n
      return -1
    },
    Da = ls,
    xa = ge.exports,
    Ga = Xr.exports('engine.io-client:socket'),
    Ua = Oa,
    La = fs,
    Fa = Jr,
    Ba = Vs,
    qa = ja
  function ja(e, t) {
    if (!(this instanceof ja)) return new ja(e, t)
    ;(t = t || {}),
      e && 'object' === a(e) && ((t = e), (e = null)),
      e
        ? ((e = Fa(e)),
          (t.hostname = e.host),
          (t.secure = 'https' === e.protocol || 'wss' === e.protocol),
          (t.port = e.port),
          e.query && (t.query = e.query))
        : t.host && (t.hostname = Fa(t.host).host),
      (this.secure = null != t.secure ? t.secure : 'undefined' != typeof location && 'https:' === location.protocol),
      t.hostname && !t.port && (t.port = this.secure ? '443' : '80'),
      (this.agent = t.agent || !1),
      (this.hostname = t.hostname || ('undefined' != typeof location ? location.hostname : 'localhost')),
      (this.port = t.port || ('undefined' != typeof location && location.port ? location.port : this.secure ? 443 : 80)),
      (this.query = t.query || {}),
      'string' == typeof this.query && (this.query = Ba.decode(this.query)),
      (this.upgrade = !1 !== t.upgrade),
      (this.path = (t.path || '/engine.io').replace(/\/$/, '') + '/'),
      (this.forceJSONP = !!t.forceJSONP),
      (this.jsonp = !1 !== t.jsonp),
      (this.forceBase64 = !!t.forceBase64),
      (this.enablesXDR = !!t.enablesXDR),
      (this.timestampParam = t.timestampParam || 't'),
      (this.timestampRequests = t.timestampRequests),
      (this.transports = t.transports || ['polling', 'websocket']),
      (this.transportOptions = t.transportOptions || {}),
      (this.readyState = ''),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.policyPort = t.policyPort || 843),
      (this.rememberUpgrade = t.rememberUpgrade || !1),
      (this.binaryType = null),
      (this.onlyBinaryUpgrades = t.onlyBinaryUpgrades),
      (this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {})),
      !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
      this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
      (this.pfx = t.pfx || null),
      (this.key = t.key || null),
      (this.passphrase = t.passphrase || null),
      (this.cert = t.cert || null),
      (this.ca = t.ca || null),
      (this.ciphers = t.ciphers || null),
      (this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized),
      (this.forceNode = !!t.forceNode),
      (this.isReactNative =
        'undefined' != typeof navigator && 'string' == typeof navigator.product && 'reactnative' === navigator.product.toLowerCase()),
      ('undefined' == typeof self || this.isReactNative) &&
        (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders),
        t.localAddress && (this.localAddress = t.localAddress)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingIntervalTimer = null),
      (this.pingTimeoutTimer = null),
      this.open()
  }
  ;(ja.priorWebsocketSuccess = !1),
    xa(ja.prototype),
    (ja.protocol = La.protocol),
    (ja.Socket = ja),
    (ja.Transport = Bs),
    (ja.transports = ls),
    (ja.parser = fs),
    (ja.prototype.createTransport = function (e) {
      Ga('creating transport "%s"', e)
      var t = (function (e) {
        var t = {}
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        return t
      })(this.query)
      ;(t.EIO = La.protocol), (t.transport = e)
      var n = this.transportOptions[e] || {}
      return (
        this.id && (t.sid = this.id),
        new Da[e]({
          query: t,
          socket: this,
          agent: n.agent || this.agent,
          hostname: n.hostname || this.hostname,
          port: n.port || this.port,
          secure: n.secure || this.secure,
          path: n.path || this.path,
          forceJSONP: n.forceJSONP || this.forceJSONP,
          jsonp: n.jsonp || this.jsonp,
          forceBase64: n.forceBase64 || this.forceBase64,
          enablesXDR: n.enablesXDR || this.enablesXDR,
          timestampRequests: n.timestampRequests || this.timestampRequests,
          timestampParam: n.timestampParam || this.timestampParam,
          policyPort: n.policyPort || this.policyPort,
          pfx: n.pfx || this.pfx,
          key: n.key || this.key,
          passphrase: n.passphrase || this.passphrase,
          cert: n.cert || this.cert,
          ca: n.ca || this.ca,
          ciphers: n.ciphers || this.ciphers,
          rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
          perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
          extraHeaders: n.extraHeaders || this.extraHeaders,
          forceNode: n.forceNode || this.forceNode,
          localAddress: n.localAddress || this.localAddress,
          requestTimeout: n.requestTimeout || this.requestTimeout,
          protocols: n.protocols || void 0,
          isReactNative: this.isReactNative,
        })
      )
    }),
    (ja.prototype.open = function () {
      var e
      if (this.rememberUpgrade && ja.priorWebsocketSuccess && -1 !== this.transports.indexOf('websocket')) e = 'websocket'
      else {
        if (0 === this.transports.length) {
          var t = this
          return void setTimeout(function () {
            t.emit('error', 'No transports available')
          }, 0)
        }
        e = this.transports[0]
      }
      this.readyState = 'opening'
      try {
        e = this.createTransport(e)
      } catch (e) {
        return this.transports.shift(), void this.open()
      }
      e.open(), this.setTransport(e)
    }),
    (ja.prototype.setTransport = function (e) {
      Ga('setting transport %s', e.name)
      var t = this
      this.transport && (Ga('clearing existing transport %s', this.transport.name), this.transport.removeAllListeners()),
        (this.transport = e),
        e
          .on('drain', function () {
            t.onDrain()
          })
          .on('packet', function (e) {
            t.onPacket(e)
          })
          .on('error', function (e) {
            t.onError(e)
          })
          .on('close', function () {
            t.onClose('transport close')
          })
    }),
    (ja.prototype.probe = function (e) {
      Ga('probing transport "%s"', e)
      var t = this.createTransport(e, { probe: 1 }),
        n = !1,
        o = this
      function i() {
        if (o.onlyBinaryUpgrades) {
          var i = !this.supportsBinary && o.transport.supportsBinary
          n = n || i
        }
        n ||
          (Ga('probe transport "%s" opened', e),
          t.send([{ type: 'ping', data: 'probe' }]),
          t.once('packet', function (i) {
            if (!n)
              if ('pong' === i.type && 'probe' === i.data) {
                if ((Ga('probe transport "%s" pong', e), (o.upgrading = !0), o.emit('upgrading', t), !t)) return
                ;(ja.priorWebsocketSuccess = 'websocket' === t.name),
                  Ga('pausing current transport "%s"', o.transport.name),
                  o.transport.pause(function () {
                    n ||
                      ('closed' !== o.readyState &&
                        (Ga('changing transport and sending upgrade packet'),
                        l(),
                        o.setTransport(t),
                        t.send([{ type: 'upgrade' }]),
                        o.emit('upgrade', t),
                        (t = null),
                        (o.upgrading = !1),
                        o.flush()))
                  })
              } else {
                Ga('probe transport "%s" failed', e)
                var r = new Error('probe error')
                ;(r.transport = t.name), o.emit('upgradeError', r)
              }
          }))
      }
      function r() {
        n || ((n = !0), l(), t.close(), (t = null))
      }
      function s(n) {
        var i = new Error('probe error: ' + n)
        ;(i.transport = t.name), r(), Ga('probe transport "%s" failed because of error: %s', e, n), o.emit('upgradeError', i)
      }
      function a() {
        s('transport closed')
      }
      function c() {
        s('socket closed')
      }
      function u(e) {
        t && e.name !== t.name && (Ga('"%s" works - aborting "%s"', e.name, t.name), r())
      }
      function l() {
        t.removeListener('open', i),
          t.removeListener('error', s),
          t.removeListener('close', a),
          o.removeListener('close', c),
          o.removeListener('upgrading', u)
      }
      ;(ja.priorWebsocketSuccess = !1),
        t.once('open', i),
        t.once('error', s),
        t.once('close', a),
        this.once('close', c),
        this.once('upgrading', u),
        t.open()
    }),
    (ja.prototype.onOpen = function () {
      if (
        (Ga('socket open'),
        (this.readyState = 'open'),
        (ja.priorWebsocketSuccess = 'websocket' === this.transport.name),
        this.emit('open'),
        this.flush(),
        'open' === this.readyState && this.upgrade && this.transport.pause)
      ) {
        Ga('starting upgrade probes')
        for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
      }
    }),
    (ja.prototype.onPacket = function (e) {
      if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState)
        switch ((Ga('socket receive: type "%s", data "%s"', e.type, e.data), this.emit('packet', e), this.emit('heartbeat'), e.type)) {
          case 'open':
            this.onHandshake(JSON.parse(e.data))
            break
          case 'pong':
            this.setPing(), this.emit('pong')
            break
          case 'error':
            var t = new Error('server error')
            ;(t.code = e.data), this.onError(t)
            break
          case 'message':
            this.emit('data', e.data), this.emit('message', e.data)
        }
      else Ga('packet received with socket readyState "%s"', this.readyState)
    }),
    (ja.prototype.onHandshake = function (e) {
      this.emit('handshake', e),
        (this.id = e.sid),
        (this.transport.query.sid = e.sid),
        (this.upgrades = this.filterUpgrades(e.upgrades)),
        (this.pingInterval = e.pingInterval),
        (this.pingTimeout = e.pingTimeout),
        this.onOpen(),
        'closed' !== this.readyState && (this.setPing(), this.removeListener('heartbeat', this.onHeartbeat), this.on('heartbeat', this.onHeartbeat))
    }),
    (ja.prototype.onHeartbeat = function (e) {
      clearTimeout(this.pingTimeoutTimer)
      var t = this
      t.pingTimeoutTimer = setTimeout(function () {
        'closed' !== t.readyState && t.onClose('ping timeout')
      }, e || t.pingInterval + t.pingTimeout)
    }),
    (ja.prototype.setPing = function () {
      var e = this
      clearTimeout(e.pingIntervalTimer),
        (e.pingIntervalTimer = setTimeout(function () {
          Ga('writing ping packet - expecting pong within %sms', e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
        }, e.pingInterval))
    }),
    (ja.prototype.ping = function () {
      var e = this
      this.sendPacket('ping', function () {
        e.emit('ping')
      })
    }),
    (ja.prototype.onDrain = function () {
      this.writeBuffer.splice(0, this.prevBufferLen), (this.prevBufferLen = 0), 0 === this.writeBuffer.length ? this.emit('drain') : this.flush()
    }),
    (ja.prototype.flush = function () {
      'closed' !== this.readyState &&
        this.transport.writable &&
        !this.upgrading &&
        this.writeBuffer.length &&
        (Ga('flushing %d packets in socket', this.writeBuffer.length),
        this.transport.send(this.writeBuffer),
        (this.prevBufferLen = this.writeBuffer.length),
        this.emit('flush'))
    }),
    (ja.prototype.write = ja.prototype.send =
      function (e, t, n) {
        return this.sendPacket('message', e, t, n), this
      }),
    (ja.prototype.sendPacket = function (e, t, n, o) {
      if (
        ('function' == typeof t && ((o = t), (t = void 0)),
        'function' == typeof n && ((o = n), (n = null)),
        'closing' !== this.readyState && 'closed' !== this.readyState)
      ) {
        ;(n = n || {}).compress = !1 !== n.compress
        var i = { type: e, data: t, options: n }
        this.emit('packetCreate', i), this.writeBuffer.push(i), o && this.once('flush', o), this.flush()
      }
    }),
    (ja.prototype.close = function () {
      if ('opening' === this.readyState || 'open' === this.readyState) {
        this.readyState = 'closing'
        var e = this
        this.writeBuffer.length
          ? this.once('drain', function () {
              this.upgrading ? o() : t()
            })
          : this.upgrading
          ? o()
          : t()
      }
      function t() {
        e.onClose('forced close'), Ga('socket closing - telling transport to close'), e.transport.close()
      }
      function n() {
        e.removeListener('upgrade', n), e.removeListener('upgradeError', n), t()
      }
      function o() {
        e.once('upgrade', n), e.once('upgradeError', n)
      }
      return this
    }),
    (ja.prototype.onError = function (e) {
      Ga('socket error %j', e), (ja.priorWebsocketSuccess = !1), this.emit('error', e), this.onClose('transport error', e)
    }),
    (ja.prototype.onClose = function (e, t) {
      if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
        Ga('socket close with reason: "%s"', e)
        clearTimeout(this.pingIntervalTimer),
          clearTimeout(this.pingTimeoutTimer),
          this.transport.removeAllListeners('close'),
          this.transport.close(),
          this.transport.removeAllListeners(),
          (this.readyState = 'closed'),
          (this.id = null),
          this.emit('close', e, t),
          (this.writeBuffer = []),
          (this.prevBufferLen = 0)
      }
    }),
    (ja.prototype.filterUpgrades = function (e) {
      for (var t = [], n = 0, o = e.length; n < o; n++) ~Ua(this.transports, e[n]) && t.push(e[n])
      return t
    }),
    (us.exports = qa),
    (us.exports.parser = fs)
  var Va = { exports: {} },
    Ha = function (e, t) {
      for (var n = [], o = (t = t || 0) || 0; o < e.length; o++) n[o - t] = e[o]
      return n
    }
  var za = function (e, t, n) {
    return (
      e.on(t, n),
      {
        destroy: function () {
          e.removeListener(t, n)
        },
      }
    )
  }
  var Wa = [].slice,
    Ja = function (e, t) {
      if (('string' == typeof t && (t = e[t]), 'function' != typeof t)) throw new Error('bind() requires a function')
      var n = Wa.call(arguments, 2)
      return function () {
        return t.apply(e, n.concat(Wa.call(arguments)))
      }
    }
  !(function (e, t) {
    var n = ss,
      o = ge.exports,
      i = Ha,
      r = za,
      s = Ja,
      c = (Xr.exports('socket.io-client:socket'), Vs),
      u = gs
    e.exports = d
    var l = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1,
      },
      f = o.prototype.emit
    function d(e, t, n) {
      ;(this.io = e),
        (this.nsp = t),
        (this.json = this),
        (this.ids = 0),
        (this.acks = {}),
        (this.receiveBuffer = []),
        (this.sendBuffer = []),
        (this.connected = !1),
        (this.disconnected = !0),
        (this.flags = {}),
        n && n.query && (this.query = n.query),
        this.io.autoConnect && this.open()
    }
    o(d.prototype),
      (d.prototype.subEvents = function () {
        if (!this.subs) {
          var e = this.io
          this.subs = [r(e, 'open', s(this, 'onopen')), r(e, 'packet', s(this, 'onpacket')), r(e, 'close', s(this, 'onclose'))]
        }
      }),
      (d.prototype.open = d.prototype.connect =
        function () {
          return this.connected || (this.subEvents(), this.io.open(), 'open' === this.io.readyState && this.onopen(), this.emit('connecting')), this
        }),
      (d.prototype.send = function () {
        var e = i(arguments)
        return e.unshift('message'), this.emit.apply(this, e), this
      }),
      (d.prototype.emit = function (e) {
        if (l.hasOwnProperty(e)) return f.apply(this, arguments), this
        var t = i(arguments),
          o = { type: (void 0 !== this.flags.binary ? this.flags.binary : u(t)) ? n.BINARY_EVENT : n.EVENT, data: t, options: {} }
        return (
          (o.options.compress = !this.flags || !1 !== this.flags.compress),
          'function' == typeof t[t.length - 1] && (this.ids, (this.acks[this.ids] = t.pop()), (o.id = this.ids++)),
          this.connected ? this.packet(o) : this.sendBuffer.push(o),
          (this.flags = {}),
          this
        )
      }),
      (d.prototype.packet = function (e) {
        ;(e.nsp = this.nsp), this.io.packet(e)
      }),
      (d.prototype.onopen = function () {
        if ('/' !== this.nsp)
          if (this.query) {
            var e = 'object' === a(this.query) ? c.encode(this.query) : this.query
            this.packet({ type: n.CONNECT, query: e })
          } else this.packet({ type: n.CONNECT })
      }),
      (d.prototype.onclose = function (e) {
        ;(this.connected = !1), (this.disconnected = !0), delete this.id, this.emit('disconnect', e)
      }),
      (d.prototype.onpacket = function (e) {
        var t = e.nsp === this.nsp,
          o = e.type === n.ERROR && '/' === e.nsp
        if (t || o)
          switch (e.type) {
            case n.CONNECT:
              this.onconnect()
              break
            case n.EVENT:
            case n.BINARY_EVENT:
              this.onevent(e)
              break
            case n.ACK:
            case n.BINARY_ACK:
              this.onack(e)
              break
            case n.DISCONNECT:
              this.ondisconnect()
              break
            case n.ERROR:
              this.emit('error', e.data)
          }
      }),
      (d.prototype.onevent = function (e) {
        var t = e.data || []
        null != e.id && t.push(this.ack(e.id)), this.connected ? f.apply(this, t) : this.receiveBuffer.push(t)
      }),
      (d.prototype.ack = function (e) {
        var t = this,
          o = !1
        return function () {
          if (!o) {
            o = !0
            var r = i(arguments)
            t.packet({ type: u(r) ? n.BINARY_ACK : n.ACK, id: e, data: r })
          }
        }
      }),
      (d.prototype.onack = function (e) {
        var t = this.acks[e.id]
        'function' == typeof t ? (e.id, e.data, t.apply(this, e.data), delete this.acks[e.id]) : e.id
      }),
      (d.prototype.onconnect = function () {
        ;(this.connected = !0), (this.disconnected = !1), this.emit('connect'), this.emitBuffered()
      }),
      (d.prototype.emitBuffered = function () {
        var e
        for (e = 0; e < this.receiveBuffer.length; e++) f.apply(this, this.receiveBuffer[e])
        for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e])
        this.sendBuffer = []
      }),
      (d.prototype.ondisconnect = function () {
        this.nsp, this.destroy(), this.onclose('io server disconnect')
      }),
      (d.prototype.destroy = function () {
        if (this.subs) {
          for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy()
          this.subs = null
        }
        this.io.destroy(this)
      }),
      (d.prototype.close = d.prototype.disconnect =
        function () {
          return (
            this.connected && (this.nsp, this.packet({ type: n.DISCONNECT })),
            this.destroy(),
            this.connected && this.onclose('io client disconnect'),
            this
          )
        }),
      (d.prototype.compress = function (e) {
        return (this.flags.compress = e), this
      }),
      (d.prototype.binary = function (e) {
        return (this.flags.binary = e), this
      })
  })(Va)
  var Xa = Qa
  function Qa(e) {
    ;(e = e || {}),
      (this.ms = e.min || 100),
      (this.max = e.max || 1e4),
      (this.factor = e.factor || 2),
      (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
      (this.attempts = 0)
  }
  ;(Qa.prototype.duration = function () {
    var e = this.ms * Math.pow(this.factor, this.attempts++)
    if (this.jitter) {
      var t = Math.random(),
        n = Math.floor(t * this.jitter * e)
      e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
    }
    return 0 | Math.min(e, this.max)
  }),
    (Qa.prototype.reset = function () {
      this.attempts = 0
    }),
    (Qa.prototype.setMin = function (e) {
      this.ms = e
    }),
    (Qa.prototype.setMax = function (e) {
      this.max = e
    }),
    (Qa.prototype.setJitter = function (e) {
      this.jitter = e
    })
  var Ya = { __esModule: !0, URIResolver: void 0 },
    Ka = ne,
    $a = (function () {
      function e() {}
      return (
        (e.init = function (e, t, n) {
          ;(this.host = e), ((void 0 !== t && !1 === t) || !0 === n) && (this.https = !1)
        }),
        (e.isMP = function () {
          return [
            Ka.PlatformType.MP_WX,
            Ka.PlatformType.MP_ALI,
            Ka.PlatformType.MP_BYTE,
            Ka.PlatformType.MP_WGAME,
            Ka.PlatformType.MP_BAIDU,
          ].includes(Ka.PlatformDetector.currentPlatform())
        }),
        (e.uri = function () {
          var e = 'http'
          return this.https && (e += 's'), e + '://' + this.index() + this.host
        }),
        (e.index = function () {
          return 0 == this.i ? (this.i = Math.floor(Math.random() * (this.max - 1) + 1)) : (this.i = (this.i % this.max) + 1), this.i
        }),
        (e.i = 0),
        (e.max = 5),
        (e.https = !0),
        e
      )
    })()
  Ya.URIResolver = $a
  var Za = us.exports,
    ec = Va.exports,
    tc = ge.exports,
    nc = ss,
    oc = za,
    ic = Ja,
    rc = (Xr.exports('socket.io-client:manager'), Oa),
    sc = Xa,
    ac = Ya.URIResolver,
    uc = oe.runStatus,
    lc = Object.prototype.hasOwnProperty,
    fc = dc
  function dc(e, t) {
    if (!(this instanceof dc)) return new dc(e, t)
    e && 'object' === a(e) && ((t = e), (e = void 0)),
      ((t = t || {}).path = t.path || '/socket.io'),
      (this.nsps = {}),
      (this.subs = []),
      (this.opts = t),
      this.reconnection(!1 !== t.reconnection),
      this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(t.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
      this.randomizationFactor(t.randomizationFactor || 0.5),
      (this.backoff = new sc({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() })),
      this.timeout(null == t.timeout ? 2e4 : t.timeout),
      (this.readyState = 'closed'),
      (this.uri = e),
      (this.connecting = []),
      (this.lastPing = null),
      (this.encoding = !1),
      (this.packetBuffer = [])
    var n = t.parser || nc
    ;(this.encoder = new n.Encoder()), (this.decoder = new n.Decoder()), (this.autoConnect = !1 !== t.autoConnect), this.autoConnect && this.open()
  }
  ;(dc.prototype.emitAll = function () {
    for (var e in (this.emit.apply(this, arguments), this.nsps)) lc.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
  }),
    (dc.prototype.updateSocketIds = function () {
      for (var e in this.nsps) lc.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
    }),
    (dc.prototype.generateId = function (e) {
      return ('/' === e ? '' : e + '#') + this.engine.id
    }),
    tc(dc.prototype),
    (dc.prototype.reconnection = function (e) {
      return arguments.length ? ((this._reconnection = !!e), this) : this._reconnection
    }),
    (dc.prototype.reconnectionAttempts = function (e) {
      return arguments.length ? ((this._reconnectionAttempts = e), this) : this._reconnectionAttempts
    }),
    (dc.prototype.reconnectionDelay = function (e) {
      return arguments.length ? ((this._reconnectionDelay = e), this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
    }),
    (dc.prototype.randomizationFactor = function (e) {
      return arguments.length ? ((this._randomizationFactor = e), this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
    }),
    (dc.prototype.reconnectionDelayMax = function (e) {
      return arguments.length ? ((this._reconnectionDelayMax = e), this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
    }),
    (dc.prototype.timeout = function (e) {
      return arguments.length ? ((this._timeout = e), this) : this._timeout
    }),
    (dc.prototype.maybeReconnectOnOpen = function () {
      !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
    }),
    (dc.prototype.open = dc.prototype.connect =
      function (e, t) {
        if ((this.readyState, ~this.readyState.indexOf('open'))) return this
        this.uri, (this.engine = Za(this.uri, this.opts))
        var n = this.engine,
          o = this
        ;(this.readyState = 'opening'), (this.skipReconnect = !1)
        var i = oc(n, 'open', function () {
            o.onopen(), e && e()
          }),
          s = oc(
            n,
            'error',
            (function () {
              var t = (function (e) {
                return function () {
                  var t = this,
                    n = arguments
                  return new Promise(function (o, i) {
                    var r = e.apply(t, n)
                    function s(e) {
                      c(r, o, i, s, a, 'next', e)
                    }
                    function a(e) {
                      c(r, o, i, s, a, 'throw', e)
                    }
                    s(void 0)
                  })
                }
              })(
                r().mark(function t(n) {
                  var i
                  return r().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          ;(o.uri = ac.uri()),
                            o.cleanup(),
                            (o.readyState = 'closed'),
                            o.emitAll('connect_error', n),
                            e ? (((i = new Error('Connection error')).data = n), e(i)) : o.maybeReconnectOnOpen()
                        case 6:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )
              return function (e) {
                return t.apply(this, arguments)
              }
            })()
          )
        if (!1 !== this._timeout) {
          var a = this._timeout,
            u = setTimeout(function () {
              i.destroy(), n.close(), n.emit('error', 'timeout'), o.emitAll('connect_timeout', a)
            }, a)
          this.subs.push({
            destroy: function () {
              clearTimeout(u)
            },
          })
        }
        return this.subs.push(i), this.subs.push(s), this
      }),
    (dc.prototype.onopen = function () {
      this.cleanup(), (this.readyState = 'open'), this.emit('open')
      var e = this.engine
      this.subs.push(oc(e, 'data', ic(this, 'ondata'))),
        this.subs.push(oc(e, 'ping', ic(this, 'onping'))),
        this.subs.push(oc(e, 'pong', ic(this, 'onpong'))),
        this.subs.push(oc(e, 'error', ic(this, 'onerror'))),
        this.subs.push(oc(e, 'close', ic(this, 'onclose'))),
        this.subs.push(oc(this.decoder, 'decoded', ic(this, 'ondecoded')))
    }),
    (dc.prototype.onping = function () {
      ;(this.lastPing = new Date()), this.emitAll('ping')
    }),
    (dc.prototype.onpong = function () {
      this.emitAll('pong', new Date() - this.lastPing)
    }),
    (dc.prototype.ondata = function (e) {
      this.decoder.add(e)
    }),
    (dc.prototype.ondecoded = function (e) {
      this.emit('packet', e)
    }),
    (dc.prototype.onerror = function (e) {
      this.emitAll('error', e)
    }),
    (dc.prototype.socket = function (e, t) {
      var n = this.nsps[e]
      if (!n) {
        ;(n = new ec(this, e, t)), (this.nsps[e] = n)
        var o = this
        n.on('connecting', i),
          n.on('connect', function () {
            n.id = o.generateId(e)
          }),
          this.autoConnect && i()
      }
      function i() {
        ~rc(o.connecting, n) || o.connecting.push(n)
      }
      return n
    }),
    (dc.prototype.destroy = function (e) {
      var t = rc(this.connecting, e)
      ~t && this.connecting.splice(t, 1), this.connecting.length || this.close()
    }),
    (dc.prototype.packet = function (e) {
      var t = this
      e.query && 0 === e.type && (e.nsp += '?' + e.query),
        t.encoding
          ? t.packetBuffer.push(e)
          : ((t.encoding = !0),
            this.encoder.encode(e, function (n) {
              for (var o = 0; o < n.length; o++) t.engine.write(n[o], e.options)
              ;(t.encoding = !1), t.processPacketQueue()
            }))
    }),
    (dc.prototype.processPacketQueue = function () {
      if (this.packetBuffer.length > 0 && !this.encoding) {
        var e = this.packetBuffer.shift()
        this.packet(e)
      }
    }),
    (dc.prototype.cleanup = function () {
      for (var e = this.subs.length, t = 0; t < e; t++) {
        this.subs.shift().destroy()
      }
      ;(this.packetBuffer = []), (this.encoding = !1), (this.lastPing = null), this.decoder.destroy()
    }),
    (dc.prototype.close = dc.prototype.disconnect =
      function () {
        ;(this.skipReconnect = !0),
          (this.reconnecting = !1),
          'opening' === this.readyState && this.cleanup(),
          this.backoff.reset(),
          (this.readyState = 'closed'),
          this.engine && this.engine.close()
      }),
    (dc.prototype.onclose = function (e) {
      this.cleanup(),
        this.backoff.reset(),
        (this.readyState = 'closed'),
        this.emit('close', e),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }),
    (dc.prototype.reconnect = function () {
      if ((uc.isBackend(), this.reconnecting || this.skipReconnect)) return this
      var e = this
      if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitAll('reconnect_failed'), (this.reconnecting = !1)
      else {
        var t = this.backoff.duration()
        this.reconnecting = !0
        var n = setTimeout(function () {
          if (uc.isBackend())
            return (e.reconnecting = !1), e.reconnect(), void e.emitAll('reconnect_error', 'Uniapp running backend, skipped reconnect...')
          e.skipReconnect ||
            (e.emitAll('reconnect_attempt', e.backoff.attempts),
            e.emitAll('reconnecting', e.backoff.attempts),
            e.skipReconnect ||
              e.open(function (t) {
                t ? ((e.reconnecting = !1), e.reconnect(), e.emitAll('reconnect_error', t.data)) : e.onreconnect()
              }))
        }, t)
        this.subs.push({
          destroy: function () {
            clearTimeout(n)
          },
        })
      }
    }),
    (dc.prototype.onreconnect = function () {
      var e = this.backoff.attempts
      ;(this.reconnecting = !1), this.backoff.reset(), this.updateSocketIds(), this.emitAll('reconnect', e)
    }),
    (function (e, t) {
      var n = rs,
        o = ss,
        i = fc
      Xr.exports('socket.io-client')
      e.exports = t = s
      var r = (t.managers = {})
      function s(e, t) {
        'object' === a(e) && ((t = e), (e = void 0)), (t = t || {})
        var o,
          s = n(e),
          c = s.source,
          u = s.id,
          l = s.path,
          f = r[u] && l in r[u].nsps
        return (
          t.forceNew || t['force new connection'] || !1 === t.multiplex || f ? (o = i(c, t)) : (r[u] || (r[u] = i(c, t)), (o = r[u])),
          s.query && !t.query && (t.query = s.query),
          o.socket(s.path, t)
        )
      }
      ;(t.protocol = o.protocol), (t.connect = s), (t.Manager = fc), (t.Socket = Va.exports)
    })(Hr, Hr.exports),
    (function (e) {
      e.__esModule = !0
      var t = $,
        n = et,
        o = Hr.exports,
        i = te,
        r = (function () {
          function e() {
            ;(this.io = o),
              (this.status = t.NetworkStatus.DISCONNECTED),
              (this.permissions = [n.Permission.NONE]),
              (this.connectedObservers = []),
              (this.disconnectedObservers = [])
          }
          return (
            (e.prototype.connect = function () {
              this.status = t.NetworkStatus.CONNECTING
            }),
            (e.prototype.socketio = function () {
              return this.io
            }),
            (e.prototype.on = function (e, t) {
              this.io.on(e, t)
            }),
            (e.prototype.disconnect = function () {
              this.io.disconnect()
            }),
            (e.prototype.getStatus = function () {
              return this.status
            }),
            (e.prototype.addConnectedObserver = function (e) {
              i.default.isFunction(e) && this.connectedObservers.push(e)
            }),
            (e.prototype.addDisconnectedObserver = function (e) {
              i.default.isFunction(e) && this.disconnectedObservers.push(e)
            }),
            (e.prototype.notify = function (e, t) {
              for (var n = 0; n < e.length; n++) e[n](t)
            }),
            e
          )
        })()
      e.default = r
    })(Vr)
  var pc = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = $,
      o = (function (e) {
        function o(t) {
          var n = e.call(this) || this
          return (n.reconnectingObservers = []), n.addReconnectingObserver(t.onReconnecting), n.addDisconnectedObserver(t.onDisconnected), n
        }
        return (
          t.__extends(o, e),
          (o.prototype.connect = function (t) {
            e.prototype.connect.call(this), (this.io = this.io.connect(t.uri, t.opts)), this.initListener()
          }),
          (o.prototype.initListener = function () {
            var e = this
            this.io.on('connect', function () {
              ;(e.status = n.NetworkStatus.CONNECTED), e.notify(e.connectedObservers)
            }),
              this.io.on('reconnecting', function (t) {
                ;(e.status = n.NetworkStatus.CONNECTING), e.notify(e.reconnectingObservers, t)
              }),
              this.io.on('disconnect', function () {
                ;(e.status = n.NetworkStatus.DISCONNECTED), e.notify(e.disconnectedObservers)
              }),
              this.io.on('connect_error', function (e) {})
          }),
          (o.prototype.addReconnectingObserver = function (e) {
            this.reconnectingObservers.push(e)
          }),
          o
        )
      })(Vr.default)
    e.default = o
  })(pc)
  var hc = {},
    mc = {},
    yc = { __esModule: !0, Cookie: void 0 },
    gc = Q,
    vc = (function () {
      function e() {}
      return (
        (e.get = function (e) {
          var t,
            n,
            o = encodeURIComponent(e) + '=',
            i = document.cookie.split('; ')
          try {
            for (var r = gc.__values(i), s = r.next(); !s.done; s = r.next()) {
              var a = s.value
              if (a.startsWith(o)) return decodeURIComponent(a.substring(o.length))
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              s && !s.done && (n = r.return) && n.call(r)
            } finally {
              if (t) throw t.error
            }
          }
          return null
        }),
        (e.set = function (e, t, n, o, i, r) {
          void 0 === i && (i = '/'), void 0 === r && (r = !1)
          var s = encodeURIComponent(e) + '=' + encodeURIComponent(t)
          n instanceof Date && (s += '; expires=' + n.toGMTString()),
            i && (s += '; path=' + i),
            o && (s += '; domain=' + o),
            r && (s += '; secure'),
            (document.cookie = s)
        }),
        (e.remove = function (t, n, o, i) {
          void 0 === o && (o = '/'), void 0 === i && (i = !1), e.set(t, '', new Date(0), n, o, i)
        }),
        e
      )
    })()
  ;(yc.Cookie = vc), (mc.__esModule = !0), (mc.LocalStorageDispatcher = mc.BrowserStorage = mc.AbstractLocalStorage = void 0)
  var Sc = Q,
    Ec = yc,
    _c = i,
    bc = y,
    Mc = (function () {
      function e() {}
      return (
        (e.prototype.asyncGet = function (e) {
          var t = this.get(e)
          return Promise.resolve(t)
        }),
        (e.prototype.asyncPut = function (e, t) {
          return this.put(e, t), Promise.resolve()
        }),
        (e.prototype.get = function (e) {
          var t = this.doGet(e)
          return (t = JSON.parse(t))
        }),
        (e.prototype.put = function (e, t) {
          this.doPut(e, JSON.stringify(t))
        }),
        e
      )
    })()
  mc.AbstractLocalStorage = Mc
  var wc = (function (e) {
      function t() {
        var t = e.call(this) || this
        t.domain = null
        return (
          (t.domain =
            'undefined' != typeof location && /^(?:[A-za-z0-9-]+\.)+[A-za-z]{2,4}(?:[\/\?#][\/=\?%\-&~`@[\]\':+!\.#\w]*)?$/.test(location.host)
              ? location.host.split('.').slice(-2).join('.')
              : null),
          t
        )
      }
      return (
        Sc.__extends(t, e),
        (t.prototype.doGet = function (e) {
          return Ec.Cookie.get(e) || null
        }),
        (t.prototype.doPut = function (e, t) {
          var n = new Date(2030, 12, 31, 0, 0, 0, 0),
            o = this.domain
          Ec.Cookie.set(e, t, n, o)
        }),
        (t.prototype.remove = function (e) {
          var t = this.domain
          Ec.Cookie.remove(e, t)
        }),
        (t.prototype.support = function () {
          return 'undefined' != typeof navigator && !0 === navigator.cookieEnabled
        }),
        t
      )
    })(Mc),
    Cc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Sc.__extends(t, e),
        (t.prototype.doGet = function (e) {
          return localStorage.getItem(e) || null
        }),
        (t.prototype.doPut = function (e, t) {
          localStorage.setItem(e, t)
        }),
        (t.prototype.remove = function (e) {
          localStorage.removeItem(e)
        }),
        (t.prototype.support = function () {
          return !('undefined' != typeof GameGlobal || 'undefined' == typeof localStorage || !localStorage.setItem)
        }),
        t
      )
    })(Mc),
    Ic = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Sc.__extends(t, e),
        (t.prototype.doGet = function (e) {
          return uni.getStorageSync(e) || null
        }),
        (t.prototype.doPut = function (e, t) {
          uni.setStorageSync(e, t)
        }),
        (t.prototype.remove = function (e) {
          uni.removeStorageSync(e)
        }),
        (t.prototype.support = function () {
          return !('object' !== ('undefined' == typeof uni ? 'undefined' : a(uni)) || !uni.getStorageSync)
        }),
        t
      )
    })(Mc),
    Tc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Sc.__extends(t, e),
        (t.prototype.doGet = function (e) {
          return cc.sys.localStorage.getItem(e) || null
        }),
        (t.prototype.doPut = function (e, t) {
          cc.sys.localStorage.setItem(e, t)
        }),
        (t.prototype.remove = function (e) {
          cc.sys.localStorage.removeItem(e)
        }),
        (t.prototype.support = function () {
          return 'undefined' != typeof cc && void 0 !== cc.sys.localStorage
        }),
        t
      )
    })(Mc),
    kc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Sc.__extends(t, e),
        (t.prototype.doGet = function (e) {
          return wx.getStorageSync(e) || null
        }),
        (t.prototype.doPut = function (e, t) {
          wx.setStorageSync(e, t)
        }),
        (t.prototype.remove = function (e) {
          wx.removeStorageSync(e)
        }),
        (t.prototype.support = function () {
          return !('object' !== ('undefined' == typeof wx ? 'undefined' : a(wx)) || !wx.getStorageSync || 'undefined' != typeof tt)
        }),
        t
      )
    })(Mc),
    Nc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Sc.__extends(t, e),
        (t.prototype.asyncGet = function (e) {
          return Sc.__awaiter(this, void 0, void 0, function () {
            var t
            return Sc.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, _c.RNPlugins.asyncStorage.getItem(e)]
                case 1:
                  return (t = n.sent()), [2, JSON.parse(t)]
              }
            })
          })
        }),
        (t.prototype.asyncPut = function (e, t) {
          return _c.RNPlugins.asyncStorage.setItem(e, JSON.stringify(t))
        }),
        (t.prototype.doPut = function (e, t) {
          throw new Error('Method not implemented.')
        }),
        (t.prototype.remove = function (e) {
          _c.RNPlugins.asyncStorage.removeItem(e)
        }),
        (t.prototype.support = function () {
          return bc.FrameworkDetector.currentFramework() === bc.Framework.REACT_NATIVE
        }),
        (t.prototype.doGet = function (e) {
          throw new Error('Method not implemented.')
        }),
        t
      )
    })(Mc),
    Rc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Sc.__extends(t, e),
        (t.prototype.doGet = function (e) {
          var t = my.getStorageSync({ key: e }).data || null
          return 'string' == typeof JSON.parse(t) ? JSON.parse(t) : t
        }),
        (t.prototype.doPut = function (e, t) {
          my.setStorageSync({ key: e, data: JSON.stringify(t) })
        }),
        (t.prototype.remove = function (e) {
          my.removeStorageSync({ key: e })
        }),
        (t.prototype.support = function () {
          return !('undefined' == typeof my || !my.getStorageSync)
        }),
        t
      )
    })(Mc)
  !(function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this
    }
    Sc.__extends(t, e),
      (t.prototype.doGet = function (e) {
        return qq.getStorageSync(e) || null
      }),
      (t.prototype.doPut = function (e, t) {
        qq.setStorageSync(e, t)
      }),
      (t.prototype.remove = function (e) {
        qq.removeStorageSync(e)
      }),
      (t.prototype.support = function () {
        return !('undefined' == typeof qq || !qq.getStorageSync)
      })
  })(Mc)
  var Pc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Sc.__extends(t, e),
        (t.prototype.doGet = function (e) {
          return tt.getStorageSync(e) || null
        }),
        (t.prototype.doPut = function (e, t) {
          tt.setStorageSync(e, t)
        }),
        (t.prototype.remove = function (e) {
          tt.removeStorageSync(e)
        }),
        (t.prototype.support = function () {
          return !('object' !== ('undefined' == typeof tt ? 'undefined' : a(tt)) || !tt.getStorageSync)
        }),
        t
      )
    })(Mc),
    Ac = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Sc.__extends(t, e),
        (t.prototype.doGet = function (e) {
          return swan.getStorageSync(e) || null
        }),
        (t.prototype.doPut = function (e, t) {
          swan.setStorageSync(e, t)
        }),
        (t.prototype.remove = function (e) {
          swan.removeStorageSync(e)
        }),
        (t.prototype.support = function () {
          return !('undefined' == typeof swan || !swan.getStorageSync)
        }),
        t
      )
    })(Mc),
    Oc = (function (e) {
      function t() {
        var n = e.call(this) || this
        return (n.api = t.dispatch()), n.api, n
      }
      return (
        Sc.__extends(t, e),
        (t.dispatch = function () {
          var e = new Cc(),
            t = new wc()
          return e.support() ? e : t
        }),
        (t.prototype.doGet = function (e) {
          return this.api.doGet(e)
        }),
        (t.prototype.doPut = function (e, t) {
          this.api.put(e, t)
        }),
        (t.prototype.remove = function (e) {
          this.api.remove(e)
        }),
        (t.prototype.support = function () {
          return 'undefined' != typeof localStorage
        }),
        t
      )
    })(Mc)
  mc.BrowserStorage = Oc
  var Dc = (function () {
    function e() {
      this.supportedStorage = null
      var t = e.storages
      t.push(new Ic()),
        t.push(new Tc()),
        t.push(new Cc()),
        t.push(new kc()),
        t.push(new Nc()),
        t.push(new Rc()),
        t.push(new Ac()),
        t.push(new Pc()),
        t.push(new wc()),
        this.dispatch(),
        this.supportedStorage
    }
    return (
      (e.localStorage = function () {
        return this.instance.supportedStorage
      }),
      (e.prototype.dispatch = function () {
        var t, n
        try {
          for (var o = Sc.__values(e.storages), i = o.next(); !i.done; i = o.next()) {
            var r = i.value
            if (r.support()) {
              this.supportedStorage = r
              break
            }
          }
        } catch (e) {
          t = { error: e }
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o)
          } finally {
            if (t) throw t.error
          }
        }
      }),
      (e.storages = new Array()),
      (e.instance = new e()),
      e
    )
  })()
  ;(mc.LocalStorageDispatcher = Dc), (hc.__esModule = !0), (hc.ServerMarkRepository = void 0)
  var xc = Q,
    Gc = mc,
    Uc = (function () {
      function e() {}
      return (
        (e.get = function () {
          return xc.__awaiter(this, void 0, void 0, function () {
            var t, n
            return xc.__generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return null === (t = Gc.LocalStorageDispatcher.localStorage()) ? [3, 2] : [4, t.asyncGet(e.SM_KEY)]
                case 1:
                  ;(n = o.sent()), (o.label = 2)
                case 2:
                  return [2, n]
              }
            })
          })
        }),
        (e.put = function (t) {
          return xc.__awaiter(this, void 0, void 0, function () {
            var n, o
            return xc.__generator(this, function (i) {
              return (n = Gc.LocalStorageDispatcher.localStorage()), (o = t.sm), null !== n && o && n.asyncPut(e.SM_KEY, o), [2]
            })
          })
        }),
        (e.SM_KEY = 'GE-SM'),
        e
      )
    })()
  hc.ServerMarkRepository = Uc
  var Lc = {},
    Fc = { __esModule: !0, ZE: void 0 },
    Bc = (function () {
      function e() {}
      return (
        (e.e = function (e, t) {
          var n = 32,
            o = 126
          function i(e) {
            return (function (e) {
              return e >= n && e <= o
            })(e)
              ? String.fromCharCode(
                  (function (e) {
                    var i = e + t
                    return i > o ? n + (i - o) : i
                  })(e)
                )
              : String.fromCharCode(e)
          }
          for (var r = '', s = 0; s < e.length; s++) {
            r += i(e.charCodeAt(s))
          }
          return r
        }),
        e
      )
    })()
  ;(Fc.ZE = Bc), (Lc.__esModule = !0), (Lc.Z = void 0)
  var qc = Q,
    jc = ne,
    Vc = y,
    Hc = Fc,
    zc = i,
    Wc = (function () {
      function e() {}
      return (
        (e.initRNUniqueId = function () {
          if (Vc.FrameworkDetector.currentFramework() === Vc.Framework.REACT_NATIVE) {
            var e = zc.RNPlugins.platform,
              t = e.constants,
              n = { os: e.OS }
            return 'android' === n.os ? (n.f = t.Fingerprint) : (n.v = e.Version), JSON.stringify(n)
          }
          return null
        }),
        (e.initPlusDeviceId = function () {
          return new Promise(function (e, t) {
            'undefined' != typeof plus
              ? plus.device.getInfo({
                  success: function (t) {
                    e(t.uuid)
                  },
                  fail: function (e) {
                    t(e)
                  },
                })
              : e(null)
          })
        }),
        (e.getVideoCard = function () {
          var e
          if (jc.PlatformDetector.currentPlatform() === jc.PlatformType.BROWSER && 'undefined' != typeof document) {
            var t = document.createElement('canvas'),
              n = null !== (e = t.getContext('webgl')) && void 0 !== e ? e : t.getContext('experimental-webgl')
            if (n && 'getExtension' in n) {
              var o = 0,
                i = 0
              if (navigator.userAgent.indexOf('Firefox') > -1) (i = n.VENDOR), (o = n.RENDERER)
              else {
                var r = n.getExtension('WEBGL_debug_renderer_info')
                if (!r) return null
                ;(i = r.UNMASKED_VENDOR_WEBGL), (o = r.UNMASKED_RENDERER_WEBGL)
              }
              var s = { vendor: (n.getParameter(i) || '').toString(), renderer: (n.getParameter(o) || '').toString() }
              return JSON.stringify(s)
            }
          }
          return null
        }),
        (e.z = function () {
          return qc.__awaiter(this, void 0, void 0, function () {
            var e
            return qc.__generator(this, function (t) {
              return (
                (e = {
                  p: jc.PlatformDetector.currentPlatform(),
                  f: Vc.FrameworkDetector.currentFramework(),
                  vc: this.getVideoCard(),
                  rfp: this.initRNUniqueId(),
                }),
                [2, Hc.ZE.e(JSON.stringify(e), 5)]
              )
            })
          })
        }),
        e
      )
    })()
  Lc.Z = Wc
  var Jc = { __esModule: !0, Emitter: void 0 },
    Xc = $,
    Qc = (function () {
      function e(e) {
        ;(this.rocketsBuffer = new Set()), (this.socket = e), this.socket.addConnectedObserver(this.onSocketConnected.bind(this))
      }
      return (
        (e.prototype.emit = function (e) {
          this.socket.status !== Xc.NetworkStatus.DISCONNECTED
            ? (e.start(), this.doEmit(e))
            : e.fail({ resultCode: '409', content: 'Please connect first' })
        }),
        (e.prototype.doEmit = function (e) {
          var t = this
          if (!e.complete)
            if (this.socket.status !== Xc.NetworkStatus.CONNECT_FAILED)
              if (this.isConnected())
                if (this.hasPermission(e)) {
                  var n = setTimeout(function () {
                    t.doEmit(e)
                  }, e.singleTimeout)
                  e.unique && (e.params.retried = e.retried),
                    this.socket.socketio().emit(e.name, e.params, function (t) {
                      clearTimeout(n), 200 === t.resultCode || 200 == t.code ? e.success(t) : e.fail(t)
                    }),
                    e.retried++
                } else e.fail({ resultCode: 401, content: 'No permission' })
              else this.isConnecting() && this.rocketsBuffer.add(e)
            else e.fail({ resultCode: 408, content: 'Failed to connect GoEasy.' })
        }),
        (e.prototype.hasPermission = function (e) {
          return !!this.socket.permissions.find(function (t) {
            return t === e.permission
          })
        }),
        (e.prototype.isConnected = function () {
          return [
            Xc.NetworkStatus.CONNECTED,
            Xc.NetworkStatus.RECONNECTED,
            Xc.NetworkStatus.EXPIRED_RECONNECTED,
            Xc.NetworkStatus.DISCONNECTING,
          ].includes(this.socket.status)
        }),
        (e.prototype.isConnecting = function () {
          return [Xc.NetworkStatus.CONNECTING, Xc.NetworkStatus.RECONNECTING].includes(this.socket.status)
        }),
        (e.prototype.onSocketConnected = function () {
          this.emitBuffer()
        }),
        (e.prototype.emitBuffer = function () {
          var e = this
          Array.from(this.rocketsBuffer).forEach(function (t) {
            e.rocketsBuffer.delete(t), e.doEmit(t)
          })
        }),
        e
      )
    })()
  Jc.Emitter = Qc
  var Yc = { __esModule: !0, SEC: void 0 },
    Kc = Q,
    $c = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Kc.__extends(t, e),
        (t.init = function () {
          t.i = new t()
        }),
        (t.fire = function (e, t) {
          this.i.fire(e, t)
        }),
        (t.on = function (e, t) {
          this.i.on(e, t)
        }),
        (t.off = function (e, t) {
          this.i.off(e, t)
        }),
        t
      )
    })(et.AbstractEventCenter)
  ;(Yc.SEC = $c),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = pc,
        o = $,
        i = te,
        r = de,
        s = Z,
        a = fe,
        c = wt,
        u = hc,
        l = Lc,
        f = Jc,
        d = Ya,
        p = et,
        h = Yc,
        m = (function (e) {
          function m(t, o) {
            var i = e.call(this) || this
            return (
              (i.ioSocket = null),
              (i.sid = null),
              (i.anonymous = !1),
              (i.userId = null),
              (i.artifactVersion = s.version),
              (i.vname = null),
              (i.uri = null),
              (i.ioOpts = null),
              (i.reconnectingTimes = 0),
              (i.messageObservers = new Map()),
              (i.connectFailedObservers = []),
              (i.connectingObservers = []),
              (i.expiredReconnectedObservers = []),
              (i.options = t),
              (i.ioSocket = new n.default({ onDisconnected: i.onIoDisconnected.bind(i), onReconnecting: i.onIoReconnecting.bind(i) })),
              (i.ioSocketEmitter = new f.Emitter(i.ioSocket)),
              i.ioSocket.addConnectedObserver(i.onIoReconnected.bind(i)),
              i.initOptions(o),
              i.connect(),
              i
            )
          }
          return (
            t.__extends(m, e),
            (m.prototype.initUserId = function () {
              var e = this.connectOptions.id
              i.default.isEmpty(e) ? (this.anonymous = !0) : (this.userId = e.toString())
            }),
            (m.prototype.socketio = function () {
              return this.ioSocket.socketio()
            }),
            (m.prototype.extendOptions = function () {
              var e = this.connectOptions
              if (i.default.isNull(e.data) || (i.default.isDef(e.data) && !i.default.isObject(e.data)))
                throw { code: 400, content: 'TypeError: data requires an object.' }
              if ((i.default.isDef(e.data) ? String(e.data).length : 0) > 300 && i.default.isObject(e) && i.default.isFunction(e.onFailed))
                throw { code: 400, content: 'user.data-length limit 300 byte.' }
              if (i.default.isObject(e.wxmpId)) {
                if (i.default.isEmpty(e.wxmpId.appid)) throw { code: 400, content: 'wxmpId.appid is required.' }
                if (i.default.isEmpty(e.wxmpId.openid)) throw { code: 400, content: 'wxmpId.openid is required. requires string.' }
              } else if (i.default.isPrimitive(e.wxmpId)) throw { code: 400, content: 'TypeError: wxmpId requires an object.' }
            }),
            (m.prototype.initUriAndOpts = function () {
              var e = this.options
              d.URIResolver.init(e.host, e.forceTLS, e.supportOldBrowser), (this.uri = d.URIResolver.uri())
              var t = ['websocket']
              !0 === e.supportOldBrowser && t.push('polling'),
                (this.ioOpts = { transports: t, timeout: r.SocketTimeout.connect, reconnectionDelayMax: r.SocketTimeout.reconnectionDelayMax })
            }),
            (m.prototype.onIoReconnected = function () {
              this.status === o.NetworkStatus.RECONNECTING && this.authorize()
            }),
            (m.prototype.sendAck = function (e, t) {
              this.ioSocket.io.emit(e, t)
            }),
            (m.prototype.initOptions = function (e) {
              ;(this.connectOptions = e),
                this.addConnectedObserver(e.onSuccess),
                this.addConnectFailedObserver(e.onFailed),
                this.addConnectingObserver(e.onProgress),
                this.initUserId()
            }),
            (m.prototype.connect = function () {
              this.initUriAndOpts(),
                this.extendOptions(),
                e.prototype.connect.call(this),
                this.onConnecting(),
                this.ioSocket.connect({ uri: this.uri, opts: this.ioOpts }),
                this.authorize()
            }),
            (m.prototype.disconnect = function () {
              var e = this
              return new Promise(function (t, n) {
                e.status = o.NetworkStatus.DISCONNECTING
                var i = function () {
                    e.ioSocket.disconnect(), (e.status = o.NetworkStatus.DISCONNECTED), h.SEC.fire(c.SocketEvent.DISCONNECTED), t()
                  },
                  s = p.GModules.modules.get('GN')
                if (s && (s.params.regId || e.connectOptions.wxmpId)) {
                  var u = new p.Rocket({
                    name: a.RocketTypes.manualDisconnect,
                    params: {},
                    permission: p.Permission.READ,
                    singleTimeout: r.SocketTimeout.commonRequestSingle,
                    totalTimeout: r.SocketTimeout.commonRequestTotal,
                    fail: function (e) {
                      n(e)
                    },
                    success: i,
                  })
                  p.G.Socket.e(u)
                } else i()
              })
            }),
            (m.prototype.authorize = function () {
              return t.__awaiter(this, void 0, void 0, function () {
                var e,
                  n,
                  o,
                  i,
                  s = this
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = this.connectOptions),
                        (i = {
                          appkey: this.options.appkey,
                          userId: this.userId,
                          userData: JSON.stringify(e.data),
                          otp: e.otp,
                          artifactVersion: this.artifactVersion,
                          sid: this.sid,
                        }),
                        [4, p.GModules.getParams()]
                      )
                    case 1:
                      return (i.mP = t.sent()), (i.a = this.anonymous), [4, l.Z.z()]
                    case 2:
                      return (i.z = t.sent()), [4, u.ServerMarkRepository.get()]
                    case 3:
                      return (
                        (i.sm = t.sent()),
                        (i.c = { n: this.vname, v: this.artifactVersion }),
                        (n = i),
                        JSON.stringify(n),
                        (o = new p.Rocket({
                          name: a.RocketTypes.authorize,
                          params: n,
                          permission: p.Permission.NONE,
                          singleTimeout: r.SocketTimeout.commonInfiniteSingle,
                          totalTimeout: r.SocketTimeout.commonInfiniteTotal,
                          success: function (e) {
                            s.onAuthorizeSuccess(e)
                          },
                          fail: function (e) {
                            s.onAuthorizeFailed(e)
                          },
                        })),
                        this.ioSocketEmitter.emit(o),
                        [2]
                      )
                  }
                })
              })
            }),
            (m.prototype.onConnecting = function () {
              h.SEC.fire(c.SocketEvent.CONNECTING, this.reconnectingTimes), this.notify(this.connectingObservers, this.reconnectingTimes)
            }),
            (m.prototype.onIoReconnecting = function () {
              this.reconnectingTimes++,
                this.status == o.NetworkStatus.CONNECTED ||
                this.status == o.NetworkStatus.EXPIRED_RECONNECTED ||
                this.status == o.NetworkStatus.RECONNECTING
                  ? (this.status = o.NetworkStatus.RECONNECTING)
                  : (this.status = o.NetworkStatus.CONNECTING),
                this.onConnecting()
            }),
            (m.prototype.onIoDisconnected = function () {
              this.status !== o.NetworkStatus.DISCONNECTING &&
                ((this.status = o.NetworkStatus.RECONNECTING), h.SEC.fire(c.SocketEvent.LOST), this.notify(this.disconnectedObservers))
            }),
            (m.prototype.onAuthorizeSuccess = function (e) {
              ;(u.ServerMarkRepository.put(e), p.GModules.setDatas(e.mD), this.status === o.NetworkStatus.RECONNECTING)
                ? this.sid !== e.sid
                  ? ((this.status = o.NetworkStatus.EXPIRED_RECONNECTED),
                    (this.sid = e.sid),
                    h.SEC.fire(c.SocketEvent.EXPIRED_RECONNECTED),
                    this.notify(this.expiredReconnectedObservers))
                  : ((this.status = o.NetworkStatus.RECONNECTED), h.SEC.fire(c.SocketEvent.RECONNECTED))
                : ((this.status = o.NetworkStatus.CONNECTED), (this.sid = e.sid))
              e.enablePublish &&
                (this.permissions.find(function (e) {
                  return e == p.Permission.WRITE
                }) ||
                  this.permissions.push(p.Permission.WRITE)),
                e.enableSubscribe &&
                  (this.permissions.find(function (e) {
                    return e == p.Permission.READ
                  }) ||
                    this.permissions.push(p.Permission.READ)),
                (this.reconnectingTimes = 0),
                h.SEC.fire(c.SocketEvent.CONNECTED),
                this.notify(this.connectedObservers)
            }),
            (m.prototype.onAuthorizeFailed = function (e) {
              this.ioSocket.disconnect(), (this.status = o.NetworkStatus.CONNECT_FAILED)
              var t = { code: e.resultCode || 408, content: e.content || 'Host unreachable or timeout' }
              this.notify(this.connectFailedObservers, t)
            }),
            (m.prototype.addConnectingObserver = function (e) {
              i.default.isFunction(e) && this.connectingObservers.push(e)
            }),
            (m.prototype.addConnectFailedObserver = function (e) {
              i.default.isFunction(e) && this.connectFailedObservers.push(e)
            }),
            (m.prototype.addExpiredReconnectedObserver = function (e) {
              i.default.isFunction(e) && this.expiredReconnectedObservers.push(e)
            }),
            (m.prototype.onMessage = function (e, t) {
              this.ioSocket.io._callbacks.hasOwnProperty('$' + e) || this.ioSocket.io.on(e, t)
            }),
            (m.prototype.user = function () {
              var e = this.connectOptions
              return e ? { id: e.id, data: e.data } : null
            }),
            m
          )
        })(Vr.default)
      e.default = m
    })(jr)
  var Zc = { __esModule: !0, MessageListener: void 0 },
    eu = Yc,
    tu = wt,
    nu = (function () {
      function e(e) {
        ;(this.guidList = []), (this.socket = e)
      }
      return (
        (e.prototype.offMessage = function (e, t) {
          eu.SEC.off(tu.SocketEvent.NEW_MESSAGE + '_' + e, t)
        }),
        (e.prototype.onMessage = function (e, t) {
          var n = this
          eu.SEC.on(tu.SocketEvent.NEW_MESSAGE + '_' + e, t),
            this.socket.onMessage(e, function (t) {
              n.fire(e, t)
            })
        }),
        (e.prototype.fire = function (e, t) {
          var n = this.filter(t)
          n && eu.SEC.fire(tu.SocketEvent.NEW_MESSAGE + '_' + e, n)
        }),
        (e.prototype.filter = function (e) {
          if (('string' == typeof e && (e = JSON.parse(e)), e.i)) {
            if (
              this.guidList.findIndex(function (t) {
                return t === e.i
              }) > -1
            )
              return
            this.guidList.unshift(e.i), this.guidList.length > 300 && this.guidList.pop()
          }
          return e
        }),
        e
      )
    })()
  ;(Zc.MessageListener = nu), (qr.__esModule = !0), (qr.GSocket = void 0)
  var ou = jr,
    iu = Jc,
    ru = $,
    su = te,
    au = Yc,
    cu = wt,
    uu = Zc,
    lu = et,
    fu = pe,
    du = gt,
    pu = (function () {
      function e(e) {
        this.goeasyOptions = e
      }
      return (
        (e.init = function (t) {
          this.i = new e(t)
        }),
        (e.connect = function (e, t) {
          if (this.status() !== ru.NetworkStatus.DISCONNECTED && su.default.isObject(e) && su.default.isFunction(e.onFailed))
            e.onFailed({ code: 408, content: "It is already connected, don't try again until disconnect() is called. " })
          else {
            this.confirmUserIdAndData(e), au.SEC.init()
            var n = this.i
            lu.GModules.preConnect(e),
              (n.socket = new ou.default(n.goeasyOptions, e)),
              (n.socket.vname = t),
              (n.emitter = new iu.Emitter(n.socket)),
              (n.messageListener = new uu.MessageListener(n.socket)),
              lu.GModules.postConnect()
          }
        }),
        (e.confirmUserIdAndData = function (e) {
          if (lu.GModules.modules.get('GIM')) du.default.validateId(e.id, 'id'), du.default.validateObject(e.data, 'data')
          else if ('string' == typeof e.id && e.id.length > 60) throw { code: 400, content: 'id over max length 60' }
        }),
        (e.e = function (e) {
          this.i.emitter.emit(e)
        }),
        (e.sendAck = function (e, t) {
          this.i.socket.sendAck(e, t)
        }),
        (e.status = function () {
          return this.i && this.i.socket ? this.i.socket.getStatus() : ru.NetworkStatus.DISCONNECTED
        }),
        (e.on = function (e, t) {
          au.SEC.on(e, t)
        }),
        (e.off = function (e, t) {
          au.SEC.off(e, t)
        }),
        (e.offMessage = function (e, t) {
          this.i.messageListener.offMessage(e, t)
        }),
        (e.onMessage = function (e, t) {
          'remoteEvent:'.concat(e), this.i.messageListener.onMessage(e, t)
        }),
        (e.disconnect = function (e) {
          this.i.socket
            .disconnect()
            .then(function () {
              fu.CallbackUtils.onSuccess(e)
            })
            .catch(function (t) {
              fu.CallbackUtils.onFailed(e, t)
            })
        }),
        (e.user = function () {
          return this.i.socket.user()
        }),
        (e.EVENT = cu.SocketEvent),
        e
      )
    })()
  ;(qr.GSocket = pu), (Dr.__esModule = !0), (Dr.AgentStatus = void 0)
  var hu = Q,
    mu = fe,
    yu = de,
    gu = te,
    vu = xr,
    Su = Ur,
    Eu = Go,
    _u = pe,
    bu = et,
    Mu = Fr,
    wu = Mt,
    Cu = ui,
    Iu = qr,
    Tu = (function () {
      function e() {
        var e = this
        ;(this.synchronized = !0),
          (this.onlineChanged = function (t) {
            t.online ? e.teamIds.add(t.teamId) : e.teamIds.delete(t.teamId)
          }),
          (this.onDisconnected = function () {
            ;(e.queryMyTeamPromise = null), (e.teamIds = null)
          }),
          (this.onConnected = function () {
            e.synchronized && (e.queryMyTeamPromise = e.queryTeams())
          }),
          Iu.GSocket.on(Iu.GSocket.EVENT.LOST, this.onDisconnected),
          Iu.GSocket.on(Iu.GSocket.EVENT.RECONNECTED, this.onConnected),
          Iu.GSocket.onMessage(wu.RemoteEvents.CS_ONLINE_CHANGED, this.onlineChanged)
      }
      return (
        (e.getInstance = function () {
          return e.instance || (e.instance = new e()), e.instance
        }),
        (e.prototype.queryTeams = function () {
          var e = this
          return (
            this.queryMyTeamPromise ||
              (this.queryMyTeamPromise = new Promise(function (t, n) {
                var o = new bu.Rocket({
                  name: mu.RocketTypes.CS_MY_TEAMS,
                  params: {},
                  permission: bu.Permission.READ,
                  singleTimeout: yu.SocketTimeout.commonQuerySingle,
                  totalTimeout: yu.SocketTimeout.commonQueryTotal,
                  fail: function (e) {
                    n(e)
                  },
                  success: function (n) {
                    ;(e.teamIds = new Set(n.content)), (e.synchronized = !0), t(e.teamIds)
                  },
                })
                bu.G.Socket.e(o)
              })),
            this.queryMyTeamPromise
          )
        }),
        (e.prototype.myTeams = function () {
          if (this.synchronized && this.queryMyTeamPromise) return this.teamIds
          throw 'please query team first.'
        }),
        (e.prototype.isOnline = function (e, t) {
          return hu.__awaiter(this, void 0, void 0, function () {
            return hu.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.queryTeams()]
                case 1:
                  return n.sent(), _u.CallbackUtils.onSuccess(t, this.teamIds.has(e)), [2]
              }
            })
          })
        }),
        (e.prototype.online = function (e, t) {
          var n = this
          if (!gu.default.isObject(t.agentData) || !gu.default.isObject(t.teamData))
            throw { code: 400, content: 'agentData and teamData require an object' }
          var o = new vu.CSOnlineRequest(e, t.teamData, t.agentData),
            i = new bu.Rocket({
              name: mu.RocketTypes.CS_ONLINE,
              params: o,
              permission: bu.Permission.WRITE,
              singleTimeout: yu.SocketTimeout.commonRequestSingle,
              totalTimeout: yu.SocketTimeout.commonRequestTotal,
              fail: function (e) {
                _u.CallbackUtils.onFailed(t, e)
              },
              success: function (o) {
                n.teamIds.add(e), _u.CallbackUtils.onSuccess(t), Cu.IMEC.i.fire(Eu.IM_INTERNAL_EVENTS.CS_ONLINE_SUCCESS)
              },
            })
          bu.G.Socket.e(i)
        }),
        (e.prototype.offline = function (e, t) {
          var n = this,
            o = new Su.CSOfflineRequest(e),
            i = new bu.Rocket({
              name: mu.RocketTypes.CS_OFFLINE,
              params: o,
              permission: bu.Permission.WRITE,
              singleTimeout: yu.SocketTimeout.commonRequestSingle,
              totalTimeout: yu.SocketTimeout.commonRequestTotal,
              fail: function (e) {
                _u.CallbackUtils.onFailed(t, e)
              },
              success: function (o) {
                n.teamIds.delete(e), _u.CallbackUtils.onSuccess(t), Cu.IMEC.i.fire(Eu.IM_INTERNAL_EVENTS.CS_OFFLINE_SUCCESS)
              },
            })
          bu.G.Socket.e(i)
        }),
        (e.prototype.agents = function (e, t) {
          var n = new Mu.CsAgentsQueryRequest(e),
            o = new bu.Rocket({
              name: mu.RocketTypes.CS_AGENTS,
              params: n,
              permission: bu.Permission.READ,
              singleTimeout: yu.SocketTimeout.commonQuerySingle,
              totalTimeout: yu.SocketTimeout.commonQueryTotal,
              fail: function (e) {
                _u.CallbackUtils.onFailed(t, e)
              },
              success: function (e) {
                e.content.forEach(function (e) {
                  e.data = JSON.parse(e.data)
                }),
                  _u.CallbackUtils.onSuccess(t, e)
              },
            })
          bu.G.Socket.e(o)
        }),
        e
      )
    })()
  ;(Dr.AgentStatus = Tu), (Nr.__esModule = !0), (Nr.LiveSession = void 0)
  var ku = Q,
    Nu = Z,
    Ru = Rr,
    Pu = gt,
    Au = fe,
    Ou = de,
    Du = pe,
    xu = et,
    Gu = Go,
    Uu = Ar,
    Lu = Qi,
    Fu = Dr,
    Bu = Mi,
    qu = wt,
    ju = ui,
    Vu = qr,
    Hu = (function () {
      function e(t) {
        ;(this.onMessageReceived = function (t) {
          var n = e.session
          if (t.scene() === Nu.Scene.CS && n.liveOptions) {
            var o = t,
              i = n.liveOptions.customerId
            n.teamId === o.teamId && o.customerId() === i && (n.tryUpdateStatus(o), n.liveOptions.onNewMessage(o))
          }
        }),
          (this.teamId = t),
          ju.IMEC.i.on(Gu.IM_INTERNAL_EVENTS.CS_AGENT_MESSAGE_RECEIVED, this.onMessageReceived),
          ju.IMEC.i.on(Gu.IM_INTERNAL_EVENTS.CS_ACCEPTED, this.onMessageReceived),
          ju.IMEC.i.on(Gu.IM_INTERNAL_EVENTS.CS_ENDED, this.onMessageReceived),
          ju.IMEC.i.on(Gu.IM_INTERNAL_EVENTS.CS_TRANSFER, this.onMessageReceived),
          Vu.GSocket.on(qu.SocketEvent.DISCONNECTED, e.destroy)
      }
      return (
        (e.live = function (t, n) {
          return ku.__awaiter(this, void 0, void 0, function () {
            var o,
              i,
              r,
              s = this
            return ku.__generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (o = n.customerId),
                    Pu.default.validateId(o, 'customerId'),
                    (i = new Ru.LiveSessionRequest(t, o)),
                    [4, Fu.AgentStatus.getInstance().queryTeams()]
                  )
                case 1:
                  return (
                    a.sent(),
                    (r = new xu.Rocket({
                      name: Au.RocketTypes.CS_LIVE_SESSION,
                      params: i,
                      permission: xu.Permission.WRITE,
                      singleTimeout: Ou.SocketTimeout.commonRequestSingle,
                      totalTimeout: Ou.SocketTimeout.commonRequestTotal,
                      fail: function (e) {
                        Du.CallbackUtils.onFailed(n, e)
                      },
                      success: function (o) {
                        e.destroy(), (s.session = new e(t)), (s.session.liveOptions = n)
                        var i = o.content.customerStatus
                        'ACCEPTED' === i.status && (i.agent.data = JSON.parse(i.agent.data)),
                          (s.session.status = i),
                          s.session.liveOptions.onStatusUpdated(s.session.status),
                          Du.CallbackUtils.onSuccess(n)
                      },
                    })),
                    xu.G.Socket.e(r),
                    [2]
                  )
              }
            })
          })
        }),
        (e.prototype.customerId = function () {
          return this.liveOptions.customerId
        }),
        (e.isMyCustomer = function (t) {
          var n = e.session
          if (n && n.teamId === t.teamId && n.customerId() === t.customerId()) {
            var o = Fu.AgentStatus.getInstance().myTeams(),
              i = n.status.agent
            return o.has(t.teamId) && (!i || i.id === xu.G.Socket.user().id)
          }
          return !0
        }),
        (e.isMyMessage = function (e) {
          var t = Bu.Target.byIMMessage(e)
          return (e.type === Lu.CSMessageType.TRANSFER && e.payload.transferTo.id === xu.G.Socket.user().id) || this.isMyCustomer(t)
        }),
        (e.quit = function (t) {
          var n = e.session
          if (n) {
            var o = n.liveOptions.customerId
            Pu.default.validateId(o, 'customerId')
            var i = new Ru.LiveSessionRequest(n.teamId, o),
              r = new xu.Rocket({
                name: Au.RocketTypes.CS_QUIT_LIVE,
                params: i,
                permission: xu.Permission.WRITE,
                singleTimeout: Ou.SocketTimeout.commonRequestSingle,
                totalTimeout: Ou.SocketTimeout.commonRequestTotal,
                fail: function (e) {
                  Du.CallbackUtils.onFailed(t, e)
                },
                success: function (n) {
                  e.destroy(), Du.CallbackUtils.onSuccess(t)
                },
              })
            xu.G.Socket.e(r)
          }
        }),
        (e.prototype.tryUpdateStatus = function (e) {
          if (!('FREE' !== this.status.status && this.status.sessionId > e.sessionId)) {
            var t
            switch (e.type) {
              case Lu.CSMessageType.ACCEPT:
                ;((t = new Uu.CustomerStatus()).status = 'ACCEPTED'),
                  (t.start = e.payload.sessionStart),
                  (t.sessionId = e.sessionId),
                  (t.agent = new Nu.User(e.senderId, e.senderData))
                break
              case Lu.CSMessageType.END:
                ;(t = new Uu.CustomerStatus()).status = 'FREE'
                break
              case Lu.CSMessageType.TRANSFER:
                ;((t = new Uu.CustomerStatus()).status = 'ACCEPTED'),
                  (t.start = e.payload.sessionStart),
                  (t.sessionId = e.sessionId),
                  (t.agent = e.payload.transferTo)
                break
              default:
                'FREE' === this.status.status &&
                  (((t = new Uu.CustomerStatus()).status = 'PENDING'), (t.start = e.timestamp), (t.sessionId = e.sessionId))
            }
            t && ((this.status = t), this.liveOptions.onStatusUpdated(t))
          }
        }),
        (e.destroy = function () {
          var t = e.session
          t &&
            (ju.IMEC.i.off(Gu.IM_INTERNAL_EVENTS.CS_AGENT_MESSAGE_RECEIVED, t.onMessageReceived),
            ju.IMEC.i.off(Gu.IM_INTERNAL_EVENTS.CS_ACCEPTED, t.onMessageReceived),
            ju.IMEC.i.off(Gu.IM_INTERNAL_EVENTS.CS_ENDED, t.onMessageReceived),
            ju.IMEC.i.off(Gu.IM_INTERNAL_EVENTS.CS_TRANSFER, t.onMessageReceived),
            Vu.GSocket.off(qu.SocketEvent.DISCONNECTED, e.destroy),
            (e.session = null))
        }),
        e
      )
    })()
  ;(Nr.LiveSession = Hu),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = gr,
        o = pe,
        i = te,
        r = Go,
        s = et,
        a = Qi,
        c = Nr,
        u = ui,
        l = (function (e) {
          function l(t) {
            var n = e.call(this, t) || this
            return (n.unread = 0), (n.markingAmount = 0), n
          }
          return (
            t.__extends(l, e),
            (l.prototype.loadHistory = function (e, n) {
              return t.__awaiter(this, void 0, void 0, function () {
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return i.default.isUndef(n) ? (n = 10) : n > 30 && (n = 30), [4, this.loadServerMessages(e, n)]
                    case 1:
                      return [2, t.sent()]
                  }
                })
              })
            }),
            (l.prototype.loadServerMessages = function (e, o) {
              return t.__awaiter(this, void 0, void 0, function () {
                var i,
                  r,
                  s = this
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (i = new n.default(this.target.id.toString(), this.target.scene, e, o, this.target.teamId)),
                        [4, this.remoteHistory.loadServerMessages(this.target, i)]
                      )
                    case 1:
                      return (
                        (r = t.sent()).userOffsets.forEach(function (e) {
                          s.userOffsets.updateOffset(e.userId, e.offset)
                        }),
                        [2, r.messages]
                      )
                  }
                })
              })
            }),
            (l.prototype.deleteMessages = function (e) {
              return t.__awaiter(this, void 0, void 0, function () {
                return t.__generator(this, function (t) {
                  return o.CallbackUtils.onFailed(e, 'Delete CS message is not supported yet'), [2]
                })
              })
            }),
            (l.prototype.initMaxMessageAndOffsets = function (e, t) {
              var n = this
              t.forEach(function (e) {
                n.userOffsets.updateOffset(e.userId, e.offset)
              }),
                (i.default.isUndef(this.acceptedMaxMessage) || this.acceptedMaxMessage.timestamp < e.timestamp) && this.increaseUnreadAmount(e),
                this.saveAcceptedMessage(e)
            }),
            (l.prototype.initPendingMaxMessageAndOffsets = function (e, t) {
              var n = this
              t.forEach(function (e) {
                n.userOffsets.updateOffset(e.userId, e.offset)
              }),
                this.savePendingMessage(e)
            }),
            (l.prototype.savePendingMessage = function (e) {
              this.pendingMaxMessage ? this.pendingMaxMessage.timestamp < e.timestamp && (this.pendingMaxMessage = e) : (this.pendingMaxMessage = e)
            }),
            (l.prototype.saveAcceptedMessage = function (e) {
              this.acceptedMaxMessage
                ? this.acceptedMaxMessage.timestamp < e.timestamp && (this.acceptedMaxMessage = e)
                : (this.acceptedMaxMessage = e)
            }),
            (l.prototype.onMessageSending = function (e) {
              this.saveAcceptedMessage(e), u.IMEC.i.fire(r.IM_INTERNAL_EVENTS.MAX_MESSAGE_CHANGED, e)
            }),
            (l.prototype.onMessageSendSuccess = function (e) {
              this.saveAcceptedMessage(e),
                this.userOffsets.updateOffset(e.senderId, e.timestamp),
                this.acceptedMaxMessage === e && u.IMEC.i.fire(r.IM_INTERNAL_EVENTS.MAX_MESSAGE_CHANGED, e)
            }),
            (l.prototype.onMessageSendFailed = function (e) {
              this.acceptedMaxMessage === e && u.IMEC.i.fire(r.IM_INTERNAL_EVENTS.MAX_MESSAGE_CHANGED, e)
            }),
            (l.prototype.onMessageReceived = function (e) {
              c.LiveSession.isMyMessage(e) &&
                (!e.accepted || (e.senderId !== s.G.Socket.user().id && e.type === a.CSMessageType.ACCEPT)
                  ? this.savePendingMessage(e)
                  : this.saveAcceptedMessage(e),
                this.userOffsets.updateOffset(e.senderId, e.timestamp),
                this.increaseUnreadAmount(e),
                u.IMEC.i.fire(r.IM_INTERNAL_EVENTS.MAX_MESSAGE_CHANGED, e))
            }),
            (l.prototype.increaseUnreadAmount = function (e) {
              ;(e.sendByCustomer() || (e.type === a.CSMessageType.TRANSFER && e.senderId !== s.G.Socket.user().id)) &&
                this.userOffsets.myOffset() < e.timestamp &&
                e.accepted &&
                (this.unread += 1)
            }),
            (l.prototype.markRead = function () {
              return t.__awaiter(this, void 0, void 0, function () {
                var e
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = this.maxAcceptedMessageTime()),
                        c.LiveSession.isMyCustomer(this.target) && this.preMark(e)
                          ? [4, this.remoteHistory.updateServerOffsets(e, this.target)]
                          : [3, 2]
                      )
                    case 1:
                      t.sent(), this.postMark(e), (t.label = 2)
                    case 2:
                      return [2]
                  }
                })
              })
            }),
            (l.prototype.preMark = function (e) {
              var t = this.userOffsets.myOffset()
              return e > this.userOffsets.markingTime && e > t && ((this.userOffsets.markingTime = e), (this.markingAmount = this.unread), !0)
            }),
            (l.prototype.postMark = function (e) {
              e === this.userOffsets.markingTime &&
                ((this.unread -= this.markingAmount),
                (this.markingAmount = 0),
                this.userOffsets.updateOffset(s.G.Socket.user().id, e),
                u.IMEC.i.fire(r.IM_INTERNAL_EVENTS.UNREAD_AMOUNT_CHANGED, this.target))
            }),
            (l.prototype.syncMarkedMessage = function (e) {}),
            (l.prototype.getMaxMessage = function (e) {
              return e ? this.acceptedMaxMessage : this.pendingMaxMessage
            }),
            (l.prototype.unreadAmount = function (e) {
              return e ? this.unread : 0
            }),
            (l.prototype.existsMessage = function (e) {
              return (
                (this.acceptedMaxMessage && this.acceptedMaxMessage.messageId === e.messageId) ||
                (this.pendingMaxMessage && this.pendingMaxMessage.messageId === e.messageId)
              )
            }),
            (l.prototype.maxAcceptedMessageTime = function () {
              return this.acceptedMaxMessage ? this.acceptedMaxMessage.timestamp : 0
            }),
            (l.prototype.maxTime = function (e) {
              var t = this.getMaxMessage(e)
              return t ? t.timestamp : 0
            }),
            l
          )
        })(gi.default)
      e.default = l
    })(kr)
  var zu = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = pe,
      o = (function (e) {
        function o(t) {
          return e.call(this, t) || this
        }
        return (
          t.__extends(o, e),
          (o.prototype.deleteMessages = function (e) {
            return t.__awaiter(this, void 0, void 0, function () {
              return t.__generator(this, function (t) {
                return n.CallbackUtils.onFailed(e, 'Delete CS message is not supported yet'), [2]
              })
            })
          }),
          o
        )
      })(gi.default)
    e.default = o
  })(zu)
  var Wu = { __esModule: !0, HistoryValidator: void 0 },
    Ju = te,
    Xu = Mi,
    Qu = Uo,
    Yu = (function () {
      function e() {}
      return (
        (e.validateMessageArray = function (e) {
          if (!Ju.default.isArray(e) || Ju.default.isEmpty(e)) throw { code: 400, content: 'messages requires non empty array' }
          if (e.length > 20) throw { code: 400, content: 'The maximum number of messages is 20' }
          for (var t = Xu.Target.byIMMessage(e[0]), n = 0; n < e.length; n++) {
            var o = e[n]
            if (!(o instanceof Qu.AbstractMessage)) throw { code: 400, content: 'message[' + n + '] is not a correct message' }
            if (n > 0) {
              var i = Xu.Target.byIMMessage(o)
              if (i.scene !== t.scene || i.id !== t.id) throw { code: 400, content: 'each message must be from the same friend or group' }
            }
          }
        }),
        e
      )
    })()
  ;(Wu.HistoryValidator = Yu),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = Z,
        o = te,
        i = gi,
        r = Mi,
        s = Go,
        a = _i,
        c = Mt,
        u = et,
        l = pe,
        f = kr,
        d = zu,
        p = Wu,
        h = ui,
        m = qr,
        y = (function () {
          function e() {
            var e = this
            ;(this.map = new Map()),
              (this.onMessageSending = function (t) {
                var n = r.Target.byIMMessage(t)
                e.findOrCreateHistory(n).onMessageSending(t)
              }),
              (this.onMessageSendSuccess = function (t) {
                var n = r.Target.byIMMessage(t)
                e.findHistory(n).onMessageSendSuccess(t)
              }),
              (this.onMessageSendFailed = function (t) {
                var n = r.Target.byIMMessage(t)
                e.findHistory(n).onMessageSendFailed(t)
              }),
              (this.onMessageReceived = function (t) {
                var n = r.Target.byIMMessage(t)
                e.findOrCreateHistory(n).onMessageReceived(t)
              }),
              (this.onRemoteMarkRead = function (t) {
                var n = r.Target.byMessageReadRemoteEvent(t),
                  o = e.findHistory(n)
                o && o.syncMarkedMessage(t)
              }),
              (this.onRemoteMessageDeleted = function (t) {
                var n = r.Target.byIMMessageDeletedEvent(t),
                  o = e.findHistory(n)
                o && o.syncDeletedMessage(t.deleterId, t.times)
              }),
              (this.onMessageRecalled = function (t) {
                var n = r.Target.byConversationId(t.scene, t.conversationId),
                  o = e.findHistory(n)
                o && o.recallMessages(t)
              }),
              (this.onDisconnected = function () {
                e.map.forEach(function (e, t) {
                  e.expire()
                })
              }),
              (this.destroy = function () {}),
              this.initialListeners()
          }
          return (
            (e.init = function () {
              return (e.instance = new e()), e.instance
            }),
            (e.prototype.initialListeners = function () {
              h.IMEC.i.on(s.IM_INTERNAL_EVENTS.MESSAGE_SENDING, this.onMessageSending),
                h.IMEC.i.on(s.IM_INTERNAL_EVENTS.MESSAGE_SEND_SUCCESS, this.onMessageSendSuccess),
                h.IMEC.i.on(s.IM_INTERNAL_EVENTS.MESSAGE_SEND_FAILED, this.onMessageSendFailed),
                h.IMEC.i.on(s.IM_INTERNAL_EVENTS.MESSAGE_RECEIVED, this.onMessageReceived),
                h.IMEC.i.on(s.IM_INTERNAL_EVENTS.CS_AGENT_MESSAGE_RECEIVED, this.onMessageReceived),
                h.IMEC.i.on(s.IM_INTERNAL_EVENTS.CS_ACCEPTED, this.onMessageReceived),
                h.IMEC.i.on(s.IM_INTERNAL_EVENTS.CS_ENDED, this.onMessageReceived),
                h.IMEC.i.on(s.IM_INTERNAL_EVENTS.CS_TRANSFER, this.onMessageReceived),
                h.IMEC.i.on(s.IM_INTERNAL_EVENTS.MESSAGE_RECALLED, this.onMessageRecalled),
                m.GSocket.onMessage(c.RemoteEvents.IM_MSG_READ, this.onRemoteMarkRead),
                m.GSocket.onMessage(c.RemoteEvents.IM_MSG_DELETED, this.onRemoteMessageDeleted),
                m.GSocket.on(m.GSocket.EVENT.LOST, this.onDisconnected)
            }),
            (e.prototype.loadHistory = function (e, n) {
              return t.__awaiter(this, void 0, void 0, function () {
                var o, i
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (o = this.queryToTarget(e, n)), [4, this.findOrCreateHistory(o).loadHistory(e.lastTimestamp, e.limit)]
                    case 1:
                      return (i = t.sent()), l.CallbackUtils.onSuccess(e, { code: 200, content: i }), [2]
                  }
                })
              })
            }),
            (e.prototype.queryToTarget = function (e, t) {
              if (o.default.isDef(e.userId)) return new r.Target(n.Scene.PRIVATE, e.userId)
              if (o.default.isDef(e.groupId)) return new r.Target(n.Scene.GROUP, e.groupId)
              if (o.default.isDef(e.type)) {
                if (!Object.values(n.Scene).includes(e.type)) throw new Error('incorrect type, must be: ' + Object.values(n.Scene))
                if (o.default.isUndef(e.id)) throw new Error('If type is not empty, id is required.')
                return n.Scene.CS == e.type && o.default.isUndef(t) && (t = e.id), new r.Target(e.type, e.id, t)
              }
              throw new Error('incorrect query options.')
            }),
            (e.prototype.privateMarkAsRead = function (e) {
              return t.__awaiter(this, void 0, void 0, function () {
                var i
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (o.default.isUndef(e.userId)) throw new Error('userId could not be empty.')
                      return (i = r.Target.byScene(n.Scene.PRIVATE, e.userId)), [4, this.markAsRead(i, e)]
                    case 1:
                      return t.sent(), [2]
                  }
                })
              })
            }),
            (e.prototype.groupMarkAsRead = function (e) {
              return t.__awaiter(this, void 0, void 0, function () {
                var i
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (o.default.isUndef(e.groupId)) throw new Error('groupId could not be empty.')
                      return (i = r.Target.byScene(n.Scene.GROUP, e.groupId)), [4, this.markAsRead(i, e)]
                    case 1:
                      return t.sent(), [2]
                  }
                })
              })
            }),
            (e.prototype.markMessageAsRead = function (e, i) {
              return t.__awaiter(this, void 0, void 0, function () {
                var s
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (o.default.isUndef(e.id)) throw new Error('id could not be empty.')
                      if (!Object.values(n.Scene).includes(e.type)) throw new Error('incorrect type, must be: ' + Object.values(n.Scene))
                      return (
                        n.Scene.CS == e.type && o.default.isUndef(i) && (i = e.id),
                        (s = r.Target.byScene(e.type, e.id, i)),
                        [4, this.markAsRead(s, e)]
                      )
                    case 1:
                      return t.sent(), [2]
                  }
                })
              })
            }),
            (e.prototype.markAsRead = function (e, n) {
              return t.__awaiter(this, void 0, void 0, function () {
                var o
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (o = this.findHistory(e)) ? [4, o.markRead()] : [3, 2]
                    case 1:
                      t.sent(), (t.label = 2)
                    case 2:
                      return l.CallbackUtils.onSuccess(n), [2]
                  }
                })
              })
            }),
            (e.prototype.deleteMessage = function (e) {
              return t.__awaiter(this, void 0, void 0, function () {
                var n, o, i
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.validateMessageArray(e.messages),
                        a.default.validate(e),
                        (n = e.messages[0]),
                        (o = r.Target.byIMMessage(n)),
                        (i = this.findHistory(o)) ? [4, i.deleteMessages(e)] : [3, 2]
                      )
                    case 1:
                      return t.sent(), [3, 3]
                    case 2:
                      throw { code: 400, content: 'No message that could be deleted' }
                    case 3:
                      return [2]
                  }
                })
              })
            }),
            (e.prototype.findOrCreateHistory = function (e) {
              var t = this.findHistory(e)
              return (
                t ||
                ((t = e.scene === n.Scene.CS ? (u.G.Socket.user().id === e.customerId() ? new d.default(e) : new f.default(e)) : new i.default(e)),
                this.map.set(e.toString(), t),
                t)
              )
            }),
            (e.get = function (t) {
              return e.instance.findOrCreateHistory(t)
            }),
            (e.prototype.findHistory = function (e) {
              return this.map.get(e.toString())
            }),
            (e.prototype.validateMessageArray = function (e) {
              p.HistoryValidator.validateMessageArray(e)
            }),
            e
          )
        })()
      e.default = y
    })(yi),
    (mi.__esModule = !0),
    (mi.Conversation = void 0)
  var Ku = Z,
    $u = yi,
    Zu = (function () {
      function e(e) {
        ;(this.top = !1), (this.data = null), (this.dataLoaded = !1), (this.target = e)
      }
      return (
        (e.prototype.toDto = function () {
          var e = this.target.scene,
            t = this.target.id,
            n = new Ku.ConversationDTO()
          return (
            e === Ku.Scene.PRIVATE ? (n.userId = t) : e === Ku.Scene.GROUP ? (n.groupId = t) : e === Ku.Scene.CS && (n.id = this.target.teamId),
            (n.type = e),
            (n.lastMessage = this.getMaxMessage()),
            (n.unread = this.getUnreadAmount()),
            (n.top = this.top),
            (n.data = this.data),
            n
          )
        }),
        (e.prototype.getMaxMessage = function () {
          return $u.default.get(this.target).getMaxMessage()
        }),
        (e.prototype.getUnreadAmount = function () {
          return $u.default.get(this.target).unreadAmount()
        }),
        (e.prototype.maxMessageTime = function () {
          return $u.default.get(this.target).maxTime()
        }),
        e
      )
    })()
  mi.Conversation = Zu
  var el = { __esModule: !0, CSConversation: void 0 },
    tl = Q,
    nl = yi,
    ol = Z,
    il = Qi,
    rl = et,
    sl = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (n.accepted = !1), n
      }
      return (
        tl.__extends(t, e),
        (t.prototype.toDto = function () {
          var e = new ol.ConversationDTO(),
            t = this.target.scene,
            n = this.target.id,
            o = this.target.teamId
          return (
            (e.id = n),
            (e.teamId = o),
            (e.type = t),
            (e.lastMessage = this.getMaxMessage()),
            (e.unread = this.getUnreadAmount()),
            (e.top = this.top),
            (e.data = this.data),
            (e.ended = this.isEnded()),
            e
          )
        }),
        (t.prototype.isEnded = function () {
          var e = this.getMaxMessage(),
            t = e.type,
            n = e.payload
          return t === il.CSMessageType.END || (t === il.CSMessageType.TRANSFER && n.transferTo.id !== rl.G.Socket.user().id)
        }),
        (t.prototype.getMaxMessage = function () {
          return nl.default.get(this.target).getMaxMessage(this.accepted)
        }),
        (t.prototype.getUnreadAmount = function () {
          return nl.default.get(this.target).unreadAmount(this.accepted)
        }),
        (t.prototype.maxMessageTime = function () {
          return nl.default.get(this.target).maxTime(this.accepted)
        }),
        t
      )
    })(mi.Conversation)
  el.CSConversation = sl
  var al = {},
    cl = {}
  !(function (e) {
    e.__esModule = !0
    var t = function (e, t, n, o) {
      ;(this.type = e), (this.top = t), (this.targetId = n), (this.teamId = o)
    }
    e.default = t
  })(cl)
  var ul = {}
  !(function (e) {
    e.__esModule = !0
    var t = function (e, t, n) {
      ;(this.type = e), (this.targetId = t), (this.teamId = n)
    }
    e.default = t
  })(ul)
  var ll = {}
  !(function (e) {
    e.__esModule = !0
    var t = function (e, t, n) {
      ;(this.type = e), (this.targetId = t), (this.teamId = n)
    }
    e.default = t
  })(ll),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = cl,
        o = fe,
        i = de,
        r = ul,
        s = et,
        a = ll,
        c = (function () {
          function e() {}
          return (
            (e.prototype.top = function (e, t) {
              var r = new n.default(e.scene, t, e.id, e.teamId)
              return new Promise(function (e, t) {
                var n = new s.Rocket({
                  name: o.RocketTypes.topConversation,
                  params: r,
                  permission: s.Permission.WRITE,
                  singleTimeout: i.SocketTimeout.commonRequestSingle,
                  totalTimeout: i.SocketTimeout.commonRequestTotal,
                  success: function (n) {
                    200 === n.code ? e(n) : t(n)
                  },
                  fail: function (e) {
                    t(e)
                  },
                })
                s.G.Socket.e(n)
              })
            }),
            (e.prototype.remove = function (e) {
              var t = new r.default(e.scene, e.id, e.teamId)
              return new Promise(function (e, n) {
                var r = new s.Rocket({
                  name: o.RocketTypes.removeConversation,
                  params: t,
                  permission: s.Permission.WRITE,
                  singleTimeout: i.SocketTimeout.commonRequestSingle,
                  totalTimeout: i.SocketTimeout.commonRequestTotal,
                  success: function (t) {
                    200 == t.code ? e(t) : n(t)
                  },
                  fail: function (e) {
                    n(e)
                  },
                })
                s.G.Socket.e(r)
              })
            }),
            (e.prototype.query = function (e) {
              var n = this
              return new Promise(function (o, r) {
                var a = new s.Rocket({
                  name: e,
                  params: {},
                  permission: s.Permission.READ,
                  singleTimeout: i.SocketTimeout.commonQuerySingle,
                  totalTimeout: i.SocketTimeout.commonQueryTotal,
                  fail: function (e) {
                    r(e)
                  },
                  success: function (e) {
                    return t.__awaiter(n, void 0, void 0, function () {
                      return t.__generator(this, function (t) {
                        return o(e), [2]
                      })
                    })
                  },
                })
                s.G.Socket.e(a)
              })
            }),
            (e.prototype.loadData = function (e) {
              var t = new a.default(e.scene, e.id, e.teamId)
              return new Promise(function (e, n) {
                var r = new s.Rocket({
                  name: o.RocketTypes.imData,
                  params: t,
                  permission: s.Permission.READ,
                  singleTimeout: i.SocketTimeout.commonQuerySingle,
                  totalTimeout: i.SocketTimeout.commonQueryTotal,
                  success: function (t) {
                    var n = JSON.parse(t.content)
                    e(n)
                  },
                  fail: function (e) {
                    n(e)
                  },
                })
                s.G.Socket.e(r)
              })
            }),
            (e.instance = new e()),
            e
          )
        })()
      e.default = c
    })(al),
    (hi.__esModule = !0),
    (hi.Conversations = void 0)
  var fl = Q,
    dl = mi,
    pl = pe,
    hl = Z,
    ml = xi,
    yl = fe,
    gl = Si,
    vl = Go,
    Sl = Mi,
    El = el,
    _l = al,
    bl = yi,
    Ml = et,
    wl = Qi,
    Cl = te,
    Il = ui,
    Tl = wr,
    kl = Tr,
    Nl = (function () {
      function e() {
        ;(this.list = new Array()),
          (this.builder = new ml.RemoteAbbrMessageBuilder()),
          (this.remoteConversations = _l.default.instance),
          (this.synchronized = !1),
          Il.IMEC.i.on(vl.IM_INTERNAL_EVENTS.MAX_MESSAGE_CHANGED, this.onMaxMessageChanged.bind(this)),
          Il.IMEC.i.on(vl.IM_INTERNAL_EVENTS.UNREAD_AMOUNT_CHANGED, this.onUnreadMessageChanged.bind(this)),
          Il.IMEC.i.on(vl.IM_INTERNAL_EVENTS.MAX_MESSAGE_DELETED, this.onMaxMessageDeleted.bind(this))
      }
      return (
        (e.prototype.onUnreadMessageChanged = function (e) {
          this.findConversation(e) && this.fireUpdated()
        }),
        (e.prototype.fireUpdated = function () {
          var e = this.loadLocalConversations(),
            t = this.getUpdatedEventName()
          Tl.AEC.fire(t, { unreadTotal: e.content.unreadTotal, conversations: e.content.conversations })
        }),
        (e.prototype.getUpdatedEventName = function () {
          return kl.ImApiEvents.CONVERSATIONS_UPDATED
        }),
        (e.prototype.latestConversations = function (e) {
          return fl.__awaiter(this, void 0, void 0, function () {
            var t
            return fl.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return this.synchronized ? [3, 2] : [4, this.loadServerConversations()]
                case 1:
                  n.sent(), (n.label = 2)
                case 2:
                  return (t = this.loadLocalConversations()), pl.CallbackUtils.onSuccess(e, t), [2]
              }
            })
          })
        }),
        (e.prototype.loadServerConversations = function () {
          return fl.__awaiter(this, void 0, void 0, function () {
            var e, t
            return fl.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (e = this.rocketName()), [4, this.remoteConversations.query(e)]
                case 1:
                  return (t = n.sent()), this.convertAbbrConversation(t.content), (this.synchronized = !0), [2]
              }
            })
          })
        }),
        (e.prototype.rocketName = function () {
          return yl.RocketTypes.imLastConversations
        }),
        (e.prototype.convertAbbrConversation = function (e) {
          var t,
            n,
            o = e
          try {
            for (var i = fl.__values(o), r = i.next(); !r.done; r = i.next()) {
              var s = r.value,
                a = s.t,
                c = s.top,
                u = s.d ? JSON.parse(s.d) : {},
                l = s.userOffsets
              s.lmsg.t = a
              var f = s.lmsg,
                d = this.builder.build(f),
                p = Sl.Target.byIMMessage(d),
                h = this.findConversation(p)
              Cl.default.isUndef(h) ? ((h = this.buildByAbbr(s, d)), this.insertOne(h)) : ((h.top = c), (h.data = u)),
                bl.default.get(p).initMaxMessageAndOffsets(d, l),
                this.correctPosition(h)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i)
            } finally {
              if (t) throw t.error
            }
          }
        }),
        (e.prototype.onMaxMessageDeleted = function (e) {
          this.removeConversation(e)
        }),
        (e.prototype.onMaxMessageChanged = function (e) {
          return fl.__awaiter(this, void 0, void 0, function () {
            var t
            return fl.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return e.scene() === hl.Scene.CS &&
                    ((t = e),
                    Ml.G.Socket.user().id != t.customerId() &&
                      (!1 === t.accepted || (t.type === wl.CSMessageType.ACCEPT && t.senderId != Ml.G.Socket.user().id)))
                    ? [2]
                    : [4, this.saveOrUpdateConversation(e)]
                case 1:
                  return n.sent(), [2]
              }
            })
          })
        }),
        (e.prototype.saveOrUpdateConversation = function (e) {
          return fl.__awaiter(this, void 0, void 0, function () {
            var t, n, o, i
            return fl.__generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = e.status),
                    (n = Sl.Target.byIMMessage(e)),
                    (o = this.findConversation(n)),
                    Cl.default.isUndef(o) && t !== hl.MessageStatus.FAIL
                      ? ((o = this.buildByMessage(e)),
                        this.insertOne(o),
                        t !== hl.MessageStatus.SUCCESS ? [3, 2] : ((i = o), [4, this.remoteConversations.loadData(n)]))
                      : [3, 2]
                  )
                case 1:
                  ;(i.data = r.sent()), (o.dataLoaded = !0), (r.label = 2)
                case 2:
                  return (
                    t === hl.MessageStatus.SENDING && ((o.data = e.getToData()), (o.dataLoaded = !0)),
                    o && o.dataLoaded && (this.correctPosition(o), this.fireUpdated()),
                    [2]
                  )
              }
            })
          })
        }),
        (e.prototype.loadLocalConversations = function () {
          var e,
            t,
            n = 0,
            o = new Array()
          try {
            for (var i = fl.__values(this.list), r = i.next(); !r.done; r = i.next()) {
              var s = r.value
              if (s.dataLoaded && s.getMaxMessage()) {
                n += s.getUnreadAmount()
                var a = s.toDto()
                o.push(a)
              }
            }
          } catch (t) {
            e = { error: t }
          } finally {
            try {
              r && !r.done && (t = i.return) && t.call(i)
            } finally {
              if (e) throw e.error
            }
          }
          return { code: 200, content: { unreadTotal: n, conversations: o } }
        }),
        (e.prototype.findConversationIndex = function (e) {
          return this.list.findIndex(function (t) {
            return e.toString() === t.target.toString()
          })
        }),
        (e.prototype.findConversation = function (e) {
          var t = this.findConversationIndex(e)
          return this.list[t]
        }),
        (e.prototype.removeLocalConversation = function (e) {
          var t = this.findConversationIndex(e.target)
          this.list.splice(t, 1)
        }),
        (e.prototype.insertOne = function (t) {
          e.sortedInserter.insert(this.list, t),
            this.list.length > e.CONVERSATIONS_MAX_LENGTH && (this.list = this.list.slice(0, e.CONVERSATIONS_MAX_LENGTH))
        }),
        (e.prototype.correctPosition = function (e) {
          this.removeLocalConversation(e), this.insertOne(e)
        }),
        (e.prototype.removeConversation = function (e) {
          var t = this.findConversation(e)
          t && (this.removeLocalConversation(t), this.fireUpdated())
        }),
        (e.prototype.top = function (e, t, n) {
          return fl.__awaiter(this, void 0, void 0, function () {
            var o
            return fl.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  if (!Cl.default.isBoolean(t)) throw new Error('top must be boolean.')
                  if (!(o = this.findConversation(e))) throw new Error('conversation does not exist.')
                  return o.top == t ? [3, 2] : [4, this.remoteConversations.top(e, t)]
                case 1:
                  i.sent(), (o.top = t), this.correctPosition(o), (i.label = 2)
                case 2:
                  return this.fireUpdated(), pl.CallbackUtils.onSuccess(n), [2]
              }
            })
          })
        }),
        (e.prototype.remove = function (e, t) {
          return fl.__awaiter(this, void 0, void 0, function () {
            var n
            return fl.__generator(this, function (o) {
              switch (o.label) {
                case 0:
                  if (!(n = this.findConversation(e))) throw new Error('conversation does not exist.')
                  if (n instanceof El.CSConversation && !n.isEnded()) throw new Error('CS conversation can only be deleted after it ends')
                  return [4, this.remoteConversations.remove(e)]
                case 1:
                  return o.sent(), this.removeLocalConversation(n), this.fireUpdated(), pl.CallbackUtils.onSuccess(t), [2]
              }
            })
          })
        }),
        (e.prototype.buildByAbbr = function (e, t) {
          var n,
            o = Sl.Target.byIMMessage(t)
          if (e.t === hl.Scene.CS) {
            var i = t
            Ml.G.Socket.user().id === i.customerId() ? (n = new dl.Conversation(o)) : ((n = new El.CSConversation(o)).accepted = i.accepted)
          } else n = new dl.Conversation(o)
          return (n.dataLoaded = !0), (n.top = e.top), (n.data = e.d ? JSON.parse(e.d) : {}), n
        }),
        (e.prototype.buildByMessage = function (e) {
          var t,
            n = Sl.Target.byIMMessage(e)
          if (e.scene() === hl.Scene.CS) {
            var o = e
            Ml.G.Socket.user().id === o.customerId() ? (t = new dl.Conversation(n)) : ((t = new El.CSConversation(n)).accepted = o.accepted)
          } else t = new dl.Conversation(n)
          return t
        }),
        (e.CONVERSATIONS_MAX_LENGTH = 200),
        (e.sortedInserter = new ((function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            fl.__extends(t, e),
            (t.prototype.compare = function (e, t) {
              var n
              if (e.top == t.top) {
                var o = e.maxMessageTime()
                n = t.maxMessageTime() - o
              } else n = e.top ? -1 : 1
              return 0 === n ? 0 : n > 0 ? 1 : -1
            }),
            t
          )
        })(gl.SortedInserter))()),
        e
      )
    })()
  hi.Conversations = Nl
  var Rl = {},
    Pl = { __esModule: !0, GIMModule: void 0 },
    Al = Q,
    Ol = Sn,
    Dl = Z,
    xl = ee,
    Gl = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Al.__extends(t, e),
        (t.init = function () {
          return (this.module = new t()), (this.module.name = this.GIM_MODULE_NAME), this.initGN(), this.module
        }),
        (t.initGN = function () {
          xl.GN.addAssembler(
            new ((function () {
              function e() {}
              return (
                (e.prototype.assemble = function (e) {
                  var t = { messageId: e.id, timestamp: e.tm, type: e.t, senderId: e.sid, toType: e.tt }
                  return e.tt === Dl.Scene.GROUP && (t.groupId = e.gid), t
                }),
                (e.prototype.support = function (e) {
                  return !!e.sid
                }),
                e
              )
            })())()
          )
        }),
        (t.prototype.postConnect = function () {
          Ol.IM.init()
        }),
        (t.check = function () {
          if (!this.module) throw { code: 400, content: "IM not initialized. Please include 'IM' in the 'modules' during GoEasy initialization." }
        }),
        (t.GIM_MODULE_NAME = 'GIM'),
        t
      )
    })(et.GModule)
  ;(Pl.GIMModule = Gl), (Rl.__esModule = !0), (Rl.PendingConversations = void 0)
  var Ul = Q,
    Ll = Z,
    Fl = fe,
    Bl = Mi,
    ql = Go,
    jl = Qi,
    Vl = yi,
    Hl = el,
    zl = et,
    Wl = te,
    Jl = Pl,
    Xl = ui,
    Ql = qr,
    Yl = Tr,
    Kl = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t.expired = !1),
          Xl.IMEC.i.on(ql.IM_INTERNAL_EVENTS.CS_ONLINE_SUCCESS, t.onCSOnlineSuccess.bind(t)),
          Xl.IMEC.i.on(ql.IM_INTERNAL_EVENTS.CS_OFFLINE_SUCCESS, t.onCSOfflineSuccess.bind(t)),
          Ql.GSocket.on(Ql.GSocket.EVENT.LOST, t.onDisconnected.bind(t)),
          Ql.GSocket.on(Ql.GSocket.EVENT.RECONNECTED, t.onConnected.bind(t)),
          t
        )
      }
      return (
        Ul.__extends(t, e),
        (t.prototype.onMaxMessageChanged = function (e) {
          return Ul.__awaiter(this, void 0, void 0, function () {
            var t, n
            return Ul.__generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return e.scene() !== Ll.Scene.CS ||
                    (t = e).customerId() == zl.G.Socket.user().id ||
                    (!1 !== t.accepted && t.type !== jl.CSMessageType.ACCEPT)
                    ? [3, 3]
                    : jl.CSMessageType.ACCEPT !== e.type
                    ? [3, 1]
                    : ((n = Bl.Target.byIMMessage(e)), this.removeConversation(n), [3, 3])
                case 1:
                  return [4, this.saveOrUpdateConversation(e)]
                case 2:
                  o.sent(), (o.label = 3)
                case 3:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.latestConversations = function (t) {
          return Ul.__awaiter(this, void 0, void 0, function () {
            var n
            return Ul.__generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return (n = this.synchronized), [4, e.prototype.latestConversations.call(this, t)]
                case 1:
                  return o.sent(), this.list.length > 0 && !n && this.fireUpdated(), [2]
              }
            })
          })
        }),
        (t.prototype.onUnreadMessageChanged = function (e) {}),
        (t.prototype.onCSOnlineSuccess = function () {
          return Ul.__awaiter(this, void 0, void 0, function () {
            return Ul.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.loadServerConversations()]
                case 1:
                  return e.sent(), this.fireUpdated(), [2]
              }
            })
          })
        }),
        (t.prototype.onCSOfflineSuccess = function () {
          ;(this.list = []), this.fireUpdated()
        }),
        (t.prototype.getUpdatedEventName = function () {
          return Yl.ImApiEvents.PENDING_CONVERSATIONS_UPDATED
        }),
        (t.prototype.rocketName = function () {
          return Fl.RocketTypes.CS_PENDING_CONVERSATION
        }),
        (t.prototype.convertAbbrConversation = function (e) {
          return Ul.__awaiter(this, void 0, void 0, function () {
            var t, n, o, i, r, s, a, c, u, l, f, d, p
            return Ul.__generator(this, function (h) {
              t = e
              try {
                for (n = Ul.__values(t), o = n.next(); !o.done; o = n.next())
                  ((i = o.value).lastMessage.t = Ll.Scene.CS),
                    (r = i.customerData),
                    (s = i.lastMessage),
                    (a = i.userOffsets),
                    (c = r ? JSON.parse(r) : {}),
                    (u = this.builder.build(s)),
                    (l = Bl.Target.byIMMessage(u)),
                    (f = this.findConversation(l)),
                    Wl.default.isUndef(f) && (((f = new Hl.CSConversation(l)).accepted = u.accepted), (f.dataLoaded = !0), this.insertOne(f)),
                    (f.top = !1),
                    (f.data = c),
                    Vl.default.get(l).initPendingMaxMessageAndOffsets(u, a),
                    this.correctPosition(f)
              } catch (e) {
                d = { error: e }
              } finally {
                try {
                  o && !o.done && (p = n.return) && p.call(n)
                } finally {
                  if (d) throw d.error
                }
              }
              return [2]
            })
          })
        }),
        (t.prototype.onDisconnected = function () {
          this.expired = !0
        }),
        (t.prototype.onConnected = function () {
          return Ul.__awaiter(this, void 0, void 0, function () {
            return Ul.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.expired && Jl.GIMModule.module && Jl.GIMModule.module.active
                    ? ((this.expired = !1), (this.list = []), [4, this.loadServerConversations()])
                    : [3, 2]
                case 1:
                  e.sent(), this.fireUpdated(), (e.label = 2)
                case 2:
                  return [2]
              }
            })
          })
        }),
        t
      )
    })(hi.Conversations)
  ;(Rl.PendingConversations = Kl),
    (function (e) {
      e.__esModule = !0
      var t = hi,
        n = Mi,
        o = Z,
        i = Rl,
        r = Hi,
        s = et,
        a = (function () {
          function e() {
            ;(this.conversations = new t.Conversations()), (this.pendingConversations = new i.PendingConversations())
          }
          return (
            (e.prototype.latestConversations = function (e) {
              this.conversations.latestConversations(e)
            }),
            (e.prototype.latestPendingConversations = function (e) {
              this.pendingConversations.latestConversations(e)
            }),
            (e.prototype.topPrivateConversation = function (e) {
              var t = n.Target.byScene(o.Scene.PRIVATE, e.userId)
              this.conversations.top(t, e.top, e)
            }),
            (e.prototype.topGroupConversation = function (e) {
              var t = n.Target.byScene(o.Scene.GROUP, e.groupId)
              this.conversations.top(t, e.top, e)
            }),
            (e.prototype.topConversation = function (e) {
              var t = e.conversation
              this.validateConversationDTO(t)
              var o = n.Target.byConversationDTO(t)
              this.conversations.top(o, e.top, e)
            }),
            (e.prototype.removePrivateConversation = function (e) {
              var t = n.Target.byScene(o.Scene.PRIVATE, e.userId)
              this.conversations.remove(t, e)
            }),
            (e.prototype.removeGroupConversation = function (e) {
              var t = n.Target.byScene(o.Scene.GROUP, e.groupId)
              this.conversations.remove(t, e)
            }),
            (e.prototype.removeConversation = function (e) {
              var t = e.conversation
              this.validateConversationDTO(t)
              var o = n.Target.byConversationDTO(t)
              this.conversations.remove(o, e)
            }),
            (e.prototype.validateConversationDTO = function (e) {
              if (!(e instanceof o.ConversationDTO)) throw new Error('Incorrect conversation object.')
              var t = e.lastMessage
              if (t instanceof r.CSMessage && t.customerId() !== s.G.Socket.user().id && !1 === t.accepted)
                throw new Error('pending conversation cannot be topped or removed.')
            }),
            e
          )
        })()
      e.default = a
    })(pi)
  var $l = {}
  !(function (e) {
    e.__esModule = !0
    var t = Go,
      n = xi,
      o = Mt,
      i = te,
      r = Z,
      s = et,
      a = yi,
      c = Mi,
      u = ui,
      l = wr,
      f = Tr,
      d = (function () {
        function e() {
          ;(this.builder = new n.RemoteAbbrMessageBuilder()), s.G.Socket.onMessage(o.RemoteEvents.imMessage, this.onMessageReceived.bind(this))
        }
        return (
          (e.prototype.onMessageReceived = function (e) {
            if (e.t !== r.Scene.CS) {
              var n = this.builder.build(e)
              this.sendAck(n)
              var o = c.Target.byIMMessage(n),
                i = o.scene
              a.default.get(o).existsMessage(n) ||
                (this.createNotification(e),
                u.IMEC.i.fire(t.IM_INTERNAL_EVENTS.MESSAGE_RECEIVED, n),
                i === r.Scene.PRIVATE
                  ? l.AEC.fire(f.ImApiEvents.PRIVATE_MESSAGE_RECEIVED, n)
                  : i === r.Scene.GROUP && l.AEC.fire(f.ImApiEvents.GROUP_MESSAGE_RECEIVED, n))
            }
          }),
          (e.prototype.sendAck = function (e) {
            s.G.Socket.sendAck('imAck', { publishGuid: e.messageId })
          }),
          (e.prototype.createNotification = function (e) {
            var t = s.G.N.supportAppNotification()
            if (i.default.isObject(e.nt) && e.s !== s.G.Socket.user().id && t) {
              var n = { id: e.i, tm: e.ts, t: e.mt, sid: e.s, tt: e.t }
              n.tt === r.Scene.GROUP && (n.gid = e.r), s.G.N.createLocalNotification(e.nt.t, e.nt.c, n, e.nt.sound, e.nt.badge)
            }
          }),
          e
        )
      })()
    e.default = d
  })($l)
  var Zl = {}
  !(function (e) {
    ;(e.__esModule = !0), (e.GroupSubscribeOption = void 0)
    var t = Q,
      n = de,
      o = gt,
      i = fe,
      r = pe,
      s = et,
      a = wt,
      c = (function () {
        function e() {
          ;(this.subscribedGroups = []), s.G.Socket.on(a.SocketEvent.EXPIRED_RECONNECTED, this.expiredResubscribeGroups.bind(this))
        }
        return (
          (e.prototype.expiredResubscribeGroups = function () {
            var e = this
            this.subscribedGroups.forEach(function (n) {
              return t.__awaiter(e, void 0, void 0, function () {
                return t.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.doSubscribeGroup(n)]
                    case 1:
                      return e.sent(), [2]
                  }
                })
              })
            })
          }),
          (e.prototype.subscribe = function (e) {
            var t = this,
              n = e.groupIds
            o.default.validateIdArray(n, 'groupIds')
            var i = new u(n, e.accessToken)
            this.doSubscribeGroup(i)
              .then(function () {
                t.subscribedGroups.push(i), r.CallbackUtils.onSuccess(e, { code: 200, content: 'ok' })
              })
              .catch(function (t) {
                r.CallbackUtils.onFailed(e, { code: t.resultCode || 408, content: t.content || 'Failed to subscribe group message' })
              })
          }),
          (e.prototype.doSubscribeGroup = function (e) {
            return new Promise(function (t, o) {
              var r = e.groupIds.toString().split(','),
                a = new s.Rocket({
                  name: i.RocketTypes.subscribeGroups,
                  params: { groupIds: r, at: e.accessToken },
                  permission: s.Permission.WRITE,
                  singleTimeout: n.SocketTimeout.commonRequestSingle,
                  totalTimeout: n.SocketTimeout.commonRequestTotal,
                  success: function () {
                    t()
                  },
                  fail: function (e) {
                    o(e)
                  },
                })
              s.G.Socket.e(a)
            })
          }),
          (e.prototype.unsubscribe = function (e) {
            var t = this
            o.default.validateId(e.groupId, 'groupId'), (e.groupId = e.groupId.toString())
            var a = new s.Rocket({
              name: i.RocketTypes.unsubscribeGroup,
              params: { groupId: e.groupId },
              permission: s.Permission.READ,
              singleTimeout: n.SocketTimeout.commonRequestSingle,
              totalTimeout: n.SocketTimeout.commonRequestTotal,
              success: function () {
                t.deleteSubscriptionByGroupId(e.groupId), r.CallbackUtils.onSuccess(e, { code: 200, content: 'ok' })
              },
              fail: function (t) {
                r.CallbackUtils.onFailed(e, { code: t.resultCode || 408, content: t.content || 'Failed to unsubscribe group message' })
              },
            })
            s.G.Socket.e(a)
          }),
          (e.prototype.deleteSubscriptionByGroupId = function (e) {
            this.subscribedGroups = this.subscribedGroups.filter(function (t) {
              var n = t.groupIds.findIndex(function (t) {
                return t == e
              })
              return n > -1 && t.groupIds.splice(n, 1), t.groupIds.length > 0
            })
          }),
          e
        )
      })()
    e.default = c
    var u = function (e, t) {
      ;(this.groupIds = e), (this.accessToken = t)
    }
    e.GroupSubscribeOption = u
  })(Zl)
  var ef = {}
  !(function (e) {
    e.__esModule = !0
    var t = de,
      n = fe,
      o = Mt,
      i = gt,
      r = pe,
      s = et,
      a = qr,
      c = wr,
      u = Tr,
      l = (function () {
        function e() {
          ;(this.newMessageReceived = function (e) {
            var t = null
            e.c && (t = JSON.parse(e.c)),
              t &&
                t.events &&
                t.events.map(function (e) {
                  var n = e.userData ? JSON.parse(e.userData) : {},
                    o = { time: e.time, action: e.action, groupOnlineCount: t.userAmount, groupId: t.groupId, id: e.userId, data: n }
                  c.AEC.fire(u.ImApiEvents.GROUP_PRESENCE, o)
                })
          }),
            a.GSocket.onMessage(o.RemoteEvents.groupPresence, this.newMessageReceived)
        }
        return (
          (e.prototype.presence = function (e) {
            i.default.validateIdArray(e.groupIds, 'groupIds'), e.groupIds.toString().split(',')
            var o = { groupIds: e.groupIds }
            this.emitRocket(
              n.RocketTypes.subscribeGroupPresence,
              o,
              function () {
                r.CallbackUtils.onSuccess(e, { code: 200, content: 'ok' })
              },
              function (t) {
                r.CallbackUtils.onFailed(e, { code: t.code || 408, content: t.content || 'Failed to subscribe group message' })
              },
              t.SocketTimeout.commonRequestSingle,
              t.SocketTimeout.commonRequestTotal
            )
          }),
          (e.prototype.unPresence = function (e) {
            i.default.validateId(e.groupId, 'groupId'), (e.groupId = e.groupId.toString())
            var o = { groupId: e.groupId }
            this.emitRocket(
              n.RocketTypes.unsubscribeGroupPresence,
              o,
              function () {
                r.CallbackUtils.onSuccess(e, { code: 200, content: 'ok' })
              },
              function (t) {
                r.CallbackUtils.onFailed(e, { code: t.code || 408, content: t.content || 'Failed to unsubscribe presence' })
              },
              t.SocketTimeout.commonRequestSingle,
              t.SocketTimeout.commonRequestTotal
            )
          }),
          (e.prototype.emitRocket = function (e, t, n, o, i, r) {
            var a = new s.Rocket({ name: e, params: t, singleTimeout: i, totalTimeout: r, permission: s.Permission.WRITE, success: n, fail: o })
            s.G.Socket.e(a)
          }),
          e
        )
      })()
    e.default = l
  })(ef)
  var tf = {}
  !(function (e) {
    e.__esModule = !0
    var t = de,
      n = fe,
      o = gt,
      i = pe,
      r = et,
      s = (function () {
        function e() {}
        return (
          (e.prototype.get = function (e) {
            o.default.validateId(e.groupId, 'groupId'), (e.groupId = e.groupId.toString())
            var s = new r.Rocket({
              name: n.RocketTypes.imGroupOnlineCount,
              params: { groupId: e.groupId },
              permission: r.Permission.READ,
              singleTimeout: t.SocketTimeout.commonQuerySingle,
              totalTimeout: t.SocketTimeout.commonQueryTotal,
              fail: function (t) {
                i.CallbackUtils.onFailed(e, t || { code: 408, content: 'Failed to query online group users' })
              },
              success: function (t) {
                200 == t.code ? i.CallbackUtils.onSuccess(e, t) : i.CallbackUtils.onFailed(e, t)
              },
            })
            r.G.Socket.e(s)
          }),
          e
        )
      })()
    e.default = s
  })(tf)
  var nf = {},
    of = { __esModule: !0, IMHereNow: void 0 },
    rf = de,
    sf = pe,
    af = et,
    cf = (function () {
      function e() {}
      return (
        (e.prototype.doHereNow = function (e, t, n) {
          var o = new af.Rocket({
            name: e,
            params: t,
            permission: af.Permission.READ,
            singleTimeout: rf.SocketTimeout.commonQuerySingle,
            totalTimeout: rf.SocketTimeout.commonQueryTotal,
            fail: function (e) {
              sf.CallbackUtils.onFailed(n, e)
            },
            success: function (e) {
              var t = e.content
              ;(e.content = t.map(function (e) {
                var t = e.userData ? JSON.parse(e.userData) : {}
                return { id: e.userId, data: t }
              })),
                sf.CallbackUtils.onSuccess(n, e)
            },
          })
          af.G.Socket.e(o)
        }),
        e
      )
    })()
  ;(of.IMHereNow = cf),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = fe,
        o = gt,
        i = (function (e) {
          function i() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            t.__extends(i, e),
            (i.prototype.hereNow = function (e) {
              o.default.validateId(e.groupId, 'groupId'), (e.groupId = e.groupId.toString())
              var t = { groupId: e.groupId }
              this.doHereNow(n.RocketTypes.imGroupHereNow, t, e)
            }),
            i
          )
        })(of.IMHereNow)
      e.default = i
    })(nf)
  var uf = {}
  !(function (e) {
    e.__esModule = !0
    var t = de,
      n = gt,
      o = fe,
      i = Mt,
      r = pe,
      s = et,
      a = qr,
      c = wr,
      u = Tr,
      l = (function () {
        function e() {
          ;(this.newMessageReceived = function (e) {
            var t = []
            e.c && (t = JSON.parse(e.c).events || []),
              t.map(function (e) {
                var t = e.userData ? JSON.parse(e.userData) : {},
                  n = { time: e.time, action: e.action, id: e.userId, data: t }
                c.AEC.fire(u.ImApiEvents.USER_PRESENCE, n)
              })
          }),
            a.GSocket.onMessage(i.RemoteEvents.userPresence, this.newMessageReceived)
        }
        return (
          (e.prototype.presence = function (e) {
            n.default.validateIdArray(e.userIds, 'userIds'), e.userIds.toString().split(',')
            var i = { userIds: e.userIds }
            this.emitRocket(
              o.RocketTypes.subscribeUserPresence,
              i,
              function () {
                r.CallbackUtils.onSuccess(e, { code: 200, content: 'ok' })
              },
              function (t) {
                r.CallbackUtils.onFailed(e, { code: t.code || 408, content: t.content || 'Failed to subscribe group message' })
              },
              t.SocketTimeout.commonRequestSingle,
              t.SocketTimeout.commonRequestTotal
            )
          }),
          (e.prototype.unPresence = function (e) {
            n.default.validateId(e.userId, 'userId'), (e.userId = e.userId.toString())
            var i = { userId: e.userId }
            this.emitRocket(
              o.RocketTypes.unsubscribeUserPresence,
              i,
              function () {
                r.CallbackUtils.onSuccess(e, { code: 200, content: 'ok' })
              },
              function (t) {
                r.CallbackUtils.onFailed(e, { code: t.code || 408, content: t.content || 'Failed to unsubscribe presence' })
              },
              t.SocketTimeout.commonRequestSingle,
              t.SocketTimeout.commonRequestTotal
            )
          }),
          (e.prototype.emitRocket = function (e, t, n, o, i, r) {
            var a = new s.Rocket({ name: e, params: t, singleTimeout: i, totalTimeout: r, permission: s.Permission.WRITE, success: n, fail: o })
            s.G.Socket.e(a)
          }),
          e
        )
      })()
    e.default = l
  })(uf)
  var lf = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = fe,
      o = gt,
      i = (function (e) {
        function i() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(i, e),
          (i.prototype.hereNow = function (e) {
            var t = e.userIds
            o.default.validateIdArray(t, 'userIds'), t.toString().split(','), this.doHereNow(n.RocketTypes.imHereNow, e, e)
          }),
          i
        )
      })(of.IMHereNow)
    e.default = i
  })(lf)
  var ff = {},
    df = {},
    pf = { __esModule: !0, str: void 0 },
    hf = te,
    mf = (function () {
      function e() {}
      return (
        (e.prototype.fileExtension = function (e, t) {
          if (hf.default.isString(e))
            try {
              var n = e.split(t)
              return n[n.length - 1]
            } catch (e) {
              throw Error(e)
            }
        }),
        e
      )
    })(),
    yf = new mf()
  pf.str = yf
  var gf = {},
    vf = {},
    Sf = { __esModule: !0, AbstractMessagePayload: void 0 },
    Ef = function () {}
  ;(Sf.AbstractMessagePayload = Ef), (vf.__esModule = !0), (vf.FileMessagePayload = void 0)
  var _f = Q,
    bf = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.contentType = ''), (t.name = ''), (t.size = 0), (t.url = ''), t
      }
      return _f.__extends(t, e), t
    })(Sf.AbstractMessagePayload)
  ;(vf.FileMessagePayload = bf), (gf.__esModule = !0), (gf.ImageMessagePayload = void 0)
  var Mf = Q,
    wf = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.width = 0), (t.height = 0), t
      }
      return Mf.__extends(t, e), t
    })(vf.FileMessagePayload)
  gf.ImageMessagePayload = wf
  var Cf = {},
    If = { __esModule: !0, AbstractPayloadBuilder: void 0 },
    Tf = (function () {
      function e() {}
      return (
        (e.prototype.build = function (e) {
          this.validate(e.createOptions)
          var t = this.create()
          return this.setPayload(e, t), t
        }),
        e
      )
    })()
  ;(If.AbstractPayloadBuilder = Tf),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = vf,
        o = te,
        i = (function (e) {
          function i() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            t.__extends(i, e),
            (i.prototype.create = function () {
              return new n.FileMessagePayload()
            }),
            (i.prototype.setPayload = function (e, t) {
              var n = t,
                o = e.createOptions.file
              ;(n.url = o.path), (n.name = o.name), (n.size = o.size), (n.contentType = o.type), (e.complete = Promise.resolve())
            }),
            (i.prototype.validate = function (e) {
              if (!o.default.isObject(e)) throw Error('it is an empty message.')
              if (!o.default.isDef(e.file)) throw Error('file is empty.')
            }),
            i
          )
        })(If.AbstractPayloadBuilder)
      e.default = i
    })(Cf),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = pf,
        o = te,
        i = gf,
        r = (function (e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            t.__extends(r, e),
            (r.prototype.create = function () {
              return new i.ImageMessagePayload()
            }),
            (r.prototype.setPayload = function (t, i) {
              e.prototype.setPayload.call(this, t, i)
              var r = t.createOptions.file,
                s = i,
                a = r.path || r.tempFilePath,
                c = o.default.isEmpty(r.name) || void 0 === r.name ? a : r.name
              ;(s.name = 'wx-image.' + n.str.fileExtension(c, '.')),
                (s.contentType = 'image/' + n.str.fileExtension(c, '.')),
                (s.url = a),
                (s.size = r.size),
                (t.complete = new Promise(function (e, t) {
                  wx.getImageInfo({
                    src: s.url,
                    success: function (t) {
                      ;(s.width = t.width), (s.height = t.height), e()
                    },
                    fail: function (e) {
                      t(e)
                    },
                  })
                }))
            }),
            (r.prototype.validate = function (t) {
              e.prototype.validate.call(this, t)
            }),
            r
          )
        })(Cf.default)
      e.default = r
    })(df)
  var kf = {},
    Nf = { __esModule: !0, AudioMessagePayload: void 0 },
    Rf = Q,
    Pf = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.duration = 0), t
      }
      return Rf.__extends(t, e), t
    })(vf.FileMessagePayload)
  ;(Nf.AudioMessagePayload = Pf),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = Nf,
        o = te,
        i = pf,
        r = (function (e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            t.__extends(r, e),
            (r.prototype.create = function () {
              return new n.AudioMessagePayload()
            }),
            (r.prototype.setPayload = function (t, n) {
              e.prototype.setPayload.call(this, t, n)
              var r = t.createOptions.file,
                s = n,
                a = r.tempFilePath,
                c = o.default.isEmpty(r.name) || null == r.name ? a : r.name,
                u = r.duration,
                l = r.fileSize
              ;(s.url = a),
                (s.size = l),
                (s.duration = u / 1e3),
                (s.name = 'wx-audio.' + i.str.fileExtension(c, '.')),
                (s.contentType = 'audio/' + i.str.fileExtension(c, '.')),
                (t.complete = Promise.resolve())
            }),
            (r.prototype.validate = function (t) {
              e.prototype.validate.call(this, t)
            }),
            r
          )
        })(Cf.default)
      e.default = r
    })(kf)
  var Af = {},
    Of = { __esModule: !0, TextMessagePayload: void 0 },
    Df = Q,
    xf = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.text = ''), t
      }
      return Df.__extends(t, e), t
    })(Sf.AbstractMessagePayload)
  ;(Of.TextMessagePayload = xf), (Af.__esModule = !0), (Af.TextPayloadBuilder = void 0)
  var Gf = Q,
    Uf = Of,
    Lf = te,
    Ff = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Gf.__extends(t, e),
        (t.prototype.create = function () {
          return new Uf.TextMessagePayload()
        }),
        (t.prototype.setPayload = function (e, t) {
          var n = t,
            o = e.createOptions
          ;(n.text = o.text), (e.complete = Promise.resolve())
        }),
        (t.prototype.validate = function (e) {
          if (Lf.default.isEmpty(e.text)) throw { code: 400, content: 'text is empty' }
          if (!Lf.default.isString(e.text)) throw { code: 400, content: 'TypeError: text requires string.' }
          if ('' === e.text.trim()) throw { code: 400, content: 'text is empty' }
          if (e.text.length > 2500) throw { code: 400, content: 'Message text over max length 2500' }
        }),
        t
      )
    })(If.AbstractPayloadBuilder)
  Af.TextPayloadBuilder = Ff
  var Bf = {},
    qf = { __esModule: !0, VideoMessagePayload: void 0 },
    jf = Q,
    Vf = ne,
    Hf = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.video = new Wf()), (t.thumbnail = new zf()), t
      }
      return jf.__extends(t, e), t
    })(Sf.AbstractMessagePayload)
  qf.VideoMessagePayload = Hf
  var zf = (function () {
      function e() {
        ;(this.name = ''), (this.url = ''), (this.width = 0), (this.height = 0), (this.contentType = '')
      }
      return (
        (e.prototype.initURL = function (e) {
          Vf.PlatformDetector.currentPlatform() === Vf.PlatformType.BROWSER && this.htmlUrl(e)
        }),
        (e.prototype.htmlUrl = function (e) {
          var t = document.createElement('canvas')
          ;(t.width = e.videoWidth),
            (t.height = e.videoHeight),
            t.getContext('2d').drawImage(e, 0, 0, t.width, t.height),
            (this.url = t.toDataURL('image/png'))
        }),
        e
      )
    })(),
    Wf = function () {
      ;(this.name = ''), (this.url = ''), (this.width = 0), (this.height = 0), (this.contentType = ''), (this.size = 0), (this.duration = 0)
    }
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = qf,
      o = te,
      i = pf,
      r = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(r, e),
          (r.prototype.create = function () {
            return new n.VideoMessagePayload()
          }),
          (r.prototype.setPayload = function (e, t) {
            var n = e.createOptions.file,
              r = t,
              s = r.video,
              a = r.thumbnail,
              c = n.duration,
              u = n.height,
              l = n.size,
              f = n.tempFilePath,
              d = n.thumbTempFilePath,
              p = n.width,
              h = n.name,
              m = void 0 === h ? '' : h,
              y = o.default.isEmpty(m) ? f : m
            ;(s.contentType = 'video/' + i.str.fileExtension(y, '.')),
              (s.name = 'wx-video.' + i.str.fileExtension(y, '.')),
              (s.url = f),
              (s.width = a.width = p),
              (s.height = a.height = u),
              (s.size = l),
              (s.duration = c),
              (a.url = d),
              (a.contentType = 'image/jpg'),
              (a.name = 'wx-thumbnail.jpg'),
              (e.complete = Promise.resolve())
          }),
          (r.prototype.validate = function (e) {
            if (!o.default.isObject(e)) throw Error('it is an empty message.')
            if (!o.default.isDef(e.file)) throw Error('file is empty.')
          }),
          r
        )
      })(If.AbstractPayloadBuilder)
    e.default = r
  })(Bf)
  var Jf = {},
    Xf = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = vf,
      o = te,
      i = (function (e) {
        function i() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(i, e),
          (i.prototype.create = function () {
            return new n.FileMessagePayload()
          }),
          (i.prototype.setPayload = function (e, t) {
            var n = t,
              o = e.createOptions.file
            ;(n.url = o.fullPath || o.path), (n.name = o.name), (n.size = o.size), (n.contentType = o.type), o.type, (e.complete = Promise.resolve())
          }),
          (i.prototype.validate = function (e) {
            if (!o.default.isObject(e)) throw Error('it is an empty message.')
            if (!o.default.isDef(e.file)) throw Error('file is empty.')
          }),
          i
        )
      })(If.AbstractPayloadBuilder)
    e.default = i
  })(Xf),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = pf,
        o = te,
        i = gf,
        r = (function (e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            t.__extends(r, e),
            (r.prototype.create = function () {
              return new i.ImageMessagePayload()
            }),
            (r.prototype.setPayload = function (e, t) {
              var i = t,
                r = e.createOptions.file
              ;(i.url = r.path), (i.size = r.size)
              var s = o.default.isEmpty(r.name) || void 0 === r.name ? r.path : r.name
              ;(i.contentType = 'image/' + n.str.fileExtension(s, '.')),
                (i.name = 'uni-image.' + n.str.fileExtension(s, '.')),
                (e.complete = new Promise(function (e, t) {
                  uni.getImageInfo({
                    src: r.path,
                    success: function (t) {
                      ;(i.width = t.width), (i.height = t.height), e()
                    },
                    fail: function (e) {
                      t(e)
                    },
                  })
                }))
            }),
            (r.prototype.validate = function (t) {
              e.prototype.validate.call(this, t)
            }),
            r
          )
        })(Xf.default)
      e.default = r
    })(Jf)
  var Qf = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = te,
      o = pf,
      i = Nf,
      r = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(r, e),
          (r.prototype.create = function () {
            return new i.AudioMessagePayload()
          }),
          (r.prototype.setPayload = function (e, t) {
            var i = e.createOptions,
              r = t,
              s = i.file,
              a = s.tempFilePath,
              c = n.default.isEmpty(s.name) || null == s.name ? a : s.name
            ;(r.url = a),
              (r.name = 'uni-audio.' + o.str.fileExtension(c, '.')),
              (r.contentType = 'audio/' + o.str.fileExtension(c, '.')),
              (e.complete = new Promise(function (e, t) {
                uni.getFileInfo({
                  filePath: a,
                  success: function (o) {
                    var s = o.size
                    if (((r.size = s), 0 === s)) e()
                    else if (n.default.isDef(i.file.duration)) (r.duration = i.file.duration / 1e3), e()
                    else {
                      var c = uni.createInnerAudioContext()
                      ;(c.src = a),
                        c.onCanplay(function (n) {
                          n.errCode ? (c.destroy(), t(n)) : ((r.duration = c.duration), c.destroy(), e())
                        }),
                        c.onError(function (n) {
                          c.destroy(), -99 === n.errCode ? e() : t(n)
                        })
                    }
                  },
                  fail: function (e) {
                    t(e)
                  },
                })
              }))
          }),
          (r.prototype.validate = function (t) {
            e.prototype.validate.call(this, t)
          }),
          r
        )
      })(Xf.default)
    e.default = r
  })(Qf)
  var Yf = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = te,
      o = pf,
      i = qf,
      r = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(r, e),
          (r.prototype.create = function () {
            return new i.VideoMessagePayload()
          }),
          (r.prototype.setPayload = function (e, t) {
            var i = e.createOptions.file,
              r = t,
              s = r.video,
              a = r.thumbnail,
              c = i.duration,
              u = i.height,
              l = i.size,
              f = i.tempFilePath,
              d = i.width,
              p = i.name,
              h = void 0 === p ? '' : p,
              m = n.default.isEmpty(h) ? f : h
            ;(s.size = l),
              (s.width = d),
              (s.height = u),
              (s.url = f),
              (s.duration = c),
              (s.contentType = 'video/' + o.str.fileExtension(m, '.')),
              (s.name = 'uni-video.' + o.str.fileExtension(m, '.')),
              (a.url = f),
              (a.height = 200),
              (a.width = Number(((s.width * a.height) / s.height).toFixed(0))),
              (a.contentType = 'image/jpg'),
              (a.name = 'uni-thumbnail.jpg'),
              (e.complete = Promise.resolve())
          }),
          (r.prototype.validate = function (e) {
            if (!n.default.isObject(e)) throw Error('it is an empty message.')
            if (!n.default.isDef(e.file)) throw Error('file is empty.')
          }),
          r
        )
      })(If.AbstractPayloadBuilder)
    e.default = r
  })(Yf)
  var Kf = {},
    $f = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = vf,
      o = te,
      i = (function (e) {
        function i() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(i, e),
          (i.prototype.create = function () {
            return new n.FileMessagePayload()
          }),
          (i.prototype.setPayload = function (e, t) {
            var n = t,
              o = e.createOptions.file,
              i = window.URL || window.webkitURL
            ;(n.url = i.createObjectURL(o)), (n.name = o.name), (n.size = o.size), (n.contentType = o.type), (e.complete = Promise.resolve())
          }),
          (i.prototype.validate = function (e) {
            if (!o.default.isObject(e)) throw Error('it is an empty message.')
            if (!(e.file instanceof File)) throw Error('wrong file type.')
            if (0 == e.file.size) throw Error('File size is 0.')
            if (e.file.size > 524288e3) throw Error('message-length limit 30mib')
          }),
          i
        )
      })(If.AbstractPayloadBuilder)
    e.default = i
  })($f),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = gf,
        o = (function (e) {
          function o() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            t.__extends(o, e),
            (o.prototype.create = function () {
              return new n.ImageMessagePayload()
            }),
            (o.prototype.setPayload = function (t, n) {
              e.prototype.setPayload.call(this, t, n)
              var o = t.createOptions.file,
                i = n,
                r = window.URL || window.webkitURL,
                s = new Image()
              ;(s.src = r.createObjectURL(o)),
                (t.complete = new Promise(function (e, t) {
                  ;(s.onload = function () {
                    ;(i.width = s.width), (i.height = s.height), r.revokeObjectURL(s.src), e()
                  }),
                    (s.onerror = function (e) {
                      r.revokeObjectURL(s.src), t(e)
                    })
                }))
            }),
            (o.prototype.validate = function (t) {
              e.prototype.validate.call(this, t)
              var n = ['gif', 'jpg', 'png', 'jpeg']
              if (
                !n.find(function (e) {
                  return e === t.file.type.split('/')[1].toLowerCase()
                })
              )
                throw Error('Only ' + n.join(',') + ' is supported image.')
            }),
            o
          )
        })($f.default)
      e.default = o
    })(Kf)
  var Zf = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = Nf,
      o = (function (e) {
        function o() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(o, e),
          (o.prototype.create = function () {
            return new n.AudioMessagePayload()
          }),
          (o.prototype.setPayload = function (t, n) {
            e.prototype.setPayload.call(this, t, n)
            var o = t.createOptions.file,
              i = n,
              r = window.URL || window.webkitURL,
              s = document.createElement('audio')
            ;(s.src = r.createObjectURL(o)),
              (t.complete = new Promise(function (e, t) {
                ;(s.onloadedmetadata = function () {
                  ;(i.duration = s.duration), r.revokeObjectURL(s.src), e()
                }),
                  (s.onerror = function (e) {
                    r.revokeObjectURL(s.src), t(e)
                  })
              }))
          }),
          (o.prototype.validate = function (t) {
            e.prototype.validate.call(this, t)
            var n = ['mp3', 'ogg', 'wav', 'wma', 'ape', 'acc', 'mpeg']
            if (
              !n.find(function (e) {
                return e === t.file.type.split('/')[1].toLowerCase()
              })
            )
              throw Error('Only ' + n.join(',') + ' is supported audio.')
          }),
          o
        )
      })($f.default)
    e.default = o
  })(Zf)
  var ed = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = qf,
      o = te,
      i = (function (e) {
        function i() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(i, e),
          (i.prototype.create = function () {
            return new n.VideoMessagePayload()
          }),
          (i.prototype.setPayload = function (e, t) {
            var n = this,
              o = e.createOptions.file,
              i = t,
              r = i.video,
              s = i.thumbnail,
              a = window.URL || window.webkitURL,
              c = document.createElement('video')
            ;(c.src = a.createObjectURL(o)),
              (r.size = o.size),
              (r.name = o.name),
              (r.contentType = o.type),
              (r.url = c.src),
              (s.name = o.name),
              (s.contentType = 'image/jpg'),
              (e.complete = new Promise(function (e, t) {
                ;(c.onloadedmetadata = function () {
                  ;(r.duration = c.duration),
                    (r.width = c.videoWidth),
                    (r.height = c.videoHeight),
                    (s.width = c.videoWidth),
                    (s.height = c.videoHeight),
                    (s.url = n.getThumbnailUrl(c)),
                    a.revokeObjectURL(c.src),
                    e()
                }),
                  (c.onerror = function (e) {
                    a.revokeObjectURL(c.src), t(e)
                  })
              }))
          }),
          (i.prototype.getThumbnailUrl = function (e) {
            var t = document.createElement('canvas')
            return (
              (t.width = e.videoWidth), (t.height = e.videoHeight), t.getContext('2d').drawImage(e, 0, 0, t.width, t.height), t.toDataURL('image/png')
            )
          }),
          (i.prototype.validate = function (e) {
            if (!o.default.isObject(e)) throw Error('it is an empty message.')
            if (!(e.file instanceof File)) throw Error('wrong file type.')
            if (0 == e.file.size) throw Error('File size is 0.')
            if (e.file.size > 31457280) throw Error('message-length limit 30mib')
            var t = ['avi', 'mov', 'rmvb', 'rm', 'flv', 'mp4', '3gp', 'quicktime']
            if (
              !t.find(function (t) {
                return t === e.file.type.split('/')[1].toLowerCase()
              })
            )
              throw Error('Only ' + t.join(',') + ' is supported video.')
          }),
          i
        )
      })(If.AbstractPayloadBuilder)
    e.default = i
  })(ed)
  var td = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = te,
      o = qf,
      i = (function (e) {
        function i() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(i, e),
          (i.prototype.create = function () {
            return new o.VideoMessagePayload()
          }),
          (i.prototype.setPayload = function (e, t) {
            var n = e.createOptions.file,
              o = t,
              i = o.video,
              r = o.thumbnail,
              s = n.duration,
              a = n.height,
              c = n.size,
              u = n.tempFilePath,
              l = n.tempVideoThumbPath,
              f = n.width
            ;(i.size = c),
              (i.width = f),
              (i.height = a),
              (i.url = u),
              (i.duration = s),
              (i.contentType = 'video/mp4'),
              (i.name = 'ali-video.mp4'),
              (r.url = l),
              (r.height = 200),
              (r.width = Number(((i.width * r.height) / i.height).toFixed(0))),
              (r.contentType = 'image/jpg'),
              (r.name = 'ali-thumbnail.jpg'),
              (e.complete = Promise.resolve())
          }),
          (i.prototype.validate = function (e) {
            if (!n.default.isObject(e)) throw Error('it is an empty message.')
            if (!n.default.isDef(e.file)) throw Error('file is empty.')
          }),
          i
        )
      })(If.AbstractPayloadBuilder)
    e.default = i
  })(td)
  var nd = {},
    od = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = vf,
      o = te,
      i = (function (e) {
        function i() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(i, e),
          (i.prototype.create = function () {
            return new n.FileMessagePayload()
          }),
          (i.prototype.setPayload = function (e, t) {
            e.complete = Promise.reject('Alipay not support file message.')
          }),
          (i.prototype.validate = function (e) {
            if (!o.default.isObject(e)) throw Error('it is an empty message.')
            if (!o.default.isDef(e.file)) throw Error('file is empty.')
          }),
          i
        )
      })(If.AbstractPayloadBuilder)
    e.default = i
  })(od),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = gf,
        o = (function (e) {
          function o() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            t.__extends(o, e),
            (o.prototype.create = function () {
              return new n.ImageMessagePayload()
            }),
            (o.prototype.setPayload = function (e, t) {
              var n = t,
                o = e.createOptions.file
              ;(n.url = o.path),
                (n.size = o.size),
                (e.complete = new Promise(function (e, t) {
                  my.getImageInfo({
                    src: o.path,
                    success: function (t) {
                      ;(n.width = t.width), (n.height = t.height), (n.contentType = 'image/' + t.type), (n.name = 'ali-image.' + t.type), e()
                    },
                    fail: function (e) {
                      t(e)
                    },
                  })
                }))
            }),
            (o.prototype.validate = function (t) {
              e.prototype.validate.call(this, t)
            }),
            o
          )
        })(od.default)
      e.default = o
    })(nd)
  var id = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = pf,
      o = Nf,
      i = (function (e) {
        function i() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(i, e),
          (i.prototype.create = function () {
            return new o.AudioMessagePayload()
          }),
          (i.prototype.setPayload = function (e, t) {
            var o = t,
              i = e.createOptions.file,
              r = i.tempFilePath
            ;(o.url = r),
              (o.name = 'ali-audio.' + n.str.fileExtension(r, '.')),
              (o.contentType = 'audio/' + n.str.fileExtension(r, '.')),
              (o.duration = i.duration),
              (o.size = i.fileSize),
              (e.complete = Promise.resolve())
          }),
          (i.prototype.validate = function (t) {
            e.prototype.validate.call(this, t)
          }),
          i
        )
      })(od.default)
    e.default = i
  })(id)
  var rd = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = te,
      o = qf,
      i = pf,
      r = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(r, e),
          (r.prototype.create = function () {
            return new o.VideoMessagePayload()
          }),
          (r.prototype.setPayload = function (e, t) {
            var n = e.createOptions.file,
              o = t,
              r = o.video,
              s = o.thumbnail,
              a = n.duration,
              c = n.height,
              u = n.size,
              l = n.tempFilePath,
              f = n.thumbTempFilePath,
              d = n.width
            ;(r.size = u),
              (r.width = d),
              (r.height = c),
              (r.url = l),
              (r.duration = a),
              (r.contentType = 'video/' + i.str.fileExtension(l, '.')),
              (r.name = 'baidu-video.' + i.str.fileExtension(l, '.')),
              (s.url = f),
              (s.height = 200),
              (s.width = Number(((r.width * s.height) / r.height).toFixed(0))),
              (s.contentType = 'image/' + i.str.fileExtension(f, '.')),
              (s.name = 'baidu-thumbnail.' + i.str.fileExtension(l, '.')),
              (e.complete = Promise.resolve())
          }),
          (r.prototype.validate = function (e) {
            if (!n.default.isObject(e)) throw Error('it is an empty message.')
            if (!n.default.isDef(e.file)) throw Error('file is empty.')
          }),
          r
        )
      })(If.AbstractPayloadBuilder)
    e.default = r
  })(rd)
  var sd = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = vf,
      o = (function (e) {
        function o() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(o, e),
          (o.prototype.create = function () {
            return new n.FileMessagePayload()
          }),
          (o.prototype.setPayload = function (e, t) {
            e.complete = Promise.reject('Baidu app not support file message.')
          }),
          (o.prototype.validate = function (e) {}),
          o
        )
      })(If.AbstractPayloadBuilder)
    e.default = o
  })(sd)
  var ad = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = pf,
      o = Nf,
      i = (function (e) {
        function i() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(i, e),
          (i.prototype.create = function () {
            return new o.AudioMessagePayload()
          }),
          (i.prototype.setPayload = function (e, t) {
            var o = t,
              i = e.createOptions.file,
              r = i.tempFilePath
            ;(o.url = r),
              (o.name = 'baidu-audio.' + n.str.fileExtension(r, '.')),
              (o.contentType = 'audio/' + n.str.fileExtension(r, '.')),
              (o.duration = i.duration / 1e3),
              (o.size = i.fileSize),
              (e.complete = Promise.resolve())
          }),
          (i.prototype.validate = function (t) {
            e.prototype.validate.call(this, t)
          }),
          i
        )
      })(sd.default)
    e.default = i
  })(ad)
  var cd = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = gf,
      o = (function (e) {
        function o() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(o, e),
          (o.prototype.create = function () {
            return new n.ImageMessagePayload()
          }),
          (o.prototype.setPayload = function (e, t) {
            var n = t,
              o = e.createOptions.file
            ;(n.url = o.path),
              (n.size = o.size),
              (e.complete = new Promise(function (e, t) {
                swan.getImageInfo({
                  src: o.path,
                  success: function (t) {
                    ;(n.width = t.width), (n.height = t.height), (n.contentType = 'image/' + t.type), (n.name = 'baidu-image.' + t.type), e()
                  },
                  fail: function (e) {
                    t(e)
                  },
                })
              }))
          }),
          (o.prototype.validate = function (t) {
            e.prototype.validate.call(this, t)
          }),
          o
        )
      })(sd.default)
    e.default = o
  })(cd)
  var ud = {},
    ld = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = vf,
      o = te,
      i = (function (e) {
        function i() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(i, e),
          (i.prototype.create = function () {
            return new n.FileMessagePayload()
          }),
          (i.prototype.setPayload = function (e, t) {
            var n = t,
              o = e.createOptions.file,
              i = o.uri,
              r = o.type,
              s = o.size,
              a = o.name
            ;(n.url = decodeURIComponent(i)), (n.name = a), (n.size = s), (n.contentType = r), (e.complete = Promise.resolve())
          }),
          (i.prototype.validate = function (e) {
            if (!o.default.isObject(e)) throw Error('it is an empty message.')
            if (!o.default.isDef(e.file)) throw Error('file is empty.')
          }),
          i
        )
      })(If.AbstractPayloadBuilder)
    e.default = i
  })(ld),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = gf,
        o = (function (e) {
          function o() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            t.__extends(o, e),
            (o.prototype.create = function () {
              return new n.ImageMessagePayload()
            }),
            (o.prototype.setPayload = function (e, t) {
              var n = t,
                o = e.createOptions.file,
                i = o.uri,
                r = o.fileSize,
                s = o.type,
                a = o.fileName,
                c = o.width,
                u = o.height
              ;(n.url = i), (n.size = r), (n.contentType = s), (n.name = a), (n.width = c), (n.height = u), (e.complete = Promise.resolve())
            }),
            (o.prototype.validate = function (t) {
              e.prototype.validate.call(this, t)
            }),
            o
          )
        })(ld.default)
      e.default = o
    })(ud)
  var fd = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = te,
      o = qf,
      i = (function (e) {
        function i() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(i, e),
          (i.prototype.create = function () {
            return new o.VideoMessagePayload()
          }),
          (i.prototype.setPayload = function (e, t) {
            var n = e.createOptions.file,
              o = t,
              i = o.video,
              r = o.thumbnail,
              s = n.uri,
              a = n.type,
              c = n.fileSize,
              u = n.fileName,
              l = n.duration,
              f = n.height,
              d = n.width
            ;(i.size = c),
              (i.width = d),
              (i.height = f),
              (i.url = s),
              (i.duration = l),
              (i.contentType = a),
              (i.name = u),
              (r.url = s),
              (r.name = 'rn-thumbnail.jpg'),
              (r.height = 200),
              (r.width = Number(((i.width * r.height) / i.height).toFixed(0))),
              (r.contentType = 'image/jpg'),
              (e.complete = Promise.resolve())
          }),
          (i.prototype.validate = function (e) {
            if (!n.default.isObject(e)) throw Error('it is an empty message.')
            if (!n.default.isDef(e.file)) throw Error('file is empty.')
          }),
          i
        )
      })(If.AbstractPayloadBuilder)
    e.default = i
  })(fd)
  var dd = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = pf,
      o = Nf,
      i = (function (e) {
        function i() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          t.__extends(i, e),
          (i.prototype.create = function () {
            return new o.AudioMessagePayload()
          }),
          (i.prototype.setPayload = function (e, t) {
            var o = e.createOptions,
              i = t,
              r = o.file,
              s = r.uri,
              a = r.name,
              c = r.duration,
              u = r.size
            ;(i.url = s),
              (i.duration = Number((c / 1e3).toFixed(2))),
              (i.size = u),
              (i.name = a || 'rn-audio.' + n.str.fileExtension(s, '.')),
              (i.contentType = 'audio/' + n.str.fileExtension(s, '.')),
              (o.file = { uri: s, type: i.contentType, name: i.name }),
              (e.complete = Promise.resolve())
          }),
          (i.prototype.validate = function (t) {
            e.prototype.validate.call(this, t)
          }),
          i
        )
      })(ld.default)
    e.default = i
  })(dd)
  var pd = {},
    hd = {}
  !(function (e) {
    e.__esModule = !0
    var t = Q,
      n = (function (e) {
        function n() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return t.__extends(n, e), n
      })(Sf.AbstractMessagePayload)
    e.default = n
  })(hd),
    (pd.__esModule = !0),
    (pd.CustomPayloadBuilder = void 0)
  var md = Q,
    yd = hd,
    gd = te,
    vd = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        md.__extends(t, e),
        (t.prototype.create = function () {
          return new yd.default()
        }),
        (t.prototype.setPayload = function (e, t) {
          var n = e.createOptions
          ;(t.payload = n.payload), (e.complete = Promise.resolve())
        }),
        (t.prototype.validate = function (e) {
          var t = e.type,
            n = e.payload
          if (gd.default.isEmpty(t)) throw Error('type is empty.')
          if (!gd.default.isString(t)) throw Error('type require a string')
          if (gd.default.isEmpty(n)) throw Error('payload is empty.')
          if (!gd.default.isPlainObject(n) && !gd.default.isStringOrNumber(n)) throw Error('payload require object | string | number.')
        }),
        t
      )
    })(If.AbstractPayloadBuilder)
  pd.CustomPayloadBuilder = vd
  var Sd = { __esModule: !0, LocalIMMessageBuildOptions: void 0 },
    Ed = function (e, t) {
      ;(this.type = e), (this.createOptions = t)
    }
  ;(Sd.LocalIMMessageBuildOptions = Ed), (ff.__esModule = !0), (ff.IMMessageBuilder = void 0)
  var _d = y,
    bd = df,
    Md = Cf,
    wd = kf,
    Cd = Af,
    Id = Bf,
    Td = Jf,
    kd = Xf,
    Nd = Qf,
    Rd = Yf,
    Pd = Kf,
    Ad = $f,
    Od = Zf,
    Dd = ed,
    xd = td,
    Gd = nd,
    Ud = id,
    Ld = od,
    Fd = rd,
    Bd = sd,
    qd = ad,
    jd = cd,
    Vd = ud,
    Hd = fd,
    zd = dd,
    Wd = ld,
    Jd = pd,
    Xd = Sd,
    Qd = te,
    Yd = Z,
    Kd = Bi,
    $d = Gi,
    Zd = gt,
    ep = Hi,
    tp = pe,
    np = et,
    op = ne,
    ip = (function () {
      function e() {
        var e
        ;(this.framework = _d.FrameworkDetector.currentFramework()),
          (this.platform = op.PlatformDetector.currentPlatform()),
          (this.payloadBuilders =
            (((e = {})[_d.Framework.UNIAPP] = {
              image: new Td.default(),
              file: new kd.default(),
              audio: new Nd.default(),
              video: new Rd.default(),
              text: new Cd.TextPayloadBuilder(),
            }),
            (e[op.PlatformType.MP_WX] = {
              image: new bd.default(),
              file: new Md.default(),
              audio: new wd.default(),
              video: new Id.default(),
              text: new Cd.TextPayloadBuilder(),
            }),
            (e[op.PlatformType.BROWSER] = {
              image: new Pd.default(),
              file: new Ad.default(),
              audio: new Od.default(),
              video: new Dd.default(),
              text: new Cd.TextPayloadBuilder(),
            }),
            (e[op.PlatformType.MP_ALI] = {
              image: new Gd.default(),
              file: new Ld.default(),
              audio: new Ud.default(),
              video: new xd.default(),
              text: new Cd.TextPayloadBuilder(),
            }),
            (e[op.PlatformType.MP_BAIDU] = {
              image: new jd.default(),
              file: new Bd.default(),
              audio: new qd.default(),
              video: new Fd.default(),
              text: new Cd.TextPayloadBuilder(),
            }),
            (e[_d.Framework.REACT_NATIVE] = {
              image: new Vd.default(),
              file: new Wd.default(),
              audio: new zd.default(),
              video: new Hd.default(),
              text: new Cd.TextPayloadBuilder(),
            }),
            (e[op.PlatformType.MP_BYTE] = {
              image: new bd.default(),
              file: new Md.default(),
              audio: new wd.default(),
              video: new Id.default(),
              text: new Cd.TextPayloadBuilder(),
            }),
            e))
      }
      return (
        (e.prototype.buildMessage = function (e, t) {
          var n = this.framework === _d.Framework.UNKNOWN ? this.platform : this.framework,
            o = this.payloadBuilders[n][e],
            i = new Xd.LocalIMMessageBuildOptions(e, t)
          if (o) {
            var r = o.build(i)
            i.payload = r
          } else {
            r = new Jd.CustomPayloadBuilder().build(i)
            i.payload = r.payload
          }
          var s = this.build(i)
          return (
            i.complete
              .then(function () {
                tp.CallbackUtils.onSuccess(t, s)
              })
              .catch(function (e) {
                tp.CallbackUtils.onFailed(t, e)
              }),
            s
          )
        }),
        (e.prototype.build = function (e) {
          var t,
            n = e.type,
            o = e.payload,
            i = e.createOptions,
            r = i.to,
            s = r.type
          return (
            this.validate(i),
            s === Yd.Scene.GROUP
              ? (((t = new Kd.GroupMessage()).groupId = r.id.toString()), (t.senderData = np.G.Socket.user().data))
              : s === Yd.Scene.PRIVATE
              ? (((t = new $d.PrivateMessage()).read = !1), (t.receiverId = r.id.toString()))
              : s === Yd.Scene.CS &&
                (((t = new ep.CSMessage()).to = r.id.toString()), (t.teamId = r.id.toString()), (t.senderData = np.G.Socket.user().data)),
            (t.senderId = np.G.Socket.user().id),
            (t.messageId = np.UUID.get()),
            (t.payload = o),
            (t.timestamp = Date.now()),
            (t.type = n),
            (t.recalled = !1),
            (t.status = Yd.MessageStatus.NEW),
            (t.buildOptions = e),
            t
          )
        }),
        (e.prototype.validate = function (e) {
          var t = e.to
          if (!t) throw new Error('message require property to.')
          if (!Qd.default.isObject(t)) throw new Error('TypeError: to requires an object.')
          if (!Qd.default.isObject(t.data)) throw new Error('TypeError: to.data requires an object.')
          if (!t.type || (t.type !== Yd.Scene.GROUP && t.type !== Yd.Scene.PRIVATE && t.type !== Yd.Scene.CS))
            throw new Error('message require property to.type')
          if ((Zd.default.validateId(t.id, 'to.id'), np.G.Socket.user().id === t.id)) throw new Error('to.id can not be the same as your id.')
          Qd.default.isDef(e.notification) && Zd.default.validateNotification(e.notification),
            e.wxmpTemplateMsg && Zd.default.validateWXMPTemplateMsg(e.wxmpTemplateMsg)
        }),
        e
      )
    })()
  ff.IMMessageBuilder = ip
  var rp = { __esModule: !0, CsMessageReceiver: void 0 },
    sp = Q,
    ap = Go,
    cp = Dr,
    up = et,
    lp = Mi,
    fp = yi,
    dp = Z,
    pp = Nr,
    hp = ui,
    mp = wr,
    yp = Tr,
    gp = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        sp.__extends(t, e),
        (t.prototype.onMessageReceived = function (e) {
          var t = this
          if (e.t === dp.Scene.CS) {
            var n = this.builder.build(e)
            this.sendAck(n)
            var o = lp.Target.byIMMessage(n)
            if (!fp.default.get(o).existsMessage(n))
              if (n.customerId() === up.G.Socket.user().id)
                this.createNotification(e),
                  hp.IMEC.i.fire(ap.IM_INTERNAL_EVENTS.MESSAGE_RECEIVED, n),
                  mp.AEC.fire(yp.ImApiEvents.CS_MESSAGE_RECEIVED, n)
              else
                cp.AgentStatus.getInstance()
                  .queryTeams()
                  .then(function () {
                    pp.LiveSession.isMyMessage(n) && t.createNotification(e), hp.IMEC.i.fire(ap.IM_INTERNAL_EVENTS.CS_AGENT_MESSAGE_RECEIVED, n)
                  })
          }
        }),
        t
      )
    })($l.default)
  rp.CsMessageReceiver = gp
  var vp = {},
    Sp = { __esModule: !0, RecallMessageRequest: void 0 },
    Ep = Mi,
    _p = function (e) {
      var t = this
      this.times = new Array()
      var n = e[0],
        o = Ep.Target.byIMMessage(n)
      ;(this.scene = o.scene),
        (this.targetId = o.id),
        e.forEach(function (e) {
          t.times.push(e.timestamp)
        }),
        this.times.sort(function (e, t) {
          return e < t ? -1 : e == t ? 0 : 1
        })
    }
  ;(Sp.RecallMessageRequest = _p),
    (function (e) {
      e.__esModule = !0
      var t = Q,
        n = Z,
        o = Sp,
        i = de,
        r = fe,
        s = et,
        a = Wu,
        c = pe,
        u = Go,
        l = Mt,
        f = br,
        d = qr,
        p = ui,
        h = (function () {
          function e() {
            ;(this.onRemoteRecalled = function (e) {
              p.IMEC.i.fire(u.IM_INTERNAL_EVENTS.MESSAGE_RECALLED, e)
            }),
              d.GSocket.onMessage(l.RemoteEvents.IM_MSG_RECALLED, this.onRemoteRecalled)
          }
          return (
            (e.prototype.recallMessage = function (e) {
              return t.__awaiter(this, void 0, void 0, function () {
                var n, o, i, r, l, d, h
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        a.HistoryValidator.validateMessageArray(e.messages), this.validate(e), (n = e.messages), [4, this.recallServerMessages(n)]
                      )
                    case 1:
                      return (
                        t.sent(),
                        (o = n[0]),
                        (i = o.scene()),
                        (r = this.toConversationId(i, o.senderId, o.targetId())),
                        (l = { id: s.G.Socket.user().id, data: s.G.Socket.user().data }),
                        (d = n.map(function (e) {
                          return e.timestamp
                        })),
                        (h = new f.ServerRecalledEvent(i, r, l, d)),
                        p.IMEC.i.fire(u.IM_INTERNAL_EVENTS.MESSAGE_RECALLED, h),
                        c.CallbackUtils.onSuccess(e),
                        [2]
                      )
                  }
                })
              })
            }),
            (e.prototype.toConversationId = function (e, t, o) {
              if (n.Scene.PRIVATE === e)
                return (function (e, t) {
                  return e.localeCompare(t) > 0 ? ''.concat(e, ':').concat(t) : ''.concat(t, ':').concat(e)
                })(t, o)
              if (n.Scene.GROUP === e) return o
              throw { code: 400, content: 'scene: '.concat(e, ' not support') }
            }),
            (e.prototype.recallServerMessages = function (e) {
              var t = new o.RecallMessageRequest(e)
              return 0 === t.times.length
                ? Promise.resolve()
                : new Promise(function (e, n) {
                    var o = new s.Rocket({
                      name: r.RocketTypes.IM_RECALL_MESSAGE,
                      params: t,
                      permission: s.Permission.WRITE,
                      singleTimeout: i.SocketTimeout.commonRequestSingle,
                      totalTimeout: i.SocketTimeout.commonRequestTotal,
                      fail: function (e) {
                        n(e)
                      },
                      success: function (t) {
                        200 === t.code ? e(t) : n(t)
                      },
                    })
                    s.G.Socket.e(o)
                  })
            }),
            (e.prototype.validate = function (e) {
              for (var t = e.messages, o = 0; o < t.length; o++) {
                var i = t[o]
                if (i.scene() === n.Scene.CS) throw { code: 400, content: 'Recall CS message is not supported yet.' }
                if (i.status !== n.MessageStatus.SUCCESS)
                  throw { code: 400, content: 'message[' + o + "] is '" + i.status + "' and cannot be recalled" }
                if (i.recalled) throw { code: 400, content: 'message[' + o + '] has been recalled' }
                if (i.senderId !== s.G.Socket.user().id) throw { code: 400, content: 'it is not allowed to recall messages sent by others' }
              }
            }),
            e
          )
        })()
      e.default = h
    })(vp)
  var bp = {},
    Mp = {},
    wp = { __esModule: !0, MemberDataCache: void 0 },
    Cp = (function () {
      function e() {
        this.map = new Map()
      }
      return (
        (e.prototype.getData = function (e) {
          return this.map.get(e)
        }),
        (e.prototype.setData = function (e, t) {
          this.map.set(e, t)
        }),
        e
      )
    })()
  ;(wp.MemberDataCache = Cp), (Mp.__esModule = !0), (Mp.GMember = void 0)
  var Ip = Q,
    Tp = wp,
    kp = et,
    Np = fe,
    Rp = de,
    Pp = (function () {
      function e() {
        this.dataCache = new Tp.MemberDataCache()
      }
      return (
        (e.init = function () {
          this.i = new e()
        }),
        (e.prototype.getData = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return Ip.__awaiter(this, void 0, void 0, function () {
            var t,
              n,
              o = this
            return Ip.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = []),
                    (n = new Map()),
                    e.forEach(function (e) {
                      var i = o.dataCache.getData(e)
                      i ? n.set(e, i) : t.push(e)
                    }),
                    0 === t.length ? [2, Promise.resolve(n)] : [4, this.fetchData.apply(this, Ip.__spreadArray([], Ip.__read(t), !1))]
                  )
                case 1:
                  return (
                    i.sent().forEach(function (e, t) {
                      o.dataCache.setData(t, e), n.set(t, e)
                    }),
                    [2, Promise.resolve(n)]
                  )
              }
            })
          })
        }),
        (e.prototype.fetchData = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return new Promise(function (t, n) {
            var o = new kp.Rocket({
              name: Np.RocketTypes.MD_CMD,
              permission: kp.Permission.READ,
              singleTimeout: Rp.SocketTimeout.commonRequestSingle,
              totalTimeout: Rp.SocketTimeout.commonRequestTotal,
              params: { name: 'GET', data: { ids: e } },
              success: function (e) {
                if (200 === e.code) {
                  var o = new Map()
                  e.content.forEach(function (e) {
                    o.set(e.id, e.data)
                  }),
                    t(o)
                } else n(e)
              },
              fail: function (e) {
                n(e)
              },
            })
            kp.G.Socket.e(o)
          })
        }),
        (e.prototype.setData = function (e, t) {
          this.dataCache.setData(e, t)
        }),
        e
      )
    })()
  ;(Mp.GMember = Pp), (bp.__esModule = !0), (bp.MemberDataUpdator = void 0)
  var Ap = ui,
    Op = Go,
    Dp = Mi,
    xp = Z,
    Gp = Mp,
    Up = (function () {
      function e() {
        Ap.IMEC.i.on(Op.IM_INTERNAL_EVENTS.MESSAGE_RECEIVED, this.onMessageReceived),
          Ap.IMEC.i.on(Op.IM_INTERNAL_EVENTS.MESSAGE_SENDING, this.onMessageSending)
      }
      return (
        (e.prototype.onMessageSending = function (e) {
          var t = Dp.Target.byIMMessage(e)
          t.scene === xp.Scene.PRIVATE && Gp.GMember.i.setData(t.id, e.getToData())
        }),
        (e.prototype.onMessageReceived = function (e) {
          if (Dp.Target.byIMMessage(e).scene === xp.Scene.GROUP) {
            var t = e
            Gp.GMember.i.setData(t.senderId, t.senderData)
          }
        }),
        e
      )
    })()
  ;(bp.MemberDataUpdator = Up), (Sn.__esModule = !0), (Sn.IM = void 0)
  var Lp = Q,
    Fp = En,
    Bp = xo,
    qp = pi,
    jp = $l,
    Vp = Zl,
    Hp = ef,
    zp = tf,
    Wp = nf,
    Jp = uf,
    Xp = lf,
    Qp = gt,
    Yp = pe,
    Kp = ff,
    $p = Ho,
    Zp = yi,
    eh = rp,
    th = vp,
    nh = Pl,
    oh = qr,
    ih = $,
    rh = bp,
    sh = ui,
    ah = wr,
    ch = (function () {
      function e() {
        ;(this._iMReceiver = new jp.default()),
          (this.csMessageReceiver = new eh.CsMessageReceiver()),
          (this.memberDataUpdator = new rh.MemberDataUpdator()),
          (this._userHereNow = new Xp.default()),
          (this.goEasyUploader = new Fp.GoEasyUploader()),
          (this._groupHereNow = new Wp.default()),
          (this._groupOnlineCount = new zp.default()),
          (this.groupMessageSubscriber = new Vp.default()),
          (this.messageBuilder = new Kp.IMMessageBuilder()),
          (this.messageSender = new Bp.default()),
          (this.recaller = new th.default()),
          (this._groupPresenceSubscriber = new Hp.default()),
          (this._userPresenceSubscriber = new Jp.default()),
          (this.conversations = new qp.default()),
          (this.histories = Zp.default.init())
      }
      return (
        (e.init = function () {
          sh.IMEC.init(), ah.AEC.init(), (e.instance = new e())
        }),
        (e.i = function () {
          if (e.instance) return e.instance
          throw Error('Please connect first.')
        }),
        (e.prototype.validateModules = function () {
          if (oh.GSocket.status() === ih.NetworkStatus.DISCONNECTED) throw Error('Please call connect() first.')
          nh.GIMModule.check()
        }),
        (e.prototype.catch = function (e, t) {
          return Lp.__awaiter(this, void 0, void 0, function () {
            var n
            return Lp.__generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return o.trys.push([0, 2, , 3]), this.validateModules(), Qp.default.validateCallbackOptions(t), [4, e()]
                case 1:
                  return o.sent(), [3, 3]
                case 2:
                  return (n = o.sent()), Yp.CallbackUtils.onFailed(t, n), [3, 3]
                case 3:
                  return [2]
              }
            })
          })
        }),
        (e.prototype.on = function (e, t) {
          ah.AEC.on(e, t)
        }),
        (e.prototype.off = function (e, t) {
          ah.AEC.off(e, t)
        }),
        (e.prototype.createTextMessage = function (e) {
          return this.validateModules(), this.messageBuilder.buildMessage($p.MessageType.TEXT, e)
        }),
        (e.prototype.createImageMessage = function (e) {
          return this.validateModules(), this.messageBuilder.buildMessage($p.MessageType.IMAGE, e)
        }),
        (e.prototype.createFileMessage = function (e) {
          return this.validateModules(), this.messageBuilder.buildMessage($p.MessageType.FILE, e)
        }),
        (e.prototype.createAudioMessage = function (e) {
          return this.validateModules(), this.messageBuilder.buildMessage($p.MessageType.AUDIO, e)
        }),
        (e.prototype.createVideoMessage = function (e) {
          return this.validateModules(), this.messageBuilder.buildMessage($p.MessageType.VIDEO, e)
        }),
        (e.prototype.createCustomMessage = function (e) {
          return this.validateModules(), this.messageBuilder.buildMessage(e.type, e)
        }),
        (e.prototype.sendMessage = function (e) {
          var t = this
          this.catch(function () {
            t.messageSender.send(e)
          }, e)
        }),
        (e.prototype.recallMessage = function (e) {
          var t = this
          this.catch(function () {
            t.recaller.recallMessage(e)
          }, e)
        }),
        (e.prototype.deleteMessage = function (e) {
          var t = this
          this.catch(function () {
            t.histories.deleteMessage(e)
          }, e)
        }),
        (e.prototype.markGroupMessageAsRead = function (e) {
          var t = this
          this.catch(function () {
            return Lp.__awaiter(t, void 0, void 0, function () {
              return Lp.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.histories.groupMarkAsRead(e)]
                  case 1:
                    return t.sent(), [2]
                }
              })
            })
          }, e)
        }),
        (e.prototype.markPrivateMessageAsRead = function (e) {
          var t = this
          this.catch(function () {
            return Lp.__awaiter(t, void 0, void 0, function () {
              return Lp.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.histories.privateMarkAsRead(e)]
                  case 1:
                    return t.sent(), [2]
                }
              })
            })
          }, e)
        }),
        (e.prototype.markMessageAsRead = function (e, t) {
          var n = this
          this.catch(function () {
            return Lp.__awaiter(n, void 0, void 0, function () {
              return Lp.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.histories.markMessageAsRead(e, t)]
                  case 1:
                    return n.sent(), [2]
                }
              })
            })
          }, e)
        }),
        (e.prototype.latestConversations = function (e) {
          this.validateModules(), this.conversations.latestConversations(e)
        }),
        (e.prototype.removePrivateConversation = function (e) {
          var t = this
          this.catch(function () {
            return t.conversations.removePrivateConversation(e)
          }, e)
        }),
        (e.prototype.removeGroupConversation = function (e) {
          var t = this
          this.catch(function () {
            return t.conversations.removeGroupConversation(e)
          }, e)
        }),
        (e.prototype.topPrivateConversation = function (e) {
          var t = this
          this.catch(function () {
            return t.conversations.topPrivateConversation(e)
          }, e)
        }),
        (e.prototype.topGroupConversation = function (e) {
          var t = this
          this.catch(function () {
            return t.conversations.topGroupConversation(e)
          }, e)
        }),
        (e.prototype.history = function (e, t) {
          var n = this
          this.catch(function () {
            n.histories.loadHistory(e, t)
          }, e)
        }),
        (e.prototype.subscribeUserPresence = function (e) {
          var t = this
          this.catch(function () {
            return t._userPresenceSubscriber.presence(e)
          }, e)
        }),
        (e.prototype.unsubscribeUserPresence = function (e) {
          var t = this
          this.catch(function () {
            return t._userPresenceSubscriber.unPresence(e)
          }, e)
        }),
        (e.prototype.hereNow = function (e) {
          var t = this
          this.catch(function () {
            return t._userHereNow.hereNow(e)
          }, e)
        }),
        (e.prototype.subscribeGroup = function (e) {
          var t = this
          this.catch(function () {
            return t.groupMessageSubscriber.subscribe(e)
          }, e)
        }),
        (e.prototype.unsubscribeGroup = function (e) {
          var t = this
          this.catch(function () {
            return t.groupMessageSubscriber.unsubscribe(e)
          }, e)
        }),
        (e.prototype.subscribeGroupPresence = function (e) {
          var t = this
          this.catch(function () {
            return t._groupPresenceSubscriber.presence(e)
          }, e)
        }),
        (e.prototype.unsubscribeGroupPresence = function (e) {
          var t = this
          this.catch(function () {
            return t._groupPresenceSubscriber.unPresence(e)
          }, e)
        }),
        (e.prototype.groupHereNow = function (e) {
          var t = this
          this.catch(function () {
            return t._groupHereNow.hereNow(e)
          }, e)
        }),
        (e.prototype.groupOnlineCount = function (e) {
          var t = this
          this.catch(function () {
            return t._groupOnlineCount.get(e)
          }, e)
        }),
        (e.prototype.latestPendingConversations = function (e) {
          this.validateModules(), this.conversations.latestPendingConversations(e)
        }),
        (e.prototype.topConversation = function (e) {
          this.validateModules(), this.conversations.topConversation(e)
        }),
        (e.prototype.removeConversation = function (e) {
          this.validateModules(), this.conversations.removeConversation(e)
        }),
        e
      )
    })()
  Sn.IM = ch
  var uh = {},
    lh = {},
    fh = {},
    dh = { __esModule: !0, CSStatusQueryRequest: void 0 },
    ph = function (e, t) {
      ;(this.customerId = e), (this.teamId = t)
    }
  dh.CSStatusQueryRequest = ph
  var hh = { __esModule: !0, CSAcceptRequest: void 0 },
    mh = Z,
    yh = function (e, t) {
      this.teamId = e
      var n = new mh.User(t.id.toString(), JSON.stringify(t.data))
      this.customer = n
    }
  hh.CSAcceptRequest = yh
  var gh = { __esModule: !0, CSTransferRequest: void 0 },
    vh = function (e, t, n) {
      ;(this.customerId = e), (this.teamId = t), (this.agentId = n)
    }
  gh.CSTransferRequest = vh
  var Sh = { __esModule: !0, CSEndRequest: void 0 },
    Eh = function (e, t) {
      ;(this.customerId = e), (this.teamId = t)
    }
  ;(Sh.CSEndRequest = Eh), (fh.__esModule = !0), (fh.ConversationHandler = void 0)
  var _h = Q,
    bh = dh,
    Mh = hh,
    wh = gt,
    Ch = fe,
    Ih = de,
    Th = pe,
    kh = et,
    Nh = gh,
    Rh = Go,
    Ph = xi,
    Ah = Sh,
    Oh = te,
    Dh = ui,
    xh = (function () {
      function e(e) {
        ;(this.builder = new Ph.RemoteAbbrMessageBuilder()), (this.teamId = e)
      }
      return (
        (e.prototype.accept = function (e, t) {
          var n = this,
            o = t.customer
          if (Oh.default.isUndef(o)) throw { code: 400, content: 'customer is required.' }
          wh.default.validateId(o.id, 'customer.id')
          var i = o.data
          if (Oh.default.isUndef(i) || !Oh.default.isObject(i)) throw { code: 400, content: 'customer data must be non-empty object.' }
          var r = new Mh.CSAcceptRequest(e, o),
            s = new kh.Rocket({
              name: Ch.RocketTypes.CS_ACCEPT,
              params: r,
              permission: kh.Permission.WRITE,
              singleTimeout: Ih.SocketTimeout.commonRequestSingle,
              totalTimeout: Ih.SocketTimeout.commonRequestTotal,
              fail: function (e) {
                Th.CallbackUtils.onFailed(t, e)
              },
              success: function (e) {
                var o = n.builder.build(e.content.message)
                Dh.IMEC.i.fire(Rh.IM_INTERNAL_EVENTS.CS_ACCEPTED, o), Th.CallbackUtils.onSuccess(t)
              },
            })
          kh.G.Socket.e(s)
        }),
        (e.prototype.end = function (e, t) {
          var n = this
          wh.default.validateId(t.id, 'id')
          var o = t.id.toString(),
            i = new Ah.CSEndRequest(o, e),
            r = new kh.Rocket({
              name: Ch.RocketTypes.CS_END,
              params: i,
              permission: kh.Permission.WRITE,
              singleTimeout: Ih.SocketTimeout.commonRequestSingle,
              totalTimeout: Ih.SocketTimeout.commonRequestTotal,
              fail: function (e) {
                Th.CallbackUtils.onFailed(t, e)
              },
              success: function (e) {
                var o = n.builder.build(e.content.message)
                Dh.IMEC.i.fire(Rh.IM_INTERNAL_EVENTS.CS_ENDED, o), Th.CallbackUtils.onSuccess(t)
              },
            })
          kh.G.Socket.e(r)
        }),
        (e.prototype.queryCustomerStatus = function (e, t) {
          return _h.__awaiter(this, void 0, void 0, function () {
            var n
            return _h.__generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return wh.default.validateId(t.id, 'id'), [4, this.doCustomerStatus(e, t.id)]
                case 1:
                  return (
                    (n = o.sent()), (this.activeCustomerStatus = n), (this.activeCustomerStatusOptions = t), Th.CallbackUtils.onSuccess(t, n), [2]
                  )
              }
            })
          })
        }),
        (e.prototype.doCustomerStatus = function (e, t) {
          var n = t.toString(),
            o = new bh.CSStatusQueryRequest(n, e)
          return new Promise(function (e, t) {
            var n = new kh.Rocket({
              name: Ch.RocketTypes.CS_CUSTOMER_STATUS,
              params: o,
              permission: kh.Permission.READ,
              singleTimeout: Ih.SocketTimeout.commonQuerySingle,
              totalTimeout: Ih.SocketTimeout.commonQueryTotal,
              fail: function (e) {
                t(e)
              },
              success: function (t) {
                var n = t.content
                n.agent && (n.agent.data = JSON.parse(n.agent.data)), e(n)
              },
            })
            kh.G.Socket.e(n)
          })
        }),
        (e.prototype.transfer = function (e, t) {
          var n = this
          wh.default.validateId(t.customerId, 'customerId'), wh.default.validateId(t.agentId, 'agentId')
          var o = t.customerId.toString(),
            i = t.agentId.toString(),
            r = new Nh.CSTransferRequest(o, e, i),
            s = new kh.Rocket({
              name: Ch.RocketTypes.CS_TRANSFER,
              params: r,
              permission: kh.Permission.WRITE,
              singleTimeout: Ih.SocketTimeout.commonRequestSingle,
              totalTimeout: Ih.SocketTimeout.commonRequestTotal,
              fail: function (e) {
                Th.CallbackUtils.onFailed(t, e)
              },
              success: function (e) {
                var o = n.builder.build(e.content.message)
                Dh.IMEC.i.fire(Rh.IM_INTERNAL_EVENTS.CS_TRANSFER, o), Th.CallbackUtils.onSuccess(t)
              },
            })
          kh.G.Socket.e(s)
        }),
        e
      )
    })()
  fh.ConversationHandler = xh
  var Gh = { __esModule: !0, MessageCreator: void 0 },
    Uh = Z,
    Lh = Sn,
    Fh = (function () {
      function e() {}
      return (
        (e.prototype.createTextMessage = function (e, t) {
          var n = Lh.IM.i().createTextMessage(t)
          this.extendProps(e, n)
        }),
        (e.prototype.createImageMessage = function (e, t) {
          var n = Lh.IM.i().createImageMessage(t)
          this.extendProps(e, n)
        }),
        (e.prototype.createFileMessage = function (e, t) {
          var n = Lh.IM.i().createFileMessage(t)
          this.extendProps(e, n)
        }),
        (e.prototype.createAudioMessage = function (e, t) {
          var n = Lh.IM.i().createAudioMessage(t)
          this.extendProps(e, n)
        }),
        (e.prototype.createVideoMessage = function (e, t) {
          var n = Lh.IM.i().createVideoMessage(t)
          this.extendProps(e, n)
        }),
        (e.prototype.createCustomMessage = function (e, t) {
          var n = Lh.IM.i().createCustomMessage(t)
          this.extendProps(e, n)
        }),
        (e.prototype.extendProps = function (e, t) {
          if (t.scene() === Uh.Scene.CS) {
            var n = t
            ;(n.teamId = e), (n.accepted = !0)
          }
        }),
        e
      )
    })()
  ;(Gh.MessageCreator = Fh), (lh.__esModule = !0), (lh.Team = void 0)
  var Bh = Q,
    qh = gt,
    jh = pe,
    Vh = Sn,
    Hh = fh,
    zh = Dr,
    Wh = Gh,
    Jh = Nr,
    Xh = (function () {
      function e(e) {
        ;(this.teamId = e),
          (this.agentStatus = zh.AgentStatus.getInstance()),
          (this.conversationHandler = new Hh.ConversationHandler(e)),
          (this.messageCreator = new Wh.MessageCreator())
      }
      return (
        (e.prototype.catch = function (e, t) {
          return Bh.__awaiter(this, void 0, void 0, function () {
            var n
            return Bh.__generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return o.trys.push([0, 2, , 3]), qh.default.validateCallbackOptions(t), [4, e()]
                case 1:
                  return o.sent(), [3, 3]
                case 2:
                  return (n = o.sent()), jh.CallbackUtils.onFailed(t, n), [3, 3]
                case 3:
                  return [2]
              }
            })
          })
        }),
        (e.prototype.isOnline = function (e) {
          var t = this
          this.catch(function () {
            t.agentStatus.isOnline(t.teamId, e)
          }, e)
        }),
        (e.prototype.online = function (e) {
          var t = this
          this.catch(function () {
            t.agentStatus.online(t.teamId, e)
          }, e)
        }),
        (e.prototype.offline = function (e) {
          var t = this
          this.catch(function () {
            t.agentStatus.offline(t.teamId, e)
          }, e)
        }),
        (e.prototype.customerStatus = function (e) {
          var t = this
          this.catch(function () {
            t.conversationHandler.queryCustomerStatus(t.teamId, e)
          }, e)
        }),
        (e.prototype.accept = function (e) {
          var t = this
          this.catch(function () {
            t.conversationHandler.accept(t.teamId, e)
          }, e)
        }),
        (e.prototype.end = function (e) {
          var t = this
          this.catch(function () {
            t.conversationHandler.end(t.teamId, e)
          }, e)
        }),
        (e.prototype.history = function (e) {
          Vh.IM.i().history(e, this.teamId)
        }),
        (e.prototype.markMessageAsRead = function (e) {
          Vh.IM.i().markMessageAsRead(e, this.teamId)
        }),
        (e.prototype.createTextMessage = function (e) {
          this.messageCreator.createTextMessage(this.teamId, e)
        }),
        (e.prototype.createImageMessage = function (e) {
          this.messageCreator.createImageMessage(this.teamId, e)
        }),
        (e.prototype.createFileMessage = function (e) {
          this.messageCreator.createFileMessage(this.teamId, e)
        }),
        (e.prototype.createAudioMessage = function (e) {
          this.messageCreator.createAudioMessage(this.teamId, e)
        }),
        (e.prototype.createVideoMessage = function (e) {
          this.messageCreator.createVideoMessage(this.teamId, e)
        }),
        (e.prototype.createCustomMessage = function (e) {
          this.messageCreator.createCustomMessage(this.teamId, e)
        }),
        (e.prototype.transfer = function (e) {
          var t = this
          this.catch(function () {
            t.conversationHandler.transfer(t.teamId, e)
          }, e)
        }),
        (e.prototype.agents = function (e) {
          var t = this
          this.catch(function () {
            t.agentStatus.agents(t.teamId, e)
          }, e)
        }),
        (e.prototype.liveSession = function (e) {
          var t = this
          this.catch(function () {
            Jh.LiveSession.live(t.teamId, e)
          }, e)
        }),
        (e.prototype.quitLiveSession = function (e) {
          this.catch(function () {
            Jh.LiveSession.quit(e)
          }, e)
        }),
        (e.prototype.listenCustomer = function (e) {
          var t = this,
            n = { customerId: e.id, onNewMessage: e.onNewMessage, onStatusUpdated: e.onStatusUpdated, onFailed: e.onFailed, onSuccess: e.onSuccess }
          this.catch(function () {
            Jh.LiveSession.live(t.teamId, n)
          }, e)
        }),
        (e.prototype.cancelListenCustomer = function (e) {
          this.catch(function () {
            Jh.LiveSession.quit(e)
          }, e)
        }),
        e
      )
    })()
  ;(lh.Team = Xh), (uh.__esModule = !0), (uh.CS = void 0)
  var Qh = lh,
    Yh = gt,
    Kh = (function () {
      function e() {}
      return (
        (e.team = function (e) {
          Yh.default.validateId(e, 'teamId')
          var t = this.teams.get(e)
          return t || ((t = new Qh.Team(e.toString())), this.teams.set(e.toString(), t)), t
        }),
        (e.teams = new Map()),
        e
      )
    })()
  ;(uh.CS = Kh), (vn.__esModule = !0), (vn.CSTeam = vn.GIM = void 0)
  var $h = Sn,
    Zh = uh,
    em = (function () {
      function e() {}
      return (
        (e.on = function (e, t) {
          $h.IM.i().on(e, t)
        }),
        (e.off = function (e, t) {
          $h.IM.i().off(e, t)
        }),
        (e.createTextMessage = function (e) {
          return $h.IM.i().createTextMessage(e)
        }),
        (e.createImageMessage = function (e) {
          return $h.IM.i().createImageMessage(e)
        }),
        (e.createFileMessage = function (e) {
          return $h.IM.i().createFileMessage(e)
        }),
        (e.createAudioMessage = function (e) {
          return $h.IM.i().createAudioMessage(e)
        }),
        (e.createVideoMessage = function (e) {
          return $h.IM.i().createVideoMessage(e)
        }),
        (e.createCustomMessage = function (e) {
          return $h.IM.i().createCustomMessage(e)
        }),
        (e.sendMessage = function (e) {
          $h.IM.i().sendMessage(e)
        }),
        (e.recallMessage = function (e) {
          $h.IM.i().recallMessage(e)
        }),
        (e.deleteMessage = function (e) {
          $h.IM.i().deleteMessage(e)
        }),
        (e.markGroupMessageAsRead = function (e) {
          $h.IM.i().markGroupMessageAsRead(e)
        }),
        (e.markPrivateMessageAsRead = function (e) {
          $h.IM.i().markPrivateMessageAsRead(e)
        }),
        (e.latestConversations = function (e) {
          $h.IM.i().latestConversations(e)
        }),
        (e.removePrivateConversation = function (e) {
          $h.IM.i().removePrivateConversation(e)
        }),
        (e.removeGroupConversation = function (e) {
          $h.IM.i().removeGroupConversation(e)
        }),
        (e.topPrivateConversation = function (e) {
          $h.IM.i().topPrivateConversation(e)
        }),
        (e.topGroupConversation = function (e) {
          $h.IM.i().topGroupConversation(e)
        }),
        (e.history = function (e) {
          $h.IM.i().history(e)
        }),
        (e.subscribeUserPresence = function (e) {
          $h.IM.i().subscribeUserPresence(e)
        }),
        (e.unsubscribeUserPresence = function (e) {
          $h.IM.i().unsubscribeUserPresence(e)
        }),
        (e.hereNow = function (e) {
          $h.IM.i().hereNow(e)
        }),
        (e.subscribeGroup = function (e) {
          $h.IM.i().subscribeGroup(e)
        }),
        (e.unsubscribeGroup = function (e) {
          $h.IM.i().unsubscribeGroup(e)
        }),
        (e.subscribeGroupPresence = function (e) {
          $h.IM.i().subscribeGroupPresence(e)
        }),
        (e.unsubscribeGroupPresence = function (e) {
          $h.IM.i().unsubscribeGroupPresence(e)
        }),
        (e.groupHereNow = function (e) {
          $h.IM.i().groupHereNow(e)
        }),
        (e.groupOnlineCount = function (e) {
          $h.IM.i().groupOnlineCount(e)
        }),
        (e.markMessageAsRead = function (e) {
          $h.IM.i().markMessageAsRead(e)
        }),
        (e.csteam = function (e) {
          return new tm(e)
        }),
        (e.pendingConversations = function (e) {
          $h.IM.i().latestPendingConversations(e)
        }),
        (e.topConversation = function (e) {
          $h.IM.i().topConversation(e)
        }),
        (e.removeConversation = function (e) {
          $h.IM.i().removeConversation(e)
        }),
        e
      )
    })()
  vn.GIM = em
  var tm = (function () {
    function e(e) {
      this.id = e
    }
    return (
      (e.prototype.isOnline = function (e) {
        Zh.CS.team(this.id).isOnline(e)
      }),
      (e.prototype.online = function (e) {
        Zh.CS.team(this.id).online(e)
      }),
      (e.prototype.offline = function (e) {
        Zh.CS.team(this.id).offline(e)
      }),
      (e.prototype.customerStatus = function (e) {
        Zh.CS.team(this.id).customerStatus(e)
      }),
      (e.prototype.accept = function (e) {
        Zh.CS.team(this.id).accept(e)
      }),
      (e.prototype.end = function (e) {
        Zh.CS.team(this.id).end(e)
      }),
      (e.prototype.history = function (e) {
        Zh.CS.team(this.id).history(e)
      }),
      (e.prototype.markMessageAsRead = function (e) {
        Zh.CS.team(this.id).markMessageAsRead(e)
      }),
      (e.prototype.createTextMessage = function (e) {
        Zh.CS.team(this.id).createTextMessage(e)
      }),
      (e.prototype.createImageMessage = function (e) {
        Zh.CS.team(this.id).createImageMessage(e)
      }),
      (e.prototype.createFileMessage = function (e) {
        Zh.CS.team(this.id).createFileMessage(e)
      }),
      (e.prototype.createAudioMessage = function (e) {
        Zh.CS.team(this.id).createAudioMessage(e)
      }),
      (e.prototype.createVideoMessage = function (e) {
        Zh.CS.team(this.id).createVideoMessage(e)
      }),
      (e.prototype.createCustomMessage = function (e) {
        Zh.CS.team(this.id).createCustomMessage(e)
      }),
      (e.prototype.transfer = function (e) {
        Zh.CS.team(this.id).transfer(e)
      }),
      (e.prototype.agents = function (e) {
        Zh.CS.team(this.id).agents(e)
      }),
      (e.prototype.liveSession = function (e) {
        Zh.CS.team(this.id).liveSession(e)
      }),
      (e.prototype.quitLiveSession = function (e) {
        Zh.CS.team(this.id).quitLiveSession(e)
      }),
      (e.prototype.listenCustomer = function (e) {
        Zh.CS.team(this.id).listenCustomer(e)
      }),
      (e.prototype.cancelListenCustomer = function (e) {
        Zh.CS.team(this.id).cancelListenCustomer(e)
      }),
      e
    )
  })()
  return (
    (vn.CSTeam = tm),
    (function (e) {
      e.__esModule = !0
      var t = i,
        n = $,
        o = Z,
        r = ee,
        s = pt,
        a = te,
        c = vn,
        u = Mp,
        l = et,
        f = an,
        d = Pl,
        p = qr,
        h = ne,
        m = Tr,
        y = (function () {
          function e() {}
          return (
            (e.getInstance = function (t) {
              return this.init(t), e
            }),
            (e.init = function (e) {
              if (this.getConnectionStatus() !== n.NetworkStatus.DISCONNECTED)
                throw new Error('Initialization failed. Please disconnect and try again.')
              this.validateOptions(e),
                t.RNPlugins.init(e.reactNativeOptions),
                (this.options = e),
                p.GSocket.init(e),
                e.allowNotification && r.GN.init(e.allowNotification),
                e.modules &&
                  (e.modules.includes('PUBSUB') && l.GModules.initModule(f.GWSModule.init()),
                  e.modules.includes('IM') && l.GModules.initModule(d.GIMModule.init())),
                u.GMember.init(),
                l.G.init(p.GSocket, r.GN, u.GMember, o.version, h.Platform, l.GModules)
            }),
            (e.setBadge = function (e) {
              r.GN.setBadge(e)
            }),
            (e.connect = function (e) {
              p.GSocket.connect(e, 'JS')
            }),
            (e.disconnect = function (e) {
              p.GSocket.disconnect(e)
            }),
            (e.getConnectionStatus = function () {
              return p.GSocket.status()
            }),
            (e.validateOptions = function (e) {
              var t = ''
              if (!a.default.isObject(e)) throw ((t = 'options is require an object.'), Error(t))
              if (!a.default.isPrimitive(e.appkey) || 0 == e.appkey.length) throw ((t = "Invalid options:'appkey' is empty."), Error(t))
              if (!a.default.isPrimitive(e.host) || 0 == e.host.length) throw ((t = "Invalid options:'host' is empty."), Error(t))
              if (!a.default.isArray(e.modules)) throw ((t = "Invalid options: 'modules' must be nonempty array"), Error(t))
              e.modules = e.modules.map(function (e) {
                return e.toUpperCase()
              })
            }),
            (e.onClickNotification = function (e) {
              r.GN.onClickNotification(e)
            }),
            (e.c = function (e) {
              e.init(l.G.Socket, l.G.N, l.G.Member, l.G.v, l.G.Platform, l.GModules)
            }),
            (e.version = o.version),
            (e.IM_EVENT = m.ImApiEvents),
            (e.IM_SCENE = o.Scene),
            (e.im = c.GIM),
            (e.pubsub = s.GWS),
            e
          )
        })()
      e.default = y
    })(o),
    t(o)
  )
})

const x = globalThis.GoEasy.getInstance({
  host: 'hangzhou.goeasy.io',
  appkey: 'BC-719aadae85b7430c9e1d79edd47d2c10', // online2 : home
  modules: ['pubsub'],
})

x.connect({ id: '主机', data: { username: '主机' } })

let memberA
x.pubsub.subscribePresence({
  channel: '大厅',
  onSuccess() {
    console.log('onSuccess')
  },
  onPresence({ action, member: memberB, members }) {
    console.log(1)

    if (action === 'join') {
      if (
        memberA &&
        members.find((e) => e.id === memberA.id) && // 此时a可能已经离开
        memberA.data.username != memberB.data.username
      ) {
        // SEND('匹配成功', {
        //   ol_房间号: `${memberA.id}--VS--${memberB.id}`,
        // })
        memberA = null
      } else {
        memberA = memberB
      }
    }
  },
})
async function SEND(type, data = {}) {
  x.pubsub.publish({
    channel: '大厅',
    message: JSON.stringify({
      type,
      data,
      time: Date.now(),
    }),
  })
}
