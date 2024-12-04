import { Event } from "event-target-shim";

export interface CustomEventInit<T> extends Event.EventInit {
  detail: T;
}

// See https://github.com/nodejs/node/issues/40678#issuecomment-1126944677
export default class CustomEvent extends Event {
  #detail;

  constructor(type: string, options?: CustomEventInit<any[]>) {
    super(type, options);
    this.#detail = options?.detail ?? null;
  }

  get detail() {
    return this.#detail;
  }
}