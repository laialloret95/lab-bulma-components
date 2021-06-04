import './App.css';
import FormField from './components/FormField/FormField';
import Navbar from './components/Navbar/Navbar';

const App = () =>  {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="Name" />
      <FormField label="Email" type="email" placeholder="Email" />
      <FormField label="Password" type="password" placeholder="Password" />
    </div>

  );
}

export default App;
