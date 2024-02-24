export default function App() {

  const name = "me"

  const surname = "me2"

  return(
    <div>
      <h1>its me</h1>
      <p>the great: {name + " " + surname} </p>
    </div>
  )

//Another way to add the blank space
//separating the name-surname
//(but this one you have to edit the text so its bad)

const name2 = "me"

  const surname2 = " me2" // ----> added a space before 'me2'. actual braindead lmao

  //return(
   // <div>
    //  <h1>its me</h1>
   //   <p>the great: {name + surname} </p>
  //  </div>
 // )
}