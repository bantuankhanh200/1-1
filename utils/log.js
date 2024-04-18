const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.rgb(127,255,0)('[🖤min hay dỗi🖤]─') + data);
			break;
		case "error":
			console.log(chalk.rgb(255,20,147)('[🖤min hay dỗi🖤] ') + data);
			break;
		default:
			console.log(chalk.rgb(230,230,230)(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.rgb(223, 115, 255)('─[🖤min hay dỗi🖤]─ ▷') + data);
			break;
		case "error":
			console.log(chalk.rgb(127, 255, 0)('─[🖤min hay dỗi🖤]─ ▷ ') + data);
			break;
		default:
			console.log(chalk.rgb(255, 192, 203)(`─[🖤min hay dỗi🖤]─ ▷`) + data);
			break;
	}
}
