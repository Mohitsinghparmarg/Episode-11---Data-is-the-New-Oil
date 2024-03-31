import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utills/UserContext";

 class About extends Component{

      constructor(props){
           super(props);
      }

      componentDidMount(){
   
  }

    render(){
           

        return (
            <div>
                <h1>About Class Component</h1>

                <div>
                     LoggedIn User
                     < UserContext.Consumer >
                       { ({loggedInUser}) =>(
                             <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                     </UserContext.Consumer>
                    
                </div>
                <h2>this is Namaste React </h2>
                <UserClass name={"1st (class)"} location={"1 (class)"} contact = {"@mohitsinghparmar01 (class)"}/>
            </div>
       );
    }
}


export default About;