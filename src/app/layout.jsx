import "./globals.css";
import { ThemeContextProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "พอตฟอริโอ้.com",
  description: "แสดงผลงานและประสบการณ์การทำงาน",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
        <Navbar />
        {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
