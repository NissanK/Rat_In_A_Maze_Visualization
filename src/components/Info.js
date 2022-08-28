import React from "react";

function Info() {
  return (
    <div className="modal">
      <div className="inherit">
        This is a visualization of the problem Rat in a Maze.
      </div>
      <a
        href="https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1"
        target={"__blank"}
      >
        Question Link
      </a>
      <div className="inherit">
        Click on the <span className="inherit" style={{color : "lime"}}>Green </span> 
        tiles to turn them <span className="inherit" style={{color : "rgb(243, 67, 67)"}}>Red</span> (blocked cell) and vice versa.
      </div>
      <div className="inherit">
        The Code will generate a random solution from all possible solutions.
      </div>
      <div className="inherit creditText flexContainer">
        Made by Nissan Kumar
        <a href="https://github.com/NissanK/Rat_In_A_Maze_Visualization" target={"__blank"}>
          <img src={require('../images/Github-logo.png')} className="icon github" alt="github-logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/nissan-kumar-554a7a224/" target={"__blank"}>
          <img src={require('../images/LinkedIn-logo.png')} className="icon linkedin" alt="linkedin-logo"></img>
        </a>
      </div>
    </div>
  );
}

export default Info;
