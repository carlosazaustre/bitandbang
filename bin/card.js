#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const COLOR_THEME = '#ffb300';

// Text + chalk definitions
let data = {
  'name': chalk.white.bold('👋 Hi! I\'m Carlos Azaustre'),
  'shortline': chalk.white.italic('JavaScript Lover | Developer Advocate on Web Technologies'),
  'handle': chalk.hex(COLOR_THEME)('@carlosazaustre'),
  'work': chalk.white('💻 Director of MSc. Fullstack Web Development @ Universidad Europea de Madrid'),
  'book': chalk.white('📙 Author of ') + chalk.white.italic('Aprendiendo JavaScript - ') + chalk.hex(COLOR_THEME)(' https://carlosazaustre.es/libros/aprendiendo-javascript'),
  'work_2': chalk.white('🎓 BSc, Telematics Engineering\n🏅 Google Developer Expert (GDE) in Web Technologies\n🚀 Auth0 Ambassador'),

  'web': chalk.hex(COLOR_THEME)('https://carlosazaustre.es'),
  'github': chalk.hex(COLOR_THEME)('https://github.com/carlosazaustre'),
  'youtube': chalk.hex(COLOR_THEME)('https://youtube.com/carlosazaustre'),
  'twitter': chalk.hex(COLOR_THEME)('https://twitter.com/carlosazaustre'),
  'instagram': chalk.hex(COLOR_THEME)('https://instagram.com/carlosazaustre'),
  'twitch': chalk.hex(COLOR_THEME)('https://twitch.tv/carlosazaustre'),
  'linkedin': chalk.hex(COLOR_THEME)('https://linkedin.com/in/carlosazaustre'),
  'npx': chalk.white('npx carlosazaustre'),

  'labelInstagram': chalk.white.bold('   Instagram:'),
  'labelYoutube': chalk.white.bold('     YouTube:'),
  'labelTwitch': chalk.white.bold('      Twitch:'),
  'labelTwitter': chalk.white.bold('     Twitter:'),
  'labelGitHub': chalk.white.bold('      GitHub:'),
  'labelLinkedIn': chalk.white.bold('    LinkedIn:'),
  'labelWeb': chalk.white.bold('         Web:'),
  'labelCard': chalk.white.bold('        Card:')
}

const output = `
${data.name} (${data.handle})

${data.shortline}

${data.work}
${data.book}
${data.work_2}

${data.labelWeb}  ${data.web}

${data.labelYoutube}  ${data.youtube}
${data.labelTwitter}  ${data.twitter}
${data.labelInstagram}  ${data.instagram}
${data.labelTwitch}  ${data.twitch}

${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}

${data.labelCard}  ${data.npx}

`;

console.log(output)
