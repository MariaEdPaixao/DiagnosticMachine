import DataAtual from "../../components/DataAtual";
import IdentificacaoChat from "../../components/IdentificacaoChat";
import InteragirChat from "../../components/InteragirChat";
import { ContainerChatStyle, ContainerMensagens } from "../../styled";

export default function Chat(){
    return(
        <ContainerChatStyle className="container">
            <IdentificacaoChat/>
            <DataAtual data="13/09/2024"/>

            <ContainerMensagens className="chat">
                <section className="message bot-message" id="falaChatBot">
                    <img src="../../public/chat/Carlos.png" alt="Carro" className="icon"/>
                    <p>Bem-vindo(a), Francisco! <br/> Sou o Carlos, e juntos vamos descobrir o problema com o seu veículo.</p>
                </section>

                <div className="message user-message" id="falaUser">
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sapiente est officia numquam!</p>
                    <img src="../../public/chat/User.png" alt="Usuário" className="icon"/>
                </div>

            </ContainerMensagens>
   
            <InteragirChat/>
        </ContainerChatStyle >
    )
}