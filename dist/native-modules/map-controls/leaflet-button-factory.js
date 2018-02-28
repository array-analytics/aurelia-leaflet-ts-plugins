var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { noView } from 'aurelia-framework';
import { DomUtil, DomEvent } from 'leaflet';
import { Templating } from './../common/au-templating';
import { LeafletButton } from "../map-controls/generic-button/leaflet-button";
var LeafletButtonFactory = /** @class */ (function () {
    function LeafletButtonFactory() {
    }
    LeafletButtonFactory.createButton = function (options) {
        return LeafletButton.create(options);
    };
    LeafletButtonFactory.createExpandoButton = function (options) {
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
        var closeButton = options.closeButtonContent ? Templating.makeDomElement(options.closeButtonContent) :
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
        DomEvent.addListener(collapsedDiv, "click", function (e) {
            collapsedDiv.style.display = "none";
            expandedDiv.style.display = "block";
        });
        DomEvent.addListener(closeButton, "click", function (e) {
            collapsedDiv.style.display = "block";
            expandedDiv.style.display = "none";
            if (options.onClosed)
                options.onClosed(e);
        });
        options.buttonContent = buttonContent;
        return LeafletButton.create(options);
    };
    LeafletButtonFactory = __decorate([
        noView
    ], LeafletButtonFactory);
    return LeafletButtonFactory;
}());
export { LeafletButtonFactory };
