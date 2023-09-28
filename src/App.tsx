import SideBar from './components/SideBar';
import AppRoutes from './routes';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SideBar />
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
