import SimpleParallax from 'simple-parallax-js'
import recycleImg from '../../assets/parallax_images/recycle_theme_04.jpg'
import './parallax-patterns-styles.scss'


const Recycle = () => {

    return (
        <div className='parallax-pattern-image'>
            <SimpleParallax orientation='down' scale={1.4} delay={1}>
                <img src={recycleImg} alt='GreatCoatsImg' className='d-flex mx-auto' />
            </SimpleParallax>
        </div>
    )
}

export default Recycle
