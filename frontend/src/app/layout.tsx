import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "IT Xizmatlar — Zamonaviy Web Saytlar, Mobile App va Landing Page",
  description: "Enterprise software development, Cloud & DevOps, Cybersecurity and IT solutions platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" data-theme="dark" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('it_services_theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-base-100 text-base-content antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
