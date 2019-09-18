console.log(`    _        1      13       .  {     c        +    6        =       +      `);
console.log(' =     +     ?   -     _________________  +    -    ?     .       -    .    ');
console.log('  /    gg  9   }   ,     bot starting!    ?     relax              -        ');
console.log('   - ?        .     -       +      `       +     ,     .      lol        +  ');
console.log('    -    3          +   2      +       +    -          _          =         ');
console.log('fortnite .   -       +  _______________   .  -   |       chill   .    `    =');
console.log('    .  =    .   `   +    By Tryloping   b    _      10               +      ');
console.log('           0       -  =       .    a   ,     +      -        d     4    -   ');
console.log('=   1     =      \      _    7   -        ?       karma  -   5       ?   =  ');
console.log('  `    ,    8     .        |    11    kitten    -  =    +                   ');
console.log('     |   `   1         e     -      0    -    -    `   _     ?   -    = /   ');
console.log(`    _        1      13       .  {     c        +    6        =       +      `);
console.log(' =     +     ?   -      _______________   +    -    ?     .       -    .    ');
console.log('  /    gg  9   }   ,       Source By    ?     relax     +     -      -     .');
console.log('   - ?        .     -       +      `       +     ,     .      lol        +  ');
console.log('    -    3          +   2      +       +    -       ?   _          =        ');
console.log('fortnite .   -       +  _______________         |       chill   .    `    = ');
console.log('    .  =    .   `   +    Aqua And Syfe!   b    _      10        .    +      ');
console.log('           0       -  =       .    a   ,best +   ?_____        d     4   -  ');
console.log('=   1     =      \      _    7   -da  ______      karma  -   5       ?   =  ');
console.log('  `    ,    8     .        |    11    kitten    -  =    +                   ');
console.log('     |   `   1         e     -      0    -    -    `   _     ?   -    = /   ');

const request = require("request-promise");
const EGClient = require('epicgames-client').Client;
const Fortnite = require('epicgames-fortnite-client');
const { ESubGame } = Fortnite;
const { EPlatform } = require('epicgames-client');
const { EInputType } = require('epicgames-client');
const { EPartyPrivacy } = require('epicgames-client');
const config = require("./config.json");
const ids = require("./ids.json");
const bannedids = require("./bannedids.json");
const { Launcher } = require('epicgames-client');

const launcher = new Launcher({
  email: config.email, // Remember to add your bot account email in here or it won't work!
  password: config.password,  // Remember to add your bot account password in here or it won't work!
});

(async () => {

  if(!await launcher.init() || !await launcher.login()) {
    throw new Error('Error while initialize or login process.');
  }
	
  console.log(`Logged account's id: ${launcher.account.id}`);
  console.log(`Logged account's name: ${launcher.account.name}`);

})();

(async () => {

  
  if(!await launcher.init() || !await launcher.login()) {
    throw new Error('Error while initialize or login process.');
  }

  const playerName = config.findid;
  const account = await launcher.getProfile(playerName);
  if(!account) throw new Error(`Player ${playerName} not found!`);
  console.log(`The id that u wanted was, ${account.name}, the id is ${account.id}`)
})();

var CID = config.CID
var BID = config.BID // All of this is managed in the config file
var EID = config.EID
var PICKAXE_ID = config.pickaxe_id
var prefix = config.prefix
var id = ids.id
var bannedid = bannedids.bannedids

