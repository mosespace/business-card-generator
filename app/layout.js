import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/redux/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Business Card Generator",
  description: "Created by Kisakye Moses",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
