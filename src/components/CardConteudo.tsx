import { CardStyle } from "../styled";
import { ConteudoProps } from "../types";

export default function CardConteudo({id, imagem, titulo, categoria, descricao}:ConteudoProps){
    return(
        <CardStyle key={id}>
            <div className="img-post">
                <img src={imagem} alt=""/>
            </div> 
            <section className="list-posts">
                <div>
                    <span> {categoria} </span>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div id="saiba-mais">
                    <a href="#">Saiba Mais</a>
                </div>
            </section>
        </CardStyle>
    )
}