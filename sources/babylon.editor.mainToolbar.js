var BABYLON;
(function (BABYLON) {
    var EDITOR;
    (function (EDITOR) {
        var MainToolbar = (function () {
            /**
            * Constructor
            * @param core: the editor core instance
            */
            function MainToolbar(core) {
                // Public members
                this.container = "BABYLON-EDITOR-MAIN-TOOLBAR";
                this.toolbar = null;
                this.panel = null;
                this._mainAdd = "MAIN-ADD";
                this._addPointLight = "ADD-POINT-LIGHT";
                this._addDirectionalLight = "ADD-DIRECTIONAL-LIGHT";
                this._addSpotLight = "ADD-SPOT-LIGHT";
                this._addHemisphericLight = "ADD-HEMISPHERIC-LIGHT";
                // Initialize
                this._editor = core.editor;
                this._core = core;
                this.panel = this._editor.layouts.getPanelFromType("top");
                // Register this
                this._core.updates.push(this);
                this._core.eventReceivers.push(this);
            }
            // Pre update
            MainToolbar.prototype.onPreUpdate = function () {
            };
            // Post update
            MainToolbar.prototype.onPostUpdate = function () {
            };
            // Event
            MainToolbar.prototype.onEvent = function (event) {
                if (event.eventType === EDITOR.EventType.GUI_EVENT && event.guiEvent.eventType === EDITOR.GUIEventType.TOOLBAR_MENU_SELECTED) {
                    if (event.guiEvent.caller !== this.toolbar || !event.guiEvent.data) {
                        return false;
                    }
                    var id = event.guiEvent.data;
                    var finalID = id.split(":");
                    var item = this.toolbar.getItemByID(finalID[finalID.length - 1]);
                    if (item === null)
                        return false;
                    // Add
                    if (id.indexOf(this._mainAdd) !== -1) {
                        if (id.indexOf(this._addPointLight) !== -1) {
                            EDITOR.SceneFactory.AddPointLight(this._core);
                        }
                        else if (id.indexOf(this._addDirectionalLight) !== -1) {
                            EDITOR.SceneFactory.AddDirectionalLight(this._core);
                        }
                        else if (id.indexOf(this._addSpotLight) !== -1) {
                            EDITOR.SceneFactory.AddSpotLight(this._core);
                        }
                        else if (id.indexOf(this._addHemisphericLight) !== -1) {
                            EDITOR.SceneFactory.AddHemisphericLight(this._core);
                        }
                        return true;
                    }
                }
                return false;
            };
            // Creates the UI
            MainToolbar.prototype.createUI = function () {
                if (this.toolbar != null)
                    this.toolbar.destroy();
                this.toolbar = new EDITOR.GUI.GUIToolbar(this.container, this._core);
                var menu = this.toolbar.createMenu("menu", "MAIN-FILES", "File", "icon-folder");
                //...
                menu = this.toolbar.createMenu("menu", "MAIN-EDIT", "Edit", "icon-edit");
                //...
                menu = this.toolbar.createMenu("menu", this._mainAdd, "Add", "icon-add");
                this.toolbar.createMenuItem(menu, "button", this._addPointLight, "Add Point Light", "icon-light");
                this.toolbar.createMenuItem(menu, "button", this._addDirectionalLight, "Add Directional Light", "icon-directional-light");
                this.toolbar.createMenuItem(menu, "button", this._addSpotLight, "Add Spot Light", "icon-directional-light");
                this.toolbar.createMenuItem(menu, "button", this._addHemisphericLight, "Add Hemispheric Light", "icon-light");
                this.toolbar.addBreak(menu);
                //...
                //menu = this.toolbar.createMenu("menu", this._mainRendring, "Rendering", "icon-camera");;
                //...
                // Build element
                this.toolbar.buildElement(this.container);
            };
            return MainToolbar;
        })();
        EDITOR.MainToolbar = MainToolbar;
    })(EDITOR = BABYLON.EDITOR || (BABYLON.EDITOR = {}));
})(BABYLON || (BABYLON = {}));
//# sourceMappingURL=babylon.editor.mainToolbar.js.map