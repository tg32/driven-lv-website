import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { params: string[] } }
) {
  try {
    const [width, height, bgColor, textColor, ...textParts] = params.params
    const text = textParts.join('/').replace(/\?text=/, '')
    
    // Create a simple HTML-based placeholder that looks like an image
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              margin: 0;
              padding: 0;
              width: ${width}px;
              height: ${height}px;
              background-color: #${bgColor};
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: Arial, sans-serif;
              font-size: 18px;
              color: #${textColor};
              text-align: center;
              overflow: hidden;
            }
            .text {
              padding: 20px;
              word-wrap: break-word;
              max-width: 90%;
            }
          </style>
        </head>
        <body>
          <div class="text">${decodeURIComponent(text)}</div>
        </body>
      </html>
    `
    
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=31536000',
      },
    })
  } catch (error) {
    return new NextResponse('Error generating placeholder', { status: 500 })
  }
} 