import React from 'react'
import Informations from '../../component/Informations'
import Social from '../../component/Social'
import CopyRight from '../../component/copyright'
export default function Footer() {
  return (
    <React.Fragment>
      <Social />
      <Informations />
      <CopyRight />
    </React.Fragment>
  )
}
