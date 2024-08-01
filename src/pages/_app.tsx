import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/Layout/Header/styles.css"
import "@/Layout/Footer/styles.css"
import "@/pages/Home/styles.css"
import "@/pages/ContactUs/styles.css"
import "@/pages/Copyright/styles.css"
import "@/pages/Privacy/styles.css"
import "@/pages/Technology/styles.css"
import "@/pages/Why/styles.css"
import "@/pages/ServiceAdministration/styles.css"
import "@/pages/ServiceNetwork/styles.css"
import "@/pages/HelpDesk/styles.css"
import "@/pages/OEM/styles.css"
import "@/pages/RetailChains/styles.css"
import "@/pages/Ecomm/styles.css"
import "@/pages/SolutionsForConsumers/styles.css"
import "@/Component/Hero/styles.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
