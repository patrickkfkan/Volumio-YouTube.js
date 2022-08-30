import Session from '../core/Session';
declare const nfFetch: any;
declare const nfRequest: any;
export declare type FetchFunction = typeof nfFetch;
export interface HTTPClientInit {
    baseURL?: string;
}
export default class HTTPClient {
    #private;
    constructor(session: Session, cookie?: string, fetch?: FetchFunction);
    get fetch_function(): any;
    fetch(input: URL | typeof nfRequest | string, init?: RequestInit & HTTPClientInit): Promise<any>;
}
export {};
