import { useState, useEffect } from 'react'
import Slider from '@mui/material/Slider'
import Cropper from 'react-easy-crop'
import './App.css'

import yourImage from './dji1769699921303.jpg'



export default function Demo() {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [initialCroppedArea, setInitialCroppedArea] = useState(undefined)
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    const croppedArea = JSON.parse(window.localStorage.getItem('croppedArea'))
    setInitialCroppedArea(croppedArea)
  }, [])

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
    window.localStorage.setItem('croppedArea', JSON.stringify(croppedArea))
  }

  return (
    <div className="App">
      <div className="crop-container">
        <Cropper
          image={yourImage}
          crop={crop}
          zoom={zoom}
          aspect={15 / 10}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          initialCroppedAreaPercentages={initialCroppedArea}
        />
      </div>
      <div className="controls">
        <Slider
          value={zoom}
          size="small"
          min={1}
          max={3}
          step={0.1}
          onChange={(e, zoom) => setZoom(zoom)}
          aria-label="Small"
          classes={{ container: 'slider' }}
        />
      </div>
    </div>
  )
}