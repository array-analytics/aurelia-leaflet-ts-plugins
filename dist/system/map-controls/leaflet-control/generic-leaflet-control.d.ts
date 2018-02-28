import { LeafletControlBase } from "./leaflet-control-base";
import { ControlPosition, Map as LeafMap, ControlOptions } from "leaflet";
import { ContentableType } from "../../common/contentable-type";
export declare abstract class GenericLeafletControl<TOptions extends GenericLeafletControlOptions> extends LeafletControlBase<GenericLeafletControl<TOptions>, TOptions> {
    protected domElementContent: HTMLElement;
    protected constructor(pOptions: TOptions);
    onAdd(pMap: LeafMap): any;
    handleClick(pSender: any, pOptions: TOptions): any;
}
export declare class GenericLeafletControlOptions implements ControlOptions {
    static DefaultCssClass: string;
    static DefaultPosition: ControlPosition;
    position?: ControlPosition;
    toolTip?: string;
    contentClass?: string;
    cssClass?: string;
    handleClick?: (pSender: any, pOptions: GenericLeafletControlOptions) => void;
    buttonContent?: ContentableType;
}
