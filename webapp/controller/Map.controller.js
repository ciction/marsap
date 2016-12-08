sap.ui.define([
	"opensap/EhackB/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/ODataModel"
], function(BaseController, JSONModel, ODataModel) {
	"use strict";

	return BaseController.extend("opensap.EhackB.controller.Game", {

		onInit: function() {
			
			
			
			var oModel = new JSONModel();
			var that = this;
			
			var zModel = new ODataModel("/SAP_Gateway_R41Z/sap/opu/odata/sap/zehackb51_srv");   
			var yModel = new ODataModel("/SAP_Gateway_R41Z/sap/opu/odata/sap/zehackb51_srv"); 
			
			//zModel.read("/TeamSet");
			
			//this.getOwnerComponent().getModel.read("/TeamSet");
			
			//this.getModel().read("/GameSet");
			
			zModel.read("/GameSet", {success: function(oData, oResponse){
				oModel.setData(oResponse.body);
			}, error: function(oError){
				jQuery.sap.log.error(oError);
			}});
			
			yModel.read("/GameSet", {success: function(oData, oResponse){
				oModel.setData(oResponse.body);
			}, error: function(oError){
				jQuery.sap.log.error(oError);
			}});
			
			this.getView().setModel(oModel, "oModel");
			this.getView().setModel(zModel, "oModel");
			console.log(yModel);
			
		/*var oModel = new sap.ui.model.odata.v2.ODataModel("/SAP_Gateway_R41Z/sap/opu/odata/sap/zehackb51_srv/");
		this.updateModelOnComponent(oModel,"oModel");*/
		
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.erasmus.ui5.sinterklaas.view.KinderenMD
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.erasmus.ui5.sinterklaas.view.KinderenMD
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.erasmus.ui5.sinterklaas.view.KinderenMD
		 */
		//	onExit: function() {
		//
		//	}

	});

});