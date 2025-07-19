import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const facebookAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID
  const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI || 'http://localhost:3000/api/auth/instagram/callback'
  
  if (!facebookAppId) {
    return NextResponse.json({ error: 'Facebook App ID not configured' }, { status: 500 })
  }

  // Instagram Basic Display OAuth URL
  const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${facebookAppId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user_profile,user_media&response_type=code`

  return NextResponse.redirect(authUrl)
} 