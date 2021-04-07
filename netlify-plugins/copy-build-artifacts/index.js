const fs = require('fs-extra')
const path = require('path')

module.exports = {
  onBuild: async ({ constants }) => {
    console.log('Copying nuxt build artifacts to render function...')
    await fs.copy('node_modules/.cache/nuxt', path.resolve(constants.FUNCTIONS_SRC + '/render/.nuxt'))
    console.log('Done!')
  },
}
