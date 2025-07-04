import { createContext } from "react"
import all_products from "../Components/Assets/all_product"

export const ShopContext = createContext(null)

const ShopContextProvider = ({children}) => {
    const shopValue = {all_products};

    return(
        <ShopContext.Provider value={shopValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider