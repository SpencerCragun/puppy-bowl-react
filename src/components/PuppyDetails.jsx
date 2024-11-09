const PuppyDetails = ({ puppyDetails }) => {
  const {name, breed, status, teamId } = puppyDetails

  return(
    <>
    <h1>{name}</h1>
    <ul>
      <li>Breed: {breed}</li>
      <li>Status: {status}</li>
      <li>Team Id: {teamId}</li>
    </ul>
    
    </>
  )

}

export default PuppyDetails