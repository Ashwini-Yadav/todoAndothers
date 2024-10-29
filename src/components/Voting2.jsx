import React, { Fragment, useState } from 'react'

const Voting2 = () => {
    let [vote,setVote] = useState([0,0,0]);
    // console.log(isArray(vote))

    let handleClickTeam1 = (i) =>{
        let copiedArr = [...vote];
        copiedArr[i] = copiedArr[i] +1;
        setVote(copiedArr);
    }
  return (
    <>
    <h1>Voting System</h1>
    <div className='cardBody'>
        
        {vote.map((ele,i) => {
            return (
                <div key={i} className='card'>
                <p>team {i+1} 
                    {
                        i==0 ? "😍" : i==1 ? "🏝️" : i==2 ? "🧳" : ""
                    }
                </p>
                <button onClick={() => handleClickTeam1(i)}>{ele}</button>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Voting2