import { Tubahh } from "next/font/google";
import "./globals.css";

const Tubahh = Tubahh({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Happy Birthday Tubuu!",
  description: "Celebrate your day with joy and happiness!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Tubah.className} antialiased bg-black select-none`}
      >
        {children}
      </body>
    </html>
  );
}
