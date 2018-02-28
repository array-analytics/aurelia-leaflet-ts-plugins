import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";

export * from "./common/contentable-type";
export * from "./map-controls/generic-button/leaflet-button";
export * from "./map-controls/leaflet-control/generic-leaflet-control";
export * from "./map-controls/leaflet-expando-control/leaflet-expando-control";
export * from "./map-controls/leaflet-button-factory";
export * from "./custom-elements/show-text"

export function configure(pConfig: FrameworkConfiguration) {
    pConfig.globalResources("./custom-elements/show-text");
}
