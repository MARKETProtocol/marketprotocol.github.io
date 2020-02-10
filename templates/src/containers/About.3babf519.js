exports.ids = [7];
exports.modules = {

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroInfo = exports.TextWrapper = exports.HeroArt = undefined;

var _row = __webpack_require__(9);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(11);

var _col2 = _interopRequireDefault(_col);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  text-align: right;\n  margin-top: 90px;\n  img {\n    width: 90%;\n  }\n\n  @media (max-width: ', ') {\n    img {\n      width: 100%;\n      margin-top: -10%;\n    }\n  }\n'], ['\n  text-align: right;\n  margin-top: 90px;\n  img {\n    width: 90%;\n  }\n\n  @media (max-width: ', ') {\n    img {\n      width: 100%;\n      margin-top: -10%;\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 50px 0;\n\n  @media (max-width: ', ') {\n    padding: 50px 25px;\n  }\n'], ['\n  padding: 50px 0;\n\n  @media (max-width: ', ') {\n    padding: 50px 25px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: #fff;\n  font-weight: 300;\n  margin-top: 20px;\n\n  @media ', ' {\n    font-size: 14px;\n  }\n  @media ', ' {\n    font-size: 18px;\n  }\n\n  @media ', ' {\n    font-size: 22px;\n  }\n\n  @media ', ' {\n    font-size: 24px;\n  }\n'], ['\n  color: #fff;\n  font-weight: 300;\n  margin-top: 20px;\n\n  @media ', ' {\n    font-size: 14px;\n  }\n  @media ', ' {\n    font-size: 18px;\n  }\n\n  @media ', ' {\n    font-size: 22px;\n  }\n\n  @media ', ' {\n    font-size: 24px;\n  }\n']);

__webpack_require__(10);

__webpack_require__(12);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _header = __webpack_require__(136);

var _header2 = _interopRequireDefault(_header);

var _breakpoints = __webpack_require__(5);

var _Styles = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroArt = exports.HeroArt = _styledComponents2.default.div(_templateObject, _breakpoints.size.tabletL);
var TextWrapper = exports.TextWrapper = _styledComponents2.default.div(_templateObject2, _breakpoints.size.tablet);
var HeroInfo = exports.HeroInfo = _styledComponents2.default.p(_templateObject3, _breakpoints.device.mobileS, _breakpoints.device.mobileL, _breakpoints.device.laptop, _breakpoints.device.laptopL);

var Hero = function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { style: {
            background: '#181E26',
            minHeight: '300px'
          } },
        _react2.default.createElement(
          _Styles.ContainerWrapper,
          null,
          _react2.default.createElement(
            _row2.default,
            { type: 'flex', className: 'hero', align: 'middle' },
            _react2.default.createElement(
              _col2.default,
              { xs: 24, sm: 24, md: 14, lg: 12, xl: 12 },
              _react2.default.createElement(
                TextWrapper,
                null,
                _react2.default.createElement(
                  _Styles.HeroHeader,
                  null,
                  'About'
                ),
                _react2.default.createElement(
                  _Styles.HeroDescription,
                  null,
                  'Crypto as an asset class is growing quickly with many promising projects in a variety of applications, but with rapid progress come challenges.'
                ),
                _react2.default.createElement(
                  _Styles.HeroDescription,
                  null,
                  'Due to price volatility, crypto assets can\u2019t effectively function as a medium of exchange or in token applications. This volatility further limits crypto as a store of value relative to other digital or traditional assets. Until these challenges are addressed, the blockchain space cannot achieve scale.'
                )
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { xs: 0, sm: 0, md: 10, lg: 12, xl: 12 },
              _react2.default.createElement(
                HeroArt,
                null,
                _react2.default.createElement('img', { alt: 'about MARKET', src: _header2.default })
              )
            )
          )
        )
      );
    }
  }]);

  return Hero;
}(_react2.default.Component);

exports.default = Hero;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/header.43c33133.svg";

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageContainer = exports.Wrapper = exports.HeaderText = undefined;

var _row = __webpack_require__(9);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(11);

