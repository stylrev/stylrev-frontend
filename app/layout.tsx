import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const metropolis = localFont({
  src: [
    {
      path: "./../assets/fonts/metropolis/Metropolis-Light.otf",
      weight: "300",
    },
    {
      path: "./../assets/fonts/metropolis/Metropolis-Regular.otf",
      weight: "400",
    },
    {
      path: "./../assets/fonts/metropolis/Metropolis-Medium.otf",
      weight: "500",
    },
    {
      path: "./../assets/fonts/metropolis/Metropolis-SemiBold.otf",
      weight: "600",
    },
    {
      path: "./../assets/fonts/metropolis/Metropolis-Bold.otf",
      weight: "700",
    },
    {
      path: "./../assets/fonts/metropolis/Metropolis-ExtraBold.otf",
      weight: "800",
    },
    {
      path: "./../assets/fonts/metropolis/Metropolis-Black.otf",
      weight: "900",
    },
  ],
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Stylrev",
  description: "Elevate Your Style with Personalized Fashion Services",
  icon: "./icon.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={metropolis.className}>
      <head>
        <link rel="icon" type="image/x-icon" href="/icon.jpg"></link>
      </head>
      <body className="bg-white text-lightGray" suppressHydrationWarning={true}>
        <main className="min-h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
