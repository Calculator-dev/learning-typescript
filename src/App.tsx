import { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState  {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbf%2FLeBron_James_-_51959723161_%2528cropped%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLeBron_James&tbnid=lSggYxaBapjIUM&vet=12ahUKEwjHus-5y-76AhX74bsIHZL9CJcQMygAegUIARDiAQ..i&docid=z-ZwiWHhXouBBM&w=1735&h=2425&itg=1&q=lebron%20james&ved=2ahUKEwjHus-5y-76AhX74bsIHZL9CJcQMygAegUIARDiAQ",
      age: 36,
      note: "Allergic to staying on the same team"
    }
  ])


  return (
    <div className="App">
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
