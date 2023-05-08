import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../Redux/Actions/todo';

export default function Sidescreen({ userid }) {

   const { user } = useSelector((state) => state.todo);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getUserDetails(userid))
   }, [dispatch, userid])

   return (
      <>
         {
            user && <div className='my-10 border-2 border-black p-3'>
               <div>Todo ID : <span className='font-medium'>{user.id}</span></div>
               <div>Name : <span className='font-medium'>{user.name}</span></div>
               <div>Username : <span className='font-medium'>{user.username}</span></div>
               <div>Email : <span className='font-medium'>{user.email}</span></div>
               <div>Website : <span className='font-medium'>{user.website}</span></div>
               <div>Phone No : <span className='font-medium'>{user.phone}</span></div>
               <div>Company Details : <span className='font-medium'>{user.company.name} , {user.company.catchPhrase}, {user.company.name}</span></div>
               <div>Address : <span className='font-medium'>{user.address.city} {user.address.street} {user.address.suite} {user.address.zipcode}</span></div>
            </div>
         }
      </>
   )
}
