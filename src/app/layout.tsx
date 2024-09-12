import type { Metadata } from "next";
import "./styles/globals.css";
import Container from "@/app/components/Container";
import { inter, roboto } from "@/app/styles/fonts";

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
        <Container>{children}</Container>
      </body>
    </html>
  );
}
