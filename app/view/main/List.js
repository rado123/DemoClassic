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
//              console.log(' delete, rec:', rec, this)
                Ext.Msg.show({
                    title: "Delete changes?",
                    message: 'Do you want to delete ' + rec.get('fullname') + ' ?',
                    buttons: Ext.Msg.YESNO,
//                    callback: "onConfirmDelete",
                    fn: "onConfirmDelete",
                    scope: this,
                    record: rec     //to pass parameter into opt
                });
            }
        }],
        onConfirmDelete: function(buttonid, text, opt) {
//          console.log('on cnf delete inside action', buttonid, text, opt)
            if (buttonid == 'yes') {
                opt.record.drop();
            }
        }
    }],

    listeners: {
        select: 'onItemSelected'
    }
});