import React from 'react'

const Footer = () => {
  return (
    <>
 <section className='footer'>
  <div className="container margin-footer brr">
    <div className="row">
      <div className="col-md-3">
        <h2>BeautyShop.</h2>
        <p className="op">
          Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
          Gravida massa volutpat aenean odio erat nullam fringilla.
        </p>
        <div className="d-flex justify-content-between op fs-5">
          <i className="ri-facebook-fill" />
          <i className="ri-instagram-line" />
          <i className="ri-twitter-fill" />
          <i className="ri-linkedin-fill" />
          <i className="ri-youtube-fill" />
        </div>
      </div>
      <div className="col-md-3 pb-3 ">
        <div className=" text-uppercase pd">
          <h5 className="pb-2">Quick Links</h5>
          <ul className="menu-list list-unstyled text-uppercase ">
            <li className="menu-item pb-2">
              <a href="#">Home</a>
            </li>
            <li className="menu-item pb-2">
              <a href="#">About</a>
            </li>
            <li className="menu-item pb-2">
              <a href="#">Shop</a>
            </li>
            <li className="menu-item pb-2">
              <a href="#">Blogs</a>
            </li>
            <li className="menu-item pb-2">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className=" text-uppercase pd">
          <h5 className="pb-2">Help &amp; Info Help</h5>
          <ul className="menu-list list-unstyled">
            <li className="menu-item pb-2">
              <a href="#">Track Your Order</a>
            </li>
            <li className="menu-item pb-2">
              <a href="#">Returns Policies</a>
            </li>
            <li className="menu-item pb-2">
              <a href="#">Shipping + Delivery</a>
            </li>
            <li className="menu-item pb-2">
              <a href="#">Contact Us</a>
            </li>
            <li className="menu-item pb-2">
              <a href="#">Faqs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="contact-item pd">
          <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
          <p>
            Do you have any queries or suggestions?{" "}
            <a href="mailto:">yourinfo@gmail.com</a>
          </p>
          <p>
            If you need support? Just give us a call.{" "}
            <a href="">+55 111 222 333 44</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  </section>
   
</>

   
  )
}

export default Footer