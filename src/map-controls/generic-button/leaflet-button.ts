import { GenericLeafletControlOptions, GenericLeafletControl } from "../leaflet-control/generic-leaflet-control";
import { DomUtil, DomEvent, ControlPosition, Map as LeafMap, ControlOptions } from "leaflet";
import { noView } from "aurelia-templating";
import {ContentableType} from "../../common/contentable-type";
import {Templating} from "../../common/au-templating";

// This is for a clicker for the expando button or whatever other kind of button you might want
@noView
export class LeafletButton extends GenericLeafletControl<LeafletButtonOptions>
{
    protected constructor(options: LeafletButtonOptions) {
        super(options);
    }

    public static create(options: LeafletButtonOptions): LeafletButton
    {
        return new LeafletButton(options);
    }
}

export class LeafletButtonOptions extends GenericLeafletControlOptions
{
    public buttonContent?: ContentableType;
}
