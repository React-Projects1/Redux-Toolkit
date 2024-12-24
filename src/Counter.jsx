import React from "react";
import { useDispatch,useSelector } from 'react-redux'
import { inc ,dec ,inc2 ,dec2 ,addnum } from "./Redux/Reducrs/Slice1";

const Counter = () => {
  const state = useSelector( state => state.counter.count )
  const dispatch = useDispatch()

  const Add = ()=>{
    dispatch(inc())
  }

  const Del = ()=>{
    dispatch(dec())
  }

  const Add2 = ()=>{
    dispatch(inc2())
  }

  const Del2 = ()=>{
    dispatch(dec2())
  }

  const AddNum = (m)=>{
    dispatch(addnum(m))
  }


  return (
    <div>
      <h1>Counter is:</h1>
      <p>{state}</p>
      <button onClick={Add}>ADD</button>
      <button onClick={Del}>Delete</button>
      <button onClick={Add2}>ADD 2</button>
      <button onClick={Del2}>Delete 2</button>
      <button onClick={()=>AddNum(100)}>ADD Number</button>
    </div>
  );
};

export default Counter;
