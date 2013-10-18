(function() {
    var QR = Widget.QR.inherit(WAF.require('waf-behavior/studio'));
    

	// adding all the attributes to Studio Property Panel 
    QR.addAttributes([{
        'name': 'data-content',
        'description': 'Content',
        'typeValue': 'string',
        'defaultValue': '' 
    } ,{
        'name': 'data-binding-content',
        'description': 'Content-source',
        'typeValue': 'datasource'
    } , {
        'name': 'data-colorDark',
        'description': 'colorDark',
        'typeValue': 'string',
        'defaultValue': '#000000' 
    } , {
        'name': 'data-colorLight',
        'description': 'colorLight',
        'typeValue': 'string',
        'defaultValue': '#ffffff' 
    }, {
        'name': 'data-CorrectLevel',
        'description': 'CorrectLevel',
        'defaultValue': 'H',
        'type': 'dropdown',
        'options': ['L', 'M', 'Q', 'H']
    }]);
    

})();
