import { CookieProvider } from "@/context/CookieContext";
import { ThemeProvider } from "@/context/ThemeContext";

export function Providers({ children }) {
  return (
    <CookieProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </CookieProvider>
  );
}
