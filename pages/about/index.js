import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { client, urlFor } from "lib/client";
import { fetchInstagramFeed } from "lib/api";
import { Intro, InstagramPosts, GoBackButton, ContactUs, Layout } from "components";

import styles from "./About.module.scss";

const About = ({ about }) => {
  const router = useRouter();
  const { topImage, title, blocks, topImagePlaceholder } = about[0];
  const [feed, setFeed] = useState({});

  useEffect(() => {
    fetchInstagramFeed()
      .then(response => setFeed(response))

    return () => {
      setFeed({})
    }
  }, [])

  const handleGoBack = () => {
    router.back();
  }

  return (
    <Layout title={title}>
      <h1 aria-label="Уникальные ювелирные украшения Yuliya Kutovaya Jewelry Кутовая Юлия заказать в Ташкенте"></h1>
      <Intro image={topImage} placeholder={topImagePlaceholder} title={title} />

      <section className={styles.section}>
        <div className="container">
          <GoBackButton handleGoBack={handleGoBack} />
        </div>
        <div className={styles.wrapper}>
          {blocks?.map((block) => (
            <div className={styles.row} key={block._key}>
              <div className={styles.imageCol}>
                <div className={styles.image}>
                  <img src={urlFor(block.blockImage)} alt={block.blockTitle} />
                </div>
              </div>

              <div className={styles.textCol}>
                <h3 className={styles.title}>{block.blockTitle}</h3>
                {block.paragraph.map((p, index) => (
                  <p className={styles.text} key={index}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {feed && <InstagramPosts feed={feed} />}

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
