import { noView } from 'aurelia-framework';
import { DomUtil, DomEvent } from 'leaflet';
import { Templating } from './../common/au-templating';
import { LeafletExpandoControlOptions } from './leaflet-expando-control/leaflet-expando-control';
import { LeafletButtonOptions } from './generic-button/leaflet-button';
import {LeafletButton} from "../map-controls/generic-button/leaflet-button";

@noView
export class LeafletButtonFactory
{
    public static createButton(options: LeafletButtonOptions): LeafletButton
    {
        return LeafletButton.create(options);
    }

    public static createExpandoButton(options: LeafletExpandoControlOptions): LeafletButton 
    {
        /** Construct composite HTML DOM content from the two collapsed and expanded elements **/
        var buttonContent = DomUtil.create("div");

        /** Collapsed DIV **/
        var collapsedDiv = DomUtil.create("div");
        collapsedDiv.style.cursor = "pointer";
        collapsedDiv.appendChild(Templating.makeDomElement(options.collapsedControlContent));

        buttonContent.appendChild(collapsedDiv);

        /** Expanded DIV **/
        var expandedDiv = DomUtil.create("div");
        expandedDiv.style.display = "none";
        if (options.expandedHeight)
            expandedDiv.style.height = options.expandedHeight;
        if (options.expandedWidth)
            expandedDiv.style.width = options.expandedWidth;

        var titleDiv = DomUtil.create("div", options.titleBarCssClass ? options.titleBarCssClass : "text-nowrap ");

        var closeButton = 
            options.closeButtonContent ? Templating.makeDomElement(options.closeButtonContent) :
            DomUtil.create("span");
        closeButton.setAttribute("class", options.closeButtonCssClass || "btn btn-sm glyphicon glyphicon-remove");
        closeButton.style.cursor = "pointer";
        titleDiv.appendChild(closeButton);

        var expandedTitle = DomUtil.create("div", options.titleCssClass);
        expandedTitle.innerHTML = options.title;
        titleDiv.appendChild(expandedTitle);

        expandedDiv.appendChild(titleDiv);

        var expandedDivContent = DomUtil.create("div");
        expandedDivContent.appendChild(Templating.makeDomElement(options.expandedControlContent, options.model));
        expandedDiv.appendChild(expandedDivContent);

        buttonContent.appendChild(expandedDiv);

        /** Bind mouse click events **/
        DomEvent.addListener(collapsedDiv, "click", 
            (e: MouseEvent) => {
                collapsedDiv.style.display = "none";
                expandedDiv.style.display = "block";
            });

        DomEvent.addListener(closeButton, "click", 
            (e: MouseEvent) => {
                collapsedDiv.style.display = "block";
                expandedDiv.style.display = "none";
                if (options.onClosed)
                    options.onClosed(e);
            });

        options.buttonContent = buttonContent;

        return LeafletButton.create(options);
    }
}