var _col2 = _interopRequireDefault(_col);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding-bottom: 40px;\n  text-align: center;\n\n  @media ', ' and (max-width: ', ') {\n    padding: 60px 20px 20px 20px;\n  }\n'], ['\n  padding-bottom: 40px;\n  text-align: center;\n\n  @media ', ' and (max-width: ', ') {\n    padding: 60px 20px 20px 20px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  justify-content: center;\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n\n  @media ', ' {\n    height: 350px;\n  }\n'], ['\n  background-color: ', ';\n  justify-content: center;\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n\n  @media ', ' {\n    height: 350px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-bottom: 10px;\n'], ['\n  margin-bottom: 10px;\n']);

__webpack_require__(10);

__webpack_require__(12);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _short_selling = __webpack_require__(138);

var _short_selling2 = _interopRequireDefault(_short_selling);

var _hedging = __webpack_require__(139);

var _hedging2 = _interopRequireDefault(_hedging);

var _custody = __webpack_require__(140);

var _custody2 = _interopRequireDefault(_custody);

var _Styles = __webpack_require__(23);

var _breakpoints = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderText = exports.HeaderText = _Styles.MarketHeader.extend(_templateObject, _breakpoints.device.mobileS, _breakpoints.size.mobileL);
var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.bg || '#fff';
}, _breakpoints.device.mobileL);
var ImageContainer = exports.ImageContainer = _styledComponents2.default.img(_templateObject3);

