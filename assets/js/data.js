var baseConfig = {activityTitle:'Trophic Levels'};
//information icon background text
var info_background = {
	'block0':{
			'img':'audio_icon',
			'text':"An <b>ecosystem</b> is all the living and nonliving things in an area. Plants, animals, and microbes are some examples of living things. Nonliving things include air, water, minerals, and other things needed to support life.",
			'AudioNamecon':['vltrli_01']	
		},
	'block1':{
			'img':'audio_icon',
			'text':"A <b>native species</b> is an organism that is naturally part of an ecosystem. An <b>invasive species</b> is an organism that is not native to an ecosystem. Often, invasive species are introduced to an ecosystem by humans&mdash;sometimes by accident. An invasive species can harm native organisms. For example, an invasive plant might crowd out native plants. An invasive animal might compete with native animals for food.",
			'AudioNamecon':['vltrli_02']
		},
	'block2':{
			'img':'audio_icon',
			'text':"<b>Energy</b> flows through all ecosystems. Energy enters most ecosystems as light energy from the sun. Plants and some other organisms (algae and some other microbes) use energy from sunlight to convert carbon dioxide and water into food and body structures that can store the energy. (This process is called photosynthesis.) Some of this stored energy can be passed on if the organism is eaten by another organism. Each time an organism is eaten, some of its energy is passed on to the eater. <br><br>The feeding relationships in an ecosystem can be modeled in a food web. The arrows in a food web show the direction that energy flows as it moves between organisms. ",
			'AudioNamecon':['vltrli_03']	
		},
	'block3':{
			'img':'audio_icon',
			'text':"An <b>energy pyramid</b> is another way to show how energy flows in an ecosystem. It is made up of four <b>trophic levels</b> stacked on top of each other. Each organism belongs to one of the trophic levels. An organism's trophic level depends on how it gets its energy.<br/> <span style='width:430px;margin-left:35px;display:inline-block;text-indent:-22px;'>&#9679;&nbsp;&nbsp;&nbsp;On the bottom level are <b>producers</b>. These organisms get their energy from sunlight, such as plants, algae, and some microbes.</span><br/> <span style='width:430px;margin-left:35px;display:inline-block;text-indent:-22px;'>&#9679;&nbsp;&nbsp;&nbsp;On the next level are <b>primary consumers</b>. These animals get their energy by eating producers.</span><br/> <span style='width:430px;margin-left:35px;display:inline-block;text-indent:-22px;'>&#9679;&nbsp;&nbsp;&nbsp;Above these are <b>secondary consumers</b>. These animals get their energy by eating primary consumers.</span><br/> <span style='width:430px;margin-left:35px;display:inline-block;text-indent:-22px;'>&#9679;&nbsp;&nbsp;&nbsp;At the top level are <b>tertiary consumers</b>. These animals get their energy by eating secondary consumers.</span>",
			'AudioNamecon':['vltrli_04']	
			},
	'block4':{
			'img':'audio_icon',
			'text':"Energy flows from the bottom of the pyramid to the top. The pyramid shape shows that the amount of energy entering an ecosystem is large, but decreases with each trophic level. The first trophic level has the most energy and the last trophic level has the least energy.",
			'AudioNamecon':['vltrli_05']	
			},
	'block5':{
			'img':'audio_icon',
			'text':"Energy in an ecosystem is measured in <b>kilocalories per square meter</b> (kcal/m<sup style='font-size:9px;'>2</sup>). The kilocalorie is a unit of energy. A square meter is a unit of area. The unit kcal/m<sup style='font-size:9px;'>2</sup> tells how much energy (kcal) is stored in all living things found in a small area (1 m<sup style='font-size:9px;'>2</sup>) of an ecosystem.",
			'AudioNamecon':['vltrli_06']	
			}
	};
			
