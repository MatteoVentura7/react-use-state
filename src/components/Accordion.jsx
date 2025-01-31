export default function Accordion({ title, description }) {
  return (
    <div className="accordion">
      <div className="accordion__title">
        <h3>{title}</h3>
        <button className="accordion__btn">+</button>
      </div>
      <div>{description}</div>
    </div>
  );
}
