exports.ids = [9];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageDescription = exports.MessageHeader = exports.MessageBox = exports.Section = undefined;

var _row = __webpack_require__(9);

var _row2 = _interopRequireDefault(_row);

var _button = __webpack_require__(3);

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(13);

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  height: 70vh;\n  background: #181e26 url(', ') no-repeat 50% 50%;\n  background-size: cover;\n\n  @media ', ' {\n    height: 80vh;\n  }\n'], ['\n  height: 70vh;\n  background: #181e26 url(', ') no-repeat 50% 50%;\n  background-size: cover;\n\n  @media ', ' {\n    height: 80vh;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: rgba(255, 255, 255, 0.95);\n  padding: 50px;\n  text-align: center;\n\n  @media ', ' {\n    width: 100%;\n    margin-top: 0;\n  }\n\n  @media ', ' {\n    width: 80%;\n  }\n\n  @media ', ' {\n    width: 60%;\n  }\n\n  @media ', ' {\n    margin-top: -120px;\n  }\n\n  @media ', ' {\n    width: 50%;\n  }\n'], ['\n  background-color: rgba(255, 255, 255, 0.95);\n  padding: 50px;\n  text-align: center;\n\n  @media ', ' {\n    width: 100%;\n    margin-top: 0;\n  }\n\n  @media ', ' {\n    width: 80%;\n  }\n\n  @media ', ' {\n    width: 60%;\n  }\n\n  @media ', ' {\n    margin-top: -120px;\n  }\n\n  @media ', ' {\n    width: 50%;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-weight: 700;\n\n  @media ', ' {\n    font-size: 22px;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    font-size: 28px;\n  }\n\n  @media ', ' {\n    font-size: 32px;\n  }\n\n  @media ', ' {\n    font-size: 38px;\n  }\n'], ['\n  font-weight: 700;\n\n  @media ', ' {\n    font-size: 22px;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    font-size: 28px;\n  }\n\n  @media ', ' {\n    font-size: 32px;\n  }\n\n  @media ', ' {\n    font-size: 38px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-weight: 300;\n\n  @media ', ' {\n    font-size: 14px;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    font-size: 18px;\n  }\n\n  @media ', ' {\n    font-size: 22px;\n  }\n\n  @media ', ' {\n    font-size: 24px;\n  }\n'], ['\n  font-weight: 300;\n\n  @media ', ' {\n    font-size: 14px;\n  }\n\n  @media ', ' and (max-width: ', ') {\n    font-size: 18px;\n  }\n\n  @media ', ' {\n    font-size: 22px;\n  }\n\n  @media ', ' {\n    font-size: 24px;\n  }\n']);

__webpack_require__(10);

__webpack_require__(4);

__webpack_require__(14);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _worldmap = __webpack_require__(106);

var _worldmap2 = _interopRequireDefault(_worldmap);

var _breakpoints = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Section = exports.Section = _styledComponents2.default.section(_templateObject, _worldmap2.default, _breakpoints.device.laptopL);
var MessageBox = exports.MessageBox = _styledComponents2.default.div(_templateObject2, _breakpoints.device.mobileS, _breakpoints.device.mobileL, _breakpoints.device.laptop, _breakpoints.device.laptopM, _breakpoints.device.desktopS);
var MessageHeader = exports.MessageHeader = _styledComponents2.default.h1(_templateObject3, _breakpoints.device.mobileS, _breakpoints.device.mobileL, _breakpoints.size.tablet, _breakpoints.device.tablet, _breakpoints.device.laptop);
var MessageDescription = exports.MessageDescription = _styledComponents2.default.p(_templateObject4, _breakpoints.device.mobileS, _breakpoints.device.mobileL, _breakpoints.size.tablet, _breakpoints.device.tablet, _breakpoints.device.laptop);

var Hero = function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero(props) {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, props));
  }

  _createClass(Hero, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Section,
        null,
        _react2.default.createElement(
          _row2.default,
          { type: 'flex', justify: 'center', align: 'middle', style: { height: '100%' } },
          _react2.default.createElement(
            MessageBox,
            null,
            _react2.default.createElement(
              MessageHeader,
              null,
              'Thank you for joining the ',
              _react2.default.createElement('br', null),
              ' MARKET Protocol Community'
            ),
            _react2.default.createElement(
              MessageDescription,
              null,
              this.props.tokenThanks ? 'Thanks for your interest in our token,\n                we will be sure to keep you up to date as more information becomes available!' : 'We will be sure to keep you up to date as more information becomes available!'
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://marketprotocol.io' },
              _react2.default.createElement(
                _button2.default,
                { type: 'primary', style: { fontWeight: 600 } },
                'Return to our website',
                _react2.default.createElement(_icon2.default, { style: { marginLeft: '10px' }, type: 'arrow-right' })
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

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/worldmap.648a1ce3.svg";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenThanksContainer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Hero = __webpack_require__(105);

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TokenThanksContainer = exports.TokenThanksContainer = function TokenThanksContainer() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Hero2.default, { tokenThanks: true })
    );
};
exports.default = (0, _reactStatic.withSiteData)(TokenThanksContainer);

/***/ })

};;
//# sourceMappingURL=TokenThanks.9ab92be0.js.map