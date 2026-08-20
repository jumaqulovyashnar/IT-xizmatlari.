import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "IT Xizmatlari Pro — Professional IT Infrastructure & Helpdesk",
  description: "Enterprise software development, Cloud & DevOps, Cybersecurity and 24/7 IT Helpdesk platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" data-theme="dark">
      <body className="min-h-screen bg-base-100 text-base-content antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
