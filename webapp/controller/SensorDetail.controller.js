sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/ODataModel"
], function(Controller, MessageToast, JSONModel, ODataModel) {
	"use strict";

	return Controller.extend("htf.marsap.controller.SensorDetail", {
		onInit: function() {
			var oModel = new JSONModel();
			
			var zModel = new ODataModel("/marsap");   
			
			//zModel.read("/TeamSet");
			
			//this.getOwnerComponent().getModel.read("/TeamSet");
			
			//this.getModel().read("/GameSet");
			
			zModel.read("/NEO_73EU60CR98FIAF9JSH1ZUEZ5L.T_IOT_41678719D8EF46938B36", {success: function(oData, oResponse){
				oModel.setData(oResponse.body);
			}, error: function(oError){
				jQuery.sap.log.error(oError);
			}});
			
			this.getView().setModel(zModel, "oModel");
		}
	});
});