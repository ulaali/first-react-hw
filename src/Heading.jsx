
import "./App.css";
import childimg from "./download.jpg"

//child
function Heading(){
    console.log("hello from the component called ,the child");
    return(
       <div className="child">
        <img src={childimg}  />
        <h3>this is ula ali from component called</h3>
        
       </div>
    );
  }
  
  export default Heading