import './globals.css'

export const metadata = {
  title: 'Rustik Plank Furniture',
  description: 'Reclaimed and handcrafted furniture',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
