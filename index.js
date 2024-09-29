const Discord = require("discord.js-selfbot");
require("dotenv").config();

// Import ES Modules dynamically
let chalk, figlet, ora;

(async () => {
    try {
        chalk = (await import("chalk")).default;
        figlet = (await import("figlet")).default;
        ora = (await import("ora")).default;

        const client = new Discord.Client();
        const ACCOUNT_TOKEN = process.env.KID;
        const CHANNEL_ID = "949518755690577970";

        // Centralized values for intel, energy, endur, and other attributes
        let intel = 236;
        let energy = 264;
        let endur = 45;
        let agil = 16;
        let potency = 33;
        let efficiency = 297;

        // Random delay generator
        const getRandomDelay = (min = 1000, max = 4000) => Math.floor(Math.random() * (max - min + 1)) + min;
        const getHuntDelay = (min = 21000, max = 23000) => Math.floor(Math.random() * (max - min + 1)) + min;
        const getLSDDelay = (min = 15000, max = 16000) => Math.floor(Math.random() * (max - min + 1)) + min;

        // Helper function to send a message and show status in the console
        const sendMessage = async (message) => {
            const spinner = ora(chalk.blue(`Sending: ${message}`)).start();
            try {
                const channel = client.channels.cache.get(CHANNEL_ID);
                if (channel) {
                    await channel.send(message);
                    spinner.succeed(chalk.green(`Sent: ${message}`));
                } else {
                    throw new Error("Channel not found");
                }
            } catch (err) {
                spinner.fail(chalk.red(`Failed to send: ${message}. Error: ${err.message}`));
            }
        };

        // Function to handle the intro sequence
        const intro = async () => {
            let x = 0;
            try {
                const actions = [
                    `~rollback intel ${intel}`,
                    `~rollback endur ${endur}`,
                    `~rollback energy ${energy}`,
                    `~rollback potency ${potency}`,
                    `~rollback agil ${agil}`,
                    `~improve efficiency ${efficiency}`,
                    "~dispense",
                    `~rollback efficiency ${efficiency}`,
                    `~improve energy ${energy}`,
                    `~improve potency ${potency}`,
                    `~improve agil ${agil}`,
                    "~feed p",
                    "~grabid",
                    `~rollback potency ${potency}`,
                    `~rollback agil ${agil}`,
                    `~rollback energy ${energy}`,
                    `~improve endur ${endur}`,
                    `~improve intel ${intel}`,
                    "17 min wait -> intro"
                ];
                for (let action of actions) {
                    setTimeout(() => sendMessage(action), x);
                    x += getRandomDelay();
                }
                setTimeout(loop, x + 1023000); // Start the loop after intro is done
            } catch (err) {
                console.error(chalk.red(`Error in intro sequence: ${err.message}`));
            }
        };

        // Function to handle the loop sequence
        const loop = async () => {
            let x = 0;
            try {
                const actions = [
                    "~feed opi",
                    "~drink",
                    "~pet",
                    `~rollback intel ${intel}`,
                    `~rollback endur ${endur}`,
                    `~improve efficiency ${efficiency}`,
                    "~dispense",
                    `~rollback efficiency ${efficiency}`,
                    `~improve endur ${endur}`,
                    `~improve intel ${intel}`,
                    "11 min wait loop"
                ];

                for (let action of actions) {
                    setTimeout(() => sendMessage(action), x);
                    x += getRandomDelay();
                }
                x += getRandomDelay() + 666000;
                setTimeout(() => sendMessage("~feed c"), x);
                x += getRandomDelay();
                setTimeout(() => sendMessage("~train intel"), x);
                x += getRandomDelay();
                setTimeout(() => sendMessage("~hunt"), x);
                x += getRandomDelay();
                setTimeout(hunt1, x);
            } catch (err) {
                console.error(chalk.red(`Error in loop sequence: ${err.message}`));
            }
        };

        const hunt1 = async () => {
            let x = 0;
            try {
                for (let i = 0; i < 34; i++) {
                    x += getHuntDelay();
                    setTimeout(() => sendMessage("~hunt"), x);
                }
                const actions = [
                    `~rollback intel ${intel}`,
                    `~rollback endur ${endur}`,
                    `~improve energy ${energy}`,
                    `~improve potency ${potency}`,
                    `~improve agil ${agil}`,
                    "5 min wait -> #1"
                ];
                for (let action of actions) {
                    x += getRandomDelay();
                    setTimeout(() => sendMessage(action), x);
                }
                x += getRandomDelay() + 300000;
                setTimeout(loop, x);
            } catch (err) {
                console.error(chalk.red(`Error in hunt1 sequence: ${err.message}`));
            }
        };

        const hunt2 = async () => {
            let x = 0;
            try {
                for (let i = 0; i < 34; i++) {
                    x += getHuntDelay();
                    setTimeout(() => sendMessage("~hunt"), x);
                }
                const actions = [
                    `~rollback intel ${intel}`,
                    `~rollback endur ${endur}`,
                    `~improve energy ${energy}`,
                    `~improve potency ${potency}`,
                    `~improve agil ${agil}`,
                    "5 min wait -> #2"
                ];
                for (let action of actions) {
                    x += getRandomDelay();
                    setTimeout(() => sendMessage(action), x);
                }
                x += getRandomDelay() + 300000;
                setTimeout(loop, x);
            } catch (err) {
                console.error(chalk.red(`Error in hunt2 sequence: ${err.message}`));
            }
        };

        const pills = async () => {
            let x = 0;
            try {
                const actions = [
                    `~rollback intel ${intel}`,
                    `~rollback endur ${endur}`,
                    `~rollback energy ${energy}`,
                    `~rollback potency ${potency}`,
                    `~rollback agil ${agil}`,
                    `~improve efficiency ${efficiency}`,
                    "~dispense",
                    "~fert can",
                    "~drink",
                    "~dispense",
                    "~fert can",
                    "~smoke",
                    "~dose opi",
                    "~dose lsd"
                ];
                for (let action of actions) {
                    setTimeout(() => sendMessage(action), x);
                    x += getRandomDelay();
                }
            } catch (err) {
                console.error(chalk.red(`Error in pills sequence: ${err.message}`));
            }
        };

        const lsd = async () => {
            let x = 0;
            try {
                setTimeout(() => sendMessage("~dose lsd"), x);
                x += getRandomDelay();
                for (let i = 0; i < 63; i++) {
                    x += getLSDDelay();
                    setTimeout(() => sendMessage("~dispense"), x);
                }
            } catch (err) {
                console.error(chalk.red(`Error in lsd sequence: ${err.message}`));
            }
        };

        // Display a fancy startup banner and bot status
        const displayBanner = () => {
            console.clear();
            console.log(chalk.cyanBright(figlet.textSync("Slotbot Script", {
                font: "Big",
                horizontalLayout: "default",
                verticalLayout: "default"
            })));
            console.log(chalk.bold.blue("\nStarting bot operations..."));
        };

        // Listen for commands
        client.on("message", async (message) => {
            try {
                if (message.author.id !== client.user.id) return;
                const content = message.content.trim();
                if (content === ".loop") await loop();
                if (content === ".intro") await intro();
                if (content === ".hunt2") await hunt2();
                if (content === ".hunt1") await hunt1();
                if (content === ".pills") await pills();
                if (content === ".lsd") await lsd();
            } catch (err) {
                console.error(chalk.red(`Error processing message: ${err.message}`));
            }
        });

        client.on("ready", () => {
            displayBanner();
            ora(chalk.green(`Logged in as ${client.user.tag}`)).succeed();
            client.user.setPresence({ status: "invisible" });
        });

        await client.login(ACCOUNT_TOKEN);
    } catch (err) {
        console.error(chalk.red(`Error during initialization: ${err.message}`));
    }
})();
