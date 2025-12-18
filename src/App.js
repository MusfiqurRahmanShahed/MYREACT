import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";
import HoverCounter from "./Components/HoverCounter";

function App() {
  return (
    <div>

      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>


      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />

        )}
      </Counter>

    </div>
  );
}

export default App;