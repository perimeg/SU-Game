
// - - - - - Scenes - - - - -

//These are test scenes

var my_scene = ["my_scene",
"black",
"S:Idk here's an example of a choice",
"choice:[ Select choice 1 ],[ Select choice 2 ]"
];

var my_scene_1 = ["my_scene_1",
"S:''I selected choice 1.''"
];

var my_scene_2 = ["my_scene_2",
"S:''I selected choice 2.''"
];

var scene_test = ["scene_test",
"placeBG:purple",
"end scene"
];





// - - - - - Introduction - - - - -


var scene_0 = ["scene_0",
"black",
"changeBG:titlecard",
"changeBG:white",
"pause:500",
"changeBG:sun_rise",
"changeBG:black",
"pause:1000",
":Ugh........",
"pause:500",
":What a night.",
"changeBG:sadieawakening",
":... I had the strangest dream last night, but …",
":... What was it again?",
":— Dammit. Details from the dream slip away, but the vague idea of it remains on the tip of my tongue.",
":What an annoying feeling.",
"changeBG:sadies_room_morning",
":Sleepily, I fumble for my phone beside my pillow, having accidentally fallen asleep with it last night.",
"phone:nonewmessages",
":… Figured as much.",
":Jenny, Sour Cream, and Buck tend to sleep in pretty late, whereas I still wake up every morning at 6 am by habit.",
":It’ll probably be at least a few hours until I hear from them.",
"S: '' ... [Sigh] ... '' ||a:s>>_blink",
"S:''Right... I guess I should probably get going.''||a:s>>",
":Instinctively, I tap on Lars’ contact in the messages app.",
"phone:chat1",
":… Oh - Right.",
":I feel my face heat up, as well as a pang of longing in my gut.",
":These messages are from ages ago.",
":And Lars... Lars has been stuck in space for weeks now.",
":For probably the tenth time, I find myself reading over our last conversation over text.",
":... ‘Death of a Zombie’ had finally come out, and although I was convinced it was going to be really cheesy, Lars ...",
":... Lars secretly was excited about it.",
"S: ‘’Hah…’’||a:s_sadsmile_blink",
":If he even remotely thought something wasn’t ‘cool’, he would play it off and act like he wasn't interested, but …",
":… I could tell.",
":After knowing Lars for so long, it isn’t too hard to pick up on his subtle mannerisms.",
"removephone:chat1",
"changeBG:sadieawakening",
":It’s … weird. Normally, I would message Lars and see if he’s awake.",
":I guess that’s why I opened his messages without thinking.",
":Normally, I would ask if he wants to hang out for the day.",
":And … if he didn’t have other plans, he would always agree.",
":… Heh… But not before complaining.",
"pause:500",
":................",
":I guess I should get up now. I have a few ideas for some lyrics I wouldn’t mind getting down before practice today.",
":Maybe I’ll even go out for breakfast.",
"changeBG:sadies_room_morning",
"S:'' [Gasp] !! '' ||a:s_surprised_blink",
":My dream - I remember now.",
"changeBG:black",
"changeBG:pizza_date",
":That’s why I feel so uneasy. That’s why I kept waking up, tossing and turning.",
":I dreamt Lars actually returned, and.. for some reason, everything was back to normal.",
":Well… Somewhat normal.",
":Lars was acting sweeter - Like how he usually did when we were alone together.",
":Except … we were getting pizza?",
":Right - We were getting pizza in public. Kind of like a … date.",
"changeBG:sadies_room",
":And… for some reason, the pizza turned into some combination of a dog and a helicopter - ?",
":… Weird. I guess that’s dream logic for you.",
"changeBG:black",
"changeBG:brushingteeth",
":… Huh.",
":My hair’s growing out a little.",
":Maybe I should get around to dying it before the show tonight.",
":Then again… it would be annoying if I got green stains on my face.",
":I could ask the band to help. We have all day to practice, and we usually don’t rehearse longer than a few hours.",
":A flurry of excitement fills me.",
"changeBG:sadies_room_morning",
":... It .. still surprises me sometimes. How different I feel compared to before quitting The Big Donut.",
":I should be thankful.",
":I've made some great friends, I feel much happier, and - I even joined a band!",
":I feel ... like I'm finally becoming who I'm supposed to be.",
":And that's great, but ...",
"pause:500",
":... Somehow, it feels like it would be even better with Lars around.",
":And I can't really explain why.",
":He's one of the only people on this planet to make me feel so ... so awful about myself.",
":He used to make me feel terrible whenever other people were around.",
":So ...",
"changeBG:black",
":... Why do I want him back?",
":It's.. because I miss him. And because I'm worried to death for him.",
"changeBG:sadies_room_morning",
"S:'' Oh -! '' ||a:s_surprised",
":That reminds me. I need to stop by Steven's at some point today.",
":I told him I would have something to include in Lars' next care package.",
":He's ... really, really sweet for doing something so nice.",
":I still don't understand how he's able to go back and forth so quickly to see him.",
":... Eh. Probably some sort of gem teleporter thing - Or something.",
"pause:500",
":My stomach grumbles in complaint.",
":- Right. Breakfast.",
":I'm actually kind of in the mood for a donut.",
"end scene"
];

