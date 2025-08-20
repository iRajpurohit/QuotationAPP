
function myCacheControl() {
    return new Date().toISOString().slice(0, 15);
}

// Synchronous approach.
// 3rd Party Libraries.

var allScripts = [
     'js/jquery-1.11.3.min.js',
	 'js/bootstrap.min.js',
	 //'js/app.js',
	 //'js/fab.js',   
     'js/jspdf.debug.js',
     'js/jspdf.plugin.autotable.js',
     'js/createPDf.js',
	 'js/BondCalculation.js',
     //'jquery.cookie.js'
];

 allScripts.forEach(function(scriptSrc, index){
	 var timespan = 100;
	 setTimeout(function(){ 
		var scriptNode = document.createElement('script');
		scriptNode.src = scriptSrc + '?ts=' + myCacheControl();
		scriptNode.async = false;	
		loadmyscript(scriptNode);		
		timespan = timespan + 100; // mark each script to load after 10 ms after previous
		}, timespan);
});

function loadmyscript(scriptNode){
	console.log( 'attempting ' + (new Date()) + ' ' + scriptNode.src);
	var d = document.body;
	if(d) {
		document.body.appendChild(scriptNode);
	}else {
		console.log('document.body is null ' + scriptNode.src);
		d = document.head;
		if(d) {			
			document.head.appendChild(scriptNode);
		}else {
			console.log('document.head is also null ' + scriptNode.src);
		}
	}
	console.log('loaded ' + scriptNode.src);
}

