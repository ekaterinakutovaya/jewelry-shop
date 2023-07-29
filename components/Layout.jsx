import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { client } from "lib/client";
import {Navbar, Footer, PagePreloader} from "components";


const Layout = ({ title, children }) => {
  const { events } = useRouter();
  const [header, setHeader] = useState([]);
  const [footer, setFooter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    events.on("routeChangeStart", () => {
      setLoading(true);
    });

    events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [events]);

  useEffect(() => {
    const fetchHeader = async () => {
      const headerQuery = '*[_type == "header"]';
      const header = await client.fetch(headerQuery);
      setHeader(header);
    };

    const fetchFooter = async () => {
      const footerQuery = '*[_type == "footer"]';
      const footer = await client.fetch(footerQuery);
      setFooter(footer);
    };

    fetchHeader();
    fetchFooter();

    return () => {
      setHeader([]);
      setFooter([]);
    };
  }, []);

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
        <Navbar header={header} />
      </header>

      <main>{children}</main>

      <footer>
        <Footer footer={footer} />
      </footer>
       {loading && <PagePreloader header={header} />}
    </>
  );
};

export default Layout;
