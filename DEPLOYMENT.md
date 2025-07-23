# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages.

## Automatic Deployment

The project uses GitHub Actions to automatically deploy to GitHub Pages whenever you push to the `main` branch.

### Setup Steps:

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the "Actions" tab in your repository
   - You should see a "Deploy to GitHub Pages" workflow running
   - Once complete, your site will be available at: `https://[username].github.io/[repository-name]`

## Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The static files will be in the `out` directory
# You can then upload these files to any static hosting service
```

## Configuration

The project is configured with:
- `output: 'export'` in `next.config.js` for static generation
- `trailingSlash: true` for GitHub Pages compatibility
- `unoptimized: true` for images to work in static export
- GitHub Actions workflow in `.github/workflows/deploy.yml`

## Troubleshooting

- If images don't load, ensure they're in the `public` directory
- If routing doesn't work, check that `trailingSlash: true` is set
- For API routes, they won't work in static export - use external APIs instead 