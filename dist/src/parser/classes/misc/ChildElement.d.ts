declare class ChildElement {
    static type: string;
    text: string | null;
    properties: any;
    child_elements?: ChildElement[];
    constructor(data: any);
}
export default ChildElement;
