var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
import { removeItem } from "../array.js";
export function defer() {
    const transit = {};
    const result = new Promise((resolve, reject) => Object.assign(transit, { resolve, reject }));
    return Object.assign(result, transit);
}
export function createSubscribeFn(next, wait = Promise.resolve()) {
    const observers = [];
    (() => __awaiter(this, void 0, void 0, function* () {
        try {
            yield wait;
            while (observers.length) {
                const [value, done] = yield next();
                for (const observer of observers)
                    observer.next(value);
                if (done)
                    break;
            }
        }
        catch (err) {
            for (const observer of observers)
                observer.error(err);
        }
        finally {
            for (const observer of observers)
                observer.complete();
        }
    }))();
    return (observer) => {
        observers.push(observer);
        return () => {
            observer.complete();
            removeItem(observers, observer);
        };
    };
}
export function subscribeFnToAsyncGenerator(subscribe) {
    return __asyncGenerator(this, arguments, function* subscribeFnToAsyncGenerator_1() {
        let finished = false;
        let deferred = defer();
        const observer = {
            next(value) {
                const result = deferred;
                deferred = defer();
                result.resolve(value);
            },
            error(exception) {
                const result = deferred;
                deferred = defer();
                result.reject(exception);
            },
            complete() {
                finished = true;
                deferred.resolve(null);
            },
        };
        const unsubscribe = subscribe(observer);
        try {
            while (true) {
                const value = yield __await(deferred);
                if (finished)
                    break;
                yield yield __await(value);
            }
        }
        finally {
            unsubscribe();
        }
    });
}
//# sourceMappingURL=observer.js.map