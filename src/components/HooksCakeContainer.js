import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { buyCake } from '../Redux'


const HooksCakeContainer = () => {
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
   const dispatch= useDispatch()
    return (  
        <div>
             <h2>Number of cakes ={numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy cakes</button>
        </div>
    );
}
 
export default HooksCakeContainer;