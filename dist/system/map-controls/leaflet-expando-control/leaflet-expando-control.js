System.register(["../generic-button/leaflet-button"], function (exports_1, context_1) {
    "use strict";
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
    var __moduleName = context_1 && context_1.id;
    var leaflet_button_1, LeafletExpandoControlOptions;
    return {
        setters: [
            function (leaflet_button_1_1) {
                leaflet_button_1 = leaflet_button_1_1;
            }
        ],
        execute: function () {
            LeafletExpandoControlOptions = /** @class */ (function (_super) {
                __extends(LeafletExpandoControlOptions, _super);
                function LeafletExpandoControlOptions() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return LeafletExpandoControlOptions;
            }(leaflet_button_1.LeafletButtonOptions));
            exports_1("LeafletExpandoControlOptions", LeafletExpandoControlOptions);
        }
    };
});
