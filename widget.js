WAF.define('QR', function() {
    "use strict";
    var widget = WAF.require('waf-core/widget');
    var QR = widget.create('QR');
     
    QR.prototype.init = function () {
    	var qrcode,
    		width,
    		height,
    		size,
    		params = {};

        width = $(this.node).width();
    	height = $(this.node).height();
    	size = width;
    	if (width > height) {
	 		size = height;
	 	}
    	
    	params.width = size;
    	params.height = size;
    	
    	params.colorDark = this.options.colordark ? this.options.colordark : "#000000";
    	params.colorLight = this.options.colorlight ? this.options.colorlight : "#ffffff";
    	params.CorrectLevel = this.options.correctlevel ? this.options.correctlevel : "H";
    	
        $(this.node).empty();
    	this._QR = new QRCode(this.node, params);
    	
    	this.content.onChange(function (value) {this.repaint();});
        
        this.repaint();
    };
     
   
     /**
     * This method recreates the code and fire the event QREvent
     * @class QR
     * @method repaint 
     * 
      */
    QR.prototype.repaint = function (val) {
        this._QR.makeCode(this.content());
    };
    
    // adding the content property and defining the set method called for the property
    QR.addProperty('content', {defaultValue: ''});
    
    return QR;
});
