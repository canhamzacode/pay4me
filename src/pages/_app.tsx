import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from 'next/font/local';

const cabinet = localFont({
  src: [
    { path: "../../public/fonts/CabinetGrotesk-Regular.otf", weight: "400" },
    { path: "../../public/fonts/CabinetGrotesk-Black.otf", weight: "900" },
    { path: "../../public/fonts/CabinetGrotesk-Bold.otf", weight: "700" },
    { path: "../../public/fonts/CabinetGrotesk-Medium.otf", weight: "500" },
    { path: "../../public/fonts/CabinetGrotesk-Extrabold.otf", weight: "800" },
  ],
  variable: "--font-cabinet",
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${cabinet.variable} font-cabinet text-text-color`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
