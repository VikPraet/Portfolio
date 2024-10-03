import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/your-profile',
    icon: <i className="fab fa-linkedin-in fa-2x"></i>,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/VikPraet',
    icon: <i className="fab fa-github fa-2x"></i>,
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/414822577324687360',
    icon: <i className="fab fa-discord fa-2x"></i>,
  },
  {
    name: 'Sketchfab',
    url: 'https://sketchfab.com/Vik_Praet',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8334 8334" className="w-8 h-8">
        <path
          d="M4083,0c255.59-1.176,500.03,3,715,45,73.79,14.418,145.49,19.581,216,37,225.27,55.657,438.89,105.965,638,185,128.38,50.961,252.2,106.37,372,164l106,53q101.985,57.995,204,116c124.39,77.421,244.91,158.3,360,245,590.57,444.85,1062.33,1053.04,1357,1794,89.62,225.34,155.92,466.61,213,728,20.18,92.4,28.23,188.5,45,285q6,54.99,12,110q4.005,56.49,8,113q2.505,48,5,96c9.11,60.1,4,128.34,4,193c0.01,101.76,5.26,206.44-9,298q-4.005,53.49-8,107c-15.08,91.6-17.48,183.77-35,272c-16.38,82.46-26.86,165.48-47,245-56.94,224.88-114.37,438.44-198,636c-76.81,181.45-156.1,358.74-253,521-539.89,904.03-1312.92,1573.71-2413,1917-148.35,46.3-304.45,76.21-466,111q-96.99,15-194,30c-81.67,14.89-167.62,11.76-252,25q-40.995,2.505-82,5-105.99,1.005-212,2c-126.2.01-253.69,4.12-366-14q-58.995-5.505-118-11c-102.23-17.9-204.35-24.52-302-46c-101-22.22-202.14-39.49-298-68-182.02-54.14-356.07-109.46-520-179C1555.53,7586.75,778.436,6825.49,343,5824c-67.675-155.65-121.641-317.31-175-489-25.693-82.67-43.945-168.76-66-257-28.678-114.74-42.484-237.54-65-361q-8.5-74.985-17-150q-6.5-94.995-13-190-0.5-27-1-54q-1-47.49-2-95V4054q2.5-60,5-120q3-55.5,6-111c14.955-93.77,14.288-188.12,32-278q21-117.495,42-235c48.994-198.25,92.128-389.48,161-567c47.3-121.91,98.125-239.9,149-355q29-60.495,58-121q35-65.49,70-131c63.417-107.91,125.193-216.18,196-317c252.424-359.41,543.74-685.72,892-949,107.69-81.409,218.04-161.017,334-234,73.27-46.115,149.55-87.936,225-132,190.59-111.309,403.42-190.812,621-275c187.54-72.565,393.58-114.678,606-161c78.8-17.183,160.68-23.181,242-38c94.57-17.234,194.11-11.833,293-27Zm43,1644L2571,2544q-192.48,111.99-385,224q-60.495,35.49-121,71q-24.99,15-50,30c0.33,0.67.67,1.33,1,2q320.97,171.48,642,343q325.47,171.99,651,344q178.485,94.485,357,189Q3897.48,3869,4129,3991q220.485-115.485,441-231q554.445-294.975,1109-590q200.475-106.995,401-214l117-63q24.495-13.5,49-27h-2q-224.475-129.99-449-260q-512.955-295.965-1026-592q-220.98-127.485-442-255l-137-79C4171.09,1668.71,4148.64,1649.26,4126,1644ZM2015,3522V5609q894.915,515.445,1790,1031q1.5-391.455,3-783V4489Q2911.585,4005.55,2015,3522Zm4235,12L4470,4495q-1.005,756.42-2,1513q0.495,220.485,1,441q1.005,95.49,2,191q214.485-123.495,429-247q386.955-223.485,774-447q288.975-166.98,578-334q0.495-736.425,1-1473q-0.495-230.97-1-462V3568Q6251,3551.005,6250,3534Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-n-8 text-white overflow-visible">
      {/* Main content */}
      <div className="max-w-screen-lg mx-auto text-left relative z-10"> {/* Ensure content is on top */}
        {/* Email Icon and Email */}
        <div className="mb-10 flex flex-col items-start">
          <div className="flex items-center text-2xl font-bold mb-4">
            <i className="fas fa-envelope text-4xl mr-3"></i>
            <span className="text-4xl">EMAIL</span>
          </div>
          <a
            href="mailto:contact@vikpraet.com"
            className="relative text-2xl text-white group hover:text-color-3 transition-colors duration-300 ease-in-out"
            style={{ display: 'inline-block', paddingBottom: '0.5rem' }}
          >
            contact@vikpraet.com
            <span
              className="absolute left-0 bottom-0 h-[2px] bg-color-3 transition-all duration-300 ease-in-out w-0 group-hover:w-full"
            ></span>
          </a>
          {/* Pulsing Spheres */}
          <div className="absolute top-10 right-0 w-48 h-48 bg-color-1 rounded-full opacity-50 blur-3xl animate-pulse-slow z-0" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-5 right-24 w-72 h-72 bg-color-5 rounded-full opacity-50 blur-3xl animate-pulse-slow z-0" style={{ animationDelay: '6s' }}></div>
          <div className="absolute top-24 left-10 w-40 h-40 bg-color-1 rounded-full opacity-50 blur-3xl animate-pulse-slow z-0" style={{ animationDelay: '13s' }}></div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-start space-x-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-color-3 transition duration-270 ease-in transform hover:scale-125"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
