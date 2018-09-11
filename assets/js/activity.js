var getDragId, getId1, getId2;
var count = 2;
var dragPos = [];
var randDragArr = [],
    goToBox;
var topLeft0 = [
    [422, 18],
    [22, 136],
    [122, 18],
    [323, 136],
    [223, 18],
    [223, 136],
    [323, 18],
    [122, 136],
    [22, 255],
    [22, 18]
]
var aniTop,aniLeft;
var aniTop1,aniLeft1;
var aniTop2,aniLeft2;
var topLeft1 = [
        [22, 18],
        [22, 136],
        [122, 18],
        [122, 136],
        [223, 18],
        [223, 136],
        [323, 18],
        [323, 136],
        [422, 18],
        [23, 255],
        [122, 255]
    ]
    /* var topLeft1 = [[17,29],[17,147],[117,29],[117,147],[218,29],[218,147],[318,29],[318,147],[417,29],[18,270],[119,270]] */

var textValArr = [
    [10, -6],
    [10, -9],
    [10, -8],
    [10, -9],
    [10, -17],
    [10, -17],
    [10, -17],
    [10, -19],
    [10, -19],
    [10, -17],
    [10, -21],
    [10, -21]
]

var droptopLeft = [
    [383, 284],
    [383, 495],
    [383, 710],
    [265, 345],
    [265, 498],
    [265, 654],
    [148, 379],
    [148, 497],
    [148, 614],
    [32, 498],
    [28, 527]
]
var nobutton = [2];
// var marginArr = [25,15,10,5] //margin for drop24,531
/* var droptopLeft1 = [[379,288],[379,499],[379,704],[261,658],[261,502],[261,349],[144,618],[144,501],[144,383],[28,502],[24,531],[472,829]]  */
var droptopLeft1 = [
    [121, 476],
    [121, 544],
    [121, 613],
    [237, 394],
    [237, 544],
    [237, 696],
    [354, 322],
    [354, 544],
    [354, 767],
    [472, 261],
    [472, 543],
    [472, 829]
]
var arrayVal = [
    [3, 3, 3, 1],
    [3, 3, 3, 2]
];
var noStepArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var dragtext = [
    ['Kelp', 'Phytoplankton', 'Red algae', 'Sea urchin', 'Turban snail', 'Anchovy', 'Sea star', 'Sea otter', 'Kelp greenling', 'Rockfish', ''],
    ['Cecropia tree', 'Guava tree', 'Strangler fig tree', 'Sloth', 'Blue morpho', 'Toucan', 'Ring-tailed coati', 'Harpy eagle', 'Jacamar', 'Jaguar', 'Tree boa']
];

var ansorderArrMon = [0, 3, 2, 1, 4, 5, 6, 7, 8, 9];
var ansorderArrAm = [0, 1, 2, 3, 4, 5, 3, 7, 8, 9, 10];
var energyLevel = ['20', '100', '200', '200', '1,000', '2,000', '2,000', '10,000', '20,000', '20,000', '100,000', '200,000'];
var isDroppedOutside = true;
var flag = true;



var act0imgPath=[
'kelp',
'phytoplankton',
'redalgae',
'seaurchin',
'turbansnail',
'anchovy',
'seastar',
'seaotter',
'kelpgreen',
'rockfish'] ;
var act1imgPath= [
'cecropiatree',
'guavatree',
'figtree',
'sloth',
'bluemorpho',
'toucan',
'ringtailedcoati',
'harpyeagle',
'jacamar',
'jaguar',
'treeboa'];



var incorrectText = [
    'Incorrect. Producers occupy this level. Producers are organisms that make their own food through photosynthesis.',
    'Incorrect. Primary consumers occupy this level. Primary consumers are organisms that feed only on producers.',
    'Incorrect. Secondary consumers occupy this level. Secondary consumers are organisms that feed on primary consumers.',
    'Incorrect. Tertiary consumers occupy this level. Tertiary consumers are organisms that feed on secondary and primary consumers.'
];
var incorrectText_audio = [
    'vltrleit_01',
    'vltrleit_04',
    'vltrleit_03',
    'vltrleit_02'
];
var audioTextArr_activity_0 = [
    [
        ["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun’s energy. Drag kelp to the correct trophic level in the pyramid."],
        [],
        ['Drag the kelp to the correct trophic level in the pyramid.']
    ], //0

    [
        [],
        ['Kelp is a producer. You also learned that sea urchins feed on producers like kelp. This makes them primary consumers. Drag the sea urchin to the correct level in the pyramid.'],
        ['Drag the sea urchin to the correct trophic level in the pyramid.']
    ], //1

    [
        [],
        ['Excellent. Now complete the trophic level pyramid by dragging the rest of the organisms to their correct levels. If an organism feeds on more than one trophic level, choose the highest level. If you’re not sure, take your best guess. You’ll be given several chances for each organism.'],
        []
    ], //2

    [
        [],
        ['Red algae are producers because they carry out photosynthesis to make their own food.'],
        []
    ], //3

    [
        [],
        ['Sea urchins are primary consumers. Now complete the trophic level pyramid by dragging the rest of the organisms to their correct levels. If an organism feeds on more than one trophic level, choose the highest level. If you’re not sure, take your best guess. You’ll be given several chances for each organism.'],
        []
    ], //4

    [
        [],
        ['The turban snail is a primary consumer because it feeds on kelp and red algae, which are both producers.'],
        []
    ], //5

    [
        [],
        ['Anchovies are primary consumers because they eat phytoplankton, which are producers.'],
        []
    ], //6

    [
        [],
        ['Sea otters are secondary consumers because they eat sea urchins and turban snails, which are primary consumers. '],
        []
    ], //7

    [
        [],
        ['Kelp greenlings are secondary consumers because they feed on anchovies and turban snails, which are both primary consumers.'],
        []
    ], //8

    [
        [],
        ['Sea stars are secondary consumers because they prey on sea urchins and turban snails, which are both primary consumers.'],
        []
    ], //9

    [
        [],
        ['Rockfish are tertiary consumers because they eat secondary consumers such as kelp greenlings.'],
        []
    ], //10

    [
        [],
        ['Good work! Now that you’ve placed the organisms into their correct trophic levels, you will explore the energy relationships between the trophic levels.','Energy in an ecosystem is measured in kilocalories per square meter. Study the values on the number lines. Do you notice a pattern?','Now predict what will happen if the energy in one of the trophic levels changes. Record your prediction.','Now let’s test your prediction. Use the number line to decrease the energy at the producer level.'],
        ['Try again. Move the number line at the bottom to the left.']
    ], //11

    [
        [],
        ['Great job. Did the results support your prediction? What do you observe about how the pyramid has changed?','You reduced the amount of energy at the producer level. As a result, less energy was available to primary consumers. Less energy for primary consumers means less energy for secondary consumers. This, in turn, decreased the energy available for tertiary consumers. Overall, the energy present at each trophic level decreased until the ten-fold (10 percent) difference between levels was restored.','Now select Reset to return the number lines back to their starting positions.'],
        ['Select Reset to return the number lines back to their starting positions.']
    ], //12

    [
        [],
        ['Now predict what will happen if the amount of energy taken up by producers increases. Record your prediction.','Now test your prediction by increasing the energy at the producer level.'],
        ['Try again. Move the number line at the bottom of the pyramid to the right.']
    ], //13

    [
        [],
        ['Did the results support your prediction? How has the pyramid changed this time?','You increased the amount of energy at the producer level. This made more energy available for primary consumers. This, in turn, allowed more energy to be passed on to secondary and tertiary consumers. Overall, the energy at each trophic level increased until a ten-fold difference between levels was restored.',"You have reached the end of this guided activity. But there's much more to explore in this virtual lab. Using Explore mode, you can continue to learn more about the Monterey Bay ecosystem, or you can explore the Amazon rain forest. As you explore these ecosystems, compare the feeding relationships in their food webs and energy pyramids. In what ways are they similar and different?"],
        []
    ] 
];

var audioTextArr_activity_0_audio = [
   [
        ["vltrlam_01"],
        [],
        ['vltrlam_02']
    ], //0

    [
        [],
        ['vltrlam_03'],
        ['vltrlam_04']
    ], //1

    [
        [],
        ['vltrlam_05'],
        []
    ], //2

    [
        [],
        ['vltrlap_03'],
        []
    ], //3

    [
        [],
        ['vltrlam_07'],
        []
    ], //4

    [
        [],
        ['vltrlap_05'],
        []
    ], //5

    [
        [],
        ['vltrlap_06'],
        []
    ], //6

    [
        [],
        ['vltrlap_07'],
        []
    ], //7

    [
        [],
        ['vltrlap_08'],
        []
    ], //8

    [
        [],
        ['vltrlap_09'],
        []
    ], //9

    [
        [],
        ['vltrlap_10'],
        []
    ], //10

    [
        [],
        ['vltrlam_14','vltrlam_15','vltrlam_16','vltrlam_17'],
        ['vltrlam_18']
    ], //11

    [
        [],
        ['vltrlam_19','vltrlam_20','vltrlam_21'],
        ['vltrlam_22']
    ], //12

    [
        [],
        ['vltrla128','vltrla129'],
        ['vltrlam_24']
    ], //13

    [
        [],
        ['vltrlam_25','vltrlam_26',"vltrlam_27"],
        []
    ]
];
var audioTextArr_activity_Exp = {
    'Kelp': [
        [],
        ['Kelp is a producer because it makes its own food through photosynthesis.'],
        []
    ],
    'Sea urchin': [
        [],
        [' A sea urchin is a primary consumer because it feeds on a producer, kelp.'],
        []
    ]
}

var audioTextArr_activity_Exp_audio = {
	'Kelp': [
        [],
        ['vltrlae_01'],
        []
    ],
    'Sea urchin': [
        [],
        ['vltrlae_02'],
        []
	]
}

var audioTextArr_activity_P = {

    'Kelp': [
        [],
        ['Kelp is a producer because it makes its own food through photosynthesis.'],
        []
    ],
    'Sea urchin': [
        [],
        [' A sea urchin is a primary consumer because it feeds on a producer, kelp.'],
        []
    ],
    'Red algae': [
        [],
        ['Red algae are producers because they carry out photosynthesis to make their own food.'],
        []
    ], //2

    'Phytoplankton': [
        [],
        ['Phytoplankton are producers because they make their own food through photosynthesis.'],
        []
    ], //3

    'Turban snail': [
        [],
        ['The turban snail is a primary consumer because it feeds on kelp and red algae, which are both producers.'],
        []
    ], //4

    'Anchovy': [
        [],
        ['Anchovies are primary consumers because they eat phytoplankton, which are producers.'],
        []
    ], //5

    'Sea otter': [
        [],
        ['Sea otters are secondary consumers because they eat sea urchins and turban snails, which are primary consumers.'],
        []
    ], //7

    'Kelp greenling': [
        [],
        ['Kelp greenlings are secondary consumers because they feed on anchovies and turban snails, which are both primary consumers.'],
        []
    ], //8

    'Sea star': [
        [],
        ['Sea stars are secondary consumers because they prey on sea urchins and turban snails, which are both primary consumers.'],
        []
    ], //9

    'Rockfish': [
        [],
        ['Rockfish are tertiary consumers because they eat secondary consumers such as kelp greenlings.'],
        []
    ]


};

