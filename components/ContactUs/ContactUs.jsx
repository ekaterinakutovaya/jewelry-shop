import { useState } from 'react';

import { makePostRequest } from "lib/api";

import { Button } from 'components';
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
        <h2>Напишите нам</h2>

        {!isFormSubmitted ? (
          <div className={styles.form}>

            <div className={styles.inputsWrapper}>
              <input
                type="text"
                name="name"
                className={styles.name}
                placeholder="Имя"
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
                placeholder="Сообщение"
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <Button type="dark" onClick={onSubmit}>
              {!loading ? 'Отправить' : 'Отправляется...'}
            </Button>

          </div>
        ) : (
          <div>
            <h3 className={styles.success}>
              Сообщение отправлено!
            </h3>
          </div>
        )}


      </div>
    </section>

  );
};

export default ContactUs;