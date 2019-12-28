Ext.define('DemoClassic.view.main.AddPerson', {
    extend: 'Ext.window.Window',
    xtype: 'add-person',

    title: 'Add Person',
    width: 400,
    minWidth: 300,

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
        border: false,
        items: [{
            fieldLabel: 'First name',
            name: 'first_name',
            allowBlank: false
        }, {
            fieldLabel: 'Last name',
            name: 'last_name',
            allowBlank: false
        }],

        buttons: [{
            text: 'Add',
            formBind: true, //only enabled once the form is valid
            disabled: true,
            handler: function() {
                console.log('add handler')
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