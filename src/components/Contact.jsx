// import React from 'react';
// import '../App.css';

// const Contact = () => {
//   return (
//     <div className="page contact fade-in">
//       <h1>Contact Me</h1>
//       <p>Feel free to reach out to me at <a href="mailto:hnandodecima@gmail.com">hnandodecima@gmail.com</a>.</p>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/xkgjgqzb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="page contact fade-in">
      <h1>Contact Me</h1>

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>

          <button type="submit">Send</button>
        </form>
      ) : (
        <p>Thank you for your message! I'll get back to you soon.</p>
      )}
      <p>Feel free to reach out to me at <a href="mailto:hnandodecima@gmail.com">hnandodecima@gmail.com</a>.</p>
    </div>
  );
};

export default Contact;