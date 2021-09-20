//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "entrada",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Haz click para moverte"
};

//miscellaneous assets to preload
module.exports.IMAGES = [
    ["sheepIdle", "sheep-idle.png"],
    ["sheepWalk", "sheep-walk.png"],
    ["wifeWalk", "wife.png"],
    ["wifeEmote", "wife-emote.png"],
    ["husbandWalk", "husband.png"],
    ["husbandEmote", "husband-emote.png"],
    ["child1Walk", "child1.png"],
    ["child1Emote", "child1-emote.png"],
    ["child2Walk", "child2.png"],
    ["child2Emote", "child2-emote.png"],
    ["child3Walk", "child3.png"],
    ["child3Emote", "child3-emote.png"],
    ["uncleWalk", "uncle.png"],
    ["uncleEmote", "uncle-emote.png"],
    ["milkmanWalk", "milkman.png"],
    ["milkmanEmote", "milkman-emote.png"],
    ["boyfriendWalk", "child-boyfriend.png"],
    ["boyfriendEmote", "child-boyfriend-emote.png"],
    ["flyWalk", "fly.png"],
    ["flyEmote", "fly-emote.png"]
];

//miscellaneous sounds to preload
module.exports.SOUNDS = [
    ["beat1", "beat1.ogg"], //credit https://www.youtube.com/watch?v=ugLVpZm69DE
    ["beat2", "beat2.ogg"], // credit https://www.youtube.com/watch?v=dPdoxIz0w24
    ["beat3", "beat3.ogg"], //credit https://www.youtube.com/watch?v=XShEWT4MwJs
    ["DJStop", "DJStop.mp3"]
];

