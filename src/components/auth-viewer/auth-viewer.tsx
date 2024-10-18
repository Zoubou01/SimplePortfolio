'use client'
import { useAppSelector } from '@/store/store'
import React from 'react'

const AuthViewer = () => {
  const authState = useAppSelector(state => state.menu.menuState)
  return (
    <div className='flex gap border border-1 border-black p-20'>
      <h1>hello</h1>
      You are now {authState ? 'Logged  In' : 'Logged Out'}
    </div>
  )
}
export default AuthViewer
