import React from "react";
import ThemeContext from "../Contexts/themeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

// export default function Content() {
//     return (
//         <div>
//             <h1>This is a Content</h1>
//             <Counter>
//                 {(count, incrementCount) => (
//                     <ThemeContext.Consumer>{({ theme , switchTheme}) => (
//                         <HoverCounter
//                             count={count}
//                             incrementCount={incrementCount}
//                             theme={theme}
//                             switchTheme={switchTheme}
//                         />
//                     )}
//                     </ThemeContext.Consumer>
//                 )}
//             </Counter>
//         </div>
//     );
// }

export default class Content extends React.Component {
    render(){
        return (
            <div>
                <h1>This is a Content</h1>
                <Counter>
                    {(count, incrementCount) => (
                        <ThemeContext.Consumer>{({ theme, switchTheme }) => (
                            <HoverCounter
                                count={count}
                                incrementCount={incrementCount}
                                theme={theme}
                                switchTheme={switchTheme}
                            />
                        )}
                        </ThemeContext.Consumer>
                    )}
                </Counter>
            </div>
        );
    }
}