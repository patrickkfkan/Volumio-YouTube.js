import { FetchFunction } from './HTTPClient';
export declare class InnertubeError extends Error {
    date: Date;
    version: string;
    info?: any;
    constructor(message: string, info?: any);
}
export declare class ParsingError extends InnertubeError {
}
export declare class DownloadError extends InnertubeError {
}
export declare class MissingParamError extends InnertubeError {
}
export declare class UnavailableContentError extends InnertubeError {
}
export declare class NoStreamingDataError extends InnertubeError {
}
export declare class OAuthError extends InnertubeError {
}
export declare class PlayerError extends Error {
}
export declare class SessionError extends Error {
}
/**
 * Compares given objects. May not work correctly for
 * objects with methods.
 */
export declare function deepCompare(obj1: any, obj2: any): boolean;
/**
 * Finds a string between two delimiters.
 * @param data - the data.
 * @param start_string - start string.
 * @param end_string - end string.
 */
export declare function getStringBetweenStrings(data: string, start_string: string, end_string: string): string | undefined;
export declare function escapeStringRegexp(input: string): string;
export declare type DeviceCategory = 'mobile' | 'desktop';
/**
 * Returns a random user agent.
 * @param type - mobile | desktop
 */
export declare function getRandomUserAgent(type: DeviceCategory): string;
export declare function sha1Hash(str: string): Promise<string>;
/**
 * Generates an authentication token from a cookies' sid.
 * @param sid - Sid extracted from cookies
 */
export declare function generateSidAuth(sid: string): Promise<string>;
/**
 * Generates a random string with the given length.
 *
 */
export declare function generateRandomString(length: number): string;
/**
 * Converts time (h:m:s) to seconds.
 * @returns seconds
 */
export declare function timeToSeconds(time: string): number;
/**
 * Throws an error if given parameters are undefined.
 */
export declare function throwIfMissing(params: object): void;
export declare function hasKeys<T extends object, R extends (keyof T)[]>(params: T, ...keys: R): params is Exclude<T, R[number]> & Required<Pick<T, R[number]>>;
export declare function uuidv4(): any;
export declare type Runtime = 'node' | 'deno' | 'browser';
export declare function getRuntime(): Runtime;
export declare function isServer(): boolean;
export declare function streamToIterable(stream: ReadableStream<Uint8Array>): AsyncGenerator<Uint8Array, void, unknown>;
export declare const debugFetch: FetchFunction;
export declare function u8ToBase64(u8: Uint8Array): any;
