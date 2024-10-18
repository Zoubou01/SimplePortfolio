'use client'
import Portfolio from '@/@menu/components/portfolio/Portfolio'
import UserDetails from '@/@menu/components/user-details/UserDetails'
import { useState } from 'react'

export default function Page() {
  const [isOpeningScreenVisible, setOpeningScreenVisible] = useState(false)
  setTimeout(() => {
    setOpeningScreenVisible(true)
  }, 500)

  return <>{isOpeningScreenVisible && <Portfolio />}</>
}
