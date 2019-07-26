'use strict';

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

require("dotenv/config");

var _passport = _interopRequireDefault(require("passport"));

var _passportGoogleOauth = require("passport-google-oauth20");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json()); // Client ID: 

_passport["default"].use(new _passportGoogleOauth.Strategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, function (accessToken, refreshToken, profile, done) {
  console.log('access token', accessToken);
  console.log('refresh token', refreshToken);
  console.log('profile', profile);
}));

app.get('/', function (req, res) {
  res.send({
    bye: 'buddy'
  });
});
app.get('/auth/google', _passport["default"].authenticate('google', {
  scope: ['profile', 'email']
}));
app.get('/auth/google/callback', _passport["default"].authenticate('google'));
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server up and running on port ".concat(PORT));
});