var board0 = ["board0",
"placeBG:thebigdonut",
"enter:steven-happy,sadie-smile",
"S:''Oh - Hey, Steven.''||a:ssmile",
"St:''Sadie! What are you doing here so early?''||a:stsmile",
"S:''Oh, you know. Even though I don't work anymore, I still can't shake the morning routine.''||a:ssmile",
"St:''I meeean, like 'here-here'!''||a:stsmile",
"S:''Oh! Well, I thought I'd mix it up a bit - Get a donut for breakfast.''||a:ssheepish",
"S:''Hah - You know, instead of a traditionally healthy breakfast.''||a:ssmile",
"St:''Now you're speaking my language!''||a:ststar",
"St:''Well - How about to make up for all those times you snuck me a free donut, you can have one of mine!''||a:stsmile",
":I suddenly notice he's holding a box with the Big Donut label on it.",
"S:''Heh, did you get a  w h o l e  box of donuts for breakfast?''||a:ssmile",
"St:''Nah - Well, kinda. Amethyst asked for one, and we both know if I bring back just one, she'll complain.''||a:stsmile",
":We snicker at that.",
"S:''Ah - Makes sense.''||a:ssmile",
"S:''Well, I don't mind taking one off your hands. That's really nice of you, Steven.''||a:ssmile",
"St:''Don't mention it! It's the least I can do for my favorite used-to-be Big Donut employee!''||a:ststar",
":... Suddenly, I'm reminded of another used-to-be employee.|,sadie->>",
":Steven must be able to read my mind, because his smile disappears.|steven-frown",
"St:'' - Oh - Sorry, Sadie.''|,sadie-frown|a:stfrown",
"S:''Eh - No worries, I'm fine.''||a:s>>",
"St:''I didn't mean to....... Um, actually!''||a:stfrown",
"St:''I'm actually planning on visiting him today! If you still wanted me to take something for him!''|steven-smile|a:stsmile",
"S:''Oh - Um.....''||a:ssad",
"S:''.. Um... I was thinking about giving you a photo to take to him.''||a:s>>",
"St:''Yeah! That's a great idea!''||a:ststar",
"S:''Hah, you think so...?''|,sadie-smile|a:ssheepish",
"St:''I know so! He's gonna love it!''||a:ststar",
"S:''Heh, I don't know if I'd go that far...''||a:ssheepish",
"St:''No, I'm serious! Lars is... Well, he's different now. He seems... so much more confident!''||a:stfrown",
":... Eh.. He's said this before, but... I don't know. Steven means well, but I still have a hard time believing him.",
"St:''You should see it, Sadie!!''||a:stsmile",
":Steven suddenly gasps, like a lightbulb went off in his head.",
"St:''You should totally come with me!!!''||a:sthappy",
"S:''C - Come with you? O-oh, um, I don't know if that's really ... a good idea..''||a:ssheepish",
"S:''- Besides. How exactly are you visiting him? Are you using one of those warp pads?''||a:sfrown",
"St:''Oh, no! Not a warp pad exactly... Actually, lemme just show you!''||a:stsmile",
"S:''Oh - um - okay. Sure. I got nowhere else to be.''||a:ssheepish",
"exit:steven-smile,sadie-smile",
"changeBG:black",
":Steven begins leading me over to the opposite side of the beach - Where he lives.",
":The only times I really find myself in that direction are when I take a long walk around the perimeter of the beach...",
":... It used to be a convenient way to clear my head.",
"pause:500",
":As we're walking, Steven makes small talk.",
"pause:500",
"changeBG:temple",
"changeBG:stevenshouse",
"changeBG:stevenshouseinside",
"enter:steven-smile,sadie-smile",
"St:''Ta-da! Welcome to 'the abode of Steven'!''||a:ststar",
"S:''Hah! I've been here before, you know.''||a:ssheepish",
"?:''Stteeeeevveeennnn!!! Is that you?!''",
":Before I know it, Amethyst is running out of an extravagant glowing door from the side, hurdling towards us.",
"exit:,sadie-smile",
"enter:,amethyst-smirk",
"A:''Yea! I see you got the goods!''||a:asmirk",
":She grabs the box from Steven's hands, and just like that, I'm exposed to a sight I can't say I'm unfamiliar with - Amethyst stuffing her mouth with multiple donuts at once.|,amethyst-donut",
":I giggle.",
"St:''Amethyyyyst! Leave some for me and Sadie!''||a:stfrown",
"A:''Heh, n' pro'ises!''||a:adonut",
":She swallows her food, before directing her attention to me, as if just noticing I'm here.",
"A:''So what's Donut Girl doing here?''|,amethyst-smirk|a:asmirk",
"St:''Oh! Right!''||a:stsmile",
"St:''Have you seen Lion around? He was here just before I left.''||a:stsmile",
"A:''Nah, dude. I think he left, but I dunno where.''||a:asmirk",
"St:''Oh - That's okay! Hmmm... He can't be far.''||a:stfrown",
"S:''What does your lion have to do with anything?''||a:sfrown",
"St:''He's how I can visit Lars so easily!''||a:stsmile",
"S:''Oh - So, like ..... How?''||a:ssheepish",
"St:''That's what I wanted to show you! It's so much cooler in person than explaining it.''||a:ststar",
":Suddenly, Steven grabs two donuts from the box in Amethyst's arms. She doesn't seem to notice.",
":Probably a good idea, considering how quickly she's eating them.",
"St:''Heh, I hope you like chocolate jelly!''||a:stsmile",
"S:''Hah, are you kidding? That's my favorite.''||a:ssmile",
":He hands me one of the donuts, before beginning in the direction of the front door.",
"St:''Here you go! Now, let's go find Lion!''||a:stsmile",
"exit:steven-smile,amethyst-smirk",
"changeBG:black",
"changeBG:lookingforlion",
"St:''Liiiiooonnnnnn!!''||a:stfrown",
"St:''Liiiiiiiiiiioooooooooonnnn!!!''||a:stfrown",
":Steven meanders about, squinting his eyes as he looks in the distance.",
"S:''He's bright pink, right?''||a:ssmile",
"St:''Yeah! Just like Lars!''||a:stsmile",
"S:''Oh - Really?''||a:ssmile",
"St:''Yeah! I've told you that.''||a:stsmile",
"S:''I guess I thought you meant he was more of a .. pink tinge.''||a:ssheepish",
"St:''Nah, he's pretty pink! Not to mention, he even has pink hair! Like Lion's mane.''||a:stsmile",
":Picturing Lars with pink hair is ... interesting. I can't say I'm not intrigued.",
":But... the reality behind why unearths a fresh swelling of emotion in my gut.",
"changeBG:black",
":Lars...",
":... How did you get yourself in such a dangerous situation?",
":If only you had fled the ship - With the rest of us...",
"pause:500",
":For the first while after that, I felt nothing but anger towards him.",
":I told myself that he put himself in that situation, and there's no one else to blame but him.",
":Then... When Steven told me about how he di - .. was momentarily away from life, I've only felt worried since.",
"pause:500",
": .... Why am I cursed to keep thinking about him?",
"changeBG:lookingforlion",
"S:''.........''||a:s>>_blink",
"St:''Sadie?''||a:stfrown",
"S:''Oh - Yeah?''||a:sfrown",
"pause:500",
"St:''.. I have one more place we can check!''||a:stsmile",
"St:''Sometimes Lion likes to nap on top of the hill, near the lighthouse - Especially if it's sunny out.''||a:stsmile",
"S:''Hmm.. Let's go check it out then.''||a:ssmile",
"changeBG:black",
":We make quick work of heading up to the top of the hill, towards the lighthouse.",
"pause:800",
"changeBG:lighthouselion",
"St:''There you are, Lion!!!!''||a:stsmile",
"S:''Are you sure he's, uh.. Friendly around strangers?''||a:ssad",
"St:''Yeah, he's harmless.''||a:stsmile",
"St:''C'mon!''||a:ststar",
":Steven leads me over to the giant pink lion, and I hesitantly follow.",
":Though, he is a bit less intimidating asleep.",
"St:''Alright! So, um... Follow my lead!''||a:stsmile",
":Steven takes hold of my hand, and we both lean down on our knees next to the lion.",
"S:''Oh - okay - ''||a:ssheepish",
"St:''Ready? - Oh! And take a deep breath and hold it, okay?''||a:stsmile",
":I decide not to question him and do as he says. I guess he knows what he's talking about.",
":Steven takes a deep breath as well, and soon, he's pulling us headfirst into his lion's fur.",
"changeBG:white",
"changeBG:lionsmane",
":I-I - What is this place -?!",
":I start to exclaim something but quickly discover no words escape my mouth.",
":And I - I can't breath?!",
":Though, the lack of breathing isn't nearly as startling as this giant pink landscape.",
":I look over to Steven, who is smiling brightly. He gives me an excited nod.",
":I don't have much time to look around, before I find myself needing another breath.",
"changeBG:white",
"changeBG:plainoutside",
"S:'' [Gasp] !!! ''||a:ssurprised_blink",
"enter:steven-smile,sadie-surprised",
"S:''What was that place?!?''||a:ssurprised",
"St:''Pretty cool, right!!''||a:ststar",
"St:''I don't know why, but Lion's mane leads me to some sort of different dimension!''||a:stsmile",
":I still find myself processing what just happened.",
"S:''But - where? What does it have to do with Lars?''||a:ssurprised",
"St:''Oh, right! Did you see the two islands in there? With the trees?''||a:stsmile",
"S:''Yeah, I did... What about them?''||a:sfrown",
"St:''Well, close to the one further away from us, there's a portal that leads out of Lars' head! Like how it works with Lion!''||a:stsmile",
"S:''Wha - Literally?''||a:ssurprised",
"St:''Yeah! Isn't that cool?''||a:ststar",
"S:''That's - that's insane!''||a:ssurprised",
":For some reason, I find myself thinking of some song lyrics. I make a mental note to write them down later.",
"St:''I know! The first time I discovered it was because Lion kept trying to sleep on my face...''||a:stsmile",
":It's interesting hearing him talk about all this stuff so normally. It reminds me how different our lives are.",
":How different... Lars' life is.",
"S:''Heh, that'll do it.''||a:ssheepish",
"S:''I .. To be honest, I don't think I'm .. ready to face him.''||a:s>>",
"St:''Awww... How come? He really misses you!''||a:stfrown",
"S:''Well... We didn't exactly part ways on the greatest of notes, you know.''||a:s>>",
":For a moment, I wonder if Steven even remembers, or if he was too caught up the fight to notice.|steven-frown,sadie->>",
"St:''Sadie, I ... He told me about what happened, and - He feels terrible!''||a:stfrown",
"St:''And - I told him about Sadie Killer and the Suspects. I even showed him photos! And you know what he said?''||a:stfrown",
"St:''He said he can't wait to hear you sing!''||a:stfrown",
": - What? Those words don't sound like they came from Lars' mouth...",
"St:''Okay, okay - How about on the way to getting your photo, you can at least thiiink about it!''||a:stsmile",
"S:''Sure, okay. But no promises.''||a:ssheepish"
];

