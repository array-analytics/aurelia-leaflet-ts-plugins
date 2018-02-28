import { ViewLocator, ViewEngine, View } from "aurelia-templating";
import { ContentableType } from "./contentable-type";
export declare class Templating {
    static viewLocator: ViewLocator;
    static viewEngine: ViewEngine;
    static loadView(elementToHoldView: HTMLElement, viewModel: any, model?: any): Promise<View>;
    static unloadView(view: View): View;
    static makeDomElement(content: ContentableType, model?: any): HTMLElement;
}
