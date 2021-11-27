import type { AppProps } from "next/app";
import "modern-css-reset/dist/reset.min.css";
import { AuthContextProvider } from "components/function/auth-context-provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
