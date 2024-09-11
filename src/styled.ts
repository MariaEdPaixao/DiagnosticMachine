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