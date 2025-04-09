import React from 'react'

export default async function SingleAPI({params}) {

const {id} = await params;

  return (
    <div>SingleAPI: {id}</div>
  )
}

