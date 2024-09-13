import { IdentificacaoStyle } from "../styled";

export default function IdentificacaoChat(){
    return(
        <IdentificacaoStyle className="identificacao">
            <div>
                <img src="../../public/chat/Carlos.png" alt="" id="Carlos"/> 
            </div>

            <div className="infos">   
                <h1>CARlos</h1>
                <hr/>
                <p>Te ajudarei com o problema do seu veiculo.</p>
            </div> 
            <div className="linha"></div>
        </IdentificacaoStyle>
    )
}