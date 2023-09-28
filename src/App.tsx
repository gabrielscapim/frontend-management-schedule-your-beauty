import SideBar from './components/SideBar';
import AppRoutes from './routes';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SideBar />
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
