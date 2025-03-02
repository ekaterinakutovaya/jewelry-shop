import {useContext, useState} from "react";

import { makePostRequest } from "lib/api";

import { Button } from 'components';
import styles from "./ContactUs.module.scss";
import {LanguageContext} from "../../context/LanguageContext";
import {useTranslations} from "../../hooks/useTranslations";

const ContactUs = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const t = useTranslations();

  const { name, email, message } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async () => {
    setLoading(true);
    await makePostRequest("/api/sendMessage", data)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        setTimeout(() => {
          setData({ name: '', email: '', message: '' });
          setIsFormSubmitted(false);
        }, 6000)
      })
  }

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h2>{t.contact_us}</h2>

        {!isFormSubmitted ? (
          <div className={styles.form}>

            <div className={styles.inputsWrapper}>
              <input
                type="text"
                name="name"
                className={styles.name}
                placeholder={t.your_name}
                value={name}
                onChange={handleChangeInput}
              />

              <input
                type="email"
                name="email"
                className={styles.email}
                placeholder="email"
                value={email}
                onChange={handleChangeInput}
              />

            </div>

            <div className="">
              <textarea
                name="message"
                rows="10"
                className={styles.message}
                placeholder={t.message}
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <Button type="dark" onClick={onSubmit}>
              {!loading ? t.send : t.sending}
            </Button>

          </div>
        ) : (
          <div>
            <h3 className={styles.success}>
              {t.sent}
            </h3>
          </div>
        )}


      </div>
    </section>

  );
};

export default ContactUs;