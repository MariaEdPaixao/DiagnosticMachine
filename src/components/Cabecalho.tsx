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
                    <li className="nav-item"><a href="#" className="nav-link">Ajuda</a></li>
                    <li className="nav-item" id="opA"><a href="aprenda.html" className="nav-link">Aprenda +</a></li>
                    <li className="nav-item"  id="opS"><a href="sobre.html" className="nav-link"> Sobre nós</a></li>
                    <li className="nav-item"><a href="chat.html" className="nav-link"> Chat</a></li>
                </ul>
                </div>
                <div className="perfil">
                    <a href="../index.html"><p>Perfil</p></a>
                    <a href="../index.html"><img src="../../public/icones/user-profile.png" alt="perfil"/></a>
                </div>

                <div className="mobile-menu-icon">
                    <button onClick={menuShow}><img className="icon" src="../../public/icones/mobile/menu_white_36dp.svg" alt=""/></button>
                </div>
            </nav>
            <div className="mobile-menu">
                <div className="perfil">
                    <a href="../index.html"><img src="../../public/icones/user-profile.png" alt="perfil"/></a>
                    <a href="../index.html"><p>Perfil</p></a>
                </div>
                <div id="linha"></div>
                <ul>
                    <li className="nav-item"><a href="#" className="nav-link">Ajuda</a></li>
                    <li className="nav-item"><a href="aprenda.html" className="nav-link">Aprenda +</a></li>
                    <li className="nav-item"><a href="sobre.html" className="nav-link"> Sobre nós</a></li>
                    <li className="nav-item"><a href="chat.html" className="nav-link"> Chat</a></li>
                </ul>
            </div>
        </HeaderStyle>
    )
}