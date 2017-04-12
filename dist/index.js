'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hr = function (_Component) {
  _inherits(Hr, _Component);

  function Hr() {
    _classCallCheck(this, Hr);

    return _possibleConstructorReturn(this, (Hr.__proto__ || Object.getPrototypeOf(Hr)).apply(this, arguments));
  }

  _createClass(Hr, [{
    key: 'getStyle',
    value: function getStyle() {
      return _reactNative.StyleSheet.create({
        line: {
          backgroundColor: this.props.style.color,
          height: this.props.style.height || 1,
          flex: 1
        },
        wrapper: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: this.props.style.backgroundColor || 'transparent'
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.children) {
        return _react2.default.createElement(
          _reactNative.View,
          { style: this.getStyle().wrapper },
          _react2.default.createElement(HrLine, { style: this.getStyle().line })
        );
      }
      return _react2.default.createElement(
        _reactNative.View,
        { style: this.getStyle().wrapper },
        this.props.align === 'left' ? _react2.default.createElement(_reactNative.View, null) : _react2.default.createElement(HrLine, { style: this.getStyle().line }),
        this.props.children,
        this.props.align === 'right' ? _react2.default.createElement(_reactNative.View, null) : _react2.default.createElement(HrLine, { style: this.getStyle().line })
      );
    }
  }]);

  return Hr;
}(_react.Component);

Hr.defaultProps = {
  style: {
    color: 'black',
    height: 1,
    backgroundColor: 'transparent'
  }
};

var HrLine = function (_Component2) {
  _inherits(HrLine, _Component2);

  function HrLine() {
    _classCallCheck(this, HrLine);

    return _possibleConstructorReturn(this, (HrLine.__proto__ || Object.getPrototypeOf(HrLine)).apply(this, arguments));
  }

  _createClass(HrLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNative.View, { style: this.props.style });
    }
  }]);

  return HrLine;
}(_react.Component);

exports.default = Hr;
