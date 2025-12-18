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

export default function ClickCounter({ count, incrementCount }) {
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
};

