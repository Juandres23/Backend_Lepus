"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pingUsuario = exports.findOneUsuario = exports.findAllUsuario = exports.deleteUsuario = exports.createUsuario = exports.UpdateUsuario = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = require("../config/database/db");
var _message = _interopRequireDefault(require("../config/message"));
// INGRESAR DATOS
var createUsuario = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id_usuario, nombre, apellido, email, telefono, direccion, id_rol, fecha_nacimiento, contrasena, genero, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          id_usuario = req.params.id_usuario;
          nombre = req.body.nombre;
          apellido = req.body.apellido;
          email = req.body.email;
          telefono = req.body.telefono;
          direccion = req.body.direccion;
          id_rol = req.body.id_rol;
          fecha_nacimiento = req.body.fecha_nacimiento;
          contrasena = req.body.contrasena;
          genero = req.body.genero;
          _context.next = 14;
          return _db.pool.query("CALL spInsertUsuario('".concat(id_usuario, "','").concat(nombre, "', '").concat(apellido, "', '").concat(email, "', '").concat(telefono, "', '").concat(direccion, "', '").concat(id_rol, ", '").concat(fecha_nacimiento, "', '").concat(contrasena, "', '").concat(genero, "');"));
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
  return function createUsuario(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// MOSTRAR TODOS LOS DATOS
exports.createUsuario = createUsuario;
var findAllUsuario = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _yield$pool$query, _yield$pool$query2, rows;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _db.pool.query("CALL spFindAllUsuario");
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
  return function findAllUsuario(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// MOSTRAR DATOS POR ID
exports.findAllUsuario = findAllUsuario;
var findOneUsuario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id_usuario, _yield$pool$query3, _yield$pool$query4, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id_usuario = req.params.id_usuario;
          _context3.next = 4;
          return _db.pool.query("CALL spFindUsuario (".concat(id_usuario, ");"));
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
  return function findOneUsuario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.findOneUsuario = findOneUsuario;
var pingUsuario = /*#__PURE__*/function () {
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
  return function pingUsuario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// ACTUALIZAR
exports.pingUsuario = pingUsuario;
var UpdateUsuario = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id_usuario, nombre, apellido, email, telefono, direccion, id_rol, fecha_nacimiento, contrasena, genero, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id_usuario = req.params.id_usuario;
          nombre = req.body.nombre;
          apellido = req.body.apellido;
          email = req.body.email;
          telefono = req.body.telefono;
          direccion = req.body.direccion;
          id_rol = req.body.id_rol;
          fecha_nacimiento = req.body.fecha_nacimiento;
          contrasena = req.body.contrasena;
          genero = req.body.genero;
          _context5.next = 14;
          return _db.pool.query("CALL spUpdateUsuario('".concat(id_usuario, "','").concat(nombre, "', '").concat(apellido, "', '").concat(email, "', '").concat(telefono, "', '").concat(direccion, "', '").concat(id_rol, "', '").concat(fecha_nacimiento, "', '").concat(contrasena, "', '").concat(genero, "');"));
        case 14:
          result = _context5.sent;
          res.send(result);
          _context5.next = 22;
          break;
        case 18:
          _context5.prev = 18;
          _context5.t0 = _context5["catch"](0);
          (0, _message["default"])(_context5.t0.message, "danger");
          res.status(500);
        case 22:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 18]]);
  }));
  return function UpdateUsuario(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// Eliminar por ID
exports.UpdateUsuario = UpdateUsuario;
var deleteUsuario = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id_usuario, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id_usuario = req.params.id_usuario;
          _context6.next = 4;
          return _db.pool.query("CALL spDeleteUsuario  ".concat(id_usuario, ");"));
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
  return function deleteUsuario(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteUsuario = deleteUsuario;