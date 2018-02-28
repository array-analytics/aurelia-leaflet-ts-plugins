import { GenericLeafletControlOptions, GenericLeafletControl } from "../leaflet-control/generic-leaflet-control";
import { ContentableType } from "../../common/contentable-type";
export declare class LeafletButton extends GenericLeafletControl<LeafletButtonOptions> {
    protected constructor(options: LeafletButtonOptions);
    static create(options: LeafletButtonOptions): LeafletButton;
}
export declare class LeafletButtonOptions extends GenericLeafletControlOptions {
    buttonContent?: ContentableType;
}
