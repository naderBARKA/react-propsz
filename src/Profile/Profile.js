import React from 'react'
import PropTypes from 'prop-types';
 
function Profile(props) {
    
   console.log(props)


    return (
       <div>
       <ul className="list-group">
         <li className="list-group-item" > {props.Name}</li>
         <li className="list-group-item" >{props.Bio}</li>
         <li className="list-group-item" >{props.Tech}</li>
         <li className="list-group-item" >{props.children}</li>
        </ul>
      
   
    <div>
        <button
          onClick={() => props. HundleName(props.fullName)}
          className="btn btn-profile"
        >
          Say Hello{" "}
        </button>
    </div>
     </div>
    )
}
Profile.defaultProps = {
    fullName: "Nader Barka",
    profession: "profession",
    bio: "bio",
    children: "profile photo",
    handleName: function () {
      return ("hello"  );
    }}
    Profile.propTypes = {
        fullName: PropTypes.string,
        profession: PropTypes.string,
        bio: PropTypes.string,
        children: PropTypes.any,
        handleName: PropTypes.func,
      }
    








export default Profile