var Derivatives = function (_React$Component) {
  _inherits(Derivatives, _React$Component);

  function Derivatives() {
    _classCallCheck(this, Derivatives);

    return _possibleConstructorReturn(this, (Derivatives.__proto__ || Object.getPrototypeOf(Derivatives)).apply(this, arguments));
  }

  _createClass(Derivatives, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Styles.Section,
        { bg: '#f0f0f0' },
        _react2.default.createElement(
          _Styles.ContainerWrapper,
          null,
          _react2.default.createElement(
            _Styles.SectionHeader,
            { color: '#000' },
            'How Derivatives can help'
          ),
          _react2.default.createElement(
            _row2.default,
            { type: 'flex' },
            _react2.default.createElement(
              _col2.default,
              { xs: 24, md: 12, lg: 8 },
              _react2.default.createElement(
                Wrapper,
                { bg: '#fff' },
                _react2.default.createElement(ImageContainer, { src: _short_selling2.default, alt: 'Short Selling' }),
                _react2.default.createElement(
                  _Styles.SecondaryHeader,
                  null,
                  'Short Selling'
                ),
                _react2.default.createElement(
                  _Styles.SecondaryDescription,
                  null,
                  'Can help reduce volatility'
                )
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { xs: 24, md: 12, lg: 8 },
              _react2.default.createElement(
                Wrapper,
                { bg: '#181E26' },
                _react2.default.createElement(ImageContainer, { src: _hedging2.default, alt: 'Hedging' }),
                _react2.default.createElement(
                  _Styles.SecondaryHeader,
                  { style: {
                      color: '#ffffff'
                    } },
                  'Hedging'
                ),
                _react2.default.createElement(
                  _Styles.SecondaryDescription,
                  { style: {
                      color: '#ffffff'
                    } },
                  'Essential for risk mitigation'
                )
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { xs: 24, md: 24, lg: 8 },
              _react2.default.createElement(
                Wrapper,
                { bg: '#00E2C1' },
                _react2.default.createElement(ImageContainer, { src: _custody2.default, alt: 'Custody Of Assets' }),
                _react2.default.createElement(
                  _Styles.SecondaryHeader,
                  null,
                  'Custody of Assets'
                ),
                _react2.default.createElement(
                  _Styles.SecondaryDescription,
                  null,
                  'Price exposure is simpler'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Derivatives;
}(_react2.default.Component);

exports.default = Derivatives;

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI3IiBoZWlnaHQ9IjE5NSIgdmlld0JveD0iMCAwIDEyNyAxOTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTE3LjUxMiA2Ny40MjYyTDAgMFYxMTEuNjc1TDExNy41MTIgMTc5LjEwM1Y2Ny40MjYyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wNDM5NSAxLjgwOTA4KSIgZmlsbD0iIzE4MUUyNiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkwLjkxMDYgOTIuMDEyNkw4Mi44MzcxIDk2LjU0MjlMNDkuOTk4MSA0MC40MTk1TDM1LjUwNzkgNDguNjI1OUw2LjgyODc3IDBMMCAzLjkwODgyTDM1LjUyNzcgNjQuMjIxMkw1MC4wNjA2IDU1Ljk5MDNMNzUuOTc1NCAxMDAuMzk5TDY3LjY2NDkgMTA1LjA1OUw5Ni43MjE3IDEyOC40NDdMOTAuOTEwNiA5Mi4wMTI2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuNTA2OCAyMi42MTQpIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS44NzczIDM2LjMxNzlMNS45MTg0IDBMMCAzLjI5NzEyTDUuOTU5NzQgMzkuNjE1TDExLjg3NzMgMzYuMzE3OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk5Ljc4MTIgMTE4LjIxNikiIGZpbGw9IiMzOTk4OEIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOC44ODYgNTcuMTg0OUw1LjgxMjcyIDBMMCAzLjMxNzc0TDMzLjA3NDEgNjAuNTAxOEwzOC44ODYgNTcuMTg0OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU5LjM5MjYgNjUuNjE0NikiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNC4zNTM0IDQ5LjcxMTJMNS42MDM4IDBMMCAzLjMyMDAxTDI4Ljc0OTYgNTMuMDMxMkwzNC4zNTM0IDQ5LjcxMTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi40MjI5IDI0LjUwOTIpIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTAuNTcxNyA5Mi44Nzg2TDgyLjUyOSA5Ny40NTE2TDQ5LjgxMTcgNDAuNzk5OUwzNS4zNzU1IDQ5LjA4MzZMNi44MDMzIDBMMCAzLjk0NTYyTDM1LjM5NTIgNjQuODI1Nkw0OS44NzQgNTYuNTE2NEw3NS42OTIxIDEwMS4zNDRMNjcuNDEyNiAxMDYuMDQ4TDk2LjM2MTggMTI5LjY1Nkw5MC41NzE3IDkyLjg3ODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ljg2MzI4IDI4LjE2OTEpIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAyLjE3MDQzVjExMi45MzlMMy4zODY1MiAxMTAuNzY3VjBMMCAyLjE3MDQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIxLjg4MSA2Ny42OTQ5KSIgZmlsbD0iIzExMTExMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuODc1MTEgMEwwIDIuMTk4MDFMMTE2Ljg3NCA2OS44OTlMMTIwLjc0OCA2Ny43MDE4TDMuODc1MTEgMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDgyMDMgMC4zMDA1MzcpIiBmaWxsPSIjQjlCRkNDIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS45MjAyMyAwTDEyNS42NDcgNjkuMjk0NkwxMTkuNzI3IDcyLjY1MDFMMCAzLjM1NDc0TDUuOTIwMjMgMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNTI0NDE0IDEyMS44MykiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuNDQzKSBzY2FsZSgzOC44ODYgNjAuNTAxOCkgcm90YXRlKDkwKSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzNDhDODAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkQ3ODZFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDE3LjE3NjcpIHNjYWxlKDM0LjM1MzQgNTMuMDMxMikgcm90YXRlKDkwKSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzOTk4OEIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzI4NTc5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4LjE4MDkgMy44ODc4MSkgc2NhbGUoOTMuNDcyNCAxMjUuNzY4KSByb3RhdGUoOTApIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwRTJDMSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEMzQTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI3IiBoZWlnaHQ9IjE5NiIgdmlld0JveD0iMCAwIDEyNyAxOTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTE2LjY2NyA2Ny45Njk5TDAgMFYxMTIuNTc1TDExNi42NjcgMTgwLjU0NVY2Ny45Njk5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4yMDg5OCAwLjY0NzA5NSkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAyLjIwOThWMTE0Ljk0NEwzLjQ5NjY0IDExMi43MzRWMEwwIDIuMjA5OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4xMSA2Ni45MDA5KSIgZmlsbD0iIzRFNTU2OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuODYyNyAwTDAgMi4yMTQ4M0wxMTYuNDk5IDcwLjQzNDdMMTIwLjM2MSA2OC4yMTk5TDMuODYyNyAwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4yNDcwNyAwLjAxNDQwNDMpIiBmaWxsPSIjODQ4Qjk5Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjkzNjg2IDBMMTI2IDY5LjU5NzFMMTIwLjA2MyA3Mi45NjY1TDAgMy4zNjkzOUw1LjkzNjg2IDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjYwODM5OCAxMjIuMjU4KSIgZmlsbD0iYmxhY2siLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Ny41MDIyIDc5LjUxNDdMMTA2LjQgNzYuMDQ2NUw4Ny41NTQgNTAuNTQ3Mkw4Ny41MzU5IDYxLjE4OTNMNjEuMzYxNSA0NS45NTcxTDQ4Ljk2OTggMjQuNDkyOEwzNy45MTE3IDMwLjg1MzVMMjYuODUyNyAxMS42MjJMMTUuNzc5NyAxNy45OTFMNS4yMTc5MyAwTDAgMy4wMzI2NkwxNS43OTQ1IDMwLjA5MjdMMjYuODUyNyAyMy43MzI4TDM3LjkxMTcgNDIuOTYzNEw0OS4wMTg0IDM2LjU3NjJMNTcuMzc1IDUxLjEzNjNMODcuNTIzNiA2OC42ODE4TDg3LjUwMjIgNzkuNTE0N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjQ3NTYgNDcuNDIwNCkiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyLjU4NTkgMTYuMTkyMUw0LjYwMjE3IDBMMCAyLjY0ODMxTDI3Ljk4MzcgMTguODQwNEwzMi41ODU5IDE2LjE5MjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2OC4xMjc5IDk1LjE3NzcpIiBmaWxsPSIjMzM4ODdEIi8+CjxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iNjgiIHk9Ijk1IiB3aWR0aD0iMzMiIGhlaWdodD0iMjAiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyLjU4NTkgMTYuMTkyMUw0LjYwMjE3IDBMMCAyLjY0ODMxTDI3Ljk4MzcgMTguODQwNEwzMi41ODU5IDE2LjE5MjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2OC4xMjc5IDk1LjE3NzcpIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuNTc2ODEgMEwxNi43MTEyIDIwLjk3MjJMMTIuMTM0NCAyMy42Mjk4TDAgMi42NTY3OUw0LjU3NjgxIDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ni44ODI4IDc0LjcwNDcpIiBmaWxsPSIjMzM4ODdEIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC43Njk1MiAwTDE2LjA1NDEgMTkuMzU4M0wxMS4yODU0IDIyLjA5NjJMMCAyLjczNzkxTDQuNzY5NTIgMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0LjYwMzUgNjIuMDE5NSkiIGZpbGw9IiMzMzg4N0QiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjAyMDU1IDBMMTYuMzY1OSAxNy45NDI1TDExLjM0NTMgMjAuNjU1OUwwIDIuNzEyNjRMNS4wMjA1NSAwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuOTc1NiA1MC43ODMxKSIgZmlsbD0iIzMzODg3RCIvPgo8bWFzayBpZD0ibWFzazEiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjciIHk9IjUyIiB3aWR0aD0iMTA4IiBoZWlnaHQ9IjgwIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Ny44NTQ3IDc4LjU1NzNMMTA2LjgyOCA3NS4xMzA4TDg3LjkwNjcgNDkuOTM4NUw4Ny44ODc3IDYwLjQ1MjVMNjEuNjA4NyA0NS40MDM3TDQ5LjE2NzEgMjQuMTk3OUwzOC4wNjQ0IDMwLjQ4MTJMMjYuOTYwOSAxMS40ODIxTDE1Ljg0MzMgMTcuNzc0NEw1LjIzODk1IDBMMCAyLjk5NjE1TDE1Ljg1ODIgMjkuNzI5NUwyNi45NjA5IDIzLjQ0NjJMMzguMDY0NCA0Mi40NDYxTDQ5LjIxNTEgMzYuMTM1OEw1Ny42MDYxIDUwLjUyMDVMODcuODc2MiA2Ny44NTQ3TDg3Ljg1NDcgNzguNTU3M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuODQyNzcgNTIuODc2NikiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMSkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg3Ljg1NDcgNzguNTU3M0wxMDYuODI4IDc1LjEzMDhMODcuOTA2NyA0OS45Mzg1TDg3Ljg4NzcgNjAuNDUyNUw2MS42MDg3IDQ1LjQwMzdMNDkuMTY3MSAyNC4xOTc5TDM4LjA2NDQgMzAuNDgxMkwyNi45NjA5IDExLjQ4MjFMMTUuODQzMyAxNy43NzQ0TDUuMjM4OTUgMEwwIDIuOTk2MTVMMTUuODU4MiAyOS43Mjk1TDI2Ljk2MDkgMjMuNDQ2MkwzOC4wNjQ0IDQyLjQ0NjFMNDkuMjE1MSAzNi4xMzU4TDU3LjYwNjEgNTAuNTIwNUw4Ny44NzYyIDY3Ljg1NDdMODcuODU0NyA3OC41NTczWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy44NDI3NyA1Mi44NzY2KSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8L2c+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIuOTg5IDI1LjM0OTFMNC41Njg1MSAwTDAgMi44MDM2MkwxOC40MjA1IDI4LjE1MjhMMjIuOTg5IDI1LjM0OTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NS45ODE0IDEwMC4zMTMpIiBmaWxsPSIjMzM4ODdEIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMDYuODI4IDM5LjI3ODYpIHNjYWxlKDEwNi44MjggNzguNTU3Mykgcm90YXRlKDE4MCkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBFMEMwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwQzdBQSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/custody.45ac00ca.svg";

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModifiedContainerWrapper = exports.IllustrationWrapper = exports.TextWrapper = undefined;

var _row = __webpack_require__(9);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(11);

var _col2 = _interopRequireDefault(_col);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0px 10px;\n\n  h2,\n  p {\n    text-align: left;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    padding: 30px 0px 0px 0px;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    padding: 0px 30px;\n  }\n\n  @media ', ' {\n    padding: 0px 40px;\n  }\n'], ['\n  padding: 0px 10px;\n\n  h2,\n  p {\n    text-align: left;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    padding: 30px 0px 0px 0px;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    padding: 0px 30px;\n  }\n\n  @media ', ' {\n    padding: 0px 40px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: #00E2C1\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 70px\n\n  @media ', ' and (max-width: ', ') {\n    padding: 50px;\n  }\n'], ['\n  background: #00E2C1\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 70px\n\n  @media ', ' and (max-width: ', ') {\n    padding: 50px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  @media ', ' and (max-width: ', ') {\n    max-width: 880px;\n  }\n'], ['\n  @media ', ' and (max-width: ', ') {\n    max-width: 880px;\n  }\n']);

__webpack_require__(10);

__webpack_require__(12);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Styles = __webpack_require__(23);

var _breakpoints = __webpack_require__(5);

var _ethereum_blockchain = __webpack_require__(142);

var _ethereum_blockchain2 = _interopRequireDefault(_ethereum_blockchain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextWrapper = exports.TextWrapper = _styledComponents2.default.div(_templateObject, _breakpoints.device.mobileS, _breakpoints.size.tablet, _breakpoints.device.tablet, _breakpoints.size.laptopL, _breakpoints.device.laptopL);
var IllustrationWrapper = exports.IllustrationWrapper = _styledComponents2.default.div(_templateObject2, _breakpoints.device.mobileS, _breakpoints.size.tablet);
var ModifiedContainerWrapper = exports.ModifiedContainerWrapper = _Styles.ContainerWrapper.extend(_templateObject3, _breakpoints.device.tablet, _breakpoints.size.laptop);

var Trading = function (_React$Component) {
  _inherits(Trading, _React$Component);

  function Trading() {
    _classCallCheck(this, Trading);

    return _possibleConstructorReturn(this, (Trading.__proto__ || Object.getPrototypeOf(Trading)).apply(this, arguments));
  }

  _createClass(Trading, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Styles.Section,
        { bg: '#000000' },
        _react2.default.createElement(
          ModifiedContainerWrapper,
          null,
          _react2.default.createElement(
            _row2.default,
            { type: 'flex', align: 'middle' },
            _react2.default.createElement(
              _col2.default,
              { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
              _react2.default.createElement(
                IllustrationWrapper,
                null,
                _react2.default.createElement('img', { width: '100%', alt: 'Ethereum Blockchain', src: _ethereum_blockchain2.default, style: { margin: '0 auto' } })
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
              _react2.default.createElement(
                TextWrapper,
                null,
                _react2.default.createElement(
                  _Styles.SectionHeader,
                  { color: '#fff' },
                  'Derivatives trading on the Ethereum blockchain'
                ),
                _react2.default.createElement(
                  _Styles.SecondaryDescription,
                  { style: {
                      color: '#ffffff'
                    } },
                  'MARKET Protocol has created the open-source foundation needed to create Position Tokens that track the price of any asset. Following the ERC-20 standard, these tokens are tradeable on any exchange or wallet, delivering value to anyone in the world.'
                ),
                _react2.default.createElement(
                  _Styles.SecondaryDescription,
                  { style: {
                      color: '#ffffff'
                    } },
                  'MARKET Protocol is a framework that enables traders and businesses to buy and sell digital and real-world assets in a safe, solvent and trustless environment.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Trading;
}(_react2.default.Component);

exports.default = Trading;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ethereum_blockchain.b7bb2021.svg";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AboutComponent = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Hero = __webpack_require__(135);

var _Hero2 = _interopRequireDefault(_Hero);

var _Derivatives = __webpack_require__(137);

var _Derivatives2 = _interopRequireDefault(_Derivatives);

var _Trading = __webpack_require__(141);

var _Trading2 = _interopRequireDefault(_Trading);

var _Cta = __webpack_require__(24);

var _Cta2 = _interopRequireDefault(_Cta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutComponent = exports.AboutComponent = function AboutComponent() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Hero2.default, null),
        _react2.default.createElement(_Derivatives2.default, null),
        _react2.default.createElement(_Trading2.default, null),
        _react2.default.createElement(_Cta2.default, { bg: '#f0f0f0' })
    );
};
exports.default = (0, _reactStatic.withSiteData)(AboutComponent);

/***/ })

};;
//# sourceMappingURL=About.3babf519.js.map