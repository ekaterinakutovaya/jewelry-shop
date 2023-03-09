import "../styles/index.scss";
import "../components/UI/Buttons/Button/Button.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

import { ScrollUpButton } from "components";


function MyApp({ Component, pageProps}) {

  return (
    <>
      <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
        <ToastContainer
          autoClose={4000}
          hideProgressBar={true}
          position="top-center"
        />
        <ScrollUpButton />
    </>
  );
}

export default MyApp
