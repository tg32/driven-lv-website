import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')
  
  if (error) {
    return NextResponse.json({ error: `Instagram authorization failed: ${error}` }, { status: 400 })
  }
  
  if (!code) {
    return NextResponse.json({ error: 'No authorization code received' }, { status: 400 })
  }

  const facebookAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID
  const facebookAppSecret = process.env.FACEBOOK_APP_SECRET
  const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI || 'http://localhost:3000/api/auth/instagram/callback'

  if (!facebookAppId || !facebookAppSecret) {
    return NextResponse.json({ error: 'Facebook App credentials not configured' }, { status: 500 })
  }

  try {
    // Exchange authorization code for access token
    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: facebookAppId,
        client_secret: facebookAppSecret,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        code: code,
      }),
    })

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text()
      console.error('Token exchange failed:', errorText)
      return NextResponse.json({ error: 'Failed to exchange authorization code for access token' }, { status: 500 })
    }

    const tokenData = await tokenResponse.json()
    
    // Get user profile information
    const userResponse = await fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${tokenData.access_token}`)
    const userData = await userResponse.json()

    // Return success with credentials
    return NextResponse.json({
      success: true,
      access_token: tokenData.access_token,
      user_id: userData.id,
      username: userData.username,
      message: 'Instagram authentication successful! Add these to your .env.local file:',
      env_vars: {
        NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN: tokenData.access_token,
        NEXT_PUBLIC_INSTAGRAM_USER_ID: userData.id,
      }
    })

  } catch (error) {
    console.error('Instagram authentication error:', error)
    return NextResponse.json({ error: 'Instagram authentication failed' }, { status: 500 })
  }
} 