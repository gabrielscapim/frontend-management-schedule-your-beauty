import SideBar from './components/SideBar';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <SideBar />
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
