import React from 'react'

const Home = ({data}) => {
    const a = data.data
    console.log(data)
    console.log(typeof(data))

  return (
    <div>
        {data.map(i=>{
          return(
            <>
              <p>{i.name}</p>
              <p>{i.password}</p>
              <p>{i.mobileNumber}</p>
              <br></br>
              <br></br>
              <br></br>
            </>
          )
        })}
    </div>
  )
}

export default Home