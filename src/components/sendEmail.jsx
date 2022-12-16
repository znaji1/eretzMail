import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { showError, showSuccess } from "./Notifications";
const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y22i5cn",
        "template_sqcyzwo",
        form.current,
        "73df3mpt3FUByu3G6"
      )
      .then(
        (result) => {
          showSuccess("Email a été envoyé avec succès");
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          showError({ error });
        }
      );
  };

  return (
    <StyleMailForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Votre Email : </label>
        <input type="email" name="user_email" />
        <label>Destinataire :</label>
        <input type="email" name="user_name" />
        <label>Sujet :</label>
        <input type="text" name="user_subject" />
        <label>Corps de text :</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyleMailForm>
  );
};

export default SendEmail;

// Styles

const StyleMailForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #008cba;
      color: white;
      border: none;
    }
  }
`;
