// import { useState, useEffect } from "react"
// import { ProductList } from "../../components"

// import { getItems } from "../../firebase/config"


export const Home = () => {
    
    // const [ products, setProducts ] = useState([])
    // const [ isLoading, setIsLoading ] = useState(true)

    // useEffect( async ()=>{
    //     const response = await getItems();
    //     setIsLoading(false)
    //     setProducts( response )
    // }, [])

    // console.log(products)
    
    return (
        <>  
            <div className="animate__animated animate__fadeIn">

            <h1 className="title">Todos los productos</h1>
                <div className="grid">
                    
                </div>
            </div>
        </>
    )
}
