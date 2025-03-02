import {useContext} from "react";
import { useRouter } from "next/router";

import { client, urlFor } from "lib/client";
import { Intro, GoBackButton, ContactUs, Layout } from "components";

import styles from "./About.module.scss";
import {LanguageContext} from "../../context/LanguageContext";

const About = ({ about }) => {
  const router = useRouter();
  const { locale } = useContext(LanguageContext);
  const { topImage, title_ru, title_en, blocks, topImagePlaceholder } = about[0];

  const handleGoBack = () => {
    router.back();
  }

  return (
    <Layout title={locale === "ru" ? title_ru : title_en}>
      <h1 aria-label="Уникальные ювелирные украшения Yuliya Kutovaya Jewelry Кутовая Юлия заказать в Ташкенте"></h1>
      <Intro image={topImage} placeholder={topImagePlaceholder} title={locale === "ru" ? title_ru : title_en} />

      <section className={styles.section}>
        <div className="container">
          <GoBackButton handleGoBack={handleGoBack} />
        </div>
        <div className={styles.wrapper}>
          {blocks?.map((block) => (
            <div className={styles.row} key={block._key}>
              <div className={styles.imageCol}>
                <div className={styles.image}>
                  <img src={urlFor(block.blockImage)} alt={block?.[`blockTitle_${locale}`]} />
                </div>
              </div>

              <div className={styles.textCol}>
                <h3 className={styles.title}>{block?.[`blockTitle_${locale}`]}</h3>
                {block?.[`paragraph_${locale}`].map((p, index) => (
                  <p className={styles.text} key={index}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactUs />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "about"]';

  const about = await client.fetch(query);

  return {
    props: { about }
  };
};

export default About;
