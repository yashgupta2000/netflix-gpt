import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptView } from '../utils/gptSlice';
import { SUPPORTED_LANG } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');

      }
    });
    //logic for component unmount (unsubsribe)
    return () => {
      unsubscribe();
    }
  }, [])
  const handleGptSearch = () => {
    dispatch(toggleGptView());
  }
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleClick = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className='absolute px-8  w-full  py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />

      {user && (<div className='flex gap-2'>

        {showGptSearch && <select className='p-2 m-2 h-10 bg-green-900 text-white' onChange={handleLanguageChange}>

          {
            SUPPORTED_LANG.map((item) => <option key={item.identifire} value={item.identifire}>{item.name}</option>)
          }

        </select>}


        {/* <img className='w-12 h-12 my-auto rounded-full' src={user?.photoURL} /> */}
        <button className='py-1 px-3 mx-4 my-2 bg-indigo-500 text-white rounded-lg h-10' onClick={handleGptSearch}> {!showGptSearch ? 'GPT Search': 'Homepage' }</button>
        <button onClick={handleClick} className='text-white font-bold  mr-4 m-auto'>(Sign out)</button>
      </div>)}


    </div>
  )
}

export default Header