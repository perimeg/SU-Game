
// - - - - - DIALOGUE - - - - -

function attachCharacterName(name)
	{
	ctx8.clearRect(0,0, 1000, 800);
	if (name == "S") { var character_name = "SADIE"; }
	else if (name == "L") { var character_name = "LARS"; }
	else if (name == "St") { var character_name = "STEVEN"; }
	else if (name == "A") { var character_name = "AMETHYST"; }
	else if (name == "R") { var character_name = "RHODONITE"; }
	else if (name == "P") { var character_name = "PADPARADSCHA"; }
	else if (name == "F") { var character_name = "FLUORITE"; }
	else if (name == "RT") { var character_name = "RUTILE TWIN"; }
	else if (name == "W") { var character_name = "WHITE DIAMOND"; }
	else if (name == "SC") { var character_name = "SOUR CREAM"; }
	else if (name == "J") { var character_name = "JENNY"; }
	else if (name == "B") { var character_name = "BUCK"; }
	else { var character_name = name; }

	ctx8.font = 'bold 24px sans-serif';
	ctx8.fillStyle = "#634272";
	ctx8.fillText(character_name, 325, 590);
	}

var pause_time = 0;

var choice_1_text = ""; var choice_2_text = ""; var choice_1_scene = "";
var character1_change = ""; var character2_change = ""; var dialogue_xpos = 0;
var check_running = true; var my_dialogue_text = ""; var anim_src = "";
var placeanimatedBG_var = false;

var lineNumber; var linesarr;

var arrayelt = [""]; var section = [""];
var sub0 = [""]; var sub1 = [""]; var sub2 = [""];
var subsub0 = [""]; var subsub1 = [""]; var subsub2 = [""];
var subsub3 = [""]; var subsub4 = [""]; var subsub5 = [""]; 

