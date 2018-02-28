import { customElement, View, OverrideContext } from "aurelia-framework";

@customElement("show-text")
export class ShowTextCustomElement {

    public textValue: string = "";
 
    private async created(pOwningView: View, pThisView: View): Promise<void> {
        /* NOTE: This is called once the view and view-model are created and connected to the controller. 
        This method takes two arguments. The first one is the view where the component is declared (owningView). 
        The second one is the component view (myView). */
    }

    private async bind(pBindingContext: any, pOverrideContext: OverrideContext): Promise<void> {
        /* NOTE: At this point of time, the binding has started. 
        The first argument represents the binding context of the component. 
        The second one is overrideContext. This argument is used for adding 
        additional contextual properties. */
    }
 
    private async attached(): Promise<any> {
        //NOTE: Attached method is invoked once the component is attached to the DOM.
        this.textValue = "loaded custom aurelia plugin!";
        return Promise.resolve();
    }

    private async detached(): Promise<void> {
        //NOTE: This method is opposite to attached. It is invoked when the component is removed from the DOM.
    }
}
