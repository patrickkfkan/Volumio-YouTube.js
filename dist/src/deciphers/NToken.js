"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NTokenTransforms = exports.NTokenTransformOpType = exports.NTokenTransformOperation = void 0;
const Constants_1 = require("../utils/Constants");
const Utils_1 = require("../utils/Utils");
var NTokenTransformOperation;
(function (NTokenTransformOperation) {
    NTokenTransformOperation[NTokenTransformOperation["NO_OP"] = 0] = "NO_OP";
    NTokenTransformOperation[NTokenTransformOperation["PUSH"] = 1] = "PUSH";
    NTokenTransformOperation[NTokenTransformOperation["REVERSE_1"] = 2] = "REVERSE_1";
    NTokenTransformOperation[NTokenTransformOperation["REVERSE_2"] = 3] = "REVERSE_2";
    NTokenTransformOperation[NTokenTransformOperation["SPLICE"] = 4] = "SPLICE";
    NTokenTransformOperation[NTokenTransformOperation["SWAP0_1"] = 5] = "SWAP0_1";
    NTokenTransformOperation[NTokenTransformOperation["SWAP0_2"] = 6] = "SWAP0_2";
    NTokenTransformOperation[NTokenTransformOperation["ROTATE_1"] = 7] = "ROTATE_1";
    NTokenTransformOperation[NTokenTransformOperation["ROTATE_2"] = 8] = "ROTATE_2";
    NTokenTransformOperation[NTokenTransformOperation["BASE64_DIA"] = 9] = "BASE64_DIA";
    NTokenTransformOperation[NTokenTransformOperation["TRANSLATE_1"] = 10] = "TRANSLATE_1";
    NTokenTransformOperation[NTokenTransformOperation["TRANSLATE_2"] = 11] = "TRANSLATE_2";
})(NTokenTransformOperation = exports.NTokenTransformOperation || (exports.NTokenTransformOperation = {}));
var NTokenTransformOpType;
(function (NTokenTransformOpType) {
    NTokenTransformOpType[NTokenTransformOpType["FUNC"] = 0] = "FUNC";
    NTokenTransformOpType[NTokenTransformOpType["N_ARR"] = 1] = "N_ARR";
    NTokenTransformOpType[NTokenTransformOpType["LITERAL"] = 2] = "LITERAL";
    NTokenTransformOpType[NTokenTransformOpType["REF"] = 3] = "REF";
})(NTokenTransformOpType = exports.NTokenTransformOpType || (exports.NTokenTransformOpType = {}));
const OP_LOOKUP = {
    'd.push(e)': NTokenTransformOperation.PUSH,
    'd.reverse()': NTokenTransformOperation.REVERSE_1,
    'function(d){for(var': NTokenTransformOperation.REVERSE_2,
    'd.length;d.splice(e,1)': NTokenTransformOperation.SPLICE,
    'd[0])[0])': NTokenTransformOperation.SWAP0_1,
    'f=d[0];d[0]': NTokenTransformOperation.SWAP0_2,
    'reverse().forEach': NTokenTransformOperation.ROTATE_1,
    'unshift(d.pop())': NTokenTransformOperation.ROTATE_2,
    'function(){for(var': NTokenTransformOperation.BASE64_DIA,
    'function(d,e){for(var f': NTokenTransformOperation.TRANSLATE_1,
    'function(d,e,f){var': NTokenTransformOperation.TRANSLATE_2
};
class NTokenTransforms {
    /**
     * Gets a base64 alphabet and uses it as a lookup table to modify n.
     */
    static translate1(arr, token, is_reverse_base64) {
        const characters = is_reverse_base64 && Constants_1.BASE64_DIALECT.REVERSE || Constants_1.BASE64_DIALECT.NORMAL;
        const that = token.split('');
        arr.forEach((char, index, loc) => {
            that.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(that[index]) + 64) % characters.length]);
        });
    }
    static translate2(arr, token, characters) {
        let chars_length = characters.length;
        const that = token.split('');
        arr.forEach((char, index, loc) => {
            that.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(that[index]) + index + chars_length--) % characters.length]);
        });
    }
    /**
     * Returns the requested base64 dialect, currently this is only used by 'translate2'.
     */
    static getBase64Dia(is_reverse_base64) {
        const characters = is_reverse_base64 && Constants_1.BASE64_DIALECT.REVERSE || Constants_1.BASE64_DIALECT.NORMAL;
        return characters;
    }
    /**
     * Swaps the first element with the one at the given index.
     */
    static swap0(arr, index) {
        const old_elem = arr[0];
        index = (index % arr.length + arr.length) % arr.length;
        arr[0] = arr[index];
        arr[index] = old_elem;
    }
    /**
     * Rotates elements of the array.
     */
    static rotate(arr, index) {
        index = (index % arr.length + arr.length) % arr.length;
        arr.splice(-index).reverse().forEach((el) => arr.unshift(el));
    }
    /**
     * Deletes one element at the given index.
     */
    static splice(arr, index) {
        index = (index % arr.length + arr.length) % arr.length;
        arr.splice(index, 1);
    }
    static reverse(arr) {
        arr.reverse();
    }
    static push(arr, item) {
        if (Array.isArray(arr === null || arr === void 0 ? void 0 : arr[0])) {
            arr.push([NTokenTransformOpType.LITERAL, item]);
        }
        else {
            arr.push(item);
        }
    }
}
exports.NTokenTransforms = NTokenTransforms;
const TRANSFORM_FUNCTIONS = [{
        [NTokenTransformOperation.PUSH]: NTokenTransforms.push,
        [NTokenTransformOperation.SPLICE]: NTokenTransforms.splice,
        [NTokenTransformOperation.SWAP0_1]: NTokenTransforms.swap0,
        [NTokenTransformOperation.SWAP0_2]: NTokenTransforms.swap0,
        [NTokenTransformOperation.ROTATE_1]: NTokenTransforms.rotate,
        [NTokenTransformOperation.ROTATE_2]: NTokenTransforms.rotate,
        [NTokenTransformOperation.REVERSE_1]: NTokenTransforms.reverse,
        [NTokenTransformOperation.REVERSE_2]: NTokenTransforms.reverse,
        [NTokenTransformOperation.BASE64_DIA]: () => NTokenTransforms.getBase64Dia(false),
        [NTokenTransformOperation.TRANSLATE_1]: (...args) => NTokenTransforms.translate1.apply(null, [...args, false]),
        [NTokenTransformOperation.TRANSLATE_2]: NTokenTransforms.translate2
    }, {
        [NTokenTransformOperation.PUSH]: NTokenTransforms.push,
        [NTokenTransformOperation.SPLICE]: NTokenTransforms.splice,
        [NTokenTransformOperation.SWAP0_1]: NTokenTransforms.swap0,
        [NTokenTransformOperation.SWAP0_2]: NTokenTransforms.swap0,
        [NTokenTransformOperation.ROTATE_1]: NTokenTransforms.rotate,
        [NTokenTransformOperation.ROTATE_2]: NTokenTransforms.rotate,
        [NTokenTransformOperation.REVERSE_1]: NTokenTransforms.reverse,
        [NTokenTransformOperation.REVERSE_2]: NTokenTransforms.reverse,
        [NTokenTransformOperation.BASE64_DIA]: () => NTokenTransforms.getBase64Dia(true),
        [NTokenTransformOperation.TRANSLATE_1]: (...args) => NTokenTransforms.translate1.apply(null, [...args, true]),
        [NTokenTransformOperation.TRANSLATE_2]: NTokenTransforms.translate2
    }];
