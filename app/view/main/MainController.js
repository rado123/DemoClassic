/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('DemoClassic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function(sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    },
    onConfirmDelete: function(buttonid) {
        if (buttonid == 'yes') {
            console.log('on conf delete', buttonid, this);

        }
    },
    onRemoveClick: function(view, recIndex, cellIndex, item, e, record) {
        record.drop();
    }


});