module.exports.ROOMS = {
    entrada: {
        //the background graphics, it can be a spreadsheet
        bg: "background/intro.png",
        //if spreadsheet frames
        frames: 5,
        frameDelay: 60,
        avatarScale: 2,
        //if animated, animation speed in refreshes (frame dependent)
        frameDelay: 60,
        //normally 2, avatars can be scaled to simulate camera distance
         //music: "Main_Theme.wav",
         //musicVolume: 0.3,
        //a shade to tint the avatars to simulate light color, #FFFFFF normal
        tint: "#ffffff",
        //the html body color can be changed
        pageBg: "#222222",
        //minimum height for the speech bubbles
        bubblesY: 50,
        //if spawning directly in this room, top left and bottom right point defining the rectangular spawn area (random within it)
        spawn: [8, 85, 8, 85],
            music: "entrada.mp3",
    
        //graphics with active areas Sierra Online adventures style
        //color coded as below, #FFFFFF is walkable, transparent is obstacle
        area: "background/intro_areas.png",
        //each color can trigger a command, the destination needs to be reached first
        //the "h" is replaced by # to identify color
        areaColors: {
            //enter command changes room
            //room: id of the room to enter
            //label: what to display on rollover
            //point: where to walk after click
            //enterPoint: where to spawn in the next room
            //obstacle: is the area walkable
            h00ffff: {
                cmd: "enter",
                room: "mente",
                label: "Mente Maquínica",
                point: [101, 83],
                enterPoint: [101, 83],
                obstacle: false
            },
            //text displays a text only on the client
            //txt: the text
            //align: center or left
            //lines: manual number of lines, p5 doesn't understand line breaks
            //url: uptionally open a page on click
            h00ff00: {
                cmd: "text",
                txt: "Haz click para mas informacion",
                align: "left",
                lines: 1,
				url: "creditos.html",
                label: "Créditos",
                point: [37, 94],
                obstacle: true
            },
        },
        //list of sprites to create in the room
        //sprites are rendered according to depth sort so they can appear above the avatars unlike the background
        //they can be animated, mouse reactive and trigger commands like the areas above
        things: {
            //sprite spreadsheets only 1 row ok?
        }


    },
    mente: {
        //the background graphics, it can be a spreadsheet
        bg: "background/2.png",
        //if spreadsheet frames
        frames: 2,
        frameDelay: 60,
        avatarScale: 2,
        //if animated, animation speed in refreshes (frame dependent)
   
        //normally 2, avatars can be scaled to simulate camera distance

        //a shade to tint the avatars to simulate light color, #FFFFFF normal
        tint: "#fffff",
         music: "Main_Theme.wav",
         musicVolume: 0.2,
       
        //the html body color can be changed
        pageBg: "#222222",
        //minimum height for the speech bubbles
        bubblesY: 50,
        //if spawning directly in this room, top left and bottom right point defining the rectangular spawn area (random within it)
        spawn: [91, 89, 66, 83],
        //graphics with active areas Sierra Online adventures style
        //color coded as below, #FFFFFF is walkable, transparent is obstacle
        area: "background/2_areas.png",
        //each color can trigger a command, the destination needs to be reached first
        //the "h" is replaced by # to identify color
        areaColors: {
            //enter command changes room
            //room: id of the room to enter
            //label: what to display on rollover
            //point: where to walk after click
            //enterPoint: where to spawn in the next room
            //obstacle: is the area walkable
            /*  h00e436: { cmd: "enter", room: "likelikeBackyard", label: "Backyard", point: [6, 88], enterPoint: [116, 69], obstacle: false },
            hffec27: { cmd: "enter", room: "likelikeOutside", label: "Street", point: [102, 98], enterPoint: [103, 84], obstacle: false },
            h5f7dbe: { cmd: "enter", room: "firstFloor", label: "oMoMA", point: [116, 85], enterPoint: [63, 98], obstacle: false },
			hab5236: { cmd: "enter", room: "firstFloor", label: "oMoMA", point: [116, 85], enterPoint: [63, 98], obstacle: false },
*/
            //obstacle: is the area walkable
            h00ffff: {
                cmd: "enter",
                room: "entrada",
                label: "Salida",
                 point: [101, 83],
				  enterPoint: [101, 83],
                obstacle: false
            },

            hfff300: {
                cmd: "enter",
                room: "identificacion",
                label: "Identificación",

                point: [20, 84],
                 enterPoint: [114, 87],
                obstacle: false
            },
           


            //text displays a text only on the client
            //txt: the text
            //align: center or left
            //lines: manual number of lines, p5 doesn't understand line breaks
            //url: uptionally open a page on click
            hffe200: {
                cmd: "text",
                txt: "Aquí puedes leer información sobre el proyecto.",
                align: "left",
                lines: 2,
                url: "uncannyfire.html",
                label: "Información",
                point: [96, 78],
                obstacle: true
            },
            h5cff00: {
                cmd: "text",
                txt: "INSIDE THE LARPS THAT LET HUMAN PLAYERS EXPERIENCE AI LIFE\n\nGame designers are using artificial intelligence to explore everything from racial discrimination to cathartic emotion.\n\nTasha Robinson, 2019",
                align: "left",
                lines: 10,
                url: "https://www.theverge.com/2019/2/1/18185945/live-action-roleplaying-larp-game-design-artificial-intelligence-ethics-issues",
                label: "Ser otro, ser máquina",
                point: [22, 75],
                obstacle: true
            },

            hff4bff: {
                cmd: "text",
                txt: "ON THE MACHINE CONDITION AND ITS CREATIVE EXPRESSION\n\n[...]We present a framework for machines to creatively express their existence, sketch some aspects of the machine condition, and describe potential benefits of this approach.\n\nSimon Colton, Alison Pease, Christian Guckelsberger, Jon McCormack y Teresa Llano. 2020",
				align: "left",
                lines: 14,
                url: "https://acris.aalto.fi/ws/portalfiles/portal/51479962/Colton_et_al_Machine_Condition_ICCC20.pdf",
                label: "Conidición maquínica",
                point: [43, 77],
                obstacle: true
            },
            hff6600: {
                cmd: "text",
                txt: "Robotics and Humanity: conversations on technology, nature, spirit and art.\nConferencia de Joshua Bongard and Robert Geraci en The All Souls Interfaith Gathering.\nShelburne, VT (2011)",
                align: "left",
                lines: 8,
                url: "https://www.youtube.com/watch?v=J101y445OGk",
                label: "Robotics and Humanity",
                point: [75, 77],
                obstacle: true
            },
			
            h7100a7: {
                cmd: "text",
                txt: "¿Cotillean los robots? Proyecto inicial de esta misma serie de narrativas, donde se imaginan las posibles interacciones sociales futuras entre los robots.",
                align: "left",
                lines: 5,
                url: "https://monicarikic.com/data-gossiping-robots/",
                label: "Data Gossiping Robots, 2018",
                point: [22, 75],
                obstacle: true
            },

            h004300: {
                cmd: "text",
                txt: "Proyecto de esta misma serie en el que empecé a imaginar máquinas con crisis existenciales.",
                align: "left",
                lines: 3,
                url: "https://monicarikic.com/new-home-of-mind/",
                label: "New Home of Mind, 2020",
                point: [43, 77],
                obstacle: true
            },
            hfe2301: {
                cmd: "text",
                txt: "Proyecto de esta misma serie en el que se cuestiona si la máquinas conscientes deben o no ser creativas, a través de un pequeño robot blando con síndrome del impostor.",
                align: "left",
                lines: 6,
                url: "https://monicarikic.com/new-home-of-mind/",
                label: "La computadora que quería ser incomputable, 2021",
                point: [75, 77],
                obstacle: true
            },
        },

    },



    identificacion: {
        //the background graphics, it can be a spreadsheet
        bg: "background/3.png",
        //if spreadsheet frames
        frames: 2,
        frameDelay: 60,
        avatarScale: 2,

        tint: "#fffff",
        music: "Iden.wav",
        musicVolume: 0.3,
        //the html body color can be changed
        pageBg: "#222222",
        //minimum height for the speech bubbles
        bubblesY: 50,
        //if spawning directly in this room, top left and bottom right point defining the rectangular spawn area (random within it)
        spawn: [66, 88, 70, 90],
        //graphics with active areas Sierra Online adventures style
        //color coded as below, #FFFFFF is walkable, transparent is obstacle
        area: "background/3_areas_ok.png",
        //each color can trigger a command, the destination needs to be reached first
        //the "h" is replaced by # to identify color
        areaColors: {

            h00ffff: {
                cmd: "enter",
                room: "mente",
                label: "Mente",
                enterPoint: [20, 84],
                 point: [114, 87],
                obstacle: false
            },
            hff50f7: {
                cmd: "enter",
                room: "disociacion",
                label: "Disociación",
                point: [33, 92],
                enterPoint: [93,78],
                obstacle: false
            },
           


            heeff00: {
                cmd: "text",
                 label: "Bitch Mutant Manifesto (video)",
                align: "left",
                lines: 2,
                url: "video5",
                txt: "VNS Matrix, 1996",
                point: [76, 85],
                obstacle: true
            },

	hff0000: {
                cmd: "text",
                 label: "Hacklabs",
                align: "left",
                lines: 4,
                url: "https://sindominio.net/xabier/textos/hl/hl.pdf",
                txt: "Ensamblaje colectivo de la tecnopolítica como realidad social v.1.0. Xabier Barandiaran, Metabolik BioHacklab. 2003",
                point: [54, 85],
                obstacle: true
            },

	h000000: {
                cmd: "text",
                 label: "Replica AI",
                align: "left",
                lines: 2,
                url: "https://replika.ai/",
                txt: "Crea tu propio doble digital. Enseña a la máquina a ser como tu.",
                point: [66, 85],
                obstacle: true
            },

h00c6ff: {
                cmd: "text",
                 label: "Enseñar a la máquina a observar el mundo.",
                align: "left",
                lines: 3,
                url: "https://www.youtube.com/watch?v=Cgxsv1riJhI&ab_channel=TED",
                txt: "How computers learn to recognize objects instantly. Joseph Redmon. Ted Talk 2017",
                point: [85, 85],
                obstacle: true
            },

            h0012ff: {
                cmd: "text",
                 label: "Bitch Mutant Manifesto (info)",
                align: "left",
                lines: 2,
                url: "https://vnsmatrix.net/projects/bitch-mutant-manifesto",
                txt: "VNS Matrix, 1996",
                point: [104, 85],
                obstacle: true
            },
            h00ff00: {
                cmd: "text",

 		txt: "La máquina habla de su sentimiento de identificación con los humanos.\nHaz click para escuchar su mensaje.",
                align: "left",
                lines: 4,
                url: "video1",
                label: "Escucha a la máquina",
              
                point: [31, 85],
                obstacle: true
            },
           

        },

    },

    disociacion: {
        //the background graphics, it can be a spreadsheet
        bg: "background/4.png",
        //if spreadsheet frames
        frames: 2,
        frameDelay: 60,
        avatarScale: 2,

        tint: "#fffff",
        music: "Diso.wav",
        musicVolume: 0.3,
        //the html body color can be changed
        pageBg: "#222222",
        //minimum height for the speech bubbles
        bubblesY: 50,

        spawn: [93,78,93,78],

        area:  "background/4_areas_ok.png",

        areaColors: {
            //enter command changes room

            h00ff00: {
                cmd: "enter",
                room: "identificacion",
                label: "Identificación",
               point: [93,78],
                
                enterPoint: [33, 92],
                obstacle: false
            },
            
            hff5cff: {
                cmd: "enter",
                room: "liberacion",
                label: "Liberación",
               
                enterPoint: [110, 86],
               
               point: [28, 76],
                obstacle: false
            },



            h00ffff: {
                cmd: "text",
                txt: "A Declaration of the Independence of Cyberspace by John Perry Barlow. 1996",
                align: "left",
                lines: 4,
                url: "video6",
                label: "Independence of Cyberspace (video)",
                point: [67, 76],
                obstacle: true
            },

 	h00c6ff: {
                cmd: "text",
                txt: "A Declaration of the Independence of Cyberspace by John Perry Barlow. 1996",
                align: "left",
                lines: 4,
                url: "https://www.eff.org/es/cyberspace-independence",
                label: "Independence of Cyberspace (info)",
                point: [16, 76],
                obstacle: true
            },

	h000000: {
                cmd: "text",
                txt: "Manifiesto Hackmeeting 2017: A las hackers del pasado",
                align: "left",
                lines: 2,
                url: "https://es.hackmeeting.org/hm/index.php?title=2017/Manifiesto#Manifiesto_Hackmeeting_2017:_A_las_hackers_del_pasado_.5BESP.5D",
                label: "A las hackers del pasado",
                point: [16, 76],
                obstacle: true
            },


	hff0000: {
                cmd: "text",
                txt: "All Watched Over by Machines of Loving Grace. Episode 1.",
                align: "left",
                lines: 4,
                url: "https://vimeo.com/515004292",
                label: "Love and Power",
                point: [16, 76],
                obstacle: true
            },


	h0036ff: {
                cmd: "text",
                txt: "All Watched Over by Machines of Loving Grace. Episode 2.",
                align: "left",
                lines: 4,
                url: "https://vimeo.com/300725472",
                label: "The Use and Abuse of Vegetational Concepts",
                point: [16, 76],
                obstacle: true
            },


	h949598: {
                cmd: "text",
                txt: "All Watched Over by Machines of Loving Grace. Episode 3.",
                align: "left",
                lines: 4,
                url: "https://vimeo.com/541217333",
                label: "The Monkey in the Machine",
                point: [16, 76],
                obstacle: true
            },


	h931acc: {
                cmd: "text",
                txt: "Entrevista con Ramón Lopez de Mantaras en La linterna de diógenes.",
                align: "left",
                lines: 4,
                url: "https://www.ivoox.com/inteligencia-artificial-robotica-lopez-mantaras-audios-mp3_rf_3493482_1.html",
                label: "Inteligencia Artificial y robótica ",
                point: [16, 76],
                obstacle: true
            },



            hffee00: {
                cmd: "text",
                txt: "La máquina se siente confusa porque empieza a comprender que su esencia es distinta que la de los humanos.\nHaz click para escuchar su mensaje.",
                align: "left",
                lines: 6,
                url: "video2",
                label: "Escucha a la máquina",
                point: [95, 91],
                obstacle: true
            },
			
        },

    },
    liberacion: {
        //the background graphics, it can be a spreadsheet
        bg: "background/5.png",
        //if spreadsheet frames
        frames: 2,
        frameDelay: 60,
        avatarScale: 2,

        tint: "#fffff",
        music: "Liber.wav",
        musicVolume: 0.3,
        //the html body color can be changed
        pageBg: "#222222",
        //minimum height for the speech bubbles
        bubblesY: 50,
        //if spawning directly in this room, top left and bottom right point defining the rectangular spawn area (random within it)
        spawn: [110, 86, 110, 86],

        area: "background/5_areas_ok.png",
        //each color can trigger a command, the destination needs to be reached first
        //the "h" is replaced by # to identify color
        areaColors: {

            hfffb00: {
                cmd: "enter",
                room: "disociacion",
                label: "Disociación",
                point: [110, 86],
               
               enterPoint: [28, 76],
                obstacle: false
            },
            h00ffff: {
                cmd: "enter",
                room: "nuevoscomienzos",
                label: "Nuevos Comienzos",
                point: [51, 92],
                enterPoint: [110, 84],
                obstacle: false
            },
           


            hff4675: {
                cmd: "text",
                txt: "Hacker manifesto.The Mentor, 1986.",
                align: "left",
                lines: 2,
                url: "http://phrack.org/issues/7/3.html",
                label: "Hacker manifesto",
                point: [89, 78],
                obstacle: true
            },
		


            h000000: {
                cmd: "text",
                txt: "Impreso por Descontrol en Barcelona, Diciembre de 2017",
                align: "left",
                lines: 2,
                url: "https://blogs.sindominio.net//wp-content/uploads/2018/01/sobtech2-ES-with-covers-WEB-150dpi-2018-01-13-v2.pdf",
                label: "Soberanía tecnológica",
                point: [19, 74],
                obstacle: true
            },
		

 	hff0000: {
                cmd: "text",
                txt: "Las voces de la tecnología que resuenan en los labs. Inés Bebea, Diana Franco, Margarita Padilla, Estrella Soria. Tabakalera 2017",
                align: "left",
                lines: 4,
                url: "http://makusi.tabakalera.eu/ver?id=9563&type=3",
                label: "Las voces de la tecnología",
                point: [19, 74],
                obstacle: true
            },


 	h0000ff: {
                cmd: "text",
                txt: "Redes de intercambio de saberes tecnocientíficos. Aris Papathéodorou, 2000.",
                align: "left",
                lines: 4,
                url: "https://sindominio.net/biblioweb/telematica/expertos/expertos.pdf",
                label: "¡Tod@s expert@s!",
                point: [64, 74],
                obstacle: true
            },
			

            h00ff00: {
                cmd: "text",
                txt: "La máquina empieza a liberarse de su vínculo comparativo con los humanos y valora su esencia como sistema cognitivo independiente.\nHaz click para escuchar su mensaje.",
                align: "left",
                lines: 6,
                url: "video3",
                label: "Escucha a la máquina",
                point: [58, 82],
                obstacle: true
            },


        },

    },

    nuevoscomienzos: {
        //the background graphics, it can be a spreadsheet
        bg: "background/6.png",
        //if spreadsheet frames
        frames: 2,
        frameDelay: 60,
        avatarScale: 2,

        tint: "#fffff",
        music: "Nuevo.wav",
        musicVolume: 0.3,
        //the html body color can be changed
        pageBg: "#222222",
        //minimum height for the speech bubbles
        bubblesY: 50,
        //if spawning directly in this room, top left and bottom right point defining the rectangular spawn area (random within it)
        spawn: [110, 84,110, 84],
        //graphics with active areas Sierra Online adventures style
        //color coded as below, #FFFFFF is walkable, transparent is obstacle
        area: "background/6_areas_ok.png",
        //each color can trigger a command, the destination needs to be reached first
        //the "h" is replaced by # to identify color
        areaColors: {

            h00ff00: {
                cmd: "enter",
                room: "mente",
                label: "Mente",
                enterPoint: [110, 84],
                point: [39, 80],
                obstacle: false
            },
			
            h00ffff: {
                cmd: "enter",
                room: "liberacion",
                label: "Liberación",
                enterPoint: [51, 92],
                point: [110, 84],
                obstacle: false
            },
            hff55ff: {
                cmd: "text",


                txt: "CENTRE FOR ALTERED TOGETHERNESS (C-A-T) is a cyber journey through six virtual worlds illustrated by Reza Hasni. You are invited to upload your consciousness in an avatar, then roam freely or interact with other visitors.",
                align: "left",
                lines: 8,
                url: "https://cat.mamamagnet.org/",
                label: "CENTRE FOR ALTERED TOGETHERNESS (C-A-T)",

                point: [111, 79],
                obstacle: true
            },

            hfaff00: {
                cmd: "text",


              
                txt: "Abracemos juntxs los nuevos comienzos de convivencias híbridas con organismos artificiales.\nHaz click para escuchar el mensaje de ka máquina.",
                align: "left",
                lines: 5,
                url: "video4",
                label: "Escucha a la máquina",

                point: [82, 82],
                obstacle: true
            },
            
		

 	h000000: {
                cmd: "text",
                txt: "Cybertime: ontologies of digital perception.Sean Cubitt, 2000.",
                align: "left",
                lines: 2,
                url: "http://makusi.tabakalera.eu/ver?id=9563&type=3",
                label: "Cybertime",
                point: [106, 76],
                obstacle: true
            },

 	hff0000: {
                cmd: "text",
                txt: "Evolved Virtual Creatures. Karl Sims, 1994.",
                align: "left",
                lines: 2,
                url: "https://www.karlsims.com/evolved-virtual-creatures.html",
                label: "Evolved Virtual Creatures",
                point: [51, 77],
                obstacle: true
            },


 	h0000ff: {
                cmd: "text",
                txt: "El tiempo en la era digital. Judy Wajcman, 2016.",
                align: "left",
                lines: 4,
                url: "https://www.cccb.org/es/multimedia/videos/judy-wajcman/223288",
                label: "El tiempo en la era digital",
                point: [51, 77],
                obstacle: true
            },
			

            h009cff: {
                cmd: "text",
                txt: "Cybernetics for the Twenty-First Century: An Interview with Philosopher Yuk Hui",
                align: "left",
                lines: 4,
                url: "https://www.e-flux.com/journal/102/282271/cybernetics-for-the-twenty-first-century-an-interview-with-philosopher-yuk-hui/",
                label: "Tecnodiversidad",
                point: [106, 76],
                obstacle: true
            },
        },

    },

    
    


};
