

// - - - - - Animation Function - - - - -

var check_blink = []; var anim_length = 0; var blinking_var = "";
var cols = 0; var spriteWidth = 0; var spriteHeight = 0;
var width = 0; var height = 0; var curFrame = 0; var frameCount = 0; var srcX = 0; var srcY = 0;
var n = 0; var k = 0;

var anim_interval; var anim_interval2; var animation_var = "";

var anim_x = 130;
var anim_y = 570;
var anim_speed = 100; n=0;

function animate_face()
	{
	ctx9.clearRect(0,0,1000,800);

	if ( 0 < my_dialogue_text.length && my_dialogue_text.length < 15 )
		{
		anim_length = 1;
		}
	else if ( 15 <= my_dialogue_text.length && my_dialogue_text.length < 30 )
		{
		anim_length = 2;
		}
	else if ( 30 <= my_dialogue_text.length && my_dialogue_text.length < 45 )
		{
		anim_length = 3;
		}
	else if ( 45 <= my_dialogue_text.length && my_dialogue_text.length < 60 )
		{
		anim_length = 4;
		}
	else if ( 60 <= my_dialogue_text.length && my_dialogue_text.length < 75 )
		{
		anim_length = 5;
		}
	else if ( 75 <= my_dialogue_text.length && my_dialogue_text.length < 90 )
		{
		anim_length = 6;
		}
	else if ( 90 <= my_dialogue_text.length && my_dialogue_text.length < 105 )
		{
		anim_length = 7;
		}
	else if ( 105 <= my_dialogue_text.length && my_dialogue_text.length < 120 )
		{
		anim_length = 8;
		}
	else if ( 120 <= my_dialogue_text.length && my_dialogue_text.length < 135 )
		{
		anim_length = 9;
		}
	else if ( 135 <= my_dialogue_text.length && my_dialogue_text.length < 150 )
		{
		anim_length = 10;
		}
	else if ( 150 <= my_dialogue_text.length && my_dialogue_text.length < 165 )
		{
		anim_length = 11;
		}

	check_blink = anim_src.split("_"); 

	if (check_blink[check_blink.length - 1] == "blink")
		{
		blinking_var = true; 
		
		blinkitup();
		}
	else
		{
		blinking_var = false;

		var character = new Image();
		character.src = "Graphics/Animations/" + check_blink[0] + "_talk.png";

		character.onload = function()
			{
			curFrame = 0; srcY = 0; n = 0;
			spriteWidth = character.naturalWidth; spriteHeight = character.naturalHeight;
			cols = spriteWidth/spriteHeight; frameCount = cols;
			width = spriteWidth/cols; height = spriteHeight; 

			ctx9.drawImage(character,srcX,srcY,width,height,anim_x,anim_y,width,height);

			anim_interval = setInterval(drawtalk,anim_speed);
			}
		function drawtalk()
			{
			if (n < anim_length*cols)
				{
				n++;
				updateFrame();
				ctx9.drawImage(character,srcX,srcY,width,height,anim_x,anim_y,width,height);
				}
			else
				{
				clearInterval(anim_interval); //ctx9.clearRect(0,0,1000,800);
				blinkitup(); 
				}
			function updateFrame()
				{
				curFrame = ++curFrame % frameCount;				
				srcX = curFrame * width; 
				//ctx9.clearRect(0,0,1000,800);	
				}
			}
		}
	function blinkitup()
		{
		clearInterval(anim_interval2);
		animation_var = true;
		var character = new Image();
		character.src = "Graphics/Animations/" + check_blink[0] + "_blink.png";

		character.onload = function()
			{
			curFrame = 0; srcY = 0;
			spriteWidth = character.naturalWidth; spriteHeight = character.naturalHeight;
			cols = spriteWidth/spriteHeight; frameCount = cols;
			width = spriteWidth/cols; height = spriteHeight;
			ctx9.drawImage(character,srcX,srcY,width,height,anim_x,anim_y,width,height); 

			anim_interval2 = setInterval(drawblink,anim_speed);

			function drawblink()
				{
				if (animation_var == true)
					{
					updateFrame2();
					ctx9.drawImage(character,srcX,srcY,width,height,anim_x,anim_y,width,height);
					function updateFrame2()
						{
						if (k < 10) { curFrame = 0; k++; }
						else if (k == 10) { curFrame = 1; k++; }
						else if (k == 11) { curFrame = 2; k++; }
						else if (11 < k && k < 26) { curFrame = 0; k++; }
						else if (k == 26) { curFrame = 1; k++; }
						else if (k == 27) { curFrame = 2; k++; }
						else if (27 < k && k < 33) { curFrame = 0; k++; }
						else if (k == 33) { curFrame = 1; k++; }
						else if (k == 34) { curFrame = 2; k++; }
						else if (34 < k && k < 50) { curFrame = 0; k++; }
						else if (k == 50) { curFrame = 0; k=0; }
						//curFrame = ++curFrame % frameCount;				
						srcX = curFrame * width; 
						//ctx9.clearRect(0,0,1000,800);	
						}
					}
				else
					{
					clearInterval(anim_interval2); //ctx9.clearRect(0,0,1000,800);
					}
				}
			}
		}
	}



