
import './App.css';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Register from './components/pages/Register/Register';
import SignUp from './components/pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <SignUp></SignUp>
      <Register></Register>
      <Dashboard></Dashboard>

    </div>
  );
}

export default App;
