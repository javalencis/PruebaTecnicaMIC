import '../styles/ModalGuideSizes.scss'
export const ModalGuideSizes = ({ image,setIsOpenModal }) => {
    const handleCloseModal = () => {
        setIsOpenModal(e=>!e)
    }
    return (
        <div className="ModalGuideSizes">
            <button onClick={handleCloseModal}>X</button>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    )
}
