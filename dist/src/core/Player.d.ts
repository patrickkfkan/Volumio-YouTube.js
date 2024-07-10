import type { ICache, FetchFunction } from '../types/index.js';
/**
 * Represents YouTube's player script. This is required to decipher signatures.
 */
export default class Player {
    nsig_sc: string;
    sig_sc: string;
    sts: number;
    player_id: string;
    constructor(signature_timestamp: number, sig_sc: string, nsig_sc: string, player_id: string);
    static create(cache: ICache | undefined, fetch?: FetchFunction): Promise<Player>;
    decipher(url?: string, signature_cipher?: string, cipher?: string, this_response_nsig_cache?: Map<string, string>): string;
    static fromCache(cache: ICache, player_id: string): Promise<Player | null>;
    static fromSource(cache: ICache | undefined, sig_timestamp: number, sig_sc: string, nsig_sc: string, player_id: string): Promise<Player>;
    cache(cache?: ICache): Promise<void>;
    static extractSigTimestamp(data: string): number;
    static extractSigSourceCode(data: string): string;
    static extractNSigSourceCode(data: string): string;
    get url(): string;
    static get LIBRARY_VERSION(): number;
}
