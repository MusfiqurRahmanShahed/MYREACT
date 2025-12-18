import React from "react";
import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";
import Section from "./Components/Section";
import ThemeContext from "./Contexts/themeContext";
class App extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <div>

        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>

        {/* <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />

        )}
      </Counter> */}
        <ThemeContext.Provider value={{ theme: theme }}>
          {/* <Section theme={theme} /> */}
          <Section />
        </ThemeContext.Provider>

      </div>
    );
  }
}

export default App;