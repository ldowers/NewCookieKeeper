import Girl from "../models/girl";
import Booth from "../models/booth";
import Cookie from "../models/cookie";
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
}