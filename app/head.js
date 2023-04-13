import React from 'react'
import { getData } from './page'

const Head = async () => {
   const data = await getData() 
  return (
   <title>{"Data Fetching - " + data.title}</title>
  )
}

export default Head