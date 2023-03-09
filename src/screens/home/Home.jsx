import { ProductsList } from "../productsList/ProductsList"

import { Animated } from "../../components"


export const Home = () => {
    return (
        <Animated>
            <div className="header ">
                <img src='https://frangonzalez-dev.github.io/repo-imagenes/header.webp' alt="banner" className="header__img" />
                <div className="header__title" to='/'>
                    <img src="https://img.icons8.com/ios-filled/30/343434/guitar-strings.png" alt="music.store logo"/>
                    <span>music.store</span>
                </div>
            </div>
            <ProductsList />
        </Animated>
    )
}
