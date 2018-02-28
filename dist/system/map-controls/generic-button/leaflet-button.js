System.register(["../leaflet-control/generic-leaflet-control", "aurelia-templating"], function (exports_1, context_1) {
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
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var generic_leaflet_control_1, aurelia_templating_1, LeafletButton, LeafletButtonOptions;
    return {
        setters: [
            function (generic_leaflet_control_1_1) {
                generic_leaflet_control_1 = generic_leaflet_control_1_1;
            },
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            }
        ],
        execute: function () {
            LeafletButton = /** @class */ (function (_super) {
                __extends(LeafletButton, _super);
                function LeafletButton(options) {
                    return _super.call(this, options) || this;
                }
                LeafletButton_1 = LeafletButton;
                LeafletButton.create = function (options) {
                    return new LeafletButton_1(options);
                };
                LeafletButton = LeafletButton_1 = __decorate([
                    aurelia_templating_1.noView
                ], LeafletButton);
                return LeafletButton;
                var LeafletButton_1;
            }(generic_leaflet_control_1.GenericLeafletControl));
            exports_1("LeafletButton", LeafletButton);
            LeafletButtonOptions = /** @class */ (function (_super) {
                __extends(LeafletButtonOptions, _super);
                function LeafletButtonOptions() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return LeafletButtonOptions;
            }(generic_leaflet_control_1.GenericLeafletControlOptions));
            exports_1("LeafletButtonOptions", LeafletButtonOptions);
        }
    };
});
