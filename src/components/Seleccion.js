import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { IoIosArrowBack } from 'react-icons/io'
import { BsPlusCircle } from 'react-icons/bs'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { Atras, Bebida, BotonAgregar, BotonesCont, Cantidad, Check, Cont, ContAdicion, Contador, ContProduct, ContSabores, Descrip, ItemBebidas, Navb, NombreBe, NombreProd, PrecioBe, PrecioProd, Product, Sabores, SegSubtitulo, Subtitulo } from '../styles/StyledSeleccion';
import { urlBebidas, urlSabores } from '../helpers/Url';
import { useParams } from 'react-router-dom';

const Seleccion = ({ comida }) => {

    // Arrglo de objetos de los productos en el LocalStorage
    const productos = JSON.parse(localStorage.getItem('productCar')) || []
    // Estado de cantidad por defecto es 1
    const [cantidad, setcantidad] = useState(1);
    // Estado del precio del producto por defecto vale 25
    const [precio1, setprecio1] = useState(25);
    // Estado donde se guardan la informacion de las bebidas traidas desde la api
    const [bebidas, setbebidas] = useState([]);
    // Estado donde se guarda la informacion de la bebida seleccionada
    const [bebidaSelec, setbebidaSelec] = useState([]);
    // Estado donde se guarda la informacion del sabor traido de la api
    const [sabor, setsabor] = useState([]);
    // Id del producto que es traido del endpoint
    const { id } = useParams()
    // Navegacion
    const navigate = useNavigate();

    // Peticion para traer las bebidas y se guardan en el estado de bebidas
    const consultBebi = async () => {
        const resp = await fetch(urlBebidas)
        const data = await resp.json()
        setbebidas(data)
    }

    // Peticion para traer los sabores que se guardan en el estado de sabores
    const consultSabo = async () => {
        const resp = await fetch(urlSabores)
        const data = await resp.json()
        setsabor(data)
    }

    // Llama las funciones cuando detecta un cambio de estado
    useEffect(() => {
        consultBebi()
        consultSabo()
    }, []);


    // Modifica el estado de la cantidad y el precio al presionar el boton mas
    const mas = () => {
        setcantidad(cantidad + 1)
        setprecio1(precio1 + 25)
    }

    // Modifica el estado de la cantidad y el precio al presionar el boton menos
    const menos = () => {
        if (cantidad > 1) {
            setcantidad(cantidad - 1)
            setprecio1(precio1 - 25)
        }
    }

    // Agrega los productos al carrito y los manda al localStorage
    const agregarcar = () => {
        const productoComprar = {
            id,
            imagen: imgprincipal,
            precio: precio1,
            cantidad
        }

        productos.push(productoComprar)
        if (bebidaSelec.length !== 0) {
            productos.push(bebidaSelec)
        }
        localStorage.setItem('productCar', JSON.stringify(productos))
        navigate('/car')
    }

    // Agrega el producto de bebida al carrito de compras
    const bebidaSelect = (id, nombre, precio, imagen) => {
        setbebidaSelec({
            id, nombre, precio, imagen
        })
    }

    // Hace el filtrado para mostrar el producto que se trae por paramentro desde el AppRouter
    const producto = comida.find((product) => product.id === Number(id))
    const { imgprincipal, nombrep } = producto
    console.log(nombrep)

    return (
        <Cont>
            <Navb>
                <Atras ><IoIosArrowBack /></Atras>
            </Navb>
            <ContProduct>
                <Product src={imgprincipal} alt="Prod" />
            </ContProduct>
            <center>
                <NombreProd>{nombrep}</NombreProd>
                <PrecioProd>${precio1} MXN</PrecioProd>
            </center>
            <Contador>
                <BotonesCont onClick={() => menos()}><AiOutlineMinusCircle /></BotonesCont>
                <Cantidad>{cantidad}</Cantidad>
                <BotonesCont onClick={() => mas()}><BsPlusCircle /></BotonesCont>
            </Contador>

            <Subtitulo>Sabor</Subtitulo>
            <ContSabores>
                {
                    sabor.map((sab, index) => (
                        <Sabores src={sab.imagen} alt={sab.nombre} key={index} />
                    ))
                }
            </ContSabores>
            <SegSubtitulo>Guajolocombo</SegSubtitulo>
            <Descrip>Selecciona la bebida que más te guste y disfruta de tu desayuno</Descrip>
            <ContAdicion>
                {
                    bebidas.map(bebi => (

                        <ItemBebidas key={bebi.id}>
                            <Check type="checkbox" name="" id={bebi.id} onChange={() => bebidaSelect(bebi.id, bebi.nombre, bebi.precio, bebi.imagen)} />
                            <Bebida src={bebi.imagen} alt={bebi.nombre} />
                            <NombreBe>{bebi.nombre}</NombreBe>
                            <PrecioBe>+ ${bebi.precio} MXN</PrecioBe>
                        </ItemBebidas>

                    ))
                }
                <BotonAgregar onClick={() => agregarcar()} type="button">Ir a pagar ${precio1} + bebida</BotonAgregar>
            </ContAdicion>
        </Cont>
    );
};

export default Seleccion;