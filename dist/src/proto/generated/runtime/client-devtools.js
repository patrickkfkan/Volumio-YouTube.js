var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
import { createEventEmitter, } from "./async/event-emitter.js";
export const devtoolsKey = "@pbkit/devtools";
export function registerRemoteDevtools(host) {
    return getDevtoolsConfig().on("*", (event, type) => {
        fetch(`${host}/send`, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({ event, type }),
        });
    });
}
export function getDevtoolsConfig() {
    const global = globalThis;
    if (!global[devtoolsKey]) {
        const devtoolsConfig = createDevtoolsConfig();
        return global[devtoolsKey] = devtoolsConfig;
    }
    else if (Array.isArray(global[devtoolsKey])) {
        const devtoolsConfig = createDevtoolsConfig();
        for (const fn of global[devtoolsKey]) {
            if (typeof fn !== "function")
                continue;
            fn(devtoolsConfig);
        }
        return global[devtoolsKey] = devtoolsConfig;
    }
    else {
        return global[devtoolsKey];
    }
}
function createDevtoolsConfig() {
    const devtoolsConfig = Object.assign({ configId: String(Date.now()), requestIdCounter: 0 }, createEventEmitter());
    return devtoolsConfig;
}
export function wrapRpcClientImpl(config) {
    return function devtoolsRpcClientImpl(methodDescriptor) {
        const { rpcClientImpl, devtoolsConfig, tags } = config;
        const rpcMethodImpl = rpcClientImpl(methodDescriptor);
        return function devtoolsRpcMethodImpl(req, metadata) {
            const configId = devtoolsConfig.configId;
            const requestId = devtoolsConfig.requestIdCounter++;
            devtoolsConfig.emit("request", {
                configId,
                requestId,
                servicePath: methodDescriptor.service.serviceName,
                rpcName: methodDescriptor.methodName,
                metadataJson: toJson(metadata),
                tags,
            });
            const rpcMethodResult = rpcMethodImpl(mapAsyncGenerator(req, (payload) => {
                devtoolsConfig.emit("request-payload", {
                    configId,
                    requestId,
                    payloadJson: methodDescriptor.requestType.serializeJson(payload),
                    payloadProto: methodDescriptor.requestType.serializeBinary(payload),
                });
                return payload;
            }, (error) => {
                devtoolsConfig.emit("request-error", {
                    configId,
                    requestId,
                    errorMessage: getErrorMessage(error),
                });
            }), metadata);
            const resAsyncGenerator = mapAsyncGenerator(rpcMethodResult[0], (payload) => {
                devtoolsConfig.emit("response-payload", {
                    configId,
                    requestId,
                    payloadJson: methodDescriptor.responseType.serializeJson(payload),
                    payloadProto: methodDescriptor.responseType.serializeBinary(payload),
                });
                return payload;
            }, (error) => {
                devtoolsConfig.emit("response-error", {
                    configId,
                    requestId,
                    errorMessage: getErrorMessage(error),
                });
            });
            const headerPromise = rpcMethodResult[1].then((header) => {
                devtoolsConfig.emit("response", {
                    configId,
                    requestId,
                    headerJson: toJson(header),
                });
                return header;
            });
            const trailerPromise = rpcMethodResult[2].then((trailer) => {
                devtoolsConfig.emit("response-trailer", {
                    configId,
                    requestId,
                    trailerJson: toJson(trailer),
                });
                return trailer;
            });
            return [resAsyncGenerator, headerPromise, trailerPromise];
        };
    };
}
function toJson(value) {
    if ((!value) || (typeof value !== "object"))
        return "{}";
    return JSON.stringify(value);
}
function mapAsyncGenerator(asyncGenerator, fn, catchFn) {
    return __asyncGenerator(this, arguments, function* mapAsyncGenerator_1() {
        var _a, e_1, _b, _c;
        try {
            try {
                for (var _d = true, asyncGenerator_1 = __asyncValues(asyncGenerator), asyncGenerator_1_1; asyncGenerator_1_1 = yield __await(asyncGenerator_1.next()), _a = asyncGenerator_1_1.done, !_a;) {
                    _c = asyncGenerator_1_1.value;
                    _d = false;
                    try {
                        const value = _c;
                        yield yield __await(yield __await(fn(value)));
                    }
                    finally {
                        _d = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = asyncGenerator_1.return)) yield __await(_b.call(asyncGenerator_1));
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        catch (error) {
            catchFn(error);
            throw error;
        }
    });
}
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.stack || error.message;
    return String(error);
}
//# sourceMappingURL=client-devtools.js.map