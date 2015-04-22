var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var tvWindowObject=window.webapis.tv.window;
var Main =
{

};

Main.onLoad = function()
{
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
	resizeTvScreen();;
};

Main.onUnload = function()
{

};

Main.enableKeys = function()
{
	document.getElementById("anchor").focus();
};

Main.keyDown = function()
{
	var keyCode = event.keyCode;
	alert("Key pressed: " + keyCode);

	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			alert("RETURN");
			widgetAPI.sendReturnEvent();
			break;
		case tvKey.KEY_LEFT:
			alert("LEFT");
			break;
		case tvKey.KEY_RIGHT:
			alert("RIGHT");
			break;
		case tvKey.KEY_UP:
			alert("UP");
			break;
		case tvKey.KEY_DOWN:
			alert("DOWN");
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:
			alert("ENTER");
			break;
		default:
			alert("Unhandled key");
			break;
	}
};
function resizeTvScreen(){
	tvWindowObject.getAvailableWindow(availableWindowSuccess,availableWindowFailure);
	
}
function availableWindowSuccess(windowsIdList){
	if(windowsIdList==0){
		alert('Got the default window id');
	}
	else{
		alert('Got a list of windows');
	}
	resizeTvWindowView();
	}


function availableWindowFailure(){
	alert('Failure in getting window list');
}
var tvSpecs={
		width:640,
		height:480,
		left:5,
		top:30
		
};
function resizeTvWindowView(){
	var result=tvWindowObject.setRect(tvSpecs,0);
	if(result==true){
			alert('tv rscreen resize ok');
			
	}else{
		alert('tv screen resize fail');
	}
}

