import { Parallax } from 'react-parallax'
import phoneImg from '../../assets/parallax_images/oldphone_5.jpg'
import './parallax-patterns-styles.scss'


const Phone = () => {
    
    return (
        <Parallax className='parallax-pattern-image' blur={0} bgImage={phoneImg} strength={800} bgImageStyle={{ minHeight: '100vh' }} />
    )
}

export default Phone
