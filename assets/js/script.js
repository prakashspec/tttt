var imgBase = "assets/images/";
var imgBaseAct = "assets/images/activity/";
var helpimgPath = "assets/images/help/";
var imgBaseWelcome = "assets/images/welcomebg/";
var speechBubblePos = 'bubbleDivNone';
var selBubbleLen = 0;
var bubbleStart = 0;
var ctBubble = 'monterey';
var imgPng = '.png';
var imgJpg = '.jpg';
var ctAttrExp;
var globalUrl;
var currentActStep=0;
var audioTextIndex=0;
var rotateValue=-280;
var rotateValueAct=-294;
var angleRot=180;
var angleRot1=180;
var expLabelMode = 'food';
var headerlabel = 'monterey';
var exoploreCtBubble = 'anchovy0';
var labelSettings = {'monterey':'#140858','amazon':'#124521'};
var actitivyStart = 'kelp4';
var activityFoodWeb = ["In this activity, you will explore how energy flows through the ecosystem in Monterey Bay’s kelp forest. Kelp is an important organism in the flow of energy.</br><br/> Select the picture of kelp in the food web to learn more about it.","Select the picture of kelp in the food web.","Select Trophic Levels to continue."];
var activityFoodWeb_audio = ["In this activity, you will explore how energy flows through the ecosystem in Monterey Bay’s kelp forest. Kelp is an important organism in the flow of energy.</br><br/> Select the picture of kelp in the food web to learn more about it.","Select the picture of kelp in the food web.","Select Trophic Levels to continue."];
var activityFoodCount = 0;
var templateStateImg = {
	audiopause:'assets/images/template/audio_icon_normal.png',
	audioplay:'assets/images/template/audio_icon_play.png',
	leftslideract:'assets/images/template/left_slider_act.png',
	leftsliderdeact:'assets/images/template/left_slider_deact.png',
	rightslideract:'assets/images/template/right_slider_act.png',
	rightsliderdeact:'assets/images/template/right_slider_deact.png',
};
var exploreActive = true;
var imageName="monterey";
var addstr='Select the picture of kelp in the food web.';	
var audiovar = 'vtrlkelp';

$(document).ready(function(){	
	initialfun();
	loadStart();	
	$('.rightlabel1,.rightlabel2').off('click').on('click', toggleExpTabs);	
	//$('.rightlabel2').off('click');	
	$(".popUpokbtn").off("click").on("click",popUpClose);
	$('.help2').addClass('rclass');
	$('.activity_title').html(baseConfig.activityTitle);
	$('.expAudio').off('click').on('click', playGlobalAudio);
	$('<audio id="globalAudio"><source src="" type="audio/mp3"/></audio>').appendTo('.container');	
	$('.expAudio').attr('audio-state','pause');	
	$('.okbtn').off('click').on('click', MoveToNextStep);
	$('.arrowbtn').off('click').on('click', MoveToNextStep);
	$(".exploreLabel_2").hide();
	//$('#welcome').append('<img id="arrowpointer" src="'+(imgBase)+'welcomebg/cursor.png"/>');
	$('.helpwindow').css('display','none');	
	
	$(document).on('keyup', function(e){
	if($('iframe').contents().find('#Stage_welcomeGroup').css('opacity') == 1)		
		{
			if(parentTab == 'welcome' && $('.helpwindow').css('display') == 'none')
			{
				var ctKeyode = e.which || e.keyCode;
				if(ctKeyode == 39)
					{
						$('iframe').contents().find('#Stage_right_slider_act').trigger('click');
					}
				if(ctKeyode == 37)
					{
						$('iframe').contents().find('#Stage_left_slider_act').trigger('click');
					}
			}
		}
	});
	
	/*$(function(){
		$.ajax({
			async: true, 
			url: "version.txt",
			//async: false,   // asynchronous request? (synchronous requests are discouraged...)
			cache: false,   // with this, you can force the browser to not make cache of the retrieved data
			dataType: "text",  // jQuery will infer this, but you can set explicitly
			success: function( data, textStatus, jqXHR ) {
				$('.activity_title').html(baseConfig.activityTitle+" "+'<span style="color:#999">'+data+'</span>');
			}
		});
	});*/
});

function popUpClose()
	{
		recount=0;
		$('.lefBtn').off("mousedown");
		$(".roundAnimate").css({"left":"544px","right":"366px"});
		$(".roundbtn").off("click").on("click", ResbuttonClickFun).css({"cursor": "pointer"});
		$(".roundbtn").off("click").on("click", buttonClickFun).css({"cursor": "pointer"});
		$(".roundbtn").removeClass('yellowColoradd');
		$("#rtxt_2").trigger("click");
		$("#popups").hide();
	}

