angular
	.module("app")
	.directive("windHumidity", windHumidity);

function windHumidity() {

	return {
		template: "<div class='col-xs-4'>"+
        		  "<div class='row '>"+
                  "<div class='col-xs-12 '>40</div>"+
                  "</div>"+
                  "<div class='row '>"+
                  "<div class='col-xs-12 '>"+
                  "<img src='svg/sprite.svg#svgView(viewBox(0, 1024, 512, 512))' width='50px' height='50px' alt='humidity' />"+
                  "</div>"+
                  "</div>"+
                  "</div>"+
                  "<div class='col-xs-4'>"+
                  "<div class='row'>"+
                  "<div class='col-xs-12'>50</div>"+
                  "</div>"+
                  "<div class='row'>"+
                  "<div class='col-xs-12'> <img src='svg/sprite.svg#svgView(viewBox(1024, 2048, 512, 512))'  width='50px' height='50px'  alt='wind' /></div>"+
                  "</div>"+
                  "</div>"+
                  "<div class='col-xs-4'>"+
        		  "<div class='row'>"+
                  " <div class='col-xs-12'>Moon</div>"+
                  "</div>"+
                  " <div class='row'>"+
                  "<div class='col-xs-12'><img src='svg/sprite.svg#svgView(viewBox(0, 1536, 512, 512))'  width='50px' height='50px' alt='moon' /> </div>"+
                  "</div></div>"
	};
}