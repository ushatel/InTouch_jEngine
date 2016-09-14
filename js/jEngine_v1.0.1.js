/** 
 * jEngine v1.0.1 
 * 
 * URL: http://github.com/ushatel/jEngine/ 
 */ 

(function() { 

 var jEngine = function (param) 
 { 
	this.selected = {}; 

	this.initialize = function () 
	{ 
		// initializations of base activities 

		// add special activity loaded 
		this.hireActivity ( {  "activity" : "baked", "entity" : document, "instructions" : function ( code ) { 
	
	if( code ) 
	{ 
		var instruction = { "event" : "load", "entity" : window, "instructions" : code }; 

		$("jEngine").hireEvent( instruction ); 
	} 

	 } } ); 
		// !!! FUTURE v1.0.2 implement stack of loaded 

		return this; 
	}; 

	// Hires Activity { "activity" : Object.Activity, "instructions" : function () { } } 
	this.hireActivity = function ( object ) { 

		var result = null; 

		if ( object != null && object.activity != null && object.entity != null && object.instructions != null ) 
		{ 
			(object["entity"])[object["activity"]] = object.instructions; 

			result = object["entity"]; 
		
		} 

		return result; 
	}; 

	// Hires Event Listener { "event" : "ElementEventName", "instructions" : function () { } } 
	this.hireEvent = function ( eventData ) { 

if ( eventData != null && eventData.event != null && eventData.entity && eventData.instructions != null ) { 

			if( (eventData["entity"]).addEventListener ) 
			{ 
	(eventData["entity"]).addEventListener( eventData.event, eventData.instructions ); 
			} 
			else if ( (eventData["entity"]).attachEvent ) 
			{ 
				eventName = "on" + eventData.event;
				(eventData["entity"]).attachEvent( eventName, eventData.instructions ); 
			} 

		} 

	}; 

	// jEngine factory of $() shoulders 
	this.engine = function (param) 
	{ 
		var result = null; 

		switch (param) 
		{ 
			case "document" : 

				result = document; 

			break; 

			case "shiftRight" : 

				alert ("shift right"); 

			break; 

			case "jEngine": 

				result = $.jEngine; 

			break; 

			default: 

				// Check if Servant was asked 
				if( servant = $.jEngine.servants( param ) ) 
				{ 
					result = servant; 
				} // Check if CSS Selector asked 
				else if ( result = $.jEngine.select( param ) ) 
				{ 
				} 
				else 
				{ 
					result = jEngine; 
				} 

			break; 
		} 

		return result; 
	}; 

	this.select = function ( identifier ) 
	{ 
		var elements = {}; 

		if( document.querySelector( identifier ) ) 
		{ 
			elements = document.querySelectorAll ( identifier ); 
		} 

		elements = (new jElement(elements)); 

		return elements; 
	} 

	// !!! FUTURE Will hook any function on entity 
	this.hook = function() 
	{

	} 

	// Set of servants 
	this.servants = function ( servantName ) 
	{ 
		var result = null; 

		if( this.servants[servantName] ) { 

			result = this.servants[servantName]; 

		}

		return result; 
	}; 

	// Hire servant to run mission 
	this.hireServant = function ( servant ) 
	{ 

		if( servant != null && servant.name != "" ) 
			this.servants[servant.name] = servant; 

		return servant; 
	}; 

 }

 // Initializes all the basic properties, methods for DOM Elements if required 
 var jElement = function ( elem ) 
 { 

	// indicates DOM element is jEngineNode 
	jEngineNode : true; 

	this.workers = function () { 

		$.jEngine.hireActivity( { "activity" : "scalar", "entity" : elem, "instructions" : function() { var result = null; if( elem.length == 1 ) { result = elem[0]; } return result; } } ); 

		$.jEngine.hireActivity ( {  "activity" : "html", "entity" : elem, "instructions" : this.html } ); 

		$.jEngine.hireActivity ( { "activity" : "jElement", "entity" : elem, "instructions" : this } ); 

	} 

	// Allows to write and read innerHTML 
	this.html = function( html ) { 

		var result = undefined; 

		var elem = undefined; 

		if(this.length > 0) {
			elem = this[0];
		} 
		else { 
			elem = this;
		}

		// It is block type element 
		if( typeof(elem.innerHTML) == "string" ) { 

			if( typeof(html) == "string" || typeof(html) == "String" ) { 
				elem.innerHTML = html; 
				result = html;
			} 
			else {
				result = elem.innerHTML; 
			}
		} 

		return result; 
	} 

	// Constructor for Element 
	return (function( elem, jElementHook ) { 

		jElementHook.workers(); 

		return elem; 
	})(elem, this); 
 } 

 var Governeurs = function () 
 { 
	alert("Utils"); 

// !!! FUTURE v1.0.2 extending objects tool 

 } 

 // Initializations 
 var enterprise = (new jEngine().initialize()); 

 // !!! FUTURE v1.0.2 Must check input script params for reserve '$' to jEngine 
 $ = enterprise.engine; 

 $.jEngine = enterprise; 

})();