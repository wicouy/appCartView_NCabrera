import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CustomLoader from "./CustomLoader"
import ItemList from "./ItemList"
import Page from "./Page"

const productosIniciales = [
    {
        id: 1,
        nombre: "PIZZA 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "PIZZA 2",
        precio: 200
    }
]

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 3000)
        })

        pedido.then((resultado) => {
            setProductos(resultado)
            setLoading(false)
        })

        pedido.catch((error) => {
            console.log("Termino el pedido mal")
        })

    }, [])


    if (loading) {
        return (
            <CustomLoader />
        )
    } else {
        return (
            <Page titulo="Catalogo" subtitulo="Todos los productos en un solo lugar">
                <ItemList productos={productos} />
            </Page>
        )
    }

}
export default ItemListContainer