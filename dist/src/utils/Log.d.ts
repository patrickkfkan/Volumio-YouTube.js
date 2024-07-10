export default class Log {
    private static YTJS_TAG;
    static Level: {
        NONE: number;
        ERROR: number;
        WARNING: number;
        INFO: number;
        DEBUG: number;
    };
    private static log_map_;
    private static log_level_;
    private static one_time_warnings_issued_;
    static warnOnce: (id: string, ...args: any[]) => void;
    static warn: (tag?: string, ...args: any[]) => void;
    static error: (tag?: string, ...args: any[]) => void;
    static info: (tag?: string, ...args: any[]) => void;
    static debug: (tag?: string, ...args: any[]) => void;
    private static doLog;
    static setLevel(...args: number[]): void;
}
