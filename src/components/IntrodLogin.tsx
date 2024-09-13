import { IntrodLoginStyle } from "../styled";

export default function IntrodLogin(){
    return(
        <IntrodLoginStyle className="item">
            <figure id="container">
                <img src="../../public/img/carlos1fala.png" id="balaodefala"/>  
                <figcaption><b>Olá! Bom te ver por aqui,</b>
                        identifique-se para que eu 
                        possa te ajudar :)</figcaption>
            </figure>            
        </IntrodLoginStyle>
    )
}