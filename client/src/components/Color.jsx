import {SketchPicker} from 'react-color'
import React from 'react'

const Color = () => {
  return (
    <div>
          <SketchPicker 
            color={red}
            disableAlpha
            presetColors={[
                '#00000','#ffffff','#ff0000','#00ff00'
            ]}
          />     
    </div>
  )
}

export default Color
