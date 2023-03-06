import { ProductDetails } from "./ProductDetails"
import product from '../data/product'
import '../styles/Product.scss'
import { LayoutModal } from "../containers/LayoutModal"
import { useState } from "react"
import { ModalGuideSizes } from "./ModalGuideSizes"
export const Product = () => {
  const [isOpenModal,setIsOpenModal] = useState(false)

  return (
    <section className="Product">
        <div className="ProductGallery">

        </div>
        <ProductDetails product={product} setIsOpenModal={setIsOpenModal}/>
        {isOpenModal&&(
          <LayoutModal openModal={setIsOpenModal}>
            <ModalGuideSizes image={product.sizeguide} setIsOpenModal={setIsOpenModal} />
          </LayoutModal>
        )}
    </section>
  )
}
