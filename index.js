#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const portfolioHeader = chalk.bold.greenBright(`

    ███╗░░░███╗██╗░░░██╗  ██████╗░░█████╗░██████╗░████████╗███████╗░█████╗░██╗░░░░░██╗░█████╗░
    ████╗░████║╚██╗░██╔╝  ██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██║░░░░░██║██╔══██╗
    ██╔████╔██║░╚████╔╝░  ██████╔╝██║░░██║██████╔╝░░░██║░░░█████╗░░██║░░██║██║░░░░░██║██║░░██║
    ██║╚██╔╝██║░░╚██╔╝░░  ██╔═══╝░██║░░██║██╔══██╗░░░██║░░░██╔══╝░░██║░░██║██║░░░░░██║██║░░██║
    ██║░╚═╝░██║░░░██║░░░  ██║░░░░░╚█████╔╝██║░░██║░░░██║░░░██║░░░░░╚█████╔╝███████╗██║╚█████╔╝
    ╚═╝░░░░░╚═╝░░░╚═╝░░░  ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░░╚════╝░╚══════╝╚═╝░╚════╝░`);

const personalDetailsTitle = chalk.bold.cyan(`
  
█▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀
█▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█
`);
const skillsTitle = chalk.bold.yellow(`  
█▀ █▄▀ █ █░░ █░░ █▀
▄█ █░█ █ █▄▄ █▄▄ ▄█ `);
const messageTitle = chalk.bold.magenta(`  
█▀▄▀█ █▀▀ █▀ █▀ ▄▀█ █▀▀ █▀▀
█░▀░█ ██▄ ▄█ ▄█ █▀█ █▄█ ██▄  `);

const personalDetails = boxen(
  `  
${chalk.bold.blue(" Name: ")}        ${chalk.cyan.bold("Avishek Ghosh")}
${chalk.bold.blue(" GitHub: ")}      ${chalk.cyan.bold(
    "https://github.com/avishekghosh2004"
  )}
${chalk.bold.blue(" LinkedIn: ")}    ${chalk.cyan.bold(
    "https://www.linkedin.com/in/avishek-ghosh19"
  )}
${chalk.bold.blue(" Email: ")}       ${chalk.yellow.bold(
    "gavishek465@gmail.com"
  )}
`,
  {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "cyan",
  }
);

const skills = boxen(
  `
${chalk.bold.yellow(" Languages: ")}   ${chalk.greenBright.bold(
    "Java, JavaScript, C"
  )}
${chalk.bold.yellow(" Frameworks: ")}  ${chalk.greenBright.bold(
    "React, SpringBoot"
  )}
${chalk.bold.yellow(" Frameworks: ")}  ${chalk.greenBright.bold(
    "MongoDb, MySQL "
  )}
${chalk.bold.yellow(" Tools: ")}       ${chalk.greenBright.bold(
    "Git, Github, VSCode, Cursor"
  )}
`,
  {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "yellow",
  }
);

const personalMessage = boxen(
  `
${chalk.whiteBright.bold(
  "I'm currently looking for exciting opportunities where I can leverage my skills in development and technology."
)}
${chalk.whiteBright.bold(
  "Feel free to reach out if you'd like to collaborate or know more about my work!"
)}
`,
  {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "magenta",
  }
);

function main() {
  console.log(portfolioHeader);

  console.log(personalDetailsTitle);
  console.log(personalDetails);

  console.log(skillsTitle);
  console.log(skills);

  console.log(messageTitle);
  console.log(personalMessage);

  console.log(chalk.cyan("\nThanks for checking out my portfolio!"));
}

main();
