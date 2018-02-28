import { Container } from "aurelia-dependency-injection";
import { ViewLocator, ViewEngine, View, ViewFactory } from "aurelia-templating";
import { ViewCompileInstruction } from "aurelia-framework";
import {ContentableType} from "./contentable-type";
import { DomUtil } from "leaflet";

export class Templating
{
    /// TODO: Inject container instance maybe?
    static viewLocator: ViewLocator = Container.instance.get(ViewLocator);
    static viewEngine: ViewEngine = Container.instance.get(ViewEngine);

    public static async loadView(elementToHoldView: HTMLElement, viewModel: any, model?: any): Promise<View>
    {
        var newView: View;
        var viewStrategy = Templating.viewLocator.getViewStrategy(viewModel);
        /// TODO: Look at Aurelia router to figure out how it converts from module names to find modiles

        var viewFactory: ViewFactory =
            await viewStrategy.loadViewFactory(Templating.viewEngine, new ViewCompileInstruction());

        newView = viewFactory.create(Container.instance, {} /* Aurelia ViewCreateInstruction */, elementToHoldView);
        newView.bind(model);
        newView.appendNodesTo(elementToHoldView);

        /// TODO: doesn't call attached!
        newView.attached();

        return newView;
    }

    public static unloadView(view: View): View
    {
        view.removeNodes();
        return view;
    }

    public static makeDomElement(content: ContentableType, model?: any): HTMLElement
    {
        if (model && (content instanceof HTMLElement || typeof content === typeof "string"))
            throw "Cannot specify a model for non-view content";

        if (content instanceof HTMLElement)
            return content;
        else if (typeof content === typeof "string")
        {
            let contentElement: HTMLElement = DomUtil.create("div");
            contentElement.innerHTML = <string>content;
            return contentElement;
        }
        else if (content instanceof Object)
        {
            let contentElement: HTMLElement = DomUtil.create("div");
            Templating.loadView(contentElement, content, model);
            return contentElement;
        }
        else
            throw "Not implemented";
    }
}
