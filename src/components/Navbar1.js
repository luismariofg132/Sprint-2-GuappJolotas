import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {



    return (
        <div>
            {/* Navbar */}
            {/* <nav class="navbar navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand"><img src="logo.svg" width="80px" alt=""></img></a>
                    <form class="d-flex">
                        <a href="/"><img src="https://cdn-icons.flaticon.com/png/512/2366/premium/2366367.png?token=exp=1642868532~hmac=6dd18ca8bd0e6a91785dd9e272ecb4e8" alt="" width="40px" />
                        </a>
                    </form>
                </div>
            </nav> */}
            {/* Titulo */}
            <Container>
                <Title>Nada como una Guajolota para empezar el dìa</Title>
            </Container><br></br>
            {/* barra de busqueda */}
            <ContainerBuscar>
                <BarraBuscar >
                    <FontAwesomeIcon icon={faSearch} />
                    <Busqueda type="text" placeholder="Sabor de guajolota, bebida..." />
                </BarraBuscar>
            </ContainerBuscar>
            {/* Productos  */}
            <Header className=" ">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item" role="presentation">
                        <Button style={{ margin: '10px' }} className="active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#Guappjolotas" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Guappjolotas</Button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Button style={{ margin: '10px' }} className="" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#Bebidas" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Bebidas</Button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Button style={{ margin: '10px' }} className="" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#Tamales" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Tamales</Button>
                    </li>
                </ul>
            </Header>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="Guappjolotas" role="tabpanel" aria-labelledby="pills-home-tab"><Img src="./card...svg" alt="" /></div>
                <div className="tab-pane fade" id="Bebidas" role="tabpanel" aria-labelledby="pills-profile-tab"><Img src="./bebidas.svg" alt="" /></div>
                <div className="tab-pane fade" id="Tamales" role="tabpanel" aria-labelledby="pills-contact-tab"><Img src="./tamales.svg" alt="" /></div>
            </div>
        </div>
    )
};

const Title = styled.h2`
text-align: center;
`
const ContainerBuscar = styled.div`
display:flex;
gap: 5px;
justify-content: center;
`;

const BarraBuscar = styled.div`
    font-size: 20px; 
    border-radius: 20px;
    background: #D5D8DC; 
    padding: 10px;
    display:flex;
    width:100%;
    max-width:500px;
`;
const Busqueda = styled.input`
background: #D5D8DC; 
padding-left:10px;
font-size: 15px;
width: 100%;
outline: none;
  border: 0;
`
const Button = styled.button`
    font-size:20px;
    border:none;
    background-color:#F7EEFE;
    
    &:hover{
      color: red;
    }
  &:focus {
    color: red;
  }
`

const Header = styled.div`
margin-top:52px;
justify-content:center;
display:flex;
`

const Img = styled.img`
   display: flex;
    margin:auto;
`

export default Navbar
