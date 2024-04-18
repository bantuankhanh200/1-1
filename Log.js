const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('◁  Zeus  ▷ ') + data);
			break;
		case "error":
			console.log(chalk.red('◁  Zeus  ▷ ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('▷ Zeus ◁ ') + data);
			break;
		case "error":
			console.log(chalk.red('◁ Zeus ▷ ') + data);
			break;
		default:
			console.log(chalk.green(`◁ Zeus ▷ `) + data);
			break;
	}
}