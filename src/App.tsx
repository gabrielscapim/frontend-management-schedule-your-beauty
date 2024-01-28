import SideBar from './components/SideBar';
import MainRoutes from './routes/MainRoute';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginRoute from './routes/LoginRoute';

function App() {
  const token = localStorage.getItem('token');

  return (
    token ? (
      <div className="App">
        <Header />
        <main>
          <SideBar />
          <MainRoutes />
        </main>
        <Footer />
      </div>
    ) : (
      <LoginRoute />
    )
  );
}

export default App;
