declare module BABYLON.EDITOR.GUI {
    class GUIToolbar extends GUIElement implements IGUIToolbarElement {
        menus: Array<IToolbarMenuElement>;
        /**
        * Constructor
        * @param name: the form name
        */
        constructor(name: string, core: EditorCore);
        createMenu(type: string, id: string, text: string, icon: string, checked?: boolean): IToolbarMenuElement;
        createMenuItem(menu: IToolbarMenuElement, type: string, id: string, text: string, icon: string, checked?: boolean): IToolbarElement;
        addBreak(menu?: IToolbarMenuElement): IToolbarMenuElement;
        setItemChecked(item: IToolbarBaseElement, checked: boolean, menu?: IToolbarMenuElement): void;
        setItemAutoChecked(item: IToolbarBaseElement, menu?: IToolbarMenuElement): void;
        isItemChecked(item: IToolbarBaseElement, menu?: IToolbarMenuElement): boolean;
        getItemByID(id: string): IToolbarBaseElement;
        buildElement(parent: string): void;
    }
}
