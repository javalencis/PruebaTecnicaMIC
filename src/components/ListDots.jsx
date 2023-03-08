import '../styles/ListDots.scss'
export const ListDots = ({ images,setImgClicked ,imgClicked}) => {
   const handleClickDot = (e) =>{
    setImgClicked(parseInt(e.target.id))
   }

    return (
        <div className="ListDots">
            {
                images.map((img,index) => (
                    <span 
                        key={index} 
                        id={index}
                        onClick={handleClickDot}
                        className={index==imgClicked?'active':''}
                        >
                    </span>
                ))
            }
        </div>
    )
}
