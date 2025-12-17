import React from 'react';

export default class From extends React.Component {
    state = {
        title: 'JavaScript',
        text: 'JavaScript is awasome',
        library: 'React',
        isAwesome: true
    };
    handleChange = (event) => {

        // if (event.target.type === 'text') {
        //     this.setState({ title: event.target.value });
        // } else if (event.target.type === 'textarea') {
        //     this.setState({ text: event.target.value });
        // } else if (event.target.type === 'select-one') {
        //     this.setState({ library: event.target.value });
        // } else if (event.target.type === 'checkbox') {
        //     this.setState({ isAwesome: event.target.value });
        // } else {
        //     alert('Something wrong');
        // }
        const { type, value } = event.target;
        this.setState({
            [type]: value
        });

    };
    handleSubmit = (e) => {
        const { title, text, library, isAwesome } = this.state;
        e.preventDefault();
        console.log('Form submitted');
        console.log(title + '\n' + text + '\n' + library + '\n' + isAwesome);
    }
    render() {
        const { title, text, library, isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            placeholder="Enter a task"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br></br>
                    <br></br>
                    <textarea value={text} onChange={this.handleChange}/>

                    <br></br>
                    <br></br>
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Java">Java</option>
                    </select>
                    <br></br>
                    <br></br>
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <br></br>
                    <br></br>

                    <input type="submit" value="submit" />

                </form>
            </div>
        )
    }
}
