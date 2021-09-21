import { FeaturesList, UserOptions } from './interfaces';
declare class FeatureViewer {
    private commons;
    private divId;
    private sequence;
    private transition;
    private subfeaturesTransition;
    private fillSVG;
    private calculate;
    private tool;
    private lastHighlight;
    private parseUserOptions(options);
    private addYAxis();
    private updateYAxis();
    private applyLastHighlight();
    private brushend();
    private resizeForMobile();
    private calcFlagWidth(d);
    private updateWindow();
    private transition_data(features, start);
    private init(div);
    private addFeatureCore(object, flagLevel?, position?);
    private drawFeatures();
    private recursivelyRemove(ft);
    private recursiveClose(array);
    private changeFeature(feature, bool);
    private resetTooltip(tooltipdiv);
    getCurrentPosition(): number;
    getCurrentZoom(): number;
    showHelp(): void;
    resetHighlight(resetLastHighlight?: boolean): void;
    resetZoom(): void;
    resetAll(): void;
    downloadJpeg(): void;
    downloadPNG(): void;
    clickFlag(d: any): void;
    emptyFeatures(): any;
    flagLoading(id: any): void;
    highlightRegion(region: any, featureid: any): void;
    highlightPosition(region: any, reset?: boolean): void;
    highlightPositions(regions: any): void;
    private recursiveClick(f, condition);
    collapseAll(): void;
    expandAll(): void;
    onRegionSelected(listener: any): void;
    removeResizeListener(): void;
    onFeatureSelected(listener: any): void;
    onButtonSelected(listener: any): void;
    onZoom(listener: any): void;
    onClearSelection(listener: any): void;
    onAnimationOff(listener: any): void;
    stopFlagLoading: (id: any) => void;
    resizeViewer: () => void;
    private addFeature(object, flagLevel?);
    addFeatures(featureList: FeaturesList): void;
    private getLevel(f, l);
    constructor(sequence: string, div: string, options?: UserOptions, features?: FeaturesList);
}
export { FeatureViewer };
