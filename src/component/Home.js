import React, { useEffect, useState} from 'react'



function Home() {
  const [data,setData]=useState();
  
  const[searchTerm,setSearchTerm]=useState("");



  const url="https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"

  const getData=()=>{
     fetch(url,{
      METHOD:"GET"
     }).then((res)=>res.json())
     .then((res)=>setData(res))
  }
  useEffect(()=>{
    getData()
  },[])
 
  
  return (

    <div>
      <div><input
        
        clearable
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /></div>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">YEAR</th>
      <th scope="col">TITLE</th>
      <th scope="col">DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
     {data?.filter((val)=>{
  if(searchTerm ===""){
    return val
  }
  else if(val.year.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
    return val;
  }
  else if(val.title.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
    return val;
  }
  else if(val.description.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
    return val;
  }
}).map((e,i)=>(
        <tr key={i}>
        <td >{e.title}</td>
        <td>{e.year}</td>
        <td>{e.description}</td>
        
      </tr>
    ))}
    
    
  </tbody>
</table>
        
    </div>
  )
}

export default Home