var audioTextArr_activity_P_audio = {

   'Kelp': [
        [],
        ['vltrlae_01'],
        []
    ],
    'Sea urchin': [
        [],
        ['vltrlae_02'],
        []
    ],
    'Red algae': [
        [],
        ['vltrlam_06'],
        []
    ], //2

    'Phytoplankton': [
        [],
        ['vltrlap_04'],
        []
    ], //3

    'Turban snail': [
        [],
        ['vltrlam_08'],
        []
    ], //4

    'Anchovy': [
        [],
        ['vltrlam_09'],
        []
    ], //5

    'Sea otter': [
        [],
        ['vltrlam_10'],
        []
    ], //7

    'Kelp greenling': [
        [],
        ['vltrlam_11'],
        []
    ], //8

    'Sea star': [
        [],
        ['vltrlam_12'],
        []
    ], //9

    'Rockfish': [
        [],
        ['vltrlam_13'],
        []
    ]
};

var audioTextArr_activity_Amazon = {


    'Cecropia tree': [
        [],
        [' Cecropia trees are producers because they make their own food through photosynthesis.'],
        []
    ], //2

    'Guava tree': [
        [],
        ['Guava trees are producers because they make their own food through photosynthesis.'],
        []
    ], //3

    'Strangler fig tree': [
        [],
        ['Strangler fig trees are producers because they make their own food through photosynthesis.'],
        []
    ], //4

    'Sloth': [
        [],
        ['Sloths are primary consumers because they eat leaves and twigs of cecropia trees, which are producers.'],
        []
    ], //5

    'Blue morpho': [
        [],
        [' Blue morphos are primary consumers because they feed on the nectar and fruit of two producers, the strangler fig tree and the guava tree.'],
        []
    ], //7

    'Toucan': [
        [],
        ['Toucans are primary consumers because they eat fruit from strangler fig trees and guava trees, both of which are producers.'],
        []
    ], //8

    'Ring-tailed coati': [
        [],
        ['Ring-tailed coatis are secondary consumers because they feed on insects, which are primary consumers. They also eat producers.'],
        []
    ], //9

    'Harpy eagle': [
        [],
        ['Harpy eagles are secondary consumers because they feed on sloths, which are primary consumers.'],
        []
    ], //10,//9

    'Jacamar': [
        [],
        ['Jacamars are secondary consumers because they prey on insects such as blue morphos, which are primary consumers.'],
        []
    ], //10,//9

    'Jaguar': [
        [],
        ['Jaguars are tertiary consumers because they eat secondary consumers such as jacamars and ring-tailed coatis. They also eat primary consumers.'],
        []
    ], //10,//9

    'Tree boa': [
        [],
        ['Tree boas are tertiary consumers because they eat jacamars and harpy eagles, which are secondary consumers.'],
        []
    ], //10


};
var audioTextArr_activity_Amazon_audio = {


     'Cecropia tree': [
        [],
        ['vltrlaa_01'],
        []
    ], //2

    'Guava tree': [
        [],
        ['vltrlaa_02'],
        []
    ], //3

    'Strangler fig tree': [
        [],
        ['vltrlaa_03'],
        []
    ], //4

    'Sloth': [
        [],
        ['vltrlaa_04'],
        []
    ], //5

    'Blue morpho': [
        [],
        ['vltrlaa_05'],
        []
    ], //7

    'Toucan': [
        [],
        ['vltrlaa_06'],
        []
    ], //8

    'Ring-tailed coati': [
        [],
        ['vltrlaa_07'],
        []
    ], //9

    'Harpy eagle': [
        [],
        ['vltrlaa_08'],
        []
    ], //10,//9

    'Jacamar': [
        [],
        ['vltrlaa_09'],
        []
    ], //10,//9

    'Jaguar': [
        [],
        ['vltrlaa_10'],
        []
    ], //10,//9

    'Tree boa': [
        [],
        ['vltrlaa_11'],
        []
    ] //10


};


var audioTextArr_explore_0 = [
    [
        ['Complete the energy pyramid by dragging each organism to the correct trophic level.'],
        [],
        []
    ], //0

    [
        [],
        ['Kelp is a producer because it makes its own food through photosynthesis.'],
        []
    ], //1

    [
        [],
        ['Red algae are producers because they carry out photosynthesis to make their own food.'],
        []
    ], //2

    [
        [],
        ['Phytoplankton are producers because they make their own food through photosynthesis.'],
        []
    ], //3

    [
        [],
        ['The turban snail is a primary consumer because it feeds on kelp and red algae, which are both producers.'],
        []
    ], //4

    [
        [],
        ['Anchovies are primary consumers because they eat phytoplankton, which are producers.'],
        []
    ], //5

    [
        [],
        [' A sea urchin is a primary consumer because it feeds on a producer, kelp.'],
        []
    ], //6

    [
        [],
        ['Sea otters are secondary consumers because they eat sea urchins and turban snails, which are primary consumers.'],
        []
    ], //7

    [
        [],
        ['Kelp greenlings are secondary consumers because they feed on anchovies and turban snails, which are both primary consumers.'],
        []
    ], //8

    [
        [],
        ['Sea stars are secondary consumers because they prey on sea urchins and turban snails, which are both primary consumers.'],
        []
    ], //9

    [
        [],
        ['Rockfish are tertiary consumers because they eat secondary consumers such as kelp greenlings.'],
        []
    ], //10

    [
        [],
        ['You have correctly populated the trophic levels for this ecosystem. Now use the slider bars to change the energy in the ecosystem.'],
        []
    ], //11

    [
        [],
        ['In a stable ecosystem, each trophic level passes on only about 10 percent of its total energy to the next level above it. This is because not all organisms get eaten, and some energy is used up before it can be passed on. For example, energy is used up as organisms move, grow, and reproduce. If there is a decrease in the amount of energy at one trophic level, less energy is available to support organisms at higher trophic levels. The entire pyramid shifts. The ecosystem becomes stable again when a tenfold, or 10 percent, difference between levels is restored.'],
        []
    ], //12

    [
        [],
        ['In a stable ecosystem, each trophic level passes on about 10 percent of its total energy to the next level above it. This amount allows each trophic level to continue thriving and also support the next level. If something happens to shift the amount of energy being transferred, the ecosystem begins to lose its balance. The ecosystem becomes stable again when a tenfold, or 10 percent, difference between levels is restored.'],
        []
    ], //13

    [
        [],
        ['In a stable ecosystem, each trophic level passes on only about 10 percent of its total energy to the next level above it. This is because not all organisms get eaten, and some energy is used up before it can be passed on. For example, energy is used up as organisms move, grow, and reproduce. In order to increase the amount of energy at one trophic level, there must be a ten-fold increase at lower levels. Likewise, an increase at a lower trophic level can support a 10 percent increase at each higher level. The ecosystem becomes stable again when a tenfold, or 10 percent,  difference between levels is restored.'],
        []
    ] //14
];
var audioTextArr_explore_0_audio = [
     [
        ['complete'],
        [],
        []
    ], //0

    [
        [],
        ['vltrlae_01'],
        []
    ], //1

    [
        [],
        ['vltrlap_03'],
        []
    ], //2

    [
        [],
        ['vltrlap_04'],
        []
    ], //3

    [
        [],
        ['vltrlap_05'],
        []
    ], //4

    [
        [],
        ['vltrlap_06'],
        []
    ], //5

    [
        [],
        ['vltrlae_02'],
        []
    ], //6

    [
        [],
        ['vltrlap_07'],
        []
    ], //7

    [
        [],
        ['vltrlap_08'],
        []
    ], //8

    [
        [],
        ['vltrlap_09'],
        []
    ], //9

    [
        [],
        ['vltrlap_10'],
        []
    ], //10

    [
        [],
        ['vltrlae0_01'],
        []
    ], //11

    [
        [],
        ['vltrlae0_02'],
        []
    ], //12

    [
        [],
        ['vltrlae0_03'],
        []
    ], //13

    [
        [],
        ['vltrlae0_04'],
        []
    ] //14
];
var audioTextArr_activity_1 = [
    [
        ["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun’s energy.", " Drag kelp to the correct trophic level in the pyramid."],
        [],
        ['Drag the kelp to the correct trophic level in the pyramid.']
    ], //0

    [
        ["Drag the sea urchin to the correct trophic level in the pyramid."],
        ['Kelp is a producer because it makes its own food through photosynthesis.','Nice job! You also learned that sea urchins feed on producers like kelp. This makes them primary consumers. Drag the sea urchin to the correct level in the pyramid.'],
        ['Drag the sea urchin to the correct trophic level in the pyramid.']
    ], //1

    [
        ["Drag the Red algae to the correct trophic level in the pyramid."],
        ['Excellent. Now complete the trophic level pyramid by dragging the rest of the organisms to their correct levels. If an organism feeds on more than one trophic level, choose the highest level.  If you’re not sure, take your best guess. You’ll be given several chances for each organism.'],
        ['Drag the Red algae to the correct trophic level in the pyramid.']
    ]
];
var audioTextArr_activity_1_audio = [
    [
        ["vltrlam_01"],
        [],
        ['vltrlam_02']
    ], //0

    [
        ["vltrlam_04"],
        ['vltrlap_01','vltrla130'],
        ['vltrlam_04']
    ], //1

    [
        ["vltrla131"],
        ['vltrlam_05'],
        ['vltrla131']
    ]
];

