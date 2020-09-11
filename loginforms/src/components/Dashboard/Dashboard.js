import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
export default function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .post("https://hoblist.com/movieList", {
                category: "movies",
                language: "kannada", 
                genre: "all",
                sort: "voting"
            })
            //.get("https://jsonplaceholder.typicode.com/posts")
            .then(result => {
                console.log(result, "{+++++}");
                //setData(result.data)
                setData(result.data.result)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, []);


    //  const userLists=()=>{
    //         return data.map(function(object,i){
    //             return<RecordsList payload={object} key={i}/>
    //         })
    //     }

    return (
        <div>
            {data.map((item, i) => (   
                <div key={i}>            
                <div className="container-fluid pr-md-5 pl-md-5 pt-3 " style={{ marginTop: '80px' }}>
            <div className="row">
                <div className="col-lg-9 col-md-12 col-sm-12">
                    <div className="row mt-lg-1">
                        <div className="card ">
                            <div id="this-week" className="collapse show">
                                <div className="card-body">
                                    <div className="row border-bottom mt-lg-1">
                                        <div className="col-md-1 col-2 col-lg-1 text-center" style={{ paddingRight: '0px', paddingLeft: '0px' }}>
                                            <div className="row">
                                                <div className="col-md-12 col-12"><span style={{ cursor: 'pointer' }} className="listVoting upvote" ><FontAwesomeIcon icon={faSortUp} size="5x" /></span></div>
                                            </div>
                                            <span className="likes-count" style={{ fontSize: '1.32538462rem' }}>1</span>
                                            <div className="row">
                                                <div className="col-md-12 col-12"> <span style={{ cursor: 'pointer' }} className="listVoting downvote"><FontAwesomeIcon icon={faSortDown} size="5x" /></span> </div>
                                            </div>
                                            <p> Votes</p>
                                        </div>
                                        <div className="col-lg-3 col-md-2  col-sm-2 col-3 " style={{ textAlign: 'center' }}><img alt="Pallichattambi" className="lazy img img-poster imageClass" src={item.poster} style={{ width: 'inherit' }} /></div>
                                        <div className="col-lg-7  col-md-6  col-sm-8 col-7  ml-lg-1  mb-lg-1 cardDiv">

                                            <h3 className="card-title text-limit mb-0  text-left">
                                            {item.title} </h3>
                                            <p className="text-limit capitalize text-left" title="action,thriller"><strong>Genre: </strong>{item.genre}</p>
                                            <p className="text-limit text-left" title="Dijo Jose Antony"><strong>Director: </strong>{item.director}</p>
                                            <p className="text-limit text-left" title="Tovino Thomas"><strong>Starring: </strong>{item.starring}</p>
                                            <p className="text-limit text-left" title="Malayalam" >
                                                Mins |
                                                Malayalam |
                                                    19 Jul</p>
                                            <p className="text-limit text-left getVotedUser" style={{ cursor: 'pointer', color: '#2196f3' }}>
                                                41 views | Voted by
                                                1 People
                                         </p>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-12 watch-trailer-btn mb-1 mt-sm-2 " style={{ alignSelf: 'center', textAlign: 'center' }}>
                                            <button style={{ minWidth: '100%' }} className="btn btn-primary">Watch Trailer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> 
            ))}
        </div>
    )
}
