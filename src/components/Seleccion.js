import React from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { BsPlusCircle } from 'react-icons/bs'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { Atras, Bebida, BotonAgregar, BotonesCont, Cantidad, Check, Cont, ContAdicion, Contador, ContProduct, ContSabores, Descrip, ItemBebidas, Navb, NombreBe, NombreProd, PrecioBe, PrecioProd, Product, Sabores, SegSubtitulo, Subtitulo } from '../styles/StyledSeleccion';

const Seleccion = () => {

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
                <PrecioProd>$25 MXN</PrecioProd>
            </center>
            <Contador>
                <BotonesCont><AiOutlineMinusCircle /></BotonesCont>
                <Cantidad>0</Cantidad>
                <BotonesCont><BsPlusCircle /></BotonesCont>
            </Contador>

            <Subtitulo>Sabor</Subtitulo>
            <ContSabores>
                <Sabores src="https://res.cloudinary.com/jadergomez/image/upload/v1643558695/verde_syxdii_frt77g.png" alt="Sabor" />
                <Sabores src="https://res.cloudinary.com/jadergomez/image/upload/v1643558739/mole_endv5y_azey3t.png" alt="Sabor" />
                <Sabores src="https://res.cloudinary.com/jadergomez/image/upload/v1643558780/rajas_tbfmg1_hznbty.png" alt="Sabor" />
                <Sabores src="https://res.cloudinary.com/jadergomez/image/upload/v1643558830/pi%C3%B1a_ank3us_t7wkg3.png" alt="Sabor" />
                <Sabores src="https://res.cloudinary.com/jadergomez/image/upload/v1643558859/pasas_v8wwvy_kwoppk.png" alt="Sabor" />
                <Sabores src="https://res.cloudinary.com/jadergomez/image/upload/v1643558898/guayaba_njp1fu_sh0atp.png" alt="Sabor" />
            </ContSabores>
            <SegSubtitulo>Guajolocombo</SegSubtitulo>
            <Descrip>Selecciona la bebida que más te guste y disfruta de tu desayuno</Descrip>
            <ContAdicion>
                <ItemBebidas>
                    <Check type="checkbox" name="" id="" />
                    <Bebida src="https://res.cloudinary.com/jadergomez/image/upload/v1643559243/B-CHAMPURRADO_d4bgmp_wifixp.png" alt="bebida" />
                    <NombreBe>Champurrado</NombreBe>
                    <PrecioBe>+ $12 MXN</PrecioBe>
                </ItemBebidas>
                <ItemBebidas>
                    <Check type="checkbox" name="" id="" />
                    <Bebida src="https://res.cloudinary.com/jadergomez/image/upload/v1643559271/B-ARROZ_CON_LECHE_cgf6zu_zbwbuu.png" alt="bebida" />
                    <NombreBe>Atole de Arroz</NombreBe>
                    <PrecioBe>+ $12 MXN</PrecioBe>

                </ItemBebidas>
                <ItemBebidas>
                    <Check type="checkbox" name="" id="" />
                    <Bebida src="https://res.cloudinary.com/jadergomez/image/upload/v1643559315/B-CHOCOLATE_jzyh84_rlf4hs.png" alt="bebida" />
                    <NombreBe>Chocolate caliente</NombreBe>
                    <PrecioBe>+ $12 MXN</PrecioBe>

                </ItemBebidas>
                <ItemBebidas>
                    <Check type="checkbox" name="" id="" />
                    <Bebida src="https://res.cloudinary.com/jadergomez/image/upload/v1643559351/B-CAFE_gughuk_ef8mmn.png" alt="bebida" />
                    <NombreBe>Café negro</NombreBe>
                    <PrecioBe>+ $12 MXN</PrecioBe>

                </ItemBebidas>
                <BotonAgregar>Agregar </BotonAgregar>
            </ContAdicion>
        </Cont>
    );
};

export default Seleccion;