let eg = new EGClient({ // For this make a new account that has nothing and put the details in here.
  email: config.email, // Remember to add your bot account email in here or it won't work!
  password: config.password,  // Remember to add your bot account password in here or it won't work!
  debug: console.log,
  defaultPartyconfig: {
 	  privacy: EPartyPrivacy.PUBLIC,
  	joinConfirmation: config.joinConfirmation,
  	joinability: config.joinability, // Opens the party and allows it to be joined
  	maxSize: config.maxsize,
	  subType: config.SubType,
	  type: config.type,
	  inviteTTL: config.ttl,
  	chatEnabled: config.chatEnabled,
}
  });
  if(config.test == "false") {
  }
    if(config.nonid == "false") {

  function sleep(milliseconds) {
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
  if ((new Date().getTime() - start) > milliseconds){
    break;
  }
}
}

    eg.init().then(async (success) => {

      var current_party;

      if(!success)
        throw new Error('Cannot initialize EpicGames launcher.');

      if(!await eg.login())
        throw new Error('The bot cant login, please check your config, file.');

        const fortnite = await eg.runGame(Fortnite, {
	netCL: config.netcl,
	partyBuildId: '1:1:' + config.netcl,
	});
      const br = await fortnite.runSubGame(ESubGame.BattleRoyale);

      fortnite.communicator.on("friend:request", async (request) => {
        if(config.friendaccept == "true"){
               await request.accept();
            }
             });   
      fortnite.communicator.on('party:member:joined', async (member) => {
        console.clear()
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(`                                          [████████████████████]                               `);
        console.log(`                                                                                               `);
        console.log(`                                                                                               `);
        console.log(`                                    [Member #${member.id} just joined!]                        `);

          fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + CID + "." + CID);
          console.clear()
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(`                                          [████████████████████]                                         `);
          console.log(`                                                                                                         `);
          console.log(`                                                                                                         `);
          console.log(`                                     [Joining : Bot putting on outfit]                                   `);

          fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + BID + "." + BID);
          console.clear()
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(`                                          [████████████████████]                                         `);
          console.log(`                                                                                                         `);
          console.log(`                                                                                                         `);
          console.log(`                                     [Joining : Bot putting on backling]                                 `);

          fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + PICKAXE_ID + "." + PICKAXE_ID); // ALL OF THE THINGS ARE PULLED FROM ABOVE!

          fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + EID + "." + EID);

         fortnite.party.me.setBattlePass(false);

	        fortnite.party.me.setBanner(config.levelb, config.Banner, config.banner_color);
          console.clear()
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(`                                          [████████████████████]                                         `);
          console.log(`                                                                                                         `);
          console.log(`                                                                                                         `);
          console.log(`                                        [Party Invite : Joined !]                                        `);
        });

      fortnite.communicator.on('party:invitation', async (invitation) => {
        console.clear()
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(`                                          [████████████████████]                                         `);
        console.log(`                                                                                                         `);
        console.log(`                                                                                                         `);
        console.log(`                                 [Party Invite : Invitation accepting.]                                  `);
        await invitation.accept()
        sleep(1000)
        console.clear()
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(``)
        console.log(`                                          [████████████████████]                                         `);
        console.log(`                                                                                                         `);
        console.log(`                                                                                                         `);
        console.log(`                               [Party Joined : Joined party from invitation!]                            `);
          });

      eg.communicator.on('friend:message', async (data) => {

        if(data.message == prefix +'help'){
          console.clear()
          eg.communicator.sendMessage(data.friend.id, 'Commands: CID_ , EID_ , BID_ ,' + prefix + 'banner, ' + prefix + 'cn-semote, cn-bp, cn-status, cn-ready, cn-unready, cn-input, cn-platform');
        }
        if(data.friend.id == bannedid) { 
          eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
        }
  

        var test = ""
        var args = data.message.split(" ");

        if(config.id == ""){
          console.clear()
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(``)
          console.log(`  '   =                        +                    ]                       -                            `)
          console.log(`               +                                    ?                       .       /                    `)
          console.log(`      /                   .              [████████████████████]         {            |         '         `);
          console.log(`               try                                                 ;                                     `);
          console.log(`   loping                             ;                                                                  `);
          console.log(`                        [You have no id in your config, i would put my id in if i was u.]                          `);
          console.log(``)
        }

    if(args[0].includes('EID_')){
      if(data.friend.id == id) {       
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        fortnite.communicator.sendMessage(data.friend.id, "Emote set to " + args[0]);
      }
      if(data.friend.id == bannedid) { 
        eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
      } else {
          eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
        }

      }

      if(args[0].includes('/')){
        if(data.friend.id == id) {
        EID = args[0];
          fortnite.party.me.clearEmote();
          fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
          eg.communicator.sendMessage(data.friend.id, "Emote set to " + args[0]);
        }
        if(data.friend.id == bannedid) { 
          eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
        } else {
          eg.communicator.sendMessage(data.friend.id, "Please use EID");
        }
      }
      
      if(args[0].includes('/')){
        if(data.friend.id == id) {
        PICKAXE_ID = args
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
          eg.communicator.sendMessage(data.friend.id, "Pickaxe set to " + args[0]);
        }
        if(data.friend.id == bannedid) { 
          eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
        } else {
          eg.communicator.sendMessage(data.friend.id, "Please use Pickaxe_ID");
        }
      }


      if(args[0].includes('crash')){
        if(data.friend.id == id) {       
          fortnite.party.me.clearEmote();
          fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
          fortnite.communicator.sendMessage(data.friend.id, "Emote set to " + args[0]);
        }
        if(data.friend.id == bannedid) { 
          eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
        } else {
            eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
          }
  
        }

      if(args[0].includes('BID_')){
      if(data.friend.id == id) {       
        BID = args[0];
          fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
          eg.communicator.sendMessage(data.friend.id, "Backbling set to " + args[0]);
        }
        if(data.friend.id == bannedid) { 
          eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
        } else {
            eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
          }
        }

       CID = args[0];
      if(args[0].includes('CID_')){
      if(data.friend.id == id) {
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg.communicator.sendMessage(data.friend.id, "Skin set to " + args[0]);
      }
      if(data.friend.id == bannedid) { 
        eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
            } else {
          eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
          }
      }

        if (args[0].toLowerCase() == prefix + "leave"){
          fortnite.party.leave();
          eg.communicator.sendMessage(data.friend.id, "Your Bot left the party");
        }
        if(data.friend.id == bannedid) { 
          eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
  }

        if(args[0].includes('Pickaxe_ID_')){
          if(data.friend.id == id) {
            PICKAXE_ID = args[0];
            fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
            eg.communicator.sendMessage(data.friend.id, "Pickaxe set to " + args[0]);
          }
          if(data.friend.id == bannedid) { 
            eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
          } else {
              eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
            }
          }

      if(args[0] === prefix + "status") {
        if(data.friend.id == id) {
          var mess = data.message.replace(prefix + "status", "");
          fortnite.communicator.updateStatus(mess);
          eg.communicator.sendMessage(data.friend.id, 'Status set to ' + mess + "!");
        }
        if(data.friend.id == bannedid) { 
          eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
              } else {
            eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
            }
        }

        if(args[0] === prefix + "id") {
          if(data.friend.id == id) {
            const playerName = args[0];
            const account = launcher.getProfile(playerName);
            console.clear()
            console.log(``)
            console.log(``)
            console.log(``)
            console.log(``)
            console.log(``)
            console.log(``)
            console.log(`                                          [Getting ID! of ${account.name} !]                                         `);
            console.log(`                                                                                                         `);
            console.log(`                                                                                                         `);
            console.log(`                                   [${account.name}'s id: ${account.id}]                            `);
            eg.communicator.sendMessage(data.friend.id, ' ' + account.name + "'s id is " + account.id);
          }
          if(data.friend.id == bannedid) { 
            eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
          } else {
              eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
              }
          }

          if(args[0] === prefix +"gbp") {
            if(data.friend.id == id) {
              fortnite.party.me.setBattlePass(true, 77, 120, 110);
              eg.communicator.sendMessage(data.friend.id, "Gave Battle Pass!");
            }
            if(data.friend.id == bannedid) { 
              eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
                  } else {
                eg.communicator.sendMessage(data.friend.id, "not allowed");
                }
            }

            if(args[0] === test +"prefix") {
              if(data.friend.id == id) {
                eg.communicator.sendMessage(data.friend.id, "The Current Prefix is, " + prefix);
              }
              if(data.friend.id == bannedid) { 
                eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
                    } else {
                  eg.communicator.sendMessage(data.friend.id, "not allowed");
                  }
              }

      if(args[0] === prefix + "rmbp") {
        if(data.friend.id == id) {
          fortnite.party.me.setBattlePass(false);
          eg.communicator.sendMessage(data.friend.id, "Removed Battle Pass!");
        }
        if(data.friend.id == bannedid) { 
          eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
              } else {
            eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
            }
        }

        if(args[0] === prefix + "banner") {
          if(data.friend.id == id) {
            fortnite.party.me.setBanner(100, args[1], args[2]);
            eg.communicator.sendMessage(data.friend.id, "Banner set to " + args[1] + " " + args[2]);
          }
          if(data.friend.id == bannedid) { 
            eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
                } else {
              eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
              }
          }

          if(args[0] === prefix +"ready") {
            if(data.friend.id == id) {
              fortnite.party.me.setReady(true);
              eg.communicator.sendMessage(data.friend.id, "Fake Ready!");
            }
            if(data.friend.id == bannedid) { 
              eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
                  } else {
                eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
                }
            }

            if(args[0] === prefix +"peelymech") {
              if(data.friend.id == id) {
                fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_Davinci.EID_Davinci");
                sleep(10)
                fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_534_Athena_Commando_M_PeelyMech.CID_534_Athena_Commando_M_PeelyMech");
              }
              if(data.friend.id == bannedid) { 
                eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");           
              } else {
                  eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
                  }
              }

              if(args[0] === prefix +"Note11") {
                if(data.friend.id == id) {
                  fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_Davinci.EID_Davinci");
                  fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_479_Athena_Commando_F_Davinci.CID_479_Athena_Commando_F_Davinci");
                }
                if(data.friend.id == bannedid) { 
                  eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
                      } else {
                    eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
                    }
                }

            if(args[0] === prefix + "unready") {
              if(data.friend.id == id) {
                fortnite.party.me.setReady(false);
                eg.communicator.sendMessage(data.friend.id, "Unready!");
              }
              if(data.friend.id == bannedid) { 
                eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
                    } else {
                  eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
                  }
              }

          if(args[0] === prefix + "bp") {
            if(data.friend.id == id) {
              fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
              eg.communicator.sendMessage(data.friend.id, "BP set to " + args[1] + " " + args[2] + " " + args[3] + "! BTW this command doesn't even work.");
            }
            if(data.friend.id == bannedid) { 
              eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
                  } else {
                eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
                }
            }

          if(args[0] === prefix + "semote") {
            if(data.friend.id == id) {
              fortnite.party.me.clearEmote();
              eg.communicator.sendMessage(data.friend.id, "Emote cleared!");
            }
            if(data.friend.id == bannedid) { 
              eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
                  } else {
                eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
                }
              }

              if(args[0] === prefix + "platform") {
                if(data.friend.id == id) {
                  fortnite.party.me.setPlatform(args[1]);
                  eg.communicator.sendMessage(data.friend.id, "Set Platform to " + args[1] + " !");
                }
                if(data.friend.id == bannedid) { 
                  eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
                      } else {
                    eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
                    }
                  }

                  if(args[0] === prefix + "input") {
                    if(data.friend.id == id) {
                      fortnite.party.me.setInputType(args[1]);
                      eg.communicator.sendMessage(data.friend.id, "Set Input to " + args[1] + " !");
                    }
                    if(data.friend.id == bannedid) { 
                      eg.communicator.sendMessage(data.friend.id, "Your banned from using this bot because of many reasons.");     
                          } else {
                        eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
                        }
                      }
                    
                      });
                    });
                  }

                  if(config.test == "true") {

                    function sleep(milliseconds) {
                      var start = new Date().getTime();
                      for (var i = 0; i < 1e7; i++) {
                        if ((new Date().getTime() - start) > milliseconds){
                          break;
                        }
                      }
                      }
                      
                          eg.init().then(async (success) => {                                     

                            if(!success)
                              throw new Error('Cannot initialize EpicGames launcher.');
                      
                            if(!await eg.login())
                              throw new Error('The bot cant login, please check your config, file.');
                      
                              const fortnite = await eg.runGame(Fortnite, {
                        netCL: config.netcl,
                        partyBuildId: '1:1:' + config.netcl,
                        });
                            const br = await fortnite.runSubGame(ESubGame.BattleRoyale);
                      
                            fortnite.communicator.on("friend:request", async (request) => {
                              if(config.friendaccept == "true"){
                                     await request.accept();
                                  }
                                   });

                                   eg.communicator.on('friend:message', async (data) => {
                                    var args = data.message.split(" ");
                                    if(args[0] === prefix + "test") {
                                      if(data.friend.id == id) {
                                        eg.communicator.sendMessage(data.friend.id, "tested");
                                            } else {
                                          eg.communicator.sendMessage(data.friend.id, "Error 1: Permisson needed.");
                                          }
                                        }
                
                                      });
                                                           
                            fortnite.communicator.on('party:member:joined', async (member) => {
                              console.log(`Member#${member.id} joined!`);
                              console.log(``);
                      
                                fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + CID + "." + CID);
                      
                                fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + BID + "." + BID);
                      
                                fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + PICKAXE_ID + "." + PICKAXE_ID); // ALL OF THE THINGS ARE PULLED FROM ABOVE!
                      
                                fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + EID + "." + EID);
                      
                               fortnite.party.me.setBattlePass(false);
                      
                                fortnite.party.me.setBanner(config.levelb, config.Banner, config.banner_color);
                            });
                      
                            fortnite.communicator.on('party:invitation', async (invitation) => {
                              await invitation.accept()
                                });                    
                    });
                  }

                  if(config.nonid == "true") {

                    function sleep(milliseconds) {
                      var start = new Date().getTime();
                      for (var i = 0; i < 1e7; i++) {
                        if ((new Date().getTime() - start) > milliseconds){
                          break;
                        }
                      }
                      }
                      
                          eg.init().then(async (success) => {
                      
                            var current_party;
                      
                            if(!success)
                              throw new Error('Cannot initialize EpicGames launcher.');
                      
                            if(!await eg.login())
                              throw new Error('The bot cant login, please check your config, file.');
                      
                              const fortnite = await eg.runGame(Fortnite, {
                        netCL: config.netcl,
                        partyBuildId: '1:1:' + config.netcl,
                        });
                            const br = await fortnite.runSubGame(ESubGame.BattleRoyale);
                      
                            fortnite.communicator.on("friend:request", async (request) => {
                              if(config.friendaccept == "true"){
                                     await request.accept();
                                  }
                                   });
                      
                            fortnite.communicator.on('party:member:joined', async (member) => {
                              console.log(`Member#${member.id} joined!`);
                              console.log(``);
                      
                                fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + CID + "." + CID);
                      
                                fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + BID + "." + BID);
                      
                                fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + PICKAXE_ID + "." + PICKAXE_ID); // ALL OF THE THINGS ARE PULLED FROM ABOVE!
                      
                                fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + EID + "." + EID);
                      
                               fortnite.party.me.setBattlePass(false);
                      
                                fortnite.party.me.setBanner(config.levelb, config.Banner, config.banner_color);
                            });
                      
                            fortnite.communicator.on('party:invitation', async (invitation) => {
                              await invitation.accept()
                                });
                      
                            eg.communicator.on('friend:message', async (data) => {
                      
                              if(data.message == prefix +'help'){
                                eg.communicator.sendMessage(data.friend.id, 'Commands: CID_ , EID_ , BID_ ,' + prefix + 'banner, ' + prefix + 'cn-semote, cn-bp, cn-status, cn-ready, cn-unready, cn-input, cn-platform');
                          }
                      
                              var test = ""
                              var args = data.message.split(" ");
                      
                          if(args[0].includes('EID_')){
                            try {     
                              fortnite.party.me.clearEmote();
                              fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
                              fortnite.communicator.sendMessage(data.friend.id, "Emote set to " + args[0]);
                            } catch {
                                eg.communicator.sendMessage(data.friend.id, "Please use EID_");
                              }
                      
                            }
                      
                            if(args[0].includes('/')){
                              try { 
                              EID = args[0];
                                fortnite.party.me.clearEmote();
                                fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
                                eg.communicator.sendMessage(data.friend.id, "Emote set to " + args[0]);
                              } catch {
                                eg.communicator.sendMessage(data.friend.id, "Please use EID");
                              }
                            }
                            
                            if(args[0].includes('/')){
                              try { 
                              PICKAXE_ID = args
                              fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
                                eg.communicator.sendMessage(data.friend.id, "Pickaxe set to " + args[0]);
                              } catch {
                                eg.communicator.sendMessage(data.friend.id, "Please use Pickaxe_ID");
                              }
                            }
                      
                      
                            if(args[0].includes('/')){
                              try {      
                                fortnite.party.me.clearEmote();
                                fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
                                fortnite.communicator.sendMessage(data.friend.id, "Emote set to " + args[0]);
                              } catch {
                                  eg.communicator.sendMessage(data.friend.id, "Please use /");
                                }
                        
                              }
                      
                            if(args[0].includes('BID_')){
                              try {   
                              BID = args[0];
                                fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
                                eg.communicator.sendMessage(data.friend.id, "Backbling set to " + args[0]);
                              } catch {
                                  eg.communicator.sendMessage(data.friend.id, "Please use BID_");
                                }
                              }
                      
                            if(args[0].includes('CID_')){
                              try { 
                                CID = args[0];
                              fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
                              eg.communicator.sendMessage(data.friend.id, "Skin set to " + args[0]);
                                  } catch {
                                eg.communicator.sendMessage(data.friend.id, "Please use CID_");
                                }
                            }
                      
                              if (args[0].toLowerCase() == prefix + "leave"){
                                fortnite.party.leave();
                                eg.communicator.sendMessage(data.friend.id, "Your Bot left the party");
                        }
                      
                              if(args[0].includes('Pickaxe_ID_')){
                                try { 
                                  PICKAXE_ID = args[0];
                                  fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
                                  eg.communicator.sendMessage(data.friend.id, "Pickaxe set to " + args[0]);
                                } catch {
                                    eg.communicator.sendMessage(data.friend.id, "Please use Pickaxe_ID_");
                                  }
                                }
                      
                            if(args[0] === prefix + "status") {
                              try { 
                                var mess = data.message.replace(prefix + "status", "");
                                fortnite.communicator.updateStatus(mess);
                                eg.communicator.sendMessage(data.friend.id, 'Status set to ' + mess + "!");
                                    } catch {
                                  eg.communicator.sendMessage(data.friend.id, "Please use " + prefix + "status");
                                  }
                              }
                      
                                if(args[0] === prefix +"gbp") {
                                    fortnite.party.me.setBattlePass(true, 77, 120, 110);
                                    eg.communicator.sendMessage(data.friend.id, "Gave Battle Pass!");
                                      }
                      
                                  if(args[0] === test +"prefix") {
                                      eg.communicator.sendMessage(data.friend.id, "The Current Prefix is, " + prefix);
                                        }
                      
                            if(args[0] === prefix + "rmbp") {
                                fortnite.party.me.setBattlePass(false);
                                eg.communicator.sendMessage(data.friend.id, "Removed Battle Pass!");
                              }
                      
                              if(args[0] === prefix + "banner") {
                                try { 
                                  fortnite.party.me.setBanner(100, args[1], args[2]);
                                  eg.communicator.sendMessage(data.friend.id, "Banner set to " + args[1] + " " + args[2]);
                                      } catch {
                                    eg.communicator.sendMessage(data.friend.id, "Please use " + prefix + 'banner ' + "BANNER " + "BANNERCOLOR");
                                    }
                                }
                      
                                if(args[0] === prefix +"ready") {
                                    fortnite.party.me.setReady(true);
                                    eg.communicator.sendMessage(data.friend.id, "Fake Ready!");
                                  }
                      
                                  if(args[0] === prefix +"peelymech") {
                                      fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_Davinci.EID_Davinci");
                                      sleep(5555)
                                      fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_534_Athena_Commando_M_PeelyMech.CID_534_Athena_Commando_M_PeelyMech");
                                  }
                      
                                    if(args[0] === prefix +"Note11") {
                                        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_Davinci.EID_Davinci");
                                        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_479_Athena_Commando_F_Davinci.CID_479_Athena_Commando_F_Davinci");
                                    }
                      
                                  if(args[0] === prefix + "unready") {
                                      fortnite.party.me.setReady(false);
                                      eg.communicator.sendMessage(data.friend.id, "Unready!");
                                   }

                                if(args[0] === prefix + "bp") {
                                   try {
                                    fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
                                    eg.communicator.sendMessage(data.friend.id, "BP set to " + args[1] + " " + args[2] + " " + args[3] + "! BTW this command doesn't even work.");
                                        } catch {
                                      eg.communicator.sendMessage(data.friend.id, "Please use "+ prefix + "bp");
                                      }
                                  }
                      
                                if(args[0] === prefix + "semote") {
                                    fortnite.party.me.clearEmote();
                                    eg.communicator.sendMessage(data.friend.id, "Emote cleared!");
                                  }
                      
                                    if(args[0] === prefix + "platform") {
                                      try {
                                        fortnite.party.me.setPlatform(args[1]);
                                        eg.communicator.sendMessage(data.friend.id, "Set Platform to " + args[1] + " !");
                                            } catch {
                                          eg.communicator.sendMessage(data.friend.id, "Please use " + prefix + "platform");
                                          }
                                        }
                      
                                        if(args[0] === prefix + "input") {
                                           try {
                                            fortnite.party.me.setInputType(args[1]);
                                            eg.communicator.sendMessage(data.friend.id, "Set Input to " + args[1] + " !");
                                          } catch {
                                            eg.communicator.sendMessage(data.friend.id, "Please use " + prefix + "input");
                                            }
                                          }
                                            
                    });
                  });
                }
         
