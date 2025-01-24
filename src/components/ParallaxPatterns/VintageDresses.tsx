import SimpleParallax from 'simple-parallax-js'
import coatStandImg from '../../assets/parallax_images/clothes_3.jpg'
import './parallax-patterns-styles.scss'


const CoatStand = () => {

    return (
        <SimpleParallax orientation='right' scale={1.4} delay={1}>
            <img src={coatStandImg} alt='GreatCoatsImg' className='d-flex mx-auto' />
        </SimpleParallax>
    )
}

export default CoatStand
