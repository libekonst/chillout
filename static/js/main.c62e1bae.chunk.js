(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    27: function (e, n, t) {
      e.exports = t(44);
    },
    35: function (e, n, t) {},
    41: function (e, n, t) {},
    42: function (e, n, t) {},
    43: function (e, n, t) {},
    44: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(1),
        a = t.n(r),
        i = t(14),
        o = t.n(i),
        c = t(15),
        s = t(12),
        u = t(13),
        l = t(19),
        d = t.n(l),
        f = t(23),
        m = t(7),
        g = t(8),
        p = t(10),
        h = t(9),
        v = t(11),
        b = t(2),
        w = (t(35), Object(r.createContext)(!1)),
        y = t(3);
      function j() {
        var e = Object(y.a)([
          "\n  /* Position */\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0 2rem;\n\n  /* Grid */\n  display: grid;\n  grid-column-gap: 0.5rem;\n  align-items: center;\n  justify-items: center;\n  grid-template-areas: 'image link playbutton volume';\n  grid-template-columns: 3rem 10rem auto 0;\n  @media (min-width: ",
          "px) {\n    grid-template-columns: 3rem 10rem auto auto;\n  }\n\n  /* Styles */\n  z-index: 10;\n  background-color: rgba(11, 10, 21, 1);\n  background-image: linear-gradient(\n    to right top,\n    #0b0a15,\n    #151421,\n    #1c1c2d,\n    #24233b,\n    #2c2b48\n  );\n  height: 4rem;\n",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      var O = b.c.footer(j(), function (e) {
          return e.theme.breakpoints.sm;
        }),
        x = t(4),
        k = t(5);
      function E() {
        var e = Object(y.a)([
          "\n  /* Flex */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* Styles */\n  position: relative;\n  border-radius: 50%;\n  background: transparent;\n  cursor: pointer;\n  color: white;\n  font-size: ",
          ";\n\n  /* Background circle */\n  &::before {\n    /* Positioning */\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n\n    /* Styles */\n    background-color: #302d47;\n    border-radius: 50%;\n    opacity: 0.5;\n    transform: scale(1.4);\n    transition: all 0.15s ease-out;\n  }\n\n  &:hover::before {\n    transform: scale(1.5);\n    opacity: 1;\n  }\n",
        ]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      var R = b.c.button(E(), function (e) {
          return e.theme.iconButton.medium;
        }),
        S = function (e) {
          var n = e.isPlaying,
            t = Object(x.a)(e, ["isPlaying"]);
          return a.a.createElement(
            R,
            Object.assign({ title: n ? "Pause" : "Play" }, t),
            n ? a.a.createElement(k.e, null) : a.a.createElement(k.f, null)
          );
        },
        A = t(6);
      function F() {
        var e = Object(y.a)([
          "\n  /* Flex */\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  /* Styles */\n  cursor: pointer;\n  color: white;\n  position: relative;\n  margin-right: 1rem;\n  font-size: ",
          ";\n  opacity: 1;\n\n  &::before {\n    /* Positioning */\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n\n    /* Styles */\n    background-color: #302d47;\n    border-radius: 50%;\n    opacity: 0;\n    transform: scale(1.2);\n    transition: all 0.15s ease-out;\n  }\n\n  &:hover::before {\n    transform: scale(1.5);\n    opacity: 0.8;\n  }\n",
        ]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      var P = b.c.button(F(), function (e) {
          return e.theme.iconButton.small;
        }),
        L = function (e) {
          var n = e.volume,
            t = e.audioMuted;
          return 0 === n || t
            ? a.a.createElement(A.h, null)
            : n >= 0.5
            ? a.a.createElement(A.e, null)
            : n >= 0.2
            ? a.a.createElement(A.f, null)
            : n > 0
            ? a.a.createElement(A.g, null)
            : a.a.createElement(A.h, null);
        },
        M = function (e) {
          var n = e.volume,
            t = e.audioMuted,
            r = Object(x.a)(e, ["volume", "audioMuted"]);
          return a.a.createElement(
            P,
            Object.assign({ title: t ? "Unmute Sound" : "Mute Sound" }, r),
            a.a.createElement(L, { volume: n, audioMuted: t })
          );
        };
      function C() {
        var e = Object(y.a)([
          "\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  border-radius: 30px;\n  background: rgba(180, 180, 180, 0.7);\n  margin: auto;\n",
        ]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = Object(y.a)([
          "\n  /* Position */\n  position: absolute;\n  width: 100%;\n  margin: auto;\n  z-index: 1;\n\n  /* Styles */\n  height: 2px;\n  background: white;\n  pointer-events: none;\n  border-radius: 30px;\n  transform-origin: left;\n",
        ]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = Object(y.a)([
          "\n  /* Flex */\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  /* Styles */\n  overflow: visible;\n  width: 100%;\n",
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      var W = b.c.div(z()),
        B = b.c.div(I()),
        D = b.c.div(C());
      function T() {
        var e = Object(y.a)([
          "\n  position: relative;\n  background: white;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  transition: all 0.2s ease-out;\n  z-index: 2;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: -40%;\n    right: -40%;\n    bottom: -40%;\n    left: -40%;\n    background-color: white;\n    border-radius: 50%;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.3s ease-out;\n\n    ",
          ":hover & {\n      opacity: 0.2;\n      visibility: visible;\n    }\n  }\n\n  ",
          ":hover & {\n    transform: scale(1.7);\n  }\n",
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function H() {
        var e = Object(y.a)([
          "\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  pointer-events: none;\n\n  /* Flex */\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n",
        ]);
        return (
          (H = function () {
            return e;
          }),
          e
        );
      }
      var N = b.c.div(H()),
        Z = b.c.div(T(), W, W);
      function _() {
        var e = Object(y.a)([
          "\n  /* Reset */\n  appearance: none;\n  outline: none;\n  border: 0;\n\n  /* Styles */\n  background: transparent;\n  position: relative;\n  overflow: visible;\n  width: 100%;\n  height: 2rem;\n  cursor: pointer;\n\n  /* Thumb styles */\n  &::-webkit-slider-thumb {\n    ",
          "\n  }\n\n  &::-moz-range-thumb {\n    ",
          "\n  }\n\n  &::-ms-thumb {\n    ",
          "\n  }\n\n  /* Scale thumb on active */\n  &:hover {\n    &::-webkit-slider-thumb {\n      transform: scale(2);\n    }\n\n    &::-moz-range-thumb {\n      transform: scale(2);\n    }\n\n    &::-ms-thumb {\n      transform: scale(2);\n    }\n  }\n",
        ]);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      function G() {
        var e = Object(y.a)([
          "\n  /* Reset */\n  appearance: none;\n  outline: none;\n  border: 0;\n  height: 0;\n  width: 0;\n",
        ]);
        return (
          (G = function () {
            return e;
          }),
          e
        );
      }
      var J = Object(b.b)(G()),
        V = b.c.input(_(), J, J, J);
      function X() {
        var e = Object(y.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 20rem;\n  width: 100%;\n",
        ]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      var Y = b.c.div(X()),
        Q = function (e) {
          var n = e.onMuteAudio,
            t = e.muted,
            r = e.changeAudioVolume,
            i = e.volume;
          return a.a.createElement(
            Y,
            null,
            a.a.createElement(M, { volume: i, onClick: n, audioMuted: t }),
            a.a.createElement(
              W,
              null,
              a.a.createElement(D, null),
              a.a.createElement(B, {
                style: { transform: "scaleX(".concat(t ? 0 : i, ")") },
              }),
              a.a.createElement(
                N,
                {
                  style: {
                    transform: "translateX(calc(".concat(
                      t ? 0 : 100 * i,
                      "% - 0.25rem))"
                    ),
                  },
                },
                a.a.createElement(Z, null)
              ),
              a.a.createElement(V, {
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: t ? 0 : i,
                onChange: r,
              })
            )
          );
        };
      function U() {
        var e = Object(y.a)([
          "\n  border-radius: 5px;\n  width: 3rem;\n  height: 3rem;\n  overflow: hidden;\n",
        ]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      var q = b.c.div(U());
      function K() {
        var e = Object(y.a)([
          "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n",
        ]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      var $ = Object(b.b)(K()),
        ee = {
          colors: {
            lightgray: "#afafaf",
            lightblack: "rgb(80, 82, 83)",
            blue: "#052fb8",
            lightblue: "#3498db",
            purple: "rgb(255, 32, 62)",
            lightPurple: "rgb(255, 211, 217)",
          },
          breakpoints: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
          iconButton: {
            tiny: "1.3rem",
            small: "1.7rem",
            medium: "2rem",
            big: "3.2rem",
            xbig: "4rem",
          },
        },
        ne = function () {
          return window.innerWidth >= 1280;
        };
      function te() {
        var e = Object(y.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n  font-size: ",
          ";\n\n  &:active {\n    transform: scale(0.9);\n    fill: ",
          ";\n  }\n\n  @media (max-width: ",
          "px) {\n    font-size: ",
          ";\n  }\n",
        ]);
        return (
          (te = function () {
            return e;
          }),
          e
        );
      }
      function re() {
        var e = Object(y.a)([
          "\n  fill: ",
          ";\n  animation: ",
          " 0.2s ease-out;\n  transition: transform 0.07s linear;\n",
        ]);
        return (
          (re = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = Object(y.a)([
          "\n  color: ",
          ";\n  animation: ",
          " 0.1s linear forwards;\n  transition: all 0.1s linear;\n\n  &:hover {\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      function ie() {
        var e = Object(y.a)([
          "\n  0% {\n    transform: scale(0.9);\n  }\n\n  65% {\n    transform: scale(1.3);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n",
        ]);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = Object(y.a)([
          "\n  from {\n    transform: scale(0.9);\n  }\n\n  to {\n    transform: scale(1);\n  }\n",
        ]);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      var ce = Object(b.d)(oe()),
        se = Object(b.d)(ie()),
        ue = Object(b.c)(k.d)(
          ae(),
          function (e) {
            return e.theme.colors.lightgray;
          },
          ce,
          function (e) {
            return e.theme.colors.purple;
          }
        ),
        le = Object(b.c)(k.c)(
          re(),
          function (e) {
            return e.theme.colors.purple;
          },
          se
        ),
        de = b.c.button(
          te(),
          function (e) {
            return e.theme.iconButton.tiny;
          },
          function (e) {
            return e.theme.colors.purple;
          },
          function (e) {
            return e.theme.breakpoints.md - 1;
          },
          function (e) {
            return e.theme.iconButton.small;
          }
        ),
        fe = function (e) {
          var n = e.isFavorite,
            t = Object(x.a)(e, ["isFavorite"]);
          return a.a.createElement(
            de,
            Object.assign(
              {
                title: n
                  ? "Remove from Your Favorites"
                  : "Save to Your Favorites",
              },
              t
            ),
            n ? a.a.createElement(le, null) : a.a.createElement(ue, null)
          );
        };
      function me() {
        var e = Object(y.a)([
          "\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n",
        ]);
        return (
          (me = function () {
            return e;
          }),
          e
        );
      }
      function ge() {
        var e = Object(y.a)([
          "\n  width: 100%;\n  font-size: 0.8rem;\n  opacity: 0.9;\n",
        ]);
        return (
          (ge = function () {
            return e;
          }),
          e
        );
      }
      function pe() {
        var e = Object(y.a)([
          "\n  width: 100%;\n  font-weight: 500;\n  ",
          "\n",
        ]);
        return (
          (pe = function () {
            return e;
          }),
          e
        );
      }
      function he() {
        var e = Object(y.a)([
          "\n  text-decoration: none;\n  color: white;\n  margin-left: 0.5rem;\n  width: 100%;\n\n  &:hover {\n    text-decoration: ",
          ";\n  }\n",
        ]);
        return (
          (he = function () {
            return e;
          }),
          e
        );
      }
      var ve = b.c.a(he(), function (e) {
          return void 0 !== e.href && "underline white";
        }),
        be = b.c.p(pe(), $),
        we = b.c.p(ge()),
        ye = b.c.section(me()),
        je = function (e) {
          return a.a.createElement(
            ye,
            null,
            a.a.createElement(
              ve,
              e,
              !!e.radioTitle && a.a.createElement(be, null, e.radioTitle),
              !!e.radioSubtitle && a.a.createElement(we, null, e.radioSubtitle)
            ),
            a.a.createElement(fe, {
              isFavorite: e.isRadioFavorite,
              onClick: e.handleAddFavorite,
              style: { marginLeft: "0.5rem" },
            })
          );
        };
      function Oe() {
        var e = Object(y.a)(["\n      opacity: 1;\n    "]);
        return (
          (Oe = function () {
            return e;
          }),
          e
        );
      }
      function xe() {
        var e = Object(y.a)([
          "\n  background-size: cover;\n  width: 100%;\n  background-color: ",
          ";\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: all 0.05s ease-out, opacity 0.5s ease-in-out;\n  opacity: ",
          ";\n  ",
          ";\n",
        ]);
        return (
          (xe = function () {
            return e;
          }),
          e
        );
      }
      var ke = b.c.img(
          xe(),
          function (e) {
            var n = e.bgColor;
            return void 0 === n ? "white" : n;
          },
          function (e) {
            return "undefined" === typeof e.loaded ? 1 : 0;
          },
          function (e) {
            return e.loaded && Object(b.b)(Oe());
          }
        ),
        Ee = function (e) {
          return a.a.createElement(
            O,
            null,
            e.radio
              ? a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    q,
                    null,
                    a.a.createElement(ke, {
                      src: e.radio.image,
                      style: { borderRadius: "5px" },
                    })
                  ),
                  a.a.createElement(je, {
                    href: e.radio.website,
                    target: "blank",
                    radioTitle: e.radio.name,
                    radioSubtitle: e.radio.label,
                    isRadioFavorite: e.isRadioFavorite,
                    handleAddFavorite: e.handleAddFavorite,
                  })
                )
              : a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement("div", null),
                  a.a.createElement("div", null)
                ),
            a.a.createElement(S, {
              isPlaying: e.isPlaying,
              onClick: e.handlePlay,
            }),
            a.a.createElement(Q, {
              onMuteAudio: e.onMuteAudio,
              muted: e.muted,
              changeAudioVolume: e.changeAudioVolume,
              volume: e.volume,
            })
          );
        };
      function Re() {
        var e = Object(y.a)(["\n      overflow: visible;\n    "]);
        return (
          (Re = function () {
            return e;
          }),
          e
        );
      }
      function Se() {
        var e = Object(y.a)([
          "\n  /* Grid placement */\n  grid-area: ",
          ";\n  align-self: ",
          ";\n  justify-self: ",
          ";\n  overflow: hidden;\n\n  /* <- Define the element's width using 'justify-self: stretch' instead\n  of 'width: 100%' to truncate text on Chrome. Firefox is OK with both width and justify-self. */\n\n  /* Text ellipsis */\n  ",
          "\n\n  /* Allow overflow, e.g. for animated elements. Overflowing prevents text truncating and hiding items with grid-template-columns. */\n  ",
          "\n",
        ]);
        return (
          (Se = function () {
            return e;
          }),
          e
        );
      }
      function Ae() {
        var e = Object(y.a)([
          "\n      color: ",
          ";\n      font-weight: bold;\n    ",
        ]);
        return (
          (Ae = function () {
            return e;
          }),
          e
        );
      }
      function Fe() {
        var e = Object(y.a)([
          "\n      &::after {\n        content: '';\n        position: absolute;\n        left: 2rem;\n        right: 2rem;\n        bottom: 0;\n        height: 1px;\n        background-color: rgba(70, 70, 70, 0.05);\n      }\n    ",
        ]);
        return (
          (Fe = function () {
            return e;
          }),
          e
        );
      }
      function Pe() {
        var e = Object(y.a)(["\n      padding: 0.5rem 0;\n    "]);
        return (
          (Pe = function () {
            return e;
          }),
          e
        );
      }
      function Le() {
        var e = Object(y.a)([
          "\n      &::before {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: 5px;\n        background-color: rgba(210, 210, 210, 0.2);\n        z-index: -1;\n        opacity: 0;\n        visibility: hidden;\n        transition: all 0.2s linear;\n      }\n\n      &:hover::before {\n        opacity: 1;\n        visibility: visible;\n      }\n    ",
        ]);
        return (
          (Le = function () {
            return e;
          }),
          e
        );
      }
      function Me() {
        var e = Object(y.a)([
          '\n  width: 100%;\n  height: auto;\n  position: relative;\n  cursor: default;\n\n  /* Grid layout */\n  display: grid;\n  grid-template-columns: 0 3rem 3rem auto 0;\n  grid-column-gap: 0.5rem;\n  grid-template-areas: "playcontrol favorite image title genre";\n  align-items: center;\n  justify-items: start;\n\n  @media (min-width: ',
          "px) {\n    grid-template-columns: 0 3rem 3rem auto 8rem;\n  }\n  @media (min-width: ",
          "px) {\n    grid-template-columns: 3rem 3rem 3rem auto 8rem;\n  }\n\n  /* Highlight On Hover */\n  ",
          "\n\n  /* Spacing */\n  ",
          "\n\n  /* Gutter */\n  ",
          "\n\n  /* Selected */\n  ",
          "\n",
        ]);
        return (
          (Me = function () {
            return e;
          }),
          e
        );
      }
      var Ce = b.c.div(
          Me(),
          function (e) {
            return e.theme.breakpoints.sm;
          },
          function (e) {
            return e.theme.breakpoints.md;
          },
          function (e) {
            return e.highlightOnHover && Object(b.b)(Le());
          },
          function (e) {
            return e.large && Object(b.b)(Pe());
          },
          function (e) {
            return e.gutter && Object(b.b)(Fe());
          },
          function (e) {
            return e.selected && Object(b.b)(Ae(), e.theme.colors.blue);
          }
        ),
        Ie = b.c.div(
          Se(),
          function (e) {
            return e.gridArea;
          },
          function (e) {
            var n = e.alignSelf;
            return void 0 === n ? "auto" : n;
          },
          function (e) {
            var n = e.justifySelf;
            return void 0 === n ? "stretch" : n;
          },
          function (e) {
            return e.truncate && $;
          },
          function (e) {
            return e.shouldOverflow && Object(b.b)(Re());
          }
        );
      function ze() {
        var e = Object(y.a)(["\n      color: ", ";\n    "]);
        return (
          (ze = function () {
            return e;
          }),
          e
        );
      }
      function We() {
        var e = Object(y.a)([
          "\n      opacity: 1;\n      visibility: visible;\n    ",
        ]);
        return (
          (We = function () {
            return e;
          }),
          e
        );
      }
      function Be() {
        var e = Object(y.a)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: default;\n  color: ",
          ";\n  font-size: ",
          ";\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.05s linear;\n\n  /* Make visible when the parent is hovered or when playing */\n  ",
          ":hover & {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  ",
          ";\n\n  /* Different color if radio is active */\n  ",
          "\n",
        ]);
        return (
          (Be = function () {
            return e;
          }),
          e
        );
      }
      var De = function (e) {
          var n = e.isPlaying,
            t = e.isHover;
          return n
            ? t
              ? a.a.createElement(A.c, null)
              : a.a.createElement(A.e, null)
            : a.a.createElement(A.d, null);
        },
        Te = b.c.button(
          Be(),
          function (e) {
            return e.theme.colors.lightblack;
          },
          function (e) {
            return e.theme.iconButton.small;
          },
          Ce,
          function (e) {
            return e.isPlaying && Object(b.b)(We());
          },
          function (e) {
            var n = e.isPlaying,
              t = e.isSelected,
              r = e.theme;
            return (n || t) && Object(b.b)(ze(), r.colors.blue);
          }
        ),
        He = function (e) {
          var n = e.isPlaying,
            t = e.isHover,
            r = Object(x.a)(e, ["isPlaying", "isHover"]);
          return a.a.createElement(
            Te,
            Object.assign({ isPlaying: n, title: n ? "Pause" : "Play" }, r),
            a.a.createElement(De, { isPlaying: n, isHover: t })
          );
        };
      function Ne() {
        var e = Object(y.a)([
          "\n  border-radius: 5px;\n  width: 3rem;\n  height: 3rem;\n  overflow: hidden;\n",
        ]);
        return (
          (Ne = function () {
            return e;
          }),
          e
        );
      }
      var Ze = b.c.div(Ne()),
        _e = t(17);
      function Ge() {
        var e = Object(y.a)([
          "\n        opacity: 0;\n        visibility: hidden;\n      ",
        ]);
        return (
          (Ge = function () {
            return e;
          }),
          e
        );
      }
      function Je() {
        var e = Object(y.a)([
          "\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n\n  &::after {\n    /* Position */\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    /* Styles */\n    opacity: 1;\n    visibility: visible;\n    transition: all 0.2s ease-out;\n    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);\n\n    /* Fade out */\n    ",
          ";\n  }\n",
        ]);
        return (
          (Je = function () {
            return e;
          }),
          e
        );
      }
      var Ve = b.c.div(Je(), function (e) {
        return e.fadeOutOn && Object(b.b)(Ge());
      });
      function Xe() {
        var e = Object(y.a)(["\n      opacity: 1;\n    "]);
        return (
          (Xe = function () {
            return e;
          }),
          e
        );
      }
      function Ye() {
        var e = Object(y.a)([
          "\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.5s ease-out;\n  ",
          "\n",
        ]);
        return (
          (Ye = function () {
            return e;
          }),
          e
        );
      }
      var Qe = b.c.img(Ye(), function (e) {
          return e.loaded && Object(b.b)(Xe());
        }),
        Ue = function (e) {
          var n = e.src,
            t = Object(x.a)(e, ["src"]),
            i = Object(r.useState)(!1),
            o = Object(_e.a)(i, 2),
            c = o[0],
            s = o[1],
            u = a.a.useContext(w);
          return a.a.createElement(
            Ve,
            { fadeOutOn: c },
            a.a.createElement(
              Qe,
              Object.assign(
                {
                  onLoad: function (e) {
                    return s(!0);
                  },
                  loaded: c,
                  src: u ? n : void 0,
                },
                t
              )
            )
          );
        },
        qe = (function (e) {
          function n() {
            var e, t;
            Object(m.a)(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              ((t = Object(p.a)(
                this,
                (e = Object(h.a)(n)).call.apply(e, [this].concat(a))
              )).state = { hovered: !1, loaded: !1 }),
              (t.onImageLoad = function () {
                return t.setState({ loaded: !0 });
              }),
              (t.onMouseEnter = function () {
                return t.setState({ hovered: !0 });
              }),
              (t.onMouseLeave = function () {
                return t.setState({ hovered: !1 });
              }),
              t
            );
          }
          return (
            Object(v.a)(n, e),
            Object(g.a)(n, [
              {
                key: "render",
                value: function () {
                  return a.a.createElement(
                    Ce,
                    Object.assign(
                      {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onClick: this.props.handlePlay,
                        highlightOnHover: !0,
                        large: !0,
                        gutter: !0,
                      },
                      this.props
                    ),
                    a.a.createElement(
                      Ie,
                      { gridArea: "playcontrol", justifySelf: "end" },
                      a.a.createElement(He, {
                        isPlaying: this.props.isPlaying,
                        isHover: this.state.hovered,
                      })
                    ),
                    a.a.createElement(
                      Ie,
                      {
                        shouldOverflow: !0,
                        gridArea: "favorite",
                        justifySelf: "center",
                        onClick: this.props.handleAddFavorite,
                      },
                      a.a.createElement(fe, {
                        isFavorite: this.props.isFavorite,
                      })
                    ),
                    a.a.createElement(
                      Ie,
                      { gridArea: "image", justifySelf: "center" },
                      a.a.createElement(
                        Ze,
                        null,
                        a.a.createElement(Ue, { src: this.props.image })
                      )
                    ),
                    a.a.createElement(
                      Ie,
                      { gridArea: "title", truncate: !0 },
                      this.props.name
                    ),
                    a.a.createElement(
                      Ie,
                      { gridArea: "genre" },
                      this.props.label
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component);
      t(41), t(42);
      function Ke() {
        var e = Object(y.a)([
          "\n  position: relative;\n  width: 100%;\n  height: 0.3rem;\n  overflow: hidden;\n  background-color: ",
          ";\n  animation: ",
          " 0.2s linear;\n\n  &::after {\n    /* Positioning */\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n\n    /* Styles */\n    width: 100%;\n    border-radius: 10%;\n    background-color: ",
          ";\n\n    /* Animation */\n    transform-origin: left;\n    transform: translate3d(-100%, 0, 0);\n    animation: ",
          " 0.8s ease-out infinite;\n  }\n",
        ]);
        return (
          (Ke = function () {
            return e;
          }),
          e
        );
      }
      function $e() {
        var e = Object(y.a)([
          "\n  from {\n    opacity: 0;\n    visibility: hidden;\n  }\n\n  to {\n    opacity: 1;\n    visibility: visible;\n  }\n",
        ]);
        return (
          ($e = function () {
            return e;
          }),
          e
        );
      }
      function en() {
        var e = Object(y.a)([
          "\n  from {\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0);\n  }\n",
        ]);
        return (
          (en = function () {
            return e;
          }),
          e
        );
      }
      var nn,
        tn = Object(b.d)(en()),
        rn = Object(b.d)($e()),
        an = b.c.div(
          Ke(),
          function (e) {
            return e.theme.colors.lightPurple;
          },
          rn,
          function (e) {
            return e.theme.colors.purple;
          },
          tn
        ),
        on = function (e) {
          var n = Object(_e.a)(e, 2),
            t = n[0];
          return n[1].map(function (e) {
            return Object(s.a)({}, e, { label: t });
          });
        },
        cn = function (e, n) {
          return [].concat(Object(u.a)(e), Object(u.a)(n));
        },
        sn =
          ((nn = {
            music: [
              {
                name: "A 100 FM 107.4",
                id: "A 100 FM 107.4",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://www.a100fm.gr",
                info: 'Aπό το Α έως το 100 υπάρχουν μόνο 7 γράμματα και φυσικά η λέξη "επιτυχία". Ο ραδιοφωνικός σταθμός A100 FM εκπέμπει στη συχνότητα των 107.4 των FM και παίζει δυνατά ξένες αγαπημένες επιτυχίες. Ένας σταθμός με ιστορία. Έχετε τη δυνατότητα να επικοινωνήσετε τηλεφωνικά με τους υπευθύνους του ραδιοφωνικού σταθμού A 100 FM για οποιοδήποτε θέμα. Ο ραδιοφωνικός σταθμός A100 FM έχει και διαδικτυακή παρουσία και ασφαλώς μας ταξιδεύει μουσικά μέσω του Live24.gr. Συντονιστείτε!',
                image:
                  "http://resources.live24.gr/resources/images/stations/6dc8c705-02da-425f-80b8-2b6bc85fa978.png",
                source: "http://bestgreek.info:8104",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1700",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1700",
              },
              {
                name: "Alpha 98.9",
                id: "Alpha 98.9",
                genre: "Ειδησεογραφικά",
                location: "Αθήνα",
                website: "http://www.alpha989.com",
                info: "Alpha 98.9! To σταθερό σας ραντεβού σε έναν κόσμο που αλλάζει. Το ραδιόφωνο του Alpha έχει έδρα την Παιανία. Πέρασε από αρκετά ονόματα μέχρι να φτάσει στο σημερινό του. Εξέπεμψε στα μέσα του 1989 ως Seven X 98.7 και είχε καθαρά ψυχαγωγικό χαρακτήρα. Το 1992 μετονομάστηκε σε Cool FM 98.7 με τον ίδιο χαρακτήρα. Στα τέλη του 1999 με την αλλαγή της ιδιοκτησίας μετονομάζεται σε Alpha News 98.7 και έχει έναν αμιγώς ενημερωτικό χαρακτήρα. Η κατανομή των συχνοτήτων το 2002, βάζει τον Alpha στους 98.9. Τη Δευτέρα 19 Οκτωβρίου 2009 μετονομάζεται σε Θέμα 98.9, διατηρώντας τον ενημερωτικό χαρακτήρα του. Τον Σεπτέμβριο του 2010, μετονομάζεται σε Ράδιο Εννέα 98.9. Την Τρίτη 29 Μαΐου 2012 παίρνει πίσω το παλιό του όνομα (Alpha Radio 98.9) και συνεχίζει έτσι μέχρι και σήμερα!",
                image:
                  "http://resources.live24.gr/resources/images/stations/f43460a1-df51-4f08-a632-69bf13186d40.gif",
                source: "http://ample.radiojar.com/xcdg6yggzfeuv",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1331",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1331",
              },
              {
                name: "Art FM 90.6",
                id: "Art FM 90.6",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "https://cast5.magicstreams.gr/ic/artfm/stream",
                info: 'Ο γνωστός σε όλους μας Ράδιο Άστυ 90,6 σε μία προσπάθεια ανανέωσης αλλάζει και γίνεται πλέον «Αρτ FM» με νέο βεβαίως λογότυπο και ανανεωμένο πρόγραμμα. Σε αντίθεση με τον "τηλεοπτικό του αδελφό" ΑΡΤ tv ο Αρτ FM βγάζει ελάχιστο πολιτικό πρόγραμμα, ενώ το προφίλ του είναι μουσικό και μάλιστα πλησιάζει περισσότερο έναν ποπ ραδιοσταθμό. Ακούστε το ανανεωμένο πρόγραμμα του Αρτ fm 90,6!',
                image:
                  "http://resources.live24.gr/resources/images/stations/db0877cd-8c08-46b4-9bda-8234f3e2481f.png",
                source: "http://live.webhosting4u.gr:8023/stream",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d2228",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2228",
              },
              {
                name: "Athens 106.5",
                id: "Athens 106.5",
                genre: "Λαϊκά",
                location: "Αθήνα",
                website: "http://www.1065radio.com",
                info: "Τα δημοφιλέστερα λαϊκά τραγούδια του χτες και του σήμερα παίζουν δυνατά στους 106.5! Το απόλυτα λαϊκό πρόγραμμα της Αθήνας βρήκε τη δική του συχνότητα. 106.5 λοιπόν γιατί οι επιτυχίες παίζουν εδώ 24/7. Από 28/3/2018 ο FM Αθήνα 106.5 παίζει δυνατά και μέσα από το live24.gr.",
                image:
                  "http://resources.live24.gr/resources/images/stations/e017e072-d05a-4d4a-9249-a57900f6ddcc.jpg",
                source: "https://cast5.magicstreams.gr/ic/artfm/stream",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d3193",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d3193",
              },
              {
                name: "Athens DJ 95.2",
                id: "Athens DJ 95.2",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://www.athensdeejay.gr",
                info: "Ο 95.2 Athens DeeJay είναι ένας νεανικός ραδιοφωνικός σταθμός που ιδρύθηκε το 2000! Κάθε πρωί 7-10 ξεκινάει δυναμικά με τον Μιχάλη Τσαουσόπουλο και το Breakfast στα FM! Ο Athens DeeJay είναι πολύ ψηλά στις προτιμήσεις μαθητών και φοιτητών και παίζει κυρίως ξένα mainstream! Ο 95.2 Athens DeeJay δίνει τη δυνατότητα στους ακροατές του να κερδίσουν μοναδικά δώρα όπως το ενοίκιο του μήνα , χρηματικά ποσά αλλά και προσκλήσεις για την έξοδο τους. Athens DeeJay παίζει μόνο Επιτυχίες και στο Live24.gr",
                image:
                  "http://resources.live24.gr/resources/images/stations/753b8245-44d6-4bed-bd67-43d113c70845.png",
                source: "http://netradio.live24.gr:80/athensdeejay",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1322",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1322",
              },
              {
                name: "Athens Voice 102.5",
                id: "Athens Voice 102.5",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://www.athensvoice.gr/radio",
                info: "H κορυφαία free press εφημερίδα της Αθήνας αποκτά τη δική της φωνή στα ερτζιανά. Ο λόγος για τον Athens Voice Radio που εκπέμπει ήδη από τους 102.5. Ο ιστορικός σταθμός Nitro Radio περνάει επίσημα πλέον στην ιστορία του ραδιοφώνου, μιας και στην συχνότητα 102.5 ακούμε ήδη το σήμα του ολοκαίνουργιου και πολλά υποσχόμενου Athens Voice Radio. Το νέο ραδιοφωνικό εγχείρημα θα παραμείνει βεβαίως πιστό στην έντυπη ATHENS VOICE η οποία καλύπτει με τον δικό της τρόπο οτιδήποτε νέο, πρωτοποριακό και σημαντικό συμβαίνει στην Αθήνα, στην Ελλάδα και στον υπόλοιπο κόσμο. Ακούστε την καλύτερη ξένη μουσική στον Athens Voice Radio 24 ώρες το 24ωρο αλλά και μέσα από το LIVE24.GR. Εν αναμονή για το επίσημο πρόγραμμα του σταθμού το οποίο θα είναι έτοιμο σύντομα...",
                image:
                  "http://resources.live24.gr/resources/images/stations/611cb7f6-dd39-4e32-8204-0c6df17a6105.png",
                source: "http://nitro.live24.gr:80/nitro4555",
                live24Url: "http://live24.gr/radio/athensvoice.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2824",
              },
              {
                name: "Best Radio 92.6",
                id: "Best Radio 92.6",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://www.best926.gr/",
                info: "Τα καλύτερα έρχονται ή μάλλον είναι ήδη εδώ και στους 92.6. Ο Best Radio μπορεί να πέρασε από 40 κύματα όμως είναι εδώ και συνεχίζει δυνατά την πορεία του. Αποτελεί το τρίτο εν λειτουργία αυτοδιαχειριζόμενο ραδιόφωνο στα αθηναϊκά FM μαζί με τον «Flash 96» και τον μουσικό «Nitro102.5» να συμπληρώνουν. Επανήλθε στον αέρα το 2015 αφού ο πάλαι ποτέ ένδοξος μουσικός ραδιοσταθμός των πτωχευμένων εκδόσεων Λυμπέρη, παρέμεινε 2,5 χρόνια σε ραδιοφωνική σιωπή. Συντονιστείτε στον Best Radio και στο Live24.gr!",
                image:
                  "http://resources.live24.gr/resources/images/stations/0274dc13-aa5d-46f6-85d4-a04ea7f75166.jpg",
                source: "http://best.live24.gr:80/best1222",
                live24Url: "http://live24.gr/radio/bestradio",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1306",
              },
              {
                name: "Blue Space Athens 107.2",
                id: "Blue Space Athens 107.2",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://bluespacefm.com/",
                info: "Ένα νέο ραδιόφωνο κάνει την εμφάνιση του στα ερτζιανά της Αθήνας αλλά και στο LIVE24.GR. O λόγος για τον ραδιοφωνικό σταθμό Blue space Athens. Ένα μουσικό ραδιόφωνο διεθνούς ρεπερτορίου που παίζει δυνατά τα καλύτερα από τα 80\u0027s \u0026 90\u0027s! To Team του blue space κάνει τις καλύτερες επιλογές για όλους εσάς που λατρεύετε τη δεκαετία του 80. Ο σταθμός διοργανώνει και υπέροχα party σε διάφορες disco !! Ακούστε και μέσα από το LIVE24.GR. BLUE SPACE 107.2 ATHENS. THE BEST RADIO STATION IN TOWN. BLUE SPACE 107.2 ATHENS. THE BEST RADIO STATION IN TOWN.",
                image:
                  "http://resources.live24.gr/resources/images/stations/19eda4a7-45da-4926-abdc-7dd6957f9613.jpg",
                source: "https://sp1.19cloudsnetwork.gr/8008/stream",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d2542",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2542",
              },
              {
                name: "Dromos FM 89.8",
                id: "Dromos FM 89.8",
                genre: "Διάφορα Ελληνικά",
                location: "Αθήνα",
                website: "http://www.dromosfm.gr/",
                info: '"Ή θα τον βρούμε το δρόμο ή θα τον φτιάξουμε" κάπως έτσι σκέφτηκαν οι δημιουργοί του Dromos FM και έφτιαξαν το ραδιόφωνο που παίζει πάντα τα καλύτερα. Ο Dromos FM παίζει όλο το 24ωρο αγαπημένες ελληνικές επιτυχίες στους 89,8. Ακούστε τον στο Live24! O Dromos FM ανήκει στον όμιλο Βαρδινογιάννη. Ξεκίνησε να εκπέμπει από άλλη συχνότητα, και συγκεκριμένα το 1995 ως Ciao FM 104.2. Το 2004 πωλήθηκε στην Οικογένεια Βαρδινογιάννη και μετονομάστηκε σε Soho Radio 89.8, ενώ την περίοδο 2007-2008 πήρε το σημερινό του όνομα.',
                image:
                  "http://resources.live24.gr/resources/images/stations/dromos.png",
                source: "http://netradio.live24.gr/dromos2",
                live24Url: "http://live24.gr/radio/dromos.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1397",
              },
              {
                name: "Easy 97.2",
                id: "Easy 97.2",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://live24.gr",
                info: "",
                source: "http://easy972.live24.gr:80/easy972",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1327",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1327",
              },
              {
                name: "En Lefko 87.7",
                id: "En Lefko 87.7",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://www.enlefko.fm",
                info: 'Ο En Lefko 87.7 είναι ένας ραδιοφωνικός σταθμός με προσωπικότητα και eclectic ρεπερτόριο ξένης μουσικής που επεκτείνεται σε πολλά είδη, έχοντας ως βάση ένα μείγμα electronica, nu disco, nu funk και soul. Το κύριο σλόγκαν του, "Discover Great Music”, επικεντρώνεται στην αποστολή του σταθμού να ανακαλύπτει και να προτείνει καλή μουσική στους πιστούς ακροατές του. Ένα ραδιόφωνο που αν ψάξεις όμοιο του στα FM δεν πρόκειται να βρεις. Το πιο "ψαγμένο" ραδιόφωνο της Αθήνας βρίσκεται στην κορυφή και όχι άδικα. Ο En Lefko 87.7 έχει τα υψηλότερα ποσοστά σε διάρκεια ακρόασης (119΄ημερησίως ανά ακροατή). Συντονιστείτε λοιπόν στον En Lefko 87.7 και να θυμάστε: Tο λεπτό του γούστο, ο εκλεπτυσμένος τρόπος που προσεγγίζει τις παγκόσμιες τάσεις και η ακόρεστη δίψα για νέα ακούσματα, θα σας κάνουν να πείτε πως είναι κάτι παραπάνω από ένα μουσικό ραδιόφωνο.',
                image:
                  "http://resources.live24.gr/resources/images/stations/e4abbfeb-d333-48ce-911e-753154aa7bd8.jpg",
                source: "http://stream.radiojar.com:80/enlefko877",
                live24Url: "http://live24.gr/radio/enlefko.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1308",
              },
              {
                name: "Ertopen 106.7",
                id: "Ertopen 106.7",
                genre: "Ειδησεογραφικά",
                location: "Αθήνα",
                website: "http://www.ertopen.com",
                info: "ΕΡΤ Open: O αυτοδιαχειριζόμενος ραδιοτηλεοπτικός φορέας, ο οποίος παρουσιαζόταν ως η συνέχεια της EΡΤ έχει το δικό του ραδιόφωνο και μάλιστα στους 106,7. Χαρακτηριστικό είναι πως με την επαναλειτουργία της ΕΡΤ η ΕΡΤ Open δεν σταμάτησε την λειτουργία της και συνεχίζει μέχρι και σήμερα να μας παρασύρει σε όμορφα μουσικά ταξίδια. Πιστή σε σημαντικά γεγονότα από όλο το φάσμα της ιστορίας, της μουσικής, της πολιτικής η ΕΡΤ OPEN συνεχίζει να είναι μια δυνατή φωνή μέσα στην κοινωνία. Ακούστε την και στο Live24.gr",
                image:
                  "http://resources.live24.gr/resources/images/stations/bdabf03f-7991-4bb0-9072-bc60a902c108.png",
                source: "http://netradio.live24.gr:80/erasport",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d2269",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2269",
              },
              {
                name: "Free FM/WEB Radio",
                id: "Free FM/WEB Radio",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://afradio.gr/",
                info: "Όλα τα μεγάλα Hits των 80s και των 90s παίζουν δυνατά στην Αθήνα και στον Free FM/WEB Radio Μεγάλη ποικιλία τραγουδιών 80\u0027s, DANCE επιτυχίες από την DISCO και ITALO-DISCO μουσική της εποχής εκείνης, παίζουν στην πιο ελεύθερη συχνότητα της Αθήνας. Από 10/11/2017 ακούμε Free FM/WEB Radio και μέσα από το live24.gr!",
                image:
                  "http://resources.live24.gr/resources/images/stations/0597554c-1ec9-4a3f-b472-8fc26700f798.png",
                source: "https://n01.radiojar.com/e206r95qsp8uv",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d3007",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d3007",
              },
              {
                name: "Galaxy 92",
                id: "Galaxy 92",
                genre: "Ροκ",
                location: "Αθήνα",
                website: "http://www.galaxy92.gr",
                info: "Με έδρα την Ηλιούπολη ο Galaxy 92 μπήκε στα σπίτια και τις καρδιές των Αθηναίων και όλου του κόσμου βεβαίως μέσα από το Live24. Εξέπεμψε τον Νοέμβριο του 1989 και από τότε παίζει μοναδικές μουσικές απολαύσεις. Ανοίξτε το ραδιόφωνό σας στους 92ΜΗΖ και συντονιστείτε σε ένα άκρως γοητευτικό συνδυασμό μελωδίας και ρυθμού. Το κοινό συντονίζεται μαζί του και τον απολαμβάνει κάθε στιγμή!",
                image:
                  "http://resources.live24.gr/resources/images/stations/4bbf78ce-fb06-46d4-9c18-f63df098f7af.bmp",
                source: "http://galaxy.live24.gr:80/galaxy9292",
                live24Url: "http://live24.gr/radio/galaxy.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1315",
              },
              {
                name: "Hit 88.9",
                id: "Hit 88.9",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://www.hit889.gr",
                info: "Ο Hit 88.9 είναι ο πιο «feelgood» ραδιοφωνικός σταθμός της πόλης γεμάτος θετική ενέργεια! Αποτελεί το ιδανικό soundtrack, με άποψη και στυλ, παίζοντας «Όλα τα Hit». Ξεκίνησε να εκπέμπει το 2014 στα 88.9 FM στην Αθήνα! Παίζει κυρίως ξένη mainstream μουσική και έχει ιδιαίτερη απήχηση στα νεανικά κοινά.",
                image:
                  "http://resources.live24.gr/resources/images/stations/6b663430-c361-43aa-a7fa-0bfb862512d4.jpg",
                source: "http://stream.radiojar.com:80/hit889",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1360",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1360",
              },
              {
                name: "Hot FM -",
                id: "Hot FM -",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://www.hotfm.gr",
                info: "Ο πιο καυτός σταθμός είναι εδώ. O HOT FM 104.6 παίζει ξένη μουσική pop, dance, rnb, hip-hop! Ο HOT FM είναι ένα αμιγώς μουσικό ραδιόφωνο που πλέον εκπέμπει μόνο online μέσα από το live24.gr. Εκπέμπει από την Αθήνα και παίζει νέες και παλαιότερες επιτυχίες. Συντονιστείτε στον HOT FM και μην ξεχνάτε πως ακούγοντας τον, είναι εύκολο να πάρει κανείς φωτιά αλλά εξαιρετικά δύσκολο να σβήσει. ο HOT τα σπάει κάθε ώρα με ό,τι πιο hot στη μουσική σήμερα, με ξένη μουσική pop, dance, rnb, hip -hop! Aυτός είναι ο πιο hot σταθμός στην πόλη, το νέο μουσικό ραδιόφωνο της Αθήνας!",
                image:
                  "http://resources.live24.gr/resources/images/stations/efb80f12-1f46-491d-90f3-b8f1bcdaaed4.jpg",
                source: "http://hotfm.live24.gr:80/hotfm",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1466",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1466",
              },
              {
                name: "Kiss FM 92.9",
                id: "Kiss FM 92.9",
                genre: "Cosmote",
                location: "Αθήνα",
                website: "http://www.kissfm.gr",
                info: 'Τι άλλο μπορεί να σημαίνει η λέξη Kiss; Mα φυσικά η Καλύτερη Μουσική του Σήμερα και τ\u0027 Αγαπημένα του Χθες. \u0027 Ένας σταθμός που όραμα του έχει τη Mουσική ψυχαγωγία των ακροατών και την παροχή πληροφοριών και ενημέρωσης όχι μόνο για μουσικά θέματα αλλά και για τα δρώμενα της πόλης με στόχο το πρόγραμμα να διαθέτει την ποιοτικότερη δυνατή απήχηση στο μεγαλύτερο μέρος του πληθυσμού της Αττικής. Ο σταθμός εξέπεμψε για πρώτη φορά τέλη του 1988 από μια παρέα "ατίθασων" νέων που για χρόνια εξέπεμπε "πειρατικά" από τα ερτζιανά, με το όνο Nobel FM! Επισκεφθείτε τώρα το νέο ανανεωμένο site του Kiss Fm 92,9 www.kiss.gr',
                image:
                  "http://resources.live24.gr/resources/images/stations/c45488b1-0a37-40c9-95fd-abb5dd025a61.png",
                source: "http://kissfm.live24.gr:80/kissfmathens",
                live24Url: "http://live24.gr/radio/kissfm.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1300",
              },
              {
                name: "Liquid FM",
                id: "Liquid FM",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://liquidfm.gr/",
                info: "Σε αυτό το web radio γιορτάζει η ηλεκτρονική μουσική! Ο LiquidFM ξεκίνησε να εκπέμπει στους 103.4 στα FM το 1997, με μεγάλη επιτυχία, προβάλλοντας πάντα τα καλύτερα από την ηλεκτρονική μουσική σκηνή. Το 2002, και λόγω της ανάκλησης των αδειών από το κράτος, αναγκάστηκε να κλείσει, ενώ ένα χρόνο αργότερα επανήλθε, αυτή τη φορά στο internet, με τρεις ραδιοφωνικούς σταθμούς, έναν με ελληνική, έναν με ροκ και έναν με ηλεκτρονική μουσική, που είχε και τη μεγαλύτερη ανταπόκριση από τους ακροατές. Το 2006 επανήλθε στα FM, στους 98.0, μετά από συνεργασία με την ιδιοκτησία του FREE FM. Η ομάδα του LiquidFM δουλεύει συνεχώς για να παρέχει στους ακροατές του άριστη ποιότητα ήχου, με άρτια τεχνολογικά μέσα που χρησιμοποιούνται από τους μεγαλύτερους σταθμούς του κόσμου.",
                image:
                  "http://resources.live24.gr/resources/images/stations/b052905f-015a-455e-b8e0-5b2558cddf64.jpg",
                source: "http://ice.streamcloud.mediacdn.com:80/freeradio-1000",
                live24Url: "http://live24.gr/radio/freefm.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1347",
              },
              {
                name: "MAD Radio 106.2",
                id: "MAD Radio 106.2",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://mad.tv/mad-radio-106-2/",
                info: "Πόσο όμορφο να έχεις όλες τις μεγάλες ξένες επιτυχίες σε ένα σταθμό! Το ραδιόφωνο του MAD εξέπεμψε στις 6 Ιουνίου 1996 στους 106.2 MHz εξέπεμψε το καλοκαίρι τoυ 2006 με τον Ανδρέα Μ. Κουρή στο τιμόνι. Γνωστοί παραγωγοί πέρασαν από τον MAD radio και σήμερα διαπρέπουν σε άλλες συχνότητες. Το MAD radio διανύει φέτος την 11η χρονιά του και συνεχίζει με το ίδιο πάθος την πορεία του. Ήταν ο (πρώην Έκσταση 106.2, Νότος FM 106.1, Diva FM 106.1)! Ο σταθμός ανήκει ιδιοκτησιακά στη MAD TV Ανώνυμη Εταιρεία η οποία ιδρύθηκε στις 9 Ιανουαρίου 1995 και στη Solar Ραδιοτηλεοπτικές και Ψυχαγωγικές Υπηρεσίες Ανώνυμη Εταιρεία. Μέτοχός τους είναι η PandaLaw Management Limited (100%) στην οποία συμμετέχουν η MAD Television Licensing Limited (90%) και η Μαρία Κοντομηνά (10%). Tο ΜΑD radio δεν θα μπορούσε να απουσιάζει από την οικογένεια του Live24.gr!",
                image:
                  "http://resources.live24.gr/resources/images/stations/85be2a5c-a969-4afd-8e5e-e9d431004bed.png",
                source: "http://mediaserver.mad.tv:80/stream",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1353",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1353",
              },
              {
                name: "Music 89.2",
                id: "Music 89.2",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://music892.gr/",
                info: "Music 89,2 Όλα τα καινούργια παίζουν ΕΔΩ! Ο Music παίζει τις τελευταίες international επιτυχίες! O απόλυτα μουσικός σταθμός της Αθήνας βρίσκεται στους 89.2 FM. Προτείνει νέες μουσικές στον χώρο της dance - rnb - hip hop - rhytmic pop - club - EDM - Πως φτάσαμε όμως στον Music; Ο σταθμός αρχικά εξέπεμψε από άλλη συχνότητα, το 1994 ως Ηρόδοτος FM 107.4 με ενημερωτικό χαρακτήρα. Στα τέλη του 1999, η αλλαγή στην ιδιοκτησία του δίνει το όνομα Alpha Sports 107.4 με αθλητικό βεβαίως χαρακτήρα. Με την κατανομή των συχνοτήτων στις 13 Μαρτίου 2002, ο σταθμός μεταφέρεται στους 89.2 MHz και πάλι όμως ως Alpha Sports 89.2. Την άνοιξη του 2003 μετονομάζεται προσωρινά σε Metropolis 89.2 και το καλοκαίρι του ίδιου έτους σε Champions 89.2. Η Πρωτοχρονιά του 2005 τον βρίσκει ως Sportime 89.2. Την 1η Φεβρουαρίου του 2010 αλλάζει ριζικά και γίνεται καθαρά μουσικός. Τον Ιούνιο του ίδιου έτους, παίρνει το τρέχον του όνομα (Music) και συνεχίζει μέχρι σήμερα με κορυφαίες εκπομπές ενώ η απήχηση του είναι τεράστια. Music 89,2 λοιπόν και στο LIVE24.GR! Συντονιστείτε... ",
                image:
                  "https://resources.live24.gr/resources/images/stations/e6b3f70d-7b7f-428c-9627-c46fc120e00e.png",
                source: "https://netradio.live24.gr/music892",
                live24Url: "http://live24.gr/radio/music.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1414",
              },
              {
                name: "Nostos 100.6",
                id: "Nostos 100.6",
                genre: "Ροκ",
                location: "Αθήνα",
                website: "http://www.nostosradio.gr",
                info: "Tι θα μπορούσε να σημαίνει nostos; Ας δώσουμε μερικές απαντήσεις. Αυτό που συμβαίνει όταν η ψυχή της παρέας είναι η rock μουσική. Αυτό που συμβαίνει όταν βλέπεις τελικά ότι σου αρέσει και η pop rock η rock n\u0027 roll. Τι γίνεται όμως όταν ανακαλύψεις και την indie, και τη reggae. Αυτό σημαίνει nostos! Ένα ραδιόφωνο που καταφέρνει να συνδυάζει με απόλυτη αρμονία τα δεκάδες διαφορετικά είδη. Ξεχωριστή συντροφιά στον \u0027\u0027αέρα\u0027\u0027 του Nostos αποτελούν τα επιλεγμένα oldies που δίνουν τη δική τους νότα σ\u0027 ένα πρόγραμμα που σκοπό έχει να φέρει κοντά αγαπημένους καλλιτέχνες και ήχους του παρελθόντος με τη καλύτερη σύγχρονη μουσική! NOSTOS λοιπόν και στην οικογένεια του Live 24.gr γιατί όπου κι αν είσαι,αυτό που μετράει είναι η καλή παρέα! ",
                image:
                  "https://resources.live24.gr/resources/images/stations/e2db1653-69f0-4ee8-8c62-6f852e5681be.png",
                source: "https://neos.win:37878/stream?type=.mp3?ver=325606",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d2425",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2425",
              },
              {
                name: "Pepper 96.6",
                id: "Pepper 96.6",
                genre: "Ροκ",
                location: "Αθήνα",
                website: "http://www.pepper966.gr/",
                info: "PEPPER 96.6: Ο ραδιοφωνικός σταθμός που καταφέρνει να αναδείξει τόσο τους καλλιτέχνες όσο και τους δημιουργούς στην παγκόσμια σκηνή. Αφουγκράζεται τον παλμό της πόλης, κυκλοφορεί στους δρόμους της και συνθέτει το σημερινό soundtrack της Αθήνας. Ένα μουσικό ταξίδι στις σπουδαιότερες στιγμές της μουσικής δημιουργίας τα τελευταία 60 χρόνια, με μοναδικό κριτήριο την ποιότητα, που είτε την ανακαλύπτει κανείς στη world και τη jazz, είτε στη rock, τη soul, το funk, τη reggae ή το swing. Τραγούδια και καλλιτέχνες που άφησαν εποχή μαζί με αυτούς που την εκφράζουν σήμερα.",
                image:
                  "http://resources.live24.gr/resources/images/stations/9b334642-c87c-494d-b22b-3968223f7ca7.jpg",
                source: "https://netradio.live24.gr/pepper9660",
                live24Url: "http://live24.gr/radio/pepper.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1365",
              },
              {
                name: "Radio Gold @net",
                id: "Radio Gold @net",
                genre: "Ροκ",
                location: "Αθήνα",
                website: "http://www.radiogold.gr",
                info: "Ότι λάμπει δεν είναι χρυσός κι ότι βλέπεις μπορεί να είναι αλλιώς. Κι όμως στην περίπτωση του Gold radio αυτό δεν ισχύει γιατί το πιο χρυσό ραδιόφωνο της Αθήνας, όποιο κλασικό rock κομμάτι και να συμπεριλάβει στο πρόγραμμα του γίνεται επιτυχία. To Radio Gold δεν είναι μοναδικό για τον ήχο του και μόνο, αλλά και για την εμφάνιση του. Σε έναν όροφο 450 τ.μ. όλα από την καταπληκτική του classic rock είσοδο μέχρι τις απίστευτες συλλογές φωτογραφικών (και όχι μόνο) μηχανών, όλα είναι σχεδιασμένα από τον Μαστ, επειδή το alter ego του είναι εικαστικό! Το μόνο classic rock ραδιόφωνο της χώρας, στη διαδικτυακή του έκδοση, με non-stop hits 70s, 80s, power ballads. Για ηλικίες 5-95 ετών, χωρίς μπλα-μπλα και άλλες διακοπές. Radio Gold λοιπόν και άφησε το χρυσό να μπει στη ζωή σου. ",
                image:
                  "http://resources.live24.gr/resources/images/stations/80f185d1-d7a3-4637-8bb6-a22406431719.bmp",
                source: "http://radiogold.live24.gr:80/radiogold",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1344",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1344",
              },
              {
                name: "Radio Hot Lips Athens",
                id: "Radio Hot Lips Athens",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://radiohotlips.gr/",
                info: "Το Radio Hot Lips υπήρξε ένα από τα πιο ιστορικά και πρωτοποριακά ραδιόφωνα της εποχής του (δεκαετίες 80 \u0026 90) με έδρα τα Δυτικά Προάστια. Εκεί όπου το συναίσθημα, η διάθεση και το μεράκι περίσσευαν και οι εκπομπές ήταν απολύτως αυθεντικές… Σήμερα επιστρέφει μέσω του διαδικτύου (αργότερα και μέσω ραδιοφώνου;) και πάλι στις καρδιές μας με τα πιο όμορφα ακούσματα, τα ίδια που είχαν συντροφεύσει και τότε τα καλύτερα μας (τα μαθητικά) χρόνια..Γιατί εδώ κάθε στιγμή είναι νοσταλγική, είναι Μοναδική! Radio Hot Lips For Ever!! Συντονιστείτε!!!",
                image:
                  "http://resources.live24.gr/resources/images/stations/2bc87b4e-7678-4d9e-adc2-668675d717dd.jpg",
                source: "http://netradio.live24.gr:80/radiohotlips",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d2943",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2943",
              },
              {
                name: "Real FM 97.8",
                id: "Real FM 97.8",
                genre: "Ειδησεογραφικά",
                location: "Αθήνα",
                website: "http://www.realfm.gr/",
                info: "Ο Real Fm 97.8 βρίσκεται από το 2007 στις πρώτες θέσεις των προτιμήσεων των ακροατών της Αθήνας και όλης της Ελλάδας. Πίσω από το μικρόφωνο βρίσκονται γνωστοί δημοσιογράφοι όπως ο Νίκος Χατζηνικολάου και άλλοι. Στο Real Fm εκπέμπουν και οι αγαπημένες εκπομπές της Ελληνοφρένειας αλλά και η εκπομπή του Γιώργου Γεωργίου. Real Fm 97.8 Το αληθινό ραδιόφωνο πάντα με τη σφραγίδα του Νίκου Χατζηνικολάου. Ακούστε τους όπως δεν τους έχετε ξαναδεί Μουσική και επικαιρότητα στην ίδια τη συχνότητα!",
                image:
                  "http://resources.live24.gr/resources/images/stations/realfm.jpg",
                source: "http://realfm.live24.gr:80/realfm",
                live24Url: "http://live24.gr/radio/realfm.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1348",
              },
              {
                name: "Red FM 96.3",
                id: "Red FM 96.3",
                genre: "Ροκ",
                location: "Αθήνα",
                website: "http://www.redfm.gr",
                info: "Ο Red 96.3 είναι σταθερά πρώτος εδώ και μία δεκαετία στις προτιμήσεις του ραδιοφωνικού κοινού της Αθήνας που αγαπά τη ροκ μουσική. Κινείται μουσικά ανάμεσα σε classic, alternative και pop-rock ακούσματα, διατηρώντας τις live εκπομπές, τα πρόσωπα αλλά και τα μουσικά αφιερώματα που τον καθιέρωσαν. Κάθε μέρα, από το πρωί στον Red FM έχεις τις καλύτερες Ροκ μουσικές επιλογές με χιούμορ και καλή παρέα. Στον Red FM θα βρεις ένα πλούσιο γεμάτο πρόγραμμα. Οι παραγωγοί που σε περιμένουν: Τάκης Γιαννούτσος - Θοδωρής Βαμβακάρης, Λευτέρης Κεφαλάς, Πέτρος Κουμπλής, Γιάννης Γιακουμάκης, Χρήστος Παπαδάς, Γιώργος Αποστόλου. O RED δεν μένει έξω από τις εξελίξεις για αυτό το λόγο έχει δελτία ειδήσεων κάθε μια ώρα. Συντονιστείτε τώρα!",
                image:
                  "https://resources.live24.gr/resources/images/stations/f6dbed3b-0808-419b-8d59-5d240c041a4c.png",
                source: "http://stream.radiojar.com:80/redfm963",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1324",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1324",
              },
              {
                name: "Rock FM 96.9",
                id: "Rock FM 96.9",
                genre: "Ροκ",
                location: "Αθήνα",
                website: "http://www.rockfm.gr",
                info: "O 96.9 ROCK FM είναι από τους πιο ιστορικούς σταθμούς της Αθήνας μιας και εκπέμπει από το 1989! Στον Rock FM ακούτε τα αγαπημένα σας ροκ και όχι μόνο κομμάτια από όλες τις εποχές. Από την αρχή συνεχίζει σταθερά με το ίδιο όνομα, γεγονός που τον καθιστά έναν από τους πιο ιστορικούς σταθμούς της πόλης. Το όνομα του σταθμού καθορίζει και τη μουσική του ταυτότητα, χωρίς όμως αυτό να δημιουργεί αυστηρά όρια, φιλοξενώντας όλα τα μουσικά χρώματα αυτής αλλά και κάθε εποχής.",
                image:
                  "http://resources.live24.gr/resources/images/stations/fee95347-f0eb-4299-9edd-9d9b42ee23f6.png",
                source: "https://az10.yesstreaming.net/radio/8060/radio.mp3",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1326",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1326",
              },
              {
                name: "Rythmos στούς 94.9 94.9",
                id: "Rythmos στούς 94.9 94.9",
                genre: "Ελληνική Mainstream",
                location: "Αθήνα",
                website: "http://live24.gr",
                info: "",
                source: "http://rythmos.live24.gr:80/rythmos",
                live24Url: "http://live24.gr/radio/rythmos.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1321",
              },
              {
                name: "Sfera 102.2",
                id: "Sfera 102.2",
                genre: "Ελληνική Mainstream",
                location: "Αθήνα",
                website: "http://www.sfera.gr",
                info: "Πάμε όλοι Sfera στους 102,2. Εξέπεμψε το 1996 και από τότε έχει γίνει κομμάτι της καθημερινότητας χιλιάδων ακροατών καθημερινά. Ο Sfera τολμά και εντάσσει στο μουσικό του πρόγραμμα, καλλιτέχνες και τραγούδια που αμέσως γίνονται επιτυχίες! Τέλος να σας πούμε πως κάθε χρόνο ο Sfera 102,2 διοργανώνει με τεράστια επιτυχία events και συναυλίες!",
                image:
                  "http://resources.live24.gr/resources/images/stations/ca927ccc-0f87-4266-9626-9e2a73e4e489.png",
                source: "http://sfera.live24.gr:80/sfera4132",
                live24Url: "http://live24.gr/radio/sfera.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1301",
              },
              {
                name: "Sport FM 94.6",
                id: "Sport FM 94.6",
                genre: "Αθλητικά",
                location: "Αθήνα",
                website: "http://www.sport-fm.gr",
                info: "O απόλυτος αθλητικός ραδιοφωνικός σταθμός του ομίλου ΣΚΑΙ, βρίσκεται στο κτήριο των εγκαταστάσεων του ΣΚΑΪ, στο Νέο Φάληρο. Εξέπεμψε στις 25 Νοεμβρίου 1994 ως Athens FM και το Καλοκαίρι του 1996 μετονομάστηκε σε ΣΠΟΡ FM. Το πρόγραμμα του σταθμού ακολουθούσε τον προσανατολισμό του τηλεοπτικού καναλιού και ήταν αθλητικό. Την 1 Ιουνίου του 2008 μετονομάζεται σε NovaΣΠΟΡ FM 94.6 διατηρώντας τον αθλητικό του χαρακτήρα. Λόγω της οικονομικής κρίσης της ιδιοκτήτριας εταιρείας του σταθμού, της NOVA, ο σταθμός πωλείται στον Γιάννη Αλαφούζο και στον ΣΚΑΪ την 21 Ιανουαρίου 2014, μετονομάζοντας τον σταθμό σε ΣΠΟΡ FM 94.6. Sport FM Frequencies in Greece: Athens 94.6 Volos 89.5 Herakleio Crete 87.6 Kos 101.3 Patmos 102.1 Patra 96.3 Rethymno 94.6 Rodos 102.4 \u0026 102.7 Syros 95.8 Xania 90.7 Xios 107.1",
                image:
                  "http://resources.live24.gr/resources/images/stations/c33acb78-4404-44ca-83e5-f9830d3c7099.png",
                source: "http://sportfm.live24.gr:80/sportfm7712",
                live24Url: "http://live24.gr/radio/sportfm.jsp?ref\u003dlive24",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1305",
              },
              {
                name: "Αθήνα 98.4",
                id: "Αθήνα 98.4",
                genre: "Ειδησεογραφικά",
                location: "Αθήνα",
                website: "http://www.athina984fm.gr",
                info: "Ο Αθήνα 9.84 είναι ο Δημοτικός Ραδιοφωνικός Σταθμός της Αθήνας και η πρώτη μετάδοση του προγράμματός του έγινε το 1987. Από το 1999 και μετά ο Αθήνα 9.84 στεγάζεται σε σύχρονες εγκαταστάσεις στην Τεχνόπολη του Δήμου Αθηναίων. Από το 2001 εκπέπμπει στα 98.3 MHz και από το Δορυφόρο Eutelsat 9B. Ο σταθμός του Δήμου Αθηναίων εξέπεμψε συγκεκριμένα στις 31 Μαΐου 1987, και μέχρι σήμερα διαθέτει ένα πρόγραμμα αντικειμενικό, πολυφωνικό, χωρίς προκαταλήψεις, αποκλεισμούς και σκοπιμότητες, εκφράζοντας τους σκεπτόμενους πολίτες κι αναπτύσσοντας αμφίδρομη σχέση με τους ακροατές του.",
                image:
                  "http://resources.live24.gr/resources/images/stations/26b249fc-9d6e-4300-85d2-904348c77770.png",
                source: "http://athina984.live24.gr:80/athina984",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1329",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1329",
              },
              {
                name: "Ελληνικός FM 93.2",
                id: "Ελληνικός FM 93.2",
                genre: "Λαϊκά",
                location: "Αθήνα",
                website: "http://www.ellinikos932.fm/ellinikos/",
                info: "93.2 για να βρίσκετε την Ελλάδα μέσα σε 5 γραμμές. Ο Ελληνικός FM 93.2 είναι το μουσικό ραδιόφωνο της Real Group και αποτελεί δημιούργημα του Ανδρέα Γ. Κουρή και του Νίκου Χατζηνικολάου. Έκανε την εμφάνιση του την Πέμπτη 4 Ιουνίου, στον αέρα. Η συχνότητα των 93.2 αλλάζει ριζικά ύφος μετά από 14 χρόνια στο mainstream ξένο και ελληνικό pop ρεπερτόριο. Ο Ελληνικός 93,2 επιλέγει και μεταδίδει τις καλύτερες στιγμές του ελληνικού ρεπερτορίου από την δεκαετία του 1960 μέχρι σήμερα, με κοινή συνισταμένη την καλή μουσική, τον καλό στίχο και την ψυχή στην ερμηνεία. Ακούστε τον Ελληνικός FM 93.2 στο Live24.gr",
                image:
                  "http://resources.live24.gr/resources/images/stations/82ac74cc-5512-49e8-9be1-92abab459eb2.png",
                source: "http://orange.live24.gr:80/orange9320",
                live24Url: "http://live24.gr/radio/ellinikosfm.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2306",
              },
              {
                name: "ΕΡΑ σπορ 101.8",
                id: "ΕΡΑ σπορ 101.8",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://webradio.ert.gr/eraspor/",
                info: "Η ΕΡΑ σπορ αποτελεί διάδοχο σταθμό της ΥΕΝΕΔ η οποία ιδρύθηκε από την Γεωγραφική Υπηρεσία Στρατού. Για την ιστορία το 1982 με την πολιτικοποίησή της μετονομάστηκε σε ΕΡΤ2, ενώ το 1987 με τη συγχώνευση των δύο κρατικών φορέων ραδιοτηλεόρασης μετονομάζεται σε Τέταρτο Πρόγραμμα και λίγο αργότερα σε ΕΡΑ αλλάζοντας ριζικά προφίλ, μεταδίδοντας μουσική και ορισμένες αθλητικές μεταδόσεις. Σήμερα η ΕΡΑ σπορ εκπέμπει από τους 101,8 και ενημερώνει, σχολιάζει, ψυχαγωγεί με συνέπεια, ποιότητα και φυσικά χωρίς ακρότητες.",
                image:
                  "http://resources.live24.gr/resources/images/stations/f517e1da-2fc0-4452-8cd9-cb5b09fcb0ff.jpg",
                source: "http://radiostreaming.ert.gr:80/ert-erasport",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d2231",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2231",
              },
              {
                name: "ΕΡΤ Δεύτερο πρόγραμμα 103.7",
                id: "ΕΡΤ Δεύτερο πρόγραμμα 103.7",
                genre: "Παραδοσιακά Ελληνικά",
                location: "Αθήνα",
                website: "http://webradio.ert.gr/deftero/",
                info: "Έμπνευση του η καλή και ποιοτική ελληνική μουσική, αλλά και οι θεατρικές παραστάσεις, τις οποίες μεταδίδει. Σε μια προσπάθεια εναλλακτικού μουσικού και ψυχαγωγικού προγράμματος το Δεύτερο πρόγραμμα εξέπεμψε στις 11 Μαΐου 1952! Το Δεύτερο πρόγραμμα ήρθε για να συμπληρώσει το Πρώτο Πρόγραμμα. Αρχικά εξέπεμπε στους 666 χιλιόκυκλους και αργότερα στους 93.6 στα FM (εκεί όπου εξέπεμψε αργότερα ο Kosmos 93.6). Το 1987 μετονομάστηκε σε ΕΡΑ 2 για να επαναφερθεί δέκα χρόνια αργότερα, το 1997, το παλιό του όνομα. Ήταν το κορυφαίο σε ακροαματικότητα μουσικό ραδιόφωνο της ΕΡΤ στην περιφέρεια ενώ μεταδίδει ζωντανά κάθε χρόνο τον Διαγωνισμό Τραγουδιού της Eurovision.",
                image:
                  "http://resources.live24.gr/resources/images/stations/8ad58f66-5fa0-4053-84fa-debe26f7b07d.jpg",
                source: "http://radiostreaming.ert.gr:80/ert-deftero",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d2197",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2197",
              },
              {
                name: "ΕΡΤ Κόσμος 93.6",
                id: "ΕΡΤ Κόσμος 93.6",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://webradio.ert.gr/kosmos/",
                info: "KOSMOS ή αλλιώς Ελληνική ραδιοφωνία γιατί είναι ωραίο να έχεις όλο τον κόσμο στα χέρια σου. Ο σταθμός εξέπεμψε αρχικά μόνο στην Αθήνα από την παλιά συχνότητα του Δεύτερου Προγράμματος, στους 93.6 και από την παλιά συχνότητα του Φιλία, στους 107 MHz των FM το 2001. Αποτελεί έμπνευση του τότε διευθυντή της ΕΡΑ, Αντώνη Ανδρικάκη. Όσον αφορά τον πρώτο διευθυντή του Kosmos αυτός ήταν ο Γιώργος Μουχταρίδης. Ένας ολόκληρος Kosmos που έβαλε πρώτος στο κέντρο την έθνικ μουσική δίνοντας έτσι την ώθηση και σε άλλους και ανεβάζοντας με αυτό τον τρόπο τη δημοφιλία της. Κατάφερε να κερδίσει την εμπιστοσύνη των ακροατών από την πρώτη στιγμή, να αποσπάσει πολύ καλά ποσοστά στις ακροαματικότητες, της τάξεως του 5%, και να γίνει το πιο κερδοφόρο ραδιόφωνο της ΕΡΑ. Στις 11 Ιουνίου 2013 ο σταθμός διέκοψε τη λειτουργία του στα πλαίσια του κλεισίματος της ΕΡΤ και για μικρό διάστημα μεταδιδόταν βραδινές ώρες από την ΕΡΑ η οποία διατηρήθηκε ενεργή από τους απολυμένους εργαζόμενους της ΕΡΤ. Να σημειώσουμε πως λειτούργησε και ως ιντερνετικό ραδιόφωνο μέσω της ΕΡΤ Open.",
                image:
                  "http://resources.live24.gr/resources/images/stations/4615448a-05c3-46e6-9575-32a859c7d122.png",
                source: "http://radiostreaming.ert.gr:80/ert-kosmos",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1319",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1319",
              },
              {
                name: "ΕΡΤ Πρώτο πρόγραμμα 91.6",
                id: "ΕΡΤ Πρώτο πρόγραμμα 91.6",
                genre: "Ειδησεογραφικά",
                location: "Αθήνα",
                website: "http://webradio.ert.gr/proto/",
                info: "Αυτός είναι και ο πρώτος σταθμός που έφερε επίσημα το ραδιόφωνο σε ελληνικό έδαφος. Αρχικά εξέπεμψε υπό το ΕΙΡ και αργότερα υπό την τωρινή ΕΡΤ. Η αρχή γίνεται το 1939 στο Ζάππειον Μέγαρο, με τους αναμεταδότες του να βρίσκονται στα Λιόσια και σήμα τον κλασσικό «Τσοπανάκο». Η Γερμανική εισβολή ωστόσο σταματάει αιφνιδίως αυτή την πρωτόγνωρη προσπάθεια για την Ελλάδα. για να επανέλθει λίγα χρόνια αργότερα και συγκεκριμένα το 1945 με νέο όνομα, ως το ραδιόφωνο του ΕΙΡ. Με βασικό άξονα του τη μουσική το Πρώτο πρόγραμμα διαθέτει ενδιάμεσα και δελτίο ειδήσεων. Είναι το ραδιόφωνο στο οποίο έκανε το ραδιοφωνικό του ντεμπούτο ο Μάνος Χατζιδάκις γράφοντας τη μουσική του επένδυση. Τέλος να σας πούμε πως έχουν φιλοξενηθεί οι μεγαλύτερες προσωπικότητες του θεάτρου και του πολιτισμού γενικότερα.",
                image:
                  "http://resources.live24.gr/resources/images/stations/35fd37f4-fbe3-492f-a1ae-e3f1bdf46a00.png",
                source: "http://radiostreaming.ert.gr:80/ert-proto",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d2073",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2073",
              },
              {
                name: "ΕΡΤ Τρίτο πρόγραμμα 90.9",
                id: "ΕΡΤ Τρίτο πρόγραμμα 90.9",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://webradio.ert.gr/trito/",
                info: "Στο τρίτο κατά σειρά ραδιόφωνο της ΕΡΤ μπορεί ο ακροατής να απολαύσει εκπομπές επικεντρωμένες στον πολιτισμό και την κλασική μουσική. Ο σταθμός γνωρίζει σημαντική αναγνώριση στην περίοδο που επικεφαλής του ήταν ο Μάνος Χατζιδάκις. Εξέπεμψε στις 19 Σεπτεμβρίου του 1954, δύο χρόνια μετά την ίδρυση του δεύτερου προγράμματος με πρωτοβουλία του συγγραφέα Διονυσίου Ρώμα. Μπορεί αρχικά να βγήκε από έναν παρατημένο πομπό μεσαίων κυμάτων, με ολιγόωρο πρόγραμμα αλλά κατάφερε να κερδίσει και αυτός το ελληνικό κοινό. Από τον Φεβρουάριο του 2016, ο επικεφαλής του σταθμού είναι ο Διονύσης Μαλλούχος.",
                image:
                  "http://resources.live24.gr/resources/images/stations/7603b6bf-ad5f-49f8-9824-ab0863bc340b.jpg",
                source: "http://radiostreaming.ert.gr:80/ert-trito",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d2074",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2074",
              },
              {
                name: "Κανάλι 1 – Δημοτική Ραδιοφωνία Πειραιά 90.4",
                id: "Κανάλι 1 – Δημοτική Ραδιοφωνία Πειραιά 90.4",
                genre: "Διάφορα Ελληνικά",
                location: "Αθήνα",
                website: "http://kanaliena.gr/",
                info: "Ένας ακόμη ιστορικός σταθμός στη βάση του Live24.gr. Το 1 εξέπεμψε στις 13 Μαΐου 1987 επί Δημαρχίας Ανδρέα Ανδριανόπουλουαπό το λόφο του Προφήτη Ηλία. Ξεκίνησε τη λειτουργία του 18 μέρες πριν το ξεκίνημα του Αθήνα 9.84. Στην αρχή βρισκόταν στους 90.6 MHz και με την ανακατανομή των συχνοτήτων το 2001 βρέθηκε στους 90.4 MHz. Ανήκει στη Δημοτική Ραδιοφωνία του Δήμου Πειραιώς (ΔΗ.ΡΑ.Π.) η οποία ιδρύθηκε την 1η Αυγούστου του 1989 δύο χρόνια μετά το ξεκίνημα του σταθμού. Εκπέμπει από το όρος του Υμηττού στον Πειραιά, στην Αθήνα και στα νησιά του Αργοσαρωνικού. Με ειδήσεις, ενημερωτικές εκπομπές τοπικού χαρακτήρα καθώς και μουσικές προτιμήσεις, το κανάλι 1 έχει καταφέρει να ξεχωρίσει. Πρόεδρος του Διοικητικού Συμβουλίου της Δημοτικής Ραδιοφωνικής Επιχείρησης διατελεί επί σειρά ετών ο Δημοτικός σύμβουλος Πειραιά και Αντιδήμαρχος Πειραιά Τάκης Αβραμιδης.",
                image:
                  "http://resources.live24.gr/resources/images/stations/2ed4e264-3caa-4079-ac5e-48e17e7101d2.png",
                source: "http://netradio.live24.gr:80/kanali1peiraia",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1313",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1313",
              },
              {
                name: "Μελωδία FM 99.2",
                id: "Μελωδία FM 99.2",
                genre: "\u0027Εντεχνα",
                location: "Αθήνα",
                website: "http://www.melodia.gr/",
                info: "Ένας σταθμός - ύμνος για το έντεχνο τραγούδι. Ο Μελωδία FΜ 99,2 εκπέμπει στη συχνότητα των 99.2 MHz των FM ενώ έχει και διαδικτυακή παρουσία στη διεύθυνση www.melodia.gr. Έχει μια μεγάλη ιστορία και στον εν λόγω ραδιοφωνικό σταθμό μπορείς να ακούσεις από Χατζιδάκι ή Ξυλούρη μέχρι Μαρκόπουλο και Ξαρχάκο που δεν θα βρεις πουθενά αλλού. Πιάσε Μελωδία λοιπόν και στο Live24.gr γιατί εμείς ξέρουμε καλά πως μια Μελωδία είναι η διαδοχή μουσικών φθόγγων και ήχων, που ενοποιημένοι μας δίνουν ένα ηχητικό αποτέλεσμα. Μείνετε συντονισμένοι στον Μελωδία 99,2 και κερδίστε μοναδικά δώρα από τις εκπομπές του.",
                image:
                  "http://resources.live24.gr/resources/images/stations/b527c83e-c3fc-4de6-86f2-860254db65fd.png",
                source: "http://ample-11.radiojar.com:80/melodia992",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1332",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1332",
              },
              {
                name: "Μινόρε FM .",
                id: "Μινόρε FM .",
                genre: "Λαϊκά",
                location: "Αθήνα",
                website:
                  "http://www.facebook.com/groups/minorefmofficial/about/",
                info: "MinoreFM ή αλλιώς ο Λαϊκός σταθμός της Αθήνας! Παίζει 24 ώρες το 24ωρο όλες τις μεγάλες λαϊκές επιτυχίες που αγαπήσαμε. Ο Μινόρε FM ακούγεται δυνατά και μέσα από το LIVE24.GR",
                image:
                  "http://resources.live24.gr/resources/images/stations/d71af57b-ff30-42f0-a1dd-6b6b1a65ce48.gif",
                source: "http://minorefm.live24.gr:80/minorefm",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1431",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1431",
              },
              {
                name: "Μουσικός 98.6",
                id: "Μουσικός 98.6",
                genre: "Λαϊκά",
                location: "Αθήνα",
                website: "http://www.mousikos986.gr/",
                info: "Ο μουσικός 98,6 εστιάζει στο καλό ελληνικό τραγούδι ,τα τραγούδια του είναι επιλεγμένα με κριτήρια τον καλό στίχο, και τις καθαρές μελωδικές γραμμές, του έντεχνου άλλα και του ελαφρολαικου ρεπερτορίου από κάθε μια δεκαετία ξεκινώντας από το χθες και φτάνοντας μέχρι και το σήμερα! Τραγούδια διαμάντια που άντεξαν στον χρόνο, τραγούδια που άφησαν το αποτύπωμα τους στις ζωές μας,είναι συγκεντρωμένα όλα στην αγαπημένη σας συχνότητα, στον Μουσικό 98,6. Συντονιστείτε, ένας κόσμος τραγούδια σας περιμένει! Μουσικός 98,6 Η μουσική μας, ενώνει!",
                image:
                  "http://resources.live24.gr/resources/images/stations/48e83f29-0082-4842-820f-5852fc258c97.jpg",
                source: "http://netradio.live24.gr:80/mousikos986",
                live24Url: "http://live24.gr/radio/mousikos.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2871",
              },
              {
                name: "Παραπολιτικά FM 90.1",
                id: "Παραπολιτικά FM 90.1",
                genre: "Ειδησεογραφικά",
                location: "Αθήνα",
                website: "http://www.parapolitika.gr",
                info: "O Παραπολιτικά 90.1 FM είναι ένα δυναμικό ραδιόφωνο που μπαίνει στη μάχη της ενημέρωσης με νέα πρόσωπα αλλά και μεγάλα ονόματα και έμπειρους δημοσιογράφους και ραδιοφωνικούς παραγωγούς. Η παρέα των Παραπολιτικών προσφέρει ψυχαγωγία με χιούμορ, καυστικά σχόλια και πολλές εκπλήξεις στο ανανεωμένο πρόγραμμα του σταθμού. Τα Παραπολιτικά 90.1 από νωρίς το πρωί σας προσκαλούν να παρακολουθήσετε όλες τις εξελίξεις και τα γεγονότα όπως τα καταγράφουν, τα μεταδίδουν και τα σχολιάζουν άμεσα και με εγκυρότητα οι κορυφαίοι δημοσιογράφοι από την συχνότητα των 90.1.",
                image:
                  "http://resources.live24.gr/resources/images/stations/0163c59b-62d4-46e4-93e7-71916c770e91.png",
                source: "http://netradio.live24.gr:80/athinaradio",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1986",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1986",
              },
              {
                name: "ΣΚΑΪ 100.3",
                id: "ΣΚΑΪ 100.3",
                genre: "Ειδησεογραφικά",
                location: "Αθήνα",
                website: "http://www.skai.gr",
                info: "Ο ΣΚΑΪ 100.3 είναι ένας από τους μεγαλύτερους ενημερωτικούς και ψυχαγωγικούς σταθμός της Αθήνας. Στο πρόγραμμά του περιλαμβάνει εκπομπές ενημερωτικές, ψυχαγωγικές, πολιτιστικές και άλλες. Κάθε πρωί στις 8 ανοίγει το πρόγραμμα του ΣΚΑΪ 100.3 ο Άρης Πορτοσάλτε με αισιοδοξία, αυτοπεποίθηση και χαμόγελο! Τα μεγάλα γεγονότα, η οικονομία, η κοινωνία, διεθνή ενημέρωση, οι πρωταγωνιστές τους, και όλα όσα θα πρέπει να γνωρίζουν οι πολίτες μόνο στον ΣΚΑΪ 100.3!",
                image:
                  "http://resources.live24.gr/resources/images/stations/41e790ec-598d-45f7-b36c-0f7947ad118c.gif",
                source: "http://netradio.live24.gr:80/skai1003",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1334",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1334",
              },
              {
                name: "Στο κόκκινο 105.5",
                id: "Στο κόκκινο 105.5",
                genre: "Διεθνής Μουσική",
                location: "Αθήνα",
                website: "http://www.stokokkino.gr",
                info: "Κόκκινο δεν είναι μόνο το χρώμα του πάθους είναι πλέον και το χρώμα του ραδιοφώνου. Κόκκινο είναι το ραδιόφωνο που ακούει τον ακροατή. Ένα μέσο στο οποίο χτυπάει η καρδιά της ενημέρωσης. Μια έντονη ματιά στην κοινωνία και την πολιτική. Κόκκινη καταγραφή, μετάδοση, αντικειμενικότητα και μία αμφίδρομη σχέση με τον ακροατή. Είναι το ραδιοφώνου που ακούει και συμμετέχει σε ό,τι συμβαίνει γύρω μας. Χαρακτηριστικό του σταθμού η αγάπη για την καλή μουσική και η προβολή μιας άλλης ραδιοφωνικής αντίληψης που διαπερνά το σύνολο των ραδιοσταθμών.",
                image:
                  "http://resources.live24.gr/resources/images/stations/92f8a7b8-ce30-4602-aa02-c47e4f53e356.jpg",
                source: "http://stream.radiojar.com:80/kokkino-ath.mp3",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1379",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1379",
              },
              {
                name: "1055 Rock 105.5",
                id: "1055 Rock 105.5",
                genre: "Ροκ",
                location: "Θεσσαλονίκη",
                website: "http://www.1055rock.gr",
                info: "Ο 1055 Rock είναι ένας ροκ μουσικός σταθμός και ενημερωτικός με χαρακτήρα. Ξεκησε να εκπέμπει στις 24 Ιουλίου 2001 από το κέντρο της Θεσσαλονίκης. Καθημερινά έχει 19 ώρες ζωντανό πρόγραμμα με ταλαντούχους και έμπειρους καταξιωμένους παραγωγούς. Επισκεφτείτε το site του σταθμού γιατί αξίζει τον κόπο. 105.5 Rock! Rock Music Rock Attitude!",
                image:
                  "http://resources.live24.gr/resources/images/stations/ac03d977-a633-47b0-8f50-91a1869e9d59.jpg",
                source: "http://radio.1055rock.gr:30000/1055",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d304",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d304",
              },
              {
                name: "88μισό 88.5",
                id: "88μισό 88.5",
                genre: "Διεθνής Μουσική",
                location: "Θεσσαλονίκη",
                website: "http://www.radio88miso.gr",
                info: "Ο 88μισό πανω απ΄όλα είναι ένα μουσικό ραδιόφωνο που προσεγγίζει τις σύγχρονες τάσεις με ένα πολυσυλλεκτικό τρόπο. Ένα ραδιόφωνο που δεν αναπαύεται στις έτοιμες επιτυχίες που έρχονται με το κονσερβοποιημένο ύφος της παγκόσμιας μουσικής βιομηχανίας, αλλά προσπαθεί να δημιουργήσει δικές του. Πέρα απ΄ όλα αυτά προσπαθεί να απορροφήσει τους ταχύτατους ρυθμούς με τους οποίους κινείται σήμερα το διεθνές μουσικό εμπόριο με τρόπους που ταυτίζονται με την ραδιοφωνική κουλτούρα του ακροατή. Το καθημερινό airplay του σταθμού διαμορφώνεται από πολλά διαφορετικά είδη μουσικής κάτι που απέφευγε στο παρελθόν συστηματικά ο ραδιοφωνικός χάρτης. Ενδεικτικά εκθέτουμε τα εξής: pop, soul, rock, jazz, μουσικές του κόσμου, blues, και φυσικά όλα τα νέα μουσικά ρεύματα από τον ελληνικό και ξένο χώρο.",
                image:
                  "http://resources.live24.gr/resources/images/stations/93b86ea3-f84e-438d-b232-27ccabc597db.png",
                source: "http://solid33.streamupsolutions.com:30000/stream",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d253",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d253",
              },
              {
                name: "9.58 ΕΡΤ3 95.8",
                id: "9.58 ΕΡΤ3 95.8",
                genre: "Ειδησεογραφικά",
                location: "Θεσσαλονίκη",
                website: "http://webradio.ert.gr/958fm/",
                info: 'ΔΕΥΤΕΡΟ ΠΡΟΓΡΑΜΜΑ ΡΑΔΙΟΦΩΝΙΚΟΥ ΣΤΑΘΜΟΥ ΜΑΚΕΔΟΝΙΑΣ της ΕΡΤ3: Το ραδιόφωνο του πολιτισμού της ΕΡΤ3, ο 9,58fm, είναι το μοναδικό πολιτιστικό ραδιόφωνο της Β.Ελλάδας, που ανέδειξε τη σημασία της πολιτισμικής παρέμβασης στη σύγχρονη κοινωνία. Δημιούργησε τη μοναδική "Φωνοθήκη", όπου έχουν καταγραφεί οι φωνές των καταξιωμένων ποιητών και πεζογράφων της Θεσσαλονίκης και όλης της Μακεδονίας, ενώ, παράλληλα, διακρίθηκε στη δημιουργία σπάνιων εκδόσεων και συλλεκτικών ψηφιακών δίσκων που παραδόθηκαν για πρώτη φορά στο ευρύ κοινό.',
                image:
                  "http://resources.live24.gr/resources/images/stations/fce3850c-2881-4c1d-87e0-dc3e0e72888e.gif",
                source: "http://radiostreaming.ert.gr:80/ert-958fm",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d1747",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1747",
              },
              {
                name: "Ble.FM 93.1",
                id: "Ble.FM 93.1",
                genre: "Ελληνική Mainstream",
                location: "Θεσσαλονίκη",
                website: "http://www.ble.fm",
                info: "Ble είναι η θάλασσα, ble είναι ο ουρανός, ble έχει η γαλανόλευκη, τώρα ble έχει και η μουσική που ακούς. Ο Ble.fm μας ταξιδεύει με εκλεκτή μουσική από την Θεσσαλονίκη. Ble.fm στα ερτζιανά της Θεσσαλονίκης στη συχνότητα 93.1. Με πολλή ελληνική μουσική όλες τις ώρες. Συντονίσου τώρα και στο Live24.gr γιατί είμαστε κι εμείς ble. Τσέκαρέ το.. ",
                image:
                  "http://resources.live24.gr/resources/images/stations/bd0f2136-2606-47a1-b702-273144447c15.jpg",
                source: "http://radio.lancom.gr:8006/stream1",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d2458",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2458",
              },
              {
                name: "Fly 104",
                id: "Fly 104",
                genre: "Διεθνής Μουσική",
                location: "Θεσσαλονίκη",
                website: "http://www.fly104.gr/",
                info: "SOPHISTICATED, ALTERNATIVE Ο Fly 104 είναι ένα απόλυτα μουσικό ραδιόφωνο με την υπογραφή του Αντώνη Κανάκη και με ιδιαίτερη άποψη στη House μουσική του σήμερα και όχι μόνο. Στο πρόγραμμά του μερικά από τα σημαντικότερα ραδιοφωνικά ονόματα και μουσικοί παραγωγοί της Θεσσαλονίκης, όπως ο Στέφανος Τσιτσόπουλος, ο Στέφανος Κόγιας, ο Μανώλης Σταυρουλάκης, η Βάσω Βλαχοπούλου, ο Λευτέρης Κορδιάος και η Κική Μποτονάκη. ",
                image:
                  "http://resources.live24.gr/resources/images/stations/ee26ac2c-c625-4395-babc-3e66041a8eb5.jpg",
                source: "https://imagine2.radioca.st/;listen.pls",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d299",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d299",
              },
              {
                name: "North 98",
                id: "North 98",
                genre: "Διάφορα Ελληνικά",
                location: "Θεσσαλονίκη",
                website: "http://www.radionorth.gr",
                info: "...μη ζώην μετ? αμουσίας. Αυτό σκέφτηκαν όπως φαίνεται και οι δημιουργοί του Νorth98.0 και αποφάσισαν να κάνουν πράξη κάτι μοναδικό. Ο Νorth98.0 βρίσκεται Μητροπόλεως 34 στην Θεσσαλονίκη και δημιουργήθηκε το 2012. Συντονιστείτε και ακούστε τον στο LIVE24.GR γιατί παίζει δυνατά διάφορα ελληνικά. North 98... Το δικό σου ραδιόφωνο!",
                image:
                  "http://resources.live24.gr/resources/images/stations/dce4b391-7ae0-4e3c-aec0-eafc603f3b22.png",
                source: "http://netradio.live24.gr:80/north98thess",
                live24Url: "http://live24.gr/radio/north98.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d282",
              },
              {
                name: "Off Radio",
                id: "Off Radio",
                genre: "Ροκ",
                location: "Θεσσαλονίκη",
                website: "http://www.offradio.gr",
                info: "Turn Your Radio OFF! O Offradio είναι ο μεγαλύτερος ανεξάρτητος online ραδιοφωνικός σταθμός στην Ελλάδα. Ο σταθμός ιδρύθηκε το 2008 και γρήγορα έγινε το πιο δημοφιλές διαδικτυακό ραδιόφωνο της χώρας. Σύντομα, ένας σημαντικός αριθμός των ακροατών αγκάλιασε τη μουσική του Offradio σε περισσότερες από 90 χώρες σε όλο τον κόσμο. Πρόσφατα ο Offradio έχει βραβευτεί με ένα e-Award 2011 ως το καλύτερο web radio στην Ελλάδα. Η αποστολή του Offradio.gr είναι να εισαγάγει εκλεκτική νέα μουσική από όλο τον κόσμο και να φέρει σε επαφή τους ακροατές με τους DJs και παρουσιαστές που αγαπούν. Το Offradio εκπέμπει μια εντυπωσιακή συλλογή από radioshows, μείγματα DJ και ζωντανές εκπομπές. Ο σταθμός επιδιώκει να μοιράζεται με τους ακροατές του ιδέες για μουσική, δραστηριότητες, τέχνες, τεχνολογίες, μόδα και άλλα.",
                image:
                  "http://resources.live24.gr/resources/images/stations/2042d47e-7003-42c5-bbde-8b9507ec4b54.png",
                source: "https://s3.yesstreaming.net:17062/stream",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d2235",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d2235",
              },
              {
                name: "Plus Radio 102.6",
                id: "Plus Radio 102.6",
                genre: "Διεθνής Μουσική",
                location: "Θεσσαλονίκη",
                website: "http://www.plusradio.gr",
                info: "Plus Radio 102.6 στη Θεσσαλονίκη. Η καλύτερη ξένη μουσική στην πόλη, όλο το 24ωρο. Ο Plus radio 102,6 το No1 ραδιόφωνο των επιτυχιών παρουσιάζει τη καλύτερη ομάδα ραδιοφωνικών παραγωγών και εμπλουτίζει το πρόγραμμα του με 5 super εκπομπές που θα σε απογειώσουν! Η αρχή της ημέρας γίνεται στις 8 το πρωί με το Plus Morning Show .Η Μαρία Αμανατίδου και ο Ευθύμης Κάλφας ξέρουν αυτά που θέλεις να ακούσεις για να ξυπνήσεις με τον καλύτερο τρόπο.Επιτυχίες,διαγωνισμοί,επικαιρότητα,gossip news,παιχνίδια και ό,τι αλλο μπορείς να σκεφθείς για να σου φτιάξει η διάθεση! Στις 12 το μεσημέρι αναλαμβάνει η Ελένη Κώτση που ξέρει καλύτερα από όλους την Θεσσαλονίκη και θα σε κατευθύνει σε έξυπνες αγορές,προτάσεις για διασκέδαση,ο,τι γίνεται στη πόλη εκείνη τη στιγμή και φυσικά την καλύτερη ξένη μουσική της πόλης. Στις 4 η Ινέσσα Αζοίδου με την φωνή που δε τη ξεχνάς εύκολα είναι η κατάλληλη για να δώσει ζωή στα απογεύματά σου.Κέφι,θετική ενέργεια και φυσικά όλες οι Νο1 επιτυχίες Στις 7 έρχεται το Mr Music Show η Νο1 εκπομπή της πόλης με τον Μr Music Γιώργο Χαριζάνη.Η απόλυτη εκπομπή για αυτούς που θέλουν να ξέρουν τι παίζει στη μουσική βιομηχανία και τα νέα των superstars.Eπιτυχίες,πρώτες μεταδόσεις,future hit,top 5 ακροατών,new music,διαγωνισμοί και όλα όσα χρειάζεται να ξέρεις για μια συναρπαστική ζωή στη Θεσσαλονίκη. Στις 10 το βράδυ την σκυτάλη παίρνει η αγαπημένη εκπομπή επικοινωνίας Together με την Μαριάννα Καρέζη.3 ώρες γεμάτες με μηνύματα ακροατών,θέματα για τις ανθρώπινες σχέσεις που κεντρίζουν το ενδιαφέρον και αγαπημένες μπαλάντες μετά τα μεσάνυχτα είναι στο menu της εκπομπής. Στο ανανεωμένο πρόγραμμα του Plus Radio 102,6 δε θα μπορούσαν να λείπουν οι mixing εκπομπές που αγαπάει όλη η πόλη. Το Mix the Hits με τον Dj Αλέξανδρο Μαθά κάθε Παρασκευή και Σάββατο στις 10 το βράδυ και τον Dj Spy κάθε Παρασκευή στις 11 και κάθε Σάββατο μεσάνυχτα. Συντονίσου και απόλαυσε το καινούργιο πρόγραμμα του Plus Radio 102,6 του Νο1 ραδιοφώνου των επιτυχιών και νιώσε τη διαφορά!",
                image:
                  "http://resources.live24.gr/resources/images/stations/612fea9f-cad5-42c8-a333-fddc6ab84613.png",
                source: "http://eco.onestreaming.com:8039",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d296",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d296",
              },
              {
                name: "RSO 91.7",
                id: "RSO 91.7",
                genre: "Διεθνής Μουσική",
                location: "Θεσσαλονίκη",
                website: "http://www.rso.gr",
                info: "Αν έχετε ανοίξει ήδη τη σελίδα του ραδιοφώνου RSO 91.7 σίγουρα θα έχετε καταλάβει ήδη ότι πρόκειται για σταθμό με έφεση στη μετάδοση σπουδαίων επιτυχιών των δεκαετιών 1980 \u0026 1990 κυρίως. Tina Turner, Alphaville, Bon Jovi, Aerosmith και πολλοί άλλοι ξένοι της αγγλικής και αμερικάνικης κυρίως σκηνής. Η ζωή μας αλλάζει εντελώς όταν ακούμε τη μουσική αυτή, θυμίζει στους παλιότερους νοσταλγικές εποχές και ξυπνάει σε νέους αισθήματα ψυχικής ανάτασης. Αλλά και οι επιλογές του σταθμού RSO 91.7 FM στο καινούριο ξένο ρεπερτόριο, είναι αχτύπητες!!! Πιο πολύ έντεχνο το κομμάτι της επιλογής αυτής θα μπορούσε να το χαρακτηρίσει κανείς, αφού οι μπαλάντες που ακούμε μας καλμάρουν μέσα από την ποιότητα της δουλειάς των συνθετών τους και από τις άπιαστες φωνές των ερμηνευτών του.",
                image:
                  "http://resources.live24.gr/resources/images/stations/33705328-6c67-48e2-ba75-a385a317c175.png",
                source: "http://tachyon.shoutca.st:8594",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d262",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d262",
              },
              {
                name: "ΕΡΤ3-Μακεδονίας 102",
                id: "ΕΡΤ3-Μακεδονίας 102",
                genre: "Ειδησεογραφικά",
                location: "Θεσσαλονίκη",
                website: "http://webradio.ert.gr/102fm/",
                info: "Σταθμός στα γεγονότα. Αυτός είναι το ενημερωτικό ραδιόφωνο της ΕΡΤ3... Καθημερινά το πρόγραμμα του 102fm ΕΡΤ3 ενημερώνει για ότι συμβαίνει στο εσωτερικό και το εξωτερικό. Η Ενημέρωση συναντάει την ψυχαγωγία στη Θεσσαλονίκη και την Βόρεια Ελλάδα. Όλα όσα πρέπει να γνωρίζετε για τη νύφη του Θερμαϊκού με μια στάση στην ενημέρωση και τον ΕΡΤ 3 Ρ.Σ. ΜΑΚΕΔΟΝΙΑΣ. Εξέπεμψε το 1988.",
                image:
                  "http://resources.live24.gr/resources/images/stations/bad38e6b-2915-4080-be5d-a69bbad536c1.png",
                source: "http://radiostreaming.ert.gr:80/ert-102fm",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d276",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d276",
              },
              {
                name: "Λαϊκός FM 87.6",
                id: "Λαϊκός FM 87.6",
                genre: "Λαϊκά",
                location: "Θεσσαλονίκη",
                website: "http://www.laikos.gr",
                info: "Ένας σταθμός με καλό ελληνικό λαϊκό τραγούδι έλειπε από τη Θεσσαλονίκη. Από το 2001 και μετά, η Θεσσαλονίκη απέκτησε το δικό της λαϊκό ραδιόφωνο, τον Λαϊκό 87.6 στα FM και από τότε το ελληνικό ραδιόφωνο έχει άλλο χαρακτήρα στα ερτζιανά. Πάντα με αγάπη και μεράκι, οι παραγωγοί του Λαϊκού 87.6, επιλέγουν το καλύτερο ελληνικό ρεπερτόριο στα λαϊκά τραγούδια, μέσα από ένα πλήθος παλιότερων και νέων επιτυχιών, αγαπημένων καλλιτεχνών.  Από το πρώτο κιόλας εξάμηνο της παρουσίας του στα ερτζιανά, κατάφερε ένα πολύ καλό ποσοστό ακροαματικότητας, με αμέτρητες εκδηλώσεις με τα μεγαλύτερα ονόματα από το χώρο του ελληνικού τραγουδιού, διαγωνισμοί που χάρισαν αμέτρητα δώρα αλλά και εκδηλώσεις συμπαράστασης σε ανθρώπους που είχαν την ανάγκη από τα πιο απλά πράγματα. Ο Λαϊκός 87.6 είναι ένας σταθμός που θέλει πάντα να έχει επικοινωνία με τον κόσμο του και αυτό το καταφέρνει μέσα από τις εκπομπές του αλλά και μέσω email στο onair@laikos.gr καθώς και μέσω τηλεφώνου στο 2310 240 876 ή στο fax 2310 240 846. Το σήμα του Λαϊκού 87,6 καλύπτει πλήρως τους νομούς Θεσσαλονίκης, Ημαθίας, Κιλκίς, Πιερίας, Πέλλας, Φλώρινας και Κοζάνης και από τον Μάρτιο του 2014 εκπέμπει και στο νομό Χαλκιδικής από την συχνότητα 97,3. Ο Λαϊκός 87.6 ευχαριστεί τους ακροατές του που όλα αυτά τα χρονιά κατάφερε παρά πολλά, μέσα από την θερμή υποστήριξη τους, που συνεχίζει να δέχεται και που τον κατατάσσουν στις υψηλότερες θέσεις ακροαματικότητας. Ο σταθμός υπόσχεται πως θα συνεχίσει την σκληρή δουλειά του με τον ίδιο ενθουσιασμό, για να έχει τους ακροατές του πάντα ικανοποιημένους. ",
                image:
                  "http://resources.live24.gr/resources/images/stations/2215829d-17bb-40f7-80d9-f1939477e46a.jpg",
                source: "http://netradio.live24.gr:80/laikos876",
                live24Url: "http://live24.gr/radio/laikos.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d251",
              },
              {
                name: "Ορθόδοξη Παρουσία 106.8",
                id: "Ορθόδοξη Παρουσία 106.8",
                genre: "Θρησκευτική",
                location: "Θεσσαλονίκη",
                website: "http://www.imlagada.gr",
                info: "Ο Ραδιοφωνικός Σταθμός της Ιεράς Μητροπόλεως Λαγκαδά, Λητής και Ρεντίνης Ορθόδοξη Παρουσία FM 106,8 αναβαθμίζεται και ως προς το πρόγραμμα που θα μεταδίδει αλλά και τεχνικά. Πολύ σύντομα θα επανέλθει στην κανονική του λειτουργία και θα υπάρχουν απευθείας μεταδόσεις των Θείων Λειτουργιών, Όρθρου και Εσπερινού τόσο από Ιερούς Ναούς της Μητροπόλεως μας όσο και από άλλα Ορθόδοξα Χριστιανικά σημεία από την περιοχή μας αλλά και από όλο τον κόσμο, εκπομπές λόγου, ενημερωτικές εκπομπές, Χριστιανικά κείμενα, Βυζαντινή, Κλασσική και Παραδοσιακή μουσική, ανακοινώσεις της Μητροπόλεως και των Ενοριών της καθώς και αναλυτικά στοιχεία τόσο για το ραδιοφωνικό εβδομαδιαίο πρόγραμμα όσο και για τα τεχνικά του χαρακτηριστικά.",
                image:
                  "http://resources.live24.gr/resources/images/stations/221df493-b08c-46e1-9975-51aedf6d7809.jpg",
                source: "http://www.gwebstream.net:8008/stream",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d309",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d309",
              },
              {
                name: "Πανόραμα 98.4",
                id: "Πανόραμα 98.4",
                genre: "Ελληνική Mainstream",
                location: "Θεσσαλονίκη",
                website: "http://www.panorama984.gr",
                info: 'Ο σταθμός Πανόραμα 984 ξεκίνησε το 1990 και όπως αναφέρει στην ιστοσελίδα του είναι "στην νεανική ηλικία των 25 ετών". Όλα αυτά τα χρόνια, ο Πανόραμα 98.4 της Θεσσαλονίκης έχει μοιραστεί με τους ακροατές του, άπειρα ελληνικά και ξένα τραγούδια κι έχει ψυχαγωγήσει με τον ανεβασμένο χαρακτήρα του. ',
                image:
                  "http://resources.live24.gr/resources/images/stations/0347e1a8-87ce-4043-9659-9f4aa2edfb3f.jpg",
                source: "http://netradio.live24.gr:80/panorama984",
                live24Url: "http://live24.gr/radio/panorama.jsp",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d1428",
              },
              {
                name: "Ράδιο Άποψη -",
                id: "Ράδιο Άποψη -",
                genre: "Διεθνής Μουσική",
                location: "Θεσσαλονίκη",
                website: "http://radioapopsi.gr/post/894",
                info: "Μουσική με άποψη θα ακούσεις μόνο στο Ράδιο Άποψη. Ένας σταθμός με αγάπη στην ηλεκτρονική μουσική. Εδώ θα ακούσεις από Michael Kiwanuka μέχρι Jamiroquai, Royksopp και Moderat. Ο Άποψη παίζει ασταμάτητα και ακούραστα αγαπημένα κομμάτια του χτες και του σήμερα. Επειδή όμως κι εμείς στο Live24.gr έχουμε μουσική άποψη σας τον προτείνουμε ανεπιφύλακτα.",
                image:
                  "http://resources.live24.gr/resources/images/stations/545b3a37-831b-43f9-8e52-11bea584ecaf.jpg",
                source: "http://eco.onestreaming.com:8398/;",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d303",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d303",
              },
              {
                name: "Ράδιο Θεσσαλονίκη 94.5",
                id: "Ράδιο Θεσσαλονίκη 94.5",
                genre: "Ειδησεογραφικά",
                location: "Θεσσαλονίκη",
                website: "http://www.radiothessaloniki.gr",
                info: "Το Ράδιο Θεσσαλονίκη 94.5 γεννήθηκε το 1986, την περίοδο της ελεύθερης ραδιοφωνίας, από τρεις ερασιτέχνες, τους Λευτέρη Μαρόγλου, Γιώργο Σερίδη και Στέφανο Διαμαντόπουλο και αποτέλεσε το πρώτο ερασιτεχνικό συλλογικό ραδιόφωνο στη Θεσσαλονίκη. Συνεχίζει και σήμερα, σαν ένας σύγχρονος, αδειοδοτημένος σταθμός πλέον, και ψυχαγωγεί κι ενημερώνει όπως πάντα τους ακροατές του με καλή ελληνική μουσική και σύγχρονες ενημερωτικές εκπομπές. Πολλή καλή μουσική για όλα τα γούστα και ηλικίες από νέους και παλιούς καλλιτέχνες του ελληνικού πενταγράμμου. Οι παραγωγοί του σταθμού, πλήρως ενημερωμένοι για τις εξελίξεις στα μουσικά και πολιτιστικά δρώμενα του ελληνικού τοπίου, μας ψυχαγωγούν όλο το 24ωρο και μας ταξιδεύουν με ελληνικές μουσικές αλλά και με ξένες επιλογές.",
                image:
                  "http://resources.live24.gr/resources/images/stations/f075bc0e-6cac-4f3b-abdd-6236d03e71af.png",
                source:
                  "http://eu7.fastcast4u.com:6156/stream?type\u003dhttp\u0026nocache\u003d136596",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d272",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d272",
              },
              {
                name: "Ραδιοκύματα 104.4",
                id: "Ραδιοκύματα 104.4",
                genre: "Ελληνική Mainstream",
                location: "Θεσσαλονίκη",
                website: "http://www.radiokymata.gr",
                info: "Η μουσική για τον σταθμό Ραδιοκύματα είναι τρόπος ζωής και έκφρασης που σε κάνει να ξεπερνάς πιο εύκολα ένα πρόβλημα που σε απασχολεί, μέσα από τις μελωδίες και τους ελληνικούς στίχους. Ο σταθμός Ραδιοκύματα 104.4 FM βρίσκεται στον αέρα των ερτζιανών από το 1989, εκπέμπει στη πόλη της Θεσσαλονίκης καλύπτοντας με την εμβέλειά του την κεντρική Μακεδονία. Εκπέμπει ελληνική mainstream μουσική από πολλούς γνωστούς καλλιτέχνες όπως Αντώνης Ρέμος, Νίκος Οικονομόπουλος, Πασχάλης Τερζής και άλλοι. Ο σταθμός αποσκοπεί στην ψυχαγωγία των ακροατών του με ελληνική μουσική στη σειρά χωρίς διακοπή. Εκπέμπει και ζωντανά στο internet και οι χρήστες του live24, μπορούν να τον απολαύσουν από όπου κι αν βρίσκονται.",
                image:
                  "http://resources.live24.gr/resources/images/stations/13696f56-73d6-45cd-bd57-228724160380.png",
                source: "http://s1.onweb.gr:8812/",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d300",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d300",
              },
              {
                name: "Στο Μωβ 91.4",
                id: "Στο Μωβ 91.4",
                genre: "Ροκ",
                location: "Θεσσαλονίκη",
                website: "http://www.stokokkino.gr/kokkino-mov.php",
                info: "Κόκκινο, πράσινο, κίτρινο, μπλε, α και γαλάζιο, βυσσινή και φούξια. Αυτός ο σταθμός αγαπάει το μωβ. Αγαπάει και τις κορυφαίες μουσικές επιλογές. Πόσα χρώματα μπορεί να δημιουργήσει η μουσική στην ψυχή μας; Συντονίσου εδώ και αφέσου στο μωβ. Το 2006 τα Fm απέκτησαν χρώμα…",
                image:
                  "http://resources.live24.gr/resources/images/stations/ea5dcae3-d5c1-4ae5-8fdc-3d575a8c3ee3.png",
                source: "http://stream.radiojar.com:80/kk01hepkb.mp3",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d261",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d261",
              },
              {
                name: "Χρώμα FM 105.8",
                id: "Χρώμα FM 105.8",
                genre: "\u0027Εντεχνα",
                location: "Θεσσαλονίκη",
                website: "http://www.hroma.gr",
                info: "Ο Χρώμα 105.8 Είναι Ένας Από Τους Πιο Αγαπημένους Σταθμούς Της Θεσσαλονίκης Αλλά Και Ολόκληρης Της Κεντρικής Μακεδονίας. Καθημερινά Προσφέρει Έγκυρη Και Έγκαιρη Ενημέρωση Αλλά Και Ψυχαγωγία Στους Ακροατές Του, Βάλε Χρώμα Και Άκου !! Μέσα Από Το Live24.gr Ο Χρώμα 105.8 Ακούγεται Σε Όλη Την Ελλάδα Και Τον Κόσμο.",
                image:
                  "http://resources.live24.gr/resources/images/stations/b0f228ce-6570-4edd-a590-fd1480f4e203.png",
                source: "http://hroma1058thess.live24.gr:80/hroma1058thess",
                live24Url: "http://live24.gr/radio/generic.jsp?sid\u003d305",
                infoUrl: "http://live24.gr/stationinfo.jsp?sid\u003d305",
              },
            ],
            news: [],
          }),
          Object.entries(nn)
            .map(on)
            .reduce(cn, [])
            .map(function (e, n) {
              return Object(s.a)({}, e, { id: n });
            })),
        un = t(16),
        ln = function (e) {
          return (document.title = e
            ? "".concat(e, " - The Chillout App")
            : "The Chillout App");
        },
        dn = function (e) {
          var n,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 250;
          return function () {
            clearTimeout(n), (n = setTimeout(e, t));
          };
        };
      function fn() {
        var e = Object(y.a)([
          "\n      box-shadow: 0 13px 60px -5px ",
          ";\n    ",
        ]);
        return (
          (fn = function () {
            return e;
          }),
          e
        );
      }
      function mn() {
        var e = Object(y.a)([
          "\n  /* Styles */\n  border-radius: 10px;\n  position: relative;\n  height: 10rem;\n  width: 10rem;\n\n  /* Flex */\n  display: flex;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  ",
          "\n",
        ]);
        return (
          (mn = function () {
            return e;
          }),
          e
        );
      }
      var gn = b.c.div(mn(), function (e) {
        var n = e.shadowColor,
          t = void 0 === n ? "rgba(89, 89, 89, 0.1)" : n;
        return Object(b.b)(fn(), t);
      });
      function pn() {
        var e = Object(y.a)([
          "\n      transition: opacity 0.2s ease-in-out;\n      opacity: 0.3;\n    ",
        ]);
        return (
          (pn = function () {
            return e;
          }),
          e
        );
      }
      function hn() {
        var e = Object(y.a)([
          "\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  transition: opacity 0.2s ease-in-out;\n  opacity: 0;\n  ",
          "\n  background-color: ",
          "\n",
        ]);
        return (
          (hn = function () {
            return e;
          }),
          e
        );
      }
      var vn = b.c.div(
        hn(),
        function (e) {
          return e.show && Object(b.b)(pn());
        },
        function (e) {
          return "dark" === e.type ? "rgb(30, 30, 30)" : "rgb(180, 180, 180)";
        }
      );
      function bn() {
        var e = Object(y.a)([
          "\n  display: flex;\n  flex-direction: ",
          ";\n  justify-content: ",
          ";\n  align-items: ",
          ";\n",
        ]);
        return (
          (bn = function () {
            return e;
          }),
          e
        );
      }
      var wn = b.c.div(
          bn(),
          function (e) {
            return e.flexDirection;
          },
          function (e) {
            var n = e.justify;
            return void 0 === n ? "center" : n;
          },
          function (e) {
            var n = e.alignItems;
            return void 0 === n ? "center" : n;
          }
        ),
        yn = function (e) {
          return a.a.createElement(
            wn,
            Object.assign({ flexDirection: "column" }, e)
          );
        };
      function jn() {
        var e = Object(y.a)(["\n  margin-top: 0.8rem;\n  text-align: ", ";\n"]);
        return (
          (jn = function () {
            return e;
          }),
          e
        );
      }
      var On = Object(b.c)(yn)(jn(), function (e) {
        var n = e.alignItems,
          t = e.textAlign;
        if (t) return t;
        switch (n) {
          case "flex-end":
            return "end";
          case "center":
            return "center";
          default:
            return "start";
        }
      });
      function xn() {
        var e = Object(y.a)([
          "\n  text-transform: capitalize;\n\n  /* Truncate text */\n  width: 100%;\n  ",
          "\n",
        ]);
        return (
          (xn = function () {
            return e;
          }),
          e
        );
      }
      var kn = b.c.p(xn(), $);
      function En() {
        var e = Object(y.a)([
          "\n      border: 1px solid white;\n      background-color: rgba(230, 230, 230, 0.7);\n    ",
        ]);
        return (
          (En = function () {
            return e;
          }),
          e
        );
      }
      function Rn() {
        var e = Object(y.a)([
          "\n  /* Flex */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* Styles */\n  cursor: pointer;\n  color: white;\n  padding: 0.2rem;\n  background-color: rgba(45, 45, 45, 0.6);\n  font-size: ",
          ";\n\n  /* Border */\n  border-radius: 50%;\n  ",
          "\n",
        ]);
        return (
          (Rn = function () {
            return e;
          }),
          e
        );
      }
      var Sn = function (e) {
          var n = e.isPlaying,
            t = e.isHover;
          return n
            ? t
              ? a.a.createElement(k.e, null)
              : a.a.createElement(A.e, null)
            : a.a.createElement(k.f, null);
        },
        An = b.c.button(
          Rn(),
          function (e) {
            return e.theme.iconButton.big;
          },
          function (e) {
            return e.border && Object(b.b)(En());
          }
        ),
        Fn = function (e) {
          var n = e.isPlaying,
            t = e.isHover,
            r = Object(x.a)(e, ["isPlaying", "isHover"]);
          return a.a.createElement(
            An,
            Object.assign({ border: t || !n }, r),
            a.a.createElement(Sn, { isPlaying: n, isHover: t })
          );
        };
      function Pn() {
        var e = Object(y.a)([
          "\n      opacity: 1;\n      transform: scale(1.15);\n    ",
        ]);
        return (
          (Pn = function () {
            return e;
          }),
          e
        );
      }
      function Ln() {
        var e = Object(y.a)([
          "\n  /* Positioning */\n  background-size: cover;\n  width: 100%;\n  background-color: white;\n  background-repeat: no-repeat;\n  background-position: center;\n\n  /* Effects */\n  opacity: 0;\n  transform: scale(1);\n  filter: blur(7px);\n  transition: opacity 0.05s linear, transform 0.1s ease-out;\n\n  /* Blur effect. */\n  ",
          "\n",
        ]);
        return (
          (Ln = function () {
            return e;
          }),
          e
        );
      }
      var Mn = b.c.img(Ln(), function (e) {
        return e.showBlur && Object(b.b)(Pn());
      });
      function Cn() {
        var e = Object(y.a)([
          "\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (Cn = function () {
            return e;
          }),
          e
        );
      }
      var In = function (e) {
          var n = e.onClick,
            t = e.onMouseEnter,
            r = e.onMouseLeave,
            i = e.isActive,
            o = e.isHover,
            c = e.imageSource,
            s = e.title,
            u = e.loaded,
            l = e.onImageLoad,
            d = e.cardRef,
            f = Object(x.a)(e, [
              "onClick",
              "onMouseEnter",
              "onMouseLeave",
              "isActive",
              "isHover",
              "imageSource",
              "title",
              "loaded",
              "onImageLoad",
              "cardRef",
            ]);
          return a.a.createElement(
            "div",
            { ref: d, style: { width: "10rem" } },
            a.a.createElement(
              gn,
              Object.assign(
                { onMouseEnter: t, onMouseLeave: r, onClick: n },
                f
              ),
              a.a.createElement(vn, { show: !!o, type: "light" }),
              a.a.createElement(Ue, { src: c }),
              a.a.createElement(
                zn,
                null,
                a.a.createElement(Mn, {
                  src: c,
                  showBlur: o,
                  loaded: u,
                  onLoad: l,
                })
              ),
              a.a.createElement(
                zn,
                null,
                (o || i) && a.a.createElement(Fn, { isHover: o, isPlaying: i })
              )
            ),
            s &&
              a.a.createElement(
                On,
                { alignItems: "flex-start" },
                a.a.createElement(kn, null, s)
              )
          );
        },
        zn = b.c.div(Cn()),
        Wn = (function (e) {
          function n() {
            var e, t;
            Object(m.a)(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              ((t = Object(p.a)(
                this,
                (e = Object(h.a)(n)).call.apply(e, [this].concat(a))
              )).state = { hovered: !1, loaded: !1 }),
              (t.onMouseEnter = function () {
                return ne() && t.setState({ hovered: !0 });
              }),
              (t.onMouseLeave = function () {
                return ne() && t.setState({ hovered: !1 });
              }),
              (t.onImageLoad = function () {
                return t.setState({ loaded: !0 });
              }),
              t
            );
          }
          return (
            Object(v.a)(n, e),
            Object(g.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props.title;
                  return a.a.createElement(
                    In,
                    {
                      onMouseEnter: this.onMouseEnter,
                      onMouseLeave: this.onMouseLeave,
                      onClick: this.props.onClick,
                      isHover: this.state.hovered,
                      isActive: this.props.isActive,
                      imageSource: this.props.image,
                      title: e,
                      loaded: this.state.loaded,
                      onImageLoad: this.onImageLoad,
                      cardRef: this.props.cardRef,
                    },
                    this.props.children
                  );
                },
              },
            ]),
            n
          );
        })(a.a.Component),
        Bn = function (e) {
          return a.a.createElement(
            wn,
            Object.assign({ flexDirection: "row" }, e)
          );
        };
      function Dn() {
        var e = Object(y.a)([
          "\n  0% {\n    transform: rotate(180deg);\n  }\n\n  60% {\n    transform: rotate(-20deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n",
        ]);
        return (
          (Dn = function () {
            return e;
          }),
          e
        );
      }
      function Tn() {
        var e = Object(y.a)([
          "\n  0% {\n    transform: rotate(0deg);\n  }\n\n  60% {\n    transform: rotate(200deg);\n  }\n\n  100% {\n    transform: rotate(180deg);\n  }\n",
        ]);
        return (
          (Tn = function () {
            return e;
          }),
          e
        );
      }
      function Hn() {
        var e = Object(y.a)([
          "\n      visibility: hidden;\n      ",
          ":hover & {\n        visibility: visible;\n      }\n    ",
        ]);
        return (
          (Hn = function () {
            return e;
          }),
          e
        );
      }
      function Nn() {
        var e = Object(y.a)([
          "\n      /* transform: rotate(200deg) rotate(180deg); */\n      animation: ",
          " 0.3s ease-out;\n      transform: ",
          ";\n    ",
        ]);
        return (
          (Nn = function () {
            return e;
          }),
          e
        );
      }
      function Zn() {
        var e = Object(y.a)([
          "\n  font-size: 1.2rem;\n\n  /* transition: transform 0.2s ease-out; */\n  ",
          "\n\n  /* Show icon only when header is hovered.  */\n  ",
          "\n",
        ]);
        return (
          (Zn = function () {
            return e;
          }),
          e
        );
      }
      function _n() {
        var e = Object(y.a)(["\n  cursor: ", ";\n"]);
        return (
          (_n = function () {
            return e;
          }),
          e
        );
      }
      var Gn = Object(b.c)(Bn)(_n(), function (e) {
          return e.onClick && "pointer";
        }),
        Jn = function (e) {
          return a.a.createElement(
            Vn,
            { expanded: e.expanded, showOnlyOnHover: !1 },
            a.a.createElement(k.b, null)
          );
        },
        Vn = Object(b.c)(yn)(
          Zn(),
          function (e) {
            return Object(b.b)(
              Nn(),
              e.expanded ? Yn : Xn,
              !e.expanded && "rotate(180deg)"
            );
          },
          function (e) {
            return e.showOnlyOnHover && Object(b.b)(Hn(), Gn);
          }
        ),
        Xn = Object(b.d)(Tn()),
        Yn = Object(b.d)(Dn());
      function Qn() {
        var e = Object(y.a)(["\n  overflow: hidden;\n"]);
        return (
          (Qn = function () {
            return e;
          }),
          e
        );
      }
      function Un() {
        var e = Object(y.a)([
          "\n      cursor: pointer;\n      color: darkgray;\n      transition: color 0.1s linear;\n\n      &:hover {\n        color: #6d6c6c;\n      }\n\n      &:active {\n        transition: none;\n        color: ",
          ";\n        transform: scale(1.1);\n      }\n    ",
        ]);
        return (
          (Un = function () {
            return e;
          }),
          e
        );
      }
      function qn() {
        var e = Object(y.a)([
          "\n  /* Flex layout */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  /* Styles */\n  color: lightgray;\n  font-size: 1.5rem;\n  cursor: auto;\n\n  /* Styles if clickable */\n  ",
          "\n",
        ]);
        return (
          (qn = function () {
            return e;
          }),
          e
        );
      }
      var Kn = b.c.button(qn(), function (e) {
          return (
            e.onClick &&
            Object(b.b)(Un(), function (e) {
              return e.theme.colors.blue;
            })
          );
        }),
        $n = Object(b.c)(Bn)(Qn());
      function et() {
        var e = Object(y.a)([
          "\n  &::selection {\n    background-color: transparent;\n  }\n",
        ]);
        return (
          (et = function () {
            return e;
          }),
          e
        );
      }
      var nt = function (e) {
          var n = e.expanded,
            t = e.onExpand,
            r = e.onNext,
            i = e.onBack,
            o = e.title;
          return a.a.createElement(
            Bn,
            { justify: "space-between" },
            a.a.createElement(
              Gn,
              { onClick: t },
              t && a.a.createElement(Jn, { expanded: n }),
              a.a.createElement(tt, null, o)
            ),
            a.a.createElement(
              $n,
              null,
              a.a.createElement(
                Kn,
                { onClick: i },
                a.a.createElement(A.a, null)
              ),
              a.a.createElement(
                Kn,
                { onClick: r },
                a.a.createElement(A.b, null)
              )
            )
          );
        },
        tt = b.c.h4(et());
      function rt() {
        var e = Object(y.a)(["\n  margin: 0 0.3rem;\n  font-size: 1.5rem;\n"]);
        return (
          (rt = function () {
            return e;
          }),
          e
        );
      }
      function at() {
        var e = Object(y.a)([
          "\n  color: #afafaf;\n  text-align: center;\n  display: flex;\n  align-items: center;\n",
        ]);
        return (
          (at = function () {
            return e;
          }),
          e
        );
      }
      function it() {
        var e = Object(y.a)([
          "\n  flex: 1;\n  background-color: #f4f4f4;\n  margin: 0.3rem 0.75rem;\n  padding: 0 0.5rem;\n  border-radius: 15px;\n\n  /* Flex layout */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  text-align: center;\n",
        ]);
        return (
          (it = function () {
            return e;
          }),
          e
        );
      }
      var ot = b.c.div(it()),
        ct = b.c.p(at()),
        st = Object(b.c)(k.c)(rt()),
        ut = function (e) {
          return a.a.createElement(
            ot,
            null,
            e.children ||
              (function () {
                switch (e.message) {
                  case "addFavorite":
                    return a.a.createElement(
                      ct,
                      null,
                      a.a.createElement("span", null, "Click the"),
                      a.a.createElement(st, null),
                      a.a.createElement(
                        "span",
                        null,
                        "icon next to a radio to add it to your favorites!"
                      )
                    );
                  default:
                    return a.a.createElement(
                      ct,
                      null,
                      "This collection is empty :'("
                    );
                }
              })()
          );
        };
      function lt() {
        var e = Object(y.a)([
          "\n  margin-left: 0.7rem;\n\n  &:last-child {\n    margin-right: 0.7rem;\n  }\n",
        ]);
        return (
          (lt = function () {
            return e;
          }),
          e
        );
      }
      function dt() {
        var e = Object(y.a)([
          "\n      &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        background: linear-gradient(\n          90deg,\n          rgba(149, 149, 149, 0) 0%,\n          rgba(149, 149, 149, 0.5) 100%\n        );\n        /* z-index: -1; */\n        animation: ",
          " 0.75s ease-in-out;\n      }\n    ",
        ]);
        return (
          (dt = function () {
            return e;
          }),
          e
        );
      }
      function ft() {
        var e = Object(y.a)([
          "\n  /* overflow: visible; */\n  width: 100%;\n  min-height: 12rem;\n  position: relative;\n  display: flex;\n  background-color: none;\n  justify-content: flex-start;\n  animation: ",
          " ease-out 0.2s;\n\n  /* Can click next */\n  ",
          "\n",
        ]);
        return (
          (ft = function () {
            return e;
          }),
          e
        );
      }
      function mt() {
        var e = Object(y.a)([
          "\n  from {\n    opacity: 1;\n    visibility: visible;\n    width: 8%;\n  }\n\n  to {\n    opacity: 0;\n    visibility: hidden;\n    width: 5%;\n  }\n",
        ]);
        return (
          (mt = function () {
            return e;
          }),
          e
        );
      }
      function gt() {
        var e = Object(y.a)([
          "\n  from {\n    transform: translate3d(-3px, -2px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n",
        ]);
        return (
          (gt = function () {
            return e;
          }),
          e
        );
      }
      var pt = Object(b.d)(gt()),
        ht = Object(b.d)(mt()),
        vt = b.c.ul(ft(), pt, function (e) {
          return e.highlightMore && Object(b.b)(dt(), ht);
        }),
        bt = b.c.li(lt()),
        wt = a.a.forwardRef(function (e, n) {
          var t = e.radios,
            r = e.show,
            i = e.cardRef,
            o = e.isPlaying,
            c = e.selectedRadio;
          Object(x.a)(e, [
            "radios",
            "show",
            "cardRef",
            "isPlaying",
            "selectedRadio",
          ]);
          return a.a.createElement(
            "section",
            null,
            a.a.createElement(nt, {
              title: e.title,
              onExpand: e.onExpand,
              expanded: e.expanded,
              onNext: e.expanded && e.canClickNext ? e.onNext : void 0,
              onBack: e.expanded && e.canClickBack ? e.onBack : void 0,
            }),
            r &&
              a.a.createElement(
                vt,
                { ref: n, highlightMore: e.canClickNext },
                t.length
                  ? t.map(function (n, t) {
                      return a.a.createElement(
                        bt,
                        { key: n.id, ref: 0 === t ? i : null },
                        a.a.createElement(Wn, {
                          title: n.name,
                          image: n.image,
                          onClick: e.onSelectRadio(n.id),
                          isActive: c === n.id && o,
                        })
                      );
                    })
                  : a.a.createElement(ut, { message: "addFavorite" })
              )
          );
        }),
        yt = (function (e) {
          function n() {
            var e, t;
            Object(m.a)(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((t = Object(p.a)(
                this,
                (e = Object(h.a)(n)).call.apply(e, [this].concat(i))
              )).state = { renderIndex: 0, renderWidth: 1 }),
              (t.carouselRef = a.a.createRef()),
              (t.cardRef = a.a.createRef()),
              (t.handleNext = function () {
                if (!t.reachedEndOfData)
                  return t.setState(function (e) {
                    return { renderIndex: e.renderIndex + e.renderWidth };
                  });
              }),
              (t.handleBack = function () {
                t.reachedStartOfData ||
                  t.setState(function (e) {
                    var n = e.renderIndex - e.renderWidth;
                    return n < 0 ? { renderIndex: 0 } : { renderIndex: n };
                  });
              }),
              (t.handleExpand = function () {
                return t.props.handleExpand(t.updateRenderWidth);
              }),
              (t.updateRenderWidth = function () {
                var e = Object(un.a)(t),
                  n = e.cardWidth,
                  r = e.carouselWidth;
                if (0 !== n && 0 !== r) {
                  var a = Math.floor(r / n);
                  t.state.renderWidth !== a && t.setState({ renderWidth: a });
                }
              }),
              (t.handleWindowResize = dn(t.updateRenderWidth)),
              t
            );
          }
          return (
            Object(v.a)(n, e),
            Object(g.a)(n, [
              {
                key: "componentDidUpdate",
                value: function (e, n) {
                  if (0 === e.data.length && 1 === n.renderWidth)
                    return this.updateRenderWidth();
                },
              },
              {
                key: "componentWillUpdate",
                value: function (e) {
                  if (e.data.length < this.props.data.length)
                    return (this.state.renderIndex = 0);
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  window.addEventListener("resize", this.handleWindowResize),
                    this.updateRenderWidth();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("resize", this.handleWindowResize);
                },
              },
              {
                key: "render",
                value: function () {
                  return a.a.createElement(wt, {
                    title: this.props.title,
                    expanded: this.props.expanded,
                    onSelectRadio: this.props.onSelectRadio,
                    onExpand: this.handleExpand,
                    canClickNext: !this.reachedEndOfData,
                    canClickBack: !this.reachedStartOfData,
                    onNext: this.handleNext,
                    onBack: this.handleBack,
                    radios: this.renderWindow,
                    show: this.props.expanded,
                    ref: this.carouselRef,
                    cardRef: this.cardRef,
                    selectedRadio: this.props.selectedRadio,
                    isPlaying: this.props.isPlaying,
                  });
                },
              },
              {
                key: "reachedEndOfData",
                get: function () {
                  return (
                    this.state.renderIndex + this.state.renderWidth >=
                    this.props.data.length
                  );
                },
              },
              {
                key: "reachedStartOfData",
                get: function () {
                  return 0 === this.state.renderIndex;
                },
              },
              {
                key: "cardWidth",
                get: function () {
                  var e = this.cardRef.current;
                  return e && e.offsetWidth
                    ? (function (e) {
                        var n = parseInt(e, 10);
                        return isNaN(n) ? 0 : n;
                      })(
                        window
                          .getComputedStyle(e)
                          .getPropertyValue("margin-left")
                      ) +
                        e.offsetWidth +
                        1
                    : 0;
                },
              },
              {
                key: "carouselWidth",
                get: function () {
                  var e = this.carouselRef.current;
                  return e && e.offsetWidth ? e.offsetWidth : 0;
                },
              },
              {
                key: "renderWindow",
                get: function () {
                  return this.props.data.slice(
                    this.state.renderIndex,
                    this.state.renderIndex + this.state.renderWidth
                  );
                },
              },
            ]),
            n
          );
        })(r.Component);
      function jt() {
        var e = Object(y.a)([
          "\n  from {\n    transform: translateY(+10%);\n  }\n\n  to {\n    transform: translateY(0%);\n  }\n",
        ]);
        return (
          (jt = function () {
            return e;
          }),
          e
        );
      }
      function Ot() {
        var e = Object(y.a)([
          "\n      pointer-events: auto;\n      visibility: visible;\n      opacity: 1;\n      animation: ",
          " 0.2s ease-out forwards;\n    ",
        ]);
        return (
          (Ot = function () {
            return e;
          }),
          e
        );
      }
      function xt() {
        var e = Object(y.a)([
          "\n  /* Positioning */\n  position: fixed;\n  width: 100%;\n  height: calc(100vh - 4rem); /* Minus the height of the player */\n\n  /* Flex */\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n\n  /* background-color: ",
          "; */\n  background-color: white;\n  transition: all 0.2s ease-out;\n  z-index: 5;\n  overflow-y: auto;\n  pointer-events: none;\n  visibility: hidden;\n  opacity: 0;\n\n  /* Open */\n  ",
          "\n",
        ]);
        return (
          (xt = function () {
            return e;
          }),
          e
        );
      }
      yt.defaultProps = { title: "Your Favorites" };
      var kt = b.c.ul(
          xt(),
          function (e) {
            return e.theme.colors.lightblue;
          },
          function (e) {
            return e.open && Object(b.b)(Ot(), Et);
          }
        ),
        Et = Object(b.d)(jt());
      function Rt() {
        var e = Object(y.a)(["\n  margin: 1rem;\n  cursor: pointer;\n"]);
        return (
          (Rt = function () {
            return e;
          }),
          e
        );
      }
      var St = function (e) {
          return a.a.createElement(
            "aside",
            null,
            a.a.createElement(
              kt,
              { open: e.open },
              e.data.map(function (n) {
                return a.a.createElement(
                  At,
                  { onClick: e.onRadioClick(n.id), key: n.id },
                  a.a.createElement(Wn, {
                    image: n.image,
                    title: n.name,
                    isActive: e.selectedRadio === n.id && e.isPlaying,
                  })
                );
              })
            )
          );
        },
        At = b.c.li(Rt());
      function Ft() {
        var e = Object(y.a)([
          "\n  margin: auto;\n  animation: ",
          " 0.1s ease-out forwards;\n",
        ]);
        return (
          (Ft = function () {
            return e;
          }),
          e
        );
      }
      function Pt() {
        var e = Object(y.a)([
          "\n  margin: auto;\n  animation: ",
          " 0.1s ease-out forwards;\n",
        ]);
        return (
          (Pt = function () {
            return e;
          }),
          e
        );
      }
      function Lt() {
        var e = Object(y.a)([
          "\n  /* Positioning */\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: 5rem;\n  right: 1rem;\n  z-index: 10;\n\n  /* Content styles */\n  color: white;\n  font-size: 1.3rem;\n\n  /* Styles */\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  background-color: ",
          ";\n  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.5);\n  animation: ",
          " 0.3s ease-out;\n  transition: all 0.1s ease-out;\n\n  &:active {\n    transform: scale(0.9);\n    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);\n  }\n",
        ]);
        return (
          (Lt = function () {
            return e;
          }),
          e
        );
      }
      function Mt() {
        var e = Object(y.a)([
          "\n  from {\n    transform: rotate(30deg);\n  }\n\n  to {\n    transform: rotate(0);\n  }\n",
        ]);
        return (
          (Mt = function () {
            return e;
          }),
          e
        );
      }
      function Ct() {
        var e = Object(y.a)([
          "\n  from {\n    transform: rotate(-45deg);\n  }\n\n  to {\n    transform: rotate(0);\n  }\n",
        ]);
        return (
          (Ct = function () {
            return e;
          }),
          e
        );
      }
      function It() {
        var e = Object(y.a)([
          "\n    0% {\n      transform: scale(0);\n    }\n\n    70% {\n      transform: scale(1.2);\n    }\n\n    100% {\n      transform: scale(1);\n    }\n  ",
        ]);
        return (
          (It = function () {
            return e;
          }),
          e
        );
      }
      var zt = Object(b.d)(It()),
        Wt = Object(b.d)(Ct()),
        Bt = Object(b.d)(Mt()),
        Dt = b.c.button(
          Lt(),
          function (e) {
            return e.theme.colors.purple;
          },
          zt
        ),
        Tt = Object(b.c)(k.a)(Pt(), Wt),
        Ht = Object(b.c)(k.c)(Ft(), Bt),
        Nt = function (e) {
          var n = e.isOpen,
            t = (e.children, Object(x.a)(e, ["isOpen", "children"]));
          return a.a.createElement(
            Dt,
            Object.assign(
              { title: n ? "Close Favorites" : "Open Favorites" },
              t
            ),
            n ? a.a.createElement(Tt, null) : a.a.createElement(Ht, null)
          );
        };
      function Zt() {
        var e = Object(y.a)([
          "\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  padding-bottom: 1rem;\n  background-color: #fafafa;\n",
        ]);
        return (
          (Zt = function () {
            return e;
          }),
          e
        );
      }
      var _t = function (e) {
          var n = e.favorites,
            t = e.favoritesOpened,
            r = e.isPlaying,
            i = e.expandFavorites,
            o = e.togglePlayRadio,
            c = e.openFavorites,
            s = e.isLoading,
            u = e.activeRadioId,
            l = e.pendingRadioId;
          return ne()
            ? a.a.createElement(
                Gt,
                null,
                a.a.createElement(yt, {
                  data: n,
                  handleExpand: i,
                  expanded: t,
                  isPlaying: r || s,
                  selectedRadio: l || u,
                  onSelectRadio: o,
                })
              )
            : !ne() && n.length
            ? a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(St, {
                  open: t,
                  data: n,
                  onRadioClick: o,
                  isPlaying: r || s,
                  selectedRadio: l || u,
                }),
                a.a.createElement(Nt, { isOpen: t, onClick: c })
              )
            : null;
        },
        Gt = b.c.div(Zt()),
        Jt = (t(43), 0.6),
        Vt = { favorites: "favorites", active: "active" },
        Xt = (function (e) {
          function n() {
            var e, t;
            Object(m.a)(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((t = Object(p.a)(
                this,
                (e = Object(h.a)(n)).call.apply(e, [this].concat(i))
              )).getFavoritesFromLocalStorage = function () {
                var e = localStorage.getItem(Vt.favorites);
                if (e) return Object.values(JSON.parse(e));
              }),
              (t.getActiveRadioFromLocalStorage = function () {
                var e = localStorage.getItem(Vt.active);
                if (e) return JSON.parse(e).id;
              }),
              (t.state = {
                isScreenLarge: ne(),
                appReady: !1,
                favoritesOpened: ne(),
                pendingRadioId: t.getActiveRadioFromLocalStorage(),
                activeRadioId: t.getActiveRadioFromLocalStorage(),
                favorites: t.getFavoritesFromLocalStorage() || [],
                isPlaying: !1,
                isLoading: !1,
                audioMuted: !1,
                volume: Jt,
              }),
              (t.audioRef = a.a.createRef()),
              (t.resetAudioSrc = "javascript:void(0)"),
              (t.changeAudioVolume = function (e) {
                var n = t.audioRef.current;
                if (n) {
                  var r = e.target.value;
                  return (
                    (n.volume = r),
                    n.muted && (n.muted = !1),
                    t.setState({ volume: r, audioMuted: !1 })
                  );
                }
              }),
              (t.setVolumeState = dn(function () {
                var e = t.audioRef.current;
                e && t.setState({ volume: e.volume, audioMuted: !1 });
              }, 100)),
              (t.muteAudio = function () {
                var e = t.audioRef.current;
                e &&
                  t.setState(function (n) {
                    return (
                      (e.muted = !n.audioMuted), { audioMuted: !n.audioMuted }
                    );
                  });
              }),
              (t.handleAudioStopped = function (e) {
                return t.setState({ isPlaying: !1 }, ln);
              }),
              (t.handleAudioError = function (e) {
                return sn.find(function (n) {
                  return n.source === e.target.src;
                })
                  ? t.setState(function (e) {
                      return {
                        isLoading: !1,
                        isPlaying: !1,
                        pendingRadioId: e.activeRadioId,
                      };
                    }, ln)
                  : t.setState({ isLoading: !1, isPlaying: !1 }, ln);
              }),
              (t.handleAudioStarted = function (e) {
                var n = sn.find(function (n) {
                  return n.source === e.target.src;
                });
                n &&
                  t.setState(
                    { isPlaying: !0, isLoading: !1, activeRadioId: n.id },
                    function () {
                      ln(n.name), t.saveActiveRadioToLocalStorage(n);
                    }
                  );
              }),
              (t.saveActiveRadioToLocalStorage = function (e) {
                try {
                  localStorage.setItem(Vt.active, JSON.stringify(e));
                } catch (n) {
                  console.error(n);
                }
              }),
              (t.handleLoadStarted = function (e) {
                var n = t.audioRef.current,
                  r = sn.find(function (n) {
                    return n.source === e.target.src;
                  });
                n &&
                  n.src !== t.resetAudioSrc &&
                  t.setState({
                    isLoading: !0,
                    isPlaying: !1,
                    pendingRadioId: r && r.id,
                  });
              }),
              (t.togglePlayRadio = function (e) {
                return Object(f.a)(
                  d.a.mark(function n() {
                    var r, a;
                    return d.a.wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if ((r = t.audioRef.current)) {
                                n.next = 3;
                                break;
                              }
                              return n.abrupt("return");
                            case 3:
                              if (void 0 !== e) {
                                n.next = 5;
                                break;
                              }
                              return n.abrupt(
                                "return",
                                alert("Select a radio first!")
                              );
                            case 5:
                              if (
                                !(
                                  (t.state.activeRadioId === e &&
                                    t.state.isPlaying) ||
                                  (t.state.pendingRadioId === e &&
                                    t.state.isLoading)
                                )
                              ) {
                                n.next = 9;
                                break;
                              }
                              return (
                                r.pause(),
                                (r.src = t.resetAudioSrc),
                                n.abrupt("return", r.load())
                              );
                            case 9:
                              return (
                                (a = sn.find(function (n) {
                                  return n.id === e;
                                })),
                                (r.src = a.source),
                                (n.next = 13),
                                r.play()
                              );
                            case 13:
                              return n.abrupt("return", n.sent);
                            case 14:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      this
                    );
                  })
                );
              }),
              (t.addFavorite = function (e) {
                return function (n) {
                  n.stopPropagation(),
                    t.setState(function (n) {
                      return n.favorites.find(function (n) {
                        return n.id === e.id;
                      })
                        ? {
                            favorites: n.favorites.filter(function (n) {
                              return n.id !== e.id;
                            }),
                          }
                        : { favorites: [e].concat(Object(u.a)(n.favorites)) };
                    }, t.saveFavoritesToLocalStorage);
                };
              }),
              (t.saveFavoritesToLocalStorage = function () {
                var e = t.state.favorites.reduce(function (e, n) {
                  return Object(s.a)({}, e, Object(c.a)({}, n.id, n));
                }, {});
                try {
                  localStorage.setItem(Vt.favorites, JSON.stringify(e));
                } catch (n) {
                  console.error(n);
                }
              }),
              (t.expandFavorites = function (e) {
                t.setState(function (e) {
                  return { favoritesOpened: !e.favoritesOpened };
                }, e);
              }),
              (t.openFavorites = function () {
                return t.setState(function (e) {
                  return { favoritesOpened: !e.favoritesOpened };
                });
              }),
              (t.toggleFavoritesComponent = dn(function () {
                ne() !== t.state.isScreenLarge &&
                  t.setState(function (e) {
                    return {
                      isScreenLarge: !e.isScreenLarge,
                      favoritesOpened: !e.isScreenLarge,
                    };
                  });
              })),
              (t.renderComponentTree = function () {
                return t.setState({ appReady: !0 });
              }),
              t
            );
          }
          return (
            Object(v.a)(n, e),
            Object(g.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.audioRef.current.volume = Jt),
                    window.addEventListener("load", this.renderComponentTree),
                    window.addEventListener(
                      "resize",
                      this.toggleFavoritesComponent
                    ),
                    (function () {
                      var e =
                        "color: rgb(255, 32, 117); font-weight: bold; font-size: 2rem;";
                      console.log(
                        "%cMade with \u2764\ufe0f and %cReact%c!",
                        e,
                        e + "color: #61DAFB;",
                        e
                      ),
                        console.log(
                          "%chttps://github.com/kostaslib",
                          "color: #052fb8;"
                        );
                    })();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("load", this.renderComponentTree),
                    window.removeEventListener(
                      "resize",
                      this.toggleFavoritesComponent
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(
                      w.Provider,
                      { value: this.state.appReady },
                      a.a.createElement(
                        "div",
                        {
                          style: {
                            opacity: this.state.appReady ? 1 : 0,
                            transition: "opacity 0.5s",
                          },
                        },
                        a.a.createElement(
                          b.a,
                          { theme: ee },
                          a.a.createElement(
                            a.a.Fragment,
                            null,
                            a.a.createElement(
                              "aside",
                              {
                                style: {
                                  position: "fixed",
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  zIndex: 10,
                                },
                              },
                              this.state.isLoading &&
                                a.a.createElement(an, null)
                            ),
                            a.a.createElement(
                              "main",
                              { style: { paddingBottom: "6rem" } },
                              a.a.createElement(
                                _t,
                                Object.assign(
                                  {
                                    expandFavorites: this.expandFavorites,
                                    openFavorites: this.openFavorites,
                                    togglePlayRadio: this.togglePlayRadio,
                                  },
                                  this.state
                                )
                              ),
                              a.a.createElement(
                                "ul",
                                null,
                                sn.map(function (n) {
                                  return a.a.createElement(
                                    "li",
                                    { key: n.id },
                                    a.a.createElement(qe, {
                                      name: n.name,
                                      image: n.image,
                                      label: n.label,
                                      handleAddFavorite: e.addFavorite(n),
                                      handlePlay: e.togglePlayRadio(n.id),
                                      selected: n.id === e.state.pendingRadioId,
                                      isFavorite: !!e.state.favorites.find(
                                        function (e) {
                                          return e.id === n.id;
                                        }
                                      ),
                                      isPlaying:
                                        (e.state.isLoading &&
                                          e.state.pendingRadioId === n.id) ||
                                        (e.state.isPlaying &&
                                          e.state.activeRadioId === n.id),
                                    })
                                  );
                                })
                              )
                            ),
                            a.a.createElement(Ee, {
                              isPlaying:
                                this.state.isPlaying || this.state.isLoading,
                              handlePlay: this.togglePlayRadio(
                                this.state.pendingRadioId
                              ),
                              onMuteAudio: this.muteAudio,
                              muted: this.state.audioMuted,
                              changeAudioVolume: this.changeAudioVolume,
                              volume: this.state.volume,
                              radio: sn.find(function (n) {
                                return n.id === e.state.pendingRadioId;
                              }),
                              isRadioFavorite: !!this.state.favorites.find(
                                function (n) {
                                  return n.id === e.state.pendingRadioId;
                                }
                              ),
                              handleAddFavorite: this.addFavorite(
                                sn.find(function (n) {
                                  return n.id === e.state.pendingRadioId;
                                })
                              ),
                            })
                          )
                        ),
                        a.a.createElement(
                          "audio",
                          {
                            ref: this.audioRef,
                            onLoadStart: this.handleLoadStarted,
                            onPlaying: this.handleAudioStarted,
                            onError: this.handleAudioError,
                            onEnded: this.handleAudioStopped,
                            onSuspend: this.handleAudioStopped,
                          },
                          " Your browser doesn't support the audio element. :( "
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component);
      o.a.render(a.a.createElement(Xt, null), document.getElementById("root"));
    },
  },
  [[27, 1, 2]],
]);
//# sourceMappingURL=main.c62e1bae.chunk.js.map
