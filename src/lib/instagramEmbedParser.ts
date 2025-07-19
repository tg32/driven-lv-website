interface InstagramEmbedData {
  id: string
  imageUrl: string
  caption: string
  likes: number
  comments: number
  timestamp: string
  altText: string
  permalink: string
}

export function parseInstagramEmbed(embedCode: string): InstagramEmbedData | null {
  try {
    // Extract post ID from embed code
    const postIdMatch = embedCode.match(/instagram\.com\/p\/([^\/\s"']+)/)
    const postId = postIdMatch ? postIdMatch[1] : `post_${Date.now()}`

    // Extract image URL from embed code
    const imageUrlMatch = embedCode.match(/src="([^"]*\.(?:jpg|jpeg|png|webp)[^"]*)"/)
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : ''

    // Extract caption from embed code
    const captionMatch = embedCode.match(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/)
    let caption = captionMatch ? captionMatch[1].replace(/<[^>]*>/g, '').trim() : ''

    // Clean up caption
    caption = caption.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')

    // Generate alt text from caption
    const altText = caption.length > 0 
      ? caption.substring(0, 100).replace(/[^\w\s]/g, '') 
      : 'Instagram post from DRIVEN LV'

    // Create permalink
    const permalink = `https://instagram.com/p/${postId}`

    return {
      id: postId,
      imageUrl,
      caption,
      likes: 0, // Embed codes don't include like counts
      comments: 0, // Embed codes don't include comment counts
      timestamp: 'Recently', // We'll need to manually update this
      altText,
      permalink
    }
  } catch (error) {
    console.error('Error parsing Instagram embed code:', error)
    return null
  }
}

// Helper function to get embed code from Instagram
export function getInstagramEmbedCode(postUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // This would need to be implemented with a server-side API
    // For now, we'll provide instructions for manual extraction
    reject(new Error('Embed code extraction requires server-side implementation'))
  })
}

// Manual embed code extraction instructions
export const EMBED_EXTRACTION_INSTRUCTIONS = `
## How to Get Instagram Embed Codes:

1. **Go to your Instagram post** in a web browser
2. **Click the three dots** (⋯) on your post
3. **Select "Embed"**
4. **Copy the embed code** (it looks like HTML)
5. **Use the parseInstagramEmbed() function** to extract data

## Example Embed Code:
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/EXAMPLE/" data-instgrm-version="14">
  <div>
    <a href="https://www.instagram.com/p/EXAMPLE/"></a>
  </div>
</blockquote>
` 