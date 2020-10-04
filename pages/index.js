import { useState } from 'react'
import { loadDB } from '../utils/firebase'
import '../styles/style.scss'

const Home = () => {
  const [docName, setDocName] = useState('')

  const handleSetDocName = (event) => {
    setDocName(event.target.value)
  }

  const handleDocName = async () => {
    if(docName) {
      const db = await loadDB()
      try {
        const res = await db.collection('test-knot').doc('18191').set({
          first: docName,
        })
        if(res) {
          console.log("Document written with ID: ", docRef.id);
        }
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  }

  return (
    <div className='bg-gray-400'>
      <p>Hello</p>
      <input type='text' value={docName}  onChange={handleSetDocName} />
      <button onClick={handleDocName}>Submit</button>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const db = await loadDB()
  let data = []
  const querySnapshot = await db.collection("test-knot").get()
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    data.push(doc.data())
  });

  return {
    data
  }
}

export default Home