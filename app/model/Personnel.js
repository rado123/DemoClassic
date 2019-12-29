Ext.define('DemoClassic.model.Personnel', {
	extend: 'DemoClassic.model.Base',

	fields: [{
		name: 'id',
		type: 'int'
	}, {
		name: 'first_name',
		type: 'string'
	}, {
		name: 'last_name',
		type: 'string'
	}, {
		name: 'fullname',
		convert: function(value, record) {
			const fn = record.get('first_name'),
				ln = record.get('last_name')
			return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
		},
		depends: ['first_name', 'last_name']
	}, {
		name: 'avatar',
		type: 'string'
	}, {
		name: 'active',
		type: 'boolean',
		defaultValue: 1
	}]
});