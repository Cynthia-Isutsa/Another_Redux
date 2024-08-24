import { createSlice} from '@reduxjs/toolkit'
import { storeData } from '../../assets/data/DummyData'

const initialState = {
  // filteredProducts: JSON.parse(sessionStorage.getItem("filteredData") as string) || storeData,
  filteredProducts: (() => {
    try {
      const storedData = sessionStorage.getItem("filteredData");
      return storedData ? JSON.parse(storedData) : storeData;
    } catch (error) {
      console.error("SessionStorage access denied:", error);
      return storeData;
    }
  })(),
};


export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts(state, action)  {
        //console.log({action})
        try {
            const filter = storeData.filter((item: any) => {
              //console.log({item})
              return (
                item.type === action.payload)
            })
            
              
            console.log({filter})
            state.filteredProducts = filter;
            const savedState = JSON.stringify(filter);
            sessionStorage.setItem("filteredData", savedState);
        } catch (error) {
            console.log("Products not Found!")
        }
        
    }
  }
})



export const {filterProducts} = ProductsSlice.actions
export default ProductsSlice.reducer