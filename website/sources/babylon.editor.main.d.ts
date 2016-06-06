declare module BABYLON.EDITOR {
    class EditorMain implements IDisposable, IEventReceiver {
        core: EditorCore;
        editionTool: EditionTool;
        sceneGraphTool: SceneGraphTool;
        mainToolbar: MainToolbar;
        toolsToolbar: ToolsToolbar;
        sceneToolbar: SceneToolbar;
        SceneHelpers: SceneHelpers;
        transformer: ManipulationHelper;
        editPanel: EditPanel;
        timeline: Timeline;
        container: string;
        mainContainer: string;
        antialias: boolean;
        options: any;
        layouts: GUI.GUILayout;
        playLayouts: GUI.GUILayout;
        filesInput: FilesInput;
        exporter: Exporter;
        renderMainScene: boolean;
        renderHelpers: boolean;
        private _saveCameraState;
        /**
        * Constructor
        */
        constructor(containerID: string, antialias?: boolean, options?: any);
        /**
        * Event receiver
        */
        onEvent(event: Event): boolean;
        /**
        * Creates the UI
        */
        private _createUI();
        /**
        * Creates a new project
        */
        createNewProject(): void;
        /**
        * Handles just opened scenes
        */
        private _handleSceneLoaded();
        /**
        * Creates the babylon engine
        */
        private _createBabylonEngine();
        /**
        * Creates the editor camera
        */
        private _createBabylonCamera();
        /**
        * Reloads the scene
        */
        reloadScene(saveCameraState: boolean, data?: any): void;
        /**
        * Creates the render loop
        */
        createRenderLoop(): void;
        /**
        * Simply update the scenes and updates
        */
        update(): void;
        dispose(): void;
    }
}
