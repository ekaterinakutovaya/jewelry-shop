import "../styles/index.scss";
import "../components/UI/Buttons/Button/Button.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from 'next/script'
import { existsGaId, GA_TRACKING_ID } from '../lib/ga'

// import { gsap } from "gsap";

import { ScrollUpButton } from "components";

function MyApp({ Component, pageProps}) {

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {existsGaId && (
          <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
            />
          </>
      )}
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
