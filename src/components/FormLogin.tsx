import {ContainerForm} from "../styled";
import TituloGeral from "./TituloGeral";

export default function FormLogin() {
    return (
    
            <ContainerForm className="item">
                <TituloGeral conteudo="Login"/>
            
                <form action="pages/chat.html" method="get">
                    <div className="email">
                        <label htmlFor="id-email">Email: </label>
                        <input type="email" name="email" id="id-email" placeholder="Insira seu e-mail" /> <br />
                    </div>
                    <div className="senha">
                        <label htmlFor="id-senha">Senha: </label>
                        <input type="password" name="senha" id="id-senha" placeholder="Insira sua senha" /> <br />
                    </div>
                    <div id="esqsenha">
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                    <input type="submit" value="Entrar" id="entrar" />
                </form>
                <div id="cad">
                    <p>Ainda não tem uma conta? 
                        <a href="#"> Cadastre-se </a>
                    </p>
                </div>
            </ContainerForm>
        
    );
}
