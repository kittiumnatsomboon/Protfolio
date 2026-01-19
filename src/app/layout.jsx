import "./globals.css";
import { ThemeContextProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/Authcontext";
export const metadata = {
  title: "พอตฟอริโอ้.com",
  description: "แสดงผลงานและประสบการณ์การทำงาน",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeContextProvider>
            <Navbar />
            {children}
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
