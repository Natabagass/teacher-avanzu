import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./globals.css";
import { ModalProvider } from "@hooks/modal-global";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>        
        {/* <NextAuthProvider>
            <ProfileUserProvider> */}
              <ModalProvider>
                {children}
              </ModalProvider>
            {/* </ProfileUserProvider>
        </NextAuthProvider> */}
        </body>
    </html>
  );
}
