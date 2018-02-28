import { LeafletControlBase } from "./leaflet-control-base";
import { DomUtil, DomEvent, ControlPosition, Map as LeafMap, ControlOptions } from "leaflet";
import { noView } from "aurelia-framework";
import { ContentableType } from "../../common/contentable-type";
import {Templating} from "../../common/au-templating";

@noView
export abstract class GenericLeafletControl<TOptions extends GenericLeafletControlOptions> extends LeafletControlBase<GenericLeafletControl<TOptions>, TOptions>
{
    protected domElementContent: HTMLElement;

    protected constructor(pOptions: TOptions) {
        super(pOptions);
    }

    public onAdd(pMap: LeafMap): any {
        let control: HTMLElement = DomUtil.create("div", this.leafletOptions.cssClass || GenericLeafletControlOptions.DefaultCssClass);
        control.style.padding = "5px 5px 5px 5px";

        // all examples of leaflet controls have a "A" tag inside of them for appearance purposes
        let innerA = DomUtil.create("a", "", control);
        control.setAttribute("type", "button");
        control.title = (<GenericLeafletControlOptions>this.leafletOptions).toolTip || "";

        let thisVar = this;
        let controlContent: HTMLElement;

        if(this.leafletOptions.buttonContent != null)
        {
            controlContent = Templating.makeDomElement(this.leafletOptions.buttonContent);
        }
        else
        {
            var innerI = DomUtil.create("i", this.leafletOptions.contentClass, innerA);
            controlContent = innerI;
        }

        control.appendChild(controlContent);

        DomEvent
            .addListener(control, "mousedown", DomEvent.stopPropagation)
            .addListener(control, "click", DomEvent.stopPropagation)
            .addListener(control, "click", DomEvent.preventDefault)
            .addListener(control, "click", () => this.handleClick(this, this.leafletOptions));

        this.domElementContent = control;
        return this.domElementContent;
    }

    public handleClick(pSender: any, pOptions: TOptions): any {
        if (pOptions.handleClick)
            pOptions.handleClick(this, pOptions);
    }
}


export class GenericLeafletControlOptions implements ControlOptions {
    public static DefaultCssClass: string = "leaflet-control-layers leaflet-control";
    public static DefaultPosition: ControlPosition = "topleft";

    public position?: ControlPosition = GenericLeafletControlOptions.DefaultPosition;
    public toolTip?: string;
    public contentClass?: string;
    public cssClass?: string = GenericLeafletControlOptions.DefaultCssClass;
    public handleClick?: (pSender: any, pOptions: GenericLeafletControlOptions) => void = (pSender, pOptions) => { }; //pSender of type LeafletButton ?
    public buttonContent?: ContentableType;
}
