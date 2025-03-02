import {useContext, useEffect} from "react";
import { useRouter } from "next/router";

import { client, urlFor } from "lib/client";
import { Intro, GoBackButton, Layout, Gallery, ProgressiveImage } from "components";

import styles from "./Post.module.scss";
import {LanguageContext} from "../../context/LanguageContext";
import {useTranslations} from "../../hooks/useTranslations";


const Post = ({ post }) => {
  const router = useRouter();
  const { locale } = useContext(LanguageContext);
  const { topImage, title_ru, title_en, blocks, topImagePlaceholder } = post[0];
  const t = useTranslations();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleGoBack = () => {
    router.back();
  }
  

  return (
    <Layout title={locale === "ru" ? title_ru : title_en}>
      <h1 aria-label="31 января День Ювелира основатель Михаил Кутовой ювелир January 31st Jeweller's day founder Michael Kutovoy jeweller"></h1>
      <div>
        <Intro
          image={topImage}
          placeholder={topImagePlaceholder}
          title={locale === "ru" ? title_ru : title_en}
        />
      </div>

      <section className={styles.section}>
        <div className="container">
          <GoBackButton handleGoBack={handleGoBack} />

          <div className={styles.wrapper}>
            <div className={styles.info}>
              <p className={styles.date}>{t.jan_31}</p>
              <p className={styles.author}>{t.juliya_kutovaya}</p>
            </div>

            <div className={styles.row}>
              <div className={styles.imageCol}>
                <Gallery props={blocks[0].carousel} />
              </div>

              <div className={styles.textCol}>
                {blocks[0]?.[`paragraph_${locale}`].map((p, index) => (
                  <p className={styles.text} key={index}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.textCol}>
                {blocks[1]?.[`paragraph_${locale}`].map((p, index) => (
                  <p className={styles.text} key={index}>
                    {p}
                  </p>
                ))}
              </div>
            
              <div className={styles.imageCol}>
                <Gallery props={blocks[1].carousel} />
              </div>
            </div>
            
            <div className={styles.info}>
              <p className={styles.date}>{t.feb_21}</p>
              <p className={styles.author}>{t.michael_kutovoy}</p>
            </div>
            
            <div className={styles.grid}>
              <div>
                <div className={styles.authorImage}>
                  <div>
                    <ProgressiveImage
                      src={urlFor(blocks[2].blockImage)}
                      placeholder={urlFor(blocks[2].blockImageMin)}
                      alt="photo"
                    />
                  </div>
                </div>
                <div className={styles.caption}>{blocks[2]?.[`caption_${locale}`]}</div>
              </div>
            
              <div>
                <div>
                  {blocks[2]?.[`paragraph_${locale}`].map((p, index) => (
                    <p className={styles.text} key={index}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.grid}>
              <div></div>
            
              <div>
                <div className={styles.articleImage}>
                  <ProgressiveImage
                    src={urlFor(blocks[3].blockImage)}
                    placeholder={urlFor(blocks[3].blockImageMin)}
                    alt="photo"
                  />
                  <div className={styles.caption}>{blocks[3]?.[`caption_${locale}`]}</div>
                </div>
            
                <div className={styles.article}>
                  {blocks[3]?.[`paragraph_${locale}`].map((p, index) => (
                    <p className={styles.text} key={index}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.grid}>
              <div></div>
            
              <div>
                <div className={styles.articleImage}>
                  <ProgressiveImage
                    src={urlFor(blocks[4].blockImage)}
                    placeholder={urlFor(blocks[4].blockImageMin)}
                    alt="photo"
                  />
                  <div className={styles.caption}>{blocks[4]?.[`caption_${locale}`]}</div>
                </div>
            
                <div className={styles.article}>
                  {blocks[4]?.[`paragraph_${locale}`].map((p, index) => (
                    <p className={styles.text} key={index}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.grid}>
              <div></div>
            
              <div>
                <div className={styles.articleImage}>
                  <ProgressiveImage
                    src={urlFor(blocks[5].blockImage)}
                    placeholder={urlFor(blocks[5].blockImageMin)}
                    alt="photo"
                  />
                  <div className={styles.caption}>{blocks[5]?.[`caption_${locale}`]}</div>
                </div>
            
                <div className={styles.article}>
                  {blocks[5]?.[`paragraph_${locale}`].map((p, index) => (
                    <p className={styles.text} key={index}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.grid}>
              <div></div>
            
              <div>
                <div className={styles.articleImage}>
                  <ProgressiveImage
                    src={urlFor(blocks[6].blockImage)}
                    placeholder={urlFor(blocks[6].blockImageMin)}
                    alt="photo"
                  />
                  <div className={styles.caption}>{blocks[6]?.[`caption_${locale}`]}</div>
                </div>
            
                <div className={styles.article}>
                  {blocks[6]?.[`paragraph_${locale}`].map((p, index) => (
                    <p className={styles.text} key={index}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export const getServerSideProps = async () => {
  const query = '*[_type == "post"]';

  const post = await client.fetch(query);

  return {
    props: { post }
  };
};

export default Post;