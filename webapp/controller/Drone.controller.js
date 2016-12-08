sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/core/routing/History",
	"sap/ui/model/FilterOperator"
], function(Controller, MessageToast, Filter, FilterOperator, formatter, History) {
	"use strict";

	return Controller.extend("htf.marsap.controller.Drone", {
		onInit: function() {
			// Register to the add route matched
			
		},
		
		onNavBack: function() {
			var oHistory = History.getInstance(),
				sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				// The history contains a previous entry
				history.go(-1);
			} else {
				// Otherwise we go backwards with a forward history
				var bReplace = true;
				this.getRouter().navTo("games", {}, bReplace);
			}
		}
	});
});