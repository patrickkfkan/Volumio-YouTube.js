import { FetchFunction } from '../utils/HTTPClient';
import UniversalCache from '../utils/Cache';
export default class Player {
    #private;
    constructor(signature_timestamp: number, player_id: string);
    static create(cache: UniversalCache | undefined, fetch?: FetchFunction): Promise<Player>;
    static fromCache(cache: UniversalCache, player_id: string): Promise<Player | null>;
    static fromSource(cache: UniversalCache | undefined, sig_timestamp: number, player_id: string): Promise<Player>;
    cache(cache?: UniversalCache): Promise<void>;
    /**
     * Extracts the signature timestamp from the player source code.
     */
    static extractSigTimestamp(data: string): number;
    /**
     * Extracts the signature decipher algorithm.
     */
    static extractSigDecipherSc(data: string): string;
    /**
     * Extracts the n-token decipher algorithm.
     */
    static extractNTokenSc(data: string): string;
    get url(): string;
    get sts(): number;
    static get LIBRARY_VERSION(): number;
}
