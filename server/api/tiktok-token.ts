import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const code = body.code

  // Use environment variables for secrets
  const clientKey = process.env.TIKTOK_CLIENT_KEY
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET
  const redirectUri = `${process.env.TIKTOK_REDIRECT_URI || ''}/tiktok-callback`

  const response = await $fetch('https://open.tiktokapis.com/v2/oauth/token/', {
    method: 'POST',
    body: {
      client_key: clientKey,
      client_secret: clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    },
  })

  return response
})
