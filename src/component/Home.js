// import React, { useEffect, useState} from 'react'



// function Home() {
//   const [data,setData]=useState();
  
//   const[searchTerm,setSearchTerm]=useState("");



//   const url="https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"

//   const getData=()=>{
//      fetch(url,{
//       METHOD:"GET"
//      }).then((res)=>res.json())
//      .then((res)=>setData(res))
//   }
//   useEffect(()=>{
//     getData()
//   },[])
 
  
//   return (

//     <div>
//       <div><input
        
//         clearable
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       /></div>

//         <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">YEAR</th>
//       <th scope="col">TITLE</th>
//       <th scope="col">DESCRIPTION</th>
//     </tr>
//   </thead>
//   <tbody>
//      {data?.filter((val)=>{
//   if(searchTerm ===""){
//     return val
//   }
//   else if(val.year.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
//     return val;
//   }
//   else if(val.title.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
//     return val;
//   }
//   else if(val.description.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
//     return val;
//   }
// }).map((e,i)=>(
//         <tr key={i}>
//         <td >{e.title}</td>
//         <td>{e.year}</td>
//         <td>{e.description}</td>
        
//       </tr>
//     ))}
    
    
//   </tbody>
// </table>
        
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'

function Home() {

  const[searchTerm,setSearchTerm]=useState("");

    const [data,Setdata]=useState([]);
    console.log(data)


    
    const data1=Object.keys(data).reduce((acc,val)=>{
          acc[val.toUpperCase()]=data[val]
      return acc
    },{})

    console.log("upper",data1)

  //   const capital = obj =>
  // Object.keys(obj).reduce((acc, index) => {
  //   acc[index.toUpperCase()]=obj[index];
  //   return acc;
  // }, {});
  const url="https://dog.ceo/api/breeds/list/all"
  const getData=()=>{
    fetch(url)
    .then(res=>res.json())
    .then(res=>Setdata(res.message))
  }
  useEffect(()=>{
  getData()  
  },[])

  return (
    <div>
<div>    <input
        
                clearable
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              /></div>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">breed</th>
      
      
    </tr>
  </thead>
  <tbody>
     {data1?Object.entries(data1).filter((val)=>{
  if(searchTerm ===""){
    return val
  }
  else if(val[0].toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
    return val;
  }
  else if(val[1].toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
    return val;
  }
  
  
}).map((key,value)=>(
      <tr>
      <td >{key[0]}</td>
      <td >{key[1].map((e)=>(<div>{e}</div>))}</td>
    </tr>

     )):data1}

    
    
  </tbody>
</table>

    </div>
  )
}

export default Home