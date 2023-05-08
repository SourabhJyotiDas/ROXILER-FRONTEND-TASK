import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallTodos } from '../Redux/Actions/todo';
import Sidescreen from "./Sidescreen.js"

export default function Homepage() {

   const dispatch = useDispatch();

   const { todos } = useSelector((state) => state.todo);

   const [userid, setUserId] = useState("")

   const [searchInput, setSearchInput] = useState("");

   const [sortingValue, setSortingValue] = useState("Ascending");


   useEffect(() => {
      dispatch(getallTodos(searchInput, sortingValue))
   }, [dispatch, searchInput, sortingValue])

   return (
      <>
         <div className='flex items-start justify-between w-[100%]'>
            <div className='w-[60%]'>
               <div className='flex items-center justify-between p-3 '>
                  <h1 className='font-medium text-xl'>Todos</h1>
                  <input onChange={(e) => { setSearchInput(e.target.value) }} value={searchInput} type="search" className='rounded-lg w-[30%] border-2 border-black p-1 outline-none' placeholder='Search...' />
               </div>
               <div>
                  <table className='w-[100%] text-center '>
                     <thead >
                        <tr className='bg-green-300 '>
                           <th className='border-2 border-black'>Todo ID
                              <select className='p-1 cursor-pointer ' name="sort" id="sort" onClick={(e) => { setSortingValue(e.target.value) }}>
                                 <option value="Ascending">Ascending</option>
                                 <option value="Descending">Descending</option>
                              </select>
                           </th>
                           <th className='border-2 border-black'>Title</th>
                           <th className='border-2 border-black'>Status</th>
                           <th className='border-2 border-black'>Action</th>
                        </tr>
                     </thead>

                     <tbody >
                        {
                           todos && todos.map((element, index) => {
                              return <tr key={index} className='border-2 border-black '>
                                 <td>{element.id}</td>
                                 <td>{element.title}</td>
                                 <td>{element.completed ? "Complete" : "Incomplete"}</td>
                                 <td>
                                    <button onClick={() => setUserId(element.id)} className='px-5 py-2 border-2 border-black'>View User</button>
                                 </td>
                              </tr>
                           })
                        }
                     </tbody>
                  </table>
               </div>
            </div>
            <div className='w-[30%] h-auto sticky top-0'>
               {
                  userid ? <Sidescreen userid={userid} /> :
                     <div className='my-20 text-2xl p-2 text-center'>Click view User to see User Details</div>
               }
            </div>
         </div>
      </>
   )
}
