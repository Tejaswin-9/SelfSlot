const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const Discord = require("discord.js-selfbot-v13");
require("dotenv").config();

// Import ES Modules dynamically
let chalk, figlet, ora;

(async () => {
    chalk = (await import("chalk")).default;
    figlet = (await import("figlet")).default;
    ora = (await import("ora")).default;

    const client = new Discord.Client();
      
    const ACCOUNT_TOKEN = process.env.KID;
    const CHANNEL_ID = "949518755690577970";

    // Centralized values for intel, energy, and endur
    let intel = 236;
    let energy = 264;
    let endur = 45;
    let agil = 16
    let potency = 33;
    let efficiency = 297;

    // Random delay generator for general actions (6 to 9 seconds)
    function getRandomDelay(min = 1000, max = 4000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Random delay generator specifically for hunt actions (21 to 23 seconds)
    function getHuntDelay(min = 21000, max = 23000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getLSDDelay(min = 15000, max = 16000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

// Helper function to send a message and show status in the console
    async function sendMessage(message) {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID); // Fetch the channel by ID
            await channel.send(message); // Send the message
            console.log(`Sent: ${message}`); // Log the sent message
        } catch (error) {
            console.error(`Error sending message: ${error}`); // Log any errors
        }
    }

    // Function to handle the intro sequence
    function intro() {
        let x = 0;
        setTimeout(() => sendMessage(`~rollback intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback energy ${energy}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback potency ${potency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve efficiency ${efficiency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback efficiency ${efficiency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve energy ${energy}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve potency ${potency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve agil ${agil}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~feed p"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~grabid"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback potency ${potency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback energy ${energy}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve endur ${endur}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`17 min wait -> intro`), x);
        setTimeout(loop, x + 1023000); // Start the loop after intro is done
    }

    // Function to handle the loop sequence
    function loop() {
        let x = 0;
        setTimeout(() => sendMessage("~feed opi"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~drink"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~pet"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve efficiency ${efficiency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback efficiency ${efficiency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve endur ${endur}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`11 min wait loop`), x);
        x += getRandomDelay() + 666000;
        setTimeout(() => sendMessage("~feed c"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~train intel"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~hunt"), x);
        x += getRandomDelay();
        setTimeout(hunt1, x);
    }

    function hunt1() {
        let x = 0;
        setTimeout(() => sendMessage("~hunt"), x);

        for (let i = 0; i < 34; i++) {
            x += getHuntDelay();
            setTimeout(() => sendMessage("~hunt"), x);
        }

        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve energy ${energy}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve potency ${potency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve agil ${agil}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`5 min wait -> #1`), x);
        x += getRandomDelay() + 300000;
        setTimeout(() => sendMessage("~feed p"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~grabid"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback potency ${potency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback energy ${energy}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve endur ${endur}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~train intel"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~hunt"), x);
        x += getRandomDelay();
        setTimeout(hunt2, x);
    }
        
    function hunt2() {
        let x = 0;
        for (let i = 0; i < 34; i++) {
            x += getHuntDelay();
            setTimeout(() => sendMessage("~hunt"), x);
        }

        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve energy ${energy}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve potency ${potency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve agil ${agil}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`5 min wait -> #2`), x);
        x += getRandomDelay() + 300000;
        setTimeout(() => sendMessage("~feed p"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~grabid"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback potency ${potency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback energy ${energy}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve endur ${endur}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`17 min wait`), x);
        x += 1023000;
        setTimeout(loop, x); // Continue loop after hunting
    }

    function pills() {
        let x = 0;
        setTimeout(() => sendMessage(`~rollback intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback energy ${energy}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback potency ${potency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`~improve efficiency ${efficiency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~fert can"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~drink"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~fert can"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~smoke"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~fert can"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~drink"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~fert can"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dose opi"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~fert can"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~drink"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~fert can"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~smoke"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~fert can"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~drink"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~fert can"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dose lsd"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);

        for (let i = 0; i < 63; i++) {
            x += getLSDDelay();
            setTimeout(() => sendMessage("~dispense"), x);
        }
    }

    function lsd() {
        let x = 0;
        setTimeout(() => sendMessage("~dose lsd"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);

        for (let i = 0; i < 63; i++) {
            x += getLSDDelay();
            setTimeout(() => sendMessage("~dispense"), x);
        }
    }

    function test() {
        let x = 0;
        setTimeout(() => sendMessage("Working"), x);
    }

    // Display a fancy startup banner and bot status
    function displayBanner() {
        console.clear();
        console.log(chalk.cyanBright(figlet.textSync("Slotbot Script", {
            font: "Big",
            horizontalLayout: "default",
            verticalLayout: "default"
        })));
        console.log(chalk.bold.blue("\nStarting bot operations..."));
    }

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
            if (content === ".test") await test();
        } catch (err) {
            console.error(chalk.red(`Error processing message: ${err.message}`));
        }
    });

    client.on("ready", function () {
        displayBanner();
        ora(chalk.green(`Logged in as ${client.user.tag}`)).succeed();
        client.user.setPresence({ status: "invisible" });
    });

    client.login(ACCOUNT_TOKEN);
})();
