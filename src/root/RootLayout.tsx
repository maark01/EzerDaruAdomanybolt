import React, { useContext } from 'react'
import MainNavigation from '../components/Navigation/MainNavigation'
import Footer from '../components/Footer/Footer'
import VitangeClothes from '../components/ParallaxPatterns/VitangeClothes'
import KitchenTools from '../components/ParallaxPatterns/KitchenTools'
import GreatCoats from '../components/ParallaxPatterns/GreatCoats'
import VintageKitchenTools from '../components/ParallaxPatterns/VintageKitchenTools'
import VintageDresses from '../components/ParallaxPatterns/VintageDresses'
import Recycle from '../components/ParallaxPatterns/Recycle'
import Phone from '../components/ParallaxPatterns/Phone'
import { Outlet } from 'react-router-dom'
import { pagesContext } from '../contexts/PagesContext'

const RootLayout: React.FC = () => {
    const { value } = useContext(pagesContext)
    const children = value[0].children

    const parallaxArr = [<VitangeClothes />, <KitchenTools />, <GreatCoats />, <VintageKitchenTools />, <VintageDresses />, <Recycle />, <Phone />, <Footer />]
    const pagesArr = children.map((child) => child.element)

    const combinedArr = parallaxArr.flatMap((parallax, index) => [
        parallax,
        pagesArr[index]
    ])

    return (
        <>
            <MainNavigation />
            <>
                {combinedArr.map((component, index) => (
                    <React.Fragment key={index}>
                        {component}
                    </React.Fragment>
                ))}
            </>
            <Outlet />
        </>
    )
}

export default RootLayout
