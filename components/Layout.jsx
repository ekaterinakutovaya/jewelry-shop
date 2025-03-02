import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import {Navbar, Footer, PagePreloader} from "components";


const Layout = ({ title, children }) => {
  const { events } = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    events.on("routeChangeStart", () => {
      setLoading(true);
    });

    events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="ювелирные изделия украшения Ташкент jewelry yuliya kutovaya юлия кутовая Tashkent"
        />
        <meta
          name="description"
          content="Уникальные ювелирные украшения с тонкими мотивами Центральной Азии. Новое прочтение национальных узбекских украшений. Дизайны удостоенные наград на международных конкурсах. Премиальное качество изделий. Собственная разработка и производство. Высокие характеристики драгоценных камней и жемчуга. Гарантия качества и подлинности."
        />
        <meta name="yandex-verification" content="4495c81e422e3c77" />
        <meta name="yandex-verification" content="d1c3de492961fc13" />
        <title>{title}</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
       {loading && <PagePreloader />}
    </>
  );
};

export default Layout;
