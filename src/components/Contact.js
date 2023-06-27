import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import swal from "sweetalert";

function Contact() {
  const schema = yup
    .object({
      name: yup
        .string()
        .max(50)
        .required("Merci de rentrer votre nom et prénom"),
      email: yup
        .string()
        .email("Merci de renter une adresse mail valide")
        .max(255)
        .required("Merci de rentrer une adresse mail"),
      message: yup.string().required("Merci de rentrer un message"),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, r) => {
    swal({
      title: "Good job!",
      text: "Merci pour votre message 😀",
      icon: "success",
      timer: 5000,
      button: false,
    });

    const templateId = "template_q69zfv4";
    const serviceId = "service_92wp8dr";
    sendFeedback(serviceId, templateId, {
      name: data.name,
      email: data.email,
      message: data.message,
      reply_to: r.target.reset(),
      reload: setTimeout(() => {
        window.location.reload(false);
      }, 6000),
    });
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "z5PNpsUGl-RN2ms9X")
      .then((res) => {
        console.log("succes");
      })
      .catch((err) => console.error("Il y a une erreur"));
  };

  const form = useRef();

  return (
    <div className="contact">
      <form
        className="contact__form"
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="contact__me"> Pour me contacter : </h2>
        <input
          className="contact__user"
          type="text"
          name="name"
          id="name"
          placeholder="Nom et Prénom"
          {...register("name")}
        />
        {errors.name && (
          <p id="c-yup" className="contact__errors">
            {errors.name.message}
          </p>
        )}

        <input
          className="contact__user"
          type="email"
          name="email"
          id="email"
          placeholder="exemple@gmail.com"
          {...register("email")}
        />
        {errors.email && (
          <p id="c-yup" className="contact__errors">
            {errors.email.message}
          </p>
        )}

        <textarea
          className="contact__user contact--textarea"
          name="message"
          placeholder="Merci de renseigner vos questions ou commentaires"
          id="message"
          {...register("message")}
        />
        {errors.message && (
          <p id="c-yup" className="contact__errors">
            {errors.message.message}
          </p>
        )}

        <div className="container__button">
          <input type="submit" value="Envoyer" className="contact__button" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
