import { useEffect, useState } from 'react';
import '../styles/ModalGuideSizes.scss'
export const ModalGuideSizes = ({ image, setIsOpenModal }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getImage = (width,imgs)=>{
        
        if(width > 1300){
            return imgs[0]
        }else if(width >=640){
           
            return imgs[1]
           
        }else{
            return imgs[2]
        }

    }
    const handleCloseModal = () => {
        setIsOpenModal(e => !e)
    }
    return (
        <div className="ModalGuideSizes">
            <button onClick={handleCloseModal}>X</button>
            <div>
                <img src={getImage(width,image)} alt="" />
            </div>
        </div>
    )
}
