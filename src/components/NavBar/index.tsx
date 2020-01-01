import * as React from 'react';
import './css.scss'

interface I_Nav_Props {
    logoLink: string;
    logoImg: string;
    itemArr: { title: string, link: string }[];
}

const Module: React.FC<I_Nav_Props> = (props) => {

    React.useEffect(() => {
        console.log('navBar')
    })

    return (
        <div className="NavBar">
            <a href={props.logoLink} ></a>

            <ul className="itemWrap">
                {props.itemArr.map((item: any) => {
                    return (
                        <li className="item">
                            <a href={item.link}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Module

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
