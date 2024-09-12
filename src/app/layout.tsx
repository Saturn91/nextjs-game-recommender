import type { Metadata } from "next";
import "./styles/globals.css";
import Container from "./components/Container";
import { inter, roboto } from "./styles/fonts";
import Banner from "./components/Banner";

export const metadata: Metadata = {
  title: "Recommened Games",
  description: "A simple test project by Saturn91",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${inter.className} antialiased`}>
        <Container>
          <Banner />
        </Container>
        <Container className="h-full px-4 py-4">{children}</Container>
      </body>
    </html>
  );
}
