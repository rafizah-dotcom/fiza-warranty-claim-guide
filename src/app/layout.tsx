import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIZA WARRANTY CLAIM GUIDE — Blue Editorial",
  description: "A practical checklist for anyone preparing to file a warranty claim. Prepared by: Fiza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-on-surface antialiased selection:bg-primary-soft-2 selection:text-primary-ink min-h-screen">
        {children}
      </body>
    </html>
  );
}
