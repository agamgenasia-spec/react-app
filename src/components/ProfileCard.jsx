function ProfileCard()
{
   
    let useusern= "Agamgenasia@gmail.com";
    let currentYear=2026;
   let followers = 23899;
  let following=3456;
    let birthYear=2009;
    return(
        <div>
     <h1>welcom back {useusern}</h1>
        <h1>{currentYear}</h1>
        <h1>{ followers}</h1>
        <h1>{following}</h1>
        <h1>{birthYear}</h1>
   </div>
    )
}
export default ProfileCard;