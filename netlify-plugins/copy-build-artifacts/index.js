const fs = require('fs-extra')
const path = require('path')

module.exports = {
  onBuild: async ({ constants }) => {
    console.log('Copying nuxt build artifacts to render function...')
    await fs.copy('node_modules/.cache/nuxt/dist/server', path.resolve(constants.FUNCTIONS_SRC + '/render/_build/dist/server'))
    await fs.copy('nuxt.config.js', path.resolve(constants.FUNCTIONS_SRC + '/render/_build/nuxt.config.js'))
    console.log('Done!')
  },
}