//information icon help text
var info_help = {
	'block0':{
			'img':'Info_icon',
			'imgText':'Welcome',
			'text':"This mode shows you how to use the lab.",
			'AudioNamecon':['vllcgh_01']
			},	
	'block1':{
			'img':'Info_icon',
			'imgText':'Explore',
			'text':"This mode lets you explore the lab on your own.",
			'AudioNamecon':['vllcgh_02']
			},	
	'block2':{
			'img':'Info_icon',
			'imgText':'Activity',
			'text':"This mode guides you through an activity with step-by-step instructions.",
			'AudioNamecon':['vllcgh_03']
			},
	'block3':{
			'img':'Info_icon',
			'imgText':'info_icon.png',
			'text':"This button provides Background Information and Help.",
			'AudioNamecon':['vllcgh_04']
			},
	'block4':{
			'img':'Info_icon',
			'imgText':'camera_icon.png',
			'text':"This button takes a picture of your screen and saves it on your device.",
			'AudioNamecon':['vllcgh_05']
		}
	};


//Explore div block
var exploreText = {
	'monterey':
	{
	'anchovy0':{
		'img':'anchovy',
		'text':["An anchovy is a very small fish that feeds on plankton. These fish are a very important part of many marine ecosystems since they serve as prey for larger fish, marine mammals, and sea birds."],
		'AudioNamecon':[['vtrlem_01']]
		},	
	'phytoplankton1':{
		'img':'phytoplankton',
		'text':["Plankton are microscopic organisms that float or drift in water. Phytoplankton are a type of plankton that can carry out photosynthesis. Although small, these organisms are an important food source for many marine animals, such as shrimp, crabs, corals, mussels, and some types of fish."],
		'AudioNamecon':[['vtrlem_02']]},
	'rockfish2':{
		'img':'rockfish',
		'text':["Rockfish have special air bladders in their bodies that allow them to remain motionless in the kelp forest. As they hide among the kelp, rockfish prey on other fish that pass by."],
		'AudioNamecon':[['vtrlem_03']]},
	'sea3':{
		'img':'seastar',
		'text':["Sea stars prey on other slow-moving animals, including turban snails, mussels, and sea urchins. Animals that eat sea stars include sea turtles, birds, and other sea stars."],
		'AudioNamecon':[['vtrlem_04']]
		},
	'kelp4':{
		'img':'kelp',
		'text':["Kelp is a type of algae. It grows to form dense underwater forests in cool marine environments that are well-lit and rich in nutrients. Kelp provides shelter and serves as a source of food for many marine animals."],
		'AudioNamecon':[['vtrlem_05']]},
	'red5':{
		'img':'redalgae',
		'text':["Red algae grow in large clumps on the ocean floor. This type of algae looks red because it contains red pigment molecules. Red algae produce energy through photosynthesis. Many species of marine snails feed on red algae."],
		'AudioNamecon':[['vtrlem_06']]},
	'turban6':{
		'img':'turbansnail',
		'text':["Turban snails are small animals that move slowly along rocks and other hard surfaces. As they move, these snails feed on kelp and other algae. Turban snails are eaten by sea stars, sea otters, crabs, and some types of fish."],
		'AudioNamecon':[['vtrlem_07']]},
	'sea7':{
		'img':'seaotter',
		'text':["Sea otters are very active animals and must eat a great deal of food to meet their energy needs. Sea otters feed on sea urchins, turban snails, shrimp, crabs, and other marine animals."],
		'AudioNamecon':[['vtrlem_08']]},
	'sea8':{
		'img':'seaurchin',
		'text':["Sea urchins live on the ocean floor. They use their spines for protection and their tiny tube feet to move around. They feed on kelp as well as other types of algae. Sea urchins are eaten by sea otters, sea stars, and some types of fish."],
		'AudioNamecon':[['vtrlem_09']]},	
	'kelp9':{
		'img':'kelpgreen',
		'text':['Kelp greenlings are often found along the ocean bottom in a kelp forest. There they feed on snails, crabs, and small fish. They are eaten by larger fish, including rockfish.'],
		'AudioNamecon':[['vtrlem_11']]
		},
	'rabbitfish10':{
		'img':'rabbitfish',
		'text':["Rabbitfish are tropical fish that feed on underwater plants and algae. They are not native to Monterey Bay. If introduced there, these fish can quickly eat much of the kelp and red algae. If they eat too much, there isn’t enough for the sea urchins and turban snails, and many die. Then, as sea urchins and turban snails become scarce, many animals that feed on them cannot find enough to eat, and they also die."],
		'AudioNamecon':[['vtrlem_12']]
		}	
	},
	'amazon':
	{
	'cecropia0':{
		'img':'cecropiatree',
		'text':["Cecropia trees, also known as trumpet trees, are fast-growing trees with large, green leaves arranged in a palm-like pattern. Their leaves provide food for insects, such as beetles, and for mammals, such as sloths. Their fruit provides food for ring-tailed coatis and bats."],
		'AudioNamecon':[['vtrlea_01']]},	
	'strangler1':{
		'img':'figtree',
		'text':["The strangler fig tree begins growing as a tiny seed high up in the branches of another tree. As it grows, its roots grow down, wrapping around the host tree until they reach the ground. Fruit from the strangler fig feeds many animals including monkeys, toucans, and butterflies."],
		'AudioNamecon':[['vtrlea_02']]},
	'guava2':{
		'img':'guavatree',
		'text':["Guava trees grow into bushy trees with lots of leaves. They produce flowers and fruit throughout the year, providing food for insects, birds, and mammals of the rain forest."],
		'AudioNamecon':[['vtrlea_03']]},
	'blue3':{
		'img':'bluemorpho',
		'text':["The blue morpho is a large blue butterfly. Some of these butterflies grow as large as eight inches across. Blue morphos begin their lives as caterpillars that feed on green leaves. After maturing into butterflies, they feed on nectar from flowers and rotting fruit. Birds, lizards, and some mammals eat blue morpho caterpillars and adult butterflies."],
		'AudioNamecon':[['vtrlea_04']]},
	'toucan4':{
		'img':'toucan',
		'text':["The toucan is a bird that can be easily recognized by its large, colorful bill. Toucans mainly eat fruit. They use their bills to reach and cut pieces of fruit from tree branches. Snakes such as the tree boa prey on toucans and their young."],
		'AudioNamecon':[['vtrlea_05']]},
	'sloth5':{
		'img':'sloth',
		'text':["Sloths are one of the slowest mammals on Earth. Sloths eat plants, feeding mainly on buds, tender shoots, and leaves. They especially like to eat the leaves of cecropia trees. Sloths are hunted by meat-eating mammals such as jaguars."],
		'AudioNamecon':[['vtrlea_06']]},
	'jacamar6':{
		'img':'jacamar',
		'text':["Jacamars are small birds with brightly colored feathers and a long, slender beak. They eat winged insects such as moths and butterflies."],
		'AudioNamecon':[['vtrlea_07']]},
	'harpy7':{
		'img':'harpyeagle',
		'text':["The harpy eagle is one of the largest eagle species. Harpy eagles prey on mammals such as sloths and monkeys, and on reptiles such as iguanas. Tree boas prey on the eggs and young chicks of harpy eagles."],
		'AudioNamecon':[['vtrlea_08']]},
	'tree8':{
		'img':'treeboa',
		'text':["The tree boa is a snake that spends most of its time in trees. It hunts at night, preying on lizards, birds, and bird eggs."],
		'AudioNamecon':[['vtrlea_09']]},
	'jaguar9':{
		'img':'jaguar',
		'text':["The jaguar is a large cat that hunts mainly at night, seeking out a variety of prey, including mammals, birds, and fish."],
		'AudioNamecon':[['vtrlea_10']]
		},		
	'ring-tailed10':{
		'img':'ringtailedcoati',
		'text':["The ring-tailed coati is a mammal about the size of a large house cat. It has a varied diet that includes insects, fruits, and seeds. Coatis are skilled tree climbers. They climb trees to find fruit and seeds. They also spend time searching for insects at ground level."],
		'AudioNamecon':[['vtrlea_11']]
		},
	'black11':{
		'img':'blackrat',
		'text':["Black rats often invade rain forests near human settlements and areas where logging occurs. The rats prey heavily on bird eggs. This causes populations of toucans, jacamars, and harpy eagles to drop. As these birds disappear, tree boas also disappear since they feed on birds. Sloths and blue morphos may actually increase in number, since there are fewer predators in the ecosystem. Thus, the introduction of black rats can shift the ecosystem out of balance."],
		'AudioNamecon':[['vtrlea_12']]
		},		
	}		
};

