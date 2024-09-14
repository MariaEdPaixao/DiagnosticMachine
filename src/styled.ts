import styled from "styled-components";

export const FooterStyle = styled.footer`

   margin-top: 30px;
   max-height: 184px;
   width: 100%;
   background-color: #021639;
   text-align: center;

   img{
      margin-top: 10px;
      margin-left: 16px;
   }

   ul{
      margin-top: 10px;
      font-size: 14px;
   }

   li{
      display: inline-block;

      padding-left: 10px;
   }

   a{
      text-decoration: none;
      color: #fff;
   }

`

export const CopyrightSection = styled.section`

   margin-top: 10px;

   img{
      margin: 0;
   }

   p {
      display: inline-block;
      color: #B7B4BF;
      font-size: 14px;
      padding: 10px;
   }

`

export const HeaderStyle = styled.header`
   background-color: #021639;
   box-shadow: 0px 3px 10px #464646;

   .nav-bar{
      display: flex;
      justify-content: space-between;
      padding: 1rem 6rem;
   }

   .logo{
      display: flex;
      align-items: center;
   }

   .logo h1 {
      color: #fff;
   }

   .logo img{
      height: 90px;
   }

   .nav-list {
      display: flex;
      align-items: center;
   }

   .nav-list ul {
      display: flex;
      justify-content: center;
      list-style: none;
   }

   .nav-item {
      margin: 0 15px;
   }

   .nav-link {
      text-decoration: none;
      font-size: 1.15rem;
      color: #fff;
      font-weight: 400;
   }

   .nav-link:hover {
      color: #0E21A1;
      border-bottom: 2px solid white;
      border-radius: 2px;
   }

   .perfil{
      display: flex;
      justify-content: flex-end;
      margin-left: 70px;
      margin-top: 18px;
      font-size: 1.15rem;
   }
   .perfil a{
      text-decoration: none;
   }
   .perfil p:hover{
      color: #0E21A1;
   }

   .perfil p {
      margin-top: 20px;
      margin-left: 100px;
      color: white;
   }


   .mobile-menu-icon {
      display: none;
   }

   .mobile-menu {
      display: none;
   }

   @media screen and (max-width:965px){
      .perfil{
         margin-left: -55px;
      }
   }

   @media screen and (max-width:821px){
    .nav-bar {
        padding: 1.5rem 4rem;
        /* width: 100%; */
    }
    .nav-item {
        display: none;
    }
    .perfil{
        display: none;
    }
    .mobile-menu-icon {
        display: block;
        margin-top: 35px;
    }
    .mobile-menu-icon button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .mobile-menu ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 1rem;

        justify-content: center;
        align-items: center;
    }
    .mobile-menu .nav-item {
        display: block;
        padding-top: 1.2rem;
    }
    .mobile-menu .nav-link{
        font-size: 1.15rem;
    }
    .mobile-menu .nav-item {
        margin: 0 15px;
        width: 100%;
    }
    .mobile-menu .perfil {
        display: block;
        width: 20%;
        margin-top: 20px;
        margin-left: 70px;
    }
    .mobile-menu .perfil p{
        margin-top: -50px;
        font-size: 20px;
    }
    .mobile-menu #linha{
        margin: auto;
        margin-top: 30px;
        width: 90%;
        height: 5px;
        background-color: #0187a7;
    }
    .open {
        display: block;
    }

    h2{
        font-size: 38px;
    }
    .dica{
        width: 590px;

    }
}

` 

