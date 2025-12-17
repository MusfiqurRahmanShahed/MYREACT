import withCounter from './HOC/withCounter';
// class ClickCounter extends React.Component {

//     render() {
//         const { count } = this.state;
//         return (
//             <button type="button" onClick={this.incrementCount}>
//                 Clicked {count} times
//             </button>
//         );
//     }
// }

const ClickCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
};

export default withCounter(ClickCounter);