import CardDevs from "../../components/CardDevs";
import TituloGeral from "../../components/TituloGeral";
import { CardSobreStyle, ContainerDevs, DivLinks, SubtituloStyle} from "../../styled";
import { SobreProps } from "../../types";


const devs: SobreProps[] = [
    {id: 1, rm_turma: 'RM 555136 | 1TDSPK', nome: 'Larissa Freitas', foto: '../../../public/sobre/part/larissa.png', github: 'https://github.com/MariaEdPaixao/DiagnosticMachine.git', linkedin:'#'},
    {id: 2, rm_turma: 'RM 558832 | 1TDSPK', nome: 'Maria Paixão', foto: '../../../public/sobre/part/maria.png', github: 'https://github.com/MariaEdPaixao', linkedin:'https://linkedin.com/in/maria-eduarda-alves-da-paixão-6267a1303'},
    {id: 3, rm_turma: 'RM 555181 | 1TDSPK', nome: 'Luis Carlos', foto: '../../../public/sobre/part/luis.png', github: 'https://github.com/MariaEdPaixao/DiagnosticMachine.git', linkedin:'#'},
    
  ];


export default function Sobre(){
    return(
        <main>
            <CardSobreStyle>
                <img src="../../../public/sobre/fundo-sobre.png" alt="Fundo azulado" id="fundo-sobre"/>
                <div id="titulo">
                    <TituloGeral conteudo="Sobre nós: "/>
                </div>
                <div id="texto">
                    <p>O DiagnosticMachine foi desenvolvido pensando nas principais dores dos nossos usuários: diagnósticos errados e a perda de tempo com processos ineficazes. Sabemos o quanto é frustrante lidar com diagnósticos imprecisos, que muitas vezes levam a reparos desnecessários e custos inesperados. Por isso, nossa plataforma foca em oferecer uma experiência simplificada e confiável, garantindo que você obtenha informações precisas sobre o estado do seu veículo. Nossa solução utiliza uma abordagem moderna, combinando tecnologia avançada com um atendimento personalizado, para que você tenha confiança em cada diagnóstico realizado. Com isso, buscamos eliminar a incerteza e agilizar o processo, economizando tempo e proporcionando tranquilidade ao cliente.
                        Acreditamos que o seu tempo é valioso, e por isso nosso sistema foi desenhado para ser intuitivo e direto, permitindo que você obtenha orçamentos justos e diagnósticos precisos em poucos cliques. Nossa missão é oferecer uma plataforma onde a eficiência e a precisão trabalham juntas para garantir a sua satisfação.</p>
                </div>
            </CardSobreStyle>

            <SubtituloStyle>Nosso Time: </SubtituloStyle>
            
            <ContainerDevs>
                {devs.map((conteudo, indice) => (<CardDevs id={indice} rm_turma = {conteudo.rm_turma} nome = {conteudo.nome} foto = {conteudo.foto} github={conteudo.github} linkedin={conteudo.linkedin} />))}
            </ContainerDevs>

            <DivLinks>
                <h3> Link do repositorio: <a href="https://github.com/MariaEdPaixao/DiagnosticMachine" target="_blank">https://github.com/MariaEdPaixao/Challenge-2024.git</a></h3>
                <h3> Link do prototipo: <a href="https://www.figma.com/file/SymOttX6dpdG7rZLFsHLtK/Prototipos?type=design&node-id=0%3A1&mode=design&t=NrUAiifjth09i6Pa-1" target="_blank">https://www.figma.com/file/SymOttX6dpdG7rZLFsHLtK/Prototipos?type=design&node-id=0%3A1&mode=design&t=NrUAiifjth09i6Pa-1</a></h3>
            </DivLinks>
        </main>
    )
}