export const CardStyle = styled.div`

   box-shadow: 10px 15px 2px #021639;
   border: 3px solid #021639;
   border-radius: 20px;
   height: 497px;
   width: 313px;

   img{
      width: 100%;
   }

   .list-posts{
      text-align: center;
      margin-top: 20px;
      padding: 20px;
      padding-top: 0;
   }

   .list-posts span{
      width: 98px;
      height: 29px;

      background-color: #D4C5FF;
      color: #021639;
      border-radius: 10px;
      font-size: 14px;

      padding: 5px;
      text-align: center;
      display: inline-block;

      margin-bottom: 20px;
   }

   .list-posts h2{
      color: #021639;
      font-size: 24px;
   }

   .list-posts p {
      margin-top: 20px;

      font-size: 18px;
   }

   #saiba-mais {
      width: 160px;
      height: 40px;
      border-radius: 40px;
      background-color: #021639;

      text-align: center;   
      padding: 10px;
      margin-top: 15px;
   }

   #saiba-mais a {
      color: white;
      text-decoration: none;
   }

   @media screen and (max-width:930px){
      height: 510px;
      width: 250px;
      margin-top: 20px;

   }

   @media screen and (max-width:590px){
      height: 500px;
      width: 250px;

      .list-posts p {
         font-size: 16px;
      }
   }
`
export const ContainerCard = styled.div`
   background-color: white;
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: flex-start;
   align-content:space-around;
`

export const IntrodStyle = styled.section`


    margin-top: 40px;
    justify-content: center;
    align-items: center;
    display: inline-block;
    position: relative;

#balaodefala{
    width: 600px;
    height: 400px;
    margin-left: 58%;
}
  
#container figcaption {
    width: 240px;
    position: absolute;

    top: 35px;
    left: 110%;
    font-size: 20px;
    color: black;
}

#container #txt2 {
    width: 260px;
    position: absolute;

    top: 255px;
    right: 30px;
    font-size: 18px;
    color: black;
}


   @media screen and (max-width:1010px){
      #balaodefala{
         margin-left: 20%;
      }
      #container figcaption {
         width: 170px;
         left: 73%;
         font-size: 18px;
      }
   }
   
   @media screen and (max-width:800px){
      #balaodefala{
         width: 450px;
         height: 330px;
      }
      #container figcaption {
         font-size: 15px;
         left: 72%;
      }
      #container #txt2 {
         width: 197.4px;

         top: 210px;
         font-size: 14px;
      }
   }

   @media screen and (max-width: 560px){
      #balaodefala{
         width: 380px;
         height: 230px;
      }
      #container figcaption {
         width: 110px;
         font-size: 13px;
         top: 16px;
      }
      #container #txt2 {
         width: 190px;

         top: 150px;
         font-size: 11.5px;
      }
      
   }
/*
    #balaodefala{
        margin-left: 15px;
        width: 420px;
        height: 220px;
    }
    #container figcaption {
        width: 160px;
        top: 15px;
        font-size: 14px;
    }
    #container #txt2 {
        width: 180px;
        position: absolute;
    
        top: 140px;
        right: 10px;
        font-size: 11.5px;
        color: black;
    }
   } */
`

export const TituloStyle = styled.h1`
  font-size: 60px;
  font-weight: 900;
  line-height: 150%;
  text-align: center;  /* Centraliza o texto horizontalmente */
  
  background: linear-gradient(270deg, #021639 0%, #0e21a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @media screen and (max-width: 810px){
      font-size: 40px;
  }
  @media screen and (max-width: 560px){
      font-size: 30px;
  }
`;

export const SubtituloStyle = styled.h2`
  font-size: 60px;
  font-weight: 900;
  line-height: 150%;
  text-align: center;  /* Centraliza o texto horizontalmente */
  
  background: linear-gradient(270deg, #021639 0%, #0e21a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @media screen and (max-width: 1040px){
      font-size: 40px;
  }
  @media screen and (max-width: 860px){
      font-size: 33px; 
   }
   @media screen and (max-width: 700px){
      font-size: 25px;

   }
   @media screen and (max-width:620px) {
      font-size: 22px;
   }

`;

export const CategoriaButton = styled.button<{ isSelected: boolean }>`
   margin-top: 20px;
   background: none;
   border: none;
   padding: 10px 20px;
   font-size: 18px;
   cursor: pointer;
   color: ${({ isSelected }) => (isSelected ? '#021639' : '#000')};
   font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
   border-bottom: ${({ isSelected }) => (isSelected ? '3px solid #021639' : 'none')};
   
   &:hover {
      color: #021639;
      border-bottom: 3px solid #021639 ;
   }

`;

export const CategoriaContainer = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 20px;
   border-bottom: 2px solid #ddd; 
   border-radius: 10px;
