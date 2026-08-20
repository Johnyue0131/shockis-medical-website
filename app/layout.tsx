import type { Metadata } from "next"; import "./globals.css";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shockismedical.com";
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"SHOCKIS Medical | Focused Shockwave Technology",template:"%s | SHOCKIS Medical"},description:"Professional radial shockwave therapy systems manufactured for global medical distributors, healthcare providers and OEM partners.",alternates:{canonical:"/"},icons:{icon:"/favicon.svg"},verification:{google:"doIErIC1c4-kdtV3L_yw_Ph7aU_I5owSxwU-TjKT"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
