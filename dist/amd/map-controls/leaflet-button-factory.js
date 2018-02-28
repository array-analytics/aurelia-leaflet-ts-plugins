var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "leaflet", "./../common/au-templating", "../map-controls/generic-button/leaflet-button"], function (require, exports, aurelia_framework_1, leaflet_1, au_templating_1, leaflet_button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LeafletButtonFactory = /** @class */ (function () {
        function LeafletButtonFactory() {
        }
        LeafletButtonFactory.createButton = function (options) {
            return leaflet_button_1.LeafletButton.create(options);
        };
        LeafletButtonFactory.createExpandoButton = function (options) {
            /** Construct composite HTML DOM content from the two collapsed and expanded elements **/
            var buttonContent = leaflet_1.DomUtil.create("div");
            /** Collapsed DIV **/
            var collapsedDiv = leaflet_1.DomUtil.create("div");
            collapsedDiv.style.cursor = "pointer";
            collapsedDiv.appendChild(au_templating_1.Templating.makeDomElement(options.collapsedControlContent));
            buttonContent.appendChild(collapsedDiv);
            /** Expanded DIV **/
            var expandedDiv = leaflet_1.DomUtil.create("div");
            expandedDiv.style.display = "none";
            if (options.expandedHeight)
                expandedDiv.style.height = options.expandedHeight;
            if (options.expandedWidth)
                expandedDiv.style.width = options.expandedWidth;
            var titleDiv = leaflet_1.DomUtil.create("div", options.titleBarCssClass ? options.titleBarCssClass : "text-nowrap ");
            var closeButton = options.closeButtonContent ? au_templating_1.Templating.makeDomElement(options.closeButtonContent) :
                leaflet_1.DomUtil.create("span");
            closeButton.setAttribute("class", options.closeButtonCssClass || "btn btn-sm glyphicon glyphicon-remove");
            closeButton.style.cursor = "pointer";
            titleDiv.appendChild(closeButton);
            var expandedTitle = leaflet_1.DomUtil.create("div", options.titleCssClass);
            expandedTitle.innerHTML = options.title;
            titleDiv.appendChild(expandedTitle);
            expandedDiv.appendChild(titleDiv);
            var expandedDivContent = leaflet_1.DomUtil.create("div");
            expandedDivContent.appendChild(au_templating_1.Templating.makeDomElement(options.expandedControlContent, options.model));
            expandedDiv.appendChild(expandedDivContent);
            buttonContent.appendChild(expandedDiv);
            /** Bind mouse click events **/
            leaflet_1.DomEvent.addListener(collapsedDiv, "click", function (e) {
                collapsedDiv.style.display = "none";
                expandedDiv.style.display = "block";
            });
            leaflet_1.DomEvent.addListener(closeButton, "click", function (e) {
                collapsedDiv.style.display = "block";
                expandedDiv.style.display = "none";
                if (options.onClosed)
                    options.onClosed(e);
            });
            options.buttonContent = buttonContent;
            return leaflet_button_1.LeafletButton.create(options);
        };
        LeafletButtonFactory = __decorate([
            aurelia_framework_1.noView
        ], LeafletButtonFactory);
        return LeafletButtonFactory;
    }());
    exports.LeafletButtonFactory = LeafletButtonFactory;
});
