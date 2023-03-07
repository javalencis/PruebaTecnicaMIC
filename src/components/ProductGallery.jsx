import { SlideHorizontal } from "./SlideHorizontal"
import '../styles/ProductGallery.scss'
import { SlideSmall } from "./SlideSmall"
export const ProductGallery = ({ images }) => {
    return (
        <div className="ProductGallery">
            <SlideSmall images={images} />
            <SlideHorizontal images={images} />
        </div>
    )
}
