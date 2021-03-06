const { builderFunction } = require('@netlify/functions')
const { loadNuxt } = require('nuxt')
const path = require('path')
require('@nuxtjs/axios')

async function handler(event, context) {
  const nuxt = await loadNuxt({
    for: 'start',
    configFile: path.join(__dirname, '_build/nuxt.config.js'),
    configOverrides: {
      buildDir: path.join(__dirname, '_build')
    }
  })

  const { html, error, redirected } = await nuxt.renderRoute(event.queryStringParameters.page || event.path)

  return {
    statusCode: 200,
    body: html
  }
}

exports.handler = builderFunction(handler)
