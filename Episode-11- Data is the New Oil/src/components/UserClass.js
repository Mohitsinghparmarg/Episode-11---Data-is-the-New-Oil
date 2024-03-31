
import React from "react";


class UserClass extends React.Component {
            
      constructor(props){
            super(props);
           
            this.state = {
               // count: 0,
                userInfo:{
                    
                    name:"Dummy",
                    location:"Default",
                    avatar_url:"http://dummy-photo.com"  ,

                }
            };
      }

    async componentDidMount(){

              const data = await fetch("https://api.github.com/users/Mohitsinghparmarg");
              const json = await data.json();

              this.setState({
                userInfo : json,
              });

              // console.log(json);

      }

      componentDidUpdate()
        {
       
           // console.log("component did updated");
        }
     
     componentWillUnmount(){
      clearInterval(this.timer);
         //  console.log("component will unmount");
     }



    render() {

         const {name,location,avatar_url} = this.state.userInfo;
           
       

        return (
            <div className='user-card'>
                <img src= {avatar_url} />
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
            </div>
           );
      }


}

export default UserClass;
