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
define(["require", "exports", "leaflet"], function (require, exports, leaflet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LeafletControlBase = /** @class */ (function (_super) {
        __extends(LeafletControlBase, _super);
        function LeafletControlBase(options) {
            var _this = _super.call(this, options) || this;
            _this.leafletOptions = options;
            return _this;
        }
        return LeafletControlBase;
    }(leaflet_1.Control));
    exports.LeafletControlBase = LeafletControlBase;
});
