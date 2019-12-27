/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'DemoClassic.Application',

    name: 'DemoClassic',

    requires: [
        // This will automatically load all classes in the DemoClassic namespace
        // so that application classes do not need to require each other.
        'DemoClassic.*'
    ],

    // The name of the initial view to create.
    mainView: 'DemoClassic.view.main.Main'
});
