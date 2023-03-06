import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import '../styles/SideCart.scss'
import { CardProduct } from "./CardProduct"
import { EmptyCart } from "./EmptyCart"
import { getSubtotalCart, getTotalCart } from '../helpers/functions'
export const SideCart = () => {
    const { shoppingCart, openSideCart, setOpenSideCart } = useContext(AppContext)

    const handleOpenSideCart = () => {
        setOpenSideCart(e => !e)
    }


    return (
        <>
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
                                    <div className="details">
                                        <div className="details-top">

                                            <div>
                                                <p>SUBTOTAL</p>
                                                <p>$ {getSubtotalCart(shoppingCart)}</p>
                                            </div>
                                            <div>
                                                <p>COSTOS DE ENVÍO</p>
                                                <p>A calcular</p>
                                            </div>
                                            <div className="total">
                                                <p>TOTAL</p>
                                                <p>$ {getTotalCart(shoppingCart)}</p>
                                            </div>
                                        </div>
                                        <div className="details-center">
                                            <p>¡Tu envío es totalmente gratis!</p>
                                            <div className="bar"></div>
                                            <div className="prices">
                                                <p>$ 0</p>
                                                <p>$ 150000</p>
                                            </div>
                                        </div>
                                        <div className="details-bottom">
                                            <button>
                                                FINALIZAR COMPRA
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            ) :
                            (
                                <EmptyCart />
                            )
                    }
                </div>

            </div>
            <div className={openSideCart ? 'Sln-bg expanded' : 'Sln-bg collapsed'}
            onClick={handleOpenSideCart}
            ></div>
        </>
    )
}
