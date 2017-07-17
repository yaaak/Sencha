/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'AppExt.Application',

    name: 'AppExt',

    requires: [
        // This will automatically load all classes in the AppExt namespace
        // so that application classes do not need to require each other.
        'AppExt.*'
    ],

    // The name of the initial view to create.
    mainView: 'AppExt.view.main.Main'
});
