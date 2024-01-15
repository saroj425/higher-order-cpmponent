import React, { useEffect, useState } from 'react'
import HigherOrder from './HigherOrder';

const TodoList = ({data}) => {
    // const [todos,setTodos] = useState([]);
    // const [terms,setTerms] = useState("")


    // useEffect(()=>{
    //     const fetchTodoes = async()=>{
    //         const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    //         const json = await res.json();
    //         setTodos(json);
    //         console.log(json)
    //     };
    //     fetchTodoes();
    // },[])

    let renderTodoes = data.map((todo)=>{
        return(
            <>
                <div key={todo.id}>
                    <p><strong>{todo.title}</strong></p>
                </div> 
            </>
        );
    });

    // let filterTodos = data.slice(0,10).filter(({title})=>{
    //     return title.indexOf(terms)>=0;
    // }).map((todo)=>{
    //     return(
    //         <>                
    //             <div key={todo.userId}>
    //                 <p><strong>{todo.title}</strong></p>
    //             </div> 
    //         </>
    //     );
    // });

  return (
        <div>
            <div>{renderTodoes}</div>
        </div>
  )
}

const Searchtodo = HigherOrder(TodoList,"todos")

export default Searchtodo;

// export default TodoList