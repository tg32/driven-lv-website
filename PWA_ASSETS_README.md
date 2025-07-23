# PWA Assets Setup

This document provides instructions for setting up the Progressive Web App (PWA) assets for the DRIVEN LV website.

## Required Assets

### Icons

Create the following icon sizes in the `public/icons/` directory:

- `icon-72x72.png` (72×72)
- `icon-96x96.png` (96×96)
- `icon-128x128.png` (128×128)
- `icon-144x144.png` (144×144)
- `icon-152x152.png` (152×152)
- `icon-192x192.png` (192×192, maskable)
- `icon-384x384.png` (384×384)
- `icon-512x512.png` (512×512)

### Screenshots

Add the following screenshots to the `public/screenshots/` directory:

- `homepage-mobile.png` (375×812, mobile screenshot)
- `homepage-desktop.png` (1920×1080, desktop screenshot)

## Generating Icons

1. Start with a high-resolution source image (at least 512×512)
2. Use an image editor or online tool to generate the required sizes
3. Save them in the appropriate format and location

## Recommended Tools

- [Favicon Generator](https://realfavicongenerator.net/)
- [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator)
- [Maskable.app Editor](https://maskable.app/editor) (for maskable icons)

## Notes

- Ensure all icons maintain good contrast and are clearly visible on both light and dark backgrounds
- The `icon-192x192.png` should be maskable (safe area in the center)
- Screenshots should showcase the main features of the website
- Keep file sizes optimized for web (use tools like TinyPNG if needed)

## Testing

After adding the assets, test the PWA installation on various devices and browsers to ensure all icons display correctly.
