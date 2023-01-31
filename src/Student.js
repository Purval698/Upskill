import React from 'react';

class Student extends React.Component {


    render() {
        console.log(this.props);
        return (
            <div><h1>Student {this.props.name}</h1>
                <h1>Email: {this.props.email}</h1></div>

        )
    }
}

export default Student;



// ######################7) Props with Class Component:-Props are used store data and to pass data.###############
// import React from 'react';
// class Student extends React.Component {


//     render() {
//         console.log(this.props);
//         return (
//             <div><h1>Student {this.props.name}</h1>
//                 <h1>Email: {this.props.email}</h1></div>

//         )
//     }
// }

// export default Student;