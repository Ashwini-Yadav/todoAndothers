import React, { useState } from 'react'

const VoteCount = ({name, symbol}) => {
    let [vote, setVote] = useState(0);

    let handleVoteIncreament = () => {
        setVote(++vote);
    }
  return (
    <div className='card'>
        <span >{name} {symbol}  </span>
        <button onClick={handleVoteIncreament}>{vote}</button>
    </div>
  )
}

export default VoteCount