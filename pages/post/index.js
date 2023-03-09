import { useEffect } from "react";
import { useRouter } from "next/router";

import { client, urlFor } from "lib/client";
import { Intro, GoBackButton, Layout, Gallery, ProgressiveImage } from "components";

import styles from "./Post.module.scss";


const Post = ({ post }) => {
  const router = useRouter();
  const { topImage, title, blocks, topImagePlaceholder } = post[0];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleGoBack = () => {
    router.back();
  }


  return (
    <Layout title={title}>
      <div>
        <Intro
          image={topImage}
          placeholder={topImagePlaceholder}
          title={title}
        />
      </div>

      <section className={styles.section}>
        <div className="container">
          <GoBackButton handleGoBack={handleGoBack} />

          <div className={styles.wrapper}>
            <div className={styles.info}>
              <p className={styles.date}>31 января 2023</p>
              <p className={styles.author}>Юлия Кутовая</p>
            </div>


            <div className={styles.row}>
              <div className={styles.imageCol}>
                <Gallery props={blocks[0].carousel} />
              </div>

              <div className={styles.textCol}>
                {blocks[0].paragraph.map((p, index) => (
                  <p className={styles.text} key={index}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.textCol}>
                {blocks[1].paragraph.map((p, index) => (
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
              <p className={styles.date}>21 февраля 2001</p>
              <p className={styles.author}>Михаил Кутовой</p>
            </div>

            <div className={styles.grid}>
              <div>
                <div className={styles.authorImage}>
                  <div >
                    <ProgressiveImage
                      src={urlFor(blocks[2].blockImage)}
                      placeholder={urlFor(blocks[2].blockImageMin)}
                      alt="photo"
                    />
                  </div>
                </div>
                <div className={styles.caption}>{blocks[2].caption}</div>
              </div>

              <div>
                <div>
                  {blocks[2].paragraph.map((p, index) => (
                    <p className={styles.text} key={index}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.grid}>
              <div>
              </div>

              <div>
                <div className={styles.articleImage}>
                  <ProgressiveImage
                    src={urlFor(blocks[3].blockImage)}
                    placeholder={urlFor(blocks[3].blockImageMin)}
                    alt="photo"
                  />
                  <div className={styles.caption}>{blocks[3].caption}</div>
                </div>

                <div className={styles.article}>
                  {blocks[3].paragraph.map((p, index) => (
                    <p className={styles.text} key={index}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>


            <div className={styles.grid}>
              <div>
              </div>

              <div>
                <div className={styles.articleImage}>
                  <ProgressiveImage
                    src={urlFor(blocks[4].blockImage)}
                    placeholder={urlFor(blocks[4].blockImageMin)}
                    alt="photo"
                  />
                  <div className={styles.caption}>{blocks[4].caption}</div>
                </div>

                <div className={styles.article}>
                  {blocks[4].paragraph.map((p, index) => (
                    <p className={styles.text} key={index}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.grid}>
              <div>
              </div>

              <div>
                <div className={styles.articleImage}>
                  <ProgressiveImage
                    src={urlFor(blocks[5].blockImage)}
                    placeholder={urlFor(blocks[5].blockImageMin)}
                    alt="photo"
                  />
                  <div className={styles.caption}>{blocks[5].caption}</div>
                </div>

                <div className={styles.article}>
                  {blocks[5].paragraph.map((p, index) => (
                    <p className={styles.text} key={index}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.grid}>
              <div>
              </div>

              <div>
                <div className={styles.articleImage}>
                  <ProgressiveImage
                    src={urlFor(blocks[6].blockImage)}
                    placeholder={urlFor(blocks[6].blockImageMin)}
                    alt="photo"
                  />
                  <div className={styles.caption}>{blocks[6].caption}</div>
                </div>

                <div className={styles.article}>
                  {blocks[6].paragraph.map((p, index) => (
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