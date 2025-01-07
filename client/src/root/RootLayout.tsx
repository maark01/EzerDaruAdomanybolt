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

/*import React, { useContext } from 'react'
import MainNavigation from '../components/Navigation/MainNavigation'
import Footer from '../components/Footer/Footer'
import VitangeClothes from '../components/ParallaxPatterns/VitangeClothes'
import News from '../pages/News/News'
import KitchenTools from '../components/ParallaxPatterns/KitchenTools'
import About from '../pages/About/About'
import GreatCoats from '../components/ParallaxPatterns/GreatCoats'
import Founders from '../pages/Founders/Founders'
import VintageKitchenTools from '../components/ParallaxPatterns/VintageKitchenTools'
import Customers from '../pages/Customers/Customers'
import VintageDresses from '../components/ParallaxPatterns/VintageDresses'
import Mission from '../pages/Mission/Mission'
import Recycle from '../components/ParallaxPatterns/Recycle'
import Contact from '../pages/Contact/Contact'
import Phone from '../components/ParallaxPatterns/Phone'
import { Outlet } from 'react-router-dom'
import { pagesContext } from '../contexts/PagesContext'

const RootLayout: React.FC = () => {

    const pagesData: any = useContext(pagesContext)

    const parallaxArr = [<VitangeClothes />, <KitchenTools />, <GreatCoats />, <VintageKitchenTools />, <VintageDresses />, <Recycle />, <Phone />]
    const pagesArr = [<News />, <About />, <Founders />, <Customers />, <Mission />, <Contact />, <Footer />]


    const combinedArr = parallaxArr.flatMap((parallax, index) => [
        parallax,
        pagesArr[index]
    ])

    console.log(combinedArr)

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


import React from 'react'
import MainNavigation from '../components/Navigation/MainNavigation'
import Footer from '../components/Footer/Footer'
import VitangeClothes from '../components/ParallaxPatterns/VitangeClothes'
import News from '../pages/News/News'
import KitchenTools from '../components/ParallaxPatterns/KitchenTools'
import About from '../pages/About/About'
import GreatCoats from '../components/ParallaxPatterns/GreatCoats'
import Founders from '../pages/Founders/Founders'
import VintageKitchenTools from '../components/ParallaxPatterns/VintageKitchenTools'
import Customers from '../pages/Customers/Customers'
import VintageDresses from '../components/ParallaxPatterns/VintageDresses'
import Mission from '../pages/Mission/Mission'
import Recycle from '../components/ParallaxPatterns/Recycle'
import Contact from '../pages/Contact/Contact'
import Phone from '../components/ParallaxPatterns/Phone'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {

    return (
        <>
            <MainNavigation />
            <VitangeClothes />
            <News />
            <KitchenTools />
            <About />
            <GreatCoats />
            <Founders />
            <VintageKitchenTools />
            <Customers />
            <VintageDresses />
            <Mission />
            <Recycle />
            <Contact />
            <Phone />
            <Footer />
            <Outlet />
        </>

    )
}

export default RootLayout


 */