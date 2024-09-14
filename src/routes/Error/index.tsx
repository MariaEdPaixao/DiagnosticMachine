import { Button, Container, Content, ErrorTitle, Message } from "../../styled";

export default function Error(){
    return(
        <Container>
            <Content>
                <ErrorTitle>Erro 404</ErrorTitle>
                <Message>Página não encontrada</Message>
                <Button onClick={() => window.location.href = '/'}>Voltar para o Login</Button>
            </Content>
        </Container>
    )
}