var audioTextArr_explore_1 = [
    [
        ['Complete the energy pyramid by dragging each organism to the correct trophic level.'],
        [],
        []
    ], //0

    [
        [],
        ['Cecropia trees are producers because they make their own food through photosynthesis.'],
        []
    ], //1

    [
        [],
        ['Guava trees are producers because they make their own food through photosynthesis.'],
        []
    ], //2

    [
        [],
        ['Strangler fig trees are producers because they make their own food through photosynthesis.'],
        []
    ], //3

    [
        [],
        ['Sloths are primary consumers because they eat leaves and twigs of cecropia trees, which are producers.'],
        []
    ], //4

    [
        [],
        ['Blue morphos are primary consumers because they feed on the nectar and fruit of two producers, the strangler fig tree and guava tree.'],
        []
    ], //5

    [
        [],
        ['Toucans are primary consumers because they eat fruit from strangler fig trees and guava trees, both of which are producers.'],
        []
    ], //6

    [
        [],
        ['Ring-tailed coatis are secondary consumers because they feed on insects, which are primary consumers. They also eat producers.'],
        []
    ], //7

    [
        [],
        ['Harpy eagles are secondary consumers because they feed on sloths, which are primary consumers.'],
        []
    ], //8

    [
        [],
        ['Jacamars are secondary consumers because they prey on insects such as blue morphos, which are primary consumers.'],
        []
    ], //9

    [
        [],
        ['Jaguars are tertiary consumers because they eat secondary consumers such as jacamars and ring-tailed coatis. They also eat primary consumers.'],
        []
    ], //10

    [
        [],
        ['Tree boas are tertiary consumers because they eat jacamars and harpy eagles, which are secondary consumers.'],
        []
    ], //11

    [
        [],
        ['You have correctly populated the trophic levels for this ecosystem. Now use the number lines to change the energy in the ecosystem.'],
        []
    ], //12

    [
        [],
        ['In a stable ecosystem, each trophic level passes on only about 10 percent of its total energy to the next level above it. This is because not all organisms get eaten, and some energy is used up before it can be passed on. For example, energy is used up as organisms move, grow, and reproduce. If there is a decrease in the amount of energy at one trophic level, less energy is available to support organisms at higher trophic levels. The entire pyramid shifts. The ecosystem becomes stable again when a tenfold, or 10 percent, difference between levels is restored.'],
        []
    ], //13

    [
        [],
        ['In a stable ecosystem, each trophic level passes on about 10 percent of its total energy to the next level above it. This amount allows each trophic level to continue thriving and also support the next level. If something happens to shift the amount of energy being transferred, the ecosystem begins to lose its balance. The ecosystem becomes stable again when a tenfold, or 10 percent, difference between levels is restored.'],
        []
    ], //14

    [
        [],
        ['In a stable ecosystem, each trophic level passes on only about 10 percent of its total energy to the next level above it. This is because not all organisms get eaten, and some energy is used up before it can be passed on. For example, energy is used up as organisms move, grow, and reproduce. In order to increase the amount of energy at one trophic level, there must be a ten-fold increase at lower levels. Likewise, an increase at a lower trophic level can support a 10 percent increase at each higher level. The ecosystem becomes stable again when a tenfold, or 10 percent,  difference between levels is restored.'],
        []
    ], //15

    [
        [],
        [],
        []
    ] //16
];
var audioTextArr_explore_1_audio = [
     [
        ['complete'],
        [],
        []
    ], //0

    [
        [],
        ['vltrlaa_01'],
        []
    ], //1

    [
        [],
        ['vltrlaa_02'],
        []
    ], //2

    [
        [],
        ['vltrlaa_03'],
        []
    ], //3

    [
        [],
        ['vltrlaa_04'],
        []
    ], //4

    [
        [],
        ['vltrlaa_05'],
        []
    ], //5

    [
        [],
        ['vltrlaa_06'],
        []
    ], //6

    [
        [],
        ['vltrlaa_07'],
        []
    ], //7

    [
        [],
        ['vltrlaa_08'],
        []
    ], //8

    [
        [],
        ['vltrlaa_09'],
        []
    ], //9

    [
        [],
        ['vltrlaa_10'],
        []
    ], //10

    [
        [],
        ['vltrlaa_11'],
        []
    ], //11

    [
        [],
        ['vltrlae0_01'],
        []
    ], //12

    [
        [],
        ['vltrlae0_02'],
        []
    ], //13

    [
        [],
        ['vltrlae0_03'],
        []
    ], //14

    [
        [],
        ['vltrlae0_04'],
        []
    ], //15

    [
        [],
        [],
        []
    ] //16
];

$(document).ready(function() {

    for (var button = 0; button < nobutton[0]; button++) {
        $(".main").append('<div class="button">Button' + button + '</div>');
    }
    $(".button").off("click").on("click", buttonClick);
    init();
    for (var level = 0; level < energyLevel.length; level++) {
		var rowVal=0;
		if (level<3 ) {
			rowVal=0;
        } else if (level<6) {
			rowVal=1;
        } else if (level<9) {
			rowVal=2;
        }else {
			rowVal=3;
        }
        $(".buttonDiv").append('<div style="top:' + droptopLeft1[level][0] + 'px;left:' + droptopLeft1[level][1] + 'px;" class="roundbtn yellowbtn yellowbtn1" rowData="row'+rowVal+'" id="btn_' + level + '"><span style="top:' + textValArr[level][0] + 'px;left:' + textValArr[level][1] + 'px;">' + energyLevel[level] + '</span></div>')
        var getId = $('#btn_' + level);
        if (level % 3 == 0) {
            getId.addClass('lefBtn');
			$(".lefBtn").each(function(i,v){
				$(this).attr("data-attr1",i)
			})
        } else if (level % 3 == 1) {
            getId.addClass('centerBtn yellowAdded');
			$(".centerBtn").each(function(i,v){
				$(this).attr("data-attr2",i)
			})
        } else {
            getId.addClass('rightBtn');
			$(".rightBtn").each(function(i,v){
				$(this).attr("data-attr3",i)
			})
        }

    }
		$(".centerBtn").addClass('yellowAdded');
    $(".roundbtn").off("click").on("click", ResbuttonClickFun).css({"cursor": "pointer"});
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/html2canvas.js";
        $("head").append(s);
    }
});
var currentTxt;
var highId;
var dragFunc = function(event, ui) {

    $(".highlight").hide();
    highlightFlag = true;
}
var DragIdcon;
var dragObjPos = {};
var dragStart = function(event, ui) {
	event.stopPropagation
	revertFunc = false;
	revertFunc1=false;
	StopRevert = false;
	clearTimeout(animationClear);
    currentActStep = $(this).attr("id").split("_")[1];
    DragIdcon = $(this).attr("id").split("_")[1];
    highId = $(this).children('.highlight').attr("id");
	
    getDataDrop = $(this).attr("data-drag") - 1;
    dragObjPos = $(this).position()
    getDragId = $(this).attr("id").split("_")[1];
    getId2 = $(this).attr("data-drag");
    var dropid = $(event.target).attr("dropid");
    isDroppedOutside = true;
    currentTxt = $(this).text();
    if (getDragIdOnStop !== getDragId) {
        animacount = 0
    }
}
var arrAnimateCount = [2];

