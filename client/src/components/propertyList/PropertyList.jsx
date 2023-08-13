import React from 'react'
import "./propertyList.css"
import useFetch from '../../hooks/useFetch';

const PropertyList = () => {

    const { data, loading, error } = useFetch(
        "/hotels/countByType"
    );

    const images = [
        "https://images.unsplash.com/photo-1574060603747-421196bce3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1493606371202-6275828f90f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1623718649591-311775a30c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    ];


    return (
        <div className="pList">
            {loading ? (
                "loading"
            ) : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img
                                    src={img}
                                    alt=""
                                    className="pListImg"
                                />
                                <div className="pListTitles">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};

export default PropertyList;