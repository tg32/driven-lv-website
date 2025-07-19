interface InstagramPost {
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

interface InstagramApiResponse {
  data: Array<{
    id: string
    caption: string
    media_type: string
    media_url: string
    thumbnail_url?: string
    permalink: string
    timestamp: string
    like_count?: number
    comments_count?: number
  }>
  paging: {
    cursors: {
      before: string
      after: string
    }
    next: string
  }
}

// Instagram API configuration
const INSTAGRAM_ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN
const INSTAGRAM_USER_ID = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    console.warn('Instagram API credentials not configured. Using fallback data.')
    return getFallbackPosts()
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=10`
    )

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    const data: InstagramApiResponse = await response.json()
    
    return data.data
      .filter(post => ['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM'].includes(post.media_type))
      .map(post => ({
        id: post.id,
        mediaUrl: post.media_url,
        mediaType: post.media_type as 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM',
        thumbnailUrl: post.thumbnail_url,
        caption: post.caption || '',
        likes: post.like_count || 0,
        comments: post.comments_count || 0,
        timestamp: formatTimestamp(post.timestamp),
        altText: extractAltText(post.caption),
        permalink: post.permalink
      }))
      .slice(0, 5) // Limit to 5 posts for carousel

  } catch (error) {
    console.error('Error fetching Instagram posts:', error)
    return getFallbackPosts()
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
  // Remove hashtags and mentions for cleaner alt text
  return caption
    .replace(/#\w+/g, '')
    .replace(/@\w+/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 100) || 'Instagram post from DRIVEN LV'
}

function getFallbackPosts(): InstagramPost[] {
  return [
    {
      id: 'DLvrOFHyt4n',
      mediaUrl: '/api/placeholder/800/600/1f2937/ffffff?text=DRIVEN+LV+Post+1',
      mediaType: 'IMAGE',
      caption: 'For in-person signups be sure to stop by at the DRIVEN front desk! Early bird pricing ongoing til July 15! \n\nDRIVEN Olympics going strong on its 5th year! 💪🏼 \n\nY\'all ready for this??!! 🏆🥇🥈🥉🏅',
      likes: 156,
      comments: 23,
      timestamp: '2024-01-15T10:30:00Z',
      altText: 'DRIVEN Olympics announcement with early bird pricing and 5th year celebration',
      permalink: 'https://www.instagram.com/p/DLvrOFHyt4n/'
    },
    {
      id: 'DLqYXJChJ6U',
      mediaUrl: '/api/placeholder/800/600/1f2937/ffffff?text=DRIVEN+LV+Video+1',
      mediaType: 'VIDEO',
      thumbnailUrl: '/api/placeholder/800/600/1f2937/ffffff?text=DRIVEN+LV+Video+1',
      caption: 'New DRIVEN reel! Check out this amazing content from our community. Click to watch the full video on Instagram! 🎬',
      likes: 89,
      comments: 12,
      timestamp: '2024-01-12T15:45:00Z',
      altText: 'DRIVEN Instagram reel thumbnail - click to watch the full video',
      permalink: 'https://www.instagram.com/reel/DLqYXJChJ6U/'
    },
    {
      id: '3',
      mediaUrl: '/api/placeholder/800/600/1f2937/ffffff?text=DRIVEN+LV+Post+2',
      mediaType: 'IMAGE',
      caption: 'Building strength, confidence, and community at DRIVEN LV. Every workout is a step toward independence.',
      likes: 234,
      comments: 18,
      timestamp: '2024-01-05T09:15:00Z',
      altText: 'Group fitness session at DRIVEN showing community support',
      permalink: 'https://www.instagram.com/p/example3/'
    },
    {
      id: '4',
      mediaUrl: '/api/placeholder/800/600/1f2937/ffffff?text=DRIVEN+LV+Video+2',
      mediaType: 'VIDEO',
      thumbnailUrl: '/api/placeholder/800/600/1f2937/ffffff?text=DRIVEN+LV+Video+2',
      caption: 'Adaptive fitness is for everyone! Watch how our community supports each other in achieving their goals. 💪',
      likes: 312,
      comments: 45,
      timestamp: '2024-01-03T14:20:00Z',
      altText: 'Adaptive fitness video showing community support and goal achievement',
      permalink: 'https://www.instagram.com/reel/example4/'
    },
    {
      id: '5',
      mediaUrl: '/api/placeholder/800/600/1f2937/ffffff?text=DRIVEN+LV+Post+3',
      mediaType: 'IMAGE',
      caption: 'Celebrating another milestone! Every achievement, no matter how small, is worth celebrating. 🎉',
      likes: 178,
      comments: 29,
      timestamp: '2024-01-01T11:00:00Z',
      altText: 'Celebration of fitness milestones and achievements at DRIVEN',
      permalink: 'https://www.instagram.com/p/example5/'
    }
  ]
} 