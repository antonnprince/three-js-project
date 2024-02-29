import {SketchPicker} from 'react-color'
import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const Color = () => {

    const snap= useSnapshot(state)
  
    const colors=['#FF0000','#000000','#FFFFFF']
    
    return (
    <div className='mb-4'>
             {
                colors.map((color)=>(
                    (   
                        <button key={color} className={`px-4 py-2 my-2 mx-auto bg-[${color}] flex 
                        rounded-xl space-y-4 border-2 
                        border-black`} onClick={()=>{
                            state.color=color
                        }}/>
                    )
                ))
             }
    </div>
  )
}

export default Color
