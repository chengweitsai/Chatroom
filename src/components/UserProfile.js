import React, { PropTypes } from 'react';
import profiles from '../profiles';

const UserProfile = ({ params }) => {
  //const prof = profiles.filter(p => p.name === +params.username)[0];
  
  let index = 0;
  for (let i=0; i < profiles.length; i++) {
  	if (profiles[i].name == params.username) {
  		index = i; 
  	}
  }
  let prof = profiles[index];
  
  return (
    <div>
      <h1>{prof.name}</h1>
      <img 
      	width="200" height="200"
      	src={prof.picture}/>

      <p>intro: {prof.intro}</p>
    </div>
  );
}

UserProfile.propTypes = {
  params: PropTypes.object.isRequired
};


export default UserProfile