import { useEffect, useState } from 'react'
import '../styles/CardProduct.scss'
export const CardProduct = ({ item }) => {
    const [selectedAmount,setSelectedAmount] = useState(item.amount)
    useEffect(() => {
        setSelectedAmount(item.amount)
    }, [item.amount])
    

    const subAmount = () =>{
        setSelectedAmount(c => c > 1 ? c - 1 : 1)
    }
    const addAmount = () =>{
        setSelectedAmount(c => c < item.product.amount ? c + 1 : c)
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

                    <button>
                    </button>

                </div>
                <div className='cp-info--bottom'>
                    <div className='bt-input'>
                        <button className='bt-input--sub' onClick={subAmount}>
                            -
                        </button>
                        <input type="text" value={selectedAmount}/>
                        <button className='bt-input--add' onClick={addAmount}>
                            +
                        </button>
                    </div>
                    <div className='bt-price'>

                        <p>{'$' + item.product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
