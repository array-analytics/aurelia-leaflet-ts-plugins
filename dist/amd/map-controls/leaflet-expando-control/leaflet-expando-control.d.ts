import { LeafletButtonOptions } from "../generic-button/leaflet-button";
import { ContentableType } from "../../common/contentable-type";
export declare class LeafletExpandoControlOptions extends LeafletButtonOptions {
    collapsedControlContent: ContentableType;
    expandedControlContent: ContentableType;
    model?: any;
    title: string;
    onClosed?: (e: MouseEvent) => any;
    expandedWidth?: string;
    expandedHeight?: string;
    closeButtonCssClass?: string;
    closeButtonContent?: ContentableType;
    titleCssClass?: string;
    titleBarCssClass?: string;
}
