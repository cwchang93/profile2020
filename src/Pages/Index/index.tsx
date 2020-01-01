import * as React from 'react';
import './css.scss';
import NavBar from '../../components/NavBar/index'

const Module: React.FC = () => {
    const NavBar_Props = {
        logoLink: 'index.html',
        logoImg: 'index.html',
        itemArr: [
            { title: '關於', link: '#' },
            { title: '個人檔案', link: '#' },
            { title: '技術棧', link: '#' },
            { title: '作品集', link: '#' },
            { title: '回憶錄', link: '#' }]

    }

    return (
        <div>
            <NavBar {...NavBar_Props} />
        </div>
    )
}

export default Module;