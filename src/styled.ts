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
      padding: 1.5rem 6rem;
   }

   .logo{
      display: flex;
      align-items: center;
   }

   .logo h1 {
      color: #fff;
   }

   .logo img{
      height: 100px;
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