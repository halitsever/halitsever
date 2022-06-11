#! /usr/bin/env node
'use strict';
var chalk = require('chalk');
var axios = require("axios");
(async () => {
    var catpix = require('catpixjs');
    catpix('https://avatars.githubusercontent.com/u/34791459?v=4&s=20', async function (err, data) {
        const ui = require('cliui')()
        var response = await axios.get("https://api.github.com/users/halitsever");
        ui.div({
            text: data,
            padding: [2, 0, 1, 0],
            align: "center"
        })


        ui.div(
            {
                padding: [0, 4, 2, 4],
                text: chalk.yellow("Halit Sever"),
                align: "center"
            }
        )
        ui.div(
            {
                text: chalk.yellow("I was born in Istanbul, Turkey on November 11, 2002. I've been interested in programming for about 3 years. I'm focused on back-end technologies. I develop web services in the companies I work for and provide solutions to problems with my code."),
                width: 140,
                padding: [0, 21, 0, 25],
                align: "center"
            },
        )
        ui.div({
            padding: [2, 4, 0, 4],
            text: chalk.green("Public repos:" + response.data.public_repos + "\nWebsite: " + response.data.blog),
            align: 'center'
        })
        console.log(ui.toString())
    });

})();
