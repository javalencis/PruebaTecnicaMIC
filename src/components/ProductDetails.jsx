import { useState } from 'react'
import '../styles/ProductDetails.scss'
export const ProductDetails = ({ product ,setIsOpenModal}) => {
    const [isSelectSize,setIsSelectSize] = useState(null)
    const [selectedAmount,setSelectedAmount] = useState(1)
   
    const handleClickSize = (e) =>{
        setIsSelectSize(parseInt(e.target.id))
    }

    const subAmount = ()=>{
        setSelectedAmount(c => c>1?c-1:1)
    }

    const addAmount = () =>{
        setSelectedAmount(c => c<product.amount ? c+1:c)
    }

    const handleOpenModal = ()=>{
        setIsOpenModal(e=>!e)
    }

    return (
        <div className="ProductDetails">
            <h1 className='pd-title'>
                {product.title}
            </h1>
            <div className='pd-subtitle-ref'>
                <p>{product.subtitle}</p>
                <p>Ref. {product.id}-{isSelectSize ? product.sizes[isSelectSize]:"L"}</p>
            </div>
            <p className='pd-price'>${product.price}</p>
            <div className='pd-sizes-guide'>
                <ul>
                    {product.sizes.map((size, index) => (
                        <li 
                            key={index} 
                            id={index}
                            onClick={handleClickSize}
                            className={index === isSelectSize ? 'active':""}
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
                    <input type="number" value={selectedAmount}/>
                    <button onClick={addAmount}>+</button>
                </div>
                <button className='add-cart'>
                    AGREGAR A MI BOLSA
                </button>
            </div>
        </div>
    )
}
