function Student(props){
    console.log(props);
    return(
            <div style={{backgroundColor:"skyblue",margin:10,padding:8}}>
                <h1>Student Name is {props.name}</h1>
                <h1> Email is {props.email}</h1>
            </div>
    )
}

export default Student;