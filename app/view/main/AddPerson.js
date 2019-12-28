Ext.define('DemoClassic.view.main.AddPerson', {
    extend: 'Ext.window.Window',
    xtype: 'add-person',

    title: 'Add Person',
    width: 400,
    minWidth: 300,
    modal: true,
    centered: true,
    floating: true, // show method is activated

    items: [{
        xtype: 'form',
        padding: 10,
        defaultType: 'textfield',
        fieldDefaults: {
            labelWidth: 90,
            msgTarget: 'side'
        },
        layout: {
            type: 'vbox',
        },
        viewModel: {
            data: {
                person: {
                    firstName: '',
                    lastName: ''
                }
            },
        },
        items: [{
            fieldLabel: 'First Name',
            bind: '{person.firstName}',
            allowBlank: false
        }, {
            fieldLabel: 'Last Name',
            bind: '{person.lastName}',
            allowBlank: false
        }],


        buttons: [{
            text: 'Add',
            formBind: true, //only enabled once the form is valid
            handler: function() {
                var w = this.up('add-person'),
                    data = this.up('form').viewModel.data   //passing data from form's viewModel 
                w.list.getStore().add({
                    first_name: data.person.firstName,
                    last_name: data.person.lastName
                });
                w.list.getView().refresh();
                this.up('add-person').destroy();
            }
        }, {
            text: 'Close',
            handler: function() {
                this.up('add-person').destroy();
            }
        }]
    }],
});