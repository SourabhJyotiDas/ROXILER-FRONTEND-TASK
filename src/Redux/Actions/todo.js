import axios from "axios"


export const getallTodos = (search = "", sortingValue) => async (dispatch) => {
   try {
      dispatch({ type: "TodoRequest" })

      const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")

      let tempSortData = [...data]

      const sortingProduct = (a, b) => {
         if (sortingValue === "Ascending") {
            return a.id - b.id
         }
         if (sortingValue === "Descending") {
            return b.id - a.id
         }
      }
      let sortData = tempSortData.sort(sortingProduct);

      const searchData = sortData.filter((element) => {
         return element.title.toLowerCase().includes(search.toLowerCase())
      })

      dispatch({ type: "TodoSuccess", payload: searchData })
   } catch (error) {
      dispatch({ type: "TodoFailure" })
   }
}

export const getUserDetails = (id) => async (dispatch) => {
   try {
      dispatch({ type: "userDetailsRequest" })

      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

      dispatch({ type: "userDetailsSuccess", payload: data })

   } catch (error) {
      dispatch({ type: "userDetailsFailure" })
   }
}