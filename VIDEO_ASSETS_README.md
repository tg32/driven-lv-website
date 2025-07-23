# Video Assets Guidelines

This document provides guidelines for managing video assets on the DRIVEN LV website to ensure optimal performance and accessibility.

## Current Video Assets

| File | Size | Notes |
|------|------|-------|
| `cpn-driven-video.mp4` | 22M | Large file, consider optimization |
| `IG4.mp4` | 15M | Large file, consider optimization |
| `ig0703_web.mp4` | 3.1M | Already optimized |
| `ig0703.mp4` | 2.6M | Consider removing if `ig0703_web.mp4` is used |
| `IG3.mp4` | 2.3M | Consider optimization |
| `ig0703_small.mp4` | 832K | Good for mobile |

## Optimization Recommendations

1. **Compress Large Videos**:
   - Use tools like HandBrake or FFmpeg to reduce file sizes
   - Target bitrate: 1.5-2.5 Mbps for 1080p, 0.8-1.5 Mbps for 720p
   - Use H.264 codec for maximum compatibility

2. **Recommended Maximum Sizes**:
   - Hero/Background Videos: 5-10MB
   - Content Videos: 2-5MB
   - Mobile-optimized: Under 1MB when possible

3. **Accessibility Requirements**:
   - Add captions (`.vtt` files) for all videos with spoken content
   - Provide text transcripts for all videos
   - Ensure videos don't autoplay with sound
   - Include descriptive titles and descriptions

## Adding New Videos

1. **Naming Convention**:
   - Use lowercase with hyphens (e.g., `program-overview.mp4`)
   - Add `_mobile` or `_desktop` suffix if providing different versions
   - Add `_captions` suffix for videos with burned-in captions

2. **Required Files for Each Video**:
   - `video-name.mp4` (main video file)
   - `video-name.vtt` (captions, if applicable)
   - `video-name.jpg` (poster frame)
   - `video-name-transcript.txt` (full transcript)

## Implementation Example

```jsx
<video 
  controls
  aria-label="Video description"
  poster="/videos/video-name.jpg"
>
  <source src="/videos/video-name.mp4" type="video/mp4" />
  <track
    kind="captions"
    src="/videos/video-name.vtt"
    srcLang="en"
    label="English"
    default
  />
  Your browser does not support the video tag.
  <a href="/videos/video-name-transcript.txt">Read the transcript</a>
</video>
```

## Tools for Optimization

- **HandBrake**: For video compression
- **FFmpeg**: For advanced video processing
- **WebM for smaller file sizes**: Consider converting to WebM format for browsers that support it
- **TinyPNG/TinyJPG**: For optimizing poster images

## Accessibility Checklist

- [ ] Videos have accurate captions
- [ ] Transcripts are provided
- [ ] Videos don't autoplay with sound
- [ ] Pause/play controls are visible and keyboard-accessible
- [ ] Video player has proper contrast
- [ ] Video descriptions are available for screen readers
