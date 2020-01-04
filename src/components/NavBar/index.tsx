import * as React from "react";
import "./css.scss";
import cx from "classnames";

interface I_Nav_Props {
  logoLink: string;
  logoImg: string;
  itemArr: { title: string; link: string }[];
}

const Module: React.FC<I_Nav_Props> = props => {
  React.useEffect(() => {
    console.log("navBar");
  });

  const [closeMenu, setCloseMenu] = React.useState<boolean>(true);

  return (
    <div className="NavBar">
      {/* <div className="topSection"> */}
      <div className={cx("topSection")}>
        <div className="logo">
          <a href={props.logoLink}></a>
        </div>

        <div className="clickBurgur" onClick={() => setCloseMenu(!closeMenu)}>
          Menu
        </div>
      </div>
      <ul
        className={cx(
          "itemWrap",
          { displayNone: closeMenu },
          { displayNone: closeMenu }
        )}
      >
        {props.itemArr.map((item: any) => {
          return (
            <li className="item">
              <a href={item.link}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Module;

// import React from 'react';
// // import './App.scss';

// const Module: React.FC = () => {
//     return (
//         <div className="App">
//             <div>Hi index Page</div>

//         </div>
//     );
// }

// export default Module;
