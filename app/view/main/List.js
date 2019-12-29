Ext.define('DemoClassic.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'DemoClassic.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },
    autoLoad: true,
    tbar: [{
        text: 'Add record',
        handler: 'onAddClick'
    }],

    columns: [{
        dataIndex: 'avatar',
        renderer: function(value) {
            return '<img src="' + value + '"  height="32" width="32"/>';
        },
        width: 60
    }, {
        text: 'Name',
        dataIndex: 'fullname',
        flex: 1
    }, {
        xtype: 'checkcolumn',
        text: 'Active',
        dataIndex: 'active'
    }, {
        xtype: 'actioncolumn',
        text: 'Action',
        items: [{
            iconCls: 'x-fa fa-dot-circle',
            tooltip: 'Edit',
            handler: 'onEditClick'
        }, {
            iconCls: 'x-fa fa-minus-circle',
            tooltip: 'Delete',
            handler: 'onDeleteClick'
        }]
    }],

    listeners: {
        select: 'onItemSelected'
    }
});