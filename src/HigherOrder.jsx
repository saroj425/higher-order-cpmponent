import React from "react";

const HigherOrder = (WrappedComponent,entity)=>{
    return class extends React.Component{
        state = {
            data:[],
            terms:""
        };
        componentDidMount(){
            const fetchData = async()=>{
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const json = await res.json();
                this.setState({...this.state,data:json});
                console.log(json)
            };
            fetchData();
        }
        render(){
            let {terms,data} = this.state;
            let filteredData = data.splice(0,10).filter((d)=>{
                if(entity === "users"){
                    const {name} = d;
                    return name.indexOf(terms)>=0;
                }
                if(entity ==="todos"){
                    const {title} = d;
                    return title.indexOf(terms)>=0;
                }
            })
            return(
                <div>
                    <h1>{entity}</h1>
                    <input type='text' value={terms} onChange={(e)=>this.setState({...this.state,terms:e.target.value})}/>
                    <WrappedComponent data={filteredData}></WrappedComponent>
                </div>
            )
        }
    }
}

export default HigherOrder;