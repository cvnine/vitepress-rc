import minimist from 'minimist'
import chalk from 'chalk'
import { createServer } from './server'

const argv: any = minimist(process.argv.slice(2))

console.log(chalk.cyan(` v${require('../../package.json').version}`))
console.log(chalk.cyan(`vite v${require('vite/package.json').version}`))

const command = argv._[0]
const root = argv._[command ? 1 : 0]

if (root) {
	argv.root = root
}

if (!command || command === 'dev') {
	createServer(root, argv)
		.then((server) => {
			server.listen()
		})
		.catch((err) => {
			console.error(chalk.red(`failed to start server. error:\n`), err)
			process.exit(1)
		})
} else if (command === 'build') {
} else if (command === 'ssr') {
} else {
	console.log(chalk.red(`unknown command "${command}".`))
	process.exit(1)
}
