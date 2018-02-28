import { Map, Control, ControlOptions } from "leaflet";

export abstract class LeafletControlBase<TControl extends Control, TOptions extends ControlOptions> extends Control {
    protected leafletOptions: TOptions;
    protected domElementContent: HTMLElement;

    protected constructor(options: TOptions) {
        super(options);
        this.leafletOptions = options;
    }

    public abstract onAdd(map: Map): any;
}
