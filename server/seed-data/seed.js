import Girl from "../models/girl";
import Booth from "../models/booth";
import Cookie from "../models/cookie";
import TroopCookie from "../models/troopCookie";
import GirlCookie from "../models/girlCookie";
import BoothCookie from "../models/boothCookie";
import * as seedData from "./data";

export default class DatabaseSeeder {
    constructor() {

    }

    runSeed() {
        let self = this;
        Girl.find({}).then(data => {
            if(data.length > 0){
                //database already seeded.
                return;
            }
            console.log("Seeding database...")
            self.seed();
        });
    }

    seed() {
        let self = this;
        self.seedGirlScouts();
        self.seedBooths();
        self.seedCookies();
        self.seedTroopCookies();
        self.seedGirlCookies();
        self.seedBoothCookies();
    }

    seedGirlScouts() {
        Girl.remove({}) //first clear out any existing items
            .then(() => {
                console.log("Adding Girl Scouts");
                for (let i = 0; i < seedData.girlScouts.length; i++) {
                    Girl.create(seedData.girlScouts[i]);
                }
            });
    }

    seedBooths() {
        Booth.remove({}) //first clear out any existing items
            .then(() => {
                console.log("Adding Booths");
                for (let i = 0; i < seedData.booths.length; i++) {
                    Booth.create(seedData.booths[i]);
                }
            });
    }

    seedCookies() {
        Cookie.remove({}) //first clear out any existing items
            .then(() => {
                console.log("Adding Cookies");
                for (let i = 0; i < seedData.cookies.length; i++) {
                    Cookie.create(seedData.cookies[i]);
                }
            });
    }

    seedTroopCookies() {
        TroopCookie.remove({}) //first clear out any existing items
            .then(() => {
                console.log("Adding Troop Cookies");
                for (let i = 0; i < seedData.troopCookies.length; i++) {
                    TroopCookie.create(seedData.troopCookies[i]);
                }
            });
    }
    
    seedGirlCookies() {
        GirlCookie.remove({}) //first clear out any existing items
            .then(() => {
                console.log("Adding Girl Cookies");
                for (let i = 0; i < seedData.girlCookies.length; i++) {
                    GirlCookie.create(seedData.girlCookies[i]);
                }
            });
    }

    seedBoothCookies() {
        BoothCookie.remove({}) //first clear out any existing items
            .then(() => {
                console.log("Adding Booth Cookies");
                for (let i = 0; i < seedData.boothCookies.length; i++) {
                    BoothCookie.create(seedData.boothCookies[i]);
                }
            });
    }
}