import React from 'react'
import TopLabel from '../../../component/TopLabel'
import FakeStore from './FetchStore'
import BottLabel from '../../../component/BottLabel'

export default function MainRightSide() {
  return (
    <React.Fragment>
      <TopLabel />
      <FakeStore />
      <BottLabel />
    </React.Fragment>
  )
}
