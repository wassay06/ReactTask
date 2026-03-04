// import React from "react";
// import "./Features.css";

// const Features = () => {
//   const features = [
//     {
//       title: "Showcase Your App",
//       text: "Showcase your app in style with this professional template."
//     },
//     {
//       title: "Easy to Customize",
//       text: "Easily customize the text and replace images."
//     },
//     {
//       title: "Unlimited Colors",
//       text: "Change colors easily using CSS."
//     },
//     {
//       title: "Responsive HTML5 CSS3",
//       text: "Built with modern responsive standards."
//     },
//     {
//       title: "Designed to Convert",
//       text: "Increase engagement and improve conversion."
//     },
//     {
//       title: "With no Boundaries",
//       text: "Extend features and add more components."
//     }
//   ];

//   return (
//     <section className="features">
//       <div className="features-container">
//         {features.map((item, index) => (
//           <div className="feature-card" key={index}>
//             <h3>{item.title}</h3>
//             <p>{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Features;



import React from "react";
import "./Features.css";
import { FaTag, FaCog, FaPaintBrush, FaDesktop, FaFileAlt, FaLifeRing } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTag />,
      title: "Showcase Your App",
      text: "Showcase your app in style with this professional looking template."
    },
    {
      icon: <FaCog />,
      title: "Easy to Customize",
      text: "Easily customize the text and replace the images to suit your own app."
    },
    {
      icon: <FaPaintBrush />,
      title: "Unlimited Colors",
      text: "Easily change the colors in CSS that can go well with your branding."
    },
    {
      icon: <FaDesktop />,
      title: "Responsive, HTML5, CSS3",
      text: "Our template is 100% responsive and built with modern standards."
    },
    {
      icon: <FaFileAlt />,
      title: "Designed to Convert",
      text: "Designed to engage your user and increase your conversion."
    },
    {
      icon: <FaLifeRing />,
      title: "With no Boundaries",
      text: "Use Bootstrap and PaperKit to add additional components."
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{item.icon}</div>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;