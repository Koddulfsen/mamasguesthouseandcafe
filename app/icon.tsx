import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const css = await fetch('https://fonts.googleapis.com/css2?family=Lobster').then(r => r.text())
  const fontUrl = css.match(/src: url\((.+?)\) format/)?.[1] ?? ''
  const fontData = await fetch(fontUrl).then(r => r.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #d4907a 0%, #b080a8 50%, #6baead 100%)',
          borderRadius: 6,
        }}
      >
        <span
          style={{
            color: '#f0e6d0',
            fontSize: 22,
            fontFamily: 'Lobster',
            lineHeight: 1,
            marginTop: 2,
          }}
        >
          M
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Lobster', data: fontData, style: 'normal', weight: 400 }],
    },
  )
}
