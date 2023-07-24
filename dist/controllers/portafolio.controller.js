"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pingPortafolio = exports.findOnePortafolio = exports.findAllPortafolio = exports.deletePortafolio = exports.createPortafolio = exports.UpdatePortafolio = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = require("../config/database/db");
var _message = _interopRequireDefault(require("../config/message"));
// INGRESAR DATOS
var createPortafolio = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id_proyecto, nombre_proyecto, descripcion, email, imagen_url, categoria_proyecto, fecha_creacion_proyecto, fecha_publicacion_portafolio, id_empresa, id_usuario, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          id_proyecto = req.params.id_proyecto;
          nombre_proyecto = req.body.nombre_proyecto;
          descripcion = req.body.descripcion;
          email = req.body.email;
          imagen_url = req.body.imagen_url;
          categoria_proyecto = req.body.categoria_proyecto;
          fecha_creacion_proyecto = req.body.fecha_creacion_proyecto;
          fecha_publicacion_portafolio = req.body.fecha_publicacion_portafolio;
          id_empresa = req.body.id_empresa;
          id_usuario = req.body.id_usuario;
          _context.next = 14;
          return _db.pool.query("CALL spInsertPortafolio ('".concat(id_proyecto, "', '").concat(nombre_proyecto, "', '").concat(descripcion, "', '").concat(imagen_url, "', '").concat(categoria_proyecto, "', '").concat(fecha_creacion_proyecto, "', '").concat(fecha_publicacion_portafolio, "', ").concat(id_empresa, ", ").concat(id_usuario, "');"));
        case 14:
          result = _context.sent;
          res.json(result);
          _context.next = 22;
          break;
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          (0, _message["default"])(_context.t0.message, "danger");
          res.status(500);
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 18]]);
  }));
  return function createPortafolio(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// MOSTRAR TODOS LOS DATOS
exports.createPortafolio = createPortafolio;
var findAllPortafolio = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _yield$pool$query, _yield$pool$query2, rows;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _db.pool.query("CALL spFindAllPortafolio");
        case 3:
          _yield$pool$query = _context2.sent;
          _yield$pool$query2 = (0, _slicedToArray2["default"])(_yield$pool$query, 1);
          rows = _yield$pool$query2[0];
          res.json(rows);
          _context2.next = 13;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          (0, _message["default"])(_context2.t0.message, "danger");
          res.status(500);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function findAllPortafolio(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// MOSTRAR DATOS POR ID
exports.findAllPortafolio = findAllPortafolio;
var findOnePortafolio = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id_proyecto, _yield$pool$query3, _yield$pool$query4, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id_proyecto = req.params.id_proyecto;
          _context3.next = 4;
          return _db.pool.query("CALL spFindPortafolio (".concat(id_proyecto, ");"));
        case 4:
          _yield$pool$query3 = _context3.sent;
          _yield$pool$query4 = (0, _slicedToArray2["default"])(_yield$pool$query3, 1);
          result = _yield$pool$query4[0];
          res.send(result[0]);
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          (0, _message["default"])(_context3.t0.message, "danger");
          res.status(500);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function findOnePortafolio(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.findOnePortafolio = findOnePortafolio;
var pingPortafolio = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _yield$pool$query5, _yield$pool$query6, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _db.pool.query("SELECT \"hello world\" as RESULT");
        case 3:
          _yield$pool$query5 = _context4.sent;
          _yield$pool$query6 = (0, _slicedToArray2["default"])(_yield$pool$query5, 1);
          result = _yield$pool$query6[0];
          res.send(result[0]);
          _context4.next = 13;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          (0, _message["default"])(_context4.t0.message, "danger");
          res.status(500);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function pingPortafolio(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// ACTUALIZAR
exports.pingPortafolio = pingPortafolio;
var UpdatePortafolio = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id_proyecto, nombre_proyecto, descripcion, email, imagen_url, categoria_proyecto, fecha_creacion_proyecto, fecha_publicacion_portafolio, id_empresa, id_usuario, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id_proyecto = req.params.id_proyecto;
          nombre_proyecto = req.body.nombre_proyecto;
          descripcion = req.body.descripcion;
          email = req.body.email;
          imagen_url = req.body.imagen_url;
          categoria_proyecto = req.body.categoria_proyecto;
          fecha_creacion_proyecto = req.body.fecha_creacion_proyecto;
          fecha_publicacion_portafolio = req.body.fecha_publicacion_portafolio;
          id_empresa = req.body.id_empresa;
          id_usuario = req.body.id_usuario;
          _context5.next = 13;
          return _db.pool.query("CALL spUpdatePortafolio ('".concat(id_proyecto, "', '").concat(nombre_proyecto, "', '").concat(descripcion, "', '").concat(imagen_url, "', '").concat(categoria_proyecto, "', '").concat(fecha_creacion_proyecto, "', '").concat(fecha_publicacion_portafolio, "', ").concat(id_empresa, ", ").concat(id_usuario, "');"));
        case 13:
          result = _context5.sent;
          res.send(result);
          _context5.next = 21;
          break;
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](0);
          (0, _message["default"])(_context5.t0.message, "danger");
          res.status(500);
        case 21:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 17]]);
  }));
  return function UpdatePortafolio(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// Eliminar por ID
exports.UpdatePortafolio = UpdatePortafolio;
var deletePortafolio = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id_proyecto, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id_proyecto = req.params.id_proyecto;
          _context6.next = 4;
          return _db.pool.query("CALL spDeletePortafolio (".concat(id_proyecto, ");"));
        case 4:
          result = _context6.sent;
          res.send(result);
          _context6.next = 12;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          (0, _message["default"])(_context6.t0.message, "danger");
          res.status(500);
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return function deletePortafolio(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deletePortafolio = deletePortafolio;