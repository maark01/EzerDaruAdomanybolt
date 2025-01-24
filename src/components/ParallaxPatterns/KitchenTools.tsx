import SimpleParallax from "simple-parallax-js"
import furnitureImg from '../../assets/parallax_images/kitchen_tools.jpg'
import './parallax-patterns-styles.scss'


const Furniture = () => {

    return (
        <div className='parallax-pattern-image'>
            <SimpleParallax orientation='down' scale={1.6} delay={1}>
                <img src={furnitureImg} alt='GreatCoatsImg' className='d-flex mx-auto' />
            </SimpleParallax>
        </div>
    )
}

export default Furniture
