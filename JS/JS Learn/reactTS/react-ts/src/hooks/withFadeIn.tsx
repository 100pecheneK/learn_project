import React from 'react'
import FadeIn from 'react-fade-in'

const withFadeIn = (Child: React.ComponentType) => {
  return () => (
    <FadeIn>
      <Child />
    </FadeIn>
  )
}

export default withFadeIn
