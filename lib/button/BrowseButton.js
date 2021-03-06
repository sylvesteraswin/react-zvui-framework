'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowseButton = exports.browseButtonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _FontIcon = require('../font_icon/FontIcon.js');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(FontIcon) {
  var SimpleBrowseButton = function (_Component) {
    _inherits(SimpleBrowseButton, _Component);

    function SimpleBrowseButton() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SimpleBrowseButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleBrowseButton.__proto__ || Object.getPrototypeOf(SimpleBrowseButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleMouseUp = function (event) {
        var button = _this.refs.button;
        var onMouseUp = _this.props.onMouseUp;


        button.blur();
        if (onMouseUp) {
          onMouseUp(event);
        };
      }, _this.handleMouseLeave = function (event) {
        var button = _this.refs.button;
        var onMouseLeave = _this.props.onMouseLeave;


        button.blur();
        if (onMouseLeave) {
          onMouseLeave(event);
        };
      }, _this.handleFileChange = function (event) {
        var onChange = _this.props.onChange;


        if (onChange) {
          onChange(event);
        }
      }, _this.render = function () {
        var _classnames;

        var _this$props = _this.props;
        var children = _this$props.children;
        var className = _this$props.className;
        var floating = _this$props.floating;
        var href = _this$props.href;
        var icon = _this$props.icon;
        var inverse = _this$props.inverse;
        var label = _this$props.label;
        var mini = _this$props.mini;
        var primary = _this$props.primary;
        var secondary = _this$props.secondary;
        var tertiary = _this$props.tertiary;
        var theme = _this$props.theme;
        var disabled = _this$props.disabled;

        var others = _objectWithoutProperties(_this$props, ['children', 'className', 'floating', 'href', 'icon', 'inverse', 'label', 'mini', 'primary', 'secondary', 'tertiary', 'theme', 'disabled']);

        var element = href ? 'a' : 'button';

        var classes = (0, _classnames3.default)(theme.button, (_classnames = {}, _defineProperty(_classnames, theme.floating, floating), _defineProperty(_classnames, theme.tertiary, tertiary && !secondary && !primary), _defineProperty(_classnames, theme.secondary, secondary && !tertiary && !primary), _defineProperty(_classnames, theme.primary, primary && !tertiary && !secondary), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

        var props = _extends({}, others, {
          ref: 'label',
          className: classes,
          disabled: disabled,
          onMouseUp: _this.handleMouseUp,
          onMouseLeave: _this.handleMouseLeave,
          'data-react-zvui-framework': 'label'
        });

        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, _react2.default.createElement(
          'span',
          null,
          label
        ), _react2.default.createElement('input', { className: classes, type: 'file', onChange: _this.handleFileChange }), children);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return SimpleBrowseButton;
  }(_react.Component);

  SimpleBrowseButton.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    floating: _react.PropTypes.bool,
    href: _react.PropTypes.string,
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    inverse: _react.PropTypes.bool,
    label: _react.PropTypes.string,
    mini: _react.PropTypes.bool,
    onMouseLeave: _react.PropTypes.func,
    onMouseUp: _react.PropTypes.func,
    primary: _react.PropTypes.bool,
    secondary: _react.PropTypes.bool,
    tertiary: _react.PropTypes.bool,
    theme: _react.PropTypes.shape({
      button: _react.PropTypes.string,
      floating: _react.PropTypes.string,
      icon: _react.PropTypes.string,
      inverse: _react.PropTypes.string,
      mini: _react.PropTypes.string,
      primary: _react.PropTypes.string,
      secondary: _react.PropTypes.string,
      tertiary: _react.PropTypes.string,
      toggle: _react.PropTypes.string
    }),
    type: _react.PropTypes.string
  };
  SimpleBrowseButton.defaultProps = {
    className: '',
    floating: false,
    mini: false,
    primary: false,
    secondary: false,
    tertiary: true,
    raised: false
  };


  return SimpleBrowseButton;
};

var BrowseButton = factory(_FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(BrowseButton);
exports.browseButtonFactory = factory;
exports.BrowseButton = BrowseButton;