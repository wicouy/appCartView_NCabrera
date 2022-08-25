import { useState } from "react"
import Contador from "./Contador"
import Page from "./Page"

const Cart = () => {

  const handleClickDiv = (e) => {
    e.stopPropagation()
    console.log("Click div")
    console.log(e.currentTarget)
  }

  const handleChange = (e) => {
    console.log(e.target)
  }

  const handleClickDefault = (e) => {
    e.preventDefault()
    console.log("No redirecciono...")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("validando...")
  }

  const handleKeyDown = (e) => {
    console.log(e.key)
  }

  const [estadoPadre, setEstadoPadre] = useState(0)

  const customMethod = (param) => {
    setEstadoPadre(param)
  }

  return (
    <Page titulo="Carrito" subtitulo="Compra y vende">

      <p id="parrafo">El Contador va : {estadoPadre}</p>

      <Contador estadoPadre={estadoPadre} customMethod={customMethod} />

    </Page>
  )
}

export default Cart