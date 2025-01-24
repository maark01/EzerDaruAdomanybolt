import GreatCoatsImg from '../../assets/parallax_images/clothes_2.jpg'
import SimpleParallax from "simple-parallax-js"
import './parallax-patterns-styles.scss'


const GreatCoats = () => {

    return (
        <div className='parallax-pattern-image'>
            <SimpleParallax orientation='left' scale={1.26} delay={1}>
                <img src={GreatCoatsImg} alt='GreatCoatsImg' className='d-flex mx-auto' />
            </SimpleParallax>
        </div>
    )

}

export default GreatCoats
