import { useState } from "react";

export default function Accordion({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((current) => !current);
  };
  return (
    <div className="accordion">
      <div className={`accordion__title ${isOpen ? "title-col" : ""}`}>
        <h3>{title}</h3>
        <button className="accordion__btn" onClick={toggleAccordion}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <div>{description}</div>}
    </div>
  );
}
