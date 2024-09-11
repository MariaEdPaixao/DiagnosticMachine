export type ConteudoProps = {
    id: number;
    imagem: string;
    titulo: string;
    categoria: 'video' | 'jogo' | 'artigo';
    descricao: string;
};

export type TituloProps = {
    conteudo: string;
}