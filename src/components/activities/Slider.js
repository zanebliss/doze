import React, { useState } from 'react'
import RangeSlider from 'react-bootstrap-range-slider'

const Slider = () => {
    const [value, setValue] = useState(50)
    return (
        <RangeSlider
            value={value}
            onChange={e => setValue(Number(e.target.value))}
            tooltip='auto'
        />
    )
}

export default Slider