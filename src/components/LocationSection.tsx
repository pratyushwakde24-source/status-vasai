import React from 'react';

const LocationSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-center text-white mb-12">
          Find Us Here
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h3 className="text-2xl font-serif text-amber-500 mb-4">The Status Vasai</h3>
            <p className="text-gray-300 mb-2">Panchal Nagar, Anand Nagar, Vasai West,</p>
            <p className="text-gray-300 mb-4">Vasai-Virar, Maharashtra 401202</p>
            <p className="text-gray-300 mb-2"><strong>Phone:</strong> +91 12345 67890</p>
            <p className="text-gray-300"><strong>Email:</strong> info@statusvasai.com</p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.863313993454!2d72.8158647148951!3d19.37524398696659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aebfc97b35e3%3A0x35b3d19a8d3c3c1c!2sThe%20Status%20Vasai!5e0!3m2!1sen!2sin!4v1678886486241!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;