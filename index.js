/**
 *
 * Node.JS Instagram Tools
 * 
 * Original author of this project is man who say himself as "CCOCOT"
 * He deleted his own repository, then several members of SGBTeam are taking care
 * of development and new features.
 * 
 * And this is collection of several developments that have been carried out so far
 *
 * All credits to contributor are written in their each file development
 * 
 * Thank to all of contributors for developing this project
 * Especially you :)
 *
 */

'use strict'

const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');

const questionTools = [
  {
    type:"list",
    name:"Tools",
    message:"Select tools:",
    choices:
      [
        "[1]  Bot Like Timeline",
        "[2]  Follow Followers Target by People",
        "[3]  Follow Followers Target by People - Check Followers",
        "[4]  Unfollow For All",
        "[5]  Unfollow For Not Follback",
        "[6]  Follow Followers Target by Location",
        "[7]  Follow Followers Target by People - with DM",
	      "[8]  Follow Followers Target by People - No Like",
        "[9]  Follow Followers Target by Hastag",
        "[10] Repost Media Target by People",
        "[11] Repost Media Target by Hastag",
        "[12] Repost Media Target by Link",
        "[13] Delete All Media",
        ""
      ] 
  }
]

const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
      case "[1]  Bot Like Timeline":
        await require("./tools/liketimeline.js");
        break;
      case "[2]  Follow Followers Target by People":
        await require("./tools/fft.js");
        break;
      case "[3]  Follow Followers Target by People - Check Followers":
        await require("./tools/fftfollowers.js");
        break;
      case "[4]  Unfollow For All":
        await require("./tools/unfollall.js");
        break;
      case "[5]  Unfollow For Not Follback":
        await require("./tools/unfollnotfollback.js");
        break;
      case "[6]  Follow Followers Target by Location":
        await require("./tools/fftlocation.js");
        break;
      case "[7]  Follow Followers Target by People - with DM":
        await require("./tools/fftdm.js");
        break;
      case "[8]  Follow Followers Target by People - No Like":
        await require("./tools/fftnolike.js");
        break;
      case "[9]  Follow Followers Target by Hastag":
        await require("./tools/ffthastag.js");
        break;
      case "[10] Repost Media Target by People":
        await require("./tools/rmtpeople.js");
        break;
      case "[11] Repost Media Target by Hashtag":
        await require("./tools/rmthastag.js");
        break;
      case "[12] Repost Media Target by Link":
        await require("./tools/rmtlink.js");
        break;
      case "[13] Delete All Media":
        await require("./tools/deleteallmedia.js");
        break;
      default:
        console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this program!\n[!] Please try again!');
    }
  } catch(e) {
    //spinner.stop(true);
    //console.log(e);
  }
}

console.log(chalk`
  {bold.cyan
  ______ ______ _______   _______          _     
 |  ____|  ____|__   __| |__   __|        | |    
 | |__  | |__     | |       | | ___   ___ | |___ 
 |  __| |  __|    | |       | |/ _ \ / _ \| / __|
 | |    | |       | |       | | (_) | (_) | \__ \
 |_|    |_|       |_|       |_|\___/ \___/|_|___/
   Pengepul Code : Bambuseribu     @yahyahamidun                  
                                                     
}
      `);

main()