function scanDialogue(current_scene,i)
	{
	animation_var = false; ctx9.clearRect(0,0,1000,800);
	clearInterval(anim_interval); clearInterval(anim_interval2);
	
	arrayelt = current_scene[i];

	section = arrayelt.split("|");
	sub0 = section[0].split(":");
	if (section[1] !== undefined) { sub1 = section[1].split(":"); }
	if (section[2] !== undefined) { sub2 = section[2].split(":"); }
	if (sub0[0] !== undefined) { subsub0 = sub0[0].split(","); }
	if (sub0[1] !== undefined) { subsub1 = sub0[1].split(","); }
	if (sub1[0] !== undefined) { subsub2 = sub1[0].split(","); }
	if (sub1[1] !== undefined) { subsub3 = sub1[1].split(","); }
	if (sub2[0] !== undefined) { subsub4 = sub2[0].split(","); }
	if (sub2[1] !== undefined) { subsub5 = sub2[1].split(","); }

	
	//   arrayelt 														 
	//   section[0] 		           	       | section[1] 		           		   | section[2] 			 

	//   sub0[0]     	     : sub0[1]                 | sub1[0]     		 : sub1[1]             	   | sub2[0] 		     : sub2[1]                   

	//   subsub0[0] , subsub0[1] : subsub1[0] , subsub1[1] | subsub2[0] , subsub2[1] : subsub3[0] , subsub3[1] | subsub4[0] , subsub4[1] : subsub5[0] , subsub5[1]



	if (section[0] == "fade from black" || section[0] == "fade from white")
		{
		var my_color = "";
		if (section[0] == "fade from black") { my_color = "black"; }
		else if (section[0] == "fade from white") { my_color = "white"; }

		removeAllDialogue();
		removeNextButton();
		var black = new Image()
		black.src = "Graphics/BGs/" + my_color + ".png";
		black.onload = function()
			{
			ctx12.drawImage(black,0,0);
			black_var = true;
			var black_interval = setInterval(black2,2000);
			function black2()
				{
				if (black_var == true)
					{
					fadeOut(black,ctx12,0,0); black_var = false;
					}
				else if (black_var == false)
					{
					clearInterval(black_interval);
					}
				}
			}
		continue1(2000);
		}

	else if (section[0] == "fade to white")
		{
		removeAllDialogue();
		removeNextButton();
		fadetowhite();
		}

	else if (section[0] == "black")
		{
		removeAllDialogue();
		removeNextButton();

		var black = new Image()
		black.src = "Graphics/BGs/black.png";
		black.onload = function()
			{
			ctx1.drawImage(black,0,0);
			}

		continue1(1500);
		}

	else if (section[0] == "white")
		{
		removeAllDialogue();
		removeNextButton();

		var black = new Image()
		black.src = "Graphics/BGs/white.png";
		black.onload = function()
			{
			ctx4.drawImage(black,0,0);
			}

		continue1(1500);
		}

	else if (sub0[0] == "placeBG")
		{
		removeAllDialogue();
		removeNextButton();
		var cg = new Image();
		cg.src = "Graphics/BGs/" + sub0[1] + ".png";
		
		cg.onload = function()
			{
			fadeIn(cg,ctx1,0,0);
			}
		continue1(1100);
		}

	else if (sub0[0] == "placeanimatedBG")
		{
		removeAllDialogue();
		removeNextButton();
		placeanimatedBG_var = true;
		var animatecg = new Image();
		animatecg.src = "Graphics/BGs/" + sub0[1] + "_1.png";
		
		var animatecg2 = new Image();
		animatecg2.src = "Graphics/BGs/" + sub0[1] + "_2.png";
		
		animatecg.onload = function()
			{
			fadeIn(animatecg,ctx2,0,0); current_cg = 1;
			var timeoutanim0 = setTimeout(animatedBG20,1050);
			function animatedBG20()
				{
				clearTimeout(timeoutanim0);
				ctx2.clearRect(0,0, 1000, 800);
				ctx1.drawImage(animatecg,0,0);
				}
			var animatedBG = setInterval(animatedBG2,1100);
			function animatedBG2()
				{
				if (placeanimatedBG_var == true)
					{
					if (current_cg == 1)
						{
						fadeIn(animatecg2,ctx2,0,0); current_cg = 2;
						var timeoutanim1 = setTimeout(animatedBG21,1000);
						function animatedBG21()
							{
							if (placeanimatedBG_var == true) {
								ctx2.clearRect(0,0, 1000, 800);
								ctx1.clearRect(0,0, 1000, 800);
								ctx1.drawImage(animatecg2,0,0);
								clearTimeout(timeoutanim1); }
							else { clearInterval(animatedBG); }
							}
						}
					else if (current_cg == 2)
						{
						fadeIn(animatecg,ctx2,0,0); current_cg = 1;
						var timeoutanim2 = setTimeout(animatedBG22,1000);
						function animatedBG22()
							{
							if (placeanimatedBG_var == true) {
								ctx2.clearRect(0,0, 1000, 800);
								ctx1.clearRect(0,0, 1000, 800);
								ctx1.drawImage(animatecg,0,0);
								clearTimeout(timeoutanim2); }
							else { clearInterval(animatedBG); }
							}
						}
					}
				else if (placeanimatedBG_var == false)
					{
					clearInterval(animatedBG);
					ctx2.clearRect(0,0, 1000, 800); ctx1.clearRect(0,0, 1000, 800);
					}
				}
			}
		continue1(1100);
		}

	else if (sub0[0] == "removeBG")
		{
		removeAllDialogue();
		removeNextButton();
		var cg = new Image();
		cg.src = "Graphics/BGs/" + sub0[1] + ".png";
		
		cg.onload = function()
			{
			fadeOut(cg,ctx1,0,0);
			}
		continue1(900);
		}
	
	else if (sub0[0] == "changeBG" || section[0] == "fade to black")
		{
		removeAllDialogue();
		removeNextButton();
		var cg2 = new Image();
		placeanimatedBG_var = false;

		if (section[0] == "fade to black") { cg2.src = "Graphics/BGs/black.png"; }
		else { cg2.src = "Graphics/BGs/" + sub0[1] + ".png"; }
		
		cg2.onload = function()
			{
			fadeIn(cg2,ctx10,0,0);

			cg_var = true;
			var cg_interval = setInterval(cgfunction2,1050);
			function cgfunction2()
				{
				if (cg_var == true)
					{
					ctx10.clearRect(0,0, 1000, 800); ctx2.clearRect(0,0, 1000, 800);
					ctx1.clearRect(0,0, 1000, 800);
					ctx1.drawImage(cg2, 0, 0);
					cg_var = false;
					}
				else if (cg_var == false)
					{
					continue1(500);
					clearInterval(cg_interval);
					}
				}
			}
		}

	else if (sub0[0] == "pause")
		{
		pause_time = sub0[1];

		removeAllDialogue();
		removeNextButton();

		continue1(pause_time);
		}
	
	else if (sub0[0] == "phone")
		{
		removeAllDialogue();
		removeNextButton();
		var phoneg = new Image();
		phoneg.src = "Graphics/Phone/" + sub0[1] + ".png";
		
		phoneg.onload = function()
			{
			fadeIn(phoneg,ctx10,phoneg.naturalWidth/2 - 58,30);
			}
		continue1(1100);
		}

	else if (sub0[0] == "removephone")
		{
		ctx10.clearRect(0,0, 1000, 800);
		removeAllDialogue();
		removeNextButton();
		
		var phoneg = new Image();
		phoneg.src = "Graphics/Phone/" + sub0[1] + ".png";
		
		phoneg.onload = function()
			{
			fadeOut(phoneg,ctx10,phoneg.naturalWidth/2 - 58,30);
			}
		
		continue1(1100);
		}

	else if (sub0[0] == "end scene")
		{
		removeAllDialogue();
		removeNextButton();
		fadetoblack();
		var mapimage = new Image();
		mapimage.src = "Graphics/BGs/map.png";

		mapimage.onload = function()
			{
			var map_timer = setTimeout(map2,2000);
			function map2()
				{
				fadeIn(mapimage,ctx12,0,0);
				clearTimeout(map_timer);
				var map_timer2 = setTimeout(map3,1500);
				function map3()
					{
					ctx12.clearRect(0,0,1000,800);
					ctx1.drawImage(mapimage,0,0);
					clearTimeout(map_timer3);
					}
				}
			}
		}

	else if (sub0[0] == "choice")
		{
		choice_1_text = subsub1[0];
		choice_2_text = subsub1[1];

		var choice_1_button = new Image();
		choice_1_button.src = "Graphics/Misc/choice_1.png";
		var choice_2_button = new Image();
		choice_2_button.src = "Graphics/Misc/choice_2.png";

		choice_1_button.onload = function()
			{
			ctx11.drawImage(choice_1_button, 200, 600);
			}

		choice_2_button.onload = function()
			{
			ctx11.drawImage(choice_2_button, 200, 675);
			}

		removeAllDialogue();
		removeNextButton();

		placeDialogueBox();

		ctx7.font="20px sans-serif"; ctx7.fillStyle = "#211545";

		ctx7.fillText(choice_1_text,250,620);
		ctx7.fillText(choice_2_text,250,695);
		
		window.addEventListener( "keydown", doKeyDown2, true);

		function doKeyDown2(e)
			{
			window.removeEventListener( "keydown", doKeyDown2, true);
			ctx11.clearRect(0,0, 1000, 800);
			removeAllDialogue();
			if ( e.keyCode == 49 )
				{
				choice_1_scene = eval(scene_name + "_1");
				start_scene(choice_1_scene);
				}
			else if (e.keyCode == 50)
				{
				choice_2_scene = eval(scene_name + "_2");
				start_scene(choice_2_scene);
				}	
			}
		}

	else if (sub0[0] == "enter")
		{
		if (subsub1[1] !== undefined)
			{
			center_var = false;
			var character1 = new Image();
			character1.src = "Graphics/Characters/" + subsub1[0] + ".png";

			character1.onload = function()
				{
				var xpos_c1 = 275 - character1.naturalWidth/2; 
				var ypos_c1 = 800 - character1.naturalHeight;
				fadeIn(character1,ctx2,xpos_c1,ypos_c1);
				}
			
			var character2 = new Image();
			character2.src = "Graphics/Characters/" + subsub1[1] + ".png";

			character2.onload = function()
				{
				var xpos_c2 = 725 - character2.naturalWidth/2; 
				var ypos_c2 = 800 - character2.naturalHeight;
				fadeIn(character2,ctx3,xpos_c2,ypos_c2);
				}
			}
		else
			{
			var character1 = new Image(); center_var = true;
			character1.src = "Graphics/Characters/" + subsub1[0] + ".png";

			character1.onload = function()
				{
				var xpos_c1 = 500 - character1.naturalWidth/2; 
				var ypos_c1 = 800 - character1.naturalHeight;
				fadeIn(character1,ctx2,xpos_c1,ypos_c1);
				}
			}

		removeAllDialogue();
		removeNextButton();

		continue1(900);
		}

	else if (sub0[0] == "exit")
		{
		if (subsub1[1] !== undefined && subsub1[0] !== "")
			{
			ctx2.clearRect(0,0, 1000, 800); ctx3.clearRect(0,0, 1000, 800);
			var character1 = new Image();
			character1.src = "Graphics/Characters/" + subsub1[0] + ".png";

			character1.onload = function()
				{
				var xpos_c1 = 275 - character1.naturalWidth/2; 
				var ypos_c1 = 800 - character1.naturalHeight;
				fadeOut(character1,ctx2,xpos_c1,ypos_c1);
				}
			
			var character2 = new Image();
			character2.src = "Graphics/Characters/" + subsub1[1] + ".png";

			character2.onload = function()
				{
				var xpos_c2 = 725 - character2.naturalWidth/2; 
				var ypos_c2 = 800 - character2.naturalHeight;
				fadeOut(character2,ctx3,xpos_c2,ypos_c2);
				}
			}

		else if (subsub1[1] !== undefined && subsub1[0] == "")
			{
			ctx3.clearRect(0,0, 1000, 800);
			var character2 = new Image();
			character2.src = "Graphics/Characters/" + subsub1[1] + ".png";

			character2.onload = function()
				{
				var xpos_c2 = 725 - character2.naturalWidth/2; 
				var ypos_c2 = 800 - character2.naturalHeight;
				fadeOut(character2,ctx3,xpos_c2,ypos_c2);
				}
			}

		else if (subsub1[1] == undefined && center_var == false)
			{
			ctx2.clearRect(0,0, 1000, 800);
			var character1 = new Image();
			character1.src = "Graphics/Characters/" + subsub1[0] + ".png";

			character1.onload = function()
				{
				var xpos_c1 = 275 - character1.naturalWidth/2; 
				var ypos_c1 = 800 - character1.naturalHeight;
				fadeOut(character1,ctx2,xpos_c1,ypos_c1);
				}
			}

		else if (center_var == true)
			{
			ctx2.clearRect(0,0, 1000, 800);
			var character1 = new Image();
			character1.src = "Graphics/Characters/" + subsub1[0] + ".png";

			character1.onload = function()
				{
				var xpos_c1 = 500 - character1.naturalWidth/2; 
				var ypos_c1 = 800 - character1.naturalHeight;
				fadeOut(character1,ctx2,xpos_c1,ypos_c1);
				}
			}

		removeAllDialogue();
		removeNextButton();

		continue1(900);
		}
	
	else
		{
		typewriter(sub0[1]); 
		if (nextvis == false) { placeNextButton(); }
		attachCharacterName(sub0[0]);

		window.removeEventListener( "keydown", doKeyDown, true);
	
		if (section[1] !== undefined & section[1] !== "")
			{

			if (subsub2[1] == undefined)
				{
				character1_change = sub1[0];

				if (center_var == true)
					{
					ctx2.clearRect(0,0, 1000, 800);
					var character1 = new Image();
					character1.src = "Graphics/Characters/" + character1_change + ".png";

					character1.onload = function()
						{
						var xpos_c1 = 500 - character1.naturalWidth/2; 
						var ypos_c1 = 800 - character1.naturalHeight;
						ctx2.drawImage(character1,xpos_c1,ypos_c1);
						}
					}
				else if (center_var == false)
					{
					ctx2.clearRect(0,0, 1000, 800);
					var character1 = new Image();
					character1.src = "Graphics/Characters/" + character1_change + ".png";

					character1.onload = function()
						{
						var xpos_c1 = 275 - character1.naturalWidth/2; 
						var ypos_c1 = 800 - character1.naturalHeight;
						ctx2.drawImage(character1,xpos_c1,ypos_c1);
						}
					}
				}

			else if (subsub2[1] !== undefined & subsub2[0] !== "")
				{
				character1_change = subsub2[0];
				character2_change = subsub2[1];
				ctx2.clearRect(0,0, 1000, 800); ctx3.clearRect(0,0, 1000, 800);
				
				var character1 = new Image();
				character1.src = "Graphics/Characters/" + character1_change + ".png";

				character1.onload = function()
					{
					var xpos_c1 = 275 - character1.naturalWidth/2; 
					var ypos_c1 = 800 - character1.naturalHeight;
					ctx2.drawImage(character1,xpos_c1,ypos_c1);
					}

				var character2 = new Image();
				character2.src = "Graphics/Characters/" + character2_change + ".png";

				character2.onload = function()
					{
					var xpos_c2 = 725 - character2.naturalWidth/2; 
					var ypos_c2 = 800 - character2.naturalHeight;
					ctx3.drawImage(character2,xpos_c2,ypos_c2);
					}
				}

			else if (subsub2[1] !== undefined & subsub2[0] == "")
				{
				character2_change = subsub2[1];
				ctx3.clearRect(0,0, 1000, 800);

				var character2 = new Image();
				character2.src = "Graphics/Characters/" + character2_change + ".png";

				character2.onload = function()
					{
					var xpos_c2 = 725 - character2.naturalWidth/2; 
					var ypos_c2 = 800 - character2.naturalHeight;
					ctx3.drawImage(character2,xpos_c2,ypos_c2);
					}
				}
			}
		}
	}