function loadStart()
	{
		var helpLen1 = Object.keys(info_background).length;
		for(var i=0;i<helpLen1;i++)
			{
				$('<div class="pdivHelp helpAudio"><img src="'+(templateStateImg.audiopause)+'" /><p class="m20">'+info_background['block'+i].text+'</p></div>').appendTo('.helpBlock1');
			}
		var helpLen2 = Object.keys(info_help).length;
		for(var j=0;j<helpLen2;j++)
			{
				var imgFound = info_help['block'+j].imgText.lastIndexOf('.png');
				if(imgFound != -1)
					{
						$('<div class="pdiv helpAudio"><img style="align-self:flex-start;margin-top:18px; margin-bottom: 0px;" src="'+(templateStateImg.audiopause)+'" /><div class="imgContain" style= "width:70px;margin-top:-18px;margin-left: 10px;"><img style="display:block;margin:auto;" src="'+(imgBase+'template/'+info_help['block'+j].imgText)+'" /></div><p class="m20" style="width:400px">'+info_help['block'+j].text+'</p></div>').appendTo('.helpBlock2');
					}
				else
					{
						$('<div class="pdiv helpAudio"><img style="align-self:flex-start;margin-top:18px; margin-bottom: 0px;" src="'+(templateStateImg.audiopause)+'" /><span class="helpDiv1">'+info_help['block'+j].imgText+'</span><p class="m20" style="width:370px">'+info_help['block'+j].text+'</p></div>').appendTo('.helpBlock2');
					}
			}		
		
		if(templateHdr.weltextlen > 1)
			{
				$('#rightNav').attr('src',templateStateImg.rightslideract);
			}
		else
			{
				$('.navMove').off('click');
			}
		
		loadHeadTabFood(headerlabel);			
		designActivity();			
		
		//$('.expDiv').append('<div class="scrollTop" style="top:0px"></div>');
		
		$(".helpBlock1").mCustomScrollbar({theme:"3d-thick",scrollInertia: 1000});
		scrollApply();
	}

function changeExpText()
	{			
		
		globalAudioPause();
		audioElement.play(); //activity audio play
		ctAttrExp = $(this).attr('explore');
		if(cpage != 'welcome' && ctClass == 1 )
		{
			AudioNameget =window["exploreText"][FindState[getIdSplit]][ctAttrExp]["AudioNamecon"][audioIndex][stepIndex];	
			audioNameArr[0] = AudioNameget;
			audioNameArr[1] = '';
		}
		checkExploreTxtLen(1);
		exploreDivH(ctAttrExp);		
		rotateValue=-280;		
		angleRot1=180;				
		
		
		if($(this).hasClass("animate"))
		{
			//expSlideDiv();
			rotateValue=0;		
			angleRot1=0;
		}
		$(".expFigCap").removeClass("animate")
        $(this).addClass("animate")
			
		if($('.expDiv').position().left<0) expSlideDiv();
		
	}

