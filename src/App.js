import './App.css';
import FormField from './components/FormField/FormField';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';

const App = () =>  {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="Name" />
      <FormField label="Email" type="email" placeholder="Email" />
      <FormField label="Password" type="password" placeholder="Password" />
      <Button class="button is-rounded my-class is-danger is-small" />
    </div>
  );
}

export default App;
