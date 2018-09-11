/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'step_0',
            type:'image',
            tag:'img',
            rect:['0px','0px','924px','588px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"step_0.png",'0px','0px']
         },
         {
            id:'step_1',
            type:'image',
            tag:'img',
            rect:['0px','0px','924px','588px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"step_1.png",'0px','0px']
         },
         {
            id:'step_2',
            display:'none',
            type:'image',
            tag:'img',
            rect:['1px','0px','924px','588px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"step_2.png",'0px','0px']
         },
         {
            id:'step_12',
            display:'none',
            type:'image',
            tag:'img',
            rect:['0px','0px','924px','588px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"step_1.png",'0px','0px']
         },
         {
            id:'highAnim',
            display:'none',
            type:'rect',
            rect:['783','114','auto','auto','auto','auto']
         },
         {
            id:'step_4',
            display:'none',
            type:'image',
            tag:'img',
            rect:['0px','0px','924px','588px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"step_4.png",'0px','0px']
         },
         {
            id:'slider_1',
            display:'none',
            type:'image',
            tag:'img',
            rect:['-280px','46px','304px','361px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"slider_1.png",'0px','0px']
         },
         {
            id:'step_5',
            display:'none',
            type:'image',
            tag:'img',
            rect:['0','0px','924px','588px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"step_5.png",'0px','0px']
         },
         {
            id:'step_6',
            display:'none',
            type:'image',
            tag:'img',
            rect:['0px','0px','924px','588px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"step_6.png",'0px','0px']
         },
         {
            id:'rabbit_update_1',
            display:'none',
            type:'image',
            rect:['0px','0px','922px','588px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rabbit_update_1.png",'0px','0px']
         },
         {
            id:'lslider',
            display:'none',
            type:'image',
            tag:'img',
            rect:['0px','95px','24px','56px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"lslider.png",'0px','0px'],
            transform:[[],['180']]
         },
         {
            id:'monterey_arrow_4',
            display:'none',
            type:'image',
            rect:['544px','436px','317px','130px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"monterey_arrow_4.png",'0px','0px']
         },
         {
            id:'monterey_arrow_5',
            display:'none',
            type:'image',
            tag:'img',
            rect:['393px','352px','58px','107px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"monterey_arrow_5.png",'0px','0px']
         },
         {
            id:'monterey_arrow_6',
            display:'none',
            type:'image',
            rect:['267px','185px','453px','207px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"monterey_arrow_6.png",'0px','0px']
         },
         {
            id:'monterey_arrow_8',
            display:'none',
            type:'image',
            tag:'img',
            rect:['556px','169px','230px','138px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"monterey_arrow_8.png",'0px','0px']
         },
         {
            id:'monterey_red',
            display:'none',
            type:'image',
            tag:'img',
            rect:['527px','349px','233px','130px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"monterey_red.png",'0px','0px']
         },
         {
            id:'monterey_red1',
            display:'none',
            type:'image',
            tag:'img',
            rect:['527px','349px','233px','130px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"monterey_red.png",'0px','0px']
         },
         {
            id:'red_monterey_arrow_4',
            display:'none',
            type:'image',
            tag:'img',
            rect:['544px','360px','317px','130px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"red_monterey_arrow_4.png",'0px','0px']
         },
         {
            id:'red_monterey_arrow_5',
            type:'image',
            tag:'img',
            rect:['393px','351px','58px','107px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"red_monterey_arrow_5.png",'0px','0px']
         },
         {
            id:'red_monterey_arrow_6',
            display:'none',
            type:'image',
            tag:'img',
            rect:['267px','187px','453px','204px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"red_monterey_arrow_6.png",'0px','0px']
         },
         {
            id:'red_monterey_arrow_8',
            display:'none',
            type:'image',
            tag:'img',
            rect:['558px','169px','230px','138px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"red_monterey_arrow_8.png",'0px','0px']
         },
         {
            id:'rabit_stage_1',
            display:'none',
            type:'image',
            tag:'img',
            rect:['395px','411px','392px','140px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rabit_stage_1.png",'0px','0px']
         },
         {
            id:'redbor1',
            display:'none',
            type:'rect',
            rect:['644px','410px','135px','104px','auto','auto'],
            borderRadius:["14px","14px","14px","14px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[4,"rgba(255,0,0,1.00)","solid"],
            transform:[]
         },
         {
            id:'redbor2',
            display:'none',
            type:'rect',
            rect:['644px','410px','135px','104px','auto','auto'],
            borderRadius:["14px","14px","14px","14px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[4,"rgba(255,0,0,1.00)","solid"],
            transform:[]
         },
         {
            id:'rabit_stage_2',
            display:'none',
            type:'image',
            tag:'img',
            rect:['427','163','435px','153px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rabit_stage_2.png",'0px','0px']
         },
         {
            id:'redbor3',
            display:'none',
            type:'rect',
            rect:['644px','410px','135px','104px','auto','auto'],
            borderRadius:["14px","14px","14px","14px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[4,"rgba(255,0,0,1.00)","solid"],
            transform:[]
         },
         {
            id:'redbor4',
            display:'none',
            type:'rect',
            rect:['644px','410px','135px','104px','auto','auto'],
            borderRadius:["14px","14px","14px","14px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[4,"rgba(255,0,0,1.00)","solid"],
            transform:[]
         },
         {
            id:'rabit_stage_3',
            display:'none',
            type:'image',
            tag:'img',
            rect:['481','117','317px','176px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rabit_stage_3.png",'0px','0px']
         },
         {
            id:'redbor5',
            display:'none',
            type:'rect',
            rect:['644px','410px','135px','104px','auto','auto'],
            borderRadius:["14px","14px","14px","14px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[4,"rgba(255,0,0,1.00)","solid"],
            transform:[]
         },
         {
            id:'redbor6',
            display:'none',
            type:'rect',
            rect:['644px','410px','135px','104px','auto','auto'],
            borderRadius:["14px","14px","14px","14px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[4,"rgba(255,0,0,1.00)","solid"],
            transform:[]
         },
         {
            id:'redbor7',
            display:'none',
            type:'rect',
            rect:['644px','410px','135px','104px','auto','auto'],
            borderRadius:["14px","14px","14px","14px"],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[4,"rgba(255,0,0,1.00)","solid"],
            transform:[]
         },
         {
            id:'rabbit_Lnav2',
            display:'none',
            type:'image',
            tag:'img',
            rect:['-281px','45px','305px','417px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rabbit_Lnav.png",'0px','0px']
         },
         {
            id:'rabitfish',
            display:'none',
            type:'image',
            tag:'img',
            rect:['29px','439px','145px','113px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rabitfish.png",'0px','0px']
         },
         {
            id:'kelp2',
            display:'none',
            type:'image',
            tag:'img',
            rect:['136px','159px','104px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"kelp.png",'0px','0px']
         },
         {
            id:'dot1',
            display:'none',
            type:'ellipse',
            rect:['543px','506px','15px','14px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)",[270,[['rgba(255,204,0,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'dot2',
            display:'none',
            type:'ellipse',
            rect:['543px','388px','15px','14px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)",[270,[['rgba(255,204,0,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'dot3',
            display:'none',
            type:'ellipse',
            rect:['543px','271px','15px','14px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)",[270,[['rgba(255,204,0,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'dot4',
            display:'none',
            type:'ellipse',
            rect:['543px','155px','15px','14px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)",[270,[['rgba(255,204,0,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'reset',
            display:'none',
            type:'group',
            rect:['142px','542','68','36','auto','auto'],
            c:[
            {
               id:'resetLast',
               type:'rect',
               rect:['0px','0px','68px','36px','auto','auto'],
               fill:["rgba(192,192,192,1)",[270,[['rgba(255,202,4,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'resetText',
               type:'text',
               rect:['13px','8px','auto','auto','auto','auto'],
               text:"Reset",
               font:['Roboto-Regular',16,"rgba(0,0,0,1)","normal","none",""]
            }]
         },
         {
            id:'cursor',
            display:'none',
            type:'image',
            tag:'img',
            rect:['496px','332px','19px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cursor.png",'0px','0px']
         },
         {
            id:'welcomeGroup',
            type:'group',
            rect:['291px','199px','380','132','auto','auto'],
            c:[
            {
               id:'audio_icon_normal',
               type:'image',
               tag:'img',
               rect:['9px','12px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"audio_icon_normal2.png",'0px','0px']
            },
            {
               id:'welText',
               type:'text',
               rect:['48px','12px','321px','auto','auto','auto'],
               text:"Test"
            },
            {
               id:'right_slider_act',
               type:'image',
               tag:'img',
               rect:['196px','98px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"right_slider_act2.png",'0px','0px']
            },
            {
               id:'left_slider_act',
               type:'image',
               tag:'img',
               rect:['156px','98px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"left_slider_act2.png",'0px','0px']
            }]
         }],
         symbolInstances: [
         {
            id:'highAnim',
            symbolName:'highAnim'
         }
         ]
      },
   states: {
      "Base State": {
         "${_monterey_red1}": [
            ["style", "top", '350px'],
            ["style", "height", '130px'],
            ["style", "display", 'none'],
            ["style", "clip", [0,233,10,167], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '528px'],
            ["style", "width", '233px']
         ],
         "${_rabit_stage_3}": [
            ["style", "top", '107px'],
            ["style", "display", 'none'],
            ["style", "height", '176px'],
            ["style", "opacity", '1'],
            ["style", "left", '158px'],
            ["style", "width", '582px']
         ],
         "${_red_monterey_arrow_4}": [
            ["style", "top", '360px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '544px'],
            ["style", "clip", [123,317,130,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_red_monterey_arrow_6}": [
            ["style", "top", '187px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '267px'],
            ["style", "clip", [189,453,204,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_rabbit_Lnav2}": [
            ["style", "top", '75px'],
            ["style", "height", '380px'],
            ["style", "display", 'none'],
            ["style", "left", '-304px'],
            ["style", "width", '304px']
         ],
         "${_monterey_red}": [
            ["style", "top", '350px'],
            ["style", "display", 'none'],
            ["style", "left", '528px'],
            ["style", "height", '130px'],
            ["style", "-webkit-transform-origin", [27.47,1.54], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [27.47,1.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [27.47,1.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [27.47,1.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [27.47,1.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "clip", [32,124,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '233px']
         ],
         "${_monterey_arrow_4}": [
            ["style", "top", '361px'],
            ["style", "display", 'none'],
            ["style", "height", '130px'],
            ["style", "opacity", '1'],
            ["style", "left", '544px'],
            ["style", "width", '317px']
         ],
         "${_step_12}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_welcomeGroup}": [
            ["style", "display", 'block'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "height", '126px'],
			["style", "width", '400px'],
            ["style", "opacity", '1']
         ],
         "${_step_6}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "clip", [0,924,588,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_lslider}": [
            ["style", "top", '96px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '56px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '24px']
         ],
         "${_dot2}": [
            ["style", "top", '388px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["gradient", "background-image", [270,[['rgba(255,204,0,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '543px'],
            ["style", "width", '15px']
         ],
         "${_redbor1}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "border-top-left-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "border-width", '4px'],
            ["style", "width", '135px'],
            ["style", "top", '410px'],
            ["style", "border-bottom-left-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '644px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(255,0,0,1.00)'],
            ["style", "height", '102px'],
            ["style", "border-top-right-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_right_slider_act}": [
            ["style", "top", '98px'],
            ["style", "left", '196px'],
            ["style", "cursor", 'pointer']
         ],
         "${_cursor}": [
            ["style", "height", '31px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["motion", "location", '505.7939453125px 347.91174316406px'],
            ["style", "width", '31px']
         ],
         "${_redbor7}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "border-width", '4px'],
            ["style", "width", '135px'],
            ["style", "top", '133px'],
            ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '158px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(255,0,0,1.00)'],
            ["style", "height", '104px'],
            ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_monterey_arrow_5}": [
            ["style", "top", '352px'],
            ["style", "display", 'none'],
            ["style", "height", '107px'],
            ["style", "opacity", '1'],
            ["style", "left", '393px'],
            ["style", "width", '58px']
         ],
         "${_left_slider_act}": [
            ["style", "top", '98px'],
            ["style", "left", '156px'],
            ["style", "cursor", 'pointer']
         ],
         "${_rabitfish}": [
            ["style", "border-top-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '0px'],
            ["style", "border-bottom-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '143px'],
            ["style", "top", '437px'],
            ["style", "border-bottom-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '31px'],
            ["motion", "location", '101.5px 493.5px'],
            ["style", "height", '110px'],
            ["style", "display", 'none'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.50)']
         ],
         "${_welText}": [
            ["style", "line-height", '24px'],
            ["style", "font-size", '16px'],
            ["style", "top", '12px'],
            ["style", "left", '48px'],
            ["style", "width", '330px']
         ],
         "${_rabit_stage_2}": [
            ["style", "top", '257px'],
            ["style", "display", 'none'],
            ["style", "height", '153px'],
            ["style", "opacity", '1'],
            ["style", "left", '436px'],
            ["style", "width", '441px']
         ],
         "${_redbor4}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "border-width", '4px'],
            ["style", "width", '135px'],
            ["style", "top", '300px'],
            ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '436px'],
            ["style", "height", '102px'],
            ["color", "border-color", 'rgba(255,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_reset}": [
            ["style", "left", '142px'],
            ["style", "display", 'none']
         ],
         "${_redbor6}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "border-width", '4px'],
            ["style", "width", '135px'],
            ["style", "top", '107px'],
            ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none'],
            ["style", "height", '102px'],
            ["color", "border-color", 'rgba(255,0,0,1.00)'],
            ["style", "left", '597px'],
            ["style", "border-style", 'solid']
         ],
         "${_step_1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_resetText}": [
            ["style", "top", '8px'],
            ["style", "left", '13px'],
            ["style", "font-size", '16px']
         ],
         "${_step_0}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '588px'],
            ["style", "width", '924px']
         ],
         "${_red_monterey_arrow_8}": [
            ["style", "top", '169px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '558px'],
            ["style", "clip", [130,230,138,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_resetLast}": [
            ["style", "height", '36px'],
            ["gradient", "background-image", [270,[['rgba(255,202,4,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_dot4}": [
            ["style", "top", '155px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["gradient", "background-image", [270,[['rgba(255,204,0,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '543px'],
            ["style", "width", '15px']
         ],
         "${_step_5}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "top", '0px']
         ],
         "${_rabit_stage_1}": [
            ["style", "top", '410px'],
            ["style", "height", '140px'],
            ["style", "opacity", '1'],
            ["style", "left", '395px'],
            ["style", "display", 'none']
         ],
         "${_redbor2}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "border-width", '4px'],
            ["style", "width", '135px'],
            ["style", "top", '440px'],
            ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '102px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(255,0,0,1.00)'],
            ["style", "left", '395px'],
            ["style", "border-style", 'solid']
         ],
         "${_highAnim}": [
            ["style", "top", '112px'],
            ["transform", "scaleY", '1.03125'],
            ["transform", "scaleX", '0.96788'],
            ["style", "left", '783px'],
            ["style", "display", 'none']
         ],
         "${_kelp2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["motion", "location", '188px 196px']
         ],
         "${_monterey_arrow_6}": [
            ["style", "top", '186px'],
            ["style", "display", 'none'],
            ["style", "height", '207px'],
            ["style", "opacity", '1'],
            ["style", "left", '266px'],
            ["style", "width", '453px']
         ],
         "${_audio_icon_normal}": [
            ["style", "top", '12px'],
            ["style", "left", '9px'],
            ["style", "cursor", 'pointer']
         ],
         "${_monterey_arrow_8}": [
            ["style", "top", '170px'],
            ["style", "display", 'none'],
            ["style", "height", '138px'],
            ["style", "opacity", '1'],
            ["style", "left", '557px'],
            ["style", "width", '230px']
         ],
         "${_dot1}": [
            ["style", "top", '506px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["gradient", "background-image", [270,[['rgba(255,204,0,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '543px'],
            ["style", "width", '15px']
         ],
         "${_redbor5}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "border-top-left-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "border-width", '4px'],
            ["style", "width", '135px'],
            ["style", "top", '173px'],
            ["style", "border-bottom-left-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '423px'],
            ["style", "height", '102px'],
            ["color", "border-color", 'rgba(255,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_red_monterey_arrow_5}": [
            ["style", "top", '351px'],
            ["style", "height", '107px'],
            ["style", "opacity", '1'],
            ["style", "left", '393px'],
            ["style", "clip", [100,58,107,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_dot3}": [
            ["style", "top", '271px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["gradient", "background-image", [270,[['rgba(255,204,0,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '543px'],
            ["style", "width", '15px']
         ],
         "${_step_2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_etxt2Copy}": [
            ["style", "top", '497px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "display", 'none'],
            ["style", "left", '705px'],
            ["style", "font-size", '15px']
         ],
         "${_step_4}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_slider_1}": [
            ["style", "top", '75px'],
            ["style", "height", '380px'],
            ["style", "display", 'none'],
            ["style", "left", '-304px'],
            ["style", "width", '304px']
         ],
         "${_rabbit_update_1}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '924px']
         ],
         "${_redbor3}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "border-top-left-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "border-width", '4px'],
            ["style", "width", '135px'],
            ["style", "top", '257px'],
            ["style", "border-bottom-left-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '102px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(255,0,0,1.00)'],
            ["style", "left", '734px'],
            ["style", "border-style", 'solid']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 86433,
         autoPlay: false,
         labels: {
            "Step 1": 1000,
            "Step 2": 3500,
            "Step 3": 5000,
            "Step 4": 8000,
            "Step 5": 9000,
            "Step 6": 14500,
            "Step 7": 17750,
            "Step 8": 22500,
            "Step 9": 58000,
            "Step 10": 62000,
            "Step 11": 69000,
            "Step 12": 72000,
            "Step 13": 76750,
            "Step 14": 81000
         },
         timeline: [
            { id: "eid99", tween: [ "style", "${_red_monterey_arrow_6}", "opacity", '0', { fromValue: '1'}], position: 46000, duration: 1000 },
            { id: "dg17", tween: [ "style", "${_monterey_red}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
            { id: "dg18", tween: [ "style", "${_monterey_red}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "eid143", tween: [ "style", "${_dot4}", "opacity", '1', { fromValue: '0'}], position: 69000, duration: 985 },
            { id: "dg93", tween: [ "style", "${_rabbit_update_1}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "dg94", tween: [ "style", "${_rabbit_update_1}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "dg21", tween: [ "style", "${_step_5}", "display", 'block', { fromValue: 'none'}], position: 64875, duration: 0 },
            { id: "dg22", tween: [ "style", "${_step_5}", "display", 'none', { fromValue: 'block'}], position: 79000, duration: 0 },
            { id: "dg77", tween: [ "style", "${_step_6}", "display", 'block', { fromValue: 'none'}], position: 69000, duration: 0 },
            { id: "dg78", tween: [ "style", "${_step_6}", "display", 'block', { fromValue: 'block'}], position: 69985, duration: 0 },
            { id: "dg80", tween: [ "style", "${_step_6}", "display", 'block', { fromValue: 'none'}], position: 79000, duration: 0 },
            { id: "eid93", tween: [ "style", "${_dot4}", "left", '611px', { fromValue: '543px'}], position: 75000, duration: 1433 },
            { id: "eid167", tween: [ "style", "${_dot4}", "left", '543px', { fromValue: '611px'}], position: 79250, duration: 1433 },
            { id: "dg12", tween: [ "style", "${_rabbit_Lnav2}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "dg13", tween: [ "style", "${_rabbit_Lnav2}", "display", 'none', { fromValue: 'block'}], position: 48000, duration: 0 },
            { id: "dg135", tween: [ "style", "${_rabitfish}", "left", '584px', { fromValue: '31px'}], position: 25000, duration: 1235 },
            { id: "eid251", tween: [ "style", "${_monterey_red1}", "clip", [0,233,67,165], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,233,10,167]}], position: 27000, duration: 2000 },
            { id: "dg10", tween: [ "style", "${_step_1}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
            { id: "dg11", tween: [ "style", "${_step_1}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
            { id: "dg76", tween: [ "style", "${_monterey_arrow_8}", "opacity", '0.4', { fromValue: '1'}], position: 41613, duration: 969 },
            { id: "eid37", tween: [ "style", "${_red_monterey_arrow_4}", "display", 'block', { fromValue: 'none'}], position: 34000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_red_monterey_arrow_8}", "display", 'block', { fromValue: 'none'}], position: 41000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_monterey_red}", "clip", [0,130,119,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [32,124,48,0]}], position: 27000, duration: 2000 },
            { id: "eid79", tween: [ "style", "${_dot1}", "display", 'block', { fromValue: 'none'}], position: 69000, duration: 0 },
            { id: "dg3", tween: [ "style", "${_rabit_stage_2}", "opacity", '0.4', { fromValue: '1'}], position: 38997, duration: 1003 },
            { id: "eid20", tween: [ "style", "${_redbor7}", "opacity", '1', { fromValue: '0'}], position: 42500, duration: 1500 },
            { id: "eid21", tween: [ "style", "${_redbor7}", "opacity", '0', { fromValue: '1'}], position: 46000, duration: 1000 },
            { id: "dg87", tween: [ "style", "${_kelp2}", "opacity", '0', { fromValue: '1'}], position: 69000, duration: 985 },
            { id: "eid151", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid150", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid105", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500 },
            { id: "eid106", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 3079, duration: 123 },
            { id: "eid107", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 500 },
            { id: "eid108", tween: [ "style", "${_welcomeGroup}", "opacity", '0.5', { fromValue: '1'}], position: 4859, duration: 102 },
            { id: "eid109", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '0.5'}], position: 4961, duration: 194 },
            { id: "eid110", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
            { id: "eid111", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 500 },
            { id: "eid112", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 9250, duration: 500 },
            { id: "eid113", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 14319, duration: 87 },
            { id: "eid114", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 16750, duration: 500 },
            { id: "eid115", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 17583, duration: 167 },
            { id: "eid116", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 18500, duration: 417 },
            { id: "eid117", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 22331, duration: 64 },
            { id: "eid118", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 22626, duration: 402 },
            { id: "eid119", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 48250, duration: 246 },
            { id: "eid120", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 58155, duration: 443 },
            { id: "eid123", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 61606, duration: 229 },
            { id: "eid124", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 62151, duration: 500 },
            { id: "eid125", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 68250, duration: 115 },
            { id: "eid128", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 70500, duration: 500 },
            { id: "eid129", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 71542, duration: 114 },
            { id: "eid130", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 72095, duration: 500 },
            { id: "eid138", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 76500, duration: 183 },
            { id: "eid140", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 76857, duration: 443 },
            { id: "eid141", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 80750, duration: 187 },
            { id: "eid144", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 81250, duration: 500 },
            { id: "dg35", tween: [ "style", "${_step_12}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "dg36", tween: [ "style", "${_step_12}", "display", 'none', { fromValue: 'block'}], position: 14156, duration: 0 },
            { id: "dg37", tween: [ "style", "${_step_12}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0 },
            { id: "dg38", tween: [ "style", "${_step_12}", "display", 'none', { fromValue: 'block'}], position: 22500, duration: 0 },
            { id: "eid85", tween: [ "style", "${_dot4}", "display", 'block', { fromValue: 'none'}], position: 69000, duration: 0 },
            { id: "eid165", tween: [ "style", "${_dot4}", "display", 'block', { fromValue: 'block'}], position: 86433, duration: 0 },
            { id: "eid17", tween: [ "style", "${_redbor1}", "opacity", '1', { fromValue: '0'}], position: 29000, duration: 1000 },
            { id: "eid35", tween: [ "style", "${_redbor1}", "opacity", '0', { fromValue: '1'}], position: 32000, duration: 1000 },
            { id: "eid44", tween: [ "style", "${_redbor4}", "display", 'block', { fromValue: 'none'}], position: 35500, duration: 0 },
            { id: "eid133", tween: [ "style", "${_redbor4}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "dg33", tween: [ "style", "${_step_2}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 1000 },
            { id: "dg34", tween: [ "style", "${_step_2}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 1000 },
            { id: "dg15", tween: [ "style", "${_step_0}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "dg130", tween: [ "style", "${_monterey_arrow_5}", "opacity", '0.4', { fromValue: '1'}], position: 39643, duration: 985 },
            { id: "dg118", tween: [ "motion", "${_cursor}", [[505.79,347.91,0,0],[729.3,276.82,274.92,-131.02,269.52,-128.45],[865.5,142.5,0,0]]], position: 10500, duration: 1431 },
            { id: "dg119", tween: [ "motion", "${_cursor}", [[865.5,142.5,0,0],[871.26,118.45,0,-41.75,0,-47.83],[865.5,96.5,0,0]]], position: 15000, duration: 750 },
            { id: "dg120", tween: [ "motion", "${_cursor}", [[865.5,96.5,0,0],[751.86,355.97,-296.73,320.79,-255.11,275.79],[489.5,491.5,0,0]]], position: 19393, duration: 1984 },
            { id: "dg121", tween: [ "motion", "${_cursor}", [[489.5,491.5,0,0],[286.58,517.5,-249.81,0,-287.53,0],[119.5,501.5,0,0]]], position: 23630, duration: 1235 },
            { id: "dg122", tween: [ "motion", "${_cursor}", [[119.5,501.5,0,0],[509.5,351.5,0,0]]], position: 48000, duration: 246 },
            { id: "dg123", tween: [ "motion", "${_cursor}", [[509.5,351.5,0,0],[702.51,291.46,282.53,-169.52,238.76,-143.26],[865.5,141.5,0,0]]], position: 59310, duration: 1250 },
            { id: "dg124", tween: [ "motion", "${_cursor}", [[865.5,141.5,0,0],[531.13,214.84,-495.28,45.65,-481.01,44.33],[190.5,193.5,0,0]]], position: 63250, duration: 1750 },
            { id: "eid276", tween: [ "motion", "${_cursor}", [[190.5,193.5,0,0],[227.89,346.88,112.98,207.4,105.78,194.17],[334.5,461.5,0,0]]], position: 65250, duration: 1500 },
            { id: "eid260", tween: [ "motion", "${_cursor}", [[336.5,461.5,-213.41,-99.64],[400.42,380.86,-430.99,-201.23,-330.94,-154.52],[190.5,193.5,0,0]]], position: 68250, duration: 3000 },
            { id: "eid218", tween: [ "motion", "${_cursor}", [[190.5,193.5,0,0],[552.5,527.5,0,0]]], position: 71250, duration: 250 },
            { id: "eid83", tween: [ "motion", "${_cursor}", [[552.5,527.5,0,0],[837.5,527.5,0,0]]], position: 73250, duration: 1500 },
            { id: "dg127", tween: [ "motion", "${_cursor}", [[837.5,527.5,0,0],[588.27,559.85,-60,3.64,-484,29.33],[525.96,567.01,-476.18,20.11,-64.12,2.71],[184.5,568.5,0,0]]], position: 77706, duration: 1519 },
            { id: "dg39", tween: [ "style", "${_step_12}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 1000 },
            { id: "eid15", tween: [ "style", "${_redbor1}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0 },
            { id: "eid136", tween: [ "style", "${_redbor1}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "dg29", tween: [ "style", "${_highAnim}", "display", 'block', { fromValue: 'none'}], position: 9931, duration: 0 },
            { id: "dg30", tween: [ "style", "${_highAnim}", "display", 'none', { fromValue: 'block'}], position: 12250, duration: 0 },
            { id: "eid4", tween: [ "style", "${_lslider}", "left", '303px', { fromValue: '0px'}], position: 21390, duration: 811 },
            { id: "eid12", tween: [ "style", "${_lslider}", "left", '304px', { fromValue: '303px'}], position: 22395, duration: 0 },
            { id: "eid22", tween: [ "style", "${_lslider}", "left", '0px', { fromValue: '304px'}], position: 22437, duration: 0 },
            { id: "eid24", tween: [ "style", "${_lslider}", "left", '303px', { fromValue: '0px'}], position: 25000, duration: 985 },
            { id: "eid98", tween: [ "style", "${_red_monterey_arrow_8}", "opacity", '0', { fromValue: '1'}], position: 46000, duration: 1000 },
            { id: "dg98", tween: [ "style", "${_step_4}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
            { id: "dg99", tween: [ "style", "${_step_4}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0 },
            { id: "dg100", tween: [ "style", "${_step_4}", "display", 'block', { fromValue: 'none'}], position: 60750, duration: 0 },
            { id: "dg101", tween: [ "style", "${_step_4}", "display", 'none', { fromValue: 'block'}], position: 65910, duration: 0 },
            { id: "dg24", tween: [ "style", "${_monterey_arrow_4}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "dg25", tween: [ "style", "${_monterey_arrow_4}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "eid74", tween: [ "style", "${_redbor6}", "opacity", '1', { fromValue: '0'}], position: 42500, duration: 1500 },
            { id: "eid75", tween: [ "style", "${_redbor6}", "opacity", '0', { fromValue: '1'}], position: 46000, duration: 1000 },
            { id: "eid39", tween: [ "style", "${_red_monterey_arrow_4}", "clip", [0,317,130,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [123,317,130,0]}], position: 34000, duration: 1500 },
            { id: "dg26", tween: [ "style", "${_monterey_arrow_4}", "opacity", '0.4', { fromValue: '1'}], position: 39643, duration: 985 },
            { id: "eid82", tween: [ "style", "${_dot1}", "left", '828px', { fromValue: '543px'}], position: 73250, duration: 1500 },
            { id: "eid176", tween: [ "style", "${_dot1}", "left", '543px', { fromValue: '828px'}], position: 79250, duration: 1500 },
            { id: "dg31", tween: [ "style", "${_step_2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "dg32", tween: [ "style", "${_step_2}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_lslider}", "display", 'block', { fromValue: 'none'}], position: 21390, duration: 0 },
            { id: "eid25", tween: [ "style", "${_lslider}", "display", 'none', { fromValue: 'block'}], position: 47750, duration: 0 },
            { id: "dg85", tween: [ "style", "${_kelp2}", "display", 'block', { fromValue: 'none'}], position: 64875, duration: 0 },
            { id: "dg86", tween: [ "style", "${_kelp2}", "display", 'none', { fromValue: 'block'}], position: 69985, duration: 0 },
            { id: "eid73", tween: [ "style", "${_redbor6}", "display", 'block', { fromValue: 'none'}], position: 42500, duration: 0 },
            { id: "eid131", tween: [ "style", "${_redbor6}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "dg23", tween: [ "style", "${_step_5}", "opacity", '0', { fromValue: '1'}], position: 69000, duration: 985 },
            { id: "dg128", tween: [ "style", "${_monterey_arrow_5}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "dg129", tween: [ "style", "${_monterey_arrow_5}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "dg1", tween: [ "style", "${_rabit_stage_2}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "dg2", tween: [ "style", "${_rabit_stage_2}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "eid91", tween: [ "style", "${_dot3}", "left", '695px', { fromValue: '543px'}], position: 75000, duration: 1433 },
            { id: "eid170", tween: [ "style", "${_dot3}", "left", '543px', { fromValue: '695px'}], position: 79250, duration: 1433 },
            { id: "dg102", tween: [ "style", "${_cursor}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "dg103", tween: [ "style", "${_cursor}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
            { id: "dg104", tween: [ "style", "${_cursor}", "display", 'block', { fromValue: 'none'}], position: 18917, duration: 0 },
            { id: "dg105", tween: [ "style", "${_cursor}", "display", 'none', { fromValue: 'block'}], position: 68365, duration: 0 },
            { id: "dg106", tween: [ "style", "${_cursor}", "display", 'block', { fromValue: 'none'}], position: 71250, duration: 0 },
            { id: "eid184", tween: [ "style", "${_cursor}", "display", 'none', { fromValue: 'block'}], position: 76683, duration: 0 },
            { id: "eid185", tween: [ "style", "${_cursor}", "display", 'block', { fromValue: 'none'}], position: 77300, duration: 0 },
            { id: "dg132", tween: [ "style", "${_rabitfish}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "dg133", tween: [ "style", "${_rabitfish}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "eid86", tween: [ "style", "${_dot3}", "display", 'block', { fromValue: 'none'}], position: 69000, duration: 0 },
            { id: "eid64", tween: [ "style", "${_red_monterey_arrow_6}", "display", 'block', { fromValue: 'none'}], position: 41000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_redbor7}", "display", 'block', { fromValue: 'none'}], position: 42500, duration: 0 },
            { id: "eid16", tween: [ "style", "${_redbor7}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "dg90", tween: [ "style", "${_slider_1}", "left", '0px', { fromValue: '-304px'}], position: 21390, duration: 811 },
            { id: "dg91", tween: [ "style", "${_slider_1}", "display", 'block', { fromValue: 'none'}], position: 21390, duration: 0 },
            { id: "dg92", tween: [ "style", "${_slider_1}", "display", 'none', { fromValue: 'block'}], position: 22500, duration: 0 },
            { id: "eid63", tween: [ "style", "${_red_monterey_arrow_5}", "opacity", '0', { fromValue: '1'}], position: 38997, duration: 1003 },
            { id: "eid77", tween: [ "style", "${_redbor5}", "opacity", '1', { fromValue: '0'}], position: 42500, duration: 1500 },
            { id: "eid78", tween: [ "style", "${_redbor5}", "opacity", '0', { fromValue: '1'}], position: 46000, duration: 1000 },
            { id: "dg97", tween: [ "style", "${_rabit_stage_3}", "opacity", '0.4', { fromValue: '1'}], position: 46000, duration: 1000 },
            { id: "eid101", tween: [ "style", "${_welcomeGroup}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid102", tween: [ "style", "${_welcomeGroup}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid48", tween: [ "style", "${_redbor3}", "opacity", '1', { fromValue: '0'}], position: 35500, duration: 1500 },
            { id: "eid49", tween: [ "style", "${_redbor3}", "opacity", '0', { fromValue: '1'}], position: 39000, duration: 1000 },
            { id: "eid8", tween: [ "transform", "${_lslider}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 22250, duration: 0 },
            { id: "eid9", tween: [ "transform", "${_lslider}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 22281, duration: 0 },
            { id: "eid10", tween: [ "transform", "${_lslider}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 22395, duration: 0 },
            { id: "eid11", tween: [ "transform", "${_lslider}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 22437, duration: 0 },
            { id: "eid26", tween: [ "transform", "${_lslider}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 26000, duration: 0 },
            { id: "eid27", tween: [ "transform", "${_lslider}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 26014, duration: 0 },
            { id: "dg95", tween: [ "style", "${_rabit_stage_3}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "dg96", tween: [ "style", "${_rabit_stage_3}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "eid72", tween: [ "style", "${_red_monterey_arrow_8}", "clip", [0,230,138,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [130,230,138,0]}], position: 41000, duration: 1500 },
            { id: "eid18", tween: [ "style", "${_redbor2}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0 },
            { id: "eid135", tween: [ "style", "${_redbor2}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "eid147", tween: [ "style", "${_dot2}", "opacity", '1', { fromValue: '0'}], position: 69000, duration: 985 },
            { id: "eid47", tween: [ "style", "${_redbor3}", "display", 'block', { fromValue: 'none'}], position: 35500, duration: 0 },
            { id: "eid134", tween: [ "style", "${_redbor3}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "eid145", tween: [ "style", "${_dot1}", "opacity", '1', { fromValue: '0'}], position: 69000, duration: 985 },
            { id: "eid249", tween: [ "style", "${_monterey_red1}", "display", 'block', { fromValue: 'none'}], position: 27000, duration: 0 },
            { id: "eid250", tween: [ "style", "${_monterey_red1}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "dg134", tween: [ "subproperty", "${_rabitfish}", "boxShadow.blur", '20px', { fromValue: '0px'}], position: 25985, duration: 250 },
            { id: "dg8", tween: [ "style", "${_step_1}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
            { id: "eid45", tween: [ "style", "${_redbor4}", "opacity", '1', { fromValue: '0'}], position: 35500, duration: 1500 },
            { id: "eid46", tween: [ "style", "${_redbor4}", "opacity", '0', { fromValue: '1'}], position: 39000, duration: 1000 },
            { id: "dg14", tween: [ "style", "${_rabbit_Lnav2}", "left", '0px', { fromValue: '-304px'}], position: 25000, duration: 985 },
            { id: "eid187", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 348 },
            { id: "eid254", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 750 },
            { id: "eid192", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 14500, duration: 349 },
            { id: "dg109", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 16250, duration: 500 },
            { id: "eid197", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 18917, duration: 333 },
            { id: "dg111", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 21500, duration: 411 },
            { id: "eid201", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 23028, duration: 327 },
            { id: "dg113", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 25080, duration: 420 },
            { id: "eid205", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 58598, duration: 349 },
            { id: "dg115", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 60820, duration: 430 },
            { id: "eid208", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 62750, duration: 358 },
            { id: "eid263", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 67250, duration: 500 },
            { id: "eid264", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 67750, duration: 3500 },
            { id: "eid212", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 71250, duration: 250 },
            { id: "eid214", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 72659, duration: 341 },
            { id: "eid180", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 75250, duration: 500 },
            { id: "eid222", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 77300, duration: 307 },
            { id: "dg117", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 79500, duration: 428 },
            { id: "dg7", tween: [ "style", "${_rabit_stage_1}", "opacity", '0.4', { fromValue: '1'}], position: 32000, duration: 985 },
            { id: "eid146", tween: [ "style", "${_dot3}", "opacity", '1', { fromValue: '0'}], position: 69000, duration: 985 },
            { id: "dg73", tween: [ "style", "${_monterey_arrow_6}", "opacity", '0.4', { fromValue: '1'}], position: 41613, duration: 969 },
            { id: "dg131", tween: [ "style", "${_rabitfish}", "top", '290px', { fromValue: '437px'}], position: 25000, duration: 1235 },
            { id: "eid87", tween: [ "style", "${_dot2}", "display", 'block', { fromValue: 'none'}], position: 69000, duration: 0 },
            { id: "eid89", tween: [ "style", "${_dot2}", "left", '766px', { fromValue: '543px'}], position: 75000, duration: 1433 },
            { id: "eid173", tween: [ "style", "${_dot2}", "left", '543px', { fromValue: '766px'}], position: 79250, duration: 1433 },
            { id: "eid62", tween: [ "style", "${_red_monterey_arrow_4}", "opacity", '0', { fromValue: '1'}], position: 38997, duration: 1003 },
            { id: "eid278", tween: [ "motion", "${_kelp2}", [[188,196,0,0],[227.39,344.21,112.05,205.68,106.83,196.1],[334,464,0,0]]], position: 65250, duration: 1500 },
            { id: "dg74", tween: [ "style", "${_monterey_arrow_8}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "dg75", tween: [ "style", "${_monterey_arrow_8}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "dg81", tween: [ "style", "${_step_6}", "opacity", '1', { fromValue: '0'}], position: 69000, duration: 985 },
            { id: "dg16", tween: [ "style", "${_step_0}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid42", tween: [ "style", "${_red_monterey_arrow_5}", "clip", [1,58,107,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [100,58,107,0]}], position: 34000, duration: 1500 },
            { id: "eid76", tween: [ "style", "${_redbor5}", "display", 'block', { fromValue: 'none'}], position: 42500, duration: 0 },
            { id: "eid132", tween: [ "style", "${_redbor5}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "eid69", tween: [ "style", "${_red_monterey_arrow_6}", "clip", [-1,453,204,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [189,453,204,0]}], position: 41000, duration: 1500 },
            { id: "dg4", tween: [ "style", "${_rabit_stage_1}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "dg5", tween: [ "style", "${_rabit_stage_1}", "display", 'block', { fromValue: 'block'}], position: 32000, duration: 0 },
            { id: "dg6", tween: [ "style", "${_rabit_stage_1}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "dg71", tween: [ "style", "${_monterey_arrow_6}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "dg72", tween: [ "style", "${_monterey_arrow_6}", "display", 'none', { fromValue: 'block'}], position: 60750, duration: 0 },
            { id: "eid19", tween: [ "style", "${_redbor2}", "opacity", '1', { fromValue: '0'}], position: 29000, duration: 1000 },
            { id: "eid36", tween: [ "style", "${_redbor2}", "opacity", '0', { fromValue: '1'}], position: 32000, duration: 1000 },
            { id: "eid152", tween: [ "style", "${_reset}", "display", 'block', { fromValue: 'none'}], position: 76433, duration: 0 },
            { id: "eid177", tween: [ "style", "${_reset}", "display", 'none', { fromValue: 'block'}], position: 79250, duration: 0 }         ]
      }
   }
},
"highAnim": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      s: [1,'rgb(0, 0, 0)','solid'],
      r: ['0px','0px','141px','32px','auto','auto'],
      id: 'highlightWel',
      t: 'rect',
      f: ['rgba(192,192,192,0.00)'],
      v: 'none'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlightWel}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,204,0,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '144px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '0px'],
            ["style", "height", '33px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(255,204,0,1.00)'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["style", "border-width", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '32px'],
            ["style", "width", '141px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "dg136", tween: [ "style", "${_highlightWel}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg138", tween: [ "subproperty", "${_highlightWel}", "boxShadow.blur", '20px', { fromValue: '0px'}], position: 0, duration: 1000 },
            { id: "dg139", tween: [ "subproperty", "${_highlightWel}", "boxShadow.blur", '0px', { fromValue: '20px'}], position: 1000, duration: 1000 },
            { id: "dg140", tween: [ "style", "${_highlightWel}", "width", '144px', { fromValue: '144px'}], position: 0, duration: 0 },
            { id: "dg137", tween: [ "style", "${_highlightWel}", "height", '33px', { fromValue: '33px'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1817669");
