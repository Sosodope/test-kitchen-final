
import { useEffect, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
// import { getRecipes } from '../store/actions/recipesActions'
import { loadDB } from '../utils/firebase'
import '../styles/style.scss'

const Home = () => {
  const [docName, setDocName] = useState('')
  const dispatch = useDispatch()

  const handleSetDocName = (event) => {
    setDocName(event.target.value)
  }

  // useEffect(() => {
  //   const loadRecipes = async () => {
  //     await dispatch(getRecipes())
  //     console.log('res: ', res);
  //   }
  //   loadRecipes()
  //   return () => {
  //     console.log("This will be logged on unmount");
  //   }
  // }, [dispatch])

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