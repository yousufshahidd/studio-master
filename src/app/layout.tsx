import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { FirebaseProvider } from "@/lib/firebase/client"; // Import FirebaseProvider
import { Toaster } from "@/components/ui/toaster"; // Import Toaster for notifications
import { ThemeProvider } from "@/components/theme-provider"; // Import ThemeProvider for dark mode

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AccountBook Pro",
  description: "Advanced Accounting Application",
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyB-95bJ9Kil5YPoQdzGM4hJBZ-KHreijQU",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "accountbook-l9ea9.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "accountbook-l9ea9",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "accountbook-l9ea9.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "85242748556",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:85242748556:web:9875307d5d79fb13b2e5a9",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-F8K3SQF04M"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <FirebaseProvider config={firebaseConfig}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
            <Toaster />
          </ThemeProvider>
        </FirebaseProvider>
      </body>
    </html>
  );
}
