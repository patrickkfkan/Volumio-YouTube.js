export declare enum NTokenTransformOperation {
    NO_OP = 0,
    PUSH = 1,
    REVERSE_1 = 2,
    REVERSE_2 = 3,
    SPLICE = 4,
    SWAP0_1 = 5,
    SWAP0_2 = 6,
    ROTATE_1 = 7,
    ROTATE_2 = 8,
    BASE64_DIA = 9,
    TRANSLATE_1 = 10,
    TRANSLATE_2 = 11
}
export declare enum NTokenTransformOpType {
    FUNC = 0,
    N_ARR = 1,
    LITERAL = 2,
    REF = 3
}
export declare class NTokenTransforms {
    /**
     * Gets a base64 alphabet and uses it as a lookup table to modify n.
     */
    static translate1(arr: any[], token: string, is_reverse_base64: boolean): void;
    static translate2(arr: any[], token: string, characters: string[]): void;
    /**
     * Returns the requested base64 dialect, currently this is only used by 'translate2'.
     */
    static getBase64Dia(is_reverse_base64: boolean): string[];
    /**
     * Swaps the first element with the one at the given index.
     */
    static swap0(arr: any[], index: number): void;
    /**
     * Rotates elements of the array.
     */
    static rotate(arr: any[], index: number): void;
    /**
     * Deletes one element at the given index.
     */
    static splice(arr: any[], index: number): void;
    static reverse(arr: any[]): void;
    static push(arr: any[], item: any): void;
}
export declare type NTokenCall = [number, number[]];
export declare type NTokenInstruction = [NTokenTransformOpType, (NTokenTransformOperation | number)?, number?];
export declare type NTokenTransformer = [NTokenInstruction[], NTokenCall[]];
export default class NToken {
    private transformer;
    constructor(transformer: NTokenTransformer);
    static fromSourceCode(raw: string): NToken;
    private evaluate;
    transform(n: string): string;
    private getTransformerClone;
    toJSON(): NTokenTransformer;
    toArrayBuffer(): ArrayBuffer;
    static fromArrayBuffer(buffer: ArrayBuffer): NToken;
    static get LIBRARY_VERSION(): number;
    static getFunc(el: string): RegExpMatchArray | null;
    static getTransformationData(raw: string): any[];
    static refineNTokenData(data: string): string;
}
