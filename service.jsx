<<<<<<< HEAD
const { motion } = window['framer-motion'];

const servicesData = [
  { title: "Brand Strategy", desc: "Crafting strategies that align with your business goals and values." },
  { title: "Web Design", desc: "Creating user-friendly, responsive, and visually appealing websites." },
  { title: "Marketing", desc: "Helping you reach your audience with impactful marketing campaigns." },
  { title: "UI/UX Design", desc: "Designing intuitive user experiences that drive engagement and retention." },
];

const ServicesReact = () => {
  return (
    <section className="services-list">
      {servicesData.map((service, index) => (
        <motion.div
          key={index}
          className="service-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.8 }}
        >
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </motion.div>
      ))}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('react-services'));
root.render(<ServicesReact />);
=======
const { motion } = window['framer-motion'];

const servicesData = [
  { title: "Brand Strategy", desc: "Crafting strategies that align with your business goals and values." },
  { title: "Web Design", desc: "Creating user-friendly, responsive, and visually appealing websites." },
  { title: "Marketing", desc: "Helping you reach your audience with impactful marketing campaigns." },
  { title: "UI/UX Design", desc: "Designing intuitive user experiences that drive engagement and retention." },
];

const ServicesReact = () => {
  return (
    <section className="services-list">
      {servicesData.map((service, index) => (
        <motion.div
          key={index}
          className="service-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.8 }}
        >
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </motion.div>
      ))}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('react-services'));
root.render(<ServicesReact />);
>>>>>>> f85a6e2 (Update styles and content in HTML/CSS files)
