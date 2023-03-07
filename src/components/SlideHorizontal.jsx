import { useRef,useState } from 'react'
import '../styles/SlideHorizontal.scss'
export const SlideHorizontal = ({ images }) => {

    const myImg = useRef(null)

    const [isDragStart, setIsDragStart] = useState(false)
    const [prevPosX, setPrevPosX] = useState(null)
    const [posClick, setPosClick] = useState(null)
    const [timeT, setTimeT] = useState(0)
    const [posX, setPosX] = useState(0)
    const [imgCurrent, setImgCurrent] = useState(0)

    const mouseMove = (e)=>{
        if(!isDragStart) return
        let posDiff
        if (e.clientX) {
            posDiff = e.clientX - posClick
        } else {
            posDiff = e.touches[0].pageX - posClick
        }
        setPosX(prevPosX + posDiff)
 
    }

    const mouseDown = (e) => {
        setIsDragStart(true)
        setPosClick(e.clientX)
        setPrevPosX(posX)
        setTimeT(0)

    }

    const mouseUp = (e) => {
        setIsDragStart(false)
        let posDiff
        if (e.clientX) {
            posDiff = e.clientX - posClick
        } else {

            posDiff = e.changedTouches[0].pageX - posClick
        }
        setPosX(prevPosX + posDiff)
        const imgWidth = myImg.current.clientWidth
        setTimeT(0.3)

   
        if (posDiff < 0) {
            if (!(imgCurrent === (images.length-1))) {

                setPosX(-(imgCurrent+1) * imgWidth)
                setImgCurrent(i => i + 1)
            } else {
                setPosX(-imgWidth * (images.length - 1))

            }
        } else if (posDiff > 0) {
            if (!(imgCurrent === 0)) {

                setPosX(-(imgCurrent - 1) * (imgWidth))
                setImgCurrent(i => i - 1)
            } else {
                setPosX(0)
            }

        }
    }

    const handleBackNextImg = (e) => {
        const imgWidth = myImg.current.clientWidth
        if(e.target.id === "left"){
            setPosX(-(imgCurrent - 1) * (imgWidth))
            setImgCurrent(x=>x>0? x-1 : 1)
        }else{
           
            setPosX(-(imgCurrent+1) * imgWidth)
            setImgCurrent(x=>x< images.length -1 ? x+1 : x)
        }
    }

    return (
        <div className='SlideHorizontal'>
            <div 
                className="SlideContainer"
         
                onTouchMove={mouseMove}
                onMouseMove={mouseMove}
                onPointerDown={mouseDown}
                onMouseUp={mouseUp}
                onTouchEnd={mouseUp}
               
                >
                <button
                    id='left'
                    onClick={handleBackNextImg} 
                    style={{
                        display: imgCurrent > 0 ? "block" : "none"
                    }}
                    >{'<'}</button>
                <div 
                    className="ImageContainer"
                    style={{
                        transform:'translate3d(' + posX + 'px,0px,0px)',
                        transition: 'all ' + timeT + 's ease'
                    }}    
                    >
                    {
                        images.map((img, index) => (
                            index ===0 ?
                            <img ref={myImg} key={index} src={img} draggable='false'/>
                            :
                            <img key={index} src={img} draggable='false'/>

                        ))
                    }
                </div>
                <button 
                    id='right'
                    onClick={handleBackNextImg} 
                    style={{
                        display: imgCurrent === images.length-1 ? "none" : "block"
                    }}
                >{'>'}</button>
            </div>
        </div>
    )
}
