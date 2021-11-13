const RoverClient = require("./Rover");
const config = require("./config.json");
const domain = require("./config.js");


const Rover = new RoverClient(config);

const color = require("./data/colors");
Rover.color = color;

Rover.domain = domain.domain || `https://Rover.deadpool296.repl.co`;

const emoji = require("./data/emoji");
Rover.emoji = emoji;

let client = Rover
const jointocreate = require("./structures/jointocreate");
jointocreate(client);

Rover.react = new Map()
Rover.fetchforguild = new Map()

if(config.dashboard === "true"){
    const Dashboard = require("./dashboard/dashboard");
    Dashboard(client); 

}
        
Rover.start();








  
