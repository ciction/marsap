sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/core/routing/History",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageToast"
], function(Controller, MessageToast, Filter, FilterOperator, formatter, History) {
	"use strict";

	return Controller.extend("htf.marsap.controller.Drone", {
		onInit: function() {
			// Register to the add route matched
			
		},
		
		onNavBack: function() {
			this.getOwnerComponent().getRouter().navTo("map");
			MessageToast.show("Returning to basis", {
				closeOnBrowserNavigation: false
			});
		},
		
		onFire: function(){
			MessageToast.show("Missile fired!!", {
				closeOnBrowserNavigation: false
			});
		},
		
		onLaunch: function(){
			MessageToast.show("Taking off", {
				closeOnBrowserNavigation: false
			});
		}
	});
});