import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './componentone/Navigation';
import TodoList from './componentone/TodoList';
import All from './componenttwo/All';
import Shoping from './componentthree/Shoping';
import Contact from './componentone/Contact';



function App() {
  return (
    <BrowserRouter>
        <Navigation basename="/spa-react-Todo-Shopping-app" />
        <Routes>
            <Route path="/" exact element={<TodoList />} />
            <Route path="/shoping" exact element={<Shoping />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/all" exact element={<All />} />
            {/* <Route path="/multipleinput" exact element={<MultipleInput />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
