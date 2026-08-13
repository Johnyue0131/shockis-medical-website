import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:{default:"Aven Medical | Global MedTech Partner",template:"%s | Aven Medical"},description:"Reliable medical devices, quality manufacturing and regulatory support for global healthcare markets.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
