import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { priceWithDiscount } from '../helpers/functions'
import '../styles/CardProduct.scss'
export const CardProduct = ({ id, item }) => {
    const [selectedAmount, setSelectedAmount] = useState(item.amount)
    const { shoppingCart, setShoppingCart } = useContext(AppContext)

    useEffect(() => {
        setSelectedAmount(item.amount)
    }, [item.amount])


    const subAmount = () => {
        setSelectedAmount(c => c > 1 ? c - 1 : 1)
    }
    const addAmount = () => {
        setSelectedAmount(c => c < item.product.amount ? c + 1 : c)
    }
    const handleDeleteItem = () => {
        const newCart = [...shoppingCart]
        newCart.splice(id, 1)
        setShoppingCart(newCart)
    }
    return (
        <div className="CardProduct">
            <div className='cp-img'>
                <img src={item.product.images[0]} alt="" />
            </div>
            <div className='cp-info'>
                <div className='cp-info--top'>
                    <div>
                        <p className='top-subtitle'>{item.product.subtitle}</p>
                        <p className='top-title'>{item.product.title}</p>
                    </div>

                    <button onClick={handleDeleteItem}>
                    </button>

                </div>
                <div className='cp-info--bottom'>
                    <div className='bt-input'>
                        <button className='bt-input--sub' onClick={subAmount}>
                            -
                        </button>
                        <input type="text" value={selectedAmount} />
                        <button className='bt-input--add' onClick={addAmount}>
                            +
                        </button>
                    </div>
                    <div className='bt-price'>
                        {
                            item.product.discountRate > 0 ?
                                (
                                    <>
                                        <p className='bt-price--before'>{'$' + item.product.price}</p>
                                        <p className='bt-price--now'>{'$' + priceWithDiscount(item.product.price, item.product.discountRate)}</p>
                                    </>
                                )
                                :
                                (<p className='bt-price--now'>{'$' + item.product.price}</p> )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}