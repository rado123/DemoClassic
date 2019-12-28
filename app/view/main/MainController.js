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
        //        console.log("on add click", this, button)
        //      console.log('on add list', list)
        //    console.log('win:', win)
        win.show();
    }
});