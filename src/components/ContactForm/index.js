import React, { useState, useRef } from "react";
import {
  initalState,
  StyledButton,
  StyledError,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
  StyledSuccess,
  StyledTextArea,
} from "./FormElements";

const ContactForm = () => {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const txtRefN = useRef();
  const txtRefE = useRef();
  const txtRef = useRef();
  const postFormData = (formdata) => {
    fetch(
      "https://react-tutorial-c9f96-default-rtdb.asia-southeast1.firebasedatabase.app/contactinfo.json",
      {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => {
        setSuccess("Thanks for contacting! Will reach out to you shortly.");
        txtRefN.current.value = "";
        txtRefE.current.value = "";
        txtRef.current.value = "";
        console.log(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");
    const formdata = {
      name: state.name,
      email: state.email,
      msg: state.message,
    };
    postFormData(formdata);
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };
  return (
    <>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          {success && (
            <StyledSuccess>
              <>
                <br />
                <p>{success}</p>
              </>
            </StyledSuccess>
          )}
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
            ref={txtRefN}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
            ref={txtRefE}
          />
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
            ref={txtRef}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default ContactForm;
