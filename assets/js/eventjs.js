var TextGetVarible;
var feedBack="step";
var stepIndex=0;
var arrlengthFind;
var dragging=false;
var mainNavTabs = function(){
	$('.rtxt').off('click').on('click',rbuttoneve);
}
function initialfun()
	{
		$('.workArea').hide();		
		mainNavTabs();
		$('.help1,.help2').off('click').on('click',toggleHcont);	
		$('.baseImg,.clickClose1,.clickClose,.closeclick1,.closeclick').off('click').on('click',baseImgFun);	
		$('.dragComp,.dummy_Div').off('mousedown').on('mousedown',function(e){
			if($(e.target).hasClass('dragComp')||$(e.target).hasClass('dummy_Div')) baseImgFun(e);			
		});	
		$('.rtxt').attr('data-hover','none');
		$('.rtxt').eq(0).trigger('click');	
		
		$('.screenIcon').off('click');		
		$('.rtxt').hover(
		  function(event){
			var ctTarget = $(event.target);
			var actStatus = ctTarget.attr('data-hover');	
			if(actStatus != 'active')
				{
					// $(this).css({'color':templateHdr.textActive,'box-shadow':'0 -6px #FFCB05'});					
					$(this).css({'color':templateHdr.textActive});					
				}
			},
			function(event){
				var ctTarget = $(event.target);
				var actStatus = ctTarget.attr('data-hover');	
				if(actStatus != 'active')
				{
					$(this).css({color:templateHdr.textNormal,boxShadow:'none',fontFamily:'Roboto-Bold'});
				}
			}
		);
		$('.infoIcon').off('click').click(function(){	
			//titlt = false;
			globalAudioPause();
			
			$(".screenIcon").attr("src","assets/images/template/camera_icon_disabled.png").off("click").css({"cursor":"default"});
			$('.helpScreen').fadeIn(300);
			$('.helpwindow').css('display','flex');
			$('.helpBlock1').find('img').addClass('expAudio');
			$('.helpBlock2').find('.pdiv').each(function(){
				$(this).find('img:first').addClass('expAudio');
				$(this).find('img:first').attr('audio-state','pause');	
			});
			$('.helpBlock1').find('.expAudio').attr('audio-state','pause');
            $('.expAudio').off('click').on('click', playGlobalAudio);	
			$('.help1').trigger('click');	
			audioElement.pause();
		});

	
		$(document).off('mousedown touchstart').on('mousedown touchstart',function(e){
			var targetClass = $(e.target).attr('class');
			if(targetClass == "helpwindow" ||targetClass == "closeIcon")
			{
				audioElement.play();
				closeHelpWin()
				
			}
		});
		//$('.chheader2').css('box-shadow','none');
		$('.chheader2').removeClass('chheader2').addClass('chheader2Act');		
		//$('.infoIcon').trigger('click');	
		$("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").css('display','none');	
	}

var closeHelpWin = function(e){	 
	//if(!audiocheckFlag) audioNameGetFun();
	
	AudioNameget = audioNameArr[0];
	firstTimeCheck = true;
	$('.helpwindow').fadeOut(300);
	globalAudioPause();
	$('.helpBlock1,.helpBlock2').find('img').removeClass('expAudio');	
	if(cpage == 'welcome')
	{
		audioElement.pause();
	}
	else
	{
		audioElement.play()
	}
	
}
var helpCtClass;
function toggleHcont(e)
	{
		selectedIndex = 0;
		defIndex = -1;
		helpCtClass = Number($(e.target).attr('class').match(/\d/));
		var togNum = (helpCtClass == 1)?2:1;		
		$('.helpBlock1,.helpBlock2').css('display','none');	
		$('.help1').removeClass('lclass');
		$('.help2').removeClass('rclass');	
		$('.help1,.help2').css('cursor','pointer');	
		//$('.help1,.help2').css('background-color','#dce3e5').css('color','rgba(0,0,0,0.7)');		
		$('.help'+togNum).addClass($('.help'+togNum).attr('data-class'));
		$('.helpBlock'+helpCtClass).css('display','block');
		$('.help'+helpCtClass).css({'cursor':'default'})
		//$('.help'+helpCtClass).css('border','0px soild #000').css('color','#000').css('background-color','#fff');
		globalAudioPause();
	
	}	
	
