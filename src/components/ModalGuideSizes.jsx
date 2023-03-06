import '../styles/ModalGuideSizes.scss'
export const ModalGuideSizes = ({image}) => {
  return (
    <div className="ModalGuideSizes">
        <button>X</button>
        <img src={image} alt="" />
    </div>
  )
}
