import "./globals.css";
import { DM_Sans } from 'next/font/google'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="text-white" data-barba="wrapper">
        <div className="transition" />
          <div className="page-wrapp">
            {/* Static Content */}
            <Header />
            {/* Dynamic Content */}
            <main 
              data-barba="container" 
              data-barba-namespace="home" 
              className="container-wrapper"
            >
                {children}
            </main>
            {/* Static Content */}
            <Portfolio />
            <Footer />
            <PrismicPreview repositoryName={repositoryName} />
          </div>
        </body>
    </html>
  );
}
