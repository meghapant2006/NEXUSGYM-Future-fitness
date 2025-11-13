import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

export const metadata: Metadata = {
  title: "NEXUS GYM - Transform Your Body Today",
  description: "Join the most advanced fitness facility with state-of-the-art equipment, expert trainers, and a community that motivates you to succeed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}
