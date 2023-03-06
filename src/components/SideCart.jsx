import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import '../styles/SideCart.scss'
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
                                {shoppingCart.map(product => (
                                    <p>{product.reference} + {product.amount}</p>
                                ))}
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
