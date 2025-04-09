import Link from "next/link";

export default async function TestData() {
  const APIKEY = process.env.API_KEY

  try{
    const res = await fetch(`https://api.twelvedata.com/stocks?outputsize=5&apikey=${APIKEY}`);
  
    if (!res.ok) {
      throw new Error('Failed to fetch data because', Error);
    }
    const data = await res.json();
    console.log(data.data)

    return(
      <>
        {data.data.map((object) =>{
          return(
            <div key={object.symbol}>
            <Link href={`./Components/${object.symbol}`}>
              <p>{object.name}</p>
            </Link>
            </div>
          )
  })}
      </>
    )
  }catch(error){
    console.log('Error happened', error)
  }
}