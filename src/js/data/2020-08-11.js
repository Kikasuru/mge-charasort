dataSetVersion = "2020-08-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name:"Filter by Type",
        key:"type",
        tooltip:"Check this to restrict to certain types.",
        checked:false,
        sub:[
            {name:"Amphibian",key:"amphibian"},
            {name:"Angel",key:"angel"},
            {name:"Aquatic",key:"aquatic"},
            {name:"Beastman",key:"beastman"},
            {name:"Birdman",key:"birdman"},
            {name:"Bug",key:"bug"},
            {name:"Crustacean",key:"crustacean"},
            {name:"Demihuman",key:"demihuman"},
            {name:"Demon Beast",key:"demonbeast"},
            {name:"Demon",key:"demon"},
            {name:"Dwarf",key:"dwarf"},
            {name:"Elemental",key:"elemental"},
            {name:"Elf",key:"elf"},
            {name:"Ex-Giant",key:"exgiant"},
            {name:"Fairy",key:"fairy"},
            {name:"Fish",key:"fish"},
            {name:"Magic Material",key:"magicmaterial"},
            {name:"Majin",key:"majin"},
            {name:"Mermaid",key:"mermaid"},
            {name:"Mollusc",key:"mollusc"},
            {name:"Plant",key:"plant"},
            {name:"Reptile",key:"reptile"},
            {name:"Semiliquid",key:"semiliquid"},
            {name:"Shapeshifter",key:"shapeshifter"},
            {name:"Single-Eyed Demihuman",key:"singleeyed"},
            {name:"Tentacle",key:"tentacle"},
            {name:"Undead",key:"undead"}
        ]
    },
    {
        name:"Filter by Year",
        key:"year",
        checked:false,
        sub:[
            {name:"2007",key:"2007"},
            {name:"2008",key:"2008"},
            {name:"2009",key:"2009"},
            {name:"2010",key:"2010"},
            {name:"2011",key:"2011"},
            {name:"2012",key:"2012"},
            {name:"2013",key:"2013"},
            {name:"2014",key:"2014"},
            {name:"2015",key:"2015"},
            {name:"2016",key:"2016"},
            {name:"2017",key:"2017"},
            {name:"2018",key:"2018"},
            {name:"2019",key:"2019"},
            {name:"2020",key:"2020"}
        ]
    }/*,
    {
        name:"Include Characters from the Storybooks.",
        tag:"book",
        checked:false
    }*/
];

