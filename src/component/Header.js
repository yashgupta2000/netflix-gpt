import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const dispatch = useDispatch();

  useEffect(() => {

   const unsubscribe =  onAuthStateChanged(auth, (user) => {
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
   return ()=>{
    unsubscribe();
    }
  }, [])

  const handleClick = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute px-8x w-full  py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />

      {user && (<div className='flex gap-2'>
        <img className='w-12 h-12 my-auto rounded-full' src={user?.photoURL} />
        <button onClick={handleClick} className='text-white font-bold  mr-4 m-auto'>(Sign out)</button>
      </div>)}


    </div>
  )
}

export default Header