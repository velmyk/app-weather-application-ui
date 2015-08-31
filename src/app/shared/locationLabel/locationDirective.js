angular
	.module("app")
	.directive("currentLocation", currentLocation);

function currentLocation() {

	return {
		template: 
      			  "<div class='col-xs-2 location-gear'></div>" +
      			  "<div class='col-xs-8'>Today in {{home.city}}</div>" + 
      			  "<div class='col-xs-2'></div>"
	};
}