var reunion_scene = ["reunion_scene",
"placeanimatedBG:skatsband",
":As always, it's exhilarating to perform on stage.",
/*":Every ounce of stress and negative thought seems to evaporate as I pour my heart into my vocals - My lyrics.",
":Hearing Jenny, Buck, and Sour Cream perform around me makes me feel ...",
":..... Happy. Alive.",
":It never matters if we miss a beat or accidentally repeat the chorus three times instead of twice.",
":We're so in sync, focused on having fun and making the crowd happy, that small issues like that just don't matter.",
":I smile brightly, but as the end of this song approaches, I let that smile turn sinister, the lights turning to darkness as the last note plays out.",
"changeBG:black",
":As the fog dissipates and the residents of Beach City begin to applaud, a more cheerful, brighter light begins to light up the stage once more.",
"placeanimatedBG:skatsband",
"pause:500",
"S:''Thank you, everyone!!''||a:",
":As I start to talk, the clapping settles down, everyone looking up to us in anticipation.",
"S:''Alright! This last song is actually a cover, written byyy.. the best manager in town!''||a:",
"S:''Get ready, Beach City!!''||a:",
":As soon as the words exit my mouth, Buck begins a slow descent into the first few chords of Mr. Universe's 'Let Me Drive My Van (Into Your Heart)'.",
":Jenny and Sour Cream join in the music, amping it up in a single beat, the rhythm blasting loudly in my eardrums.",
":I smile as the crowd grows excited, recognizing the tune.",
":Mr. Universe is at the foot of the stage, giving us all a big thumbs up, and I faintly hear him say something along the lines of, 'You got this!'.",
"pause:500",
"S:''I know I'm not that tall,''||a:",
"S:''I know I'm not that smart,''||a:",
"S:''But let me drive my van into your heearrt!''||a:",
"pause:500",
":As I continue belting the lyrics, having them perfectly memorized after hours of rehearsal, a bittersweet feeling creeps in.",
"changeBG:black",
":These lyrics... Singing anything with romantic undertones makes me feel odd.",
":I should be happy right now, but ...",
":..... I can't shake the feeling that I'm still only at 95%.",
":Like... There's a hole in my otherwise fulfilled heart.",
"placeanimatedBG:skatsband",
":Shoving the feeling away, I instead focus on the contagious fun emitting from the stage and continue to sing without much thought over the lyrics themselves.",
"pause:500",
":Soon, the end of the song approaches, and I throw my hand in the air, ready to belt the last lyric of the night.",
"S:''Let me drive my van into your heeaaarrrtt!!''||a:",*/
":As the last note resonates throughout the beach, the loud music being replaced with loud cheers, I suddenly - hear something? In the dista -",
"changeBG:white",
"S:'' [Gasp] !!! '' ||a:ssurprised_blink",
":Suddenly, a loud crash surrounds the stage, and I find myself having trouble keeping balance as everything shakes - Like an -",
":Earthquake?!???",
":Clouds of sand fill the air, but as soon as they start to dissipate, I notice two large pink pillars next to the stage with - ",
": - Are those feet?!",
"changeBG:mechaship",
":A giant - metallic body?!?",
":What the hell is going on??!?!?",
"pause:500",
":Before I can observe everyone else's reactions, I stare at the giant body, fixated.",
":The blue arm of the body begins to descend down, positioned in such a way that it looks like it's holding something.",
"pause:500",
":As the hand rests on the sand, I see three giant women in its palm.",
"changeBG:thediamonds",
":And - and Steven! And his family!!",
":Before I have the chance to take in this strange situation, I hear another noise coming from the sky.",
"changeBG:sunincinerator",
":Another ship? What's going on here?",
":The green ship descends, legs protruding as it prepares to land just at the foot of the ocean.",
"SC:''... Well. This is one way to end a show.''||a:",
"J:''I guess we should be used to weird things happening around here!''||a:",
":A small laugh escapes me, but I'm still distracted by the unknown ship.",
":I glance over in Steven's direction. His family doesn't seem concerned, so I guess I shouldn't be either.",
":With that thought, I relax.",
"pause:500",
":The doors begin to open with a whirring mechanical sound.",
"changeBG:beachatnight",
"enter:offcolorslars",
":Is.... Is that....?",
"S:''..Lars..?''||a:ssurprised",
"R:''We finally made it! Earth!''||a:",
":The startling images of his companions melt from view as I stare at Lars, taking in his new appearance.",
":I find myself overwhelmed. He's .. he's actually here.",
"R:''No more running! No more hiding!''||a:",
"R:''No more diamond authority!''||a:",
":Abandoning our performance, I step off the stage, hesitantly approaching Lars and his friends.",
":However, before I can come closer, I notice they look suddenly panicked, staring in the direction of the giant women.",
"exit:offcolorslars",
"changeBG:thediamonds",
"St:''Wait!''||a:stfrown",
":Steven quickly reaches Lars and the others, waving his hands in seeming effort to calm their panic.",
"St:''I know what you're thinking, but they're here to help!''||a:stfrown",
"St:''Off colors ... Meet the Diamonds.''||a:stsmile",
"St:''Diamonds ... Meet the off colors.''||a:stsmile",
":So - I guess landing here at the same time was mere coincidence.",
"W:''... Hello.''||a:",
":I look up, noticing the booming voice came from one of the women.",
"P:''-Agh!! It's the Diamonds!!''||a:",
":Diamonds?",
"L:''Padparadscha, it's okay.''||a:",
":I've never... seen gems this big before.",
":At least, I assume they're the same as Steven's family.",
":... Heh. I remind myself to ask Steven later for an explanation of what's happening.",
":But for now... I redirect my attention back to Lars, hesitant but eager to approach him.",
"changeBG:larslion",
": - Oh. They... really are similar.",
":Lars and Steven's lion share the same pink complexion.",
":Their hair is a perfect match as well.",
"L:''... Hey there, buddy.''||a:",
"pause:500",
":Finally, I muster the courage to take another few steps forward.",
"S:''.... Lars?''||a:sfrown",
"S:''It's ... it's really you..''||a:sfrown",
"L:''- Sadie?''||a:"
];







