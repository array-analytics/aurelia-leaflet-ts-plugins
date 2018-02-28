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
import { LeafletButtonOptions } from "../generic-button/leaflet-button";
var LeafletExpandoControlOptions = /** @class */ (function (_super) {
    __extends(LeafletExpandoControlOptions, _super);
    function LeafletExpandoControlOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LeafletExpandoControlOptions;
}(LeafletButtonOptions));
export { LeafletExpandoControlOptions };