var count1 = 0;
var highlightFlag = true;
var getDataDrop;
var rowClass = null;
var animateArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var getDragIdOnStop;
var dragStop = function(event, ui) {
    if (isDroppedOutside && flag == false) {
        $("#drop_" + $(event.target).attr("dropid")).attr("dragid", "");
        $(event.target).attr("dropid", "");
        var dragId = $(event.target).attr("id").match(/\d/)[0];
        

    }
    if (flag == true && highlightFlag == true) {
		
        getDataDrop = $(ui.draggable).attr("data-drag") - 1;
        rowClass = getDataDrop;
        animacount++;
        glowEffectFun();
        if (noStepArr[currentActStep] == 1) {
            var topdrop = $(".row" + rowClass).eq(0).css("top");
            var leftdrop = $(".row" + rowClass).eq(0).css("left");
            animacount = 0;
            dropCount++;
            $("#drag_" + DragIdcon).draggable({
                disabled: true,
                revert: false
            });
            if (getIdSplit == 0) {
                $("#drag_" + ansorderArrMon[dropCount]).draggable("enable");
            } else {
                $("#drag_" + ansorderArrAm[dropCount]).draggable("enable");
            }
            $("#drag_" + animateArray[DragIdcon]).animate({
                "top": parseInt(topdrop) + 6 + 'px',
                "left": leftdrop
            }, 5000, function() {
				
                $(".row" + rowClass).eq(0).remove();
                rightAttemptFun();
            })
            if (dropCount >= 10) {
                $("#drag_10").css({
                    "top": "20px",
                    "left": "564px"
                });
            }
            $(".highlight, .glowEffect").hide();


        } else {
           wrongAttemptFun("drop");
        }
    } else {
        $(".highlight, .glowEffect").hide();

    }
    getDragIdOnStop = $(ui.draggable).attr("id").split("_")[1]
}
var popupClose = function(event, ui) {
    if (noStepArr[goToBox] >= 1) {
        animacount = 0;
        dropCount++;
        if (getId1 !== getId2) {

            $(".dropComp").children('.row' + ((+getId2) - 1)).each(function(index) {
                if ($(this).attr('data-fill') == "") {
                    var droppedBox = $(this).attr('id').split("_")[1];
                    $(this).attr('data-fill', '1')
                    $("#drag_" + animateArray[DragIdcon]).delay(500).animate({
                        "top": '' + (parseInt($(this).css('top')) + 5) + 'px',
                        "left": '' + (parseInt($(this).css('left')) - 0.5) + 'px'
                    }, 500, function() {
                        $(".dropComp #drop_" + droppedBox).remove();
                        $("#drag_" + animateArray[DragIdcon]).draggable({
                            disabled: true
                        });

                    });
                    return false;
                }
            });
        }
        resetfunction();
    } else if (getId1 !== getId2) {
        $("#drag_" + animateArray[DragIdcon]).animate({
            "top": dragObjPos.top + 'px',
            "left": '' + dragObjPos.left + 'px'
        }, 500);
    }
    $(".popup, .popupclose").hide();
}
var arr1 = []
var revertFunc = false;
var revertFunc1= false;
var StopRevert=false;
var removeItem;
var dropCount = 0;
var split_sd;
var cleartAnimation;
var dropFunc = function(event, ui) {
	
    event.stopPropagation();

    wrongAttDemt = false;
    $(ui.draggable).removeClass('ui-draggable-dragging');
    $(".highlight, .glowEffect").hide();
    getId1 = $(this).attr("data-drop");
    split_sd = $(this).attr("id").split("_")[1];
	
    if ($(this).attr('data-fill') != "") {
        $(ui.draggable).draggable({
            revert: true
        });
    } else {
        if (getId1 == getId2 && activitytag) {
			
			
			audioElement1.setAttribute('src', './assets/audio/'+audioarray[2]+'.mp3');
		
			audioElement1.play(); 
	
			
            $(".highlight, .glowEffect").hide();
            $(ui.draggable).css({
                "cursor": "default"
            });
            $(ui.draggable).draggable({
                revert: false
            });
            $(ui.draggable).draggable({
                disabled: true
            });
			StopRevert = true;
            $(ui.draggable).position({
                my: 'center',
                at: 'center',
                of: this,
                using: function(css, calc) {
                    $(this).animate(css, 200, 'linear');
                    arr1.push(css)
                }
            });
			
            animacount = 0;
            dropCount++;
            highlightFlag = false;
            flag = true;
            $(this).removeClass("row" + (getId1 - 1));
            $(this).children().remove();
            $(this).attr('data-fill', 1);
			$(ui.draggable).animate({'top':parseInt(droptopLeft[split_sd][0]+5)+'px','left':droptopLeft[split_sd][1]+'px'},0);
			$("#drop_"+split_sd).fadeOut(300);
            validateDragNEnable(); //---------IN EVENT JS------//

            if (dropCount == ansorderArrMon.length && ctBubble == "monterey") {
                $('<img src="assets/images/audio_icon.png" class="actAudio" width="30px"/><p class="actPara">' + actText[0] + '</p><img src="assets/images/template/lslider.png" style="position:absolute;top:0px;left:280px;cursor:pointer" data-sym="-" class="activeSlider"/>').appendTo('.actDiv');
                $('.actDiv').show().css({
                    "height": "200px"
                });
            } else if (dropCount == ansorderArrAm.length && ctBubble == "amazon") {
                $('<img src="assets/images/audio_icon.png" class="actAudio" width="30px"/><p class="actPara">' + actText[0] + '</p><img src="assets/images/template/lslider.png" style="position:absolute;top:0px;left:280px;cursor:pointer" data-sym="-" class="activeSlider"/>').appendTo('.actDiv');
                $('.actDiv').show().css({
                    "height": "200px"
                });
            }
            rightAttemptFun();
        } else if (getId1 != getId2 && activitytag) {
			audioElement1.setAttribute('src', './assets/audio/'+audioarray[2]+'.mp3');
			audioElement1.play(); 
		
			revertFunc1=true;
			StopRevert=true;
			
			$(ui.draggable).position({
                    my: 'center',
                    at: 'center',
                    of: this,
                    using: function(css, calc) {
                        $(this).animate(css, 200, 'linear',function(){/*$(this).css({"border":"4px solid red"})*/})
                    }
                });
				$(".dummy_Div").show();
				
				$(ui.draggable).children('.dragBorderCut').css({"border":"3px solid red"});
			
            getDataDrop = $(ui.draggable).attr("data-drag") - 1;
            glowEffectFun();
			wrongAttemptFun("drop");
			
				cleartAnimation = setTimeout(function()
				{
					
					$(ui.draggable).children('.dragBorderCut').css({"border":""});
					$(".dummy_Div").hide();
					audioElement1.setAttribute('src', './assets/audio/'+audioarray[3]+'.mp3');
					audioElement1.play(); 
					
									
				},2000)
				
				
		
				
				CleTome = setTimeout(function()
				{
					if(highId == 'highlight0' || highId == 'highlight3')
					{
						
						
						$("#"+highId).show();
						
					}
					else{
						
						$("#"+highId).hide();
					}
				},3000)

            if (noStepArr[currentActStep] == 2) {
				
                someFlag = true;
              }
        } else if (!activitytag) {
			revertFunc=true;
            existingDragId = $(event.target).attr("dragid");
			
            dragNum = $(ui.draggable).attr("id").match(/\d/)[0];

            dropAlreadyPlacedId = $(ui.draggable).attr("dropid");
            if (getId1 == getId2) {
				
				audioElement1.setAttribute('src', './assets/audio/'+audioarray[2]+'.mp3');
				audioElement1.play();

				$('#audioId').on('ended',AudioEndFun)
                animacount = 0;
                dropCount++;
                $(this).attr('data-fill', 1);
                $(ui.draggable).draggable({
                    revert: false
                });
                $(ui.draggable).draggable({
                    disabled: true
                }).css({
                    cursor: 'default'
                });
				
                $(ui.draggable).position({
                    my: 'center',
                    at: 'center',
                    of: this,
                    using: function(css, calc) {
                        $(this).animate(css, 200, 'linear');
                    }
                });
                $(this).removeClass("row" + (getId1 - 1));
			
                rightAttemptFun();
                resetfunction1();
				if (((htmlvalue == "Amazon Rain Forest") &&(split_sd == 9)) ||  ((htmlvalue == "Amazon Rain Forest") &&(split_sd == 10)))
				{
					
					$("#drag_9").css({"top":"32px !important",'left':"445px !important"});
					$("#drag_10").css({"top":"32px !important",'left':"559px !important"});
				} 
				else
				{
					
					$(ui.draggable).animate({'top':parseInt(droptopLeft[split_sd][0]+5)+'px','left':droptopLeft[split_sd][1]+'px'},0);
				}
				$("#drop_"+split_sd).fadeOut(300);
				
            } else {
				
				$(".button").off("click")
				audioElement1.setAttribute('src', './assets/audio/'+audioarray[2]+'.mp3');
				audioElement1.play(); 
				
                $(ui.draggable).position({
                    my: 'center',
                    at: 'center',
                    of: this,
                    using: function(css, calc) {
                        $(this).animate(css, 100, 'linear');
                    }
                });
				
				$(".dummy_Div").show();
				$(ui.draggable).children('.dragBorderCut').css({"border":"3px solid red"});
				
                animacount++;
                wrongAttemptFun("drop");
				
				cleartAnimation1 = setTimeout(function()
				{
					
					$(ui.draggable).children('.dragBorderCut').css({"border":""});
					audioElement1.setAttribute('src', './assets/audio/'+audioarray[3]+'.mp3');
					audioElement1.play(); 
					$(".button").off("click").on("click",buttonClick);
					
					
				},2000)
				cleartAnimation3 = setTimeout (function(){
					
					$(".dummy_Div").hide();
				},2500)
               
                $(".EventNotAllowed1").show();

                if (noStepArr[currentActStep] > 1) {
					
                    $('.EventNotAllowed').show();
                    dropCount++;
                    $("#drag_" + DragIdcon).draggable({
                        disabled: true,
                        revert: false
                    }).css({
                        cursor: 'default'
                    });

                   clearaniFun =  setTimeout(function() {
						
                       animateCorrectPos();
                    }, 2000);
                    setTimeout(function() {
                      $('.EventNotAllowed').css("display","none");
					   validateDragNEnable();
                    },100);
                }


            }
            isDroppedOutside = false;

            flag = false;
        }

    }
}
var CleTome;
var cleartAnimation1;
var cleartAnimation3, clearaniFun;
var animacount = 0;
var buttonId, flag1 = true;
var htmlvalue;
var indexVal;
var getIdSplit = 0;
var buttonClick = function(e) {
	audioNameArr = ['', '',0];
    buttonId = $(this).attr('id');
    getIdSplit = buttonId.split("ch")[1] - 1;
	$(".button").off("click").on("click",buttonClick);
	$(this).off("click");
    currentTxt = 'undefined';
    htmlvalue = $(this).html();
    $('.EventNotAllowed1').hide();
    dropCount = 0;
    noStepArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    stepIndex = 0;
    audioTextIndex = 0;
    setFalg = false;
    feedBack = 'step';
    if (!activitytag) {
        $(".activtyDiv").css({
            "left": "-294px"
        });
        $('.activitySlider').css({
            "transform": "rotate(180deg)"
        });
    }
    currentActStep = 0;
   /*  if (parseInt($(".activtyDiv").css("left")) == 0 && !activitytag) {
        rotateValueAct = -294;
        angleRot = 0;
    } */
    audioPlay();
	rotateValueAct = -294;
    angleRot = 180;
    activitySlideDiv();
    $('.actDiv').hide();
    $(".actDiv").children().remove().css({
        "left": "0px"
    });
    noact($(this).index());
	
    changeHeightExp()
    if (!activitytag) {
        $(".drag").draggable("enable");
        if (htmlvalue == "Amazon Rain Forest") {
			
			
			audioFunction($(this).index());
            $("#drop_9").css({
                "top": "32px",
                "left": "445px"
            })
            $("#drop_10").css({
                "top": "32px",
                "left": "559px"
            })
            $(".producer3").css({
                "left": "674px"
            })
            $(".bg_0").css({
                "background": "url(assets/images/act_images/embtriangle1.png)"
            })
			
             $(".roundbtn").removeClass('yellowColoradd yellowAdded');
            $(".roundbtn").addClass('greenColoradd');
            
            noStepArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            comm1();
            $(".commonClass").css({
                "background": "#00431c"
            });
			$(".roundAnimate").css({"display":"none"});
			
			$(".centerBtn").addClass('yellowAdded');
			$('.centerBtn').addClass('colorclass1');

        } else {
			
			audioFunction($(this).index());
            $("#resetbtn_btn").off("click").css({
                "cursor": "pointer"
            })
            $(".bg_0").css({
                "background": "url(assets/images/act_images/embtriangle.png)"
            })
          $(".roundbtn").removeClass('greenColoradd colorclass1 yellowColoradd yellowAdded');
            noStepArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            comm1();
            $(".producer3").css({
                "left": "612px"
            })
            $(".commonClass").css({
                "background": "#150958"
            })
			$(".roundAnimate").css({"display":"none"});
			$(".centerBtn").addClass('yellowAdded');
			  $('.centerBtn').addClass('colorclass');
        }
        if (cpage == "explore") {
           	$('.expimgcont').hide();
			$('.expDivIcon').css({    top: '16px'});
			$('.expPara').css({top: '0px'}).html('Click on any organism in the food web to learn more about it.');
			AudioNameget = 'vtrlstatic_01';
			audioNameArr[0] = AudioNameget;
			audioNameArr[1] = '';
            $(".EventNotAllowed").css("display", "none");

        }
    } else {

        if (htmlvalue == "Amazon Rain Forest") {
            $(".roundbtn").css({
                "background": "",
                "border": ''
            });
            $("#drop_9").css({
                "top": "32px",
                "left": "445px"
            })
            $("#drop_10").css({
                "top": "32px",
                "left": "559px"
            })
             $(".roundbtn").addClass('greenColoradd');
            $(".bg_0").css({
                "background": "url(assets/images/act_images/embtriangle.png)"
            })
            noStepArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            comm1();
            $(".commonClass").css({
                "background": "#00431c"
            })
            $(".producer3").css({
                    "left": "674px"
                })
				$(".roundAnimate").css({"display":"none"});
                if (getIdSplit == 0) {
                $("#drag_" + ansorderArrMon[dropCount]).draggable("enable");
            } else {
                $("#drag_" + ansorderArrAm[dropCount]).draggable("enable");
            }
            ctBubble = 'amazon';
			$(".roundAnimate").css({"display":"none"});
			$(".roundbtn").removeClass('yellowAdded');
			$(".centerBtn").addClass('yellowAdded');
        } else {
            $(".roundbtn").css({
                "background": "",
                "border": ''
            });
			$(".roundbtn").removeClass('greenColoradd colorclass1');
            $("#resetbtn_btn").off("click").css({
                "cursor": "pointer"
            })
			  $(".roundbtn").removeClass('greenColoradd');
            $(".bg_0").css({
                "background": "url(assets/images/act_images/embtriangle.png)"
            })
            noStepArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            comm1();
            $('.centerBtn').addClass('colorclass');
			$(".roundAnimate").css({"display":"none"});
            $(".commonClass").css({
                "background": "#150958"
            })
            $(".producer3").css({
                "left": "612px"
            })
            if (getIdSplit == 0) {
                $("#drag_" + ansorderArrMon[dropCount]).draggable("enable");
            } else {
                $("#drag_" + ansorderArrAm[dropCount]).draggable("enable");
            }
            ctBubble = 'monterey';
			$(".roundAnimate").css({"display":"none"});
			$(".roundbtn").removeClass('yellowAdded');
			$(".centerBtn").addClass('yellowAdded');
			
        }
    }
   
    if (cpage == "explore") {
			$('.expimgcont').hide();
			$('.expDivIcon').css({    top: '16px'});
			$('.expPara').css({top: '0px'}).html('Click on any organism in the food web to learn more about it.');
			AudioNameget = 'vtrlstatic_01';
			audioNameArr[0] = AudioNameget;
			audioNameArr[1] = '';
			$(".EventNotAllowed").hide();
			changeHeightExp();
    }
	$(".expDiv").css({"left":"-280px"});
	rotateValue =-280;
	angleRot1=180;
	expSlideDiv();
	headerTabs($(this));
	 if(!activitytag && ctClass==2){audioPlay();} 
	 titlt = false;
	
}

