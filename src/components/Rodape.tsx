import { Link } from "react-router-dom";
import { FooterStyle, CopyrightSection } from "../styled";

export default function Rodape(){ 
    return(
        <FooterStyle>
            <section id="icons">
            <a href="#"><img src="../../public/icones/instagram.png" alt=""/></a>
            <a href="https://github.com/MariaEdPaixao/Challenge-2024.git" target="_blank"><img src="../../public/icones/github.png" alt=""/></a>
            <a href="#"><img src="../../public/icones/facebook.png" alt=""/></a>
            </section>
            <section id="abas">
                <ul id="footer">
                    <li id="itens-footer" className="opcoes">
                        <Link to="/ajuda">
                            Ajuda
                        </Link>
                    </li>
                    <li className="opcoes">
                        <Link to="/aprenda+">Aprenda + </Link>
                    </li>
                    <li className="opcoes">
                        <Link to="/sobre">Sobre nós </Link>
                    </li>
                    <li className="opcoes">
                        <Link to="/chat"> Chat </Link>
                    </li>
                </ul> 
            </section>
            <CopyrightSection>
                <img src="../../public/icones/copyright.png" alt=""/>
                <p>2024 DiagnosticMachine</p>
            </CopyrightSection>
        </FooterStyle>
    )
}