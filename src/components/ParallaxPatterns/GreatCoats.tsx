import { Parallax } from 'react-parallax'
import GreatCoatsImg from '../../assets/parallax_images/clothes_2.jpg'
import './parallax-patterns-styles.scss'


const GreatCoats = () => {
    
    return (
        <Parallax className='parallax-pattern-image' blur={0} style={{backGroundColor: '#fdf9f0'}} bgImage={GreatCoatsImg} strength={800} bgImageStyle={{ minHeight: '100vh' }} />
    )
}

export default GreatCoats
