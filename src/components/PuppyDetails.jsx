const PuppyDetails = ({ puppyDetails }) => {

  return(
    <>
    <h1>{puppyDetails.name}</h1>
    <ul>
      <li>Breed: {puppyDetails.breed}</li>
      <li>Status: {puppyDetails.status}</li>
      <li>Team Id: {puppyDetails.teamId}</li>
    </ul>
    
    </>
  )

}

export default PuppyDetails