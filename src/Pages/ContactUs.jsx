import React from "react";

function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
        </div>
      </div>
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-4">
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