var dragtopLeft = [
    []
]

//audio Function
var audioarray = ['monteraybay_water_loop','amazonrainforest','ding','digitalswoosh']
var audioFunction = function(arg)
{
	audioElement  =  document.getElementById("audioId");
	audioElement1  =  document.getElementById("audioId1");
	
	audioElement.volume = 0.3;
	audioElement.setAttribute('src', './assets/audio/'+audioarray[arg]+'.mp3');
	audioElement.play(); 
	audioElement.loop = true;
}
var AudioEndFun = function()
{
	audioElement.setAttribute('src', './assets/audio/'+audioarray[3]+'.mp3');
	audioElement.play(); 
	audioElement.loop = false; 
	
	audioFunction(currentactivity)
}
var arrEntryFlag = false
var topLeft = [];
var noact = function(num) {
   
    $(".dragComp").html('');
    $(".dropComp").html('');
    $(".dropComp").html("<div class='closeclick1'></div>");
	 $(".dragComp").append("<div class='closeclick'></div>");
	 $('.closeclick1,.closeclick').off('click').on('click',baseImgFun);	
    currentactivity = num;
    k = 0;
   
    if (currentactivity == 0) {
        topLeft = [];
        topLeft = topLeft0.slice(0);
    } else if (currentactivity == 1) {
        topLeft = [];
        topLeft = topLeft1.slice(0);
    }
  
	
    for (i = 0; i < arrayVal[num].length; i++) {
       
        $(".dropComp").prepend('<hr class="hrclass" id="hr' + i + '"></hr');
        for (var j = 0; j < arrayVal[num][i]; j++) {
            $(".dragComp").append('<div style=top:' + topLeft[k][0] + 'px;left:' + topLeft[k][1] + 'px class="drag row' + i + '" data-fill="" dropid="" id="drag_' + k + '" ><img draggable="false" src="assets/images/activity/'+window['act'+num+'imgPath'][k]+'.png"  alt="'+dragtext[num][k]+'" /><span>' + dragtext[num][k] + '</span><div class="dragBorderCut"></div><div class="highlight highlight' + i + '" id=highlight'+k+'></div></div>');
        
            $(".dropComp").append('<div style=top:' + droptopLeft[k][0] + 'px;left:' + droptopLeft[k][1] + 'px class="drop row' + i + '" data-fill="" dragid="" id="drop_' + k + '" ><div class="drop1"></div><div class="glowEffect glowEffect' + i + '"></div></div>');
          

            $('#drag_' + (k)).attr("data-drag", i + 1);
            $('#drop_' + (k)).attr("data-drop", i + 1);
            
            k++;

        }

    }
  
    if (activitytag) {
        $(".drag").draggable({
            drag: dragFunc,
            zIndex: 1000,
            start: dragStart,
            revert: function()
			{
				if(revertFunc1)	$(this).delay(2000);
				return true;
			},
			
            containment: ".dragComp",
			stop:stopFunc
        });
    } else {
		
        $(".drag").draggable({
            drag: dragFunc,
            zIndex: 1000,
            start: dragStart,
             revert: function()
			{
				if(revertFunc) $(this).delay(2000);
				return true;
			},
            containment: ".dragComp",
			stop:stopFunc
        });
    }
    $(".drag").draggable("disable");
    if (getIdSplit == 0) {
        $("#drag_" + ansorderArrMon[dropCount]).draggable("enable");
    } else {
        $("#drag_" + ansorderArrAm[dropCount]).draggable("enable");
    }
    $(".drop").droppable({
        drop: dropFunc,
		accept:'.drag'
    });
    
    $("#resetbtn_btn").off("click").css({
        "cursor": "pointer"
    })
    $('.centerBtn').addClass("colorclass");

    
}
var stopFunc = function(event, ui)
{
	
	clearTimeout(cleartAnimation);
	clearTimeout(cleartAnimation1);
	clearTimeout(cleartAnimation3);
	clearTimeout(clearSwoosh);
	if(activitytag)
	{
		if(StopRevert)
		{
			
			$("#"+highId).hide();
		}
		else
		{
			
			if(highId == 'highlight0' || highId == 'highlight3')
			{
				
				
				$("#"+highId).show();
				
			}
		}
	}
	
	
}

var init = function() {
	
    noact(0)
       
        if (activitytag) {
            $(".drag").draggable({
                drag: dragFunc,
                zIndex: 1000,
                start: dragStart,
                revert: function()
			{
				if(revertFunc1)	$(this).delay(2000);
				return true;
			},
                containment: ".dragComp",
			stop:stopFunc
            });
        } else {
            $(".drag").draggable({
                drag: dragFunc,
                zIndex: 1000,
                start: dragStart,
                revert: function()
			{
				if(revertFunc)	$(this).delay(2000);
				return true;
			},
                containment: ".dragComp",
				stop:stopFunc
            });
        }
    $(".drop").droppable({
        drop: dropFunc,
		accept:'.drag'
    });

}



function glowEffectFun() {

    $(".highlight,.glowEffect").hide();
   
}

var Resetbtn = function() {

    recount++;
    $("#resetbtn_btn").css({
        'opacity': '0.5',
        "cursor": "default"
    });
	
    $(".lefBtn").off("click");
    $(".rightBtn").off("click");
		$(".roundbtn").removeClass('yellowAdded');
		$(".centerBtn").addClass('yellowAdded');
    if (recount == 2) {
         $("#resetbtn_btn").show().css({
            "opacity": "1","background":"#A7A9AB","color":"#FFF"
        });
        $("#resetbtn_btn").off("click");
        $(".rightBtn").off("click");
        $(".roundbtn").off("click");
        $(".roundbtn").css({
            "cursor": "default"
        });
        $('.yellowbtn').css({
            "background": "",
            "border": ""
        });
        $('.centerBtn').css({
            "background": "",
            "border": ""
        });

    }
    if (recount == 1) {
		 $("#resetbtn_btn").show().css({
            "opacity": "1","background":"#A7A9AB","color":"#FFF"
        });
        rightAttemptFun();
		 $(".centerBtn").addClass("yellowColoradd")
		 $(".rightBtn,.lefBtn").removeClass("yellowColoradd")

        $(".roundbtn").off("click").on("click", buttonClick1);
		
		clearTimeout(setaniFunc)
		$(".roundbtn").css({"cursor":"pointer"});
		$("#roundAnimate_3").draggable({disabled: false})
		 $("#roundAnimate_3").draggable({start:roundstart,drag:rounddrag,stop:roundstop2}).css({"cursor":"pointer"});
        $(".actOkBar").show();
        $("#resetbtn_btn").off("click");
        $('.yellowbtn').css({
            "background": "",
            "border": ""
        });
		$(".lefBtn").removeClass('yellowColoradd');
        $('.centerBtn').addClass('yellowColoradd');
    }
	$(".roundAnimate").css({"left":"544px","right":"366px"});
   


}
var wrongStepattempt = function() {
    wrongAttemptFun("stop");
}
var centerhigh = true;
var buttonClickFun = function() {
    $(".screenIcon").attr("src", "assets/images/template/camera_icon_disabled.png").off("click").css({
        "cursor": "default"
    });
	$(".centerBtn").removeClass('colorclass');
    $('.yellowbtn').css({
        "background": "",
        "border": ""
    });
    var rowNo = $(this).attr('rowData');
	$('.roundbtn').each(function(i,v){
		if(($(this).attr('rowData') == rowNo)&&($(this).hasClass('yellowAdded'))){

			

			if($(this).attr('rowData') == rowNo) $(this).removeClass('yellowColoradd');
		
		}
	});
    if (($(this).hasClass('lefBtn')) && ($(this).attr("id") == $(".lefBtn").eq($(".lefBtn").length -1).attr("id"))) {
		var getAttrLeft = $(this).attr("data-attr1");
		 
        $(".roundbtn").off("click").css({
            "cursor": "default"
        });
		 $(".screenIcon").attr("src", "assets/images/template/camera_icon_disabled.png").off("click");
         
			aniLeft = $(this).css("left");
		
        $(".roundbtn").off("click").css({
            "cursor": "default"
        });
        if (currentActStep == 11) {
            rightAttemptFun();
	
             $("#roundAnimate_"+getAttrLeft).animate({
            "left": aniLeft
			}, 1000, function() {
				
				 $(".roundbtn").off("click");

			
			$('.centerBtn').removeClass('yellowColoradd');
        })


        }
        if (currentActStep == 12) {

            
            var roundHighLighted = setTimeout(function() {
                
				$(".lefBtn").each(function(i,v)
				{
					
					$("#roundAnimate_"+i).animate({"left":$(this).css('left')},1000,function()
						{
							
							 $('.centerBtn').removeClass('yellowColoradd');
							 $("#roundAnimate_3").draggable({disabled:true}).css({"cursor":"default"})
							 $(".roundbtn").off("click");
							 $(".lefBtn").off("mousedown").css({"cursor":"default"});
							  $(".screenIcon").attr("src", "assets/images/template/camera_icon.png").off("click");
							  
						});
				})
				
            }, 1000, function() {
                clearInterval(roundHighLighted)
            });
            $('.lefBtn').off("mousedown").on("mousedown", wrongStepattempt);
        }

       
      
        if(activitytag) $(".actOkBar").show();
        centerhigh = false;
       


    } else {

     
        $(".roundbtn").off("click").on("click", buttonClickFun);
        if (centerhigh == true) {
            wrongAttemptFun('stop')
              
            $('.centerBtn').css({
                "background": "#ffcb05",
                'border': '2px solid #ffcb05','cursor':'default'
            });

        }
        if (centerhigh == false) {
            
            wrongAttemptFun('stop')
           
            $('.lefBtn').addClass('yellowColoradd');

        }

    }
}
var buttonClick1 = function() {
    
    $('.yellowbtn').css({
        "background": "",
        "border": ""
    });
	    var rowNo = $(this).attr('rowData');
	$('.roundbtn').each(function(i,v){
		if(($(this).attr('rowData') == rowNo)&&($(this).hasClass('yellowAdded'))){

				

			if($(this).attr('rowData') == rowNo) $(this).removeClass('yellowColoradd');
	
		}
	});
    if (($(this).hasClass('rightBtn')) && ($(this).attr("id") == $(".rightBtn").eq($(".rightBtn").length -1).attr("id"))) {
		var getattrRight = $(this).attr("data-attr3");
		aniLeft1 = $(this).css("left");
        $(".roundbtn").off("click").css({
            "cursor": "default"
        });
			
			 $(".screenIcon").attr("src", "assets/images/template/camera_icon_disabled.png").off("click");
			$("#roundAnimate_"+getattrRight).css({"left":"544px"}).animate({
            "left": aniLeft1
        }, 1000, function() {
			
			$('.centerBtn, .lefBtn').removeClass('yellowColoradd');
        })
     
        var roundHighLighted = setTimeout(function() {
			$(".rightBtn").each(function(i,v)
			{
				$("#roundAnimate_"+i).animate({"left":$(this).css('left')},1000,function()
					{
						
						 $(".roundbtn").off("click").css({"cursor":"default"});
						 $("#roundAnimate_3").draggable({disabled: true}).css({"cursor":"default"});
						 $(".roundAnimate").draggable({disabled: true}).css({"cursor":"default"});
						 
						  $(".screenIcon").attr("src", "assets/images/template/camera_icon.png").off("click");
						 $('.centerBtn, .lefBtn').removeClass('yellowColoradd');
					});
			}) 
        }, 1000, function() {
            clearTimeout(roundHighLighted)
        });
        centerhigh = true;
        
        rightAttemptFun();

      
        $('.roundbtn').off("click");
    } else {
        if (centerhigh == false) {
            wrongAttemptFun('stop')
            $(".roundbtn").off("click").on("click", buttonClick1);
            $('.centerBtn').addClass('yellowColoradd')
        }
        if (centerhigh == true) {
            wrongAttemptFun('stop')
            $(".roundbtn").off("click").on("click", buttonClick1);
           
        }
    }
}
var buttonClick2 = function() {
    $('.yellowbtn').css({
        "background": "",
        "border": ""
    });
    if ($(this).hasClass("centerBtn")) {
        $('.centerBtn').css({
            "background": "#ffcb05",
            'border': '2px solid #ffcb05'
        });
       
        rightAttemptFun();
    }
}
var currentactivity1 = 0;


