import "../styles/globals.css";
import Header from "../components/Header";
import { MainContextProvider } from "../helpers/MainContext";
function MyApp({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <Header />

      <Component {...pageProps} />
    </MainContextProvider>
  );
}

export default MyApp;
