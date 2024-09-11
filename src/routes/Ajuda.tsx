import { ImgAjuda, IntrodAjudaStyle, TituloStyle } from "../styled";

export default function Ajuda(){
    return(
        <main>
            <IntrodAjudaStyle>
                <figure id="container">
                    <img src="../../public/img/carlos1fala.png" id="balaodefala" />  
                    <h1><figcaption><b>Algumas dicas:</b></figcaption></h1>
                </figure>       
            </IntrodAjudaStyle>

            <TituloStyle>Partes do Carro</TituloStyle>

            <ImgAjuda>
                <img src="../../public/ajuda/partes-do-carro.png" alt="Partes do carro" className="dica"/>
            </ImgAjuda>

            <TituloStyle>Principais Peças</TituloStyle>

            <ImgAjuda>
                <img src="../../public/ajuda/principais-pecas.png" alt="Principais Peças do Carro" className="dica"/>
            </ImgAjuda>
        </main>
    )
}