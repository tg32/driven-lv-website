# Instagram Carousel Setup Guide

## Overview
The Instagram carousel is now configured to fetch real posts from DRIVEN's Instagram account. Currently, it will show fallback data until you configure the API credentials.

## Setup Options

### Option 1: Instagram Basic Display API (Recommended)
This is the most reliable long-term solution but requires app review from Meta.

#### Steps:
1. **Create a Facebook App:**
   - Go to https://developers.facebook.com/apps/
   - Click "Create App"
   - Select "Consumer" or "Business" type
   - Fill in app details

2. **Add Instagram Basic Display:**
   - In your app dashboard, click "Add Product"
   - Find "Instagram Basic Display" and click "Set Up"

3. **Configure App Settings:**
   - Add your website domain to "Valid OAuth Redirect URIs"
   - Set up app review (required for production)

4. **Get Access Token:**
   - Use the Instagram Basic Display API to get user authorization
   - Exchange authorization code for access token

5. **Add Environment Variables:**
   Create a `.env.local` file in your project root:
   ```
   NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_access_token_here
   NEXT_PUBLIC_INSTAGRAM_USER_ID=your_user_id_here
   ```

### Option 2: Third-Party Services (Easier)
These services handle the Instagram API complexity for you:

#### EmbedSocial (Recommended for ease)
1. Go to https://embedsocial.com/
2. Create account and connect Instagram
3. Get your feed URL
4. Update the API integration to use their endpoint

#### Curator.io
1. Go to https://curator.io/
2. Connect Instagram account
3. Get API key and feed ID
4. Update integration

#### Flockler
1. Go to https://flockler.com/
2. Connect Instagram
3. Get embed code or API access

### Option 3: Manual Updates (Simplest)
If you prefer to manually update the carousel:

1. **Update Fallback Data:**
   - Edit `src/lib/instagram.ts`
   - Replace the `getFallbackPosts()` function with your latest posts
   - Update images, captions, and timestamps

2. **Regular Updates:**
   - Update the fallback data whenever you post new content
   - This ensures the carousel always shows recent content

## Current Status
- ✅ Carousel component updated to use real API
- ✅ Loading and error states implemented
- ✅ Fallback data provided
- ⏳ Waiting for API credentials or third-party service setup

## Testing
The carousel will currently show fallback data. Once you add API credentials, it will automatically fetch real posts from DRIVEN's Instagram account.

## Troubleshooting
- **No posts showing:** Check API credentials and network connectivity
- **Images not loading:** Verify image URLs are accessible
- **API errors:** Check Instagram API status and rate limits

## Next Steps
1. Choose your preferred setup option
2. Configure API credentials or third-party service
3. Test the integration
4. Deploy to production

The carousel will automatically update with new posts as they're published to Instagram! 