var actText=["You have correctly populated the trophic levels for this ecosystem. Now use the slider bars to change the energy in the ecosystem."];

var act_Web_text = [];
		act_Web_text["monterey"]	=["<span class='nextStepIntim'>Select Trophic Levels to continue.</span>"];
		act_Web_text["amazon"]	=["<span class='nextStepIntim'>Select Trophic Levels to continue.</span>"];

var exploreImg = {
	'monterey':
		{
			'img0':{'img':'anchovy','text':'Anchovy','pos':[145,235]},
			'img1':{'img':'phytoplankton','text':'Phytoplankton','pos':[187,379]},
			'img2':{'img':'rockfish','text':'Rockfish','pos':[273,20]},
			'img3':{'img':'seastar','text':'Sea star','pos':[383,143]},
			'img4':{'img':'kelp','text':'Kelp','pos':[604,380]},
			'img5':{'img':'redalgae','text':'Red algae','pos':[355,410]},
			'img6':{'img':'turbansnail','text':'Turban snail','pos':[396,270]},
			'img7':{'img':'seaotter','text':'Sea otter','pos':[557,77]},
			'img8':{'img':'seaurchin','text':'Sea urchin','pos':[694,227]},			
			'img9':{'img':'kelpgreen','text':'Kelp greenling','pos':[118,105]},
			'img10':{'img':'rabbitfish','text':'Rabbitfish','pos':[-9,407]}
		},
	'amazon':
		{
			'img0':{'img':'cecropiatree','text':'Cecropia tree','pos':[198,406]},
			'img1':{'img':'figtree','text':'Strangler fig tree','pos':[646,414]},
			'img2':{'img':'guavatree','text':'Guava tree','pos':[416,410]},
			'img3':{'img':'bluemorpho','text':'Blue morpho','pos':[472,250]},
			'img4':{'img':'toucan','text':'Toucan','pos':[685,269]},
			'img5':{'img':'sloth','text':'Sloth','pos':[107,247]},
			'img6':{'img':'jacamar','text':'Jacamar','pos':[614,144]},
			'img7':{'img':'harpyeagle','text':'Harpy eagle','pos':[305,145]},
			'img8':{'img':'treeboa','text':'Tree boa','pos':[543,15]},
			'img9':{'img':'jaguar','text':'Jaguar','pos':[198,21]},
			'img10':{'img':'ringtailedcoati','text':'Ring-tailed coati','pos':[279,280]},
			'img11':{'img':'blackrat','text':'Black rat','pos':[-9,407]}
		}
	};

