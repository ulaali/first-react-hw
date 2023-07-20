
import "./App.css";



function Counter(){
    let count=0;
    return(
  
      <div className="buttton">
  
      <button onClick={()=>  {count=count+1 ;console.log(count)}}>click here to count</button>
  
      </div>
    );
  }

  export default Counter