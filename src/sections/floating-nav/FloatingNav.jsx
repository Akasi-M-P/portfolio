import data from "./data";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";
import "./floating-nav.css";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy
        offset={-350}
        className="scrollspy"
        items={["header", "about", "services", "portfolio", "contact"]}
        currentClassName="active"
      >
        {data.map((item) => (
          <div key={item.id}>
            <Nav className={item.className} item={item} />
          </div>
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
