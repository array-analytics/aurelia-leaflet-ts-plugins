import { Map, Control, ControlOptions } from "leaflet";
export declare abstract class LeafletControlBase<TControl extends Control, TOptions extends ControlOptions> extends Control {
    protected leafletOptions: TOptions;
    protected domElementContent: HTMLElement;
    protected constructor(options: TOptions);
    abstract onAdd(map: Map): any;
}
