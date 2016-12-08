sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"htf.marsap/model/models",
	"sap/ui/model/odata/ODataModel"
], function(UIComponent, Device, models, ODataModel) {
	"use strict";

	return UIComponent.extend("htf.marsap.Component", {

		metadata: {
			name : "marsap",
	        version : "1.0",
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// Initialize router
			this.getRouter().initialize();
		}
	});
});