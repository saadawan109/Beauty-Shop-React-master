import React from 'react';

const ContactForm = () => {
  return (
    <div className="container contact">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" className=" shop-btn">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
