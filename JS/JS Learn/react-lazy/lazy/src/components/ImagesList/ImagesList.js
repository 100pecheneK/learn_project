import React, { useState } from 'react'
import LazyLoad from 'react-lazy-load'
import ImageLoader from '../../ImageLoader/ImageLoader'
import images from '../images'
images './ImagesList.css'
const ImagesList = () => {
  return (
    <div>
      {images.map((img, i) => (
        <LazyLoad key={i} debounce={false} throttle={250}>
          <ImageLoader src={img.src} alt={'imageLoader'} classNama={"image"}/>
        </LazyLoad>
      ))}
    </div>
  )
}

export default ImagesList