function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
var recount = 0;


function resetfunction() {
	

    if (dropCount == ansorderArrMon.length && htmlvalue == "Monterey Bay") {
        $(".roundbtn").css({
            "z-index": 7
        });
		
        $('.centerBtn').addClass('yellowColoradd')
        $(".roundbtn").off("click").on("click", buttonClickFun);
		$("#roundAnimate_3").draggable({disabled: false}).css({"cursor": "pointer"});
         $("#roundAnimate_3").draggable({start:roundstart,drag:rounddrag,stop:roundstop1});
        $(".roundAnimate, .sliderAnimate").show();
		$(".roundAnimate").css({"left":"544px","right":"366px"})
    }
    if (dropCount == ansorderArrAm.length && htmlvalue == "Amazon Rain Forest") {
        recount = 0;
        $(".roundbtn").css({
            "z-index": 7
        });
        $(".roundbtn").css({
            "background": "#457a4b"
        });
		
        $('.centerBtn').addClass('yellowColoradd');
        $(".roundbtn").off("click").on("click", buttonClickFun);
         $("#roundAnimate_3").draggable({start:roundstart,drag:rounddrag,stop:roundstop1});
        $(".roundAnimate, .sliderAnimate").show();
		$(".roundAnimate").css({"left":"544px","right":"366px"})
       
    }
    if (dropCount == 2) {
      
        $('.drag').draggable("enable");
        if (cpage != 'explore') {
           
        }
    }
}

//Explore slide function

function resetfunction1() {
	
	
    if (dropCount == ansorderArrMon.length && htmlvalue == "Monterey Bay") {
        $(".roundbtn").css({
            "z-index": 7
        });
        $('.centerBtn').addClass('yellowColoradd');
        //***
		
		/* $('.expPara').html(actText[0]);
		console.log(actText[0])
		AudioNameget ='vtrlstart'; */
        $("#resetbtn_btn").show().css({
            "opacity": "1","background":"#A7A9AB","color":"#FFF"
        });
       
		enbleRoundBtn();
    }
    if (dropCount == ansorderArrAm.length && htmlvalue == "Amazon Rain Forest") {
        recount = 0;
        $(".roundbtn").css({
            "z-index": 7
        });
       
         $("#resetbtn_btn").show().css({
            "opacity": "1","background":"#A7A9AB","color":"#FFF"
        });
		  $('.roundbtn').removeClass('colorclass1');
        $('.centerBtn').addClass('yellowColoradd');
      	
      
       
		enbleRoundBtn();
    }

}

var comm1 = function() {
    $("#resetbtn_btn").hide();
    $("#resetbtn_btn").off("click").css({
            "cursor": "pointer"
        })
       
    $("#resetbtn_btn").off("click").css({
        "cursor": "default",
        "opacity": "1"
    });
    $(".roundbtn").off("click");
    $("#resetbtn_btn").off("click");
    $(".roundbtn").css({
        "z-index": 2
    });
}




var enbleRoundBtn = function(){
		$(".roundAnimate").css({"display":"block","left":"544px"});
        $(".roundbtn").off("click").on("click", ResbuttonClickFun);
        $(".roundAnimate").draggable({start:roundstart,drag:rounddrag,stop:roundstop});
		//$('.expPara').html(actText[0]);
		//AudioNameget ='vtrlstart';
		
}
var roundId;
var round = 0;
var roundstart = function(event, ui)
{
	
	if(!activitytag)
	{
		$("#resetbtn_btn").css({"cursor": "default","background":"#A7A9AB","color":"#FFF"});
		$("#resetbtn_btn").off("click")
	}
	$(".centerBtn").css({"background":"","border":""})
	$(".centerBtn").removeClass("yellowColoradd")
	$(".centerBtn").removeClass("colorclass")
	
	roundId = $(this).attr("id").split("_")[1];
	round++;
}
var att = [[121],[236],[353],[472]]
var att1 = [[477,613],[393,698],[322,768],[260,829]]
var arrayDrag = [[117,124,470,620],[234,239,393,710],[350,359,322,768],[466,475,248,835]]
var rounddrag = function(event, ui)
{
	

	$.each(arrayDrag[roundId], function(i, v){
			
			
			if(ui.position.top<arrayDrag[roundId][i])
			{
				ui.position.top = att[roundId];

			}
			if(ui.position.left<arrayDrag[roundId][2])
			{
				ui.position.left = att1[roundId][0];
			
			}
			if(ui.position.left>arrayDrag[roundId][3])
			{
				ui.position.left = att1[roundId][1];
			
			}
			
	})
	
}
var arrAnimate = [0, 0, 0]
var aniLeft11;
var buttonSpecification = ['.lefBtn','.centerBtn','.rightBtn']
var roundstop = function(event,ui)
{
	
	$(".roundAnimate").each(function(i, v){
			
	});
	if(((arrAnimate[1] == 0)&&((ui.position.left<=510)) && (roundId == 0)) ||((arrAnimate[1] == 0)&&(ui.position.left<=470) && (roundId == 1)) ||((arrAnimate[1] == 0)&&(ui.position.left<=433) && (roundId == 2) )||((arrAnimate[1] == 0)&&(ui.position.left<=405) && (roundId == 3)))
	{
		
		
		aniLeft = $(buttonSpecification[0]).eq(roundId).css("left");
		
		animateFunc1(buttonSpecification[0]);
	}
	else if(((arrAnimate[0] == 1) && ((ui.position.left>=509) && ((ui.position.left<=544))) && (roundId == 0)) || ((arrAnimate[0] == 1) && ((ui.position.left>=470)  && ((ui.position.left<=544))) && (roundId == 1)) || ((arrAnimate[0] == 1) && ((ui.position.left>=433) && ((ui.position.left<=544))) && (roundId == 2)) || ((arrAnimate[0] == 1) && ((ui.position.left>=405) && ((ui.position.left<=544))) && (roundId == 3)))
		{
			
			aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
			$("#resetbtn_btn").css({"background":"#A7A9AB","color":"#FFF"});
			animateFunc1(buttonSpecification[1]);
		} 
	
	else if(((arrAnimate[1] == 0)&&((ui.position.left>510) && (ui.position.left<=544)) && (roundId == 0)) || ((arrAnimate[1] == 0)&&((ui.position.left>475) && (ui.position.left<=544)) && (roundId == 1)) ||((arrAnimate[1] == 0)&&((ui.position.left>435) && (ui.position.left<=544)) && (roundId == 2)) ||((arrAnimate[1] == 0)&&((ui.position.left>406) && (ui.position.left<=544)) && (roundId == 3)) )
	{
		
		aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
		$("#resetbtn_btn").css({"background":"#A7A9AB","color":"#FFF"});
		
		animateFunc1(buttonSpecification[1]);
	}

	else if(((arrAnimate[1] == 0) && (ui.position.left>565) && (roundId == 0))||((arrAnimate[1] == 0) && (ui.position.left>615) && (roundId == 1)) || ((arrAnimate[1] == 0) && (ui.position.left>655) && (roundId == 2)) || ((arrAnimate[1] == 0) && (ui.position.left>675) && (roundId == 3)))
	{

		aniLeft = $(buttonSpecification[2]).eq(roundId).css("left");

		animateFunc1(buttonSpecification[2]);
	}  
	else if(((arrAnimate[2] == 1) && (ui.position.left<580) && (roundId == 0))||((arrAnimate[2] == 1) && (ui.position.left<615) && (roundId == 1)) || ((arrAnimate[2] == 1) && (ui.position.left<655) && (roundId == 2)) || ((arrAnimate[2] == 1) && (ui.position.left<675) && (roundId == 3)))
	{
		aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
		animateFunc1(buttonSpecification[1]);
	} 
	else if(((arrAnimate[1] == 0) && ((ui.position.left<560)&&(ui.position.left>=544)) && (roundId == 0)) || ((arrAnimate[1] == 0) && ((ui.position.left<610)&& (ui.position.left>=544)) && (roundId == 1)) || ((arrAnimate[1] == 0) && ((ui.position.left<650)&& (ui.position.left>=544)) && (roundId == 2)) ||((arrAnimate[1] == 0) && ((ui.position.left<675)&& (ui.position.left>=544)) && (roundId == 3)))
	{
		aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
		animateFunc1(buttonSpecification[1]);
	}
	
else
{
	
}

	
}



