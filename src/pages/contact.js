import React, { useRef, useContext } from "react";
import emailjs from "emailjs-com";
import Layout from "../layout/Layout";
import { StyledContact } from "../styled/contact.styled";
import { AiFillMail, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { ThemeContext } from "../context/ThemeProvider";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_21ughjf",
        "contact_form",
        form.current,
        "user_gddiMhARmoLCK9FcmaEeH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Layout>
      <StyledContact>
        <h4>Contact Me</h4>
        <ul>
          <a
            href="mailto:danny.meuse@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillMail />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-meuse-a28079a6/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/dmeuse"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </ul>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />

          <button>Submit</button>
        </form>
      </StyledContact>
    </Layout>
  );
};

export default Contact;
