Ext.define('DemoClassic.view.main.AddPerson', {
    extend: 'Ext.window.Window',
    xtype: 'add-person',
    controller: 'add-person',

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
            fieldLabel: 'First name',
            bind: '{person.firstName}',
            allowBlank: false
        }, {
            fieldLabel: 'Last name',
            bind: '{person.lastName}',
            allowBlank: false
        }],
        buttons: [{
            text: 'Add',
            formBind: true, //only enabled once the form is valid
            handler: 'onAddClick'

        }, {
            text: 'Close',
            handler: 'onCloseClick'
        }]
    }],
});