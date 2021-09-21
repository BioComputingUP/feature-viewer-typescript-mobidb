import Calculate from "./calculate";
declare class Tool extends Calculate {
    private calculate;
    colorSelectedFeat(feat: any, object: any, divId: any): void;
    colorSelectedCoordinates(start: any, end: any, divId: any): void;
    private updateLineTooltip(mouse, pD, scalingFunction, labelTrackWidth);
    private clickTagFunction(d);
    initTooltip(div: any, divId: any): void;
    constructor(commons: {});
}
export default Tool;
