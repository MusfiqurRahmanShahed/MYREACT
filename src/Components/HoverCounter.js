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

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <h1 type="button" onMouseOver={incrementCount}>
                Hovered {count} times
            </h1>
        </div>
    );
};

export default withCounter(HoverCounter);