import { FetchFunction } from '../utils/HTTPClient';
import UniversalCache from '../utils/Cache';
export default class Player {
    #private;
    constructor(signature_timestamp: number, sig_sc: string, nsig_sc: string, player_id: string);
    static create(cache: UniversalCache | undefined, fetch?: FetchFunction): Promise<Player>;
    decipher(url?: string, signature_cipher?: string, cipher?: string): string;
    static fromCache(cache: UniversalCache, player_id: string): Promise<Player | null>;
    static fromSource(cache: UniversalCache | undefined, sig_timestamp: number, sig_sc: string, nsig_sc: string, player_id: string): Promise<Player>;
    cache(cache?: UniversalCache): Promise<void>;
    static extractSigTimestamp(data: string): number;
    static extractSigSourceCode(data: string): string;
    static extractNSigSourceCode(data: string): string;
    get url(): string;
    get sts(): number;
    get nsig_sc(): string;
    get sig_sc(): string;
    static get LIBRARY_VERSION(): number;
}
