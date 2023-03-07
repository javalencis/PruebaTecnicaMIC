import { useRef, useState } from 'react'
import '../styles/SlideSmall.scss'
export const SlideSmall = ({ images }) => {
    const myImg = useRef(null)
    const [posY, setPosY] = useState(0)
    const [posX, setPosX] = useState(0)
    const [positions, setPositions] = useState(0)

    const handleTopBottom = (e) => {
        let imgH = myImg.current.clientHeight + 10
        const screenWidth = window.innerWidth
        if (e.target.id === 'top') {
            
                setPosX(-(positions - 2) * imgH) 
                setPosY(-(positions - 2) * imgH)
                setPositions(x => x > 0 ? x - 2 : 2)
         

        } else {
           
                setPosX(-(positions + 2) * imgH)
                setPosY(-(positions + 2) * imgH)
                setPositions(x => x < images.length ? x + 2 : x)
         

        }


    }
    return (
        <div className='SlideSmall'>
            <button
                id='top'
                onClick={handleTopBottom}
                style={{
                    display: positions === 0 ? "none" : "block"
                }}
            >

                <span>

                    {'<'}
                </span>
            </button>
            <div
                className='SlideSmallContainer'
                style={{
                    transform: window.innerWidth <= 1300 ?'translateX(' + posX+ 'px)':'translateY(' + posY + 'px)'
                }}>
                {
                    images.map((img, index) => (
                        <img ref={myImg} key={index} src={img} />
                    ))
                }
            </div>
            <button
                id="bottom"
                onClick={handleTopBottom}
                style={{
                    display: positions >= images.length - 2 ? "none" : "block"
                }}
            >
                <span>

                    {'>'}
                </span>
            </button>
        </div>
    )
}
