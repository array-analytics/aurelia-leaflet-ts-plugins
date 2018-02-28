export * from "./map-controls/generic-button/leaflet-button";
export * from "./map-controls/leaflet-control/generic-leaflet-control";
export * from "./map-controls/leaflet-expando-control/leaflet-expando-control";
export * from "./map-controls/leaflet-button-factory";
export * from "./custom-elements/show-text";
export function configure(pConfig) {
    pConfig.globalResources("./custom-elements/show-text");
}
