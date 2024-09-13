    import DataAtual from "../../components/DataAtual";
    import IdentificacaoChat from "../../components/IdentificacaoChat";
    import { ContainerChatStyle } from "../../styled";

    export default function Chat(){
        return(
            <ContainerChatStyle className="container">
                <IdentificacaoChat/>
                <DataAtual data="13/09/2024"/>
            </ContainerChatStyle >
        )
    }