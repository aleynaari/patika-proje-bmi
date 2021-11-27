import { Outlet, NavLink, } from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import Form from "./components/Form";



const Container = styled.div`
display: flex;
background-color: #FFF1AF;
height: 70px;
width: 100%;
`;

const Header = styled.h3`
margin-left: 30px;
color: #66806A;
font-weight: bolder;
`;

const Btn = styled.button`
font-size: 15px;
background-color: #FFF1AF;
height: 30px;
border: none;
color: #66806A;
font-weight: bolder;
`;

export default function Navbar() {
  return (
    <>
       <Container>
     <Header> BMI - VÜCUT KİTLE ENDEKSİ HESAPLAMA</Header>
     <ul className="btnC">
        <li>
        <Btn className="btnS">
          <NavLink exact to="/" >BMI Hesapla</NavLink> 
        </Btn>
        </li>
        |{" "}
        <li>
        <Btn className="btnS">
          <NavLink to="/bminedir">BMI Nedir</NavLink> 
        </Btn>
        </li>
        |{" "}
        <li>
        <Btn className="btnS">
          <NavLink to="/sonuclar">Sonuclarınız</NavLink>
        </Btn>
        </li>
      </ul>
   </Container>

   <Outlet />
   <Form></Form>   

   </>
  );
    

};