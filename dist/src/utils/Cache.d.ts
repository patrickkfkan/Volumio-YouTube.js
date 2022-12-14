export default class UniversalCache {
    #private;
    constructor(persistent?: boolean, persistent_directory?: string);
    static get temp_directory(): string;
    static get default_persistent_directory(): any;
    get cache_dir(): string;
    get(key: string): Promise<ArrayBuffer | undefined>;
    set(key: string, value: ArrayBuffer): Promise<void>;
    remove(key: string): Promise<void>;
}
