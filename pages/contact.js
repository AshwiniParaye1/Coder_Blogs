import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, phone, email, desc);
    const data = { phone, name, email, desc };

    fetch("http://localhost:3000/api/postContact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for contacting!");
        setPhone("");
        setName("");
        setDesc("");
        setEmail("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    // console.log(e, "change");
    if (e.target.name === "phone") {
      setPhone(e.target.value);
      // console.log("phone ==== ", e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
      // console.log("email ==== ", e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
      // console.log("desc ==== ", e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
      // console.log("name ==== ", e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            id="phone"
            value={phone}
            pattern="[0-9]{10}"
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc">Elaborate your concern</label>
          <textarea
            className="form-control"
            placeholder="Write your concern here"
            name="desc"
            id="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
