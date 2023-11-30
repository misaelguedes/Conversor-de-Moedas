import './header.css'

import Titulo from '../../assets/titulo.png'
import Titulo2 from '../../assets/titulo2.png'

export default function Header() {
    return (
        <header>
            <picture>
                <source media="(max-width: 768px)" srcset={Titulo2}/>
                <img src={Titulo} alt="titulo"/>
            </picture>
        </header>
    )
}