dataSet[dataSetVersion].characterData = [
    //2007
    {
        name:"Honey Bee",
        img:"https://i.imgur.com/rDCtvSh.png",
        opts:{type:["bug"],year:["2007"]}
    },
    {
        name:"Alraune",
        img:"https://i.imgur.com/Km970i8.png",
        opts:{type:["plant"],year:["2007"]}
    },
    {
        name:"Giant Ant",
        img:"https://i.imgur.com/K2H6I4j.png",
        opts:{type:["bug"],year:["2007"]}
    },
    {
        name:"Pixie",
        img:"https://i.imgur.com/yG4iXi5.png",
        opts:{type:["fairy"],year:["2007"]}
    },
    {
        name:"Echidna",
        img:"https://i.imgur.com/5KMj4le.png",
        opts:{type:["reptile"],year:["2007"]}
    },
    {
        name:"Zombie",
        img:"https://i.imgur.com/vyZbCww.png",
        opts:{type:["undead"],year:["2007"]}
    },
    {
        name:"Cockatrice",
        img:"https://i.imgur.com/kdyWxTE.png",
        opts:{type:["birdman"],year:["2007"]}
    },
    {
        name:"Werewolf",
        img:"https://i.imgur.com/vj43pxT.png",
        opts:{type:["beastman"],year:["2007"]}
    },
    {
        name:"Imp",
        img:"https://i.imgur.com/nWBz4oU.png",
        opts:{type:["demon"],year:["2007"]}
    },

    //2008
    {
        name:"Werebat",
        img:"https://i.imgur.com/6kswnt6.png",
        opts:{type:["beastman"],year:["2008"]}
    },
    {
        name:"Hornet",
        img:"https://i.imgur.com/gUayNsz.png",
        opts:{type:["bug"],year:["2008"]}
    },
    {
        name:"Red Oni",
        img:"https://i.imgur.com/7k6WBZM.png",
        opts:{type:["demihuman"],year:["2008"]}
    },
    {
        name:"Giant Slug",
        img:"https://i.imgur.com/NtXh47U.png",
        opts:{type:["mollusc"],year:["2008"]}
    },
    {
        name:"Sea Slime",
        img:"https://i.imgur.com/lDA0gVI.png",
        opts:{type:["semiliquid"],year:["2008"]}
    },
    {
        name:"Mimic",
        img:"https://i.imgur.com/XGohrBo.png",
        opts:{type:["shapeshifter"],year:["2008"]}
    },
    {
        name:"Crow Tengu",
        img:"https://i.imgur.com/wwQ7Yhi.png",
        opts:{type:["birdman"],year:["2008"]}
    },
    {
        name:"Wererabbit",
        img:"https://i.imgur.com/Y3o86za.png",
        opts:{type:["beastman"],year:["2008"]}
    },
    {
        name:"Jinn of the Jar",
        img:"https://i.imgur.com/6yjz160.png",
        opts:{type:["shapeshifter"],year:["2008"]}
    },
    {
        name:"Slime",
        img:"https://i.imgur.com/BP6oFnw.png",
        opts:{type:["semiliquid"],year:["2008"]}
    },
    {
        name:"Matango",
        img:"https://i.imgur.com/J3JkNlp.png",
        opts:{type:["plant"],year:["2008"]}
    },
    {
        name:"Dryad",
        img:"https://i.imgur.com/vjV1p6R.png",
        opts:{type:["plant"],year:["2008"]}
    },
    {
        name:"Lesser Succubus",
        img:"https://i.imgur.com/e1IGAo4.png",
        opts:{type:["demon"],year:["2008"]}
    },
    {
        name:"Arachne",
        img:"https://i.imgur.com/AvhbRjS.png",
        opts:{type:["bug"],year:["2008"]}
    },
    {
        name:"Bubble Slime",
        img:"https://i.imgur.com/OfMWiss.png",
        opts:{type:["semiliquid"],year:["2008"]}
    },
    {
        name:"Centaur",
        img:"https://i.imgur.com/OpCqF7f.png",
        opts:{type:["beastman"],year:["2008"]}
    },
    {
        name:/*Not so*/"Large Mouse",
        img:"https://i.imgur.com/0cOkJCK.png",
        opts:{type:["beastman"],year:["2008"]}
    },
    {
        name:"Cyclops",
        img:"https://i.imgur.com/PxW44QC.png",
        opts:{type:["exgiant"],year:["2008"]}
    },

    //2009
    {
        name:"Elf",
        img:"https://i.imgur.com/jX1qoCE.png",
        opts:{type:["elf"],year:["2009"]}
    },
    {
        name:"Dark Elf",
        img:"https://i.imgur.com/LcmqdKs.png",
        opts:{type:["elf"],year:["2009"]}
    },
    {
        name:"Fairy",
        img:"https://i.imgur.com/kJc3bvy.png",
        opts:{type:["fairy"],year:["2009"]}
    },
    {
        name:"Youko",
        img:"https://i.imgur.com/p0tfdxw.png",
        opts:{type:["beastman"],year:["2009"]}
    },
    {
        name:"Werecat",
        img:"https://i.imgur.com/NpGuPIb.png",
        opts:{type:["beastman"],year:["2009"]}
    },
    {
        name:"Roper",
        img:"https://i.imgur.com/GproOSe.png",
        opts:{type:["tentacle"],year:["2009"]}
    },
    {
        name:"Succubus",
        img:"https://i.imgur.com/64rfuwG.png",
        opts:{type:["demon"],year:["2009"]}
    },
    {
        name:"Baphomet",
        img:"https://i.imgur.com/mrwjFxw.png",
        opts:{type:["demonbeast"],year:["2009"]}
    },
    {
        name:"Witch",
        img:"https://i.imgur.com/94R9B4T.png",
        opts:{type:["majin"],year:["2009"]}
    },
    {
        name:"Kappa",
        img:"https://i.imgur.com/EmZKdAc.png",
        opts:{type:["aquatic"],year:["2009"]}
    },
    {
        name:"Jorou-Gumo",
        img:"https://i.imgur.com/jgM4ldT.png",
        opts:{type:["bug"],year:["2009"]}
    },
    {
        name:"Inari",
        img:"https://i.imgur.com/KJJ8God.png",
        opts:{type:["beastman"],year:["2009"]}
    },
    {
        name:"Dullahan",
        img:"https://i.imgur.com/j7bhO1F.png",
        opts:{type:["undead"],year:["2009"]}
    },
    {
        name:"Queen Slime",
        img:"https://i.imgur.com/L9bANA8.png",
        opts:{type:["semiliquid"],year:["2009"]}
    },
    {
        name:"Holstaur",
        img:"https://i.imgur.com/sflutnM.png",
        opts:{type:["beastman"],year:["2009"]}
    },
    {
        name:"Minotaur",
        img:"https://i.imgur.com/E3AfzRl.png",
        opts:{type:["beastman"],year:["2009"]}
    },
    {
        name:"Angel",
        img:"https://i.imgur.com/kGd13vZ.png",
        opts:{type:["angel"],year:["2009"]}
    },
    {
        name:"Dark Angel",
        img:"https://i.imgur.com/VFSEs3W.png",
        opts:{type:["angel"],year:["2009"]}
    },
    {
        name:"Amazoness",
        img:"https://i.imgur.com/xXFfDl3.png",
        opts:{type:["demon"],year:["2009"]}
    },
    {
        name:"Leanan Sidhe",
        img:"https://i.imgur.com/H3M7Tte.png",
        opts:{type:["fairy"],year:["2009"]}
    },
    {
        name:"Orc",
        img:"https://i.imgur.com/oZPUXwM.png",
        opts:{type:["beastman"],year:["2009"]}
    },
    {
        name:"Red Slime",
        img:"https://i.imgur.com/vr820lx.png",
        opts:{type:["semiliquid"],year:["2009"]}
    },
    {
        name:"Lizardman",
        img:"https://i.imgur.com/VrP92S8.png",
        opts:{type:["reptile"],year:["2009"]}
    },
    {
        name:"Mummy",
        img:"https://i.imgur.com/WbLq4CK.png",
        opts:{type:["undead"],year:["2009"]}
    },
    {
        name:"Skeleton", //THE PIIIIZA HE-MAN! EAT IT!
        img:"https://i.imgur.com/pTf2IHL.png",
        opts:{type:["undead"],year:["2009"]}
    },
    {
        name:"Nightmare",
        img:"https://i.imgur.com/NHUK1GS.png",
        opts:{type:["beastman"],year:["2009"]}
    },
    {
        name:"Ant Arachne",
        img:"https://i.imgur.com/Yg9X8z7.png",
        opts:{type:["bug"],year:["2009"]}
    },
    {
        name:"Alice",
        img:"https://i.imgur.com/PZPB7py.png",
        opts:{type:["demon"],year:["2009"]}
    },
    {
        name:"Kesaran Pasaran",
        img:"https://i.imgur.com/IyCZhRP.png",
        opts:{type:["plant"],year:["2009"]}
    },
    {
        name:"Mandragora",
        img:"https://i.imgur.com/bxKA2W6.png",
        opts:{type:["plant"],year:["2009"]}
    },
    {
        name:"Sphinx",
        img:"https://i.imgur.com/fy95COm.png",
        opts:{type:["beastman"],year:["2009"]}
    },
    {
        name:"Beelzebub",
        img:"https://i.imgur.com/RIFRpAO.png",
        opts:{type:["bug"],year:["2009"]}
    },
    {
        name:"Anubis",
        img:"https://i.imgur.com/Skp72Wd.png",
        opts:{type:["beastman"],year:["2009"]}
    },
    {
        name:"Dark Slime",
        img:"https://i.imgur.com/S95NDYQ.png",
        opts:{type:["semiliquid"],year:["2009"]}
    },
    {
        name:"Ghost",
        img:"https://i.imgur.com/CuDqOsm.png",
        opts:{type:["undead"],year:["2009"]}
    },
    {
        name:"Siren",
        img:"https://i.imgur.com/cD2Yb4q.png",
        opts:{type:["birdman"],year:["2009"]}
    },
    {
        name:"Vampire",
        img:"https://i.imgur.com/eIdCnDx.png",
        opts:{type:["undead"],year:["2009"]}
    },

    //2010
    {
        name:"Dark Priest",
        img:"https://i.imgur.com/qGDLE4f.png",
        opts:{type:["demon"],year:["2010"]}
    },
    {
        name:"Unicorn",
        img:"https://i.imgur.com/aNNsZ1p.png",
        opts:{type:["beastman"],year:["2010"]}
    },
    {
        name:"Medusa",
        img:"https://i.imgur.com/OYZVrF0.png",
        opts:{type:["reptile"],year:["2010"]}
    },
    {
        name:"Girtablilu",
        img:"https://i.imgur.com/S5nFIL4.png",
        opts:{type:["bug"],year:["2010"]}
    },
    {
        name:"Yuki-Onna",
        img:"https://i.imgur.com/Gt6ZU8n.png",
        opts:{type:["elemental"],year:["2010"]}
    },
    {
        name:"Sea Bishop",
        img:"https://i.imgur.com/HZu5Ug3.png",
        opts:{type:["fish"],year:["2010"]}
    },
    {
        name:"Merrow",
        img:"https://i.imgur.com/555Gn1t.png",
        opts:{type:["fish"],year:["2010"]}
    },
    {
        name:"Charybdis",
        img:"https://i.imgur.com/lSVF5kZ.png",
        opts:{type:["shapeshifter"],year:["2010"]}
    },
    {
        name:"Scylla",
        img:"https://i.imgur.com/XKS9fdQ.png",
        opts:{type:["mollusc"],year:["2010"]}
    },
    {
        name:"Nereid",
        img:"https://i.imgur.com/eO5FOrf.png",
        opts:{type:["aquatic"],year:["2010"]}
    },
    {
        name:"Mermaid",
        img:"https://i.imgur.com/6veRRKG.png",
        opts:{type:["fish"],year:["2010"]}
    },
    {
        name:"Dragon",
        img:"https://i.imgur.com/IwP4dYv.png",
        opts:{type:["reptile"],year:["2010"]}
    },
    {
        name:"Dark Matter",
        img:"https://i.imgur.com/aVgVfaZ.png",
        opts:{type:["elemental"],year:["2010"]}
    },
    {
        name:"Undine",
        img:"https://i.imgur.com/VKy02S6.png",
        opts:{type:["elemental"],year:["2010"]}
    },
    {
        name:"Ignis",
        img:"https://i.imgur.com/rTNzFEW.png",
        opts:{type:["elemental"],year:["2010"]}
    },
    {
        name:"Sylph",
        img:"https://i.imgur.com/A6v1o0N.png",
        opts:{type:["elemental"],year:["2010"]}
    },
    {
        name:"Gnome",
        img:"https://i.imgur.com/JeWL0vl.png",
        opts:{type:["elemental"],year:["2010"]}
    },
    {
        name:"Dwarf",
        img:"https://i.imgur.com/BgWzEHm.png",
        opts:{type:["dwarf"],year:["2010"]}
    },
    {
        name:"Ogre", //WHAT ARE YOU DOUING IN MAH SWAAAAAAAMP?!
        img:"https://i.imgur.com/NOkula8.png",
        opts:{type:["demihuman"],year:["2010"]}
    },
    {
        name:"Sahuagin",
        img:"https://i.imgur.com/6XBVlar.png",
        opts:{type:["aquatic"],year:["2010"]}
    },
    {
        name:"Grizzly",
        img:"https://i.imgur.com/AU2IcUI.png",
        opts:{type:["beastman"],year:["2010"]}
    },

    //2011
    {
        name:"Hobgoblin",
        img:"https://i.imgur.com/lJHDfkb.png",
        opts:{type:["demihuman"],year:["2011"]}
    },
    {
        name:"Goblin",
        img:"https://i.imgur.com/bjfh8VY.png",
        opts:{type:["demihuman"],year:["2011"]}
    },
    {
        name:"Weresheep",
        img:"https://i.imgur.com/PTEnBNo.png",
        opts:{type:["beastman"],year:["2011"]}
    },
    {
        name:"Mantis",
        img:"https://i.imgur.com/ZjzaKmR.png",
        opts:{type:["bug"],year:["2011"]}
    },
    {
        name:"Ghoul",
        img:"https://i.imgur.com/xh96VOk.png",
        opts:{type:["undead"],year:["2011"]}
    },
    {
        name:"Alp", //The main reason I want MGE to exist.
        img:"https://i.imgur.com/4PhJJ6z.png",
        opts:{type:["demon"],year:["2011"]}
        /*
            I mean holy shit, a human male can turn into a monster girl if they are basically trans?
            Sign me the fuck up! Do you know how much HRT is?? Calling all Succubi to come for me and turn me into an Alp.

            Have her touch my nipples, have her tongue entertwining with mine,
            and once I have it, have her stick her fingers into my pussy..

            It would be my damn dream.

            ..and then there's this quote from the Alp's entry

                "Additionally, there are also alps that awaken to the joy of being a woman through this process.
                In that case, their body changes, rapidly growing voluptuous to invite men and their heart changes
                to be like that of a woman, resulting in an alp that's even more feminine than a real woman and
                even more lewd and lustful than a succubus."

            SIGN ME THE FUCK UP!!!
            I'll have fat tits in absolutely no time if the Demon Realm was real.

            fuck man, i just got dysphoria from writing that
            shit
        */
    },
    {
        name:"Salamander",
        img:"https://i.imgur.com/7k4TODW.png",
        opts:{type:["reptile"],year:["2011"]}
    },
    {
        name:"Doppelganger",
        img:"https://i.imgur.com/PRv1ixi.png",
        opts:{type:["undead"],year:["2011"]} //i don't get why she's undead and not shapeshifter but ok
    },
    {
        name:"Lilim",
        img:"https://i.imgur.com/VCrXTwc.png",
        opts:{type:["demon"],year:["2011"]}
    },
    {
        name:"Nekomata",
        img:"https://i.imgur.com/5n7uFZ6.png",
        opts:{type:["beastman"],year:["2011"]}
    },
    {
        name:"Nureonago",
        img:"https://i.imgur.com/4LTEJYT.png",
        opts:{type:["semiliquid"],year:["2011"]}
    },
    {
        name:"Ushi-Oni",
        img:"https://i.imgur.com/bItY0VC.png",
        opts:{type:["bug"],year:["2011"]}
    },
    {
        name:"Chochin-Obake",
        img:"https://i.imgur.com/vwnh74N.png",
        opts:{type:["magicmaterial"],year:["2011"]}
    },
    {
        name:"Blue Oni",
        img:"https://i.imgur.com/iPEyxTS.png",
        opts:{type:["demihuman"],year:["2011"]}
    },
    {
        name:"Shirohebi",
        img:"https://i.imgur.com/yaFC9zq.png",
        opts:{type:["reptile"],year:["2011"]}
    },

    //2012
    {
        name:"Ryu",
        img:"https://i.imgur.com/5DtY8wE.png",
        opts:{type:["reptile"],year:["2012"]}
    },
    {
        name:"Kitsune-bi",
        img:"https://i.imgur.com/TukLmW2.png",
        opts:{type:["elemental"],year:["2012"]}
    },
    {
        name:"Kitsune-tsuki",
        img:"https://i.imgur.com/0DvUnLD.png",
        opts:{type:["majin"],year:["2012"]}
    },
    {
        name:"Gyoubu Danuki",
        img:"https://i.imgur.com/MTqCtwJ.png",
        opts:{type:["beastman"],year:["2012"]}
    },
    {
        name:"Oomukade",
        img:"https://i.imgur.com/ZnkHfEd.png",
        opts:{type:["bug"],year:["2012"]}
    },
    {
        name:"Kunoichi",
        img:"https://i.imgur.com/VOq1BGd.png",
        opts:{type:["demon"],year:["2012"]}
    },
    {
        name:"Arch Imp",
        img:"https://i.imgur.com/zDvGlko.png",
        opts:{type:["demon"],year:["2012"]}
    },
    {
        name:"Bicorn",
        img:"https://i.imgur.com/Y96PE40.png",
        opts:{type:["beastman"],year:["2012"]}
    },
    {
        name:"Dhampir",
        img:"https://i.imgur.com/FD9ifGx.png",
        opts:{type:["majin"],year:["2012"]}
    },
    {
        name:"Wyvern",
        img:"https://i.imgur.com/zXzoXtD.png",
        opts:{type:["reptile"],year:["2012"]}
    },
    {
        name:"Wurm",
        img:"https://i.imgur.com/KnBSeLz.png",
        opts:{type:["reptile"],year:["2012"]}
    },
    {
        name:"Yeti",
        img:"https://i.imgur.com/DGrsKVn.png",
        opts:{type:["beastman"],year:["2012"]}
    },
    {
        name:"Glacies",
        img:"https://i.imgur.com/g411JIF.png",
        opts:{type:["elemental"],year:["2012"]}
    },

    //2013 - AKA The Good Year
    {
        name:"Selkie",
        img:"https://i.imgur.com/oIQOuSg.png",
        opts:{type:["beastman"],year:["2013"]}
    }, //haha funny hell number
    {
        name:"Pharaoh",
        img:"https://i.imgur.com/gdwvlOi.png",
        opts:{type:["undead"],year:["2013"]}
    },
    {
        name:"Apophis",
        img:"https://i.imgur.com/G95jrho.png",
        opts:{type:["reptile"],year:["2013"]}
    },
    {
        name:"Khepri",
        img:"https://i.imgur.com/YquEAWb.png",
        opts:{type:["bug"],year:["2013"]}
    },
    {
        name:"Sandworm",
        img:"https://i.imgur.com/Geip7kv.png",
        opts:{type:["bug"],year:["2013"]}
    },
    {
        name:"Thunderbird",
        img:"https://i.imgur.com/z2hvQzF.png",
        opts:{type:["birdman"],year:["2013"]}
    },
    {
        name:"Kraken",
        img:"https://i.imgur.com/BXtV5Ph.png",
        opts:{type:["mollusc"],year:["2013"]}
    },
    {
        name:"Living Doll",
        img:"https://i.imgur.com/NYd0kKa.png",
        opts:{type:["magicmaterial"],year:["2013"]}
    },
    {
        name:"Manticore",
        img:"https://i.imgur.com/9Bz1Qvb.png",
        opts:{type:["demonbeast"],year:["2013"]}
    },
    {
        name:"Lich",
        img:"https://i.imgur.com/3VLXhVP.png",
        opts:{type:["undead"],year:["2013"]}
    },
    {
        name:"Wight", //tbh i don't get the appeal
        img:"https://i.imgur.com/oYtPhEM.png",
        opts:{type:["undead"],year:["2013"]}
        //she does seem like someone who would "OOOOOHOHOHOHOHO!" though

        //nvm i get the appeal
    },
    {
        name:"Jinko",
        img:"https://i.imgur.com/LqZCXMc.png",
        opts:{type:["beastman"],year:["2013"]}
    },
    {
        name:"Gazer", //damn cacos https://www.youtube.com/watch?v=4n4yogKbBT0
        img:"https://i.imgur.com/ClmrRKA.png",
        opts:{type:["singleeyed"],year:["2013"]}
        //I'M SORRY APMAX
    },
    {
        name:"Parasite Slime / Slime Carrier",
        img:"https://i.imgur.com/AvxCysh.png",
        opts:{type:["semiliquid","majin"],year:["2013"]}
    },
    {
        name:"Mothman",
        img:"https://i.imgur.com/7fMaU2K.png",
        opts:{type:["bug"],year:["2013"]}
    },
    {
        name:"Devil",
        img:"https://i.imgur.com/WZCsPLF.png",
        opts:{type:["demon"],year:["2013"]}
    },
    {
        name:"Kikimora", //BEST. GIRL.
        img:"https://i.imgur.com/aqtkYGt.png",
        opts:{type:["beastman"],year:["2013"]}
    },
    {
        name:"Cheshire Cat",
        img:"https://i.imgur.com/ekDXFwX.png",
        opts:{type:["beastman"],year:["2013"]}
    },
    {
        name:"March Hare",
        img:"https://i.imgur.com/4GfLY43.png",
        opts:{type:["beastman"],year:["2013"]}
    },
    {
        name:"Dormouse",
        img:"https://i.imgur.com/Qy0rl08.png",
        opts:{type:["beastman"],year:["2013"]}
    },
    {
        name:"Mad Hatter",
        img:"https://i.imgur.com/AraEptH.png",
        opts:{type:["majin"],year:["2013"]}
    },

    //2014
    {
        name:"Jabberwock",
        img:"https://i.imgur.com/qzwLVpI.png",
        opts:{type:["reptile"],year:["2014"]}
    },
    {
        //   crab          crab crab        crab      scare
        name:"Cancer", // crab         crab   frighten     crab
        //crab            crab           scare frighten         crab
        img:"https://i.imgur.com/ZPVlKpt.png", // crab     hand?  hand
        // hand        hand hand          hand     hand          hand hand
        opts:{type:["crustacean"],year:["2014"]} //     hand
    },
    {
        name:"Lava Golem",
        img:"https://i.imgur.com/uYUMCBM.png",
        opts:{type:["magicmaterial"],year:["2014"]}
    },
    {
        name:"Tentacle",
        img:"https://i.imgur.com/xrwaiG3.png",
        opts:{type:["plant"],year:["2014"]}
    },
    {
        name:"Dark Valkyrie",
        img:"https://i.imgur.com/PyYyEsi.png",
        opts:{type:["angel"],year:["2014"]}
    },
    {
        name:"Valkyrie",
        img:"https://i.imgur.com/yJuaQ43.png",
        opts:{type:["angel"],year:["2014"]}
    },
    {
        name:"Familiar",
        img:"https://i.imgur.com/i3knR6R.png",
        opts:{type:["demonbeast"],year:["2014"]}
    },
    {
        name:"Troll",
        img:"https://i.imgur.com/PlhrdRI.png",
        opts:{type:["demihuman"],year:["2014"]}
    },
    {
        name:"Liliraune",
        img:"https://i.imgur.com/tIJIztN.png",
        opts:{type:["plant"],year:["2014"]}
    },
    {
        name:"Karakasa-Obake",
        img:"https://i.imgur.com/gHWKKCe.png",
        opts:{type:["magicmaterial"],year:["2014"]}
    },
    {
        name:"Kejourou",
        img:"https://i.imgur.com/IfPK2C1.png",
        opts:{type:["majin"],year:["2014"]}
    },
    {
        name:"Akaname",
        img:"https://i.imgur.com/VLhvBlS.png",
        opts:{type:["majin"],year:["2014"]}
    },
    {
        name:"Chimaera",
        img:"https://i.imgur.com/SQ3Mdiq.png",
        opts:{type:["demonbeast"],year:["2014"]}
    },
    {
        name:"Hinezumi",
        img:"https://i.imgur.com/QPspUDm.png",
        opts:{type:["beastman"],year:["2014"]}
    },
    {
        name:"Ren Xiongmao",
        img:"https://i.imgur.com/Rpgv6s9.png",
        opts:{type:["beastman"],year:["2014"]}
    },
    {
        name:"Hellhound",
        img:"https://i.imgur.com/cn1bT7d.png",
        opts:{type:["beastman"],year:["2014"]}
    },

    //2015
    {
        name:"Barometz",
        img:"https://i.imgur.com/nSv91KH.png",
        opts:{type:["plant"],year:["2015"]}
    },
    {
        name:"Gandharva",
        img:"https://i.imgur.com/ff1HPrA.png",
        opts:{type:["birdman"],year:["2015"]}
    },
    {
        name:"Apsara",
        img:"https://i.imgur.com/cWhyuxs.png",
        opts:{type:["aquatic"],year:["2015"]}
    },
    {
        name:"Cait Sith",
        img:"https://i.imgur.com/tclmAdE.png",
        opts:{type:["beastman"],year:["2015"]}
    },
    {
        name:"Will-o-the-Wisp",
        img:"https://i.imgur.com/D11iSoV.png",
        opts:{type:["undead"],year:["2015"]}
    },
    {
        name:"Kakuen",
        img:"https://i.imgur.com/WL9wtaT.png",
        opts:{type:["beastman"],year:["2015"]}
    },
    {
        name:"Houri",
        img:"https://i.imgur.com/fw31yVC.png",
        opts:{type:["angel"],year:["2015"]}
    },
    {
        name:"Cupid",
        img:"https://i.imgur.com/MzpzwJV.png",
        opts:{type:["angel"],year:["2015"]}
    },
    {
        name:"Mindflayer",
        img:"https://i.imgur.com/zQioh55.png",
        opts:{type:["mollusc"],year:["2015"]}
    },
    {
        name:"Wendigo",
        img:"https://i.imgur.com/CDMhca3.png",
        opts:{type:["beastman"],year:["2015"]}
    },
    {
        name:"Shoggoth", //FUCK YOU
        img:"https://i.imgur.com/hXMen7m.png",
        opts:{type:["semiliquid"],year:["2015"]}
    },
    {
        name:"Kobold",
        img:"https://i.imgur.com/qgFArZp.png",
        opts:{type:["beastman"],year:["2015"]}
    },
    {
        name:"Soldier Beetle",
        img:"https://i.imgur.com/Xag5EHf.png",
        opts:{type:["bug"],year:["2015"]}
    },
    {
        name:"Mucus Toad",
        img:"https://i.imgur.com/ROOC0pn.png",
        opts:{type:["amphibian"],year:["2015"]}
    },
    {
        name:"Demon",
        img:"https://i.imgur.com/7PXUVMb.png",
        opts:{type:["demon"],year:["2015"]}
    },
    {
        name:"Titania",
        img:"https://i.imgur.com/p5qcH3Z.png",
        opts:{type:["fairy"],year:["2015"]}
    },
    {
        name:"Jiangshi",
        img:"https://i.imgur.com/MqJ1kn0.png",
        opts:{type:["undead"],year:["2015"]}
    },
    {
        name:"Jubjub",
        img:"https://i.imgur.com/5hff2Xm.png",
        opts:{type:["birdman"],year:["2015"]}
    },
    {
        name:"Humpty Egg",
        img:"https://i.imgur.com/gVgOZyj.png",
        opts:{type:["semiliquid"],year:["2015"]}
    },
    {
        name:"Raiju",
        img:"https://i.imgur.com/xIwc9Tl.png",
        opts:{type:["beastman"],year:["2015"]}
    },
    {
        name:"Vamp Mosquito",
        img:"https://i.imgur.com/TrzEFpV.png",
        opts:{type:["bug"],year:["2015"]}
    },
    {
        name:"Cu Sith",
        img:"https://i.imgur.com/lD4aWos.png",
        opts:{type:["beastman"],year:["2015"]}
    },

    //2016
    {
        name:"Satyros",
        img:"https://i.imgur.com/D59Wgli.png",
        opts:{type:["beastman"],year:["2016"]}
    },
    {
        name:"Flow Kelp",
        img:"https://i.imgur.com/JcI4Dju.png",
        opts:{type:["plant"],year:["2016"]}
    },
    {
        name:"Hakutaku",
        img:"https://i.imgur.com/jtViMTO.png",
        opts:{type:["beastman"],year:["2016"]}
    },
    {
        name:"Basilisk",
        img:"https://i.imgur.com/CrV3Y0w.png",
        opts:{type:["reptile"],year:["2016"]}
    },
    {
        name:"Living Armor",
        img:"https://i.imgur.com/ucczJXW.png",
        opts:{type:["magicmaterial"],year:["2016"]}
    },
    {
        name:"Cursed Sword",
        img:"https://i.imgur.com/ZVkS6vw.png",
        opts:{type:["magicmaterial"],year:["2016"]}
    },
    {
        name:"Ittan-momen",
        img:"https://i.imgur.com/KGS9kpA.png",
        opts:{type:["magicmaterial"],year:["2016"]}
    },
    {
        name:"Unagi Joro",
        img:"https://i.imgur.com/twaR0SE.png",
        opts:{type:["mermaid"],year:["2016"]}
    },
    {
        name:"Golem",
        img:"https://i.imgur.com/Zaz0dSt.png",
        opts:{type:["magicmaterial"],year:["2016"]}
    },
    {
        name:"Umi Osho",
        img:"https://i.imgur.com/h9ine0U.png",
        opts:{type:["aquatic"],year:["2016"]}
    },
    {
        name:"Otohime",
        img:"https://i.imgur.com/oErOuio.png",
        opts:{type:["mermaid"],year:["2016"]}
    },
    {
        name:"Redcap",
        img:"https://i.imgur.com/LMAqKgx.png",
        opts:{type:["demihuman"],year:["2016"]}
    },
    {
        name:"White Horn",
        img:"https://i.imgur.com/EZgAwO8.png",
        opts:{type:["beastman"],year:["2016"]}
    },
    {
        name:"Phantom",
        img:"https://i.imgur.com/khnULKT.png",
        opts:{type:["undead"],year:["2016"]}
    },
    {
        name:"Ice Queen",
        img:"https://i.imgur.com/9lACdFj.png",
        opts:{type:["elemental"],year:["2016"]}
    },
    {
        name:"Griffon",
        img:"https://i.imgur.com/5I8Z2pH.png",
        opts:{type:["demonbeast"],year:["2016"]}
    },
    {
        name:"Trumpart",
        img:"https://i.imgur.com/PhXsa0f.png",
        opts:{type:["majin"],year:["2016"]}
    },
    {
        name:"Dorome",
        img:"https://i.imgur.com/VM5YgIQ.png",
        opts:{type:["elemental"],year:["2016"]}
    },

    //2017
    {
        name:"Atlach-Nacha",
        img:"https://i.imgur.com/5ciEfjT.png",
        opts:{type:["bug"],year:["2017"]}
    },
    {
        name:"Dark Mage",
        img:"https://i.imgur.com/v5K9uWd.png",
        opts:{type:["majin"],year:["2017"]}
    },
    {
        name:"Mershark",
        img:"https://i.imgur.com/KAiiL0P.png",
        opts:{type:["fish"],year:["2017"]}
    },
    {
        name:"Dragon Zombie",
        img:"https://i.imgur.com/D3Bjb63.png",
        opts:{type:["undead"],year:["2017"]}
    },
    {
        name:"Gremlin",
        img:"https://i.imgur.com/fgPSoXI.png",
        opts:{type:["demon"],year:["2017"]}
    },
    {
        name:"Automaton", //She can run Mario 64 and I think that's great.
        img:"https://i.imgur.com/ecDhTLp.png",
        opts:{type:["magicmaterial"],year:["2017"]}
    },
    {
        name:"Ratatoskr",
        img:"https://i.imgur.com/wgMJz0h.png",
        opts:{type:["beastman"],year:["2017"]}
    },
    {
        name:"Ochimusha",
        img:"https://i.imgur.com/M3vovf1.png",
        opts:{type:["undead"],year:["2017"]}
    },
    {
        name:"Nurarihyon",
        img:"https://i.imgur.com/xVw15bk.png",
        opts:{type:["majin"],year:["2017"]}
    },
    {
        name:"Devil Bug",
        img:"https://i.imgur.com/XS2xfUe.png",
        opts:{type:["bug"],year:["2017"]}
    },
    {
        name:"Harpy",
        img:"https://i.imgur.com/2kR9MMv.png",
        opts:{type:["birdman"],year:["2007","2017"]}
    },
    {
        name:"Black Harpy",
        img:"https://i.imgur.com/FhTy91h.png",
        opts:{type:["birdman"],year:["2007","2017"]}
    },
    {
        name:"Tritonia",
        img:"https://i.imgur.com/qNT7tfi.png",
        opts:{type:["mollusc"],year:["2017"]}
    },
    {
        name:"Kamaitachi A",
        img:"https://i.imgur.com/OfoB2N0.png",
        opts:{type:["beastman"],year:["2017"]}
    },
    {
        name:"Kamaitachi B",
        img:"https://i.imgur.com/1HpNg7r.png",
        opts:{type:["beastman"],year:["2017"]}
    },
    {
        name:"Kamaitachi C",
        img:"https://i.imgur.com/sDl3Qbq.png",
        opts:{type:["beastman"],year:["2017"]}
    },
    {
        name:"Lamia",
        img:"https://i.imgur.com/mgjgTJn.png",
        opts:{type:["reptile"],year:["2007","2017"]}
    },
    {
        name:"Night Gaunt",
        img:"https://i.imgur.com/NN0GRlO.png",
        opts:{type:["demon"],year:["2017"]}
    },

    //2018
    {
        name:"High Orc",
        img:"https://i.imgur.com/kkPExgx.png",
        opts:{type:["beastman"],year:["2018"]}
    },
    {
        name:"Greenworm",
        img:"https://i.imgur.com/CB2DK1g.png",
        opts:{type:["bug"],year:["2018"]}
    },
    {
        name:"Papillon",
        img:"https://i.imgur.com/2B0Qpdi.png",
        opts:{type:["bug"],year:["2018"]}
    },
    {
        name:"Bunyip",
        img:"https://i.imgur.com/jqzNTmw.png",
        opts:{type:["reptile"],year:["2018"]}
    },
    {
        name:"Owl Mage",
        img:"https://i.imgur.com/aQZNg60.png",
        opts:{type:["birdman"],year:["2018"]}
    },
    {
        name:"Tsurara-onna",
        img:"https://i.imgur.com/B1KCvhJ.png",
        opts:{type:["elemental"],year:["2018"]}
    },
    {
        name:"Genie",
        img:"https://i.imgur.com/xDaSHCP.png",
        opts:{type:["elemental"],year:["2018"]}
    },
    {
        name:"Banshee",
        img:"https://i.imgur.com/IemdlNb.png",
        opts:{type:["undead"],year:["2018"]}
    },

    //2019 :NotLikeThis:
    {
        name:"Myconid",
        img:"https://i.imgur.com/8ljjSAV.png",
        opts:{type:["plant"],year:["2019"]}
    },
    {
        name:"Gargoyle",
        img:"https://i.imgur.com/1EUZxRn.png",
        opts:{type:["magicmaterial"],year:["2019"]}
    },
    {
        name:"Ocelomeh",
        img:"https://i.imgur.com/rCv3Mql.png",
        opts:{type:["beastman"],year:["2019"]}
    },

    //2020
    {
        name:"Wonderworm",
        img:"https://i.imgur.com/gOo89DE.png",
        opts:{type:["bug"],year:["2020"]}
    }
];
