import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { BsPlusCircle } from 'react-icons/bs'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { Atras, Bebida, BotonAgregar, BotonesCont, Cantidad, Check, Cont, ContAdicion, Contador, ContProduct, ContSabores, Descrip, ItemBebidas, Navb, NombreBe, NombreProd, PrecioBe, PrecioProd, Product, Sabores, SegSubtitulo, Subtitulo } from '../styles/StyledSeleccion';
import { urlBebidas, urlSabores } from '../helpers/Url';

const Seleccion = () => {
    const productos = JSON.parse(localStorage.getItem('productCar')) || []
    const [cantidad, setcantidad] = useState(1);
    const [precio1, setprecio1] = useState(25);
    const [bebidas, setbebidas] = useState([]);
    const [bebidaSelec, setbebidaSelec] = useState([]);
    const [sabor, setsabor] = useState([]);

    const consultBebi = async () => {
        const resp = await fetch(urlBebidas)
        const data = await resp.json()
        setbebidas(data)
    }

    const consultSabo = async () => {
        const resp = await fetch(urlSabores)
        const data = await resp.json()
        setsabor(data)
    }


    useEffect(() => {
        consultBebi()
        consultSabo()
    }, []);


    const mas = () => {
        setcantidad(cantidad + 1)
        setprecio1(precio1 + 25)
    }

    const menos = () => {
        if (cantidad > 1) {
            setcantidad(cantidad - 1)
            setprecio1(precio1 - 25)
        }
    }

    const agregarcar = () => {
        const productoComprar = {
            precio1,
            cantidad
        }

        productos.push(productoComprar)
        productos.push(bebidaSelec)
        localStorage.setItem('productCar', JSON.stringify(productos))
    }

    const bebidaSelect = (id, nombre, precio, imagen) => {
        setbebidaSelec({
            id, nombre, precio, imagen
        })
    }

    return (
        <Cont>
            <Navb>
                <Atras ><IoIosArrowBack /></Atras>
            </Navb>
            <ContProduct>
                <Product src="https://res.cloudinary.com/jadergomez/image/upload/v1643558593/G-VERDE_ktkshe_fstbfk.png" alt="Prod" />
            </ContProduct>
            <center>
                <NombreProd>Guajolota de Tamal Verde</NombreProd>
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
                    sabor.map(sab => (
                        <Sabores src={sab.imagen} alt={sab.nombre} key={sab.id} />
                    ))
                }
            </ContSabores>
            <SegSubtitulo>Guajolocombo</SegSubtitulo>
            <Descrip>Selecciona la bebida que más te guste y disfruta de tu desayuno</Descrip>
            <ContAdicion>
                {
                    bebidas.map(bebi => (
                        <>
                            <ItemBebidas key={bebi.id}>
                                <Check type="checkbox" name="" id={bebi.id} onChange={() => bebidaSelect(bebi.id, bebi.nombre, bebi.precio, bebi.imagen)} />
                                <Bebida src={bebi.imagen} alt={bebi.nombre} />
                                <NombreBe>{bebi.nombre}</NombreBe>
                                <PrecioBe>+ ${bebi.precio} MXN</PrecioBe>
                            </ItemBebidas>
                        </>
                    ))
                }
                <BotonAgregar onClick={() => agregarcar()} type="button">Ir a pagar ${precio1} + bebida</BotonAgregar>
            </ContAdicion>
        </Cont>
    );
};

export default Seleccion;