//import Form from './Components/Form';
//import Text from './Inheritance/Text';
import Bracket from './Components/Bracket';
import Emoji from './Components/Emoji';
import Text from './Components/Text';

function App() {
  //const cnt = [1,2,3];
  return (
    //<div><ClockList cnt={cnt}/> </div>
    //<div><Form/></div>
    //<div><Calculator/></div>
    <Emoji>
      {({ addEmoji }) => (
        <Bracket>
          {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
        </Bracket >
      )}
    </Emoji>
  );
}

export default App;