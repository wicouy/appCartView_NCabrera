import { useContext } from "react"
import Contador from "./Contador"
import { contexto } from "./CustomProvider"

const ItemDetail = ({ item }) => {

    const { agregarProducto } = useContext(contexto)

    const onAdd = (contador) => {
        item.cantidad = contador
        agregarProducto(item)
    }

    return (
        <> 
        <h1>El repartidor se comio el pedido pero podes podes comprar esto </h1>
        <p>---------------------------------------------------------------------------------</p>
        <div className="detail-image-contenedor" >
            <h1>{item.title}</h1>
            <img className="detail-image" src={item.image} alt="" />
            <p>{item.description}</p>
            <Contador onAdd={onAdd} />
        </div>
        </>
    )
}

export default ItemDetail