`;

export const IntrodAjudaStyle = styled.section`
   margin-top: 40px;
   justify-content: center;
   align-items: center;
   display: inline-block;
   position: relative;
   margin-bottom: 10px;

   #balaodefala{
      width: 600px;
      height: 400px;
      margin-left: 350px;
   }
  
  #container figcaption {
      width: 345px;
      position: absolute;

      top: 35px;
      right: 15px;
      font-size: 28px;
      color: black;
   }

   @media screen and (max-width:1010px){
      #balaodefala{
         margin-left: 20%;
      }
      #container figcaption {
         left: 58%;
         font-size: 20px;
      }
   }
   
   @media screen and (max-width:800px){
      #balaodefala{
         width: 450px;
         height: 330px;
      }
      #container figcaption {
         width: 280px;
         font-size: 19px;
      }
   }

   @media screen and (max-width: 673px){
      #balaodefala{
         width: 360px;
         height: 260px;
      }
      #container figcaption {
         width: 220px;
         font-size: 15px;
         top: 8%
      }
      
   }

   @media screen and (max-width:613px){
      #balaodefala{
         width: 250px;
         height: 210px;   
      }
      #container figcaption {
         width: 130px;
         font-size: 12px;
         left: 64%;
      }

   }
   
`

export const ImgAjuda = styled.div`
   text-align: center;
 

   @media screen and (max-width:821px){
      .dica{
         width: 590px;
      }
   }
   @media screen and (max-width:775px){
      .dica{
         width: 560px;
      }
   }
   @media screen and (max-width:665px){
      .dica{
         width: 450px;
      }
   }
   @media screen and (max-width:545px){
      .dica{
         width: 350px;
      }
   }
`

export const CardDevsStyle = styled.div`

   position: relative;

   .container{
      max-width: 309.53px;
      height: 79px;
      border-radius: 20px;
      background-color: #B7D5E5;

      padding: 10px;
      position: absolute;
      margin-left: 50px; 
      margin-top:-65px;
      box-shadow: 5px 5px 2px #021639;
   }

   .icons{
      display: flex;
      margin-top: -20px;
      margin-left: 210px;
   }

   .infos{
      display: inline-block;
      width: 200px;
   }
   .infos h3{
      font-size: 24px;
      color:#021639
   }
   .infos p{
      margin-top: 5px;
      font-size:18px;
      color:#797979;
   }


   @media screen and (max-width:1079px) {
      .container{
         max-width: 270.53px;
         height: 79px;
      }
      .foto{
         width: 300px;
         height: 300px;
      }
      .icons{
         margin-left: 165px;
      }
      .infos h3{
         font-size: 20px;
         color:#021639
      }
      .infos p{
         margin-top: 5px;
         font-size:16px;
         color:#797979;
      }
   }
   @media screen and (max-width:685px){
      .container{
         max-width: 200px;
         height: 69px;
         margin-top: -50px;
      }
      .foto{
         width: 250px;
         height: 250px;
      }
      .icons{
         margin-left: 125px;
      }
      .icons img{
         width: 25px;
      }
      .infos h3{
         font-size: 17px;
      }
      .infos p{
         margin-top: 5px;
         font-size:12px;
      }
      #part3{
         margin-top: 15px;
      }
}

`

export const CardSobreStyle = styled.div`
   text-align: center;
   display: flex;
   justify-content: center;
   
   #fundo-sobre {
      position:relative;
      max-height: 664px;
      width: 100%;
   }
   #titulo {
      position: absolute;
      margin-top: 20px;
   }
   #texto{
      position: absolute;
      display: inline-block;
      margin-left: -350px;
      margin-top: 50px;
   }

   p {
      width: 506px;
      display: inline-block;
      align-self: center;
      margin-top: 100px;
      margin-left: 400px;
   }

   @media screen and (max-width:1040px){
      #texto{
         margin-top: 8px;
         font-size: 14px;
      }
      p{
         width: 390px;
      }

      h1{
         font-size: 40px;
      }
   }

   @media screen and (max-width:860px){
      #texto{
         margin-top: -30px;
         margin-left: -390px;
      }
      p{
         width: 400px;
         font-size: 13px;
      }
      h1{
         font-size: 33px;
      }
   }

   @media screen and (max-width:821px){
      #texto{
         font-size: 11.5px;
      }
      #sobre p{
         width: 330px;
      }
   }

   @media screen and (max-width:730px){
      #texto{
         font-size: 10px;
         margin-left: -400px;
         margin-top: -50px;
      }
      p{
         width: 360px;
      }
      h1{
         margin-top: -15px;
      }
   }

   @media screen and (max-width:700px){
      #texto{
        margin-left: -400px;
        margin-top: -45px;
      }
      p{
         font-size: 11.5px;
         width: 310px;
      }
      h1{
         font-size: 25px;
         margin-top: -10px;
      }
   }



