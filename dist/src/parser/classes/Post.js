"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BackstagePost_1 = __importDefault(require("./BackstagePost"));
class Post extends BackstagePost_1.default {
    constructor(data) {
        super(data);
    }
}
Post.type = 'Post';
exports.default = Post;
//# sourceMappingURL=Post.js.map