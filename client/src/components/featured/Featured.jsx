import React from 'react'
import "./featured.css"
import useFetch from "../../hooks/useFetch";


const Featured = () => {

  const  {data, loading, error} = useFetch(
    "/hotels/countByCity?cities=mumbai,jaipur,banglore"
    );
  // console.log(data)
  

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>

    <div className="featuredItem">
      <img
        src="https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVtYmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="featuredImg"
      />
      <div className="featuredTitles">
        <h1>Mumbai</h1>
        <h2>{data[0]} properties</h2>
      </div>
    </div>
    
    <div className="featuredItem">
      <img
        src="https://images.unsplash.com/photo-1578999935853-4ec5fa6c1f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=822&q=80"
        alt=""
        className="featuredImg"
      />
      <div className="featuredTitles">
        <h1>Jaipur</h1>
        <h2>{data[1]} properties</h2>
      </div>
    </div>
    <div className="featuredItem">
      <img
        src="https://images.unsplash.com/photo-1565018054866-968e244671af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80"
        alt=""
        className="featuredImg"
      />
      <div className="featuredTitles">
        <h1>Banglore</h1>
        <h2>{data[2]} properties</h2>
      </div>
    </div>
    </>
      )}
  </div>
  );
};

export default Featured