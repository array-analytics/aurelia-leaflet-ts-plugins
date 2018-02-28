System.register(["./map-controls/generic-button/leaflet-button", "./map-controls/leaflet-control/generic-leaflet-control", "./map-controls/leaflet-expando-control/leaflet-expando-control", "./map-controls/leaflet-button-factory", "./custom-elements/show-text"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(pConfig) {
        pConfig.globalResources("./custom-elements/show-text");
    }
    exports_1("configure", configure);
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (leaflet_button_1_1) {
                exportStar_1(leaflet_button_1_1);
            },
            function (generic_leaflet_control_1_1) {
                exportStar_1(generic_leaflet_control_1_1);
            },
            function (leaflet_expando_control_1_1) {
                exportStar_1(leaflet_expando_control_1_1);
            },
            function (leaflet_button_factory_1_1) {
                exportStar_1(leaflet_button_factory_1_1);
            },
            function (show_text_1_1) {
                exportStar_1(show_text_1_1);
            }
        ],
        execute: function () {
        }
    };
});