function typewriter(dialogue_text)
	{
	my_dialogue_text = dialogue_text;
	if (section[2] !== undefined)
		{
		if (sub2[0] == "a")
			{ 
			dialogue_x = 325; dialogue_width = 510;
			check_running = dialogue_running;

			anim_src = sub2[1]; 

			if (check_running == false)
				{
				var anim_box_timer = setTimeout(anim_box_ftn,150);
				function anim_box_ftn()
					{
					animate_face();
					clearTimeout(anim_box_timer);
					}
				}
			else
				{
				animate_face();
				}
			}
		}
	else
		{
		ctx9.clearRect(0, 0, 1000, 800);
		dialogue_x = 175; dialogue_width = 650;
		}

	placeDialogueBox();

	dialogue_y = 630;

	window.addEventListener( "keydown", doKeyDown2, true);

		function doKeyDown2(e)
			{
			if ( e.keyCode == 32 )
				{
				clearInterval(animate); 
				ctx7.clearRect(0, 0, 1000, 800);
				for (i = 0; i < lineNumber+1; i++)
					{
					ctx7.fillText(linesarr[i],dialogue_x,dialogue_y+i*30);
					}

				window.removeEventListener( "keydown", doKeyDown2, true);
				window.addEventListener( "keydown", doKeyDown, true);
				}
			}

	ctx7.font="24px sans-serif"; ctx7.fillStyle = "#211545";

	var story1 = {txt:dialogue_text, 
             storycount:0,
             linecount:0,
             lineheight:30,
             xpos:dialogue_x,
             ypos:dialogue_y,
             startY:dialogue_y,
             speed:2,
             animate:true,
             complete:false,
             storyarr:[]};
 
	var animate = setInterval(doAnimation, 50);
	var canvasWidth = 1000; var canvasHeight = 800;
	story1.storyarr = getLines(ctx7, story1.txt, 10, dialogue_width);
	function doAnimation()
		{
  		ctx7.clearRect(0,0,canvasWidth, canvasHeight); 
   
  		animateTxt(story1,ctx7); 
  		if (story1.complete)
			{
    			//story2.startY = story1.ypos + 30;
    			//animateTxt(story2,ctx7);  
			clearInterval(animate); 
			window.addEventListener( "keydown", doKeyDown, true);
  			}
		}

	function getLines(context, str, x, maxWidth)
		{
  		var words = str.split(' ');
  		lineNumber = 0;
  		linesarr = [];
  		var lineOfText = "";
  		for(var n=0; n<words.length; n++)
			{
    			var checkEndOfLine = lineOfText + words[n] + ' ';
   			var checkTextWidth = context.measureText(checkEndOfLine);
   			var textWidth = checkTextWidth.width;    
    
    			if(textWidth > (maxWidth-10) )
				{
      				lineNumber++;
      				lineOfText = words[n] + ' ';
    				}
			else
				{ 
      				lineOfText = checkEndOfLine;
    				}
    			linesarr[lineNumber] = lineOfText;
  			}
  		return linesarr;
		} 

	function animateTxt(story,context)
		{
  		if(story.animate)
			{
   			story.storycount+=story.speed;
   			var storytxt = story.storyarr[story.linecount];
   			story.ypos = story.startY + story.lineheight * story.linecount;
  			if (story.storycount > storytxt.length-1)
				{
    				story.storycount = 0;
    				story.linecount++;
    
    				if(story.linecount > story.storyarr.length-1)
					{
      					//clearInterval(intervalID);
      					story.animate = false;
      					story.complete = true;
    					}
  				}
   			//context.clearRect(0, 0, canvasWidth, canvasHeight);
    			context.fillText(storytxt.substr(0, story.storycount), story.xpos, story.ypos);  
  			}
    		//Write Out The Previous Lines Too  
    		for(var i=0; i<story.storyarr.length; i++)
			{
       			if(i < story.linecount)
				{
         			context.fillText(story.storyarr[i], story.xpos, (story.startY + (story.lineheight*i)) ) ;
       				}
    			}  
		}
	}





