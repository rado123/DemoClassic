/**
 * This view is an example list of people.
 */
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

    columns: [{
        dataIndex: 'avatar',
        renderer: function(value) {
            return '<img src="' + value + '"  height="32" width="32"/>';
        },
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
            handler: function(grid, rowIndex, colIndex) {
                let rec = grid.getStore().getAt(rowIndex);
                Ext.Msg.show({
                    title: 'Edit',
                    message: 'Edit ' + rec.get('fullname'),
                    buttons: []
                });
            }
        }, {
            iconCls: 'x-fa fa-minus-circle',
            tooltip: 'Delete',
            handler: function(grid, rowIndex, colIndex) {
                let rec = grid.getStore().getAt(rowIndex);
                Ext.Msg.confirm('Delete changes?',
                    'Do you want to delete ' + rec.get('fullname') + ' ?', 'onConfirmDelete', this);
            }
        }]

    }],

    listeners: {
        select: 'onItemSelected'
    }
});