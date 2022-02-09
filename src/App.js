import classes from'./App.module.css';
import MainContent from './components/mainContent/MainContent';
import AsideFilter from './components/Aside/AsideFilter';

function App() {
  return (
    <div className={`${classes.App}`}>
      <AsideFilter />
      <MainContent />
    </div>
  );
}

export default App;