var lightString = '';	
var highlgtState=false;
function exploreDivH(expSel){
    		
	if(cpage == "explore")
		{  
			var changeLen = exploreText[headerlabel][expSel]['text'].length;
			var getText = (changeLen > 1)?exploreText[headerlabel][expSel]['text'][0]:exploreText[headerlabel][expSel]['text'];
			AudioNameget =(changeLen > 1)?exploreText[headerlabel][expSel]['AudioNamecon'][0][0]:exploreText[headerlabel][expSel]['AudioNamecon'][0];	
			AudioNameget =window["exploreText"][FindState[getIdSplit]][ctAttrExp]["AudioNamecon"][audioIndex][stepIndex];	
			audioNameArr[0] = AudioNameget;
			exoploreCtBubble = expSel;			
			$('.expimgcont').find('img').attr('src',(imgBaseAct+(exploreText[headerlabel][expSel].img))+imgPng);
			$('.expimgcont').css('display','block');	
			if($("#rtxt_3").attr("data-hover")=="active" && justLast)			
			{
				$('.expFoodBar').css('display','block');
				if(expSel != 'rabbitfish10'){
					$('.expPara').html(getText+act_Web_text[headerlabel]);
					
					additionalAudio = 'vtrlselecttrl';
					audioNameArr[1] = 'vtrlselecttrl';
					highlightAnim("rightlabel2");
				}
				else
				{
					var overWrite = window.setTimeout(function(){									
						$('.activeSlider').trigger('click');
						window.clearTimeout(overWrite);
					},20);
					$('.expPara').html(getText+act_Web_text[headerlabel]);
					highlightAnim("rightlabel2");
					audioNameArr[1] = 'vtrlselecttrl';
					additionalAudio = 'vtrlselecttrl';
				}
			}
			else{        
				
				
				$('.expPara').html(getText+lightString);
				audioNameArr[1] = '';
				additionalAudio = '';
			}
			$('.expPara').css('top','140px');
			$('.expDivIcon').css('top','156px');
			globalAudioPause();
			//checkExploreTxtLen(changeLen);	
			changeHeightExp();	
			//alert(Number(expSel.match(/\d+/g))+1)
			if(((Number(expSel.match(/\d+/g))+1) == Object.keys(exploreText[headerlabel]).length)  && !animStarted && !repos)
				{
				
				$(".screenIcon").attr("src","assets/images/template/camera_icon_disabled.png").off("click").css({"cursor":"default"});
					if($("#rtxt_3").attr("data-hover")=="active")
						{
							$('.EventNotAllowed').css('display','none');
						}
					clearTimeout(revertsetTimeVar);					
					var animGo = {'monterey':[544,260],'amazon':[457,138]};			
					var matchElem = Number(ctAttrExp.match(/\d+/g));
						$('.expFigCap').eq(matchElem).stop().animate({left:animGo[headerlabel][0],top:animGo[headerlabel][1]},1000, function(){
						
						$('.Arrow').last().animate({"opacity":1},{duration: 300, start: function(){$('.expFigCap').eq(matchElem).find('div').css({boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)"});}, complete: function(){					
						animStart = 0;	
						animStarted=true;
						repos=true;
						if(cpage=="activity")
						{$('.EventNotAllowed').css('opacity','0.3');}				
						animFun(headerlabel);
						
						
						}});
									
					});
				
				}
		   if(((Number(expSel.match(/\d+/g))+1) != Object.keys(exploreText[headerlabel]).length)  && animStarted)
				{
					if(activitytag)
					{
						$(".screenIcon").attr("src","assets/images/template/camera_icon_disabled.png").off("click");
					}
					clearTimeout(setTimeVar_arrow);	
					clearTimeout(setTimeVar);
					if($("#rtxt_3").attr("data-hover")=="active")
						{
							$('.EventNotAllowed').css('display','none');
						}
					revert_animFun(headerlabel);
				}
		}
	else
		{			
			if(actitivyStart == expSel)
				{					
					
					activeCount++;
					if(actitivyStart == 'sea8') activeCount = 3;
					
					$(".glowEffect").hide();
					
					checkExploreTxtLen(activeCount+1);
					/* if(!highlgtState)
					{
						$(".glow8").show();
						highlgtState=true;
					} */
					
					var getText = contText[activeCount][0];
					$('.EventNotAllowed').css('display','block');
					$('.expFoodBar').attr('data-attend','0');
					exoploreCtBubble = expSel;
					AudioNameget =contText_audio[activeCount][0][0];
					audioNameArr[0] = AudioNameget;
					audioNameArr[1] = '';
					$('.expPara').html(getText);	
					$('.expimgcont').find('img').attr('src',(imgBaseAct+(exploreText[headerlabel][expSel].img))+imgPng);
					$('.expimgcont').css('display','block');
					$('.expPara').css('top','140px');
					$('.expDivIcon').css('top','156px');
					changeHeightExp();
					addstr = 'Select the picture of the sea urchin.';
					audiovar = 'vtrlsea';
					
					actitivyStart = 'sea8';						
					if(activeCount >= 3 ) 
					{						
						//highlightAnim("rightlabel2");
						justLast = true;
						//lightString = '<span class="nextStepIntim">Select1 Trophic Levels to continue.</span>';
						cpage = "explore";						
												
					}		
					
				}
			else
				{					
					$('.expPara').html(addstr);
					if(!highlgtState && activeCount ==1){
						$(".glow8").show();
						highlgtState=true;
					}
					AudioNameget = audiovar;
					audioNameArr[0] = AudioNameget;
					audioNameArr[1] = '';
					$('.EventNotAllowed').css('display','block');					
					$('.moveNextFood').attr('data-attend','0');
					globalAudioPause();
					//checkExploreTxtLen(changeLen);
					$('.expimgcont').css('display','none');
					$('.expPara').css('top','0px');
					$('.expDivIcon').css('top','16px');
					changeHeightExp();					
				}
		}

	}
	
var height_icon=67;
function changeHeightExp(defH)
	{
		if($("#bubbleleftNav").css("display")=="block")	{height_icon=67;}
		else{height_icon=32;}
		if($(".expimgcont").css("display")=="block"){
			var img_height=parseInt($(".expimgcont").css("height"));			
			$('.expPara').css('top','0px');
		}
		else{img_height=0;}
		if(activitytag){
			if($('.bubbleBar').css('display') == 'flex') var acttagheight=60;
			else  var acttagheight=35;
			height_icon=0;
		}
		else{
			$('.expDiv').find('.bubbleBar').remove();	
			var acttagheight=0;
		}
		
		var getHeig =(parseInt($('.expChild').find(".expPara").css("height")))+height_icon+img_height+acttagheight;
		$('.expChild').css('height',getHeig);		
		$('.expDiv').css('height',getHeig);	
		$('.shadowTop,.shadowBottom').remove();
		$('.expFoodBar').css('bottom','0px');
		
		$('.expChild').mCustomScrollbar('destroy');
		$(".expChild").css({'overflow-y':'hidden'});
		if(getHeig > 360){
			$('.expChild').css('height',350);
			$('.expDiv').css('height',350);
			if(activitytag)	{			
				$('.expChild').css('height',306);
				
			}		
			scrollApplyChoose('expDiv','expChild');
		}
		else
			{		
				//if($('.bubbleBar').css('display') == 'flex' && activitytag)	$('.expDiv').css('height',parseInt(getHeig+20));
				$('.expChild').mCustomScrollbar('destroy');
			}
		var fixAudioIcon = (img_height == 0)?16:164;	
		$('.expDivIcon').css('top',fixAudioIcon);
			
		//------------Slider Bottom set when text changes-------//
		if(parseInt($('.expChild').height()+parseInt($('.expDiv').css('top'))) >= parseInt($('.workArea').height())){
			var animVal = parseInt($('.workArea').height()) - 350;
			$('.expDiv').css('top',animVal)
		}
	}
	
function scrollApplyChoose(parent,child)
	{	
		$('.'+parent).append('<div class="shadowTop"></div><div class="shadowBottom"></div>');
		$('.shadowTop,.shadowBottom').css('display','none');
		$('.shadowBottom').css('display','block');	
		if(activitytag)	{		
			$('.shadowBottom').css({bottom:'44px'});
		}
		else{
			$('.shadowBottom').css({bottom:'0px'});
		}		
		$("."+child).mCustomScrollbar({theme:"3d-thick",scrollInertia: 800,
		live: true,
		callbacks:{
			onScrollStart:function(){
			  $('.shadowTop,.shadowBottom').css('display','block');
			},
			onTotalScroll:function(){
			$('.shadowBottom').css('display','none');	 
			  $('.shadowTop').css('display','block');
			},
			onScroll:function(){
			  if(this.mcs.top == 0)
				{
					$('.shadowTop').css('display','none');
					$('.shadowBottom').css('display','block');
					if(activitytag)	{		
						$('.shadowBottom').css({bottom:'44px'});
					}
					else{
						$('.shadowBottom').css({bottom:'0px'});
					}
				}
			}
		}});
		$("."+child).mCustomScrollbar("scrollTo",[0,0]);
		//$('.expFoodBar').css('bottom','-44px');
		scrollApply()
	}
	
function scrollApply()
	{	
		$('.mCSB_draggerContainer').css({boxShadow:'none'}).css('background','#fff').css('border','1px solid #898a8c').css('border-radius','0px');
		$('.mCSB_dragger_bar').css('margin','0px').css('background','rgba(0, 0, 0, 0.5)').css({boxShadow:'none'}).css('border-radius','0px');		
		$('.mCSB_draggerContainer').css({border:'1px solid rgba(0,0,0,0.7)'});
		$('.mCSB_dragger_bar').css({'left':'0px',"width":"100%"});
		$('.mCSB_container').css({marginRight: '20px'});
		$('.mCSB_dragger').css({minHeight:'94px'});
		$('.mCSB_scrollTools').css('z-index',10);
	}	
	
var ctClass;
var deActClass;
function toggleExpTabs()
	{	
		audioNameArr = ['', '',0];
		$(".highlight").hide();
		//$(".roundbtn").off("click").on("click", ResbuttonClickFun).css({"cursor": "pointer"});
		globalAudioPause();
		audioElement.play(); //activity Audio play
		$('.EventNotAllowed').css('display','none');
		$('.rightlabel2').css('animation','none');
		deActClass = ($(this).hasClass('rightlabel1') == true)?2:1;
		//alert(deActClass)
		ctClass = ($(this).hasClass('rightlabel1') == true)?1:2;
		$('.rightlabel1,.rightlabel2').off('click').on('click', toggleExpTabs);
		$(this).off('click');
		$(".screenIcon").attr("src","assets/images/template/camera_icon.png").off("click").on("click",captureScreen).css({"cursor":"pointer"});
		$('.rightlabel'+deActClass).removeClass('labelArrow').css({'cursor':"pointer"});
		$('.rightlabel'+deActClass).css({'color':'#fff','background':'#6D6E70'});
		if(activitytag)
			{			
				if($(this).hasClass('rightlabel2')) {
					
					$(".roundAnimate").draggable({disabled: true}).css({"cursor": "default"})
					$("#roundAnimate_3").draggable({disabled: false}).css({"cursor": "pointer"});
					$('.rightlabel1, .rightlabel2').off('click');
					$('.rightlabel1').css({cursor:'default'});
				}
			}
		else {
			var overWrite = window.setTimeout(function(){									
				if($('.expDiv').position().left < 0) $('.activeSlider').trigger('click');
				window.clearTimeout(overWrite);
			},20);
		}
		//$('.rightlabel'+deActClass).off('click').on('click', toggleExpTabs);		
		$(this).addClass('labelArrow').css({'cursor':"default"});
		$(this).css({'color':'#FFCC00','background':labelSettings[headerlabel]});
		$('.exploreLabel_'+deActClass).css('display','none');
		$('.exploreLabel_'+ctClass).css('display','block');		
		changeHeightExp();
		//alert(headerlabel+"*********"+ctClass)
		trophicGame(headerlabel,ctClass);
		
	}	
	
function expSlideDiv(e)
	{		
		globalAudioPause();		
		rotateValue = (rotateValue >= 0)?-280:0;		
		angleRot1 = (angleRot1 == 0)?180:0;
		
		if(activitytag && rotateValue==-280)		
		{		
			$(".EventNotAllowed").css("display","none");		
		}		
		else if(activitytag && rotateValue>-280)		
		{		
			$('.glowOk').show();
			$(".EventNotAllowed").css("display","block");		
		}		
		if(!activitytag)		
		{			
			$(".EventNotAllowed").css("display","none");		
		}
		
		//$('.activeSlider').off('click');
		var attenedData = $('.moveNextFood').attr('data-attend');	
		$('.expDiv').stop().animate({left:rotateValue},800,function(){			
			/*if((rotateValue <= -280) && (attenedData != 0))
				{
					$('.EventNotAllowed').css('display','none');
				} */
				if(rotateValue!=0)
				{
					globalAudioPause();
					$(".expFigCap").removeClass("animate")
				}
			$('.activeSlider').off('click').on('click', moveFoodWeb);			
			$('.activeSlider').myMethod1(angleRot1);		
		});		
	}
	
$.fn.extend({
		myMethod1: function(angle){$(this).css('transform','rotate('+(angle)+'deg)')}
	});	

function moveTxtPopBlock(e)
	{
		var ctId = $(e.target).attr('id');
		
		if(ctId == 'bubblerightNav')
			{
				
				$('.expimgcont').hide();
				$('#bubbleleftNav').attr('src',templateStateImg.leftslideract);	
				$('#bubbleleftNav').css({'cursor':'pointer','pointer-events':'auto'});
					
				if(bubbleStart < (selBubbleLen-1))
					{						
						bubbleStart++;
						var bubbleText = contText[activeCount+bubbleStart][0];
						AudioNameget = contText_audio[activeCount+bubbleStart][0][0];
						audioNameArr[0] = AudioNameget;
						audioNameArr[1] = '';
						$('.expPara').html(bubbleText);	
						if($("#rtxt_3").attr("data-hover")=="active" && justLast)
						 {						
							//$('.expPara').html(bubbleText+act_Web_text[headerlabel]);
						 } 
					}
				if(bubbleStart == (selBubbleLen-1))
					{
						$('#bubblerightNav').attr('src',templateStateImg.rightsliderdeact);
						$('#bubblerightNav').css({'cursor':'default','pointer-events':'none'});
						$('.expFoodBar').css('display','block');
					}	
					if(activeCount == 1 && bubbleStart ==1)
					{
						$(".glow8").show();
					}
					if(activeCount >= 3 && bubbleStart == 1) 
					{						
							highlightAnim("rightlabel2");
							//lightString = '<span class="nextStepIntim">Select1 Trophic Levels to continue.</span>';
							cpage = "explore";						
							justLast = true;						
					}
				if(activeCount >= 3 && bubbleStart == 1) 
				{						
						highlightAnim("rightlabel2");
						//lightString = '<span class="nextStepIntim">Select1 Trophic Levels to continue.</span>';
						cpage = "explore";						
						justLast = true;						
				}
			}
		else
			{
				$('.expimgcont').show();
				$('#bubblerightNav').attr('src',templateStateImg.rightslideract);
				$('#bubblerightNav').css({'cursor':'pointer','pointer-events':'auto'});
				if(bubbleStart > 0)
					{
						bubbleStart--;
						var bubbleText = contText[activeCount+bubbleStart][0];
						AudioNameget = contText_audio[activeCount+bubbleStart][0][0];
						audioNameArr[0] = AudioNameget;
						audioNameArr[1] = '';
						$('.expPara').html(bubbleText);
					}
				if(bubbleStart == 0)
					{
						$('#bubbleleftNav').attr('src',templateStateImg.leftsliderdeact);
						$('#bubbleleftNav').css({'cursor':'default','pointer-events':'none'});
					}	
			}		
		globalAudioPause();	
		changeHeightExp();	
	}	

var defBg = 'step_0';
var animLength = 0;	
var animStartVal = 0;
var animInterval;
var duration = 1;
var maxVal = 1000;
var retainCurpos = [];

function highlightAnim(getType)
	{		
		
		$('.'+getType+' .highlight2').css({display: 'block', borderRadius: '0px'});
		$('.'+getType).attr('id','dummyTemp');	
		$('.rightlabel1,.rightlabel2').off('click').on('click', toggleExpTabs).css("cursor","pointer");	;	
		$('.rightlabel1').off('click').css("cursor","default");
	}
	
function speechToText(txt)
	{
		var audioMode = $('.screenArea').attr('audio-mode');
		var ctState = (audioMode == "on")?'pause':'play';	
		$('.expAudio').attr('audio-state','play');		
		$('#globalAudio').off('ended').on('ended', callEndFun);							
		playGlobalAudio(txt);
	}	

var selectedIndex = 0;
var prevMove = 0;
var welcomeMove = 0;
var defIndex = -1;	
var AudioNameget;
var tempstore;
var audioIndex = 0;
var helpWinAudio;
var firstTimeCheck=true;
//shell Audio
var FindState=["monterey",'amazon'];	
function playGlobalAudio(passText)
	{	
		/* if(cpage == 'welcome')
		{
			audioElement.pause();
		} */
		
		var textPara = typeof passText;	
		
		var url;
		var ctElem = (textPara != 'string')?$(this):$('.expAudio');			
		var childWindow = $('iframe').contents();
		var toggleState = ((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))?childWindow.find('.expAudio').attr('audio-state'):ctElem.attr('audio-state');
		
		if(toggleState == "pause")
			{
				
				$('.screenArea').attr('audio-mode','on');
				/* if((cpage == 'welcome'))
					{
						var ctElemText = passText;
					}
				else 
					{
											
					} */
				if($('.helpwindow').css('display') != 'none')
				{
				
					/* if(firstTimeCheck)
					{
						tempstore = AudioNameget;
						firstTimeCheck = false;
					} */
					var ctElemText = (textPara != 'string')?ctElem.parent().find('p').text():passText;	
					var ctString = ($('.helpBlock1').css('display') == 'block')?'info_background':'info_help';
					var getIndex = $(this).parent().index();
					helpWinAudio = String(window[ctString]['block'+getIndex]['AudioNamecon'])
				}
				selectedIndex = $(this).parent().index();
				if(prevMove != welcomeMove) {
					$("#globalAudio").prop('currentTime',0);
				}
				prevMove = welcomeMove;	
				if(selectedIndex != defIndex)
					{						
						$("#globalAudio").prop('currentTime','0');						
					}
					
				if($("#globalAudio").prop('currentTime')<=0)
					{	
					
						if($('.helpwindow').css('display') == 'flex')	url = "assets/audio/"+ helpWinAudio +".mp3";
						else url = "assets/audio/"+ AudioNameget +".mp3";
					}			
				$("#globalAudio").attr("src",url).get(0).play();
				$('.expAudio').attr('audio-state','pause').attr('src',templateStateImg.audiopause);
				ctElem.attr('src',templateStateImg.audioplay);
				ctElem.attr('audio-state','play');	
				if(cpage == 'welcome' && ($('.helpwindow').css('display') == 'none'))
					{
						
						childWindow.find('.expAudio').attr('audio-state','play').attr('src',"../../"+templateStateImg.audioplay);						
					}
				else
					{
						
						$('.expAudio').attr('audio-state','pause').attr('src',templateStateImg.audiopause);
						ctElem.attr('src',templateStateImg.audioplay);
						ctElem.attr('audio-state','play');	
					}
					
				defIndex = selectedIndex;
			}
		else
			{
				$('.screenArea').attr('audio-mode','off');
				$("#globalAudio").attr("src",url).get(0).pause();
				if((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))
					{						
								
						childWindow.find('.expAudio').attr('audio-state','pause').attr('src',"../../"+templateStateImg.audiopause);						
					}
				else
					{	
						$('.screenArea').attr('audio-mode','off');	
						$("#globalAudio").attr("src",url).get(0).pause();
						$('.expAudio').attr('audio-state','pause');
						ctElem.attr('src',templateStateImg.audiopause);
						ctElem.attr('audio-state','pause');	
					}
			}
		$('#globalAudio').off('ended').on('ended', callEndFun);		
		
			
	}
var altextArray = ['','Amazon Rainforest background','Monterey Bay background']	
function headerTabs(label)
	{	
		revert_animFun(headerlabel);
		prevMove = -1;
		var thisTab = label;
		headerlabel = thisTab.text().split(' ')[0].toLowerCase();	
		var ctIndex = Number(thisTab.attr('data-show'));
		var ano = (ctIndex == 1)?2:1;
		imageName = (ctIndex == 1)?"monterey":"amazon";
		$('#ch'+ano).removeClass('chheader'+ano).addClass('chheader'+ano+'Act').css('background','#6d6e71').css('color','#fff');
		$('#ch'+ctIndex).removeClass('chheader'+ctIndex+'Act').addClass('chheader'+ctIndex).css('background',labelSettings[headerlabel]).css('color','#FFCC00');
		$('.baseImg').remove();		
		$('.workArea').prepend('<img class="baseImg" alt="'+(altextArray[ano])+'" src="assets/edge/images/'+imageName+'.png"/>');
		var actClass = $('.rightlabel1').hasClass('labelArrow');
		var applyCol = (actClass == true)?1:2;
		$('.rightlabel'+applyCol).css('background',labelSettings[headerlabel])
		if(cpage=="explore")
		{justLast=false;}
		$('.expFigCap').stop();
		clearTimeout(setTimeVar);
		clearTimeout(setTimeVar_arrow);
		clearTimeout(revertsetTimeVar);
		animStarted=false;
		repos=false;
		globalAudioPause();
		loadHeadTabFood(headerlabel);
		$('.expimgcont').css('display','none');			
		$('.expPara').html('Click on any organism in the food web to learn more about it.');
		AudioNameget = 'vtrlstatic_01';
		audioNameArr[0] = AudioNameget;
		audioNameArr[1] = '';
		//alert(AudioNameget)
		changeHeightExp();
		
		//$('.expPara').css('top','140px');
		//$('.expDivIcon').css('top','156px');		
	}
	
function loadHeadTabFood(label)
	{
		prevMove = -1;
		$('.expChild,.expImgs').empty();		
		$(".Arrow").remove();
		$('.btmlabel1,.activeSlider').remove();
		clearTimeout(setTimeVar);
		clearTimeout(setTimeVar_arrow);
		clearTimeout(revertsetTimeVar);
		animStarted=false;
		repos=false;
		if(activitytag)
			{
				
				$(".screenIcon").attr("src","assets/images/template/camera_icon.png").off("click");
			}
		$('.EventNotAllowed1').hide();
		var addArrow  = (label == 'monterey')?4:5;	
		var loadArrows = Object.keys(exploreText[headerlabel]).length+addArrow;
		for(var i=0;i<loadArrows;i++)
			{
				$('<img class="Arrow" src="'+(imgBaseAct+'arrows/'+headerlabel)+'_arrow_'+i+'.png" id="'+(headerlabel)+'_arrow_'+i+'" />').appendTo('.exploreLabel_1');
			}
		var expFood = Object.keys(exploreImg[label]).length;		
		for(var k=0;k<expFood;k++)
			{				
				$('<figure class="expFigCap" explore="'+(String(exploreImg[label]['img'+k].text).split(' ')[0]+k).toLowerCase()+'" style="position:absolute;left:'+(exploreImg[label]['img'+k]['pos'][0])+'px;top:'+(exploreImg[label]['img'+k]['pos'][1])+'px;"><img alt="'+exploreImg[label]['img'+k].text+'" src="'+imgBaseAct+exploreImg[label]['img'+k].img+'.png" width="135px" draggable="false" /><div class="glowEffect glow'+k+'"></div><div class="clickBorderCutFW"></div><figcaption>'+exploreImg[label]['img'+k].text+'</figcaption></figure>').appendTo('.expImgs');
			}	
		$('<div class="expimgcont"><img width="180px" draggable="false" src="'+(imgBaseAct+exploreText[label][Object.keys(exploreText[label])[0]].img)+'.png"/></div><img src="'+(templateStateImg.audiopause)+'" class="expDivIcon expAudio" audio-state="pause" width="30px"/><p class="expPara">'+(exploreText[label][Object.keys(exploreText[label])[0]]['text'][0])+'</p><img src="assets/images/template/lslider.png" width="24px" class="activeSlider" alt="Slide Animation"/>').appendTo('.expChild');
		
		$('<img src="assets/images/template/lslider.png" width="24px" class="activeSlider" alt="Slide Animation"/>').appendTo('.expDiv');
		
		//$(".expChild").mCustomScrollbar();
		$('<span class="btmlabel1">Invasive Species</span> <span class="btmlabel1" style="left:560px;">Native Organisms</span>').appendTo('.exploreLabel_1');
		$('.expAudio').off('click').on('click', playGlobalAudio);
		
		$('.activeSlider').off('click').on('click', moveFoodWeb);
		
		$('[explore]').off('click').on('click', changeExpText);
		//$('.expFigCap').last().find('div').css({border:'4px solid red',borderRadius:'12px'})
		//checkExploreTxtLen(exploreText[label][Object.keys(exploreText[label])[0]]['text'].length);
		changeHeightExp();
	}
	
function checkExploreTxtLen(len)	
	{
		bubbleStart = 0;
		selBubbleLen = 2;
		$('.expDiv').find('.bubbleBar').remove();				
		if(len > 1 && activitytag)
			{
				
				$('.expPara .nextStepIntim').remove();
				$('.expDiv').append('<div class="bubbleBar"> <img src="'+(templateStateImg.leftsliderdeact)+'" id="bubbleleftNav" alt="Left move" class="bubblenavMove" width="28px"/> <span style="width:42px"></span> <img alt="Right move" src="'+(templateStateImg.rightslideract)+'" id="bubblerightNav" class="bubblenavMove" width="28px" style="cursor:pointer"/></div>');
				$('.expFoodBar').css('display','none');
			}					
		$('.bubblenavMove').on('click', moveTxtPopBlock);	
		$('#bubbleleftNav').css({'pointer-events':'none'});
		$('#bubblerightNav').css({'pointer-events':'auto'});
	}
	
function globalAudioPause()
	{	
		// alert($('.helpwindow').css('display'))
		if((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))
			{
				var childWindow = $('iframe').contents();
				childWindow.find('.expAudio').attr('audio-state','pause').attr('src',"../../"+templateStateImg.audiopause);
				$('.screenArea').attr('audio-mode','off');	
				$("#globalAudio").trigger('pause');	
				$("#globalAudio").prop('currentTime','0');
				prevMove = -1;
				
			}
		else
			{				
				$('.expAudio').attr('audio-state','pause');
				$('.expAudio').attr('src',templateStateImg.audiopause);
				$('.screenArea').attr('audio-mode','off');	
				$("#globalAudio").trigger('pause');	
				$("#globalAudio").prop('currentTime','0');
				prevMove = -1;
			}				
	}

var lastIndex;
var contText = [
[["In this activity, you will explore how energy flows through the ecosystem in Monterey Bay’s kelp forest. Kelp is an important organism in the flow of energy. Select the picture of kelp in the food web to learn more about it."],[1]],
[["Kelp is a type of algae. It grows to form dense underwater forests in cool marine environments that are well-lit and rich in nutrients. Kelp provides shelter and serves as a source of food for many marine animals."],[0]],
[["You learned that kelp is a producer, which means that it makes its own food through photosynthesis. Notice the arrow pointing from kelp to sea urchin. What do you think this means? Select the picture of the sea urchin in the food web to find out."],[1]],
[["Sea urchins live on the ocean floor. They use their spines for protection and their tiny tube feet to move around. They feed on kelp as well as other types of algae. Sea urchins are eaten by sea otters, sea stars, and some types of fish. "],[0]],
[["You found that the sea urchins feed on kelp. The arrow pointing from kelp to sea urchins represents energy moving from kelp to sea urchins. Study the rest of the food web to see how energy moves in other feeding relationships. Then select Trophic Levels."],[1]],
[["Select Trophic Levels to continue."],[1]]];
var contText_audio = [
[["vtrlstart"],[1]],
[["vtrlem_05"],[0]],
[["vtrlyoulearn"],[1]],
[["vtrlem_09"],[0]],
[["vtrlyoufound"],[1]],
[["vtrlselecttrl"],[1]]];
var activeCount = 0;	
var moveFoodWeb = function()
{	
	$('.glowOk').hide();
	if(activitytag)
	{
		if($(this).hasClass('activeSlider')){	
			rotateValue = -280;angleRot1 = 180;
			if($('.expDiv').position().left >= 0 ){ rotateValue = 0;angleRot1 = 0}		
			expSlideDiv();	
			return;
		}
		$('.expFoodBar').hide();
		
		if(contText[activeCount][1] == 0)
			{				
				activeCount++;
				cpage = "activity";			
				$('.expimgcont').css('display','none');			
				$('.expPara').css('top','0px');
				$('.expDivIcon').css('top','16px');
				$('.expPara').html(contText[activeCount][0]);
				$('.moveNextFood').attr('data-attend','0');	
				AudioNameget ='vtrlstart';	
				audioNameArr[0] = AudioNameget;
				audioNameArr[1] = '';
			}
		else
			{
				
				if(activeCount < 3) {cpage = "activity";}
				else {cpage = "explore";}
				$('.moveNextFood').attr('data-attend','1');	
				if($('.expDiv').position().left >= 0 ){ rotateValue = 0;angleRot1 = 0}			
				expSlideDiv();				
			}
		globalAudioPause();
		changeHeightExp();			
	}	
	else
	{
		if($('.expDiv').position().left >= 0 ){ rotateValue = 0; angleRot1 = 0;}	
		expSlideDiv();
	}
}

