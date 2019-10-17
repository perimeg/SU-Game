
// - - - - - Initialize - - - - - 

var layer1; var layer2; var layer3; var layer4; var layer5; var layer6; var layer7; var layer8; var layer9; var layer10; var layer11; var layer12;
var ctx1; var ctx2; var ctx3; var ctx4; var ctx5; var ctx6; var ctx7; var ctx8; var ctx9; var ctx10; var ctx11; var ctx12;

layer1 = document.getElementById("layer1");
ctx1 = layer1.getContext("2d");
layer2 = document.getElementById("layer2");
ctx2 = layer2.getContext("2d");
layer3 = document.getElementById("layer3");
ctx3 = layer3.getContext("2d");
layer4 = document.getElementById("layer4");
ctx4 = layer4.getContext("2d");
layer5 = document.getElementById("layer5");
ctx5 = layer5.getContext("2d");
layer6 = document.getElementById("layer6");
ctx6 = layer6.getContext("2d");
layer7 = document.getElementById("layer7");
ctx7 = layer7.getContext("2d");
layer8 = document.getElementById("layer8");
ctx8 = layer8.getContext("2d");
layer9 = document.getElementById("layer9");
ctx9 = layer9.getContext("2d");
layer10 = document.getElementById("layer10");
ctx10 = layer10.getContext("2d");
layer11 = document.getElementById("layer11");
ctx11 = layer11.getContext("2d");
layer12 = document.getElementById("layer12");
ctx12 = layer12.getContext("2d");


// - - - - - Testing - - - - - 


function testfunction()
	{
	test_var = true;
	var test_interval = setInterval(testfunction2,10);
	function testfunction2()
		{
		if (test_var == true)
			{
			start_scene(my_scene);
			
			test_var = false;
			}
		else
			{
			clearInterval(test_interval);
			}
		}
	}

testfunction();


