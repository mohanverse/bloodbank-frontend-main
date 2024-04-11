import React from "react";

function AboutUsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">About Us</h1>
        </div>
      </div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to ensure a safe and reliable blood supply for patients in need. We aim to raise awareness
            about the importance of blood donation and encourage more people to become regular blood donors.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-6">
            Our vision is to create a world where no patient dies due to lack of blood. We strive to build a strong
            community of blood donors who are committed to saving lives and making a positive impact on society.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Compassion: We care deeply about the well-being of patients and donors.</li>
            <li>Integrity: We uphold the highest standards of ethical conduct in all our activities.</li>
            <li>Excellence: We strive for excellence in blood collection, processing, and distribution.</li>
            <li>Collaboration: We collaborate with healthcare partners and donors to achieve our mission.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="mb-6">
            Meet our dedicated team of healthcare professionals who are passionate about saving lives through blood donation.
            Each member of our team plays a crucial role in ensuring the success of our mission.
          </p>
          {/* Add team members section or any additional content as needed */}
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
