import { YTNode } from '../helpers.js';
declare class GameCard extends YTNode {
    static type: string;
    game: YTNode | null;
    constructor(data: any);
}
export default GameCard;
