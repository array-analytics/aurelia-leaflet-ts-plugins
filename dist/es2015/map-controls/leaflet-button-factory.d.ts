import { LeafletExpandoControlOptions } from './leaflet-expando-control/leaflet-expando-control';
import { LeafletButtonOptions } from './generic-button/leaflet-button';
import { LeafletButton } from "../map-controls/generic-button/leaflet-button";
export declare class LeafletButtonFactory {
    static createButton(options: LeafletButtonOptions): LeafletButton;
    static createExpandoButton(options: LeafletExpandoControlOptions): LeafletButton;
}
