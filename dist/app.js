"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _enviroments = _interopRequireDefault(require("./config/enviroments"));
var _usuarioRoutes = _interopRequireDefault(require("./routes/usuario.routes.js"));
var _rolRoutes = _interopRequireDefault(require("./routes/rol.routes.js"));
var _empresaRoutes = _interopRequireDefault(require("./routes/empresa.routes.js"));
var _portafolioRoutes = _interopRequireDefault(require("./routes/portafolio.routes.js"));
var app = (0, _express["default"])();

//Routes
app.get('/', function (req, res) {
  res.send({
    message: 'Welcome to Lepus'
  });
});

//settings
app.set("PORT", process.env.PORT || 3000);

//middlewares
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use('/api', _usuarioRoutes["default"]);
app.use('/apiRol', _rolRoutes["default"]);
app.use('/apiEmpresa', _empresaRoutes["default"]);
app.use('/apiPortafolio', _portafolioRoutes["default"]);
var _default = app;
exports["default"] = _default;