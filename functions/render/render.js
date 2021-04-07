const { builderFunction } = require('@netlify/functions')
const { loadNuxt } = require('nuxt')
const path = require('path')

async function handler(event, context) {
  const nuxt = await loadNuxt({
    for: 'start',
    configOverrides: {
      buildDir: path.join(__dirname, '_build')
    }
  })

  const { html, error, redirected } = await nuxt.renderRoute('/')

  console.log('rendered route')

  return {
      statusCode: 200,
      body: html
  }
}

exports.handler = builderFunction(handler)
