
// - - - - - Fade in / Fade out - - - - -


function fadeIn(img,layer,x,y)
	{
	fadeIn_var = 0;
	layer.globalAlpha = 0;
	layer.drawImage(img, x, y);

	var fade_interval = setInterval(fadeIn2, 50);
	function fadeIn2()
		{
		if (fadeIn_var < 1)
			{
			layer.clearRect(0,0, 1000, 800);
			fadeIn_var = fadeIn_var + 0.05;
			layer.globalAlpha = fadeIn_var;
			layer.drawImage(img, x, y);
			}
		else
			{
			clearInterval(fade_interval);
			}
		}
	}

function fadeOut(img,layer,x,y)
	{
	fadeOut_var = 1;
	layer.globalAlpha = 1;
	layer.drawImage(img, x, y);

	var fade_interval2 = setInterval(fadeOut2, 50);
	function fadeOut2()
		{
		if (fadeOut_var > 0)
			{
			layer.clearRect(0,0, 1000, 800);
			fadeOut_var = fadeOut_var - 0.05;
			layer.globalAlpha = fadeOut_var;
			layer.drawImage(img, x, y);
			}
		else
			{
			clearInterval(fade_interval2);
			layer.clearRect(0,0, 1000, 800);
			}
		}
	}

var fadevar = true; var cg_var = true;

function fadetoblack()
	{
	fadevar = true;
	var black = new Image();

	black.src = "Graphics/BGs/black.png";
	black.onload = function()
		{
		fadeIn(black,ctx12,0,0);
		continue1(2000);
		var fadeinterval = setInterval(fadeinterval2,1000);
		function fadeinterval2()
			{
			if (fadevar == true)
				{
				ctx12.clearRect(0,0, 1000, 800);
				ctx1.drawImage(black,0,0); fadevar = false;
				}
			else if (fadevar == false)
				{
				ctx12.clearRect(0,0, 1000, 800);
				clearInterval(fadeinterval);
				}
			}
		}
	}

function fadetowhite()
	{
	var white = new Image();

	white.src = "Graphics/BGs/white.png";
	white.onload = function()
		{
		fadeIn(white,ctx4,0,0);
		}
	//scanDialogue(current_scene,scene_num);
	//scene_num++;
	}















