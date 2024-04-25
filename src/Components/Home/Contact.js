import axios from "axios";
import "./Contact.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function Contact() {
  const [stateForContact, setStateForContact] = useState(false);
  const [req_sub_succ, set_req_sub_succ] = useState(false);
  // State variables for form fields and validation
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [refAbout, inViewAbout] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });
  // Validation functions
  const validateName = (name) => name.length >= 4;
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{11,14}$/.test(phone);
  const validateDescription = (description) => description.length >= 35;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate each field
    const errors = {};
    if (!validateName(firstName)) {
      errors.firstName = "First name must be at least 4 characters";
    }
    if (!validateName(lastName)) {
      errors.lastName = "Last name must be at least 4 characters";
    }
    if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }
    if (!validatePhone(phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!validateDescription(description)) {
      errors.description = "Description must be at least 35 characters";
    }

    // If there are errors, set them in state
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const timerId = setTimeout(() => {
        // Your function to execute after three seconds
        resetForm();
      }, 5000);

      // Cleanup function to clear the timeout when component unmounts
      return () => clearTimeout(timerId);
    } else {
      setStateForContact({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        description: description,
      });
      // Reset form and errors after submission
      resetForm();
    }
  };

  // Reset form and errors
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setDescription("");
    setFormErrors({});
  };
  useEffect(() => {
    if (stateForContact) {
      axios
        .post("portfolio/contact-me/", stateForContact)
        .then((res) => {
          set_req_sub_succ(true);
          setStateForContact(false);
        })
        .catch((err) => {
          console.log(err);
          setStateForContact(false);
        });
    }
  }, [stateForContact]);
  useEffect(() => {
    if (req_sub_succ) {
      // Function to be executed after 3 seconds
      const myFunction = () => {
        // Add your logic here
        set_req_sub_succ(false);
      };
      // Set a timer for 3 seconds
      const timerId = setTimeout(myFunction, 6000);

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timerId);
    }
  }, [req_sub_succ]);
  return (
    <div className="snapshots">
      <motion.h1
        className=""
        ref={refAbout} // Use refAbout for h1
        initial={{ y: -30, opacity: 0.2 }}
        animate={{
          y: inViewAbout ? 0 : -30,
          opacity: inViewAbout ? 1 : 0.2,
        }}
        transition={{ duration: 1.5 }}
      >
        CONTACT ME
      </motion.h1>
      <motion.h3
        ref={refAbout} // Use refAbout for h3
        initial={{ y: -30, opacity: 0.2 }}
        animate={{
          y: inViewAbout ? 0 : -30,
          opacity: inViewAbout ? 1 : 0.2,
        }}
        transition={{ duration: 1.5 }}
      >
        Please don't hesitate to reach out to me.
      </motion.h3>
      <br />
      <br />
      <div className="my-location">
        <h3
          style={{
            margin: "10px auto 10px 5%",
            width: "fit-content",
          }}
        >
          My Location
        </h3>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211750.24074081753!2d71.40065772665172!3d33.977183193773136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710052931467!5m2!1sen!2s"
            width="90%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* <div className="contact-me-top"> */}
      <h3
        style={{
          margin: "10px auto 10px 5%",
          width: "fit-content",
        }}
      >
        Send me a message!
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="first_last_name">
          <div>
            <input
              type="text"
              placeholder="First Name"
              id="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {formErrors.firstName && (
              <div className="error">{formErrors.firstName}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              id="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {formErrors.lastName && (
              <div className="error">{formErrors.lastName}</div>
            )}
          </div>
          {/* </div> */}
          {/* <div className="first_last_name"> */}
          <div>
            <input
              type="text"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && (
              <div className="error">{formErrors.email}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {formErrors.phone && (
              <div className="error">{formErrors.phone}</div>
            )}
          </div>
        </div>
        {/* <div> */}
        {/* <div> */}
        <textarea
          placeholder="Write about problem or query!"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {formErrors.description && (
          <div
            style={{ margin: "10px auto", width: "fit-content" }}
            className="error"
          >
            {formErrors.description}
          </div>
        )}
        {/* </div> */}
        {/* </div> */}
        <div className="first_last_name" style={{ justifyContent: "center" }}>
          <button type="submit">CONTACT ME!</button>
        </div>
        {req_sub_succ && (
          <p className="form_sub_succ">
            You have Contacted Ajmal Khan successfully
          </p>
        )}
      </form>
      {/* </div> */}
    </div>
  );
}

export default Contact;
