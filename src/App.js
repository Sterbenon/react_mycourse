import logo from './logo.svg';
import './App.css';
import {UserComponent} from './component/user_component';

function App() {
  return (
    <div className="App">
        <UserComponent name={'Rick Sanchez'} id={1} status={'Alive'} species={'Human'} gender={'Male'} photo={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
        <UserComponent name={'Summer Smith'} id={3} status={'Alive'} species={'Human'} gender={'Female'} photo={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
        <UserComponent name={'Morty Smith'} id={2} status={'Alive'} species={'Human'} gender={'Male'} photo={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
    </div>
  );
}

export default App;
