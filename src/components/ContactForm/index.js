import React, { useState, useRef, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Form from "react-bootstrap/Form";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState([]);
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

  useEffect(() => {
    // const url = `https://restcountries.com/v3.1/name/${value}`; // This is useful if we want to retrieve only the country/countries that matches the input
    const url = `https://restcountries.com/v3.1/all`; //This will return array of all countries
    (async () => {
      const res = await fetch(url);
      const jsoncountries = await res.json();
      await setCountries(jsoncountries.map((a) => a.name.common).sort());
      //following code is useful to search a particular country from the list if NOT using bootstrap typeahead
      // let matches = countries.filter((country) => {
      //   const regex = new RegExp(`^${value}`, "gi");
      //   return country.name.common.match(regex);
      // });
      // if (value.length === 0) {
      //   matches = [];
      // }

      // const outputHTML = (matches) => {
      //   if (value.length > 0) {
      //     const html = matches.map(
      //       (match) => `
      //     <div>
      //     <h4>${match.name.common}</h4>
      //     </div>
      //     `
      //     );
      //     console.log(html);
      //     document.getElementById("countryTxtBox").innerHTML = html;
      //   }
      // };
      // outputHTML(matches);
    })();
  }, []);

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
          <label htmlFor="country">Country</label>
          <Form.Group id="typeahead-form">
            <Typeahead
              id="typeahead-country"
              name="country"
              labelKey="name"
              onChange={setSelected}
              options={countries}
              selected={selected}
            />
          </Form.Group>
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
