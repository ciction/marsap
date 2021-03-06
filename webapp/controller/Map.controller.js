sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, MessageToast, Filter, FilterOperator, formatter) {
	"use strict";

	return Controller.extend("htf.marsap.controller.Map", {
		onInit: function() {
			// Register to the add route matched
			
		},
		
		showDetail: function(){
			this.getOwnerComponent().getRouter().navTo("sensorDetail");
		},
		
		showDrone: function(){
			this.getOwnerComponent().getRouter().navTo("drone");
		}
	});
});