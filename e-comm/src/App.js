import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <Provider store={store}>
      <h1 className="text-center">Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />

      {/* Steps for RTK implementation as follows :

      1. Create Store and there is only one Store for the whole Application.
      2. Create Slice and to create Slice we need three things name, initial state and list of all reducers. 
      Reducers accepts object of key and functions, In functions we get access of 'State' and 'Action'. (see: todoSlice.js) 
      In State we get updated state value in the Store whereas in action we get action.payload
      3. Now we have to export these function and for that we have to make 2 statement first to export statement of reducer individually and 
      second statement main source of all the reducers.  (see: store.js) 
      4. To send the value we have useDispatch method. (see: addTodo.js) 
      5. To get the value we have useSelector method. (see: todos.js)                                
      */}
    </Provider>
  );
}

export default App;