var roundstop1 = function(event,ui)
{
	
	$(".roundAnimate").each(function(i, v){
			
	});
	if(((arrAnimate[1] == 0)&&((ui.position.left<510)) && (roundId == 0)) ||((arrAnimate[1] == 0)&&(ui.position.left<=470) && (roundId == 1)) ||((arrAnimate[1] == 0)&&(ui.position.left<=433) && (roundId == 2) )||((arrAnimate[1] == 0)&&(ui.position.left<=405) && (roundId == 3)))
	{
		
		aniLeft = $(buttonSpecification[0]).eq(roundId).css("left");
		
		animateFunc2(buttonSpecification[0]);
	}
	else if(((arrAnimate[0] == 1) && ((ui.position.left>=510) && ((ui.position.left<=544))) && (roundId == 0)) || ((arrAnimate[0] == 1) && ((ui.position.left>=475)  && ((ui.position.left<=544))) && (roundId == 1)) || ((arrAnimate[0] == 1) && ((ui.position.left>=435) && ((ui.position.left<=544))) && (roundId == 2)) || ((arrAnimate[0] == 1) && ((ui.position.left>=410) && ((ui.position.left<=544))) && (roundId == 3)))
		{
			
			
			aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
			animateFunc2(buttonSpecification[1]);
		} 
	
	else if(((arrAnimate[1] == 0)&&((ui.position.left>510) && (ui.position.left<=544)) && (roundId == 0)) || ((arrAnimate[1] == 0)&&((ui.position.left>475) && (ui.position.left<=544)) && (roundId == 1)) ||((arrAnimate[1] == 0)&&((ui.position.left>435) && (ui.position.left<=544)) && (roundId == 2)) ||((arrAnimate[1] == 0)&&((ui.position.left>406) && (ui.position.left<=544)) && (roundId == 3)) )
	{
		
		aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
		
		animateFunc2(buttonSpecification[1]);
	}

	else if(((arrAnimate[1] == 0) && (ui.position.left>580) && (roundId == 0))||((arrAnimate[1] == 0) && (ui.position.left>615) && (roundId == 1)) || ((arrAnimate[1] == 0) && (ui.position.left>650) && (roundId == 2)) || ((arrAnimate[1] == 0) && (ui.position.left>675) && (roundId == 3)))
	{
		
		
		wrongAttemptFun('stop')
		aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
		animateFunc2(buttonSpecification[1]);
	}  
	else if(((arrAnimate[2] == 1) && (ui.position.left<580) && (roundId == 0))||((arrAnimate[2] == 1) && (ui.position.left<615) && (roundId == 1)) || ((arrAnimate[2] == 1) && (ui.position.left<650) && (roundId == 2)) || ((arrAnimate[2] == 1) && (ui.position.left<675) && (roundId == 3)))
	{
		
		aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
		animateFunc2(buttonSpecification[1]);
	} 
	else if(((arrAnimate[1] == 0) && ((ui.position.left<575)&&(ui.position.left>=544)) && (roundId == 0)) || ((arrAnimate[1] == 0) && ((ui.position.left<610)&& (ui.position.left>=544)) && (roundId == 1)) || ((arrAnimate[1] == 0) && ((ui.position.left<650)&& (ui.position.left>=544)) && (roundId == 2)) ||((arrAnimate[1] == 0) && ((ui.position.left<675)&& (ui.position.left>=544)) && (roundId == 3)))
	{
		wrongAttemptFun('stop')
		
		aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
		animateFunc2(buttonSpecification[1]);
	}
	
	else
	{
		
	}

}
var roundstop2 = function(event,ui)
{
	
	$(".roundAnimate").each(function(i, v){
			
	});
	if(((arrAnimate[1] == 0)&&((ui.position.left<510)) && (roundId == 0)) ||((arrAnimate[1] == 0)&&(ui.position.left<=470) && (roundId == 1)) ||((arrAnimate[1] == 0)&&(ui.position.left<=433) && (roundId == 2) )||((arrAnimate[1] == 0)&&(ui.position.left<=405) && (roundId == 3)))
	{
		
		wrongAttemptFun('stop')
		aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
		
		animateFunc3(buttonSpecification[1]);
	}
	else if(((arrAnimate[0] == 1) && ((ui.position.left>=510) && ((ui.position.left<=544))) && (roundId == 0)) || ((arrAnimate[0] == 1) && ((ui.position.left>=475)  && ((ui.position.left<=544))) && (roundId == 1)) || ((arrAnimate[0] == 1) && ((ui.position.left>=435) && ((ui.position.left<=544))) && (roundId == 2)) || ((arrAnimate[0] == 1) && ((ui.position.left>=410) && ((ui.position.left<=544))) && (roundId == 3)))
		{
			
			
			aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
			animateFunc3(buttonSpecification[1]);
		} 
	
	else if(((arrAnimate[1] == 0)&&((ui.position.left>510) && (ui.position.left<=544)) && (roundId == 0)) || ((arrAnimate[1] == 0)&&((ui.position.left>475) && (ui.position.left<=544)) && (roundId == 1)) ||((arrAnimate[1] == 0)&&((ui.position.left>435) && (ui.position.left<=544)) && (roundId == 2)) ||((arrAnimate[1] == 0)&&((ui.position.left>410) && (ui.position.left<=544)) && (roundId == 3)) )
	{
		
		aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
		
		animateFunc3(buttonSpecification[1]);
	}

	else if(((arrAnimate[1] == 0) && (ui.position.left>580) && (roundId == 0))||((arrAnimate[1] == 0) && (ui.position.left>615) && (roundId == 1)) || ((arrAnimate[1] == 0) && (ui.position.left>650) && (roundId == 2)) || ((arrAnimate[1] == 0) && (ui.position.left>675) && (roundId == 3)))
	{
		
		aniLeft = $(buttonSpecification[2]).eq(roundId).css("left");
		
		animateFunc3(buttonSpecification[2]);
	}  
	else if(((arrAnimate[2] == 1) && (ui.position.left<580) && (roundId == 0))||((arrAnimate[2] == 1) && (ui.position.left<615) && (roundId == 1)) || ((arrAnimate[2] == 1) && (ui.position.left<650) && (roundId == 2)) || ((arrAnimate[2] == 1) && (ui.position.left<675) && (roundId == 3)))
	{
		
		aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
		animateFunc3(buttonSpecification[1]);
	} 
	else if(((arrAnimate[1] == 0) && ((ui.position.left<575)&&(ui.position.left>=544)) && (roundId == 0)) || ((arrAnimate[1] == 0) && ((ui.position.left<610)&& (ui.position.left>=544)) && (roundId == 1)) || ((arrAnimate[1] == 0) && ((ui.position.left<650)&& (ui.position.left>=544)) && (roundId == 2)) ||((arrAnimate[1] == 0) && ((ui.position.left<675)&& (ui.position.left>=544)) && (roundId == 3)))
	{
		
		
		aniLeft = $(buttonSpecification[1]).eq(roundId).css("left");
		animateFunc3(buttonSpecification[1]);
	}
	
	else
	{
		
	}

}

var animateFunc1 = function(arr)
{
	
	$("#roundAnimate_"+roundId).animate({
				"left": aniLeft
			}, 1000, function() {
				$(".roundbtn").off("click").on("click", ResbuttonClickFun).css({
					"cursor": "pointer"
				});

			
				
				
			}) 
			var roundAnimateset = setTimeout(function()
			{
			
				$(arr).each(function(i,v)
				{

							$("#roundAnimate_"+i).animate({"left":$(this).css('left')},1000,function()
								{
									
									 if(arr == ".lefBtn")
									 {
										
										 if (!activitytag && getIdSplit == 0) {
												currentActStep = 11;
												rightAttemptFun();
											} else if (!activitytag && getIdSplit == 1) {
												currentActStep = 12;
												rightAttemptFun();
											}
										arrAnimate[0] =1;
										arrAnimate[1] =0;
										arrAnimate[2] =0;
										
										 $('.centerBtn, .rightBtn').removeClass('yellowAdded');
										
										
									 }
									
									 if(arr == ".centerBtn")
									 {
										 if (!activitytag && getIdSplit == 0) {
												currentActStep = 12;
												rightAttemptFun();
											} else if (!activitytag && getIdSplit == 1) {
												currentActStep = 13;
												rightAttemptFun();
											}
										arrAnimate[0] =0;
										arrAnimate[1] =0;
										arrAnimate[2] =0;
										 $("#resetbtn_btn").off("click");
										$("#resetbtn_btn").css({"background":"#A7A9AB","color":"#FFF"});
										 $('.lefBtn, .rightBtn').removeClass('yellowAdded');
										
									 }
									 if(arr == ".rightBtn")
									 {
										 if (!activitytag && getIdSplit == 0) {
												currentActStep = 13;
												rightAttemptFun();
											} else if (!activitytag && getIdSplit == 1) {
												currentActStep = 14;
												rightAttemptFun();
											}
										arrAnimate[0] =0;
										arrAnimate[1] =0;
										arrAnimate[2] =1;
										 
										$('.lefBtn, .centerBtn').removeClass('yellowAdded');
										
									 }
									 $(".roundbtn").off("click").on("click", ResbuttonClickFun).css({"cursor": "pointer"});
									if(i == 2){
										if(!activitytag) $("#resetbtn_btn").css({"cursor": "pointer","opacity": "1","background":"#ffcb05","color":"black"});
										$("#resetbtn_btn").off("click").on('click', Resetbtn1);
									}
								}); 
				})
		},1000)
}

