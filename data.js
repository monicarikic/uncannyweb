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
                txt: "Link3",
                align: "left",
                lines: 4,
                url: " /textos/infografias",
                label: "Link 3",
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
        area: "background/3_areas.png",
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
                txt: "La máquina tiene un mensaje para ti",
                align: "left",
                lines: 2,
                url: "video1",
                label: "Escucha a la máquina",
                point: [76, 85],
                obstacle: true
            },
            h00ff00: {
                cmd: "text",
                txt: "Identifícate con la máquina",
                align: "left",
                lines: 2,
                url: "https://monicarikic.com/identificacion/",
                label: "Interactivo",
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

        area:  "background/4_area.png",

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
                txt: "La máquina te habla",
                align: "left",
                lines: 4,
                url: "video2",
                label: "Escucha a la máquina",
                point: [67, 76],
                obstacle: true
            },
            hffee00: {
                cmd: "text",
                txt: "Habla con la máquina",
                align: "left",
                lines: 2,
                url: "/chatbot",
                label: "Interactivo",
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

        area: "background/5_areas.png",
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
                txt: "Escucha a la máquina",
                align: "left",
                lines: 4,
                url: "video3",
                label: "Escucha a la máquina",
                point: [89, 78],
                obstacle: true
            },
			

            h00ff00: {
                cmd: "text",
                txt: "en construcción",
                align: "left",
                lines: 4,
              
                label: "Interactivo",
                point: [53, 80],
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
        area: "background/6_areas.png",
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


                txt: "Escucha",
                align: "left",
                lines: 5,
                url: "video4",
                label: "Escucha a la máquina",

                point: [111, 79],
                obstacle: true
            },

            hfaff00: {
                cmd: "text",


                txt: "Crea junto a la máquina",
                align: "left",
                lines: 2,
                url: "pinta.html",
                label: "Interactivo",

                point: [82, 82],
                obstacle: true
            },
            h0066ff: {
                cmd: "text",
                txt: "Limbo \nEl gabinete del Doctor Caligari",
                align: "left",
                lines: 2,
                url: "/textos/limbo-cine",
                label: "Limbo / Gabinete del doctor Caligari",
                point: [82, 82],
                obstacle: true
            },
            hff00ff: {
                cmd: "text",
                txt: "Pixels",
                align: "left",
                lines: 4,
                url: "/textos/pixels/",
                label: "Pixels",
                point: [43, 80],
                obstacle: true
            },
            hff9900: {
                cmd: "text",
                txt: "Fleischer Studios,\nBetty Boop: Red Hot Mama, 1934\n Película",
                align: "left",
                lines: 4,
                url: "/textos/betty-boop-cine",
                label: "Betty Boop",
                point: [43, 80],
                obstacle: true
            },
        },

    },

    
    


};