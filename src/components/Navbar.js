import { button } from 'bootstrap';
import styled from 'styled-components';

const Link = () => {
    return <div>
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
        <Div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="Guappjolotas" role="tabpanel" aria-labelledby="pills-home-tab"><Img src="./card...svg" alt="" /></div>
            <div className="tab-pane fade" id="Bebidas" role="tabpanel" aria-labelledby="pills-profile-tab"><Img src="./bebidas.svg" alt="" /></div>
            <div className="tab-pane fade" id="Tamales" role="tabpanel" aria-labelledby="pills-contact-tab"><Img src="./tamales.svg" alt="" /></div>
        </Div>
    </div>;
};

const Button = styled.button`
    font-size:20px;
    border:none;
    background-color:#F7EEFE;
    
    &:hover{
      color:orange;
    }
  &:focus {
    color: red;
  }
  &:active {
    color: yellow;
  }
   

`

const Header = styled.div`
margin-top:52px;
justify-content:center;
display:flex;
`

const Div = styled.div`
  

`


const Img = styled.img`
   display: flex;
    margin:auto;


`


export default Link;