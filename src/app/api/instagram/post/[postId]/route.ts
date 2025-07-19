import { NextRequest, NextResponse } from 'next/server'

interface InstagramPostData {
  id: string
  mediaUrl: string
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  thumbnailUrl?: string
  caption: string
  likes: number
  comments: number
  timestamp: string
  altText: string
  permalink: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const { postId } = params
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Instagram API not configured' },
        { status: 500 }
      )
    }

    // Fetch the specific post from Instagram API
    const response = await fetch(
      `https://graph.instagram.com/${postId}?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&access_token=${accessToken}`
    )

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    const data = await response.json()
    
    const postData: InstagramPostData = {
      id: data.id,
      mediaUrl: data.media_url,
      mediaType: data.media_type as 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM',
      thumbnailUrl: data.thumbnail_url,
      caption: data.caption || '',
      likes: data.like_count || 0,
      comments: data.comments_count || 0,
      timestamp: formatTimestamp(data.timestamp),
      altText: extractAltText(data.caption),
      permalink: data.permalink
    }

    return NextResponse.json(postData)
  } catch (error) {
    console.error('Error fetching Instagram post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Instagram post' },
      { status: 500 }
    )
  }
}

function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
  
  if (diffInHours < 1) return 'Just now'
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
  
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
  
  const diffInWeeks = Math.floor(diffInDays / 7)
  if (diffInWeeks < 4) return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`
  
  return date.toLocaleDateString()
}

function extractAltText(caption: string): string {
  return caption
    .replace(/#\w+/g, '')
    .replace(/@\w+/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 100) || 'Instagram post from DRIVEN LV'
} 