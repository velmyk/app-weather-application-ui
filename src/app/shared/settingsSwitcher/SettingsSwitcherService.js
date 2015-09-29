(function(){
	"use strict";

	angular
		.module("app")
			.factory("SettingsSwitcherService", SettingsSwitcherService);

	function SettingsSwitcherService(localStorageService) {

		function setSettings($event) {
			var key = $event.target.attributes["data-settings-key"].value,
			    value = $event.target.attributes["data-settings-value"].value;
			
			localStorageService.remove(key);
			localStorageService.set(key,value);
		}

		return {
			setSettings : setSettings
		};
	}
	
})();