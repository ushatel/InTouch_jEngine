/** 
 * jEngine Earth Servant v1.0.1 
 * 
 * URL: http://github.com/ushatel/jEngine/ 
 */

(function() { 

	var Earth = function () { 

		// Required name of jEngine Earth Servant 
		this.name = "Earth"; 

		// jEngine Name of Earth Servant actual version 
		this.version = "jEngine.Earth v1.0.1"; 

		this.vernum = "1.0.1"; 

		this.keyEarthPoints = {}; 

		this.isVectorMap = true;

		this.initialize = function () 
		{ 
			var result = null; 

			if( $.jEngine != null ) 
			{ 
				$.jEngine.Earth = this; 

				$.jEngine.hireServant( $.jEngine.Earth ); 

				result = this; 
			} 

			return result; 
		}; 

		// displays Earth object with params 
		// { width : <width in pixels>, height : <height in pixels> } 
		this.show = function ( param ) 
		{ 
			var result = null; 

			var container = null; 

			if( param["container"] ) 
				container = $( param["container"] )[0]; 

			container.innerHTML = "Earth is loading..."; 

			var coord = new Coordinate( { title: "Title", long : 2.0, lat : 2.0 } ); 

			
			return result; 
		}; 

		this.run = function () 
		{ 
			
		}; 

		this.keyEarthPoints = function () 
		{ 

		}; 

		this.initialize(); 
	} 

	var Coordinate = function( param ) 
	{ 
		this.title = "greenwich"; 
		this.name = "Greenwich"; 
		this.longtitude = 0.0; 
		this.latitude = 0.0; 

		this.links = function ( param ) 
		{ 
			this.links = {}; 

			if ( param["push"] ) 
			{ 
				
			} 

			return this.links; 
		}; 

		if( !isNaN( param["lat"] ) ) 
		{
			this.latitude = param["lat"]; 
		} 

		if( !isNaN( param["long"] ) ) 
		{ 
			this.longtitude = param["long"]; 
		} 

		if( param["title"] != null && param["t"] == null ) 
		{ 
			this.title = param["title"]; 
		} 
		else if ( param["t"] != null ) 
		{
			this.title = param["t"]; 
		}

	} 

	var Landmarks = function( param ) 
	{ 
		this.coordinates = {}; 

		this.initialize = function () 
		{
			
		};

		this.vector = function ( param ) 
		{ 
			alert( " 123 " ); 
		}; 

		this.initialize(); 
	} 

	try { 

	$.Earth = (new Earth()); 

	$.Earth.Landmarks = (new Landmarks()); 

	$.jEngine.Earth = $.Earth; 

	}
	catch( ex ) {

		document.write("<br><font style='color:#FF0000;'>jEngine module not found! Check jEngine.js main components, please!</font>");

	} 

})(); 