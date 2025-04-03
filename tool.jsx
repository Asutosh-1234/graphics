const { useState } = React;

function AnimatedToolbar() {
  const [active, setActive] = useState(null);

  const links = ["Work", "About", "Services", "Contact"];

  return (
    <div className="react-toolbar">
      {links.map((link, index) => (
        <button
          key={index}
          className={`toolbar-btn ${active === index ? "active" : ""}`}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
        >
          {link}
        </button>
      ))}
    </div>
  );
}

ReactDOM.render(<AnimatedToolbar />, document.querySelector(".navbar"));
