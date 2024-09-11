import { useState } from "react";
import { CategoriaButton, CategoriaContainer, ContainerCard, IntrodStyle, TituloStyle } from "../styled";
import CardConteudo from "../components/CardConteudo";
import { ConteudoProps } from "../types";

const conteudos: ConteudoProps[] = [
  { id: 1, titulo: 'Mecânica básica do automóvel', imagem: '../../public/conteudos/img-post1.png', categoria: 'jogo', descricao: 'Aprenda a consertar carros de forma divertida! Descubra os segredos da mecânica básica enquanto resolve desafios interativos.' },
  { id: 2, titulo: 'Ferramentas e técnicas', imagem: '../../public/conteudos/img-post2.png', categoria: 'video', descricao: 'Neste vídeo, você vai dominar as principais ferramentas e técnicas automotivas! Vamos explorar como cada ferramenta funciona na prática . Prepare-se para aprender!' },
  { id: 3, titulo: 'Diagnóstico de problemas comuns', imagem: '../../public/conteudos/img-post3.png', categoria: 'artigo', descricao: 'Identifique e solucione problemas comuns em carros! Teste suas habilidades de diagnóstico e aprenda a resolver falhas de forma prática e rápida.' }
];

export default function Aprenda() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);

  // Filtrar conteúdos com base na categoria selecionada
  const conteudosFiltrados = categoriaSelecionada
    ? conteudos.filter((conteudo) => conteudo.categoria === categoriaSelecionada)
    : conteudos;

    return(
        <main>
            <IntrodStyle>
                <figure id="container">
                    <img src="../../public/img/carlos2fala.png" id="balaodefala" />  
                    <figcaption><b>Bem-vindo(a) ao 
                        Aprenda +</b></figcaption>
                        <figcaption id="txt2"><b>O seu carro tá sem problema, e você não precisa de diagnóstico agora?? Continua aqui com a gente pra aprender um pouco mais</b></figcaption>
                </figure>     
            </IntrodStyle>

            <div className="titulo">
                <TituloStyle>Conteúdos</TituloStyle>
            </div>

            <CategoriaContainer>
                <CategoriaButton isSelected={categoriaSelecionada === 'categoria1'} onClick={() => setCategoriaSelecionada('jogo')}>Jogos</CategoriaButton>
                <CategoriaButton isSelected={categoriaSelecionada === 'categoria2'} onClick={() => setCategoriaSelecionada('video')}>Vídeos</CategoriaButton>
                <CategoriaButton isSelected={categoriaSelecionada === 'categoria3'} onClick={() => setCategoriaSelecionada('artigo')}>Artigos</CategoriaButton>
                <CategoriaButton isSelected={categoriaSelecionada === 'categoria4'} onClick={() => setCategoriaSelecionada(null)}>Todos</CategoriaButton>
            </CategoriaContainer>

            <ContainerCard>
                {conteudosFiltrados.map((conteudo, indice) => (<CardConteudo id={indice} imagem = {conteudo.imagem} categoria = {conteudo.categoria} titulo = {conteudo.titulo} descricao={conteudo.descricao} />))}
            </ContainerCard>

        </main>

    )
}