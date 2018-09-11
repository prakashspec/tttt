
	var welcomeMode = {
		'step_0':{
				'bgimg':'step_0',
				'text':'Welcome to the Trophic Levels lab. <br/>In this lab, you will explore feeding patterns and energy flow in two ecosystems.',
				'speechStyle':'bubbleDivNone',
				'position':[274,230],
				'anim':{},
			'AudioNamecon':['vltrlw_01']
				},
		'step_1':{
				'bgimg':'step_1',
				'text':'These controls allow you to switch between two different ecosystems: Monterey Bay and the Amazon rain forest.',
				'speechStyle':'bubbleDivMulti',
				'position':[235,50],
				'anim':{},
				'AudioNamecon':['vltrlw_02']
				},
		'step_2':{
				'bgimg':'step_1',
				'text':'Inhabitants of Monterey Bay, off the coast of California, include vast forests of kelp and many species of marine animals.',
				'speechStyle':'bubbleDivNone',
				'position':[274,230],
				'anim':{},
				'AudioNamecon':['vltrlw_03']
				},
		'step_3':{
				'bgimg':'step_2',
				'text':'The Amazon rain forest in Brazil is home to plants and animals that are well adapted to warm temperatures and heavy rainfall.',
				'speechStyle':'bubbleDivNone',
				'position':[274,230],
				'anim':{},
				'AudioNamecon':['vltrlw_04']
				},				
		'step_4':{
				'bgimg':'step_1',
				'text':'For each ecosystem, you can change the view from Food Web to Trophic Levels.',
				'speechStyle':'bubbleDivRight',
				'position':[348,72],
				'anim':{							
					'flow0':{'highlight':'yes','type':'cursor','from':[480,250],'to':[850,100],'toAnim':'animlabel1','bgChange':'step_4','defShow':'no'}
				},
				'AudioNamecon':['vltrlw_05']
				},		
		'step_5':{
				'bgimg':'step_4',
				'text':'This screen shows a small part of the very large food web in the Monterey Bay.',
				'speechStyle':'bubbleDivNone',
				'position':[274,230],
				'anim':{
					'flow0':{'type':'cursor','from':[850,100],'to':[850,50],'toAnim':'animlabel1','bgChange':'step_1','highlight':'no','defShow':'yes'},
					'flow1':{'type':'fadeBubble'}
				},
				'AudioNamecon':['vltrlw_06']
				},			
		'step_6':{
				'bgimg':'step_1',
				'text':'You can select any organism to learn more about how it fits into the food web.',
				'speechStyle':'bubbleDivBottom',
				'position':[290,300],
				'anim':{
					'flow0':{'type':'cursor','from':[850,50],'to':[500,450],'toAnim':'animlabel1','bgChange':'step_3','highlight':'no','defShow':'yes'},
					'flow1':{'type':'fadeBubble','highlight':'no'}
				},
				'AudioNamecon':['vltrlw_07']
				},	
		'step_7':{
				'bgimg':'step_1',
				'text':'You can also select the Invasive Species image to observe how it affects the food web.',
				'speechStyle':'bubbleDivNone',
				'position':[310,35],
				'anim':{},
				'AudioNamecon':['vltrlw_08']
				},	
		'step_8':{
				'bgimg':'step_4',
				'text':"Select Trophic Levels to view the ecosystem's food pyramid.",
				'speechStyle':'bubbleDivNone',
				'position':[274,230],
				'anim':{},
				'AudioNamecon':['vltrlw_09']
				},			
		'step_9':{
				'bgimg':'step_5',
				'text':'Each trophic level is shown as a section of the pyramid. Complete the pyramid by dragging each organism to its correct trophic level.',
				'speechStyle':'bubbleDivTop',
				'position':[274,230],
				'anim':{
					'flow0':{'highlight':'yes','type':'kelp','from':[140,120],'to':[706,388],'toAnim':'','bgChange':'','defShow':'yes'}				
				},
			'AudioNamecon':['vltrlw_10']
				},
		'step_10':{
				'bgimg':'step_6',
				'text':'After the pyramid is complete, you can explore how changes to one trophic level affect other trophic levels. Each trophic level has a different amount of energy. Energy decreases as you move up the pyramid.',
				'speechStyle':'bubbleDivNone',
				'position':[10,110],
				'anim':{},
			'AudioNamecon':['vltrlw_11']
				},			
		'step_11':{
				'bgimg':'step_7',
				'text':'You can use the number lines to adjust the energy at any trophic level. After you change one number line, you will see what happens to the amount of energy at other trophic levels.',
				'speechStyle':'bubbleDivNone',
				'position':[10,110],
				'anim':{},
			'AudioNamecon':['vltrlw_12']
				},
		'step_12':{
				'bgimg':'step_6',
				'text':'When you have finished, select Reset so that you can try another change to energy values.',
				'speechStyle':'bubbleDivBottom',
				'position':[10,385],
				'anim':{},
			'AudioNamecon':['vltrlw_13']
				},
		'step_13':{
				'bgimg':'step_1',
				'text':'Select Explore to begin the lab, or select Activity to complete a guided exploration. At any time during the lab, you can select the Information icon to learn more about trophic levels. Good luck!',
				'speechStyle':'bubbleDivTopCustom',
				'position':[487,30],
				'anim':{},
			'AudioNamecon':['vltrlw_14']
				},		
		};
var weltextlen = Number(Object.keys(welcomeMode).length);
var animPlayArr = [0,1000,3500,5000,8000,14500,17750,22500,58000,62000,69000,72000,76750,81000];

var welcomeMove = 0;
var speechBubblePos = 'bubbleDivNone';