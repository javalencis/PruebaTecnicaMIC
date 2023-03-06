import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import '../styles/SideCart.scss'
import { CardProduct } from "./CardProduct"
import { EmptyCart } from "./EmptyCart"
export const SideCart = () => {
    const { shoppingCart, setShoppingCart, openSideCart, setOpenSideCart } = useContext(AppContext)

    const handleOpenSideCart = () => {
        setOpenSideCart(e => !e)
    }
    

    return (
        <div className={openSideCart ? "SideCart expanded" : "SideCart collapsed"}>
            <div className="sc-top">
                <p>MI BOLSA DE COMPRAS</p>
                <button onClick={handleOpenSideCart}>
                    X
                </button>
            </div>
            <div className="sc-content">
                {
                    shoppingCart?.length > 0 ?
                        (
                            <div className="sc-list-item-cart">
                                <div className="list">
                                    {shoppingCart.map((item, index) => (
                                        <CardProduct key={index} id={index} item={item} />
                                    ))}
                                </div>


                            </div>
                        ) :
                        (
                            <EmptyCart />
                        )
                }
            </div>

        </div>
    )
}
