import GreetingCard from './GreetingCard.jsx';
import Header from './Header.jsx';

function App() {
  return (
    <div>
      <Header />
      <GreetingCard Title={"Happy Birthday!"} Message={"Wishing you a fantastic day filled with joy!"} />
      <GreetingCard Title={"Congratulations!"} Message={"Great job on your achievement!"} />
      <GreetingCard Title={"Thank You!"} Message={"Thanks for your kindness and support!"} />
    </div>
  )
}

export default App;