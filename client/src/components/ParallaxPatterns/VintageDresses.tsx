import { Parallax } from 'react-parallax'
import coatStandImg from '../../assets/parallax_images/clothes_3.jpg'
import './parallax-patterns-styles.scss'


const CoatStand = () => {
    return (
        <Parallax className='parallax-pattern-image' blur={0} bgImage={coatStandImg} strength={800} bgImageStyle={{ minHeight: '100vh'}}/>
    )
}

export default CoatStand
