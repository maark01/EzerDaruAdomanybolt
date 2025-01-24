import SimpleParallax from 'simple-parallax-js'
import clothesImg from '../../assets/parallax_images/kitchen_tools_02.jpg'
import './parallax-patterns-styles.scss'


const Clothes = () => {
    return (
        <div className='parallax-pattern-image'>
            <SimpleParallax orientation='down' scale={1.4} delay={1}>
                <img src={clothesImg} alt='GreatCoatsImg' className='d-flex mx-auto' />
            </SimpleParallax>
        </div>
    )
}

export default Clothes
