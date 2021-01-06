import {Map} from "./Map.js";
import {Hero} from "./Hero.js";

let map = new Map(500,400);
map.initMap();

let hero = new Hero([10,200]);
hero.chooseImg("down/fix.png");
hero.walk();