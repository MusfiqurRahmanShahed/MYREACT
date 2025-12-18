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

export default function HoverCounter({ count, incrementCount }) {
    return (
        <div>
            <h1 onMouseOver={incrementCount}>
                Clicked {count} times
            </h1>
        </div>
    );
};