@media screen and (max-width:620px){
    #texto{
        margin-top: -50px;
    }
    p{
      font-size: 10px;
      width: 300px;
    }
    h1{
      font-size: 22px;
    }
}

@media screen and (max-width:551px){
   #texto{
      /* font-size: 6.9px;
      margin-left: -390px;
      margin-top: -30px; */
   }
   p{
      font-size: 9px;
      width: 265px;
   }

   }

`

export const ContainerDevs = styled.section`
   background-color: white;
   
   width: 100%;
    

   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: flex-start;
   align-content:space-around;

   @media screen and (max-width:551px){
      #participantes{
         justify-content: center;
         align-items: center;
      }
   }

`

export const DivLinks = styled.div`
   margin-top: 50px;
   font-size: 20px;
   text-align: left;

   h3{
      background: linear-gradient(270deg, #021639 0%, #0E21A1 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   h3 a{
      font-size: 18px;
      text-decoration: none;
      margin-top: 20px;
   }

   @media screen and (max-width:860px){
      font-size: 16px; 
   }

   @media screen and (max-width:685px){
      font-size: 14px;
      h3 a {
         font-size: 14px;
      }
   }

   @media screen and (max-width:551px){
      font-size: 10px;
      h3 a{
         font-size: 10px;
      }
   }
`

export const ContainerForm = styled.article`
   border-radius: 10px;
   background-color: #D4C5FF;
   width: 500px;
   height: 560px;
   padding: 50px 30px;
   margin-left: 100px;


   .email, .senha{
      color: #021639;
      width: 100%;
      padding: 10px;
      margin-bottom: 12px;

      label {
         font-size: 30px;
         font-weight: 600;
         padding: 0;
         margin-top: 55px;
         text-align: start;
      }
      input {
         width: 100%;
         border: none;
         border-radius: 0;
         background-color: #D4C5FF;
         font-size: 20px;
         outline: none;
         border-bottom: 3px solid #868686;
         margin-top: 10px;
      }
   }

   #esqsenha {
   
      a { 
         color: #1F3E74; 
         text-decoration: underline;
         font-size: 20px;
         display: flex;
         justify-content: flex-end; 
         align-items: flex-end; 
      }
   }

   #entrar {
      border: none;
      width: 100%;
      height: 52px;
      background-color: #1F3E74;
      color: white;
      border-radius: 40px;
      font-size: 24px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin-top: 40px;
      cursor: pointer;
   }

   #cad {
      display: flex;
      justify-content: center;
      margin-top: 10px;

      p { 
         font-style: normal;
         font-weight: 400;
      }

      a {
         font-size: 18px;
         font-style: normal;
         font-weight: 700;
         line-height: normal;
         text-decoration-line: underline;
      }
   }

   @media screen and (max-width:1140px){
      width: 300px;
      height: 560px;
      margin-right: 50px;  
   }

@media screen and (max-width:1060px){
      width: 400px;
      margin-right: 80px;
}

   @media screen and (max-width:1041px){
      width: 200px;
      margin-left: -30px;
   }


   @media screen and (max-width:950px){
        width: 300px;
        margin-left: 30px;
   }

   @media screen and (max-width:851px){
        margin: auto;
        margin-top: 20px;
        width: 500px;
        height: 560px;
    
      h1{
         font-size: 50px;
      }
      .email label, .senha label{
         font-size: 22px;
      }
      .email input, .senha input{
         font-size:16px;
      }
      #esqsenha a{
         font-size: 14px; ;
      }
      #entrar{
         font-size: 20px;
         height: 35px;
         margin-top: 20px;
      }
      #cad p, #cad p a{
         font-size: 15px;
      }
   }
   @media screen and (max-width:730px){
         width: 400px;
         height: 560px;
   }

