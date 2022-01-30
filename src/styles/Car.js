import styled from "styled-components";

export const DivProducto = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 75px;
width: 60%;
margin: auto;
background-color: lightgrey;
margin-bottom: 10px;
border-radius: 20px;
`
export const SpanNombre = styled.span`
font-weight: 500;
font-size: 20px;
margin: 0 0.5em;
`

export const SpanPrecio = styled.span`
color: #FA4A0C;
font-weight: 600;
font-size: 20px;
`

export const BotonPagar = styled.button`
background: #FA4A0C;
color: white;
border-radius: 15px;
border: none;
margin: auto;
width: 100%;
height: 100%;
:focus{
    background:#f13202 ;
}
`