var animateFunc2 = function(arr)
{
	
	$(".roundbtn").off("click")
	 $(".screenIcon").attr("src", "assets/images/template/camera_icon_disabled.png").off("click");
	
	$("#roundAnimate_"+roundId).animate({
				"left": aniLeft
			}, 1000, function() {
				
				
			}) 
			var roundAnimateset = setTimeout(function()
			{
			$(".roundbtn").off("click")
				$(arr).each(function(i,v)
				{

							$("#roundAnimate_"+i).animate({"left":$(this).css('left')},1000,function()
								{
									
									 $(".screenIcon").attr("src", "assets/images/template/camera_icon.png").off("click");
									 if(arr == ".lefBtn")
									 {
										
										if (currentActStep == 11) {
										$(".roundbtn").off("click").css({"cursor":"default"});
											$("#roundAnimate_3").draggable({disabled: true})
											rightAttemptFun();
										}
										 else
										 {
											
											
										 }
										 if (currentActStep == 12)
										 {
											 
											
												$(".roundbtn").off("click").css({"cursor":"default"});
												$("#roundAnimate_3").draggable({disabled:true}).css({"cursor":"default"});
											   
										 }
									 }
	 
								}); 
				})
		},1000)
		setaniFunc = setTimeout(function()
		{
			
			$(".roundbtn").off("click").on("click", buttonClickFun ).css({
					"cursor": "pointer"
				});
		},2000)
}
var setaniFunc;
var animateFunc3 = function(arr)
{
$(".roundbtn").off("click");
	
				
				 $(".screenIcon").attr("src", "assets/images/template/camera_icon_disabled.png").off("click");
	$("#roundAnimate_"+roundId).animate({
				"left": aniLeft
			}, 1000, function() {
				
				
			}) 
			var roundAnimateset = setTimeout(function()
			{
			
				$(arr).each(function(i,v)
				{

							$("#roundAnimate_"+i).animate({"left":$(this).css('left')},1000,function()
								{
									 
									 if(arr == ".rightBtn")
									 {
										  
										 if(currentActStep == 13)
										 {
											 rightAttemptFun();
											$("#roundAnimate_3").draggable({disabled:true}).css({"cursor":"default"});
											$(".roundAnimate").draggable({disabled:true}).css({"cursor":"default"});
											
											$(".roundbtn").off("click").css({"cursor":"default"});
											$(".lefBtn").off("mousedown").css({"cursor":"default"});
											 $(".screenIcon").attr("src", "assets/images/template/camera_icon.png").off("click");
										 }
										
											
									 }
									 

								}); 
				})
		},1000)
		setaniFunc1 = setTimeout(function()
		{
			
			$(".roundbtn").off("click").on("click", buttonClick1 ).css({
					"cursor": "pointer"
				});
		},2000)
}
var setaniFunc1;
var ResbuttonClickFun = function() {
		
	$(".centerBtn").removeClass('colorclass')
	  
	 $(".roundAnimate").show();
	 $("#resetbtn_btn").off("click").css({"cursor": "default","background":"#A7A9AB","color":"#FFF"});
	if(!$(this).hasClass('yellowAdded'))
	{    
		var rowNo = $(this).attr('rowData');
		$('.roundbtn').each(function(i,v){
			if(($(this).attr('rowData') == rowNo)&&($(this).hasClass('yellowAdded'))){

					
				if($(this).attr('rowData') == rowNo) $(this).removeClass('yellowColoradd');
			
			}
		});

			$('.roundbtn').removeClass('yellowAdded');
			if($(this).hasClass('lefBtn')) 	{ $('.lefBtn').addClass('yellowAdded');}
			else if($(this).hasClass('centerBtn')) 	{ $('.centerBtn').addClass('yellowAdded');}
			else { $('.rightBtn').addClass('yellowAdded');}

			
		if ($(this).hasClass('lefBtn')) {
			var getAttrid = $(this).attr("data-attr1");
			aniLeft = $(this).css("left");
			
			$(".roundbtn").off("click").css({
				"cursor": "default"
			});

			if(activitytag) $(".screenIcon").attr("src", "assets/images/template/camera_icon_disabled.png").off("click");
			$('.EventNotAllowed1').hide();

			if (!activitytag && getIdSplit == 0) {
				currentActStep = 11;
				rightAttemptFun();
			} else if (!activitytag && getIdSplit == 1) {
				currentActStep = 12;
				rightAttemptFun();
			}

			$("#roundAnimate_"+getAttrid).animate({
				"left": aniLeft
			}, 1000, function() {
				$(".roundbtn").off("click").on("click", ResbuttonClickFun).css({
					"cursor": "pointer"
				});

				
				$('.centerBtn, .rightBtn').removeClass('yellowColoradd');
				
			})
			var roundHighLighted = setTimeout(function() {
				$(".lefBtn").each(function(i,v)
				{
					
					$("#roundAnimate_"+i).animate({"left":$(this).css('left')},1000,function()
						{
							 
							 $('.centerBtn, .rightBtn').removeClass('yellowColoradd');
							 $(".roundbtn").off("click").on("click", ResbuttonClickFun).css({"cursor": "pointer"});
							if(i == 2){
								if(!activitytag) $("#resetbtn_btn").css({"cursor": "pointer","opacity": "1","background":"#ffcb05","color":"#000"});
								$("#resetbtn_btn").off("click").on('click', Resetbtn1);
							}
						});
				})

				
			}, 1000, function() {
				clearInterval(roundHighLighted)
			});

		}
		//Rightslide click animate
		if ($(this).hasClass('rightBtn')) {
			
			var getattrRight = $(this).attr("data-attr3");
			
			aniLeft1 = $(this).css("left");
			
			$(".roundbtn").off("click").css({
				"cursor": "default"
			});

			 if(activitytag) $(".screenIcon").attr("src", "assets/images/template/camera_icon_disabled.png").off("click");
			$('.EventNotAllowed1').hide();
			if (!activitytag && getIdSplit == 0) {
				currentActStep = 13;
				rightAttemptFun();
			} else if (!activitytag && getIdSplit == 1) {
				currentActStep = 14;
				rightAttemptFun();
			}
			$("#roundAnimate_"+getattrRight).animate({
				"left": aniLeft1
			}, 1000, function() {
				 $(".roundbtn").off("click").on("click", ResbuttonClickFun).css({
					"cursor": "pointer"
				});
				
				$('.lefBtn, .centerBtn').removeClass('yellowColoradd');
				$('.yellowAdded').off('click');
			})
			var roundHighLighted = setTimeout(function() {
			  
				$(".rightBtn").each(function(i,v)
				{
					$("#roundAnimate_"+i).animate({"left":$(this).css('left')},1000,function()
						{
							 $(".roundbtn").off("click").on("click", ResbuttonClickFun).css({"cursor": "pointer"});
							 if(i == 2){
								if(!activitytag) $("#resetbtn_btn").css({"cursor": "pointer","opacity": "1","background":"#ffcb05","color":"#000"});
								$("#resetbtn_btn").off("click").on('click', Resetbtn1);
							}
						});
				}) 
				
			}, 1000, function() {
				clearInterval(roundHighLighted)
			});
		}
		//centerslide animate
		if ($(this).hasClass('centerBtn')) {
		   $("#resetbtn_btn").css({"cursor": "default","background":"#A7A9AB","color":"white" });
			var getattrCenter = $(this).attr("data-attr2");
			aniLeft2 = $(this).css("left");
			
			$(".roundbtn").off("click").css({
				"cursor": "default"
			});
			 if(activitytag) $(".screenIcon").attr("src", "assets/images/template/camera_icon_disabled.png").off("click");
			$('.EventNotAllowed1').hide();
			if (!activitytag && getIdSplit == 0) {
				currentActStep = 12;
				rightAttemptFun();
			} else if (!activitytag && getIdSplit == 1) {
				currentActStep = 13;
				rightAttemptFun();
			}

			var roundHighLighted = setTimeout(function() {
				$(".centerBtn").each(function(i,v)
				{
					
					$("#roundAnimate_"+i).animate({"left":$(this).css('left')},1000,function()
						{
							 $(".roundbtn").off("click").on("click", ResbuttonClickFun).css({"cursor": "pointer"});
							  
						});
				}) 
				
			}, 1000, function() {
				clearInterval(roundHighLighted)
			});

			$("#roundAnimate_"+getattrCenter).animate({
				"left": aniLeft2
			}, 1000, function() {
				 $(".roundbtn").off("click").on("click", ResbuttonClickFun).css({
					"cursor": "pointer"
				}); 
				
				$('.lefBtn, .rightBtn').removeClass('yellowColoradd');
			})

		}
	}
}
var arrAnimate = [0, 0, 0]
var Resetbtn1 = function() {
		$("#resetbtn_btn").off('click');
		if (!activitytag && getIdSplit == 0) {
            currentActStep = 12;
            rightAttemptFun();
        } else if (!activitytag && getIdSplit == 1) {
            currentActStep = 13;
            rightAttemptFun();
        }
		$(".roundbtn").off("click").on("click", ResbuttonClickFun).css({
                "cursor": "pointer"
            }); 

		$(".roundbtn").removeClass('yellowAdded yellowColoradd');
		
		$(".centerBtn").addClass('yellowAdded');
    $("#resetbtn_btn").css({
        "cursor": "default",
        
		"background":"#A7A9AB",
		"color":"white"
    });
  
    $(".roundAnimate").css({"left":"544px","right":"366px"});
    $(".centerBtn").css({
        "cursor": "default"
    });
    $(".lefBtn, .rightBtn").css({
        "cursor": "pointer"
    });
    $('.yellowbtn').css({
        "background": "",
        "border": ""
    });
    $('.centerBtn').addClass('yellowColoradd')
	rotateValueAct = 0;
	angleRot1 = 0;
	if($('.activtyDiv').position().left < 0) activitySlideDiv();
}
function baseImgFun(event)
{
	
	event.stopPropagation();
	audioElement.play(); //activity audio play
	$(".EventNotAllowed").hide();
	if(activitytag){
		if(parseInt($('.activtyDiv').css('left'))>=0)
		{
			angleRot=0;
			rotateValueAct=0;
			activitySlideDiv();
		}
		if(parseInt($('.expDiv').css('left'))>=0)
		{
			rotateValue=0;
			angleRot1=0;
			expSlideDiv();
		}
	}
	else{
		if(parseInt($('.activtyDiv').css('left'))>=0)
		{
			angleRot=0;
			rotateValueAct=0;
			activitySlideDiv();
		}
		if(parseInt($('.expDiv').css('left'))>=0)
		{
			rotateValue=0;
			angleRot1=0;
			expSlideDiv();
		}
	}
}