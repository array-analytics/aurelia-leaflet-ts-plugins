define(["require", "exports", "./map-controls/generic-button/leaflet-button", "./map-controls/leaflet-control/generic-leaflet-control", "./map-controls/leaflet-expando-control/leaflet-expando-control", "./map-controls/leaflet-button-factory", "./custom-elements/show-text"], function (require, exports, leaflet_button_1, generic_leaflet_control_1, leaflet_expando_control_1, leaflet_button_factory_1, show_text_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(leaflet_button_1);
    __export(generic_leaflet_control_1);
    __export(leaflet_expando_control_1);
    __export(leaflet_button_factory_1);
    __export(show_text_1);
    function configure(pConfig) {
        pConfig.globalResources("./custom-elements/show-text");
    }
    exports.configure = configure;
});
