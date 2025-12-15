import React from 'react';

export default class From extends React.Component {
    state = {
        title: 'JavaScript',
    };
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ title: event.target.value });
    };
    render(){
        const { title } = this.state;
        return(
            <div>
                <form>
                    <input type="text" placeholder="Enter a task" value={title} onChange={this.handleChange}/>
                    <button type="submit">Add Task</button>
                </form>
            </div>
        )
    }
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ value: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.value);
//     this.setState({ value: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.handleChange}
//           placeholder="Enter a task"
//         />
//         <button type="submit">Add Task</button>
//       </form>
//     );
//   }
}
