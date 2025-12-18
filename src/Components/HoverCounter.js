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

export default function HoverCounter({ count, incrementCount , theme}) {
    const style = theme === "dark" ? { backgroundColor: "#000000", color: "#ffffff" } : null;
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hovered {count} times
            </h1>
        </div>
    );
};
