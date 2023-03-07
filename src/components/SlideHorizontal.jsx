import '../styles/SlideHorizontal.scss'
export const SlideHorizontal = ({ images }) => {

    return (
        <div className='SlideHorizontal'>
            <div className="SlideContainer">
                <button>{'<'}</button>
                <div className="ImageContainer">
                    {
                        images.map((img, index) => (
                            <img key={index} src={img} />
                        ))
                    }
                </div>
                <button>{'>'}</button>
            </div>
        </div>
    )
}
