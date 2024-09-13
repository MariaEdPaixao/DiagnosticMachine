import { IntrodAjudaStyle } from "../styled";
import { IntrodCarlosProps } from "../types";

export default function IntrodCarlos({className, conteudo}:IntrodCarlosProps){
    return(
        <IntrodAjudaStyle className={className}>
            <figure id="container">
                <img src="../../public/img/carlos1fala.png" id="balaodefala" />  
                <h1><figcaption><b>{conteudo}</b></figcaption></h1>
            </figure>       
        </IntrodAjudaStyle>
    )
}