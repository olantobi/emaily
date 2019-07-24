'use strict';

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to the application.'
  });
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server up and running on port ".concat(PORT));
});