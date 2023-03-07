import { SlideHorizontal } from "./SlideHorizontal"
import '../styles/ProductGallery.scss'
export const ProductGallery = ({images}) => {
  return (
    <div className="ProductGallery">
        <div className="SlideSmall">

        </div>
       <SlideHorizontal images={images}/>
    </div>
  )
}
