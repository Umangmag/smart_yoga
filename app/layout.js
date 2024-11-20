import localFont from 'next/font/local'; // Import to fix the ReferenceError
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Ensure this path is correct relative to your project structure
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
