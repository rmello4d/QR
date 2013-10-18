(function() {
    "use strict";
    var widget = WAF.require('waf-core/widget');
    var event = WAF.require('waf-core/event');
    var QR = widget.create('QR');
     
    QR.prototype.init = function () {
        //console.log('init');
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
        //console.log(this._QR);
        
    };
     
   
     /**
     * This method recreates the code and fire the event QREvent
     * @class QR
     * @method repaint 
     * 
      */
    QR.prototype.repaint = function () {

    	this._QR.clear();
    	
        // check if contentQR is not null/undef
        if(this._contentQR)
            this._QR.makeCode(this._contentQR);
        
    };
    
    
     /**
     * This method returns the QR content
     * @class QR
     * @method getContent 
     * 
      */
    QR.prototype.getContent = function () {
        return this._contentQR;
       
    };
    
     /**
     * This method set the QR content and repaints the widget
     * @class QR
     * @method setContent 
     * 
      */
    QR.prototype.setContent = function (value) {
    	if (this._contentQR != value) {
     	   this._contentQR = value;
     	   this.repaint();
    	}
    };
    
    
    
    // adding the content property and defining the set method called for the property
    QR.addProperty('content', {
        default_value: 'Default',
        setter: QR.prototype.setContent
    });
    
    
})();
