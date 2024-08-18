import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import Providers from "@/lib/Providers";
import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blood Bucket",
  description: "donate blood save life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html>
        <body >
          <AppRouterCacheProvider>
            <Toaster position="top-center"/>
            {children}
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
