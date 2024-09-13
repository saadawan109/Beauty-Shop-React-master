import React from 'react';


const About = () => {
  return (
    <div className="container about-page py-5">
      <div className="row">
        <div className="col-lg-6">
          <h2>Welcome to Our Beauty Store</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit nisi sed orci
            posuere, nec suscipit augue varius. Praesent aliquet libero sed velit volutpat, non
            eleifend tortor tristique. Ut sit amet urna id sapien consectetur fermentum. Nulla
            facilisi.
          </p>
          <p>
            In hac habitasse platea dictumst. Nulla sit amet pretium nisl, in suscipit odio.
            Curabitur malesuada augue id tincidunt vestibulum. Vestibulum id elit augue. Donec
            varius leo sit amet massa suscipit aliquam.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src="https://i.pinimg.com/originals/52/ed/99/52ed99725f110e84fd001fb07e91123e.jpg"
            className="img-fluid rounded"
            alt="About Us"
          />
        </div>
      </div>
      <div className="mt-5">
        <h3>Our Products</h3>
        <p>
          Explore our wide range of beauty products including face wash, makeup, shampoo, and
          perfumes. Each product is carefully selected to enhance your beauty regimen and provide
          the best experience.
        </p>
        <p>
          Whether you're looking for daily skincare essentials or luxurious fragrances, we have
          something for everyone. Feel free to browse through our collections and discover your
          new favorite beauty items.
        </p>
      </div>
    </div>
  );
};

export default About;
