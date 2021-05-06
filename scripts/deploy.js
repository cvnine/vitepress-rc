const ghpages = require('gh-pages')
const fs = require('fs-extra')
const path = require('path')

fs.copy(path.resolve(__dirname, '../docs/.nojekyll'), path.resolve(__dirname, '../docs/.vitepressrc/dist/.nojekyll'))
	.then(() => {
		ghpages.publish(path.resolve(__dirname, '../docs/.vitepressrc/dist'), { dotfiles: true }, (err) => {
			if (err) console.error(err)
			console.log('✓ publish')
		})
	})
	.catch((err) => console.error(err))
