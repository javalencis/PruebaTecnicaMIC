import { useContext, useState } from 'react'
import { AppContext } from "../context/AppContext"
import '../styles/ProductDetails.scss'
import { priceWithDiscount, addItemCart } from '../helpers/functions'


export const ProductDetails = ({ product, setIsOpenModal }) => {
    const { setShoppingCart } = useContext(AppContext)
    const [isSelectSize, setIsSelectSize] = useState(-1)
    const [selectedAmount, setSelectedAmount] = useState(1)
    const [isWarning, setIsWarning] = useState(false)

    const handleClickSize = (e) => {
        setIsSelectSize(parseInt(e.target.id))
        setIsWarning(false)
    }

    const subAmount = () => {
        setSelectedAmount(c => c > 1 ? c - 1 : 1)
    }

    const addAmount = () => {
        setSelectedAmount(c => c < product.amount ? c + 1 : c)
    }

    const handleOpenModal = () => {
        setIsOpenModal(e => !e)
    }
    const handleAddCart = () => {
        if (isSelectSize >=0) {
            const newItem = {
                reference: product.id + '-' + product.sizes[isSelectSize],
                amount: selectedAmount,
                product
            }

            setShoppingCart(cart => addItemCart(cart, newItem))


        } else {
            setIsWarning(true)
        }

    }

    return (
        <div className="ProductDetails">
            <h1 className='pd-title'>
                {product.title}
            </h1>
            <div className='pd-subtitle-ref'>
                <p>{product.subtitle}</p>
                <p>Ref. {product.id}-{isSelectSize>=0 ? product.sizes[isSelectSize] : "L"}</p>
            </div>
            <div className='pd-price'>

                {product.discountRate > 0 ?
                    (
                        <>
                            <p className='pd-price--before'>${product.price}</p>
                            <p className='pd-price--now'>
                                ${priceWithDiscount(product.price, product.discountRate)}
                            </p>
                        </>
                    ):(<p className='pd-price--now'>${product.price}</p>)}
            </div>

            <div className='pd-sizes-guide'>
                <ul>
                    {product.sizes.map((size, index) => (
                        <li
                            key={index}
                            id={index}
                            onClick={handleClickSize}
                            className={index === isSelectSize ? 'active' : ""}
                        >{size}</li>
                    ))
                    }
                </ul>
                <button onClick={handleOpenModal}>
                    Guía de tallas
                </button>

            </div>

            <div className='pg-amount-add'>


                <div className='amount'>
                    <button onClick={subAmount}>-</button>
                    <input type="number" value={selectedAmount} />
                    <button onClick={addAmount}>+</button>
                </div>
                <button className='add-cart' onClick={handleAddCart}>
                    AGREGAR A MI BOLSA
                </button>
                {
                    isWarning && (<p className={isSelectSize >=0 ? 'text-warning-size out' : 'text-warning-size show'}>Por favor selecciona una talla</p>)
                }

            </div>
        </div>
    )
}
