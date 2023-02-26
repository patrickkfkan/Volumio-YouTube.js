/* eslint-disable */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/jintr/dist/src/nodes/ArrayExpression.js
var require_ArrayExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/ArrayExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArrayExpression = class {
      static visit(node, visitor) {
        return node.elements.map((el) => visitor.visitNode(el));
      }
    };
    __name(ArrayExpression, "ArrayExpression");
    exports.default = ArrayExpression;
  }
});

// node_modules/jintr/dist/src/utils/index.js
var require_utils = __commonJS({
  "node_modules/jintr/dist/src/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.namedFunction = void 0;
    var namedFunction = /* @__PURE__ */ __name((name, fn) => Object.defineProperty(fn, "name", { value: name }), "namedFunction");
    exports.namedFunction = namedFunction;
  }
});

// node_modules/jintr/dist/src/nodes/ArrowFunctionExpression.js
var require_ArrowFunctionExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/ArrowFunctionExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var ArrowFunctionExpression = class {
      static visit(node, visitor) {
        const { params, body } = node;
        const fn = (0, utils_1.namedFunction)("anonymous function", (args) => {
          let index = 0;
          for (const param of params) {
            visitor.visitNode(param);
            if (param.type === "Identifier") {
              visitor.scope.set(param.name, args[index]);
            } else {
              console.warn("Unhandled param type", param.type);
            }
            index++;
          }
          return visitor.visitNode(body);
        });
        return fn;
      }
    };
    __name(ArrowFunctionExpression, "ArrowFunctionExpression");
    exports.default = ArrowFunctionExpression;
  }
});

// node_modules/jintr/dist/src/nodes/AssignmentExpression.js
var require_AssignmentExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/AssignmentExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AssignmentExpression = class {
      static visit(node, visitor) {
        const operator = node.operator;
        const right_node = visitor.visitNode(node.right);
        switch (operator) {
          case "=":
            if (node.left.type === "MemberExpression") {
              const obj = visitor.visitNode(node.left.object);
              const prop = visitor.visitNode(node.left.property);
              return obj[prop] = right_node;
            } else if (node.left.type === "Identifier") {
              visitor.scope.set(node.left.name, right_node);
              return visitor.scope.get(node.left.name);
            }
            console.warn("Unhandled left node", node.left);
            break;
          case "+=":
            if (node.left.type === "MemberExpression") {
              const obj = visitor.visitNode(node.left.object);
              const prop = visitor.visitNode(node.left.property);
              return obj[prop] += right_node;
            } else if (node.left.type === "Identifier") {
              const result = visitor.visitNode(node.left) + right_node;
              visitor.scope.set(node.left.name, result);
              return visitor.scope.get(node.left.name);
            }
            console.warn("Unhandled left node", node.left);
            break;
          case "-=":
            if (node.left.type === "MemberExpression") {
              const obj = visitor.visitNode(node.left.object);
              const prop = visitor.visitNode(node.left.property);
              return obj[prop] -= right_node;
            } else if (node.left.type === "Identifier") {
              const result = visitor.visitNode(node.left) - right_node;
              visitor.scope.set(node.left.name, result);
              return visitor.scope.get(node.left.name);
            }
            console.warn("Unhandled left node", node.left);
            break;
          case "*=":
            if (node.left.type === "MemberExpression") {
              const obj = visitor.visitNode(node.left.object);
              const prop = visitor.visitNode(node.left.property);
              return obj[prop] *= right_node;
            } else if (node.left.type === "Identifier") {
              const result = visitor.visitNode(node.left) * right_node;
              visitor.scope.set(node.left.name, result);
              return visitor.scope.get(node.left.name);
            }
            console.warn("Unhandled left node", node.left);
            break;
          case "/=":
            if (node.left.type === "MemberExpression") {
              const obj = visitor.visitNode(node.left.object);
              const prop = visitor.visitNode(node.left.property);
              return obj[prop] /= right_node;
            } else if (node.left.type === "Identifier") {
              const result = visitor.visitNode(node.left) / right_node;
              visitor.scope.set(node.left.name, result);
              return visitor.scope.get(node.left.name);
            }
            console.warn("Unhandled left node", node.left);
            break;
          case "%=":
            if (node.left.type === "MemberExpression") {
              const obj = visitor.visitNode(node.left.object);
              const prop = visitor.visitNode(node.left.property);
              return obj[prop] %= right_node;
            } else if (node.left.type === "Identifier") {
              const result = visitor.visitNode(node.left) % right_node;
              visitor.scope.set(node.left.name, result);
              return visitor.scope.get(node.left.name);
            }
            console.warn("Unhandled left node", node.left);
            break;
          case "**=":
            if (node.left.type === "MemberExpression") {
              const obj = visitor.visitNode(node.left.object);
              const prop = visitor.visitNode(node.left.property);
              return obj[prop] **= right_node;
            } else if (node.left.type === "Identifier") {
              const result = visitor.visitNode(node.left) ** right_node;
              visitor.scope.set(node.left.name, result);
              return visitor.scope.get(node.left.name);
            }
            console.warn("Unhandled left node", node.left);
            break;
          case "<<=":
            if (node.left.type === "MemberExpression") {
              const obj = visitor.visitNode(node.left.object);
              const prop = visitor.visitNode(node.left.property);
              return obj[prop] <<= right_node;
            } else if (node.left.type === "Identifier") {
              const result = visitor.visitNode(node.left) << right_node;
              visitor.scope.set(node.left.name, result);
              return visitor.scope.get(node.left.name);
            }
            console.warn("Unhandled left node", node.left);
            break;
          case ">>=":
            if (node.left.type === "MemberExpression") {
              const obj = visitor.visitNode(node.left.object);
              const prop = visitor.visitNode(node.left.property);
              return obj[prop] >>= right_node;
            } else if (node.left.type === "Identifier") {
              const result = visitor.visitNode(node.left) >> right_node;
              visitor.scope.set(node.left.name, result);
              return visitor.scope.get(node.left.name);
            }
            console.warn("Unhandled left node", node.left);
            break;
          case ">>>=":
            if (node.left.type === "MemberExpression") {
              const obj = visitor.visitNode(node.left.object);
              const prop = visitor.visitNode(node.left.property);
              return obj[prop] >>>= right_node;
            } else if (node.left.type === "Identifier") {
              const result = visitor.visitNode(node.left) >>> right_node;
              visitor.scope.set(node.left.name, result);
              return visitor.scope.get(node.left.name);
            }
            console.warn("Unhandled left node", node.left);
            break;
          case "&=":
            if (node.left.type === "MemberExpression") {
              const obj = visitor.visitNode(node.left.object);
              const prop = visitor.visitNode(node.left.property);
              return obj[prop] &= right_node;
            } else if (node.left.type === "Identifier") {
              const result = visitor.visitNode(node.left) & right_node;
              visitor.scope.set(node.left.name, result);
              return visitor.scope.get(node.left.name);
            }
            console.warn("Unhandled left node", node.left);
            break;
        }
      }
    };
    __name(AssignmentExpression, "AssignmentExpression");
    exports.default = AssignmentExpression;
  }
});

// node_modules/jintr/dist/src/nodes/BinaryExpression.js
var require_BinaryExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/BinaryExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BinaryExpression = class {
      static visit(node, visitor) {
        const operator = node.operator;
        const left_node = visitor.visitNode(node.left);
        const right_node = visitor.visitNode(node.right);
        switch (operator) {
          case "!=":
            return left_node != right_node;
          case "!==":
            return left_node !== right_node;
          case "%":
            return left_node % right_node;
          case "&":
            return left_node & right_node;
          case "*":
            return left_node * right_node;
          case "**":
            return left_node ** right_node;
          case "+":
            return left_node + right_node;
          case "-":
            return left_node - right_node;
          case "/":
            return left_node / right_node;
          case "<":
            return left_node < right_node;
          case "<<":
            return left_node << right_node;
          case "<=":
            return left_node <= right_node;
          case "==":
            return left_node == right_node;
          case "===":
            return left_node === right_node;
          case ">":
            return left_node > right_node;
          case ">=":
            return left_node >= right_node;
          case ">>":
            return left_node >> right_node;
          case ">>>":
            return left_node >>> right_node;
          case "^":
            return left_node ^ right_node;
          case "|":
            return left_node | right_node;
          case "in":
            return left_node in right_node;
          case "instanceof":
            return left_node instanceof right_node;
        }
      }
    };
    __name(BinaryExpression, "BinaryExpression");
    exports.default = BinaryExpression;
  }
});

// node_modules/jintr/dist/src/nodes/BlockStatement.js
var require_BlockStatement = __commonJS({
  "node_modules/jintr/dist/src/nodes/BlockStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlockStatement = class {
      static visit(node, visitor) {
        for (const stmt of node.body) {
          const result = visitor.visitNode(stmt);
          if (stmt.type === "ReturnStatement")
            return result;
          if (result === "break" || result === "continue")
            return result;
          if ((stmt.type === "WhileStatement" || stmt.type === "IfStatement" || stmt.type === "ForStatement" || stmt.type === "TryStatement") && !!result) {
            return result;
          }
        }
      }
    };
    __name(BlockStatement, "BlockStatement");
    exports.default = BlockStatement;
  }
});

// node_modules/jintr/dist/src/nodes/BreakStatement.js
var require_BreakStatement = __commonJS({
  "node_modules/jintr/dist/src/nodes/BreakStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BreakStatement = class {
      static visit(_node, _visitor) {
        return "break";
      }
    };
    __name(BreakStatement, "BreakStatement");
    exports.default = BreakStatement;
  }
});

// node_modules/jintr/dist/src/nodes/CallExpression.js
var require_CallExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/CallExpression.js"(exports) {
    "use strict";
    var __classPrivateFieldGet49 = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _a5;
    var _CallExpression_throwError;
    Object.defineProperty(exports, "__esModule", { value: true });
    var CallExpression = class {
      static visit(node, visitor) {
        let exp_object;
        let exp_property;
        if (node.callee.type === "MemberExpression") {
          exp_object = visitor.getName(node.callee.object);
          exp_property = visitor.getName(node.callee.property);
        } else if (node.callee.type === "Identifier") {
          exp_property = node.callee.name;
        }
        if (exp_object && visitor.listeners[exp_object]) {
          const cb = visitor.listeners[exp_object](node, visitor);
          if (cb !== "proceed") {
            return cb;
          }
        }
        if (exp_property && exp_property !== "toString" && visitor.listeners[exp_property]) {
          const cb = visitor.listeners[exp_property](node, visitor);
          if (cb !== "proceed") {
            return cb;
          }
        }
        if (node.callee.type === "MemberExpression") {
          if (Builtins.has(node, visitor)) {
            return Builtins.execute(node, visitor);
          }
          const obj = visitor.visitNode(node.callee.object);
          const prop = node.callee.computed ? visitor.visitNode(node.callee.property) : visitor.getName(node.callee.property);
          const args2 = node.arguments.map((arg) => visitor.visitNode(arg));
          if (typeof obj[prop] !== "function")
            __classPrivateFieldGet49(this, _a5, "m", _CallExpression_throwError).call(this, node, visitor);
          if (obj[prop].toString().includes("[native code]"))
            return obj[prop](...args2);
          return obj[prop](args2);
        }
        const fn = visitor.visitNode(node.callee);
        const args = node.arguments.map((arg) => visitor.visitNode(arg));
        if (typeof fn !== "function")
          __classPrivateFieldGet49(this, _a5, "m", _CallExpression_throwError).call(this, node, visitor);
        return fn(args);
      }
    };
    __name(CallExpression, "CallExpression");
    exports.default = CallExpression;
    _a5 = CallExpression, _CallExpression_throwError = /* @__PURE__ */ __name(function _CallExpression_throwError2(node, visitor) {
      if (node.callee.type === "MemberExpression") {
        throw new Error(`${node.callee.object.type === "Identifier" ? node.callee.object.name : "<object>"}.${node.callee.property.type === "Identifier" ? node.callee.property.name : "?"} is not a function`);
      } else if (node.callee.type === "Identifier") {
        throw new Error(`${node.callee.name} is not a function`);
      } else if (node.callee.type === "SequenceExpression") {
        const call = [];
        const items = [];
        call.push("(");
        node.callee.expressions.forEach((expr) => {
          if (expr.type === "Literal") {
            items.push(expr.raw || "");
          } else if (expr.type === "Identifier") {
            items.push(expr.name);
          } else if (expr.type === "MemberExpression") {
            if (expr.computed) {
              items.push(`${visitor.getName(expr.object)}[${visitor.getName(expr.property) || "..."}]`);
            } else {
              items.push(`${visitor.getName(expr.object)}.${visitor.getName(expr.property)}`);
            }
          }
        });
        call.push(items.join(", "));
        call.push(")");
        throw new Error(`${call.join("")} is not a function`);
      }
    }, "_CallExpression_throwError");
    var Builtins = class {
      static has(node, visitor) {
        var _b;
        if (node.callee.type === "MemberExpression") {
          return !!((_b = this.builtins) === null || _b === void 0 ? void 0 : _b[visitor.getName(node.callee.property) || ""]);
        }
        return false;
      }
      static execute(node, visitor) {
        if (node.callee.type === "MemberExpression") {
          return this.builtins[visitor.getName(node.callee.property) || ""](node, visitor);
        }
      }
    };
    __name(Builtins, "Builtins");
    Builtins.builtins = {
      forEach: (node, visitor) => {
        const args = node.arguments.map((arg) => visitor.visitNode(arg));
        if (node.callee.type === "MemberExpression") {
          const arr = visitor.visitNode(node.callee.object);
          if (args.length > 1) {
            visitor.scope.set("_this", args.slice(-1)[0]);
          }
          let index = 0;
          for (const element of arr) {
            args[0]([element, index++, arr]);
          }
        } else {
          console.warn("Unhandled callee type:", node.callee.type);
        }
      },
      toString: (node, visitor) => {
        if (node.callee.type === "MemberExpression") {
          return visitor.visitNode(node.callee.object).toString();
        }
      }
    };
  }
});

// node_modules/jintr/dist/src/nodes/ConditionalExpression.js
var require_ConditionalExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/ConditionalExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConditionalExpression = class {
      static visit(node, visitor) {
        const { test, consequent, alternate } = node;
        const check = visitor.visitNode(test);
        if (check) {
          return visitor.visitNode(consequent);
        }
        return visitor.visitNode(alternate);
      }
    };
    __name(ConditionalExpression, "ConditionalExpression");
    exports.default = ConditionalExpression;
  }
});

// node_modules/jintr/dist/src/nodes/ContinueStatement.js
var require_ContinueStatement = __commonJS({
  "node_modules/jintr/dist/src/nodes/ContinueStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContinueStatement = class {
      static visit(_node, _visitor) {
        return "continue";
      }
    };
    __name(ContinueStatement, "ContinueStatement");
    exports.default = ContinueStatement;
  }
});

// node_modules/jintr/dist/src/nodes/ExpressionStatement.js
var require_ExpressionStatement = __commonJS({
  "node_modules/jintr/dist/src/nodes/ExpressionStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExpressionStatement = class {
      static visit(node, visitor) {
        return visitor.visitNode(node.expression);
      }
    };
    __name(ExpressionStatement, "ExpressionStatement");
    exports.default = ExpressionStatement;
  }
});

// node_modules/jintr/dist/src/nodes/ForStatement.js
var require_ForStatement = __commonJS({
  "node_modules/jintr/dist/src/nodes/ForStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ForStatement = class {
      static visit(node, visitor) {
        if (node.init) {
          visitor.visitNode(node.init);
        }
        const test = /* @__PURE__ */ __name(() => {
          return node.test ? visitor.visitNode(node.test) : true;
        }, "test");
        for (; ; ) {
          const _test = test();
          if (!_test) {
            break;
          }
          const body = visitor.visitNode(node.body);
          if (body === "continue") {
            continue;
          }
          if (body === "break") {
            break;
          }
          if (node.update) {
            visitor.visitNode(node.update);
          }
          if (body && node.body.type !== "ExpressionStatement") {
            return body;
          }
        }
      }
    };
    __name(ForStatement, "ForStatement");
    exports.default = ForStatement;
  }
});

// node_modules/jintr/dist/src/nodes/FunctionDeclaration.js
var require_FunctionDeclaration = __commonJS({
  "node_modules/jintr/dist/src/nodes/FunctionDeclaration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var FunctionDeclaration = class {
      static visit(node, visitor) {
        const { params, body } = node;
        const id = visitor.visitNode(node.id);
        const fn = (0, utils_1.namedFunction)(id, (args) => {
          let index = 0;
          for (const param of params) {
            visitor.visitNode(param);
            if (param.type === "Identifier") {
              visitor.scope.set(param.name, args[index]);
            } else {
              console.warn("Unhandled param type", param.type);
            }
            index++;
          }
          return visitor.visitNode(body);
        });
        visitor.scope.set(id, fn);
      }
    };
    __name(FunctionDeclaration, "FunctionDeclaration");
    exports.default = FunctionDeclaration;
  }
});

// node_modules/jintr/dist/src/nodes/FunctionExpression.js
var require_FunctionExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/FunctionExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var FunctionExpression = class {
      static visit(node, visitor) {
        const { params, body } = node;
        const fn = (0, utils_1.namedFunction)("anonymous function", (args) => {
          let index = 0;
          for (const param of params) {
            visitor.visitNode(param);
            if (param.type === "Identifier") {
              visitor.scope.set(param.name, args[index]);
            } else {
              console.warn("Unhandled param type", param.type);
            }
            index++;
          }
          return visitor.visitNode(body);
        });
        return fn;
      }
    };
    __name(FunctionExpression, "FunctionExpression");
    exports.default = FunctionExpression;
  }
});

// node_modules/jintr/dist/src/nodes/Identifier.js
var require_Identifier = __commonJS({
  "node_modules/jintr/dist/src/nodes/Identifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Identifier = class {
      static visit(node, visitor) {
        if (visitor.listeners[node.name]) {
          const cb = visitor.listeners[node.name](node, visitor);
          if (cb !== "proceed") {
            return cb;
          }
        }
        if (visitor.scope.has(node.name))
          return visitor.scope.get(node.name);
        return node.name;
      }
    };
    __name(Identifier, "Identifier");
    exports.default = Identifier;
  }
});

// node_modules/jintr/dist/src/nodes/IfStatement.js
var require_IfStatement = __commonJS({
  "node_modules/jintr/dist/src/nodes/IfStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IfStatement = class {
      static visit(node, visitor) {
        const test = visitor.visitNode(node.test);
        if (test) {
          return visitor.visitNode(node.consequent);
        } else if (node.alternate) {
          return visitor.visitNode(node.alternate);
        }
      }
    };
    __name(IfStatement, "IfStatement");
    exports.default = IfStatement;
  }
});

// node_modules/jintr/dist/src/nodes/Literal.js
var require_Literal = __commonJS({
  "node_modules/jintr/dist/src/nodes/Literal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Literal = class {
      static visit(node, _visitor) {
        return node.value;
      }
    };
    __name(Literal, "Literal");
    exports.default = Literal;
  }
});

// node_modules/jintr/dist/src/nodes/LogicalExpression.js
var require_LogicalExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/LogicalExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogicalExpression = class {
      static visit(node, visitor) {
        const operator = node.operator;
        switch (operator) {
          case "&&": {
            const left_side = visitor.visitNode(node.left);
            if (left_side === true)
              return visitor.visitNode(node.right);
            return left_side;
          }
          case "||": {
            const left_side = visitor.visitNode(node.left);
            return left_side || visitor.visitNode(node.right);
          }
          case "??": {
            const left_side = visitor.visitNode(node.left);
            return left_side !== null && left_side !== void 0 ? left_side : visitor.visitNode(node.right);
          }
        }
      }
    };
    __name(LogicalExpression, "LogicalExpression");
    exports.default = LogicalExpression;
  }
});

// node_modules/jintr/dist/src/nodes/MemberExpression.js
var require_MemberExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/MemberExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MemberExpression = class {
      static visit(node, visitor) {
        const { object, property, computed } = node;
        const obj = visitor.visitNode(object);
        const prop = computed ? visitor.visitNode(property) : visitor.getName(property);
        if (prop !== void 0 || prop !== null) {
          if (visitor.listeners[prop]) {
            const cb = visitor.listeners[prop](node, visitor);
            if (cb !== "proceed") {
              return cb;
            }
          }
          return obj === null || obj === void 0 ? void 0 : obj[prop];
        }
      }
    };
    __name(MemberExpression, "MemberExpression");
    exports.default = MemberExpression;
  }
});

// node_modules/jintr/dist/src/nodes/NewExpression.js
var require_NewExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/NewExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NewExpression = class {
      static visit(node, visitor) {
        const callee = visitor.visitNode(node.callee);
        const args = node.arguments.map((arg) => visitor.visitNode(arg));
        return new callee(args);
      }
    };
    __name(NewExpression, "NewExpression");
    exports.default = NewExpression;
  }
});

// node_modules/jintr/dist/src/nodes/ObjectExpression.js
var require_ObjectExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/ObjectExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ObjectExpression = class {
      static visit(node, visitor) {
        let result = {};
        for (const prop of node.properties) {
          if (prop.type === "Property") {
            result = Object.assign(Object.assign({}, result), visitor.visitNode(prop));
          } else {
            throw new Error(`Unhandled property type: ${prop.type}`);
          }
        }
        return result;
      }
    };
    __name(ObjectExpression, "ObjectExpression");
    exports.default = ObjectExpression;
  }
});

// node_modules/jintr/dist/src/nodes/Property.js
var require_Property = __commonJS({
  "node_modules/jintr/dist/src/nodes/Property.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Property = class {
      static init(node, visitor) {
        const key = node.computed ? visitor.visitNode(node.key) : visitor.getName(node.key);
        const value = visitor.visitNode(node.value);
        if (key) {
          return { [key]: value };
        }
      }
      static get(_node, _visitor) {
        throw new TypeError("Not implemented: Property.get");
      }
      static set(_node, _visitor) {
        throw new TypeError("Not implemented: Property.set");
      }
      static visit(node, visitor) {
        switch (node.kind) {
          case "init":
            return this.init(node, visitor);
          case "get":
            return this.get(node, visitor);
          case "set":
            return this.set(node, visitor);
          default:
            throw new Error(`Unhandled property kind: ${node.kind}`);
        }
      }
    };
    __name(Property, "Property");
    exports.default = Property;
  }
});

// node_modules/jintr/dist/src/nodes/ReturnStatement.js
var require_ReturnStatement = __commonJS({
  "node_modules/jintr/dist/src/nodes/ReturnStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReturnStatement = class {
      static visit(node, visitor) {
        if (node.argument)
          return visitor.visitNode(node.argument);
      }
    };
    __name(ReturnStatement, "ReturnStatement");
    exports.default = ReturnStatement;
  }
});

// node_modules/jintr/dist/src/nodes/SequenceExpression.js
var require_SequenceExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/SequenceExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SequenceExpression = class {
      static visit(node, visitor) {
        let result;
        for (const expression of node.expressions) {
          result = visitor.visitNode(expression);
        }
        return result;
      }
    };
    __name(SequenceExpression, "SequenceExpression");
    exports.default = SequenceExpression;
  }
});

// node_modules/jintr/dist/src/nodes/SwitchCase.js
var require_SwitchCase = __commonJS({
  "node_modules/jintr/dist/src/nodes/SwitchCase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SwitchCase = class {
      static visit(node, visitor) {
        for (const stmt of node.consequent) {
          const result = visitor.visitNode(stmt);
          if (stmt.type === "ContinueStatement") {
            return result;
          } else if (stmt.type === "BreakStatement") {
            return result;
          }
        }
      }
    };
    __name(SwitchCase, "SwitchCase");
    exports.default = SwitchCase;
  }
});

// node_modules/jintr/dist/src/nodes/SwitchStatement.js
var require_SwitchStatement = __commonJS({
  "node_modules/jintr/dist/src/nodes/SwitchStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SwitchStatement = class {
      static visit(node, visitor) {
        const discriminant = visitor.visitNode(node.discriminant);
        let matched = false;
        let default_case = -1;
        let index = 0;
        while (true) {
          const _case = node.cases[index];
          if (matched) {
            const result = visitor.visitNode(_case);
            if (result === "break") {
              break;
            }
            if (result === "continue") {
              return result;
            }
            ++index;
            if (index >= node.cases.length) {
              index = 0;
              break;
            } else {
              continue;
            }
          }
          matched = _case && discriminant === visitor.visitNode(_case.test);
          if (matched === void 0 && index > node.cases.length)
            break;
          if (_case && !matched && !_case.test) {
            default_case = index;
            index += 1;
            continue;
          }
          if (!_case && !matched && default_case !== -1) {
            matched = true;
            index = default_case;
            continue;
          }
          if (!matched) {
            ++index;
          }
        }
      }
    };
    __name(SwitchStatement, "SwitchStatement");
    exports.default = SwitchStatement;
  }
});

// node_modules/jintr/dist/src/nodes/ThisExpression.js
var require_ThisExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/ThisExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThisExpression = class {
      static visit(_node, visitor) {
        return visitor.scope.get("_this");
      }
    };
    __name(ThisExpression, "ThisExpression");
    exports.default = ThisExpression;
  }
});

// node_modules/jintr/dist/src/nodes/ThrowStatement.js
var require_ThrowStatement = __commonJS({
  "node_modules/jintr/dist/src/nodes/ThrowStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThrowStatement = class {
      static visit(node, visitor) {
        const arg = visitor.visitNode(node.argument);
        throw arg;
      }
    };
    __name(ThrowStatement, "ThrowStatement");
    exports.default = ThrowStatement;
  }
});

// node_modules/jintr/dist/src/nodes/TryStatement.js
var require_TryStatement = __commonJS({
  "node_modules/jintr/dist/src/nodes/TryStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TryStatement = class {
      static visit(node, visitor) {
        try {
          return visitor.visitNode(node.block);
        } catch (e) {
          if (node.handler) {
            if (node.handler.param && node.handler.param.type === "Identifier") {
              visitor.scope.set(node.handler.param.name, e);
            }
            return visitor.visitNode(node.handler.body);
          }
        } finally {
          visitor.visitNode(node.finalizer);
        }
      }
    };
    __name(TryStatement, "TryStatement");
    exports.default = TryStatement;
  }
});

// node_modules/jintr/dist/src/nodes/UnaryExpression.js
var require_UnaryExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/UnaryExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UnaryExpression = class {
      static visit(node, visitor) {
        const operator = node.operator;
        switch (operator) {
          case "-": {
            const arg = visitor.visitNode(node.argument);
            return -arg;
          }
          case "+": {
            const arg = visitor.visitNode(node.argument);
            return +arg;
          }
          case "!": {
            const arg = visitor.visitNode(node.argument);
            return !arg;
          }
          case "~": {
            const arg = visitor.visitNode(node.argument);
            return ~arg;
          }
          case "void": {
            visitor.visitNode(node.argument);
            return void 0;
          }
          case "typeof": {
            const arg = visitor.visitNode(node.argument);
            return typeof arg;
          }
          case "delete": {
            if (node.argument.type === "MemberExpression") {
              const obj = visitor.visitNode(node.argument.object);
              const prop = node.argument.computed ? visitor.visitNode(node.argument.property) : visitor.getName(node.argument.property);
              return delete obj[prop];
            } else if (node.argument.type === "Identifier") {
              return visitor.scope.delete(node.argument.name);
            }
            return true;
          }
          default:
            console.warn("Unhandled UnaryExpression operator", operator);
        }
      }
    };
    __name(UnaryExpression, "UnaryExpression");
    exports.default = UnaryExpression;
  }
});

// node_modules/jintr/dist/src/nodes/UpdateExpression.js
var require_UpdateExpression = __commonJS({
  "node_modules/jintr/dist/src/nodes/UpdateExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UpdateExpression = class {
      static visit(node, visitor) {
        const operator = node.operator;
        switch (operator) {
          case "++":
            {
              if (node.argument.type === "MemberExpression") {
                const target_node = visitor.visitNode(node.argument.object);
                return target_node[visitor.visitNode(node.argument.property)]++;
              } else if (node.argument.type === "Identifier") {
                let target_node = visitor.visitNode(node.argument);
                visitor.scope.set(node.argument.name, target_node + 1);
                return node.prefix ? ++target_node : target_node;
              }
            }
            break;
          case "--":
            {
              if (node.argument.type === "MemberExpression") {
                const target_node = visitor.visitNode(node.argument.object);
                return target_node[visitor.visitNode(node.argument.property)]--;
              } else if (node.argument.type === "Identifier") {
                let target_node = visitor.visitNode(node.argument);
                visitor.scope.set(node.argument.name, target_node - 1);
                return node.prefix ? --target_node : target_node;
              }
            }
            break;
        }
      }
    };
    __name(UpdateExpression, "UpdateExpression");
    exports.default = UpdateExpression;
  }
});

// node_modules/jintr/dist/src/nodes/VariableDeclaration.js
var require_VariableDeclaration = __commonJS({
  "node_modules/jintr/dist/src/nodes/VariableDeclaration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VariableDeclaration = class {
      static visit(node, visitor) {
        node.declarations.forEach((declar) => {
          const { id, init } = declar;
          const key = visitor.getName(id);
          const value = init ? visitor.visitNode(init) : void 0;
          if (key)
            visitor.scope.set(key, value);
          if (typeof value === "object" && value !== null)
            visitor.scope.set("_this", value);
        });
      }
    };
    __name(VariableDeclaration, "VariableDeclaration");
    exports.default = VariableDeclaration;
  }
});

// node_modules/jintr/dist/src/nodes/WhileStatement.js
var require_WhileStatement = __commonJS({
  "node_modules/jintr/dist/src/nodes/WhileStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WhileStatement = class {
      static visit(node, visitor) {
        while (visitor.visitNode(node.test)) {
          const body = visitor.visitNode(node.body);
          if (body === "break")
            break;
          if (body === "continue")
            continue;
          if (body)
            return body;
        }
      }
    };
    __name(WhileStatement, "WhileStatement");
    exports.default = WhileStatement;
  }
});

// node_modules/jintr/dist/src/map.js
var require_map = __commonJS({
  "node_modules/jintr/dist/src/map.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArrayExpression_1 = __importDefault(require_ArrayExpression());
    var ArrowFunctionExpression_1 = __importDefault(require_ArrowFunctionExpression());
    var AssignmentExpression_1 = __importDefault(require_AssignmentExpression());
    var BinaryExpression_1 = __importDefault(require_BinaryExpression());
    var BlockStatement_1 = __importDefault(require_BlockStatement());
    var BreakStatement_1 = __importDefault(require_BreakStatement());
    var CallExpression_1 = __importDefault(require_CallExpression());
    var ConditionalExpression_1 = __importDefault(require_ConditionalExpression());
    var ContinueStatement_1 = __importDefault(require_ContinueStatement());
    var ExpressionStatement_1 = __importDefault(require_ExpressionStatement());
    var ForStatement_1 = __importDefault(require_ForStatement());
    var FunctionDeclaration_1 = __importDefault(require_FunctionDeclaration());
    var FunctionExpression_1 = __importDefault(require_FunctionExpression());
    var Identifier_1 = __importDefault(require_Identifier());
    var IfStatement_1 = __importDefault(require_IfStatement());
    var Literal_1 = __importDefault(require_Literal());
    var LogicalExpression_1 = __importDefault(require_LogicalExpression());
    var MemberExpression_1 = __importDefault(require_MemberExpression());
    var NewExpression_1 = __importDefault(require_NewExpression());
    var ObjectExpression_1 = __importDefault(require_ObjectExpression());
    var Property_1 = __importDefault(require_Property());
    var ReturnStatement_1 = __importDefault(require_ReturnStatement());
    var SequenceExpression_1 = __importDefault(require_SequenceExpression());
    var SwitchCase_1 = __importDefault(require_SwitchCase());
    var SwitchStatement_1 = __importDefault(require_SwitchStatement());
    var ThisExpression_1 = __importDefault(require_ThisExpression());
    var ThrowStatement_1 = __importDefault(require_ThrowStatement());
    var TryStatement_1 = __importDefault(require_TryStatement());
    var UnaryExpression_1 = __importDefault(require_UnaryExpression());
    var UpdateExpression_1 = __importDefault(require_UpdateExpression());
    var VariableDeclaration_1 = __importDefault(require_VariableDeclaration());
    var WhileStatement_1 = __importDefault(require_WhileStatement());
    var map2 = {
      ArrayExpression: ArrayExpression_1.default,
      ArrowFunctionExpression: ArrowFunctionExpression_1.default,
      AssignmentExpression: AssignmentExpression_1.default,
      BinaryExpression: BinaryExpression_1.default,
      BlockStatement: BlockStatement_1.default,
      BreakStatement: BreakStatement_1.default,
      CallExpression: CallExpression_1.default,
      ConditionalExpression: ConditionalExpression_1.default,
      ContinueStatement: ContinueStatement_1.default,
      ExpressionStatement: ExpressionStatement_1.default,
      ForStatement: ForStatement_1.default,
      FunctionDeclaration: FunctionDeclaration_1.default,
      FunctionExpression: FunctionExpression_1.default,
      Identifier: Identifier_1.default,
      IfStatement: IfStatement_1.default,
      Literal: Literal_1.default,
      LogicalExpression: LogicalExpression_1.default,
      MemberExpression: MemberExpression_1.default,
      NewExpression: NewExpression_1.default,
      ObjectExpression: ObjectExpression_1.default,
      Property: Property_1.default,
      ReturnStatement: ReturnStatement_1.default,
      SequenceExpression: SequenceExpression_1.default,
      SwitchCase: SwitchCase_1.default,
      SwitchStatement: SwitchStatement_1.default,
      ThisExpression: ThisExpression_1.default,
      ThrowStatement: ThrowStatement_1.default,
      TryStatement: TryStatement_1.default,
      UnaryExpression: UnaryExpression_1.default,
      UpdateExpression: UpdateExpression_1.default,
      VariableDeclaration: VariableDeclaration_1.default,
      WhileStatement: WhileStatement_1.default
    };
    function getNode(name) {
      const NodeConstructor = map2[name];
      if (!NodeConstructor) {
        const error = new Error(`Module not found: ${name}`);
        error.code = "MODULE_NOT_FOUND";
        throw error;
      }
      return NodeConstructor;
    }
    __name(getNode, "getNode");
    exports.default = getNode;
  }
});

// node_modules/jintr/dist/package.json
var require_package = __commonJS({
  "node_modules/jintr/dist/package.json"(exports, module) {
    module.exports = {
      name: "jintr",
      version: "0.4.1",
      description: "A tiny JavaScript interpreter written in TypeScript.",
      main: "./dist/index.js",
      types: "./dist",
      scripts: {
        test: "npx jest --verbose",
        build: "npx tsc",
        lint: "npx eslint ./src/**/*.ts",
        "lint:fix": "npx eslint --fix ./src/**/*.ts",
        "build:nodes-map": "node ./scripts/build-nodes-map.js",
        prepare: "npm run build",
        watch: "npx tsc --watch"
      },
      author: "LuanRT <luan.lrt4@gmail.com> (https://github.com/LuanRT)",
      funding: [
        "https://github.com/sponsors/LuanRT"
      ],
      keywords: [
        "js",
        "vm",
        "typescript",
        "javascript",
        "interpreter"
      ],
      license: "MIT",
      devDependencies: {
        "@types/estree": "^1.0.0",
        "@types/jest": "^28.1.7",
        "@typescript-eslint/eslint-plugin": "^5.33.1",
        "@typescript-eslint/parser": "^5.33.1",
        eslint: "^8.22.0",
        "eslint-plugin-tsdoc": "^0.2.16",
        glob: "^8.0.3",
        jest: "^28.1.3",
        "ts-jest": "^28.0.8",
        typescript: "^4.7.4"
      },
      dependencies: {
        acorn: "^8.8.0"
      },
      bugs: {
        url: "https://github.com/LuanRT/Jinter/issues"
      },
      homepage: "https://github.com/LuanRT/Jinter#readme"
    };
  }
});

// node_modules/jintr/dist/src/visitor.js
var require_visitor = __commonJS({
  "node_modules/jintr/dist/src/visitor.js"(exports) {
    "use strict";
    var __classPrivateFieldGet49 = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var _Visitor_instances;
    var _Visitor_printError;
    Object.defineProperty(exports, "__esModule", { value: true });
    var map_1 = __importDefault(require_map());
    var package_json_1 = __importDefault(require_package());
    var Visitor = class {
      constructor(ast) {
        _Visitor_instances.add(this);
        this.scope = /* @__PURE__ */ new Map();
        this.listeners = {};
        this.ast = ast;
      }
      run() {
        let result;
        for (const node of this.ast) {
          result = this.visitNode(node);
        }
        return result;
      }
      visitNode(node) {
        if (!node)
          return null;
        try {
          const target_node = (0, map_1.default)(node.type);
          return target_node.visit(node, this);
        } catch (err) {
          __classPrivateFieldGet49(this, _Visitor_instances, "m", _Visitor_printError).call(this, node, err);
        }
      }
      getName(node) {
        if (node.type === "Identifier")
          return node.name;
        else if (node.type === "Literal")
          return node.value;
      }
      on(node_name, listener) {
        this.listeners[node_name] = listener;
      }
    };
    __name(Visitor, "Visitor");
    exports.default = Visitor;
    _Visitor_instances = /* @__PURE__ */ new WeakSet(), _Visitor_printError = /* @__PURE__ */ __name(function _Visitor_printError2(node, err) {
      if (err.code === "MODULE_NOT_FOUND") {
        console.warn(`Node ${node.type} not found!
This is a bug, please report it at ${package_json_1.default.bugs.url}.`);
      } else
        throw err;
    }, "_Visitor_printError");
  }
});

// node_modules/acorn/dist/acorn.js
var require_acorn = __commonJS({
  "node_modules/acorn/dist/acorn.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.acorn = {}));
    })(exports, function(exports2) {
      "use strict";
      var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
      var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
      var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
      var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
      var reservedWords = {
        3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
        5: "class enum extends super const export import",
        6: "enum",
        strict: "implements interface let package private protected public static yield",
        strictBind: "eval arguments"
      };
      var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
      var keywords$1 = {
        5: ecma5AndLessKeywords,
        "5module": ecma5AndLessKeywords + " export import",
        6: ecma5AndLessKeywords + " const class extends export import super"
      };
      var keywordRelationalOperator = /^in(stanceof)?$/;
      var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
      var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
      function isInAstralSet(code, set) {
        var pos = 65536;
        for (var i2 = 0; i2 < set.length; i2 += 2) {
          pos += set[i2];
          if (pos > code) {
            return false;
          }
          pos += set[i2 + 1];
          if (pos >= code) {
            return true;
          }
        }
      }
      __name(isInAstralSet, "isInAstralSet");
      function isIdentifierStart(code, astral) {
        if (code < 65) {
          return code === 36;
        }
        if (code < 91) {
          return true;
        }
        if (code < 97) {
          return code === 95;
        }
        if (code < 123) {
          return true;
        }
        if (code <= 65535) {
          return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
        }
        if (astral === false) {
          return false;
        }
        return isInAstralSet(code, astralIdentifierStartCodes);
      }
      __name(isIdentifierStart, "isIdentifierStart");
      function isIdentifierChar(code, astral) {
        if (code < 48) {
          return code === 36;
        }
        if (code < 58) {
          return true;
        }
        if (code < 65) {
          return false;
        }
        if (code < 91) {
          return true;
        }
        if (code < 97) {
          return code === 95;
        }
        if (code < 123) {
          return true;
        }
        if (code <= 65535) {
          return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
        }
        if (astral === false) {
          return false;
        }
        return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
      }
      __name(isIdentifierChar, "isIdentifierChar");
      var TokenType = /* @__PURE__ */ __name(function TokenType2(label, conf) {
        if (conf === void 0)
          conf = {};
        this.label = label;
        this.keyword = conf.keyword;
        this.beforeExpr = !!conf.beforeExpr;
        this.startsExpr = !!conf.startsExpr;
        this.isLoop = !!conf.isLoop;
        this.isAssign = !!conf.isAssign;
        this.prefix = !!conf.prefix;
        this.postfix = !!conf.postfix;
        this.binop = conf.binop || null;
        this.updateContext = null;
      }, "TokenType");
      function binop(name, prec) {
        return new TokenType(name, { beforeExpr: true, binop: prec });
      }
      __name(binop, "binop");
      var beforeExpr = { beforeExpr: true }, startsExpr = { startsExpr: true };
      var keywords = {};
      function kw(name, options) {
        if (options === void 0)
          options = {};
        options.keyword = name;
        return keywords[name] = new TokenType(name, options);
      }
      __name(kw, "kw");
      var types$1 = {
        num: new TokenType("num", startsExpr),
        regexp: new TokenType("regexp", startsExpr),
        string: new TokenType("string", startsExpr),
        name: new TokenType("name", startsExpr),
        privateId: new TokenType("privateId", startsExpr),
        eof: new TokenType("eof"),
        bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
        bracketR: new TokenType("]"),
        braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
        braceR: new TokenType("}"),
        parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
        parenR: new TokenType(")"),
        comma: new TokenType(",", beforeExpr),
        semi: new TokenType(";", beforeExpr),
        colon: new TokenType(":", beforeExpr),
        dot: new TokenType("."),
        question: new TokenType("?", beforeExpr),
        questionDot: new TokenType("?."),
        arrow: new TokenType("=>", beforeExpr),
        template: new TokenType("template"),
        invalidTemplate: new TokenType("invalidTemplate"),
        ellipsis: new TokenType("...", beforeExpr),
        backQuote: new TokenType("`", startsExpr),
        dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
        eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
        assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
        incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
        prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
        logicalOR: binop("||", 1),
        logicalAND: binop("&&", 2),
        bitwiseOR: binop("|", 3),
        bitwiseXOR: binop("^", 4),
        bitwiseAND: binop("&", 5),
        equality: binop("==/!=/===/!==", 6),
        relational: binop("</>/<=/>=", 7),
        bitShift: binop("<</>>/>>>", 8),
        plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
        modulo: binop("%", 10),
        star: binop("*", 10),
        slash: binop("/", 10),
        starstar: new TokenType("**", { beforeExpr: true }),
        coalesce: binop("??", 1),
        _break: kw("break"),
        _case: kw("case", beforeExpr),
        _catch: kw("catch"),
        _continue: kw("continue"),
        _debugger: kw("debugger"),
        _default: kw("default", beforeExpr),
        _do: kw("do", { isLoop: true, beforeExpr: true }),
        _else: kw("else", beforeExpr),
        _finally: kw("finally"),
        _for: kw("for", { isLoop: true }),
        _function: kw("function", startsExpr),
        _if: kw("if"),
        _return: kw("return", beforeExpr),
        _switch: kw("switch"),
        _throw: kw("throw", beforeExpr),
        _try: kw("try"),
        _var: kw("var"),
        _const: kw("const"),
        _while: kw("while", { isLoop: true }),
        _with: kw("with"),
        _new: kw("new", { beforeExpr: true, startsExpr: true }),
        _this: kw("this", startsExpr),
        _super: kw("super", startsExpr),
        _class: kw("class", startsExpr),
        _extends: kw("extends", beforeExpr),
        _export: kw("export"),
        _import: kw("import", startsExpr),
        _null: kw("null", startsExpr),
        _true: kw("true", startsExpr),
        _false: kw("false", startsExpr),
        _in: kw("in", { beforeExpr: true, binop: 7 }),
        _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
        _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
        _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
        _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
      };
      var lineBreak = /\r\n?|\n|\u2028|\u2029/;
      var lineBreakG = new RegExp(lineBreak.source, "g");
      function isNewLine(code) {
        return code === 10 || code === 13 || code === 8232 || code === 8233;
      }
      __name(isNewLine, "isNewLine");
      function nextLineBreak(code, from, end) {
        if (end === void 0)
          end = code.length;
        for (var i2 = from; i2 < end; i2++) {
          var next = code.charCodeAt(i2);
          if (isNewLine(next)) {
            return i2 < end - 1 && next === 13 && code.charCodeAt(i2 + 1) === 10 ? i2 + 2 : i2 + 1;
          }
        }
        return -1;
      }
      __name(nextLineBreak, "nextLineBreak");
      var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
      var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
      var ref = Object.prototype;
      var hasOwnProperty = ref.hasOwnProperty;
      var toString = ref.toString;
      var hasOwn = Object.hasOwn || function(obj, propName) {
        return hasOwnProperty.call(obj, propName);
      };
      var isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
      };
      function wordsRegexp(words) {
        return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$");
      }
      __name(wordsRegexp, "wordsRegexp");
      function codePointToString(code) {
        if (code <= 65535) {
          return String.fromCharCode(code);
        }
        code -= 65536;
        return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
      }
      __name(codePointToString, "codePointToString");
      var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
      var Position = /* @__PURE__ */ __name(function Position2(line, col) {
        this.line = line;
        this.column = col;
      }, "Position");
      Position.prototype.offset = /* @__PURE__ */ __name(function offset(n) {
        return new Position(this.line, this.column + n);
      }, "offset");
      var SourceLocation = /* @__PURE__ */ __name(function SourceLocation2(p, start, end) {
        this.start = start;
        this.end = end;
        if (p.sourceFile !== null) {
          this.source = p.sourceFile;
        }
      }, "SourceLocation");
      function getLineInfo(input, offset) {
        for (var line = 1, cur = 0; ; ) {
          var nextBreak = nextLineBreak(input, cur, offset);
          if (nextBreak < 0) {
            return new Position(line, offset - cur);
          }
          ++line;
          cur = nextBreak;
        }
      }
      __name(getLineInfo, "getLineInfo");
      var defaultOptions = {
        ecmaVersion: null,
        sourceType: "script",
        onInsertedSemicolon: null,
        onTrailingComma: null,
        allowReserved: null,
        allowReturnOutsideFunction: false,
        allowImportExportEverywhere: false,
        allowAwaitOutsideFunction: null,
        allowSuperOutsideMethod: null,
        allowHashBang: false,
        locations: false,
        onToken: null,
        onComment: null,
        ranges: false,
        program: null,
        sourceFile: null,
        directSourceFile: null,
        preserveParens: false
      };
      var warnedAboutEcmaVersion = false;
      function getOptions(opts) {
        var options = {};
        for (var opt in defaultOptions) {
          options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt];
        }
        if (options.ecmaVersion === "latest") {
          options.ecmaVersion = 1e8;
        } else if (options.ecmaVersion == null) {
          if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
            warnedAboutEcmaVersion = true;
            console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
          }
          options.ecmaVersion = 11;
        } else if (options.ecmaVersion >= 2015) {
          options.ecmaVersion -= 2009;
        }
        if (options.allowReserved == null) {
          options.allowReserved = options.ecmaVersion < 5;
        }
        if (opts.allowHashBang == null) {
          options.allowHashBang = options.ecmaVersion >= 14;
        }
        if (isArray(options.onToken)) {
          var tokens = options.onToken;
          options.onToken = function(token) {
            return tokens.push(token);
          };
        }
        if (isArray(options.onComment)) {
          options.onComment = pushComment(options, options.onComment);
        }
        return options;
      }
      __name(getOptions, "getOptions");
      function pushComment(options, array) {
        return function(block, text, start, end, startLoc, endLoc) {
          var comment = {
            type: block ? "Block" : "Line",
            value: text,
            start,
            end
          };
          if (options.locations) {
            comment.loc = new SourceLocation(this, startLoc, endLoc);
          }
          if (options.ranges) {
            comment.range = [start, end];
          }
          array.push(comment);
        };
      }
      __name(pushComment, "pushComment");
      var SCOPE_TOP = 1, SCOPE_FUNCTION = 2, SCOPE_ASYNC = 4, SCOPE_GENERATOR = 8, SCOPE_ARROW = 16, SCOPE_SIMPLE_CATCH = 32, SCOPE_SUPER = 64, SCOPE_DIRECT_SUPER = 128, SCOPE_CLASS_STATIC_BLOCK = 256, SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;
      function functionFlags(async, generator) {
        return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
      }
      __name(functionFlags, "functionFlags");
      var BIND_NONE = 0, BIND_VAR = 1, BIND_LEXICAL = 2, BIND_FUNCTION = 3, BIND_SIMPLE_CATCH = 4, BIND_OUTSIDE = 5;
      var Parser2 = /* @__PURE__ */ __name(function Parser3(options, input, startPos) {
        this.options = options = getOptions(options);
        this.sourceFile = options.sourceFile;
        this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
        var reserved = "";
        if (options.allowReserved !== true) {
          reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
          if (options.sourceType === "module") {
            reserved += " await";
          }
        }
        this.reservedWords = wordsRegexp(reserved);
        var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
        this.reservedWordsStrict = wordsRegexp(reservedStrict);
        this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
        this.input = String(input);
        this.containsEsc = false;
        if (startPos) {
          this.pos = startPos;
          this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
          this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
        } else {
          this.pos = this.lineStart = 0;
          this.curLine = 1;
        }
        this.type = types$1.eof;
        this.value = null;
        this.start = this.end = this.pos;
        this.startLoc = this.endLoc = this.curPosition();
        this.lastTokEndLoc = this.lastTokStartLoc = null;
        this.lastTokStart = this.lastTokEnd = this.pos;
        this.context = this.initialContext();
        this.exprAllowed = true;
        this.inModule = options.sourceType === "module";
        this.strict = this.inModule || this.strictDirective(this.pos);
        this.potentialArrowAt = -1;
        this.potentialArrowInForAwait = false;
        this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
        this.labels = [];
        this.undefinedExports = /* @__PURE__ */ Object.create(null);
        if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
          this.skipLineComment(2);
        }
        this.scopeStack = [];
        this.enterScope(SCOPE_TOP);
        this.regexpState = null;
        this.privateNameStack = [];
      }, "Parser");
      var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
      Parser2.prototype.parse = /* @__PURE__ */ __name(function parse2() {
        var node = this.options.program || this.startNode();
        this.nextToken();
        return this.parseTopLevel(node);
      }, "parse");
      prototypeAccessors.inFunction.get = function() {
        return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
      };
      prototypeAccessors.inGenerator.get = function() {
        return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 && !this.currentVarScope().inClassFieldInit;
      };
      prototypeAccessors.inAsync.get = function() {
        return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 && !this.currentVarScope().inClassFieldInit;
      };
      prototypeAccessors.canAwait.get = function() {
        for (var i2 = this.scopeStack.length - 1; i2 >= 0; i2--) {
          var scope = this.scopeStack[i2];
          if (scope.inClassFieldInit || scope.flags & SCOPE_CLASS_STATIC_BLOCK) {
            return false;
          }
          if (scope.flags & SCOPE_FUNCTION) {
            return (scope.flags & SCOPE_ASYNC) > 0;
          }
        }
        return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
      };
      prototypeAccessors.allowSuper.get = function() {
        var ref2 = this.currentThisScope();
        var flags = ref2.flags;
        var inClassFieldInit = ref2.inClassFieldInit;
        return (flags & SCOPE_SUPER) > 0 || inClassFieldInit || this.options.allowSuperOutsideMethod;
      };
      prototypeAccessors.allowDirectSuper.get = function() {
        return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
      };
      prototypeAccessors.treatFunctionsAsVar.get = function() {
        return this.treatFunctionsAsVarInScope(this.currentScope());
      };
      prototypeAccessors.allowNewDotTarget.get = function() {
        var ref2 = this.currentThisScope();
        var flags = ref2.flags;
        var inClassFieldInit = ref2.inClassFieldInit;
        return (flags & (SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK)) > 0 || inClassFieldInit;
      };
      prototypeAccessors.inClassStaticBlock.get = function() {
        return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0;
      };
      Parser2.extend = /* @__PURE__ */ __name(function extend() {
        var plugins = [], len = arguments.length;
        while (len--)
          plugins[len] = arguments[len];
        var cls = this;
        for (var i2 = 0; i2 < plugins.length; i2++) {
          cls = plugins[i2](cls);
        }
        return cls;
      }, "extend");
      Parser2.parse = /* @__PURE__ */ __name(function parse2(input, options) {
        return new this(options, input).parse();
      }, "parse");
      Parser2.parseExpressionAt = /* @__PURE__ */ __name(function parseExpressionAt2(input, pos, options) {
        var parser = new this(options, input, pos);
        parser.nextToken();
        return parser.parseExpression();
      }, "parseExpressionAt");
      Parser2.tokenizer = /* @__PURE__ */ __name(function tokenizer2(input, options) {
        return new this(options, input);
      }, "tokenizer");
      Object.defineProperties(Parser2.prototype, prototypeAccessors);
      var pp$9 = Parser2.prototype;
      var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
      pp$9.strictDirective = function(start) {
        if (this.options.ecmaVersion < 5) {
          return false;
        }
        for (; ; ) {
          skipWhiteSpace.lastIndex = start;
          start += skipWhiteSpace.exec(this.input)[0].length;
          var match = literal.exec(this.input.slice(start));
          if (!match) {
            return false;
          }
          if ((match[1] || match[2]) === "use strict") {
            skipWhiteSpace.lastIndex = start + match[0].length;
            var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
            var next = this.input.charAt(end);
            return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
          }
          start += match[0].length;
          skipWhiteSpace.lastIndex = start;
          start += skipWhiteSpace.exec(this.input)[0].length;
          if (this.input[start] === ";") {
            start++;
          }
        }
      };
      pp$9.eat = function(type) {
        if (this.type === type) {
          this.next();
          return true;
        } else {
          return false;
        }
      };
      pp$9.isContextual = function(name) {
        return this.type === types$1.name && this.value === name && !this.containsEsc;
      };
      pp$9.eatContextual = function(name) {
        if (!this.isContextual(name)) {
          return false;
        }
        this.next();
        return true;
      };
      pp$9.expectContextual = function(name) {
        if (!this.eatContextual(name)) {
          this.unexpected();
        }
      };
      pp$9.canInsertSemicolon = function() {
        return this.type === types$1.eof || this.type === types$1.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
      };
      pp$9.insertSemicolon = function() {
        if (this.canInsertSemicolon()) {
          if (this.options.onInsertedSemicolon) {
            this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
          }
          return true;
        }
      };
      pp$9.semicolon = function() {
        if (!this.eat(types$1.semi) && !this.insertSemicolon()) {
          this.unexpected();
        }
      };
      pp$9.afterTrailingComma = function(tokType, notNext) {
        if (this.type === tokType) {
          if (this.options.onTrailingComma) {
            this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
          }
          if (!notNext) {
            this.next();
          }
          return true;
        }
      };
      pp$9.expect = function(type) {
        this.eat(type) || this.unexpected();
      };
      pp$9.unexpected = function(pos) {
        this.raise(pos != null ? pos : this.start, "Unexpected token");
      };
      var DestructuringErrors = /* @__PURE__ */ __name(function DestructuringErrors2() {
        this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
      }, "DestructuringErrors");
      pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
        if (!refDestructuringErrors) {
          return;
        }
        if (refDestructuringErrors.trailingComma > -1) {
          this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
        }
        var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
        if (parens > -1) {
          this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern");
        }
      };
      pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
        if (!refDestructuringErrors) {
          return false;
        }
        var shorthandAssign = refDestructuringErrors.shorthandAssign;
        var doubleProto = refDestructuringErrors.doubleProto;
        if (!andThrow) {
          return shorthandAssign >= 0 || doubleProto >= 0;
        }
        if (shorthandAssign >= 0) {
          this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
        }
        if (doubleProto >= 0) {
          this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
        }
      };
      pp$9.checkYieldAwaitInDefaultParams = function() {
        if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
          this.raise(this.yieldPos, "Yield expression cannot be a default value");
        }
        if (this.awaitPos) {
          this.raise(this.awaitPos, "Await expression cannot be a default value");
        }
      };
      pp$9.isSimpleAssignTarget = function(expr) {
        if (expr.type === "ParenthesizedExpression") {
          return this.isSimpleAssignTarget(expr.expression);
        }
        return expr.type === "Identifier" || expr.type === "MemberExpression";
      };
      var pp$8 = Parser2.prototype;
      pp$8.parseTopLevel = function(node) {
        var exports3 = /* @__PURE__ */ Object.create(null);
        if (!node.body) {
          node.body = [];
        }
        while (this.type !== types$1.eof) {
          var stmt = this.parseStatement(null, true, exports3);
          node.body.push(stmt);
        }
        if (this.inModule) {
          for (var i2 = 0, list2 = Object.keys(this.undefinedExports); i2 < list2.length; i2 += 1) {
            var name = list2[i2];
            this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
          }
        }
        this.adaptDirectivePrologue(node.body);
        this.next();
        node.sourceType = this.options.sourceType;
        return this.finishNode(node, "Program");
      };
      var loopLabel = { kind: "loop" }, switchLabel = { kind: "switch" };
      pp$8.isLet = function(context) {
        if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
          return false;
        }
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 91 || nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
          return true;
        }
        if (context) {
          return false;
        }
        if (nextCh === 123) {
          return true;
        }
        if (isIdentifierStart(nextCh, true)) {
          var pos = next + 1;
          while (isIdentifierChar(nextCh = this.input.charCodeAt(pos), true)) {
            ++pos;
          }
          if (nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
            return true;
          }
          var ident = this.input.slice(next, pos);
          if (!keywordRelationalOperator.test(ident)) {
            return true;
          }
        }
        return false;
      };
      pp$8.isAsyncFunction = function() {
        if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
          return false;
        }
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, after;
        return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !(isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 55295 && after < 56320));
      };
      pp$8.parseStatement = function(context, topLevel, exports3) {
        var starttype = this.type, node = this.startNode(), kind;
        if (this.isLet(context)) {
          starttype = types$1._var;
          kind = "let";
        }
        switch (starttype) {
          case types$1._break:
          case types$1._continue:
            return this.parseBreakContinueStatement(node, starttype.keyword);
          case types$1._debugger:
            return this.parseDebuggerStatement(node);
          case types$1._do:
            return this.parseDoStatement(node);
          case types$1._for:
            return this.parseForStatement(node);
          case types$1._function:
            if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
              this.unexpected();
            }
            return this.parseFunctionStatement(node, false, !context);
          case types$1._class:
            if (context) {
              this.unexpected();
            }
            return this.parseClass(node, true);
          case types$1._if:
            return this.parseIfStatement(node);
          case types$1._return:
            return this.parseReturnStatement(node);
          case types$1._switch:
            return this.parseSwitchStatement(node);
          case types$1._throw:
            return this.parseThrowStatement(node);
          case types$1._try:
            return this.parseTryStatement(node);
          case types$1._const:
          case types$1._var:
            kind = kind || this.value;
            if (context && kind !== "var") {
              this.unexpected();
            }
            return this.parseVarStatement(node, kind);
          case types$1._while:
            return this.parseWhileStatement(node);
          case types$1._with:
            return this.parseWithStatement(node);
          case types$1.braceL:
            return this.parseBlock(true, node);
          case types$1.semi:
            return this.parseEmptyStatement(node);
          case types$1._export:
          case types$1._import:
            if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
              skipWhiteSpace.lastIndex = this.pos;
              var skip = skipWhiteSpace.exec(this.input);
              var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
              if (nextCh === 40 || nextCh === 46) {
                return this.parseExpressionStatement(node, this.parseExpression());
              }
            }
            if (!this.options.allowImportExportEverywhere) {
              if (!topLevel) {
                this.raise(this.start, "'import' and 'export' may only appear at the top level");
              }
              if (!this.inModule) {
                this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
              }
            }
            return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports3);
          default:
            if (this.isAsyncFunction()) {
              if (context) {
                this.unexpected();
              }
              this.next();
              return this.parseFunctionStatement(node, true, !context);
            }
            var maybeName = this.value, expr = this.parseExpression();
            if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon)) {
              return this.parseLabeledStatement(node, maybeName, expr, context);
            } else {
              return this.parseExpressionStatement(node, expr);
            }
        }
      };
      pp$8.parseBreakContinueStatement = function(node, keyword) {
        var isBreak = keyword === "break";
        this.next();
        if (this.eat(types$1.semi) || this.insertSemicolon()) {
          node.label = null;
        } else if (this.type !== types$1.name) {
          this.unexpected();
        } else {
          node.label = this.parseIdent();
          this.semicolon();
        }
        var i2 = 0;
        for (; i2 < this.labels.length; ++i2) {
          var lab = this.labels[i2];
          if (node.label == null || lab.name === node.label.name) {
            if (lab.kind != null && (isBreak || lab.kind === "loop")) {
              break;
            }
            if (node.label && isBreak) {
              break;
            }
          }
        }
        if (i2 === this.labels.length) {
          this.raise(node.start, "Unsyntactic " + keyword);
        }
        return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
      };
      pp$8.parseDebuggerStatement = function(node) {
        this.next();
        this.semicolon();
        return this.finishNode(node, "DebuggerStatement");
      };
      pp$8.parseDoStatement = function(node) {
        this.next();
        this.labels.push(loopLabel);
        node.body = this.parseStatement("do");
        this.labels.pop();
        this.expect(types$1._while);
        node.test = this.parseParenExpression();
        if (this.options.ecmaVersion >= 6) {
          this.eat(types$1.semi);
        } else {
          this.semicolon();
        }
        return this.finishNode(node, "DoWhileStatement");
      };
      pp$8.parseForStatement = function(node) {
        this.next();
        var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
        this.labels.push(loopLabel);
        this.enterScope(0);
        this.expect(types$1.parenL);
        if (this.type === types$1.semi) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
          return this.parseFor(node, null);
        }
        var isLet = this.isLet();
        if (this.type === types$1._var || this.type === types$1._const || isLet) {
          var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
          this.next();
          this.parseVar(init$1, true, kind);
          this.finishNode(init$1, "VariableDeclaration");
          if ((this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init$1.declarations.length === 1) {
            if (this.options.ecmaVersion >= 9) {
              if (this.type === types$1._in) {
                if (awaitAt > -1) {
                  this.unexpected(awaitAt);
                }
              } else {
                node.await = awaitAt > -1;
              }
            }
            return this.parseForIn(node, init$1);
          }
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
          return this.parseFor(node, init$1);
        }
        var startsWithLet = this.isContextual("let"), isForOf = false;
        var refDestructuringErrors = new DestructuringErrors();
        var init = this.parseExpression(awaitAt > -1 ? "await" : true, refDestructuringErrors);
        if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
          if (this.options.ecmaVersion >= 9) {
            if (this.type === types$1._in) {
              if (awaitAt > -1) {
                this.unexpected(awaitAt);
              }
            } else {
              node.await = awaitAt > -1;
            }
          }
          if (startsWithLet && isForOf) {
            this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'.");
          }
          this.toAssignable(init, false, refDestructuringErrors);
          this.checkLValPattern(init);
          return this.parseForIn(node, init);
        } else {
          this.checkExpressionErrors(refDestructuringErrors, true);
        }
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
        return this.parseFor(node, init);
      };
      pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
        this.next();
        return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
      };
      pp$8.parseIfStatement = function(node) {
        this.next();
        node.test = this.parseParenExpression();
        node.consequent = this.parseStatement("if");
        node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
        return this.finishNode(node, "IfStatement");
      };
      pp$8.parseReturnStatement = function(node) {
        if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
          this.raise(this.start, "'return' outside of function");
        }
        this.next();
        if (this.eat(types$1.semi) || this.insertSemicolon()) {
          node.argument = null;
        } else {
          node.argument = this.parseExpression();
          this.semicolon();
        }
        return this.finishNode(node, "ReturnStatement");
      };
      pp$8.parseSwitchStatement = function(node) {
        this.next();
        node.discriminant = this.parseParenExpression();
        node.cases = [];
        this.expect(types$1.braceL);
        this.labels.push(switchLabel);
        this.enterScope(0);
        var cur;
        for (var sawDefault = false; this.type !== types$1.braceR; ) {
          if (this.type === types$1._case || this.type === types$1._default) {
            var isCase = this.type === types$1._case;
            if (cur) {
              this.finishNode(cur, "SwitchCase");
            }
            node.cases.push(cur = this.startNode());
            cur.consequent = [];
            this.next();
            if (isCase) {
              cur.test = this.parseExpression();
            } else {
              if (sawDefault) {
                this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
              }
              sawDefault = true;
              cur.test = null;
            }
            this.expect(types$1.colon);
          } else {
            if (!cur) {
              this.unexpected();
            }
            cur.consequent.push(this.parseStatement(null));
          }
        }
        this.exitScope();
        if (cur) {
          this.finishNode(cur, "SwitchCase");
        }
        this.next();
        this.labels.pop();
        return this.finishNode(node, "SwitchStatement");
      };
      pp$8.parseThrowStatement = function(node) {
        this.next();
        if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
          this.raise(this.lastTokEnd, "Illegal newline after throw");
        }
        node.argument = this.parseExpression();
        this.semicolon();
        return this.finishNode(node, "ThrowStatement");
      };
      var empty$1 = [];
      pp$8.parseTryStatement = function(node) {
        this.next();
        node.block = this.parseBlock();
        node.handler = null;
        if (this.type === types$1._catch) {
          var clause = this.startNode();
          this.next();
          if (this.eat(types$1.parenL)) {
            clause.param = this.parseBindingAtom();
            var simple = clause.param.type === "Identifier";
            this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
            this.checkLValPattern(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
            this.expect(types$1.parenR);
          } else {
            if (this.options.ecmaVersion < 10) {
              this.unexpected();
            }
            clause.param = null;
            this.enterScope(0);
          }
          clause.body = this.parseBlock(false);
          this.exitScope();
          node.handler = this.finishNode(clause, "CatchClause");
        }
        node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
        if (!node.handler && !node.finalizer) {
          this.raise(node.start, "Missing catch or finally clause");
        }
        return this.finishNode(node, "TryStatement");
      };
      pp$8.parseVarStatement = function(node, kind) {
        this.next();
        this.parseVar(node, false, kind);
        this.semicolon();
        return this.finishNode(node, "VariableDeclaration");
      };
      pp$8.parseWhileStatement = function(node) {
        this.next();
        node.test = this.parseParenExpression();
        this.labels.push(loopLabel);
        node.body = this.parseStatement("while");
        this.labels.pop();
        return this.finishNode(node, "WhileStatement");
      };
      pp$8.parseWithStatement = function(node) {
        if (this.strict) {
          this.raise(this.start, "'with' in strict mode");
        }
        this.next();
        node.object = this.parseParenExpression();
        node.body = this.parseStatement("with");
        return this.finishNode(node, "WithStatement");
      };
      pp$8.parseEmptyStatement = function(node) {
        this.next();
        return this.finishNode(node, "EmptyStatement");
      };
      pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
        for (var i$1 = 0, list2 = this.labels; i$1 < list2.length; i$1 += 1) {
          var label = list2[i$1];
          if (label.name === maybeName) {
            this.raise(expr.start, "Label '" + maybeName + "' is already declared");
          }
        }
        var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
        for (var i2 = this.labels.length - 1; i2 >= 0; i2--) {
          var label$1 = this.labels[i2];
          if (label$1.statementStart === node.start) {
            label$1.statementStart = this.start;
            label$1.kind = kind;
          } else {
            break;
          }
        }
        this.labels.push({ name: maybeName, kind, statementStart: this.start });
        node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
        this.labels.pop();
        node.label = expr;
        return this.finishNode(node, "LabeledStatement");
      };
      pp$8.parseExpressionStatement = function(node, expr) {
        node.expression = expr;
        this.semicolon();
        return this.finishNode(node, "ExpressionStatement");
      };
      pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
        if (createNewLexicalScope === void 0)
          createNewLexicalScope = true;
        if (node === void 0)
          node = this.startNode();
        node.body = [];
        this.expect(types$1.braceL);
        if (createNewLexicalScope) {
          this.enterScope(0);
        }
        while (this.type !== types$1.braceR) {
          var stmt = this.parseStatement(null);
          node.body.push(stmt);
        }
        if (exitStrict) {
          this.strict = false;
        }
        this.next();
        if (createNewLexicalScope) {
          this.exitScope();
        }
        return this.finishNode(node, "BlockStatement");
      };
      pp$8.parseFor = function(node, init) {
        node.init = init;
        this.expect(types$1.semi);
        node.test = this.type === types$1.semi ? null : this.parseExpression();
        this.expect(types$1.semi);
        node.update = this.type === types$1.parenR ? null : this.parseExpression();
        this.expect(types$1.parenR);
        node.body = this.parseStatement("for");
        this.exitScope();
        this.labels.pop();
        return this.finishNode(node, "ForStatement");
      };
      pp$8.parseForIn = function(node, init) {
        var isForIn = this.type === types$1._in;
        this.next();
        if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
          this.raise(
            init.start,
            (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
          );
        }
        node.left = init;
        node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
        this.expect(types$1.parenR);
        node.body = this.parseStatement("for");
        this.exitScope();
        this.labels.pop();
        return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
      };
      pp$8.parseVar = function(node, isFor, kind) {
        node.declarations = [];
        node.kind = kind;
        for (; ; ) {
          var decl = this.startNode();
          this.parseVarId(decl, kind);
          if (this.eat(types$1.eq)) {
            decl.init = this.parseMaybeAssign(isFor);
          } else if (kind === "const" && !(this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
            this.unexpected();
          } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
            this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
          } else {
            decl.init = null;
          }
          node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
          if (!this.eat(types$1.comma)) {
            break;
          }
        }
        return node;
      };
      pp$8.parseVarId = function(decl, kind) {
        decl.id = this.parseBindingAtom();
        this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
      };
      var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;
      pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
        this.initFunction(node);
        if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
          if (this.type === types$1.star && statement & FUNC_HANGING_STATEMENT) {
            this.unexpected();
          }
          node.generator = this.eat(types$1.star);
        }
        if (this.options.ecmaVersion >= 8) {
          node.async = !!isAsync;
        }
        if (statement & FUNC_STATEMENT) {
          node.id = statement & FUNC_NULLABLE_ID && this.type !== types$1.name ? null : this.parseIdent();
          if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
            this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
          }
        }
        var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        this.enterScope(functionFlags(node.async, node.generator));
        if (!(statement & FUNC_STATEMENT)) {
          node.id = this.type === types$1.name ? this.parseIdent() : null;
        }
        this.parseFunctionParams(node);
        this.parseFunctionBody(node, allowExpressionBody, false, forInit);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
      };
      pp$8.parseFunctionParams = function(node) {
        this.expect(types$1.parenL);
        node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
        this.checkYieldAwaitInDefaultParams();
      };
      pp$8.parseClass = function(node, isStatement) {
        this.next();
        var oldStrict = this.strict;
        this.strict = true;
        this.parseClassId(node, isStatement);
        this.parseClassSuper(node);
        var privateNameMap = this.enterClassBody();
        var classBody = this.startNode();
        var hadConstructor = false;
        classBody.body = [];
        this.expect(types$1.braceL);
        while (this.type !== types$1.braceR) {
          var element = this.parseClassElement(node.superClass !== null);
          if (element) {
            classBody.body.push(element);
            if (element.type === "MethodDefinition" && element.kind === "constructor") {
              if (hadConstructor) {
                this.raise(element.start, "Duplicate constructor in the same class");
              }
              hadConstructor = true;
            } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
              this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared");
            }
          }
        }
        this.strict = oldStrict;
        this.next();
        node.body = this.finishNode(classBody, "ClassBody");
        this.exitClassBody();
        return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
      };
      pp$8.parseClassElement = function(constructorAllowsSuper) {
        if (this.eat(types$1.semi)) {
          return null;
        }
        var ecmaVersion2 = this.options.ecmaVersion;
        var node = this.startNode();
        var keyName = "";
        var isGenerator = false;
        var isAsync = false;
        var kind = "method";
        var isStatic = false;
        if (this.eatContextual("static")) {
          if (ecmaVersion2 >= 13 && this.eat(types$1.braceL)) {
            this.parseClassStaticBlock(node);
            return node;
          }
          if (this.isClassElementNameStart() || this.type === types$1.star) {
            isStatic = true;
          } else {
            keyName = "static";
          }
        }
        node.static = isStatic;
        if (!keyName && ecmaVersion2 >= 8 && this.eatContextual("async")) {
          if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
            isAsync = true;
          } else {
            keyName = "async";
          }
        }
        if (!keyName && (ecmaVersion2 >= 9 || !isAsync) && this.eat(types$1.star)) {
          isGenerator = true;
        }
        if (!keyName && !isAsync && !isGenerator) {
          var lastValue = this.value;
          if (this.eatContextual("get") || this.eatContextual("set")) {
            if (this.isClassElementNameStart()) {
              kind = lastValue;
            } else {
              keyName = lastValue;
            }
          }
        }
        if (keyName) {
          node.computed = false;
          node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
          node.key.name = keyName;
          this.finishNode(node.key, "Identifier");
        } else {
          this.parseClassElementName(node);
        }
        if (ecmaVersion2 < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
          var isConstructor = !node.static && checkKeyName(node, "constructor");
          var allowsDirectSuper = isConstructor && constructorAllowsSuper;
          if (isConstructor && kind !== "method") {
            this.raise(node.key.start, "Constructor can't have get/set modifier");
          }
          node.kind = isConstructor ? "constructor" : kind;
          this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
        } else {
          this.parseClassField(node);
        }
        return node;
      };
      pp$8.isClassElementNameStart = function() {
        return this.type === types$1.name || this.type === types$1.privateId || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword;
      };
      pp$8.parseClassElementName = function(element) {
        if (this.type === types$1.privateId) {
          if (this.value === "constructor") {
            this.raise(this.start, "Classes can't have an element named '#constructor'");
          }
          element.computed = false;
          element.key = this.parsePrivateIdent();
        } else {
          this.parsePropertyName(element);
        }
      };
      pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
        var key = method.key;
        if (method.kind === "constructor") {
          if (isGenerator) {
            this.raise(key.start, "Constructor can't be a generator");
          }
          if (isAsync) {
            this.raise(key.start, "Constructor can't be an async method");
          }
        } else if (method.static && checkKeyName(method, "prototype")) {
          this.raise(key.start, "Classes may not have a static property named prototype");
        }
        var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
        if (method.kind === "get" && value.params.length !== 0) {
          this.raiseRecoverable(value.start, "getter should have no params");
        }
        if (method.kind === "set" && value.params.length !== 1) {
          this.raiseRecoverable(value.start, "setter should have exactly one param");
        }
        if (method.kind === "set" && value.params[0].type === "RestElement") {
          this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params");
        }
        return this.finishNode(method, "MethodDefinition");
      };
      pp$8.parseClassField = function(field) {
        if (checkKeyName(field, "constructor")) {
          this.raise(field.key.start, "Classes can't have a field named 'constructor'");
        } else if (field.static && checkKeyName(field, "prototype")) {
          this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
        }
        if (this.eat(types$1.eq)) {
          var scope = this.currentThisScope();
          var inClassFieldInit = scope.inClassFieldInit;
          scope.inClassFieldInit = true;
          field.value = this.parseMaybeAssign();
          scope.inClassFieldInit = inClassFieldInit;
        } else {
          field.value = null;
        }
        this.semicolon();
        return this.finishNode(field, "PropertyDefinition");
      };
      pp$8.parseClassStaticBlock = function(node) {
        node.body = [];
        var oldLabels = this.labels;
        this.labels = [];
        this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
        while (this.type !== types$1.braceR) {
          var stmt = this.parseStatement(null);
          node.body.push(stmt);
        }
        this.next();
        this.exitScope();
        this.labels = oldLabels;
        return this.finishNode(node, "StaticBlock");
      };
      pp$8.parseClassId = function(node, isStatement) {
        if (this.type === types$1.name) {
          node.id = this.parseIdent();
          if (isStatement) {
            this.checkLValSimple(node.id, BIND_LEXICAL, false);
          }
        } else {
          if (isStatement === true) {
            this.unexpected();
          }
          node.id = null;
        }
      };
      pp$8.parseClassSuper = function(node) {
        node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(false) : null;
      };
      pp$8.enterClassBody = function() {
        var element = { declared: /* @__PURE__ */ Object.create(null), used: [] };
        this.privateNameStack.push(element);
        return element.declared;
      };
      pp$8.exitClassBody = function() {
        var ref2 = this.privateNameStack.pop();
        var declared = ref2.declared;
        var used = ref2.used;
        var len = this.privateNameStack.length;
        var parent = len === 0 ? null : this.privateNameStack[len - 1];
        for (var i2 = 0; i2 < used.length; ++i2) {
          var id = used[i2];
          if (!hasOwn(declared, id.name)) {
            if (parent) {
              parent.used.push(id);
            } else {
              this.raiseRecoverable(id.start, "Private field '#" + id.name + "' must be declared in an enclosing class");
            }
          }
        }
      };
      function isPrivateNameConflicted(privateNameMap, element) {
        var name = element.key.name;
        var curr = privateNameMap[name];
        var next = "true";
        if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
          next = (element.static ? "s" : "i") + element.kind;
        }
        if (curr === "iget" && next === "iset" || curr === "iset" && next === "iget" || curr === "sget" && next === "sset" || curr === "sset" && next === "sget") {
          privateNameMap[name] = "true";
          return false;
        } else if (!curr) {
          privateNameMap[name] = next;
          return false;
        } else {
          return true;
        }
      }
      __name(isPrivateNameConflicted, "isPrivateNameConflicted");
      function checkKeyName(node, name) {
        var computed = node.computed;
        var key = node.key;
        return !computed && (key.type === "Identifier" && key.name === name || key.type === "Literal" && key.value === name);
      }
      __name(checkKeyName, "checkKeyName");
      pp$8.parseExport = function(node, exports3) {
        this.next();
        if (this.eat(types$1.star)) {
          if (this.options.ecmaVersion >= 11) {
            if (this.eatContextual("as")) {
              node.exported = this.parseModuleExportName();
              this.checkExport(exports3, node.exported, this.lastTokStart);
            } else {
              node.exported = null;
            }
          }
          this.expectContextual("from");
          if (this.type !== types$1.string) {
            this.unexpected();
          }
          node.source = this.parseExprAtom();
          this.semicolon();
          return this.finishNode(node, "ExportAllDeclaration");
        }
        if (this.eat(types$1._default)) {
          this.checkExport(exports3, "default", this.lastTokStart);
          var isAsync;
          if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
            var fNode = this.startNode();
            this.next();
            if (isAsync) {
              this.next();
            }
            node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
          } else if (this.type === types$1._class) {
            var cNode = this.startNode();
            node.declaration = this.parseClass(cNode, "nullableID");
          } else {
            node.declaration = this.parseMaybeAssign();
            this.semicolon();
          }
          return this.finishNode(node, "ExportDefaultDeclaration");
        }
        if (this.shouldParseExportStatement()) {
          node.declaration = this.parseStatement(null);
          if (node.declaration.type === "VariableDeclaration") {
            this.checkVariableExport(exports3, node.declaration.declarations);
          } else {
            this.checkExport(exports3, node.declaration.id, node.declaration.id.start);
          }
          node.specifiers = [];
          node.source = null;
        } else {
          node.declaration = null;
          node.specifiers = this.parseExportSpecifiers(exports3);
          if (this.eatContextual("from")) {
            if (this.type !== types$1.string) {
              this.unexpected();
            }
            node.source = this.parseExprAtom();
          } else {
            for (var i2 = 0, list2 = node.specifiers; i2 < list2.length; i2 += 1) {
              var spec = list2[i2];
              this.checkUnreserved(spec.local);
              this.checkLocalExport(spec.local);
              if (spec.local.type === "Literal") {
                this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
              }
            }
            node.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(node, "ExportNamedDeclaration");
      };
      pp$8.checkExport = function(exports3, name, pos) {
        if (!exports3) {
          return;
        }
        if (typeof name !== "string") {
          name = name.type === "Identifier" ? name.name : name.value;
        }
        if (hasOwn(exports3, name)) {
          this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
        }
        exports3[name] = true;
      };
      pp$8.checkPatternExport = function(exports3, pat) {
        var type = pat.type;
        if (type === "Identifier") {
          this.checkExport(exports3, pat, pat.start);
        } else if (type === "ObjectPattern") {
          for (var i2 = 0, list2 = pat.properties; i2 < list2.length; i2 += 1) {
            var prop = list2[i2];
            this.checkPatternExport(exports3, prop);
          }
        } else if (type === "ArrayPattern") {
          for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
            var elt = list$1[i$1];
            if (elt) {
              this.checkPatternExport(exports3, elt);
            }
          }
        } else if (type === "Property") {
          this.checkPatternExport(exports3, pat.value);
        } else if (type === "AssignmentPattern") {
          this.checkPatternExport(exports3, pat.left);
        } else if (type === "RestElement") {
          this.checkPatternExport(exports3, pat.argument);
        } else if (type === "ParenthesizedExpression") {
          this.checkPatternExport(exports3, pat.expression);
        }
      };
      pp$8.checkVariableExport = function(exports3, decls) {
        if (!exports3) {
          return;
        }
        for (var i2 = 0, list2 = decls; i2 < list2.length; i2 += 1) {
          var decl = list2[i2];
          this.checkPatternExport(exports3, decl.id);
        }
      };
      pp$8.shouldParseExportStatement = function() {
        return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
      };
      pp$8.parseExportSpecifiers = function(exports3) {
        var nodes = [], first = true;
        this.expect(types$1.braceL);
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.afterTrailingComma(types$1.braceR)) {
              break;
            }
          } else {
            first = false;
          }
          var node = this.startNode();
          node.local = this.parseModuleExportName();
          node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
          this.checkExport(
            exports3,
            node.exported,
            node.exported.start
          );
          nodes.push(this.finishNode(node, "ExportSpecifier"));
        }
        return nodes;
      };
      pp$8.parseImport = function(node) {
        this.next();
        if (this.type === types$1.string) {
          node.specifiers = empty$1;
          node.source = this.parseExprAtom();
        } else {
          node.specifiers = this.parseImportSpecifiers();
          this.expectContextual("from");
          node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
        }
        this.semicolon();
        return this.finishNode(node, "ImportDeclaration");
      };
      pp$8.parseImportSpecifiers = function() {
        var nodes = [], first = true;
        if (this.type === types$1.name) {
          var node = this.startNode();
          node.local = this.parseIdent();
          this.checkLValSimple(node.local, BIND_LEXICAL);
          nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
          if (!this.eat(types$1.comma)) {
            return nodes;
          }
        }
        if (this.type === types$1.star) {
          var node$1 = this.startNode();
          this.next();
          this.expectContextual("as");
          node$1.local = this.parseIdent();
          this.checkLValSimple(node$1.local, BIND_LEXICAL);
          nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
          return nodes;
        }
        this.expect(types$1.braceL);
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.afterTrailingComma(types$1.braceR)) {
              break;
            }
          } else {
            first = false;
          }
          var node$2 = this.startNode();
          node$2.imported = this.parseModuleExportName();
          if (this.eatContextual("as")) {
            node$2.local = this.parseIdent();
          } else {
            this.checkUnreserved(node$2.imported);
            node$2.local = node$2.imported;
          }
          this.checkLValSimple(node$2.local, BIND_LEXICAL);
          nodes.push(this.finishNode(node$2, "ImportSpecifier"));
        }
        return nodes;
      };
      pp$8.parseModuleExportName = function() {
        if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
          var stringLiteral = this.parseLiteral(this.value);
          if (loneSurrogate.test(stringLiteral.value)) {
            this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
          }
          return stringLiteral;
        }
        return this.parseIdent(true);
      };
      pp$8.adaptDirectivePrologue = function(statements) {
        for (var i2 = 0; i2 < statements.length && this.isDirectiveCandidate(statements[i2]); ++i2) {
          statements[i2].directive = statements[i2].expression.raw.slice(1, -1);
        }
      };
      pp$8.isDirectiveCandidate = function(statement) {
        return this.options.ecmaVersion >= 5 && statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && (this.input[statement.start] === '"' || this.input[statement.start] === "'");
      };
      var pp$7 = Parser2.prototype;
      pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
        if (this.options.ecmaVersion >= 6 && node) {
          switch (node.type) {
            case "Identifier":
              if (this.inAsync && node.name === "await") {
                this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
              }
              break;
            case "ObjectPattern":
            case "ArrayPattern":
            case "AssignmentPattern":
            case "RestElement":
              break;
            case "ObjectExpression":
              node.type = "ObjectPattern";
              if (refDestructuringErrors) {
                this.checkPatternErrors(refDestructuringErrors, true);
              }
              for (var i2 = 0, list2 = node.properties; i2 < list2.length; i2 += 1) {
                var prop = list2[i2];
                this.toAssignable(prop, isBinding);
                if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
                  this.raise(prop.argument.start, "Unexpected token");
                }
              }
              break;
            case "Property":
              if (node.kind !== "init") {
                this.raise(node.key.start, "Object pattern can't contain getter or setter");
              }
              this.toAssignable(node.value, isBinding);
              break;
            case "ArrayExpression":
              node.type = "ArrayPattern";
              if (refDestructuringErrors) {
                this.checkPatternErrors(refDestructuringErrors, true);
              }
              this.toAssignableList(node.elements, isBinding);
              break;
            case "SpreadElement":
              node.type = "RestElement";
              this.toAssignable(node.argument, isBinding);
              if (node.argument.type === "AssignmentPattern") {
                this.raise(node.argument.start, "Rest elements cannot have a default value");
              }
              break;
            case "AssignmentExpression":
              if (node.operator !== "=") {
                this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
              }
              node.type = "AssignmentPattern";
              delete node.operator;
              this.toAssignable(node.left, isBinding);
              break;
            case "ParenthesizedExpression":
              this.toAssignable(node.expression, isBinding, refDestructuringErrors);
              break;
            case "ChainExpression":
              this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
              break;
            case "MemberExpression":
              if (!isBinding) {
                break;
              }
            default:
              this.raise(node.start, "Assigning to rvalue");
          }
        } else if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        return node;
      };
      pp$7.toAssignableList = function(exprList, isBinding) {
        var end = exprList.length;
        for (var i2 = 0; i2 < end; i2++) {
          var elt = exprList[i2];
          if (elt) {
            this.toAssignable(elt, isBinding);
          }
        }
        if (end) {
          var last = exprList[end - 1];
          if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
            this.unexpected(last.argument.start);
          }
        }
        return exprList;
      };
      pp$7.parseSpread = function(refDestructuringErrors) {
        var node = this.startNode();
        this.next();
        node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
        return this.finishNode(node, "SpreadElement");
      };
      pp$7.parseRestBinding = function() {
        var node = this.startNode();
        this.next();
        if (this.options.ecmaVersion === 6 && this.type !== types$1.name) {
          this.unexpected();
        }
        node.argument = this.parseBindingAtom();
        return this.finishNode(node, "RestElement");
      };
      pp$7.parseBindingAtom = function() {
        if (this.options.ecmaVersion >= 6) {
          switch (this.type) {
            case types$1.bracketL:
              var node = this.startNode();
              this.next();
              node.elements = this.parseBindingList(types$1.bracketR, true, true);
              return this.finishNode(node, "ArrayPattern");
            case types$1.braceL:
              return this.parseObj(true);
          }
        }
        return this.parseIdent();
      };
      pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
        var elts = [], first = true;
        while (!this.eat(close)) {
          if (first) {
            first = false;
          } else {
            this.expect(types$1.comma);
          }
          if (allowEmpty && this.type === types$1.comma) {
            elts.push(null);
          } else if (allowTrailingComma && this.afterTrailingComma(close)) {
            break;
          } else if (this.type === types$1.ellipsis) {
            var rest = this.parseRestBinding();
            this.parseBindingListItem(rest);
            elts.push(rest);
            if (this.type === types$1.comma) {
              this.raise(this.start, "Comma is not permitted after the rest element");
            }
            this.expect(close);
            break;
          } else {
            var elem = this.parseMaybeDefault(this.start, this.startLoc);
            this.parseBindingListItem(elem);
            elts.push(elem);
          }
        }
        return elts;
      };
      pp$7.parseBindingListItem = function(param) {
        return param;
      };
      pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
        left = left || this.parseBindingAtom();
        if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) {
          return left;
        }
        var node = this.startNodeAt(startPos, startLoc);
        node.left = left;
        node.right = this.parseMaybeAssign();
        return this.finishNode(node, "AssignmentPattern");
      };
      pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
        if (bindingType === void 0)
          bindingType = BIND_NONE;
        var isBind = bindingType !== BIND_NONE;
        switch (expr.type) {
          case "Identifier":
            if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
              this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
            }
            if (isBind) {
              if (bindingType === BIND_LEXICAL && expr.name === "let") {
                this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
              }
              if (checkClashes) {
                if (hasOwn(checkClashes, expr.name)) {
                  this.raiseRecoverable(expr.start, "Argument name clash");
                }
                checkClashes[expr.name] = true;
              }
              if (bindingType !== BIND_OUTSIDE) {
                this.declareName(expr.name, bindingType, expr.start);
              }
            }
            break;
          case "ChainExpression":
            this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
            break;
          case "MemberExpression":
            if (isBind) {
              this.raiseRecoverable(expr.start, "Binding member expression");
            }
            break;
          case "ParenthesizedExpression":
            if (isBind) {
              this.raiseRecoverable(expr.start, "Binding parenthesized expression");
            }
            return this.checkLValSimple(expr.expression, bindingType, checkClashes);
          default:
            this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
        }
      };
      pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
        if (bindingType === void 0)
          bindingType = BIND_NONE;
        switch (expr.type) {
          case "ObjectPattern":
            for (var i2 = 0, list2 = expr.properties; i2 < list2.length; i2 += 1) {
              var prop = list2[i2];
              this.checkLValInnerPattern(prop, bindingType, checkClashes);
            }
            break;
          case "ArrayPattern":
            for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
              var elem = list$1[i$1];
              if (elem) {
                this.checkLValInnerPattern(elem, bindingType, checkClashes);
              }
            }
            break;
          default:
            this.checkLValSimple(expr, bindingType, checkClashes);
        }
      };
      pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
        if (bindingType === void 0)
          bindingType = BIND_NONE;
        switch (expr.type) {
          case "Property":
            this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
            break;
          case "AssignmentPattern":
            this.checkLValPattern(expr.left, bindingType, checkClashes);
            break;
          case "RestElement":
            this.checkLValPattern(expr.argument, bindingType, checkClashes);
            break;
          default:
            this.checkLValPattern(expr, bindingType, checkClashes);
        }
      };
      var TokContext = /* @__PURE__ */ __name(function TokContext2(token, isExpr, preserveSpace, override, generator) {
        this.token = token;
        this.isExpr = !!isExpr;
        this.preserveSpace = !!preserveSpace;
        this.override = override;
        this.generator = !!generator;
      }, "TokContext");
      var types = {
        b_stat: new TokContext("{", false),
        b_expr: new TokContext("{", true),
        b_tmpl: new TokContext("${", false),
        p_stat: new TokContext("(", false),
        p_expr: new TokContext("(", true),
        q_tmpl: new TokContext("`", true, true, function(p) {
          return p.tryReadTemplateToken();
        }),
        f_stat: new TokContext("function", false),
        f_expr: new TokContext("function", true),
        f_expr_gen: new TokContext("function", true, false, null, true),
        f_gen: new TokContext("function", false, false, null, true)
      };
      var pp$6 = Parser2.prototype;
      pp$6.initialContext = function() {
        return [types.b_stat];
      };
      pp$6.curContext = function() {
        return this.context[this.context.length - 1];
      };
      pp$6.braceIsBlock = function(prevType) {
        var parent = this.curContext();
        if (parent === types.f_expr || parent === types.f_stat) {
          return true;
        }
        if (prevType === types$1.colon && (parent === types.b_stat || parent === types.b_expr)) {
          return !parent.isExpr;
        }
        if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed) {
          return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
        }
        if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow) {
          return true;
        }
        if (prevType === types$1.braceL) {
          return parent === types.b_stat;
        }
        if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name) {
          return false;
        }
        return !this.exprAllowed;
      };
      pp$6.inGeneratorContext = function() {
        for (var i2 = this.context.length - 1; i2 >= 1; i2--) {
          var context = this.context[i2];
          if (context.token === "function") {
            return context.generator;
          }
        }
        return false;
      };
      pp$6.updateContext = function(prevType) {
        var update, type = this.type;
        if (type.keyword && prevType === types$1.dot) {
          this.exprAllowed = false;
        } else if (update = type.updateContext) {
          update.call(this, prevType);
        } else {
          this.exprAllowed = type.beforeExpr;
        }
      };
      pp$6.overrideContext = function(tokenCtx) {
        if (this.curContext() !== tokenCtx) {
          this.context[this.context.length - 1] = tokenCtx;
        }
      };
      types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
        if (this.context.length === 1) {
          this.exprAllowed = true;
          return;
        }
        var out = this.context.pop();
        if (out === types.b_stat && this.curContext().token === "function") {
          out = this.context.pop();
        }
        this.exprAllowed = !out.isExpr;
      };
      types$1.braceL.updateContext = function(prevType) {
        this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
        this.exprAllowed = true;
      };
      types$1.dollarBraceL.updateContext = function() {
        this.context.push(types.b_tmpl);
        this.exprAllowed = true;
      };
      types$1.parenL.updateContext = function(prevType) {
        var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
        this.context.push(statementParens ? types.p_stat : types.p_expr);
        this.exprAllowed = true;
      };
      types$1.incDec.updateContext = function() {
      };
      types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
        if (prevType.beforeExpr && prevType !== types$1._else && !(prevType === types$1.semi && this.curContext() !== types.p_stat) && !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat)) {
          this.context.push(types.f_expr);
        } else {
          this.context.push(types.f_stat);
        }
        this.exprAllowed = false;
      };
      types$1.backQuote.updateContext = function() {
        if (this.curContext() === types.q_tmpl) {
          this.context.pop();
        } else {
          this.context.push(types.q_tmpl);
        }
        this.exprAllowed = false;
      };
      types$1.star.updateContext = function(prevType) {
        if (prevType === types$1._function) {
          var index = this.context.length - 1;
          if (this.context[index] === types.f_expr) {
            this.context[index] = types.f_expr_gen;
          } else {
            this.context[index] = types.f_gen;
          }
        }
        this.exprAllowed = true;
      };
      types$1.name.updateContext = function(prevType) {
        var allowed = false;
        if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
          if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
            allowed = true;
          }
        }
        this.exprAllowed = allowed;
      };
      var pp$5 = Parser2.prototype;
      pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
        if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
          return;
        }
        if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
          return;
        }
        var key = prop.key;
        var name;
        switch (key.type) {
          case "Identifier":
            name = key.name;
            break;
          case "Literal":
            name = String(key.value);
            break;
          default:
            return;
        }
        var kind = prop.kind;
        if (this.options.ecmaVersion >= 6) {
          if (name === "__proto__" && kind === "init") {
            if (propHash.proto) {
              if (refDestructuringErrors) {
                if (refDestructuringErrors.doubleProto < 0) {
                  refDestructuringErrors.doubleProto = key.start;
                }
              } else {
                this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
              }
            }
            propHash.proto = true;
          }
          return;
        }
        name = "$" + name;
        var other = propHash[name];
        if (other) {
          var redefinition;
          if (kind === "init") {
            redefinition = this.strict && other.init || other.get || other.set;
          } else {
            redefinition = other.init || other[kind];
          }
          if (redefinition) {
            this.raiseRecoverable(key.start, "Redefinition of property");
          }
        } else {
          other = propHash[name] = {
            init: false,
            get: false,
            set: false
          };
        }
        other[kind] = true;
      };
      pp$5.parseExpression = function(forInit, refDestructuringErrors) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
        if (this.type === types$1.comma) {
          var node = this.startNodeAt(startPos, startLoc);
          node.expressions = [expr];
          while (this.eat(types$1.comma)) {
            node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors));
          }
          return this.finishNode(node, "SequenceExpression");
        }
        return expr;
      };
      pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) {
            return this.parseYield(forInit);
          } else {
            this.exprAllowed = false;
          }
        }
        var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
        if (refDestructuringErrors) {
          oldParenAssign = refDestructuringErrors.parenthesizedAssign;
          oldTrailingComma = refDestructuringErrors.trailingComma;
          oldDoubleProto = refDestructuringErrors.doubleProto;
          refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
        } else {
          refDestructuringErrors = new DestructuringErrors();
          ownDestructuringErrors = true;
        }
        var startPos = this.start, startLoc = this.startLoc;
        if (this.type === types$1.parenL || this.type === types$1.name) {
          this.potentialArrowAt = this.start;
          this.potentialArrowInForAwait = forInit === "await";
        }
        var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
        if (afterLeftParse) {
          left = afterLeftParse.call(this, left, startPos, startLoc);
        }
        if (this.type.isAssign) {
          var node = this.startNodeAt(startPos, startLoc);
          node.operator = this.value;
          if (this.type === types$1.eq) {
            left = this.toAssignable(left, false, refDestructuringErrors);
          }
          if (!ownDestructuringErrors) {
            refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
          }
          if (refDestructuringErrors.shorthandAssign >= left.start) {
            refDestructuringErrors.shorthandAssign = -1;
          }
          if (this.type === types$1.eq) {
            this.checkLValPattern(left);
          } else {
            this.checkLValSimple(left);
          }
          node.left = left;
          this.next();
          node.right = this.parseMaybeAssign(forInit);
          if (oldDoubleProto > -1) {
            refDestructuringErrors.doubleProto = oldDoubleProto;
          }
          return this.finishNode(node, "AssignmentExpression");
        } else {
          if (ownDestructuringErrors) {
            this.checkExpressionErrors(refDestructuringErrors, true);
          }
        }
        if (oldParenAssign > -1) {
          refDestructuringErrors.parenthesizedAssign = oldParenAssign;
        }
        if (oldTrailingComma > -1) {
          refDestructuringErrors.trailingComma = oldTrailingComma;
        }
        return left;
      };
      pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseExprOps(forInit, refDestructuringErrors);
        if (this.checkExpressionErrors(refDestructuringErrors)) {
          return expr;
        }
        if (this.eat(types$1.question)) {
          var node = this.startNodeAt(startPos, startLoc);
          node.test = expr;
          node.consequent = this.parseMaybeAssign();
          this.expect(types$1.colon);
          node.alternate = this.parseMaybeAssign(forInit);
          return this.finishNode(node, "ConditionalExpression");
        }
        return expr;
      };
      pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
        if (this.checkExpressionErrors(refDestructuringErrors)) {
          return expr;
        }
        return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
      };
      pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
        var prec = this.type.binop;
        if (prec != null && (!forInit || this.type !== types$1._in)) {
          if (prec > minPrec) {
            var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
            var coalesce = this.type === types$1.coalesce;
            if (coalesce) {
              prec = types$1.logicalAND.binop;
            }
            var op = this.value;
            this.next();
            var startPos = this.start, startLoc = this.startLoc;
            var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
            var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
            if (logical && this.type === types$1.coalesce || coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) {
              this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
            }
            return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
          }
        }
        return left;
      };
      pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
        if (right.type === "PrivateIdentifier") {
          this.raise(right.start, "Private identifier can only be left side of binary expression");
        }
        var node = this.startNodeAt(startPos, startLoc);
        node.left = left;
        node.operator = op;
        node.right = right;
        return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
      };
      pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
        var startPos = this.start, startLoc = this.startLoc, expr;
        if (this.isContextual("await") && this.canAwait) {
          expr = this.parseAwait(forInit);
          sawUnary = true;
        } else if (this.type.prefix) {
          var node = this.startNode(), update = this.type === types$1.incDec;
          node.operator = this.value;
          node.prefix = true;
          this.next();
          node.argument = this.parseMaybeUnary(null, true, update, forInit);
          this.checkExpressionErrors(refDestructuringErrors, true);
          if (update) {
            this.checkLValSimple(node.argument);
          } else if (this.strict && node.operator === "delete" && node.argument.type === "Identifier") {
            this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
          } else if (node.operator === "delete" && isPrivateFieldAccess(node.argument)) {
            this.raiseRecoverable(node.start, "Private fields can not be deleted");
          } else {
            sawUnary = true;
          }
          expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
        } else if (!sawUnary && this.type === types$1.privateId) {
          if (forInit || this.privateNameStack.length === 0) {
            this.unexpected();
          }
          expr = this.parsePrivateIdent();
          if (this.type !== types$1._in) {
            this.unexpected();
          }
        } else {
          expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
          if (this.checkExpressionErrors(refDestructuringErrors)) {
            return expr;
          }
          while (this.type.postfix && !this.canInsertSemicolon()) {
            var node$1 = this.startNodeAt(startPos, startLoc);
            node$1.operator = this.value;
            node$1.prefix = false;
            node$1.argument = expr;
            this.checkLValSimple(expr);
            this.next();
            expr = this.finishNode(node$1, "UpdateExpression");
          }
        }
        if (!incDec && this.eat(types$1.starstar)) {
          if (sawUnary) {
            this.unexpected(this.lastTokStart);
          } else {
            return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false);
          }
        } else {
          return expr;
        }
      };
      function isPrivateFieldAccess(node) {
        return node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" || node.type === "ChainExpression" && isPrivateFieldAccess(node.expression);
      }
      __name(isPrivateFieldAccess, "isPrivateFieldAccess");
      pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseExprAtom(refDestructuringErrors, forInit);
        if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
          return expr;
        }
        var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
        if (refDestructuringErrors && result.type === "MemberExpression") {
          if (refDestructuringErrors.parenthesizedAssign >= result.start) {
            refDestructuringErrors.parenthesizedAssign = -1;
          }
          if (refDestructuringErrors.parenthesizedBind >= result.start) {
            refDestructuringErrors.parenthesizedBind = -1;
          }
          if (refDestructuringErrors.trailingComma >= result.start) {
            refDestructuringErrors.trailingComma = -1;
          }
        }
        return result;
      };
      pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
        var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
        var optionalChained = false;
        while (true) {
          var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
          if (element.optional) {
            optionalChained = true;
          }
          if (element === base || element.type === "ArrowFunctionExpression") {
            if (optionalChained) {
              var chainNode = this.startNodeAt(startPos, startLoc);
              chainNode.expression = element;
              element = this.finishNode(chainNode, "ChainExpression");
            }
            return element;
          }
          base = element;
        }
      };
      pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
        var optionalSupported = this.options.ecmaVersion >= 11;
        var optional = optionalSupported && this.eat(types$1.questionDot);
        if (noCalls && optional) {
          this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        }
        var computed = this.eat(types$1.bracketL);
        if (computed || optional && this.type !== types$1.parenL && this.type !== types$1.backQuote || this.eat(types$1.dot)) {
          var node = this.startNodeAt(startPos, startLoc);
          node.object = base;
          if (computed) {
            node.property = this.parseExpression();
            this.expect(types$1.bracketR);
          } else if (this.type === types$1.privateId && base.type !== "Super") {
            node.property = this.parsePrivateIdent();
          } else {
            node.property = this.parseIdent(this.options.allowReserved !== "never");
          }
          node.computed = !!computed;
          if (optionalSupported) {
            node.optional = optional;
          }
          base = this.finishNode(node, "MemberExpression");
        } else if (!noCalls && this.eat(types$1.parenL)) {
          var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
          this.yieldPos = 0;
          this.awaitPos = 0;
          this.awaitIdentPos = 0;
          var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
          if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types$1.arrow)) {
            this.checkPatternErrors(refDestructuringErrors, false);
            this.checkYieldAwaitInDefaultParams();
            if (this.awaitIdentPos > 0) {
              this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
            }
            this.yieldPos = oldYieldPos;
            this.awaitPos = oldAwaitPos;
            this.awaitIdentPos = oldAwaitIdentPos;
            return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit);
          }
          this.checkExpressionErrors(refDestructuringErrors, true);
          this.yieldPos = oldYieldPos || this.yieldPos;
          this.awaitPos = oldAwaitPos || this.awaitPos;
          this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
          var node$1 = this.startNodeAt(startPos, startLoc);
          node$1.callee = base;
          node$1.arguments = exprList;
          if (optionalSupported) {
            node$1.optional = optional;
          }
          base = this.finishNode(node$1, "CallExpression");
        } else if (this.type === types$1.backQuote) {
          if (optional || optionalChained) {
            this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          }
          var node$2 = this.startNodeAt(startPos, startLoc);
          node$2.tag = base;
          node$2.quasi = this.parseTemplate({ isTagged: true });
          base = this.finishNode(node$2, "TaggedTemplateExpression");
        }
        return base;
      };
      pp$5.parseExprAtom = function(refDestructuringErrors, forInit) {
        if (this.type === types$1.slash) {
          this.readRegexp();
        }
        var node, canBeArrow = this.potentialArrowAt === this.start;
        switch (this.type) {
          case types$1._super:
            if (!this.allowSuper) {
              this.raise(this.start, "'super' keyword outside a method");
            }
            node = this.startNode();
            this.next();
            if (this.type === types$1.parenL && !this.allowDirectSuper) {
              this.raise(node.start, "super() call outside constructor of a subclass");
            }
            if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL) {
              this.unexpected();
            }
            return this.finishNode(node, "Super");
          case types$1._this:
            node = this.startNode();
            this.next();
            return this.finishNode(node, "ThisExpression");
          case types$1.name:
            var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
            var id = this.parseIdent(false);
            if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
              this.overrideContext(types.f_expr);
              return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit);
            }
            if (canBeArrow && !this.canInsertSemicolon()) {
              if (this.eat(types$1.arrow)) {
                return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit);
              }
              if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
                id = this.parseIdent(false);
                if (this.canInsertSemicolon() || !this.eat(types$1.arrow)) {
                  this.unexpected();
                }
                return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit);
              }
            }
            return id;
          case types$1.regexp:
            var value = this.value;
            node = this.parseLiteral(value.value);
            node.regex = { pattern: value.pattern, flags: value.flags };
            return node;
          case types$1.num:
          case types$1.string:
            return this.parseLiteral(this.value);
          case types$1._null:
          case types$1._true:
          case types$1._false:
            node = this.startNode();
            node.value = this.type === types$1._null ? null : this.type === types$1._true;
            node.raw = this.type.keyword;
            this.next();
            return this.finishNode(node, "Literal");
          case types$1.parenL:
            var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
            if (refDestructuringErrors) {
              if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
                refDestructuringErrors.parenthesizedAssign = start;
              }
              if (refDestructuringErrors.parenthesizedBind < 0) {
                refDestructuringErrors.parenthesizedBind = start;
              }
            }
            return expr;
          case types$1.bracketL:
            node = this.startNode();
            this.next();
            node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
            return this.finishNode(node, "ArrayExpression");
          case types$1.braceL:
            this.overrideContext(types.b_expr);
            return this.parseObj(false, refDestructuringErrors);
          case types$1._function:
            node = this.startNode();
            this.next();
            return this.parseFunction(node, 0);
          case types$1._class:
            return this.parseClass(this.startNode(), false);
          case types$1._new:
            return this.parseNew();
          case types$1.backQuote:
            return this.parseTemplate();
          case types$1._import:
            if (this.options.ecmaVersion >= 11) {
              return this.parseExprImport();
            } else {
              return this.unexpected();
            }
          default:
            this.unexpected();
        }
      };
      pp$5.parseExprImport = function() {
        var node = this.startNode();
        if (this.containsEsc) {
          this.raiseRecoverable(this.start, "Escape sequence in keyword import");
        }
        var meta = this.parseIdent(true);
        switch (this.type) {
          case types$1.parenL:
            return this.parseDynamicImport(node);
          case types$1.dot:
            node.meta = meta;
            return this.parseImportMeta(node);
          default:
            this.unexpected();
        }
      };
      pp$5.parseDynamicImport = function(node) {
        this.next();
        node.source = this.parseMaybeAssign();
        if (!this.eat(types$1.parenR)) {
          var errorPos = this.start;
          if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
            this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
          } else {
            this.unexpected(errorPos);
          }
        }
        return this.finishNode(node, "ImportExpression");
      };
      pp$5.parseImportMeta = function(node) {
        this.next();
        var containsEsc = this.containsEsc;
        node.property = this.parseIdent(true);
        if (node.property.name !== "meta") {
          this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
        }
        if (containsEsc) {
          this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
        }
        if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) {
          this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
        }
        return this.finishNode(node, "MetaProperty");
      };
      pp$5.parseLiteral = function(value) {
        var node = this.startNode();
        node.value = value;
        node.raw = this.input.slice(this.start, this.end);
        if (node.raw.charCodeAt(node.raw.length - 1) === 110) {
          node.bigint = node.raw.slice(0, -1).replace(/_/g, "");
        }
        this.next();
        return this.finishNode(node, "Literal");
      };
      pp$5.parseParenExpression = function() {
        this.expect(types$1.parenL);
        var val = this.parseExpression();
        this.expect(types$1.parenR);
        return val;
      };
      pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
        var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          this.next();
          var innerStartPos = this.start, innerStartLoc = this.startLoc;
          var exprList = [], first = true, lastIsComma = false;
          var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
          this.yieldPos = 0;
          this.awaitPos = 0;
          while (this.type !== types$1.parenR) {
            first ? first = false : this.expect(types$1.comma);
            if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
              lastIsComma = true;
              break;
            } else if (this.type === types$1.ellipsis) {
              spreadStart = this.start;
              exprList.push(this.parseParenItem(this.parseRestBinding()));
              if (this.type === types$1.comma) {
                this.raise(this.start, "Comma is not permitted after the rest element");
              }
              break;
            } else {
              exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
            }
          }
          var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
          this.expect(types$1.parenR);
          if (canBeArrow && !this.canInsertSemicolon() && this.eat(types$1.arrow)) {
            this.checkPatternErrors(refDestructuringErrors, false);
            this.checkYieldAwaitInDefaultParams();
            this.yieldPos = oldYieldPos;
            this.awaitPos = oldAwaitPos;
            return this.parseParenArrowList(startPos, startLoc, exprList, forInit);
          }
          if (!exprList.length || lastIsComma) {
            this.unexpected(this.lastTokStart);
          }
          if (spreadStart) {
            this.unexpected(spreadStart);
          }
          this.checkExpressionErrors(refDestructuringErrors, true);
          this.yieldPos = oldYieldPos || this.yieldPos;
          this.awaitPos = oldAwaitPos || this.awaitPos;
          if (exprList.length > 1) {
            val = this.startNodeAt(innerStartPos, innerStartLoc);
            val.expressions = exprList;
            this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
          } else {
            val = exprList[0];
          }
        } else {
          val = this.parseParenExpression();
        }
        if (this.options.preserveParens) {
          var par = this.startNodeAt(startPos, startLoc);
          par.expression = val;
          return this.finishNode(par, "ParenthesizedExpression");
        } else {
          return val;
        }
      };
      pp$5.parseParenItem = function(item) {
        return item;
      };
      pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit);
      };
      var empty = [];
      pp$5.parseNew = function() {
        if (this.containsEsc) {
          this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        }
        var node = this.startNode();
        var meta = this.parseIdent(true);
        if (this.options.ecmaVersion >= 6 && this.eat(types$1.dot)) {
          node.meta = meta;
          var containsEsc = this.containsEsc;
          node.property = this.parseIdent(true);
          if (node.property.name !== "target") {
            this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
          }
          if (containsEsc) {
            this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
          }
          if (!this.allowNewDotTarget) {
            this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block");
          }
          return this.finishNode(node, "MetaProperty");
        }
        var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types$1._import;
        node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true, false);
        if (isImport && node.callee.type === "ImportExpression") {
          this.raise(startPos, "Cannot use new with import()");
        }
        if (this.eat(types$1.parenL)) {
          node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false);
        } else {
          node.arguments = empty;
        }
        return this.finishNode(node, "NewExpression");
      };
      pp$5.parseTemplateElement = function(ref2) {
        var isTagged = ref2.isTagged;
        var elem = this.startNode();
        if (this.type === types$1.invalidTemplate) {
          if (!isTagged) {
            this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
          }
          elem.value = {
            raw: this.value,
            cooked: null
          };
        } else {
          elem.value = {
            raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
            cooked: this.value
          };
        }
        this.next();
        elem.tail = this.type === types$1.backQuote;
        return this.finishNode(elem, "TemplateElement");
      };
      pp$5.parseTemplate = function(ref2) {
        if (ref2 === void 0)
          ref2 = {};
        var isTagged = ref2.isTagged;
        if (isTagged === void 0)
          isTagged = false;
        var node = this.startNode();
        this.next();
        node.expressions = [];
        var curElt = this.parseTemplateElement({ isTagged });
        node.quasis = [curElt];
        while (!curElt.tail) {
          if (this.type === types$1.eof) {
            this.raise(this.pos, "Unterminated template literal");
          }
          this.expect(types$1.dollarBraceL);
          node.expressions.push(this.parseExpression());
          this.expect(types$1.braceR);
          node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
        }
        this.next();
        return this.finishNode(node, "TemplateLiteral");
      };
      pp$5.isAsyncProp = function(prop) {
        return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
      };
      pp$5.parseObj = function(isPattern, refDestructuringErrors) {
        var node = this.startNode(), first = true, propHash = {};
        node.properties = [];
        this.next();
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) {
              break;
            }
          } else {
            first = false;
          }
          var prop = this.parseProperty(isPattern, refDestructuringErrors);
          if (!isPattern) {
            this.checkPropClash(prop, propHash, refDestructuringErrors);
          }
          node.properties.push(prop);
        }
        return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
      };
      pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
        var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
        if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
          if (isPattern) {
            prop.argument = this.parseIdent(false);
            if (this.type === types$1.comma) {
              this.raise(this.start, "Comma is not permitted after the rest element");
            }
            return this.finishNode(prop, "RestElement");
          }
          prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
          if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
            refDestructuringErrors.trailingComma = this.start;
          }
          return this.finishNode(prop, "SpreadElement");
        }
        if (this.options.ecmaVersion >= 6) {
          prop.method = false;
          prop.shorthand = false;
          if (isPattern || refDestructuringErrors) {
            startPos = this.start;
            startLoc = this.startLoc;
          }
          if (!isPattern) {
            isGenerator = this.eat(types$1.star);
          }
        }
        var containsEsc = this.containsEsc;
        this.parsePropertyName(prop);
        if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
          isAsync = true;
          isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
          this.parsePropertyName(prop, refDestructuringErrors);
        } else {
          isAsync = false;
        }
        this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
        return this.finishNode(prop, "Property");
      };
      pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
        if ((isGenerator || isAsync) && this.type === types$1.colon) {
          this.unexpected();
        }
        if (this.eat(types$1.colon)) {
          prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
          prop.kind = "init";
        } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
          if (isPattern) {
            this.unexpected();
          }
          prop.kind = "init";
          prop.method = true;
          prop.value = this.parseMethod(isGenerator, isAsync);
        } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
          if (isGenerator || isAsync) {
            this.unexpected();
          }
          prop.kind = prop.key.name;
          this.parsePropertyName(prop);
          prop.value = this.parseMethod(false);
          var paramCount = prop.kind === "get" ? 0 : 1;
          if (prop.value.params.length !== paramCount) {
            var start = prop.value.start;
            if (prop.kind === "get") {
              this.raiseRecoverable(start, "getter should have no params");
            } else {
              this.raiseRecoverable(start, "setter should have exactly one param");
            }
          } else {
            if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
              this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
            }
          }
        } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
          if (isGenerator || isAsync) {
            this.unexpected();
          }
          this.checkUnreserved(prop.key);
          if (prop.key.name === "await" && !this.awaitIdentPos) {
            this.awaitIdentPos = startPos;
          }
          prop.kind = "init";
          if (isPattern) {
            prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
          } else if (this.type === types$1.eq && refDestructuringErrors) {
            if (refDestructuringErrors.shorthandAssign < 0) {
              refDestructuringErrors.shorthandAssign = this.start;
            }
            prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
          } else {
            prop.value = this.copyNode(prop.key);
          }
          prop.shorthand = true;
        } else {
          this.unexpected();
        }
      };
      pp$5.parsePropertyName = function(prop) {
        if (this.options.ecmaVersion >= 6) {
          if (this.eat(types$1.bracketL)) {
            prop.computed = true;
            prop.key = this.parseMaybeAssign();
            this.expect(types$1.bracketR);
            return prop.key;
          } else {
            prop.computed = false;
          }
        }
        return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
      };
      pp$5.initFunction = function(node) {
        node.id = null;
        if (this.options.ecmaVersion >= 6) {
          node.generator = node.expression = false;
        }
        if (this.options.ecmaVersion >= 8) {
          node.async = false;
        }
      };
      pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
        var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.initFunction(node);
        if (this.options.ecmaVersion >= 6) {
          node.generator = isGenerator;
        }
        if (this.options.ecmaVersion >= 8) {
          node.async = !!isAsync;
        }
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
        this.expect(types$1.parenL);
        node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
        this.checkYieldAwaitInDefaultParams();
        this.parseFunctionBody(node, false, true, false);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, "FunctionExpression");
      };
      pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
        var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
        this.initFunction(node);
        if (this.options.ecmaVersion >= 8) {
          node.async = !!isAsync;
        }
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        node.params = this.toAssignableList(params, true);
        this.parseFunctionBody(node, true, false, forInit);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, "ArrowFunctionExpression");
      };
      pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
        var isExpression = isArrowFunction && this.type !== types$1.braceL;
        var oldStrict = this.strict, useStrict = false;
        if (isExpression) {
          node.body = this.parseMaybeAssign(forInit);
          node.expression = true;
          this.checkParams(node, false);
        } else {
          var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
          if (!oldStrict || nonSimple) {
            useStrict = this.strictDirective(this.end);
            if (useStrict && nonSimple) {
              this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
            }
          }
          var oldLabels = this.labels;
          this.labels = [];
          if (useStrict) {
            this.strict = true;
          }
          this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
          if (this.strict && node.id) {
            this.checkLValSimple(node.id, BIND_OUTSIDE);
          }
          node.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
          node.expression = false;
          this.adaptDirectivePrologue(node.body.body);
          this.labels = oldLabels;
        }
        this.exitScope();
      };
      pp$5.isSimpleParamList = function(params) {
        for (var i2 = 0, list2 = params; i2 < list2.length; i2 += 1) {
          var param = list2[i2];
          if (param.type !== "Identifier") {
            return false;
          }
        }
        return true;
      };
      pp$5.checkParams = function(node, allowDuplicates) {
        var nameHash = /* @__PURE__ */ Object.create(null);
        for (var i2 = 0, list2 = node.params; i2 < list2.length; i2 += 1) {
          var param = list2[i2];
          this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
        }
      };
      pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
        var elts = [], first = true;
        while (!this.eat(close)) {
          if (!first) {
            this.expect(types$1.comma);
            if (allowTrailingComma && this.afterTrailingComma(close)) {
              break;
            }
          } else {
            first = false;
          }
          var elt = void 0;
          if (allowEmpty && this.type === types$1.comma) {
            elt = null;
          } else if (this.type === types$1.ellipsis) {
            elt = this.parseSpread(refDestructuringErrors);
            if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) {
              refDestructuringErrors.trailingComma = this.start;
            }
          } else {
            elt = this.parseMaybeAssign(false, refDestructuringErrors);
          }
          elts.push(elt);
        }
        return elts;
      };
      pp$5.checkUnreserved = function(ref2) {
        var start = ref2.start;
        var end = ref2.end;
        var name = ref2.name;
        if (this.inGenerator && name === "yield") {
          this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
        }
        if (this.inAsync && name === "await") {
          this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
        }
        if (this.currentThisScope().inClassFieldInit && name === "arguments") {
          this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
        }
        if (this.inClassStaticBlock && (name === "arguments" || name === "await")) {
          this.raise(start, "Cannot use " + name + " in class static initialization block");
        }
        if (this.keywords.test(name)) {
          this.raise(start, "Unexpected keyword '" + name + "'");
        }
        if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
          return;
        }
        var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
        if (re.test(name)) {
          if (!this.inAsync && name === "await") {
            this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
          }
          this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
        }
      };
      pp$5.parseIdent = function(liberal, isBinding) {
        var node = this.startNode();
        if (this.type === types$1.name) {
          node.name = this.value;
        } else if (this.type.keyword) {
          node.name = this.type.keyword;
          if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
            this.context.pop();
          }
        } else {
          this.unexpected();
        }
        this.next(!!liberal);
        this.finishNode(node, "Identifier");
        if (!liberal) {
          this.checkUnreserved(node);
          if (node.name === "await" && !this.awaitIdentPos) {
            this.awaitIdentPos = node.start;
          }
        }
        return node;
      };
      pp$5.parsePrivateIdent = function() {
        var node = this.startNode();
        if (this.type === types$1.privateId) {
          node.name = this.value;
        } else {
          this.unexpected();
        }
        this.next();
        this.finishNode(node, "PrivateIdentifier");
        if (this.privateNameStack.length === 0) {
          this.raise(node.start, "Private field '#" + node.name + "' must be declared in an enclosing class");
        } else {
          this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
        }
        return node;
      };
      pp$5.parseYield = function(forInit) {
        if (!this.yieldPos) {
          this.yieldPos = this.start;
        }
        var node = this.startNode();
        this.next();
        if (this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr) {
          node.delegate = false;
          node.argument = null;
        } else {
          node.delegate = this.eat(types$1.star);
          node.argument = this.parseMaybeAssign(forInit);
        }
        return this.finishNode(node, "YieldExpression");
      };
      pp$5.parseAwait = function(forInit) {
        if (!this.awaitPos) {
          this.awaitPos = this.start;
        }
        var node = this.startNode();
        this.next();
        node.argument = this.parseMaybeUnary(null, true, false, forInit);
        return this.finishNode(node, "AwaitExpression");
      };
      var pp$4 = Parser2.prototype;
      pp$4.raise = function(pos, message) {
        var loc = getLineInfo(this.input, pos);
        message += " (" + loc.line + ":" + loc.column + ")";
        var err = new SyntaxError(message);
        err.pos = pos;
        err.loc = loc;
        err.raisedAt = this.pos;
        throw err;
      };
      pp$4.raiseRecoverable = pp$4.raise;
      pp$4.curPosition = function() {
        if (this.options.locations) {
          return new Position(this.curLine, this.pos - this.lineStart);
        }
      };
      var pp$3 = Parser2.prototype;
      var Scope = /* @__PURE__ */ __name(function Scope2(flags) {
        this.flags = flags;
        this.var = [];
        this.lexical = [];
        this.functions = [];
        this.inClassFieldInit = false;
      }, "Scope");
      pp$3.enterScope = function(flags) {
        this.scopeStack.push(new Scope(flags));
      };
      pp$3.exitScope = function() {
        this.scopeStack.pop();
      };
      pp$3.treatFunctionsAsVarInScope = function(scope) {
        return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
      };
      pp$3.declareName = function(name, bindingType, pos) {
        var redeclared = false;
        if (bindingType === BIND_LEXICAL) {
          var scope = this.currentScope();
          redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
          scope.lexical.push(name);
          if (this.inModule && scope.flags & SCOPE_TOP) {
            delete this.undefinedExports[name];
          }
        } else if (bindingType === BIND_SIMPLE_CATCH) {
          var scope$1 = this.currentScope();
          scope$1.lexical.push(name);
        } else if (bindingType === BIND_FUNCTION) {
          var scope$2 = this.currentScope();
          if (this.treatFunctionsAsVar) {
            redeclared = scope$2.lexical.indexOf(name) > -1;
          } else {
            redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
          }
          scope$2.functions.push(name);
        } else {
          for (var i2 = this.scopeStack.length - 1; i2 >= 0; --i2) {
            var scope$3 = this.scopeStack[i2];
            if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
              redeclared = true;
              break;
            }
            scope$3.var.push(name);
            if (this.inModule && scope$3.flags & SCOPE_TOP) {
              delete this.undefinedExports[name];
            }
            if (scope$3.flags & SCOPE_VAR) {
              break;
            }
          }
        }
        if (redeclared) {
          this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
        }
      };
      pp$3.checkLocalExport = function(id) {
        if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
          this.undefinedExports[id.name] = id;
        }
      };
      pp$3.currentScope = function() {
        return this.scopeStack[this.scopeStack.length - 1];
      };
      pp$3.currentVarScope = function() {
        for (var i2 = this.scopeStack.length - 1; ; i2--) {
          var scope = this.scopeStack[i2];
          if (scope.flags & SCOPE_VAR) {
            return scope;
          }
        }
      };
      pp$3.currentThisScope = function() {
        for (var i2 = this.scopeStack.length - 1; ; i2--) {
          var scope = this.scopeStack[i2];
          if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) {
            return scope;
          }
        }
      };
      var Node = /* @__PURE__ */ __name(function Node2(parser, pos, loc) {
        this.type = "";
        this.start = pos;
        this.end = 0;
        if (parser.options.locations) {
          this.loc = new SourceLocation(parser, loc);
        }
        if (parser.options.directSourceFile) {
          this.sourceFile = parser.options.directSourceFile;
        }
        if (parser.options.ranges) {
          this.range = [pos, 0];
        }
      }, "Node");
      var pp$2 = Parser2.prototype;
      pp$2.startNode = function() {
        return new Node(this, this.start, this.startLoc);
      };
      pp$2.startNodeAt = function(pos, loc) {
        return new Node(this, pos, loc);
      };
      function finishNodeAt(node, type, pos, loc) {
        node.type = type;
        node.end = pos;
        if (this.options.locations) {
          node.loc.end = loc;
        }
        if (this.options.ranges) {
          node.range[1] = pos;
        }
        return node;
      }
      __name(finishNodeAt, "finishNodeAt");
      pp$2.finishNode = function(node, type) {
        return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
      };
      pp$2.finishNodeAt = function(node, type, pos, loc) {
        return finishNodeAt.call(this, node, type, pos, loc);
      };
      pp$2.copyNode = function(node) {
        var newNode = new Node(this, node.start, this.startLoc);
        for (var prop in node) {
          newNode[prop] = node[prop];
        }
        return newNode;
      };
      var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
      var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
      var ecma11BinaryProperties = ecma10BinaryProperties;
      var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
      var ecma13BinaryProperties = ecma12BinaryProperties;
      var unicodeBinaryProperties = {
        9: ecma9BinaryProperties,
        10: ecma10BinaryProperties,
        11: ecma11BinaryProperties,
        12: ecma12BinaryProperties,
        13: ecma13BinaryProperties
      };
      var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
      var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
      var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
      var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
      var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
      var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
      var unicodeScriptValues = {
        9: ecma9ScriptValues,
        10: ecma10ScriptValues,
        11: ecma11ScriptValues,
        12: ecma12ScriptValues,
        13: ecma13ScriptValues
      };
      var data = {};
      function buildUnicodeData(ecmaVersion2) {
        var d = data[ecmaVersion2] = {
          binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion2] + " " + unicodeGeneralCategoryValues),
          nonBinary: {
            General_Category: wordsRegexp(unicodeGeneralCategoryValues),
            Script: wordsRegexp(unicodeScriptValues[ecmaVersion2])
          }
        };
        d.nonBinary.Script_Extensions = d.nonBinary.Script;
        d.nonBinary.gc = d.nonBinary.General_Category;
        d.nonBinary.sc = d.nonBinary.Script;
        d.nonBinary.scx = d.nonBinary.Script_Extensions;
      }
      __name(buildUnicodeData, "buildUnicodeData");
      for (var i = 0, list = [9, 10, 11, 12, 13]; i < list.length; i += 1) {
        var ecmaVersion = list[i];
        buildUnicodeData(ecmaVersion);
      }
      var pp$1 = Parser2.prototype;
      var RegExpValidationState = /* @__PURE__ */ __name(function RegExpValidationState2(parser) {
        this.parser = parser;
        this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "");
        this.unicodeProperties = data[parser.options.ecmaVersion >= 13 ? 13 : parser.options.ecmaVersion];
        this.source = "";
        this.flags = "";
        this.start = 0;
        this.switchU = false;
        this.switchN = false;
        this.pos = 0;
        this.lastIntValue = 0;
        this.lastStringValue = "";
        this.lastAssertionIsQuantifiable = false;
        this.numCapturingParens = 0;
        this.maxBackReference = 0;
        this.groupNames = [];
        this.backReferenceNames = [];
      }, "RegExpValidationState");
      RegExpValidationState.prototype.reset = /* @__PURE__ */ __name(function reset(start, pattern, flags) {
        var unicode = flags.indexOf("u") !== -1;
        this.start = start | 0;
        this.source = pattern + "";
        this.flags = flags;
        this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
        this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
      }, "reset");
      RegExpValidationState.prototype.raise = /* @__PURE__ */ __name(function raise(message) {
        this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
      }, "raise");
      RegExpValidationState.prototype.at = /* @__PURE__ */ __name(function at(i2, forceU) {
        if (forceU === void 0)
          forceU = false;
        var s = this.source;
        var l = s.length;
        if (i2 >= l) {
          return -1;
        }
        var c = s.charCodeAt(i2);
        if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i2 + 1 >= l) {
          return c;
        }
        var next = s.charCodeAt(i2 + 1);
        return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
      }, "at");
      RegExpValidationState.prototype.nextIndex = /* @__PURE__ */ __name(function nextIndex(i2, forceU) {
        if (forceU === void 0)
          forceU = false;
        var s = this.source;
        var l = s.length;
        if (i2 >= l) {
          return l;
        }
        var c = s.charCodeAt(i2), next;
        if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i2 + 1 >= l || (next = s.charCodeAt(i2 + 1)) < 56320 || next > 57343) {
          return i2 + 1;
        }
        return i2 + 2;
      }, "nextIndex");
      RegExpValidationState.prototype.current = /* @__PURE__ */ __name(function current(forceU) {
        if (forceU === void 0)
          forceU = false;
        return this.at(this.pos, forceU);
      }, "current");
      RegExpValidationState.prototype.lookahead = /* @__PURE__ */ __name(function lookahead(forceU) {
        if (forceU === void 0)
          forceU = false;
        return this.at(this.nextIndex(this.pos, forceU), forceU);
      }, "lookahead");
      RegExpValidationState.prototype.advance = /* @__PURE__ */ __name(function advance(forceU) {
        if (forceU === void 0)
          forceU = false;
        this.pos = this.nextIndex(this.pos, forceU);
      }, "advance");
      RegExpValidationState.prototype.eat = /* @__PURE__ */ __name(function eat(ch, forceU) {
        if (forceU === void 0)
          forceU = false;
        if (this.current(forceU) === ch) {
          this.advance(forceU);
          return true;
        }
        return false;
      }, "eat");
      pp$1.validateRegExpFlags = function(state) {
        var validFlags = state.validFlags;
        var flags = state.flags;
        for (var i2 = 0; i2 < flags.length; i2++) {
          var flag = flags.charAt(i2);
          if (validFlags.indexOf(flag) === -1) {
            this.raise(state.start, "Invalid regular expression flag");
          }
          if (flags.indexOf(flag, i2 + 1) > -1) {
            this.raise(state.start, "Duplicate regular expression flag");
          }
        }
      };
      pp$1.validateRegExpPattern = function(state) {
        this.regexp_pattern(state);
        if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
          state.switchN = true;
          this.regexp_pattern(state);
        }
      };
      pp$1.regexp_pattern = function(state) {
        state.pos = 0;
        state.lastIntValue = 0;
        state.lastStringValue = "";
        state.lastAssertionIsQuantifiable = false;
        state.numCapturingParens = 0;
        state.maxBackReference = 0;
        state.groupNames.length = 0;
        state.backReferenceNames.length = 0;
        this.regexp_disjunction(state);
        if (state.pos !== state.source.length) {
          if (state.eat(41)) {
            state.raise("Unmatched ')'");
          }
          if (state.eat(93) || state.eat(125)) {
            state.raise("Lone quantifier brackets");
          }
        }
        if (state.maxBackReference > state.numCapturingParens) {
          state.raise("Invalid escape");
        }
        for (var i2 = 0, list2 = state.backReferenceNames; i2 < list2.length; i2 += 1) {
          var name = list2[i2];
          if (state.groupNames.indexOf(name) === -1) {
            state.raise("Invalid named capture referenced");
          }
        }
      };
      pp$1.regexp_disjunction = function(state) {
        this.regexp_alternative(state);
        while (state.eat(124)) {
          this.regexp_alternative(state);
        }
        if (this.regexp_eatQuantifier(state, true)) {
          state.raise("Nothing to repeat");
        }
        if (state.eat(123)) {
          state.raise("Lone quantifier brackets");
        }
      };
      pp$1.regexp_alternative = function(state) {
        while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
        }
      };
      pp$1.regexp_eatTerm = function(state) {
        if (this.regexp_eatAssertion(state)) {
          if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
            if (state.switchU) {
              state.raise("Invalid quantifier");
            }
          }
          return true;
        }
        if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
          this.regexp_eatQuantifier(state);
          return true;
        }
        return false;
      };
      pp$1.regexp_eatAssertion = function(state) {
        var start = state.pos;
        state.lastAssertionIsQuantifiable = false;
        if (state.eat(94) || state.eat(36)) {
          return true;
        }
        if (state.eat(92)) {
          if (state.eat(66) || state.eat(98)) {
            return true;
          }
          state.pos = start;
        }
        if (state.eat(40) && state.eat(63)) {
          var lookbehind = false;
          if (this.options.ecmaVersion >= 9) {
            lookbehind = state.eat(60);
          }
          if (state.eat(61) || state.eat(33)) {
            this.regexp_disjunction(state);
            if (!state.eat(41)) {
              state.raise("Unterminated group");
            }
            state.lastAssertionIsQuantifiable = !lookbehind;
            return true;
          }
        }
        state.pos = start;
        return false;
      };
      pp$1.regexp_eatQuantifier = function(state, noError) {
        if (noError === void 0)
          noError = false;
        if (this.regexp_eatQuantifierPrefix(state, noError)) {
          state.eat(63);
          return true;
        }
        return false;
      };
      pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
        return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
      };
      pp$1.regexp_eatBracedQuantifier = function(state, noError) {
        var start = state.pos;
        if (state.eat(123)) {
          var min = 0, max = -1;
          if (this.regexp_eatDecimalDigits(state)) {
            min = state.lastIntValue;
            if (state.eat(44) && this.regexp_eatDecimalDigits(state)) {
              max = state.lastIntValue;
            }
            if (state.eat(125)) {
              if (max !== -1 && max < min && !noError) {
                state.raise("numbers out of order in {} quantifier");
              }
              return true;
            }
          }
          if (state.switchU && !noError) {
            state.raise("Incomplete quantifier");
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatAtom = function(state) {
        return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
      };
      pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
        var start = state.pos;
        if (state.eat(92)) {
          if (this.regexp_eatAtomEscape(state)) {
            return true;
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatUncapturingGroup = function(state) {
        var start = state.pos;
        if (state.eat(40)) {
          if (state.eat(63) && state.eat(58)) {
            this.regexp_disjunction(state);
            if (state.eat(41)) {
              return true;
            }
            state.raise("Unterminated group");
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatCapturingGroup = function(state) {
        if (state.eat(40)) {
          if (this.options.ecmaVersion >= 9) {
            this.regexp_groupSpecifier(state);
          } else if (state.current() === 63) {
            state.raise("Invalid group");
          }
          this.regexp_disjunction(state);
          if (state.eat(41)) {
            state.numCapturingParens += 1;
            return true;
          }
          state.raise("Unterminated group");
        }
        return false;
      };
      pp$1.regexp_eatExtendedAtom = function(state) {
        return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
      };
      pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
        if (this.regexp_eatBracedQuantifier(state, true)) {
          state.raise("Nothing to repeat");
        }
        return false;
      };
      pp$1.regexp_eatSyntaxCharacter = function(state) {
        var ch = state.current();
        if (isSyntaxCharacter(ch)) {
          state.lastIntValue = ch;
          state.advance();
          return true;
        }
        return false;
      };
      function isSyntaxCharacter(ch) {
        return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
      }
      __name(isSyntaxCharacter, "isSyntaxCharacter");
      pp$1.regexp_eatPatternCharacters = function(state) {
        var start = state.pos;
        var ch = 0;
        while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
          state.advance();
        }
        return state.pos !== start;
      };
      pp$1.regexp_eatExtendedPatternCharacter = function(state) {
        var ch = state.current();
        if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_groupSpecifier = function(state) {
        if (state.eat(63)) {
          if (this.regexp_eatGroupName(state)) {
            if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
              state.raise("Duplicate capture group name");
            }
            state.groupNames.push(state.lastStringValue);
            return;
          }
          state.raise("Invalid group");
        }
      };
      pp$1.regexp_eatGroupName = function(state) {
        state.lastStringValue = "";
        if (state.eat(60)) {
          if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) {
            return true;
          }
          state.raise("Invalid capture group name");
        }
        return false;
      };
      pp$1.regexp_eatRegExpIdentifierName = function(state) {
        state.lastStringValue = "";
        if (this.regexp_eatRegExpIdentifierStart(state)) {
          state.lastStringValue += codePointToString(state.lastIntValue);
          while (this.regexp_eatRegExpIdentifierPart(state)) {
            state.lastStringValue += codePointToString(state.lastIntValue);
          }
          return true;
        }
        return false;
      };
      pp$1.regexp_eatRegExpIdentifierStart = function(state) {
        var start = state.pos;
        var forceU = this.options.ecmaVersion >= 11;
        var ch = state.current(forceU);
        state.advance(forceU);
        if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
          ch = state.lastIntValue;
        }
        if (isRegExpIdentifierStart(ch)) {
          state.lastIntValue = ch;
          return true;
        }
        state.pos = start;
        return false;
      };
      function isRegExpIdentifierStart(ch) {
        return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
      }
      __name(isRegExpIdentifierStart, "isRegExpIdentifierStart");
      pp$1.regexp_eatRegExpIdentifierPart = function(state) {
        var start = state.pos;
        var forceU = this.options.ecmaVersion >= 11;
        var ch = state.current(forceU);
        state.advance(forceU);
        if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
          ch = state.lastIntValue;
        }
        if (isRegExpIdentifierPart(ch)) {
          state.lastIntValue = ch;
          return true;
        }
        state.pos = start;
        return false;
      };
      function isRegExpIdentifierPart(ch) {
        return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
      }
      __name(isRegExpIdentifierPart, "isRegExpIdentifierPart");
      pp$1.regexp_eatAtomEscape = function(state) {
        if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
          return true;
        }
        if (state.switchU) {
          if (state.current() === 99) {
            state.raise("Invalid unicode escape");
          }
          state.raise("Invalid escape");
        }
        return false;
      };
      pp$1.regexp_eatBackReference = function(state) {
        var start = state.pos;
        if (this.regexp_eatDecimalEscape(state)) {
          var n = state.lastIntValue;
          if (state.switchU) {
            if (n > state.maxBackReference) {
              state.maxBackReference = n;
            }
            return true;
          }
          if (n <= state.numCapturingParens) {
            return true;
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatKGroupName = function(state) {
        if (state.eat(107)) {
          if (this.regexp_eatGroupName(state)) {
            state.backReferenceNames.push(state.lastStringValue);
            return true;
          }
          state.raise("Invalid named reference");
        }
        return false;
      };
      pp$1.regexp_eatCharacterEscape = function(state) {
        return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
      };
      pp$1.regexp_eatCControlLetter = function(state) {
        var start = state.pos;
        if (state.eat(99)) {
          if (this.regexp_eatControlLetter(state)) {
            return true;
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatZero = function(state) {
        if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
          state.lastIntValue = 0;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatControlEscape = function(state) {
        var ch = state.current();
        if (ch === 116) {
          state.lastIntValue = 9;
          state.advance();
          return true;
        }
        if (ch === 110) {
          state.lastIntValue = 10;
          state.advance();
          return true;
        }
        if (ch === 118) {
          state.lastIntValue = 11;
          state.advance();
          return true;
        }
        if (ch === 102) {
          state.lastIntValue = 12;
          state.advance();
          return true;
        }
        if (ch === 114) {
          state.lastIntValue = 13;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatControlLetter = function(state) {
        var ch = state.current();
        if (isControlLetter(ch)) {
          state.lastIntValue = ch % 32;
          state.advance();
          return true;
        }
        return false;
      };
      function isControlLetter(ch) {
        return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
      }
      __name(isControlLetter, "isControlLetter");
      pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
        if (forceU === void 0)
          forceU = false;
        var start = state.pos;
        var switchU = forceU || state.switchU;
        if (state.eat(117)) {
          if (this.regexp_eatFixedHexDigits(state, 4)) {
            var lead = state.lastIntValue;
            if (switchU && lead >= 55296 && lead <= 56319) {
              var leadSurrogateEnd = state.pos;
              if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
                var trail = state.lastIntValue;
                if (trail >= 56320 && trail <= 57343) {
                  state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
                  return true;
                }
              }
              state.pos = leadSurrogateEnd;
              state.lastIntValue = lead;
            }
            return true;
          }
          if (switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && isValidUnicode(state.lastIntValue)) {
            return true;
          }
          if (switchU) {
            state.raise("Invalid unicode escape");
          }
          state.pos = start;
        }
        return false;
      };
      function isValidUnicode(ch) {
        return ch >= 0 && ch <= 1114111;
      }
      __name(isValidUnicode, "isValidUnicode");
      pp$1.regexp_eatIdentityEscape = function(state) {
        if (state.switchU) {
          if (this.regexp_eatSyntaxCharacter(state)) {
            return true;
          }
          if (state.eat(47)) {
            state.lastIntValue = 47;
            return true;
          }
          return false;
        }
        var ch = state.current();
        if (ch !== 99 && (!state.switchN || ch !== 107)) {
          state.lastIntValue = ch;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatDecimalEscape = function(state) {
        state.lastIntValue = 0;
        var ch = state.current();
        if (ch >= 49 && ch <= 57) {
          do {
            state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
            state.advance();
          } while ((ch = state.current()) >= 48 && ch <= 57);
          return true;
        }
        return false;
      };
      pp$1.regexp_eatCharacterClassEscape = function(state) {
        var ch = state.current();
        if (isCharacterClassEscape(ch)) {
          state.lastIntValue = -1;
          state.advance();
          return true;
        }
        if (state.switchU && this.options.ecmaVersion >= 9 && (ch === 80 || ch === 112)) {
          state.lastIntValue = -1;
          state.advance();
          if (state.eat(123) && this.regexp_eatUnicodePropertyValueExpression(state) && state.eat(125)) {
            return true;
          }
          state.raise("Invalid property name");
        }
        return false;
      };
      function isCharacterClassEscape(ch) {
        return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
      }
      __name(isCharacterClassEscape, "isCharacterClassEscape");
      pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
        var start = state.pos;
        if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
          var name = state.lastStringValue;
          if (this.regexp_eatUnicodePropertyValue(state)) {
            var value = state.lastStringValue;
            this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
            return true;
          }
        }
        state.pos = start;
        if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
          var nameOrValue = state.lastStringValue;
          this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
          return true;
        }
        return false;
      };
      pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
        if (!hasOwn(state.unicodeProperties.nonBinary, name)) {
          state.raise("Invalid property name");
        }
        if (!state.unicodeProperties.nonBinary[name].test(value)) {
          state.raise("Invalid property value");
        }
      };
      pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
        if (!state.unicodeProperties.binary.test(nameOrValue)) {
          state.raise("Invalid property name");
        }
      };
      pp$1.regexp_eatUnicodePropertyName = function(state) {
        var ch = 0;
        state.lastStringValue = "";
        while (isUnicodePropertyNameCharacter(ch = state.current())) {
          state.lastStringValue += codePointToString(ch);
          state.advance();
        }
        return state.lastStringValue !== "";
      };
      function isUnicodePropertyNameCharacter(ch) {
        return isControlLetter(ch) || ch === 95;
      }
      __name(isUnicodePropertyNameCharacter, "isUnicodePropertyNameCharacter");
      pp$1.regexp_eatUnicodePropertyValue = function(state) {
        var ch = 0;
        state.lastStringValue = "";
        while (isUnicodePropertyValueCharacter(ch = state.current())) {
          state.lastStringValue += codePointToString(ch);
          state.advance();
        }
        return state.lastStringValue !== "";
      };
      function isUnicodePropertyValueCharacter(ch) {
        return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
      }
      __name(isUnicodePropertyValueCharacter, "isUnicodePropertyValueCharacter");
      pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
        return this.regexp_eatUnicodePropertyValue(state);
      };
      pp$1.regexp_eatCharacterClass = function(state) {
        if (state.eat(91)) {
          state.eat(94);
          this.regexp_classRanges(state);
          if (state.eat(93)) {
            return true;
          }
          state.raise("Unterminated character class");
        }
        return false;
      };
      pp$1.regexp_classRanges = function(state) {
        while (this.regexp_eatClassAtom(state)) {
          var left = state.lastIntValue;
          if (state.eat(45) && this.regexp_eatClassAtom(state)) {
            var right = state.lastIntValue;
            if (state.switchU && (left === -1 || right === -1)) {
              state.raise("Invalid character class");
            }
            if (left !== -1 && right !== -1 && left > right) {
              state.raise("Range out of order in character class");
            }
          }
        }
      };
      pp$1.regexp_eatClassAtom = function(state) {
        var start = state.pos;
        if (state.eat(92)) {
          if (this.regexp_eatClassEscape(state)) {
            return true;
          }
          if (state.switchU) {
            var ch$1 = state.current();
            if (ch$1 === 99 || isOctalDigit(ch$1)) {
              state.raise("Invalid class escape");
            }
            state.raise("Invalid escape");
          }
          state.pos = start;
        }
        var ch = state.current();
        if (ch !== 93) {
          state.lastIntValue = ch;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatClassEscape = function(state) {
        var start = state.pos;
        if (state.eat(98)) {
          state.lastIntValue = 8;
          return true;
        }
        if (state.switchU && state.eat(45)) {
          state.lastIntValue = 45;
          return true;
        }
        if (!state.switchU && state.eat(99)) {
          if (this.regexp_eatClassControlLetter(state)) {
            return true;
          }
          state.pos = start;
        }
        return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
      };
      pp$1.regexp_eatClassControlLetter = function(state) {
        var ch = state.current();
        if (isDecimalDigit(ch) || ch === 95) {
          state.lastIntValue = ch % 32;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatHexEscapeSequence = function(state) {
        var start = state.pos;
        if (state.eat(120)) {
          if (this.regexp_eatFixedHexDigits(state, 2)) {
            return true;
          }
          if (state.switchU) {
            state.raise("Invalid escape");
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatDecimalDigits = function(state) {
        var start = state.pos;
        var ch = 0;
        state.lastIntValue = 0;
        while (isDecimalDigit(ch = state.current())) {
          state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
          state.advance();
        }
        return state.pos !== start;
      };
      function isDecimalDigit(ch) {
        return ch >= 48 && ch <= 57;
      }
      __name(isDecimalDigit, "isDecimalDigit");
      pp$1.regexp_eatHexDigits = function(state) {
        var start = state.pos;
        var ch = 0;
        state.lastIntValue = 0;
        while (isHexDigit(ch = state.current())) {
          state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
          state.advance();
        }
        return state.pos !== start;
      };
      function isHexDigit(ch) {
        return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
      }
      __name(isHexDigit, "isHexDigit");
      function hexToInt(ch) {
        if (ch >= 65 && ch <= 70) {
          return 10 + (ch - 65);
        }
        if (ch >= 97 && ch <= 102) {
          return 10 + (ch - 97);
        }
        return ch - 48;
      }
      __name(hexToInt, "hexToInt");
      pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
        if (this.regexp_eatOctalDigit(state)) {
          var n1 = state.lastIntValue;
          if (this.regexp_eatOctalDigit(state)) {
            var n2 = state.lastIntValue;
            if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
              state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
            } else {
              state.lastIntValue = n1 * 8 + n2;
            }
          } else {
            state.lastIntValue = n1;
          }
          return true;
        }
        return false;
      };
      pp$1.regexp_eatOctalDigit = function(state) {
        var ch = state.current();
        if (isOctalDigit(ch)) {
          state.lastIntValue = ch - 48;
          state.advance();
          return true;
        }
        state.lastIntValue = 0;
        return false;
      };
      function isOctalDigit(ch) {
        return ch >= 48 && ch <= 55;
      }
      __name(isOctalDigit, "isOctalDigit");
      pp$1.regexp_eatFixedHexDigits = function(state, length) {
        var start = state.pos;
        state.lastIntValue = 0;
        for (var i2 = 0; i2 < length; ++i2) {
          var ch = state.current();
          if (!isHexDigit(ch)) {
            state.pos = start;
            return false;
          }
          state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
          state.advance();
        }
        return true;
      };
      var Token = /* @__PURE__ */ __name(function Token2(p) {
        this.type = p.type;
        this.value = p.value;
        this.start = p.start;
        this.end = p.end;
        if (p.options.locations) {
          this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
        }
        if (p.options.ranges) {
          this.range = [p.start, p.end];
        }
      }, "Token");
      var pp = Parser2.prototype;
      pp.next = function(ignoreEscapeSequenceInKeyword) {
        if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
          this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
        }
        if (this.options.onToken) {
          this.options.onToken(new Token(this));
        }
        this.lastTokEnd = this.end;
        this.lastTokStart = this.start;
        this.lastTokEndLoc = this.endLoc;
        this.lastTokStartLoc = this.startLoc;
        this.nextToken();
      };
      pp.getToken = function() {
        this.next();
        return new Token(this);
      };
      if (typeof Symbol !== "undefined") {
        pp[Symbol.iterator] = function() {
          var this$1$1 = this;
          return {
            next: function() {
              var token = this$1$1.getToken();
              return {
                done: token.type === types$1.eof,
                value: token
              };
            }
          };
        };
      }
      pp.nextToken = function() {
        var curContext = this.curContext();
        if (!curContext || !curContext.preserveSpace) {
          this.skipSpace();
        }
        this.start = this.pos;
        if (this.options.locations) {
          this.startLoc = this.curPosition();
        }
        if (this.pos >= this.input.length) {
          return this.finishToken(types$1.eof);
        }
        if (curContext.override) {
          return curContext.override(this);
        } else {
          this.readToken(this.fullCharCodeAtPos());
        }
      };
      pp.readToken = function(code) {
        if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
          return this.readWord();
        }
        return this.getTokenFromCode(code);
      };
      pp.fullCharCodeAtPos = function() {
        var code = this.input.charCodeAt(this.pos);
        if (code <= 55295 || code >= 56320) {
          return code;
        }
        var next = this.input.charCodeAt(this.pos + 1);
        return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
      };
      pp.skipBlockComment = function() {
        var startLoc = this.options.onComment && this.curPosition();
        var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
        if (end === -1) {
          this.raise(this.pos - 2, "Unterminated comment");
        }
        this.pos = end + 2;
        if (this.options.locations) {
          for (var nextBreak = void 0, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1; ) {
            ++this.curLine;
            pos = this.lineStart = nextBreak;
          }
        }
        if (this.options.onComment) {
          this.options.onComment(
            true,
            this.input.slice(start + 2, end),
            start,
            this.pos,
            startLoc,
            this.curPosition()
          );
        }
      };
      pp.skipLineComment = function(startSkip) {
        var start = this.pos;
        var startLoc = this.options.onComment && this.curPosition();
        var ch = this.input.charCodeAt(this.pos += startSkip);
        while (this.pos < this.input.length && !isNewLine(ch)) {
          ch = this.input.charCodeAt(++this.pos);
        }
        if (this.options.onComment) {
          this.options.onComment(
            false,
            this.input.slice(start + startSkip, this.pos),
            start,
            this.pos,
            startLoc,
            this.curPosition()
          );
        }
      };
      pp.skipSpace = function() {
        loop:
          while (this.pos < this.input.length) {
            var ch = this.input.charCodeAt(this.pos);
            switch (ch) {
              case 32:
              case 160:
                ++this.pos;
                break;
              case 13:
                if (this.input.charCodeAt(this.pos + 1) === 10) {
                  ++this.pos;
                }
              case 10:
              case 8232:
              case 8233:
                ++this.pos;
                if (this.options.locations) {
                  ++this.curLine;
                  this.lineStart = this.pos;
                }
                break;
              case 47:
                switch (this.input.charCodeAt(this.pos + 1)) {
                  case 42:
                    this.skipBlockComment();
                    break;
                  case 47:
                    this.skipLineComment(2);
                    break;
                  default:
                    break loop;
                }
                break;
              default:
                if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
                  ++this.pos;
                } else {
                  break loop;
                }
            }
          }
      };
      pp.finishToken = function(type, val) {
        this.end = this.pos;
        if (this.options.locations) {
          this.endLoc = this.curPosition();
        }
        var prevType = this.type;
        this.type = type;
        this.value = val;
        this.updateContext(prevType);
      };
      pp.readToken_dot = function() {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next >= 48 && next <= 57) {
          return this.readNumber(true);
        }
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
          this.pos += 3;
          return this.finishToken(types$1.ellipsis);
        } else {
          ++this.pos;
          return this.finishToken(types$1.dot);
        }
      };
      pp.readToken_slash = function() {
        var next = this.input.charCodeAt(this.pos + 1);
        if (this.exprAllowed) {
          ++this.pos;
          return this.readRegexp();
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(types$1.slash, 1);
      };
      pp.readToken_mult_modulo_exp = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        var size = 1;
        var tokentype = code === 42 ? types$1.star : types$1.modulo;
        if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
          ++size;
          tokentype = types$1.starstar;
          next = this.input.charCodeAt(this.pos + 2);
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, size + 1);
        }
        return this.finishOp(tokentype, size);
      };
      pp.readToken_pipe_amp = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === code) {
          if (this.options.ecmaVersion >= 12) {
            var next2 = this.input.charCodeAt(this.pos + 2);
            if (next2 === 61) {
              return this.finishOp(types$1.assign, 3);
            }
          }
          return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2);
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1);
      };
      pp.readToken_caret = function() {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(types$1.bitwiseXOR, 1);
      };
      pp.readToken_plus_min = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === code) {
          if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
            this.skipLineComment(3);
            this.skipSpace();
            return this.nextToken();
          }
          return this.finishOp(types$1.incDec, 2);
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(types$1.plusMin, 1);
      };
      pp.readToken_lt_gt = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        var size = 1;
        if (next === code) {
          size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
          if (this.input.charCodeAt(this.pos + size) === 61) {
            return this.finishOp(types$1.assign, size + 1);
          }
          return this.finishOp(types$1.bitShift, size);
        }
        if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
          this.skipLineComment(4);
          this.skipSpace();
          return this.nextToken();
        }
        if (next === 61) {
          size = 2;
        }
        return this.finishOp(types$1.relational, size);
      };
      pp.readToken_eq_excl = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 61) {
          return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
        }
        if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
          this.pos += 2;
          return this.finishToken(types$1.arrow);
        }
        return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1);
      };
      pp.readToken_question = function() {
        var ecmaVersion2 = this.options.ecmaVersion;
        if (ecmaVersion2 >= 11) {
          var next = this.input.charCodeAt(this.pos + 1);
          if (next === 46) {
            var next2 = this.input.charCodeAt(this.pos + 2);
            if (next2 < 48 || next2 > 57) {
              return this.finishOp(types$1.questionDot, 2);
            }
          }
          if (next === 63) {
            if (ecmaVersion2 >= 12) {
              var next2$1 = this.input.charCodeAt(this.pos + 2);
              if (next2$1 === 61) {
                return this.finishOp(types$1.assign, 3);
              }
            }
            return this.finishOp(types$1.coalesce, 2);
          }
        }
        return this.finishOp(types$1.question, 1);
      };
      pp.readToken_numberSign = function() {
        var ecmaVersion2 = this.options.ecmaVersion;
        var code = 35;
        if (ecmaVersion2 >= 13) {
          ++this.pos;
          code = this.fullCharCodeAtPos();
          if (isIdentifierStart(code, true) || code === 92) {
            return this.finishToken(types$1.privateId, this.readWord1());
          }
        }
        this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
      };
      pp.getTokenFromCode = function(code) {
        switch (code) {
          case 46:
            return this.readToken_dot();
          case 40:
            ++this.pos;
            return this.finishToken(types$1.parenL);
          case 41:
            ++this.pos;
            return this.finishToken(types$1.parenR);
          case 59:
            ++this.pos;
            return this.finishToken(types$1.semi);
          case 44:
            ++this.pos;
            return this.finishToken(types$1.comma);
          case 91:
            ++this.pos;
            return this.finishToken(types$1.bracketL);
          case 93:
            ++this.pos;
            return this.finishToken(types$1.bracketR);
          case 123:
            ++this.pos;
            return this.finishToken(types$1.braceL);
          case 125:
            ++this.pos;
            return this.finishToken(types$1.braceR);
          case 58:
            ++this.pos;
            return this.finishToken(types$1.colon);
          case 96:
            if (this.options.ecmaVersion < 6) {
              break;
            }
            ++this.pos;
            return this.finishToken(types$1.backQuote);
          case 48:
            var next = this.input.charCodeAt(this.pos + 1);
            if (next === 120 || next === 88) {
              return this.readRadixNumber(16);
            }
            if (this.options.ecmaVersion >= 6) {
              if (next === 111 || next === 79) {
                return this.readRadixNumber(8);
              }
              if (next === 98 || next === 66) {
                return this.readRadixNumber(2);
              }
            }
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return this.readNumber(false);
          case 34:
          case 39:
            return this.readString(code);
          case 47:
            return this.readToken_slash();
          case 37:
          case 42:
            return this.readToken_mult_modulo_exp(code);
          case 124:
          case 38:
            return this.readToken_pipe_amp(code);
          case 94:
            return this.readToken_caret();
          case 43:
          case 45:
            return this.readToken_plus_min(code);
          case 60:
          case 62:
            return this.readToken_lt_gt(code);
          case 61:
          case 33:
            return this.readToken_eq_excl(code);
          case 63:
            return this.readToken_question();
          case 126:
            return this.finishOp(types$1.prefix, 1);
          case 35:
            return this.readToken_numberSign();
        }
        this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
      };
      pp.finishOp = function(type, size) {
        var str = this.input.slice(this.pos, this.pos + size);
        this.pos += size;
        return this.finishToken(type, str);
      };
      pp.readRegexp = function() {
        var escaped, inClass, start = this.pos;
        for (; ; ) {
          if (this.pos >= this.input.length) {
            this.raise(start, "Unterminated regular expression");
          }
          var ch = this.input.charAt(this.pos);
          if (lineBreak.test(ch)) {
            this.raise(start, "Unterminated regular expression");
          }
          if (!escaped) {
            if (ch === "[") {
              inClass = true;
            } else if (ch === "]" && inClass) {
              inClass = false;
            } else if (ch === "/" && !inClass) {
              break;
            }
            escaped = ch === "\\";
          } else {
            escaped = false;
          }
          ++this.pos;
        }
        var pattern = this.input.slice(start, this.pos);
        ++this.pos;
        var flagsStart = this.pos;
        var flags = this.readWord1();
        if (this.containsEsc) {
          this.unexpected(flagsStart);
        }
        var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
        state.reset(start, pattern, flags);
        this.validateRegExpFlags(state);
        this.validateRegExpPattern(state);
        var value = null;
        try {
          value = new RegExp(pattern, flags);
        } catch (e) {
        }
        return this.finishToken(types$1.regexp, { pattern, flags, value });
      };
      pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
        var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
        var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
        var start = this.pos, total = 0, lastCode = 0;
        for (var i2 = 0, e = len == null ? Infinity : len; i2 < e; ++i2, ++this.pos) {
          var code = this.input.charCodeAt(this.pos), val = void 0;
          if (allowSeparators && code === 95) {
            if (isLegacyOctalNumericLiteral) {
              this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
            }
            if (lastCode === 95) {
              this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
            }
            if (i2 === 0) {
              this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
            }
            lastCode = code;
            continue;
          }
          if (code >= 97) {
            val = code - 97 + 10;
          } else if (code >= 65) {
            val = code - 65 + 10;
          } else if (code >= 48 && code <= 57) {
            val = code - 48;
          } else {
            val = Infinity;
          }
          if (val >= radix) {
            break;
          }
          lastCode = code;
          total = total * radix + val;
        }
        if (allowSeparators && lastCode === 95) {
          this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
        }
        if (this.pos === start || len != null && this.pos - start !== len) {
          return null;
        }
        return total;
      };
      function stringToNumber(str, isLegacyOctalNumericLiteral) {
        if (isLegacyOctalNumericLiteral) {
          return parseInt(str, 8);
        }
        return parseFloat(str.replace(/_/g, ""));
      }
      __name(stringToNumber, "stringToNumber");
      function stringToBigInt(str) {
        if (typeof BigInt !== "function") {
          return null;
        }
        return BigInt(str.replace(/_/g, ""));
      }
      __name(stringToBigInt, "stringToBigInt");
      pp.readRadixNumber = function(radix) {
        var start = this.pos;
        this.pos += 2;
        var val = this.readInt(radix);
        if (val == null) {
          this.raise(this.start + 2, "Expected number in radix " + radix);
        }
        if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
          val = stringToBigInt(this.input.slice(start, this.pos));
          ++this.pos;
        } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
          this.raise(this.pos, "Identifier directly after number");
        }
        return this.finishToken(types$1.num, val);
      };
      pp.readNumber = function(startsWithDot) {
        var start = this.pos;
        if (!startsWithDot && this.readInt(10, void 0, true) === null) {
          this.raise(start, "Invalid number");
        }
        var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
        if (octal && this.strict) {
          this.raise(start, "Invalid number");
        }
        var next = this.input.charCodeAt(this.pos);
        if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
          var val$1 = stringToBigInt(this.input.slice(start, this.pos));
          ++this.pos;
          if (isIdentifierStart(this.fullCharCodeAtPos())) {
            this.raise(this.pos, "Identifier directly after number");
          }
          return this.finishToken(types$1.num, val$1);
        }
        if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
          octal = false;
        }
        if (next === 46 && !octal) {
          ++this.pos;
          this.readInt(10);
          next = this.input.charCodeAt(this.pos);
        }
        if ((next === 69 || next === 101) && !octal) {
          next = this.input.charCodeAt(++this.pos);
          if (next === 43 || next === 45) {
            ++this.pos;
          }
          if (this.readInt(10) === null) {
            this.raise(start, "Invalid number");
          }
        }
        if (isIdentifierStart(this.fullCharCodeAtPos())) {
          this.raise(this.pos, "Identifier directly after number");
        }
        var val = stringToNumber(this.input.slice(start, this.pos), octal);
        return this.finishToken(types$1.num, val);
      };
      pp.readCodePoint = function() {
        var ch = this.input.charCodeAt(this.pos), code;
        if (ch === 123) {
          if (this.options.ecmaVersion < 6) {
            this.unexpected();
          }
          var codePos = ++this.pos;
          code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
          ++this.pos;
          if (code > 1114111) {
            this.invalidStringToken(codePos, "Code point out of bounds");
          }
        } else {
          code = this.readHexChar(4);
        }
        return code;
      };
      pp.readString = function(quote) {
        var out = "", chunkStart = ++this.pos;
        for (; ; ) {
          if (this.pos >= this.input.length) {
            this.raise(this.start, "Unterminated string constant");
          }
          var ch = this.input.charCodeAt(this.pos);
          if (ch === quote) {
            break;
          }
          if (ch === 92) {
            out += this.input.slice(chunkStart, this.pos);
            out += this.readEscapedChar(false);
            chunkStart = this.pos;
          } else if (ch === 8232 || ch === 8233) {
            if (this.options.ecmaVersion < 10) {
              this.raise(this.start, "Unterminated string constant");
            }
            ++this.pos;
            if (this.options.locations) {
              this.curLine++;
              this.lineStart = this.pos;
            }
          } else {
            if (isNewLine(ch)) {
              this.raise(this.start, "Unterminated string constant");
            }
            ++this.pos;
          }
        }
        out += this.input.slice(chunkStart, this.pos++);
        return this.finishToken(types$1.string, out);
      };
      var INVALID_TEMPLATE_ESCAPE_ERROR = {};
      pp.tryReadTemplateToken = function() {
        this.inTemplateElement = true;
        try {
          this.readTmplToken();
        } catch (err) {
          if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
            this.readInvalidTemplateToken();
          } else {
            throw err;
          }
        }
        this.inTemplateElement = false;
      };
      pp.invalidStringToken = function(position, message) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
          throw INVALID_TEMPLATE_ESCAPE_ERROR;
        } else {
          this.raise(position, message);
        }
      };
      pp.readTmplToken = function() {
        var out = "", chunkStart = this.pos;
        for (; ; ) {
          if (this.pos >= this.input.length) {
            this.raise(this.start, "Unterminated template");
          }
          var ch = this.input.charCodeAt(this.pos);
          if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
            if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
              if (ch === 36) {
                this.pos += 2;
                return this.finishToken(types$1.dollarBraceL);
              } else {
                ++this.pos;
                return this.finishToken(types$1.backQuote);
              }
            }
            out += this.input.slice(chunkStart, this.pos);
            return this.finishToken(types$1.template, out);
          }
          if (ch === 92) {
            out += this.input.slice(chunkStart, this.pos);
            out += this.readEscapedChar(true);
            chunkStart = this.pos;
          } else if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.pos);
            ++this.pos;
            switch (ch) {
              case 13:
                if (this.input.charCodeAt(this.pos) === 10) {
                  ++this.pos;
                }
              case 10:
                out += "\n";
                break;
              default:
                out += String.fromCharCode(ch);
                break;
            }
            if (this.options.locations) {
              ++this.curLine;
              this.lineStart = this.pos;
            }
            chunkStart = this.pos;
          } else {
            ++this.pos;
          }
        }
      };
      pp.readInvalidTemplateToken = function() {
        for (; this.pos < this.input.length; this.pos++) {
          switch (this.input[this.pos]) {
            case "\\":
              ++this.pos;
              break;
            case "$":
              if (this.input[this.pos + 1] !== "{") {
                break;
              }
            case "`":
              return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos));
          }
        }
        this.raise(this.start, "Unterminated template");
      };
      pp.readEscapedChar = function(inTemplate) {
        var ch = this.input.charCodeAt(++this.pos);
        ++this.pos;
        switch (ch) {
          case 110:
            return "\n";
          case 114:
            return "\r";
          case 120:
            return String.fromCharCode(this.readHexChar(2));
          case 117:
            return codePointToString(this.readCodePoint());
          case 116:
            return "	";
          case 98:
            return "\b";
          case 118:
            return "\v";
          case 102:
            return "\f";
          case 13:
            if (this.input.charCodeAt(this.pos) === 10) {
              ++this.pos;
            }
          case 10:
            if (this.options.locations) {
              this.lineStart = this.pos;
              ++this.curLine;
            }
            return "";
          case 56:
          case 57:
            if (this.strict) {
              this.invalidStringToken(
                this.pos - 1,
                "Invalid escape sequence"
              );
            }
            if (inTemplate) {
              var codePos = this.pos - 1;
              this.invalidStringToken(
                codePos,
                "Invalid escape sequence in template string"
              );
              return null;
            }
          default:
            if (ch >= 48 && ch <= 55) {
              var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
              var octal = parseInt(octalStr, 8);
              if (octal > 255) {
                octalStr = octalStr.slice(0, -1);
                octal = parseInt(octalStr, 8);
              }
              this.pos += octalStr.length - 1;
              ch = this.input.charCodeAt(this.pos);
              if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
                this.invalidStringToken(
                  this.pos - 1 - octalStr.length,
                  inTemplate ? "Octal literal in template string" : "Octal literal in strict mode"
                );
              }
              return String.fromCharCode(octal);
            }
            if (isNewLine(ch)) {
              return "";
            }
            return String.fromCharCode(ch);
        }
      };
      pp.readHexChar = function(len) {
        var codePos = this.pos;
        var n = this.readInt(16, len);
        if (n === null) {
          this.invalidStringToken(codePos, "Bad character escape sequence");
        }
        return n;
      };
      pp.readWord1 = function() {
        this.containsEsc = false;
        var word = "", first = true, chunkStart = this.pos;
        var astral = this.options.ecmaVersion >= 6;
        while (this.pos < this.input.length) {
          var ch = this.fullCharCodeAtPos();
          if (isIdentifierChar(ch, astral)) {
            this.pos += ch <= 65535 ? 1 : 2;
          } else if (ch === 92) {
            this.containsEsc = true;
            word += this.input.slice(chunkStart, this.pos);
            var escStart = this.pos;
            if (this.input.charCodeAt(++this.pos) !== 117) {
              this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
            }
            ++this.pos;
            var esc = this.readCodePoint();
            if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
              this.invalidStringToken(escStart, "Invalid Unicode escape");
            }
            word += codePointToString(esc);
            chunkStart = this.pos;
          } else {
            break;
          }
          first = false;
        }
        return word + this.input.slice(chunkStart, this.pos);
      };
      pp.readWord = function() {
        var word = this.readWord1();
        var type = types$1.name;
        if (this.keywords.test(word)) {
          type = keywords[word];
        }
        return this.finishToken(type, word);
      };
      var version = "8.8.1";
      Parser2.acorn = {
        Parser: Parser2,
        version,
        defaultOptions,
        Position,
        SourceLocation,
        getLineInfo,
        Node,
        TokenType,
        tokTypes: types$1,
        keywordTypes: keywords,
        TokContext,
        tokContexts: types,
        isIdentifierChar,
        isIdentifierStart,
        Token,
        isNewLine,
        lineBreak,
        lineBreakG,
        nonASCIIwhitespace
      };
      function parse(input, options) {
        return Parser2.parse(input, options);
      }
      __name(parse, "parse");
      function parseExpressionAt(input, pos, options) {
        return Parser2.parseExpressionAt(input, pos, options);
      }
      __name(parseExpressionAt, "parseExpressionAt");
      function tokenizer(input, options) {
        return Parser2.tokenizer(input, options);
      }
      __name(tokenizer, "tokenizer");
      exports2.Node = Node;
      exports2.Parser = Parser2;
      exports2.Position = Position;
      exports2.SourceLocation = SourceLocation;
      exports2.TokContext = TokContext;
      exports2.Token = Token;
      exports2.TokenType = TokenType;
      exports2.defaultOptions = defaultOptions;
      exports2.getLineInfo = getLineInfo;
      exports2.isIdentifierChar = isIdentifierChar;
      exports2.isIdentifierStart = isIdentifierStart;
      exports2.isNewLine = isNewLine;
      exports2.keywordTypes = keywords;
      exports2.lineBreak = lineBreak;
      exports2.lineBreakG = lineBreakG;
      exports2.nonASCIIwhitespace = nonASCIIwhitespace;
      exports2.parse = parse;
      exports2.parseExpressionAt = parseExpressionAt;
      exports2.tokContexts = types;
      exports2.tokTypes = types$1;
      exports2.tokenizer = tokenizer;
      exports2.version = version;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/jintr/dist/src/main.js
var require_main = __commonJS({
  "node_modules/jintr/dist/src/main.js"(exports) {
    "use strict";
    var __classPrivateFieldSet46 = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet49 = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var _Jinter_ast;
    Object.defineProperty(exports, "__esModule", { value: true });
    var visitor_1 = __importDefault(require_visitor());
    var acorn_1 = require_acorn();
    var Jinter2 = class {
      constructor(input) {
        _Jinter_ast.set(this, void 0);
        const program = (0, acorn_1.parse)(input, { ecmaVersion: 2020 });
        __classPrivateFieldSet46(this, _Jinter_ast, program.body, "f");
        this.visitor = new visitor_1.default(__classPrivateFieldGet49(this, _Jinter_ast, "f"));
        this.scope = this.visitor.scope;
        this.scope.set("print", (args) => console.log(...args));
        this.visitor.on("console", (node, visitor) => {
          if (node.type === "Identifier")
            return console;
          if (node.type === "CallExpression" && node.callee.type === "MemberExpression") {
            const prop = visitor.visitNode(node.callee.property);
            const args = node.arguments.map((arg) => visitor.visitNode(arg));
            const console_prop = console[prop];
            if (!console_prop)
              return "proceed";
            return console_prop(...args);
          }
          return "proceed";
        });
        this.visitor.on("Math", (node, visitor) => {
          if (node.type === "Identifier")
            return Math;
          if (node.type === "CallExpression" && node.callee.type === "MemberExpression") {
            const prop = visitor.visitNode(node.callee.property);
            const args = node.arguments.map((arg) => visitor.visitNode(arg));
            const math_prop = Math[prop];
            if (!math_prop)
              return "proceed";
            return math_prop(...args);
          }
          return "proceed";
        });
        this.visitor.on("String", (node, visitor) => {
          if (node.type === "Identifier")
            return String;
          if (node.type === "CallExpression" && node.callee.type === "MemberExpression") {
            const prop = visitor.visitNode(node.callee.property);
            const args = node.arguments.map((arg) => visitor.visitNode(arg));
            const string_prop = String[prop];
            if (!string_prop)
              return "proceed";
            return string_prop(args);
          }
          return "proceed";
        });
        this.visitor.on("Date", (node) => {
          if (node.type === "Identifier")
            return Date;
        });
      }
      interpret() {
        return this.visitor.run();
      }
    };
    __name(Jinter2, "Jinter");
    exports.default = Jinter2;
    _Jinter_ast = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/jintr/dist/index.js
var require_dist = __commonJS({
  "node_modules/jintr/dist/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Jinter = void 0;
    var main_1 = __importDefault(require_main());
    exports.Jinter = main_1.default;
    exports.default = main_1.default;
  }
});

// node_modules/event-target-polyfill/index.js
var require_event_target_polyfill = __commonJS({
  "node_modules/event-target-polyfill/index.js"() {
    var root = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof globalThis !== "undefined" && globalThis;
    function isConstructor(fn) {
      try {
        new fn();
      } catch (error) {
        return false;
      }
      return true;
    }
    __name(isConstructor, "isConstructor");
    if (typeof root.Event !== "function" || !isConstructor(root.Event)) {
      root.Event = function() {
        function Event2(type, options) {
          this.bubbles = !!options && !!options.bubbles;
          this.cancelable = !!options && !!options.cancelable;
          this.composed = !!options && !!options.composed;
          this.type = type;
        }
        __name(Event2, "Event");
        return Event2;
      }();
    }
    if (typeof root.EventTarget === "undefined" || !isConstructor(root.Event)) {
      root.EventTarget = function() {
        function EventTarget2() {
          this.__listeners = /* @__PURE__ */ new Map();
        }
        __name(EventTarget2, "EventTarget");
        EventTarget2.prototype = Object.create(Object.prototype);
        EventTarget2.prototype.addEventListener = function(type, listener, options) {
          if (arguments.length < 2) {
            throw new TypeError(
              `TypeError: Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only ${arguments.length} present.`
            );
          }
          const __listeners = this.__listeners;
          const actualType = type.toString();
          if (!__listeners.has(actualType)) {
            __listeners.set(actualType, /* @__PURE__ */ new Map());
          }
          const listenersForType = __listeners.get(actualType);
          if (!listenersForType.has(listener)) {
            listenersForType.set(listener, options);
          }
        };
        EventTarget2.prototype.removeEventListener = function(type, listener, _options) {
          if (arguments.length < 2) {
            throw new TypeError(
              `TypeError: Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only ${arguments.length} present.`
            );
          }
          const __listeners = this.__listeners;
          const actualType = type.toString();
          if (__listeners.has(actualType)) {
            const listenersForType = __listeners.get(actualType);
            if (listenersForType.has(listener)) {
              listenersForType.delete(listener);
            }
          }
        };
        EventTarget2.prototype.dispatchEvent = function(event) {
          if (!(event instanceof Event)) {
            throw new TypeError(
              `Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1 is not of type 'Event'.`
            );
          }
          const type = event.type;
          const __listeners = this.__listeners;
          const listenersForType = __listeners.get(type);
          if (listenersForType) {
            for (const [listener, options] of listenersForType.entries()) {
              try {
                if (typeof listener === "function") {
                  listener.call(this, event);
                } else if (listener && typeof listener.handleEvent === "function") {
                  listener.handleEvent(event);
                }
              } catch (err) {
                setTimeout(() => {
                  throw err;
                });
              }
              if (options && options.once) {
                listenersForType.delete(listener);
              }
            }
          }
          return true;
        };
        return EventTarget2;
      }();
    }
  }
});

// dist/src/utils/Utils.js
var Utils_exports = {};
__export(Utils_exports, {
  ChannelError: () => ChannelError,
  InnertubeError: () => InnertubeError,
  MissingParamError: () => MissingParamError,
  OAuthError: () => OAuthError,
  ParsingError: () => ParsingError,
  Platform: () => Platform,
  PlayerError: () => PlayerError,
  SessionError: () => SessionError,
  concatMemos: () => concatMemos,
  debugFetch: () => debugFetch,
  deepCompare: () => deepCompare,
  escapeStringRegexp: () => escapeStringRegexp,
  generateRandomString: () => generateRandomString,
  generateSidAuth: () => generateSidAuth,
  getRandomUserAgent: () => getRandomUserAgent,
  getStringBetweenStrings: () => getStringBetweenStrings,
  hasKeys: () => hasKeys,
  streamToIterable: () => streamToIterable,
  throwIfMissing: () => throwIfMissing,
  timeToSeconds: () => timeToSeconds,
  u8ToBase64: () => u8ToBase64
});

// dist/src/parser/helpers.js
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _YTNode_instances;
var _YTNode_is;
var _Maybe_instances;
var _Maybe_value;
var _Maybe_checkPrimative;
var _Maybe_assertPrimative;
var _SuperParsedResult_result;
var isObserved = Symbol("ObservedArray.isObserved");
var YTNode = class {
  constructor() {
    _YTNode_instances.add(this);
    this.type = this.constructor.type;
  }
  is(...types) {
    return types.some((type) => __classPrivateFieldGet(this, _YTNode_instances, "m", _YTNode_is).call(this, type));
  }
  as(...types) {
    if (!this.is(...types)) {
      throw new ParsingError(`Cannot cast ${this.type} to one of ${types.map((t) => t.type).join(", ")}`);
    }
    return this;
  }
  hasKey(key) {
    return Reflect.has(this, key);
  }
  key(key) {
    if (!this.hasKey(key)) {
      throw new ParsingError(`Missing key ${key}`);
    }
    return new Maybe(this[key]);
  }
};
__name(YTNode, "YTNode");
_YTNode_instances = /* @__PURE__ */ new WeakSet(), _YTNode_is = /* @__PURE__ */ __name(function _YTNode_is2(type) {
  return this.type === type.type;
}, "_YTNode_is");
YTNode.type = "YTNode";
var Maybe = class {
  constructor(value) {
    _Maybe_instances.add(this);
    _Maybe_value.set(this, void 0);
    __classPrivateFieldSet(this, _Maybe_value, value, "f");
  }
  get typeof() {
    return typeof __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  string() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "string");
  }
  isString() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "string");
  }
  number() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "number");
  }
  isNumber() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "number");
  }
  bigint() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "bigint");
  }
  isBigint() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "bigint");
  }
  boolean() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "boolean");
  }
  isBoolean() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "boolean");
  }
  symbol() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "symbol");
  }
  isSymbol() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "symbol");
  }
  undefined() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "undefined");
  }
  isUndefined() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "undefined");
  }
  null() {
    if (__classPrivateFieldGet(this, _Maybe_value, "f") !== null)
      throw new TypeError(`Expected null, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  isNull() {
    return __classPrivateFieldGet(this, _Maybe_value, "f") === null;
  }
  object() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "object");
  }
  isObject() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "object");
  }
  function() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "function");
  }
  isFunction() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "function");
  }
  array() {
    if (!Array.isArray(__classPrivateFieldGet(this, _Maybe_value, "f"))) {
      throw new TypeError(`Expected array, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
    }
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  arrayOfMaybe() {
    const arrayProps = [];
    return new Proxy(this.array(), {
      get(target, prop) {
        if (Reflect.has(arrayProps, prop)) {
          return Reflect.get(target, prop);
        }
        return new Maybe(Reflect.get(target, prop));
      }
    });
  }
  isArray() {
    return Array.isArray(__classPrivateFieldGet(this, _Maybe_value, "f"));
  }
  node() {
    if (!(__classPrivateFieldGet(this, _Maybe_value, "f") instanceof YTNode)) {
      throw new TypeError(`Expected YTNode, got ${__classPrivateFieldGet(this, _Maybe_value, "f").constructor.name}`);
    }
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  isNode() {
    return __classPrivateFieldGet(this, _Maybe_value, "f") instanceof YTNode;
  }
  nodeOfType(...types) {
    return this.node().as(...types);
  }
  isNodeOfType(...types) {
    return this.isNode() && this.node().is(...types);
  }
  observed() {
    if (!this.isObserved()) {
      throw new TypeError(`Expected ObservedArray, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
    }
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  isObserved() {
    var _a5;
    return (_a5 = __classPrivateFieldGet(this, _Maybe_value, "f")) === null || _a5 === void 0 ? void 0 : _a5[isObserved];
  }
  parsed() {
    if (!(__classPrivateFieldGet(this, _Maybe_value, "f") instanceof SuperParsedResult)) {
      throw new TypeError(`Expected SuperParsedResult, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
    }
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  isParsed() {
    return __classPrivateFieldGet(this, _Maybe_value, "f") instanceof SuperParsedResult;
  }
  any() {
    console.warn("This call is not meant to be used outside of debugging. Please use the specific type getter instead.");
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  instanceof(type) {
    if (!this.isInstanceof(type)) {
      throw new TypeError(`Expected instance of ${type.name}, got ${__classPrivateFieldGet(this, _Maybe_value, "f").constructor.name}`);
    }
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  isInstanceof(type) {
    return __classPrivateFieldGet(this, _Maybe_value, "f") instanceof type;
  }
};
__name(Maybe, "Maybe");
_Maybe_value = /* @__PURE__ */ new WeakMap(), _Maybe_instances = /* @__PURE__ */ new WeakSet(), _Maybe_checkPrimative = /* @__PURE__ */ __name(function _Maybe_checkPrimative2(type) {
  if (typeof __classPrivateFieldGet(this, _Maybe_value, "f") !== type) {
    return false;
  }
  return true;
}, "_Maybe_checkPrimative"), _Maybe_assertPrimative = /* @__PURE__ */ __name(function _Maybe_assertPrimative2(type) {
  if (!__classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, type)) {
    throw new TypeError(`Expected ${type}, got ${this.typeof}`);
  }
  return __classPrivateFieldGet(this, _Maybe_value, "f");
}, "_Maybe_assertPrimative");
var SuperParsedResult = class {
  constructor(result) {
    _SuperParsedResult_result.set(this, void 0);
    __classPrivateFieldSet(this, _SuperParsedResult_result, result, "f");
  }
  get is_null() {
    return __classPrivateFieldGet(this, _SuperParsedResult_result, "f") === null;
  }
  get is_array() {
    return !this.is_null && Array.isArray(__classPrivateFieldGet(this, _SuperParsedResult_result, "f"));
  }
  get is_node() {
    return !this.is_array;
  }
  array() {
    if (!this.is_array) {
      throw new TypeError("Expected an array, got a node");
    }
    return __classPrivateFieldGet(this, _SuperParsedResult_result, "f");
  }
  item() {
    if (!this.is_node) {
      throw new TypeError("Expected a node, got an array");
    }
    return __classPrivateFieldGet(this, _SuperParsedResult_result, "f");
  }
};
__name(SuperParsedResult, "SuperParsedResult");
_SuperParsedResult_result = /* @__PURE__ */ new WeakMap();
function observe(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      if (prop == "get") {
        return (rule, del_item) => target.find((obj2, index) => {
          const match = deepCompare(rule, obj2);
          if (match && del_item) {
            target.splice(index, 1);
          }
          return match;
        });
      }
      if (prop == isObserved) {
        return true;
      }
      if (prop == "getAll") {
        return (rule, del_items) => target.filter((obj2, index) => {
          const match = deepCompare(rule, obj2);
          if (match && del_items) {
            target.splice(index, 1);
          }
          return match;
        });
      }
      if (prop == "matchCondition") {
        return (condition) => target.find((obj2) => {
          return condition(obj2);
        });
      }
      if (prop == "filterType") {
        return (...types) => {
          return observe(target.filter((node) => {
            if (node.is(...types))
              return true;
            return false;
          }));
        };
      }
      if (prop == "firstOfType") {
        return (...types) => {
          return target.find((node) => {
            if (node.is(...types))
              return true;
            return false;
          });
        };
      }
      if (prop == "first") {
        return () => target[0];
      }
      if (prop == "as") {
        return (...types) => {
          return observe(target.map((node) => {
            if (node.is(...types))
              return node;
            throw new ParsingError(`Expected node of any type ${types.map((type) => type.type).join(", ")}, got ${node.type}`);
          }));
        };
      }
      if (prop == "remove") {
        return (index) => target.splice(index, 1);
      }
      return Reflect.get(target, prop);
    }
  });
}
__name(observe, "observe");
var Memo = class extends Map {
  getType(type) {
    if (Array.isArray(type))
      return observe(type.flatMap((type2) => this.get(type2.type) || []));
    return observe(this.get(type.type) || []);
  }
};
__name(Memo, "Memo");

// dist/src/utils/user-agents.js
var user_agents_default = {
  "desktop": [
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.61",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
  ],
  "mobile": [
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 12; SM-G990U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/108.1  Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15G77 ChannelId(73) NebulaSDK/1.8.100112 Nebula PSDType(1) AlipayDefined(nt:4G,ws:320|504|2.0) AliApp(AP/10.1.30.300) AlipayClient/10.1.30.300 Alipay Language/zh-Hans",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 13; SM-N981U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 12; M2010J19SG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 11; M2102J20SG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1"
  ]
};

// dist/src/utils/Utils.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __await = function(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = function(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  __name(verb, "verb");
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  __name(resume, "resume");
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  __name(step, "step");
  function fulfill(value) {
    resume("next", value);
  }
  __name(fulfill, "fulfill");
  function reject(value) {
    resume("throw", value);
  }
  __name(reject, "reject");
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
  __name(settle, "settle");
};
var _a;
var _Platform_shim;
var Platform = class {
  static load(platform) {
    __classPrivateFieldSet2(Platform, _a, platform, "f", _Platform_shim);
  }
  static get shim() {
    if (!__classPrivateFieldGet2(Platform, _a, "f", _Platform_shim)) {
      throw new Error("Platform is not loaded");
    }
    return __classPrivateFieldGet2(Platform, _a, "f", _Platform_shim);
  }
};
__name(Platform, "Platform");
_a = Platform;
_Platform_shim = { value: void 0 };
var InnertubeError = class extends Error {
  constructor(message, info) {
    super(message);
    if (info) {
      this.info = info;
    }
    this.date = new Date();
    this.version = Platform.shim.info.version;
  }
};
__name(InnertubeError, "InnertubeError");
var ParsingError = class extends InnertubeError {
};
__name(ParsingError, "ParsingError");
var MissingParamError = class extends InnertubeError {
};
__name(MissingParamError, "MissingParamError");
var OAuthError = class extends InnertubeError {
};
__name(OAuthError, "OAuthError");
var PlayerError = class extends Error {
};
__name(PlayerError, "PlayerError");
var SessionError = class extends Error {
};
__name(SessionError, "SessionError");
var ChannelError = class extends Error {
};
__name(ChannelError, "ChannelError");
function deepCompare(obj1, obj2) {
  const keys = Reflect.ownKeys(obj1);
  return keys.some((key) => {
    var _b;
    const is_text = ((_b = obj2[key]) === null || _b === void 0 ? void 0 : _b.constructor.name) === "Text";
    if (!is_text && typeof obj2[key] === "object") {
      return JSON.stringify(obj1[key]) === JSON.stringify(obj2[key]);
    }
    return obj1[key] === (is_text ? obj2[key].toString() : obj2[key]);
  });
}
__name(deepCompare, "deepCompare");
function getStringBetweenStrings(data, start_string, end_string) {
  const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, "s");
  const match = data.match(regex);
  return match ? match[1] : void 0;
}
__name(getStringBetweenStrings, "getStringBetweenStrings");
function escapeStringRegexp(input) {
  return input.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
__name(escapeStringRegexp, "escapeStringRegexp");
function getRandomUserAgent(type) {
  const available_agents = user_agents_default[type];
  const random_index = Math.floor(Math.random() * available_agents.length);
  return available_agents[random_index];
}
__name(getRandomUserAgent, "getRandomUserAgent");
function generateSidAuth(sid) {
  return __awaiter(this, void 0, void 0, function* () {
    const youtube = "https://www.youtube.com";
    const timestamp = Math.floor(new Date().getTime() / 1e3);
    const input = [timestamp, sid, youtube].join(" ");
    const gen_hash = yield Platform.shim.sha1Hash(input);
    return ["SAPISIDHASH", [timestamp, gen_hash].join("_")].join(" ");
  });
}
__name(generateSidAuth, "generateSidAuth");
function generateRandomString(length) {
  const result = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  for (let i = 0; i < length; i++) {
    result.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
  }
  return result.join("");
}
__name(generateRandomString, "generateRandomString");
function timeToSeconds(time) {
  const params = time.split(":").map((param) => parseInt(param));
  switch (params.length) {
    case 1:
      return params[0];
    case 2:
      return params[0] * 60 + params[1];
    case 3:
      return params[0] * 3600 + params[1] * 60 + params[2];
    default:
      throw new Error("Invalid time string");
  }
}
__name(timeToSeconds, "timeToSeconds");
function concatMemos(...iterables) {
  const memo = new Memo();
  for (const iterable of iterables) {
    if (!iterable)
      continue;
    for (const item of iterable) {
      memo.set(...item);
    }
  }
  return memo;
}
__name(concatMemos, "concatMemos");
function throwIfMissing(params) {
  for (const [key, value] of Object.entries(params)) {
    if (!value)
      throw new MissingParamError(`${key} is missing`);
  }
}
__name(throwIfMissing, "throwIfMissing");
function hasKeys(params, ...keys) {
  for (const key of keys) {
    if (!Reflect.has(params, key) || params[key] === void 0)
      return false;
  }
  return true;
}
__name(hasKeys, "hasKeys");
function streamToIterable(stream) {
  return __asyncGenerator(this, arguments, /* @__PURE__ */ __name(function* streamToIterable_1() {
    const reader = stream.getReader();
    try {
      while (true) {
        const { done, value } = yield __await(reader.read());
        if (done) {
          return yield __await(void 0);
        }
        yield yield __await(value);
      }
    } finally {
      reader.releaseLock();
    }
  }, "streamToIterable_1"));
}
__name(streamToIterable, "streamToIterable");
var debugFetch = /* @__PURE__ */ __name((input, init) => {
  const url = typeof input === "string" ? new URL(input) : input instanceof URL ? input : new URL(input.url);
  const headers = (init === null || init === void 0 ? void 0 : init.headers) ? new Headers(init.headers) : input instanceof Request ? input.headers : new Headers();
  const arr_headers = [...headers];
  const body_contents = (init === null || init === void 0 ? void 0 : init.body) ? typeof init.body === "string" ? headers.get("content-type") === "application/json" ? JSON.stringify(JSON.parse(init.body), null, 2) : init.body : "    <binary>" : "    (none)";
  const headers_serialized = arr_headers.length > 0 ? `${arr_headers.map(([key, value]) => `    ${key}: ${value}`).join("\n")}` : "    (none)";
  console.log(`YouTube.js Fetch:
  url: ${url.toString()}
  method: ${(init === null || init === void 0 ? void 0 : init.method) || "GET"}
  headers:
${headers_serialized}
' + 
    '  body:
${body_contents}`);
  return Platform.shim.fetch(input, init);
}, "debugFetch");
function u8ToBase64(u8) {
  return btoa(String.fromCharCode.apply(null, Array.from(u8)));
}
__name(u8ToBase64, "u8ToBase64");

// dist/src/platform/polyfills/web-crypto.js
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function sha1Hash(str) {
  return __awaiter2(this, void 0, void 0, function* () {
    const byteToHex = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "0a",
      "0b",
      "0c",
      "0d",
      "0e",
      "0f",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "1a",
      "1b",
      "1c",
      "1d",
      "1e",
      "1f",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "2a",
      "2b",
      "2c",
      "2d",
      "2e",
      "2f",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "3a",
      "3b",
      "3c",
      "3d",
      "3e",
      "3f",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "4a",
      "4b",
      "4c",
      "4d",
      "4e",
      "4f",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "5a",
      "5b",
      "5c",
      "5d",
      "5e",
      "5f",
      "60",
      "61",
      "62",
      "63",
      "64",
      "65",
      "66",
      "67",
      "68",
      "69",
      "6a",
      "6b",
      "6c",
      "6d",
      "6e",
      "6f",
      "70",
      "71",
      "72",
      "73",
      "74",
      "75",
      "76",
      "77",
      "78",
      "79",
      "7a",
      "7b",
      "7c",
      "7d",
      "7e",
      "7f",
      "80",
      "81",
      "82",
      "83",
      "84",
      "85",
      "86",
      "87",
      "88",
      "89",
      "8a",
      "8b",
      "8c",
      "8d",
      "8e",
      "8f",
      "90",
      "91",
      "92",
      "93",
      "94",
      "95",
      "96",
      "97",
      "98",
      "99",
      "9a",
      "9b",
      "9c",
      "9d",
      "9e",
      "9f",
      "a0",
      "a1",
      "a2",
      "a3",
      "a4",
      "a5",
      "a6",
      "a7",
      "a8",
      "a9",
      "aa",
      "ab",
      "ac",
      "ad",
      "ae",
      "af",
      "b0",
      "b1",
      "b2",
      "b3",
      "b4",
      "b5",
      "b6",
      "b7",
      "b8",
      "b9",
      "ba",
      "bb",
      "bc",
      "bd",
      "be",
      "bf",
      "c0",
      "c1",
      "c2",
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8",
      "c9",
      "ca",
      "cb",
      "cc",
      "cd",
      "ce",
      "cf",
      "d0",
      "d1",
      "d2",
      "d3",
      "d4",
      "d5",
      "d6",
      "d7",
      "d8",
      "d9",
      "da",
      "db",
      "dc",
      "dd",
      "de",
      "df",
      "e0",
      "e1",
      "e2",
      "e3",
      "e4",
      "e5",
      "e6",
      "e7",
      "e8",
      "e9",
      "ea",
      "eb",
      "ec",
      "ed",
      "ee",
      "ef",
      "f0",
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "f9",
      "fa",
      "fb",
      "fc",
      "fd",
      "fe",
      "ff"
    ];
    function hex(arrayBuffer) {
      const buff = new Uint8Array(arrayBuffer);
      const hexOctets = [];
      for (let i = 0; i < buff.length; ++i)
        hexOctets.push(byteToHex[buff[i]]);
      return hexOctets.join("");
    }
    __name(hex, "hex");
    return hex(yield crypto.subtle.digest("SHA-1", new TextEncoder().encode(str)));
  });
}
__name(sha1Hash, "sha1Hash");

// dist/package.json
var package_default = {
  name: "volumio-youtubei.js",
  version: "0.2.0-a.1",
  description: "Modified version of YouTube.js library for use with Volumio's YouTube Music plugin.",
  type: "module",
  types: "./dist/src/platform/lib.d.ts",
  typesVersions: {
    "*": {
      agnostic: [
        "./dist/src/platform/lib.d.ts"
      ],
      web: [
        "./dist/src/platform/lib.d.ts"
      ],
      "web.bundle": [
        "./dist/src/platform/lib.d.ts"
      ],
      "web.bundle.min": [
        "./dist/src/platform/lib.d.ts"
      ]
    }
  },
  exports: {
    ".": {
      node: {
        import: "./dist/src/platform/node.js",
        require: "./bundle/node.cjs"
      },
      deno: "./dist/src/platform/deno.js",
      types: "./dist/src/platform/lib.d.ts",
      browser: "./dist/src/platform/web.js",
      default: "./dist/src/platform/web.js"
    },
    "./agnostic": {
      types: "./dist/src/platform/lib.d.ts",
      default: "./dist/src/platform/lib.js"
    },
    "./web": {
      types: "./dist/src/platform/lib.d.ts",
      default: "./dist/src/platform/web.js"
    },
    "./web.bundle": {
      types: "./dist/src/platform/lib.d.ts",
      default: "./bundle/browser.js"
    },
    "./web.bundle.min": {
      types: "./dist/src/platform/lib.d.ts",
      default: "./bundle/browser.min.js"
    }
  },
  author: "Original author: LuanRT <luan.lrt4@gmail.com> (https://github.com/LuanRT). Modified by Patrick Kan (https://github.com/patrickkfkan).",
  funding: [
    "https://github.com/sponsors/LuanRT"
  ],
  contributors: [
    "Wykerd (https://github.com/wykerd/)",
    "MasterOfBob777 (https://github.com/MasterOfBob777)",
    "patrickkfkan (https://github.com/patrickkfkan)",
    "akkadaska (https://github.com/akkadaska)"
  ],
  directories: {
    test: "./test",
    examples: "./examples",
    dist: "./dist"
  },
  scripts: {
    test: "npx jest --verbose",
    lint: "npx eslint ./src",
    "lint:fix": "npx eslint --fix ./src",
    build: "npm run build:parser-map && npm run build:proto && npm run build:esm && npm run bundle:node && npm run bundle:browser && npm run bundle:browser:prod",
    "build:parser-map": "node ./scripts/build-parser-map.cjs",
    "build:proto": 'npx pb-gen-ts --entry-path="src/proto" --out-dir="src/proto/generated" --ext-in-import=".js"',
    "build:esm": "npx tsc",
    "build:deno": `npx cpy ./src ./deno && npx cpy ./package.json ./deno && npx replace ".js';" ".ts';" ./deno -r && npx replace '.js";' '.ts";' ./deno -r && npx replace "'linkedom';" "'https://esm.sh/linkedom';" ./deno -r && npx replace "'jintr';" "'https://esm.sh/jintr';" ./deno -r && npx replace "new Jinter.default" "new Jinter" ./deno -r`,
    "bundle:node": 'npx esbuild ./dist/src/platform/node.js --bundle --target=node10 --keep-names --format=cjs --platform=node --outfile=./bundle/node.cjs --external:jintr --external:undici --external:linkedom --sourcemap --banner:js="/* eslint-disable */"',
    "bundle:browser": 'npx esbuild ./dist/src/platform/web.js --banner:js="/* eslint-disable */" --bundle --target=chrome58 --keep-names --format=esm --sourcemap --define:global=globalThis --outfile=./bundle/browser.js --platform=browser',
    "bundle:browser:prod": "npm run bundle:browser -- --outfile=./bundle/browser.min.js --minify",
    watch: "npx tsc --watch"
  },
  repository: {
    type: "git",
    url: "git+https://github.com/patrickkfkan/Volumio-YouTube.js.git"
  },
  license: "MIT",
  dependencies: {
    jintr: "^0.4.1",
    "event-target-polyfill": "0.0.3",
    linkedom: "^0.14.12",
    "node-fetch": "^2.6.7",
    "web-streams-polyfill": "^3.2.1"
  },
  devDependencies: {
    "@types/jest": "^28.1.7",
    "@types/node": "^17.0.45",
    "@typescript-eslint/eslint-plugin": "^5.30.6",
    "@typescript-eslint/parser": "^5.30.6",
    "cpy-cli": "^4.2.0",
    esbuild: "^0.14.49",
    eslint: "^8.19.0",
    "eslint-plugin-tsdoc": "^0.2.16",
    glob: "^8.0.3",
    jest: "^28.1.3",
    pbkit: "^0.0.59",
    replace: "^1.2.2",
    "ts-jest": "^28.0.8",
    typescript: "^4.9.5"
  },
  bugs: {
    url: "https://github.com/patrickkfkan/Volumio-YouTube.js/issues"
  },
  homepage: "https://github.com/patrickkfkan/Volumio-YouTube.js#readme",
  keywords: [
    "yt",
    "dl",
    "ytdl",
    "youtube",
    "youtubedl",
    "youtube-dl",
    "youtube-downloader",
    "youtube-music",
    "youtube-studio",
    "innertube",
    "unofficial",
    "downloader",
    "livechat",
    "studio",
    "upload",
    "ytmusic",
    "search",
    "music",
    "api"
  ]
};

// dist/src/platform/jsruntime/jinter.js
var import_jintr = __toESM(require_dist(), 1);
function evaluate(code, env) {
  const runtime = new import_jintr.default.default(code);
  for (const [key, value] of Object.entries(env)) {
    runtime.scope.set(key, value);
  }
  return runtime.interpret();
}
__name(evaluate, "evaluate");

// dist/src/utils/Constants.js
var Constants_exports = {};
__export(Constants_exports, {
  CLIENTS: () => CLIENTS,
  INNERTUBE_HEADERS_BASE: () => INNERTUBE_HEADERS_BASE,
  OAUTH: () => OAUTH,
  STREAM_HEADERS: () => STREAM_HEADERS,
  URLS: () => URLS,
  default: () => Constants_default
});
var URLS = Object.freeze({
  YT_BASE: "https://www.youtube.com",
  YT_MUSIC_BASE: "https://music.youtube.com",
  YT_SUGGESTIONS: "https://suggestqueries.google.com/complete/",
  YT_UPLOAD: "https://upload.youtube.com/",
  API: Object.freeze({
    BASE: "https://youtubei.googleapis.com",
    PRODUCTION_1: "https://www.youtube.com/youtubei/",
    PRODUCTION_2: "https://youtubei.googleapis.com/youtubei/",
    STAGING: "https://green-youtubei.sandbox.googleapis.com/youtubei/",
    RELEASE: "https://release-youtubei.sandbox.googleapis.com/youtubei/",
    TEST: "https://test-youtubei.sandbox.googleapis.com/youtubei/",
    CAMI: "http://cami-youtubei.sandbox.googleapis.com/youtubei/",
    UYTFE: "https://uytfe.sandbox.google.com/youtubei/"
  })
});
var OAUTH = Object.freeze({
  SCOPE: "http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content",
  GRANT_TYPE: "http://oauth.net/grant_type/device/1.0",
  MODEL_NAME: "ytlr::",
  HEADERS: Object.freeze({
    "accept": "*/*",
    "origin": "https://www.youtube.com",
    "user-agent": "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version",
    "content-type": "application/json",
    "referer": "https://www.youtube.com/tv",
    "accept-language": "en-US"
  }),
  REGEX: Object.freeze({
    AUTH_SCRIPT: /<script id="base-js" src="(.*?)" nonce=".*?"><\/script>/,
    CLIENT_IDENTITY: new RegExp('.+?={};var .+?={clientId:"(?<client_id>.+?)",.+?:"(?<client_secret>.+?)"},')
  })
});
var CLIENTS = Object.freeze({
  WEB: {
    NAME: "WEB",
    VERSION: "2.20230104.01.00",
    API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    API_VERSION: "v1"
  },
  WEB_KIDS: {
    NAME: "WEB_KIDS",
    VERSION: "2.20230111.00.00"
  },
  YTMUSIC: {
    NAME: "WEB_REMIX",
    VERSION: "1.20211213.00.00"
  },
  ANDROID: {
    NAME: "ANDROID",
    VERSION: "17.34.35",
    SDK_VERSION: "29"
  },
  YTSTUDIO_ANDROID: {
    NAME: "ANDROID_CREATOR",
    VERSION: "22.43.101"
  },
  YTMUSIC_ANDROID: {
    NAME: "ANDROID_MUSIC",
    VERSION: "5.34.51"
  },
  TV_EMBEDDED: {
    NAME: "TVHTML5_SIMPLY_EMBEDDED_PLAYER",
    VERSION: "2.0"
  }
});
var STREAM_HEADERS = Object.freeze({
  "accept": "*/*",
  "origin": "https://www.youtube.com",
  "referer": "https://www.youtube.com",
  "DNT": "?1"
});
var INNERTUBE_HEADERS_BASE = Object.freeze({
  "accept": "*/*",
  "accept-encoding": "gzip, deflate",
  "content-type": "application/json"
});
var Constants_default = {
  URLS,
  OAUTH,
  CLIENTS,
  STREAM_HEADERS,
  INNERTUBE_HEADERS_BASE
};

// dist/src/utils/EventEmitterLike.js
var __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet3 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CustomEvent_detail;
var _EventEmitterLike_legacy_listeners;
require_event_target_polyfill();
if (!Reflect.has(globalThis, "CustomEvent")) {
  class CustomEvent2 extends Event {
    constructor(type, options) {
      var _a5;
      super(type, options);
      _CustomEvent_detail.set(this, void 0);
      __classPrivateFieldSet3(this, _CustomEvent_detail, (_a5 = options === null || options === void 0 ? void 0 : options.detail) !== null && _a5 !== void 0 ? _a5 : null, "f");
    }
    get detail() {
      return __classPrivateFieldGet3(this, _CustomEvent_detail, "f");
    }
  }
  __name(CustomEvent2, "CustomEvent");
  _CustomEvent_detail = /* @__PURE__ */ new WeakMap();
  Reflect.set(globalThis, "CustomEvent", CustomEvent2);
}
var EventEmitterLike = class extends EventTarget {
  constructor() {
    super();
    _EventEmitterLike_legacy_listeners.set(this, /* @__PURE__ */ new Map());
  }
  emit(type, ...args) {
    const event = new CustomEvent(type, { detail: args });
    this.dispatchEvent(event);
  }
  on(type, listener) {
    const wrapper = /* @__PURE__ */ __name((ev) => {
      if (ev instanceof CustomEvent) {
        listener(...ev.detail);
      } else {
        listener(ev);
      }
    }, "wrapper");
    __classPrivateFieldGet3(this, _EventEmitterLike_legacy_listeners, "f").set(listener, wrapper);
    this.addEventListener(type, wrapper);
  }
  once(type, listener) {
    const wrapper = /* @__PURE__ */ __name((ev) => {
      if (ev instanceof CustomEvent) {
        listener(...ev.detail);
      } else {
        listener(ev);
      }
      this.off(type, listener);
    }, "wrapper");
    __classPrivateFieldGet3(this, _EventEmitterLike_legacy_listeners, "f").set(listener, wrapper);
    this.addEventListener(type, wrapper);
  }
  off(type, listener) {
    const wrapper = __classPrivateFieldGet3(this, _EventEmitterLike_legacy_listeners, "f").get(listener);
    if (wrapper) {
      this.removeEventListener(type, wrapper);
      __classPrivateFieldGet3(this, _EventEmitterLike_legacy_listeners, "f").delete(listener);
    }
  }
};
__name(EventEmitterLike, "EventEmitterLike");
_EventEmitterLike_legacy_listeners = /* @__PURE__ */ new WeakMap();

// dist/src/parser/classes/DropdownItem.js
var DropdownItem = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c;
    super();
    this.label = new Text_default(data.label).toString();
    this.selected = !!data.isSelected;
    if (data.int32Value) {
      this.value = data.int32Value;
    } else if (data.stringValue) {
      this.value = data.stringValue;
    }
    if ((_a5 = data.onSelectCommand) === null || _a5 === void 0 ? void 0 : _a5.browseEndpoint) {
      this.endpoint = new NavigationEndpoint_default(data.onSelectCommand);
    }
    if ((_b = data.icon) === null || _b === void 0 ? void 0 : _b.iconType) {
      this.icon_type = (_c = data.icon) === null || _c === void 0 ? void 0 : _c.iconType;
    }
    if (data.descriptionText) {
      this.description = new Text_default(data.descriptionText).toString();
    }
  }
};
__name(DropdownItem, "DropdownItem");
DropdownItem.type = "DropdownItem";
var DropdownItem_default = DropdownItem;

// dist/src/parser/classes/Dropdown.js
var Dropdown = class extends YTNode {
  constructor(data) {
    super();
    this.label = data.label || "";
    this.entries = parser_default.parseArray(data.entries, DropdownItem_default);
  }
};
__name(Dropdown, "Dropdown");
Dropdown.type = "Dropdown";
var Dropdown_default = Dropdown;

// dist/src/parser/classes/CreatePlaylistDialog.js
var CreatePlaylistDialog = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.title = new Text_default(data.dialogTitle).toString();
    this.title_placeholder = data.titlePlaceholder || "";
    this.privacy_option = ((_a5 = parser_default.parseItem(data.privacyOption, Dropdown_default)) === null || _a5 === void 0 ? void 0 : _a5.entries) || null;
    this.create_button = parser_default.parseItem(data.cancelButton);
    this.cancel_button = parser_default.parseItem(data.cancelButton);
  }
};
__name(CreatePlaylistDialog, "CreatePlaylistDialog");
CreatePlaylistDialog.type = "CreatePlaylistDialog";
var CreatePlaylistDialog_default = CreatePlaylistDialog;

// dist/src/parser/classes/NavigationEndpoint.js
var NavigationEndpoint = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c, _d, _e, _f, _g, _h;
    super();
    if (Reflect.has(data || {}, "innertubeCommand"))
      data = data.innertubeCommand;
    const name = Object.keys(data || {}).find((item) => item.endsWith("Endpoint") || item.endsWith("Command"));
    this.payload = name ? Reflect.get(data, name) : {};
    if (Reflect.has(this.payload, "dialog")) {
      this.dialog = parser_default.parse(this.payload.dialog);
    }
    if (data === null || data === void 0 ? void 0 : data.serviceEndpoint) {
      data = data.serviceEndpoint;
    }
    this.metadata = {};
    if ((_b = (_a5 = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _a5 === void 0 ? void 0 : _a5.webCommandMetadata) === null || _b === void 0 ? void 0 : _b.url) {
      this.metadata.url = data.commandMetadata.webCommandMetadata.url;
    }
    if ((_d = (_c = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _c === void 0 ? void 0 : _c.webCommandMetadata) === null || _d === void 0 ? void 0 : _d.webPageType) {
      this.metadata.page_type = data.commandMetadata.webCommandMetadata.webPageType;
    }
    if ((_f = (_e = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _e === void 0 ? void 0 : _e.webCommandMetadata) === null || _f === void 0 ? void 0 : _f.apiUrl) {
      this.metadata.api_url = data.commandMetadata.webCommandMetadata.apiUrl.replace("/youtubei/v1/", "");
    } else if (name) {
      this.metadata.api_url = this.getEndpoint(name);
    }
    if ((_h = (_g = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _g === void 0 ? void 0 : _g.webCommandMetadata) === null || _h === void 0 ? void 0 : _h.sendPost) {
      this.metadata.send_post = data.commandMetadata.webCommandMetadata.sendPost;
    }
    if (data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint) {
      if (data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint.createPlaylistDialog) {
        this.dialog = parser_default.parseItem(data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint.createPlaylistDialog, CreatePlaylistDialog_default);
      }
    }
  }
  getEndpoint(name) {
    switch (name) {
      case "browseEndpoint":
        return "/browse";
      case "watchEndpoint":
        return "/player";
      case "searchEndpoint":
        return "/search";
      case "watchPlaylistEndpoint":
        return "/next";
      case "liveChatItemContextMenuEndpoint":
        return "live_chat/get_item_context_menu";
    }
  }
  call(actions, args) {
    if (!actions)
      throw new Error("An active caller must be provided");
    if (!this.metadata.api_url)
      throw new Error("Expected an api_url, but none was found, this is a bug.");
    return actions.execute(this.metadata.api_url, Object.assign(Object.assign({}, this.payload), args));
  }
  toURL() {
    if (!this.metadata.url)
      return void 0;
    if (!this.metadata.page_type)
      return void 0;
    return this.metadata.page_type === "WEB_PAGE_TYPE_UNKNOWN" ? this.metadata.url : `https://www.youtube.com${this.metadata.url}`;
  }
};
__name(NavigationEndpoint, "NavigationEndpoint");
NavigationEndpoint.type = "NavigationEndpoint";
var NavigationEndpoint_default = NavigationEndpoint;

// dist/src/parser/classes/misc/TextRun.js
var TextRun = class {
  constructor(data) {
    this.text = data.text;
    this.bold = Boolean(data.bold);
    this.italics = Boolean(data.italics);
    this.strikethrough = Boolean(data.strikethrough);
    this.endpoint = data.navigationEndpoint ? new NavigationEndpoint_default(data.navigationEndpoint) : void 0;
  }
  toString() {
    return this.text;
  }
  toHTML() {
    const tags = [];
    if (this.bold)
      tags.push("b");
    if (this.italics)
      tags.push("i");
    if (this.strikethrough)
      tags.push("s");
    const escaped_text = escape(this.text);
    const styled_text = tags.map((tag) => `<${tag}>`).join("") + escaped_text + tags.map((tag) => `</${tag}>`).join("");
    const wrapped_text = `<span style="white-space: pre-wrap;">${styled_text}</span>`;
    if (this.endpoint) {
      const url = this.endpoint.toURL();
      if (url)
        return `<a href="${url}">${wrapped_text}</a>`;
    }
    return wrapped_text;
  }
};
__name(TextRun, "TextRun");
var TextRun_default = TextRun;

// dist/src/parser/classes/misc/Thumbnail.js
var Thumbnail = class {
  constructor(data) {
    this.url = data.url;
    this.width = data.width;
    this.height = data.height;
  }
  static fromResponse(data) {
    if (!data || !data.thumbnails)
      return [];
    return data.thumbnails.map((x) => new Thumbnail(x)).sort((a, b) => b.width - a.width);
  }
};
__name(Thumbnail, "Thumbnail");
var Thumbnail_default = Thumbnail;

// dist/src/parser/classes/misc/EmojiRun.js
var EmojiRun = class {
  constructor(data) {
    var _a5, _b, _c, _d, _e, _f;
    this.text = ((_a5 = data.emoji) === null || _a5 === void 0 ? void 0 : _a5.emojiId) || ((_c = (_b = data.emoji) === null || _b === void 0 ? void 0 : _b.shortcuts) === null || _c === void 0 ? void 0 : _c[0]) || "";
    this.emoji = {
      emoji_id: data.emoji.emojiId,
      shortcuts: ((_d = data.emoji) === null || _d === void 0 ? void 0 : _d.shortcuts) || [],
      search_terms: ((_e = data.emoji) === null || _e === void 0 ? void 0 : _e.searchTerms) || [],
      image: Thumbnail_default.fromResponse(data.emoji.image),
      is_custom: !!((_f = data.emoji) === null || _f === void 0 ? void 0 : _f.isCustomEmoji)
    };
  }
  toString() {
    return this.text;
  }
  toHTML() {
    const escaped_text = escape(this.text);
    return `<img src="${this.emoji.image[0].url}" alt="${escaped_text}" title="${escaped_text}" style="display: inline-block; vertical-align: text-top; height: var(--yt-emoji-size, 1rem); width: var(--yt-emoji-size, 1rem);" loading="lazy" crossorigin="anonymous" />`;
  }
};
__name(EmojiRun, "EmojiRun");
var EmojiRun_default = EmojiRun;

// dist/src/parser/classes/misc/Text.js
function escape(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
__name(escape, "escape");
var Text = class {
  constructor(data) {
    if ((data === null || data === void 0 ? void 0 : data.hasOwnProperty("runs")) && Array.isArray(data.runs)) {
      this.runs = data.runs.map((run) => run.emoji ? new EmojiRun_default(run) : new TextRun_default(run));
      this.text = this.runs.map((run) => run.text).join("");
    } else {
      this.text = (data === null || data === void 0 ? void 0 : data.simpleText) || "N/A";
    }
  }
  toHTML() {
    return this.runs ? this.runs.map((run) => run.toHTML()).join("") : this.text;
  }
  toString() {
    return this.text;
  }
};
__name(Text, "Text");
var Text_default = Text;

// dist/src/parser/classes/menus/MusicMultiSelectMenuItem.js
var MusicMultiSelectMenuItem = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.title = new Text_default(data.title).text;
    this.form_item_entity_key = data.formItemEntityKey;
    this.selected_icon_type = ((_a5 = data.selectedIcon) === null || _a5 === void 0 ? void 0 : _a5.iconType) || null;
    this.endpoint = data.selectedCommand ? new NavigationEndpoint_default(data.selectedCommand) : null;
    this.selected = !!this.endpoint;
  }
};
__name(MusicMultiSelectMenuItem, "MusicMultiSelectMenuItem");
MusicMultiSelectMenuItem.type = "MusicMultiSelectMenuItem";
var MusicMultiSelectMenuItem_default = MusicMultiSelectMenuItem;

// dist/src/parser/classes/misc/Format.js
var Format = class {
  constructor(data) {
    var _a5, _b, _c, _d, _e, _f;
    this.itag = data.itag;
    this.mime_type = data.mimeType;
    this.bitrate = data.bitrate;
    this.average_bitrate = data.averageBitrate;
    this.width = data.width || void 0;
    this.height = data.height || void 0;
    this.init_range = data.initRange ? {
      start: parseInt(data.initRange.start),
      end: parseInt(data.initRange.end)
    } : void 0;
    this.index_range = data.indexRange ? {
      start: parseInt(data.indexRange.start),
      end: parseInt(data.indexRange.end)
    } : void 0;
    this.last_modified = new Date(Math.floor(parseInt(data.lastModified) / 1e3));
    this.content_length = parseInt(data.contentLength);
    this.quality = data.quality;
    this.quality_label = data.qualityLabel || void 0;
    this.fps = data.fps || void 0;
    this.url = data.url || void 0;
    this.cipher = data.cipher || void 0;
    this.signature_cipher = data.signatureCipher || void 0;
    this.audio_quality = data.audioQuality || void 0;
    this.approx_duration_ms = parseInt(data.approxDurationMs);
    this.audio_sample_rate = parseInt(data.audioSampleRate);
    this.audio_channels = data.audioChannels;
    this.loudness_db = data.loudnessDb;
    this.has_audio = !!data.audioBitrate || !!data.audioQuality;
    this.has_video = !!data.qualityLabel;
    if (this.has_audio) {
      const args = new URLSearchParams(this.cipher || this.signature_cipher);
      const url_components = new URLSearchParams(args.get("url") || this.url);
      this.language = ((_b = (_a5 = url_components.get("xtags")) === null || _a5 === void 0 ? void 0 : _a5.split(":").find((x) => x.startsWith("lang="))) === null || _b === void 0 ? void 0 : _b.split("=").at(1)) || null;
      this.is_dubbed = ((_d = (_c = url_components.get("xtags")) === null || _c === void 0 ? void 0 : _c.split(":").find((x) => x.startsWith("acont="))) === null || _d === void 0 ? void 0 : _d.split("=").at(1)) === "dubbed";
      this.is_original = ((_f = (_e = url_components.get("xtags")) === null || _e === void 0 ? void 0 : _e.split(":").find((x) => x.startsWith("acont="))) === null || _f === void 0 ? void 0 : _f.split("=").at(1)) === "original" || !this.is_dubbed;
      if (data.audioTrack) {
        this.audio_track = {
          audio_is_default: data.audioTrack.audioIsDefault,
          display_name: data.audioTrack.displayName,
          id: data.audioTrack.id
        };
      }
    }
  }
  decipher(player) {
    if (!player)
      throw new InnertubeError("Cannot decipher format, this session appears to have no valid player.");
    return player.decipher(this.url, this.signature_cipher, this.cipher);
  }
};
__name(Format, "Format");
var Format_default = Format;

// dist/src/parser/classes/misc/VideoDetails.js
var VideoDetails = class {
  constructor(data) {
    this.id = data.videoId;
    this.channel_id = data.channelId;
    this.title = data.title;
    this.duration = parseInt(data.lengthSeconds);
    this.keywords = data.keywords;
    this.is_owner_viewing = !!data.isOwnerViewing;
    this.short_description = data.shortDescription;
    this.thumbnail = Thumbnail_default.fromResponse(data.thumbnail);
    this.allow_ratings = !!data.allowRatings;
    this.view_count = parseInt(data.viewCount);
    this.author = data.author;
    this.is_private = !!data.isPrivate;
    this.is_live = !!data.isLive;
    this.is_live_content = !!data.isLiveContent;
    this.is_upcoming = !!data.isUpcoming;
    this.is_crawlable = !!data.isCrawlable;
  }
};
__name(VideoDetails, "VideoDetails");
var VideoDetails_default = VideoDetails;

// dist/src/parser/classes/AccountChannel.js
var AccountChannel = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(AccountChannel, "AccountChannel");
AccountChannel.type = "AccountChannel";
var AccountChannel_default = AccountChannel;

// dist/src/parser/classes/AccountItemSectionHeader.js
var AccountItemSectionHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
  }
};
__name(AccountItemSectionHeader, "AccountItemSectionHeader");
AccountItemSectionHeader.type = "AccountItemSectionHeader";
var AccountItemSectionHeader_default = AccountItemSectionHeader;

// dist/src/parser/classes/AccountItemSection.js
var AccountItem = class {
  constructor(data) {
    this.account_name = new Text_default(data.accountName);
    this.account_photo = Thumbnail_default.fromResponse(data.accountPhoto);
    this.is_selected = data.isSelected;
    this.is_disabled = data.isDisabled;
    this.has_channel = data.hasChannel;
    this.endpoint = new NavigationEndpoint_default(data.serviceEndpoint);
    this.account_byline = new Text_default(data.accountByline);
  }
};
__name(AccountItem, "AccountItem");
AccountItem.type = "AccountItem";
var AccountItemSection = class extends YTNode {
  constructor(data) {
    super();
    this.contents = data.contents.map((ac) => new AccountItem(ac.accountItem));
    this.header = parser_default.parseItem(data.header, AccountItemSectionHeader_default);
  }
};
__name(AccountItemSection, "AccountItemSection");
AccountItemSection.type = "AccountItemSection";
var AccountItemSection_default = AccountItemSection;

// dist/src/parser/classes/AccountSectionList.js
var AccountSectionList = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseItem(data.contents[0], AccountItemSection_default);
    this.footers = parser_default.parseItem(data.footers[0], AccountChannel_default);
  }
};
__name(AccountSectionList, "AccountSectionList");
AccountSectionList.type = "AccountSectionList";
var AccountSectionList_default = AccountSectionList;

// dist/src/parser/classes/actions/AppendContinuationItemsAction.js
var AppendContinuationItemsAction = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parse(data.continuationItems);
    this.target = data.target;
  }
};
__name(AppendContinuationItemsAction, "AppendContinuationItemsAction");
AppendContinuationItemsAction.type = "AppendContinuationItemsAction";
var AppendContinuationItemsAction_default = AppendContinuationItemsAction;

// dist/src/parser/classes/actions/OpenPopupAction.js
var OpenPopupAction = class extends YTNode {
  constructor(data) {
    super();
    this.popup = parser_default.parse(data.popup);
    this.popup_type = data.popupType;
  }
};
__name(OpenPopupAction, "OpenPopupAction");
OpenPopupAction.type = "OpenPopupAction";
var OpenPopupAction_default = OpenPopupAction;

// dist/src/parser/classes/Alert.js
var Alert = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text_default(data.text);
    this.alert_type = data.type;
  }
};
__name(Alert, "Alert");
Alert.type = "Alert";
var Alert_default = Alert;

// dist/src/parser/classes/analytics/DataModelSection.js
var DataModelSection = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.metric_value = data.metricValue;
    this.comparison_indicator = data.comparisonIndicator;
    const line_series = data.seriesConfiguration.lineSeries;
    this.series_configuration = {
      line_series: {
        lines_data: {
          x: line_series.linesData[0].x,
          y: line_series.linesData[0].y,
          style: {
            line_width: line_series.linesData[0].style.lineWidth,
            line_color: line_series.linesData[0].style.lineColor
          }
        },
        domain_axis: {
          tick_values: line_series.domainAxis.tickValues,
          custom_formatter: line_series.domainAxis.customFormatter
        },
        measure_axis: {
          tick_values: line_series.measureAxis.tickValues,
          custom_formatter: line_series.measureAxis.customFormatter
        }
      }
    };
  }
};
__name(DataModelSection, "DataModelSection");
DataModelSection.type = "DataModelSection";
var DataModelSection_default = DataModelSection;

// dist/src/parser/classes/analytics/AnalyticsMainAppKeyMetrics.js
var AnalyticsMainAppKeyMetrics = class extends YTNode {
  constructor(data) {
    super();
    this.period = data.cardData.periodLabel;
    const metrics_data = data.cardData.sections[0].analyticsKeyMetricsData;
    this.sections = metrics_data.dataModel.sections.map((section) => new DataModelSection_default(section));
  }
};
__name(AnalyticsMainAppKeyMetrics, "AnalyticsMainAppKeyMetrics");
AnalyticsMainAppKeyMetrics.type = "AnalyticsMainAppKeyMetrics";
var AnalyticsMainAppKeyMetrics_default = AnalyticsMainAppKeyMetrics;

// dist/src/parser/classes/analytics/AnalyticsRoot.js
var AnalyticsRoot = class extends YTNode {
  constructor(data) {
    super();
    const cards = data.analyticsTableCarouselData.data.tableCards;
    this.title = data.analyticsTableCarouselData.carouselTitle;
    this.selected_card_index_key = data.analyticsTableCarouselData.selectedCardIndexKey;
    this.table_cards = cards.map((card) => ({
      title: card.cardData.title,
      rows: card.cardData.rows.map((row) => ({
        label: row.label,
        display_value: row.displayValue,
        display_value_a11y: row.displayValueA11y,
        bar_ratio: row.barRatio,
        bar_color: row.barColor,
        bar_opacity: row.barOpacity
      }))
    }));
    this.use_main_app_specs = data.analyticsTableCarouselData.useMainAppSpecs;
  }
};
__name(AnalyticsRoot, "AnalyticsRoot");
AnalyticsRoot.type = "AnalyticsRoot";
var AnalyticsRoot_default = AnalyticsRoot;

// dist/src/parser/classes/analytics/AnalyticsShortsCarouselCard.js
var AnalyticsShortsCarouselCard = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.shorts = data.shortsCarouselData.shorts.map((short) => ({
      description: short.shortsDescription,
      thumbnail_url: short.thumbnailUrl,
      endpoint: new NavigationEndpoint_default(short.videoEndpoint)
    }));
  }
};
__name(AnalyticsShortsCarouselCard, "AnalyticsShortsCarouselCard");
AnalyticsShortsCarouselCard.type = "AnalyticsShortsCarouselCard";
var AnalyticsShortsCarouselCard_default = AnalyticsShortsCarouselCard;

// dist/src/parser/classes/analytics/AnalyticsVideo.js
var AnalyticsVideo = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.videoTitle;
    this.metadata = {
      views: data.videoDescription.split("\xB7")[0].trim(),
      published: data.videoDescription.split("\xB7")[1].trim(),
      thumbnails: Thumbnail_default.fromResponse(data.thumbnailDetails),
      duration: data.formattedLength,
      is_short: data.isShort
    };
  }
};
__name(AnalyticsVideo, "AnalyticsVideo");
AnalyticsVideo.type = "AnalyticsVideo";
var AnalyticsVideo_default = AnalyticsVideo;

// dist/src/parser/classes/analytics/AnalyticsVodCarouselCard.js
var AnalyticsVodCarouselCard = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.title = data.title;
    if (data.noDataMessage) {
      this.no_data_message = data.noDataMessage;
    }
    this.videos = ((_a5 = data.videoCarouselData) === null || _a5 === void 0 ? void 0 : _a5.videos.map((video) => new AnalyticsVideo_default(video))) || null;
  }
};
__name(AnalyticsVodCarouselCard, "AnalyticsVodCarouselCard");
AnalyticsVodCarouselCard.type = "AnalyticsVodCarouselCard";
var AnalyticsVodCarouselCard_default = AnalyticsVodCarouselCard;

// dist/src/parser/classes/analytics/CtaGoToCreatorStudio.js
var CtaGoToCreatorStudio = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.buttonLabel;
    this.use_new_specs = data.useNewSpecs;
  }
};
__name(CtaGoToCreatorStudio, "CtaGoToCreatorStudio");
CtaGoToCreatorStudio.type = "CtaGoToCreatorStudio";
var CtaGoToCreatorStudio_default = CtaGoToCreatorStudio;

// dist/src/parser/classes/analytics/StatRow.js
var StatRow = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.contents = new Text_default(data.contents);
  }
};
__name(StatRow, "StatRow");
StatRow.type = "StatRow";
var StatRow_default = StatRow;

// dist/src/parser/classes/AudioOnlyPlayability.js
var AudioOnlyPlayability = class extends YTNode {
  constructor(data) {
    super();
    this.audio_only_availability = data.audioOnlyAvailability;
  }
};
__name(AudioOnlyPlayability, "AudioOnlyPlayability");
AudioOnlyPlayability.type = "AudioOnlyPlayability";
var AudioOnlyPlayability_default = AudioOnlyPlayability;

// dist/src/parser/classes/AutomixPreviewVideo.js
var AutomixPreviewVideo = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    if ((_b = (_a5 = data === null || data === void 0 ? void 0 : data.content) === null || _a5 === void 0 ? void 0 : _a5.automixPlaylistVideoRenderer) === null || _b === void 0 ? void 0 : _b.navigationEndpoint) {
      this.playlist_video = {
        endpoint: new NavigationEndpoint_default(data.content.automixPlaylistVideoRenderer.navigationEndpoint)
      };
    }
  }
};
__name(AutomixPreviewVideo, "AutomixPreviewVideo");
AutomixPreviewVideo.type = "AutomixPreviewVideo";
var AutomixPreviewVideo_default = AutomixPreviewVideo;

// dist/src/parser/classes/BackstageImage.js
var BackstageImage = class extends YTNode {
  constructor(data) {
    super();
    this.image = Thumbnail_default.fromResponse(data.image);
    this.endpoint = new NavigationEndpoint_default(data.command);
  }
};
__name(BackstageImage, "BackstageImage");
BackstageImage.type = "BackstageImage";
var BackstageImage_default = BackstageImage;

// dist/src/parser/classes/misc/NavigatableText.js
var NavigatableText = class extends Text_default {
  constructor(node) {
    var _a5, _b;
    super(node);
    this.endpoint = ((_b = (_a5 = node === null || node === void 0 ? void 0 : node.runs) === null || _a5 === void 0 ? void 0 : _a5[0]) === null || _b === void 0 ? void 0 : _b.navigationEndpoint) ? new NavigationEndpoint_default(node === null || node === void 0 ? void 0 : node.runs[0].navigationEndpoint) : (node === null || node === void 0 ? void 0 : node.navigationEndpoint) ? new NavigationEndpoint_default(node === null || node === void 0 ? void 0 : node.navigationEndpoint) : (node === null || node === void 0 ? void 0 : node.titleNavigationEndpoint) ? new NavigationEndpoint_default(node === null || node === void 0 ? void 0 : node.titleNavigationEndpoint) : null;
  }
  toJSON() {
    return this;
  }
};
__name(NavigatableText, "NavigatableText");
NavigatableText.type = "NavigatableText";
var NavigatableText_default = NavigatableText;

// dist/src/parser/classes/misc/Author.js
var __classPrivateFieldSet4 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet4 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Author_nav_text;
var Author = class {
  constructor(item, badges, thumbs) {
    var _a5, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
    _Author_nav_text.set(this, void 0);
    __classPrivateFieldSet4(this, _Author_nav_text, new NavigatableText_default(item), "f");
    this.id = ((_d = (_c = (_b = (_a5 = __classPrivateFieldGet4(this, _Author_nav_text, "f").runs) === null || _a5 === void 0 ? void 0 : _a5[0]) === null || _b === void 0 ? void 0 : _b.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.browseId) || ((_g = (_f = (_e = __classPrivateFieldGet4(this, _Author_nav_text, "f")) === null || _e === void 0 ? void 0 : _e.endpoint) === null || _f === void 0 ? void 0 : _f.payload) === null || _g === void 0 ? void 0 : _g.browseId) || "N/A";
    this.name = __classPrivateFieldGet4(this, _Author_nav_text, "f").text || "N/A";
    this.thumbnails = thumbs ? Thumbnail_default.fromResponse(thumbs) : [];
    this.endpoint = ((_j = (_h = __classPrivateFieldGet4(this, _Author_nav_text, "f").runs) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.endpoint) || __classPrivateFieldGet4(this, _Author_nav_text, "f").endpoint;
    this.badges = Array.isArray(badges) ? parser_default.parseArray(badges) : [];
    this.is_verified = ((_k = this.badges) === null || _k === void 0 ? void 0 : _k.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED")) || null;
    this.is_verified_artist = ((_l = this.badges) === null || _l === void 0 ? void 0 : _l.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST")) || null;
    this.url = ((_r = (_q = (_p = (_o = (_m = __classPrivateFieldGet4(this, _Author_nav_text, "f")) === null || _m === void 0 ? void 0 : _m.runs) === null || _o === void 0 ? void 0 : _o[0]) === null || _p === void 0 ? void 0 : _p.endpoint) === null || _q === void 0 ? void 0 : _q.metadata) === null || _r === void 0 ? void 0 : _r.api_url) === "/browse" && `${Constants_default.URLS.YT_BASE}${((_w = (_v = (_u = (_t = (_s = __classPrivateFieldGet4(this, _Author_nav_text, "f")) === null || _s === void 0 ? void 0 : _s.runs) === null || _t === void 0 ? void 0 : _t[0]) === null || _u === void 0 ? void 0 : _u.endpoint) === null || _v === void 0 ? void 0 : _v.payload) === null || _w === void 0 ? void 0 : _w.canonicalBaseUrl) || `/u/${(_1 = (_0 = (_z = (_y = (_x = __classPrivateFieldGet4(this, _Author_nav_text, "f")) === null || _x === void 0 ? void 0 : _x.runs) === null || _y === void 0 ? void 0 : _y[0]) === null || _z === void 0 ? void 0 : _z.endpoint) === null || _0 === void 0 ? void 0 : _0.payload) === null || _1 === void 0 ? void 0 : _1.browseId}`}` || `${Constants_default.URLS.YT_BASE}${((_4 = (_3 = (_2 = __classPrivateFieldGet4(this, _Author_nav_text, "f")) === null || _2 === void 0 ? void 0 : _2.endpoint) === null || _3 === void 0 ? void 0 : _3.payload) === null || _4 === void 0 ? void 0 : _4.canonicalBaseUrl) || `/u/${(_7 = (_6 = (_5 = __classPrivateFieldGet4(this, _Author_nav_text, "f")) === null || _5 === void 0 ? void 0 : _5.endpoint) === null || _6 === void 0 ? void 0 : _6.payload) === null || _7 === void 0 ? void 0 : _7.browseId}`}` || null;
  }
  get best_thumbnail() {
    return this.thumbnails[0];
  }
};
__name(Author, "Author");
_Author_nav_text = /* @__PURE__ */ new WeakMap();
var Author_default = Author;

// dist/src/parser/classes/BackstagePost.js
var BackstagePost = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.postId;
    this.author = new Author_default(Object.assign(Object.assign({}, data.authorText), { navigationEndpoint: data.authorEndpoint }), null, data.authorThumbnail);
    this.content = new Text_default(data.contentText);
    this.published = new Text_default(data.publishedTimeText);
    if (data.pollStatus) {
      this.poll_status = data.pollStatus;
    }
    if (data.voteStatus) {
      this.vote_status = data.voteStatus;
    }
    if (data.voteCount) {
      this.vote_count = new Text_default(data.voteCount);
    }
    if (data.actionMenu) {
      this.menu = parser_default.parseItem(data.actionMenu);
    }
    if (data.actionButtons) {
      this.action_buttons = parser_default.parseItem(data.actionButtons);
    }
    if (data.voteButton) {
      this.vote_button = parser_default.parseItem(data.voteButton);
    }
    if (data.navigationEndpoint) {
      this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    }
    if (data.backstageAttachment) {
      this.attachment = parser_default.parseItem(data.backstageAttachment);
    }
    this.surface = data.surface;
  }
};
__name(BackstagePost, "BackstagePost");
BackstagePost.type = "BackstagePost";
var BackstagePost_default = BackstagePost;

// dist/src/parser/classes/BackstagePostThread.js
var BackstagePostThread = class extends YTNode {
  constructor(data) {
    super();
    this.post = parser_default.parseItem(data.post);
  }
};
__name(BackstagePostThread, "BackstagePostThread");
BackstagePostThread.type = "BackstagePostThread";
var BackstagePostThread_default = BackstagePostThread;

// dist/src/parser/classes/BrowseFeedActions.js
var BrowseFeedActions = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents);
  }
};
__name(BrowseFeedActions, "BrowseFeedActions");
BrowseFeedActions.type = "BrowseFeedActions";
var BrowseFeedActions_default = BrowseFeedActions;

// dist/src/parser/classes/BrowserMediaSession.js
var BrowserMediaSession = class extends YTNode {
  constructor(data) {
    super();
    this.album = new Text_default(data.album);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnailDetails);
  }
};
__name(BrowserMediaSession, "BrowserMediaSession");
BrowserMediaSession.type = "BrowserMediaSession";
var BrowserMediaSession_default = BrowserMediaSession;

// dist/src/parser/classes/Button.js
var Button = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c, _d;
    super();
    if (data.text) {
      this.text = new Text_default(data.text).toString();
    }
    if ((_a5 = data.accessibility) === null || _a5 === void 0 ? void 0 : _a5.label) {
      this.label = (_b = data.accessibility) === null || _b === void 0 ? void 0 : _b.label;
    }
    if (data.tooltip) {
      this.tooltip = data.tooltip;
    }
    if ((_c = data.icon) === null || _c === void 0 ? void 0 : _c.iconType) {
      this.icon_type = (_d = data.icon) === null || _d === void 0 ? void 0 : _d.iconType;
    }
    if (Reflect.has(data, "isDisabled")) {
      this.is_disabled = data.isDisabled;
    }
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint || data.serviceEndpoint || data.command);
  }
};
__name(Button, "Button");
Button.type = "Button";
var Button_default = Button;

// dist/src/parser/classes/C4TabbedHeader.js
var C4TabbedHeader = class extends YTNode {
  constructor(data) {
    super();
    this.author = new Author_default({
      simpleText: data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.avatar);
    if (data.banner) {
      this.banner = Thumbnail_default.fromResponse(data.banner);
    }
    if (data.tv_banner) {
      this.tv_banner = Thumbnail_default.fromResponse(data.tvBanner);
    }
    if (data.mobile_banner) {
      this.mobile_banner = Thumbnail_default.fromResponse(data.mobileBanner);
    }
    if (data.subscriberCountText) {
      this.subscribers = new Text_default(data.subscriberCountText);
    }
    if (data.videosCountText) {
      this.videos_count = new Text_default(data.videosCountText);
    }
    if (data.sponsorButton) {
      this.sponsor_button = parser_default.parseItem(data.sponsorButton);
    }
    if (data.subscribeButton) {
      this.subscribe_button = parser_default.parseItem(data.subscribeButton);
    }
    if (data.headerLinks) {
      this.header_links = parser_default.parseItem(data.headerLinks);
    }
    if (data.channelHandleText) {
      this.channel_handle = new Text_default(data.channelHandleText);
    }
    if (data.channelId) {
      this.channel_id = data.channelId;
    }
  }
};
__name(C4TabbedHeader, "C4TabbedHeader");
C4TabbedHeader.type = "C4TabbedHeader";
var C4TabbedHeader_default = C4TabbedHeader;

// dist/src/parser/classes/CallToActionButton.js
var CallToActionButton = class extends YTNode {
  constructor(data) {
    super();
    this.label = new Text_default(data.label);
    this.icon_type = data.icon.iconType;
    this.style = data.style;
  }
};
__name(CallToActionButton, "CallToActionButton");
CallToActionButton.type = "CallToActionButton";
var CallToActionButton_default = CallToActionButton;

// dist/src/parser/classes/Card.js
var Card = class extends YTNode {
  constructor(data) {
    super();
    this.teaser = parser_default.parseItem(data.teaser);
    this.content = parser_default.parseItem(data.content);
    this.card_id = data.cardId || null;
    this.feature = data.feature || null;
    this.cue_ranges = data.cueRanges.map((cr) => ({
      start_card_active_ms: cr.startCardActiveMs,
      end_card_active_ms: cr.endCardActiveMs,
      teaser_duration_ms: cr.teaserDurationMs,
      icon_after_teaser_ms: cr.iconAfterTeaserMs
    }));
  }
};
__name(Card, "Card");
Card.type = "Card";
var Card_default = Card;

// dist/src/parser/classes/CardCollection.js
var CardCollection = class extends YTNode {
  constructor(data) {
    super();
    this.cards = parser_default.parseArray(data.cards);
    this.header = new Text_default(data.headerText);
    this.allow_teaser_dismiss = data.allowTeaserDismiss;
  }
};
__name(CardCollection, "CardCollection");
CardCollection.type = "CardCollection";
var CardCollection_default = CardCollection;

// dist/src/parser/classes/CarouselHeader.js
var CarouselHeader = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents);
  }
};
__name(CarouselHeader, "CarouselHeader");
CarouselHeader.type = "CarouselHeader";
var CarouselHeader_default = CarouselHeader;

// dist/src/parser/classes/CarouselItem.js
var CarouselItem = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.carouselItems);
    this.background_color = data.backgroundColor;
    this.layout_style = data.layoutStyle;
    this.pagination_thumbnails = Thumbnail_default.fromResponse(data.paginationThumbnails);
    this.paginator_alignment = data.paginatorAlignment;
  }
};
__name(CarouselItem, "CarouselItem");
CarouselItem.type = "CarouselItem";
var CarouselItem_default = CarouselItem;

// dist/src/parser/classes/Channel.js
var Channel = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.channelId;
    this.author = new Author_default(Object.assign(Object.assign({}, data.title), { navigationEndpoint: data.navigationEndpoint }), data.ownerBadges, data.thumbnail);
    this.subscribers = new Text_default(data.subscriberCountText);
    this.videos = new Text_default(data.videoCountText);
    this.long_byline = new Text_default(data.longBylineText);
    this.short_byline = new Text_default(data.shortBylineText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.subscribe_button = parser_default.parseItem(data.subscribeButton);
    this.description_snippet = new Text_default(data.descriptionSnippet);
  }
};
__name(Channel, "Channel");
Channel.type = "Channel";
var Channel_default = Channel;

// dist/src/parser/classes/ChannelAboutFullMetadata.js
var ChannelAboutFullMetadata = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.id = data.channelId;
    this.name = new Text_default(data.title);
    this.avatar = Thumbnail_default.fromResponse(data.avatar);
    this.canonical_channel_url = data.canonicalChannelUrl;
    this.primary_links = (_b = (_a5 = data.primaryLinks) === null || _a5 === void 0 ? void 0 : _a5.map((link) => ({
      endpoint: new NavigationEndpoint_default(link.navigationEndpoint),
      icon: Thumbnail_default.fromResponse(link.icon),
      title: new Text_default(link.title)
    }))) !== null && _b !== void 0 ? _b : [];
    this.views = new Text_default(data.viewCountText);
    this.joined = new Text_default(data.joinedDateText);
    this.description = new Text_default(data.description);
    this.email_reveal = new NavigationEndpoint_default(data.onBusinessEmailRevealClickCommand);
    this.can_reveal_email = !data.signInForBusinessEmail;
    this.country = new Text_default(data.country);
    this.buttons = parser_default.parseArray(data.actionButtons);
  }
};
__name(ChannelAboutFullMetadata, "ChannelAboutFullMetadata");
ChannelAboutFullMetadata.type = "ChannelAboutFullMetadata";
var ChannelAboutFullMetadata_default = ChannelAboutFullMetadata;

// dist/src/parser/classes/ChannelAgeGate.js
var ChannelAgeGate = class extends YTNode {
  constructor(data) {
    super();
    this.channel_title = data.channelTitle;
    this.avatar = Thumbnail_default.fromResponse(data.avatar);
    this.header = new Text_default(data.header);
    this.main_text = new Text_default(data.mainText);
    this.sign_in_button = Parser.parseItem(data.signInButton, Button_default);
    this.secondary_text = new Text_default(data.secondaryText);
  }
};
__name(ChannelAgeGate, "ChannelAgeGate");
ChannelAgeGate.type = "ChannelAgeGate";
var ChannelAgeGate_default = ChannelAgeGate;

// dist/src/parser/classes/ChannelFeaturedContent.js
var ChannelFeaturedContent = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.items = parser_default.parse(data.items);
  }
};
__name(ChannelFeaturedContent, "ChannelFeaturedContent");
ChannelFeaturedContent.type = "ChannelFeaturedContent";
var ChannelFeaturedContent_default = ChannelFeaturedContent;

// dist/src/parser/classes/ChannelHeaderLinks.js
var HeaderLink = class {
  constructor(data) {
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.icon = Thumbnail_default.fromResponse(data.icon);
    this.title = new Text_default(data.title);
  }
};
__name(HeaderLink, "HeaderLink");
var ChannelHeaderLinks = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.primary = ((_a5 = data.primaryLinks) === null || _a5 === void 0 ? void 0 : _a5.map((link) => new HeaderLink(link))) || [];
    this.secondary = ((_b = data.secondaryLinks) === null || _b === void 0 ? void 0 : _b.map((link) => new HeaderLink(link))) || [];
  }
};
__name(ChannelHeaderLinks, "ChannelHeaderLinks");
ChannelHeaderLinks.type = "ChannelHeaderLinks";
var ChannelHeaderLinks_default = ChannelHeaderLinks;

// dist/src/parser/classes/ChannelMetadata.js
var ChannelMetadata = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.description = data.description;
    this.url = data.channelUrl;
    this.rss_urls = data.rssUrl;
    this.vanity_channel_url = data.vanityChannelUrl;
    this.external_id = data.externalId;
    this.is_family_safe = data.isFamilySafe;
    this.keywords = data.keywords;
    this.avatar = Thumbnail_default.fromResponse(data.avatar);
    this.available_countries = data.availableCountryCodes;
    this.android_deep_link = data.androidDeepLink;
    this.android_appindexing_link = data.androidAppindexingLink;
    this.ios_appindexing_link = data.iosAppindexingLink;
  }
};
__name(ChannelMetadata, "ChannelMetadata");
ChannelMetadata.type = "ChannelMetadata";
var ChannelMetadata_default = ChannelMetadata;

// dist/src/parser/classes/ChannelMobileHeader.js
var ChannelMobileHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
  }
};
__name(ChannelMobileHeader, "ChannelMobileHeader");
ChannelMobileHeader.type = "ChannelMobileHeader";
var ChannelMobileHeader_default = ChannelMobileHeader;

// dist/src/parser/classes/ChannelOptions.js
var ChannelOptions = class extends YTNode {
  constructor(data) {
    super();
    this.avatar = Thumbnail_default.fromResponse(data.avatar);
    this.endpoint = new NavigationEndpoint_default(data.avatarEndpoint);
    this.name = data.name;
    this.links = data.links.map((link) => new Text_default(link));
  }
};
__name(ChannelOptions, "ChannelOptions");
ChannelOptions.type = "ChannelOptions";
var ChannelOptions_default = ChannelOptions;

// dist/src/parser/classes/ChannelSubMenu.js
var ChannelSubMenu = class extends YTNode {
  constructor(data) {
    super();
    this.content_type_sub_menu_items = data.contentTypeSubMenuItems.map((item) => ({
      endpoint: new NavigationEndpoint_default(item.navigationEndpoint || item.endpoint),
      selected: item.selected,
      title: item.title
    }));
    this.sort_setting = parser_default.parseItem(data.sortSetting);
  }
};
__name(ChannelSubMenu, "ChannelSubMenu");
ChannelSubMenu.type = "ChannelSubMenu";
var ChannelSubMenu_default = ChannelSubMenu;

// dist/src/parser/classes/ChannelThumbnailWithLink.js
var ChannelThumbnailWithLink = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.label = data.accessibility.accessibilityData.label;
  }
};
__name(ChannelThumbnailWithLink, "ChannelThumbnailWithLink");
ChannelThumbnailWithLink.type = "ChannelThumbnailWithLink";
var ChannelThumbnailWithLink_default = ChannelThumbnailWithLink;

// dist/src/parser/classes/ChannelVideoPlayer.js
var ChannelVideoPlayer = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.title = new Text_default(data.title);
    this.description = new Text_default(data.description);
    this.views = new Text_default(data.viewCountText);
    this.published = new Text_default(data.publishedTimeText);
  }
};
__name(ChannelVideoPlayer, "ChannelVideoPlayer");
ChannelVideoPlayer.type = "ChannelVideoPlayer";
var ChannelVideoPlayer_default = ChannelVideoPlayer;

// dist/src/parser/classes/Chapter.js
var Chapter = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.time_range_start_millis = data.timeRangeStartMillis;
    this.thumbnail = Thumbnail_default.fromResponse(data.thumbnail);
  }
};
__name(Chapter, "Chapter");
Chapter.type = "Chapter";
var Chapter_default = Chapter;

// dist/src/parser/classes/ChildVideo.js
var ChildVideo = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.title = new Text_default(data.title);
    this.duration = {
      text: data.lengthText.simpleText,
      seconds: timeToSeconds(data.lengthText.simpleText)
    };
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(ChildVideo, "ChildVideo");
ChildVideo.type = "ChildVideo";
var ChildVideo_default = ChildVideo;

// dist/src/parser/classes/ChipCloudChip.js
var ChipCloudChip = class extends YTNode {
  constructor(data) {
    super();
    this.is_selected = data.isSelected;
    this.endpoint = data.navigationEndpoint ? new NavigationEndpoint_default(data.navigationEndpoint) : void 0;
    this.text = new Text_default(data.text).toString();
  }
};
__name(ChipCloudChip, "ChipCloudChip");
ChipCloudChip.type = "ChipCloudChip";
var ChipCloudChip_default = ChipCloudChip;

// dist/src/parser/classes/ChipCloud.js
var ChipCloud = class extends YTNode {
  constructor(data) {
    super();
    this.chips = parser_default.parseArray(data.chips, ChipCloudChip_default);
    this.next_button = parser_default.parseItem(data.nextButton, Button_default);
    this.previous_button = parser_default.parseItem(data.previousButton, Button_default);
    this.horizontal_scrollable = data.horizontalScrollable;
  }
};
__name(ChipCloud, "ChipCloud");
ChipCloud.type = "ChipCloud";
var ChipCloud_default = ChipCloud;

// dist/src/parser/classes/CollaboratorInfoCardContent.js
var CollaboratorInfoCardContent = class extends YTNode {
  constructor(data) {
    super();
    this.channel_avatar = Thumbnail_default.fromResponse(data.channelAvatar);
    this.custom_text = new Text_default(data.customText);
    this.channel_name = new Text_default(data.channelName);
    this.subscriber_count = new Text_default(data.subscriberCountText);
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
  }
};
__name(CollaboratorInfoCardContent, "CollaboratorInfoCardContent");
CollaboratorInfoCardContent.type = "CollaboratorInfoCardContent";
var CollaboratorInfoCardContent_default = CollaboratorInfoCardContent;

// dist/src/parser/classes/CollageHeroImage.js
var CollageHeroImage = class extends YTNode {
  constructor(data) {
    super();
    this.left = Thumbnail_default.fromResponse(data.leftThumbnail);
    this.top_right = Thumbnail_default.fromResponse(data.topRightThumbnail);
    this.bottom_right = Thumbnail_default.fromResponse(data.bottomRightThumbnail);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(CollageHeroImage, "CollageHeroImage");
CollageHeroImage.type = "CollageHeroImage";
var CollageHeroImage_default = CollageHeroImage;

// dist/src/parser/classes/comments/AuthorCommentBadge.js
var __classPrivateFieldSet5 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet5 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AuthorCommentBadge_data;
var AuthorCommentBadge = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    _AuthorCommentBadge_data.set(this, void 0);
    this.icon_type = ((_a5 = data.icon) === null || _a5 === void 0 ? void 0 : _a5.iconType) || null;
    this.tooltip = data.iconTooltip;
    this.tooltip === "Verified" && (this.style = "BADGE_STYLE_TYPE_VERIFIED") && (data.style = "BADGE_STYLE_TYPE_VERIFIED");
    __classPrivateFieldSet5(this, _AuthorCommentBadge_data, data, "f");
  }
  get orig_badge() {
    return __classPrivateFieldGet5(this, _AuthorCommentBadge_data, "f");
  }
};
__name(AuthorCommentBadge, "AuthorCommentBadge");
_AuthorCommentBadge_data = /* @__PURE__ */ new WeakMap();
AuthorCommentBadge.type = "AuthorCommentBadge";
var AuthorCommentBadge_default = AuthorCommentBadge;

// dist/src/parser/classes/comments/CommentReplyDialog.js
var CommentReplyDialog = class extends YTNode {
  constructor(data) {
    super();
    this.reply_button = parser_default.parseItem(data.replyButton);
    this.cancel_button = parser_default.parseItem(data.cancelButton);
    this.author_thumbnail = Thumbnail_default.fromResponse(data.authorThumbnail);
    this.placeholder = new Text_default(data.placeholderText);
    this.error_message = new Text_default(data.errorMessage);
  }
};
__name(CommentReplyDialog, "CommentReplyDialog");
CommentReplyDialog.type = "CommentReplyDialog";
var CommentReplyDialog_default = CommentReplyDialog;

// dist/src/proto/generated/runtime/wire/index.js
var WireType;
(function(WireType2) {
  WireType2[WireType2["Varint"] = 0] = "Varint";
  WireType2[WireType2["Fixed64"] = 1] = "Fixed64";
  WireType2[WireType2["LengthDelimited"] = 2] = "LengthDelimited";
  WireType2[WireType2["StartGroup"] = 3] = "StartGroup";
  WireType2[WireType2["EndGroup"] = 4] = "EndGroup";
  WireType2[WireType2["Fixed32"] = 5] = "Fixed32";
})(WireType = WireType || (WireType = {}));

// dist/src/proto/generated/runtime/Long.js
var UINT16_MAX = 65535;
var UINT32_MAX = 4294967295;
var Long = class extends Uint32Array {
  constructor(lo = 0, hi = 0) {
    super([lo, hi]);
  }
  toString(signed = true) {
    const [lo, hi] = this;
    if (lo === 0 && hi === 0)
      return "0";
    if (signed && hi > 2147483647) {
      return "-" + add(negate(this), one).toString(false);
    }
    const result = [];
    let tmp = new Long(lo, hi);
    while (compare(tmp, zero)) {
      const [next, remainder] = divByTen(tmp);
      result.push(remainder);
      tmp = next;
    }
    return result.reverse().join("");
  }
  static parse(text) {
    const parsedValue = parseInt(text, 10);
    const sign = parsedValue < 0;
    if (Number.isNaN(parsedValue))
      return new Long(0);
    if (text.length < 10) {
      if (parsedValue < 0)
        return add(negate(new Long(-parsedValue)), one);
      return new Long(parsedValue);
    }
    let result = new Long();
    let powerTen = one;
    for (const digit of text.split("").reverse()) {
      if (parseInt(digit)) {
        result = add(result, mul(new Long(parseInt(digit)), powerTen));
      }
      powerTen = mul(powerTen, new Long(10));
    }
    if (!sign)
      return result;
    return add(negate(result), one);
  }
};
__name(Long, "Long");
var zero = new Long(0);
var one = new Long(1);
function makeChunk(value) {
  const [lo, hi] = value;
  return [lo & UINT16_MAX, lo >>> 16, hi & UINT16_MAX, hi >>> 16];
}
__name(makeChunk, "makeChunk");
function add(a, b) {
  const [a00, a16, a32, a48] = makeChunk(a);
  const [b00, b16, b32, b48] = makeChunk(b);
  let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= UINT16_MAX;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= UINT16_MAX;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= UINT16_MAX;
  c48 += a48 + b48;
  c48 &= UINT16_MAX;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
__name(add, "add");
function mul(a, b) {
  const [a00, a16, a32, a48] = makeChunk(a);
  const [b00, b16, b32, b48] = makeChunk(b);
  let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= UINT16_MAX;
  c16 += a00 * b16 + a16 * b00;
  c32 += c16 >>> 16;
  c16 &= UINT16_MAX;
  c32 += a00 * b32 + a32 * b00 + a16 * b16;
  c48 += c32 >>> 16;
  c32 &= UINT16_MAX;
  c48 += a00 * b48 + a16 * b32 + a32 * b16 + a48 * b00;
  c48 &= UINT16_MAX;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
__name(mul, "mul");
function divByTen(value) {
  const [lo, hi] = value;
  return [
    new Long((hi % 10 * (UINT32_MAX + 1) + lo) / 10 | 0, hi / 10 | 0),
    (hi % 10 * (UINT32_MAX + 1) + lo) % 10
  ];
}
__name(divByTen, "divByTen");
function compare(a, b) {
  const [l1, h1] = a;
  const [l2, h2] = b;
  if (h1 !== h2)
    return h1 - h2;
  return l1 - l2;
}
__name(compare, "compare");
function negate(value) {
  const [lo, hi] = value;
  return new Long(~lo, ~hi);
}
__name(negate, "negate");

// dist/src/proto/generated/runtime/wire/varint.js
function encode2(value) {
  const result = [];
  const mask = 127;
  const head = 1 << 7;
  let long = typeof value === "number" ? new Long(value) : value;
  while (long[0] || long[1]) {
    const [lo, hi] = long;
    const chunk = lo & mask;
    const nextHi = hi >>> 7;
    const nextLo = lo >>> 7 | (hi & mask) << 32 - 7;
    long = new Long(nextLo, nextHi);
    const resultChunk = !(long[0] || long[1]) ? chunk : chunk | head;
    result.push(resultChunk);
  }
  if (result.length < 1)
    return new Uint8Array(1);
  return Uint8Array.from(result);
}
__name(encode2, "encode");
function decode2(dataview) {
  let result = new Long(0);
  let i = 0;
  while (true) {
    const curr = dataview.getUint8(i);
    result = or(result, leftshift(new Long(curr & 127), i * 7));
    ++i;
    if (curr >>> 7)
      continue;
    return [i, result];
  }
}
__name(decode2, "decode");
function or(a, b) {
  return new Long(a[0] | b[0], a[1] | b[1]);
}
__name(or, "or");
function leftshift(a, count) {
  if (count === 0)
    return a;
  if (count >= 32)
    return new Long(0, a[0] << count - 32);
  return new Long(a[0] << count, a[1] << count | a[0] >>> 32 - count);
}
__name(leftshift, "leftshift");

// dist/src/proto/generated/runtime/wire/serialize.js
function serialize(wireMessage) {
  const result = [];
  wireMessage.forEach(([fieldNumber, field]) => {
    result.push(encode2(fieldNumber << 3 | field.type));
    switch (field.type) {
      case WireType.Varint:
        result.push(encode2(field.value));
        break;
      case WireType.Fixed64: {
        const arr = new Uint8Array(8);
        const dataview = new DataView(arr.buffer);
        dataview.setUint32(0, field.value[0], true);
        dataview.setUint32(4, field.value[1], true);
        result.push(arr);
        break;
      }
      case WireType.LengthDelimited:
        result.push(encode2(field.value.byteLength));
        result.push(field.value);
        break;
      case WireType.Fixed32: {
        const arr = new Uint8Array(4);
        const dataview = new DataView(arr.buffer);
        dataview.setUint32(0, field.value, true);
        result.push(arr);
        break;
      }
    }
  });
  return concat(result);
}
__name(serialize, "serialize");
function concat(arrays) {
  const totalLength = arrays.reduce((acc, value) => {
    return acc + value.byteLength;
  }, 0);
  const result = new Uint8Array(totalLength);
  arrays.reduce((acc, array) => {
    result.set(array, acc);
    return acc + array.byteLength;
  }, 0);
  return result;
}
__name(concat, "concat");

// dist/src/proto/generated/runtime/wire/zigzag.js
function encode3(value) {
  if (value instanceof Long) {
    const l = new Long(value[0] << 1, value[1] << 1 | value[0] >>> 31);
    const r = value[1] >>> 31 ? new Long(4294967295, 4294967295) : new Long();
    return new Long(l[0] ^ r[0], l[1] ^ r[1]);
  }
  return (value * 2 ^ value >> 31) >>> 0;
}
__name(encode3, "encode");
function decode3(value) {
  if (value instanceof Long) {
    const l = new Long(value[0] >>> 1 | value[1] << 31, value[1] >>> 1);
    const r = value[0] & 1 ? new Long(4294967295, 4294967295) : new Long();
    return new Long(l[0] ^ r[0], l[1] ^ r[1]);
  }
  return value >>> 1 ^ -(value & 1);
}
__name(decode3, "decode");

// dist/src/proto/generated/runtime/wire/scalar.js
var decodeVarintFns = {
  int32: (long) => long[0] | 0,
  int64: (long) => long.toString(true),
  uint32: (long) => long[0] >>> 0,
  uint64: (long) => long.toString(false),
  sint32: (long) => decode3(long[0]),
  sint64: (long) => decode3(long).toString(true),
  bool: (long) => long[0] !== 0
};
var encodeVarintFns = {
  int32: (tsValue) => new Long(tsValue),
  int64: (tsValue) => Long.parse(tsValue),
  uint32: (tsValue) => new Long(tsValue),
  uint64: (tsValue) => Long.parse(tsValue),
  sint32: (tsValue) => encode3(new Long(tsValue)),
  sint64: (tsValue) => encode3(Long.parse(tsValue)),
  bool: (tsValue) => new Long(+tsValue)
};
var varintFieldToTsValueFns = Object.fromEntries(Object.entries(decodeVarintFns).map(([type, fn]) => [
  type,
  (wireValue) => {
    if (wireValue.type !== WireType.Varint)
      return;
    return fn(wireValue.value);
  }
]));
var tsValueToVarintFieldFns = Object.fromEntries(Object.entries(encodeVarintFns).map(([type, fn]) => [
  type,
  (tsValue) => ({
    type: WireType.Varint,
    value: fn(tsValue)
  })
]));
var wireValueToTsValueFns = Object.assign(Object.assign({}, varintFieldToTsValueFns), { double: (wireValue) => {
  if (wireValue.type !== WireType.Fixed64)
    return;
  const dataview = new DataView(wireValue.value.buffer);
  return dataview.getFloat64(0, true);
}, float: (wireValue) => {
  if (wireValue.type !== WireType.Fixed32)
    return;
  const dataview = new DataView(new Uint32Array([wireValue.value]).buffer);
  return dataview.getFloat32(0, true);
}, fixed32: (wireValue) => {
  if (wireValue.type !== WireType.Fixed32)
    return;
  return wireValue.value >>> 0;
}, fixed64: (wireValue) => {
  if (wireValue.type !== WireType.Fixed64)
    return;
  return wireValue.value.toString(false);
}, sfixed32: (wireValue) => {
  if (wireValue.type !== WireType.Fixed32)
    return;
  return wireValue.value | 0;
}, sfixed64: (wireValue) => {
  if (wireValue.type !== WireType.Fixed64)
    return;
  return wireValue.value.toString(true);
}, string: (wireValue) => {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const textDecoder = new TextDecoder();
  return textDecoder.decode(wireValue.value);
}, bytes: (wireValue) => {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  return wireValue.value;
} });
var tsValueToWireValueFns = Object.assign(Object.assign({}, tsValueToVarintFieldFns), { double: (tsValue) => {
  const long = new Long();
  const dataview = new DataView(long.buffer);
  dataview.setFloat64(0, tsValue, true);
  return { type: WireType.Fixed64, value: long };
}, float: (tsValue) => {
  const u32 = new Uint32Array(1);
  const dataview = new DataView(u32.buffer);
  dataview.setFloat32(0, tsValue, true);
  return { type: WireType.Fixed32, value: dataview.getUint32(0, true) };
}, fixed32: (tsValue) => ({ type: WireType.Fixed32, value: tsValue >>> 0 }), fixed64: (tsValue) => ({
  type: WireType.Fixed64,
  value: Long.parse(tsValue)
}), sfixed32: (tsValue) => ({ type: WireType.Fixed32, value: tsValue | 0 }), sfixed64: (tsValue) => ({
  type: WireType.Fixed64,
  value: Long.parse(tsValue)
}), string: (tsValue) => {
  const textEncoder = new TextEncoder();
  return {
    type: WireType.LengthDelimited,
    value: textEncoder.encode(tsValue)
  };
}, bytes: (tsValue) => ({ type: WireType.LengthDelimited, value: tsValue }) });
var unpackVarintFns = Object.fromEntries(Object.keys(decodeVarintFns).map((type) => [
  type,
  function* (wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns[type](wireValue);
      if (value != null)
        yield value;
      else {
        for (const long of unpackVarint(wireValue)) {
          yield decodeVarintFns[type](long);
        }
      }
    }
  }
]));
var unpackFns = Object.assign(Object.assign({}, unpackVarintFns), {
  *double(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.double(wireValue);
      if (value != null)
        yield value;
      else
        yield* unpackDouble(wireValue);
    }
  },
  *float(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.float(wireValue);
      if (value != null)
        yield value;
      else
        yield* unpackFloat(wireValue);
    }
  },
  *fixed32(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.fixed32(wireValue);
      if (value != null)
        yield value;
      else
        for (const value2 of unpackFixed32(wireValue))
          yield value2 >>> 0;
    }
  },
  *fixed64(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.fixed64(wireValue);
      if (value != null)
        yield value;
      else {
        for (const value2 of unpackFixed64(wireValue)) {
          yield value2.toString(false);
        }
      }
    }
  },
  *sfixed32(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.sfixed32(wireValue);
      if (value != null)
        yield value;
      else
        for (const value2 of unpackFixed32(wireValue))
          yield value2 | 0;
    }
  },
  *sfixed64(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.sfixed64(wireValue);
      if (value != null)
        yield value;
      else {
        for (const value2 of unpackFixed64(wireValue)) {
          yield value2.toString(true);
        }
      }
    }
  }
});
var packVarintFns = Object.fromEntries(Object.keys(encodeVarintFns).map((type) => [
  type,
  function(tsValues) {
    return {
      type: WireType.LengthDelimited,
      value: concat(tsValues.map((tsValue) => {
        const value = encodeVarintFns[type](tsValue);
        return encode2(value);
      }))
    };
  }
]));
function getFixedPackFn(size, setFn) {
  return /* @__PURE__ */ __name(function pack(values) {
    const value = new Uint8Array(values.length * size);
    const dataview = new DataView(value.buffer);
    for (let i = 0; i < values.length; ++i) {
      setFn(dataview, i * size, values[i]);
    }
    return { type: WireType.LengthDelimited, value };
  }, "pack");
}
__name(getFixedPackFn, "getFixedPackFn");
var packFns = Object.assign(Object.assign({}, packVarintFns), { double: getFixedPackFn(8, (dataView, byteOffset, value) => {
  dataView.setFloat64(byteOffset, value, true);
}), float: getFixedPackFn(4, (dataView, byteOffset, value) => {
  dataView.setFloat32(byteOffset, value, true);
}), fixed32: getFixedPackFn(4, (dataView, byteOffset, value) => {
  dataView.setUint32(byteOffset, value, true);
}), fixed64: getFixedPackFn(8, (dataView, byteOffset, value) => {
  const long = Long.parse(value);
  dataView.setUint32(byteOffset, long[0], true);
  dataView.setUint32(byteOffset + 4, long[1], true);
}), sfixed32: getFixedPackFn(4, (dataView, byteOffset, value) => {
  dataView.setInt32(byteOffset, value, true);
}), sfixed64: getFixedPackFn(8, (dataView, byteOffset, value) => {
  const long = Long.parse(value);
  dataView.setUint32(byteOffset, long[0], true);
  dataView.setUint32(byteOffset + 4, long[1], true);
}) });
function* unpackDouble(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const double = dataview.getFloat64(idx, true);
    idx += 4;
    yield double;
  }
}
__name(unpackDouble, "unpackDouble");
function* unpackFloat(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const float = dataview.getFloat32(idx, true);
    idx += 4;
    yield float;
  }
}
__name(unpackFloat, "unpackFloat");
function* unpackVarint(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const offset = value.byteOffset;
  while (idx < value.length) {
    const decodeResult = decode2(new DataView(value.buffer, offset + idx));
    idx += decodeResult[0];
    yield decodeResult[1];
  }
}
__name(unpackVarint, "unpackVarint");
function* unpackFixed32(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const fixed32 = dataview.getUint32(idx, true);
    idx += 4;
    yield fixed32;
  }
}
__name(unpackFixed32, "unpackFixed32");
function* unpackFixed64(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const lo = dataview.getUint32(idx, true);
    idx += 4;
    const hi = dataview.getUint32(idx, true);
    idx += 4;
    yield new Long(lo, hi);
  }
}
__name(unpackFixed64, "unpackFixed64");

// dist/src/proto/generated/messages/youtube/VisitorData.js
function encodeBinary(value) {
  const result = [];
  if (value.id !== void 0) {
    const tsValue = value.id;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.timestamp !== void 0) {
    const tsValue = value.timestamp;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(ChannelAnalytics)/Params.js
function encodeBinary2(value) {
  const result = [];
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([1001, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary2, "encodeBinary");

// dist/src/proto/generated/messages/youtube/ChannelAnalytics.js
function encodeBinary3(value) {
  const result = [];
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([32, { type: WireType.LengthDelimited, value: encodeBinary2(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary3, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(SearchFilter)/Filters.js
function encodeBinary4(value) {
  const result = [];
  if (value.uploadDate !== void 0) {
    const tsValue = value.uploadDate;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.duration !== void 0) {
    const tsValue = value.duration;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresHd !== void 0) {
    const tsValue = value.featuresHd;
    result.push([4, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresSubtitles !== void 0) {
    const tsValue = value.featuresSubtitles;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresCreativeCommons !== void 0) {
    const tsValue = value.featuresCreativeCommons;
    result.push([6, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.features3d !== void 0) {
    const tsValue = value.features3d;
    result.push([7, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresLive !== void 0) {
    const tsValue = value.featuresLive;
    result.push([8, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresPurchased !== void 0) {
    const tsValue = value.featuresPurchased;
    result.push([9, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.features4k !== void 0) {
    const tsValue = value.features4k;
    result.push([14, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.features360 !== void 0) {
    const tsValue = value.features360;
    result.push([15, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresLocation !== void 0) {
    const tsValue = value.featuresLocation;
    result.push([23, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresHdr !== void 0) {
    const tsValue = value.featuresHdr;
    result.push([25, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresVr180 !== void 0) {
    const tsValue = value.featuresVr180;
    result.push([26, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary4, "encodeBinary");

// dist/src/proto/generated/messages/youtube/SearchFilter.js
function encodeBinary5(value) {
  const result = [];
  if (value.sortBy !== void 0) {
    const tsValue = value.sortBy;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.filters !== void 0) {
    const tsValue = value.filters;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary4(tsValue) }]);
  }
  if (value.noFilter !== void 0) {
    const tsValue = value.noFilter;
    result.push([19, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary5, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(MusicSearchFilter)/(Filters)/Type.js
function encodeBinary6(value) {
  const result = [];
  if (value.song !== void 0) {
    const tsValue = value.song;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.video !== void 0) {
    const tsValue = value.video;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.album !== void 0) {
    const tsValue = value.album;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.artist !== void 0) {
    const tsValue = value.artist;
    result.push([4, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.playlist !== void 0) {
    const tsValue = value.playlist;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary6, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(MusicSearchFilter)/Filters.js
function encodeBinary7(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([17, { type: WireType.LengthDelimited, value: encodeBinary6(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary7, "encodeBinary");

// dist/src/proto/generated/messages/youtube/MusicSearchFilter.js
function encodeBinary8(value) {
  const result = [];
  if (value.filters !== void 0) {
    const tsValue = value.filters;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary7(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary8, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(LiveMessageParams)/(Params)/Ids.js
function encodeBinary9(value) {
  const result = [];
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary9, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(LiveMessageParams)/Params.js
function encodeBinary10(value) {
  const result = [];
  if (value.ids !== void 0) {
    const tsValue = value.ids;
    result.push([5, { type: WireType.LengthDelimited, value: encodeBinary9(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary10, "encodeBinary");

// dist/src/proto/generated/messages/youtube/LiveMessageParams.js
function encodeBinary11(value) {
  const result = [];
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary10(tsValue) }]);
  }
  if (value.number0 !== void 0) {
    const tsValue = value.number0;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.number1 !== void 0) {
    const tsValue = value.number1;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary11, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/Context.js
function encodeBinary12(value) {
  const result = [];
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary12, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/(Params)/(RepliesOptions)/UnkOpts.js
function encodeBinary13(value) {
  const result = [];
  if (value.unkParam !== void 0) {
    const tsValue = value.unkParam;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary13, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/(Params)/RepliesOptions.js
function encodeBinary14(value) {
  const result = [];
  if (value.commentId !== void 0) {
    const tsValue = value.commentId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.unkopts !== void 0) {
    const tsValue = value.unkopts;
    result.push([4, { type: WireType.LengthDelimited, value: encodeBinary13(tsValue) }]);
  }
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([5, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([6, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.unkParam1 !== void 0) {
    const tsValue = value.unkParam1;
    result.push([8, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.unkParam2 !== void 0) {
    const tsValue = value.unkParam2;
    result.push([9, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary14, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/(Params)/Options.js
function encodeBinary15(value) {
  const result = [];
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([4, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.sortBy !== void 0) {
    const tsValue = value.sortBy;
    result.push([6, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([15, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary15, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/Params.js
function encodeBinary16(value) {
  const result = [];
  if (value.unkToken !== void 0) {
    const tsValue = value.unkToken;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.repliesOpts !== void 0) {
    const tsValue = value.repliesOpts;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary14(tsValue) }]);
  }
  if (value.opts !== void 0) {
    const tsValue = value.opts;
    result.push([4, { type: WireType.LengthDelimited, value: encodeBinary15(tsValue) }]);
  }
  if (value.page !== void 0) {
    const tsValue = value.page;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.target !== void 0) {
    const tsValue = value.target;
    result.push([8, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary16, "encodeBinary");

// dist/src/proto/generated/messages/youtube/GetCommentsSectionParams.js
function encodeBinary17(value) {
  const result = [];
  if (value.ctx !== void 0) {
    const tsValue = value.ctx;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary12(tsValue) }]);
  }
  if (value.unkParam !== void 0) {
    const tsValue = value.unkParam;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([6, { type: WireType.LengthDelimited, value: encodeBinary16(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary17, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(CreateCommentParams)/Params.js
function encodeBinary18(value) {
  const result = [];
  if (value.index !== void 0) {
    const tsValue = value.index;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary18, "encodeBinary");

// dist/src/proto/generated/messages/youtube/CreateCommentParams.js
function encodeBinary19(value) {
  const result = [];
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([5, { type: WireType.LengthDelimited, value: encodeBinary18(tsValue) }]);
  }
  if (value.number !== void 0) {
    const tsValue = value.number;
    result.push([10, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary19, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(PeformCommentActionParams)/(TranslateCommentParams)/(Params)/Comment.js
function encodeBinary20(value) {
  const result = [];
  if (value.text !== void 0) {
    const tsValue = value.text;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary20, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(PeformCommentActionParams)/(TranslateCommentParams)/Params.js
function encodeBinary21(value) {
  const result = [];
  if (value.comment !== void 0) {
    const tsValue = value.comment;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary20(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary21, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(PeformCommentActionParams)/TranslateCommentParams.js
function encodeBinary22(value) {
  const result = [];
  if (value.commentId !== void 0) {
    const tsValue = value.commentId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary21(tsValue) }]);
  }
  if (value.targetLanguage !== void 0) {
    const tsValue = value.targetLanguage;
    result.push([4, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary22, "encodeBinary");

// dist/src/proto/generated/messages/youtube/PeformCommentActionParams.js
function encodeBinary23(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.unkNum !== void 0) {
    const tsValue = value.unkNum;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.commentId !== void 0) {
    const tsValue = value.commentId;
    result.push([3, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([5, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([23, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.translateCommentParams !== void 0) {
    const tsValue = value.translateCommentParams;
    result.push([31, { type: WireType.LengthDelimited, value: encodeBinary22(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary23, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(NotificationPreferences)/Preference.js
function encodeBinary24(value) {
  const result = [];
  if (value.index !== void 0) {
    const tsValue = value.index;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary24, "encodeBinary");

// dist/src/proto/generated/messages/youtube/NotificationPreferences.js
function encodeBinary25(value) {
  const result = [];
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.prefId !== void 0) {
    const tsValue = value.prefId;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary24(tsValue) }]);
  }
  if (value.number0 !== void 0) {
    const tsValue = value.number0;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.number1 !== void 0) {
    const tsValue = value.number1;
    result.push([4, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary25, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/(Context)/Client.js
function encodeBinary26(value) {
  const result = [];
  if (value.unkparam !== void 0) {
    const tsValue = value.unkparam;
    result.push([16, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.clientVersion !== void 0) {
    const tsValue = value.clientVersion;
    result.push([17, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.clientName !== void 0) {
    const tsValue = value.clientName;
    result.push([18, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary26, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Context.js
function encodeBinary27(value) {
  const result = [];
  if (value.client !== void 0) {
    const tsValue = value.client;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary26(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary27, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Title.js
function encodeBinary28(value) {
  const result = [];
  if (value.text !== void 0) {
    const tsValue = value.text;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary28, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Description.js
function encodeBinary29(value) {
  const result = [];
  if (value.text !== void 0) {
    const tsValue = value.text;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary29, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Tags.js
function encodeBinary30(value) {
  const result = [];
  for (const tsValue of value.list) {
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary30, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Category.js
function encodeBinary31(value) {
  const result = [];
  if (value.id !== void 0) {
    const tsValue = value.id;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary31, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/License.js
function encodeBinary32(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary32, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/(VideoThumbnail)/Thumbnail.js
function encodeBinary33(value) {
  const result = [];
  if (value.imageData !== void 0) {
    const tsValue = value.imageData;
    result.push([1, tsValueToWireValueFns.bytes(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary33, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/VideoThumbnail.js
function encodeBinary34(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.thumbnail !== void 0) {
    const tsValue = value.thumbnail;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary33(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary34, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Privacy.js
function encodeBinary35(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary35, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/MadeForKids.js
function encodeBinary36(value) {
  const result = [];
  if (value.unkparam !== void 0) {
    const tsValue = value.unkparam;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.choice !== void 0) {
    const tsValue = value.choice;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary36, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/AgeRestricted.js
function encodeBinary37(value) {
  const result = [];
  if (value.unkparam !== void 0) {
    const tsValue = value.unkparam;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.choice !== void 0) {
    const tsValue = value.choice;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary37, "encodeBinary");

// dist/src/proto/generated/messages/youtube/InnertubePayload.js
function encodeBinary38(value) {
  const result = [];
  if (value.context !== void 0) {
    const tsValue = value.context;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary27(tsValue) }]);
  }
  if (value.target !== void 0) {
    const tsValue = value.target;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.title !== void 0) {
    const tsValue = value.title;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary28(tsValue) }]);
  }
  if (value.description !== void 0) {
    const tsValue = value.description;
    result.push([4, { type: WireType.LengthDelimited, value: encodeBinary29(tsValue) }]);
  }
  if (value.tags !== void 0) {
    const tsValue = value.tags;
    result.push([6, { type: WireType.LengthDelimited, value: encodeBinary30(tsValue) }]);
  }
  if (value.category !== void 0) {
    const tsValue = value.category;
    result.push([7, { type: WireType.LengthDelimited, value: encodeBinary31(tsValue) }]);
  }
  if (value.license !== void 0) {
    const tsValue = value.license;
    result.push([8, { type: WireType.LengthDelimited, value: encodeBinary32(tsValue) }]);
  }
  if (value.videoThumbnail !== void 0) {
    const tsValue = value.videoThumbnail;
    result.push([20, { type: WireType.LengthDelimited, value: encodeBinary34(tsValue) }]);
  }
  if (value.privacy !== void 0) {
    const tsValue = value.privacy;
    result.push([38, { type: WireType.LengthDelimited, value: encodeBinary35(tsValue) }]);
  }
  if (value.madeForKids !== void 0) {
    const tsValue = value.madeForKids;
    result.push([68, { type: WireType.LengthDelimited, value: encodeBinary36(tsValue) }]);
  }
  if (value.ageRestricted !== void 0) {
    const tsValue = value.ageRestricted;
    result.push([69, { type: WireType.LengthDelimited, value: encodeBinary37(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary38, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(Hashtag)/Params.js
function encodeBinary39(value) {
  const result = [];
  if (value.hashtag !== void 0) {
    const tsValue = value.hashtag;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary39, "encodeBinary");

// dist/src/proto/generated/messages/youtube/Hashtag.js
function encodeBinary40(value) {
  const result = [];
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([93, { type: WireType.LengthDelimited, value: encodeBinary39(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary40, "encodeBinary");

// dist/src/proto/index.js
var Proto = class {
  static encodeVisitorData(id, timestamp) {
    const buf = encodeBinary({ id, timestamp });
    return encodeURIComponent(u8ToBase64(buf).replace(/\+/g, "-").replace(/\//g, "_"));
  }
  static encodeChannelAnalyticsParams(channel_id) {
    const buf = encodeBinary3({
      params: {
        channelId: channel_id
      }
    });
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeSearchFilters(filters) {
    const upload_date = {
      all: void 0,
      hour: 1,
      today: 2,
      week: 3,
      month: 4,
      year: 5
    };
    const type = {
      all: void 0,
      video: 1,
      channel: 2,
      playlist: 3,
      movie: 4
    };
    const duration = {
      all: void 0,
      short: 1,
      long: 2,
      medium: 3
    };
    const order = {
      relevance: void 0,
      rating: 1,
      upload_date: 2,
      view_count: 3
    };
    const features = {
      hd: "featuresHd",
      subtitles: "featuresSubtitles",
      creative_commons: "featuresCreativeCommons",
      "3d": "features3D",
      live: "featuresLive",
      purchased: "featuresPurchased",
      "4k": "features4K",
      "360": "features360",
      location: "featuresLocation",
      hdr: "featuresHdr",
      vr180: "featuresVr180"
    };
    const data = {};
    if (filters)
      data.filters = {};
    else
      data.noFilter = 0;
    if (data.filters) {
      if (filters.upload_date) {
        data.filters.uploadDate = upload_date[filters.upload_date];
      }
      if (filters.type) {
        data.filters.type = type[filters.type];
      }
      if (filters.duration) {
        data.filters.duration = duration[filters.duration];
      }
      if (filters.sort_by && filters.sort_by !== "relevance") {
        data.sortBy = order[filters.sort_by];
      }
      if (filters.features) {
        for (const feature of filters.features) {
          data.filters[features[feature]] = 1;
        }
      }
    }
    const buf = encodeBinary5(data);
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeMusicSearchFilters(filters) {
    var _a5;
    const data = {
      filters: {
        type: {}
      }
    };
    if (filters.type && filters.type !== "all" && ((_a5 = data.filters) === null || _a5 === void 0 ? void 0 : _a5.type))
      data.filters.type[filters.type] = 1;
    const buf = encodeBinary8(data);
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeMessageParams(channel_id, video_id) {
    const buf = encodeBinary11({
      params: {
        ids: {
          channelId: channel_id,
          videoId: video_id
        }
      },
      number0: 1,
      number1: 4
    });
    return btoa(encodeURIComponent(u8ToBase64(buf)));
  }
  static encodeCommentsSectionParams(video_id, options = {}) {
    const sort_options = {
      TOP_COMMENTS: 0,
      NEWEST_FIRST: 1
    };
    const buf = encodeBinary17({
      ctx: {
        videoId: video_id
      },
      unkParam: 6,
      params: {
        opts: {
          videoId: video_id,
          sortBy: sort_options[options.sort_by || "TOP_COMMENTS"],
          type: options.type || 2
        },
        target: "comments-section"
      }
    });
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeCommentParams(video_id) {
    const buf = encodeBinary19({
      videoId: video_id,
      params: {
        index: 0
      },
      number: 7
    });
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeCommentActionParams(type, args = {}) {
    const data = {
      type,
      commentId: args.comment_id || " ",
      videoId: args.video_id || " ",
      channelId: " ",
      unkNum: 2
    };
    if (args.hasOwnProperty("text")) {
      if (typeof args.target_language !== "string")
        throw new Error("target_language must be a string");
      args.comment_id && delete data.unkNum;
      data.translateCommentParams = {
        params: {
          comment: {
            text: args.text
          }
        },
        commentId: args.comment_id || " ",
        targetLanguage: args.target_language
      };
    }
    const buf = encodeBinary23(data);
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeNotificationPref(channel_id, index) {
    const buf = encodeBinary25({
      channelId: channel_id,
      prefId: {
        index
      },
      number0: 0,
      number1: 4
    });
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeVideoMetadataPayload(video_id, metadata) {
    const data = {
      context: {
        client: {
          unkparam: 14,
          clientName: CLIENTS.ANDROID.NAME,
          clientVersion: CLIENTS.YTSTUDIO_ANDROID.VERSION
        }
      },
      target: video_id
    };
    if (Reflect.has(metadata, "title"))
      data.title = { text: metadata.title || "" };
    if (Reflect.has(metadata, "description"))
      data.description = { text: metadata.description || "" };
    if (Reflect.has(metadata, "license"))
      data.license = { type: metadata.license || "" };
    if (Reflect.has(metadata, "tags"))
      data.tags = { list: metadata.tags || [] };
    if (Reflect.has(metadata, "category"))
      data.category = { id: metadata.category || 0 };
    if (Reflect.has(metadata, "privacy")) {
      switch (metadata.privacy) {
        case "PUBLIC":
          data.privacy = { type: 1 };
          break;
        case "UNLISTED":
          data.privacy = { type: 2 };
          break;
        case "PRIVATE":
          data.privacy = { type: 3 };
          break;
        default:
          throw new Error("Invalid visibility option");
      }
    }
    if (Reflect.has(metadata, "made_for_kids")) {
      data.madeForKids = {
        unkparam: 1,
        choice: metadata.made_for_kids ? 1 : 2
      };
    }
    if (Reflect.has(metadata, "age_restricted")) {
      data.ageRestricted = {
        unkparam: 1,
        choice: metadata.age_restricted ? 1 : 2
      };
    }
    const buf = encodeBinary38(data);
    return buf;
  }
  static encodeCustomThumbnailPayload(video_id, bytes) {
    const data = {
      context: {
        client: {
          unkparam: 14,
          clientName: CLIENTS.ANDROID.NAME,
          clientVersion: CLIENTS.YTSTUDIO_ANDROID.VERSION
        }
      },
      target: video_id,
      videoThumbnail: {
        type: 3,
        thumbnail: {
          imageData: bytes
        }
      }
    };
    const buf = encodeBinary38(data);
    return buf;
  }
  static encodeHashtag(hashtag) {
    const buf = encodeBinary40({
      params: {
        hashtag,
        type: 1
      }
    });
    return encodeURIComponent(u8ToBase64(buf));
  }
};
__name(Proto, "Proto");
var proto_default = Proto;

// dist/src/parser/classes/comments/Comment.js
var __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldGet6 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet6 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Comment_actions;
var Comment = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c, _d, _e, _f, _g;
    super();
    _Comment_actions.set(this, void 0);
    this.content = new Text_default(data.contentText);
    this.published = new Text_default(data.publishedTimeText);
    this.author_is_channel_owner = data.authorIsChannelOwner;
    this.current_user_reply_thumbnail = Thumbnail_default.fromResponse(data.currentUserReplyThumbnail);
    this.sponsor_comment_badge = parser_default.parseItem(data.sponsorCommentBadge);
    this.paid_comment_chip = parser_default.parseItem(data.paidCommentChipRenderer);
    this.author_badge = parser_default.parseItem(data.authorCommentBadge, AuthorCommentBadge_default);
    this.author = new Author_default(Object.assign(Object.assign({}, data.authorText), { navigationEndpoint: data.authorEndpoint }), this.author_badge ? [{
      metadataBadgeRenderer: (_a5 = this.author_badge) === null || _a5 === void 0 ? void 0 : _a5.orig_badge
    }] : null, data.authorThumbnail);
    this.action_menu = parser_default.parseItem(data.actionMenu);
    this.action_buttons = parser_default.parseItem(data.actionButtons);
    this.comment_id = data.commentId;
    this.vote_status = data.voteStatus;
    this.vote_count = data.voteCount ? new Text_default(data.voteCount).toString() : "0";
    this.reply_count = data.replyCount || 0;
    this.is_liked = !!((_c = (_b = this.action_buttons) === null || _b === void 0 ? void 0 : _b.like_button) === null || _c === void 0 ? void 0 : _c.is_toggled);
    this.is_disliked = !!((_e = (_d = this.action_buttons) === null || _d === void 0 ? void 0 : _d.dislike_button) === null || _e === void 0 ? void 0 : _e.is_toggled);
    this.is_hearted = !!((_g = (_f = this.action_buttons) === null || _f === void 0 ? void 0 : _f.creator_heart) === null || _g === void 0 ? void 0 : _g.is_hearted);
    this.is_pinned = !!data.pinnedCommentBadge;
    this.is_member = !!data.sponsorCommentBadge;
  }
  like() {
    var _a5;
    return __awaiter3(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet6(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      const button = (_a5 = this.action_buttons) === null || _a5 === void 0 ? void 0 : _a5.like_button;
      if (!button)
        throw new InnertubeError("Like button was not found.", { comment_id: this.comment_id });
      if (button.is_toggled)
        throw new InnertubeError("This comment is already liked", { comment_id: this.comment_id });
      const response = yield button.endpoint.call(__classPrivateFieldGet6(this, _Comment_actions, "f"), { parse: false });
      return response;
    });
  }
  dislike() {
    var _a5;
    return __awaiter3(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet6(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      const button = (_a5 = this.action_buttons) === null || _a5 === void 0 ? void 0 : _a5.dislike_button;
      if (!button)
        throw new InnertubeError("Dislike button was not found.", { comment_id: this.comment_id });
      if (button.is_toggled)
        throw new InnertubeError("This comment is already disliked", { comment_id: this.comment_id });
      const response = yield button.endpoint.call(__classPrivateFieldGet6(this, _Comment_actions, "f"), { parse: false });
      return response;
    });
  }
  reply(text) {
    var _a5, _b, _c;
    return __awaiter3(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet6(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      if (!((_a5 = this.action_buttons) === null || _a5 === void 0 ? void 0 : _a5.reply_button))
        throw new InnertubeError("Cannot reply to another reply. Try mentioning the user instead.", { comment_id: this.comment_id });
      const button = (_b = this.action_buttons) === null || _b === void 0 ? void 0 : _b.reply_button;
      if (!((_c = button.endpoint) === null || _c === void 0 ? void 0 : _c.dialog))
        throw new InnertubeError("Reply button endpoint did not have a dialog.");
      const dialog = button.endpoint.dialog;
      const dialog_button = dialog.item().as(CommentReplyDialog_default).reply_button;
      if (!dialog_button)
        throw new InnertubeError("Reply button was not found in the dialog.", { comment_id: this.comment_id });
      if (!dialog_button.endpoint)
        throw new InnertubeError("Reply button endpoint was not found.", { comment_id: this.comment_id });
      const response = yield dialog_button.endpoint.call(__classPrivateFieldGet6(this, _Comment_actions, "f"), { commentText: text });
      return response;
    });
  }
  translate(target_language) {
    var _a5, _b, _c, _d, _e, _f;
    return __awaiter3(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet6(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      const text = this.content.toString().replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, "");
      const payload = {
        text,
        target_language,
        comment_id: this.comment_id
      };
      const action = proto_default.encodeCommentActionParams(22, payload);
      const response = yield __classPrivateFieldGet6(this, _Comment_actions, "f").execute("comment/perform_comment_action", { action, client: "ANDROID" });
      const mutations = (_b = (_a5 = response.data.frameworkUpdates) === null || _a5 === void 0 ? void 0 : _a5.entityBatchUpdate) === null || _b === void 0 ? void 0 : _b.mutations;
      const content = (_f = (_e = (_d = (_c = mutations === null || mutations === void 0 ? void 0 : mutations[0]) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.commentEntityPayload) === null || _e === void 0 ? void 0 : _e.translatedContent) === null || _f === void 0 ? void 0 : _f.content;
      return Object.assign(Object.assign({}, response), { content });
    });
  }
  setActions(actions) {
    __classPrivateFieldSet6(this, _Comment_actions, actions, "f");
  }
};
__name(Comment, "Comment");
_Comment_actions = /* @__PURE__ */ new WeakMap();
Comment.type = "Comment";
var Comment_default = Comment;

// dist/src/parser/classes/comments/CommentActionButtons.js
var CommentActionButtons = class extends YTNode {
  constructor(data) {
    super();
    this.like_button = parser_default.parseItem(data.likeButton);
    this.dislike_button = parser_default.parseItem(data.dislikeButton);
    this.reply_button = parser_default.parseItem(data.replyButton);
    this.creator_heart = parser_default.parseItem(data.creatorHeart);
  }
};
__name(CommentActionButtons, "CommentActionButtons");
CommentActionButtons.type = "CommentActionButtons";
var CommentActionButtons_default = CommentActionButtons;

// dist/src/parser/classes/comments/CommentDialog.js
var CommentDialog = class extends YTNode {
  constructor(data) {
    super();
    this.editable_text = new Text_default(data.editableText);
    this.author_thumbnail = Thumbnail_default.fromResponse(data.authorThumbnail);
    this.submit_button = parser_default.parseItem(data.submitButton);
    this.cancel_button = parser_default.parseItem(data.cancelButton);
    this.placeholder = new Text_default(data.placeholderText);
    this.emoji_button = parser_default.parseItem(data.emojiButton);
    this.emoji_picker = parser_default.parseItem(data.emojiPicker);
  }
};
__name(CommentDialog, "CommentDialog");
CommentDialog.type = "CommentDialog";
var CommentDialog_default = CommentDialog;

// dist/src/parser/classes/comments/CommentReplies.js
var CommentReplies = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents);
    this.view_replies = parser_default.parseItem(data.viewReplies);
    this.hide_replies = parser_default.parseItem(data.hideReplies);
    this.view_replies_creator_thumbnail = Thumbnail_default.fromResponse(data.viewRepliesCreatorThumbnail);
    this.has_channel_owner_replied = !!data.viewRepliesCreatorThumbnail;
  }
};
__name(CommentReplies, "CommentReplies");
CommentReplies.type = "CommentReplies";
var CommentReplies_default = CommentReplies;

// dist/src/parser/classes/comments/CommentsEntryPointHeader.js
var CommentsEntryPointHeader = class extends YTNode {
  constructor(data) {
    super();
    if (data.header) {
      this.header = new Text_default(data.headerText);
    }
    if (data.commentCount) {
      this.comment_count = new Text_default(data.commentCount);
    }
    if (data.teaserAvatar || data.simpleboxAvatar) {
      this.teaser_avatar = Thumbnail_default.fromResponse(data.teaserAvatar || data.simpleboxAvatar);
    }
    if (data.teaserContent) {
      this.teaser_content = new Text_default(data.teaserContent);
    }
    if (data.simpleboxPlaceholder) {
      this.simplebox_placeholder = new Text_default(data.simpleboxPlaceholder);
    }
  }
};
__name(CommentsEntryPointHeader, "CommentsEntryPointHeader");
CommentsEntryPointHeader.type = "CommentsEntryPointHeader";
var CommentsEntryPointHeader_default = CommentsEntryPointHeader;

// dist/src/parser/classes/comments/CommentsHeader.js
var CommentsHeader = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.title = new Text_default(data.titleText);
    this.count = new Text_default(data.countText);
    this.comments_count = new Text_default(data.commentsCount);
    this.create_renderer = parser_default.parseItem(data.createRenderer);
    this.sort_menu = parser_default.parseItem(data.sortMenu);
    this.custom_emojis = ((_a5 = data.customEmojis) === null || _a5 === void 0 ? void 0 : _a5.map((emoji) => ({
      emoji_id: emoji.emojiId,
      shortcuts: emoji.shortcuts,
      search_terms: emoji.searchTerms,
      image: Thumbnail_default.fromResponse(emoji.image),
      is_custom_emoji: emoji.isCustomEmoji
    }))) || null;
  }
};
__name(CommentsHeader, "CommentsHeader");
CommentsHeader.type = "CommentsHeader";
var CommentsHeader_default = CommentsHeader;

// dist/src/parser/classes/comments/CommentSimplebox.js
var CommentSimplebox = class extends YTNode {
  constructor(data) {
    super();
    this.submit_button = parser_default.parseItem(data.submitButton);
    this.cancel_button = parser_default.parseItem(data.cancelButton);
    this.author_thumbnails = Thumbnail_default.fromResponse(data.authorThumbnail);
    this.placeholder = new Text_default(data.placeholderText);
    this.avatar_size = data.avatarSize;
  }
};
__name(CommentSimplebox, "CommentSimplebox");
CommentSimplebox.type = "CommentSimplebox";
var CommentSimplebox_default = CommentSimplebox;

// dist/src/parser/classes/ContinuationItem.js
var ContinuationItem = class extends YTNode {
  constructor(data) {
    super();
    this.trigger = data.trigger;
    if (data.button) {
      this.button = parser_default.parseItem(data.button);
    }
    this.endpoint = new NavigationEndpoint_default(data.continuationEndpoint);
  }
};
__name(ContinuationItem, "ContinuationItem");
ContinuationItem.type = "ContinuationItem";
var ContinuationItem_default = ContinuationItem;

// dist/src/parser/classes/comments/CommentThread.js
var __awaiter4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldGet7 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet7 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _CommentThread_actions;
var _CommentThread_continuation;
var CommentThread = class extends YTNode {
  constructor(data) {
    super();
    _CommentThread_actions.set(this, void 0);
    _CommentThread_continuation.set(this, void 0);
    this.comment = parser_default.parseItem(data.comment, Comment_default);
    this.comment_replies_data = parser_default.parseItem(data.replies);
    this.is_moderated_elq_comment = data.isModeratedElqComment;
    this.has_replies = !!this.comment_replies_data;
  }
  getReplies() {
    var _a5, _b;
    return __awaiter4(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet7(this, _CommentThread_actions, "f"))
        throw new InnertubeError("Actions instance not set for this thread.");
      if (!this.comment_replies_data)
        throw new InnertubeError("This comment has no replies.", { comment_id: (_a5 = this.comment) === null || _a5 === void 0 ? void 0 : _a5.comment_id });
      const continuation = (_b = this.comment_replies_data.contents) === null || _b === void 0 ? void 0 : _b.firstOfType(ContinuationItem_default);
      if (!continuation)
        throw new InnertubeError("Replies continuation not found.");
      const response = yield continuation.endpoint.call(__classPrivateFieldGet7(this, _CommentThread_actions, "f"), { parse: true });
      if (!response.on_response_received_endpoints_memo)
        throw new InnertubeError("Unexpected response.", response);
      this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment_default).map((comment) => {
        comment.setActions(__classPrivateFieldGet7(this, _CommentThread_actions, "f"));
        return comment;
      }));
      __classPrivateFieldSet7(this, _CommentThread_continuation, response === null || response === void 0 ? void 0 : response.on_response_received_endpoints_memo.getType(ContinuationItem_default).first(), "f");
      return this;
    });
  }
  getContinuation() {
    var _a5, _b;
    return __awaiter4(this, void 0, void 0, function* () {
      if (!this.replies)
        throw new InnertubeError("Cannot retrieve continuation because this thread's replies have not been loaded.");
      if (!__classPrivateFieldGet7(this, _CommentThread_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      if (!__classPrivateFieldGet7(this, _CommentThread_actions, "f"))
        throw new InnertubeError("Actions instance not set for this thread.");
      const load_more_button = (_a5 = __classPrivateFieldGet7(this, _CommentThread_continuation, "f").button) === null || _a5 === void 0 ? void 0 : _a5.as(Button_default);
      if (!load_more_button)
        throw new InnertubeError('"Load more" button not found.');
      const response = yield load_more_button.endpoint.call(__classPrivateFieldGet7(this, _CommentThread_actions, "f"), { parse: true });
      if (!response.on_response_received_endpoints_memo)
        throw new InnertubeError("Unexpected response.", response);
      this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment_default).map((comment) => {
        comment.setActions(__classPrivateFieldGet7(this, _CommentThread_actions, "f"));
        return comment;
      }));
      __classPrivateFieldSet7(this, _CommentThread_continuation, (_b = response.on_response_received_endpoints_memo.getType(ContinuationItem_default)) === null || _b === void 0 ? void 0 : _b[0], "f");
      return this;
    });
  }
  get has_continuation() {
    if (!this.replies)
      throw new InnertubeError("Cannot determine if there is a continuation because this thread's replies have not been loaded.");
    return !!__classPrivateFieldGet7(this, _CommentThread_continuation, "f");
  }
  setActions(actions) {
    __classPrivateFieldSet7(this, _CommentThread_actions, actions, "f");
  }
};
__name(CommentThread, "CommentThread");
_CommentThread_actions = /* @__PURE__ */ new WeakMap(), _CommentThread_continuation = /* @__PURE__ */ new WeakMap();
CommentThread.type = "CommentThread";
var CommentThread_default = CommentThread;

// dist/src/parser/classes/comments/CreatorHeart.js
var CreatorHeart = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c;
    super();
    this.creator_thumbnail = Thumbnail_default.fromResponse(data.creatorThumbnail);
    this.heart_icon_type = (_a5 = data.heartIcon) === null || _a5 === void 0 ? void 0 : _a5.iconType;
    this.heart_color = {
      basic_color_palette_data: {
        foreground_title_color: (_c = (_b = data.heartColor) === null || _b === void 0 ? void 0 : _b.basicColorPaletteData) === null || _c === void 0 ? void 0 : _c.foregroundTitleColor
      }
    };
    this.hearted_tooltip = data.heartedTooltip;
    this.is_hearted = data.isHearted;
    this.is_enabled = data.isEnabled;
    this.kennedy_heart_color_string = data.kennedyHeartColorString;
  }
};
__name(CreatorHeart, "CreatorHeart");
CreatorHeart.type = "CreatorHeart";
var CreatorHeart_default = CreatorHeart;

// dist/src/parser/classes/comments/EmojiPicker.js
var EmojiPicker = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.categories = parser_default.parseArray(data.categories);
    this.category_buttons = parser_default.parseArray(data.categoryButtons);
    this.search_placeholder = new Text_default(data.searchPlaceholderText);
    this.search_no_results = new Text_default(data.searchNoResultsText);
    this.pick_skin_tone = new Text_default(data.pickSkinToneText);
    this.clear_search_label = data.clearSearchLabel;
    this.skin_tone_generic_label = data.skinToneGenericLabel;
    this.skin_tone_light_label = data.skinToneLightLabel;
    this.skin_tone_medium_light_label = data.skinToneMediumLightLabel;
    this.skin_tone_medium_label = data.skinToneMediumLabel;
    this.skin_tone_medium_dark_label = data.skinToneMediumDarkLabel;
    this.skin_tone_dark_label = data.skinToneDarkLabel;
  }
};
__name(EmojiPicker, "EmojiPicker");
EmojiPicker.type = "EmojiPicker";
var EmojiPicker_default = EmojiPicker;

// dist/src/parser/classes/comments/PdgCommentChip.js
var PdgCommentChip = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c;
    super();
    this.text = new Text_default(data.chipText);
    this.color_pallette = {
      background_color: (_a5 = data.chipColorPalette) === null || _a5 === void 0 ? void 0 : _a5.backgroundColor,
      foreground_title_color: (_b = data.chipColorPalette) === null || _b === void 0 ? void 0 : _b.foregroundTitleColor
    };
    this.icon_type = (_c = data.chipIcon) === null || _c === void 0 ? void 0 : _c.iconType;
  }
};
__name(PdgCommentChip, "PdgCommentChip");
PdgCommentChip.type = "PdgCommentChip";
var PdgCommentChip_default = PdgCommentChip;

// dist/src/parser/classes/comments/SponsorCommentBadge.js
var SponsorCommentBadge = class extends YTNode {
  constructor(data) {
    super();
    this.custom_badge = Thumbnail_default.fromResponse(data.customBadge);
    this.tooltip = data.tooltip;
  }
};
__name(SponsorCommentBadge, "SponsorCommentBadge");
SponsorCommentBadge.type = "SponsorCommentBadge";
var SponsorCommentBadge_default = SponsorCommentBadge;

// dist/src/parser/classes/CompactChannel.js
var CompactChannel = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.channel_id = data.channelId;
    this.thumbnail = Thumbnail_default.fromResponse(data.thumbnail);
    this.display_name = new Text_default(data.displayName);
    this.video_count = new Text_default(data.videoCountText);
    this.subscriber_count = new Text_default(data.subscriberCountText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.tv_banner = Thumbnail_default.fromResponse(data.tvBanner);
    this.menu = parser_default.parseItem(data.menu);
  }
};
__name(CompactChannel, "CompactChannel");
CompactChannel.type = "CompactChannel";
var CompactChannel_default = CompactChannel;

// dist/src/parser/classes/CompactLink.js
var CompactLink = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title).toString();
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.style = data.style;
  }
};
__name(CompactLink, "CompactLink");
CompactLink.type = "CompactLink";
var CompactLink_default = CompactLink;

// dist/src/parser/classes/misc/PlaylistAuthor.js
var PlaylistAuthor = class extends Author_default {
  constructor(item, badges, thumbs) {
    super(item, badges, thumbs);
    delete this.badges;
    delete this.is_verified;
    delete this.is_verified_artist;
  }
};
__name(PlaylistAuthor, "PlaylistAuthor");
var PlaylistAuthor_default = PlaylistAuthor;

// dist/src/parser/classes/Playlist.js
var Playlist = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.id = data.playlistId;
    this.title = new Text_default(data.title);
    this.author = ((_a5 = data.shortBylineText) === null || _a5 === void 0 ? void 0 : _a5.simpleText) ? new Text_default(data.shortBylineText) : new PlaylistAuthor_default(data.longBylineText, data.ownerBadges, null);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail || { thumbnails: data.thumbnails.map((th) => th.thumbnails).flat(1) });
    this.video_count = new Text_default(data.thumbnailText);
    this.video_count_short = new Text_default(data.videoCountShortText);
    this.first_videos = parser_default.parseArray(data.videos);
    this.share_url = data.shareUrl || null;
    this.menu = parser_default.parseItem(data.menu);
    this.badges = parser_default.parseArray(data.ownerBadges);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
  }
};
__name(Playlist, "Playlist");
Playlist.type = "Playlist";
var Playlist_default = Playlist;

// dist/src/parser/classes/CompactMix.js
var CompactMix = class extends Playlist_default {
  constructor(data) {
    super(data);
  }
};
__name(CompactMix, "CompactMix");
CompactMix.type = "CompactMix";
var CompactMix_default = CompactMix;

// dist/src/parser/classes/CompactPlaylist.js
var CompactPlaylist = class extends Playlist_default {
  constructor(data) {
    super(data);
  }
};
__name(CompactPlaylist, "CompactPlaylist");
CompactPlaylist.type = "CompactPlaylist";
var CompactPlaylist_default = CompactPlaylist;

// dist/src/parser/classes/CompactStation.js
var CompactStation = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.description = new Text_default(data.description);
    this.video_count = new Text_default(data.videoCountText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.thumbnail = Thumbnail_default.fromResponse(data.thumbnail);
  }
};
__name(CompactStation, "CompactStation");
CompactStation.type = "CompactStation";
var CompactStation_default = CompactStation;

// dist/src/parser/classes/MetadataBadge.js
var MetadataBadge = class extends YTNode {
  constructor(data) {
    super();
    if (data === null || data === void 0 ? void 0 : data.icon) {
      this.icon_type = data.icon.iconType;
    }
    if (data === null || data === void 0 ? void 0 : data.style) {
      this.style = data.style;
    }
    if (data === null || data === void 0 ? void 0 : data.label) {
      this.label = data.label;
    }
    if ((data === null || data === void 0 ? void 0 : data.tooltip) || (data === null || data === void 0 ? void 0 : data.iconTooltip)) {
      this.tooltip = data.tooltip || data.iconTooltip;
    }
  }
};
__name(MetadataBadge, "MetadataBadge");
MetadataBadge.type = "MetadataBadge";
var MetadataBadge_default = MetadataBadge;

// dist/src/parser/classes/CompactVideo.js
var CompactVideo = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail) || null;
    this.rich_thumbnail = data.richThumbnail && parser_default.parse(data.richThumbnail);
    this.title = new Text_default(data.title);
    this.author = new Author_default(data.longBylineText, data.ownerBadges, data.channelThumbnail);
    this.view_count = new Text_default(data.viewCountText);
    this.short_view_count = new Text_default(data.shortViewCountText);
    this.published = new Text_default(data.publishedTimeText);
    this.badges = parser_default.parseArray(data.badges, MetadataBadge_default);
    this.duration = {
      text: new Text_default(data.lengthText).toString(),
      seconds: timeToSeconds(new Text_default(data.lengthText).toString())
    };
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.menu = parser_default.parseItem(data.menu);
  }
  get best_thumbnail() {
    return this.thumbnails[0];
  }
  get is_fundraiser() {
    return this.badges.some((badge) => badge.label === "Fundraiser");
  }
  get is_live() {
    return this.badges.some((badge) => {
      if (badge.style === "BADGE_STYLE_TYPE_LIVE_NOW" || badge.label === "LIVE")
        return true;
    });
  }
  get is_new() {
    return this.badges.some((badge) => badge.label === "New");
  }
  get is_premiere() {
    return this.badges.some((badge) => badge.style === "PREMIERE");
  }
};
__name(CompactVideo, "CompactVideo");
CompactVideo.type = "CompactVideo";
var CompactVideo_default = CompactVideo;

// dist/src/parser/classes/ConfirmDialog.js
var ConfirmDialog = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.confirm_button = parser_default.parseItem(data.confirmButton, Button_default);
    this.cancel_button = parser_default.parseItem(data.cancelButton, Button_default);
    this.dialog_messages = data.dialogMessages.map((txt) => new Text_default(txt));
  }
};
__name(ConfirmDialog, "ConfirmDialog");
ConfirmDialog.type = "ConfirmDialog";
var ConfirmDialog_default = ConfirmDialog;

// dist/src/parser/classes/CopyLink.js
var CopyLink = class extends YTNode {
  constructor(data) {
    super();
    this.copy_button = parser_default.parseItem(data.copyButton, Button_default);
    this.short_url = data.shortUrl;
    this.style = data.style;
  }
};
__name(CopyLink, "CopyLink");
CopyLink.type = "CopyLink";
var CopyLink_default = CopyLink;

// dist/src/parser/classes/DecoratedPlayerBar.js
var DecoratedPlayerBar = class extends YTNode {
  constructor(data) {
    super();
    this.player_bar = parser_default.parseItem(data.playerBar);
    this.player_bar_action_button = parser_default.parseItem(data.playerBarActionButton);
  }
};
__name(DecoratedPlayerBar, "DecoratedPlayerBar");
DecoratedPlayerBar.type = "DecoratedPlayerBar";
var DecoratedPlayerBar_default = DecoratedPlayerBar;

// dist/src/parser/classes/DefaultPromoPanel.js
var DefaultPromoPanel = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.description = new Text_default(data.description);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.large_form_factor_background_thumbnail = parser_default.parseItem(data.largeFormFactorBackgroundThumbnail);
    this.small_form_factor_background_thumbnail = parser_default.parseItem(data.smallFormFactorBackgroundThumbnail);
    this.scrim_color_values = data.scrimColorValues;
    this.min_panel_display_duration_ms = data.minPanelDisplayDurationMs;
    this.min_video_play_duration_ms = data.minVideoPlayDurationMs;
    this.scrim_duration = data.scrimDuration;
    this.metadata_order = data.metadataOrder;
    this.panel_layout = data.panelLayout;
  }
};
__name(DefaultPromoPanel, "DefaultPromoPanel");
DefaultPromoPanel.type = "DefaultPromoPanel";
var DefaultPromoPanel_default = DefaultPromoPanel;

// dist/src/parser/classes/DidYouMean.js
var DidYouMean = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text_default(data.didYouMean).toString();
    this.corrected_query = new Text_default(data.correctedQuery);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint || data.correctedQueryEndpoint);
  }
};
__name(DidYouMean, "DidYouMean");
DidYouMean.type = "DidYouMean";
var DidYouMean_default = DidYouMean;

// dist/src/parser/classes/DownloadButton.js
var DownloadButton = class extends YTNode {
  constructor(data) {
    super();
    this.style = data.style;
    this.size = data.size;
    this.endpoint = new NavigationEndpoint_default(data.command);
    this.target_id = data.targetId;
  }
};
__name(DownloadButton, "DownloadButton");
DownloadButton.type = "DownloadButton";
var DownloadButton_default = DownloadButton;

// dist/src/parser/classes/misc/ChildElement.js
var ChildElement = class {
  constructor(data) {
    var _a5, _b;
    this.text = ((_b = (_a5 = data.type.textType) === null || _a5 === void 0 ? void 0 : _a5.text) === null || _b === void 0 ? void 0 : _b.content) || null;
    this.properties = data.properties;
    if (data.childElements) {
      this.child_elements = data.childElements.map((el) => new ChildElement(el));
    }
  }
};
__name(ChildElement, "ChildElement");
ChildElement.type = "ChildElement";
var ChildElement_default = ChildElement;

// dist/src/parser/classes/Element.js
var Element = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c;
    super();
    if (Reflect.has(data, "elementRenderer")) {
      return parser_default.parseItem(data, Element);
    }
    const type = data.newElement.type.componentType;
    this.model = parser_default.parse(type === null || type === void 0 ? void 0 : type.model);
    if ((_a5 = data.newElement) === null || _a5 === void 0 ? void 0 : _a5.childElements) {
      this.child_elements = ((_c = (_b = data.newElement) === null || _b === void 0 ? void 0 : _b.childElements) === null || _c === void 0 ? void 0 : _c.map((el) => new ChildElement_default(el))) || null;
    }
  }
};
__name(Element, "Element");
Element.type = "Element";
var Element_default = Element;

// dist/src/parser/classes/EmergencyOnebox.js
var EmergencyOnebox = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.first_option = parser_default.parse(data.firstOption);
    this.menu = parser_default.parse(data.menu);
  }
};
__name(EmergencyOnebox, "EmergencyOnebox");
EmergencyOnebox.type = "EmergencyOnebox";
var EmergencyOnebox_default = EmergencyOnebox;

// dist/src/parser/classes/EmojiPickerCategory.js
var EmojiPickerCategory = class extends YTNode {
  constructor(data) {
    super();
    this.category_id = data.categoryId;
    this.title = new Text_default(data.title);
    this.emoji_ids = data.emojiIds;
    this.image_loading_lazy = !!data.imageLoadingLazy;
    this.category_type = data.categoryType;
  }
};
__name(EmojiPickerCategory, "EmojiPickerCategory");
EmojiPickerCategory.type = "EmojiPickerCategory";
var EmojiPickerCategory_default = EmojiPickerCategory;

// dist/src/parser/classes/EmojiPickerCategoryButton.js
var EmojiPickerCategoryButton = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.category_id = data.categoryId;
    this.icon_type = (_a5 = data.icon) === null || _a5 === void 0 ? void 0 : _a5.iconType;
    this.tooltip = data.tooltip;
  }
};
__name(EmojiPickerCategoryButton, "EmojiPickerCategoryButton");
EmojiPickerCategoryButton.type = "EmojiPickerCategoryButton";
var EmojiPickerCategoryButton_default = EmojiPickerCategoryButton;

// dist/src/parser/classes/EmojiPickerUpsellCategory.js
var EmojiPickerUpsellCategory = class extends YTNode {
  constructor(data) {
    super();
    this.category_id = data.categoryId;
    this.title = new Text_default(data.title);
    this.upsell = new Text_default(data.upsell);
    this.emoji_tooltip = data.emojiTooltip;
    this.endpoint = new NavigationEndpoint_default(data.command);
    this.emoji_ids = data.emojiIds;
  }
};
__name(EmojiPickerUpsellCategory, "EmojiPickerUpsellCategory");
EmojiPickerUpsellCategory.type = "EmojiPickerUpsellCategory";
var EmojiPickerUpsellCategory_default = EmojiPickerUpsellCategory;

// dist/src/parser/classes/Endscreen.js
var Endscreen = class extends YTNode {
  constructor(data) {
    super();
    this.elements = parser_default.parseArray(data.elements);
    this.start_ms = data.startMs;
  }
};
__name(Endscreen, "Endscreen");
Endscreen.type = "Endscreen";
var Endscreen_default = Endscreen;

// dist/src/parser/classes/EndscreenElement.js
var EndscreenElement = class extends YTNode {
  constructor(data) {
    super();
    this.style = `${data.style}`;
    this.title = new Text_default(data.title);
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
    if (data.image) {
      this.image = Thumbnail_default.fromResponse(data.image);
    }
    if (data.icon) {
      this.icon = Thumbnail_default.fromResponse(data.icon);
    }
    if (data.metadata) {
      this.metadata = new Text_default(data.metadata);
    }
    if (data.callToAction) {
      this.call_to_action = new Text_default(data.callToAction);
    }
    if (data.hovercardButton) {
      this.hovercard_button = parser_default.parseItem(data.hovercardButton);
    }
    if (data.isSubscribe) {
      this.is_subscribe = !!data.isSubscribe;
    }
    if (data.playlistLength) {
      this.playlist_length = new Text_default(data.playlistLength);
    }
    this.thumbnail_overlays = data.thumbnailOverlays ? parser_default.parseArray(data.thumbnailOverlays) : void 0;
    this.left = parseFloat(data.left);
    this.width = parseFloat(data.width);
    this.top = parseFloat(data.top);
    this.aspect_ratio = parseFloat(data.aspectRatio);
    this.start_ms = parseFloat(data.startMs);
    this.end_ms = parseFloat(data.endMs);
    this.id = data.id;
  }
};
__name(EndscreenElement, "EndscreenElement");
EndscreenElement.type = "EndscreenElement";
var EndscreenElement_default = EndscreenElement;

// dist/src/parser/classes/EndScreenPlaylist.js
var EndScreenPlaylist = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.playlistId;
    this.title = new Text_default(data.title);
    this.author = new Text_default(data.longBylineText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.video_count = new Text_default(data.videoCountText);
  }
};
__name(EndScreenPlaylist, "EndScreenPlaylist");
EndScreenPlaylist.type = "EndScreenPlaylist";
var EndScreenPlaylist_default = EndScreenPlaylist;

// dist/src/parser/classes/EndScreenVideo.js
var EndScreenVideo = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.title = new Text_default(data.title);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.thumbnail_overlays = parser_default.parse(data.thumbnailOverlays);
    this.author = new Author_default(data.shortBylineText, data.ownerBadges);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.short_view_count = new Text_default(data.shortViewCountText);
    this.badges = parser_default.parse(data.badges);
    this.duration = {
      text: new Text_default(data.lengthText).toString(),
      seconds: data.lengthInSeconds
    };
  }
};
__name(EndScreenVideo, "EndScreenVideo");
EndScreenVideo.type = "EndScreenVideo";
var EndScreenVideo_default = EndScreenVideo;

// dist/src/parser/classes/ExpandableMetadata.js
var ExpandableMetadata = class extends YTNode {
  constructor(data) {
    super();
    this.header = {
      collapsed_title: new Text_default(data.header.collapsedTitle),
      collapsed_thumbnail: Thumbnail_default.fromResponse(data.header.collapsedThumbnail),
      collapsed_label: new Text_default(data.header.collapsedLabel),
      expanded_title: new Text_default(data.header.expandedTitle)
    };
    this.expanded_content = parser_default.parseItem(data.expandedContent);
    this.expand_button = parser_default.parseItem(data.expandButton);
    this.collapse_button = parser_default.parseItem(data.collapseButton);
  }
};
__name(ExpandableMetadata, "ExpandableMetadata");
ExpandableMetadata.type = "ExpandableMetadata";
var ExpandableMetadata_default = ExpandableMetadata;

// dist/src/parser/classes/ExpandableTab.js
var ExpandableTab = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
    this.selected = data.selected;
    this.content = data.content ? parser_default.parseItem(data.content) : null;
  }
};
__name(ExpandableTab, "ExpandableTab");
ExpandableTab.type = "ExpandableTab";
var ExpandableTab_default = ExpandableTab;

// dist/src/parser/classes/ExpandedShelfContents.js
var ExpandedShelfContents = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(ExpandedShelfContents, "ExpandedShelfContents");
ExpandedShelfContents.type = "ExpandedShelfContents";
var ExpandedShelfContents_default = ExpandedShelfContents;

// dist/src/parser/classes/FeedFilterChipBar.js
var FeedFilterChipBar = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents, ChipCloudChip_default);
  }
};
__name(FeedFilterChipBar, "FeedFilterChipBar");
FeedFilterChipBar.type = "FeedFilterChipBar";
var FeedFilterChipBar_default = FeedFilterChipBar;

// dist/src/parser/classes/FeedTabbedHeader.js
var FeedTabbedHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
  }
};
__name(FeedTabbedHeader, "FeedTabbedHeader");
FeedTabbedHeader.type = "FeedTabbedHeader";
var FeedTabbedHeader_default = FeedTabbedHeader;

// dist/src/parser/classes/GameCard.js
var GameCard = class extends YTNode {
  constructor(data) {
    super();
    this.game = parser_default.parseItem(data.game);
  }
};
__name(GameCard, "GameCard");
GameCard.type = "GameCard";
var GameCard_default = GameCard;

// dist/src/parser/classes/GameDetails.js
var GameDetails = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.box_art = Thumbnail_default.fromResponse(data.boxArt);
    this.box_art_overlay_text = new Text_default(data.boxArtOverlayText);
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
    this.is_official_box_art = data.isOfficialBoxArt;
  }
};
__name(GameDetails, "GameDetails");
GameDetails.type = "GameDetails";
var GameDetails_default = GameDetails;

// dist/src/parser/classes/Grid.js
var Grid = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c;
    super();
    this.items = parser_default.parseArray(data.items);
    if (data.header) {
      this.header = parser_default.parse(data.header);
    }
    if (data.isCollapsible) {
      this.is_collapsible = data.isCollapsible;
    }
    if (data.visibleRowCount) {
      this.visible_row_count = data.visibleRowCount;
    }
    if (data.targetId) {
      this.target_id = data.targetId;
    }
    this.continuation = ((_c = (_b = (_a5 = data.continuations) === null || _a5 === void 0 ? void 0 : _a5[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || null;
  }
  get contents() {
    return this.items;
  }
};
__name(Grid, "Grid");
Grid.type = "Grid";
var Grid_default = Grid;

// dist/src/parser/classes/GridChannel.js
var GridChannel = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.channelId;
    this.author = new Author_default(Object.assign(Object.assign({}, data.title), { navigationEndpoint: data.navigationEndpoint }), data.ownerBadges, data.thumbnail);
    this.subscribers = new Text_default(data.subscriberCountText);
    this.video_count = new Text_default(data.videoCountText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.subscribe_button = parser_default.parse(data.subscribeButton);
  }
};
__name(GridChannel, "GridChannel");
GridChannel.type = "GridChannel";
var GridChannel_default = GridChannel;

// dist/src/parser/classes/GridHeader.js
var GridHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
  }
};
__name(GridHeader, "GridHeader");
GridHeader.type = "GridHeader";
var GridHeader_default = GridHeader;

// dist/src/parser/classes/GridPlaylist.js
var GridPlaylist = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.id = data.playlistId;
    this.title = new Text_default(data.title);
    if (data.shortBylineText) {
      this.author = new PlaylistAuthor_default(data.shortBylineText, data.ownerBadges);
    }
    this.badges = parser_default.parse(data.ownerBadges);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.view_playlist = new NavigatableText_default(data.viewPlaylistText);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.thumbnail_renderer = parser_default.parse(data.thumbnailRenderer);
    this.sidebar_thumbnails = [].concat(...((_a5 = data.sidebarThumbnails) === null || _a5 === void 0 ? void 0 : _a5.map((thumbnail) => Thumbnail_default.fromResponse(thumbnail))) || []) || null;
    this.video_count = new Text_default(data.thumbnailText);
    this.video_count_short = new Text_default(data.videoCountShortText);
  }
};
__name(GridPlaylist, "GridPlaylist");
GridPlaylist.type = "GridPlaylist";
var GridPlaylist_default = GridPlaylist;

// dist/src/parser/classes/GridVideo.js
var GridVideo = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    const length_alt = (_a5 = data.thumbnailOverlays.find((overlay) => overlay.hasOwnProperty("thumbnailOverlayTimeStatusRenderer"))) === null || _a5 === void 0 ? void 0 : _a5.thumbnailOverlayTimeStatusRenderer;
    this.id = data.videoId;
    this.title = new Text_default(data.title);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    this.rich_thumbnail = data.richThumbnail && parser_default.parse(data.richThumbnail);
    this.published = new Text_default(data.publishedTimeText);
    this.duration = data.lengthText ? new Text_default(data.lengthText) : (length_alt === null || length_alt === void 0 ? void 0 : length_alt.text) ? new Text_default(length_alt.text) : null;
    this.author = data.shortBylineText && new Author_default(data.shortBylineText, data.ownerBadges);
    this.views = new Text_default(data.viewCountText);
    this.short_view_count = new Text_default(data.shortViewCountText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.menu = parser_default.parseItem(data.menu);
  }
};
__name(GridVideo, "GridVideo");
GridVideo.type = "GridVideo";
var GridVideo_default = GridVideo;

// dist/src/parser/classes/HashtagHeader.js
var HashtagHeader = class extends YTNode {
  constructor(data) {
    super();
    this.hashtag = new Text_default(data.hashtag);
    this.hashtag_info = new Text_default(data.hashtagInfoText);
  }
};
__name(HashtagHeader, "HashtagHeader");
HashtagHeader.type = "HashtagHeader";
var HashtagHeader_default = HashtagHeader;

// dist/src/parser/classes/Heatmap.js
var Heatmap = class extends YTNode {
  constructor(data) {
    super();
    this.max_height_dp = data.maxHeightDp;
    this.min_height_dp = data.minHeightDp;
    this.show_hide_animation_duration_millis = data.showHideAnimationDurationMillis;
    this.heat_markers = parser_default.parseArray(data.heatMarkers);
    this.heat_markers_decorations = parser_default.parseArray(data.heatMarkersDecorations);
  }
};
__name(Heatmap, "Heatmap");
Heatmap.type = "Heatmap";
var Heatmap_default = Heatmap;

// dist/src/parser/classes/HeatMarker.js
var HeatMarker = class extends YTNode {
  constructor(data) {
    super();
    this.time_range_start_millis = data.timeRangeStartMillis;
    this.marker_duration_millis = data.markerDurationMillis;
    this.heat_marker_intensity_score_normalized = data.heatMarkerIntensityScoreNormalized;
  }
};
__name(HeatMarker, "HeatMarker");
HeatMarker.type = "HeatMarker";
var HeatMarker_default = HeatMarker;

// dist/src/parser/classes/HighlightsCarousel.js
var Panel = class {
  constructor(data) {
    if (data.thumbnail) {
      this.thumbnail = {
        image: data.thumbnail.image.sources,
        endpoint: new NavigationEndpoint_default(data.thumbnail.onTap),
        on_long_press_endpoint: new NavigationEndpoint_default(data.thumbnail.onLongPress),
        content_mode: data.thumbnail.contentMode,
        crop_options: data.thumbnail.cropOptions
      };
    }
    this.background_image = {
      image: data.backgroundImage.image.sources,
      gradient_image: data.backgroundImage.gradientImage.sources
    };
    this.strapline = data.strapline;
    this.title = data.title;
    this.description = data.description;
    this.cta = {
      icon_name: data.cta.iconName,
      title: data.cta.title,
      endpoint: new NavigationEndpoint_default(data.cta.onTap),
      accessibility_text: data.cta.accessibilityText,
      state: data.cta.state
    };
    this.text_on_tap_endpoint = new NavigationEndpoint_default(data.textOnTap);
  }
};
__name(Panel, "Panel");
Panel.type = "Panel";
var HighlightsCarousel = class extends YTNode {
  constructor(data) {
    super();
    this.panels = data.highlightsCarousel.panels.map((el) => new Panel(el));
  }
};
__name(HighlightsCarousel, "HighlightsCarousel");
HighlightsCarousel.type = "HighlightsCarousel";
var HighlightsCarousel_default = HighlightsCarousel;

// dist/src/parser/classes/SearchSuggestion.js
var SearchSuggestion = class extends YTNode {
  constructor(data) {
    super();
    this.suggestion = new Text_default(data.suggestion);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.icon_type = data.icon.iconType;
    if (data.serviceEndpoint) {
      this.service_endpoint = new NavigationEndpoint_default(data.serviceEndpoint);
    }
  }
};
__name(SearchSuggestion, "SearchSuggestion");
SearchSuggestion.type = "SearchSuggestion";
var SearchSuggestion_default = SearchSuggestion;

// dist/src/parser/classes/HistorySuggestion.js
var HistorySuggestion = class extends SearchSuggestion_default {
  constructor(data) {
    super(data);
  }
};
__name(HistorySuggestion, "HistorySuggestion");
HistorySuggestion.type = "HistorySuggestion";
var HistorySuggestion_default = HistorySuggestion;

// dist/src/parser/classes/HorizontalCardList.js
var HorizontalCardList = class extends YTNode {
  constructor(data) {
    super();
    this.cards = parser_default.parseArray(data.cards);
    this.header = parser_default.parseItem(data.header);
    this.previous_button = parser_default.parseItem(data.previousButton, Button_default);
    this.next_button = parser_default.parseItem(data.nextButton, Button_default);
  }
};
__name(HorizontalCardList, "HorizontalCardList");
HorizontalCardList.type = "HorizontalCardList";
var HorizontalCardList_default = HorizontalCardList;

// dist/src/parser/classes/HorizontalList.js
var HorizontalList = class extends YTNode {
  constructor(data) {
    super();
    this.visible_item_count = data.visibleItemCount;
    this.items = parser_default.parseArray(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(HorizontalList, "HorizontalList");
HorizontalList.type = "HorizontalList";
var HorizontalList_default = HorizontalList;

// dist/src/parser/classes/IconLink.js
var IconLink = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.icon_type = (_a5 = data.icon) === null || _a5 === void 0 ? void 0 : _a5.iconType;
    if (data.tooltip) {
      this.tooltip = new Text_default(data.tooltip).toString();
    }
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(IconLink, "IconLink");
IconLink.type = "IconLink";
var IconLink_default = IconLink;

// dist/src/parser/classes/SubscriptionNotificationToggleButton.js
var SubscriptionNotificationToggleButton = class extends YTNode {
  constructor(data) {
    super();
    this.states = data.states.map((data2) => ({
      id: data2.stateId,
      next_id: data2.nextStateId,
      state: parser_default.parse(data2.state)
    }));
    this.current_state_id = data.currentStateId;
    this.target_id = data.targetId;
  }
};
__name(SubscriptionNotificationToggleButton, "SubscriptionNotificationToggleButton");
SubscriptionNotificationToggleButton.type = "SubscriptionNotificationToggleButton";
var SubscriptionNotificationToggleButton_default = SubscriptionNotificationToggleButton;

// dist/src/parser/classes/SubscribeButton.js
var SubscribeButton = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.title = new Text_default(data.buttonText);
    this.subscribed = data.subscribed;
    this.enabled = data.enabled;
    this.item_type = data.type;
    this.channel_id = data.channelId;
    this.show_preferences = data.showPreferences;
    this.subscribed_text = new Text_default(data.subscribedButtonText);
    this.unsubscribed_text = new Text_default(data.unsubscribedButtonText);
    this.notification_preference_button = parser_default.parseItem(data.notificationPreferenceButton, SubscriptionNotificationToggleButton_default);
    this.endpoint = new NavigationEndpoint_default(((_a5 = data.serviceEndpoints) === null || _a5 === void 0 ? void 0 : _a5[0]) || ((_b = data.onSubscribeEndpoints) === null || _b === void 0 ? void 0 : _b[0]));
  }
};
__name(SubscribeButton, "SubscribeButton");
SubscribeButton.type = "SubscribeButton";
var SubscribeButton_default = SubscribeButton;

// dist/src/parser/classes/InteractiveTabbedHeader.js
var InteractiveTabbedHeader = class extends YTNode {
  constructor(data) {
    super();
    this.header_type = data.type;
    this.title = new Text_default(data.title);
    this.description = new Text_default(data.description);
    this.metadata = new Text_default(data.metadata);
    this.badges = parser_default.parseArray(data.badges, MetadataBadge_default);
    this.box_art = Thumbnail_default.fromResponse(data.boxArt);
    this.banner = Thumbnail_default.fromResponse(data.banner);
    this.buttons = parser_default.parseArray(data.buttons, [SubscribeButton_default, Button_default]);
    this.auto_generated = new Text_default(data.autoGenerated);
  }
};
__name(InteractiveTabbedHeader, "InteractiveTabbedHeader");
InteractiveTabbedHeader.type = "InteractiveTabbedHeader";
var InteractiveTabbedHeader_default = InteractiveTabbedHeader;

// dist/src/parser/classes/ItemSection.js
var ItemSection = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c;
    super();
    this.header = parser_default.parseItem(data.header);
    this.contents = parser_default.parse(data.contents, true);
    if (data.targetId || data.sectionIdentifier) {
      this.target_id = (data === null || data === void 0 ? void 0 : data.target_id) || (data === null || data === void 0 ? void 0 : data.sectionIdentifier);
    }
    if (data.continuations) {
      this.continuation = (_c = (_b = (_a5 = data.continuations) === null || _a5 === void 0 ? void 0 : _a5.at(0)) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation;
    }
  }
};
__name(ItemSection, "ItemSection");
ItemSection.type = "ItemSection";
var ItemSection_default = ItemSection;

// dist/src/parser/classes/ItemSectionHeader.js
var ItemSectionHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
  }
};
__name(ItemSectionHeader, "ItemSectionHeader");
ItemSectionHeader.type = "ItemSectionHeader";
var ItemSectionHeader_default = ItemSectionHeader;

// dist/src/parser/classes/ItemSectionTab.js
var ItemSectionTab = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.selected = data.selected || false;
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
  }
};
__name(ItemSectionTab, "ItemSectionTab");
ItemSectionTab.type = "Tab";
var ItemSectionTab_default = ItemSectionTab;

// dist/src/parser/classes/ItemSectionTabbedHeader.js
var ItemSectionTabbedHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.tabs = parser_default.parseArray(data.tabs, ItemSectionTab_default);
    if (data.endItems) {
      this.end_items = parser_default.parseArray(data.endItems);
    }
  }
};
__name(ItemSectionTabbedHeader, "ItemSectionTabbedHeader");
ItemSectionTabbedHeader.type = "ItemSectionTabbedHeader";
var ItemSectionTabbedHeader_default = ItemSectionTabbedHeader;

// dist/src/parser/classes/LikeButton.js
var LikeButton = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.target = {
      video_id: data.target.videoId
    };
    this.like_status = data.likeStatus;
    this.likes_allowed = data.likesAllowed;
    if (data.serviceEndpoints) {
      this.endpoints = (_a5 = data.serviceEndpoints) === null || _a5 === void 0 ? void 0 : _a5.map((endpoint) => new NavigationEndpoint_default(endpoint));
    }
  }
};
__name(LikeButton, "LikeButton");
LikeButton.type = "LikeButton";
var LikeButton_default = LikeButton;

// dist/src/parser/classes/LiveChat.js
var LiveChat = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.header = parser_default.parse(data.header);
    this.initial_display_state = data.initialDisplayState;
    this.continuation = (_b = (_a5 = data.continuations[0]) === null || _a5 === void 0 ? void 0 : _a5.reloadContinuationData) === null || _b === void 0 ? void 0 : _b.continuation;
    this.client_messages = {
      reconnect_message: new Text_default(data.clientMessages.reconnectMessage),
      unable_to_reconnect_message: new Text_default(data.clientMessages.unableToReconnectMessage),
      fatal_error: new Text_default(data.clientMessages.fatalError),
      reconnected_message: new Text_default(data.clientMessages.reconnectedMessage),
      generic_error: new Text_default(data.clientMessages.genericError)
    };
    this.is_replay = data.isReplay || false;
  }
};
__name(LiveChat, "LiveChat");
LiveChat.type = "LiveChat";
var LiveChat_default = LiveChat;

// dist/src/parser/classes/livechat/AddBannerToLiveChatCommand.js
var AddBannerToLiveChatCommand = class extends YTNode {
  constructor(data) {
    super();
    this.banner = parser_default.parseItem(data.bannerRenderer);
  }
};
__name(AddBannerToLiveChatCommand, "AddBannerToLiveChatCommand");
AddBannerToLiveChatCommand.type = "AddBannerToLiveChatCommand";
var AddBannerToLiveChatCommand_default = AddBannerToLiveChatCommand;

// dist/src/parser/classes/livechat/AddChatItemAction.js
var AddChatItemAction = class extends YTNode {
  constructor(data) {
    super();
    this.item = parser_default.parseItem(data.item);
    this.client_id = data.clientId || null;
  }
};
__name(AddChatItemAction, "AddChatItemAction");
AddChatItemAction.type = "AddChatItemAction";
var AddChatItemAction_default = AddChatItemAction;

// dist/src/parser/classes/livechat/AddLiveChatTickerItemAction.js
var AddLiveChatTickerItemAction = class extends YTNode {
  constructor(data) {
    super();
    this.item = parser_default.parseItem(data.item);
    this.duration_sec = data.durationSec;
  }
};
__name(AddLiveChatTickerItemAction, "AddLiveChatTickerItemAction");
AddLiveChatTickerItemAction.type = "AddLiveChatTickerItemAction";
var AddLiveChatTickerItemAction_default = AddLiveChatTickerItemAction;

// dist/src/parser/classes/livechat/DimChatItemAction.js
var DimChatItemAction = class extends YTNode {
  constructor(data) {
    super();
    this.client_assigned_id = data.clientAssignedId;
  }
};
__name(DimChatItemAction, "DimChatItemAction");
DimChatItemAction.type = "DimChatItemAction";
var DimChatItemAction_default = DimChatItemAction;

// dist/src/parser/classes/livechat/items/LiveChatAutoModMessage.js
var LiveChatAutoModMessage = class extends YTNode {
  constructor(data) {
    super();
    this.menu_endpoint = new NavigationEndpoint_default(data.contextMenuEndpoint);
    this.moderation_buttons = parser_default.parseArray(data.moderationButtons, [Button_default]);
    this.auto_moderated_item = parser_default.parseItem(data.autoModeratedItem);
    this.header_text = new Text_default(data.headerText);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
    this.id = data.id;
  }
};
__name(LiveChatAutoModMessage, "LiveChatAutoModMessage");
LiveChatAutoModMessage.type = "LiveChatAutoModMessage";
var LiveChatAutoModMessage_default = LiveChatAutoModMessage;

// dist/src/parser/classes/livechat/items/LiveChatBanner.js
var LiveChatBanner = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parseItem(data.header);
    this.contents = parser_default.parseItem(data.contents);
    this.action_id = data.actionId;
    this.viewer_is_creator = data.viewerIsCreator;
    this.target_id = data.targetId;
    this.is_stackable = data.isStackable;
    this.background_type = data.backgroundType;
  }
};
__name(LiveChatBanner, "LiveChatBanner");
LiveChatBanner.type = "LiveChatBanner";
var LiveChatBanner_default = LiveChatBanner;

// dist/src/parser/classes/livechat/items/LiveChatBannerHeader.js
var LiveChatBannerHeader = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.text = new Text_default(data.text).toString();
    this.icon_type = (_a5 = data.icon) === null || _a5 === void 0 ? void 0 : _a5.iconType;
    this.context_menu_button = parser_default.parseItem(data.contextMenuButton);
  }
};
__name(LiveChatBannerHeader, "LiveChatBannerHeader");
LiveChatBannerHeader.type = "LiveChatBannerHeader";
var LiveChatBannerHeader_default = LiveChatBannerHeader;

// dist/src/parser/classes/livechat/items/LiveChatBannerPoll.js
var LiveChatBannerPoll = class extends YTNode {
  constructor(data) {
    super();
    this.poll_question = new Text_default(data.pollQuestion);
    this.author_photo = Thumbnail_default.fromResponse(data.authorPhoto);
    this.choices = data.pollChoices.map((choice) => ({
      option_id: choice.pollOptionId,
      text: new Text_default(choice.text).toString()
    }));
    this.collapsed_state_entity_key = data.collapsedStateEntityKey;
    this.live_chat_poll_state_entity_key = data.liveChatPollStateEntityKey;
    this.context_menu_button = parser_default.parseItem(data.contextMenuButton);
  }
};
__name(LiveChatBannerPoll, "LiveChatBannerPoll");
LiveChatBannerPoll.type = "LiveChatBannerPoll";
var LiveChatBannerPoll_default = LiveChatBannerPoll;

// dist/src/parser/classes/LiveChatAuthorBadge.js
var LiveChatAuthorBadge = class extends MetadataBadge_default {
  constructor(data) {
    super(data);
    this.custom_thumbnail = data.customThumbnail ? Thumbnail_default.fromResponse(data.customThumbnail) : null;
  }
};
__name(LiveChatAuthorBadge, "LiveChatAuthorBadge");
LiveChatAuthorBadge.type = "LiveChatAuthorBadge";
var LiveChatAuthorBadge_default = LiveChatAuthorBadge;

// dist/src/parser/classes/livechat/items/LiveChatMembershipItem.js
var LiveChatMembershipItem = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
    this.header_subtext = new Text_default(data.headerSubtext);
    this.author = {
      id: data.authorExternalChannelId,
      name: new Text_default(data === null || data === void 0 ? void 0 : data.authorName),
      thumbnails: Thumbnail_default.fromResponse(data.authorPhoto),
      badges: observe([]).as(LiveChatAuthorBadge_default, MetadataBadge_default),
      is_moderator: null,
      is_verified: null,
      is_verified_artist: null
    };
    const badges = parser_default.parseArray(data.authorBadges);
    this.author.badges = badges;
    this.author.is_moderator = badges ? badges.some((badge) => badge.icon_type == "MODERATOR") : null;
    this.author.is_verified = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED") : null;
    this.author.is_verified_artist = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST") : null;
    this.menu_endpoint = new NavigationEndpoint_default(data.contextMenuEndpoint);
  }
};
__name(LiveChatMembershipItem, "LiveChatMembershipItem");
LiveChatMembershipItem.type = "LiveChatMembershipItem";
var LiveChatMembershipItem_default = LiveChatMembershipItem;

// dist/src/parser/classes/livechat/items/LiveChatPaidMessage.js
var LiveChatPaidMessage = class extends YTNode {
  constructor(data) {
    super();
    this.message = new Text_default(data.message);
    this.author = {
      id: data.authorExternalChannelId,
      name: new Text_default(data.authorName),
      thumbnails: Thumbnail_default.fromResponse(data.authorPhoto),
      badges: observe([]).as(LiveChatAuthorBadge_default, MetadataBadge_default),
      is_moderator: null,
      is_verified: null,
      is_verified_artist: null
    };
    const badges = parser_default.parseArray(data.authorBadges, [MetadataBadge_default, LiveChatAuthorBadge_default]);
    this.author.badges = badges;
    this.author.is_moderator = badges ? badges.some((badge) => badge.icon_type == "MODERATOR") : null;
    this.author.is_verified = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED") : null;
    this.author.is_verified_artist = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST") : null;
    this.header_background_color = data.headerBackgroundColor;
    this.header_text_color = data.headerTextColor;
    this.body_background_color = data.bodyBackgroundColor;
    this.body_text_color = data.bodyTextColor;
    this.purchase_amount = new Text_default(data.purchaseAmountText).toString();
    this.menu_endpoint = new NavigationEndpoint_default(data.contextMenuEndpoint);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
    this.timestamp_text = new Text_default(data.timestampText).toString();
    this.id = data.id;
  }
};
__name(LiveChatPaidMessage, "LiveChatPaidMessage");
LiveChatPaidMessage.type = "LiveChatPaidMessage";
var LiveChatPaidMessage_default = LiveChatPaidMessage;

// dist/src/parser/classes/livechat/items/LiveChatPaidSticker.js
var LiveChatPaidSticker = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.author = {
      id: data.authorExternalChannelId,
      name: new Text_default(data.authorName),
      thumbnails: Thumbnail_default.fromResponse(data.authorPhoto),
      badges: observe([]).as(LiveChatAuthorBadge_default, MetadataBadge_default),
      is_moderator: null,
      is_verified: null,
      is_verified_artist: null
    };
    const badges = parser_default.parseArray(data.authorBadges, [MetadataBadge_default, LiveChatAuthorBadge_default]);
    this.author.badges = badges;
    this.author.is_moderator = badges ? badges.some((badge) => badge.icon_type == "MODERATOR") : null;
    this.author.is_verified = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED") : null;
    this.author.is_verified_artist = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST") : null;
    this.money_chip_background_color = data.moneyChipBackgroundColor;
    this.money_chip_text_color = data.moneyChipTextColor;
    this.background_color = data.backgroundColor;
    this.author_name_text_color = data.authorNameTextColor;
    this.sticker = Thumbnail_default.fromResponse(data.sticker);
    this.purchase_amount = new Text_default(data.purchaseAmountText).toString();
    this.menu_endpoint = new NavigationEndpoint_default(data.contextMenuEndpoint);
    this.context_menu = this.menu_endpoint;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
  }
};
__name(LiveChatPaidSticker, "LiveChatPaidSticker");
LiveChatPaidSticker.type = "LiveChatPaidSticker";
var LiveChatPaidSticker_default = LiveChatPaidSticker;

// dist/src/parser/classes/livechat/items/LiveChatPlaceholderItem.js
var LiveChatPlaceholderItem = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
  }
};
__name(LiveChatPlaceholderItem, "LiveChatPlaceholderItem");
LiveChatPlaceholderItem.type = "LiveChatPlaceholderItem";
var LiveChatPlaceholderItem_default = LiveChatPlaceholderItem;

// dist/src/parser/classes/livechat/items/LiveChatProductItem.js
var LiveChatProductItem = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.accessibility_title = data.accessibilityTitle;
    this.thumbnail = Thumbnail_default.fromResponse(data.thumbnail);
    this.price = data.price;
    this.vendor_name = data.vendorName;
    this.from_vendor_text = data.fromVendorText;
    this.information_button = parser_default.parseItem(data.informationButton);
    this.endpoint = new NavigationEndpoint_default(data.onClickCommand);
    this.creator_message = data.creatorMessage;
    this.creator_name = data.creatorName;
    this.author_photo = Thumbnail_default.fromResponse(data.authorPhoto);
    this.information_dialog = parser_default.parseItem(data.informationDialog);
    this.is_verified = data.isVerified;
    this.creator_custom_message = new Text_default(data.creatorCustomMessage);
  }
};
__name(LiveChatProductItem, "LiveChatProductItem");
LiveChatProductItem.type = "LiveChatProductItem";
var LiveChatProductItem_default = LiveChatProductItem;

// dist/src/parser/classes/livechat/items/LiveChatRestrictedParticipation.js
var LiveChatRestrictedParticipation = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.message = new Text_default(data.message);
    this.icon_type = (_a5 = data === null || data === void 0 ? void 0 : data.icon) === null || _a5 === void 0 ? void 0 : _a5.iconType;
  }
};
__name(LiveChatRestrictedParticipation, "LiveChatRestrictedParticipation");
var LiveChatRestrictedParticipation_default = LiveChatRestrictedParticipation;

// dist/src/parser/classes/livechat/items/LiveChatTextMessage.js
var LiveChatTextMessage = class extends YTNode {
  constructor(data) {
    super();
    this.message = new Text_default(data.message);
    this.author = {
      id: data.authorExternalChannelId,
      name: new Text_default(data.authorName),
      thumbnails: Thumbnail_default.fromResponse(data.authorPhoto),
      badges: observe([]).as(LiveChatAuthorBadge_default, MetadataBadge_default),
      is_moderator: null,
      is_verified: null,
      is_verified_artist: null
    };
    const badges = parser_default.parseArray(data.authorBadges, [MetadataBadge_default, LiveChatAuthorBadge_default]);
    this.author.badges = badges;
    this.author.is_moderator = badges ? badges.some((badge) => badge.icon_type == "MODERATOR") : null;
    this.author.is_verified = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED") : null;
    this.author.is_verified_artist = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST") : null;
    this.menu_endpoint = new NavigationEndpoint_default(data.contextMenuEndpoint);
    this.inline_action_buttons = parser_default.parseArray(data.inlineActionButtons, [Button_default]);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
    this.id = data.id;
  }
};
__name(LiveChatTextMessage, "LiveChatTextMessage");
LiveChatTextMessage.type = "LiveChatTextMessage";
var LiveChatTextMessage_default = LiveChatTextMessage;

// dist/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.js
var LiveChatTickerPaidMessageItem = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.author = {
      id: data.authorExternalChannelId,
      name: new Text_default(data === null || data === void 0 ? void 0 : data.authorName),
      thumbnails: Thumbnail_default.fromResponse(data.authorPhoto),
      badges: observe([]).as(LiveChatAuthorBadge_default, MetadataBadge_default),
      is_moderator: null,
      is_verified: null,
      is_verified_artist: null
    };
    const badges = parser_default.parseArray(data.authorBadges, [MetadataBadge_default, LiveChatAuthorBadge_default]);
    this.author.badges = badges;
    this.author.is_moderator = badges ? badges.some((badge) => badge.icon_type == "MODERATOR") : null;
    this.author.is_verified = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED") : null;
    this.author.is_verified_artist = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST") : null;
    this.amount = new Text_default(data.amount);
    this.duration_sec = data.durationSec;
    this.full_duration_sec = data.fullDurationSec;
    this.show_item = parser_default.parse((_b = (_a5 = data.showItemEndpoint) === null || _a5 === void 0 ? void 0 : _a5.showLiveChatItemEndpoint) === null || _b === void 0 ? void 0 : _b.renderer);
    this.show_item_endpoint = new NavigationEndpoint_default(data.showItemEndpoint);
    this.id = data.id;
  }
};
__name(LiveChatTickerPaidMessageItem, "LiveChatTickerPaidMessageItem");
LiveChatTickerPaidMessageItem.type = "LiveChatTickerPaidMessageItem";
var LiveChatTickerPaidMessageItem_default = LiveChatTickerPaidMessageItem;

// dist/src/parser/classes/livechat/items/LiveChatTickerPaidStickerItem.js
var LiveChatTickerPaidStickerItem = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.author = {
      id: data.authorExternalChannelId,
      name: new Text_default(data === null || data === void 0 ? void 0 : data.authorName),
      thumbnails: Thumbnail_default.fromResponse(data.authorPhoto),
      badges: observe([]).as(LiveChatAuthorBadge_default, MetadataBadge_default),
      is_moderator: null,
      is_verified: null,
      is_verified_artist: null
    };
    const badges = parser_default.parseArray(data.authorBadges, [MetadataBadge_default, LiveChatAuthorBadge_default]);
    this.author.badges = badges;
    this.author.is_moderator = badges ? badges.some((badge) => badge.icon_type == "MODERATOR") : null;
    this.author.is_verified = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED") : null;
    this.author.is_verified_artist = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST") : null;
    this.amount = new Text_default(data.amount);
    this.duration_sec = data.durationSec;
    this.full_duration_sec = data.fullDurationSec;
    this.show_item = parser_default.parseItem((_b = (_a5 = data.showItemEndpoint) === null || _a5 === void 0 ? void 0 : _a5.showLiveChatItemEndpoint) === null || _b === void 0 ? void 0 : _b.renderer);
    this.show_item_endpoint = new NavigationEndpoint_default(data.showItemEndpoint);
    this.id = data.id;
  }
};
__name(LiveChatTickerPaidStickerItem, "LiveChatTickerPaidStickerItem");
LiveChatTickerPaidStickerItem.type = "LiveChatTickerPaidStickerItem";
var LiveChatTickerPaidStickerItem_default = LiveChatTickerPaidStickerItem;

// dist/src/parser/classes/livechat/items/LiveChatTickerSponsorItem.js
var LiveChatTickerSponsorItem = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.detail = new Text_default(data.detailText);
    this.author = {
      id: data.authorExternalChannelId,
      name: new Text_default(data === null || data === void 0 ? void 0 : data.authorName),
      thumbnails: Thumbnail_default.fromResponse(data.sponsorPhoto),
      badges: observe([]).as(LiveChatAuthorBadge_default, MetadataBadge_default),
      is_moderator: null,
      is_verified: null,
      is_verified_artist: null
    };
    const badges = parser_default.parseArray(data.authorBadges, [MetadataBadge_default, LiveChatAuthorBadge_default]);
    this.author.badges = badges;
    this.author.is_moderator = badges ? badges.some((badge) => badge.icon_type == "MODERATOR") : null;
    this.author.is_verified = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED") : null;
    this.author.is_verified_artist = badges ? badges.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST") : null;
    this.duration_sec = data.durationSec;
  }
};
__name(LiveChatTickerSponsorItem, "LiveChatTickerSponsorItem");
LiveChatTickerSponsorItem.type = "LiveChatTickerSponsorItem";
var LiveChatTickerSponsorItem_default = LiveChatTickerSponsorItem;

// dist/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.js
var LiveChatViewerEngagementMessage = class extends LiveChatTextMessage_default {
  constructor(data) {
    super(data);
    delete this.author;
    delete this.menu_endpoint;
    this.icon_type = data.icon.iconType;
    this.action_button = parser_default.parseItem(data.actionButton);
  }
};
__name(LiveChatViewerEngagementMessage, "LiveChatViewerEngagementMessage");
LiveChatViewerEngagementMessage.type = "LiveChatViewerEngagementMessage";
var LiveChatViewerEngagementMessage_default = LiveChatViewerEngagementMessage;

// dist/src/parser/classes/livechat/items/PollHeader.js
var PollHeader = class extends YTNode {
  constructor(data) {
    super();
    this.poll_question = new Text_default(data.pollQuestion);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.metadata = new Text_default(data.metadataText);
    this.live_chat_poll_type = data.liveChatPollType;
    this.context_menu_button = parser_default.parseItem(data.contextMenuButton);
  }
};
__name(PollHeader, "PollHeader");
PollHeader.type = "PollHeader";
var PollHeader_default = PollHeader;

// dist/src/parser/classes/livechat/LiveChatActionPanel.js
var LiveChatActionPanel = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.contents = parser_default.parse(data.contents);
    this.target_id = data.targetId;
  }
};
__name(LiveChatActionPanel, "LiveChatActionPanel");
LiveChatActionPanel.type = "LiveChatActionPanel";
var LiveChatActionPanel_default = LiveChatActionPanel;

// dist/src/parser/classes/livechat/MarkChatItemAsDeletedAction.js
var MarkChatItemAsDeletedAction = class extends YTNode {
  constructor(data) {
    super();
    this.deleted_state_message = new Text_default(data.deletedStateMessage);
    this.target_item_id = data.targetItemId;
  }
};
__name(MarkChatItemAsDeletedAction, "MarkChatItemAsDeletedAction");
MarkChatItemAsDeletedAction.type = "MarkChatItemAsDeletedAction";
var MarkChatItemAsDeletedAction_default = MarkChatItemAsDeletedAction;

// dist/src/parser/classes/livechat/MarkChatItemsByAuthorAsDeletedAction.js
var MarkChatItemsByAuthorAsDeletedAction = class extends YTNode {
  constructor(data) {
    super();
    this.deleted_state_message = new Text_default(data.deletedStateMessage);
    this.channel_id = data.externalChannelId;
  }
};
__name(MarkChatItemsByAuthorAsDeletedAction, "MarkChatItemsByAuthorAsDeletedAction");
MarkChatItemsByAuthorAsDeletedAction.type = "MarkChatItemsByAuthorAsDeletedAction";
var MarkChatItemsByAuthorAsDeletedAction_default = MarkChatItemsByAuthorAsDeletedAction;

// dist/src/parser/classes/livechat/RemoveBannerForLiveChatCommand.js
var RemoveBannerForLiveChatCommand = class extends YTNode {
  constructor(data) {
    super();
    this.target_action_id = data.targetActionId;
  }
};
__name(RemoveBannerForLiveChatCommand, "RemoveBannerForLiveChatCommand");
RemoveBannerForLiveChatCommand.type = "RemoveBannerForLiveChatCommand";
var RemoveBannerForLiveChatCommand_default = RemoveBannerForLiveChatCommand;

// dist/src/parser/classes/livechat/RemoveChatItemAction.js
var RemoveChatItemAction = class extends YTNode {
  constructor(data) {
    super();
    this.target_item_id = data.targetItemId;
  }
};
__name(RemoveChatItemAction, "RemoveChatItemAction");
RemoveChatItemAction.type = "RemoveChatItemAction";
var RemoveChatItemAction_default = RemoveChatItemAction;

// dist/src/parser/classes/livechat/RemoveChatItemByAuthorAction.js
var RemoveChatItemByAuthorAction = class extends YTNode {
  constructor(data) {
    super();
    this.external_channel_id = data.externalChannelId;
  }
};
__name(RemoveChatItemByAuthorAction, "RemoveChatItemByAuthorAction");
RemoveChatItemByAuthorAction.type = "RemoveChatItemByAuthorAction";
var RemoveChatItemByAuthorAction_default = RemoveChatItemByAuthorAction;

// dist/src/parser/classes/livechat/ReplaceChatItemAction.js
var ReplaceChatItemAction = class extends YTNode {
  constructor(data) {
    super();
    this.target_item_id = data.targetItemId;
    this.replacement_item = parser_default.parseItem(data.replacementItem);
  }
};
__name(ReplaceChatItemAction, "ReplaceChatItemAction");
ReplaceChatItemAction.type = "ReplaceChatItemAction";
var ReplaceChatItemAction_default = ReplaceChatItemAction;

// dist/src/parser/classes/livechat/ReplayChatItemAction.js
var ReplayChatItemAction = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.actions = parser_default.parseArray((_a5 = data.actions) === null || _a5 === void 0 ? void 0 : _a5.map((action) => {
      delete action.clickTrackingParams;
      return action;
    }));
    this.video_offset_time_msec = data.videoOffsetTimeMsec;
  }
};
__name(ReplayChatItemAction, "ReplayChatItemAction");
ReplayChatItemAction.type = "ReplayChatItemAction";
var ReplayChatItemAction_default = ReplayChatItemAction;

// dist/src/parser/classes/livechat/ShowLiveChatActionPanelAction.js
var ShowLiveChatActionPanelAction = class extends YTNode {
  constructor(data) {
    super();
    this.panel_to_show = parser_default.parseItem(data.panelToShow, LiveChatActionPanel_default);
  }
};
__name(ShowLiveChatActionPanelAction, "ShowLiveChatActionPanelAction");
ShowLiveChatActionPanelAction.type = "ShowLiveChatActionPanelAction";
var ShowLiveChatActionPanelAction_default = ShowLiveChatActionPanelAction;

// dist/src/parser/classes/livechat/ShowLiveChatDialogAction.js
var ShowLiveChatDialogAction = class extends YTNode {
  constructor(data) {
    super();
    this.dialog = parser_default.parseItem(data.dialog);
  }
};
__name(ShowLiveChatDialogAction, "ShowLiveChatDialogAction");
ShowLiveChatDialogAction.type = "ShowLiveChatDialogAction";
var ShowLiveChatDialogAction_default = ShowLiveChatDialogAction;

// dist/src/parser/classes/livechat/ShowLiveChatTooltipCommand.js
var ShowLiveChatTooltipCommand = class extends YTNode {
  constructor(data) {
    super();
    this.tooltip = parser_default.parseItem(data.tooltip);
  }
};
__name(ShowLiveChatTooltipCommand, "ShowLiveChatTooltipCommand");
ShowLiveChatTooltipCommand.type = "ShowLiveChatTooltipCommand";
var ShowLiveChatTooltipCommand_default = ShowLiveChatTooltipCommand;

// dist/src/parser/classes/livechat/UpdateDateTextAction.js
var UpdateDateTextAction = class extends YTNode {
  constructor(data) {
    super();
    this.date_text = new Text_default(data.dateText).toString();
  }
};
__name(UpdateDateTextAction, "UpdateDateTextAction");
UpdateDateTextAction.type = "UpdateDateTextAction";
var UpdateDateTextAction_default = UpdateDateTextAction;

// dist/src/parser/classes/livechat/UpdateDescriptionAction.js
var UpdateDescriptionAction = class extends YTNode {
  constructor(data) {
    super();
    this.description = new Text_default(data.description);
  }
};
__name(UpdateDescriptionAction, "UpdateDescriptionAction");
UpdateDescriptionAction.type = "UpdateDescriptionAction";
var UpdateDescriptionAction_default = UpdateDescriptionAction;

// dist/src/parser/classes/livechat/UpdateLiveChatPollAction.js
var UpdateLiveChatPollAction = class extends YTNode {
  constructor(data) {
    super();
    this.poll_to_update = parser_default.parseItem(data.pollToUpdate);
  }
};
__name(UpdateLiveChatPollAction, "UpdateLiveChatPollAction");
UpdateLiveChatPollAction.type = "UpdateLiveChatPollAction";
var UpdateLiveChatPollAction_default = UpdateLiveChatPollAction;

// dist/src/parser/classes/livechat/UpdateTitleAction.js
var UpdateTitleAction = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
  }
};
__name(UpdateTitleAction, "UpdateTitleAction");
UpdateTitleAction.type = "UpdateTitleAction";
var UpdateTitleAction_default = UpdateTitleAction;

// dist/src/parser/classes/livechat/UpdateToggleButtonTextAction.js
var UpdateToggleButtonTextAction = class extends YTNode {
  constructor(data) {
    super();
    this.default_text = new Text_default(data.defaultText).toString();
    this.toggled_text = new Text_default(data.toggledText).toString();
    this.button_id = data.buttonId;
  }
};
__name(UpdateToggleButtonTextAction, "UpdateToggleButtonTextAction");
UpdateToggleButtonTextAction.type = "UpdateToggleButtonTextAction";
var UpdateToggleButtonTextAction_default = UpdateToggleButtonTextAction;

// dist/src/parser/classes/livechat/UpdateViewershipAction.js
var UpdateViewershipAction = class extends YTNode {
  constructor(data) {
    super();
    const view_count_renderer = data.viewCount.videoViewCountRenderer;
    this.view_count = new Text_default(view_count_renderer.viewCount);
    this.extra_short_view_count = new Text_default(view_count_renderer.extraShortViewCount);
    this.is_live = view_count_renderer.isLive;
  }
};
__name(UpdateViewershipAction, "UpdateViewershipAction");
UpdateViewershipAction.type = "UpdateViewershipAction";
var UpdateViewershipAction_default = UpdateViewershipAction;

// dist/src/parser/classes/LiveChatDialog.js
var LiveChatDialog = class extends YTNode {
  constructor(data) {
    super();
    this.confirm_button = parser_default.parseItem(data.confirmButton, Button_default);
    this.dialog_messages = data.dialogMessages.map((el) => new Text_default(el));
  }
};
__name(LiveChatDialog, "LiveChatDialog");
LiveChatDialog.type = "LiveChatDialog";
var LiveChatDialog_default = LiveChatDialog;

// dist/src/parser/classes/LiveChatHeader.js
var LiveChatHeader = class extends YTNode {
  constructor(data) {
    super();
    this.overflow_menu = parser_default.parseItem(data.overflowMenu);
    this.collapse_button = parser_default.parseItem(data.collapseButton);
    this.view_selector = parser_default.parseItem(data.viewSelector);
  }
};
__name(LiveChatHeader, "LiveChatHeader");
LiveChatHeader.type = "LiveChatHeader";
var LiveChatHeader_default = LiveChatHeader;

// dist/src/parser/classes/LiveChatItemList.js
var LiveChatItemList = class extends YTNode {
  constructor(data) {
    super();
    this.max_items_to_display = data.maxItemsToDisplay;
    this.more_comments_below_button = parser_default.parseItem(data.moreCommentsBelowButton);
  }
};
__name(LiveChatItemList, "LiveChatItemList");
LiveChatItemList.type = "LiveChatItemList";
var LiveChatItemList_default = LiveChatItemList;

// dist/src/parser/classes/LiveChatMessageInput.js
var LiveChatMessageInput = class extends YTNode {
  constructor(data) {
    super();
    this.author_name = new Text_default(data.authorName);
    this.author_photo = Thumbnail_default.fromResponse(data.authorPhoto);
    this.send_button = parser_default.parseItem(data.sendButton);
    this.target_id = data.targetId;
  }
};
__name(LiveChatMessageInput, "LiveChatMessageInput");
LiveChatMessageInput.type = "LiveChatMessageInput";
var LiveChatMessageInput_default = LiveChatMessageInput;

// dist/src/parser/classes/LiveChatParticipant.js
var LiveChatParticipant = class extends YTNode {
  constructor(data) {
    super();
    this.name = new Text_default(data.authorName);
    this.photo = Thumbnail_default.fromResponse(data.authorPhoto);
    this.badges = parser_default.parse(data.authorBadges);
  }
};
__name(LiveChatParticipant, "LiveChatParticipant");
LiveChatParticipant.type = "LiveChatParticipant";
var LiveChatParticipant_default = LiveChatParticipant;

// dist/src/parser/classes/LiveChatParticipantsList.js
var LiveChatParticipantsList = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.participants = parser_default.parseArray(data.participants);
  }
};
__name(LiveChatParticipantsList, "LiveChatParticipantsList");
LiveChatParticipantsList.type = "LiveChatParticipantsList";
var LiveChatParticipantsList_default = LiveChatParticipantsList;

// dist/src/parser/classes/MacroMarkersListItem.js
var MacroMarkersListItem = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.time_description = new Text_default(data.timeDescription);
    this.thumbnail = Thumbnail_default.fromResponse(data.thumbnail);
    this.on_tap_endpoint = new NavigationEndpoint_default(data.onTap);
    this.layout = data.layout;
    this.is_highlighted = data.isHighlighted;
  }
};
__name(MacroMarkersListItem, "MacroMarkersListItem");
MacroMarkersListItem.type = "MacroMarkersListItem";
var MacroMarkersListItem_default = MacroMarkersListItem;

// dist/src/parser/classes/menus/Menu.js
var Menu = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.items = parser_default.parseArray(data.items);
    this.top_level_buttons = parser_default.parseArray(data.topLevelButtons);
    this.label = ((_b = (_a5 = data.accessibility) === null || _a5 === void 0 ? void 0 : _a5.accessibilityData) === null || _b === void 0 ? void 0 : _b.label) || null;
  }
  get contents() {
    return this.items;
  }
};
__name(Menu, "Menu");
Menu.type = "Menu";
var Menu_default = Menu;

// dist/src/parser/classes/menus/MenuNavigationItem.js
var MenuNavigationItem = class extends Button_default {
  constructor(data) {
    super(data);
  }
};
__name(MenuNavigationItem, "MenuNavigationItem");
MenuNavigationItem.type = "MenuNavigationItem";
var MenuNavigationItem_default = MenuNavigationItem;

// dist/src/parser/classes/menus/MenuServiceItem.js
var MenuServiceItem = class extends Button_default {
  constructor(data) {
    super(data);
  }
};
__name(MenuServiceItem, "MenuServiceItem");
MenuServiceItem.type = "MenuServiceItem";
var MenuServiceItem_default = MenuServiceItem;

// dist/src/parser/classes/menus/MenuServiceItemDownload.js
var MenuServiceItemDownload = class extends YTNode {
  constructor(data) {
    super();
    this.has_separator = data.hasSeparator;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint || data.serviceEndpoint);
  }
};
__name(MenuServiceItemDownload, "MenuServiceItemDownload");
MenuServiceItemDownload.type = "MenuServiceItemDownload";
var MenuServiceItemDownload_default = MenuServiceItemDownload;

// dist/src/parser/classes/menus/MultiPageMenu.js
var MultiPageMenu = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parse(data.header);
    this.sections = parser_default.parse(data.sections);
    this.style = data.style;
  }
};
__name(MultiPageMenu, "MultiPageMenu");
MultiPageMenu.type = "MultiPageMenu";
var MultiPageMenu_default = MultiPageMenu;

// dist/src/parser/classes/menus/MultiPageMenuNotificationSection.js
var MultiPageMenuNotificationSection = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parse(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(MultiPageMenuNotificationSection, "MultiPageMenuNotificationSection");
MultiPageMenuNotificationSection.type = "MultiPageMenuNotificationSection";
var MultiPageMenuNotificationSection_default = MultiPageMenuNotificationSection;

// dist/src/parser/classes/menus/MusicMenuItemDivider.js
var MusicMenuItemDivider = class extends YTNode {
  constructor(data) {
    super();
  }
};
__name(MusicMenuItemDivider, "MusicMenuItemDivider");
MusicMenuItemDivider.type = "MusicMenuItemDivider";
var MusicMenuItemDivider_default = MusicMenuItemDivider;

// dist/src/parser/classes/menus/MusicMultiSelectMenu.js
var MusicMultiSelectMenu = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.title = new Text_default((_a5 = data.title.musicMenuTitleRenderer) === null || _a5 === void 0 ? void 0 : _a5.primaryText).text;
    this.options = parser_default.parseArray(data.options, [MusicMultiSelectMenuItem_default, MusicMenuItemDivider_default]);
  }
};
__name(MusicMultiSelectMenu, "MusicMultiSelectMenu");
MusicMultiSelectMenu.type = "MusicMultiSelectMenu";
var MusicMultiSelectMenu_default = MusicMultiSelectMenu;

// dist/src/parser/classes/menus/SimpleMenuHeader.js
var SimpleMenuHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.buttons = parser_default.parse(data.buttons);
  }
};
__name(SimpleMenuHeader, "SimpleMenuHeader");
SimpleMenuHeader.type = "SimpleMenuHeader";
var SimpleMenuHeader_default = SimpleMenuHeader;

// dist/src/parser/classes/MerchandiseItem.js
var MerchandiseItem = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.description = data.description;
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.price = data.price;
    this.vendor_name = data.vendorName;
    this.button_text = data.buttonText;
    this.button_accessibility_text = data.buttonAccessibilityText;
    this.from_vendor_text = data.fromVendorText;
    this.additional_fees_text = data.additionalFeesText;
    this.region_format = data.regionFormat;
    this.endpoint = new NavigationEndpoint_default(data.buttonCommand);
  }
};
__name(MerchandiseItem, "MerchandiseItem");
MerchandiseItem.type = "MerchandiseItem";
var MerchandiseItem_default = MerchandiseItem;

// dist/src/parser/classes/MerchandiseShelf.js
var MerchandiseShelf = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.menu = parser_default.parse(data.actionButton);
    this.items = parser_default.parse(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(MerchandiseShelf, "MerchandiseShelf");
MerchandiseShelf.type = "MerchandiseShelf";
var MerchandiseShelf_default = MerchandiseShelf;

// dist/src/parser/classes/Message.js
var Message = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text_default(data.text).toString();
  }
};
__name(Message, "Message");
Message.type = "Message";
var Message_default = Message;

// dist/src/parser/classes/MetadataRow.js
var MetadataRow = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.contents = data.contents.map((content) => new Text_default(content));
  }
};
__name(MetadataRow, "MetadataRow");
MetadataRow.type = "MetadataRow";
var MetadataRow_default = MetadataRow;

// dist/src/parser/classes/MetadataRowContainer.js
var MetadataRowContainer = class extends YTNode {
  constructor(data) {
    super();
    this.rows = parser_default.parseArray(data.rows);
    this.collapsed_item_count = data.collapsedItemCount;
  }
};
__name(MetadataRowContainer, "MetadataRowContainer");
MetadataRowContainer.type = "MetadataRowContainer";
var MetadataRowContainer_default = MetadataRowContainer;

// dist/src/parser/classes/MetadataRowHeader.js
var MetadataRowHeader = class extends YTNode {
  constructor(data) {
    super();
    this.content = new Text_default(data.content);
    this.has_divider_line = data.hasDividerLine;
  }
};
__name(MetadataRowHeader, "MetadataRowHeader");
MetadataRowHeader.type = "MetadataRowHeader";
var MetadataRowHeader_default = MetadataRowHeader;

// dist/src/parser/classes/MetadataScreen.js
var MetadataScreen = class extends YTNode {
  constructor(data) {
    super();
    this.section_list = parser_default.parseItem(data);
  }
};
__name(MetadataScreen, "MetadataScreen");
MetadataScreen.type = "MetadataScreen";
var MetadataScreen_default = MetadataScreen;

// dist/src/parser/classes/MicroformatData.js
var MicroformatData = class extends YTNode {
  constructor(data) {
    super();
    this.url_canonical = data.urlCanonical;
    this.title = data.title;
    this.description = data.description;
    this.thumbnail = data.thumbnail ? Thumbnail_default.fromResponse(data.thumbnail) : null;
    this.site_name = data.siteName;
    this.app_name = data.appName;
    this.android_package = data.androidPackage;
    this.ios_app_store_id = data.iosAppStoreId;
    this.ios_app_arguments = data.iosAppArguments;
    this.og_type = data.ogType;
    this.url_applinks_web = data.urlApplinksWeb;
    this.url_applinks_ios = data.urlApplinksIos;
    this.url_applinks_android = data.urlApplinksAndroid;
    this.url_twitter_ios = data.urlTwitterIos;
    this.url_twitter_android = data.urlTwitterAndroid;
    this.twitter_card_type = data.twitterCardType;
    this.twitter_site_handle = data.twitterSiteHandle;
    this.schema_dot_org_type = data.schemaDotOrgType;
    this.noindex = data.noindex;
    this.is_unlisted = data.unlisted;
    this.is_family_safe = data.familySafe;
    this.tags = data.tags;
    this.available_countries = data.availableCountries;
  }
};
__name(MicroformatData, "MicroformatData");
MicroformatData.type = "MicroformatData";
var MicroformatData_default = MicroformatData;

// dist/src/parser/classes/Mix.js
var Mix = class extends Playlist_default {
  constructor(data) {
    super(data);
  }
};
__name(Mix, "Mix");
Mix.type = "Mix";
var Mix_default = Mix;

// dist/src/parser/classes/Movie.js
var Movie = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c;
    super();
    const overlay_time_status = ((_a5 = data.thumbnailOverlays.find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a5 === void 0 ? void 0 : _a5.thumbnailOverlayTimeStatusRenderer.text) || "N/A";
    this.id = data.videoId;
    this.title = new Text_default(data.title);
    this.description_snippet = data.descriptionSnippet ? new Text_default(data.descriptionSnippet) : null;
    this.top_metadata_items = new Text_default(data.topMetadataItems);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.thumbnail_overlays = parser_default.parse(data.thumbnailOverlays);
    this.author = new Author_default(data.longBylineText, data.ownerBadges, (_c = (_b = data.channelThumbnailSupportedRenderers) === null || _b === void 0 ? void 0 : _b.channelThumbnailWithLinkRenderer) === null || _c === void 0 ? void 0 : _c.thumbnail);
    this.duration = {
      text: data.lengthText ? new Text_default(data.lengthText).text : new Text_default(overlay_time_status).text,
      seconds: timeToSeconds(data.lengthText ? new Text_default(data.lengthText).text : new Text_default(overlay_time_status).text)
    };
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.badges = parser_default.parse(data.badges);
    this.use_vertical_poster = data.useVerticalPoster;
    this.show_action_menu = data.showActionMenu;
    this.menu = parser_default.parse(data.menu);
  }
};
__name(Movie, "Movie");
Movie.type = "Movie";
var Movie_default = Movie;

// dist/src/parser/classes/MovingThumbnail.js
var MovingThumbnail = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    return (_a5 = data.movingThumbnailDetails) === null || _a5 === void 0 ? void 0 : _a5.thumbnails.map((thumbnail) => new Thumbnail_default(thumbnail)).sort((a, b) => b.width - a.width);
  }
};
__name(MovingThumbnail, "MovingThumbnail");
MovingThumbnail.type = "MovingThumbnail";
var MovingThumbnail_default = MovingThumbnail;

// dist/src/parser/classes/MultiMarkersPlayerBar.js
var Marker = class extends YTNode {
  constructor(data) {
    super();
    this.marker_key = data.key;
    this.value = {};
    if (data.value.heatmap) {
      this.value.heatmap = parser_default.parseItem(data.value.heatmap);
    }
    if (data.value.chapters) {
      this.value.chapters = parser_default.parseArray(data.value.chapters);
    }
  }
};
__name(Marker, "Marker");
Marker.type = "Marker";
var MultiMarkersPlayerBar = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.markers_map = observe((_a5 = data.markersMap) === null || _a5 === void 0 ? void 0 : _a5.map((marker) => new Marker(marker)));
  }
};
__name(MultiMarkersPlayerBar, "MultiMarkersPlayerBar");
MultiMarkersPlayerBar.type = "MultiMarkersPlayerBar";
var MultiMarkersPlayerBar_default = MultiMarkersPlayerBar;

// dist/src/parser/classes/MusicPlayButton.js
var MusicPlayButton = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.endpoint = new NavigationEndpoint_default(data.playNavigationEndpoint);
    this.play_icon_type = data.playIcon.iconType;
    this.pause_icon_type = data.pauseIcon.iconType;
    if (data.accessibilityPlayData) {
      this.play_label = data.accessibilityPlayData.accessibilityData.label;
    }
    if (data.accessibilityPlayData) {
      this.pause_label = (_a5 = data.accessibilityPauseData) === null || _a5 === void 0 ? void 0 : _a5.accessibilityData.label;
    }
    this.icon_color = data.iconColor;
  }
};
__name(MusicPlayButton, "MusicPlayButton");
MusicPlayButton.type = "MusicPlayButton";
var MusicPlayButton_default = MusicPlayButton;

// dist/src/parser/classes/MusicItemThumbnailOverlay.js
var MusicItemThumbnailOverlay = class extends YTNode {
  constructor(data) {
    super();
    this.content = parser_default.parseItem(data.content, MusicPlayButton_default);
    this.content_position = data.contentPosition;
    this.display_style = data.displayStyle;
  }
};
__name(MusicItemThumbnailOverlay, "MusicItemThumbnailOverlay");
MusicItemThumbnailOverlay.type = "MusicItemThumbnailOverlay";
var MusicItemThumbnailOverlay_default = MusicItemThumbnailOverlay;

// dist/src/parser/classes/MusicTwoRowItem.js
var MusicTwoRowItem = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    super();
    this.title = new Text_default(data.title);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.id = ((_b = (_a5 = this.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b === void 0 ? void 0 : _b.browseId) || ((_d = (_c = this.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.videoId);
    this.subtitle = new Text_default(data.subtitle);
    this.badges = parser_default.parse(data.subtitleBadges);
    const page_type = (_h = (_g = (_f = (_e = this.endpoint) === null || _e === void 0 ? void 0 : _e.payload) === null || _f === void 0 ? void 0 : _f.browseEndpointContextSupportedConfigs) === null || _g === void 0 ? void 0 : _g.browseEndpointContextMusicConfig) === null || _h === void 0 ? void 0 : _h.pageType;
    switch (page_type) {
      case "MUSIC_PAGE_TYPE_ARTIST":
        this.item_type = "artist";
        break;
      case "MUSIC_PAGE_TYPE_PLAYLIST":
        this.item_type = "playlist";
        break;
      case "MUSIC_PAGE_TYPE_ALBUM":
        this.item_type = "album";
        break;
      default:
        if (((_k = (_j = this.endpoint) === null || _j === void 0 ? void 0 : _j.metadata) === null || _k === void 0 ? void 0 : _k.api_url) === "/next") {
          this.item_type = "endpoint";
        } else if ((_l = this.subtitle.runs) === null || _l === void 0 ? void 0 : _l[0]) {
          if (this.subtitle.runs[0].text !== "Song") {
            this.item_type = "video";
          } else {
            this.item_type = "song";
          }
        } else if (this.endpoint) {
          this.item_type = "endpoint";
        } else {
          this.item_type = "unknown";
        }
        break;
    }
    if (this.item_type == "artist") {
      this.subscribers = ((_o = (_m = this.subtitle.runs) === null || _m === void 0 ? void 0 : _m.find((run) => /^(\d*\.)?\d+[M|K]? subscribers?$/i.test(run.text))) === null || _o === void 0 ? void 0 : _o.text) || "";
    } else if (this.item_type == "playlist") {
      const item_count_run = (_p = this.subtitle.runs) === null || _p === void 0 ? void 0 : _p.find((run) => run.text.match(/\d+ songs|song/));
      this.item_count = item_count_run ? item_count_run.text : null;
    } else if (this.item_type == "album") {
      const artists = (_q = this.subtitle.runs) === null || _q === void 0 ? void 0 : _q.filter((run) => {
        var _a6, _b2;
        return (_b2 = (_a6 = run.endpoint) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("UC");
      });
      if (artists) {
        this.artists = artists.map((artist) => {
          var _a6, _b2;
          return {
            name: artist.text,
            channel_id: (_b2 = (_a6 = artist.endpoint) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId,
            endpoint: artist.endpoint
          };
        });
      }
      this.year = (_r = this.subtitle.runs) === null || _r === void 0 ? void 0 : _r.slice(-1)[0].text;
      if (isNaN(Number(this.year)))
        delete this.year;
    } else if (this.item_type == "video") {
      this.views = ((_t = (_s = this === null || this === void 0 ? void 0 : this.subtitle.runs) === null || _s === void 0 ? void 0 : _s.find((run) => run === null || run === void 0 ? void 0 : run.text.match(/(.*?) views/))) === null || _t === void 0 ? void 0 : _t.text) || "N/A";
      const author = (_u = this.subtitle.runs) === null || _u === void 0 ? void 0 : _u.find((run) => {
        var _a6, _b2, _c2;
        return (_c2 = (_b2 = (_a6 = run.endpoint) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId) === null || _c2 === void 0 ? void 0 : _c2.startsWith("UC");
      });
      if (author) {
        this.author = {
          name: author === null || author === void 0 ? void 0 : author.text,
          channel_id: (_w = (_v = author === null || author === void 0 ? void 0 : author.endpoint) === null || _v === void 0 ? void 0 : _v.payload) === null || _w === void 0 ? void 0 : _w.browseId,
          endpoint: author === null || author === void 0 ? void 0 : author.endpoint
        };
      }
    } else if (this.item_type == "song") {
      const artists = (_x = this.subtitle.runs) === null || _x === void 0 ? void 0 : _x.filter((run) => {
        var _a6, _b2;
        return (_b2 = (_a6 = run.endpoint) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("UC");
      });
      if (artists) {
        this.artists = artists.map((artist) => {
          var _a6, _b2;
          return {
            name: artist === null || artist === void 0 ? void 0 : artist.text,
            channel_id: (_b2 = (_a6 = artist === null || artist === void 0 ? void 0 : artist.endpoint) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId,
            endpoint: artist === null || artist === void 0 ? void 0 : artist.endpoint
          };
        });
      }
    }
    this.thumbnail = Thumbnail_default.fromResponse(data.thumbnailRenderer.musicThumbnailRenderer.thumbnail);
    this.thumbnail_overlay = parser_default.parseItem(data.thumbnailOverlay, MusicItemThumbnailOverlay_default);
    this.menu = parser_default.parseItem(data.menu, Menu_default);
  }
};
__name(MusicTwoRowItem, "MusicTwoRowItem");
MusicTwoRowItem.type = "MusicTwoRowItem";
var MusicTwoRowItem_default = MusicTwoRowItem;

// dist/src/parser/classes/MusicResponsiveListItemFlexColumn.js
var MusicResponsiveListItemFlexColumn = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.text);
    this.display_priority = data.displayPriority;
  }
};
__name(MusicResponsiveListItemFlexColumn, "MusicResponsiveListItemFlexColumn");
MusicResponsiveListItemFlexColumn.type = "musicResponsiveListItemFlexColumnRenderer";
var MusicResponsiveListItemFlexColumn_default = MusicResponsiveListItemFlexColumn;

// dist/src/parser/classes/MusicResponsiveListItemFixedColumn.js
var MusicResponsiveListItemFixedColumn = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.text);
    this.display_priority = data.displayPriority;
  }
};
__name(MusicResponsiveListItemFixedColumn, "MusicResponsiveListItemFixedColumn");
MusicResponsiveListItemFixedColumn.type = "musicResponsiveListItemFlexColumnRenderer";
var MusicResponsiveListItemFixedColumn_default = MusicResponsiveListItemFixedColumn;

// dist/src/parser/classes/MusicResponsiveListItem.js
var __classPrivateFieldSet8 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet8 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MusicResponsiveListItem_instances;
var _MusicResponsiveListItem_flex_columns;
var _MusicResponsiveListItem_fixed_columns;
var _MusicResponsiveListItem_playlist_item_data;
var _MusicResponsiveListItem_parseOther;
var _MusicResponsiveListItem_parseVideoOrSong;
var _MusicResponsiveListItem_parseSong;
var _MusicResponsiveListItem_parseVideo;
var _MusicResponsiveListItem_parseArtist;
var _MusicResponsiveListItem_parseLibraryArtist;
var _MusicResponsiveListItem_parseAlbum;
var _MusicResponsiveListItem_parsePlaylist;
var MusicResponsiveListItem = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c, _d, _e, _f, _g;
    super();
    _MusicResponsiveListItem_instances.add(this);
    _MusicResponsiveListItem_flex_columns.set(this, void 0);
    _MusicResponsiveListItem_fixed_columns.set(this, void 0);
    _MusicResponsiveListItem_playlist_item_data.set(this, void 0);
    __classPrivateFieldSet8(this, _MusicResponsiveListItem_flex_columns, parser_default.parseArray(data.flexColumns, MusicResponsiveListItemFlexColumn_default), "f");
    __classPrivateFieldSet8(this, _MusicResponsiveListItem_fixed_columns, parser_default.parseArray(data.fixedColumns, MusicResponsiveListItemFixedColumn_default), "f");
    __classPrivateFieldSet8(this, _MusicResponsiveListItem_playlist_item_data, {
      video_id: ((_a5 = data === null || data === void 0 ? void 0 : data.playlistItemData) === null || _a5 === void 0 ? void 0 : _a5.videoId) || null,
      playlist_set_video_id: ((_b = data === null || data === void 0 ? void 0 : data.playlistItemData) === null || _b === void 0 ? void 0 : _b.playlistSetVideoId) || null
    }, "f");
    this.endpoint = data.navigationEndpoint ? new NavigationEndpoint_default(data.navigationEndpoint) : null;
    const page_type = (_f = (_e = (_d = (_c = this.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.browseEndpointContextSupportedConfigs) === null || _e === void 0 ? void 0 : _e.browseEndpointContextMusicConfig) === null || _f === void 0 ? void 0 : _f.pageType;
    switch (page_type) {
      case "MUSIC_PAGE_TYPE_ALBUM":
        this.item_type = "album";
        __classPrivateFieldGet8(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseAlbum).call(this);
        break;
      case "MUSIC_PAGE_TYPE_PLAYLIST":
        this.item_type = "playlist";
        __classPrivateFieldGet8(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parsePlaylist).call(this);
        break;
      case "MUSIC_PAGE_TYPE_ARTIST":
      case "MUSIC_PAGE_TYPE_USER_CHANNEL":
        this.item_type = "artist";
        __classPrivateFieldGet8(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseArtist).call(this);
        break;
      case "MUSIC_PAGE_TYPE_LIBRARY_ARTIST":
        this.item_type = "library_artist";
        __classPrivateFieldGet8(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseLibraryArtist).call(this);
        break;
      default:
        if (__classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1]) {
          __classPrivateFieldGet8(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseVideoOrSong).call(this);
        } else {
          __classPrivateFieldGet8(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseOther).call(this);
        }
        break;
    }
    if (data.index) {
      this.index = new Text_default(data.index);
    }
    this.thumbnails = data.thumbnail ? Thumbnail_default.fromResponse((_g = data.thumbnail.musicThumbnailRenderer) === null || _g === void 0 ? void 0 : _g.thumbnail) : [];
    this.badges = parser_default.parseArray(data.badges);
    this.menu = parser_default.parseItem(data.menu, Menu_default);
    this.overlay = parser_default.parseItem(data.overlay, MusicItemThumbnailOverlay_default);
  }
};
__name(MusicResponsiveListItem, "MusicResponsiveListItem");
_MusicResponsiveListItem_flex_columns = /* @__PURE__ */ new WeakMap(), _MusicResponsiveListItem_fixed_columns = /* @__PURE__ */ new WeakMap(), _MusicResponsiveListItem_playlist_item_data = /* @__PURE__ */ new WeakMap(), _MusicResponsiveListItem_instances = /* @__PURE__ */ new WeakSet(), _MusicResponsiveListItem_parseOther = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseOther2() {
  this.title = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[0].key("title").instanceof(Text_default).toString();
  if (this.endpoint) {
    this.item_type = "endpoint";
  } else {
    this.item_type = "unknown";
  }
}, "_MusicResponsiveListItem_parseOther"), _MusicResponsiveListItem_parseVideoOrSong = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseVideoOrSong2() {
  var _a5;
  const is_video = (_a5 = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default).runs) === null || _a5 === void 0 ? void 0 : _a5.some((run) => run.text.match(/(.*?) views/));
  if (is_video) {
    this.item_type = "video";
    __classPrivateFieldGet8(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseVideo).call(this);
  } else {
    this.item_type = "song";
    __classPrivateFieldGet8(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseSong).call(this);
  }
}, "_MusicResponsiveListItem_parseVideoOrSong"), _MusicResponsiveListItem_parseSong = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseSong2() {
  var _a5, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
  this.id = __classPrivateFieldGet8(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id || ((_b = (_a5 = this.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b === void 0 ? void 0 : _b.videoId);
  this.title = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[0].key("title").instanceof(Text_default).toString();
  this.subtitle = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default);
  const duration_text = ((_d = (_c = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default).runs) === null || _c === void 0 ? void 0 : _c.find((run) => /^\d+$/.test(run.text.replace(/:/g, "")))) === null || _d === void 0 ? void 0 : _d.text) || ((_g = (_f = (_e = __classPrivateFieldGet8(this, _MusicResponsiveListItem_fixed_columns, "f")) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.key("title").instanceof(Text_default)) === null || _g === void 0 ? void 0 : _g.toString());
  duration_text && (this.duration = {
    text: duration_text,
    seconds: timeToSeconds(duration_text)
  });
  const album = ((_h = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default).runs) === null || _h === void 0 ? void 0 : _h.find((run) => {
    var _a6, _b2;
    return (_b2 = (_a6 = Reflect.get(run, "endpoint")) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("MPR");
  })) || ((_k = (_j = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[2]) === null || _j === void 0 ? void 0 : _j.key("title").instanceof(Text_default).runs) === null || _k === void 0 ? void 0 : _k.find((run) => {
    var _a6, _b2;
    return (_b2 = (_a6 = Reflect.get(run, "endpoint")) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("MPR");
  }));
  if (album) {
    this.album = {
      id: (_m = (_l = album.endpoint) === null || _l === void 0 ? void 0 : _l.payload) === null || _m === void 0 ? void 0 : _m.browseId,
      name: album.text,
      endpoint: album.endpoint
    };
  }
  const artists = (_o = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default).runs) === null || _o === void 0 ? void 0 : _o.filter((run) => {
    var _a6, _b2;
    return (_b2 = (_a6 = Reflect.get(run, "endpoint")) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("UC");
  });
  if (artists) {
    this.artists = artists.map((artist) => {
      var _a6, _b2;
      return {
        name: artist.text,
        channel_id: (_b2 = (_a6 = artist.endpoint) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId,
        endpoint: artist.endpoint
      };
    });
  }
}, "_MusicResponsiveListItem_parseSong"), _MusicResponsiveListItem_parseVideo = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseVideo2() {
  var _a5, _b, _c, _d, _e, _f, _g, _h;
  this.id = __classPrivateFieldGet8(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id;
  this.title = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[0].key("title").instanceof(Text_default).toString();
  this.subtitle = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default);
  this.views = (_b = (_a5 = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default).runs) === null || _a5 === void 0 ? void 0 : _a5.find((run) => run.text.match(/(.*?) views/))) === null || _b === void 0 ? void 0 : _b.text;
  const authors = (_c = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default).runs) === null || _c === void 0 ? void 0 : _c.filter((run) => {
    var _a6, _b2;
    return (_b2 = (_a6 = Reflect.get(run, "endpoint")) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("UC");
  });
  if (authors) {
    this.authors = authors.map((author) => {
      var _a6, _b2;
      return {
        name: author.text,
        channel_id: (_b2 = (_a6 = author.endpoint) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId,
        endpoint: author.endpoint
      };
    });
  }
  const duration_text = ((_e = (_d = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default).runs) === null || _d === void 0 ? void 0 : _d.find((run) => /^\d+$/.test(run.text.replace(/:/g, "")))) === null || _e === void 0 ? void 0 : _e.text) || ((_h = (_g = (_f = __classPrivateFieldGet8(this, _MusicResponsiveListItem_fixed_columns, "f")[0]) === null || _f === void 0 ? void 0 : _f.key("title").instanceof(Text_default).runs) === null || _g === void 0 ? void 0 : _g.find((run) => /^\d+$/.test(run.text.replace(/:/g, "")))) === null || _h === void 0 ? void 0 : _h.text);
  duration_text && (this.duration = {
    text: duration_text,
    seconds: timeToSeconds(duration_text)
  });
}, "_MusicResponsiveListItem_parseVideo"), _MusicResponsiveListItem_parseArtist = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseArtist2() {
  var _a5, _b, _c, _d;
  this.id = (_b = (_a5 = this.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b === void 0 ? void 0 : _b.browseId;
  this.name = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[0].key("title").instanceof(Text_default).toString();
  this.subtitle = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default);
  this.subscribers = ((_d = (_c = this.subtitle.runs) === null || _c === void 0 ? void 0 : _c.find((run) => /^(\d*\.)?\d+[M|K]? subscribers?$/i.test(run.text))) === null || _d === void 0 ? void 0 : _d.text) || "";
}, "_MusicResponsiveListItem_parseArtist"), _MusicResponsiveListItem_parseLibraryArtist = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseLibraryArtist2() {
  var _a5, _b, _c;
  this.name = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[0].key("title").instanceof(Text_default).toString();
  this.subtitle = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default);
  this.song_count = ((_c = (_b = (_a5 = this.subtitle) === null || _a5 === void 0 ? void 0 : _a5.runs) === null || _b === void 0 ? void 0 : _b.find((run) => /^\d+(,\d+)? songs?$/i.test(run.text))) === null || _c === void 0 ? void 0 : _c.text) || "";
}, "_MusicResponsiveListItem_parseLibraryArtist"), _MusicResponsiveListItem_parseAlbum = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseAlbum2() {
  var _a5, _b, _c, _d, _e, _f, _g;
  this.id = (_b = (_a5 = this.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b === void 0 ? void 0 : _b.browseId;
  this.title = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[0].key("title").instanceof(Text_default).toString();
  this.subtitle = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default);
  const author = (_c = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default).runs) === null || _c === void 0 ? void 0 : _c.find((run) => {
    var _a6, _b2;
    return (_b2 = (_a6 = Reflect.get(run, "endpoint")) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("UC");
  });
  author && (this.author = {
    name: author.text,
    channel_id: (_e = (_d = author.endpoint) === null || _d === void 0 ? void 0 : _d.payload) === null || _e === void 0 ? void 0 : _e.browseId,
    endpoint: author.endpoint
  });
  this.year = (_g = (_f = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default).runs) === null || _f === void 0 ? void 0 : _f.find((run) => /^[12][0-9]{3}$/.test(run.text))) === null || _g === void 0 ? void 0 : _g.text;
}, "_MusicResponsiveListItem_parseAlbum"), _MusicResponsiveListItem_parsePlaylist = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parsePlaylist2() {
  var _a5, _b, _c, _d, _e, _f;
  this.id = (_b = (_a5 = this.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b === void 0 ? void 0 : _b.browseId;
  this.title = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[0].key("title").instanceof(Text_default).toString();
  this.subtitle = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default);
  const item_count_run = (_c = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default).runs) === null || _c === void 0 ? void 0 : _c.find((run) => run.text.match(/\d+ (song|songs)/));
  this.item_count = item_count_run ? item_count_run.text : void 0;
  const author = (_d = __classPrivateFieldGet8(this, _MusicResponsiveListItem_flex_columns, "f")[1].key("title").instanceof(Text_default).runs) === null || _d === void 0 ? void 0 : _d.find((run) => {
    var _a6, _b2;
    return (_b2 = (_a6 = Reflect.get(run, "endpoint")) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("UC");
  });
  if (author) {
    this.author = {
      name: author.text,
      channel_id: (_f = (_e = author.endpoint) === null || _e === void 0 ? void 0 : _e.payload) === null || _f === void 0 ? void 0 : _f.browseId,
      endpoint: author.endpoint
    };
  }
}, "_MusicResponsiveListItem_parsePlaylist");
MusicResponsiveListItem.type = "MusicResponsiveListItem";
var MusicResponsiveListItem_default = MusicResponsiveListItem;

// dist/src/parser/classes/MusicThumbnail.js
var MusicThumbnail = class extends YTNode {
  constructor(data) {
    super();
    this.contents = Thumbnail_default.fromResponse(data.thumbnail);
  }
};
__name(MusicThumbnail, "MusicThumbnail");
MusicThumbnail.type = "MusicThumbnail";
var MusicThumbnail_default = MusicThumbnail;

// dist/src/parser/classes/MusicCarouselShelfBasicHeader.js
var MusicCarouselShelfBasicHeader = class extends YTNode {
  constructor(data) {
    super();
    if (data.strapline) {
      this.strapline = new Text_default(data.strapline);
    }
    this.title = new Text_default(data.title);
    if (data.thumbnail) {
      this.thumbnail = parser_default.parseItem(data.thumbnail, MusicThumbnail_default);
    }
    if (data.moreContentButton) {
      this.more_content = parser_default.parseItem(data.moreContentButton, Button_default);
    }
    if (data.endIcons) {
      this.end_icons = parser_default.parseArray(data.endIcons, IconLink_default);
    }
  }
};
__name(MusicCarouselShelfBasicHeader, "MusicCarouselShelfBasicHeader");
MusicCarouselShelfBasicHeader.type = "MusicCarouselShelfBasicHeader";
var MusicCarouselShelfBasicHeader_default = MusicCarouselShelfBasicHeader;

// dist/src/parser/classes/MusicNavigationButton.js
var MusicNavigationButton = class extends YTNode {
  constructor(data) {
    super();
    this.button_text = new Text_default(data.buttonText).toString();
    this.endpoint = new NavigationEndpoint_default(data.clickCommand);
  }
};
__name(MusicNavigationButton, "MusicNavigationButton");
MusicNavigationButton.type = "MusicNavigationButton";
var MusicNavigationButton_default = MusicNavigationButton;

// dist/src/parser/classes/MusicCarouselShelf.js
var MusicCarouselShelf = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parseItem(data.header, MusicCarouselShelfBasicHeader_default);
    this.contents = parser_default.parseArray(data.contents, [MusicTwoRowItem_default, MusicResponsiveListItem_default, MusicNavigationButton_default]);
    this.num_items_per_column = Reflect.has(data, "numItemsPerColumn") ? parseInt(data.numItemsPerColumn) : null;
  }
};
__name(MusicCarouselShelf, "MusicCarouselShelf");
MusicCarouselShelf.type = "MusicCarouselShelf";
var MusicCarouselShelf_default = MusicCarouselShelf;

// dist/src/parser/classes/MusicDescriptionShelf.js
var MusicDescriptionShelf = class extends YTNode {
  constructor(data) {
    super();
    this.description = new Text_default(data.description);
    if (this.max_collapsed_lines) {
      this.max_collapsed_lines = data.maxCollapsedLines;
    }
    if (this.max_expanded_lines) {
      this.max_expanded_lines = data.maxExpandedLines;
    }
    this.footer = new Text_default(data.footer);
  }
};
__name(MusicDescriptionShelf, "MusicDescriptionShelf");
MusicDescriptionShelf.type = "MusicDescriptionShelf";
var MusicDescriptionShelf_default = MusicDescriptionShelf;

// dist/src/parser/classes/MusicDetailHeader.js
var MusicDetailHeader = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c, _d, _e, _f, _g, _h, _j;
    super();
    this.title = new Text_default(data.title);
    this.description = new Text_default(data.description);
    this.subtitle = new Text_default(data.subtitle);
    this.second_subtitle = new Text_default(data.secondSubtitle);
    this.year = ((_b = (_a5 = this.subtitle.runs) === null || _a5 === void 0 ? void 0 : _a5.find((run) => /^[12][0-9]{3}$/.test(run.text))) === null || _b === void 0 ? void 0 : _b.text) || "";
    this.song_count = ((_d = (_c = this.second_subtitle.runs) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.text) || "";
    this.total_duration = ((_f = (_e = this.second_subtitle.runs) === null || _e === void 0 ? void 0 : _e[2]) === null || _f === void 0 ? void 0 : _f.text) || "";
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail.croppedSquareThumbnailRenderer.thumbnail);
    this.badges = parser_default.parse(data.subtitleBadges);
    const author = (_g = this.subtitle.runs) === null || _g === void 0 ? void 0 : _g.find((run) => {
      var _a6, _b2;
      return (_b2 = (_a6 = run === null || run === void 0 ? void 0 : run.endpoint) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("UC");
    });
    if (author) {
      this.author = {
        name: author.text,
        channel_id: (_j = (_h = author.endpoint) === null || _h === void 0 ? void 0 : _h.payload) === null || _j === void 0 ? void 0 : _j.browseId,
        endpoint: author.endpoint
      };
    }
    this.menu = parser_default.parse(data.menu);
  }
};
__name(MusicDetailHeader, "MusicDetailHeader");
MusicDetailHeader.type = "MusicDetailHeader";
var MusicDetailHeader_default = MusicDetailHeader;

// dist/src/parser/classes/MusicDownloadStateBadge.js
var MusicDownloadStateBadge = class extends YTNode {
  constructor(data) {
    super();
    this.playlist_id = data.playlistId;
    this.supported_download_states = data.supportedDownloadStates;
  }
};
__name(MusicDownloadStateBadge, "MusicDownloadStateBadge");
MusicDownloadStateBadge.type = "MusicDownloadStateBadge";
var MusicDownloadStateBadge_default = MusicDownloadStateBadge;

// dist/src/parser/classes/MusicEditablePlaylistDetailHeader.js
var MusicEditablePlaylistDetailHeader = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parse(data.header);
  }
};
__name(MusicEditablePlaylistDetailHeader, "MusicEditablePlaylistDetailHeader");
MusicEditablePlaylistDetailHeader.type = "MusicEditablePlaylistDetailHeader";
var MusicEditablePlaylistDetailHeader_default = MusicEditablePlaylistDetailHeader;

// dist/src/parser/classes/MusicElementHeader.js
var MusicElementHeader = class extends YTNode {
  constructor(data) {
    super();
    this.element = Reflect.has(data, "elementRenderer") ? parser_default.parseItem(data, Element_default) : null;
  }
};
__name(MusicElementHeader, "MusicElementHeader");
MusicElementHeader.type = "MusicElementHeader";
var MusicElementHeader_default = MusicElementHeader;

// dist/src/parser/classes/MusicHeader.js
var MusicHeader = class extends YTNode {
  constructor(data) {
    super();
    if (data.header) {
      this.header = parser_default.parse(data.header);
    }
    if (data.title) {
      this.title = new Text_default(data.title);
    }
  }
};
__name(MusicHeader, "MusicHeader");
MusicHeader.type = "MusicHeader";
var MusicHeader_default = MusicHeader;

// dist/src/parser/classes/MusicImmersiveHeader.js
var MusicImmersiveHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.description = new Text_default(data.description);
    this.thumbnail = parser_default.parseItem(data.thumbnail, MusicThumbnail_default);
    this.play_button = parser_default.parseItem(data.playButton, Button_default);
    this.start_radio_button = parser_default.parseItem(data.startRadioButton, Button_default);
  }
};
__name(MusicImmersiveHeader, "MusicImmersiveHeader");
MusicImmersiveHeader.type = "MusicImmersiveHeader";
var MusicImmersiveHeader_default = MusicImmersiveHeader;

// dist/src/parser/classes/MusicInlineBadge.js
var MusicInlineBadge = class extends YTNode {
  constructor(data) {
    super();
    this.icon_type = data.icon.iconType;
    this.label = data.accessibilityData.accessibilityData.label;
  }
};
__name(MusicInlineBadge, "MusicInlineBadge");
MusicInlineBadge.type = "MusicInlineBadge";
var MusicInlineBadge_default = MusicInlineBadge;

// dist/src/parser/classes/MusicLargeCardItemCarousel.js
var ActionButton = class {
  constructor(data) {
    this.icon_name = data.iconName;
    this.endpoint = new NavigationEndpoint_default(data.onTap);
    this.a11y_text = data.a11yText;
    this.style = data.style;
  }
};
__name(ActionButton, "ActionButton");
ActionButton.type = "ActionButton";
var Panel2 = class {
  constructor(data) {
    this.image = data.image.image.sources;
    this.content_mode = data.image.contentMode;
    this.crop_options = data.image.cropOptions;
    this.image_aspect_ratio = data.imageAspectRatio;
    this.caption = data.caption;
    this.action_buttons = data.actionButtons.map((el) => new ActionButton(el));
  }
};
__name(Panel2, "Panel");
Panel2.type = "Panel";
var MusicLargeCardItemCarousel = class extends YTNode {
  constructor(data) {
    super();
    this.header = data.shelf.header;
    this.panels = data.shelf.panels.map((el) => new Panel2(el));
  }
};
__name(MusicLargeCardItemCarousel, "MusicLargeCardItemCarousel");
MusicLargeCardItemCarousel.type = "MusicLargeCardItemCarousel";
var MusicLargeCardItemCarousel_default = MusicLargeCardItemCarousel;

// dist/src/parser/classes/MusicPlaylistShelf.js
var MusicPlaylistShelf = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c;
    super();
    this.playlist_id = data.playlistId;
    this.contents = parser_default.parseArray(data.contents, MusicResponsiveListItem_default);
    this.collapsed_item_count = data.collapsedItemCount;
    this.continuation = ((_c = (_b = (_a5 = data.continuations) === null || _a5 === void 0 ? void 0 : _a5[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || null;
  }
};
__name(MusicPlaylistShelf, "MusicPlaylistShelf");
MusicPlaylistShelf.type = "MusicPlaylistShelf";
var MusicPlaylistShelf_default = MusicPlaylistShelf;

// dist/src/parser/classes/PlaylistPanel.js
var PlaylistPanel = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c, _d, _e, _f;
    super();
    this.title = data.title;
    this.title_text = new Text_default(data.titleText);
    this.contents = parser_default.parseArray(data.contents);
    this.playlist_id = data.playlistId;
    this.is_infinite = data.isInfinite;
    this.continuation = ((_c = (_b = (_a5 = data.continuations) === null || _a5 === void 0 ? void 0 : _a5[0]) === null || _b === void 0 ? void 0 : _b.nextRadioContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || ((_f = (_e = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.nextContinuationData) === null || _f === void 0 ? void 0 : _f.continuation);
    this.is_editable = data.isEditable;
    this.preview_description = data.previewDescription;
    this.num_items_to_show = data.numItemsToShow;
  }
};
__name(PlaylistPanel, "PlaylistPanel");
PlaylistPanel.type = "PlaylistPanel";
var PlaylistPanel_default = PlaylistPanel;

// dist/src/parser/classes/MusicQueue.js
var MusicQueue = class extends YTNode {
  constructor(data) {
    super();
    this.content = parser_default.parseItem(data.content, PlaylistPanel_default);
  }
};
__name(MusicQueue, "MusicQueue");
MusicQueue.type = "MusicQueue";
var MusicQueue_default = MusicQueue;

// dist/src/parser/classes/MusicShelf.js
var MusicShelf = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c, _d;
    super();
    this.title = new Text_default(data.title);
    this.contents = parser_default.parseArray(data.contents, MusicResponsiveListItem_default);
    if (data.bottomEndpoint) {
      this.endpoint = new NavigationEndpoint_default(data.bottomEndpoint);
    }
    if (data.continuations) {
      this.continuation = ((_b = (_a5 = data.continuations) === null || _a5 === void 0 ? void 0 : _a5[0].nextContinuationData) === null || _b === void 0 ? void 0 : _b.continuation) || ((_d = (_c = data.continuations) === null || _c === void 0 ? void 0 : _c[0].reloadContinuationData) === null || _d === void 0 ? void 0 : _d.continuation);
    }
    if (data.bottomText) {
      this.bottom_text = new Text_default(data.bottomText);
    }
    if (data.bottomButton) {
      this.bottom_button = parser_default.parseItem(data.bottomButton);
    }
    if (data.subheaders) {
      this.subheaders = parser_default.parseArray(data.subheaders);
    }
  }
};
__name(MusicShelf, "MusicShelf");
MusicShelf.type = "MusicShelf";
var MusicShelf_default = MusicShelf;

// dist/src/parser/classes/MusicSideAlignedItem.js
var MusicSideAlignedItem = class extends YTNode {
  constructor(data) {
    super();
    if (data.startItems) {
      this.start_items = parser_default.parseArray(data.startItems);
    }
    if (data.endItems) {
      this.end_items = parser_default.parseArray(data.endItems);
    }
  }
};
__name(MusicSideAlignedItem, "MusicSideAlignedItem");
MusicSideAlignedItem.type = "MusicSideAlignedItem";
var MusicSideAlignedItem_default = MusicSideAlignedItem;

// dist/src/parser/classes/MusicSortFilterButton.js
var MusicSortFilterButton = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.title = new Text_default(data.title).text;
    this.icon_type = ((_a5 = data.icon) === null || _a5 === void 0 ? void 0 : _a5.icon_type) || null;
    this.menu = parser_default.parseItem(data.menu, MusicMultiSelectMenu_default);
  }
};
__name(MusicSortFilterButton, "MusicSortFilterButton");
MusicSortFilterButton.type = "MusicSortFilterButton";
var MusicSortFilterButton_default = MusicSortFilterButton;

// dist/src/parser/classes/MusicVisualHeader.js
var MusicVisualHeader = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.title = new Text_default(data.title);
    this.thumbnails = data.thumbnail ? Thumbnail_default.fromResponse((_a5 = data.thumbnail.musicThumbnailRenderer) === null || _a5 === void 0 ? void 0 : _a5.thumbnail) : [];
    this.menu = parser_default.parseItem(data.menu, Menu_default);
    this.foreground_thumbnails = data.foregroundThumbnail ? Thumbnail_default.fromResponse((_b = data.foregroundThumbnail.musicThumbnailRenderer) === null || _b === void 0 ? void 0 : _b.thumbnail) : [];
  }
};
__name(MusicVisualHeader, "MusicVisualHeader");
MusicVisualHeader.type = "MusicVisualHeader";
var MusicVisualHeader_default = MusicVisualHeader;

// dist/src/parser/classes/Notification.js
var Notification = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.video_thumbnails = Thumbnail_default.fromResponse(data.videoThumbnail);
    this.short_message = new Text_default(data.shortMessage);
    this.sent_time = new Text_default(data.sentTimeText);
    this.notification_id = data.notificationId;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.record_click_endpoint = new NavigationEndpoint_default(data.recordClickEndpoint);
    this.menu = parser_default.parse(data.contextualMenu);
    this.read = data.read;
  }
};
__name(Notification, "Notification");
Notification.type = "Notification";
var Notification_default = Notification;

// dist/src/parser/classes/PageIntroduction.js
var PageIntroduction = class extends YTNode {
  constructor(data) {
    super();
    this.header_text = new Text_default(data.headerText).toString();
    this.body_text = new Text_default(data.bodyText).toString();
    this.page_title = new Text_default(data.pageTitle).toString();
    this.header_icon_type = data.headerIcon.iconType;
  }
};
__name(PageIntroduction, "PageIntroduction");
PageIntroduction.type = "PageIntroduction";
var PageIntroduction_default = PageIntroduction;

// dist/src/parser/classes/PlayerAnnotationsExpanded.js
var PlayerAnnotationsExpanded = class extends YTNode {
  constructor(data) {
    super();
    this.featured_channel = {
      start_time_ms: data.featuredChannel.startTimeMs,
      end_time_ms: data.featuredChannel.endTimeMs,
      watermark: Thumbnail_default.fromResponse(data.featuredChannel.watermark),
      channel_name: data.featuredChannel.channelName,
      endpoint: new NavigationEndpoint_default(data.featuredChannel.navigationEndpoint),
      subscribe_button: parser_default.parse(data.featuredChannel.subscribeButton)
    };
    this.allow_swipe_dismiss = data.allowSwipeDismiss;
    this.annotation_id = data.annotationId;
  }
};
__name(PlayerAnnotationsExpanded, "PlayerAnnotationsExpanded");
PlayerAnnotationsExpanded.type = "PlayerAnnotationsExpanded";
var PlayerAnnotationsExpanded_default = PlayerAnnotationsExpanded;

// dist/src/parser/classes/PlayerCaptionsTracklist.js
var PlayerCaptionsTracklist = class extends YTNode {
  constructor(data) {
    super();
    this.caption_tracks = data.captionTracks.map((ct) => ({
      base_url: ct.baseUrl,
      name: new Text_default(ct.name),
      vss_id: ct.vssId,
      language_code: ct.languageCode,
      kind: ct.kind,
      is_translatable: ct.isTranslatable
    }));
    this.audio_tracks = data.audioTracks.map((at) => ({
      audio_track_id: at.audioTrackId,
      captions_initial_state: at.captionsInitialState,
      default_caption_track_index: at.defaultCaptionTrackIndex,
      has_default_track: at.hasDefaultTrack,
      visibility: at.visibility,
      caption_track_indices: at.captionTrackIndices
    }));
    this.default_audio_track_index = data.defaultAudioTrackIndex;
    this.translation_languages = data.translationLanguages.map((tl) => ({
      language_code: tl.languageCode,
      language_name: new Text_default(tl.languageName)
    }));
  }
};
__name(PlayerCaptionsTracklist, "PlayerCaptionsTracklist");
PlayerCaptionsTracklist.type = "PlayerCaptionsTracklist";
var PlayerCaptionsTracklist_default = PlayerCaptionsTracklist;

// dist/src/parser/classes/PlayerErrorMessage.js
var PlayerErrorMessage = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.subreason = new Text_default(data.subreason);
    this.reason = new Text_default(data.reason);
    this.proceed_button = parser_default.parseItem(data.proceedButton, Button_default);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.icon_type = ((_a5 = data.icon) === null || _a5 === void 0 ? void 0 : _a5.iconType) || null;
  }
};
__name(PlayerErrorMessage, "PlayerErrorMessage");
PlayerErrorMessage.type = "PlayerErrorMessage";
var PlayerErrorMessage_default = PlayerErrorMessage;

// dist/src/parser/classes/PlayerLiveStoryboardSpec.js
var PlayerLiveStoryboardSpec = class extends YTNode {
  constructor() {
    super();
  }
};
__name(PlayerLiveStoryboardSpec, "PlayerLiveStoryboardSpec");
PlayerLiveStoryboardSpec.type = "PlayerLiveStoryboardSpec";
var PlayerLiveStoryboardSpec_default = PlayerLiveStoryboardSpec;

// dist/src/parser/classes/PlayerMicroformat.js
var PlayerMicroformat = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.title = new Text_default(data.title);
    this.description = new Text_default(data.description);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.embed = {
      iframe_url: data.embed.iframeUrl,
      flash_url: data.embed.flashUrl,
      flash_secure_url: data.embed.flashSecureUrl,
      width: data.embed.width,
      height: data.embed.height
    };
    this.length_seconds = parseInt(data.lengthSeconds);
    this.channel = {
      id: data.externalChannelId,
      name: data.ownerChannelName,
      url: data.ownerProfileUrl
    };
    this.is_family_safe = !!data.isFamilySafe;
    this.is_unlisted = !!data.isUnlisted;
    this.has_ypc_metadata = !!data.hasYpcMetadata;
    this.view_count = parseInt(data.viewCount);
    this.category = data.category;
    this.publish_date = data.publishDate;
    this.upload_date = data.uploadDate;
    this.available_countries = data.availableCountries;
    this.start_timestamp = ((_a5 = data.liveBroadcastDetails) === null || _a5 === void 0 ? void 0 : _a5.startTimestamp) ? new Date(data.liveBroadcastDetails.startTimestamp) : null;
  }
};
__name(PlayerMicroformat, "PlayerMicroformat");
PlayerMicroformat.type = "PlayerMicroformat";
var PlayerMicroformat_default = PlayerMicroformat;

// dist/src/parser/classes/WatchNextEndScreen.js
var WatchNextEndScreen = class extends YTNode {
  constructor(data) {
    super();
    this.results = parser_default.parseArray(data.results, [EndScreenVideo_default, EndScreenPlaylist_default]);
    this.title = new Text_default(data.title).toString();
  }
};
__name(WatchNextEndScreen, "WatchNextEndScreen");
WatchNextEndScreen.type = "WatchNextEndScreen";
var WatchNextEndScreen_default = WatchNextEndScreen;

// dist/src/parser/classes/PlayerOverlayAutoplay.js
var PlayerOverlayAutoplay = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.video_id = data.videoId;
    this.video_title = new Text_default(data.videoTitle);
    this.short_view_count = new Text_default(data.shortViewCountText);
    this.prefer_immediate_redirect = data.preferImmediateRedirect;
    this.count_down_secs_for_fullscreen = data.countDownSecsForFullscreen;
    this.published = new Text_default(data.publishedTimeText);
    this.background = Thumbnail_default.fromResponse(data.background);
    this.thumbnail_overlays = parser_default.parse(data.thumbnailOverlays);
    this.author = new Author_default(data.byline);
    this.cancel_button = parser_default.parseItem(data.cancelButton, Button_default);
    this.next_button = parser_default.parseItem(data.nextButton, Button_default);
    this.close_button = parser_default.parseItem(data.closeButton, Button_default);
  }
};
__name(PlayerOverlayAutoplay, "PlayerOverlayAutoplay");
PlayerOverlayAutoplay.type = "PlayerOverlayAutoplay";
var PlayerOverlayAutoplay_default = PlayerOverlayAutoplay;

// dist/src/parser/classes/PlayerOverlay.js
var PlayerOverlay = class extends YTNode {
  constructor(data) {
    super();
    this.end_screen = parser_default.parseItem(data.endScreen, WatchNextEndScreen_default);
    this.autoplay = parser_default.parseItem(data.autoplay, PlayerOverlayAutoplay_default);
    this.share_button = parser_default.parseItem(data.shareButton, Button_default);
    this.add_to_menu = parser_default.parseItem(data.addToMenu, Menu_default);
    this.fullscreen_engagement = parser_default.parse(data.fullscreenEngagement);
    this.actions = parser_default.parseArray(data.actions);
    this.browser_media_session = parser_default.parseItem(data.browserMediaSession);
    this.decorated_player_bar = parser_default.parseItem(data.decoratedPlayerBarRenderer);
  }
};
__name(PlayerOverlay, "PlayerOverlay");
PlayerOverlay.type = "PlayerOverlay";
var PlayerOverlay_default = PlayerOverlay;

// dist/src/parser/classes/PlayerStoryboardSpec.js
var PlayerStoryboardSpec = class extends YTNode {
  constructor(data) {
    super();
    const parts = data.spec.split("|");
    const url = new URL(parts.shift());
    this.boards = parts.map((part, i) => {
      const [thumbnail_width, thumbnail_height, thumbnail_count, columns, rows, interval, name, sigh] = part.split("#");
      url.searchParams.set("sigh", sigh);
      const storyboard_count = Math.ceil(parseInt(thumbnail_count, 10) / (parseInt(columns, 10) * parseInt(rows, 10)));
      return {
        template_url: url.toString().replace("$L", i).replace("$N", name),
        thumbnail_width: parseInt(thumbnail_width, 10),
        thumbnail_height: parseInt(thumbnail_height, 10),
        thumbnail_count: parseInt(thumbnail_count, 10),
        interval: parseInt(interval, 10),
        columns: parseInt(columns, 10),
        rows: parseInt(rows, 10),
        storyboard_count
      };
    });
  }
};
__name(PlayerStoryboardSpec, "PlayerStoryboardSpec");
PlayerStoryboardSpec.type = "PlayerStoryboardSpec";
var PlayerStoryboardSpec_default = PlayerStoryboardSpec;

// dist/src/parser/classes/PlaylistCustomThumbnail.js
var PlaylistCustomThumbnail = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = Thumbnail_default.fromResponse(data.thumbnail);
  }
};
__name(PlaylistCustomThumbnail, "PlaylistCustomThumbnail");
PlaylistCustomThumbnail.type = "PlaylistCustomThumbnail";
var PlaylistCustomThumbnail_default = PlaylistCustomThumbnail;

// dist/src/parser/classes/PlaylistHeader.js
var PlaylistHeader = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.playlistId;
    this.title = new Text_default(data.title);
    this.stats = data.stats.map((stat) => new Text_default(stat));
    this.brief_stats = data.briefStats.map((stat) => new Text_default(stat));
    this.author = new PlaylistAuthor_default(Object.assign(Object.assign({}, data.ownerText), { navigationEndpoint: data.ownerEndpoint }), data.ownerBadges, null);
    this.description = new Text_default(data.descriptionText);
    this.num_videos = new Text_default(data.numVideosText);
    this.view_count = new Text_default(data.viewCountText);
    this.can_share = data.shareData.canShare;
    this.can_delete = data.editableDetails.canDelete;
    this.is_editable = data.isEditable;
    this.privacy = data.privacy;
    this.save_button = parser_default.parse(data.saveButton);
    this.shuffle_play_button = parser_default.parse(data.shufflePlayButton);
    this.menu = parser_default.parse(data.moreActionsMenu);
  }
};
__name(PlaylistHeader, "PlaylistHeader");
PlaylistHeader.type = "PlaylistHeader";
var PlaylistHeader_default = PlaylistHeader;

// dist/src/parser/classes/PlaylistInfoCardContent.js
var PlaylistInfoCardContent = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.playlistTitle);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.video_count = new Text_default(data.playlistVideoCount);
    this.channel_name = new Text_default(data.channelName);
    this.endpoint = new NavigationEndpoint_default(data.action);
  }
};
__name(PlaylistInfoCardContent, "PlaylistInfoCardContent");
PlaylistInfoCardContent.type = "PlaylistInfoCardContent";
var PlaylistInfoCardContent_default = PlaylistInfoCardContent;

// dist/src/parser/classes/PlaylistMetadata.js
var PlaylistMetadata = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.description = data.description || null;
  }
};
__name(PlaylistMetadata, "PlaylistMetadata");
PlaylistMetadata.type = "PlaylistMetadata";
var PlaylistMetadata_default = PlaylistMetadata;

// dist/src/parser/classes/PlaylistPanelVideo.js
var PlaylistPanelVideo = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c, _d, _e;
    super();
    this.title = new Text_default(data.title);
    this.thumbnail = Thumbnail_default.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.selected = data.selected;
    this.video_id = data.videoId;
    this.duration = {
      text: new Text_default(data.lengthText).toString(),
      seconds: timeToSeconds(new Text_default(data.lengthText).toString())
    };
    const album = (_a5 = new Text_default(data.longBylineText).runs) === null || _a5 === void 0 ? void 0 : _a5.find((run) => {
      var _a6, _b2, _c2;
      return (_c2 = (_b2 = (_a6 = run.endpoint) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId) === null || _c2 === void 0 ? void 0 : _c2.startsWith("MPR");
    });
    const artists = (_b = new Text_default(data.longBylineText).runs) === null || _b === void 0 ? void 0 : _b.filter((run) => {
      var _a6, _b2, _c2;
      return (_c2 = (_b2 = (_a6 = run.endpoint) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId) === null || _c2 === void 0 ? void 0 : _c2.startsWith("UC");
    });
    this.author = new Text_default(data.shortBylineText).toString();
    if (album) {
      this.album = {
        id: (_d = (_c = album.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.browseId,
        name: album.text,
        year: (_e = new Text_default(data.longBylineText).runs) === null || _e === void 0 ? void 0 : _e.slice(-1)[0].text,
        endpoint: album.endpoint
      };
    }
    if (artists) {
      this.artists = artists.map((artist) => {
        var _a6, _b2;
        return {
          name: artist.text,
          channel_id: (_b2 = (_a6 = artist.endpoint) === null || _a6 === void 0 ? void 0 : _a6.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId,
          endpoint: artist.endpoint
        };
      });
    }
    this.badges = parser_default.parseArray(data.badges);
    this.menu = parser_default.parseItem(data.menu);
    this.set_video_id = data.playlistSetVideoId;
  }
};
__name(PlaylistPanelVideo, "PlaylistPanelVideo");
PlaylistPanelVideo.type = "PlaylistPanelVideo";
var PlaylistPanelVideo_default = PlaylistPanelVideo;

// dist/src/parser/classes/PlaylistPanelVideoWrapper.js
var PlaylistPanelVideoWrapper = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.primary = parser_default.parseItem(data.primaryRenderer);
    this.counterpart = ((_a5 = data.counterpart) === null || _a5 === void 0 ? void 0 : _a5.map((item) => parser_default.parseItem(item.counterpartRenderer))) || [];
  }
};
__name(PlaylistPanelVideoWrapper, "PlaylistPanelVideoWrapper");
PlaylistPanelVideoWrapper.type = "PlaylistPanelVideoWrapper";
var PlaylistPanelVideoWrapper_default = PlaylistPanelVideoWrapper;

// dist/src/parser/classes/PlaylistSidebar.js
var PlaylistSidebar = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parse(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(PlaylistSidebar, "PlaylistSidebar");
PlaylistSidebar.type = "PlaylistSidebar";
var PlaylistSidebar_default = PlaylistSidebar;

// dist/src/parser/classes/PlaylistSidebarPrimaryInfo.js
var PlaylistSidebarPrimaryInfo = class extends YTNode {
  constructor(data) {
    super();
    this.stats = data.stats.map((stat) => new Text_default(stat));
    this.thumbnail_renderer = parser_default.parse(data.thumbnailRenderer);
    this.title = new Text_default(data.title);
    this.menu = parser_default.parseItem(data.menu);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.description = new Text_default(data.description);
  }
};
__name(PlaylistSidebarPrimaryInfo, "PlaylistSidebarPrimaryInfo");
PlaylistSidebarPrimaryInfo.type = "PlaylistSidebarPrimaryInfo";
var PlaylistSidebarPrimaryInfo_default = PlaylistSidebarPrimaryInfo;

// dist/src/parser/classes/PlaylistSidebarSecondaryInfo.js
var PlaylistSidebarSecondaryInfo = class extends YTNode {
  constructor(data) {
    super();
    this.owner = parser_default.parse(data.videoOwner) || null;
    this.button = parser_default.parse(data.button) || null;
  }
};
__name(PlaylistSidebarSecondaryInfo, "PlaylistSidebarSecondaryInfo");
PlaylistSidebarSecondaryInfo.type = "PlaylistSidebarSecondaryInfo";
var PlaylistSidebarSecondaryInfo_default = PlaylistSidebarSecondaryInfo;

// dist/src/parser/classes/ThumbnailOverlayTimeStatus.js
var ThumbnailOverlayTimeStatus = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text_default(data.text).toString();
    this.style = data.style;
  }
};
__name(ThumbnailOverlayTimeStatus, "ThumbnailOverlayTimeStatus");
ThumbnailOverlayTimeStatus.type = "ThumbnailOverlayTimeStatus";
var ThumbnailOverlayTimeStatus_default = ThumbnailOverlayTimeStatus;

// dist/src/parser/classes/PlaylistVideo.js
var PlaylistVideo = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.index = new Text_default(data.index);
    this.title = new Text_default(data.title);
    this.author = new PlaylistAuthor_default(data.shortBylineText);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    this.set_video_id = data === null || data === void 0 ? void 0 : data.setVideoId;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.is_playable = data.isPlayable;
    this.menu = parser_default.parseItem(data.menu);
    const upcoming = data.upcomingEventData && Number(`${data.upcomingEventData.startTime}000`);
    if (upcoming) {
      this.upcoming = new Date(upcoming);
    }
    this.duration = {
      text: new Text_default(data.lengthText).text,
      seconds: parseInt(data.lengthSeconds)
    };
  }
  get is_live() {
    var _a5;
    return ((_a5 = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus_default)) === null || _a5 === void 0 ? void 0 : _a5.style) === "LIVE";
  }
  get is_upcoming() {
    var _a5;
    return ((_a5 = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus_default)) === null || _a5 === void 0 ? void 0 : _a5.style) === "UPCOMING";
  }
};
__name(PlaylistVideo, "PlaylistVideo");
PlaylistVideo.type = "PlaylistVideo";
var PlaylistVideo_default = PlaylistVideo;

// dist/src/parser/classes/PlaylistVideoList.js
var PlaylistVideoList = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.playlistId;
    this.is_editable = data.isEditable;
    this.can_reorder = data.canReorder;
    this.videos = parser_default.parse(data.contents);
  }
};
__name(PlaylistVideoList, "PlaylistVideoList");
PlaylistVideoList.type = "PlaylistVideoList";
var PlaylistVideoList_default = PlaylistVideoList;

// dist/src/parser/classes/PlaylistVideoThumbnail.js
var PlaylistVideoThumbnail = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = Thumbnail_default.fromResponse(data.thumbnail);
  }
};
__name(PlaylistVideoThumbnail, "PlaylistVideoThumbnail");
PlaylistVideoThumbnail.type = "PlaylistVideoThumbnail";
var PlaylistVideoThumbnail_default = PlaylistVideoThumbnail;

// dist/src/parser/classes/Poll.js
var Poll = class extends YTNode {
  constructor(data) {
    super();
    this.choices = data.choices.map((choice) => ({
      text: new Text_default(choice.text),
      select_endpoint: choice.selectServiceEndpoint ? new NavigationEndpoint_default(choice.selectServiceEndpoint) : null,
      deselect_endpoint: choice.deselectServiceEndpoint ? new NavigationEndpoint_default(choice.deselectServiceEndpoint) : null,
      vote_ratio_if_selected: (choice === null || choice === void 0 ? void 0 : choice.voteRatioIfSelected) || null,
      vote_percentage_if_selected: new Text_default(choice.votePercentageIfSelected),
      vote_ratio_if_not_selected: (choice === null || choice === void 0 ? void 0 : choice.voteRatioIfSelected) || null,
      vote_percentage_if_not_selected: new Text_default(choice.votePercentageIfSelected),
      image: choice.image ? Thumbnail_default.fromResponse(choice.image) : null
    }));
    if (data.type)
      this.poll_type = data.type;
    if (data.totalVotes)
      this.total_votes = new Text_default(data.totalVotes);
    if (data.liveChatPollId)
      this.live_chat_poll_id = data.liveChatPollId;
  }
};
__name(Poll, "Poll");
Poll.type = "Poll";
var Poll_default = Poll;

// dist/src/parser/classes/Post.js
var Post = class extends BackstagePost_default {
  constructor(data) {
    super(data);
  }
};
__name(Post, "Post");
Post.type = "Post";
var Post_default = Post;

// dist/src/parser/classes/PostMultiImage.js
var PostMultiImage = class extends YTNode {
  constructor(data) {
    super();
    this.images = parser_default.parseArray(data.images, BackstageImage_default);
  }
};
__name(PostMultiImage, "PostMultiImage");
PostMultiImage.type = "PostMultiImage";
var PostMultiImage_default = PostMultiImage;

// dist/src/parser/classes/ProfileColumn.js
var ProfileColumn = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parse(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(ProfileColumn, "ProfileColumn");
ProfileColumn.type = "ProfileColumn";
var ProfileColumn_default = ProfileColumn;

// dist/src/parser/classes/ProfileColumnStats.js
var ProfileColumnStats = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(ProfileColumnStats, "ProfileColumnStats");
ProfileColumnStats.type = "ProfileColumnStats";
var ProfileColumnStats_default = ProfileColumnStats;

// dist/src/parser/classes/ProfileColumnStatsEntry.js
var ProfileColumnStatsEntry = class extends YTNode {
  constructor(data) {
    super();
    this.label = new Text_default(data.label);
    this.value = new Text_default(data.value);
  }
};
__name(ProfileColumnStatsEntry, "ProfileColumnStatsEntry");
ProfileColumnStatsEntry.type = "ProfileColumnStatsEntry";
var ProfileColumnStatsEntry_default = ProfileColumnStatsEntry;

// dist/src/parser/classes/ProfileColumnUserInfo.js
var ProfileColumnUserInfo = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
  }
};
__name(ProfileColumnUserInfo, "ProfileColumnUserInfo");
ProfileColumnUserInfo.type = "ProfileColumnUserInfo";
var ProfileColumnUserInfo_default = ProfileColumnUserInfo;

// dist/src/parser/classes/RecognitionShelf.js
var RecognitionShelf = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.subtitle = new Text_default(data.subtitle);
    this.avatars = data.avatars.map((avatar) => new Thumbnail_default(avatar));
    this.button = parser_default.parseItem(data.button, Button_default);
    this.surface = data.surface;
  }
};
__name(RecognitionShelf, "RecognitionShelf");
RecognitionShelf.type = "RecognitionShelf";
var RecognitionShelf_default = RecognitionShelf;

// dist/src/parser/classes/ReelItem.js
var ReelItem = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.title = new Text_default(data.headline);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.views = new Text_default(data.viewCountText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(ReelItem, "ReelItem");
ReelItem.type = "ReelItem";
var ReelItem_default = ReelItem;

// dist/src/parser/classes/ReelShelf.js
var ReelShelf = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.items = parser_default.parse(data.items);
    this.endpoint = data.endpoint ? new NavigationEndpoint_default(data.endpoint) : null;
  }
  get contents() {
    return this.items;
  }
};
__name(ReelShelf, "ReelShelf");
ReelShelf.type = "ReelShelf";
var ReelShelf_default = ReelShelf;

// dist/src/parser/classes/RelatedChipCloud.js
var RelatedChipCloud = class extends YTNode {
  constructor(data) {
    super();
    this.content = parser_default.parse(data.content);
  }
};
__name(RelatedChipCloud, "RelatedChipCloud");
RelatedChipCloud.type = "RelatedChipCloud";
var RelatedChipCloud_default = RelatedChipCloud;

// dist/src/parser/classes/RichGrid.js
var RichGrid = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parseItem(data.header);
    this.contents = parser_default.parseArray(data.contents);
  }
};
__name(RichGrid, "RichGrid");
RichGrid.type = "RichGrid";
var RichGrid_default = RichGrid;

// dist/src/parser/classes/RichItem.js
var RichItem = class extends YTNode {
  constructor(data) {
    super();
    this.content = parser_default.parseItem(data.content);
  }
};
__name(RichItem, "RichItem");
RichItem.type = "RichItem";
var RichItem_default = RichItem;

// dist/src/parser/classes/RichListHeader.js
var RichListHeader = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.title = new Text_default(data.title);
    this.subtitle = new Text_default(data.subtitle);
    this.title_style = (_a5 = data === null || data === void 0 ? void 0 : data.titleStyle) === null || _a5 === void 0 ? void 0 : _a5.style;
    this.icon_type = (_b = data === null || data === void 0 ? void 0 : data.icon) === null || _b === void 0 ? void 0 : _b.iconType;
  }
};
__name(RichListHeader, "RichListHeader");
RichListHeader.type = "RichListHeader";
var RichListHeader_default = RichListHeader;

// dist/src/parser/classes/RichSection.js
var RichSection = class extends YTNode {
  constructor(data) {
    super();
    this.content = parser_default.parseItem(data.content);
  }
};
__name(RichSection, "RichSection");
RichSection.type = "RichSection";
var RichSection_default = RichSection;

// dist/src/parser/classes/RichShelf.js
var RichShelf = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.contents = parser_default.parseArray(data.contents);
    this.endpoint = data.endpoint ? new NavigationEndpoint_default(data.endpoint) : null;
  }
};
__name(RichShelf, "RichShelf");
RichShelf.type = "RichShelf";
var RichShelf_default = RichShelf;

// dist/src/parser/classes/SearchBox.js
var SearchBox = class extends YTNode {
  constructor(data) {
    super();
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
    this.search_button = parser_default.parse(data.searchButton);
    this.clear_button = parser_default.parse(data.clearButton);
    this.placeholder_text = new Text_default(data.placeholderText);
  }
};
__name(SearchBox, "SearchBox");
SearchBox.type = "SearchBox";
var SearchBox_default = SearchBox;

// dist/src/parser/classes/SearchRefinementCard.js
var SearchRefinementCard = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint_default(data.searchEndpoint);
    this.query = new Text_default(data.query).toString();
  }
};
__name(SearchRefinementCard, "SearchRefinementCard");
SearchRefinementCard.type = "SearchRefinementCard";
var SearchRefinementCard_default = SearchRefinementCard;

// dist/src/parser/classes/SearchSuggestionsSection.js
var SearchSuggestionsSection = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parse(data.contents);
  }
};
__name(SearchSuggestionsSection, "SearchSuggestionsSection");
SearchSuggestionsSection.type = "SearchSuggestionsSection";
var SearchSuggestionsSection_default = SearchSuggestionsSection;

// dist/src/parser/classes/SecondarySearchContainer.js
var SecondarySearchContainer = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parse(data.contents);
  }
};
__name(SecondarySearchContainer, "SecondarySearchContainer");
SecondarySearchContainer.type = "SecondarySearchContainer";
var SecondarySearchContainer_default = SecondarySearchContainer;

// dist/src/parser/classes/SectionList.js
var SectionList = class extends YTNode {
  constructor(data) {
    super();
    if (data.targetId) {
      this.target_id = data.targetId;
    }
    this.contents = parser_default.parseArray(data.contents);
    if (data.continuations) {
      if (data.continuations[0].nextContinuationData) {
        this.continuation = data.continuations[0].nextContinuationData.continuation;
      } else if (data.continuations[0].reloadContinuationData) {
        this.continuation = data.continuations[0].reloadContinuationData.continuation;
      }
    }
    if (data.header) {
      this.header = parser_default.parse(data.header);
    }
    if (data.subMenu) {
      this.sub_menu = parser_default.parseItem(data.subMenu);
    }
  }
};
__name(SectionList, "SectionList");
SectionList.type = "SectionList";
var SectionList_default = SectionList;

// dist/src/parser/classes/ToggleButton.js
var ToggleButton = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    super();
    this.text = new Text_default(data.defaultText);
    this.toggled_text = new Text_default(data.toggledText);
    this.tooltip = data.defaultTooltip;
    this.toggled_tooltip = data.toggledTooltip;
    this.is_toggled = data.isToggled;
    this.is_disabled = data.isDisabled;
    this.icon_type = data.defaultIcon.iconType;
    const acc_label = ((_c = (_b = (_a5 = data === null || data === void 0 ? void 0 : data.defaultText) === null || _a5 === void 0 ? void 0 : _a5.accessibility) === null || _b === void 0 ? void 0 : _b.accessibilityData) === null || _c === void 0 ? void 0 : _c.label) || ((_e = (_d = data === null || data === void 0 ? void 0 : data.accessibilityData) === null || _d === void 0 ? void 0 : _d.accessibilityData) === null || _e === void 0 ? void 0 : _e.label) || ((_f = data === null || data === void 0 ? void 0 : data.accessibility) === null || _f === void 0 ? void 0 : _f.label);
    if (this.icon_type == "LIKE") {
      this.like_count = parseInt(acc_label.replace(/\D/g, ""));
      this.short_like_count = new Text_default(data.defaultText).toString();
    }
    this.endpoint = ((_h = (_g = data.defaultServiceEndpoint) === null || _g === void 0 ? void 0 : _g.commandExecutorCommand) === null || _h === void 0 ? void 0 : _h.commands) ? new NavigationEndpoint_default(data.defaultServiceEndpoint.commandExecutorCommand.commands.pop()) : new NavigationEndpoint_default(data.defaultServiceEndpoint);
    this.toggled_endpoint = new NavigationEndpoint_default(data.toggledServiceEndpoint);
    this.button_id = ((_k = (_j = data.toggleButtonSupportedData) === null || _j === void 0 ? void 0 : _j.toggleButtonIdData) === null || _k === void 0 ? void 0 : _k.id) || null;
    this.target_id = data.targetId || null;
  }
};
__name(ToggleButton, "ToggleButton");
ToggleButton.type = "ToggleButton";
var ToggleButton_default = ToggleButton;

// dist/src/parser/classes/SegmentedLikeDislikeButton.js
var SegmentedLikeDislikeButton = class extends YTNode {
  constructor(data) {
    super();
    this.like_button = parser_default.parseItem(data.likeButton, ToggleButton_default);
    this.dislike_button = parser_default.parseItem(data.dislikeButton, ToggleButton_default);
  }
};
__name(SegmentedLikeDislikeButton, "SegmentedLikeDislikeButton");
SegmentedLikeDislikeButton.type = "SegmentedLikeDislikeButton";
var SegmentedLikeDislikeButton_default = SegmentedLikeDislikeButton;

// dist/src/parser/classes/SettingBoolean.js
var SettingBoolean = class extends YTNode {
  constructor(data) {
    super();
    if (data.title) {
      this.title = new Text_default(data.title);
    }
    if (data.summary) {
      this.summary = new Text_default(data.summary);
    }
    if (data.enableServiceEndpoint) {
      this.enable_endpoint = new NavigationEndpoint_default(data.enableServiceEndpoint);
    }
    if (data.disableServiceEndpoint) {
      this.disable_endpoint = new NavigationEndpoint_default(data.disableServiceEndpoint);
    }
    this.item_id = data.itemId;
  }
};
__name(SettingBoolean, "SettingBoolean");
SettingBoolean.type = "SettingBoolean";
var SettingBoolean_default = SettingBoolean;

// dist/src/parser/classes/SettingsCheckbox.js
var SettingsCheckbox = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.help_text = new Text_default(data.helpText);
    this.enabled = data.enabled;
    this.disabled = data.disabled;
    this.id = data.id;
  }
};
__name(SettingsCheckbox, "SettingsCheckbox");
SettingsCheckbox.type = "SettingsCheckbox";
var SettingsCheckbox_default = SettingsCheckbox;

// dist/src/parser/classes/SettingsSwitch.js
var SettingsSwitch = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.subtitle = new Text_default(data.subtitle);
    this.enabled = data.enabled;
    this.enable_endpoint = new NavigationEndpoint_default(data.enableServiceEndpoint);
    this.disable_endpoint = new NavigationEndpoint_default(data.disableServiceEndpoint);
  }
};
__name(SettingsSwitch, "SettingsSwitch");
SettingsSwitch.type = "SettingsSwitch";
var SettingsSwitch_default = SettingsSwitch;

// dist/src/parser/classes/SettingsOptions.js
var SettingsOptions = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    if (Reflect.has(data, "text")) {
      this.text = new Text_default(data.text).toString();
    }
    if (Reflect.has(data, "options")) {
      this.options = parser_default.parseArray(data.options, [
        SettingsSwitch_default,
        Dropdown_default,
        CopyLink_default,
        SettingsCheckbox_default,
        ChannelOptions_default
      ]);
    }
  }
};
__name(SettingsOptions, "SettingsOptions");
SettingsOptions.type = "SettingsOptions";
var SettingsOptions_default = SettingsOptions;

// dist/src/parser/classes/SettingsSidebar.js
var SettingsSidebar = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.items = parser_default.parseArray(data.items, CompactLink_default);
  }
  get contents() {
    return this.items;
  }
};
__name(SettingsSidebar, "SettingsSidebar");
SettingsSidebar.type = "SettingsSidebar";
var SettingsSidebar_default = SettingsSidebar;

// dist/src/parser/classes/Shelf.js
var Shelf = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.title = new Text_default(data.title);
    if (data.endpoint) {
      this.endpoint = new NavigationEndpoint_default(data.endpoint);
    }
    this.content = parser_default.parseItem(data.content) || null;
    if ((_a5 = data.icon) === null || _a5 === void 0 ? void 0 : _a5.iconType) {
      this.icon_type = (_b = data.icon) === null || _b === void 0 ? void 0 : _b.iconType;
    }
    if (data.menu) {
      this.menu = parser_default.parseItem(data.menu);
    }
  }
};
__name(Shelf, "Shelf");
Shelf.type = "Shelf";
var Shelf_default = Shelf;

// dist/src/parser/classes/ShowingResultsFor.js
var ShowingResultsFor = class extends YTNode {
  constructor(data) {
    super();
    this.corrected_query = new Text_default(data.correctedQuery);
    this.endpoint = new NavigationEndpoint_default(data.correctedQueryEndpoint);
    this.original_query_endpoint = new NavigationEndpoint_default(data.originalQueryEndpoint);
    this.original_query = new Text_default(data.originalQuery);
    this.showing_results_for = new Text_default(data.showingResultsFor);
    this.search_instead_for = new Text_default(data.searchInsteadFor);
  }
};
__name(ShowingResultsFor, "ShowingResultsFor");
ShowingResultsFor.type = "ShowingResultsFor";
var ShowingResultsFor_default = ShowingResultsFor;

// dist/src/parser/classes/SimpleCardContent.js
var SimpleCardContent = class extends YTNode {
  constructor(data) {
    super();
    this.image = Thumbnail_default.fromResponse(data.image);
    this.title = new Text_default(data.title);
    this.display_domain = new Text_default(data.displayDomain);
    this.show_link_icon = data.showLinkIcon;
    this.call_to_action = data.callToAction;
    this.endpoint = new NavigationEndpoint_default(data.command);
  }
};
__name(SimpleCardContent, "SimpleCardContent");
SimpleCardContent.type = "SimpleCardContent";
var SimpleCardContent_default = SimpleCardContent;

// dist/src/parser/classes/SimpleCardTeaser.js
var SimpleCardTeaser = class extends YTNode {
  constructor(data) {
    super();
    this.message = new Text_default(data.message);
    this.prominent = data.prominent;
  }
};
__name(SimpleCardTeaser, "SimpleCardTeaser");
SimpleCardTeaser.type = "SimpleCardTeaser";
var SimpleCardTeaser_default = SimpleCardTeaser;

// dist/src/parser/classes/SimpleTextSection.js
var SimpleTextSection = class extends YTNode {
  constructor(data) {
    super();
    this.lines = data.lines.map((line) => new Text_default(line));
    this.style = data.layoutStyle;
  }
};
__name(SimpleTextSection, "SimpleTextSection");
SimpleTextSection.type = "SimpleTextSection";
var SimpleTextSection_default = SimpleTextSection;

// dist/src/parser/classes/SingleActionEmergencySupport.js
var SingleActionEmergencySupport = class extends YTNode {
  constructor(data) {
    super();
    this.action_text = new Text_default(data.actionText);
    this.nav_text = new Text_default(data.navigationText);
    this.details = new Text_default(data.detailsText);
    this.icon_type = data.icon.iconType;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(SingleActionEmergencySupport, "SingleActionEmergencySupport");
SingleActionEmergencySupport.type = "SingleActionEmergencySupport";
var SingleActionEmergencySupport_default = SingleActionEmergencySupport;

// dist/src/parser/classes/Tab.js
var Tab = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title || "N/A";
    this.selected = data.selected || false;
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
    this.content = parser_default.parseItem(data.content, [SectionList_default, MusicQueue_default, RichGrid_default]);
  }
};
__name(Tab, "Tab");
Tab.type = "Tab";
var Tab_default = Tab;

// dist/src/parser/classes/SingleColumnBrowseResults.js
var SingleColumnBrowseResults = class extends YTNode {
  constructor(data) {
    super();
    this.tabs = parser_default.parseArray(data.tabs, Tab_default);
  }
};
__name(SingleColumnBrowseResults, "SingleColumnBrowseResults");
SingleColumnBrowseResults.type = "SingleColumnBrowseResults";
var SingleColumnBrowseResults_default = SingleColumnBrowseResults;

// dist/src/parser/classes/SingleColumnMusicWatchNextResults.js
var SingleColumnMusicWatchNextResults = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parse(data);
  }
};
__name(SingleColumnMusicWatchNextResults, "SingleColumnMusicWatchNextResults");
SingleColumnMusicWatchNextResults.type = "SingleColumnMusicWatchNextResults";
var SingleColumnMusicWatchNextResults_default = SingleColumnMusicWatchNextResults;

// dist/src/parser/classes/SingleHeroImage.js
var SingleHeroImage = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.style = data.style;
  }
};
__name(SingleHeroImage, "SingleHeroImage");
SingleHeroImage.type = "SingleHeroImage";
var SingleHeroImage_default = SingleHeroImage;

// dist/src/parser/classes/SlimOwner.js
var SlimOwner = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = Thumbnail_default.fromResponse(data.thumbnail);
    this.title = new Text_default(data.title);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.subscribe_button = parser_default.parseItem(data.subscribeButton, SubscribeButton_default);
  }
};
__name(SlimOwner, "SlimOwner");
SlimOwner.type = "SlimOwner";
var SlimOwner_default = SlimOwner;

// dist/src/parser/classes/SlimVideoMetadata.js
var SlimVideoMetadata = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.collapsed_subtitle = new Text_default(data.collapsedSubtitle);
    this.expanded_subtitle = new Text_default(data.expandedSubtitle);
    this.owner = parser_default.parseItem(data.owner);
    this.description = new Text_default(data.description);
    this.video_id = data.videoId;
    this.date = new Text_default(data.dateText);
  }
};
__name(SlimVideoMetadata, "SlimVideoMetadata");
SlimVideoMetadata.type = "SlimVideoMetadata";
var SlimVideoMetadata_default = SlimVideoMetadata;

// dist/src/parser/classes/SortFilterSubMenu.js
var SortFilterSubMenu = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c;
    super();
    if (data.title) {
      this.title = data.title;
    }
    if ((_a5 = data.icon) === null || _a5 === void 0 ? void 0 : _a5.iconType) {
      this.icon_type = data.icon.iconType;
    }
    if ((_c = (_b = data.accessibility) === null || _b === void 0 ? void 0 : _b.accessibilityData) === null || _c === void 0 ? void 0 : _c.label) {
      this.label = data.accessibility.accessibilityData.label;
    }
    if (data.tooltip) {
      this.tooltip = data.tooltip;
    }
    if (data.subMenuItems) {
      this.sub_menu_items = data.subMenuItems.map((item) => {
        var _a6, _b2;
        return {
          title: item.title,
          selected: item.selected,
          continuation: (_b2 = (_a6 = item.continuation) === null || _a6 === void 0 ? void 0 : _a6.reloadContinuationData) === null || _b2 === void 0 ? void 0 : _b2.continuation,
          endpoint: new NavigationEndpoint_default(item.serviceEndpoint || item.navigationEndpoint),
          subtitle: item.subtitle || null
        };
      });
    }
  }
};
__name(SortFilterSubMenu, "SortFilterSubMenu");
SortFilterSubMenu.type = "SortFilterSubMenu";
var SortFilterSubMenu_default = SortFilterSubMenu;

// dist/src/parser/classes/SubFeedOption.js
var SubFeedOption = class extends YTNode {
  constructor(data) {
    super();
    this.name = new Text_default(data.name);
    this.is_selected = data.isSelected;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(SubFeedOption, "SubFeedOption");
SubFeedOption.type = "SubFeedOption";
var SubFeedOption_default = SubFeedOption;

// dist/src/parser/classes/SubFeedSelector.js
var SubFeedSelector = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.options = parser_default.parse(data.options);
  }
};
__name(SubFeedSelector, "SubFeedSelector");
SubFeedSelector.type = "SubFeedSelector";
var SubFeedSelector_default = SubFeedSelector;

// dist/src/parser/classes/Tabbed.js
var Tabbed = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parse(data);
  }
};
__name(Tabbed, "Tabbed");
Tabbed.type = "Tabbed";
var Tabbed_default = Tabbed;

// dist/src/parser/classes/TabbedSearchResults.js
var TabbedSearchResults = class extends YTNode {
  constructor(data) {
    super();
    this.tabs = parser_default.parseArray(data.tabs, Tab_default);
  }
};
__name(TabbedSearchResults, "TabbedSearchResults");
TabbedSearchResults.type = "TabbedSearchResults";
var TabbedSearchResults_default = TabbedSearchResults;

// dist/src/parser/classes/TextHeader.js
var TextHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.style = data.style;
  }
};
__name(TextHeader, "TextHeader");
TextHeader.type = "TextHeader";
var TextHeader_default = TextHeader;

// dist/src/parser/classes/ThumbnailLandscapePortrait.js
var ThumbnailLandscapePortrait = class extends YTNode {
  constructor(data) {
    super();
    this.landscape = Thumbnail_default.fromResponse(data.landscape);
    this.portrait = Thumbnail_default.fromResponse(data.portrait);
  }
};
__name(ThumbnailLandscapePortrait, "ThumbnailLandscapePortrait");
ThumbnailLandscapePortrait.type = "ThumbnailLandscapePortrait";
var ThumbnailLandscapePortrait_default = ThumbnailLandscapePortrait;

// dist/src/parser/classes/ThumbnailOverlayBottomPanel.js
var ThumbnailOverlayBottomPanel = class extends YTNode {
  constructor(data) {
    super();
    this.icon_type = data.icon.iconType;
  }
};
__name(ThumbnailOverlayBottomPanel, "ThumbnailOverlayBottomPanel");
ThumbnailOverlayBottomPanel.type = "ThumbnailOverlayBottomPanel";
var ThumbnailOverlayBottomPanel_default = ThumbnailOverlayBottomPanel;

// dist/src/parser/classes/ThumbnailOverlayEndorsement.js
var ThumbnailOverlayEndorsement = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text_default(data.text).toString();
  }
};
__name(ThumbnailOverlayEndorsement, "ThumbnailOverlayEndorsement");
ThumbnailOverlayEndorsement.type = "ThumbnailOverlayEndorsement";
var ThumbnailOverlayEndorsement_default = ThumbnailOverlayEndorsement;

// dist/src/parser/classes/ThumbnailOverlayHoverText.js
var ThumbnailOverlayHoverText = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text_default(data.text);
    this.icon_type = data.icon.iconType;
  }
};
__name(ThumbnailOverlayHoverText, "ThumbnailOverlayHoverText");
ThumbnailOverlayHoverText.type = "ThumbnailOverlayHoverText";
var ThumbnailOverlayHoverText_default = ThumbnailOverlayHoverText;

// dist/src/parser/classes/ThumbnailOverlayInlineUnplayable.js
var ThumbnailOverlayInlineUnplayable = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text_default(data.text).toString();
    this.icon_type = data.icon.iconType;
  }
};
__name(ThumbnailOverlayInlineUnplayable, "ThumbnailOverlayInlineUnplayable");
ThumbnailOverlayInlineUnplayable.type = "ThumbnailOverlayInlineUnplayable";
var ThumbnailOverlayInlineUnplayable_default = ThumbnailOverlayInlineUnplayable;

// dist/src/parser/classes/ThumbnailOverlayLoadingPreview.js
var ThumbnailOverlayLoadingPreview = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text_default(data.text);
  }
};
__name(ThumbnailOverlayLoadingPreview, "ThumbnailOverlayLoadingPreview");
ThumbnailOverlayLoadingPreview.type = "ThumbnailOverlayLoadingPreview";
var ThumbnailOverlayLoadingPreview_default = ThumbnailOverlayLoadingPreview;

// dist/src/parser/classes/ThumbnailOverlayNowPlaying.js
var ThumbnailOverlayNowPlaying = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text_default(data.text).toString();
  }
};
__name(ThumbnailOverlayNowPlaying, "ThumbnailOverlayNowPlaying");
ThumbnailOverlayNowPlaying.type = "ThumbnailOverlayNowPlaying";
var ThumbnailOverlayNowPlaying_default = ThumbnailOverlayNowPlaying;

// dist/src/parser/classes/ThumbnailOverlayPinking.js
var ThumbnailOverlayPinking = class extends YTNode {
  constructor(data) {
    super();
    this.hack = data.hack;
  }
};
__name(ThumbnailOverlayPinking, "ThumbnailOverlayPinking");
ThumbnailOverlayPinking.type = "ThumbnailOverlayPinking";
var ThumbnailOverlayPinking_default = ThumbnailOverlayPinking;

// dist/src/parser/classes/ThumbnailOverlayPlaybackStatus.js
var ThumbnailOverlayPlaybackStatus = class extends YTNode {
  constructor(data) {
    super();
    this.text = data.texts.map((text) => new Text_default(text))[0].toString();
  }
};
__name(ThumbnailOverlayPlaybackStatus, "ThumbnailOverlayPlaybackStatus");
ThumbnailOverlayPlaybackStatus.type = "ThumbnailOverlayPlaybackStatus";
var ThumbnailOverlayPlaybackStatus_default = ThumbnailOverlayPlaybackStatus;

// dist/src/parser/classes/ThumbnailOverlayResumePlayback.js
var ThumbnailOverlayResumePlayback = class extends YTNode {
  constructor(data) {
    super();
    this.percent_duration_watched = data.percentDurationWatched;
  }
};
__name(ThumbnailOverlayResumePlayback, "ThumbnailOverlayResumePlayback");
ThumbnailOverlayResumePlayback.type = "ThumbnailOverlayResumePlayback";
var ThumbnailOverlayResumePlayback_default = ThumbnailOverlayResumePlayback;

// dist/src/parser/classes/ThumbnailOverlaySidePanel.js
var ThumbnailOverlaySidePanel = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text_default(data.text);
    this.icon_type = data.icon.iconType;
  }
};
__name(ThumbnailOverlaySidePanel, "ThumbnailOverlaySidePanel");
ThumbnailOverlaySidePanel.type = "ThumbnailOverlaySidePanel";
var ThumbnailOverlaySidePanel_default = ThumbnailOverlaySidePanel;

// dist/src/parser/classes/ThumbnailOverlayToggleButton.js
var ThumbnailOverlayToggleButton = class extends YTNode {
  constructor(data) {
    super();
    this.is_toggled = data.isToggled || null;
    this.icon_type = {
      toggled: data.toggledIcon.iconType,
      untoggled: data.untoggledIcon.iconType
    };
    this.tooltip = {
      toggled: data.toggledTooltip,
      untoggled: data.untoggledTooltip
    };
    this.toggled_endpoint = new NavigationEndpoint_default(data.toggledServiceEndpoint);
    this.untoggled_endpoint = new NavigationEndpoint_default(data.untoggledServiceEndpoint);
  }
};
__name(ThumbnailOverlayToggleButton, "ThumbnailOverlayToggleButton");
ThumbnailOverlayToggleButton.type = "ThumbnailOverlayToggleButton";
var ThumbnailOverlayToggleButton_default = ThumbnailOverlayToggleButton;

// dist/src/parser/classes/TimedMarkerDecoration.js
var TimedMarkerDecoration = class extends YTNode {
  constructor(data) {
    super();
    this.visible_time_range_start_millis = data.visibleTimeRangeStartMillis;
    this.visible_time_range_end_millis = data.visibleTimeRangeEndMillis;
    this.decoration_time_millis = data.decorationTimeMillis;
    this.label = new Text_default(data.label);
    this.icon = data.icon;
  }
};
__name(TimedMarkerDecoration, "TimedMarkerDecoration");
TimedMarkerDecoration.type = "TimedMarkerDecoration";
var TimedMarkerDecoration_default = TimedMarkerDecoration;

// dist/src/parser/classes/TitleAndButtonListHeader.js
var TitleAndButtonListHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
  }
};
__name(TitleAndButtonListHeader, "TitleAndButtonListHeader");
TitleAndButtonListHeader.type = "TitleAndButtonListHeader";
var TitleAndButtonListHeader_default = TitleAndButtonListHeader;

// dist/src/parser/classes/ToggleMenuServiceItem.js
var ToggleMenuServiceItem = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text_default(data.defaultText);
    this.toggled_text = new Text_default(data.toggledText);
    this.icon_type = data.defaultIcon.iconType;
    this.toggled_icon_type = data.toggledIcon.iconType;
    this.endpoint = new NavigationEndpoint_default(data.toggledServiceEndpoint);
  }
};
__name(ToggleMenuServiceItem, "ToggleMenuServiceItem");
ToggleMenuServiceItem.type = "ToggleMenuServiceItem";
var ToggleMenuServiceItem_default = ToggleMenuServiceItem;

// dist/src/parser/classes/Tooltip.js
var Tooltip = class extends YTNode {
  constructor(data) {
    super();
    this.promo_config = {
      promo_id: data.promoConfig.promoId,
      impression_endpoints: data.promoConfig.impressionEndpoints.map((endpoint) => new NavigationEndpoint_default(endpoint)),
      accept: new NavigationEndpoint_default(data.promoConfig.acceptCommand),
      dismiss: new NavigationEndpoint_default(data.promoConfig.dismissCommand)
    };
    this.target_id = data.targetId;
    this.details = new Text_default(data.detailsText);
    this.suggested_position = data.suggestedPosition.type;
    this.dismiss_stratedy = data.dismissStrategy.type;
    this.dwell_time_ms = parseInt(data.dwellTimeMs);
  }
};
__name(Tooltip, "Tooltip");
Tooltip.type = "Tooltip";
var Tooltip_default = Tooltip;

// dist/src/parser/classes/TopicChannelDetails.js
var TopicChannelDetails = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.title = new Text_default(data.title);
    this.avatar = Thumbnail_default.fromResponse((_a5 = data.thumbnail) !== null && _a5 !== void 0 ? _a5 : data.avatar);
    this.subtitle = new Text_default(data.subtitle);
    this.subscribe_button = parser_default.parseItem(data.subscribeButton, SubscribeButton_default);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(TopicChannelDetails, "TopicChannelDetails");
TopicChannelDetails.type = "TopicChannelDetails";
var TopicChannelDetails_default = TopicChannelDetails;

// dist/src/parser/classes/TwoColumnBrowseResults.js
var TwoColumnBrowseResults = class extends YTNode {
  constructor(data) {
    super();
    this.tabs = parser_default.parse(data.tabs);
    this.secondary_contents = parser_default.parse(data.secondaryContents);
  }
};
__name(TwoColumnBrowseResults, "TwoColumnBrowseResults");
TwoColumnBrowseResults.type = "TwoColumnBrowseResults";
var TwoColumnBrowseResults_default = TwoColumnBrowseResults;

// dist/src/parser/classes/TwoColumnSearchResults.js
var TwoColumnSearchResults = class extends YTNode {
  constructor(data) {
    super();
    this.primary_contents = parser_default.parse(data.primaryContents);
    this.secondary_contents = parser_default.parse(data.secondaryContents);
  }
};
__name(TwoColumnSearchResults, "TwoColumnSearchResults");
TwoColumnSearchResults.type = "TwoColumnSearchResults";
var TwoColumnSearchResults_default = TwoColumnSearchResults;

// dist/src/parser/classes/TwoColumnWatchNextResults.js
var TwoColumnWatchNextResults = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.results = parser_default.parseArray((_a5 = data.results) === null || _a5 === void 0 ? void 0 : _a5.results.contents);
    this.secondary_results = parser_default.parseArray((_b = data.secondaryResults) === null || _b === void 0 ? void 0 : _b.secondaryResults.results);
    this.conversation_bar = parser_default.parseItem(data === null || data === void 0 ? void 0 : data.conversationBar);
  }
};
__name(TwoColumnWatchNextResults, "TwoColumnWatchNextResults");
TwoColumnWatchNextResults.type = "TwoColumnWatchNextResults";
var TwoColumnWatchNextResults_default = TwoColumnWatchNextResults;

// dist/src/parser/classes/UniversalWatchCard.js
var UniversalWatchCard = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parseItem(data.header);
    this.call_to_action = parser_default.parseItem(data.callToAction);
    this.sections = parser_default.parseArray(data.sections);
    if (data.collapsedLabel) {
      this.collapsed_label = new Text_default(data.collapsedLabel);
    }
  }
};
__name(UniversalWatchCard, "UniversalWatchCard");
UniversalWatchCard.type = "UniversalWatchCard";
var UniversalWatchCard_default = UniversalWatchCard;

// dist/src/parser/classes/UpsellDialog.js
var UpsellDialog = class extends YTNode {
  constructor(data) {
    super();
    this.message_title = new Text_default(data.dialogMessageTitle);
    this.message_text = new Text_default(data.dialogMessageText);
    this.action_button = parser_default.parseItem(data.actionButton);
    this.dismiss_button = parser_default.parseItem(data.dismissButton);
    this.is_visible = data.isVisible;
  }
};
__name(UpsellDialog, "UpsellDialog");
UpsellDialog.type = "UpsellDialog";
var UpsellDialog_default = UpsellDialog;

// dist/src/parser/classes/VerticalList.js
var VerticalList = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parse(data.items);
    this.collapsed_item_count = data.collapsedItemCount;
    this.collapsed_state_button_text = new Text_default(data.collapsedStateButtonText);
  }
  get contents() {
    return this.items;
  }
};
__name(VerticalList, "VerticalList");
VerticalList.type = "VerticalList";
var VerticalList_default = VerticalList;

// dist/src/parser/classes/VerticalWatchCardList.js
var VerticalWatchCardList = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items);
    this.contents = this.items;
    this.view_all_text = new Text_default(data.viewAllText);
    this.view_all_endpoint = new NavigationEndpoint_default(data.viewAllEndpoint);
  }
};
__name(VerticalWatchCardList, "VerticalWatchCardList");
VerticalWatchCardList.type = "VerticalWatchCardList";
var VerticalWatchCardList_default = VerticalWatchCardList;

// dist/src/parser/classes/Video.js
var Video = class extends YTNode {
  constructor(data) {
    var _a5, _b, _c, _d;
    super();
    const overlay_time_status = ((_a5 = data.thumbnailOverlays.find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a5 === void 0 ? void 0 : _a5.thumbnailOverlayTimeStatusRenderer.text) || "N/A";
    this.id = data.videoId;
    this.title = new Text_default(data.title);
    this.description_snippet = data.descriptionSnippet ? new Text_default(data.descriptionSnippet) : null;
    this.snippets = ((_b = data.detailedMetadataSnippets) === null || _b === void 0 ? void 0 : _b.map((snippet) => ({
      text: new Text_default(snippet.snippetText),
      hover_text: new Text_default(snippet.snippetHoverText)
    }))) || [];
    this.expandable_metadata = parser_default.parseItem(data.expandableMetadata);
    this.thumbnails = Thumbnail_default.fromResponse(data.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    this.rich_thumbnail = data.richThumbnail ? parser_default.parseItem(data.richThumbnail) : null;
    this.author = new Author_default(data.ownerText, data.ownerBadges, (_d = (_c = data.channelThumbnailSupportedRenderers) === null || _c === void 0 ? void 0 : _c.channelThumbnailWithLinkRenderer) === null || _d === void 0 ? void 0 : _d.thumbnail);
    this.badges = parser_default.parseArray(data.badges, MetadataBadge_default);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.published = new Text_default(data.publishedTimeText);
    this.view_count = new Text_default(data.viewCountText);
    this.short_view_count = new Text_default(data.shortViewCountText);
    const upcoming = data.upcomingEventData && Number(`${data.upcomingEventData.startTime}000`);
    if (upcoming) {
      this.upcoming = new Date(upcoming);
    }
    this.duration = {
      text: data.lengthText ? new Text_default(data.lengthText).text : new Text_default(overlay_time_status).text,
      seconds: timeToSeconds(data.lengthText ? new Text_default(data.lengthText).text : new Text_default(overlay_time_status).text)
    };
    this.show_action_menu = data.showActionMenu;
    this.is_watched = data.isWatched || false;
    this.menu = parser_default.parseItem(data.menu, Menu_default);
    this.search_video_result_entity_key = data.searchVideoResultEntityKey;
  }
  get description() {
    var _a5;
    if (this.snippets.length > 0) {
      return this.snippets.map((snip) => snip.text.toString()).join("");
    }
    return ((_a5 = this.description_snippet) === null || _a5 === void 0 ? void 0 : _a5.toString()) || "";
  }
  get is_live() {
    return this.badges.some((badge) => {
      if (badge.style === "BADGE_STYLE_TYPE_LIVE_NOW" || badge.label === "LIVE")
        return true;
    });
  }
  get is_upcoming() {
    return this.upcoming && this.upcoming > new Date();
  }
  get is_premiere() {
    return this.badges.some((badge) => badge.label === "PREMIERE");
  }
  get is_4k() {
    return this.badges.some((badge) => badge.label === "4K");
  }
  get has_captions() {
    return this.badges.some((badge) => badge.label === "CC");
  }
  get best_thumbnail() {
    return this.thumbnails[0];
  }
};
__name(Video, "Video");
Video.type = "Video";
var Video_default = Video;

// dist/src/parser/classes/VideoCard.js
var VideoCard = class extends Video_default {
  constructor(data) {
    super(data);
  }
};
__name(VideoCard, "VideoCard");
VideoCard.type = "VideoCard";
var VideoCard_default = VideoCard;

// dist/src/parser/classes/VideoInfoCardContent.js
var VideoInfoCardContent = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.videoTitle);
    this.channel_name = new Text_default(data.channelName);
    this.view_count = new Text_default(data.viewCountText);
    this.video_thumbnails = Thumbnail_default.fromResponse(data.videoThumbnail);
    this.duration = new Text_default(data.lengthString);
    this.endpoint = new NavigationEndpoint_default(data.action);
  }
};
__name(VideoInfoCardContent, "VideoInfoCardContent");
VideoInfoCardContent.type = "VideoInfoCardContent";
var VideoInfoCardContent_default = VideoInfoCardContent;

// dist/src/parser/classes/VideoOwner.js
var VideoOwner = class extends YTNode {
  constructor(data) {
    super();
    this.subscription_button = data.subscriptionButton || null;
    this.subscriber_count = new Text_default(data.subscriberCountText);
    this.author = new Author_default(Object.assign(Object.assign({}, data.title), { navigationEndpoint: data.navigationEndpoint }), data.badges, data.thumbnail);
  }
};
__name(VideoOwner, "VideoOwner");
VideoOwner.type = "VideoOwner";
var VideoOwner_default = VideoOwner;

// dist/src/parser/classes/VideoPrimaryInfo.js
var VideoPrimaryInfo = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.super_title_link = new Text_default(data.superTitleLink);
    this.view_count = new Text_default(data.viewCount.videoViewCountRenderer.viewCount);
    this.short_view_count = new Text_default(data.viewCount.videoViewCountRenderer.shortViewCount);
    this.published = new Text_default(data.dateText);
    this.menu = parser_default.parseItem(data.videoActions, Menu_default);
  }
};
__name(VideoPrimaryInfo, "VideoPrimaryInfo");
VideoPrimaryInfo.type = "VideoPrimaryInfo";
var VideoPrimaryInfo_default = VideoPrimaryInfo;

// dist/src/parser/classes/VideoSecondaryInfo.js
var VideoSecondaryInfo = class extends YTNode {
  constructor(data) {
    super();
    this.owner = parser_default.parseItem(data.owner);
    this.description = new Text_default(data.description);
    this.subscribe_button = parser_default.parseItem(data.subscribeButton, [SubscribeButton_default, Button_default]);
    this.metadata = parser_default.parseItem(data.metadataRowContainer, MetadataRowContainer_default);
    this.show_more_text = data.showMoreText;
    this.show_less_text = data.showLessText;
    this.default_expanded = data.defaultExpanded;
    this.description_collapsed_lines = data.descriptionCollapsedLines;
  }
};
__name(VideoSecondaryInfo, "VideoSecondaryInfo");
VideoSecondaryInfo.type = "VideoSecondaryInfo";
var VideoSecondaryInfo_default = VideoSecondaryInfo;

// dist/src/parser/classes/WatchCardCompactVideo.js
var WatchCardCompactVideo = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.subtitle = new Text_default(data.subtitle);
    this.duration = {
      text: new Text_default(data.lengthText).toString(),
      seconds: timeToSeconds(data.lengthText.simpleText)
    };
    this.style = data.style;
  }
};
__name(WatchCardCompactVideo, "WatchCardCompactVideo");
WatchCardCompactVideo.type = "WatchCardCompactVideo";
var WatchCardCompactVideo_default = WatchCardCompactVideo;

// dist/src/parser/classes/WatchCardHeroVideo.js
var WatchCardHeroVideo = class extends YTNode {
  constructor(data) {
    var _a5;
    super();
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.call_to_action_button = parser_default.parseItem(data.callToActionButton);
    this.hero_image = parser_default.parseItem(data.heroImage);
    this.label = ((_a5 = data.lengthText) === null || _a5 === void 0 ? void 0 : _a5.accessibility.accessibilityData.label) || "";
  }
};
__name(WatchCardHeroVideo, "WatchCardHeroVideo");
WatchCardHeroVideo.type = "WatchCardHeroVideo";
var WatchCardHeroVideo_default = WatchCardHeroVideo;

// dist/src/parser/classes/WatchCardRichHeader.js
var WatchCardRichHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text_default(data.title);
    this.title_endpoint = new NavigationEndpoint_default(data.titleNavigationEndpoint);
    this.subtitle = new Text_default(data.subtitle);
    this.author = new Author_default(data, data.titleBadge ? [data.titleBadge] : null, data.avatar);
    this.author.name = this.title.toString();
    this.style = data.style;
  }
};
__name(WatchCardRichHeader, "WatchCardRichHeader");
WatchCardRichHeader.type = "WatchCardRichHeader";
var WatchCardRichHeader_default = WatchCardRichHeader;

// dist/src/parser/classes/WatchCardSectionSequence.js
var WatchCardSectionSequence = class extends YTNode {
  constructor(data) {
    super();
    this.lists = parser_default.parseArray(data.lists);
  }
};
__name(WatchCardSectionSequence, "WatchCardSectionSequence");
WatchCardSectionSequence.type = "WatchCardSectionSequence";
var WatchCardSectionSequence_default = WatchCardSectionSequence;

// dist/src/parser/classes/WatchNextTabbedResults.js
var WatchNextTabbedResults = class extends TwoColumnBrowseResults_default {
  constructor(data) {
    super(data);
  }
};
__name(WatchNextTabbedResults, "WatchNextTabbedResults");
WatchNextTabbedResults.type = "WatchNextTabbedResults";
var WatchNextTabbedResults_default = WatchNextTabbedResults;

// dist/src/parser/classes/ytkids/AnchoredSection.js
var AnchoredSection = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.title = data.title;
    this.content = parser_default.parseItem(data.content);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.category_assets = {
      asset_key: (_a5 = data.categoryAssets) === null || _a5 === void 0 ? void 0 : _a5.assetKey,
      background_color: (_b = data.categoryAssets) === null || _b === void 0 ? void 0 : _b.backgroundColor
    };
    this.category_type = data.categoryType;
  }
};
__name(AnchoredSection, "AnchoredSection");
AnchoredSection.type = "AnchoredSection";
var AnchoredSection_default = AnchoredSection;

// dist/src/parser/classes/ytkids/KidsCategoriesHeader.js
var KidsCategoriesHeader = class extends YTNode {
  constructor(data) {
    super();
    this.category_tabs = parser_default.parseArray(data.categoryTabs);
    this.privacy_button = parser_default.parseItem(data.privacyButtonRenderer);
  }
};
__name(KidsCategoriesHeader, "KidsCategoriesHeader");
KidsCategoriesHeader.type = "kidsCategoriesHeader";
var KidsCategoriesHeader_default = KidsCategoriesHeader;

// dist/src/parser/classes/ytkids/KidsCategoryTab.js
var KidsCategoryTab = class extends YTNode {
  constructor(data) {
    var _a5, _b;
    super();
    this.title = new Text_default(data.title);
    this.category_assets = {
      asset_key: (_a5 = data.categoryAssets) === null || _a5 === void 0 ? void 0 : _a5.assetKey,
      background_color: (_b = data.categoryAssets) === null || _b === void 0 ? void 0 : _b.backgroundColor
    };
    this.category_type = data.categoryType;
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
  }
};
__name(KidsCategoryTab, "KidsCategoryTab");
KidsCategoryTab.type = "KidsCategoryTab";
var KidsCategoryTab_default = KidsCategoryTab;

// dist/src/parser/classes/ytkids/KidsHomeScreen.js
var KidsHomeScreen = class extends YTNode {
  constructor(data) {
    super();
    this.anchors = parser_default.parseArray(data.anchors);
  }
};
__name(KidsHomeScreen, "KidsHomeScreen");
KidsHomeScreen.type = "kidsHomeScreen";
var KidsHomeScreen_default = KidsHomeScreen;

// dist/src/parser/map.js
var YTNodes = {
  AccountChannel: AccountChannel_default,
  AccountItemSection: AccountItemSection_default,
  AccountItemSectionHeader: AccountItemSectionHeader_default,
  AccountSectionList: AccountSectionList_default,
  AppendContinuationItemsAction: AppendContinuationItemsAction_default,
  OpenPopupAction: OpenPopupAction_default,
  Alert: Alert_default,
  AnalyticsMainAppKeyMetrics: AnalyticsMainAppKeyMetrics_default,
  AnalyticsRoot: AnalyticsRoot_default,
  AnalyticsShortsCarouselCard: AnalyticsShortsCarouselCard_default,
  AnalyticsVideo: AnalyticsVideo_default,
  AnalyticsVodCarouselCard: AnalyticsVodCarouselCard_default,
  CtaGoToCreatorStudio: CtaGoToCreatorStudio_default,
  DataModelSection: DataModelSection_default,
  StatRow: StatRow_default,
  AudioOnlyPlayability: AudioOnlyPlayability_default,
  AutomixPreviewVideo: AutomixPreviewVideo_default,
  BackstageImage: BackstageImage_default,
  BackstagePost: BackstagePost_default,
  BackstagePostThread: BackstagePostThread_default,
  BrowseFeedActions: BrowseFeedActions_default,
  BrowserMediaSession: BrowserMediaSession_default,
  Button: Button_default,
  C4TabbedHeader: C4TabbedHeader_default,
  CallToActionButton: CallToActionButton_default,
  Card: Card_default,
  CardCollection: CardCollection_default,
  CarouselHeader: CarouselHeader_default,
  CarouselItem: CarouselItem_default,
  Channel: Channel_default,
  ChannelAboutFullMetadata: ChannelAboutFullMetadata_default,
  ChannelAgeGate: ChannelAgeGate_default,
  ChannelFeaturedContent: ChannelFeaturedContent_default,
  ChannelHeaderLinks: ChannelHeaderLinks_default,
  ChannelMetadata: ChannelMetadata_default,
  ChannelMobileHeader: ChannelMobileHeader_default,
  ChannelOptions: ChannelOptions_default,
  ChannelSubMenu: ChannelSubMenu_default,
  ChannelThumbnailWithLink: ChannelThumbnailWithLink_default,
  ChannelVideoPlayer: ChannelVideoPlayer_default,
  Chapter: Chapter_default,
  ChildVideo: ChildVideo_default,
  ChipCloud: ChipCloud_default,
  ChipCloudChip: ChipCloudChip_default,
  CollaboratorInfoCardContent: CollaboratorInfoCardContent_default,
  CollageHeroImage: CollageHeroImage_default,
  AuthorCommentBadge: AuthorCommentBadge_default,
  Comment: Comment_default,
  CommentActionButtons: CommentActionButtons_default,
  CommentDialog: CommentDialog_default,
  CommentReplies: CommentReplies_default,
  CommentReplyDialog: CommentReplyDialog_default,
  CommentsEntryPointHeader: CommentsEntryPointHeader_default,
  CommentsHeader: CommentsHeader_default,
  CommentSimplebox: CommentSimplebox_default,
  CommentThread: CommentThread_default,
  CreatorHeart: CreatorHeart_default,
  EmojiPicker: EmojiPicker_default,
  PdgCommentChip: PdgCommentChip_default,
  SponsorCommentBadge: SponsorCommentBadge_default,
  CompactChannel: CompactChannel_default,
  CompactLink: CompactLink_default,
  CompactMix: CompactMix_default,
  CompactPlaylist: CompactPlaylist_default,
  CompactStation: CompactStation_default,
  CompactVideo: CompactVideo_default,
  ConfirmDialog: ConfirmDialog_default,
  ContinuationItem: ContinuationItem_default,
  CopyLink: CopyLink_default,
  CreatePlaylistDialog: CreatePlaylistDialog_default,
  DecoratedPlayerBar: DecoratedPlayerBar_default,
  DefaultPromoPanel: DefaultPromoPanel_default,
  DidYouMean: DidYouMean_default,
  DownloadButton: DownloadButton_default,
  Dropdown: Dropdown_default,
  DropdownItem: DropdownItem_default,
  Element: Element_default,
  EmergencyOnebox: EmergencyOnebox_default,
  EmojiPickerCategory: EmojiPickerCategory_default,
  EmojiPickerCategoryButton: EmojiPickerCategoryButton_default,
  EmojiPickerUpsellCategory: EmojiPickerUpsellCategory_default,
  Endscreen: Endscreen_default,
  EndscreenElement: EndscreenElement_default,
  EndScreenPlaylist: EndScreenPlaylist_default,
  EndScreenVideo: EndScreenVideo_default,
  ExpandableMetadata: ExpandableMetadata_default,
  ExpandableTab: ExpandableTab_default,
  ExpandedShelfContents: ExpandedShelfContents_default,
  FeedFilterChipBar: FeedFilterChipBar_default,
  FeedTabbedHeader: FeedTabbedHeader_default,
  GameCard: GameCard_default,
  GameDetails: GameDetails_default,
  Grid: Grid_default,
  GridChannel: GridChannel_default,
  GridHeader: GridHeader_default,
  GridPlaylist: GridPlaylist_default,
  GridVideo: GridVideo_default,
  HashtagHeader: HashtagHeader_default,
  Heatmap: Heatmap_default,
  HeatMarker: HeatMarker_default,
  HighlightsCarousel: HighlightsCarousel_default,
  HistorySuggestion: HistorySuggestion_default,
  HorizontalCardList: HorizontalCardList_default,
  HorizontalList: HorizontalList_default,
  IconLink: IconLink_default,
  InteractiveTabbedHeader: InteractiveTabbedHeader_default,
  ItemSection: ItemSection_default,
  ItemSectionHeader: ItemSectionHeader_default,
  ItemSectionTab: ItemSectionTab_default,
  ItemSectionTabbedHeader: ItemSectionTabbedHeader_default,
  LikeButton: LikeButton_default,
  LiveChat: LiveChat_default,
  AddBannerToLiveChatCommand: AddBannerToLiveChatCommand_default,
  AddChatItemAction: AddChatItemAction_default,
  AddLiveChatTickerItemAction: AddLiveChatTickerItemAction_default,
  DimChatItemAction: DimChatItemAction_default,
  LiveChatAutoModMessage: LiveChatAutoModMessage_default,
  LiveChatBanner: LiveChatBanner_default,
  LiveChatBannerHeader: LiveChatBannerHeader_default,
  LiveChatBannerPoll: LiveChatBannerPoll_default,
  LiveChatMembershipItem: LiveChatMembershipItem_default,
  LiveChatPaidMessage: LiveChatPaidMessage_default,
  LiveChatPaidSticker: LiveChatPaidSticker_default,
  LiveChatPlaceholderItem: LiveChatPlaceholderItem_default,
  LiveChatProductItem: LiveChatProductItem_default,
  LiveChatRestrictedParticipation: LiveChatRestrictedParticipation_default,
  LiveChatTextMessage: LiveChatTextMessage_default,
  LiveChatTickerPaidMessageItem: LiveChatTickerPaidMessageItem_default,
  LiveChatTickerPaidStickerItem: LiveChatTickerPaidStickerItem_default,
  LiveChatTickerSponsorItem: LiveChatTickerSponsorItem_default,
  LiveChatViewerEngagementMessage: LiveChatViewerEngagementMessage_default,
  PollHeader: PollHeader_default,
  LiveChatActionPanel: LiveChatActionPanel_default,
  MarkChatItemAsDeletedAction: MarkChatItemAsDeletedAction_default,
  MarkChatItemsByAuthorAsDeletedAction: MarkChatItemsByAuthorAsDeletedAction_default,
  RemoveBannerForLiveChatCommand: RemoveBannerForLiveChatCommand_default,
  RemoveChatItemAction: RemoveChatItemAction_default,
  RemoveChatItemByAuthorAction: RemoveChatItemByAuthorAction_default,
  ReplaceChatItemAction: ReplaceChatItemAction_default,
  ReplayChatItemAction: ReplayChatItemAction_default,
  ShowLiveChatActionPanelAction: ShowLiveChatActionPanelAction_default,
  ShowLiveChatDialogAction: ShowLiveChatDialogAction_default,
  ShowLiveChatTooltipCommand: ShowLiveChatTooltipCommand_default,
  UpdateDateTextAction: UpdateDateTextAction_default,
  UpdateDescriptionAction: UpdateDescriptionAction_default,
  UpdateLiveChatPollAction: UpdateLiveChatPollAction_default,
  UpdateTitleAction: UpdateTitleAction_default,
  UpdateToggleButtonTextAction: UpdateToggleButtonTextAction_default,
  UpdateViewershipAction: UpdateViewershipAction_default,
  LiveChatAuthorBadge: LiveChatAuthorBadge_default,
  LiveChatDialog: LiveChatDialog_default,
  LiveChatHeader: LiveChatHeader_default,
  LiveChatItemList: LiveChatItemList_default,
  LiveChatMessageInput: LiveChatMessageInput_default,
  LiveChatParticipant: LiveChatParticipant_default,
  LiveChatParticipantsList: LiveChatParticipantsList_default,
  MacroMarkersListItem: MacroMarkersListItem_default,
  Menu: Menu_default,
  MenuNavigationItem: MenuNavigationItem_default,
  MenuServiceItem: MenuServiceItem_default,
  MenuServiceItemDownload: MenuServiceItemDownload_default,
  MultiPageMenu: MultiPageMenu_default,
  MultiPageMenuNotificationSection: MultiPageMenuNotificationSection_default,
  MusicMenuItemDivider: MusicMenuItemDivider_default,
  MusicMultiSelectMenu: MusicMultiSelectMenu_default,
  MusicMultiSelectMenuItem: MusicMultiSelectMenuItem_default,
  SimpleMenuHeader: SimpleMenuHeader_default,
  MerchandiseItem: MerchandiseItem_default,
  MerchandiseShelf: MerchandiseShelf_default,
  Message: Message_default,
  MetadataBadge: MetadataBadge_default,
  MetadataRow: MetadataRow_default,
  MetadataRowContainer: MetadataRowContainer_default,
  MetadataRowHeader: MetadataRowHeader_default,
  MetadataScreen: MetadataScreen_default,
  MicroformatData: MicroformatData_default,
  Mix: Mix_default,
  Movie: Movie_default,
  MovingThumbnail: MovingThumbnail_default,
  MultiMarkersPlayerBar: MultiMarkersPlayerBar_default,
  MusicCarouselShelf: MusicCarouselShelf_default,
  MusicCarouselShelfBasicHeader: MusicCarouselShelfBasicHeader_default,
  MusicDescriptionShelf: MusicDescriptionShelf_default,
  MusicDetailHeader: MusicDetailHeader_default,
  MusicDownloadStateBadge: MusicDownloadStateBadge_default,
  MusicEditablePlaylistDetailHeader: MusicEditablePlaylistDetailHeader_default,
  MusicElementHeader: MusicElementHeader_default,
  MusicHeader: MusicHeader_default,
  MusicImmersiveHeader: MusicImmersiveHeader_default,
  MusicInlineBadge: MusicInlineBadge_default,
  MusicItemThumbnailOverlay: MusicItemThumbnailOverlay_default,
  MusicLargeCardItemCarousel: MusicLargeCardItemCarousel_default,
  MusicNavigationButton: MusicNavigationButton_default,
  MusicPlayButton: MusicPlayButton_default,
  MusicPlaylistShelf: MusicPlaylistShelf_default,
  MusicQueue: MusicQueue_default,
  MusicResponsiveListItem: MusicResponsiveListItem_default,
  MusicResponsiveListItemFixedColumn: MusicResponsiveListItemFixedColumn_default,
  MusicResponsiveListItemFlexColumn: MusicResponsiveListItemFlexColumn_default,
  MusicShelf: MusicShelf_default,
  MusicSideAlignedItem: MusicSideAlignedItem_default,
  MusicSortFilterButton: MusicSortFilterButton_default,
  MusicThumbnail: MusicThumbnail_default,
  MusicTwoRowItem: MusicTwoRowItem_default,
  MusicVisualHeader: MusicVisualHeader_default,
  NavigationEndpoint: NavigationEndpoint_default,
  Notification: Notification_default,
  PageIntroduction: PageIntroduction_default,
  PlayerAnnotationsExpanded: PlayerAnnotationsExpanded_default,
  PlayerCaptionsTracklist: PlayerCaptionsTracklist_default,
  PlayerErrorMessage: PlayerErrorMessage_default,
  PlayerLiveStoryboardSpec: PlayerLiveStoryboardSpec_default,
  PlayerMicroformat: PlayerMicroformat_default,
  PlayerOverlay: PlayerOverlay_default,
  PlayerOverlayAutoplay: PlayerOverlayAutoplay_default,
  PlayerStoryboardSpec: PlayerStoryboardSpec_default,
  Playlist: Playlist_default,
  PlaylistCustomThumbnail: PlaylistCustomThumbnail_default,
  PlaylistHeader: PlaylistHeader_default,
  PlaylistInfoCardContent: PlaylistInfoCardContent_default,
  PlaylistMetadata: PlaylistMetadata_default,
  PlaylistPanel: PlaylistPanel_default,
  PlaylistPanelVideo: PlaylistPanelVideo_default,
  PlaylistPanelVideoWrapper: PlaylistPanelVideoWrapper_default,
  PlaylistSidebar: PlaylistSidebar_default,
  PlaylistSidebarPrimaryInfo: PlaylistSidebarPrimaryInfo_default,
  PlaylistSidebarSecondaryInfo: PlaylistSidebarSecondaryInfo_default,
  PlaylistVideo: PlaylistVideo_default,
  PlaylistVideoList: PlaylistVideoList_default,
  PlaylistVideoThumbnail: PlaylistVideoThumbnail_default,
  Poll: Poll_default,
  Post: Post_default,
  PostMultiImage: PostMultiImage_default,
  ProfileColumn: ProfileColumn_default,
  ProfileColumnStats: ProfileColumnStats_default,
  ProfileColumnStatsEntry: ProfileColumnStatsEntry_default,
  ProfileColumnUserInfo: ProfileColumnUserInfo_default,
  RecognitionShelf: RecognitionShelf_default,
  ReelItem: ReelItem_default,
  ReelShelf: ReelShelf_default,
  RelatedChipCloud: RelatedChipCloud_default,
  RichGrid: RichGrid_default,
  RichItem: RichItem_default,
  RichListHeader: RichListHeader_default,
  RichSection: RichSection_default,
  RichShelf: RichShelf_default,
  SearchBox: SearchBox_default,
  SearchRefinementCard: SearchRefinementCard_default,
  SearchSuggestion: SearchSuggestion_default,
  SearchSuggestionsSection: SearchSuggestionsSection_default,
  SecondarySearchContainer: SecondarySearchContainer_default,
  SectionList: SectionList_default,
  SegmentedLikeDislikeButton: SegmentedLikeDislikeButton_default,
  SettingBoolean: SettingBoolean_default,
  SettingsCheckbox: SettingsCheckbox_default,
  SettingsOptions: SettingsOptions_default,
  SettingsSidebar: SettingsSidebar_default,
  SettingsSwitch: SettingsSwitch_default,
  Shelf: Shelf_default,
  ShowingResultsFor: ShowingResultsFor_default,
  SimpleCardContent: SimpleCardContent_default,
  SimpleCardTeaser: SimpleCardTeaser_default,
  SimpleTextSection: SimpleTextSection_default,
  SingleActionEmergencySupport: SingleActionEmergencySupport_default,
  SingleColumnBrowseResults: SingleColumnBrowseResults_default,
  SingleColumnMusicWatchNextResults: SingleColumnMusicWatchNextResults_default,
  SingleHeroImage: SingleHeroImage_default,
  SlimOwner: SlimOwner_default,
  SlimVideoMetadata: SlimVideoMetadata_default,
  SortFilterSubMenu: SortFilterSubMenu_default,
  SubFeedOption: SubFeedOption_default,
  SubFeedSelector: SubFeedSelector_default,
  SubscribeButton: SubscribeButton_default,
  SubscriptionNotificationToggleButton: SubscriptionNotificationToggleButton_default,
  Tab: Tab_default,
  Tabbed: Tabbed_default,
  TabbedSearchResults: TabbedSearchResults_default,
  TextHeader: TextHeader_default,
  ThumbnailLandscapePortrait: ThumbnailLandscapePortrait_default,
  ThumbnailOverlayBottomPanel: ThumbnailOverlayBottomPanel_default,
  ThumbnailOverlayEndorsement: ThumbnailOverlayEndorsement_default,
  ThumbnailOverlayHoverText: ThumbnailOverlayHoverText_default,
  ThumbnailOverlayInlineUnplayable: ThumbnailOverlayInlineUnplayable_default,
  ThumbnailOverlayLoadingPreview: ThumbnailOverlayLoadingPreview_default,
  ThumbnailOverlayNowPlaying: ThumbnailOverlayNowPlaying_default,
  ThumbnailOverlayPinking: ThumbnailOverlayPinking_default,
  ThumbnailOverlayPlaybackStatus: ThumbnailOverlayPlaybackStatus_default,
  ThumbnailOverlayResumePlayback: ThumbnailOverlayResumePlayback_default,
  ThumbnailOverlaySidePanel: ThumbnailOverlaySidePanel_default,
  ThumbnailOverlayTimeStatus: ThumbnailOverlayTimeStatus_default,
  ThumbnailOverlayToggleButton: ThumbnailOverlayToggleButton_default,
  TimedMarkerDecoration: TimedMarkerDecoration_default,
  TitleAndButtonListHeader: TitleAndButtonListHeader_default,
  ToggleButton: ToggleButton_default,
  ToggleMenuServiceItem: ToggleMenuServiceItem_default,
  Tooltip: Tooltip_default,
  TopicChannelDetails: TopicChannelDetails_default,
  TwoColumnBrowseResults: TwoColumnBrowseResults_default,
  TwoColumnSearchResults: TwoColumnSearchResults_default,
  TwoColumnWatchNextResults: TwoColumnWatchNextResults_default,
  UniversalWatchCard: UniversalWatchCard_default,
  UpsellDialog: UpsellDialog_default,
  VerticalList: VerticalList_default,
  VerticalWatchCardList: VerticalWatchCardList_default,
  Video: Video_default,
  VideoCard: VideoCard_default,
  VideoInfoCardContent: VideoInfoCardContent_default,
  VideoOwner: VideoOwner_default,
  VideoPrimaryInfo: VideoPrimaryInfo_default,
  VideoSecondaryInfo: VideoSecondaryInfo_default,
  WatchCardCompactVideo: WatchCardCompactVideo_default,
  WatchCardHeroVideo: WatchCardHeroVideo_default,
  WatchCardRichHeader: WatchCardRichHeader_default,
  WatchCardSectionSequence: WatchCardSectionSequence_default,
  WatchNextEndScreen: WatchNextEndScreen_default,
  WatchNextTabbedResults: WatchNextTabbedResults_default,
  AnchoredSection: AnchoredSection_default,
  KidsCategoriesHeader: KidsCategoriesHeader_default,
  KidsCategoryTab: KidsCategoryTab_default,
  KidsHomeScreen: KidsHomeScreen_default
};
var Misc = {
  Author: Author_default,
  ChildElement: ChildElement_default,
  EmojiRun: EmojiRun_default,
  Format: Format_default,
  NavigatableText: NavigatableText_default,
  PlaylistAuthor: PlaylistAuthor_default,
  Text: Text_default,
  TextRun: TextRun_default,
  Thumbnail: Thumbnail_default,
  VideoDetails: VideoDetails_default
};
var map = YTNodes;
function GetParserByName(name) {
  const ParserConstructor = map[name];
  if (!ParserConstructor) {
    const error = new Error(`Module not found: ${name}`);
    error.code = "MODULE_NOT_FOUND";
    throw error;
  }
  return ParserConstructor;
}
__name(GetParserByName, "GetParserByName");

// dist/src/parser/parser.js
var __classPrivateFieldSet9 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet9 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a2;
var _Parser_errorHandler;
var _Parser_memo;
var _Parser_clearMemo;
var _Parser_createMemo;
var _Parser_addToMemo;
var _Parser_getMemo;
var _Parser_printError;
var Parser = class {
  static setParserErrorHandler(handler) {
    __classPrivateFieldSet9(this, _a2, handler, "f", _Parser_errorHandler);
  }
  static parseResponse(data) {
    var _b, _c, _d, _e;
    const parsed_data = {};
    __classPrivateFieldGet9(this, _a2, "m", _Parser_createMemo).call(this);
    const contents = this.parse(data.contents);
    const contents_memo = __classPrivateFieldGet9(this, _a2, "m", _Parser_getMemo).call(this);
    if (contents) {
      parsed_data.contents = contents;
      parsed_data.contents_memo = contents_memo;
    }
    __classPrivateFieldGet9(this, _a2, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet9(this, _a2, "m", _Parser_createMemo).call(this);
    const on_response_received_actions = data.onResponseReceivedActions ? this.parseRR(data.onResponseReceivedActions) : null;
    const on_response_received_actions_memo = __classPrivateFieldGet9(this, _a2, "m", _Parser_getMemo).call(this);
    if (on_response_received_actions) {
      parsed_data.on_response_received_actions = on_response_received_actions;
      parsed_data.on_response_received_actions_memo = on_response_received_actions_memo;
    }
    __classPrivateFieldGet9(this, _a2, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet9(this, _a2, "m", _Parser_createMemo).call(this);
    const on_response_received_endpoints = data.onResponseReceivedEndpoints ? this.parseRR(data.onResponseReceivedEndpoints) : null;
    const on_response_received_endpoints_memo = __classPrivateFieldGet9(this, _a2, "m", _Parser_getMemo).call(this);
    if (on_response_received_endpoints) {
      parsed_data.on_response_received_endpoints = on_response_received_endpoints;
      parsed_data.on_response_received_endpoints_memo = on_response_received_endpoints_memo;
    }
    __classPrivateFieldGet9(this, _a2, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet9(this, _a2, "m", _Parser_createMemo).call(this);
    const on_response_received_commands = data.onResponseReceivedCommands ? this.parseRR(data.onResponseReceivedCommands) : null;
    const on_response_received_commands_memo = __classPrivateFieldGet9(this, _a2, "m", _Parser_getMemo).call(this);
    if (on_response_received_commands) {
      parsed_data.on_response_received_commands = on_response_received_commands;
      parsed_data.on_response_received_commands_memo = on_response_received_commands_memo;
    }
    __classPrivateFieldGet9(this, _a2, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet9(this, _a2, "m", _Parser_createMemo).call(this);
    const continuation_contents = data.continuationContents ? this.parseLC(data.continuationContents) : null;
    const continuation_contents_memo = __classPrivateFieldGet9(this, _a2, "m", _Parser_getMemo).call(this);
    if (continuation_contents) {
      parsed_data.continuation_contents = continuation_contents;
      parsed_data.continuation_contents_memo = continuation_contents_memo;
    }
    __classPrivateFieldGet9(this, _a2, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet9(this, _a2, "m", _Parser_createMemo).call(this);
    const actions = data.actions ? this.parseActions(data.actions) : null;
    const actions_memo = __classPrivateFieldGet9(this, _a2, "m", _Parser_getMemo).call(this);
    if (actions) {
      parsed_data.actions = actions;
      parsed_data.actions_memo = actions_memo;
    }
    __classPrivateFieldGet9(this, _a2, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet9(this, _a2, "m", _Parser_createMemo).call(this);
    const live_chat_item_context_menu_supported_renderers = data.liveChatItemContextMenuSupportedRenderers ? this.parseItem(data.liveChatItemContextMenuSupportedRenderers) : null;
    const live_chat_item_context_menu_supported_renderers_memo = __classPrivateFieldGet9(this, _a2, "m", _Parser_getMemo).call(this);
    if (live_chat_item_context_menu_supported_renderers) {
      parsed_data.live_chat_item_context_menu_supported_renderers = live_chat_item_context_menu_supported_renderers;
      parsed_data.live_chat_item_context_menu_supported_renderers_memo = live_chat_item_context_menu_supported_renderers_memo;
    }
    __classPrivateFieldGet9(this, _a2, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet9(this, _a2, "m", _Parser_createMemo).call(this);
    const header = data.header ? this.parse(data.header) : null;
    const header_memo = __classPrivateFieldGet9(this, _a2, "m", _Parser_getMemo).call(this);
    if (header) {
      parsed_data.header = header;
      parsed_data.header_memo = header_memo;
    }
    __classPrivateFieldGet9(this, _a2, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet9(this, _a2, "m", _Parser_createMemo).call(this);
    const sidebar = data.sidebar ? this.parseItem(data.sidebar) : null;
    const sidebar_memo = __classPrivateFieldGet9(this, _a2, "m", _Parser_getMemo).call(this);
    if (sidebar) {
      parsed_data.sidebar = sidebar;
      parsed_data.sidebar_memo = sidebar_memo;
    }
    __classPrivateFieldGet9(this, _a2, "m", _Parser_clearMemo).call(this);
    this.applyMutations(contents_memo, (_c = (_b = data.frameworkUpdates) === null || _b === void 0 ? void 0 : _b.entityBatchUpdate) === null || _c === void 0 ? void 0 : _c.mutations);
    this.applyMutations(continuation_contents_memo, (_e = (_d = data.frameworkUpdates) === null || _d === void 0 ? void 0 : _d.entityBatchUpdate) === null || _e === void 0 ? void 0 : _e.mutations);
    const continuation = data.continuation ? this.parseC(data.continuation) : null;
    if (continuation) {
      parsed_data.continuation = continuation;
    }
    const metadata = this.parse(data.metadata);
    if (metadata) {
      parsed_data.metadata = metadata;
    }
    const microformat = this.parseItem(data.microformat);
    if (microformat) {
      parsed_data.microformat = microformat;
    }
    const overlay = this.parseItem(data.overlay);
    if (overlay) {
      parsed_data.overlay = overlay;
    }
    const alerts = this.parseArray(data.alerts);
    if (alerts.length) {
      parsed_data.alerts = alerts;
    }
    const refinements = data.refinements;
    if (refinements) {
      parsed_data.refinements = refinements;
    }
    const estimated_results = data.estimatedResults ? parseInt(data.estimatedResults) : null;
    if (estimated_results) {
      parsed_data.estimated_results = estimated_results;
    }
    const player_overlays = this.parse(data.playerOverlays);
    if (player_overlays) {
      parsed_data.player_overlays = player_overlays;
    }
    const playback_tracking = data.playbackTracking ? {
      videostats_watchtime_url: data.playbackTracking.videostatsWatchtimeUrl.baseUrl,
      videostats_playback_url: data.playbackTracking.videostatsPlaybackUrl.baseUrl
    } : null;
    if (playback_tracking) {
      parsed_data.playback_tracking = playback_tracking;
    }
    const playability_status = data.playabilityStatus ? {
      status: data.playabilityStatus.status,
      reason: data.playabilityStatus.reason || "",
      embeddable: !!data.playabilityStatus.playableInEmbed || false,
      audio_only_playablility: this.parseItem(data.playabilityStatus.audioOnlyPlayability),
      error_screen: this.parseItem(data.playabilityStatus.errorScreen)
    } : null;
    if (playability_status) {
      parsed_data.playability_status = playability_status;
    }
    const streaming_data = data.streamingData ? {
      expires: new Date(Date.now() + parseInt(data.streamingData.expiresInSeconds) * 1e3),
      formats: Parser.parseFormats(data.streamingData.formats),
      adaptive_formats: Parser.parseFormats(data.streamingData.adaptiveFormats),
      dash_manifest_url: data.streamingData.dashManifestUrl || null,
      hls_manifest_url: data.streamingData.hlsManifestUrl || null
    } : void 0;
    if (streaming_data) {
      parsed_data.streaming_data = streaming_data;
    }
    const current_video_endpoint = data.currentVideoEndpoint ? new NavigationEndpoint_default(data.currentVideoEndpoint) : null;
    if (current_video_endpoint) {
      parsed_data.current_video_endpoint = current_video_endpoint;
    }
    const endpoint = data.endpoint ? new NavigationEndpoint_default(data.endpoint) : null;
    if (endpoint) {
      parsed_data.endpoint = endpoint;
    }
    const captions = this.parseItem(data.captions);
    if (captions) {
      parsed_data.captions = captions;
    }
    const video_details = data.videoDetails ? new VideoDetails_default(data.videoDetails) : null;
    if (video_details) {
      parsed_data.video_details = video_details;
    }
    const annotations = this.parseArray(data.annotations);
    if (annotations.length) {
      parsed_data.annotations = annotations;
    }
    const storyboards = this.parseItem(data.storyboards);
    if (storyboards) {
      parsed_data.storyboards = storyboards;
    }
    const endscreen = this.parseItem(data.endscreen);
    if (endscreen) {
      parsed_data.endscreen = endscreen;
    }
    const cards = this.parseItem(data.cards);
    if (cards) {
      parsed_data.cards = cards;
    }
    return parsed_data;
  }
  static parseItem(data, validTypes) {
    if (!data)
      return null;
    const keys = Object.keys(data);
    if (!keys.length)
      return null;
    const classname = this.sanitizeClassName(keys[0]);
    if (!this.shouldIgnore(classname)) {
      try {
        const TargetClass = GetParserByName(classname);
        if (validTypes) {
          if (Array.isArray(validTypes)) {
            if (!validTypes.some((type) => type.type === TargetClass.type))
              throw new ParsingError(`Type mismatch, got ${classname} but expected one of ${validTypes.map((type) => type.type).join(", ")}`);
          } else if (TargetClass.type !== validTypes.type)
            throw new ParsingError(`Type mismatch, got ${classname} but expected ${validTypes.type}`);
        }
        const result = new TargetClass(data[keys[0]]);
        __classPrivateFieldGet9(this, _a2, "m", _Parser_addToMemo).call(this, classname, result);
        return result;
      } catch (err) {
        __classPrivateFieldGet9(this, _a2, "f", _Parser_errorHandler).call(this, { classname, classdata: data[keys[0]], err });
        return null;
      }
    }
    return null;
  }
  static parseArray(data, validTypes) {
    if (Array.isArray(data)) {
      const results = [];
      for (const item of data) {
        const result = this.parseItem(item, validTypes);
        if (result) {
          results.push(result);
        }
      }
      return observe(results);
    } else if (!data) {
      return observe([]);
    }
    throw new ParsingError("Expected array but got a single item");
  }
  static parse(data, requireArray, validTypes) {
    if (!data)
      return null;
    if (Array.isArray(data)) {
      const results = [];
      for (const item of data) {
        const result = this.parseItem(item, validTypes);
        if (result) {
          results.push(result);
        }
      }
      const res = observe(results);
      return requireArray ? res : new SuperParsedResult(observe(results));
    } else if (requireArray) {
      throw new ParsingError("Expected array but got a single item");
    }
    return new SuperParsedResult(this.parseItem(data, validTypes));
  }
  static parseC(data) {
    if (data.timedContinuationData)
      return new Continuation({ continuation: data.timedContinuationData, type: "timed" });
    return null;
  }
  static parseLC(data) {
    if (data.itemSectionContinuation)
      return new ItemSectionContinuation(data.itemSectionContinuation);
    if (data.sectionListContinuation)
      return new SectionListContinuation(data.sectionListContinuation);
    if (data.liveChatContinuation)
      return new LiveChatContinuation(data.liveChatContinuation);
    if (data.musicPlaylistShelfContinuation)
      return new MusicPlaylistShelfContinuation(data.musicPlaylistShelfContinuation);
    if (data.musicShelfContinuation)
      return new MusicShelfContinuation(data.musicShelfContinuation);
    if (data.gridContinuation)
      return new GridContinuation(data.gridContinuation);
    if (data.playlistPanelContinuation)
      return new PlaylistPanelContinuation(data.playlistPanelContinuation);
    return null;
  }
  static parseRR(actions) {
    return observe(actions.map((action) => {
      if (action.navigateAction)
        return new NavigateAction(action.navigateAction);
      if (action.reloadContinuationItemsCommand)
        return new ReloadContinuationItemsCommand(action.reloadContinuationItemsCommand);
      if (action.appendContinuationItemsAction)
        return new AppendContinuationItemsAction2(action.appendContinuationItemsAction);
    }).filter((item) => item));
  }
  static parseActions(data) {
    if (Array.isArray(data)) {
      return Parser.parse(data.map((action) => {
        delete action.clickTrackingParams;
        return action;
      }));
    }
    return new SuperParsedResult(this.parseItem(data));
  }
  static parseFormats(formats) {
    return (formats === null || formats === void 0 ? void 0 : formats.map((format) => new Format_default(format))) || [];
  }
  static applyMutations(memo, mutations) {
    var _b, _c;
    const music_multi_select_menu_items = memo.getType(MusicMultiSelectMenuItem_default);
    if (music_multi_select_menu_items.length > 0 && !mutations) {
      console.warn(new InnertubeError(`Mutation data required for processing MusicMultiSelectMenuItems, but none found.
This is a bug, please report it at ${Platform.shim.info.bugs_url}`));
    } else {
      const missing_or_invalid_mutations = [];
      for (const menu_item of music_multi_select_menu_items) {
        const mutation = mutations.find((mutation2) => {
          var _b2, _c2;
          return ((_c2 = (_b2 = mutation2.payload) === null || _b2 === void 0 ? void 0 : _b2.musicFormBooleanChoice) === null || _c2 === void 0 ? void 0 : _c2.id) === menu_item.form_item_entity_key;
        });
        const choice = mutation === null || mutation === void 0 ? void 0 : mutation.payload.musicFormBooleanChoice;
        if ((choice === null || choice === void 0 ? void 0 : choice.selected) !== void 0) {
          menu_item.selected = choice.selected;
        } else {
          missing_or_invalid_mutations.push(`'${menu_item.title}'`);
        }
        if (choice === null || choice === void 0 ? void 0 : choice.opaqueToken) {
          const command = (_c = (_b = menu_item.endpoint) === null || _b === void 0 ? void 0 : _b.payload.commands) === null || _c === void 0 ? void 0 : _c.find((c) => {
            var _b2;
            return (_b2 = c.musicBrowseFormBinderCommand) === null || _b2 === void 0 ? void 0 : _b2.browseEndpoint;
          });
          if (command) {
            command.musicBrowseFormBinderCommand.browseEndpoint.formData = {
              selectedValues: [choice.opaqueToken]
            };
          }
        }
      }
      if (missing_or_invalid_mutations.length > 0) {
        console.warn(new InnertubeError(`Mutation data missing or invalid for ${missing_or_invalid_mutations.length} out of ${music_multi_select_menu_items.length} MusicMultiSelectMenuItems. The titles of the failed items are: ${missing_or_invalid_mutations.join(", ")}.
This is a bug, please report it at ${Platform.shim.info.bugs_url}`));
      }
    }
  }
  static sanitizeClassName(input) {
    return (input.charAt(0).toUpperCase() + input.slice(1)).replace(/Renderer|Model/g, "").replace(/Radio/g, "Mix").trim();
  }
  static shouldIgnore(classname) {
    return this.ignore_list.has(classname);
  }
};
__name(Parser, "Parser");
_a2 = Parser, _Parser_clearMemo = /* @__PURE__ */ __name(function _Parser_clearMemo2() {
  __classPrivateFieldSet9(Parser, _a2, null, "f", _Parser_memo);
}, "_Parser_clearMemo"), _Parser_createMemo = /* @__PURE__ */ __name(function _Parser_createMemo2() {
  __classPrivateFieldSet9(Parser, _a2, new Memo(), "f", _Parser_memo);
}, "_Parser_createMemo"), _Parser_addToMemo = /* @__PURE__ */ __name(function _Parser_addToMemo2(classname, result) {
  if (!__classPrivateFieldGet9(Parser, _a2, "f", _Parser_memo))
    return;
  const list = __classPrivateFieldGet9(Parser, _a2, "f", _Parser_memo).get(classname);
  if (!list)
    return __classPrivateFieldGet9(Parser, _a2, "f", _Parser_memo).set(classname, [result]);
  list.push(result);
}, "_Parser_addToMemo"), _Parser_getMemo = /* @__PURE__ */ __name(function _Parser_getMemo2() {
  if (!__classPrivateFieldGet9(Parser, _a2, "f", _Parser_memo))
    throw new Error("Parser#getMemo() called before Parser#createMemo()");
  return __classPrivateFieldGet9(Parser, _a2, "f", _Parser_memo);
}, "_Parser_getMemo"), _Parser_printError = /* @__PURE__ */ __name(function _Parser_printError2({ classname, classdata, err }) {
  if (err.code == "MODULE_NOT_FOUND") {
    return console.warn(new InnertubeError(`${classname} not found!
This is a bug, want to help us fix it? Follow the instructions at ${Platform.shim.info.repo_url.split("#")[0]}/blob/main/docs/updating-the-parser.md or report it at ${Platform.shim.info.bugs_url}!`, classdata));
  }
  console.warn(new InnertubeError(`Something went wrong at ${classname}!
This is a bug, please report it at ${Platform.shim.info.bugs_url}`, { stack: err.stack }));
}, "_Parser_printError");
_Parser_errorHandler = { value: __classPrivateFieldGet9(Parser, _a2, "m", _Parser_printError) };
_Parser_memo = { value: null };
Parser.ignore_list = /* @__PURE__ */ new Set([
  "AdSlot",
  "DisplayAd",
  "SearchPyv",
  "MealbarPromo",
  "BackgroundPromo",
  "PromotedSparklesWeb",
  "RunAttestationCommand",
  "CompactPromotedVideo",
  "StatementBanner",
  "SearchSubMenu"
]);
var ItemSectionContinuation = class extends YTNode {
  constructor(data) {
    var _b, _c, _d;
    super();
    this.contents = Parser.parseArray(data.contents);
    if (Array.isArray(data.continuations)) {
      this.continuation = (_d = (_c = (_b = data.continuations) === null || _b === void 0 ? void 0 : _b.at(0)) === null || _c === void 0 ? void 0 : _c.nextContinuationData) === null || _d === void 0 ? void 0 : _d.continuation;
    }
  }
};
__name(ItemSectionContinuation, "ItemSectionContinuation");
ItemSectionContinuation.type = "itemSectionContinuation";
var NavigateAction = class extends YTNode {
  constructor(data) {
    super();
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
  }
};
__name(NavigateAction, "NavigateAction");
NavigateAction.type = "navigateAction";
var AppendContinuationItemsAction2 = class extends YTNode {
  constructor(data) {
    super();
    this.contents = Parser.parse(data.continuationItems, true);
  }
};
__name(AppendContinuationItemsAction2, "AppendContinuationItemsAction");
AppendContinuationItemsAction2.type = "appendContinuationItemsAction";
var ReloadContinuationItemsCommand = class extends YTNode {
  constructor(data) {
    super();
    this.target_id = data.targetId;
    this.contents = Parser.parse(data.continuationItems, true);
    this.slot = data === null || data === void 0 ? void 0 : data.slot;
  }
};
__name(ReloadContinuationItemsCommand, "ReloadContinuationItemsCommand");
ReloadContinuationItemsCommand.type = "reloadContinuationItemsCommand";
var SectionListContinuation = class extends YTNode {
  constructor(data) {
    var _b, _c, _d, _e, _f, _g;
    super();
    this.contents = Parser.parse(data.contents, true);
    this.continuation = ((_d = (_c = (_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.nextContinuationData) === null || _d === void 0 ? void 0 : _d.continuation) || ((_g = (_f = (_e = data.continuations) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.reloadContinuationData) === null || _g === void 0 ? void 0 : _g.continuation) || null;
    if (data.header) {
      this.header = Parser.parse(data.header);
    }
  }
};
__name(SectionListContinuation, "SectionListContinuation");
SectionListContinuation.type = "sectionListContinuation";
var MusicPlaylistShelfContinuation = class extends YTNode {
  constructor(data) {
    var _b;
    super();
    this.contents = Parser.parse(data.contents, true);
    this.continuation = ((_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData.continuation) || null;
  }
};
__name(MusicPlaylistShelfContinuation, "MusicPlaylistShelfContinuation");
MusicPlaylistShelfContinuation.type = "musicPlaylistShelfContinuation";
var MusicShelfContinuation = class extends YTNode {
  constructor(data) {
    var _b, _c, _d, _e;
    super();
    this.contents = Parser.parseArray(data.contents);
    this.continuation = ((_c = (_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || ((_e = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0].reloadContinuationData) === null || _e === void 0 ? void 0 : _e.continuation) || null;
  }
};
__name(MusicShelfContinuation, "MusicShelfContinuation");
MusicShelfContinuation.type = "musicShelfContinuation";
var GridContinuation = class extends YTNode {
  constructor(data) {
    var _b;
    super();
    this.items = Parser.parse(data.items, true);
    this.continuation = ((_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData.continuation) || null;
  }
  get contents() {
    return this.items;
  }
};
__name(GridContinuation, "GridContinuation");
GridContinuation.type = "gridContinuation";
var PlaylistPanelContinuation = class extends YTNode {
  constructor(data) {
    var _b, _c, _d, _e, _f, _g;
    super();
    this.contents = Parser.parseArray(data.contents);
    this.continuation = ((_d = (_c = (_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.nextContinuationData) === null || _d === void 0 ? void 0 : _d.continuation) || ((_g = (_f = (_e = data.continuations) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.nextRadioContinuationData) === null || _g === void 0 ? void 0 : _g.continuation) || null;
  }
};
__name(PlaylistPanelContinuation, "PlaylistPanelContinuation");
PlaylistPanelContinuation.type = "playlistPanelContinuation";
var Continuation = class extends YTNode {
  constructor(data) {
    var _b, _c, _d;
    super();
    this.continuation_type = data.type;
    this.timeout_ms = (_b = data.continuation) === null || _b === void 0 ? void 0 : _b.timeoutMs;
    this.time_until_last_message_ms = (_c = data.continuation) === null || _c === void 0 ? void 0 : _c.timeUntilLastMessageMsec;
    this.token = (_d = data.continuation) === null || _d === void 0 ? void 0 : _d.continuation;
  }
};
__name(Continuation, "Continuation");
Continuation.type = "continuation";
var LiveChatContinuation = class extends YTNode {
  constructor(data) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    super();
    this.actions = Parser.parse((_b = data.actions) === null || _b === void 0 ? void 0 : _b.map((action) => {
      delete action.clickTrackingParams;
      return action;
    }), true) || observe([]);
    this.action_panel = Parser.parseItem(data.actionPanel);
    this.item_list = Parser.parseItem(data.itemList);
    this.header = Parser.parseItem(data.header);
    this.participants_list = Parser.parseItem(data.participantsList);
    this.popout_message = Parser.parseItem(data.popoutMessage);
    this.emojis = ((_c = data.emojis) === null || _c === void 0 ? void 0 : _c.map((emoji) => ({
      emoji_id: emoji.emojiId,
      shortcuts: emoji.shortcuts,
      search_terms: emoji.searchTerms,
      image: Thumbnail_default.fromResponse(emoji.image),
      is_custom_emoji: emoji.isCustomEmoji
    }))) || [];
    let continuation, type;
    if ((_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0].timedContinuationData) {
      type = "timed";
      continuation = (_e = data.continuations) === null || _e === void 0 ? void 0 : _e[0].timedContinuationData;
    } else if ((_f = data.continuations) === null || _f === void 0 ? void 0 : _f[0].invalidationContinuationData) {
      type = "invalidation";
      continuation = (_g = data.continuations) === null || _g === void 0 ? void 0 : _g[0].invalidationContinuationData;
    } else if ((_h = data.continuations) === null || _h === void 0 ? void 0 : _h[0].liveChatReplayContinuationData) {
      type = "replay";
      continuation = (_j = data.continuations) === null || _j === void 0 ? void 0 : _j[0].liveChatReplayContinuationData;
    }
    this.continuation = new Continuation({ continuation, type });
    this.viewer_name = data.viewerName;
  }
};
__name(LiveChatContinuation, "LiveChatContinuation");
LiveChatContinuation.type = "liveChatContinuation";

// dist/src/parser/youtube/index.js
var youtube_exports = {};
__export(youtube_exports, {
  AccountInfo: () => AccountInfo_default,
  Analytics: () => Analytics_default,
  Channel: () => Channel2,
  ChannelListContinuation: () => ChannelListContinuation,
  Comments: () => Comments_default,
  FilteredChannelList: () => FilteredChannelList,
  History: () => History_default,
  HomeFeed: () => HomeFeed,
  ItemMenu: () => ItemMenu_default,
  Library: () => Library_default,
  LiveChat: () => LiveChat_default2,
  NotificationsMenu: () => NotificationsMenu_default,
  Playlist: () => Playlist_default2,
  Search: () => Search_default,
  Settings: () => Settings_default,
  SmoothedQueue: () => SmoothedQueue_default,
  TimeWatched: () => TimeWatched_default,
  VideoInfo: () => VideoInfo_default
});

// dist/src/parser/youtube/AccountInfo.js
var __classPrivateFieldSet10 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet10 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AccountInfo_page;
var AccountInfo = class {
  constructor(response) {
    _AccountInfo_page.set(this, void 0);
    __classPrivateFieldSet10(this, _AccountInfo_page, parser_default.parseResponse(response.data), "f");
    if (!__classPrivateFieldGet10(this, _AccountInfo_page, "f").contents)
      throw new InnertubeError("Page contents not found");
    const account_section_list = __classPrivateFieldGet10(this, _AccountInfo_page, "f").contents.array().as(AccountSectionList_default).first();
    if (!account_section_list)
      throw new InnertubeError("Account section list not found");
    this.contents = account_section_list.contents;
    this.footers = account_section_list.footers;
  }
  get page() {
    return __classPrivateFieldGet10(this, _AccountInfo_page, "f");
  }
};
__name(AccountInfo, "AccountInfo");
_AccountInfo_page = /* @__PURE__ */ new WeakMap();
var AccountInfo_default = AccountInfo;

// dist/src/parser/youtube/Analytics.js
var __classPrivateFieldSet11 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet11 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Analytics_page;
var Analytics = class {
  constructor(response) {
    var _a5;
    _Analytics_page.set(this, void 0);
    __classPrivateFieldSet11(this, _Analytics_page, parser_default.parseResponse(response.data), "f");
    this.sections = (_a5 = __classPrivateFieldGet11(this, _Analytics_page, "f").contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(Element_default).map((el) => {
      var _a6;
      return (_a6 = el.model) === null || _a6 === void 0 ? void 0 : _a6.item();
    }).flatMap((el) => !el ? [] : el);
  }
  get page() {
    return __classPrivateFieldGet11(this, _Analytics_page, "f");
  }
};
__name(Analytics, "Analytics");
_Analytics_page = /* @__PURE__ */ new WeakMap();
var Analytics_default = Analytics;

// dist/src/core/Feed.js
var __awaiter5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldGet12 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet12 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Feed_instances;
var _Feed_page;
var _Feed_continuation;
var _Feed_actions;
var _Feed_memo;
var _Feed_isParsed;
var Feed = class {
  constructor(actions, response, already_parsed = false) {
    _Feed_instances.add(this);
    _Feed_page.set(this, void 0);
    _Feed_continuation.set(this, void 0);
    _Feed_actions.set(this, void 0);
    _Feed_memo.set(this, void 0);
    if (__classPrivateFieldGet12(this, _Feed_instances, "m", _Feed_isParsed).call(this, response) || already_parsed) {
      __classPrivateFieldSet12(this, _Feed_page, response, "f");
    } else {
      __classPrivateFieldSet12(this, _Feed_page, parser_default.parseResponse(response.data), "f");
    }
    const memo = concatMemos(...[
      __classPrivateFieldGet12(this, _Feed_page, "f").contents_memo,
      __classPrivateFieldGet12(this, _Feed_page, "f").continuation_contents_memo,
      __classPrivateFieldGet12(this, _Feed_page, "f").on_response_received_commands_memo,
      __classPrivateFieldGet12(this, _Feed_page, "f").on_response_received_endpoints_memo,
      __classPrivateFieldGet12(this, _Feed_page, "f").on_response_received_actions_memo,
      __classPrivateFieldGet12(this, _Feed_page, "f").sidebar_memo,
      __classPrivateFieldGet12(this, _Feed_page, "f").header_memo
    ]);
    if (!memo)
      throw new InnertubeError("No memo found in feed");
    __classPrivateFieldSet12(this, _Feed_memo, memo, "f");
    __classPrivateFieldSet12(this, _Feed_actions, actions, "f");
  }
  static getVideosFromMemo(memo) {
    return memo.getType([
      Video_default,
      GridVideo_default,
      ReelItem_default,
      CompactVideo_default,
      PlaylistVideo_default,
      PlaylistPanelVideo_default,
      WatchCardCompactVideo_default
    ]);
  }
  static getPlaylistsFromMemo(memo) {
    return memo.getType([Playlist_default, GridPlaylist_default]);
  }
  get videos() {
    return Feed.getVideosFromMemo(__classPrivateFieldGet12(this, _Feed_memo, "f"));
  }
  get posts() {
    return __classPrivateFieldGet12(this, _Feed_memo, "f").getType([BackstagePost_default, Post_default]);
  }
  get channels() {
    return __classPrivateFieldGet12(this, _Feed_memo, "f").getType([Channel_default, GridChannel_default]);
  }
  get playlists() {
    return Feed.getPlaylistsFromMemo(__classPrivateFieldGet12(this, _Feed_memo, "f"));
  }
  get memo() {
    return __classPrivateFieldGet12(this, _Feed_memo, "f");
  }
  get page_contents() {
    var _a5;
    const tab_content = (_a5 = __classPrivateFieldGet12(this, _Feed_memo, "f").getType(Tab_default)) === null || _a5 === void 0 ? void 0 : _a5.first().content;
    const reload_continuation_items = __classPrivateFieldGet12(this, _Feed_memo, "f").getType(ReloadContinuationItemsCommand).first();
    const append_continuation_items = __classPrivateFieldGet12(this, _Feed_memo, "f").getType(AppendContinuationItemsAction_default).first();
    return tab_content || reload_continuation_items || append_continuation_items;
  }
  get shelves() {
    return __classPrivateFieldGet12(this, _Feed_memo, "f").getType([Shelf_default, RichShelf_default, ReelShelf_default]);
  }
  getShelf(title) {
    return this.shelves.get({ title });
  }
  get secondary_contents() {
    var _a5, _b;
    if (!((_a5 = __classPrivateFieldGet12(this, _Feed_page, "f").contents) === null || _a5 === void 0 ? void 0 : _a5.is_node))
      return void 0;
    const node = (_b = __classPrivateFieldGet12(this, _Feed_page, "f").contents) === null || _b === void 0 ? void 0 : _b.item();
    if (!node.is(TwoColumnBrowseResults_default, TwoColumnSearchResults_default))
      return void 0;
    return node.secondary_contents;
  }
  get actions() {
    return __classPrivateFieldGet12(this, _Feed_actions, "f");
  }
  get page() {
    return __classPrivateFieldGet12(this, _Feed_page, "f");
  }
  get has_continuation() {
    return (__classPrivateFieldGet12(this, _Feed_memo, "f").get("ContinuationItem") || []).length > 0;
  }
  getContinuationData() {
    return __awaiter5(this, void 0, void 0, function* () {
      if (__classPrivateFieldGet12(this, _Feed_continuation, "f")) {
        if (__classPrivateFieldGet12(this, _Feed_continuation, "f").length > 1)
          throw new InnertubeError("There are too many continuations, you'll need to find the correct one yourself in this.page");
        if (__classPrivateFieldGet12(this, _Feed_continuation, "f").length === 0)
          throw new InnertubeError("There are no continuations");
        const response = yield __classPrivateFieldGet12(this, _Feed_continuation, "f")[0].endpoint.call(__classPrivateFieldGet12(this, _Feed_actions, "f"), { parse: true });
        return response;
      }
      __classPrivateFieldSet12(this, _Feed_continuation, __classPrivateFieldGet12(this, _Feed_memo, "f").getType(ContinuationItem_default), "f");
      if (__classPrivateFieldGet12(this, _Feed_continuation, "f"))
        return this.getContinuationData();
    });
  }
  getContinuation() {
    return __awaiter5(this, void 0, void 0, function* () {
      const continuation_data = yield this.getContinuationData();
      if (!continuation_data)
        throw new InnertubeError("Could not get continuation data");
      return new Feed(this.actions, continuation_data, true);
    });
  }
};
__name(Feed, "Feed");
_Feed_page = /* @__PURE__ */ new WeakMap(), _Feed_continuation = /* @__PURE__ */ new WeakMap(), _Feed_actions = /* @__PURE__ */ new WeakMap(), _Feed_memo = /* @__PURE__ */ new WeakMap(), _Feed_instances = /* @__PURE__ */ new WeakSet(), _Feed_isParsed = /* @__PURE__ */ __name(function _Feed_isParsed2(response) {
  return !("data" in response);
}, "_Feed_isParsed");
var Feed_default = Feed;

// dist/src/core/TabbedFeed.js
var __awaiter6 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet13 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet13 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TabbedFeed_tabs;
var _TabbedFeed_actions;
var TabbedFeed = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a5;
    super(actions, data, already_parsed);
    _TabbedFeed_tabs.set(this, void 0);
    _TabbedFeed_actions.set(this, void 0);
    __classPrivateFieldSet13(this, _TabbedFeed_actions, actions, "f");
    __classPrivateFieldSet13(this, _TabbedFeed_tabs, (_a5 = this.page.contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(Tab_default), "f");
  }
  get tabs() {
    var _a5, _b;
    return (_b = (_a5 = __classPrivateFieldGet13(this, _TabbedFeed_tabs, "f")) === null || _a5 === void 0 ? void 0 : _a5.map((tab) => tab.title.toString())) !== null && _b !== void 0 ? _b : [];
  }
  getTabByName(title) {
    var _a5;
    return __awaiter6(this, void 0, void 0, function* () {
      const tab = (_a5 = __classPrivateFieldGet13(this, _TabbedFeed_tabs, "f")) === null || _a5 === void 0 ? void 0 : _a5.find((tab2) => tab2.title.toLowerCase() === title.toLowerCase());
      if (!tab)
        throw new InnertubeError(`Tab "${title}" not found`);
      if (tab.selected)
        return this;
      const response = yield tab.endpoint.call(__classPrivateFieldGet13(this, _TabbedFeed_actions, "f"));
      return new TabbedFeed(__classPrivateFieldGet13(this, _TabbedFeed_actions, "f"), response, false);
    });
  }
  getTabByURL(url) {
    var _a5;
    return __awaiter6(this, void 0, void 0, function* () {
      const tab = (_a5 = __classPrivateFieldGet13(this, _TabbedFeed_tabs, "f")) === null || _a5 === void 0 ? void 0 : _a5.find((tab2) => {
        var _a6;
        return ((_a6 = tab2.endpoint.metadata.url) === null || _a6 === void 0 ? void 0 : _a6.split("/").pop()) === url;
      });
      if (!tab)
        throw new InnertubeError(`Tab "${url}" not found`);
      if (tab.selected)
        return this;
      const response = yield tab.endpoint.call(__classPrivateFieldGet13(this, _TabbedFeed_actions, "f"));
      return new TabbedFeed(__classPrivateFieldGet13(this, _TabbedFeed_actions, "f"), response, false);
    });
  }
  hasTabWithURL(url) {
    var _a5, _b;
    return (_b = (_a5 = __classPrivateFieldGet13(this, _TabbedFeed_tabs, "f")) === null || _a5 === void 0 ? void 0 : _a5.some((tab) => {
      var _a6;
      return ((_a6 = tab.endpoint.metadata.url) === null || _a6 === void 0 ? void 0 : _a6.split("/").pop()) === url;
    })) !== null && _b !== void 0 ? _b : false;
  }
  get title() {
    var _a5, _b, _c;
    return (_c = (_b = (_a5 = this.page.contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(Tab_default)) === null || _b === void 0 ? void 0 : _b.find((tab) => tab.selected)) === null || _c === void 0 ? void 0 : _c.title.toString();
  }
};
__name(TabbedFeed, "TabbedFeed");
_TabbedFeed_tabs = /* @__PURE__ */ new WeakMap(), _TabbedFeed_actions = /* @__PURE__ */ new WeakMap();
var TabbedFeed_default = TabbedFeed;

// dist/src/core/FilterableFeed.js
var __awaiter7 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldGet14 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet14 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _FilterableFeed_chips;
var FilterableFeed = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
    _FilterableFeed_chips.set(this, void 0);
  }
  get filter_chips() {
    var _a5, _b;
    if (__classPrivateFieldGet14(this, _FilterableFeed_chips, "f"))
      return __classPrivateFieldGet14(this, _FilterableFeed_chips, "f") || [];
    if (((_a5 = this.memo.getType(FeedFilterChipBar_default)) === null || _a5 === void 0 ? void 0 : _a5.length) > 1)
      throw new InnertubeError("There are too many feed filter chipbars, you'll need to find the correct one yourself in this.page");
    if (((_b = this.memo.getType(FeedFilterChipBar_default)) === null || _b === void 0 ? void 0 : _b.length) === 0)
      throw new InnertubeError("There are no feed filter chipbars");
    __classPrivateFieldSet14(this, _FilterableFeed_chips, this.memo.getType(ChipCloudChip_default), "f");
    return __classPrivateFieldGet14(this, _FilterableFeed_chips, "f") || [];
  }
  get filters() {
    return this.filter_chips.map((chip) => chip.text.toString()) || [];
  }
  getFilteredFeed(filter) {
    var _a5;
    return __awaiter7(this, void 0, void 0, function* () {
      let target_filter;
      if (typeof filter === "string") {
        if (!this.filters.includes(filter))
          throw new InnertubeError("Filter not found", { available_filters: this.filters });
        target_filter = this.filter_chips.find((chip) => chip.text.toString() === filter);
      } else if (filter.type === "ChipCloudChip") {
        target_filter = filter;
      } else {
        throw new InnertubeError("Invalid filter");
      }
      if (!target_filter)
        throw new InnertubeError("Filter not found");
      if (target_filter.is_selected)
        return this;
      const response = yield (_a5 = target_filter.endpoint) === null || _a5 === void 0 ? void 0 : _a5.call(this.actions, { parse: true });
      if (!response)
        throw new InnertubeError("Failed to get filtered feed");
      return new Feed_default(this.actions, response, true);
    });
  }
};
__name(FilterableFeed, "FilterableFeed");
_FilterableFeed_chips = /* @__PURE__ */ new WeakMap();
var FilterableFeed_default = FilterableFeed;

// dist/src/parser/youtube/Channel.js
var __awaiter8 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Channel2 = class extends TabbedFeed_default {
  constructor(actions, data, already_parsed = false) {
    var _a5, _b, _c, _d, _e, _f;
    super(actions, data, already_parsed);
    this.header = (_b = (_a5 = this.page.header) === null || _a5 === void 0 ? void 0 : _a5.item()) === null || _b === void 0 ? void 0 : _b.as(C4TabbedHeader_default, CarouselHeader_default, InteractiveTabbedHeader_default);
    const metadata = (_c = this.page.metadata) === null || _c === void 0 ? void 0 : _c.item().as(ChannelMetadata_default);
    const microformat = (_d = this.page.microformat) === null || _d === void 0 ? void 0 : _d.as(MicroformatData_default);
    if (this.page.alerts) {
      const alert = this.page.alerts.first();
      if ((alert === null || alert === void 0 ? void 0 : alert.alert_type) === "ERROR") {
        throw new ChannelError(alert.text.toString());
      }
    }
    if (!metadata && !this.page.contents)
      throw new InnertubeError("Invalid channel", this);
    this.metadata = Object.assign(Object.assign({}, metadata), microformat || {});
    this.subscribe_button = (_e = this.page.header_memo) === null || _e === void 0 ? void 0 : _e.getType(SubscribeButton_default).first();
    this.current_tab = (_f = this.page.contents) === null || _f === void 0 ? void 0 : _f.item().key("tabs").parsed().array().filterType(Tab_default, ExpandableTab_default).get({ selected: true });
  }
  applyFilter(filter) {
    var _a5;
    return __awaiter8(this, void 0, void 0, function* () {
      let target_filter;
      const filter_chipbar = this.memo.getType(FeedFilterChipBar_default).first();
      if (typeof filter === "string") {
        target_filter = filter_chipbar === null || filter_chipbar === void 0 ? void 0 : filter_chipbar.contents.get({ text: filter });
        if (!target_filter)
          throw new InnertubeError(`Filter ${filter} not found`, { available_filters: this.filters });
      } else if (filter instanceof ChipCloudChip_default) {
        target_filter = filter;
      }
      if (!target_filter)
        throw new InnertubeError("Invalid filter", filter);
      const page = yield (_a5 = target_filter.endpoint) === null || _a5 === void 0 ? void 0 : _a5.call(this.actions, { parse: true });
      if (!page)
        throw new InnertubeError("No page returned", { filter: target_filter });
      return new FilteredChannelList(this.actions, page, true);
    });
  }
  applySort(sort) {
    var _a5, _b;
    return __awaiter8(this, void 0, void 0, function* () {
      const sort_filter_sub_menu = this.memo.getType(SortFilterSubMenu_default).first();
      if (!sort_filter_sub_menu)
        throw new InnertubeError("No sort filter sub menu found");
      const target_sort = (_a5 = sort_filter_sub_menu === null || sort_filter_sub_menu === void 0 ? void 0 : sort_filter_sub_menu.sub_menu_items) === null || _a5 === void 0 ? void 0 : _a5.find((item) => item.title === sort);
      if (!target_sort)
        throw new InnertubeError(`Sort filter ${sort} not found`, { available_sort_filters: this.sort_filters });
      if (target_sort.selected)
        return this;
      const page = yield (_b = target_sort.endpoint) === null || _b === void 0 ? void 0 : _b.call(this.actions, { parse: true });
      return new Channel2(this.actions, page, true);
    });
  }
  applyContentTypeFilter(content_type_filter) {
    var _a5, _b, _c, _d;
    return __awaiter8(this, void 0, void 0, function* () {
      const sub_menu = (_c = (_b = (_a5 = this.current_tab) === null || _a5 === void 0 ? void 0 : _a5.content) === null || _b === void 0 ? void 0 : _b.as(SectionList_default).sub_menu) === null || _c === void 0 ? void 0 : _c.as(ChannelSubMenu_default);
      if (!sub_menu)
        throw new InnertubeError("Sub menu not found");
      const item = sub_menu.content_type_sub_menu_items.find((item2) => item2.title === content_type_filter);
      if (!item)
        throw new InnertubeError(`Sub menu item ${content_type_filter} not found`, { available_filters: this.content_type_filters });
      if (item.selected)
        return this;
      const page = yield (_d = item.endpoint) === null || _d === void 0 ? void 0 : _d.call(this.actions, { parse: true });
      return new Channel2(this.actions, page, true);
    });
  }
  get filters() {
    var _a5, _b;
    return ((_b = (_a5 = this.memo.getType(FeedFilterChipBar_default)) === null || _a5 === void 0 ? void 0 : _a5[0]) === null || _b === void 0 ? void 0 : _b.contents.filterType(ChipCloudChip_default).map((chip) => chip.text)) || [];
  }
  get sort_filters() {
    var _a5;
    const sort_filter_sub_menu = this.memo.getType(SortFilterSubMenu_default).first();
    return ((_a5 = sort_filter_sub_menu === null || sort_filter_sub_menu === void 0 ? void 0 : sort_filter_sub_menu.sub_menu_items) === null || _a5 === void 0 ? void 0 : _a5.map((item) => item.title)) || [];
  }
  get content_type_filters() {
    var _a5, _b, _c;
    const sub_menu = (_c = (_b = (_a5 = this.current_tab) === null || _a5 === void 0 ? void 0 : _a5.content) === null || _b === void 0 ? void 0 : _b.as(SectionList_default).sub_menu) === null || _c === void 0 ? void 0 : _c.as(ChannelSubMenu_default);
    return (sub_menu === null || sub_menu === void 0 ? void 0 : sub_menu.content_type_sub_menu_items.map((item) => item.title)) || [];
  }
  getHome() {
    return __awaiter8(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("featured");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getVideos() {
    return __awaiter8(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("videos");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getShorts() {
    return __awaiter8(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("shorts");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getLiveStreams() {
    return __awaiter8(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("streams");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getPlaylists() {
    return __awaiter8(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("playlists");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getCommunity() {
    return __awaiter8(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("community");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getChannels() {
    return __awaiter8(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("channels");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getAbout() {
    var _a5;
    return __awaiter8(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("about");
      return (_a5 = tab.memo.getType(ChannelAboutFullMetadata_default)) === null || _a5 === void 0 ? void 0 : _a5[0];
    });
  }
  search(query) {
    var _a5, _b;
    return __awaiter8(this, void 0, void 0, function* () {
      const tab = (_a5 = this.memo.getType(ExpandableTab_default)) === null || _a5 === void 0 ? void 0 : _a5[0];
      if (!tab)
        throw new InnertubeError("Search tab not found", this);
      const page = yield (_b = tab.endpoint) === null || _b === void 0 ? void 0 : _b.call(this.actions, { query, parse: true });
      return new Channel2(this.actions, page, true);
    });
  }
  get has_home() {
    return this.hasTabWithURL("featured");
  }
  get has_videos() {
    return this.hasTabWithURL("videos");
  }
  get has_shorts() {
    return this.hasTabWithURL("shorts");
  }
  get has_live_streams() {
    return this.hasTabWithURL("streams");
  }
  get has_playlists() {
    return this.hasTabWithURL("playlists");
  }
  get has_community() {
    return this.hasTabWithURL("community");
  }
  get has_channels() {
    return this.hasTabWithURL("channels");
  }
  get has_about() {
    return this.hasTabWithURL("about");
  }
  get has_search() {
    var _a5;
    return ((_a5 = this.memo.getType(ExpandableTab_default)) === null || _a5 === void 0 ? void 0 : _a5.length) > 0;
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuationData: { get: () => super.getContinuationData }
    });
    return __awaiter8(this, void 0, void 0, function* () {
      const page = yield _super.getContinuationData.call(this);
      if (!page)
        throw new InnertubeError("Could not get continuation data");
      return new ChannelListContinuation(this.actions, page, true);
    });
  }
};
__name(Channel2, "Channel");
var ChannelListContinuation = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a5;
    super(actions, data, already_parsed);
    this.contents = this.page.on_response_received_actions.first() || ((_a5 = this.page.on_response_received_endpoints) === null || _a5 === void 0 ? void 0 : _a5.first());
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuationData: { get: () => super.getContinuationData }
    });
    return __awaiter8(this, void 0, void 0, function* () {
      const page = yield _super.getContinuationData.call(this);
      if (!page)
        throw new InnertubeError("Could not get continuation data");
      return new ChannelListContinuation(this.actions, page, true);
    });
  }
};
__name(ChannelListContinuation, "ChannelListContinuation");
var FilteredChannelList = class extends FilterableFeed_default {
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
    this.applied_filter = this.memo.getType(ChipCloudChip_default).get({ is_selected: true });
    if (this.page.on_response_received_actions && this.page.on_response_received_actions.length > 1) {
      this.page.on_response_received_actions.shift();
    }
    this.contents = this.page.on_response_received_actions.first();
  }
  applyFilter(filter) {
    const _super = Object.create(null, {
      getFilteredFeed: { get: () => super.getFilteredFeed }
    });
    return __awaiter8(this, void 0, void 0, function* () {
      const feed = yield _super.getFilteredFeed.call(this, filter);
      return new FilteredChannelList(this.actions, feed.page, true);
    });
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuationData: { get: () => super.getContinuationData }
    });
    return __awaiter8(this, void 0, void 0, function* () {
      const page = yield _super.getContinuationData.call(this);
      if (!(page === null || page === void 0 ? void 0 : page.on_response_received_actions_memo))
        throw new InnertubeError("Unexpected continuation data", page);
      page.on_response_received_actions_memo.set("FeedFilterChipBar", this.memo.getType(FeedFilterChipBar_default));
      page.on_response_received_actions_memo.set("ChipCloudChip", this.memo.getType(ChipCloudChip_default));
      return new FilteredChannelList(this.actions, page, true);
    });
  }
};
__name(FilteredChannelList, "FilteredChannelList");

// dist/src/parser/youtube/Comments.js
var __awaiter9 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet15 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet15 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Comments_page;
var _Comments_actions;
var _Comments_continuation;
var Comments = class {
  constructor(actions, data, already_parsed = false) {
    var _a5, _b, _c;
    _Comments_page.set(this, void 0);
    _Comments_actions.set(this, void 0);
    _Comments_continuation.set(this, void 0);
    __classPrivateFieldSet15(this, _Comments_page, already_parsed ? data : parser_default.parseResponse(data), "f");
    __classPrivateFieldSet15(this, _Comments_actions, actions, "f");
    const contents = __classPrivateFieldGet15(this, _Comments_page, "f").on_response_received_endpoints;
    if (!contents)
      throw new InnertubeError("Comments page did not have any content.");
    const header_node = contents.at(0);
    const body_node = contents.at(1);
    this.header = (_a5 = header_node === null || header_node === void 0 ? void 0 : header_node.contents) === null || _a5 === void 0 ? void 0 : _a5.firstOfType(CommentsHeader_default);
    const threads = ((_b = body_node === null || body_node === void 0 ? void 0 : body_node.contents) === null || _b === void 0 ? void 0 : _b.filterType(CommentThread_default)) || [];
    this.contents = observe(threads.map((thread) => {
      var _a6;
      (_a6 = thread.comment) === null || _a6 === void 0 ? void 0 : _a6.setActions(__classPrivateFieldGet15(this, _Comments_actions, "f"));
      thread.setActions(__classPrivateFieldGet15(this, _Comments_actions, "f"));
      return thread;
    }));
    __classPrivateFieldSet15(this, _Comments_continuation, (_c = body_node === null || body_node === void 0 ? void 0 : body_node.contents) === null || _c === void 0 ? void 0 : _c.firstOfType(ContinuationItem_default), "f");
  }
  applySort(sort) {
    var _a5, _b, _c, _d;
    return __awaiter9(this, void 0, void 0, function* () {
      if (!this.header)
        throw new InnertubeError("Page header is missing. Cannot apply sort option.");
      let button;
      if (sort === "TOP_COMMENTS") {
        button = (_b = (_a5 = this.header.sort_menu) === null || _a5 === void 0 ? void 0 : _a5.sub_menu_items) === null || _b === void 0 ? void 0 : _b.at(0);
      } else if (sort === "NEWEST_FIRST") {
        button = (_d = (_c = this.header.sort_menu) === null || _c === void 0 ? void 0 : _c.sub_menu_items) === null || _d === void 0 ? void 0 : _d.at(1);
      }
      if (!button)
        throw new InnertubeError("Could not find target button.");
      if (button.selected)
        return this;
      const response = yield button.endpoint.call(__classPrivateFieldGet15(this, _Comments_actions, "f"), { parse: true });
      return new Comments(__classPrivateFieldGet15(this, _Comments_actions, "f"), response, true);
    });
  }
  createComment(text) {
    var _a5;
    return __awaiter9(this, void 0, void 0, function* () {
      if (!this.header)
        throw new InnertubeError("Page header is missing. Cannot create comment.");
      const button = (_a5 = this.header.create_renderer) === null || _a5 === void 0 ? void 0 : _a5.as(CommentSimplebox_default).submit_button;
      if (!button)
        throw new InnertubeError("Could not find target button. You are probably not logged in.");
      if (!button.endpoint)
        throw new InnertubeError("Button does not have an endpoint.");
      const response = yield button.endpoint.call(__classPrivateFieldGet15(this, _Comments_actions, "f"), { commentText: text });
      return response;
    });
  }
  getContinuation() {
    return __awaiter9(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet15(this, _Comments_continuation, "f"))
        throw new InnertubeError("Continuation not found");
      const data = yield __classPrivateFieldGet15(this, _Comments_continuation, "f").endpoint.call(__classPrivateFieldGet15(this, _Comments_actions, "f"), { parse: true });
      const page = Object.assign({}, __classPrivateFieldGet15(this, _Comments_page, "f"));
      if (!page.on_response_received_endpoints || !data.on_response_received_endpoints)
        throw new InnertubeError("Invalid reponse format, missing on_response_received_endpoints.");
      page.on_response_received_endpoints.pop();
      page.on_response_received_endpoints.push(data.on_response_received_endpoints[0]);
      return new Comments(__classPrivateFieldGet15(this, _Comments_actions, "f"), page, true);
    });
  }
  get has_continuation() {
    return !!__classPrivateFieldGet15(this, _Comments_continuation, "f");
  }
  get page() {
    return __classPrivateFieldGet15(this, _Comments_page, "f");
  }
};
__name(Comments, "Comments");
_Comments_page = /* @__PURE__ */ new WeakMap(), _Comments_actions = /* @__PURE__ */ new WeakMap(), _Comments_continuation = /* @__PURE__ */ new WeakMap();
var Comments_default = Comments;

// dist/src/parser/youtube/History.js
var __awaiter10 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var History = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
    this.sections = this.memo.getType(ItemSection_default);
    this.feed_actions = this.memo.getType(BrowseFeedActions_default).first();
  }
  getContinuation() {
    return __awaiter10(this, void 0, void 0, function* () {
      const response = yield this.getContinuationData();
      if (!response)
        throw new Error("No continuation data found");
      return new History(this.actions, response, true);
    });
  }
};
__name(History, "History");
var History_default = History;

// dist/src/parser/youtube/HomeFeed.js
var __awaiter11 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var HomeFeed = class extends FilterableFeed_default {
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
    this.header = this.memo.getType(FeedTabbedHeader_default).first();
    this.contents = this.memo.getType(RichGrid_default).first() || this.page.on_response_received_actions.first();
  }
  applyFilter(filter) {
    const _super = Object.create(null, {
      getFilteredFeed: { get: () => super.getFilteredFeed }
    });
    return __awaiter11(this, void 0, void 0, function* () {
      const feed = yield _super.getFilteredFeed.call(this, filter);
      return new HomeFeed(this.actions, feed.page, true);
    });
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuation: { get: () => super.getContinuation }
    });
    var _a5;
    return __awaiter11(this, void 0, void 0, function* () {
      const feed = yield _super.getContinuation.call(this);
      feed.page.header = this.page.header;
      (_a5 = feed.page.header_memo) === null || _a5 === void 0 ? void 0 : _a5.set(this.header.type, [this.header]);
      return new HomeFeed(this.actions, feed.page, true);
    });
  }
};
__name(HomeFeed, "HomeFeed");

// dist/src/parser/youtube/ItemMenu.js
var __awaiter12 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet16 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet16 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ItemMenu_page;
var _ItemMenu_actions;
var _ItemMenu_items;
var ItemMenu = class {
  constructor(data, actions) {
    _ItemMenu_page.set(this, void 0);
    _ItemMenu_actions.set(this, void 0);
    _ItemMenu_items.set(this, void 0);
    __classPrivateFieldSet16(this, _ItemMenu_page, data, "f");
    __classPrivateFieldSet16(this, _ItemMenu_actions, actions, "f");
    const menu = data === null || data === void 0 ? void 0 : data.live_chat_item_context_menu_supported_renderers;
    if (!menu || !menu.is(Menu_default))
      throw new InnertubeError('Response did not have a "live_chat_item_context_menu_supported_renderers" property. The call may have failed.');
    __classPrivateFieldSet16(this, _ItemMenu_items, menu.as(Menu_default).items, "f");
  }
  selectItem(item) {
    return __awaiter12(this, void 0, void 0, function* () {
      let endpoint;
      if (item instanceof Button_default) {
        if (!item.endpoint)
          throw new InnertubeError("Item does not have an endpoint.");
        endpoint = item.endpoint;
      } else {
        const button = __classPrivateFieldGet16(this, _ItemMenu_items, "f").find((button2) => {
          if (!button2.is(MenuServiceItem_default)) {
            return false;
          }
          const menuServiceItem = button2.as(MenuServiceItem_default);
          return menuServiceItem.icon_type === item;
        });
        if (!button || !button.is(MenuServiceItem_default))
          throw new InnertubeError(`Button "${item}" not found.`);
        endpoint = button.endpoint;
      }
      if (!endpoint)
        throw new InnertubeError("Target button does not have an endpoint.");
      const response = yield endpoint.call(__classPrivateFieldGet16(this, _ItemMenu_actions, "f"), { parse: true });
      return response;
    });
  }
  items() {
    return __classPrivateFieldGet16(this, _ItemMenu_items, "f");
  }
  page() {
    return __classPrivateFieldGet16(this, _ItemMenu_page, "f");
  }
};
__name(ItemMenu, "ItemMenu");
_ItemMenu_page = /* @__PURE__ */ new WeakMap(), _ItemMenu_actions = /* @__PURE__ */ new WeakMap(), _ItemMenu_items = /* @__PURE__ */ new WeakMap();
var ItemMenu_default = ItemMenu;

// dist/src/parser/youtube/Playlist.js
var __awaiter13 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldGet17 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Playlist_instances;
var _Playlist_getStat;
var Playlist2 = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a5, _b;
    super(actions, data, already_parsed);
    _Playlist_instances.add(this);
    const header = this.memo.getType(PlaylistHeader_default).first();
    const primary_info = this.memo.getType(PlaylistSidebarPrimaryInfo_default).first();
    const secondary_info = this.memo.getType(PlaylistSidebarSecondaryInfo_default).first();
    if (!primary_info && !secondary_info)
      throw new InnertubeError("This playlist does not exist");
    this.info = Object.assign(Object.assign({}, (_a5 = this.page.metadata) === null || _a5 === void 0 ? void 0 : _a5.item().as(PlaylistMetadata_default)), {
      author: (_b = secondary_info === null || secondary_info === void 0 ? void 0 : secondary_info.owner.item().as(VideoOwner_default).author) !== null && _b !== void 0 ? _b : header === null || header === void 0 ? void 0 : header.author,
      thumbnails: primary_info === null || primary_info === void 0 ? void 0 : primary_info.thumbnail_renderer.item().as(PlaylistVideoThumbnail_default, PlaylistCustomThumbnail_default).thumbnail,
      total_items: __classPrivateFieldGet17(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 0, primary_info),
      views: __classPrivateFieldGet17(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 1, primary_info),
      last_updated: __classPrivateFieldGet17(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 2, primary_info),
      can_share: header === null || header === void 0 ? void 0 : header.can_share,
      can_delete: header === null || header === void 0 ? void 0 : header.can_delete,
      is_editable: header === null || header === void 0 ? void 0 : header.is_editable,
      privacy: header === null || header === void 0 ? void 0 : header.privacy
    });
    this.menu = primary_info === null || primary_info === void 0 ? void 0 : primary_info.menu;
    this.endpoint = primary_info === null || primary_info === void 0 ? void 0 : primary_info.endpoint;
    this.messages = this.memo.getType(Message_default);
  }
  get items() {
    return this.videos;
  }
  getContinuation() {
    return __awaiter13(this, void 0, void 0, function* () {
      const page = yield this.getContinuationData();
      if (!page)
        throw new InnertubeError("Could not get continuation data");
      return new Playlist2(this.actions, page, true);
    });
  }
};
__name(Playlist2, "Playlist");
_Playlist_instances = /* @__PURE__ */ new WeakSet(), _Playlist_getStat = /* @__PURE__ */ __name(function _Playlist_getStat2(index, primary_info) {
  var _a5;
  if (!primary_info || !primary_info.stats)
    return "N/A";
  return ((_a5 = primary_info.stats[index]) === null || _a5 === void 0 ? void 0 : _a5.toString()) || "N/A";
}, "_Playlist_getStat");
var Playlist_default2 = Playlist2;

// dist/src/parser/youtube/Library.js
var __awaiter14 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldGet18 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Library_instances;
var _Library_getAll;
var Library = class extends Feed_default {
  constructor(actions, data) {
    var _a5, _b;
    super(actions, data);
    _Library_instances.add(this);
    if (!this.page.contents_memo)
      throw new InnertubeError("Page contents not found");
    const stats = (_a5 = this.page.contents_memo.getType(ProfileColumnStats_default)) === null || _a5 === void 0 ? void 0 : _a5[0];
    const user_info = (_b = this.page.contents_memo.getType(ProfileColumnUserInfo_default)) === null || _b === void 0 ? void 0 : _b[0];
    this.profile = { stats, user_info };
    const shelves = this.page.contents_memo.getType(Shelf_default);
    this.sections = shelves.map((shelf) => {
      var _a6;
      return {
        type: shelf.icon_type,
        title: shelf.title,
        contents: ((_a6 = shelf.content) === null || _a6 === void 0 ? void 0 : _a6.key("items").array()) || [],
        getAll: () => __classPrivateFieldGet18(this, _Library_instances, "m", _Library_getAll).call(this, shelf)
      };
    });
  }
  get history() {
    return this.sections.find((section) => section.type === "WATCH_HISTORY");
  }
  get watch_later() {
    return this.sections.find((section) => section.type === "WATCH_LATER");
  }
  get liked_videos() {
    return this.sections.find((section) => section.type === "LIKE");
  }
  get playlists_section() {
    return this.sections.find((section) => section.type === "PLAYLISTS");
  }
  get clips() {
    return this.sections.find((section) => section.type === "CONTENT_CUT");
  }
};
__name(Library, "Library");
_Library_instances = /* @__PURE__ */ new WeakSet(), _Library_getAll = /* @__PURE__ */ __name(function _Library_getAll2(shelf) {
  var _a5;
  return __awaiter14(this, void 0, void 0, function* () {
    if (!((_a5 = shelf.menu) === null || _a5 === void 0 ? void 0 : _a5.as(Menu_default).hasKey("top_level_buttons")))
      throw new InnertubeError(`The ${shelf.title.text} shelf doesn't have more items`);
    const button = shelf.menu.as(Menu_default).top_level_buttons.firstOfType(Button_default);
    if (!button)
      throw new InnertubeError("Did not find target button.");
    const page = yield button.as(Button_default).endpoint.call(this.actions, { parse: true });
    switch (shelf.icon_type) {
      case "LIKE":
      case "WATCH_LATER":
        return new Playlist_default2(this.actions, page, true);
      case "WATCH_HISTORY":
        return new History_default(this.actions, page, true);
      case "CONTENT_CUT":
        return new Feed_default(this.actions, page, true);
      default:
        throw new InnertubeError("Target shelf not implemented.");
    }
  });
}, "_Library_getAll");
var Library_default = Library;

// dist/src/parser/youtube/SmoothedQueue.js
var __classPrivateFieldSet17 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet19 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SmoothedQueue_last_update_time;
var _SmoothedQueue_estimated_update_interval;
var _SmoothedQueue_callback;
var _SmoothedQueue_action_queue;
var _SmoothedQueue_next_update_id;
var _SmoothedQueue_poll_response_delay_queue;
function flattenQueue(queue) {
  const nodes = [];
  for (const group of queue) {
    if (Array.isArray(group)) {
      for (const node of group) {
        nodes.push(node);
      }
    } else {
      nodes.push(group);
    }
  }
  return nodes;
}
__name(flattenQueue, "flattenQueue");
var DelayQueue = class {
  constructor() {
    this.front = [];
    this.back = [];
  }
  isEmpty() {
    return !this.front.length && !this.back.length;
  }
  clear() {
    this.front = [];
    this.back = [];
  }
  getValues() {
    return this.front.concat(this.back.reverse());
  }
};
__name(DelayQueue, "DelayQueue");
var SmoothedQueue = class {
  constructor() {
    _SmoothedQueue_last_update_time.set(this, void 0);
    _SmoothedQueue_estimated_update_interval.set(this, void 0);
    _SmoothedQueue_callback.set(this, void 0);
    _SmoothedQueue_action_queue.set(this, void 0);
    _SmoothedQueue_next_update_id.set(this, void 0);
    _SmoothedQueue_poll_response_delay_queue.set(this, void 0);
    __classPrivateFieldSet17(this, _SmoothedQueue_last_update_time, null, "f");
    __classPrivateFieldSet17(this, _SmoothedQueue_estimated_update_interval, null, "f");
    __classPrivateFieldSet17(this, _SmoothedQueue_callback, null, "f");
    __classPrivateFieldSet17(this, _SmoothedQueue_action_queue, [], "f");
    __classPrivateFieldSet17(this, _SmoothedQueue_next_update_id, null, "f");
    __classPrivateFieldSet17(this, _SmoothedQueue_poll_response_delay_queue, new DelayQueue(), "f");
  }
  enqueueActionGroup(group) {
    if (__classPrivateFieldGet19(this, _SmoothedQueue_last_update_time, "f") !== null) {
      const delay = Date.now() - __classPrivateFieldGet19(this, _SmoothedQueue_last_update_time, "f");
      __classPrivateFieldGet19(this, _SmoothedQueue_poll_response_delay_queue, "f").back.push(delay);
      if (5 < __classPrivateFieldGet19(this, _SmoothedQueue_poll_response_delay_queue, "f").front.length + __classPrivateFieldGet19(this, _SmoothedQueue_poll_response_delay_queue, "f").back.length) {
        if (!__classPrivateFieldGet19(this, _SmoothedQueue_poll_response_delay_queue, "f").front.length) {
          __classPrivateFieldGet19(this, _SmoothedQueue_poll_response_delay_queue, "f").front = __classPrivateFieldGet19(this, _SmoothedQueue_poll_response_delay_queue, "f").back;
          __classPrivateFieldGet19(this, _SmoothedQueue_poll_response_delay_queue, "f").front.reverse();
          __classPrivateFieldGet19(this, _SmoothedQueue_poll_response_delay_queue, "f").back = [];
        }
        __classPrivateFieldGet19(this, _SmoothedQueue_poll_response_delay_queue, "f").front.pop();
      }
      __classPrivateFieldSet17(this, _SmoothedQueue_estimated_update_interval, Math.max(...__classPrivateFieldGet19(this, _SmoothedQueue_poll_response_delay_queue, "f").getValues()), "f");
    }
    __classPrivateFieldSet17(this, _SmoothedQueue_last_update_time, Date.now(), "f");
    __classPrivateFieldGet19(this, _SmoothedQueue_action_queue, "f").push(group);
    if (__classPrivateFieldGet19(this, _SmoothedQueue_next_update_id, "f") === null) {
      __classPrivateFieldSet17(this, _SmoothedQueue_next_update_id, setTimeout(this.emitSmoothedActions.bind(this)), "f");
    }
  }
  emitSmoothedActions() {
    __classPrivateFieldSet17(this, _SmoothedQueue_next_update_id, null, "f");
    if (__classPrivateFieldGet19(this, _SmoothedQueue_action_queue, "f").length) {
      let delay = 1e4;
      if (__classPrivateFieldGet19(this, _SmoothedQueue_estimated_update_interval, "f") !== null && __classPrivateFieldGet19(this, _SmoothedQueue_last_update_time, "f") !== null) {
        delay = __classPrivateFieldGet19(this, _SmoothedQueue_estimated_update_interval, "f") - Date.now() + __classPrivateFieldGet19(this, _SmoothedQueue_last_update_time, "f");
      }
      delay = __classPrivateFieldGet19(this, _SmoothedQueue_action_queue, "f").length < delay / 80 ? 1 : Math.ceil(__classPrivateFieldGet19(this, _SmoothedQueue_action_queue, "f").length / (delay / 80));
      const actions = flattenQueue(__classPrivateFieldGet19(this, _SmoothedQueue_action_queue, "f").splice(0, delay));
      if (__classPrivateFieldGet19(this, _SmoothedQueue_callback, "f")) {
        __classPrivateFieldGet19(this, _SmoothedQueue_callback, "f").call(this, actions);
      }
      if (__classPrivateFieldGet19(this, _SmoothedQueue_action_queue, "f") !== null) {
        delay == 1 ? (delay = __classPrivateFieldGet19(this, _SmoothedQueue_estimated_update_interval, "f") / __classPrivateFieldGet19(this, _SmoothedQueue_action_queue, "f").length, delay *= Math.random() + 0.5, delay = Math.min(1e3, delay), delay = Math.max(80, delay)) : delay = 80;
        __classPrivateFieldSet17(this, _SmoothedQueue_next_update_id, setTimeout(this.emitSmoothedActions.bind(this), delay), "f");
      }
    }
  }
  clear() {
    if (__classPrivateFieldGet19(this, _SmoothedQueue_next_update_id, "f") !== null) {
      clearTimeout(__classPrivateFieldGet19(this, _SmoothedQueue_next_update_id, "f"));
      __classPrivateFieldSet17(this, _SmoothedQueue_next_update_id, null, "f");
    }
    __classPrivateFieldSet17(this, _SmoothedQueue_action_queue, [], "f");
  }
  set callback(cb) {
    __classPrivateFieldSet17(this, _SmoothedQueue_callback, cb, "f");
  }
  get callback() {
    return __classPrivateFieldGet19(this, _SmoothedQueue_callback, "f");
  }
  get action_queue() {
    return __classPrivateFieldGet19(this, _SmoothedQueue_action_queue, "f");
  }
  get estimated_update_interval() {
    return __classPrivateFieldGet19(this, _SmoothedQueue_estimated_update_interval, "f");
  }
  get last_update_time() {
    return __classPrivateFieldGet19(this, _SmoothedQueue_last_update_time, "f");
  }
  get next_update_id() {
    return __classPrivateFieldGet19(this, _SmoothedQueue_next_update_id, "f");
  }
  get poll_response_delay_queue() {
    return __classPrivateFieldGet19(this, _SmoothedQueue_poll_response_delay_queue, "f");
  }
};
__name(SmoothedQueue, "SmoothedQueue");
_SmoothedQueue_last_update_time = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_estimated_update_interval = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_callback = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_action_queue = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_next_update_id = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_poll_response_delay_queue = /* @__PURE__ */ new WeakMap();
var SmoothedQueue_default = SmoothedQueue;

// dist/src/parser/youtube/LiveChat.js
var __awaiter15 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet18 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet20 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LiveChat_instances;
var _LiveChat_actions;
var _LiveChat_video_id;
var _LiveChat_channel_id;
var _LiveChat_continuation;
var _LiveChat_mcontinuation;
var _LiveChat_retry_count;
var _LiveChat_pollLivechat;
var _LiveChat_emitSmoothedActions;
var _LiveChat_pollMetadata;
var _LiveChat_wait;
var LiveChat2 = class extends EventEmitterLike {
  constructor(video_info) {
    var _a5, _b;
    super();
    _LiveChat_instances.add(this);
    _LiveChat_actions.set(this, void 0);
    _LiveChat_video_id.set(this, void 0);
    _LiveChat_channel_id.set(this, void 0);
    _LiveChat_continuation.set(this, void 0);
    _LiveChat_mcontinuation.set(this, void 0);
    _LiveChat_retry_count.set(this, 0);
    this.running = false;
    this.is_replay = false;
    __classPrivateFieldSet18(this, _LiveChat_video_id, video_info.basic_info.id, "f");
    __classPrivateFieldSet18(this, _LiveChat_channel_id, video_info.basic_info.channel_id, "f");
    __classPrivateFieldSet18(this, _LiveChat_actions, video_info.actions, "f");
    __classPrivateFieldSet18(this, _LiveChat_continuation, (_a5 = video_info.livechat) === null || _a5 === void 0 ? void 0 : _a5.continuation, "f");
    this.is_replay = ((_b = video_info.livechat) === null || _b === void 0 ? void 0 : _b.is_replay) || false;
    this.smoothed_queue = new SmoothedQueue_default();
    this.smoothed_queue.callback = (actions) => __awaiter15(this, void 0, void 0, function* () {
      if (!actions.length) {
        yield __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
      } else if (actions.length < 10) {
        yield __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
      } else if (this.is_replay) {
        __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
        yield __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
      } else {
        __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
      }
      if (this.running) {
        __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
      }
    });
  }
  on(type, listener) {
    super.on(type, listener);
  }
  once(type, listener) {
    super.once(type, listener);
  }
  start() {
    if (!this.running) {
      this.running = true;
      __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
      __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_pollMetadata).call(this);
    }
  }
  stop() {
    this.smoothed_queue.clear();
    this.running = false;
  }
  sendMessage(text) {
    return __awaiter15(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet20(this, _LiveChat_actions, "f").execute("/live_chat/send_message", {
        params: proto_default.encodeMessageParams(__classPrivateFieldGet20(this, _LiveChat_channel_id, "f"), __classPrivateFieldGet20(this, _LiveChat_video_id, "f")),
        richMessage: { textSegments: [{ text }] },
        clientMessageId: Platform.shim.uuidv4(),
        client: "ANDROID",
        parse: true
      });
      if (!response.actions)
        throw new InnertubeError("Unexpected response from send_message", response);
      return response.actions.array().as(AddChatItemAction_default);
    });
  }
  applyFilter(filter) {
    var _a5, _b, _c, _d, _e, _f, _g;
    if (!this.initial_info)
      throw new InnertubeError("Cannot apply filter before initial info is retrieved.");
    const menu_items = (_c = (_b = (_a5 = this.initial_info) === null || _a5 === void 0 ? void 0 : _a5.header) === null || _b === void 0 ? void 0 : _b.view_selector) === null || _c === void 0 ? void 0 : _c.sub_menu_items;
    if (filter === "TOP_CHAT") {
      if ((_d = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(0)) === null || _d === void 0 ? void 0 : _d.selected)
        return;
      __classPrivateFieldSet18(this, _LiveChat_continuation, (_e = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(0)) === null || _e === void 0 ? void 0 : _e.continuation, "f");
    } else {
      if ((_f = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(1)) === null || _f === void 0 ? void 0 : _f.selected)
        return;
      __classPrivateFieldSet18(this, _LiveChat_continuation, (_g = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(1)) === null || _g === void 0 ? void 0 : _g.continuation, "f");
    }
  }
  getItemMenu(item) {
    return __awaiter15(this, void 0, void 0, function* () {
      if (!item.menu_endpoint)
        throw new InnertubeError("This item does not have a menu.", item);
      const response = yield item.menu_endpoint.call(__classPrivateFieldGet20(this, _LiveChat_actions, "f"), { parse: true });
      if (!response)
        throw new InnertubeError("Could not retrieve item menu.", item);
      return new ItemMenu_default(response, __classPrivateFieldGet20(this, _LiveChat_actions, "f"));
    });
  }
  selectButton(button) {
    return __awaiter15(this, void 0, void 0, function* () {
      const response = yield button.endpoint.call(__classPrivateFieldGet20(this, _LiveChat_actions, "f"), { parse: true });
      return response;
    });
  }
};
__name(LiveChat2, "LiveChat");
_LiveChat_actions = /* @__PURE__ */ new WeakMap(), _LiveChat_video_id = /* @__PURE__ */ new WeakMap(), _LiveChat_channel_id = /* @__PURE__ */ new WeakMap(), _LiveChat_continuation = /* @__PURE__ */ new WeakMap(), _LiveChat_mcontinuation = /* @__PURE__ */ new WeakMap(), _LiveChat_retry_count = /* @__PURE__ */ new WeakMap(), _LiveChat_instances = /* @__PURE__ */ new WeakSet(), _LiveChat_pollLivechat = /* @__PURE__ */ __name(function _LiveChat_pollLivechat2() {
  (() => __awaiter15(this, void 0, void 0, function* () {
    var _a5, _b;
    try {
      const response = yield __classPrivateFieldGet20(this, _LiveChat_actions, "f").execute(this.is_replay ? "live_chat/get_live_chat_replay" : "live_chat/get_live_chat", { continuation: __classPrivateFieldGet20(this, _LiveChat_continuation, "f"), parse: true });
      const contents = response.continuation_contents;
      if (!contents) {
        this.emit("error", new InnertubeError("Unexpected live chat incremental continuation response", response));
        this.emit("end");
        this.stop();
      }
      if (!(contents instanceof LiveChatContinuation)) {
        this.stop();
        this.emit("end");
        return;
      }
      __classPrivateFieldSet18(this, _LiveChat_continuation, contents.continuation.token, "f");
      if (contents.header) {
        this.initial_info = contents;
        this.emit("start", contents);
        if (this.running)
          __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_pollLivechat2).call(this);
      } else {
        this.smoothed_queue.enqueueActionGroup(contents.actions);
      }
      __classPrivateFieldSet18(this, _LiveChat_retry_count, 0, "f");
    } catch (err) {
      this.emit("error", err);
      if ((__classPrivateFieldSet18(this, _LiveChat_retry_count, (_b = __classPrivateFieldGet20(this, _LiveChat_retry_count, "f"), _a5 = _b++, _b), "f"), _a5) < 10) {
        yield __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
        __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_pollLivechat2).call(this);
      } else {
        this.emit("error", new InnertubeError("Reached retry limit for incremental continuation requests", err));
        this.emit("end");
        this.stop();
      }
    }
  }))();
}, "_LiveChat_pollLivechat"), _LiveChat_emitSmoothedActions = /* @__PURE__ */ __name(function _LiveChat_emitSmoothedActions2(action_queue) {
  return __awaiter15(this, void 0, void 0, function* () {
    const base = 1e4;
    let delay = action_queue.length < base / 80 ? 1 : Math.ceil(action_queue.length / (base / 80));
    const emit_delay_ms = delay == 1 ? (delay = base / action_queue.length, delay *= Math.random() + 0.5, delay = Math.min(1e3, delay), delay = Math.max(80, delay)) : delay = 80;
    for (const action of action_queue) {
      yield __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, emit_delay_ms);
      this.emit("chat-update", action);
    }
  });
}, "_LiveChat_emitSmoothedActions"), _LiveChat_pollMetadata = /* @__PURE__ */ __name(function _LiveChat_pollMetadata2() {
  (() => __awaiter15(this, void 0, void 0, function* () {
    var _a5, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    try {
      const payload = { videoId: __classPrivateFieldGet20(this, _LiveChat_video_id, "f") };
      if (__classPrivateFieldGet20(this, _LiveChat_mcontinuation, "f")) {
        payload.continuation = __classPrivateFieldGet20(this, _LiveChat_mcontinuation, "f");
      }
      const response = yield __classPrivateFieldGet20(this, _LiveChat_actions, "f").execute("/updated_metadata", payload);
      const data = parser_default.parseResponse(response.data);
      __classPrivateFieldSet18(this, _LiveChat_mcontinuation, (_a5 = data.continuation) === null || _a5 === void 0 ? void 0 : _a5.token, "f");
      this.metadata = {
        title: ((_b = data.actions) === null || _b === void 0 ? void 0 : _b.array().firstOfType(UpdateTitleAction_default)) || ((_c = this.metadata) === null || _c === void 0 ? void 0 : _c.title),
        description: ((_d = data.actions) === null || _d === void 0 ? void 0 : _d.array().firstOfType(UpdateDescriptionAction_default)) || ((_e = this.metadata) === null || _e === void 0 ? void 0 : _e.description),
        views: ((_f = data.actions) === null || _f === void 0 ? void 0 : _f.array().firstOfType(UpdateViewershipAction_default)) || ((_g = this.metadata) === null || _g === void 0 ? void 0 : _g.views),
        likes: ((_h = data.actions) === null || _h === void 0 ? void 0 : _h.array().firstOfType(UpdateToggleButtonTextAction_default)) || ((_j = this.metadata) === null || _j === void 0 ? void 0 : _j.likes),
        date: ((_k = data.actions) === null || _k === void 0 ? void 0 : _k.array().firstOfType(UpdateDateTextAction_default)) || ((_l = this.metadata) === null || _l === void 0 ? void 0 : _l.date)
      };
      this.emit("metadata-update", this.metadata);
      yield __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 5e3);
      if (this.running)
        __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_pollMetadata2).call(this);
    } catch (err) {
      yield __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
      if (this.running)
        __classPrivateFieldGet20(this, _LiveChat_instances, "m", _LiveChat_pollMetadata2).call(this);
    }
  }))();
}, "_LiveChat_pollMetadata"), _LiveChat_wait = /* @__PURE__ */ __name(function _LiveChat_wait2(ms) {
  return __awaiter15(this, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
  });
}, "_LiveChat_wait");
var LiveChat_default2 = LiveChat2;

// dist/src/parser/youtube/NotificationsMenu.js
var __awaiter16 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet19 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet21 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NotificationsMenu_page;
var _NotificationsMenu_actions;
var NotificationsMenu = class {
  constructor(actions, response) {
    _NotificationsMenu_page.set(this, void 0);
    _NotificationsMenu_actions.set(this, void 0);
    __classPrivateFieldSet19(this, _NotificationsMenu_actions, actions, "f");
    __classPrivateFieldSet19(this, _NotificationsMenu_page, parser_default.parseResponse(response.data), "f");
    this.header = __classPrivateFieldGet21(this, _NotificationsMenu_page, "f").actions_memo.getType(SimpleMenuHeader_default).first();
    this.contents = __classPrivateFieldGet21(this, _NotificationsMenu_page, "f").actions_memo.getType(Notification_default);
  }
  getContinuation() {
    return __awaiter16(this, void 0, void 0, function* () {
      const continuation = __classPrivateFieldGet21(this, _NotificationsMenu_page, "f").actions_memo.getType(ContinuationItem_default).first();
      if (!continuation)
        throw new InnertubeError("Continuation not found");
      const response = yield continuation.endpoint.call(__classPrivateFieldGet21(this, _NotificationsMenu_actions, "f"), { parse: false });
      return new NotificationsMenu(__classPrivateFieldGet21(this, _NotificationsMenu_actions, "f"), response);
    });
  }
  get page() {
    return __classPrivateFieldGet21(this, _NotificationsMenu_page, "f");
  }
};
__name(NotificationsMenu, "NotificationsMenu");
_NotificationsMenu_page = /* @__PURE__ */ new WeakMap(), _NotificationsMenu_actions = /* @__PURE__ */ new WeakMap();
var NotificationsMenu_default = NotificationsMenu;

// dist/src/parser/youtube/Search.js
var __awaiter17 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Search = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a5, _b, _c, _d, _e, _f;
    super(actions, data, already_parsed);
    const contents = ((_a5 = this.page.contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(SectionList_default).first().contents) || ((_b = this.page.on_response_received_commands) === null || _b === void 0 ? void 0 : _b.first().contents);
    if (!contents)
      throw new InnertubeError("No contents found in search response");
    this.results = (_c = contents.firstOfType(ItemSection_default)) === null || _c === void 0 ? void 0 : _c.contents;
    this.refinements = this.page.refinements || [];
    this.estimated_results = this.page.estimated_results;
    this.watch_card = (_d = this.page.contents_memo) === null || _d === void 0 ? void 0 : _d.getType(UniversalWatchCard_default).first();
    this.refinement_cards = (_f = (_e = this.results) === null || _e === void 0 ? void 0 : _e.get({ type: "HorizontalCardList" }, true)) === null || _f === void 0 ? void 0 : _f.as(HorizontalCardList_default);
  }
  selectRefinementCard(card) {
    var _a5, _b;
    return __awaiter17(this, void 0, void 0, function* () {
      let target_card;
      if (typeof card === "string") {
        if (!this.refinement_cards)
          throw new InnertubeError("No refinement cards found.");
        target_card = (_b = (_a5 = this.refinement_cards) === null || _a5 === void 0 ? void 0 : _a5.cards.get({ query: card })) === null || _b === void 0 ? void 0 : _b.as(SearchRefinementCard_default);
        if (!target_card)
          throw new InnertubeError(`Refinement card "${card}" not found`, { available_cards: this.refinement_card_queries });
      } else if (card.type === "SearchRefinementCard") {
        target_card = card;
      } else {
        throw new InnertubeError("Invalid refinement card!");
      }
      const page = yield target_card.endpoint.call(this.actions, { parse: true });
      return new Search(this.actions, page, true);
    });
  }
  get refinement_card_queries() {
    var _a5;
    return ((_a5 = this.refinement_cards) === null || _a5 === void 0 ? void 0 : _a5.cards.as(SearchRefinementCard_default).map((card) => card.query)) || [];
  }
  getContinuation() {
    return __awaiter17(this, void 0, void 0, function* () {
      const response = yield this.getContinuationData();
      if (!response)
        throw new InnertubeError("Could not get continuation data");
      return new Search(this.actions, response, true);
    });
  }
};
__name(Search, "Search");
var Search_default = Search;

// dist/src/parser/youtube/Settings.js
var __awaiter18 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet20 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet22 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Settings_page;
var _Settings_actions;
var Settings = class {
  constructor(actions, response) {
    var _a5, _b, _c, _d;
    _Settings_page.set(this, void 0);
    _Settings_actions.set(this, void 0);
    __classPrivateFieldSet20(this, _Settings_actions, actions, "f");
    __classPrivateFieldSet20(this, _Settings_page, parser_default.parseResponse(response.data), "f");
    this.sidebar = (_a5 = __classPrivateFieldGet22(this, _Settings_page, "f").sidebar) === null || _a5 === void 0 ? void 0 : _a5.as(SettingsSidebar_default);
    if (!__classPrivateFieldGet22(this, _Settings_page, "f").contents)
      throw new InnertubeError("Page contents not found");
    const tab = __classPrivateFieldGet22(this, _Settings_page, "f").contents.item().as(TwoColumnBrowseResults_default).tabs.array().as(Tab_default).get({ selected: true });
    if (!tab)
      throw new InnertubeError("Target tab not found");
    const contents = (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(SectionList_default).contents.as(ItemSection_default);
    this.introduction = (_d = (_c = contents === null || contents === void 0 ? void 0 : contents.shift()) === null || _c === void 0 ? void 0 : _c.contents) === null || _d === void 0 ? void 0 : _d.firstOfType(PageIntroduction_default);
    this.sections = contents === null || contents === void 0 ? void 0 : contents.map((el) => {
      var _a6;
      return {
        title: ((_a6 = el.header) === null || _a6 === void 0 ? void 0 : _a6.title.toString()) || null,
        contents: el.contents
      };
    });
  }
  selectSidebarItem(target_item) {
    return __awaiter18(this, void 0, void 0, function* () {
      if (!this.sidebar)
        throw new InnertubeError("Sidebar not available");
      let item;
      if (typeof target_item === "string") {
        item = this.sidebar.items.get({ title: target_item });
        if (!item)
          throw new InnertubeError(`Item "${target_item}" not found`, { available_items: this.sidebar_items });
      } else if (target_item === null || target_item === void 0 ? void 0 : target_item.is(CompactLink_default)) {
        item = target_item;
      } else {
        throw new InnertubeError("Invalid item", { target_item });
      }
      const response = yield item.endpoint.call(__classPrivateFieldGet22(this, _Settings_actions, "f"), { parse: false });
      return new Settings(__classPrivateFieldGet22(this, _Settings_actions, "f"), response);
    });
  }
  getSettingOption(name) {
    var _a5;
    if (!this.sections)
      throw new InnertubeError("Sections not available");
    for (const section of this.sections) {
      if (!section.contents)
        continue;
      for (const el of section.contents) {
        const options = el.as(SettingsOptions_default).options;
        if (options) {
          for (const option of options) {
            if (option.is(SettingsSwitch_default) && ((_a5 = option.title) === null || _a5 === void 0 ? void 0 : _a5.toString()) === name)
              return option;
          }
        }
      }
    }
    throw new InnertubeError(`Option "${name}" not found`, { available_options: this.setting_options });
  }
  get setting_options() {
    if (!this.sections)
      throw new InnertubeError("Sections not available");
    let options = [];
    for (const section of this.sections) {
      if (!section.contents)
        continue;
      for (const el of section.contents) {
        if (el.as(SettingsOptions_default).options)
          options = options.concat(el.as(SettingsOptions_default).options);
      }
    }
    return options.map((opt) => {
      var _a5;
      return (_a5 = opt.title) === null || _a5 === void 0 ? void 0 : _a5.toString();
    }).filter((el) => el);
  }
  get sidebar_items() {
    if (!this.sidebar)
      throw new InnertubeError("Sidebar not available");
    return this.sidebar.items.map((item) => item.title.toString());
  }
  get page() {
    return __classPrivateFieldGet22(this, _Settings_page, "f");
  }
};
__name(Settings, "Settings");
_Settings_page = /* @__PURE__ */ new WeakMap(), _Settings_actions = /* @__PURE__ */ new WeakMap();
var Settings_default = Settings;

// dist/src/parser/youtube/TimeWatched.js
var __classPrivateFieldSet21 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet23 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TimeWatched_page;
var TimeWatched = class {
  constructor(response) {
    var _a5;
    _TimeWatched_page.set(this, void 0);
    __classPrivateFieldSet21(this, _TimeWatched_page, parser_default.parseResponse(response.data), "f");
    if (!__classPrivateFieldGet23(this, _TimeWatched_page, "f").contents)
      throw new InnertubeError("Page contents not found");
    const tab = __classPrivateFieldGet23(this, _TimeWatched_page, "f").contents.item().as(SingleColumnBrowseResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find target tab.");
    this.contents = (_a5 = tab.content) === null || _a5 === void 0 ? void 0 : _a5.as(SectionList_default).contents.as(ItemSection_default);
  }
  get page() {
    return __classPrivateFieldGet23(this, _TimeWatched_page, "f");
  }
};
__name(TimeWatched, "TimeWatched");
_TimeWatched_page = /* @__PURE__ */ new WeakMap();
var TimeWatched_default = TimeWatched;

// dist/src/utils/Cache.js
var __classPrivateFieldSet22 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet24 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UniversalCache_cache;
var UniversalCache = class {
  constructor(persistent, persistent_directory) {
    _UniversalCache_cache.set(this, void 0);
    __classPrivateFieldSet22(this, _UniversalCache_cache, new Platform.shim.Cache(persistent, persistent_directory), "f");
  }
  get cache_dir() {
    return __classPrivateFieldGet24(this, _UniversalCache_cache, "f").cache_dir;
  }
  get(key) {
    return __classPrivateFieldGet24(this, _UniversalCache_cache, "f").get(key);
  }
  set(key, value) {
    return __classPrivateFieldGet24(this, _UniversalCache_cache, "f").set(key, value);
  }
  remove(key) {
    return __classPrivateFieldGet24(this, _UniversalCache_cache, "f").remove(key);
  }
};
__name(UniversalCache, "UniversalCache");
_UniversalCache_cache = /* @__PURE__ */ new WeakMap();

// dist/src/utils/HTTPClient.js
var __awaiter19 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet23 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet25 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HTTPClient_instances;
var _HTTPClient_session;
var _HTTPClient_cookie;
var _HTTPClient_fetch;
var _HTTPClient_adjustContext;
var HTTPClient = class {
  constructor(session, cookie, fetch) {
    _HTTPClient_instances.add(this);
    _HTTPClient_session.set(this, void 0);
    _HTTPClient_cookie.set(this, void 0);
    _HTTPClient_fetch.set(this, void 0);
    __classPrivateFieldSet23(this, _HTTPClient_session, session, "f");
    __classPrivateFieldSet23(this, _HTTPClient_cookie, cookie, "f");
    __classPrivateFieldSet23(this, _HTTPClient_fetch, fetch || Platform.shim.fetch, "f");
  }
  get fetch_function() {
    return __classPrivateFieldGet25(this, _HTTPClient_fetch, "f");
  }
  fetch(input, init) {
    return __awaiter19(this, void 0, void 0, function* () {
      const innertube_url = Constants_default.URLS.API.PRODUCTION_1 + __classPrivateFieldGet25(this, _HTTPClient_session, "f").api_version;
      const baseURL = (init === null || init === void 0 ? void 0 : init.baseURL) || innertube_url;
      const request_url = typeof input === "string" ? !baseURL.endsWith("/") && !input.startsWith("/") ? new URL(`${baseURL}/${input}`) : new URL(baseURL + input) : input instanceof URL ? input : new URL(input.url, baseURL);
      const headers = (init === null || init === void 0 ? void 0 : init.headers) || (input instanceof Platform.shim.Request ? input.headers : new Platform.shim.Headers()) || new Platform.shim.Headers();
      const body = (init === null || init === void 0 ? void 0 : init.body) || (input instanceof Platform.shim.Request ? input.body : void 0);
      const request_headers = new Platform.shim.Headers(headers);
      request_headers.set("Accept", "*/*");
      request_headers.set("Accept-Language", "*");
      request_headers.set("x-goog-visitor-id", __classPrivateFieldGet25(this, _HTTPClient_session, "f").context.client.visitorData || "");
      request_headers.set("x-origin", request_url.origin);
      request_headers.set("x-youtube-client-version", __classPrivateFieldGet25(this, _HTTPClient_session, "f").context.client.clientVersion || "");
      if (Platform.shim.server) {
        request_headers.set("User-Agent", getRandomUserAgent("desktop"));
        request_headers.set("origin", request_url.origin);
      }
      request_url.searchParams.set("key", __classPrivateFieldGet25(this, _HTTPClient_session, "f").key);
      request_url.searchParams.set("prettyPrint", "false");
      request_url.searchParams.set("alt", "json");
      const content_type = request_headers.get("Content-Type");
      let request_body = body;
      let is_web_kids = false;
      const is_innertube_req = baseURL === innertube_url || baseURL === Constants_default.URLS.YT_UPLOAD;
      if (content_type === "application/json" && is_innertube_req && typeof body === "string") {
        const json = JSON.parse(body);
        const n_body = Object.assign(Object.assign({}, json), {
          context: JSON.parse(JSON.stringify(__classPrivateFieldGet25(this, _HTTPClient_session, "f").context))
        });
        __classPrivateFieldGet25(this, _HTTPClient_instances, "m", _HTTPClient_adjustContext).call(this, n_body.context, n_body.client);
        request_headers.set("x-youtube-client-version", n_body.context.client.clientVersion);
        delete n_body.client;
        is_web_kids = n_body.context.client.clientName === "WEB_KIDS";
        request_body = JSON.stringify(n_body);
      }
      if (__classPrivateFieldGet25(this, _HTTPClient_session, "f").logged_in && is_innertube_req && !is_web_kids) {
        const oauth = __classPrivateFieldGet25(this, _HTTPClient_session, "f").oauth;
        if (oauth.validateCredentials()) {
          yield oauth.refreshIfRequired();
          request_headers.set("authorization", `Bearer ${oauth.credentials.access_token}`);
          request_url.searchParams.delete("key");
        }
        if (__classPrivateFieldGet25(this, _HTTPClient_cookie, "f")) {
          const papisid = getStringBetweenStrings(__classPrivateFieldGet25(this, _HTTPClient_cookie, "f"), "PAPISID=", ";");
          if (papisid) {
            request_headers.set("authorization", yield generateSidAuth(papisid));
            request_headers.set("x-goog-authuser", __classPrivateFieldGet25(this, _HTTPClient_session, "f").account_index.toString());
          }
          request_headers.set("cookie", __classPrivateFieldGet25(this, _HTTPClient_cookie, "f"));
        }
      }
      const request = new Platform.shim.Request(request_url, input instanceof Platform.shim.Request ? input : init);
      const response = yield __classPrivateFieldGet25(this, _HTTPClient_fetch, "f").call(this, request, {
        body: request_body,
        headers: request_headers,
        credentials: "include",
        redirect: input instanceof Platform.shim.Request ? input.redirect : (init === null || init === void 0 ? void 0 : init.redirect) || "follow"
      });
      if (response.ok) {
        return response;
      }
      throw new InnertubeError(`Request to ${response.url} failed with status ${response.status}`, yield response.text());
    });
  }
};
__name(HTTPClient, "HTTPClient");
_HTTPClient_session = /* @__PURE__ */ new WeakMap(), _HTTPClient_cookie = /* @__PURE__ */ new WeakMap(), _HTTPClient_fetch = /* @__PURE__ */ new WeakMap(), _HTTPClient_instances = /* @__PURE__ */ new WeakSet(), _HTTPClient_adjustContext = /* @__PURE__ */ __name(function _HTTPClient_adjustContext2(ctx, client) {
  switch (client) {
    case "YTMUSIC":
      ctx.client.clientVersion = Constants_default.CLIENTS.YTMUSIC.VERSION;
      ctx.client.clientName = Constants_default.CLIENTS.YTMUSIC.NAME;
      break;
    case "ANDROID":
      ctx.client.clientVersion = Constants_default.CLIENTS.ANDROID.VERSION;
      ctx.client.clientFormFactor = "SMALL_FORM_FACTOR";
      ctx.client.clientName = Constants_default.CLIENTS.ANDROID.NAME;
      ctx.client.androidSdkVersion = Constants_default.CLIENTS.ANDROID.SDK_VERSION;
      break;
    case "YTMUSIC_ANDROID":
      ctx.client.clientVersion = Constants_default.CLIENTS.YTMUSIC_ANDROID.VERSION;
      ctx.client.clientFormFactor = "SMALL_FORM_FACTOR";
      ctx.client.clientName = Constants_default.CLIENTS.YTMUSIC_ANDROID.NAME;
      ctx.client.androidSdkVersion = Constants_default.CLIENTS.ANDROID.SDK_VERSION;
      break;
    case "YTSTUDIO_ANDROID":
      ctx.client.clientVersion = Constants_default.CLIENTS.YTSTUDIO_ANDROID.VERSION;
      ctx.client.clientFormFactor = "SMALL_FORM_FACTOR";
      ctx.client.clientName = Constants_default.CLIENTS.YTSTUDIO_ANDROID.NAME;
      ctx.client.androidSdkVersion = Constants_default.CLIENTS.ANDROID.SDK_VERSION;
      break;
    case "TV_EMBEDDED":
      ctx.client.clientVersion = Constants_default.CLIENTS.TV_EMBEDDED.VERSION;
      ctx.client.clientScreen = "EMBED";
      ctx.thirdParty = { embedUrl: Constants_default.URLS.YT_BASE };
      break;
    case "YTKIDS":
      ctx.client.clientVersion = Constants_default.CLIENTS.WEB_KIDS.VERSION;
      ctx.client.clientName = Constants_default.CLIENTS.WEB_KIDS.NAME;
      ctx.client.kidsAppInfo = {
        categorySettings: {
          enabledCategories: [
            "approved_for_you",
            "black_joy",
            "camp",
            "collections",
            "earth",
            "explore",
            "favorites",
            "gaming",
            "halloween",
            "hero",
            "learning",
            "move",
            "music",
            "reading",
            "shared_by_parents",
            "shows",
            "soccer",
            "sports",
            "spotlight",
            "winter"
          ]
        },
        contentSettings: {
          corpusPreference: "KIDS_CORPUS_PREFERENCE_YOUNGER",
          kidsNoSearchMode: "YT_KIDS_NO_SEARCH_MODE_OFF"
        }
      };
      break;
    default:
      break;
  }
}, "_HTTPClient_adjustContext");

// dist/src/utils/FormatUtils.js
var __awaiter20 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldGet26 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __asyncValues = function(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
  __name(settle, "settle");
};
var _a3;
var _FormatUtils_el;
var _FormatUtils_generateAdaptationSet;
var _FormatUtils_generateRepresentationVideo;
var _FormatUtils_generateRepresentationAudio;
var FormatUtils = class {
  static download(options, actions, playability_status, streaming_data, player, cpn) {
    return __awaiter20(this, void 0, void 0, function* () {
      if ((playability_status === null || playability_status === void 0 ? void 0 : playability_status.status) === "UNPLAYABLE")
        throw new InnertubeError("Video is unplayable", { error_type: "UNPLAYABLE" });
      if ((playability_status === null || playability_status === void 0 ? void 0 : playability_status.status) === "LOGIN_REQUIRED")
        throw new InnertubeError("Video is login required", { error_type: "LOGIN_REQUIRED" });
      if (!streaming_data)
        throw new InnertubeError("Streaming data not available.", { error_type: "NO_STREAMING_DATA" });
      const opts = Object.assign({ quality: "360p", type: "video+audio", format: "mp4", range: void 0 }, options);
      const format = this.chooseFormat(opts, streaming_data);
      const format_url = format.decipher(player);
      if (opts.type === "video+audio" && !options.range) {
        const response = yield actions.session.http.fetch_function(`${format_url}&cpn=${cpn}`, {
          method: "GET",
          headers: Constants_exports.STREAM_HEADERS,
          redirect: "follow"
        });
        if (!response.ok)
          throw new InnertubeError("The server responded with a non 2xx status code", { error_type: "FETCH_FAILED", response });
        const body = response.body;
        if (!body)
          throw new InnertubeError("Could not get ReadableStream from fetch Response.", { error_type: "FETCH_FAILED", response });
        return body;
      }
      const chunk_size = 1048576 * 10;
      let chunk_start = options.range ? options.range.start : 0;
      let chunk_end = options.range ? options.range.end : chunk_size;
      let must_end = false;
      let cancel;
      const readable_stream = new Platform.shim.ReadableStream({
        start() {
        },
        pull: (controller) => __awaiter20(this, void 0, void 0, function* () {
          if (must_end) {
            controller.close();
            return;
          }
          if (chunk_end >= format.content_length || options.range) {
            must_end = true;
          }
          return new Promise((resolve, reject) => __awaiter20(this, void 0, void 0, function* () {
            var _b, e_1, _c, _d;
            try {
              cancel = new AbortController();
              const response = yield actions.session.http.fetch_function(`${format_url}&cpn=${cpn}&range=${chunk_start}-${chunk_end || ""}`, {
                method: "GET",
                headers: Object.assign(
                  {},
                  Constants_exports.STREAM_HEADERS
                ),
                signal: cancel.signal
              });
              const body = response.body;
              if (!body)
                throw new InnertubeError("Could not get ReadableStream from fetch Response.", { video: this, error_type: "FETCH_FAILED", response });
              try {
                for (var _e = true, _f = __asyncValues(streamToIterable(body)), _g; _g = yield _f.next(), _b = _g.done, !_b; ) {
                  _d = _g.value;
                  _e = false;
                  try {
                    const chunk = _d;
                    controller.enqueue(chunk);
                  } finally {
                    _e = true;
                  }
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (!_e && !_b && (_c = _f.return))
                    yield _c.call(_f);
                } finally {
                  if (e_1)
                    throw e_1.error;
                }
              }
              chunk_start = chunk_end + 1;
              chunk_end += chunk_size;
              resolve();
              return;
            } catch (e) {
              reject(e);
            }
          }));
        }),
        cancel(reason) {
          return __awaiter20(this, void 0, void 0, function* () {
            cancel.abort(reason);
          });
        }
      }, {
        highWaterMark: 1,
        size(chunk) {
          return chunk.byteLength;
        }
      });
      return readable_stream;
    });
  }
  static chooseFormat(options, streaming_data) {
    if (!streaming_data)
      throw new InnertubeError("Streaming data not available");
    const formats = [
      ...streaming_data.formats || [],
      ...streaming_data.adaptive_formats || []
    ];
    const requires_audio = options.type ? options.type.includes("audio") : true;
    const requires_video = options.type ? options.type.includes("video") : true;
    const language = options.language || "original";
    const quality = options.quality || "best";
    let best_width = -1;
    const is_best = ["best", "bestefficiency"].includes(quality);
    const use_most_efficient = quality !== "best";
    let candidates = formats.filter((format) => {
      if (requires_audio && !format.has_audio)
        return false;
      if (requires_video && !format.has_video)
        return false;
      if (options.format !== "any" && !format.mime_type.includes(options.format || "mp4"))
        return false;
      if (!is_best && format.quality_label !== quality)
        return false;
      if (best_width < format.width)
        best_width = format.width;
      return true;
    });
    if (!candidates.length)
      throw new InnertubeError("No matching formats found", { options });
    if (is_best && requires_video)
      candidates = candidates.filter((format) => format.width === best_width);
    if (requires_audio && !requires_video) {
      const audio_only = candidates.filter((format) => {
        if (language !== "original") {
          return !format.has_video && format.language === language;
        }
        return !format.has_video && format.is_original;
      });
      if (audio_only.length > 0) {
        candidates = audio_only;
      }
    }
    if (use_most_efficient) {
      candidates.sort((a, b) => a.bitrate - b.bitrate);
    } else {
      candidates.sort((a, b) => b.bitrate - a.bitrate);
    }
    return candidates[0];
  }
  static toDash(streaming_data, url_transformer = (url) => url, format_filter, cpn, player) {
    if (!streaming_data)
      throw new InnertubeError("Streaming data not available");
    let filtered_streaming_data;
    if (format_filter) {
      filtered_streaming_data = {
        formats: streaming_data.formats.filter((fmt) => !format_filter(fmt)),
        adaptive_formats: streaming_data.adaptive_formats.filter((fmt) => !format_filter(fmt)),
        expires: streaming_data.expires,
        dash_manifest_url: streaming_data.dash_manifest_url,
        hls_manifest_url: streaming_data.hls_manifest_url
      };
    } else {
      filtered_streaming_data = streaming_data;
    }
    const { adaptive_formats } = filtered_streaming_data;
    if (!adaptive_formats.length)
      throw new InnertubeError("No adaptive formats found");
    const length = adaptive_formats[0].approx_duration_ms / 1e3;
    const document = new Platform.shim.DOMParser().parseFromString('<?xml version="1.0" encoding="utf-8"?><MPD />', "application/xml");
    const mpd = document.querySelector("MPD");
    const period = document.createElement("Period");
    mpd.replaceWith(__classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "MPD", {
      xmlns: "urn:mpeg:dash:schema:mpd:2011",
      minBufferTime: "PT1.500S",
      profiles: "urn:mpeg:dash:profile:isoff-main:2011",
      type: "static",
      mediaPresentationDuration: `PT${length}S`,
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:schemaLocation": "urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
    }, [
      period
    ]));
    __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_generateAdaptationSet).call(this, document, period, adaptive_formats, url_transformer, cpn, player);
    return Platform.shim.serializeDOM(document);
  }
};
__name(FormatUtils, "FormatUtils");
_a3 = FormatUtils, _FormatUtils_el = /* @__PURE__ */ __name(function _FormatUtils_el2(document, tag, attrs, children = []) {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    value && el.setAttribute(key, value);
  }
  for (const child of children) {
    if (typeof child === "undefined")
      continue;
    el.appendChild(child);
  }
  return el;
}, "_FormatUtils_el"), _FormatUtils_generateAdaptationSet = /* @__PURE__ */ __name(function _FormatUtils_generateAdaptationSet2(document, period, formats, url_transformer, cpn, player) {
  const mime_types = [];
  const mime_objects = [[]];
  formats.forEach((video_format) => {
    if (!video_format.index_range || !video_format.init_range) {
      return;
    }
    const mime_type = video_format.mime_type;
    const mime_type_index = mime_types.indexOf(mime_type);
    if (mime_type_index > -1) {
      mime_objects[mime_type_index].push(video_format);
    } else {
      mime_types.push(mime_type);
      mime_objects.push([]);
      mime_objects[mime_types.length - 1].push(video_format);
    }
  });
  let set_id = 0;
  for (let i = 0; i < mime_types.length; i++) {
    if (mime_objects[i][0].has_audio && mime_objects[i][0].language) {
      const languages = [];
      const language_objects = [[]];
      mime_objects[i].forEach((format) => {
        const language_index = languages.indexOf(format.language);
        if (language_index > -1) {
          language_objects[language_index].push(format);
        } else {
          languages.push(format.language);
          language_objects.push([]);
          language_objects[languages.length - 1].push(format);
        }
      });
      for (let j = 0; j < languages.length; j++) {
        const first_format = language_objects[j][0];
        const children = [];
        if (first_format.audio_track) {
          let role;
          if (first_format.audio_track.audio_is_default) {
            role = "main";
          } else if (first_format.is_dubbed) {
            role = "dub";
          } else {
            role = "alternate";
          }
          children.push(__classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "Role", {
            schemeIdUri: "urn:mpeg:dash:role:2011",
            value: role
          }));
        }
        const set = __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "AdaptationSet", {
          id: `${set_id++}`,
          mimeType: mime_types[i].split(";")[0],
          startWithSAP: "1",
          subsegmentAlignment: "true",
          lang: languages[j]
        }, children);
        period.appendChild(set);
        language_objects[j].forEach((format) => {
          __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_generateRepresentationAudio).call(this, document, set, format, url_transformer, cpn, player);
        });
      }
    } else {
      const set = __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "AdaptationSet", {
        id: `${set_id++}`,
        mimeType: mime_types[i].split(";")[0],
        startWithSAP: "1",
        subsegmentAlignment: "true"
      });
      period.appendChild(set);
      mime_objects[i].forEach((format) => {
        if (format.has_video) {
          __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_generateRepresentationVideo).call(this, document, set, format, url_transformer, cpn, player);
        } else {
          __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_generateRepresentationAudio).call(this, document, set, format, url_transformer, cpn, player);
        }
      });
    }
  }
}, "_FormatUtils_generateAdaptationSet"), _FormatUtils_generateRepresentationVideo = /* @__PURE__ */ __name(function _FormatUtils_generateRepresentationVideo2(document, set, format, url_transformer, cpn, player) {
  var _b, _c, _d, _e, _f, _g;
  const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
  if (!format.index_range || !format.init_range)
    throw new InnertubeError("Index and init ranges not available", { format });
  const url = new URL(format.decipher(player));
  url.searchParams.set("cpn", cpn || "");
  set.appendChild(__classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "Representation", {
    id: (_b = format.itag) === null || _b === void 0 ? void 0 : _b.toString(),
    codecs,
    bandwidth: (_c = format.bitrate) === null || _c === void 0 ? void 0 : _c.toString(),
    width: (_d = format.width) === null || _d === void 0 ? void 0 : _d.toString(),
    height: (_e = format.height) === null || _e === void 0 ? void 0 : _e.toString(),
    maxPlayoutRate: "1",
    frameRate: (_f = format.fps) === null || _f === void 0 ? void 0 : _f.toString()
  }, [
    __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "BaseURL", {}, [
      document.createTextNode((_g = url_transformer(url)) === null || _g === void 0 ? void 0 : _g.toString())
    ]),
    __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "SegmentBase", {
      indexRange: `${format.index_range.start}-${format.index_range.end}`
    }, [
      __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "Initialization", {
        range: `${format.init_range.start}-${format.init_range.end}`
      })
    ])
  ]));
}, "_FormatUtils_generateRepresentationVideo"), _FormatUtils_generateRepresentationAudio = /* @__PURE__ */ __name(function _FormatUtils_generateRepresentationAudio2(document, set, format, url_transformer, cpn, player) {
  var _b, _c, _d, _e, _f;
  return __awaiter20(this, void 0, void 0, function* () {
    const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
    if (!format.index_range || !format.init_range)
      throw new InnertubeError("Index and init ranges not available", { format });
    const url = new URL(format.decipher(player));
    url.searchParams.set("cpn", cpn || "");
    set.appendChild(__classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "Representation", {
      id: (_b = format.itag) === null || _b === void 0 ? void 0 : _b.toString(),
      codecs,
      bandwidth: (_c = format.bitrate) === null || _c === void 0 ? void 0 : _c.toString(),
      audioSamplingRate: (_d = format.audio_sample_rate) === null || _d === void 0 ? void 0 : _d.toString()
    }, [
      __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "AudioChannelConfiguration", {
        schemeIdUri: "urn:mpeg:dash:23003:3:audio_channel_configuration:2011",
        value: ((_e = format.audio_channels) === null || _e === void 0 ? void 0 : _e.toString()) || "2"
      }),
      __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "BaseURL", {}, [
        document.createTextNode((_f = url_transformer(url)) === null || _f === void 0 ? void 0 : _f.toString())
      ]),
      __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "SegmentBase", {
        indexRange: `${format.index_range.start}-${format.index_range.end}`
      }, [
        __classPrivateFieldGet26(this, _a3, "m", _FormatUtils_el).call(this, document, "Initialization", {
          range: `${format.init_range.start}-${format.init_range.end}`
        })
      ])
    ]));
  });
}, "_FormatUtils_generateRepresentationAudio");
var FormatUtils_default = FormatUtils;

// dist/src/parser/youtube/VideoInfo.js
var __awaiter21 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet24 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet27 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VideoInfo_page;
var _VideoInfo_actions;
var _VideoInfo_player;
var _VideoInfo_cpn;
var _VideoInfo_watch_next_continuation;
var _VideoInfo_playback_tracking;
var VideoInfo = class {
  constructor(data, actions, player, cpn) {
    var _a5, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
    _VideoInfo_page.set(this, void 0);
    _VideoInfo_actions.set(this, void 0);
    _VideoInfo_player.set(this, void 0);
    _VideoInfo_cpn.set(this, void 0);
    _VideoInfo_watch_next_continuation.set(this, void 0);
    _VideoInfo_playback_tracking.set(this, void 0);
    __classPrivateFieldSet24(this, _VideoInfo_actions, actions, "f");
    __classPrivateFieldSet24(this, _VideoInfo_player, player, "f");
    __classPrivateFieldSet24(this, _VideoInfo_cpn, cpn, "f");
    const info = parser_default.parseResponse(data[0].data);
    const next = ((_a5 = data === null || data === void 0 ? void 0 : data[1]) === null || _a5 === void 0 ? void 0 : _a5.data) ? parser_default.parseResponse(data[1].data) : void 0;
    __classPrivateFieldSet24(this, _VideoInfo_page, [info, next], "f");
    if (((_b = info.playability_status) === null || _b === void 0 ? void 0 : _b.status) === "ERROR")
      throw new InnertubeError("This video is unavailable", info.playability_status);
    if (info.microformat && !((_c = info.microformat) === null || _c === void 0 ? void 0 : _c.is(PlayerMicroformat_default, MicroformatData_default)))
      throw new InnertubeError("Invalid microformat", info.microformat);
    this.basic_info = Object.assign(Object.assign(Object.assign({}, info.video_details), {
      embed: ((_d = info.microformat) === null || _d === void 0 ? void 0 : _d.is(PlayerMicroformat_default)) ? (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.embed : null,
      channel: ((_f = info.microformat) === null || _f === void 0 ? void 0 : _f.is(PlayerMicroformat_default)) ? (_g = info.microformat) === null || _g === void 0 ? void 0 : _g.channel : null,
      is_unlisted: (_h = info.microformat) === null || _h === void 0 ? void 0 : _h.is_unlisted,
      is_family_safe: (_j = info.microformat) === null || _j === void 0 ? void 0 : _j.is_family_safe,
      has_ypc_metadata: ((_k = info.microformat) === null || _k === void 0 ? void 0 : _k.is(PlayerMicroformat_default)) ? (_l = info.microformat) === null || _l === void 0 ? void 0 : _l.has_ypc_metadata : null,
      start_timestamp: ((_m = info.microformat) === null || _m === void 0 ? void 0 : _m.is(PlayerMicroformat_default)) ? info.microformat.start_timestamp : null
    }), { like_count: void 0, is_liked: void 0, is_disliked: void 0 });
    this.streaming_data = info.streaming_data;
    this.playability_status = info.playability_status;
    this.annotations = info.annotations;
    this.storyboards = info.storyboards;
    this.endscreen = info.endscreen;
    this.captions = info.captions;
    this.cards = info.cards;
    __classPrivateFieldSet24(this, _VideoInfo_playback_tracking, info.playback_tracking, "f");
    const two_col = (_o = next === null || next === void 0 ? void 0 : next.contents) === null || _o === void 0 ? void 0 : _o.item().as(TwoColumnWatchNextResults_default);
    const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
    const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
    if (results && secondary_results) {
      this.primary_info = results.firstOfType(VideoPrimaryInfo_default);
      this.secondary_info = results.firstOfType(VideoSecondaryInfo_default);
      this.merchandise = results.firstOfType(MerchandiseShelf_default);
      this.related_chip_cloud = (_p = secondary_results.firstOfType(RelatedChipCloud_default)) === null || _p === void 0 ? void 0 : _p.content.item().as(ChipCloud_default);
      this.watch_next_feed = ((_q = secondary_results.firstOfType(ItemSection_default)) === null || _q === void 0 ? void 0 : _q.contents) || secondary_results;
      if (this.watch_next_feed && Array.isArray(this.watch_next_feed) && ((_r = this.watch_next_feed.at(-1)) === null || _r === void 0 ? void 0 : _r.is(ContinuationItem_default)))
        __classPrivateFieldSet24(this, _VideoInfo_watch_next_continuation, (_s = this.watch_next_feed.pop()) === null || _s === void 0 ? void 0 : _s.as(ContinuationItem_default), "f");
      this.player_overlays = (_t = next === null || next === void 0 ? void 0 : next.player_overlays) === null || _t === void 0 ? void 0 : _t.item().as(PlayerOverlay_default);
      const segmented_like_dislike_button = (_v = (_u = this.primary_info) === null || _u === void 0 ? void 0 : _u.menu) === null || _v === void 0 ? void 0 : _v.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      this.basic_info.like_count = (_x = (_w = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _w === void 0 ? void 0 : _w.as(ToggleButton_default)) === null || _x === void 0 ? void 0 : _x.like_count;
      this.basic_info.is_liked = (_z = (_y = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _y === void 0 ? void 0 : _y.as(ToggleButton_default)) === null || _z === void 0 ? void 0 : _z.is_toggled;
      this.basic_info.is_disliked = (_1 = (_0 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _0 === void 0 ? void 0 : _0.as(ToggleButton_default)) === null || _1 === void 0 ? void 0 : _1.is_toggled;
      const comments_entry_point = (_2 = results.get({ target_id: "comments-entry-point" })) === null || _2 === void 0 ? void 0 : _2.as(ItemSection_default);
      this.comments_entry_point_header = (_3 = comments_entry_point === null || comments_entry_point === void 0 ? void 0 : comments_entry_point.contents) === null || _3 === void 0 ? void 0 : _3.firstOfType(CommentsEntryPointHeader_default);
      this.livechat = (_4 = next === null || next === void 0 ? void 0 : next.contents_memo) === null || _4 === void 0 ? void 0 : _4.getType(LiveChat_default).first();
    }
  }
  selectFilter(target_filter) {
    var _a5, _b, _c, _d;
    return __awaiter21(this, void 0, void 0, function* () {
      if (!this.related_chip_cloud)
        throw new InnertubeError("Chip cloud not found, cannot apply filter");
      let cloud_chip;
      if (typeof target_filter === "string") {
        const filter = (_b = (_a5 = this.related_chip_cloud) === null || _a5 === void 0 ? void 0 : _a5.chips) === null || _b === void 0 ? void 0 : _b.get({ text: target_filter });
        if (!filter)
          throw new InnertubeError("Invalid filter", { available_filters: this.filters });
        cloud_chip = filter;
      } else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip_default)) {
        cloud_chip = target_filter;
      } else {
        throw new InnertubeError("Invalid cloud chip", target_filter);
      }
      if (cloud_chip.is_selected)
        return this;
      const response = yield (_c = cloud_chip.endpoint) === null || _c === void 0 ? void 0 : _c.call(__classPrivateFieldGet27(this, _VideoInfo_actions, "f"), { parse: true });
      const data = (_d = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _d === void 0 ? void 0 : _d.get({ target_id: "watch-next-feed" });
      this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
      return this;
    });
  }
  addToWatchHistory() {
    return __awaiter21(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet27(this, _VideoInfo_playback_tracking, "f"))
        throw new InnertubeError("Playback tracking not available");
      const url_params = {
        cpn: __classPrivateFieldGet27(this, _VideoInfo_cpn, "f"),
        fmt: 251,
        rtn: 0,
        rt: 0
      };
      const url = __classPrivateFieldGet27(this, _VideoInfo_playback_tracking, "f").videostats_playback_url.replace("https://s.", "https://www.");
      const response = yield __classPrivateFieldGet27(this, _VideoInfo_actions, "f").stats(url, {
        client_name: Constants_default.CLIENTS.WEB.NAME,
        client_version: Constants_default.CLIENTS.WEB.VERSION
      }, url_params);
      return response;
    });
  }
  getWatchNextContinuation() {
    var _a5, _b, _c, _d, _e;
    return __awaiter21(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet27(this, _VideoInfo_watch_next_continuation, "f"))
        throw new InnertubeError("Watch next feed continuation not found");
      const response = yield (_a5 = __classPrivateFieldGet27(this, _VideoInfo_watch_next_continuation, "f")) === null || _a5 === void 0 ? void 0 : _a5.endpoint.call(__classPrivateFieldGet27(this, _VideoInfo_actions, "f"), { parse: true });
      const data = (_b = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _b === void 0 ? void 0 : _b.get({ type: "appendContinuationItemsAction" });
      if (!data)
        throw new InnertubeError("AppendContinuationItemsAction not found");
      this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
      if ((_d = (_c = this.watch_next_feed) === null || _c === void 0 ? void 0 : _c.at(-1)) === null || _d === void 0 ? void 0 : _d.is(ContinuationItem_default)) {
        __classPrivateFieldSet24(this, _VideoInfo_watch_next_continuation, (_e = this.watch_next_feed.pop()) === null || _e === void 0 ? void 0 : _e.as(ContinuationItem_default), "f");
      } else {
        __classPrivateFieldSet24(this, _VideoInfo_watch_next_continuation, void 0, "f");
      }
      return this;
    });
  }
  like() {
    var _a5, _b, _c;
    return __awaiter21(this, void 0, void 0, function* () {
      const segmented_like_dislike_button = (_b = (_a5 = this.primary_info) === null || _a5 === void 0 ? void 0 : _a5.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      const button = (_c = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _c === void 0 ? void 0 : _c.as(ToggleButton_default);
      if (!button)
        throw new InnertubeError("Like button not found", { video_id: this.basic_info.id });
      if (button.is_toggled)
        throw new InnertubeError("This video is already liked", { video_id: this.basic_info.id });
      const response = yield button.endpoint.call(__classPrivateFieldGet27(this, _VideoInfo_actions, "f"));
      return response;
    });
  }
  dislike() {
    var _a5, _b, _c;
    return __awaiter21(this, void 0, void 0, function* () {
      const segmented_like_dislike_button = (_b = (_a5 = this.primary_info) === null || _a5 === void 0 ? void 0 : _a5.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      const button = (_c = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _c === void 0 ? void 0 : _c.as(ToggleButton_default);
      if (!button)
        throw new InnertubeError("Dislike button not found", { video_id: this.basic_info.id });
      if (button.is_toggled)
        throw new InnertubeError("This video is already disliked", { video_id: this.basic_info.id });
      const response = yield button.endpoint.call(__classPrivateFieldGet27(this, _VideoInfo_actions, "f"));
      return response;
    });
  }
  removeRating() {
    var _a5, _b, _c, _d;
    return __awaiter21(this, void 0, void 0, function* () {
      let button;
      const segmented_like_dislike_button = (_b = (_a5 = this.primary_info) === null || _a5 === void 0 ? void 0 : _a5.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      const like_button = (_c = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _c === void 0 ? void 0 : _c.as(ToggleButton_default);
      const dislike_button = (_d = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _d === void 0 ? void 0 : _d.as(ToggleButton_default);
      if (like_button === null || like_button === void 0 ? void 0 : like_button.is_toggled) {
        button = like_button;
      } else if (dislike_button === null || dislike_button === void 0 ? void 0 : dislike_button.is_toggled) {
        button = dislike_button;
      }
      if (!button)
        throw new InnertubeError("This video is not liked/disliked", { video_id: this.basic_info.id });
      const response = yield button.toggled_endpoint.call(__classPrivateFieldGet27(this, _VideoInfo_actions, "f"));
      return response;
    });
  }
  getLiveChat() {
    if (!this.livechat)
      throw new InnertubeError("Live Chat is not available", { video_id: this.basic_info.id });
    return new LiveChat_default2(this);
  }
  chooseFormat(options) {
    return FormatUtils_default.chooseFormat(options, this.streaming_data);
  }
  toDash(url_transformer, format_filter) {
    return FormatUtils_default.toDash(this.streaming_data, url_transformer, format_filter, __classPrivateFieldGet27(this, _VideoInfo_cpn, "f"), __classPrivateFieldGet27(this, _VideoInfo_player, "f"));
  }
  download(options = {}) {
    return __awaiter21(this, void 0, void 0, function* () {
      return FormatUtils_default.download(options, __classPrivateFieldGet27(this, _VideoInfo_actions, "f"), this.playability_status, this.streaming_data, __classPrivateFieldGet27(this, _VideoInfo_actions, "f").session.player, this.cpn);
    });
  }
  get filters() {
    var _a5, _b;
    return ((_b = (_a5 = this.related_chip_cloud) === null || _a5 === void 0 ? void 0 : _a5.chips) === null || _b === void 0 ? void 0 : _b.map((chip) => {
      var _a6;
      return (_a6 = chip.text) === null || _a6 === void 0 ? void 0 : _a6.toString();
    })) || [];
  }
  get actions() {
    return __classPrivateFieldGet27(this, _VideoInfo_actions, "f");
  }
  get cpn() {
    return __classPrivateFieldGet27(this, _VideoInfo_cpn, "f");
  }
  get wn_has_continuation() {
    return !!__classPrivateFieldGet27(this, _VideoInfo_watch_next_continuation, "f");
  }
  get music_tracks() {
    return [];
  }
  get page() {
    return __classPrivateFieldGet27(this, _VideoInfo_page, "f");
  }
};
__name(VideoInfo, "VideoInfo");
_VideoInfo_page = /* @__PURE__ */ new WeakMap(), _VideoInfo_actions = /* @__PURE__ */ new WeakMap(), _VideoInfo_player = /* @__PURE__ */ new WeakMap(), _VideoInfo_cpn = /* @__PURE__ */ new WeakMap(), _VideoInfo_watch_next_continuation = /* @__PURE__ */ new WeakMap(), _VideoInfo_playback_tracking = /* @__PURE__ */ new WeakMap();
var VideoInfo_default = VideoInfo;

// dist/src/parser/ytmusic/index.js
var ytmusic_exports = {};
__export(ytmusic_exports, {
  Album: () => Album_default,
  Artist: () => Artist_default,
  Explore: () => Explore_default,
  HomeFeed: () => HomeFeed_default,
  Library: () => Library_default2,
  LibraryContinuation: () => LibraryContinuation,
  Playlist: () => Playlist_default3,
  Recap: () => Recap_default,
  Search: () => Search_default2,
  TrackInfo: () => TrackInfo_default
});

// dist/src/parser/ytmusic/Album.js
var __classPrivateFieldSet25 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet28 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Album_page;
var Album = class {
  constructor(response) {
    var _a5, _b, _c;
    _Album_page.set(this, void 0);
    __classPrivateFieldSet25(this, _Album_page, parser_default.parseResponse(response.data), "f");
    this.header = (_a5 = __classPrivateFieldGet28(this, _Album_page, "f").header) === null || _a5 === void 0 ? void 0 : _a5.item().as(MusicDetailHeader_default);
    this.url = ((_b = __classPrivateFieldGet28(this, _Album_page, "f").microformat) === null || _b === void 0 ? void 0 : _b.as(MicroformatData_default).url_canonical) || null;
    if (!__classPrivateFieldGet28(this, _Album_page, "f").contents_memo)
      throw new Error("No contents found in the response");
    this.contents = (_c = __classPrivateFieldGet28(this, _Album_page, "f").contents_memo.getType(MusicShelf_default)) === null || _c === void 0 ? void 0 : _c.first().contents;
    this.sections = __classPrivateFieldGet28(this, _Album_page, "f").contents_memo.getType(MusicCarouselShelf_default) || [];
  }
  get page() {
    return __classPrivateFieldGet28(this, _Album_page, "f");
  }
};
__name(Album, "Album");
_Album_page = /* @__PURE__ */ new WeakMap();
var Album_default = Album;

// dist/src/parser/ytmusic/Artist.js
var __awaiter22 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet26 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet29 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Artist_page;
var _Artist_actions;
var Artist = class {
  constructor(response, actions) {
    var _a5, _b, _c;
    _Artist_page.set(this, void 0);
    _Artist_actions.set(this, void 0);
    __classPrivateFieldSet26(this, _Artist_page, parser_default.parseResponse(response.data), "f");
    __classPrivateFieldSet26(this, _Artist_actions, actions, "f");
    this.header = (_a5 = this.page.header) === null || _a5 === void 0 ? void 0 : _a5.item().as(MusicImmersiveHeader_default, MusicVisualHeader_default, MusicHeader_default);
    const music_shelf = ((_b = __classPrivateFieldGet29(this, _Artist_page, "f").contents_memo) === null || _b === void 0 ? void 0 : _b.getType(MusicShelf_default)) || [];
    const music_carousel_shelf = ((_c = __classPrivateFieldGet29(this, _Artist_page, "f").contents_memo) === null || _c === void 0 ? void 0 : _c.getType(MusicCarouselShelf_default)) || [];
    this.sections = [...music_shelf, ...music_carousel_shelf];
  }
  getAllSongs() {
    var _a5, _b;
    return __awaiter22(this, void 0, void 0, function* () {
      const music_shelves = this.sections.filter((section) => section.type === "MusicShelf");
      if (!music_shelves.length)
        throw new InnertubeError("Could not find any node of type MusicShelf.");
      const shelf = music_shelves.find((shelf2) => shelf2.title.toString() === "Songs");
      if (!shelf)
        throw new InnertubeError("Could not find target shelf (Songs).");
      if (!shelf.endpoint)
        throw new InnertubeError("Target shelf (Songs) did not have an endpoint.");
      const page = yield shelf.endpoint.call(__classPrivateFieldGet29(this, _Artist_actions, "f"), { client: "YTMUSIC", parse: true });
      const contents = (_b = (_a5 = page.contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(MusicPlaylistShelf_default)) === null || _b === void 0 ? void 0 : _b.first();
      return contents;
    });
  }
  get page() {
    return __classPrivateFieldGet29(this, _Artist_page, "f");
  }
};
__name(Artist, "Artist");
_Artist_page = /* @__PURE__ */ new WeakMap(), _Artist_actions = /* @__PURE__ */ new WeakMap();
var Artist_default = Artist;

// dist/src/parser/ytmusic/Explore.js
var __classPrivateFieldSet27 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet30 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Explore_page;
var Explore = class {
  constructor(response) {
    var _a5, _b, _c;
    _Explore_page.set(this, void 0);
    __classPrivateFieldSet27(this, _Explore_page, parser_default.parseResponse(response.data), "f");
    const tab = (_a5 = __classPrivateFieldGet30(this, _Explore_page, "f").contents) === null || _a5 === void 0 ? void 0 : _a5.item().as(SingleColumnBrowseResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find target tab.");
    const section_list = (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(SectionList_default);
    if (!section_list)
      throw new InnertubeError("Target tab did not have any content.");
    this.top_buttons = ((_c = section_list.contents.firstOfType(Grid_default)) === null || _c === void 0 ? void 0 : _c.items.as(MusicNavigationButton_default)) || [];
    this.sections = section_list.contents.filterType(MusicCarouselShelf_default);
  }
  get page() {
    return __classPrivateFieldGet30(this, _Explore_page, "f");
  }
};
__name(Explore, "Explore");
_Explore_page = /* @__PURE__ */ new WeakMap();
var Explore_default = Explore;

// dist/src/parser/ytmusic/HomeFeed.js
var __awaiter23 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet28 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet31 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeFeed_page;
var _HomeFeed_actions;
var _HomeFeed_continuation;
var HomeFeed2 = class {
  constructor(response, actions) {
    var _a5, _b, _c, _d;
    _HomeFeed_page.set(this, void 0);
    _HomeFeed_actions.set(this, void 0);
    _HomeFeed_continuation.set(this, void 0);
    __classPrivateFieldSet28(this, _HomeFeed_actions, actions, "f");
    __classPrivateFieldSet28(this, _HomeFeed_page, parser_default.parseResponse(response.data), "f");
    const tab = (_a5 = __classPrivateFieldGet31(this, _HomeFeed_page, "f").contents) === null || _a5 === void 0 ? void 0 : _a5.item().as(SingleColumnBrowseResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find Home tab.");
    if (tab.key("content").isNull()) {
      if (!__classPrivateFieldGet31(this, _HomeFeed_page, "f").continuation_contents)
        throw new InnertubeError("Continuation did not have any content.");
      __classPrivateFieldSet28(this, _HomeFeed_continuation, __classPrivateFieldGet31(this, _HomeFeed_page, "f").continuation_contents.as(SectionListContinuation).continuation, "f");
      this.sections = (_b = __classPrivateFieldGet31(this, _HomeFeed_page, "f").continuation_contents.as(SectionListContinuation).contents) === null || _b === void 0 ? void 0 : _b.as(MusicCarouselShelf_default);
      return;
    }
    __classPrivateFieldSet28(this, _HomeFeed_continuation, (_c = tab.content) === null || _c === void 0 ? void 0 : _c.as(SectionList_default).continuation, "f");
    this.sections = (_d = tab.content) === null || _d === void 0 ? void 0 : _d.as(SectionList_default).contents.as(MusicCarouselShelf_default);
  }
  getContinuation() {
    return __awaiter23(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet31(this, _HomeFeed_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      const response = yield __classPrivateFieldGet31(this, _HomeFeed_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: __classPrivateFieldGet31(this, _HomeFeed_continuation, "f")
      });
      return new HomeFeed2(response, __classPrivateFieldGet31(this, _HomeFeed_actions, "f"));
    });
  }
  get has_continuation() {
    return !!__classPrivateFieldGet31(this, _HomeFeed_continuation, "f");
  }
  get page() {
    return __classPrivateFieldGet31(this, _HomeFeed_page, "f");
  }
};
__name(HomeFeed2, "HomeFeed");
_HomeFeed_page = /* @__PURE__ */ new WeakMap(), _HomeFeed_actions = /* @__PURE__ */ new WeakMap(), _HomeFeed_continuation = /* @__PURE__ */ new WeakMap();
var HomeFeed_default = HomeFeed2;

// dist/src/parser/ytmusic/Library.js
var __awaiter24 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet29 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet32 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Library_page;
var _Library_actions;
var _Library_continuation;
var _LibraryContinuation_page;
var _LibraryContinuation_actions;
var _LibraryContinuation_continuation;
var Library2 = class {
  constructor(response, actions) {
    var _a5, _b, _c, _d, _e;
    _Library_page.set(this, void 0);
    _Library_actions.set(this, void 0);
    _Library_continuation.set(this, void 0);
    __classPrivateFieldSet29(this, _Library_page, parser_default.parseResponse(response.data), "f");
    __classPrivateFieldSet29(this, _Library_actions, actions, "f");
    const section_list = (_a5 = __classPrivateFieldGet32(this, _Library_page, "f").contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(SectionList_default).first();
    this.header = (_b = section_list === null || section_list === void 0 ? void 0 : section_list.header) === null || _b === void 0 ? void 0 : _b.item().as(MusicSideAlignedItem_default);
    this.contents = (_c = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _c === void 0 ? void 0 : _c.as(Grid_default, MusicShelf_default);
    __classPrivateFieldSet29(this, _Library_continuation, (_e = (_d = this.contents) === null || _d === void 0 ? void 0 : _d.find((list) => list.continuation)) === null || _e === void 0 ? void 0 : _e.continuation, "f");
  }
  applySort(sort_by) {
    var _a5, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return __awaiter24(this, void 0, void 0, function* () {
      let target_item;
      if (typeof sort_by === "string") {
        const button = (_a5 = __classPrivateFieldGet32(this, _Library_page, "f").contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(MusicSortFilterButton_default).first();
        const options = (_b = button === null || button === void 0 ? void 0 : button.menu) === null || _b === void 0 ? void 0 : _b.options.filter((item) => item instanceof MusicMultiSelectMenuItem_default);
        target_item = options === null || options === void 0 ? void 0 : options.find((item) => item.title === sort_by);
        if (!target_item)
          throw new InnertubeError(`Sort option "${sort_by}" not found`, { available_filters: options.map((item) => item.title) });
      } else if (sort_by instanceof MusicMultiSelectMenuItem_default) {
        target_item = sort_by;
      }
      if (!target_item)
        throw new InnertubeError("Invalid sort option");
      if (target_item.selected)
        return this;
      const cmd = (_f = (_e = (_d = (_c = target_item.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.commands) === null || _e === void 0 ? void 0 : _e.find((cmd2) => cmd2.browseSectionListReloadEndpoint)) === null || _f === void 0 ? void 0 : _f.browseSectionListReloadEndpoint;
      if (!cmd)
        throw new InnertubeError("Failed to find sort option command");
      const response = yield __classPrivateFieldGet32(this, _Library_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: cmd.continuation.reloadContinuationData.continuation,
        parse: true
      });
      const previously_selected_item = (_h = (_g = __classPrivateFieldGet32(this, _Library_page, "f").contents_memo) === null || _g === void 0 ? void 0 : _g.getType(MusicMultiSelectMenuItem_default)) === null || _h === void 0 ? void 0 : _h.find((item) => item.selected);
      if (previously_selected_item)
        previously_selected_item.selected = false;
      target_item.selected = true;
      this.contents = (_k = (_j = response.continuation_contents) === null || _j === void 0 ? void 0 : _j.as(SectionListContinuation).contents) === null || _k === void 0 ? void 0 : _k.as(Grid_default, MusicShelf_default);
      return this;
    });
  }
  applyFilter(filter) {
    var _a5, _b, _c, _d;
    return __awaiter24(this, void 0, void 0, function* () {
      let target_chip;
      const chip_cloud = (_a5 = __classPrivateFieldGet32(this, _Library_page, "f").contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(ChipCloud_default).first();
      if (typeof filter === "string") {
        target_chip = chip_cloud === null || chip_cloud === void 0 ? void 0 : chip_cloud.chips.get({ text: filter });
        if (!target_chip)
          throw new InnertubeError(`Filter "${filter}" not found`, { available_filters: this.filters });
      } else if (filter instanceof ChipCloudChip_default) {
        target_chip = filter;
      }
      if (!target_chip)
        throw new InnertubeError("Invalid filter", filter);
      const target_cmd = new NavigationEndpoint_default((_d = (_c = (_b = target_chip.endpoint) === null || _b === void 0 ? void 0 : _b.payload) === null || _c === void 0 ? void 0 : _c.commands) === null || _d === void 0 ? void 0 : _d[0]);
      const response = yield target_cmd.call(__classPrivateFieldGet32(this, _Library_actions, "f"), { client: "YTMUSIC" });
      return new Library2(response, __classPrivateFieldGet32(this, _Library_actions, "f"));
    });
  }
  getContinuation() {
    return __awaiter24(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet32(this, _Library_continuation, "f"))
        throw new InnertubeError("No continuation available");
      const page = yield __classPrivateFieldGet32(this, _Library_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: __classPrivateFieldGet32(this, _Library_continuation, "f")
      });
      return new LibraryContinuation(page, __classPrivateFieldGet32(this, _Library_actions, "f"));
    });
  }
  get has_continuation() {
    return !!__classPrivateFieldGet32(this, _Library_continuation, "f");
  }
  get sort_options() {
    var _a5, _b;
    const button = (_a5 = __classPrivateFieldGet32(this, _Library_page, "f").contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(MusicSortFilterButton_default).first();
    const options = (_b = button === null || button === void 0 ? void 0 : button.menu) === null || _b === void 0 ? void 0 : _b.options.filter((item) => item instanceof MusicMultiSelectMenuItem_default);
    return options.map((item) => item.title);
  }
  get filters() {
    var _a5, _b;
    return ((_b = (_a5 = __classPrivateFieldGet32(this, _Library_page, "f").contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(ChipCloud_default)) === null || _b === void 0 ? void 0 : _b.first().chips.map((chip) => chip.text)) || [];
  }
  get page() {
    return __classPrivateFieldGet32(this, _Library_page, "f");
  }
};
__name(Library2, "Library");
_Library_page = /* @__PURE__ */ new WeakMap(), _Library_actions = /* @__PURE__ */ new WeakMap(), _Library_continuation = /* @__PURE__ */ new WeakMap();
var LibraryContinuation = class {
  constructor(response, actions) {
    var _a5, _b;
    _LibraryContinuation_page.set(this, void 0);
    _LibraryContinuation_actions.set(this, void 0);
    _LibraryContinuation_continuation.set(this, void 0);
    __classPrivateFieldSet29(this, _LibraryContinuation_page, parser_default.parseResponse(response.data), "f");
    __classPrivateFieldSet29(this, _LibraryContinuation_actions, actions, "f");
    if (!__classPrivateFieldGet32(this, _LibraryContinuation_page, "f").continuation_contents)
      throw new InnertubeError("No continuation contents found");
    this.contents = __classPrivateFieldGet32(this, _LibraryContinuation_page, "f").continuation_contents.as(MusicShelfContinuation, GridContinuation);
    __classPrivateFieldSet29(this, _LibraryContinuation_continuation, ((_a5 = __classPrivateFieldGet32(this, _LibraryContinuation_page, "f").continuation_contents) === null || _a5 === void 0 ? void 0 : _a5.key("continuation").isNull()) ? null : (_b = __classPrivateFieldGet32(this, _LibraryContinuation_page, "f").continuation_contents) === null || _b === void 0 ? void 0 : _b.key("continuation").string(), "f");
  }
  getContinuation() {
    return __awaiter24(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet32(this, _LibraryContinuation_continuation, "f"))
        throw new InnertubeError("No continuation available");
      const response = yield __classPrivateFieldGet32(this, _LibraryContinuation_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: __classPrivateFieldGet32(this, _LibraryContinuation_continuation, "f")
      });
      return new LibraryContinuation(response, __classPrivateFieldGet32(this, _LibraryContinuation_actions, "f"));
    });
  }
  get has_continuation() {
    return !!__classPrivateFieldGet32(this, _LibraryContinuation_continuation, "f");
  }
  get page() {
    return __classPrivateFieldGet32(this, _LibraryContinuation_page, "f");
  }
};
__name(LibraryContinuation, "LibraryContinuation");
_LibraryContinuation_page = /* @__PURE__ */ new WeakMap(), _LibraryContinuation_actions = /* @__PURE__ */ new WeakMap(), _LibraryContinuation_continuation = /* @__PURE__ */ new WeakMap();
var Library_default2 = Library2;

// dist/src/parser/ytmusic/Playlist.js
var __awaiter25 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet30 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet33 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Playlist_instances2;
var _Playlist_page;
var _Playlist_actions;
var _Playlist_continuation;
var _Playlist_last_fetched_suggestions;
var _Playlist_suggestions_continuation;
var _Playlist_fetchSuggestions;
var Playlist3 = class {
  constructor(response, actions) {
    var _a5, _b, _c, _d, _e, _f;
    _Playlist_instances2.add(this);
    _Playlist_page.set(this, void 0);
    _Playlist_actions.set(this, void 0);
    _Playlist_continuation.set(this, void 0);
    _Playlist_last_fetched_suggestions.set(this, void 0);
    _Playlist_suggestions_continuation.set(this, void 0);
    __classPrivateFieldSet30(this, _Playlist_actions, actions, "f");
    __classPrivateFieldSet30(this, _Playlist_page, parser_default.parseResponse(response.data), "f");
    __classPrivateFieldSet30(this, _Playlist_last_fetched_suggestions, null, "f");
    __classPrivateFieldSet30(this, _Playlist_suggestions_continuation, null, "f");
    if (__classPrivateFieldGet33(this, _Playlist_page, "f").continuation_contents) {
      const data = (_a5 = __classPrivateFieldGet33(this, _Playlist_page, "f").continuation_contents) === null || _a5 === void 0 ? void 0 : _a5.as(MusicPlaylistShelfContinuation);
      this.items = data.contents;
      __classPrivateFieldSet30(this, _Playlist_continuation, data.continuation, "f");
    } else {
      if (((_b = __classPrivateFieldGet33(this, _Playlist_page, "f").header) === null || _b === void 0 ? void 0 : _b.item().type) === "MusicEditablePlaylistDetailHeader") {
        this.header = (_c = __classPrivateFieldGet33(this, _Playlist_page, "f").header) === null || _c === void 0 ? void 0 : _c.item().as(MusicEditablePlaylistDetailHeader_default).header.item().as(MusicDetailHeader_default);
      } else {
        this.header = (_d = __classPrivateFieldGet33(this, _Playlist_page, "f").header) === null || _d === void 0 ? void 0 : _d.item().as(MusicDetailHeader_default);
      }
      this.items = ((_e = __classPrivateFieldGet33(this, _Playlist_page, "f").contents_memo) === null || _e === void 0 ? void 0 : _e.getType(MusicPlaylistShelf_default).first().contents) || null;
      __classPrivateFieldSet30(this, _Playlist_continuation, ((_f = __classPrivateFieldGet33(this, _Playlist_page, "f").contents_memo) === null || _f === void 0 ? void 0 : _f.getType(MusicPlaylistShelf_default).first().continuation) || null, "f");
    }
  }
  getContinuation() {
    return __awaiter25(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet33(this, _Playlist_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      const response = yield __classPrivateFieldGet33(this, _Playlist_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: __classPrivateFieldGet33(this, _Playlist_continuation, "f")
      });
      return new Playlist3(response, __classPrivateFieldGet33(this, _Playlist_actions, "f"));
    });
  }
  getRelated() {
    var _a5, _b, _c, _d, _e;
    return __awaiter25(this, void 0, void 0, function* () {
      let section_continuation = (_b = (_a5 = __classPrivateFieldGet33(this, _Playlist_page, "f").contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(SectionList_default)) === null || _b === void 0 ? void 0 : _b[0].continuation;
      while (section_continuation) {
        const data = yield __classPrivateFieldGet33(this, _Playlist_actions, "f").execute("/browse", {
          client: "YTMUSIC",
          continuation: section_continuation,
          parse: true
        });
        const section_list = (_c = data.continuation_contents) === null || _c === void 0 ? void 0 : _c.as(SectionListContinuation);
        const sections = (_d = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _d === void 0 ? void 0 : _d.as(MusicCarouselShelf_default, MusicShelf_default);
        const related = (_e = sections === null || sections === void 0 ? void 0 : sections.matchCondition((section) => section.is(MusicCarouselShelf_default))) === null || _e === void 0 ? void 0 : _e.as(MusicCarouselShelf_default);
        if (related)
          return related;
        section_continuation = section_list === null || section_list === void 0 ? void 0 : section_list.continuation;
      }
      throw new InnertubeError("Target section not found.");
    });
  }
  getSuggestions(refresh = true) {
    return __awaiter25(this, void 0, void 0, function* () {
      const require_fetch = refresh || !__classPrivateFieldGet33(this, _Playlist_last_fetched_suggestions, "f");
      const fetch_promise = require_fetch ? __classPrivateFieldGet33(this, _Playlist_instances2, "m", _Playlist_fetchSuggestions).call(this) : Promise.resolve(null);
      const fetch_result = yield fetch_promise;
      if (fetch_result) {
        __classPrivateFieldSet30(this, _Playlist_last_fetched_suggestions, fetch_result.items, "f");
        __classPrivateFieldSet30(this, _Playlist_suggestions_continuation, fetch_result.continuation, "f");
      }
      return (fetch_result === null || fetch_result === void 0 ? void 0 : fetch_result.items) || __classPrivateFieldGet33(this, _Playlist_last_fetched_suggestions, "f");
    });
  }
  get page() {
    return __classPrivateFieldGet33(this, _Playlist_page, "f");
  }
  get has_continuation() {
    return !!__classPrivateFieldGet33(this, _Playlist_continuation, "f");
  }
};
__name(Playlist3, "Playlist");
_Playlist_page = /* @__PURE__ */ new WeakMap(), _Playlist_actions = /* @__PURE__ */ new WeakMap(), _Playlist_continuation = /* @__PURE__ */ new WeakMap(), _Playlist_last_fetched_suggestions = /* @__PURE__ */ new WeakMap(), _Playlist_suggestions_continuation = /* @__PURE__ */ new WeakMap(), _Playlist_instances2 = /* @__PURE__ */ new WeakSet(), _Playlist_fetchSuggestions = /* @__PURE__ */ __name(function _Playlist_fetchSuggestions2() {
  var _a5, _b, _c, _d, _e;
  return __awaiter25(this, void 0, void 0, function* () {
    const continuation = __classPrivateFieldGet33(this, _Playlist_suggestions_continuation, "f") || ((_b = (_a5 = __classPrivateFieldGet33(this, _Playlist_page, "f").contents_memo) === null || _a5 === void 0 ? void 0 : _a5.get("SectionList")) === null || _b === void 0 ? void 0 : _b[0].as(SectionList_default).continuation);
    if (continuation) {
      const page = yield __classPrivateFieldGet33(this, _Playlist_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation,
        parse: true
      });
      const section_list = (_c = page.continuation_contents) === null || _c === void 0 ? void 0 : _c.as(SectionListContinuation);
      const sections = (_d = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _d === void 0 ? void 0 : _d.as(MusicCarouselShelf_default, MusicShelf_default);
      const suggestions = (_e = sections === null || sections === void 0 ? void 0 : sections.matchCondition((section) => section.is(MusicShelf_default))) === null || _e === void 0 ? void 0 : _e.as(MusicShelf_default);
      return {
        items: (suggestions === null || suggestions === void 0 ? void 0 : suggestions.contents) || [],
        continuation: (suggestions === null || suggestions === void 0 ? void 0 : suggestions.continuation) || null
      };
    }
    return {
      items: [],
      continuation: null
    };
  });
}, "_Playlist_fetchSuggestions");
var Playlist_default3 = Playlist3;

// dist/src/parser/ytmusic/Recap.js
var __awaiter26 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet31 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet34 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Recap_page;
var _Recap_actions;
var Recap = class {
  constructor(response, actions) {
    var _a5, _b, _c, _d, _e, _f, _g;
    _Recap_page.set(this, void 0);
    _Recap_actions.set(this, void 0);
    __classPrivateFieldSet31(this, _Recap_page, parser_default.parseResponse(response.data), "f");
    __classPrivateFieldSet31(this, _Recap_actions, actions, "f");
    const header = (_a5 = __classPrivateFieldGet34(this, _Recap_page, "f").header) === null || _a5 === void 0 ? void 0 : _a5.item();
    this.header = (header === null || header === void 0 ? void 0 : header.is(MusicElementHeader_default)) ? (_d = (_c = (_b = __classPrivateFieldGet34(this, _Recap_page, "f").header) === null || _b === void 0 ? void 0 : _b.item().as(MusicElementHeader_default).element) === null || _c === void 0 ? void 0 : _c.model) === null || _d === void 0 ? void 0 : _d.item().as(HighlightsCarousel_default) : (_e = __classPrivateFieldGet34(this, _Recap_page, "f").header) === null || _e === void 0 ? void 0 : _e.item().as(MusicHeader_default);
    const tab = (_f = __classPrivateFieldGet34(this, _Recap_page, "f").contents) === null || _f === void 0 ? void 0 : _f.item().as(SingleColumnBrowseResults_default).tabs.firstOfType(Tab_default);
    if (!tab)
      throw new InnertubeError("Target tab not found");
    this.sections = (_g = tab.content) === null || _g === void 0 ? void 0 : _g.as(SectionList_default).contents.as(ItemSection_default, MusicCarouselShelf_default, Message_default);
  }
  getPlaylist() {
    return __awaiter26(this, void 0, void 0, function* () {
      if (!this.header)
        throw new InnertubeError("Header not found");
      if (!this.header.is(HighlightsCarousel_default))
        throw new InnertubeError("Recap playlist not available, check back later.");
      const endpoint = this.header.panels[0].text_on_tap_endpoint;
      const response = yield endpoint.call(__classPrivateFieldGet34(this, _Recap_actions, "f"), { client: "YTMUSIC" });
      return new Playlist_default3(response, __classPrivateFieldGet34(this, _Recap_actions, "f"));
    });
  }
  get page() {
    return __classPrivateFieldGet34(this, _Recap_page, "f");
  }
};
__name(Recap, "Recap");
_Recap_page = /* @__PURE__ */ new WeakMap(), _Recap_actions = /* @__PURE__ */ new WeakMap();
var Recap_default = Recap;

// dist/src/parser/ytmusic/Search.js
var __awaiter27 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet32 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet35 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Search_page;
var _Search_actions;
var _Search_continuation;
var _SearchContinuation_actions;
var _SearchContinuation_page;
var Search2 = class {
  constructor(response, actions, is_filtered) {
    var _a5, _b, _c;
    _Search_page.set(this, void 0);
    _Search_actions.set(this, void 0);
    _Search_continuation.set(this, void 0);
    __classPrivateFieldSet32(this, _Search_actions, actions, "f");
    __classPrivateFieldSet32(this, _Search_page, parser_default.parseResponse(response.data), "f");
    if (!__classPrivateFieldGet35(this, _Search_page, "f").contents || !__classPrivateFieldGet35(this, _Search_page, "f").contents_memo)
      throw new InnertubeError("Response did not contain any contents.");
    const tab = __classPrivateFieldGet35(this, _Search_page, "f").contents.item().as(TabbedSearchResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find target tab.");
    const tab_content = (_a5 = tab.content) === null || _a5 === void 0 ? void 0 : _a5.as(SectionList_default);
    if (!tab_content)
      throw new InnertubeError("Target tab did not have any content.");
    this.header = (_b = tab_content.header) === null || _b === void 0 ? void 0 : _b.item().as(ChipCloud_default);
    this.contents = tab_content.contents.as(MusicShelf_default, ItemSection_default);
    if (is_filtered) {
      __classPrivateFieldSet32(this, _Search_continuation, (_c = this.contents.firstOfType(MusicShelf_default)) === null || _c === void 0 ? void 0 : _c.continuation, "f");
    }
  }
  getMore(shelf) {
    return __awaiter27(this, void 0, void 0, function* () {
      if (!shelf || !shelf.endpoint)
        throw new InnertubeError("Cannot retrieve more items for this shelf because it does not have an endpoint.");
      const response = yield shelf.endpoint.call(__classPrivateFieldGet35(this, _Search_actions, "f"), { client: "YTMUSIC" });
      if (!response)
        throw new InnertubeError("Endpoint did not return any data");
      return new Search2(response, __classPrivateFieldGet35(this, _Search_actions, "f"), true);
    });
  }
  getContinuation() {
    return __awaiter27(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet35(this, _Search_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      const response = yield __classPrivateFieldGet35(this, _Search_actions, "f").execute("/search", {
        continuation: __classPrivateFieldGet35(this, _Search_continuation, "f"),
        client: "YTMUSIC"
      });
      return new SearchContinuation(__classPrivateFieldGet35(this, _Search_actions, "f"), response);
    });
  }
  applyFilter(target_filter) {
    var _a5, _b;
    return __awaiter27(this, void 0, void 0, function* () {
      let cloud_chip;
      if (typeof target_filter === "string") {
        cloud_chip = (_b = (_a5 = this.header) === null || _a5 === void 0 ? void 0 : _a5.chips) === null || _b === void 0 ? void 0 : _b.as(ChipCloudChip_default).get({ text: target_filter });
        if (!cloud_chip)
          throw new InnertubeError("Could not find filter with given name.", { available_filters: this.filters });
      } else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip_default)) {
        cloud_chip = target_filter;
      }
      if (!cloud_chip)
        throw new InnertubeError("Invalid filter", { available_filters: this.filters });
      if (cloud_chip === null || cloud_chip === void 0 ? void 0 : cloud_chip.is_selected)
        return this;
      if (!cloud_chip.endpoint)
        throw new InnertubeError("Selected filter does not have an endpoint.");
      const response = yield cloud_chip.endpoint.call(__classPrivateFieldGet35(this, _Search_actions, "f"), { client: "YTMUSIC" });
      return new Search2(response, __classPrivateFieldGet35(this, _Search_actions, "f"), true);
    });
  }
  get filters() {
    var _a5, _b;
    return ((_b = (_a5 = this.header) === null || _a5 === void 0 ? void 0 : _a5.chips) === null || _b === void 0 ? void 0 : _b.as(ChipCloudChip_default).map((chip) => chip.text)) || [];
  }
  get has_continuation() {
    return !!__classPrivateFieldGet35(this, _Search_continuation, "f");
  }
  get did_you_mean() {
    var _a5;
    return (_a5 = __classPrivateFieldGet35(this, _Search_page, "f").contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(DidYouMean_default).first();
  }
  get showing_results_for() {
    var _a5;
    return (_a5 = __classPrivateFieldGet35(this, _Search_page, "f").contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(ShowingResultsFor_default).first();
  }
  get message() {
    var _a5;
    return (_a5 = __classPrivateFieldGet35(this, _Search_page, "f").contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(Message_default).first();
  }
  get songs() {
    var _a5;
    return (_a5 = this.contents) === null || _a5 === void 0 ? void 0 : _a5.filterType(MusicShelf_default).find((section) => section.title.toString() === "Songs");
  }
  get videos() {
    var _a5;
    return (_a5 = this.contents) === null || _a5 === void 0 ? void 0 : _a5.filterType(MusicShelf_default).find((section) => section.title.toString() === "Videos");
  }
  get albums() {
    var _a5;
    return (_a5 = this.contents) === null || _a5 === void 0 ? void 0 : _a5.filterType(MusicShelf_default).find((section) => section.title.toString() === "Albums");
  }
  get artists() {
    var _a5;
    return (_a5 = this.contents) === null || _a5 === void 0 ? void 0 : _a5.filterType(MusicShelf_default).find((section) => section.title.toString() === "Artists");
  }
  get playlists() {
    var _a5;
    return (_a5 = this.contents) === null || _a5 === void 0 ? void 0 : _a5.filterType(MusicShelf_default).find((section) => section.title.toString() === "Community playlists");
  }
  get results() {
    var _a5, _b;
    return (_b = (_a5 = this.contents) === null || _a5 === void 0 ? void 0 : _a5.firstOfType(MusicShelf_default)) === null || _b === void 0 ? void 0 : _b.contents;
  }
  get sections() {
    var _a5;
    return (_a5 = this.contents) === null || _a5 === void 0 ? void 0 : _a5.filterType(MusicShelf_default);
  }
  get page() {
    return __classPrivateFieldGet35(this, _Search_page, "f");
  }
};
__name(Search2, "Search");
_Search_page = /* @__PURE__ */ new WeakMap(), _Search_actions = /* @__PURE__ */ new WeakMap(), _Search_continuation = /* @__PURE__ */ new WeakMap();
var Search_default2 = Search2;
var SearchContinuation = class {
  constructor(actions, response) {
    var _a5, _b;
    _SearchContinuation_actions.set(this, void 0);
    _SearchContinuation_page.set(this, void 0);
    __classPrivateFieldSet32(this, _SearchContinuation_actions, actions, "f");
    __classPrivateFieldSet32(this, _SearchContinuation_page, parser_default.parseResponse(response.data), "f");
    this.header = (_a5 = __classPrivateFieldGet35(this, _SearchContinuation_page, "f").header) === null || _a5 === void 0 ? void 0 : _a5.item().as(MusicHeader_default);
    this.contents = (_b = __classPrivateFieldGet35(this, _SearchContinuation_page, "f").continuation_contents) === null || _b === void 0 ? void 0 : _b.as(MusicShelfContinuation);
  }
  getContinuation() {
    var _a5;
    return __awaiter27(this, void 0, void 0, function* () {
      if (!((_a5 = this.contents) === null || _a5 === void 0 ? void 0 : _a5.continuation))
        throw new InnertubeError("Continuation not found.");
      const response = yield __classPrivateFieldGet35(this, _SearchContinuation_actions, "f").execute("/search", {
        continuation: this.contents.continuation,
        client: "YTMUSIC"
      });
      return new SearchContinuation(__classPrivateFieldGet35(this, _SearchContinuation_actions, "f"), response);
    });
  }
  get has_continuation() {
    var _a5;
    return !!((_a5 = this.contents) === null || _a5 === void 0 ? void 0 : _a5.continuation);
  }
  get page() {
    return __classPrivateFieldGet35(this, _SearchContinuation_page, "f");
  }
};
__name(SearchContinuation, "SearchContinuation");
_SearchContinuation_actions = /* @__PURE__ */ new WeakMap(), _SearchContinuation_page = /* @__PURE__ */ new WeakMap();

// dist/src/parser/ytmusic/TrackInfo.js
var __awaiter28 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet33 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet36 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TrackInfo_page;
var _TrackInfo_actions;
var _TrackInfo_cpn;
var _TrackInfo_playback_tracking;
var TrackInfo = class {
  constructor(data, actions, cpn) {
    var _a5, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    _TrackInfo_page.set(this, void 0);
    _TrackInfo_actions.set(this, void 0);
    _TrackInfo_cpn.set(this, void 0);
    _TrackInfo_playback_tracking.set(this, void 0);
    __classPrivateFieldSet33(this, _TrackInfo_actions, actions, "f");
    const info = parser_default.parseResponse(data[0].data);
    const next = ((_a5 = data === null || data === void 0 ? void 0 : data[1]) === null || _a5 === void 0 ? void 0 : _a5.data) ? parser_default.parseResponse(data[1].data) : void 0;
    __classPrivateFieldSet33(this, _TrackInfo_page, [info, next], "f");
    __classPrivateFieldSet33(this, _TrackInfo_cpn, cpn, "f");
    if (((_b = info.playability_status) === null || _b === void 0 ? void 0 : _b.status) === "ERROR")
      throw new InnertubeError("This video is unavailable", info.playability_status);
    if (!((_c = info.microformat) === null || _c === void 0 ? void 0 : _c.is(MicroformatData_default)))
      throw new InnertubeError("Invalid microformat", info.microformat);
    this.basic_info = Object.assign(Object.assign({}, info.video_details), {
      description: (_d = info.microformat) === null || _d === void 0 ? void 0 : _d.description,
      is_unlisted: (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.is_unlisted,
      is_family_safe: (_f = info.microformat) === null || _f === void 0 ? void 0 : _f.is_family_safe,
      url_canonical: (_g = info.microformat) === null || _g === void 0 ? void 0 : _g.url_canonical,
      tags: (_h = info.microformat) === null || _h === void 0 ? void 0 : _h.tags
    });
    this.streaming_data = info.streaming_data;
    this.playability_status = info.playability_status;
    this.storyboards = info.storyboards;
    this.endscreen = info.endscreen;
    __classPrivateFieldSet33(this, _TrackInfo_playback_tracking, info.playback_tracking, "f");
    if (next) {
      const tabbed_results = (_k = (_j = next.contents_memo) === null || _j === void 0 ? void 0 : _j.getType(WatchNextTabbedResults_default)) === null || _k === void 0 ? void 0 : _k[0];
      this.tabs = tabbed_results === null || tabbed_results === void 0 ? void 0 : tabbed_results.tabs.array().as(Tab_default);
      this.current_video_endpoint = next.current_video_endpoint;
      this.player_overlays = (_l = next.player_overlays) === null || _l === void 0 ? void 0 : _l.item().as(PlayerOverlay_default);
    }
  }
  toDash(url_transformer, format_filter) {
    return FormatUtils_default.toDash(this.streaming_data, url_transformer, format_filter, __classPrivateFieldGet36(this, _TrackInfo_cpn, "f"), __classPrivateFieldGet36(this, _TrackInfo_actions, "f").session.player);
  }
  chooseFormat(options) {
    return FormatUtils_default.chooseFormat(options, this.streaming_data);
  }
  download(options = {}) {
    return __awaiter28(this, void 0, void 0, function* () {
      return FormatUtils_default.download(options, __classPrivateFieldGet36(this, _TrackInfo_actions, "f"), this.playability_status, this.streaming_data, __classPrivateFieldGet36(this, _TrackInfo_actions, "f").session.player);
    });
  }
  getTab(title_or_page_type) {
    var _a5, _b;
    return __awaiter28(this, void 0, void 0, function* () {
      if (!this.tabs)
        throw new InnertubeError("Could not find any tab");
      const target_tab = this.tabs.get({ title: title_or_page_type }) || this.tabs.matchCondition((tab) => {
        var _a6, _b2;
        return ((_b2 = (_a6 = tab.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a6 === void 0 ? void 0 : _a6.browseEndpointContextMusicConfig) === null || _b2 === void 0 ? void 0 : _b2.pageType) === title_or_page_type;
      }) || ((_a5 = this.tabs) === null || _a5 === void 0 ? void 0 : _a5[0]);
      if (!target_tab)
        throw new InnertubeError(`Tab "${title_or_page_type}" not found`, { available_tabs: this.available_tabs });
      if (target_tab.content)
        return target_tab.content;
      const page = yield target_tab.endpoint.call(__classPrivateFieldGet36(this, _TrackInfo_actions, "f"), { client: "YTMUSIC", parse: true });
      if (((_b = page.contents) === null || _b === void 0 ? void 0 : _b.item().key("type").string()) === "Message")
        return page.contents.item().as(Message_default);
      if (!page.contents)
        throw new InnertubeError("Page contents was empty", page);
      return page.contents.item().as(SectionList_default).contents;
    });
  }
  getUpNext(automix = true) {
    var _a5, _b;
    return __awaiter28(this, void 0, void 0, function* () {
      const music_queue = yield this.getTab("Up next");
      if (!music_queue || !music_queue.content)
        throw new InnertubeError("Music queue was empty, the video id is probably invalid.", music_queue);
      const playlist_panel = music_queue.content.as(PlaylistPanel_default);
      if (!playlist_panel.playlist_id && automix) {
        const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo_default);
        if (!automix_preview_video)
          throw new InnertubeError("Automix item not found");
        const page = yield (_a5 = automix_preview_video.playlist_video) === null || _a5 === void 0 ? void 0 : _a5.endpoint.call(__classPrivateFieldGet36(this, _TrackInfo_actions, "f"), {
          videoId: this.basic_info.id,
          client: "YTMUSIC",
          parse: true
        });
        if (!page || !page.contents_memo)
          throw new InnertubeError("Could not fetch automix");
        return (_b = page.contents_memo.getType(PlaylistPanel_default)) === null || _b === void 0 ? void 0 : _b[0];
      }
      return playlist_panel;
    });
  }
  getRelated() {
    return __awaiter28(this, void 0, void 0, function* () {
      const tab = yield this.getTab("MUSIC_PAGE_TYPE_TRACK_RELATED");
      return tab;
    });
  }
  getLyrics() {
    return __awaiter28(this, void 0, void 0, function* () {
      const tab = yield this.getTab("MUSIC_PAGE_TYPE_TRACK_LYRICS");
      return tab.firstOfType(MusicDescriptionShelf_default);
    });
  }
  addToWatchHistory() {
    return __awaiter28(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet36(this, _TrackInfo_playback_tracking, "f"))
        throw new InnertubeError("Playback tracking not available");
      const url_params = {
        cpn: __classPrivateFieldGet36(this, _TrackInfo_cpn, "f"),
        fmt: 251,
        rtn: 0,
        rt: 0
      };
      const url = __classPrivateFieldGet36(this, _TrackInfo_playback_tracking, "f").videostats_playback_url.replace("https://s.", "https://music.");
      const response = yield __classPrivateFieldGet36(this, _TrackInfo_actions, "f").stats(url, {
        client_name: Constants_default.CLIENTS.YTMUSIC.NAME,
        client_version: Constants_default.CLIENTS.YTMUSIC.VERSION
      }, url_params);
      return response;
    });
  }
  get available_tabs() {
    return this.tabs ? this.tabs.map((tab) => tab.title) : [];
  }
  get page() {
    return __classPrivateFieldGet36(this, _TrackInfo_page, "f");
  }
};
__name(TrackInfo, "TrackInfo");
_TrackInfo_page = /* @__PURE__ */ new WeakMap(), _TrackInfo_actions = /* @__PURE__ */ new WeakMap(), _TrackInfo_cpn = /* @__PURE__ */ new WeakMap(), _TrackInfo_playback_tracking = /* @__PURE__ */ new WeakMap();
var TrackInfo_default = TrackInfo;

// dist/src/parser/ytkids/index.js
var ytkids_exports = {};
__export(ytkids_exports, {
  Channel: () => Channel_default2,
  HomeFeed: () => HomeFeed_default2,
  Search: () => Search_default3,
  VideoInfo: () => VideoInfo_default2
});

// dist/src/parser/ytkids/Channel.js
var __awaiter29 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Channel3 = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a5, _b;
    super(actions, data, already_parsed);
    this.header = (_a5 = this.page.header) === null || _a5 === void 0 ? void 0 : _a5.item().as(C4TabbedHeader_default);
    this.contents = this.memo.getType(ItemSection_default).first() || ((_b = this.page.continuation_contents) === null || _b === void 0 ? void 0 : _b.as(ItemSectionContinuation));
  }
  getContinuation() {
    var _a5;
    return __awaiter29(this, void 0, void 0, function* () {
      const response = yield this.actions.execute("/browse", {
        continuation: (_a5 = this.contents) === null || _a5 === void 0 ? void 0 : _a5.continuation,
        client: "YTKIDS"
      });
      return new Channel3(this.actions, response);
    });
  }
  get has_continuation() {
    var _a5;
    return !!((_a5 = this.contents) === null || _a5 === void 0 ? void 0 : _a5.continuation);
  }
};
__name(Channel3, "Channel");
var Channel_default2 = Channel3;

// dist/src/parser/ytkids/HomeFeed.js
var __awaiter30 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var HomeFeed3 = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a5, _b;
    super(actions, data, already_parsed);
    this.header = (_a5 = this.page.header) === null || _a5 === void 0 ? void 0 : _a5.item().as(KidsCategoriesHeader_default);
    this.contents = (_b = this.page.contents) === null || _b === void 0 ? void 0 : _b.item().as(KidsHomeScreen_default);
  }
  selectCategoryTab(tab) {
    var _a5;
    return __awaiter30(this, void 0, void 0, function* () {
      let target_tab;
      if (typeof tab === "string") {
        target_tab = (_a5 = this.header) === null || _a5 === void 0 ? void 0 : _a5.category_tabs.find((t) => t.title.toString() === tab);
      } else if (tab === null || tab === void 0 ? void 0 : tab.is(KidsCategoryTab_default)) {
        target_tab = tab;
      }
      if (!target_tab)
        throw new InnertubeError(`Tab "${tab}" not found`);
      const page = yield target_tab.endpoint.call(this.actions, { client: "YTKIDS", parse: true });
      page.header = this.page.header;
      page.header_memo = this.page.header_memo;
      return new HomeFeed3(this.actions, page, true);
    });
  }
  get categories() {
    var _a5;
    return ((_a5 = this.header) === null || _a5 === void 0 ? void 0 : _a5.category_tabs.map((tab) => tab.title.toString())) || [];
  }
};
__name(HomeFeed3, "HomeFeed");
var HomeFeed_default2 = HomeFeed3;

// dist/src/parser/ytkids/Search.js
var Search3 = class extends Feed_default {
  constructor(actions, data) {
    super(actions, data);
    this.estimated_results = this.page.estimated_results;
    const item_section = this.memo.getType(ItemSection_default).first();
    if (!item_section)
      throw new InnertubeError("No item section found in search response.");
    this.contents = item_section.contents;
  }
};
__name(Search3, "Search");
var Search_default3 = Search3;

// dist/src/parser/ytkids/VideoInfo.js
var __awaiter31 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet34 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet37 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VideoInfo_page2;
var _VideoInfo_actions2;
var _VideoInfo_cpn2;
var _VideoInfo_playback_tracking2;
var VideoInfo2 = class {
  constructor(data, actions, cpn) {
    var _a5, _b, _c, _d, _e, _f, _g;
    _VideoInfo_page2.set(this, void 0);
    _VideoInfo_actions2.set(this, void 0);
    _VideoInfo_cpn2.set(this, void 0);
    _VideoInfo_playback_tracking2.set(this, void 0);
    __classPrivateFieldSet34(this, _VideoInfo_actions2, actions, "f");
    const info = parser_default.parseResponse(data[0].data);
    const next = ((_a5 = data === null || data === void 0 ? void 0 : data[1]) === null || _a5 === void 0 ? void 0 : _a5.data) ? parser_default.parseResponse(data[1].data) : void 0;
    __classPrivateFieldSet34(this, _VideoInfo_page2, [info, next], "f");
    __classPrivateFieldSet34(this, _VideoInfo_cpn2, cpn, "f");
    if (((_b = info.playability_status) === null || _b === void 0 ? void 0 : _b.status) === "ERROR")
      throw new InnertubeError("This video is unavailable", info.playability_status);
    this.basic_info = info.video_details;
    this.streaming_data = info.streaming_data;
    this.playability_status = info.playability_status;
    this.captions = info.captions;
    __classPrivateFieldSet34(this, _VideoInfo_playback_tracking2, info.playback_tracking, "f");
    const two_col = (_c = next === null || next === void 0 ? void 0 : next.contents) === null || _c === void 0 ? void 0 : _c.item().as(TwoColumnWatchNextResults_default);
    const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
    const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
    if (results && secondary_results) {
      this.slim_video_metadata = (_e = (_d = results.firstOfType(ItemSection_default)) === null || _d === void 0 ? void 0 : _d.contents) === null || _e === void 0 ? void 0 : _e.firstOfType(SlimVideoMetadata_default);
      this.watch_next_feed = ((_f = secondary_results.firstOfType(ItemSection_default)) === null || _f === void 0 ? void 0 : _f.contents) || secondary_results;
      this.current_video_endpoint = next === null || next === void 0 ? void 0 : next.current_video_endpoint;
      this.player_overlays = (_g = next === null || next === void 0 ? void 0 : next.player_overlays) === null || _g === void 0 ? void 0 : _g.item().as(PlayerOverlay_default);
    }
  }
  toDash(url_transformer, format_filter) {
    return FormatUtils_default.toDash(this.streaming_data, url_transformer, format_filter, __classPrivateFieldGet37(this, _VideoInfo_cpn2, "f"), __classPrivateFieldGet37(this, _VideoInfo_actions2, "f").session.player);
  }
  chooseFormat(options) {
    return FormatUtils_default.chooseFormat(options, this.streaming_data);
  }
  download(options = {}) {
    return __awaiter31(this, void 0, void 0, function* () {
      return FormatUtils_default.download(options, __classPrivateFieldGet37(this, _VideoInfo_actions2, "f"), this.playability_status, this.streaming_data, __classPrivateFieldGet37(this, _VideoInfo_actions2, "f").session.player, this.cpn);
    });
  }
  addToWatchHistory() {
    return __awaiter31(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet37(this, _VideoInfo_playback_tracking2, "f"))
        throw new InnertubeError("Playback tracking not available");
      const url_params = {
        cpn: __classPrivateFieldGet37(this, _VideoInfo_cpn2, "f"),
        fmt: 251,
        rtn: 0,
        rt: 0
      };
      const url = __classPrivateFieldGet37(this, _VideoInfo_playback_tracking2, "f").videostats_playback_url.replace("https://s.", "https://www.");
      const response = yield __classPrivateFieldGet37(this, _VideoInfo_actions2, "f").stats(url, {
        client_name: Constants_exports.CLIENTS.WEB.NAME,
        client_version: Constants_exports.CLIENTS.WEB.VERSION
      }, url_params);
      return response;
    });
  }
  get actions() {
    return __classPrivateFieldGet37(this, _VideoInfo_actions2, "f");
  }
  get cpn() {
    return __classPrivateFieldGet37(this, _VideoInfo_cpn2, "f");
  }
  get page() {
    return __classPrivateFieldGet37(this, _VideoInfo_page2, "f");
  }
};
__name(VideoInfo2, "VideoInfo");
_VideoInfo_page2 = /* @__PURE__ */ new WeakMap(), _VideoInfo_actions2 = /* @__PURE__ */ new WeakMap(), _VideoInfo_cpn2 = /* @__PURE__ */ new WeakMap(), _VideoInfo_playback_tracking2 = /* @__PURE__ */ new WeakMap();
var VideoInfo_default2 = VideoInfo2;

// dist/src/parser/index.js
var parser_default = Parser;

// dist/src/core/Actions.js
var __awaiter32 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet35 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet38 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Actions_instances;
var _Actions_session;
var _Actions_wrap;
var _Actions_isBrowse;
var _Actions_needsLogin;
var Actions = class {
  constructor(session) {
    _Actions_instances.add(this);
    _Actions_session.set(this, void 0);
    __classPrivateFieldSet35(this, _Actions_session, session, "f");
  }
  get session() {
    return __classPrivateFieldGet38(this, _Actions_session, "f");
  }
  getVideoInfo(id, cpn, client, playlist_id) {
    var _a5;
    return __awaiter32(this, void 0, void 0, function* () {
      const data = {
        playbackContext: {
          contentPlaybackContext: {
            vis: 0,
            splay: false,
            referer: "https://www.youtube.com",
            currentUrl: `/watch?v=${id}`,
            autonavState: "STATE_NONE",
            signatureTimestamp: ((_a5 = __classPrivateFieldGet38(this, _Actions_session, "f").player) === null || _a5 === void 0 ? void 0 : _a5.sts) || 0,
            autoCaptionsDefaultOn: false,
            html5Preference: "HTML5_PREF_WANTS",
            lactMilliseconds: "-1"
          }
        },
        attestationRequest: {
          omitBotguardData: true
        },
        videoId: id
      };
      if (client) {
        data.client = client;
      }
      if (cpn) {
        data.cpn = cpn;
      }
      if (playlist_id) {
        data.playlistId = playlist_id;
      }
      const response = yield __classPrivateFieldGet38(this, _Actions_session, "f").http.fetch("/player", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      return __classPrivateFieldGet38(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
    });
  }
  stats(url, client, params) {
    return __awaiter32(this, void 0, void 0, function* () {
      const s_url = new URL(url);
      s_url.searchParams.set("ver", "2");
      s_url.searchParams.set("c", client.client_name.toLowerCase());
      s_url.searchParams.set("cbrver", client.client_version);
      s_url.searchParams.set("cver", client.client_version);
      for (const key of Object.keys(params)) {
        s_url.searchParams.set(key, params[key]);
      }
      const response = yield __classPrivateFieldGet38(this, _Actions_session, "f").http.fetch(s_url);
      return response;
    });
  }
  execute(endpoint, args) {
    var _a5, _b;
    return __awaiter32(this, void 0, void 0, function* () {
      let data;
      if (args && !args.protobuf) {
        data = Object.assign({}, args);
        if (Reflect.has(data, "browseId")) {
          if (__classPrivateFieldGet38(this, _Actions_instances, "m", _Actions_needsLogin).call(this, data.browseId) && !__classPrivateFieldGet38(this, _Actions_session, "f").logged_in)
            throw new InnertubeError("You must be signed in to perform this operation.");
        }
        if (Reflect.has(data, "override_endpoint"))
          delete data.override_endpoint;
        if (Reflect.has(data, "parse"))
          delete data.parse;
        if (Reflect.has(data, "request"))
          delete data.request;
        if (Reflect.has(data, "clientActions"))
          delete data.clientActions;
        if (Reflect.has(data, "settingItemIdForClient"))
          delete data.settingItemIdForClient;
        if (Reflect.has(data, "action")) {
          data.actions = [data.action];
          delete data.action;
        }
        if (Reflect.has(data, "boolValue")) {
          data.newValue = { boolValue: data.boolValue };
          delete data.boolValue;
        }
        if (Reflect.has(data, "token")) {
          data.continuation = data.token;
          delete data.token;
        }
        if ((data === null || data === void 0 ? void 0 : data.client) === "YTMUSIC") {
          data.isAudioOnly = true;
        }
      } else if (args) {
        data = args.serialized_data;
      }
      const target_endpoint = Reflect.has(args || {}, "override_endpoint") ? args === null || args === void 0 ? void 0 : args.override_endpoint : endpoint;
      const response = yield __classPrivateFieldGet38(this, _Actions_session, "f").http.fetch(target_endpoint, {
        method: "POST",
        body: (args === null || args === void 0 ? void 0 : args.protobuf) ? data : JSON.stringify(data || {}),
        headers: {
          "Content-Type": (args === null || args === void 0 ? void 0 : args.protobuf) ? "application/x-protobuf" : "application/json"
        }
      });
      if (args === null || args === void 0 ? void 0 : args.parse) {
        let parsed_response = parser_default.parseResponse(yield response.json());
        if (__classPrivateFieldGet38(this, _Actions_instances, "m", _Actions_isBrowse).call(this, parsed_response) && ((_b = (_a5 = parsed_response.on_response_received_actions) === null || _a5 === void 0 ? void 0 : _a5.first()) === null || _b === void 0 ? void 0 : _b.type) === "navigateAction") {
          const navigate_action = parsed_response.on_response_received_actions.firstOfType(NavigateAction);
          if (navigate_action) {
            parsed_response = yield navigate_action.endpoint.call(this, { parse: true });
          }
        }
        return parsed_response;
      }
      return __classPrivateFieldGet38(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
    });
  }
};
__name(Actions, "Actions");
_Actions_session = /* @__PURE__ */ new WeakMap(), _Actions_instances = /* @__PURE__ */ new WeakSet(), _Actions_wrap = /* @__PURE__ */ __name(function _Actions_wrap2(response) {
  return __awaiter32(this, void 0, void 0, function* () {
    return {
      success: response.ok,
      status_code: response.status,
      data: JSON.parse(yield response.text())
    };
  });
}, "_Actions_wrap"), _Actions_isBrowse = /* @__PURE__ */ __name(function _Actions_isBrowse2(response) {
  return "on_response_received_actions" in response;
}, "_Actions_isBrowse"), _Actions_needsLogin = /* @__PURE__ */ __name(function _Actions_needsLogin2(id) {
  return [
    "FElibrary",
    "FEhistory",
    "FEsubscriptions",
    "FEmusic_listening_review",
    "FEmusic_library_landing",
    "SPaccount_overview",
    "SPaccount_notifications",
    "SPaccount_privacy",
    "SPtime_watched"
  ].includes(id);
}, "_Actions_needsLogin");
var Actions_default = Actions;

// dist/src/core/Player.js
var __awaiter33 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet36 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet39 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Player_nsig_sc;
var _Player_sig_sc;
var _Player_sig_sc_timestamp;
var _Player_player_id;
var Player = class {
  constructor(signature_timestamp, sig_sc, nsig_sc, player_id) {
    _Player_nsig_sc.set(this, void 0);
    _Player_sig_sc.set(this, void 0);
    _Player_sig_sc_timestamp.set(this, void 0);
    _Player_player_id.set(this, void 0);
    __classPrivateFieldSet36(this, _Player_nsig_sc, nsig_sc, "f");
    __classPrivateFieldSet36(this, _Player_sig_sc, sig_sc, "f");
    __classPrivateFieldSet36(this, _Player_sig_sc_timestamp, signature_timestamp, "f");
    __classPrivateFieldSet36(this, _Player_player_id, player_id, "f");
  }
  static create(cache, fetch = Platform.shim.fetch) {
    return __awaiter33(this, void 0, void 0, function* () {
      const url = new URL("/iframe_api", Constants_default.URLS.YT_BASE);
      const res = yield fetch(url);
      if (res.status !== 200)
        throw new PlayerError("Failed to request player id");
      const js = yield res.text();
      const player_id = getStringBetweenStrings(js, "player\\/", "\\/");
      if (!player_id)
        throw new PlayerError("Failed to get player id");
      if (cache) {
        const cached_player = yield Player.fromCache(cache, player_id);
        if (cached_player)
          return cached_player;
      }
      const player_url = new URL(`/s/player/${player_id}/player_ias.vflset/en_US/base.js`, Constants_default.URLS.YT_BASE);
      const player_res = yield fetch(player_url, {
        headers: {
          "user-agent": getRandomUserAgent("desktop")
        }
      });
      if (!player_res.ok) {
        throw new PlayerError(`Failed to get player data: ${player_res.status}`);
      }
      const player_js = yield player_res.text();
      const sig_timestamp = this.extractSigTimestamp(player_js);
      const sig_sc = this.extractSigSourceCode(player_js);
      const nsig_sc = this.extractNSigSourceCode(player_js);
      return yield Player.fromSource(cache, sig_timestamp, sig_sc, nsig_sc, player_id);
    });
  }
  decipher(url, signature_cipher, cipher) {
    url = url || signature_cipher || cipher;
    if (!url)
      throw new PlayerError("No valid URL to decipher");
    const args = new URLSearchParams(url);
    const url_components = new URL(args.get("url") || url);
    if (signature_cipher || cipher) {
      const signature = Platform.shim.eval(__classPrivateFieldGet39(this, _Player_sig_sc, "f"), {
        sig: args.get("s")
      });
      if (typeof signature !== "string")
        throw new PlayerError("Failed to decipher signature");
      const sp = args.get("sp");
      sp ? url_components.searchParams.set(sp, signature) : url_components.searchParams.set("signature", signature);
    }
    const n = url_components.searchParams.get("n");
    if (n) {
      const nsig = Platform.shim.eval(__classPrivateFieldGet39(this, _Player_nsig_sc, "f"), {
        nsig: n
      });
      if (typeof nsig !== "string")
        throw new PlayerError("Failed to decipher nsig");
      if (nsig.startsWith("enhanced_except_")) {
        console.warn('Warning:\nCould not transform nsig, download may be throttled.\nChanging the InnerTube client to "ANDROID" might help!');
      }
      url_components.searchParams.set("n", nsig);
    }
    return url_components.toString();
  }
  static fromCache(cache, player_id) {
    return __awaiter33(this, void 0, void 0, function* () {
      const buffer = yield cache.get(player_id);
      if (!buffer)
        return null;
      const view = new DataView(buffer);
      const version = view.getUint32(0, true);
      if (version !== Player.LIBRARY_VERSION)
        return null;
      const sig_timestamp = view.getUint32(4, true);
      const sig_len = view.getUint32(8, true);
      const sig_buf = buffer.slice(12, 12 + sig_len);
      const nsig_buf = buffer.slice(12 + sig_len);
      const decoder = new TextDecoder();
      const sig_sc = decoder.decode(sig_buf);
      const nsig_sc = decoder.decode(nsig_buf);
      return new Player(sig_timestamp, sig_sc, nsig_sc, player_id);
    });
  }
  static fromSource(cache, sig_timestamp, sig_sc, nsig_sc, player_id) {
    return __awaiter33(this, void 0, void 0, function* () {
      const player = new Player(sig_timestamp, sig_sc, nsig_sc, player_id);
      yield player.cache(cache);
      return player;
    });
  }
  cache(cache) {
    return __awaiter33(this, void 0, void 0, function* () {
      if (!cache)
        return;
      const encoder = new TextEncoder();
      const sig_buf = encoder.encode(__classPrivateFieldGet39(this, _Player_sig_sc, "f"));
      const nsig_buf = encoder.encode(__classPrivateFieldGet39(this, _Player_nsig_sc, "f"));
      const buffer = new ArrayBuffer(12 + sig_buf.byteLength + nsig_buf.byteLength);
      const view = new DataView(buffer);
      view.setUint32(0, Player.LIBRARY_VERSION, true);
      view.setUint32(4, __classPrivateFieldGet39(this, _Player_sig_sc_timestamp, "f"), true);
      view.setUint32(8, sig_buf.byteLength, true);
      new Uint8Array(buffer).set(sig_buf, 12);
      new Uint8Array(buffer).set(nsig_buf, 12 + sig_buf.byteLength);
      yield cache.set(__classPrivateFieldGet39(this, _Player_player_id, "f"), new Uint8Array(buffer));
    });
  }
  static extractSigTimestamp(data) {
    return parseInt(getStringBetweenStrings(data, "signatureTimestamp:", ",") || "0");
  }
  static extractSigSourceCode(data) {
    var _a5, _b, _c;
    const calls = getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');
    const obj_name = (_c = (_b = (_a5 = calls === null || calls === void 0 ? void 0 : calls.split(/\.|\[/)) === null || _a5 === void 0 ? void 0 : _a5[0]) === null || _b === void 0 ? void 0 : _b.replace(";", "")) === null || _c === void 0 ? void 0 : _c.trim();
    const functions = getStringBetweenStrings(data, `var ${obj_name}={`, "};");
    if (!functions || !calls)
      console.warn(new PlayerError("Failed to extract signature decipher algorithm"));
    return `function descramble_sig(a) { a = a.split(""); let ${obj_name}={${functions}}${calls} return a.join("") } descramble_sig(sig);`;
  }
  static extractNSigSourceCode(data) {
    const sc = `function descramble_nsig(a) { let b=a.split("")${getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}')}} return b.join(""); } descramble_nsig(nsig)`;
    if (!sc)
      console.warn(new PlayerError("Failed to extract n-token decipher algorithm"));
    return sc;
  }
  get url() {
    return new URL(`/s/player/${__classPrivateFieldGet39(this, _Player_player_id, "f")}/player_ias.vflset/en_US/base.js`, Constants_default.URLS.YT_BASE).toString();
  }
  get sts() {
    return __classPrivateFieldGet39(this, _Player_sig_sc_timestamp, "f");
  }
  get nsig_sc() {
    return __classPrivateFieldGet39(this, _Player_nsig_sc, "f");
  }
  get sig_sc() {
    return __classPrivateFieldGet39(this, _Player_sig_sc, "f");
  }
  static get LIBRARY_VERSION() {
    return 2;
  }
};
__name(Player, "Player");
_Player_nsig_sc = /* @__PURE__ */ new WeakMap(), _Player_sig_sc = /* @__PURE__ */ new WeakMap(), _Player_sig_sc_timestamp = /* @__PURE__ */ new WeakMap(), _Player_player_id = /* @__PURE__ */ new WeakMap();

// dist/src/core/OAuth.js
var __awaiter34 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet37 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet40 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OAuth_instances;
var _OAuth_identity;
var _OAuth_session;
var _OAuth_credentials;
var _OAuth_polling_interval;
var _OAuth_loadCachedCredentials;
var _OAuth_getUserCode;
var _OAuth_startPolling;
var _OAuth_refreshAccessToken;
var _OAuth_getClientIdentity;
var OAuth = class {
  constructor(session) {
    _OAuth_instances.add(this);
    _OAuth_identity.set(this, void 0);
    _OAuth_session.set(this, void 0);
    _OAuth_credentials.set(this, void 0);
    _OAuth_polling_interval.set(this, 5);
    __classPrivateFieldSet37(this, _OAuth_session, session, "f");
  }
  init(credentials) {
    return __awaiter34(this, void 0, void 0, function* () {
      __classPrivateFieldSet37(this, _OAuth_credentials, credentials, "f");
      if (this.validateCredentials()) {
        if (!this.has_access_token_expired)
          __classPrivateFieldGet40(this, _OAuth_session, "f").emit("auth", {
            credentials: __classPrivateFieldGet40(this, _OAuth_credentials, "f"),
            status: "SUCCESS"
          });
      } else if (!(yield __classPrivateFieldGet40(this, _OAuth_instances, "m", _OAuth_loadCachedCredentials).call(this))) {
        yield __classPrivateFieldGet40(this, _OAuth_instances, "m", _OAuth_getUserCode).call(this);
      }
    });
  }
  cacheCredentials() {
    var _a5;
    return __awaiter34(this, void 0, void 0, function* () {
      const encoder = new TextEncoder();
      const data = encoder.encode(JSON.stringify(__classPrivateFieldGet40(this, _OAuth_credentials, "f")));
      yield (_a5 = __classPrivateFieldGet40(this, _OAuth_session, "f").cache) === null || _a5 === void 0 ? void 0 : _a5.set("youtubei_oauth_credentials", data.buffer);
    });
  }
  removeCache() {
    var _a5;
    return __awaiter34(this, void 0, void 0, function* () {
      yield (_a5 = __classPrivateFieldGet40(this, _OAuth_session, "f").cache) === null || _a5 === void 0 ? void 0 : _a5.remove("youtubei_oauth_credentials");
    });
  }
  refreshIfRequired() {
    return __awaiter34(this, void 0, void 0, function* () {
      if (this.has_access_token_expired) {
        yield __classPrivateFieldGet40(this, _OAuth_instances, "m", _OAuth_refreshAccessToken).call(this);
      }
    });
  }
  revokeCredentials() {
    return __awaiter34(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet40(this, _OAuth_credentials, "f"))
        return;
      yield this.removeCache();
      return __classPrivateFieldGet40(this, _OAuth_session, "f").http.fetch_function(new URL(`/o/oauth2/revoke?token=${encodeURIComponent(__classPrivateFieldGet40(this, _OAuth_credentials, "f").access_token)}`, Constants_default.URLS.YT_BASE), {
        method: "post"
      });
    });
  }
  get credentials() {
    return __classPrivateFieldGet40(this, _OAuth_credentials, "f");
  }
  get has_access_token_expired() {
    const timestamp = __classPrivateFieldGet40(this, _OAuth_credentials, "f") ? new Date(__classPrivateFieldGet40(this, _OAuth_credentials, "f").expires).getTime() : -Infinity;
    return new Date().getTime() > timestamp;
  }
  validateCredentials() {
    return __classPrivateFieldGet40(this, _OAuth_credentials, "f") && Reflect.has(__classPrivateFieldGet40(this, _OAuth_credentials, "f"), "access_token") && Reflect.has(__classPrivateFieldGet40(this, _OAuth_credentials, "f"), "refresh_token") && Reflect.has(__classPrivateFieldGet40(this, _OAuth_credentials, "f"), "expires") || false;
  }
};
__name(OAuth, "OAuth");
_OAuth_identity = /* @__PURE__ */ new WeakMap(), _OAuth_session = /* @__PURE__ */ new WeakMap(), _OAuth_credentials = /* @__PURE__ */ new WeakMap(), _OAuth_polling_interval = /* @__PURE__ */ new WeakMap(), _OAuth_instances = /* @__PURE__ */ new WeakSet(), _OAuth_loadCachedCredentials = /* @__PURE__ */ __name(function _OAuth_loadCachedCredentials2() {
  var _a5;
  return __awaiter34(this, void 0, void 0, function* () {
    const data = yield (_a5 = __classPrivateFieldGet40(this, _OAuth_session, "f").cache) === null || _a5 === void 0 ? void 0 : _a5.get("youtubei_oauth_credentials");
    if (!data)
      return false;
    const decoder = new TextDecoder();
    const credentials = JSON.parse(decoder.decode(data));
    __classPrivateFieldSet37(this, _OAuth_credentials, {
      access_token: credentials.access_token,
      refresh_token: credentials.refresh_token,
      expires: new Date(credentials.expires)
    }, "f");
    __classPrivateFieldGet40(this, _OAuth_session, "f").emit("auth", {
      credentials: __classPrivateFieldGet40(this, _OAuth_credentials, "f"),
      status: "SUCCESS"
    });
    return true;
  });
}, "_OAuth_loadCachedCredentials"), _OAuth_getUserCode = /* @__PURE__ */ __name(function _OAuth_getUserCode2() {
  return __awaiter34(this, void 0, void 0, function* () {
    __classPrivateFieldSet37(this, _OAuth_identity, yield __classPrivateFieldGet40(this, _OAuth_instances, "m", _OAuth_getClientIdentity).call(this), "f");
    const data = {
      client_id: __classPrivateFieldGet40(this, _OAuth_identity, "f").client_id,
      scope: Constants_default.OAUTH.SCOPE,
      device_id: Platform.shim.uuidv4(),
      model_name: Constants_default.OAUTH.MODEL_NAME
    };
    const response = yield __classPrivateFieldGet40(this, _OAuth_session, "f").http.fetch_function(new URL("/o/oauth2/device/code", Constants_default.URLS.YT_BASE), {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const response_data = yield response.json();
    __classPrivateFieldGet40(this, _OAuth_session, "f").emit("auth-pending", response_data);
    __classPrivateFieldSet37(this, _OAuth_polling_interval, response_data.interval, "f");
    __classPrivateFieldGet40(this, _OAuth_instances, "m", _OAuth_startPolling).call(this, response_data.device_code);
  });
}, "_OAuth_getUserCode"), _OAuth_startPolling = /* @__PURE__ */ __name(function _OAuth_startPolling2(device_code) {
  const poller = setInterval(() => __awaiter34(this, void 0, void 0, function* () {
    const data = Object.assign(Object.assign({}, __classPrivateFieldGet40(this, _OAuth_identity, "f")), { code: device_code, grant_type: Constants_default.OAUTH.GRANT_TYPE });
    try {
      const response = yield __classPrivateFieldGet40(this, _OAuth_session, "f").http.fetch_function(new URL("/o/oauth2/token", Constants_default.URLS.YT_BASE), {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response_data = yield response.json();
      if (response_data.error) {
        switch (response_data.error) {
          case "access_denied":
            __classPrivateFieldGet40(this, _OAuth_session, "f").emit("auth-error", new OAuthError("Access was denied.", { status: "ACCESS_DENIED" }));
            break;
          case "expired_token":
            __classPrivateFieldGet40(this, _OAuth_session, "f").emit("auth-error", new OAuthError("The device code has expired, restarting auth flow.", { status: "DEVICE_CODE_EXPIRED" }));
            clearInterval(poller);
            __classPrivateFieldGet40(this, _OAuth_instances, "m", _OAuth_getUserCode).call(this);
            break;
          default:
            break;
        }
        return;
      }
      const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1e3);
      __classPrivateFieldSet37(this, _OAuth_credentials, {
        access_token: response_data.access_token,
        refresh_token: response_data.refresh_token,
        expires: expiration_date
      }, "f");
      __classPrivateFieldGet40(this, _OAuth_session, "f").emit("auth", {
        credentials: __classPrivateFieldGet40(this, _OAuth_credentials, "f"),
        status: "SUCCESS"
      });
      clearInterval(poller);
    } catch (err) {
      clearInterval(poller);
      return __classPrivateFieldGet40(this, _OAuth_session, "f").emit("auth-error", new OAuthError("Could not obtain user code.", { status: "FAILED", error: err }));
    }
  }), __classPrivateFieldGet40(this, _OAuth_polling_interval, "f") * 1e3);
}, "_OAuth_startPolling"), _OAuth_refreshAccessToken = /* @__PURE__ */ __name(function _OAuth_refreshAccessToken2() {
  return __awaiter34(this, void 0, void 0, function* () {
    if (!__classPrivateFieldGet40(this, _OAuth_credentials, "f"))
      return;
    __classPrivateFieldSet37(this, _OAuth_identity, yield __classPrivateFieldGet40(this, _OAuth_instances, "m", _OAuth_getClientIdentity).call(this), "f");
    const data = Object.assign(Object.assign({}, __classPrivateFieldGet40(this, _OAuth_identity, "f")), { refresh_token: __classPrivateFieldGet40(this, _OAuth_credentials, "f").refresh_token, grant_type: "refresh_token" });
    const response = yield __classPrivateFieldGet40(this, _OAuth_session, "f").http.fetch_function(new URL("/o/oauth2/token", Constants_default.URLS.YT_BASE), {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const response_data = yield response.json();
    const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1e3);
    __classPrivateFieldSet37(this, _OAuth_credentials, {
      access_token: response_data.access_token,
      refresh_token: response_data.refresh_token || __classPrivateFieldGet40(this, _OAuth_credentials, "f").refresh_token,
      expires: expiration_date
    }, "f");
    __classPrivateFieldGet40(this, _OAuth_session, "f").emit("update-credentials", {
      credentials: __classPrivateFieldGet40(this, _OAuth_credentials, "f"),
      status: "SUCCESS"
    });
  });
}, "_OAuth_refreshAccessToken"), _OAuth_getClientIdentity = /* @__PURE__ */ __name(function _OAuth_getClientIdentity2() {
  var _a5;
  return __awaiter34(this, void 0, void 0, function* () {
    const response = yield __classPrivateFieldGet40(this, _OAuth_session, "f").http.fetch_function(new URL("/tv", Constants_default.URLS.YT_BASE), { headers: Constants_default.OAUTH.HEADERS });
    const response_data = yield response.text();
    const url_body = (_a5 = Constants_default.OAUTH.REGEX.AUTH_SCRIPT.exec(response_data)) === null || _a5 === void 0 ? void 0 : _a5[1];
    if (!url_body)
      throw new OAuthError("Could not obtain script url.", { status: "FAILED" });
    const script = yield __classPrivateFieldGet40(this, _OAuth_session, "f").http.fetch(url_body, { baseURL: Constants_default.URLS.YT_BASE });
    const client_identity = (yield script.text()).replace(/\n/g, "").match(Constants_default.OAUTH.REGEX.CLIENT_IDENTITY);
    const groups = client_identity === null || client_identity === void 0 ? void 0 : client_identity.groups;
    if (!groups)
      throw new OAuthError("Could not obtain client identity.", { status: "FAILED" });
    return groups;
  });
}, "_OAuth_getClientIdentity");
var OAuth_default = OAuth;

// dist/src/core/Session.js
var __awaiter35 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet38 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet41 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a4;
var _Session_api_version;
var _Session_key;
var _Session_context;
var _Session_account_index;
var _Session_player;
var _Session_retrieveSessionData;
var _Session_generateSessionData;
var ClientType;
(function(ClientType2) {
  ClientType2["WEB"] = "WEB";
  ClientType2["KIDS"] = "WEB_KIDS";
  ClientType2["MUSIC"] = "WEB_REMIX";
  ClientType2["ANDROID"] = "ANDROID";
  ClientType2["ANDROID_MUSIC"] = "ANDROID_MUSIC";
  ClientType2["ANDROID_CREATOR"] = "ANDROID_CREATOR";
  ClientType2["TV_EMBEDDED"] = "TVHTML5_SIMPLY_EMBEDDED_PLAYER";
})(ClientType = ClientType || (ClientType = {}));
var Session = class extends EventEmitterLike {
  constructor(context, api_key, api_version, account_index, player, cookie, fetch, cache) {
    super();
    _Session_api_version.set(this, void 0);
    _Session_key.set(this, void 0);
    _Session_context.set(this, void 0);
    _Session_account_index.set(this, void 0);
    _Session_player.set(this, void 0);
    __classPrivateFieldSet38(this, _Session_context, context, "f");
    __classPrivateFieldSet38(this, _Session_account_index, account_index, "f");
    __classPrivateFieldSet38(this, _Session_key, api_key, "f");
    __classPrivateFieldSet38(this, _Session_api_version, api_version, "f");
    __classPrivateFieldSet38(this, _Session_player, player, "f");
    this.http = new HTTPClient(this, cookie, fetch);
    this.actions = new Actions_default(this);
    this.oauth = new OAuth_default(this);
    this.logged_in = !!cookie;
    this.cache = cache;
  }
  on(type, listener) {
    super.on(type, listener);
  }
  once(type, listener) {
    super.once(type, listener);
  }
  static create(options = {}) {
    return __awaiter35(this, void 0, void 0, function* () {
      const { context, api_key, api_version, account_index } = yield Session.getSessionData(options.lang, options.location, options.account_index, options.enable_safety_mode, options.generate_session_locally, options.device_category, options.client_type, options.timezone, options.fetch);
      return new Session(context, api_key, api_version, account_index, options.retrieve_player === false ? void 0 : yield Player.create(options.cache, options.fetch), options.cookie, options.fetch, options.cache);
    });
  }
  static getSessionData(lang = "", location = "", account_index = 0, enable_safety_mode = false, generate_session_locally = false, device_category = "desktop", client_name = ClientType.WEB, tz = Intl.DateTimeFormat().resolvedOptions().timeZone, fetch = Platform.shim.fetch) {
    return __awaiter35(this, void 0, void 0, function* () {
      let session_data;
      if (generate_session_locally) {
        session_data = __classPrivateFieldGet41(this, _a4, "m", _Session_generateSessionData).call(this, { lang, location, time_zone: tz, device_category, client_name, enable_safety_mode });
      } else {
        session_data = yield __classPrivateFieldGet41(this, _a4, "m", _Session_retrieveSessionData).call(this, { lang, location, time_zone: tz, device_category, client_name, enable_safety_mode }, fetch);
      }
      return Object.assign(Object.assign({}, session_data), { account_index });
    });
  }
  signIn(credentials) {
    return __awaiter35(this, void 0, void 0, function* () {
      return new Promise((resolve, reject) => __awaiter35(this, void 0, void 0, function* () {
        const error_handler = /* @__PURE__ */ __name((err) => reject(err), "error_handler");
        this.once("auth", (data) => {
          this.off("auth-error", error_handler);
          if (data.status === "SUCCESS") {
            this.logged_in = true;
            resolve();
          }
          reject(data);
        });
        this.once("auth-error", error_handler);
        try {
          yield this.oauth.init(credentials);
          if (this.oauth.validateCredentials()) {
            yield this.oauth.refreshIfRequired();
            this.logged_in = true;
            resolve();
          }
        } catch (err) {
          reject(err);
        }
      }));
    });
  }
  signOut() {
    return __awaiter35(this, void 0, void 0, function* () {
      if (!this.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield this.oauth.revokeCredentials();
      this.logged_in = false;
      return response;
    });
  }
  get key() {
    return __classPrivateFieldGet41(this, _Session_key, "f");
  }
  get api_version() {
    return __classPrivateFieldGet41(this, _Session_api_version, "f");
  }
  get client_version() {
    return __classPrivateFieldGet41(this, _Session_context, "f").client.clientVersion;
  }
  get client_name() {
    return __classPrivateFieldGet41(this, _Session_context, "f").client.clientName;
  }
  get account_index() {
    return __classPrivateFieldGet41(this, _Session_account_index, "f");
  }
  get context() {
    return __classPrivateFieldGet41(this, _Session_context, "f");
  }
  get player() {
    return __classPrivateFieldGet41(this, _Session_player, "f");
  }
  get lang() {
    return __classPrivateFieldGet41(this, _Session_context, "f").client.hl;
  }
};
__name(Session, "Session");
_a4 = Session, _Session_api_version = /* @__PURE__ */ new WeakMap(), _Session_key = /* @__PURE__ */ new WeakMap(), _Session_context = /* @__PURE__ */ new WeakMap(), _Session_account_index = /* @__PURE__ */ new WeakMap(), _Session_player = /* @__PURE__ */ new WeakMap(), _Session_retrieveSessionData = /* @__PURE__ */ __name(function _Session_retrieveSessionData2(options, fetch = Platform.shim.fetch) {
  return __awaiter35(this, void 0, void 0, function* () {
    const url = new URL("/sw.js_data", Constants_default.URLS.YT_BASE);
    const res = yield fetch(url, {
      headers: {
        "accept-language": options.lang || "en-US",
        "user-agent": getRandomUserAgent("desktop"),
        "accept": "*/*",
        "referer": "https://www.youtube.com/sw.js",
        "cookie": `PREF=tz=${options.time_zone.replace("/", ".")}`
      }
    });
    if (!res.ok)
      throw new SessionError(`Failed to retrieve session data: ${res.status}`);
    const text = yield res.text();
    const data = JSON.parse(text.replace(/^\)\]\}'/, ""));
    const ytcfg = data[0][2];
    const api_version = `v${ytcfg[0][0][6]}`;
    const [[device_info], api_key] = ytcfg;
    const context = {
      client: {
        hl: device_info[0],
        gl: options.location || device_info[2],
        remoteHost: device_info[3],
        screenDensityFloat: 1,
        screenHeightPoints: 1080,
        screenPixelDensity: 1,
        screenWidthPoints: 1920,
        visitorData: device_info[13],
        userAgent: device_info[14],
        clientName: options.client_name,
        clientVersion: device_info[16],
        osName: device_info[17],
        osVersion: device_info[18],
        platform: options.device_category.toUpperCase(),
        clientFormFactor: "UNKNOWN_FORM_FACTOR",
        userInterfaceTheme: "USER_INTERFACE_THEME_LIGHT",
        timeZone: device_info[79] || options.time_zone,
        browserName: device_info[86],
        browserVersion: device_info[87],
        originalUrl: Constants_default.URLS.YT_BASE,
        deviceMake: device_info[11],
        deviceModel: device_info[12],
        utcOffsetMinutes: new Date().getTimezoneOffset()
      },
      user: {
        enableSafetyMode: options.enable_safety_mode,
        lockedSafetyMode: false
      },
      request: {
        useSsl: true
      }
    };
    return { context, api_key, api_version };
  });
}, "_Session_retrieveSessionData"), _Session_generateSessionData = /* @__PURE__ */ __name(function _Session_generateSessionData2(options) {
  const id = generateRandomString(11);
  const timestamp = Math.floor(Date.now() / 1e3);
  const context = {
    client: {
      hl: options.lang || "en",
      gl: options.location || "US",
      screenDensityFloat: 1,
      screenHeightPoints: 1080,
      screenPixelDensity: 1,
      screenWidthPoints: 1920,
      visitorData: proto_default.encodeVisitorData(id, timestamp),
      userAgent: getRandomUserAgent("desktop"),
      clientName: options.client_name,
      clientVersion: CLIENTS.WEB.VERSION,
      osName: "Windows",
      osVersion: "10.0",
      platform: options.device_category.toUpperCase(),
      clientFormFactor: "UNKNOWN_FORM_FACTOR",
      userInterfaceTheme: "USER_INTERFACE_THEME_LIGHT",
      timeZone: options.time_zone,
      originalUrl: Constants_default.URLS.YT_BASE,
      deviceMake: "",
      deviceModel: "",
      utcOffsetMinutes: new Date().getTimezoneOffset()
    },
    user: {
      enableSafetyMode: options.enable_safety_mode,
      lockedSafetyMode: false
    },
    request: {
      useSsl: true
    }
  };
  return { context, api_key: CLIENTS.WEB.API_KEY, api_version: CLIENTS.WEB.API_VERSION };
}, "_Session_generateSessionData");

// dist/src/parser/youtube/HashtagFeed.js
var __awaiter36 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var HashtagFeed = class extends FilterableFeed_default {
  constructor(actions, response) {
    super(actions, response);
    if (!this.page.contents_memo)
      throw new InnertubeError("Unexpected response", this.page);
    const tab = this.page.contents_memo.getType(Tab_default).first();
    if (!tab.content)
      throw new InnertubeError("Content tab has no content", tab);
    if (this.page.header) {
      this.header = this.page.header.item().as(HashtagHeader_default);
    }
    this.contents = tab.content.as(RichGrid_default);
  }
  applyFilter(filter) {
    const _super = Object.create(null, {
      getFilteredFeed: { get: () => super.getFilteredFeed }
    });
    return __awaiter36(this, void 0, void 0, function* () {
      const response = yield _super.getFilteredFeed.call(this, filter);
      return new HashtagFeed(this.actions, response.page);
    });
  }
};
__name(HashtagFeed, "HashtagFeed");

// dist/src/core/AccountManager.js
var __awaiter37 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet39 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet42 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AccountManager_actions;
var AccountManager = class {
  constructor(actions) {
    _AccountManager_actions.set(this, void 0);
    __classPrivateFieldSet39(this, _AccountManager_actions, actions, "f");
    this.channel = {
      editName: (new_name) => {
        if (!__classPrivateFieldGet42(this, _AccountManager_actions, "f").session.logged_in)
          throw new InnertubeError("You must be signed in to perform this operation.");
        return __classPrivateFieldGet42(this, _AccountManager_actions, "f").execute("/channel/edit_name", {
          givenName: new_name,
          client: "ANDROID"
        });
      },
      editDescription: (new_description) => {
        if (!__classPrivateFieldGet42(this, _AccountManager_actions, "f").session.logged_in)
          throw new InnertubeError("You must be signed in to perform this operation.");
        return __classPrivateFieldGet42(this, _AccountManager_actions, "f").execute("/channel/edit_description", {
          givenDescription: new_description,
          client: "ANDROID"
        });
      },
      getBasicAnalytics: () => this.getAnalytics()
    };
  }
  getInfo() {
    return __awaiter37(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet42(this, _AccountManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield __classPrivateFieldGet42(this, _AccountManager_actions, "f").execute("/account/accounts_list", { client: "ANDROID" });
      return new AccountInfo_default(response);
    });
  }
  getTimeWatched() {
    return __awaiter37(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet42(this, _AccountManager_actions, "f").execute("/browse", {
        browseId: "SPtime_watched",
        client: "ANDROID"
      });
      return new TimeWatched_default(response);
    });
  }
  getSettings() {
    return __awaiter37(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet42(this, _AccountManager_actions, "f").execute("/browse", {
        browseId: "SPaccount_overview"
      });
      return new Settings_default(__classPrivateFieldGet42(this, _AccountManager_actions, "f"), response);
    });
  }
  getAnalytics() {
    var _a5;
    return __awaiter37(this, void 0, void 0, function* () {
      const info = yield this.getInfo();
      const params = proto_default.encodeChannelAnalyticsParams((_a5 = info.footers) === null || _a5 === void 0 ? void 0 : _a5.endpoint.payload.browseId);
      const response = yield __classPrivateFieldGet42(this, _AccountManager_actions, "f").execute("/browse", {
        browseId: "FEanalytics_screen",
        client: "ANDROID",
        params
      });
      return new Analytics_default(response);
    });
  }
};
__name(AccountManager, "AccountManager");
_AccountManager_actions = /* @__PURE__ */ new WeakMap();
var AccountManager_default = AccountManager;

// dist/src/core/InteractionManager.js
var __awaiter38 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet40 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet43 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InteractionManager_actions;
var InteractionManager = class {
  constructor(actions) {
    _InteractionManager_actions.set(this, void 0);
    __classPrivateFieldSet40(this, _InteractionManager_actions, actions, "f");
  }
  like(video_id) {
    return __awaiter38(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      if (!__classPrivateFieldGet43(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet43(this, _InteractionManager_actions, "f").execute("/like/like", {
        client: "ANDROID",
        target: {
          videoId: video_id
        }
      });
      return action;
    });
  }
  dislike(video_id) {
    return __awaiter38(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      if (!__classPrivateFieldGet43(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet43(this, _InteractionManager_actions, "f").execute("/like/dislike", {
        client: "ANDROID",
        target: {
          videoId: video_id
        }
      });
      return action;
    });
  }
  removeRating(video_id) {
    return __awaiter38(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      if (!__classPrivateFieldGet43(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet43(this, _InteractionManager_actions, "f").execute("/like/removelike", {
        client: "ANDROID",
        target: {
          videoId: video_id
        }
      });
      return action;
    });
  }
  subscribe(channel_id) {
    return __awaiter38(this, void 0, void 0, function* () {
      throwIfMissing({ channel_id });
      if (!__classPrivateFieldGet43(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet43(this, _InteractionManager_actions, "f").execute("/subscription/subscribe", {
        client: "ANDROID",
        channelIds: [channel_id],
        params: "EgIIAhgA"
      });
      return action;
    });
  }
  unsubscribe(channel_id) {
    return __awaiter38(this, void 0, void 0, function* () {
      throwIfMissing({ channel_id });
      if (!__classPrivateFieldGet43(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet43(this, _InteractionManager_actions, "f").execute("/subscription/unsubscribe", {
        client: "ANDROID",
        channelIds: [channel_id],
        params: "CgIIAhgA"
      });
      return action;
    });
  }
  comment(video_id, text) {
    return __awaiter38(this, void 0, void 0, function* () {
      throwIfMissing({ video_id, text });
      if (!__classPrivateFieldGet43(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet43(this, _InteractionManager_actions, "f").execute("/comment/create_comment", {
        client: "ANDROID",
        commentText: text,
        createCommentParams: proto_default.encodeCommentParams(video_id)
      });
      return action;
    });
  }
  translate(text, target_language, args = {}) {
    return __awaiter38(this, void 0, void 0, function* () {
      throwIfMissing({ text, target_language });
      const target_action = proto_default.encodeCommentActionParams(22, Object.assign({ text, target_language }, args));
      const response = yield __classPrivateFieldGet43(this, _InteractionManager_actions, "f").execute("/comment/perform_comment_action", {
        client: "ANDROID",
        actions: [target_action]
      });
      const mutation = response.data.frameworkUpdates.entityBatchUpdate.mutations[0].payload.commentEntityPayload;
      return {
        success: response.success,
        status_code: response.status_code,
        translated_content: mutation.translatedContent.content,
        data: response.data
      };
    });
  }
  setNotificationPreferences(channel_id, type) {
    return __awaiter38(this, void 0, void 0, function* () {
      throwIfMissing({ channel_id, type });
      if (!__classPrivateFieldGet43(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const pref_types = {
        PERSONALIZED: 1,
        ALL: 2,
        NONE: 3
      };
      if (!Object.keys(pref_types).includes(type.toUpperCase()))
        throw new Error(`Invalid notification preference type: ${type}`);
      const action = yield __classPrivateFieldGet43(this, _InteractionManager_actions, "f").execute("/notification/modify_channel_preference", {
        client: "WEB",
        params: proto_default.encodeNotificationPref(channel_id, pref_types[type.toUpperCase()])
      });
      return action;
    });
  }
};
__name(InteractionManager, "InteractionManager");
_InteractionManager_actions = /* @__PURE__ */ new WeakMap();
var InteractionManager_default = InteractionManager;

// dist/src/core/Kids.js
var __awaiter39 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet41 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet44 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Kids_session;
var Kids = class {
  constructor(session) {
    _Kids_session.set(this, void 0);
    __classPrivateFieldSet41(this, _Kids_session, session, "f");
  }
  search(query) {
    return __awaiter39(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet44(this, _Kids_session, "f").actions.execute("/search", { query, client: "YTKIDS" });
      return new Search_default3(__classPrivateFieldGet44(this, _Kids_session, "f").actions, response);
    });
  }
  getInfo(video_id) {
    var _a5;
    return __awaiter39(this, void 0, void 0, function* () {
      const cpn = generateRandomString(16);
      const initial_info = __classPrivateFieldGet44(this, _Kids_session, "f").actions.execute("/player", {
        cpn,
        client: "YTKIDS",
        videoId: video_id,
        playbackContext: {
          contentPlaybackContext: {
            signatureTimestamp: ((_a5 = __classPrivateFieldGet44(this, _Kids_session, "f").player) === null || _a5 === void 0 ? void 0 : _a5.sts) || 0
          }
        }
      });
      const continuation = __classPrivateFieldGet44(this, _Kids_session, "f").actions.execute("/next", { videoId: video_id, client: "YTKIDS" });
      const response = yield Promise.all([initial_info, continuation]);
      return new VideoInfo_default2(response, __classPrivateFieldGet44(this, _Kids_session, "f").actions, cpn);
    });
  }
  getChannel(channel_id) {
    return __awaiter39(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet44(this, _Kids_session, "f").actions.execute("/browse", { browseId: channel_id, client: "YTKIDS" });
      return new Channel_default2(__classPrivateFieldGet44(this, _Kids_session, "f").actions, response);
    });
  }
  getHomeFeed() {
    return __awaiter39(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet44(this, _Kids_session, "f").actions.execute("/browse", { browseId: "FEkids_home", client: "YTKIDS" });
      return new HomeFeed_default2(__classPrivateFieldGet44(this, _Kids_session, "f").actions, response);
    });
  }
};
__name(Kids, "Kids");
_Kids_session = /* @__PURE__ */ new WeakMap();
var Kids_default = Kids;

// dist/src/core/Music.js
var __awaiter40 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet42 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet45 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Music_instances;
var _Music_session;
var _Music_actions;
var _Music_fetchInfoFromVideoId;
var _Music_fetchInfoFromListItem;
var Music = class {
  constructor(session) {
    _Music_instances.add(this);
    _Music_session.set(this, void 0);
    _Music_actions.set(this, void 0);
    __classPrivateFieldSet42(this, _Music_session, session, "f");
    __classPrivateFieldSet42(this, _Music_actions, session.actions, "f");
  }
  getInfo(target) {
    if (target instanceof MusicTwoRowItem_default) {
      return __classPrivateFieldGet45(this, _Music_instances, "m", _Music_fetchInfoFromListItem).call(this, target);
    } else if (typeof target === "string") {
      return __classPrivateFieldGet45(this, _Music_instances, "m", _Music_fetchInfoFromVideoId).call(this, target);
    }
    throw new InnertubeError("Invalid target, expected either a video id or a valid MusicTwoRowItem", target);
  }
  search(query, filters = {}) {
    return __awaiter40(this, void 0, void 0, function* () {
      throwIfMissing({ query });
      const payload = { query, client: "YTMUSIC" };
      if (filters.type && filters.type !== "all") {
        payload.params = proto_default.encodeMusicSearchFilters(filters);
      }
      const response = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/search", payload);
      return new Search_default2(response, __classPrivateFieldGet45(this, _Music_actions, "f"), Reflect.has(filters, "type") && filters.type !== "all");
    });
  }
  getHomeFeed() {
    return __awaiter40(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        browseId: "FEmusic_home"
      });
      return new HomeFeed_default(response, __classPrivateFieldGet45(this, _Music_actions, "f"));
    });
  }
  getExplore() {
    return __awaiter40(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        browseId: "FEmusic_explore"
      });
      return new Explore_default(response);
    });
  }
  getLibrary() {
    return __awaiter40(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        browseId: "FEmusic_library_landing"
      });
      return new Library_default2(response, __classPrivateFieldGet45(this, _Music_actions, "f"));
    });
  }
  getArtist(artist_id) {
    return __awaiter40(this, void 0, void 0, function* () {
      throwIfMissing({ artist_id });
      if (!artist_id.startsWith("UC") && !artist_id.startsWith("FEmusic_library_privately_owned_artist"))
        throw new InnertubeError("Invalid artist id", artist_id);
      const response = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        browseId: artist_id
      });
      return new Artist_default(response, __classPrivateFieldGet45(this, _Music_actions, "f"));
    });
  }
  getAlbum(album_id) {
    return __awaiter40(this, void 0, void 0, function* () {
      throwIfMissing({ album_id });
      if (!album_id.startsWith("MPR") && !album_id.startsWith("FEmusic_library_privately_owned_release"))
        throw new InnertubeError("Invalid album id", album_id);
      const response = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        browseId: album_id
      });
      return new Album_default(response);
    });
  }
  getPlaylist(playlist_id) {
    return __awaiter40(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id });
      if (!playlist_id.startsWith("VL")) {
        playlist_id = `VL${playlist_id}`;
      }
      const response = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        browseId: playlist_id
      });
      return new Playlist_default3(response, __classPrivateFieldGet45(this, _Music_actions, "f"));
    });
  }
  getUpNext(video_id, automix = true) {
    var _a5, _b, _c;
    return __awaiter40(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const data = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/next", {
        videoId: video_id,
        client: "YTMUSIC",
        parse: true
      });
      const tabs = (_a5 = data.contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(Tab_default);
      const tab = tabs === null || tabs === void 0 ? void 0 : tabs.first();
      if (!tab)
        throw new InnertubeError("Could not find target tab.");
      const music_queue = (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(MusicQueue_default);
      if (!music_queue || !music_queue.content)
        throw new InnertubeError("Music queue was empty, the given id is probably invalid.", music_queue);
      const playlist_panel = music_queue.content.as(PlaylistPanel_default);
      if (!playlist_panel.playlist_id && automix) {
        const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo_default);
        if (!automix_preview_video)
          throw new InnertubeError("Automix item not found");
        const page = yield (_c = automix_preview_video.playlist_video) === null || _c === void 0 ? void 0 : _c.endpoint.call(__classPrivateFieldGet45(this, _Music_actions, "f"), {
          videoId: video_id,
          client: "YTMUSIC",
          parse: true
        });
        if (!page || !page.contents_memo)
          throw new InnertubeError("Could not fetch automix");
        return page.contents_memo.getType(PlaylistPanel_default).first();
      }
      return playlist_panel;
    });
  }
  getRelated(video_id) {
    var _a5;
    return __awaiter40(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const data = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/next", {
        videoId: video_id,
        client: "YTMUSIC",
        parse: true
      });
      const tabs = (_a5 = data.contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(Tab_default);
      const tab = tabs === null || tabs === void 0 ? void 0 : tabs.matchCondition((tab2) => {
        var _a6, _b;
        return ((_b = (_a6 = tab2.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a6 === void 0 ? void 0 : _a6.browseEndpointContextMusicConfig) === null || _b === void 0 ? void 0 : _b.pageType) === "MUSIC_PAGE_TYPE_TRACK_RELATED";
      });
      if (!tab)
        throw new InnertubeError("Could not find target tab.");
      const page = yield tab.endpoint.call(__classPrivateFieldGet45(this, _Music_actions, "f"), { client: "YTMUSIC", parse: true });
      if (!page.contents)
        throw new InnertubeError("Unexpected response", page);
      const shelves = page.contents.item().as(SectionList_default).contents.as(MusicCarouselShelf_default, MusicDescriptionShelf_default);
      return shelves;
    });
  }
  getLyrics(video_id) {
    var _a5;
    return __awaiter40(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const data = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/next", {
        videoId: video_id,
        client: "YTMUSIC",
        parse: true
      });
      const tabs = (_a5 = data.contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(Tab_default);
      const tab = tabs === null || tabs === void 0 ? void 0 : tabs.matchCondition((tab2) => {
        var _a6, _b;
        return ((_b = (_a6 = tab2.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a6 === void 0 ? void 0 : _a6.browseEndpointContextMusicConfig) === null || _b === void 0 ? void 0 : _b.pageType) === "MUSIC_PAGE_TYPE_TRACK_LYRICS";
      });
      if (!tab)
        throw new InnertubeError("Could not find target tab.");
      const page = yield tab.endpoint.call(__classPrivateFieldGet45(this, _Music_actions, "f"), { client: "YTMUSIC", parse: true });
      if (!page.contents)
        throw new InnertubeError("Unexpected response", page);
      if (page.contents.item().key("type").string() === "Message")
        throw new InnertubeError(page.contents.item().as(Message_default).text, video_id);
      const section_list = page.contents.item().as(SectionList_default).contents;
      return section_list.firstOfType(MusicDescriptionShelf_default);
    });
  }
  getRecap() {
    return __awaiter40(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/browse", {
        browseId: "FEmusic_listening_review",
        client: "YTMUSIC_ANDROID"
      });
      return new Recap_default(response, __classPrivateFieldGet45(this, _Music_actions, "f"));
    });
  }
  getSearchSuggestions(query) {
    var _a5, _b;
    return __awaiter40(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet45(this, _Music_actions, "f").execute("/music/get_search_suggestions", {
        parse: true,
        input: query,
        client: "YTMUSIC"
      });
      const search_suggestions_section = (_b = (_a5 = response.contents_memo) === null || _a5 === void 0 ? void 0 : _a5.getType(SearchSuggestionsSection_default)) === null || _b === void 0 ? void 0 : _b[0];
      if (!(search_suggestions_section === null || search_suggestions_section === void 0 ? void 0 : search_suggestions_section.contents.is_array))
        return observe([]);
      return search_suggestions_section === null || search_suggestions_section === void 0 ? void 0 : search_suggestions_section.contents.array();
    });
  }
};
__name(Music, "Music");
_Music_session = /* @__PURE__ */ new WeakMap(), _Music_actions = /* @__PURE__ */ new WeakMap(), _Music_instances = /* @__PURE__ */ new WeakSet(), _Music_fetchInfoFromVideoId = /* @__PURE__ */ __name(function _Music_fetchInfoFromVideoId2(video_id) {
  var _a5;
  return __awaiter40(this, void 0, void 0, function* () {
    const cpn = generateRandomString(16);
    const initial_info = __classPrivateFieldGet45(this, _Music_actions, "f").execute("/player", {
      cpn,
      client: "YTMUSIC",
      videoId: video_id,
      playbackContext: {
        contentPlaybackContext: {
          signatureTimestamp: ((_a5 = __classPrivateFieldGet45(this, _Music_session, "f").player) === null || _a5 === void 0 ? void 0 : _a5.sts) || 0
        }
      }
    });
    const continuation = __classPrivateFieldGet45(this, _Music_actions, "f").execute("/next", {
      client: "YTMUSIC",
      videoId: video_id
    });
    const response = yield Promise.all([initial_info, continuation]);
    return new TrackInfo_default(response, __classPrivateFieldGet45(this, _Music_actions, "f"), cpn);
  });
}, "_Music_fetchInfoFromVideoId"), _Music_fetchInfoFromListItem = /* @__PURE__ */ __name(function _Music_fetchInfoFromListItem2(list_item) {
  var _a5;
  return __awaiter40(this, void 0, void 0, function* () {
    if (!list_item)
      throw new InnertubeError("List item cannot be undefined");
    if (!list_item.endpoint)
      throw new Error("This item does not have an endpoint.");
    const cpn = generateRandomString(16);
    const initial_info = list_item.endpoint.call(__classPrivateFieldGet45(this, _Music_actions, "f"), {
      cpn,
      client: "YTMUSIC",
      playbackContext: {
        contentPlaybackContext: {
          signatureTimestamp: ((_a5 = __classPrivateFieldGet45(this, _Music_session, "f").player) === null || _a5 === void 0 ? void 0 : _a5.sts) || 0
        }
      }
    });
    const continuation = list_item.endpoint.call(__classPrivateFieldGet45(this, _Music_actions, "f"), {
      client: "YTMUSIC",
      enablePersistentPlaylistPanel: true,
      override_endpoint: "/next"
    });
    const response = yield Promise.all([initial_info, continuation]);
    return new TrackInfo_default(response, __classPrivateFieldGet45(this, _Music_actions, "f"), cpn);
  });
}, "_Music_fetchInfoFromListItem");
var Music_default = Music;

// dist/src/core/PlaylistManager.js
var __awaiter41 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet43 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet46 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlaylistManager_actions;
var PlaylistManager = class {
  constructor(actions) {
    _PlaylistManager_actions.set(this, void 0);
    __classPrivateFieldSet43(this, _PlaylistManager_actions, actions, "f");
  }
  create(title, video_ids) {
    return __awaiter41(this, void 0, void 0, function* () {
      throwIfMissing({ title, video_ids });
      if (!__classPrivateFieldGet46(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield __classPrivateFieldGet46(this, _PlaylistManager_actions, "f").execute("/playlist/create", {
        title,
        ids: video_ids,
        parse: false
      });
      return {
        success: response.success,
        status_code: response.status_code,
        playlist_id: response.data.playlistId,
        data: response.data
      };
    });
  }
  delete(playlist_id) {
    return __awaiter41(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id });
      if (!__classPrivateFieldGet46(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield __classPrivateFieldGet46(this, _PlaylistManager_actions, "f").execute("playlist/delete", { playlistId: playlist_id });
      return {
        playlist_id,
        success: response.success,
        status_code: response.status_code,
        data: response.data
      };
    });
  }
  addVideos(playlist_id, video_ids) {
    return __awaiter41(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id, video_ids });
      if (!__classPrivateFieldGet46(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield __classPrivateFieldGet46(this, _PlaylistManager_actions, "f").execute("/browse/edit_playlist", {
        playlistId: playlist_id,
        actions: video_ids.map((id) => ({
          action: "ACTION_ADD_VIDEO",
          addedVideoId: id
        })),
        parse: false
      });
      return {
        playlist_id,
        action_result: response.data.actions
      };
    });
  }
  removeVideos(playlist_id, video_ids) {
    return __awaiter41(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id, video_ids });
      if (!__classPrivateFieldGet46(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const info = yield __classPrivateFieldGet46(this, _PlaylistManager_actions, "f").execute("/browse", {
        browseId: `VL${playlist_id}`,
        parse: true
      });
      const playlist = new Playlist_default2(__classPrivateFieldGet46(this, _PlaylistManager_actions, "f"), info, true);
      if (!playlist.info.is_editable)
        throw new InnertubeError("This playlist cannot be edited.", playlist_id);
      const payload = {
        playlistId: playlist_id,
        actions: []
      };
      const getSetVideoIds = /* @__PURE__ */ __name((pl) => __awaiter41(this, void 0, void 0, function* () {
        const videos = pl.videos.filter((video) => video_ids.includes(video.key("id").string()));
        videos.forEach((video) => payload.actions.push({
          action: "ACTION_REMOVE_VIDEO",
          setVideoId: video.key("set_video_id").string()
        }));
        if (payload.actions.length < video_ids.length) {
          const next = yield pl.getContinuation();
          return getSetVideoIds(next);
        }
      }), "getSetVideoIds");
      yield getSetVideoIds(playlist);
      if (!payload.actions.length)
        throw new InnertubeError("Given video ids were not found in this playlist.", video_ids);
      const response = yield __classPrivateFieldGet46(this, _PlaylistManager_actions, "f").execute("/browse/edit_playlist", Object.assign(Object.assign({}, payload), { parse: false }));
      return {
        playlist_id,
        action_result: response.data.actions
      };
    });
  }
  moveVideo(playlist_id, moved_video_id, predecessor_video_id) {
    return __awaiter41(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id, moved_video_id, predecessor_video_id });
      if (!__classPrivateFieldGet46(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const info = yield __classPrivateFieldGet46(this, _PlaylistManager_actions, "f").execute("/browse", {
        browseId: `VL${playlist_id}`,
        parse: true
      });
      const playlist = new Playlist_default2(__classPrivateFieldGet46(this, _PlaylistManager_actions, "f"), info, true);
      if (!playlist.info.is_editable)
        throw new InnertubeError("This playlist cannot be edited.", playlist_id);
      const payload = {
        playlistId: playlist_id,
        actions: []
      };
      let set_video_id_0, set_video_id_1;
      const getSetVideoIds = /* @__PURE__ */ __name((pl) => __awaiter41(this, void 0, void 0, function* () {
        const video_0 = pl.videos.find((video) => moved_video_id === video.key("id").string());
        const video_1 = pl.videos.find((video) => predecessor_video_id === video.key("id").string());
        set_video_id_0 = set_video_id_0 || (video_0 === null || video_0 === void 0 ? void 0 : video_0.key("set_video_id").string());
        set_video_id_1 = set_video_id_1 || (video_1 === null || video_1 === void 0 ? void 0 : video_1.key("set_video_id").string());
        if (!set_video_id_0 || !set_video_id_1) {
          const next = yield pl.getContinuation();
          return getSetVideoIds(next);
        }
      }), "getSetVideoIds");
      yield getSetVideoIds(playlist);
      payload.actions.push({
        action: "ACTION_MOVE_VIDEO_AFTER",
        setVideoId: set_video_id_0,
        movedSetVideoIdPredecessor: set_video_id_1
      });
      const response = yield __classPrivateFieldGet46(this, _PlaylistManager_actions, "f").execute("/browse/edit_playlist", Object.assign(Object.assign({}, payload), { parse: false }));
      return {
        playlist_id,
        action_result: response.data.actions
      };
    });
  }
};
__name(PlaylistManager, "PlaylistManager");
_PlaylistManager_actions = /* @__PURE__ */ new WeakMap();
var PlaylistManager_default = PlaylistManager;

// dist/src/core/Studio.js
var __awaiter42 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet44 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet47 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Studio_instances;
var _Studio_session;
var _Studio_getInitialUploadData;
var _Studio_uploadVideo;
var _Studio_setVideoMetadata;
var Studio = class {
  constructor(session) {
    _Studio_instances.add(this);
    _Studio_session.set(this, void 0);
    __classPrivateFieldSet44(this, _Studio_session, session, "f");
  }
  setThumbnail(video_id, buffer) {
    return __awaiter42(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet47(this, _Studio_session, "f").logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      if (!video_id || !buffer)
        throw new MissingParamError("One or more parameters are missing.");
      const payload = proto_default.encodeCustomThumbnailPayload(video_id, buffer);
      const response = yield __classPrivateFieldGet47(this, _Studio_session, "f").actions.execute("/video_manager/metadata_update", {
        protobuf: true,
        serialized_data: payload
      });
      return response;
    });
  }
  updateVideoMetadata(video_id, metadata) {
    return __awaiter42(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet47(this, _Studio_session, "f").logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const payload = proto_default.encodeVideoMetadataPayload(video_id, metadata);
      const response = yield __classPrivateFieldGet47(this, _Studio_session, "f").actions.execute("/video_manager/metadata_update", {
        protobuf: true,
        serialized_data: payload
      });
      return response;
    });
  }
  upload(file, metadata = {}) {
    return __awaiter42(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet47(this, _Studio_session, "f").logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const initial_data = yield __classPrivateFieldGet47(this, _Studio_instances, "m", _Studio_getInitialUploadData).call(this);
      const upload_result = yield __classPrivateFieldGet47(this, _Studio_instances, "m", _Studio_uploadVideo).call(this, initial_data.upload_url, file);
      if (upload_result.status !== "STATUS_SUCCESS")
        throw new InnertubeError("Could not process video.");
      const response = yield __classPrivateFieldGet47(this, _Studio_instances, "m", _Studio_setVideoMetadata).call(this, initial_data, upload_result, metadata);
      return response;
    });
  }
};
__name(Studio, "Studio");
_Studio_session = /* @__PURE__ */ new WeakMap(), _Studio_instances = /* @__PURE__ */ new WeakSet(), _Studio_getInitialUploadData = /* @__PURE__ */ __name(function _Studio_getInitialUploadData2() {
  return __awaiter42(this, void 0, void 0, function* () {
    const frontend_upload_id = `innertube_android:${Platform.shim.uuidv4()}:0:v=3,api=1,cf=3`;
    const payload = {
      frontendUploadId: frontend_upload_id,
      deviceDisplayName: "Pixel 6 Pro",
      fileId: `goog-edited-video://generated?videoFileUri=content://media/external/video/media/${Platform.shim.uuidv4()}`,
      mp4MoovAtomRelocationStatus: "UNSUPPORTED",
      transcodeResult: "DISABLED",
      connectionType: "WIFI"
    };
    const response = yield __classPrivateFieldGet47(this, _Studio_session, "f").http.fetch("/upload/youtubei", {
      baseURL: Constants_exports.URLS.YT_UPLOAD,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-goog-upload-command": "start",
        "x-goog-upload-protocol": "resumable"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok)
      throw new InnertubeError("Could not get initial upload data");
    return {
      frontend_upload_id,
      upload_id: response.headers.get("x-guploader-uploadid"),
      upload_url: response.headers.get("x-goog-upload-url"),
      scotty_resource_id: response.headers.get("x-goog-upload-header-scotty-resource-id"),
      chunk_granularity: response.headers.get("x-goog-upload-chunk-granularity")
    };
  });
}, "_Studio_getInitialUploadData"), _Studio_uploadVideo = /* @__PURE__ */ __name(function _Studio_uploadVideo2(upload_url, file) {
  return __awaiter42(this, void 0, void 0, function* () {
    const response = yield __classPrivateFieldGet47(this, _Studio_session, "f").http.fetch_function(upload_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-goog-upload-command": "upload, finalize",
        "x-goog-upload-file-name": `file-${Date.now()}`,
        "x-goog-upload-offset": "0"
      },
      body: file
    });
    if (!response.ok)
      throw new InnertubeError("Could not upload video");
    const data = yield response.json();
    return data;
  });
}, "_Studio_uploadVideo"), _Studio_setVideoMetadata = /* @__PURE__ */ __name(function _Studio_setVideoMetadata2(initial_data, upload_result, metadata) {
  return __awaiter42(this, void 0, void 0, function* () {
    const metadata_payload = {
      resourceId: {
        scottyResourceId: {
          id: upload_result.scottyResourceId
        }
      },
      frontendUploadId: initial_data.frontend_upload_id,
      initialMetadata: {
        title: {
          newTitle: metadata.title || new Date().toDateString()
        },
        description: {
          newDescription: metadata.description || "",
          shouldSegment: true
        },
        privacy: {
          newPrivacy: metadata.privacy || "PRIVATE"
        },
        draftState: {
          isDraft: metadata.is_draft || false
        }
      }
    };
    const response = yield __classPrivateFieldGet47(this, _Studio_session, "f").actions.execute("/upload/createvideo", Object.assign({ client: "ANDROID" }, metadata_payload));
    return response;
  });
}, "_Studio_setVideoMetadata");
var Studio_default = Studio;

// dist/src/Innertube.js
var __awaiter43 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Innertube = class {
  constructor(session) {
    this.session = session;
    this.account = new AccountManager_default(this.session.actions);
    this.playlist = new PlaylistManager_default(this.session.actions);
    this.interact = new InteractionManager_default(this.session.actions);
    this.music = new Music_default(this.session);
    this.studio = new Studio_default(this.session);
    this.kids = new Kids_default(this.session);
    this.actions = this.session.actions;
  }
  static create(config = {}) {
    return __awaiter43(this, void 0, void 0, function* () {
      return new Innertube(yield Session.create(config));
    });
  }
  getInfo(video_id, client) {
    return __awaiter43(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const cpn = generateRandomString(16);
      const initial_info = this.actions.getVideoInfo(video_id, cpn, client);
      const continuation = this.actions.execute("/next", { videoId: video_id });
      const response = yield Promise.all([initial_info, continuation]);
      return new VideoInfo_default(response, this.actions, this.session.player, cpn);
    });
  }
  getBasicInfo(video_id, client) {
    return __awaiter43(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const cpn = generateRandomString(16);
      const response = yield this.actions.getVideoInfo(video_id, cpn, client);
      return new VideoInfo_default([response], this.actions, this.session.player, cpn);
    });
  }
  search(query, filters = {}) {
    return __awaiter43(this, void 0, void 0, function* () {
      throwIfMissing({ query });
      const args = Object.assign({ query }, {
        params: filters ? proto_default.encodeSearchFilters(filters) : void 0
      });
      const response = yield this.actions.execute("/search", args);
      return new Search_default(this.actions, response);
    });
  }
  getSearchSuggestions(query) {
    return __awaiter43(this, void 0, void 0, function* () {
      throwIfMissing({ query });
      const url = new URL(`${Constants_default.URLS.YT_SUGGESTIONS}search`);
      url.searchParams.set("q", query);
      url.searchParams.set("hl", this.session.context.client.hl);
      url.searchParams.set("gl", this.session.context.client.gl);
      url.searchParams.set("ds", "yt");
      url.searchParams.set("client", "youtube");
      url.searchParams.set("xssi", "t");
      url.searchParams.set("oe", "UTF");
      const response = yield this.session.http.fetch(url);
      const response_data = yield response.text();
      const data = JSON.parse(response_data.replace(")]}'", ""));
      const suggestions = data[1].map((suggestion) => suggestion[0]);
      return suggestions;
    });
  }
  getComments(video_id, sort_by) {
    return __awaiter43(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const payload = proto_default.encodeCommentsSectionParams(video_id, {
        sort_by: sort_by || "TOP_COMMENTS"
      });
      const response = yield this.actions.execute("/next", { continuation: payload });
      return new Comments_default(this.actions, response.data);
    });
  }
  getHomeFeed() {
    return __awaiter43(this, void 0, void 0, function* () {
      const response = yield this.actions.execute("/browse", { browseId: "FEwhat_to_watch" });
      return new HomeFeed(this.actions, response);
    });
  }
  getLibrary() {
    return __awaiter43(this, void 0, void 0, function* () {
      const response = yield this.actions.execute("/browse", { browseId: "FElibrary" });
      return new Library_default(this.actions, response);
    });
  }
  getHistory() {
    return __awaiter43(this, void 0, void 0, function* () {
      const response = yield this.actions.execute("/browse", { browseId: "FEhistory" });
      return new History_default(this.actions, response);
    });
  }
  getTrending() {
    return __awaiter43(this, void 0, void 0, function* () {
      const response = yield this.actions.execute("/browse", { browseId: "FEtrending", parse: true });
      return new TabbedFeed_default(this.actions, response);
    });
  }
  getSubscriptionsFeed() {
    return __awaiter43(this, void 0, void 0, function* () {
      const response = yield this.actions.execute("/browse", { browseId: "FEsubscriptions", parse: true });
      return new Feed_default(this.actions, response);
    });
  }
  getChannel(id) {
    return __awaiter43(this, void 0, void 0, function* () {
      throwIfMissing({ id });
      const response = yield this.actions.execute("/browse", { browseId: id });
      return new Channel2(this.actions, response);
    });
  }
  getNotifications() {
    return __awaiter43(this, void 0, void 0, function* () {
      const response = yield this.actions.execute("/notification/get_notification_menu", { notificationsMenuRequestType: "NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX" });
      return new NotificationsMenu_default(this.actions, response);
    });
  }
  getUnseenNotificationsCount() {
    var _a5, _b, _c, _d;
    return __awaiter43(this, void 0, void 0, function* () {
      const response = yield this.actions.execute("/notification/get_unseen_count");
      return ((_a5 = response.data) === null || _a5 === void 0 ? void 0 : _a5.unseenCount) || ((_d = (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.actions) === null || _c === void 0 ? void 0 : _c[0].updateNotificationsUnseenCountAction) === null || _d === void 0 ? void 0 : _d.unseenCount) || 0;
    });
  }
  getPlaylist(id) {
    return __awaiter43(this, void 0, void 0, function* () {
      throwIfMissing({ id });
      if (!id.startsWith("VL")) {
        id = `VL${id}`;
      }
      const response = yield this.actions.execute("/browse", { browseId: id });
      return new Playlist_default2(this.actions, response);
    });
  }
  getHashtag(hashtag) {
    return __awaiter43(this, void 0, void 0, function* () {
      throwIfMissing({ hashtag });
      const params = proto_default.encodeHashtag(hashtag);
      const response = yield this.actions.execute("/browse", { browseId: "FEhashtag", params });
      return new HashtagFeed(this.actions, response);
    });
  }
  getStreamingData(video_id, options = {}) {
    return __awaiter43(this, void 0, void 0, function* () {
      const info = yield this.getBasicInfo(video_id);
      return info.chooseFormat(options);
    });
  }
  download(video_id, options) {
    return __awaiter43(this, void 0, void 0, function* () {
      const info = yield this.getBasicInfo(video_id, options === null || options === void 0 ? void 0 : options.client);
      return info.download(options);
    });
  }
  resolveURL(url) {
    return __awaiter43(this, void 0, void 0, function* () {
      const response = yield this.actions.execute("/navigation/resolve_url", { url, parse: true });
      return response.endpoint;
    });
  }
  call(endpoint, args) {
    return endpoint.call(this.actions, args);
  }
};
__name(Innertube, "Innertube");
var Innertube_default = Innertube;

// dist/src/types/index.js
var types_exports = {};

// dist/src/platform/lib.js
var lib_default = Innertube_default;

// dist/src/platform/web.js
var __awaiter44 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet45 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet48 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Cache_instances;
var _Cache_persistent_directory;
var _Cache_persistent;
var _Cache_getBrowserDB;
var Cache = class {
  constructor(persistent = false, persistent_directory) {
    _Cache_instances.add(this);
    _Cache_persistent_directory.set(this, void 0);
    _Cache_persistent.set(this, void 0);
    __classPrivateFieldSet45(this, _Cache_persistent_directory, persistent_directory || "", "f");
    __classPrivateFieldSet45(this, _Cache_persistent, persistent, "f");
  }
  get cache_dir() {
    return __classPrivateFieldGet48(this, _Cache_persistent, "f") ? __classPrivateFieldGet48(this, _Cache_persistent_directory, "f") : "";
  }
  get(key) {
    return __awaiter44(this, void 0, void 0, function* () {
      const db = yield __classPrivateFieldGet48(this, _Cache_instances, "m", _Cache_getBrowserDB).call(this);
      if (!db)
        return;
      return new Promise((resolve, reject) => {
        const request = db.transaction("kv-store", "readonly").objectStore("kv-store").get(key);
        request.onerror = reject;
        request.onsuccess = function() {
          var _a5;
          const result = (_a5 = this.result) === null || _a5 === void 0 ? void 0 : _a5.v;
          resolve(result ? result.buffer : void 0);
        };
      });
    });
  }
  set(key, value) {
    return __awaiter44(this, void 0, void 0, function* () {
      const db = yield __classPrivateFieldGet48(this, _Cache_instances, "m", _Cache_getBrowserDB).call(this);
      if (!db)
        return;
      return new Promise((resolve, reject) => {
        const request = db.transaction("kv-store", "readwrite").objectStore("kv-store").put({ k: key, v: value });
        request.onerror = reject;
        request.onsuccess = () => resolve();
      });
    });
  }
  remove(key) {
    return __awaiter44(this, void 0, void 0, function* () {
      const db = yield __classPrivateFieldGet48(this, _Cache_instances, "m", _Cache_getBrowserDB).call(this);
      if (!db)
        return;
      return new Promise((resolve, reject) => {
        const request = db.transaction("kv-store", "readwrite").objectStore("kv-store").delete(key);
        request.onerror = reject;
        request.onsuccess = () => resolve();
      });
    });
  }
};
__name(Cache, "Cache");
_Cache_persistent_directory = /* @__PURE__ */ new WeakMap(), _Cache_persistent = /* @__PURE__ */ new WeakMap(), _Cache_instances = /* @__PURE__ */ new WeakSet(), _Cache_getBrowserDB = /* @__PURE__ */ __name(function _Cache_getBrowserDB2() {
  const indexedDB = Reflect.get(globalThis, "indexedDB") || Reflect.get(globalThis, "webkitIndexedDB") || Reflect.get(globalThis, "mozIndexedDB") || Reflect.get(globalThis, "msIndexedDB");
  if (!indexedDB)
    return console.log("IndexedDB is not supported. No cache will be used.");
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("youtubei.js", 1);
    request.onsuccess = function() {
      resolve(this.result);
    };
    request.onerror = function(event) {
      reject("indexedDB request error");
      console.error(event);
    };
    request.onupgradeneeded = function() {
      const store = this.result.createObjectStore("kv-store", {
        keyPath: "k"
      });
      store.transaction.oncomplete = function() {
        resolve(this.db);
      };
    };
  });
}, "_Cache_getBrowserDB");
Platform.load({
  runtime: "browser",
  server: false,
  info: {
    version: package_default.version,
    bugs_url: package_default.bugs.url,
    repo_url: package_default.homepage.split("#")[0]
  },
  Cache,
  sha1Hash,
  uuidv4() {
    var _a5;
    if ((_a5 = globalThis.crypto) === null || _a5 === void 0 ? void 0 : _a5.randomUUID()) {
      return globalThis.crypto.randomUUID();
    }
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (cc) => {
      const c = parseInt(cc);
      return (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
  },
  eval: evaluate,
  DOMParser: globalThis.DOMParser,
  serializeDOM(document) {
    return new XMLSerializer().serializeToString(document);
  },
  fetch: globalThis.fetch,
  Request: globalThis.Request,
  Response: globalThis.Response,
  Headers: globalThis.Headers,
  FormData: globalThis.FormData,
  File: globalThis.File,
  ReadableStream: globalThis.ReadableStream
});
var web_default = lib_default;
export {
  AccountManager_default as AccountManager,
  Actions_default as Actions,
  AppendContinuationItemsAction2 as AppendContinuationItemsAction,
  ClientType,
  Constants_exports as Constants,
  Continuation,
  EventEmitterLike as EventEmitter,
  Feed_default as Feed,
  FilterableFeed_default as FilterableFeed,
  GridContinuation,
  HTTPClient,
  Innertube_default as Innertube,
  InteractionManager_default as InteractionManager,
  ItemSectionContinuation,
  Kids_default as Kids,
  LiveChatContinuation,
  Misc,
  Music_default as Music,
  MusicPlaylistShelfContinuation,
  MusicShelfContinuation,
  NavigateAction,
  OAuth_default as OAuth,
  parser_default as Parser,
  Platform,
  Player,
  PlaylistManager_default as PlaylistManager,
  PlaylistPanelContinuation,
  proto_default as Proto,
  ReloadContinuationItemsCommand,
  SectionListContinuation,
  Session,
  Studio_default as Studio,
  TabbedFeed_default as TabbedFeed,
  types_exports as Types,
  UniversalCache,
  Utils_exports as Utils,
  youtube_exports as YT,
  ytkids_exports as YTKids,
  ytmusic_exports as YTMusic,
  YTNodes,
  web_default as default
};
//# sourceMappingURL=browser.js.map
