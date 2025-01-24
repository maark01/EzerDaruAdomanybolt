import SimpleParallax from "simple-parallax-js"
import phoneImg from '../../assets/parallax_images/oldphone_5.jpg'
import './parallax-patterns-styles.scss'


const Phone = () => {

    return (
        <div className='parallax-pattern-image'>
            <SimpleParallax orientation='down' scale={1.25} delay={1}>
                <img src={phoneImg} alt='GreatCoatsImg' className='d-flex mx-auto' />
            </SimpleParallax>
        </div>
    )
}

export default Phone