`

export const ContainerLogin = styled.main`
   width: 100%;
   min-height: 500px;
   margin: 20px auto; 

   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: stretch;
   align-content: space-around;

   .item{
      flex: 1 2;
   }

   .container :nth-child(2) {
      align-self: center;
      padding: 10px;
   }

   @media screen and (max-width:750px){
      flex-direction: column;
   }

`

export const IntrodLoginStyle = styled.section`
   margin-top: 40px;
   justify-content: center;
   align-items: center;
   display: inline-block;
   position: relative;
   margin-bottom: 10px;

   #balaodefala{
      max-height:480px;
      max-width: 600px;
   }
   
   #container{
      display: inline-block;
      position: relative;
   }
  
  #container figcaption {
      width: 345px;
      position: absolute;

      top: 45px;
      right: 10px;
      font-size: 28px;
      color: black;
  }

  @media screen and (max-width:1140px){
      #balaodefala{
         max-height:480px;
         max-width: 500px;
      }
      #container figcaption {
         width: 260px;
         top: 35px;
         right: 25px;
         font-size: 22px;
      }
   }

   @media screen and (max-width:930px){
      #balaodefala{
         max-height:280px;
         max-width: 400px;
      }
      #container figcaption {
         width: 250px;
         bottom: 30px;
         right: -14px;
         font-size: 16px;
      }
      .container{
         flex-direction: column;
         justify-content: center;
         align-items: center;
      }
   }


   @media screen and (max-width:655px){
      #balaodefala{
         margin-left: -100px;
      }
   }

   @media screen and (max-width:490px){
      #balaodefala{
         margin-left: -6px;
      }
   }

`

export const IdentificacaoStyle = styled.section`
     
      width: 100%;
      margin-top: 25px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch; 
      align-content: space-around;
      

   .infos{    
      flex: 1 2;
      margin-left: 30px;
   }

   .infos hr{
      max-width: 993px;
      margin-left: 1px;
      margin-top: 15px;
      border: 0.9px solid #868686;
   }
   .infos p{
      font-size: 28px;
      margin-top: 20px;
   }
   .linha{
      width: 100%;
      border: 0.1px solid black;
   }

   @media screen and (max-width:908px) {
         #Carlos{
         width: 180px;
         height: 140px;
         margin-left: 10px;
      }
      .infos p {
         font-size: 20px;
      }
      h1{
         font-size: 24px;
      }
   }
   @media screen and (max-width:628px) {
         #Carlos{
         width: 100px;
         height: 100px;
         margin-left: 10px;
      }
      .infos p {
         font-size: 16px;
      }
       h1{
         font-size: 20px;
      }
   }

`

export const DataStyle = styled.section`
   width: 157px;
   height: 47px;
   border-radius: 18px;
   background-color: #D4C5FF;
   font-size: 22px;

   display: flex;
   justify-content: center;

   margin: auto;
   margin-top: 25px;
   padding: 10px;

   @media screen and (max-width: 908px) {
      font-size: 16px; 
   }
 
   @media screen and (max-width: 628px) {
        font-size: 14px;
        width: 118px;
        height: 37px;

        justify-content: center;
        text-align: center;
        align-items: center ;
   }
