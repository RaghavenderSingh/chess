import { Theme, ThemePanel } from "@radix-ui/themes";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Theme>
        <body>{children}</body>
      </Theme>
    </html>
  );
}
