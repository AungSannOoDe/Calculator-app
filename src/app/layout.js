
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"/>
      <body>
        {children}
      </body>
    </html>
  );
}
