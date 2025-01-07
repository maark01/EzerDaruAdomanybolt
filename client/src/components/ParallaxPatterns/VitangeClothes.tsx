import { Parallax } from 'react-parallax'
import donationImg from '../../assets/parallax_images/vintage_clothing.jpg'
import './parallax-patterns-styles.scss'

const Donation = () => {
    return (
        <Parallax className='parallax-pattern-image' blur={0} bgImage={donationImg} strength={800} bgImageStyle={{ minHeight: "100vh"}}>
            <div className='parallax-pattern-content'>
                <span className='parallax-pattern-title'>Ezer Daru Adománybolt</span>
            </div>
        </Parallax>
    )
}

export default Donation
