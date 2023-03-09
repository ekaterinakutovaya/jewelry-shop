import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";

import { urlFor } from "lib/client";
import { makePostRequest } from "lib/api";
import { Button } from "components";

import styles from "./QueryForm.module.scss";


const QueryForm = ({ image, productName, visible, setVisible }) => {
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    clearErrors,
    control
  } = useForm();

  const sendToTelegram = async (image, caption) => {    

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("photo", urlFor(image));
    formData.append("parseMode", "html");

    let formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    
    const response = await makePostRequest("/api/query", formDataObj)
      .then(() => {
        toast.success("Данные успешно отправлены", {
          position: toast.POSITION.TOP_CENTER
        });
        setVisible(false);
      })
      .catch(response => {
        console.log('error' + response)
      });
  };

  const onSubmit = data => {
    if (!data.phoneNumber && !data.telegramAccount) {
      setError("noData", {
        type: "manual",
        message: "Введите или номер телефона или аккаунт Telegram"
      });
      return;
    }
      data.phoneNumber = data.phoneNumber.slice(8).replace(/\s/g, "");
    
    const caption = [
      `Имя: ${data.customerName}\nТелефон: +998${data.phoneNumber}\nАккаунт в Telegram: ${data.telegramAccount}\nЗаказ: ${productName}`
    ];
    
    sendToTelegram(image, caption);
  };

  
  return (
    <form
      className={styles.wrapper}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.image}>
        <img src={urlFor(image)} alt={productName} />
      </div>

      <div className={styles.content}>
        <h5 className={styles.productName}>{productName}</h5>
        <p className={styles.message}>
          Оставьте ваше имя, номер телефона или аккаунт Telegram, и мы свяжемся
          с вами
        </p>

        {errors.customerName && <p style={{ color: "red" }}>Введите имя</p>}
        <input
          className={styles.name}
          name="customerName"
          type="text"
          placeholder="Имя"
          {...register("customerName", { required: true })}
        />

        {errors["phoneNumber"] && (
          <p style={{ color: "red" }}>Введите номер телефона</p>
        )}

        {errors.noData && (
          <p style={{ color: "red" }}>{errors.noData.message}</p>
        )}

        <InputMask
          className={styles.phone}
          mask="+ (\9\9\8\) 99 999 99 99"
          name="phoneNumber"
          placeholder="+(998) __ ___ __ __"
          {...register("phoneNumber", { required: false })}
          onChange={() => clearErrors("noData")}
        />

        <input
          className={styles.name}
          name="telegramAccount"
          type="text"
          placeholder="или аккаунт Telegram"
          {...register("telegramAccount", { required: false })}
          onChange={() => clearErrors("noData")}
        />

        <Button type="dark" value="Submit">
          Отправить
        </Button>
      </div>
    </form>
  );
};

export default QueryForm;