class NToken {
    constructor(transformer) {
        this.transformer = transformer;
    }
    static fromSourceCode(raw) {
        var _a;
        const transformation_data = NToken.getTransformationData(raw);
        const transformations = transformation_data.map((el) => {
            var _a;
            if (el != null && typeof el != 'number') {
                const is_reverse_base64 = el.includes('case 65:');
                const func = (_a = NToken.getFunc(el)) === null || _a === void 0 ? void 0 : _a[0];
                const opcode = func ? OP_LOOKUP[func] : undefined;
                if (opcode) {
                    el = [NTokenTransformOpType.FUNC, opcode, 0 + is_reverse_base64];
                }
                else if (el == 'b') {
                    el = [NTokenTransformOpType.N_ARR];
                }
                else {
                    el = [NTokenTransformOpType.LITERAL, el];
                }
            }
            else if (el != null) {
                el = [NTokenTransformOpType.LITERAL, el];
            }
            return el;
        });
        // Fills all placeholders with the transformations array
        const placeholder_indexes = [...raw.matchAll(Constants_1.NTOKEN_REGEX.PLACEHOLDERS)].map((item) => parseInt(item[1]));
        placeholder_indexes.forEach((i) => transformations[i] = [NTokenTransformOpType.REF]);
        // Parses and emulates calls to the functions of the transformations array
        const function_body = (_a = raw.replace(/\n/g, '').match(/try\{(.*?)\}catch/s)) === null || _a === void 0 ? void 0 : _a[1];
        if (!function_body) {
            throw new Utils_1.InnertubeError('Invalid NToken transformation function.', { transformation: raw });
        }
        const function_calls = [...function_body.matchAll(Constants_1.NTOKEN_REGEX.CALLS)].map((params) => [
            parseInt(params[1]),
            params[2].split(',').map((param) => {
                var _a;
                const param_value = (_a = param.match(/c\[(.*?)\]/)) === null || _a === void 0 ? void 0 : _a[1];
                if (!param_value) {
                    throw new Utils_1.InnertubeError('Unexpected NToken transformation function parameter.', { transformation: raw, param });
                }
                return parseInt(param_value);
            })
        ]);
        return new NToken([transformations, function_calls]);
    }
    evaluate(i, nToken, transformer) {
        switch (i[0]) {
            case NTokenTransformOpType.FUNC:
                if (i[1] === undefined || i[2] === undefined)
                    throw new Utils_1.InnertubeError('Invalid NTokenInstruction.', { transformation: nToken, instruction: i });
                return TRANSFORM_FUNCTIONS[i[2]][i[1]];
            case NTokenTransformOpType.N_ARR:
                return nToken;
            case NTokenTransformOpType.LITERAL:
                return i[1];
            case NTokenTransformOpType.REF:
                return transformer[0];
        }
    }
    transform(n) {
        const nToken = n.split('');
        // We must copy since we will modify the array
        const transformer = this.getTransformerClone();
        try {
            transformer[1].forEach(([index, param_index]) => {
                const base64_dia = (param_index[2] !== undefined && this.evaluate(transformer[0][param_index[2]], nToken, transformer)());
                this.evaluate(transformer[0][index], nToken, transformer)(param_index[0] !== undefined && this.evaluate(transformer[0][param_index[0]], nToken, transformer) || undefined, param_index[1] !== undefined && this.evaluate(transformer[0][param_index[1]], nToken, transformer) || undefined, base64_dia || undefined);
            });
        }
        catch (e) {
            console.error(new Error(`Could not transform n-token, download may be throttled.\nOriginal Token:${n}\nError:\n${e.stack}`));
            return n;
        }
        return nToken.join('');
    }
    getTransformerClone() {
        return [[...this.transformer[0]], [...this.transformer[1]]];
    }
    toJSON() {
        return this.getTransformerClone();
    }
    toArrayBuffer() {
        // (16 bit FUNC instructions) 2 bit op - 1 bit is_reverse_base64 - 4 bit nonce - 8 bit operation
        // (8 bit N_ARG and REF) 2 bit op - 6 bit nonce
        // (40 bit LITERAL) 2 bit op - 6 bit nonce - 32 bit value
        // NTokenCall will be 8 bit for the index, 8 bit for the number of parameters, and 8 bit for each parameter
        // We've got a 3 * 32 bit header to store the library version and the size of the two arrays
        let size = 4 * 3;
        for (const instruction of this.transformer[0]) {
            switch (instruction[0]) {
                case NTokenTransformOpType.FUNC:
                    size += 2;
                    break;
                case NTokenTransformOpType.N_ARR:
                case NTokenTransformOpType.REF:
                    size += 1;
                    break;
                case NTokenTransformOpType.LITERAL:
                    if (typeof instruction[1] === 'string') {
                        size += 1 + 4 + new TextEncoder().encode(instruction[1]).byteLength;
                    }
                    size += 4 + 1;
                    break;
            }
        }
        for (const call of this.transformer[1]) {
            size += 2 + call[1].length;
        }
        const buffer = new ArrayBuffer(size);
        const view = new DataView(buffer);
        let offset = 0;
        view.setUint32(offset, NToken.LIBRARY_VERSION, true);
        offset += 4;
        view.setUint32(offset, this.transformer[0].length, true);
        offset += 4;
        view.setUint32(offset, this.transformer[1].length, true);
        offset += 4;
        for (const instruction of this.transformer[0]) {
            switch (instruction[0]) {
                case NTokenTransformOpType.FUNC:
                    {
                        if (instruction[1] === undefined || instruction[2] === undefined)
                            throw new Utils_1.InnertubeError('Invalid NTokenInstruction.', { transformation: this.transformer, instruction });
                        const opcode = (instruction[0] << 6) | instruction[2];
                        view.setUint8(offset, opcode);
                        offset += 1;
                        view.setUint8(offset, instruction[1]);
                        offset += 1;
                    }
                    break;
                case NTokenTransformOpType.N_ARR:
                case NTokenTransformOpType.REF:
                    {
                        const opcode = (instruction[0] << 6);
                        view.setUint8(offset, opcode);
                        offset += 1;
                    }
                    break;
                case NTokenTransformOpType.LITERAL:
                    {
                        if (instruction[1] === undefined)
                            throw new Utils_1.InnertubeError('Invalid NTokenInstruction.', { transformation: this.transformer, instruction });
                        const type = typeof instruction[1] === 'string' ? 1 : 0;
                        const opcode = (instruction[0] << 6) | type;
                        view.setUint8(offset, opcode);
                        offset += 1;
                        if (type === 0) {
                            view.setInt32(offset, instruction[1], true);
                            offset += 4;
                        }
                        else {
                            const encoded = new TextEncoder().encode(instruction[1]);
                            view.setUint32(offset, encoded.byteLength, true);
                            offset += 4;
                            for (let i = 0; i < encoded.byteLength; i++) {
                                view.setUint8(offset, encoded[i]);
                                offset += 1;
                            }
                        }
                    }
                    break;
            }
        }
        for (const call of this.transformer[1]) {
            view.setUint8(offset, call[0]);
            offset += 1;
            view.setUint8(offset, call[1].length);
            offset += 1;
            for (const param of call[1]) {
                view.setUint8(offset, param);
                offset += 1;
            }
        }
        return buffer;
    }
    static fromArrayBuffer(buffer) {
        const view = new DataView(buffer);
        let offset = 0;
        const version = view.getUint32(offset, true);
        offset += 4;
        if (version !== NToken.LIBRARY_VERSION)
            throw new TypeError('Invalid library version');
        const transformations_length = view.getUint32(offset, true);
        offset += 4;
        const function_calls_length = view.getUint32(offset, true);
        offset += 4;
        const transformations = new Array(transformations_length);
        for (let i = 0; i < transformations_length; i++) {
            const opcode = view.getUint8(offset++);
            const op = opcode >> 6;
            switch (op) {
                case NTokenTransformOpType.FUNC:
                    {
                        const is_reverse_base64 = opcode & 0b00000001;
                        const operation = view.getUint8(offset++);
                        transformations[i] = [op, operation, is_reverse_base64];
                    }
                    break;
                case NTokenTransformOpType.N_ARR:
                case NTokenTransformOpType.REF:
                    {
                        transformations[i] = [op];
                    }
                    break;
                case NTokenTransformOpType.LITERAL:
                    {
                        const type = opcode & 0b00000001;
                        if (type === 0) {
                            const literal = view.getInt32(offset, true);
                            offset += 4;
                            transformations[i] = [op, literal];
                        }
                        else {
                            const length = view.getUint32(offset, true);
                            offset += 4;
                            const literal = new Uint8Array(length);
                            for (let i = 0; i < length; i++) {
                                literal[i] = view.getUint8(offset++);
                            }
                            transformations[i] = [op, new TextDecoder().decode(literal)];
                        }
                    }
                    break;
                default:
                    throw new Error('Invalid opcode');
            }
        }
        const function_calls = new Array(function_calls_length);
        for (let i = 0; i < function_calls_length; i++) {
            const index = view.getUint8(offset++);
            const num_params = view.getUint8(offset++);
            const params = new Array(num_params);
            for (let j = 0; j < num_params; j++) {
                params[j] = view.getUint8(offset++);
            }
            function_calls[i] = [index, params];
        }
        return new NToken([transformations, function_calls]);
    }
    static get LIBRARY_VERSION() {
        return 1;
    }
    static getFunc(el) {
        return el.match(Constants_1.NTOKEN_REGEX.FUNCTIONS);
    }
    static getTransformationData(raw) {
        var _a;
        const data = `[${(_a = raw.replace(/\n/g, '').match(/c=\[(.*?)\];c/s)) === null || _a === void 0 ? void 0 : _a[1]}]`;
        return JSON.parse(this.refineNTokenData(data));
    }
    static refineNTokenData(data) {
        // TODO: refactor this
        return data
            .replace(/function\(d,e\)/g, '"function(d,e)').replace(/function\(d\)/g, '"function(d)')
            .replace(/function\(\)/g, '"function()').replace(/function\(d,e,f\)/g, '"function(d,e,f)')
            .replace(/\[function\(d,e,f\)/g, '["function(d,e,f)').replace(/,b,/g, ',"b",')
            .replace(/,b/g, ',"b"').replace(/b,/g, '"b",').replace(/b]/g, '"b"]')
            .replace(/\[b/g, '["b"').replace(/}]/g, '"]').replace(/},/g, '}",')
            .replace(/""/g, '').replace(/length]\)}"/g, 'length])}');
    }
}
exports.default = NToken;
//# sourceMappingURL=NToken.js.map