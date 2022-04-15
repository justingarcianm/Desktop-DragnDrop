import { useState } from "react";
import Data from "../../data";
import Moment from "react-moment";

import { FaApple, FaGithub } from "react-icons/fa";

const Nav = ({ modalInfo, updateModalInfo, checkState }) => {
  const [time, setTime] = useState(Date.now());
  const [content, setContent] = useState([]);

  const handleClick = (event) => {
    const target = event.target;
    console.log(target);
  };

  const handleMenu = () => {
    const dropDown = document.querySelector(".drop-down");
    return dropDown.classList.toggle("open");
  };

  const modalFn = (event, object) => {
    if(!checkState(modalInfo,object)) {
      const dupRemoved = Array.from(new Set(content))
      setContent(dupRemoved);
     updateModalInfo((prev) => [...prev, object])
    }
    
  };

  console.log("Data: ", Data);
  console.log("Nav: ", content);

  return (
    <nav>
      <ul>
        <li onClick={(event) => handleClick(event)}>
          <FaApple />
        </li>
        <li onClick={() => handleMenu()} data-menu>
          <div>Menu</div>
          <div className="drop-down">
            {Data.map((item, idx) => {
              return (
                <p
                  onClick={(event) => modalFn(event, item)}
                  key={idx}
                  className="drop-down-item"
                >
                  {item.name}
                </p>
              );
            })}
          </div>
        </li>
        <li onClick={(event) => handleClick(event)} data-help>
          Help
        </li>
      </ul>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/justingarcianm"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <Moment
            date={time}
            onChange={() => setTime(time + 60000)}
            format="MMMM Do h:mm A"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
