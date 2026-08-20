import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IT Xizmatlari — Professional IT Yechimlar va Helpdesk",
  description: "Dasturiy ta'minot, Cloud & DevOps, Kiberxavfsizlik va 24/7 IT Helpdesk xizmatlari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="min-h-screen bg-slate-900 text-slate-100">{children}</body>
    </html>
  );
}
