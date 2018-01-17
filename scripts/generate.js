// Usage: node ./scripts/generate.js --type=component MyComponent
const path = require('path');
const chalk = require('chalk');
const to = require('to-case');
const scaffold = require('scaffold-generator');
const argv = require('yargs')
  .usage('Usage: $0 --type=[type] [ComponentName]')
  .demandCommand(1)
  .argv;

// Params
const componentName = argv._[0];
const type = argv.type;
const templateDir = path.join(__dirname, `../templates/${type}`);
const targetDir = path.join(__dirname, `../src/${type}s`);
const Name = to.pascal(componentName);
const name = to.snake(componentName);

// Run
scaffold({
  data: {
    name,
    Name,
  },
})
  .copy(templateDir, targetDir, (err) => {
    if (err) {
      console.error(chalk.red('Failed to generate component:'), err);
      process.exit(-1);
    }
    console.log(chalk.green('Generated component:'), path.join(targetDir, Name));
  });