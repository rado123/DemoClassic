Ext.define('DemoClassic.view.main.AddPersonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.add-person',

    onAddClick: function(button) {
        // console.log('on add onAddClick',button)
        const
            w = button.up('add-person'),
            data = button.up('form').viewModel.data //passing data from form's viewModel 
        w.list.getStore().add({
            // assign values from the form
            first_name: data.person.firstName,
            last_name: data.person.lastName
        });
        w.list.getView().refresh(); //the record is added to the grid
        this.closeWindow(button)
    },
    onCloseClick: function(button) {
        // console.log('on onCloseClick', button ,this)
        this.closeWindow(button)
    },
    closeWindow: function(button) {
        console.log('closeWindow')
        button.up('add-person').destroy();
    }


});