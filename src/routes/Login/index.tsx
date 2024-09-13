import FormLogin from "../../components/FormLogin";
import IntrodLogin from "../../components/IntrodLogin";
import { ContainerLogin } from "../../styled";

export default function Login(){
    return(
        <ContainerLogin className="container">
            <IntrodLogin/>

            <FormLogin/>
        </ContainerLogin>
        
    )
}