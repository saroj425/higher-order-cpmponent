import React, { useEffect, useState } from 'react'

const TodoList = () => {
    const [todos,setTodos] = useState([]);
    const [terms,setTerms] = useState("")


    useEffect(()=>{
        const fetchTodoes = async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/todos")
            const json = await res.json();
            setTodos(json);
            console.log(json)
        };
        fetchTodoes();
    },[])

    // let renderTodoes = todos.map((todo)=>{
    //     return(
    //         <>
    //             <input type='text' value={terms} onChange={(e)=>setTerms(e.target.value)}/>
    //             <div key={todo.id}>
    //                 <p><strong>{todo.name}</strong></p>
    //             </div> 
    //         </>
    //     );
    // });

    let filterTodos = todos.slice(0,10).filter(({title})=>{
        return title.indexOf(terms)>=0;
    }).map((todo)=>{
        return(
            <>                
                <div key={todo.userId}>
                    <p><strong>{todo.title}</strong></p>
                </div> 
            </>
        );
    });

  return (
        <div>
            <h1>Todos</h1>
            <input type='text' value={terms} onChange={(e)=>setTerms(e.target.value)}/>
            <div>{filterTodos}</div>
        </div>
  )
}

export default TodoList