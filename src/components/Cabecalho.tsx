import { Link } from "react-router-dom";
import { HeaderStyle } from "../styled";

export default function Cabecalho(){

    const menuShow = () => {
        const menuMobile = document.querySelector('.mobile-menu') as HTMLElement | null;
        const icon = document.querySelector('.icon') as HTMLImageElement | null;
      
        if (menuMobile && icon) {
          if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            icon.src = "../../public/icones/mobile/menu_white_36dp.svg";
          } else {
            menuMobile.classList.add('open');
            icon.src = "../../public/icones/mobile/close_white_36dp.svg";
          }
        }
      };

    return(
        <HeaderStyle>
            <nav className="nav-bar">
                <div className="logo">
                    <img src="../../public/icones/logo.png" alt="" />
                </div>
                <div className="nav-list">
                <ul>
                    <li className="nav-item"><Link to="/ajuda" className="nav-link">Ajuda</Link></li>
                    <li className="nav-item" id="opA"><Link to="/aprenda+" className="nav-link">Aprenda +</Link></li>
                    <li className="nav-item"  id="opS"><Link to="/sobre" className="nav-link"> Sobre nós</Link></li>
                    <li className="nav-item"><Link to="/chat" className="nav-link"> Chat</Link></li>
                </ul>
                </div>
                <div className="perfil">
                    <Link to="/"><p>Perfil</p></Link>
                    <Link to="/"><img src="../../public/icones/user-profile.png" alt="perfil"/></Link>
                </div>

                <div className="mobile-menu-icon">
                    <button onClick={menuShow}><img className="icon" src="../../public/icones/mobile/menu_white_36dp.svg" alt=""/></button>
                </div>
            </nav>
            <div className="mobile-menu">
                <div className="perfil">
                    <Link to="/"><img src="../../public/icones/user-profile.png" alt="perfil"/></Link>
                    <Link to="/"><p>Perfil</p></Link>
                </div>
                <div id="linha"></div>
                <ul>
                    <li className="nav-item"><Link to="/ajuda" className="nav-link">Ajuda</Link></li>
                    <li className="nav-item"><Link to="/aprenda+" className="nav-link">Aprenda +</Link></li>
                    <li className="nav-item"><Link to="/sobre" className="nav-link"> Sobre nós</Link></li>
                    <li className="nav-item"><Link to="/chat" className="nav-link"> Chat</Link></li>
                </ul>
            </div>
        </HeaderStyle>
    )
}