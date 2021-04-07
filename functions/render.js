const { builderFunction } = require('@netlify/functions')
const { loadNuxt } = require('nuxt')

async function handler(event, context) {
  const nuxt = await loadNuxt({ for: 'start', configOverrides: {
    buildDir: 'node_modules/.cache/nuxt'
  }})

  const { html, error, redirected } = await nuxt.renderRoute('/')

  console.log('rendered route')

  return {
      statusCode: 200,
      body: html
  }
}

exports.handler = builderFunction(handler)