`

export const ContainerMensagens = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 20px;

   .message {
      display: flex;
      align-items: center;
      background-color: #d4c5ff;
      padding: 15px;
      border-radius: 10px;
      margin-bottom: 20px;
      width: 100%; /* Ajuste automático da largura */
      max-width: 600px; /* Tamanho máximo da mensagem */
   }

.chat {

    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
}

.icon {
    width: 50px;
    height: 50px;
    margin: 0px 5px 0px 5px;
}

.bot-message {
    align-self: flex-start;
    justify-content: start;
    margin-right: 70%;
}

.user-message {
    margin-left: 70%;
    background-color: #b3c7f5;
}

.message p {
    margin: 0 10px;
    font-size: 16px;
    color: #000;
}



   @media (max-width: 1200px) {
         padding: 10px;

      .message {
         width: 80%; 
      }
      .message p {
         font-size: 16px;
      }

      .icon {
         width: 30px;
         height: 30px;
      }
      .bot-message {
         margin-right: 60%;
      }

      .user-message {
         margin-left: 60%;
      }
   }
   @media (max-width: 1012px) {
      padding: 10px;

      .message {
         width: 60%; 
      }
      .message p {
         font-size: 14px;
      }

      .icon {
         width: 30px;
         height: 30px;
      }
      .bot-message {
         margin-right: 50%;
      }

      .user-message {
         margin-left: 60%;
      }
   }
   @media (max-width: 940px) {
      padding: 15px;

      .message {
         width: 55%; 
      }
      .message p {
         font-size: 13px;
      }

      .icon {
         width: 30px;
         height: 30px;
      }
      .bot-message {
         margin-right: 50%;
      }

      .user-message {
         margin-left: 40%;
      }
   } 

`

export const InteragirChatStyle = styled.article`
    display: flex;
    justify-content: center;
    background-color: #D4C5FF;
    width: 100%;
    height: 97px;
    padding: 10px;
    box-shadow: 0px -2px 10px rgba(0,0,0,0.1);


      form {
         margin-top: 20px;
         width: 100%;
         max-width: 500px; 
         display: flex;
         justify-content: center;
         align-items: center;
      }  

  
    #id-entrada {
      width: 100%; 
      max-width: 600px; 
      height: 50px;
      border-radius: 15px;
      text-align: center;
      font-size: 22px;
      box-shadow: 3px 5px 2px black;
   }

#enviar {
    margin-left: 10px;
    background-image: url(../../public/chat/icon-enviar.png);
    background-repeat: no-repeat;
    background-position: center;
    width: 55px;
    height: 55px;
    background-size: 65px;
    border-radius: 77px;
    cursor: pointer;
}
   
      #id-entrada {
         flex-grow: 1; 
         width: 100%;
         max-width: 800px; 
         height: 50px;
         border-radius: 15px;
         text-align: center;
         font-size: 22px;
      }

      #enviar {
         margin-left: 20px;
      }

   
   @media screen and (max-width: 915px){
    
      #id-entrada{
         font-size: 18px;
      }
      #enviar{
         width: 48px;
         height: 48px;
      }
   }
   @media screen and (max-width: 600px){
    
      #id-entrada{
         font-size: 16px;
      }
   }

`

export const ContainerChatStyle = styled.main`

    display: grid;
    overflow-y: auto;

    grid-auto-rows: 200px;
    /* grid-template-columns: repeat(auto-fit, 1fr); */
    grid-template-rows: auto auto 1fr auto;
    gap:5px;
    grid-template-areas: 
    'identificacao identificacao'
    'dataAtual dataAtual'
    'falaChatBot  falaChatBot'
    'falaUser falaUser'
    'envioMensagem envioMensagem'
    ;


   .identificacao{
      grid-area: identificacao;
   }
   .dataAtual{
      grid-area: dataAtual;
   }
   .bot-message{
      grid-area: falaChatBot;
   }
   .user-message{
      grid-area: falaUser;
   }
   .envioMensagem{
      grid-area: envioMensagem;
   }




`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
   background-color: #D4C5FF;
`;

export const Content = styled.div`
    text-align: center;
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const ErrorTitle = styled.h1`
    font-size: 6rem;
    color: #1F3E74;
    margin-bottom: 20px;
`;

export const Message = styled.p`
    font-size: 1.5rem;
    color: #1F3E74;
    margin-bottom: 30px;
`;

export const Button = styled.button`
    background-color: #1F3E74;
    color: white;
    font-size: 1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0E21A1;
        box-shadow: 5px 8x 8px 0px rgba(0,0,0,1);
    }
`;