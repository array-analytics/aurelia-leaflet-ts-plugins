var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LeafletControlBase } from "./leaflet-control-base";
import { DomUtil, DomEvent } from "leaflet";
import { noView } from "aurelia-framework";
import { Templating } from "../../common/au-templating";
var GenericLeafletControl = /** @class */ (function (_super) {
    __extends(GenericLeafletControl, _super);
    function GenericLeafletControl(pOptions) {
        return _super.call(this, pOptions) || this;
    }
    GenericLeafletControl.prototype.onAdd = function (pMap) {
        var _this = this;
        var control = DomUtil.create("div", this.leafletOptions.cssClass || GenericLeafletControlOptions.DefaultCssClass);
        control.style.padding = "5px 5px 5px 5px";
        // all examples of leaflet controls have a "A" tag inside of them for appearance purposes
        var innerA = DomUtil.create("a", "", control);
        control.setAttribute("type", "button");
        control.title = this.leafletOptions.toolTip || "";
        var thisVar = this;
        var controlContent;
        if (this.leafletOptions.buttonContent != null) {
            controlContent = Templating.makeDomElement(this.leafletOptions.buttonContent);
        }
        else {
            var innerI = DomUtil.create("i", this.leafletOptions.contentClass, innerA);
            controlContent = innerI;
        }
        control.appendChild(controlContent);
        DomEvent
            .addListener(control, "mousedown", DomEvent.stopPropagation)
            .addListener(control, "click", DomEvent.stopPropagation)
            .addListener(control, "click", DomEvent.preventDefault)
            .addListener(control, "click", function () { return _this.handleClick(_this, _this.leafletOptions); });
        this.domElementContent = control;
        return this.domElementContent;
    };
    GenericLeafletControl.prototype.handleClick = function (pSender, pOptions) {
        if (pOptions.handleClick)
            pOptions.handleClick(this, pOptions);
    };
    GenericLeafletControl = __decorate([
        noView
    ], GenericLeafletControl);
    return GenericLeafletControl;
}(LeafletControlBase));
export { GenericLeafletControl };
var GenericLeafletControlOptions = /** @class */ (function () {
    function GenericLeafletControlOptions() {
        this.position = GenericLeafletControlOptions.DefaultPosition;
        this.cssClass = GenericLeafletControlOptions.DefaultCssClass;
        this.handleClick = function (pSender, pOptions) { }; //pSender of type LeafletButton ?
    }
    GenericLeafletControlOptions.DefaultCssClass = "leaflet-control-layers leaflet-control";
    GenericLeafletControlOptions.DefaultPosition = "topleft";
    return GenericLeafletControlOptions;
}());
export { GenericLeafletControlOptions };