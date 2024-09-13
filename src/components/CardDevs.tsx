import { CardDevsStyle } from "../styled";
import { SobreProps } from "../types";

export default function CardDevs({id, rm_turma, nome, foto, github, linkedin}:SobreProps){
    return(
        <CardDevsStyle key={id}>
            <img src={foto} alt={foto} className="foto"/>
                <div className="container"> 
                    <div className="infos">
                        <h3>{nome}</h3>
                        <p>{rm_turma}</p>
                    </div>
                    <div className="icons">
                        <a href={linkedin} target="_blank"><img src="../../public/sobre/icones/icon-linkdin.png" alt={linkedin}/></a>
                        <a href={github} target="_blank"><img src="../../public/sobre/icones/icon-git.png" alt={github}/></a>
                    </div>
                </div>
        </CardDevsStyle>
    )
}