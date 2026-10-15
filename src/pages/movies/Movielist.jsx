import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Moviecard from '../../components/Moviecard'
import mockMovies from '../../data/data'
import "./Moive.css"
import Menu from '../Menu'

let moviesintial = 15;
let afterload = 10;
const Movielist = () => {
    let [moviedata, setmoviedata] = useState(mockMovies)
    let [visiblecount, setvisible] = useState(moviesintial)
    let [searchTerm, setSearchTerm] = useState("")
    let [sortyear, setSortyear] = useState()
    const [Darkmode, setDarkmode] = useState(false);
    console.log(Darkmode);



    let handlemovie = () => {
        setvisible((prev) => prev + afterload)
    }

    let filteredMovies = moviedata.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    let displaymovies = filteredMovies.slice(0, visiblecount)
    if (sortyear == "asec") {
        filteredMovies.sort((a, b) => a.year - b.year)
    }
    else if (sortyear === "desc") {
        filteredMovies.sort((a, b) => b.year - a.year)
    }
    return (
        <div className={Darkmode ? "Dark" : "light"}>
            <div className='navbar'> 
                    <Menu searchTerm={searchTerm} setSearchTerm={setSearchTerm} sortyear={sortyear} setSortyear={setSortyear} Darkmode={Darkmode} setDarkmode={setDarkmode} />
            </div>
               
            <div className='allmovies'>
               
                {
                    displaymovies?.map((x) => {
                        return (
                        <div>
                           
                            <Moviecard x={x} key={x.id} />
                           
                            </div>
                           
                           
                            
                        )
                    })
                }
                <>
                    {
                        visiblecount < moviedata.length && (
                            <> <button onClick={handlemovie} className='show-more-btn show-more-btn:hover'>showmore</button></>

                        )
                    }
                </>
            </div>
        </div>
    )
}

export default Movielist
