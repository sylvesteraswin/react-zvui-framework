'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = undefined;

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

var Link = function Link(_ref) {
  var active = _ref.active;
  var children = _ref.children;
  var className = _ref.className;
  var count = _ref.count;
  var icon = _ref.icon;
  var label = _ref.label;
  var theme = _ref.theme;

  var others = _objectWithoutProperties(_ref, ['active', 'children', 'className', 'count', 'icon', 'label', 'theme']);

  var classes = (0, _classnames3.default)(theme.link, _defineProperty({}, theme.active, active), className);

  var props = _extends({}, others, {
    'data-react-zvui-framework': 'link',
    className: classes
  });

  return _react2.default.createElement('a', props, icon ? _react2.default.createElement(_FontIcon2.default, { className: theme.icon, value: icon }) : null, label ? _react2.default.createElement(
    'abbr',
    null,
    label
  ) : null, count && parseInt(count) !== 0 ? _react2.default.createElement(
    'small',
    null,
    count
  ) : null, children);
};

Link.propTypes = {
  active: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  count: _react.PropTypes.number,
  icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  label: _react.PropTypes.string,
  theme: _react.PropTypes.shape({
    active: _react.PropTypes.string,
    icon: _react.PropTypes.string,
    link: _react.PropTypes.string
  })
};

Link.defaultProps = {
  active: false,
  className: ''
};

exports.default = (0, _reactCssThemr.themr)(_identifiers.LINK)(Link);
exports.Link = Link;