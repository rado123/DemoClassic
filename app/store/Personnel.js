Ext.define('DemoClassic.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'DemoClassic.model.Personnel',

    proxy: {
        type: 'rest',
        url: 'https://reqres.in/api/users',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});