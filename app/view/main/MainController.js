/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('DemoClassic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function(sender, record, eOpt) {
        Ext.toast({
            html: 'You clicked on ' + record.get('fullname')
        });
    },
    onAddClick: function(button) {
        const
            list = button.up('mainlist'),
            win = DemoClassic.view.main.AddPerson.create({
                list: list //passing parameter into the component
            });
        win.show();
    },
    onEditClick: function(grid, rowIndex, colIndex) {
        // console.log(' on edit click')
        const rec = grid.getStore().getAt(rowIndex)
        Ext.Msg.show({
            title: 'Edit',
            message: 'Edit ' + rec.get('fullname'),
            buttons: []
        });
    },
    onDeleteClick: function(grid, rowIndex, colIndex) {
        // console.log(' on delete click')
        const rec = grid.getStore().getAt(rowIndex);

        // confirm
        Ext.Msg.show({
            fn: 'onConfirmDelete',
            title: 'Delete changes?',
            message: 'Do you want to delete ' + rec.get('fullname') + ' ?',
            scope: this,
            record: rec, //to pass the parameter into opt
            // confirm method defaults:
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
        });
    },
    onConfirmDelete: function(buttonid, text, opt) {
        // console.log('on cnf delete')
        if (buttonid == 'yes') {
            opt.record.drop(); // delete row
        }
    }


});