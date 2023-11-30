import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6">
        <div className="footer-section">
        <h1 className="text-[1.8rem] font-bold text-rose-500">
          Style Collection
        </h1>
          <p>Discover the latest trends</p>
          <p>Exclusive collections</p>
          <p>Shop by category</p>
        </div>

        <div className="footer-section">
          <h1 className="text-xl font-semibold mb-4">CUSTOMER SERVICE</h1>
          <p>Contact Us</p>
          <p>Track Order</p>
          <p>Return Order</p>
          <p>Cancel Order</p>
        </div>

        <div className="footer-section">
          <h1 className="text-xl font-semibold mb-4">COMPANY</h1>
          <p>About Us</p>
          <p>We're Hiring</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Blog</p>
        </div>

        <div className="footer-section">
          <h1 className="text-xl font-semibold mb-4">CONNECT WITH US</h1>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="footer-section">
          <h1 className="text-xl font-semibold mb-4">HELP</h1>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation and Returns</p>
          <p>FAQ</p>
          <p>Report Infringement</p>
        </div>

        <div className="footer-section">
          <h1 className="text-xl font-semibold mb-4">CONSUMER POLICY</h1>
          <p>Cancellation & Returns</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
        </div>

        <div className="footer-section">
          <h1 className="text-xl font-semibold mb-4">NEWSLETTER</h1>
          <p>Subscribe to our newsletter for updates</p>
          {/* Add newsletter subscription form or input field */}
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm opacity-70">
          &copy; {new Date().getFullYear()} YourClothingStore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
