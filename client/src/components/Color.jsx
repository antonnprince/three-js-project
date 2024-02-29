import {SketchPicker} from 'react-color'
import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const Color = () => {

    const snap= useSnapshot(state)
  
    const colors=['amber','black','white']
    
    return (
    <div className='flex flex-row justify-center space-x-4 mt-8'>
                        <button className="px-4 py-2 my-2 bg-[#FF0000] flex 
                        rounded-full space-y-4" 
                        onClick={()=>{
                            state.color='#FF0000'
                        }}/>
                        
                        <button className="px-4 py-2 my-2 bg-black flex 
                        rounded-full space-y-4" 
                        onClick={()=>{
                            state.color='black'
                        }}/>
                        
                        <button className="px-4 py-2 my-2 bg-white flex 
                        rounded-full space-y-4" 
                        onClick={()=>{
                            state.color='white'
                        }}/>
    </div>
  )
}

export default Color
