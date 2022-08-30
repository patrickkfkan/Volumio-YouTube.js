export declare enum SignatureOperation {
    REVERSE = 0,
    SPLICE = 1,
    SWAP = 2
}
export declare type SignatureInstruction = [SignatureOperation, number];
export default class Signature {
    private action_sequence;
    constructor(action_sequence: SignatureInstruction[]);
    static fromSourceCode(raw_sc: string): Signature;
    decipher(url: string): string;
    toJSON(): SignatureInstruction[];
    toArrayBuffer(): ArrayBuffer;
    static fromArrayBuffer(buffer: ArrayBuffer): Signature;
    static get LIBRARY_VERSION(): number;
}
