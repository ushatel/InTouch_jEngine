/** 
 * jEngine Navigation Servant v1.0.1 
 * 
 * http://github.com/ushatel/jEngine/ 
 */ 

(function() {

  var Navigation = function() {

	this.name = "Navigation"; 

	this.initialize = function() 
	{ 
		var result = null; 

		//alert(" Navigation "); 

		return result; 
	}; 

  } 

try {

	$.Navigation = (new Navigation()).initialize();  

	$.jEngine.Navigation = $.Navigation; 

}
catch(ex) {

	document.write("<br><font style='color:#FF0000;'>jEngine module not found! Check jEngine.js main components, please!</font>");

}

})();