//Welcome Steps
var welcomeMode = {
	'step_0':{
			'bgimg':'step_0',
			'text':'Welcome to the Trophic Levels lab. <br/>In this lab, you will explore feeding patterns and energy flow in two ecosystems.',
			'speechStyle':'bubbleDivNone',
			'position':[270,195],
			'anim':{}
			},
	'step_1':{
			'bgimg':'step_1',
			'text':'These controls allow you to switch between two different ecosystems: Monterey Bay and the Amazon Rain Forest.',
			'speechStyle':'bubbleDivMulti',
			'position':[240,20],
			'anim':{}
			},
	'step_2':{
			'bgimg':'step_1',
			'text':'Inhabitants of Monterey Bay, off the coast of California, include vast forests of kelp and many species of marine animals.',
			'speechStyle':'bubbleDivNone',
			'position':[270,200],
			'anim':{}
			},
	'step_3':{
			'bgimg':'step_2',
			'text':'The Amazon rain forest in Brazil is home to plants and animals that are well adapted to warm temperatures and heavy rainfall.',
			'speechStyle':'bubbleDivNone',
			'position':[270,190],
			'anim':{}
			},				
	'step_4':{
			'bgimg':'step_1',
			'text':'For each ecosystem, you can change the view from <b>Food Web</b> to <b>Trophic Levels.</b>',
			'speechStyle':'bubbleDivRight',
			'position':[375,40],
			'anim':{}
			},		
	'step_5':{
			'bgimg':'step_4',
			'text':'This screen shows a small part of the very large food web in the Monterey Bay.',
			'speechStyle':'bubbleDivNone',
			'position':[310,190],
			'anim':{}
			},			
	'step_6':{
			'bgimg':'step_1',
			'text':'You can select any organism to learn more about how it fits into the food web.',
			'speechStyle':'bubbleDivBottom',
			'position':[290,250],
			'anim':{}
			},	
	'step_7':{
			'bgimg':'step_1',
			'text':'You can also select the Invasive Species image to observe how it affects the food web.',
			'speechStyle':'bubbleDivLeft',
			'position':[210,400],
			'anim':{}
			},	
	'step_8':{
			'bgimg':'step_4',
			'text':"Select Trophic Levels to view the ecosystem's food pyramid.",
			'speechStyle':'bubbleDivNone',
			'position':[260,200],
			'anim':{}
			},			
	'step_9':{
			'bgimg':'step_5',
			'text':'Each trophic level is shown as a section of the pyramid. Complete the pyramid by dragging each organism to its correct trophic level.',
			'speechStyle':'bubbleDivTop',
			'position':[280,192],
			'anim':{}
			},
	'step_10':{
			'bgimg':'step_6',
			'text':'After the pyramid is complete, you can explore how changes to one trophic level affect other trophic levels. Each trophic level has a different amount of energy. Energy decreases as you move up the pyramid.',
			'speechStyle':'bubbleDivNone',
			'position':[3,2],
			'anim':{}
			},			
	'step_11':{
			'bgimg':'step_7',
			'text':'You can use the number lines to adjust the energy at any trophic level. After you change one number line, you will see what happens to the amount of energy at other trophic levels.',
			'speechStyle':'bubbleDivNone',
			'position':[10,70],
			'anim':{}
			},
	'step_12':{
			'bgimg':'step_6',
			'text':'When you have finished, select Reset so that you can try another change to energy values.',
			'speechStyle':'bubbleDivBottom',
			'position':[5,340],
			'anim':{}
			},
	'step_13':{
			'bgimg':'step_1',
			'text':'Select Explore to begin the lab, or select Activity to complete a guided exploration. At any time during the lab, you can select the Information icon to learn more about trophic levels. Good luck!',
			'speechStyle':'bubbleDivTopCustom',
			'position':[487,-10],
			'anim':{}
			}		
	};

//speedhBuble
//Name, text, position, speechbubble style
/* var speechBubble = {
'monterey':{'text':['Harchit1, conem aut aceperias orecum explit, accusda sus qui restibusam quam et prehentet et anducia ndaecab.','Harchit2, conem aut aceperias orecum explit, accusda sus qui restibusam quam et prehentet et anducia ndaecab.'],'pos':[100,100],'speechStyle':'bubbleDivLeft'},

'amazon':{'text':['These TABS allow you to switch between two different ecosystems: Monterey Bay and Amazon Forest.','test2'],'pos':[250,100],'speechStyle':'bubbleDivMulti'}
}; */






//Template base settings
var templateHdr = {textActive:'#FFF',textNormal:'#fff',navStart:1,weltextlen:Number(Object.keys(welcomeMode).length),exploreAnim:280};
