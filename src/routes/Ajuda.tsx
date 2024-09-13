import IntrodCarlos from "../components/IntrodCarlos";
import { ImgAjuda, SubtituloStyle } from "../styled";

export default function Ajuda(){
    return(
        <main>
           <IntrodCarlos conteudo="Algumas dicas para você se informar sobre o seu veículo. E vão te ajudar!"/>

            <SubtituloStyle>Partes do Carro</SubtituloStyle>

            <ImgAjuda>
                <img src="../../public/ajuda/partes-do-carro.png" alt="Partes do carro" className="dica"/>
            </ImgAjuda>

            <SubtituloStyle>Principais Peças</SubtituloStyle>

            <ImgAjuda>
                <img src="../../public/ajuda/principais-pecas.png" alt="Principais Peças do Carro" className="dica"/>
            </ImgAjuda>
        </main>
    )
}