var activitytag = true;	
var currentactivity = 0;
var parentTab = 'welcome';	
var cpage;
function rbuttoneve(event)
	{		
		audioNameArr = ['', '',0];
		titlt = false;
		prevMove = -1;
		globalAudioPause();
		$('.rightlabel2').css('animation','none');
		$('.rightlabel2').css('cursor','default');
		mainNavTabs();
		$(this).off('click');
		var ctTarget = $(event.target);
		cpage = event.target.getAttribute("name");
		////alert(cpage)		
		$('.rtxt').attr('data-hover','none').css({"cursor":"pointer"});
		$('.rtxt').css({color:templateHdr.textNormal,boxShadow:'none',fontFamily:'Roboto-Bold'});		
		ctTarget.attr('data-hover','active').css({"cursor":"default"});	
		ctTarget.css({color:'#FFCC00',boxShadow:'0 -6px #FFCB05'/*,'font-family':'Roboto-Black'*/});
		$('.workArea').hide();
		$('#'+cpage).show();		
		$('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');
		parentTab = $(this).html().toLowerCase(); 
		lightString = '';
		activeCount = 0;
		$('.EventNotAllowed').css('display','none');
		revert_animFun(headerlabel);
		if($(this).html().toLowerCase() == 'activity')
			{
				activitytag = true;
				getIdSplit=0;
				currentActStep = 0;
				audioTextIndex = 0;
				flag=true;
				justLast = false;
				noact(currentactivity);
				//topLeft0 = shuffle(topLeft0);
				//topLeft1 = shuffle(topLeft1);
				$(".drag").draggable("disable");
				$("#drag_"+ansorderArrMon[dropCount]).draggable("enable");
				audioPlay();
				$(".roundbtn").removeClass("yellowColoradd")
				restartWelcome();
			}
		else
			{				
				activitytag = false;
				flag=false;				
				noact(currentactivity);
				//topLeft0 = shuffle(topLeft0);
				//topLeft1 = shuffle(topLeft1);								
				$("#drag_"+ansorderArrAm[dropCount]).draggable("enable");
			}
		
		$('.rightlabel1,.rightlabel2').off('click').on('click', toggleExpTabs);		
		if($(this).html().toLowerCase() == 'explore')
			{
				audioFunction(currentactivity)
				audioElement.play(); //activity Audio play
				rotateValueAct=-294;
				$(".roundbtn").off("click").on("click", ResbuttonClickFun).css({"cursor": "pointer"});
				$(".button").off("click").on("click",buttonClick);
				$('#ch1').trigger('click');
				$('.rightlabel1').trigger('click');
				$('.baseImg').remove();		
				$('.workArea').prepend('<img class="baseImg" alt="Monterey Bay background" src="assets/edge/images/'+imageName+'.png"/>');
				addstr='Select the picture of kelp in the food web.';
				audiovar = 'vtrlkelp';
				exploreActive = true;
				$(".Modes,.highlightTab").show();
				setFalg=false;	
				feedBack='right';
				audioTextIndex=0;
				noStepArr=[0,0,0,0,0,0,0,0,0,0,0,0];
				arrAnimate = [0,0,0];
				$(".roundAnimate").css({"right":"366px"})
				$(".sliderAnimate").css({"width":"0px"})
				stepIndex=0;
				currentActStep=0;
				actTxt='';
				audioPlay();
				actitivyStart = 'kelp4';
				$(".screenIcon").attr("src","assets/images/template/camera_icon.png").off("click").on("click",captureScreen).css({"cursor":"pointer"});
				$('.EventNotAllowed1').hide();
				
				$(".drag").off("click");
				var overWrite = window.setTimeout(function(){									
					if($('.expDiv').position().left < 0) $('.activeSlider').trigger('click');
					window.clearTimeout(overWrite);
				},20);
				$('.expimgcont').hide();
				$('.expDivIcon').css({    top: '16px'});
				$('.expPara').css({top: '0px'}).html('Click on any organism in the food web to learn more about it.');
				AudioNameget = 'vtrlstatic_01';
				audioNameArr[0] = AudioNameget;
				audioNameArr[1] = '';
				//$('.expimgcont').find('img').attr('src',(imgBaseAct+"white")+imgPng);
				wrongAttDemt=false;				
				$(".dummyNav").hide();
				//var myTimeout=setTimeout(function(){$('.EventNotAllowed').css('display','none');clearTimeout(myTimeout);},500)
				
				$(".expDiv").css({"left":"-280px"});
				rotateValue =-280;
				angleRot1=180;
				expSlideDiv();
				$(".arrowbtn,.dummyNav,.actOkBar").hide();
				$('.activitySlider').off('click').on('click', activitySlideDiv);
				$("#popups").hide();
				$(".expFoodBar").remove();
				changeHeightExp();
				restartWelcome();
				$(".roundAnimate").draggable({disabled: false}).css({"cursor":"pointer"})
			}
		if($(this).html().toLowerCase() == 'activity')
			{
				currentactivity = 0;
				// alert(currentactivity)
				audioFunction(currentactivity)
				audioElement.play(); //activity Audio play
				$(".button").off("click").on("click",buttonClick);
				rotateValueAct=0;
				setFalg=false;
				exploreActive = false;	
				feedBack='right';
				audioTextIndex=0;
				noStepArr=[0,0,0,0,0,0,0,0,0,0];
				arrAnimate = [0,0,0];
				$(".roundAnimate").css({"right":"366px","left":""})
				$(".sliderAnimate").css({"width":"0px"})
				 $(".roundbtn").off("click").on("click", buttonClickFun).css({"cursor": "pointer"});
				 //$(".roundAnimate").draggable({disabled: true})
				// $("#roundAnimate_3").draggable({disabled: false}).css({"cursor": "pointer"});
				stepIndex=0;
				currentActStep=0;
				activityFoodCount = 0;
				getIdSplit=0;
				addstr='Select the picture of kelp in the food web.';
				audiovar = 'vtrlkelp';
				lastIndex = '';
				$('#ch1').trigger('click');
				$('.rightlabel1').trigger('click');
				$('.baseImg').remove();			
				$('.workArea').prepend('<img class="baseImg" src="assets/edge/images/'+imageName+'.png"/>');
				highlgtState=false;
				$(".Modes,.highlightTab").show();				
				exploreDivH('activity');
				$("#activity").hide();
				$("#explore,.dummyNav,.glow4").show();
				$('.expPara').html(activityFoodWeb[activityFoodCount]);
				
				//$('.expDiv').append("<div class='expFoodBar' style='bottom:-44px'><div class='moveNextFood'  data-attend='0'></div><div class='glowOk'></div></div>");					
				//$('[explore]').off('click');
				$('.moveNextFood').off('click').on('click', moveFoodWeb);
				$('.rightlabel2').off('click');	
				//$("#ch2").off("click");	
				audioPlay();
				changeHeightExp();
				var overWrite = window.setTimeout(function(){									
					if($('.expDiv').position().left < 0) $('.activeSlider').trigger('click');
					window.clearTimeout(overWrite);
				},20);
				$(".screenIcon").attr("src","assets/images/template/camera_icon.png").off("click").css({"cursor":"default"});
				$('.EventNotAllowed1').hide();
				$(".actOkBar,.EventNotAllowed").show();
				wrongAttDemt=false;
				if(currentActStep==0 && activitytag)
				{
					$(".drag").off("click").on("click",showWrongPopup);
					$("#drag_0").off("click");
				}
				$(".dummyNav").show();
				$('.EventNotAllowed').show();
				$('.rightlabel2').css('cursor','default');
				restartWelcome();
				$(".expDiv").css({"left":"-280px"});
				rotateValue =-280;
				angleRot1=180;
				expSlideDiv();
				//$('.activitySlider').off('click').on('click', MoveToNextStep);
				$("#popups").hide();
				AudioNameget ='vtrlstart';
				audioNameArr[0] = AudioNameget;
				audioNameArr[1] = '';
			}
		if($(this).html().toLowerCase() == 'welcome')			
			{
				
				audioFunction(currentactivity)
				audioElement.pause(); //activity Audio pause
				$(".Modes").hide();
				$(".highlightTab").hide();
				$('.baseImg').remove();	
				
				$('.EventNotAllowed1').hide();
				//$(".drag").off("click");
				wrongAttDemt=false;
				rotateValueAct=0;
				/*Welcome reset*/
				document.getElementById("myFrame").contentWindow.welcomeMove = 0;
				var childWindow = $('iframe').contents();
				childWindow.find('#Stage_welText').html(welcomeMode['step_0']['text']);	
				childWindow.find('#Stage_welcomeGroup').css('height', $('#Stage_welText').outerHeight()+54);
				childWindow.find('#Stage_welcomeGroup').css('min-height','122px').css('background','#fff').css({boxShadow:'2px 2px 2px 0px rgba(0,0,0,0.25)'});
				childWindow.find('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
				childWindow.find('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
				var lpos = 274;	
				var tpos = 226; 
				childWindow.find('#Stage_welcomeGroup').css('left',lpos).css('top',tpos);
				childWindow.find('#Stage_left_slider_act').css('cursor','default');
				childWindow.find('#Stage_audio_icon_normal').attr('audio-state','pause');			
				childWindow.find('#Stage_right_slider_act').attr('src','images/right_slider_act.png').css('cursor','pointer');				
				$("#popups").hide();
				$(".screenIcon").attr("src","assets/images/template/camera_icon.png").off("click").css({"cursor":"default"});
				
			}
			
			sliderNavigationFun();
			
	}

function extractBorder(element) {
		// Extracts element border.
		var border = {
			rect: element.getBoundingClientRect(),
			width: parseFloat(element.style.borderWidth),
			style: element.style.borderStyle,
			color: element.style.borderColor,
			original: element.style.border,
			element: element
		};
		
		// Clears original border.
		element.style.borderColor = "transparent";
		
		return border;
	}
	
function extractBorders(element) {
	var borders = [];
	
	// Extracts the rect from the element itself.
	if (element.style.border) {
		borders.push(extractBorder(element));
	}
	
	// Extracts rect from children.
	$(element).find("*").each(function(index, child) {
		if (child.style.border) {
			borders.push(extractBorder(child));
		}
	});
	
	return borders;
}

function drawBorder(canvas, border, parentRect) {
	
	
	// Retrieves context.
	var ctx = canvas.getContext("2d");
	

	// Checks border style.
	if (border.style === "dashed") {
		ctx.setLineDash([3]);
	} else if (border.style === "dotted") {
		ctx.setLineDash([border.width]);
	}
	
	// Calculates border edges.
	var left = border.rect.left + 0.5 - parentRect.left;
	var right = border.rect.right - 0.5 - parentRect.left;
	var top = border.rect.top + 0.5 - parentRect.top;
	var bottom = border.rect.bottom - 0.5 - parentRect.top;
	
	// Draws border.
	ctx.beginPath();
	ctx.moveTo(left, top);
	ctx.lineTo(right, top);
	ctx.lineTo(right, bottom);
	ctx.lineTo(left, bottom);
	ctx.lineTo(left, top);
	ctx.strokeStyle = border.color;
	ctx.lineWidth = border.width;
	//ctx.stroke();
	
	// Restores element original border.
	//border.element.style.border = border.original;
}

function tocanvas(element, options) {
	// Extracts parent relative position.
	var parentRect = element[0].getBoundingClientRect();
	  
	// Extracts elements borders.
	var borders = extractBorders(element[0]);
	
	// Keeps original onrendered option.
	var onrendered = options.onrendered;
	
	// Intercepts onrendered callback.
	options.onrendered = function(canvas) {
		// Draws borders.
		for (var i = 0; i < borders.length; i++) drawBorder(canvas, borders[i], parentRect);
		
		// Calls original callback.
		if (onrendered) onrendered(canvas);
	}
	
	// Calls html2canvas.
	
	 $("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").css('display','none');
		$('.clickBorderCutFW').not(':last').css('border','4px solid #fff');	
	html2canvas($(".screenArea"), options);
}
	
function captureScreen()
	{ 
		tocanvas($(".screenArea"), {
			onrendered: function (canvas) {
				saveAs(canvas.toDataURL(), 'Trophic Levels.png');
				$("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").css('display','block');
			}
		});
		
	}
	
  function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

 	/* dont delete */
var setFalg=false;		
var someFlag=false;	
var feedBack='right';
var validateDragNEnable = function(){
	if(activitytag)
	{
		
		if((currentActStep == 1)||(currentActStep == 4))
		{
			if(getIdSplit==0){
				if(currentActStep == 0)	{$("#drag_3").draggable("enable");}
				if(currentActStep == 3){
					$(".drag").draggable("enable");
					$("#drag_0").draggable("disable");
					$("#drag_3").draggable("disable");
				}
				
				$("#drop_"+DragIdcon).children().remove();
			}
		}
		else
		{
			
			$("#drop_"+DragIdcon).children().remove();
		}
	}
	else
	{
		
		$("#drop_"+DragIdcon).children().remove();
	}
	
};	
var okClick=false;
function MoveToNextStep()
	{

	
		okClick=true;
		$(".arrowbtn").hide();
		if(activitytag) $(".actOkBar").show();
		if(activitytag && currentActStep==11 && stepIndex==3 && audioTextIndex==1)
		{
			$("#resetbtn_btn").css({"background":"","color":""});
			$("#resetbtn_btn").show().css("cursor","default");
			resetfunction(); 
		}	
		if(activitytag && currentActStep==12 && stepIndex==2 && audioTextIndex==1)
		{
			$(".roundbtn").off("click")
			$(".rightBtn").css({"cursor":"default"})
			$("#roundAnimate_3").draggable({disabled: true})
			$("#resetbtn_btn").off("click").on('click', Resetbtn); 
			 $("#resetbtn_btn").css({"cursor": "pointer","opacity": "1","background":"#ffcb05","color":"#000"});
			$("#resetbtn_btn").show().css("opacity","1");
		}
		if(dropCount == 10 && currentActStep< 11 && activitytag){
			titlt = false;	
			currentTxt = 'undefined';
			currentActStep=11;
			arrlengthFind = 2;
			audioTextIndex=1;
			stepIndex=0;
			audioPlay();
			$(".actOkBar").show();
			return;
		}
		if(dropCount == 10 && getIdSplit==0 && !activitytag){
			titlt = false;	
			currentTxt = 'undefined';
		
			arrlengthFind = 1;
			audioTextIndex=1;
			$(".screenIcon").attr("src","assets/images/template/camera_icon.png").off("click").on("click",captureScreen).css({"cursor":"pointer"});
		
			$("#resetbtn_btn").show();
			resetfunction1(); //activity slider click function
			stepIndex=0;
			audioPlay();
			$(".activtyDiv .contentPara").html("You have correctly populated the trophic levels for this ecosystem. Now use the slider bars to change the energy in the ecosystem.");
			actTxt='undefined';
			AudioNameget ='vtrlyouhave';
			audioNameArr[0] = AudioNameget;
			//audioNameArr[1] = addtionalAudio;
			dropCount=0;
			currentActStep=11;
			return;
		}
		if(dropCount == 11 && getIdSplit==1 && !activitytag){
			titlt = false;	
			currentTxt = 'undefined';
			
			arrlengthFind = 1;
			$(".screenIcon").attr("src","assets/images/template/camera_icon.png").off("click").on("click",captureScreen).css({"cursor":"pointer"});
			resetfunction1(); //activity slider click function
			audioTextIndex=1;
			stepIndex=0;
			dropCount=0;
			audioPlay();
			currentActStep=12;
			$(".activtyDiv .contentPara").html("You have correctly populated the trophic levels for this ecosystem. Now use the slider bars to change the energy in the ecosystem.");
			actTxt='undefined';
			AudioNameget ='vtrlyouhave';
			audioNameArr[0] = AudioNameget;
			//audioNameArr[0] = AudioNameget;
			//audioNameArr[1] = addtionalAudio;
			return;
		}
		
	}
var restrictAudio=false;
var droppedBox;
var clearSwoosh;
var animateCorrectPos = function(){
	restrictAudio=true;
	
	$( ".dropComp" ).children('.row'+((+getId2)-1)).each(function( index ) {
	  droppedBox = $( this ).attr('id').split("_")[1];
	  $( this ).attr('data-fill','1')
	  $(".EventNotAllowed1").show();
		clearSwoosh = setTimeout(function()
		{
			$(".button").off("click").on("click",buttonClick);
			audioElement1.setAttribute('src', './assets/images/activity/'+audioarray[3]+'.mp3');
			audioElement1.play(); 
		},500)
		

	  $("#drag_"+getDragId).children('.dragBorderCut').css({"border":""});
	  $("#drag_"+animateArray[DragIdcon]).css({"z-index":"1000",cursor:'default'}).delay( 500 ).animate({"top":''+(parseInt($( this ).css('top'))+5)+'px',"left":''+(parseInt($( this ).css('left'))-0.5)+'px'},500,function()
		{

			$("#"+highId).hide();clearTimeout(CleTome)
			
			$("#drop_"+split_sd).children(".drop1").fadeOut("slow");
			$("#drag_"+animateArray[DragIdcon]).css({"z-index":"1"});
			StopRevert = false;
			$( ".dropComp #drop_"+droppedBox).remove();
			$("#drag_"+animateArray[DragIdcon]).draggable({disabled: true });
			$(".EventNotAllowed1").hide();
			$("#drag_"+getDragId).css({"color":""});
						
		});	
		animationClear = setTimeout(function()
		  {
			  $(".dummy_Div").hide();
		  },1500);
	  return false;

	});
}
var animationClear;

function setHeight()
{
	if(activitytag)
	{	
		if($('.actOkBar').css('display')=='none') var okSetHeight = 20;
		else var okSetHeight = 62;
		var heival =(parseInt($('#activity').find('.activtyDiv').find(".contentPara").css("height")))+okSetHeight;
		
	}
	else if(!activitytag)
	{
		var heival =(parseInt($('#activity').find('.activtyDiv').find(".contentPara").css("height")))+23;
		
	}
	
	$(".activtyDiv,.slider").css("height",heival+"px");	
	$('.shadowTop,.shadowBottom').remove();
	$(".slider").css({'overflow-y':'hidden'});
	$('.slider').mCustomScrollbar('destroy');
	if(heival > 360){
		
		$(".activtyDiv,.slider").css({"height":"350px"});
		$(".slider .contentPara").css("top",'-14px');
		$(".slider .expAudio").css("top",'10px');
			if(activitytag)	{			
				$('.slider').css('height',306);			
			}	
		scrollApplyChoose('activtyDiv','slider');
	}
	else{
		$(".slider .contentPara").css("top",'-4px');
		$(".slider .expAudio").css("top",'10px');
	}		
	

	//------------Slider Bottom set when text changes-------//
	
	if(parseInt($('#activity .activtyDiv').height()+parseInt($('#activity .activtyDiv').position().top)) >= parseInt($('.workArea').height()-50)){
		var setSlidTop = parseInt($('.workArea').height()-50)- $('#activity .activtyDiv').height();
		$('#activity .activtyDiv').css('top',setSlidTop);
	}	
	
}
var titlt = true;

function rightAttemptFun()
	{		
		if(noStepArr[currentActStep]==0 || noStepArr[currentActStep]==1)
		{
			titlt = false;
		}
		$(".highlight,.glowEffect").hide();
		feedBack='right';
		currentActStep++;
		audioTextIndex=1;			
		stepIndex=0;
		audioPlay();
		
		if(parseInt($('.activtyDiv').css("left")) < 0){
			angleRot=180;
			rotateValueAct=-294;
			activitySlideDiv();
		}
		setFalg=false;

		if(activitytag)
		{
			$('.EventNotAllowed').show();
		}
		else if(!activitytag)
		{	
			$('.EventNotAllowed').css("display","none");
		}
		if(activitytag && currentActStep==14)
		{
			
			$(".actOkBar").show();
		}
		if(currentActStep==1 && activitytag){$("#drag_3").off("click");$("#drag_3").draggable("enable");}
		if(currentActStep==4 && activitytag){
				$(".drag").off("click");
				$(".drag").draggable("enable");
				$("#drag_0").draggable("disable");
				$("#drag_3").draggable("disable");
			}
		if(currentActStep==1 && activitytag)		
		{		
		
		
			$("#drag_3 .highlight1").show();		
		}
		sliderNavigationFun();
		setHeight();
	}
var audiocheckFlag = false;
var tempAudioStore;
var wrongAttFlag = false;

function audioNameGetFun()
{
	if(audioNameArr.indexOf(AudioNameget) == 0){
		if(audioNameArr[1] == '') return;
		AudioNameget=audioNameArr[1];
		audioNameArr[2]=audioNameArr.indexOf(AudioNameget);
		$("#globalAudio").attr("src","assets/audio/"+AudioNameget+".mp3");
		if(ctClass == 2){
			$('.slider .expAudio').trigger('click');
		}
		else if(ctClass == 1){
			$('.expDiv .expAudio').trigger('click');
		}
	}
	else 
	{
		AudioNameget=audioNameArr[0];
		audioNameArr[2]=audioNameArr.indexOf(AudioNameget);
		$("#globalAudio").attr("src","assets/audio/"+AudioNameget+".mp3");	 
	}

}
var audioNameArr = ['', '',0];
function wrongAddFun()
{
	audioNameArr = ['', '',0];
	if(noStepArr[currentActStep]==1 && (!activitytag || activitytag))
	{	
		
		TextGetVarible=incorrectText[getId1-1]+' Try again.'; 
		AudioNameget = incorrectText_audio[getId1-1];
		audiocheckFlag = true;
		audioNameArr[0] = AudioNameget;
		audioNameArr[1] = 'tryagain';
	}
	else if(noStepArr[currentActStep]!=1 && !activitytag && getIdSplit==0)
	{
		actTxt = audioTextArr_activity_P[currentTxt];
		TextGetVarible = actTxt[1];
		TextGetVarible=incorrectText[getId1-1]+"<br><br>"+TextGetVarible; 
		actTxtAudio = audioTextArr_activity_P_audio[currentTxt];
		addtionalAudio = actTxtAudio[1][0];
		AudioNameget = incorrectText_audio[getId1-1];
		audiocheckFlag = true;
		audioNameArr[0] = AudioNameget;
		audioNameArr[1] = addtionalAudio;
	}
	else if(noStepArr[currentActStep]!=1 && !activitytag && getIdSplit==1)
	{
		
		actTxt = audioTextArr_activity_Amazon[currentTxt];
		actTxtAudio = audioTextArr_activity_Amazon_audio[currentTxt];
		addtionalAudio = actTxtAudio[1][0];
		TextGetVarible = actTxt[1];
		TextGetVarible=incorrectText[getId1-1]+"<br><br>"+TextGetVarible; 
		AudioNameget = incorrectText_audio[getId1-1];
		audiocheckFlag = true;
		audioNameArr[0] = AudioNameget;
		audioNameArr[1] = addtionalAudio;
	}
	if(noStepArr[currentActStep]!=1 && activitytag)
	{
		actTxt = audioTextArr_activity_P[currentTxt];
		actTxtAudio = audioTextArr_activity_P_audio[currentTxt];
		addtionalAudio = actTxtAudio[1][0];
		audioNameArr[1] = addtionalAudio;
		TextGetVarible = actTxt[1];
		audiocheckFlag = true;
		rightAttemptFun();
		if(currentActStep == 1){
			TextGetVarible="You also learned that sea urchins feed on producers like kelp. This makes them primary consumers. Drag the sea urchin to the correct level in the pyramid.";
			actTxt = 'undefined';
			addtionalAudio ='vtrlyou'
			audioNameArr[1] = addtionalAudio;
			//alert(addtionalAudio)
		}
		if(currentActStep == 4){
			
			TextGetVarible="Now complete the trophic level pyramid by dragging the rest of the organisms to their correct levels. If an organism feeds on more than one trophic level, choose the highest level.  If you’re not sure, take your best guess. You’ll be given several chances for each organism.";
			addtionalAudio = 'vtrlnowcom';
			audioNameArr[1] = addtionalAudio;
			//alert(addtionalAudio)
		}
		var DropLeftPos=parseInt($("#drop_"+split_sd).css("left"))-1;
		var DropTopPos=parseInt($("#drop_"+split_sd).css("top"))+3;		
		$("#drag_"+DragIdcon).animate({"left":DropLeftPos+"px","top":DropTopPos+"px"},50)
		TextGetVarible=incorrectText[getId1-1]+"<br><br>"+TextGetVarible;
		AudioNameget = incorrectText_audio[getId1-1];
		audioNameArr[0] = AudioNameget;
		audioNameArr[1] = addtionalAudio;
		
		someFlag=false;
		dropCount++;
		$("#drag_"+DragIdcon).draggable({disabled: true,revert:false });
		
		setTimeout(function()
		{	
		
			animateCorrectPos();
		},2000);
		setTimeout(function(){
		validateDragNEnable();
		
		},100);
	}
	
		 $( ".dropComp" ).children('.row'+((+getId2)-1)).each(function( index){

		}) 
		
		$(".activtyDiv p").html(TextGetVarible);
		
}
var addtionalAudio;
function wrongAttemptFun(ElemLevel)
	{
			
		globalAudioPause();
		titlt = true;
		if($('.roundAnimate').css('display') == 'block') {titlt = false;}
//		alert(titlt)
		
		noStepArr[currentActStep]++;
		setFalg=false;
		feedBack="wrong";
		if(ElemLevel=="drop")
		{
			wrongAddFun();
		}
		
		else if(ElemLevel=="stop")
		{
			
			audioTextIndex=2;
			stepIndex=0;
			audioPlay();
		}
		if(activitytag)
		{
			$('.EventNotAllowed').show();
		}
		else if(!activitytag)
		{	
			
			$('.EventNotAllowed').css("display","none");
		}
		if(parseInt($('.activtyDiv').css("left")) < 0){
			angleRot=180;
			rotateValueAct=-294;
			activitySlideDiv();
		}
		sliderNavigationFun();
		setHeight();
	}
 var actTxt ;
 var audioElement;
 var actTxtAudio;
 var restrFlag= false;
function audioPlay()
	{
		
		$('.EventNotAllowed').show();
		if((getIdSplit==0 && !activitytag && currentActStep<11) || (getIdSplit==0 && activitytag && currentActStep!=1 && currentActStep!=4))
		{
			actTxt = audioTextArr_activity_P[currentTxt];
			actTxtAudio = audioTextArr_activity_P_audio[currentTxt];
			
		}
		else if(getIdSplit==1 && !activitytag )
		{
			actTxt = audioTextArr_activity_Amazon[currentTxt];
			actTxtAudio = audioTextArr_activity_Amazon_audio[currentTxt];
		}
		if(typeof actTxt != 'undefined' && (( getIdSplit==0 && currentActStep<10) || ( getIdSplit==1 && currentActStep<11))){
			
			TextGetVarible = actTxt[1];
			AudioNameget = actTxtAudio[1][0];
			audioNameArr[0] = AudioNameget;
			audioNameArr[1] = '';
			currentIndex = actTxt.indexOf(TextGetVarible);
			if(getIdSplit==0 && currentActStep==4 && activitytag)
			{
				TextGetVarible="Sea urchins are primary consumers. Now complete the trophic level pyramid by dragging the rest of the organisms to their correct levels. If an organism feeds on more than one trophic level, choose the highest level.  If you’re not sure, take your best guess. You’ll be given several chances for each organism."
				AudioNameget = 'vltrlam_07';
				audioNameArr[0] = AudioNameget;
			}
			arrlengthFind= actTxt[1].length;
			arrlengthFind = 0;
			
		}else{
		
			TextGetVarible=window["audioTextArr_"+cpage+"_"+getIdSplit][currentActStep][audioTextIndex][stepIndex];
			AudioNameget=window["audioTextArr_"+cpage+"_"+getIdSplit+'_audio'][currentActStep][audioTextIndex][stepIndex];
			currentIndex = window["audioTextArr_"+cpage+"_"+getIdSplit][currentActStep][audioTextIndex].indexOf(TextGetVarible);
			
			arrlengthFind=parseInt(window["audioTextArr_"+cpage+"_"+getIdSplit][currentActStep][audioTextIndex].length-1);
			audioNameArr[0] = AudioNameget;
			audioNameArr[1] = '';
		}
		
		globalAudioPause();
		
		
		$(".activtyDiv .contentPara").text(TextGetVarible);
		
		if((dropCount == 10 && getIdSplit==0 && !activitytag && currentActStep<10) || (dropCount == 11 && getIdSplit==1 && !activitytag && currentActStep<11) )
		{
			
			$(".activtyDiv .contentPara").html(">You have correctly populated the trophic levels for this ecosystem. Now use the slider bars to change the energy in the ecosystem.");
			actTxt='undefined';
			AudioNameget='vtrlyouhave';
			audioNameArr[0] = AudioNameget;
			//audioNameArr[1] = addtionalAudio;
			restrFlag = true;
		}
		if(typeof(TextGetVarible)!='undefined')
		{
			$(".activitySlider").css({"cursor":"pointer"});
		}
		else
		{	
			$(".activitySlider").css({"cursor":"default"});
		}	
		
		setHeight();
		
		
	}
	var currentIndex = 0;
function callEndFun()
	{		
		
		globalAudioPause();	
		if( $('.helpwindow').css('display') =='none' && cpage !='welcome' ) 
		{
			audioNameGetFun();
		}
		
	}

function designActivity()
	{		
		$('<img src="assets/images/template/lslider.png" class="activitySlider"/>').appendTo('.activtyDiv');
		
		$('<div class="slider"><img style="align-self:flex-start;" width="28px" src="assets/images/template/audio_icon_normal.png" class="expAudio"/><p class="contentPara"></p></div>').appendTo('.activtyDiv');
		$('<div class="actOkBar"><div class="PreBtnSlider navSliderBtn" data-attend="0"></div><div style="width:30px"></div><div class="nxtBtnSlider navSliderBtn" data-attend="0"></div><!-- <div class="okbtn"></div><div class="glowOkTl"></div>--></div> ').appendTo('.activtyDiv');
		$('.activitySlider').off('click').on('click', activitySlideDiv);
		$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
		$('.PreBtnSlider').off('click').on("click",preNavigationFun);
		sliderHeadDrag();
	}
var sliderHeadDrag = function(){
	$('<div class="headerDrag"><div>&equiv;</div></div>').appendTo('.activtyDiv,.expDiv');
	$('.activtyDiv,.expDiv').draggable({
		containment:'.sliderContain',
		handle:'.headerDrag'
	})		
}
function activitySlideDiv()
	{
		audioElement.play();
		globalAudioPause();	
		if(typeof(TextGetVarible)!='undefined')
		{
			
			rotateValueAct = (rotateValueAct == 0)?-294:0;
			angleRot = (angleRot == 0)?180:0;	
			$('.activtyDiv').stop().animate({left:rotateValueAct},800,function(){
				if(parseInt($('.activtyDiv').css("left"))!=0)
				{
					globalAudioPause();	
				}
				if(okClick && rotateValueAct==-294)
				{
					$('.EventNotAllowed').hide();
					okClick-false;
				}
				if(activitytag && rotateValueAct==-294)		
				{		
					$('.EventNotAllowed').hide();		
					okClick-false;		
				}
				if(activitytag && rotateValueAct>-294)		
				{		
					$('.EventNotAllowed').show();		
					okClick-false;
				}
				
					
				$('.activitySlider').myMethod(angleRot);
					
				

		
			});
			
		}
	
	}
$.fn.extend({
		myMethod: function(angle){$(this).css('transform','rotate('+(angle)+'deg)')}
	});
	
var tropicLevel;
function trophicGame(tabstate,tabNnm)
	{
		if(tabNnm == 2)
			{
				$("#activity").show();
				$("#explore").hide();
				if(getIdSplit==2){$("#ch2").trigger("click");}
				currentActStep=0;
				if(activitytag){
				actTxt="undefined";
				cpage="activity";$('#drag_0 .highlight0').show();$('.EventNotAllowed').show();
				}
				audioPlay();
			}
			else
			{
				if(getIdSplit==2){$("#ch2").trigger("click");}
				$("#activity").hide();
				$("#explore").show();
			}
		changeHeightExp();
		
		loadHeadTabFood(headerlabel);
		if(cpage=="explore")
		{
			$('.expimgcont').hide();
			$('.expDivIcon').css({    top: '16px'});
			$('.expPara').css({top: '0px'}).html('Click on any organism in the food web to learn more about it.');
			AudioNameget = 'vtrlstatic_01';
			audioNameArr[0] = AudioNameget;
			audioNameArr[1] = '';
			changeHeightExp();
			var myTimeout=setTimeout(function(){$('.EventNotAllowed').css('display','none');clearTimeout(myTimeout);},10)
		}
		$(".activtyDiv").css({"left":"-294px"});
		$(".activitySlider").css({"transform":"rotate(180deg)"});
		rotateValueAct=-294;
		angleRot=180;
		activitySlideDiv();
		 if(!activitytag && tabNnm==2){audioPlay();} 
		$(".expDiv").css({"left":"-280px"});
		rotateValue =-280;
		angleRot1=180;
		expSlideDiv();
		titlt = false;
	}
	
//explore anim kalai	
var headLabel = [];
var animTimedelay=1000;
var revertanimTimedelay=500;
headLabel['monterey'] = [".expFigCap:nth-child(5),.expFigCap:nth-child(6)",".expFigCap:nth-child(9),.expFigCap:nth-child(7)",".expFigCap:nth-child(4),.expFigCap:nth-child(8),.expFigCap:nth-child(10)"];
headLabel['amazon'] = [".expFigCap:nth-child(5),.expFigCap:nth-child(7),.expFigCap:nth-child(8)",".expFigCap:nth-child(9)"];
var headLabel_Arrow=[];
headLabel_Arrow['monterey'] = [["#monterey_arrow_10"],["#monterey_arrow_11,#monterey_arrow_12","#monterey_arrow_4,#monterey_arrow_5"],["#monterey_arrow_13,#monterey_arrow_14","#monterey_arrow_8,#monterey_arrow_6"]];
headLabel_Arrow['amazon'] = [["#amazon_arrow_13"],["#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16","#amazon_arrow_3,#amazon_arrow_6,#amazon_arrow_7"]];
var animStart = 0;	
var animStarted = false;	
var len,setTimeVar,setTimeVar_arrow,revertsetTimeVar,cal_len;
var repos=false;
var countVal = [];
 countVal['monterey'] = [0,130,130];
 countVal['amazon'] = [0,195,130];
var delayTime = [];
 delayTime['monterey'] = [1800,2500,2500];
 delayTime['amazon'] = [2000,2500];
 var multiCount = [];
  multiCount['monterey'] = [0.5,0.5,0.5];
  multiCount['amazon'] = [1,1]; 
  
function animFun(headerlabel)
	{	
		len = Object.keys(headLabel[headerlabel]).length;	
		cal_len = Object.keys(exploreImg[headerlabel]).length-1;			
		$('.Arrow').last().show();		
		var count = parseInt(countVal[headerlabel][animStart]);
	
		var tempCount = 90;	
		
		$(''+headLabel_Arrow[headerlabel][animStart][0]+'').stop().animate({
			  fontSize: 0,
			  now : 0
			},
			{
			duration:delayTime[headerlabel][animStart],
			  step: function(now, fx) {			   
				if(headerlabel == 'monterey')
				{
					
					if(animStart == 0)
						{	
							count = count+0.5;							
							$(this).css('clip','rect(0px, 233px,'+count+'px, 0px)');
						}
					if(animStart == 1)
						{
							count = count-0.4;							
							$(this).css('clip','rect('+count+'px,317px,130px,0px)');
						}
					if(animStart == 2)
						{
							count = count-0.4;
							$(this).css('clip','rect('+count+'px,453px,207px,0px)');
						}
				}
				else
				{
					if(animStart == 0)
						{	
							count = count+0.5;						
							$(this).css('clip', 'rect(0px,101px,'+count+'px,0px)');
							tempCount = tempCount-0.5;	
							$('#amazon_arrow_11').css('clip', 'rect(0px,88px,28px,'+tempCount+'px)');
							$('#amazon_arrow_12').css('clip', 'rect(0px,'+count+'px,28px,0px)');
							
							
						}
					if(animStart == 1)
						{							
							count = count-0.3;
							$(this).css('clip','rect('+count+'px,170px,195px,0px)');	
						}	
				}
			},
			complete: function(){
               		
				callFadeBorder('#ff0000',0);
			},
		},delayTime[headerlabel][animStart]); 
		
	}

function callFadeBorder(col, val)
	{		
		$(''+headLabel[headerlabel][animStart]+'').find('.clickBorderCutFW').stop().animate({borderColor:col},1000,function(){					
			fadeClr = window.setTimeout(function(){
				val++;
				callFadeBorderW('#fff',val);						
				window.clearTimeout(fadeClr);
			},1000);
		});
	}	

var fadeClr;
var amaOpacity = 1;	
function callFadeBorderW(col, val)
	{	
		$(''+headLabel[headerlabel][animStart]+'').find('.clickBorderCutFW').stop().animate({borderColor:col},1000,function(){
			amaOpacity = 1;	
			if(headerlabel == 'monterey')
				{	
					animStart = animStart+0.5;				
				}
			else
				{					
					animStart = multiCount['amazon'][animStart];
					amaOpacity = $('.expFigCap:nth-child(9)').css('opacity');					
				}
			if((animStart % 1 === 0) && (animStart < len) && (amaOpacity >= 1))
				{
					animFun(headerlabel);
				}				
		});
		$(''+headLabel[headerlabel][animStart]+'').stop().animate({opacity:0.4},1000,function(){					
			
		});
		if(animStart > 0)
		{
			$(''+headLabel_Arrow[headerlabel][animStart][0]+'').stop().fadeOut(1000);
			$(''+headLabel_Arrow[headerlabel][animStart][1]+'').stop().animate({opacity:0.4},1000, function(){
				
			});
		
		}
	}			
	
var oneEnd = false;	
function animFun_Arrow(headerlabel)
	{
		animStart = 0;
		lcount = 0;	
		len = headLabel_Arrow[headerlabel].length;	
		$('.Arrow').last().css("display","block");
		$(''+headLabel_Arrow[headerlabel][animStart]+'').animate({opacity:0.4},{duration:animTimedelay, step: function(){}, complete: function()
		{			
		}});
		if(animStart < len) 
		{
		setTimeVar_arrow = setTimeout(function()
			{
				animStart++;
				animFun(headerlabel);
			},animTimedelay);
		}
		else		
		{
		
		if($("#rtxt_3").attr("data-hover")=="active")
			{			
			$('.EventNotAllowed').css('display','block');
			}
		clearTimeout(setTimeVar_arrow);	
		clearTimeout(setTimeVar);	
		
		}
	}	

function revert_animFun(headerlabel)
	{	
		window.clearTimeout(fadeClr);
		animStart = 0;
		cal_len = (headerlabel == 'monterey')?10:11;
		clearTimeout(setTimeVar_arrow);	
		clearTimeout(setTimeVar);	
		animStarted= false;	
		repos=false;
		$('.expFigCap').animate({opacity:1},revertanimTimedelay);	
		$('.Arrow').animate({"opacity":1,"dispaly":"block"},revertanimTimedelay);	
		$('.Arrow').last().css("display","none");
		
		$('#'+headerlabel+'_arrow_'+(Object.keys(exploreImg[headerlabel]).length-1)+'').animate({},{duration:revertanimTimedelay,
		complete: function()
		{
		$(".expFigCap").eq(cal_len).find('img').animate({boxShadow: "none"},{duration:revertanimTimedelay,
		complete: function()
		{	
	
			revertsetTimeVar= setTimeout(function(){reposLastImg(headLabel)},0);
			doubleAnimClear();	
		}});	
		}
		});	
		$("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").css('clip','rect(0px,0px,0px,0px)');
		
		$("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").stop();
		$("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").clearQueue();
		$('.expFigCap:nth-child(5),.expFigCap:nth-child(6),.expFigCap:nth-child(9),.expFigCap:nth-child(7),.expFigCap:nth-child(4),.expFigCap:nth-child(8),.expFigCap:nth-child(10)').find('.clickBorderCutFW').stop();
		$('.expFigCap:nth-child(5),.expFigCap:nth-child(6),.expFigCap:nth-child(9),.expFigCap:nth-child(7),.expFigCap:nth-child(4),.expFigCap:nth-child(8),.expFigCap:nth-child(10)').find('.clickBorderCutFW').clearQueue();
		$('.expFigCap:nth-child(5),.expFigCap:nth-child(6),.expFigCap:nth-child(9),.expFigCap:nth-child(7),.expFigCap:nth-child(4),.expFigCap:nth-child(8),.expFigCap:nth-child(10)').find('.clickBorderCutFW').css('border','4px solid #fff');
		$("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").css('opacity','1');
		doubleAnimClear();	
	}
	
function doubleAnimClear()
	{		
		var fastClr = window.setTimeout(function(){
			$("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").css('clip','rect(0px,0px,0px,0px)');
			$("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").css('opacity','1');
			$("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").css('display','block');
			$("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").stop();
			$("#monterey_arrow_10,#monterey_arrow_11,#monterey_arrow_12,#monterey_arrow_13,#monterey_arrow_14,#amazon_arrow_11,#amazon_arrow_12,#amazon_arrow_13,#amazon_arrow_14,#amazon_arrow_15,#amazon_arrow_16").clearQueue();
			$('.expFigCap:nth-child(5),.expFigCap:nth-child(6),.expFigCap:nth-child(9),.expFigCap:nth-child(7),.expFigCap:nth-child(4),.expFigCap:nth-child(8),.expFigCap:nth-child(10)').find('.clickBorderCutFW').stop();
			$('.expFigCap:nth-child(5),.expFigCap:nth-child(6),.expFigCap:nth-child(9),.expFigCap:nth-child(7),.expFigCap:nth-child(4),.expFigCap:nth-child(8),.expFigCap:nth-child(10)').find('.clickBorderCutFW').clearQueue();
			$('.expFigCap:nth-child(5),.expFigCap:nth-child(6),.expFigCap:nth-child(9),.expFigCap:nth-child(7),.expFigCap:nth-child(4),.expFigCap:nth-child(8),.expFigCap:nth-child(10)').find('.clickBorderCutFW').css('border','4px solid #fff');	
			window.clearTimeout(fastClr)
		}, 10);	
	}
	
function reposLastImg(headLabel)
	{
		
		$(".expFigCap").eq(cal_len).stop().animate({left:exploreImg[headerlabel]['img'+cal_len]['pos'][0],top:exploreImg[headerlabel]['img'+cal_len]['pos'][1]},{duration: 1000,
		complete: function()
			{
				//alert("123")
				doubleAnimClear();				
				if(!activitytag) $(".screenIcon").attr("src","assets/images/template/camera_icon.png").off("click").on("click",captureScreen).css({"cursor":"pointer"});	
				if(cpage=='welcome')
				{
					$(".screenIcon").attr("src","assets/images/template/camera_icon.png").off("click").css({"cursor":"default"});
				}
				if($("#rtxt_3").attr("data-hover")=="active")
					{
						$('.EventNotAllowed').css('display','block');
					}
			}
		});
	}

var wrongAttDemt=false;
function showWrongPopup(event)
	{
		audioNameArr=['','',0];
		currentActStep=$(this).attr('id').split("_")[1];
		setFalg=false;
		feedBack="wrong";
		if(activitytag)
		{
			if(dropCount==0)
			{
				if(currentActStep!=0)
				{
					
					$(".activtyDiv p").html("Drag the kelp to the correct trophic level in the pyramid.");
					AudioNameget = 'vltrlam_02';
					audioNameArr[0]= AudioNameget;
					audioNameArr[1] = '';
					setHeight();
					rotateValueAct=-294;
					angleRot1=180;
					angleRot=180;
					activitySlideDiv();
				}
			}
			if(dropCount==1)
			{
				if(currentActStep!=3)
				{
					$(".activtyDiv p").html("Drag the sea urchin to the correct trophic level in the pyramid.");
					AudioNameget = 'vltrlam_04';
					audioNameArr[0]= AudioNameget;
					audioNameArr[1] = '';
					setHeight();
					rotateValueAct=-294;
					angleRot1=180;
					angleRot=180;
					activitySlideDiv();
				}
			}		
		}	
	}

function restartWelcome()
	{  
		$('#myFrame').attr('src','assets/edge/index.html');
		//alert();
		/* document.getElementById("myFrame").contentWindow.welcomeMove = 0;	
		var childWindow = $('iframe').contents();
		childWindow.find('#Stage_welText').html(welcomeMode['step_0']['text']);	
		childWindow.find('#Stage_welcomeGroup').css('min-height','122px').css('background','#fff').css('box-shadow','2px 2px 2px 0px rgba(0,0,0,0.25)');
		childWindow.find('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
		childWindow.find('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
		var lpos = 274;	
		var tpos = 226;	
		childWindow.find('#Stage_welcomeGroup').css('left',lpos).css('top',tpos);
		childWindow.find('#Stage_left_slider_act').css('cursor','default');
		childWindow.find('#Stage_audio_icon_normal').attr('audio-state','pause');
		childWindow.find('#Stage_audio_icon_normal').addClass('expAudio');				
		childWindow.find('#Stage_welcomeGroup').removeClass(document.getElementById("myFrame").contentWindow.speechBubblePos);
		document.getElementById("myFrame").contentWindow.AdobeEdge.getComposition("EDGE-1817669").getStage().play(0); */
	}
function nxtNavigationFun()
{
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	
	if(arrlengthFind > currentIndex){ stepIndex++; $('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);}
	else{  $('.nxtBtnSlider').off('click'); }
	audioPlay();
	sliderNavigationFun();
}

function preNavigationFun()
{
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(stepIndex > 0){stepIndex--;$('.PreBtnSlider').off('click').on("click",preNavigationFun);}
	else {$('.PreBtnSlider').off('click');}
	audioPlay();
	sliderNavigationFun();
}

function sliderNavigationFun()
{
	
	MoveToNextStep();
	navigationArrow();
}
function navigationArrow()
{
	if(arrlengthFind == 0 || arrlengthFind == -1)
	{
		$('.navSliderBtn,.actOkBar').hide();
		$('.nxtBtnSlider').off('click');
		$('.PreBtnSlider').off('click');
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default'})
		return;
	}
	if(arrlengthFind == currentIndex)
	{
		$('.nxtBtnSlider').off('click');
		$('.PreBtnSlider').off('click').on("click",preNavigationFun);
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default'})
		$('.navSliderBtn').show();
		return;
	}
	if(currentIndex == 0 && arrlengthFind !=0)
	{	
		$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
		$('.PreBtnSlider').off('click');
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer'})
		$('.navSliderBtn').show();
		return;
	}
	if( currentIndex > 0 && arrlengthFind !=0 )
	{
		$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
		$('.PreBtnSlider').off('click').on("click",preNavigationFun);
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer'})
		$('.navSliderBtn').show();
		return;
	}
}