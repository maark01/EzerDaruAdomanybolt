import SimpleParallax from 'simple-parallax-js';
import donationImg from '../../assets/parallax_images/vintage_clothing.jpg';
import './parallax-patterns-styles.scss';

const Donation = () => {
    return (
        <div className='parallax-pattern-image'>
            <SimpleParallax orientation='down' scale={1.4} delay={1}>
                <img src={donationImg} alt='GreatCoatsImg' className='d-flex mx-auto' />
            </SimpleParallax>
            <div className='parallax-pattern-content'>
                <span className='parallax-pattern-title'>Ezer Daru Adománybolt</span>
            </div>
        </div>
    );
};

export default Donation;
