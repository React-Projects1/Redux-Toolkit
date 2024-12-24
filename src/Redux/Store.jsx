// import {createStore} from 'redux'
// import Reducer1 from './Reducrs/Reducr1'

// const Store = createStore(Reducer1)

// export default Store

import { configureStore } from "@reduxjs/toolkit";
import { Slice1 } from "./Reducrs/Slice1";

const Store = configureStore({
    reducer:{
        counter: Slice1.reducer
    }
})

export default Store