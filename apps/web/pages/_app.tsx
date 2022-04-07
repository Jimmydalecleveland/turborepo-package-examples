import App from "next/app";
import "esbuild-ui/dist/index.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
