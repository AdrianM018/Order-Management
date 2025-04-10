import React from 'react'

export default async function SingleAPI({params}) {
  const APIKEY = process.env.API_KEY

const {id} = await params;

try{

  const getData = await fetch(`https://api.twelvedata.com/stocks?symbol=${id}&apikey=${APIKEY}`)

  if(!getData.ok){
    throw new Error(Error)
  }

  const data = await getData.json()
  const extractData = data.data[0]
  console.log(extractData.name)
  
  return(
    <section>
      <p>{extractData.name}</p>
    </section>
  )

}catch(error){
  return(
    <p>{error}</p>
  )
}

}