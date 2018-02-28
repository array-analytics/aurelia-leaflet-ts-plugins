"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./map-controls/generic-button/leaflet-button"));
__export(require("./map-controls/leaflet-control/generic-leaflet-control"));
__export(require("./map-controls/leaflet-expando-control/leaflet-expando-control"));
__export(require("./map-controls/leaflet-button-factory"));
__export(require("./custom-elements/show-text"));
function configure(pConfig) {
    pConfig.globalResources("./custom-elements/show-text");
}
exports.configure = configure;
