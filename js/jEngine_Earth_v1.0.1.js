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
		this.latitude = 0.0; // parallel 
		this.longtitude = 0.0; // meridian 
		this.hemisphereLat = "N"; // "Northern" or 
"Southern" 
		this.hemisphereLat = "E"; // "Western" or "Eastern" 
		this.height = 0.0; // height above sea level 

		// Geo scense of landmark 
		this.scense = {  }; // "Cape", "Island", "City", "Mountain" etc

		this.links = function ( param ) 
		{ 
			this.links = {}; 

			if ( param["push"] ) 
			{ 
				
			} 

			return this.links; 
		}; 

		// returns country for coordinate 
		this.country = function() 
		{ 
			return "Ukraine"; 
		};  

		if( !isNaN( param["lat"] ) ) 
		{
			this.latitude = param["lat"]; 
		} 
		else if ( !isNaN( param["parallel"] ) ) 
		{ 
			this.latitude = param["parallel"]; 
		} 
		else if ( !isNaN( param["phi"] ) ) 
		{ 
			this.latitude = param["phi"];
		} 
		else if ( !isNaN( param["?"] ) ) 
		{ 
			this.latitude = param["?"]; 
		}

		if( !isNaN( param["long"] ) ) 
		{ 
			this.longtitude = param["long"]; 
		} 
		else if ( !isNaN( param["meridian"] ) ) 
		{ 
			this.longtitude = param["meridian"]; 
		} 
		else if ( !isNaN( param["lambda"] ) )
		{ 
			this.longtitude = param["lambda"]; 
		} 
		else ( !isNaN( param["?"] ) ) 
		{ 
			this.longtitude = param["?"]; 
		}

		if( param["title"] != null && param["t"] == null ) 
		{ 
			this.title = param["title"]; 
		} 
		else if ( param["t"] != null ) 
		{
			this.title = param["t"]; 
		}

		if( $.Earth.Landmarks ) 
		{ 
			$.Earth.Landmarks.expenseCoordinate( this );
		} 

	} 

	var Landmarks = function( param ) 
	{ 
		this.coordinates = {}; 

		this.initialize = function () 
		{
			this.loadCoordinates(); 

			return this; 
		};

		this.vector = function ( param ) 
		{ 
			alert( " 123 " ); 
		}; 

		this.coordinate = function ( nameCoordinate ) 
		{ 
			var result = null; 

			if( nameCoordinate ) 
			{ 
				result = this.coordinates[nameCoordinate]; 
			} 

			return result; 
		} 

		this.expenseCoordinate = function ( coordinate ) 
		{ 
			if( coordinate.name )
			{
				this.coordinates[coordinate.name] = coordinate; 
			} 

			alert( this.coordinate("Greenwich").name ); 
		}; 

		this.loadCoordinates = function () 
		{ 

			(new Coordinate( { t : "Grinwich", lat : 51.477808, long : -0.001472, scense : "Grinwich" } )); 

			(new Coordinate( { t : "Cape Agulhas", lat : 0.0, long : 0.0, scense : "Cape" } )); 

			(new Coordinate( { t : "Cape of Good Hope", lat : 0.0, long : 0.0, scense : "Cape", country : "South Africa" } )); 

			(new Coordinate( { t : "Ras Kasar", lat : 0.0, long : 0.0, scense : "Cape", country : "Entrea-Sudan" } )); 

			(new Coordinate( { t : "Cape Coast", lat : 0.0, long : 0.0, scense : "Cape", country : "Ghana" } )); 

			(new Coordinate( { t : "Cape Mesurado", lat : 0.0, long : 0.0, scense : "Cape", country : "Liberia" } )); 

			(new Coordinate( { t : "Cape Palmas", lat : 0.0, long : 0.0, scense : "Cape", country : "Liberia" } )); 

			(new Coordinate( { t : "Grand Cape Mount", lat : 0.0, long : 0.0, scense : "Cape", country : "Liberia" } )); 

			(new Coordinate( { t : "Cape Blanc", lat : 0.0, long : 0.0, scense : "Cape", country : "Mauritania" } )); 

			(new Coordinate( { t : "Cape Juby", lat : 0.0, long : 0.0, scense : "Cape", country : "Marocco" } )); 

			(new Coordinate( { t : "Cape Three Forks", lat : 0.0, long : 0.0, scense : "Cape", country : "Marocco" } )); 

			(new Coordinate( { t : "Cap-Vert", lat : 0.0, long : 0.0, scense : "Cape", country : "Senegal" } )); 

			(new Coordinate( { t : "Cape Guardaful", lat : 0.0, long : 0.0, scense : "Cape", country : "Somalia" } )); 

			(new Coordinate( { t : "Cap Bon", lat : 0.0, long : 0.0, scense : "Cape", country : "Tunisia" } )); 

		}

		this.initialize(); 
	} 

	var Continent = function ( param ) {

		this.title = ""; 
		
		this.name = ""; 

		this.continents = function() 
		{ 
			return [ "Africa", "Asia", "Europe", "North America", "South America", "Antarctica" ];
		}; 
	} 

	var Country = function ( param ) {

		this.title = "";

		this.name = "";

		this.countries = function() 
		{
			return ["Ukraine"]; 
		};

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