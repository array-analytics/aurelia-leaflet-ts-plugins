import { LeafletButton, LeafletButtonOptions } from "../generic-button/leaflet-button";
import { Templating } from "../../common/au-templating";
import { DomUtil, DomEvent } from "leaflet";
import { ContentableType } from "../../common/contentable-type";
import { noView } from "aurelia-framework";

export class LeafletExpandoControlOptions extends LeafletButtonOptions
{
    public collapsedControlContent: ContentableType;
    public expandedControlContent: ContentableType;
    public model?: any;
    public title: string;
    public onClosed?: (e: MouseEvent) => any;
    public expandedWidth?: string;
    public expandedHeight?: string;

    public closeButtonCssClass?: string;
    public closeButtonContent?: ContentableType;
    public titleCssClass?: string;
    public titleBarCssClass?: string;
}
