import React from "react";
import VoteCount from "./VoteCount";

const VoteSystemBody = () => {
  return (
    <>
       <h1>Voting System</h1>
        <div className="cardBody">
        
        <VoteCount name="Team1" symbol="😍" />
        <VoteCount name="Team2" symbol="🏝️" />
        <VoteCount name="Team3" symbol="🧳" />
      </div>
    </>
  );
};

export default VoteSystemBody;
