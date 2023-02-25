import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Home_01 from "./components/Home_01";
import ColorChange from "./components/ColorChange";
import Hooked from "./components/Hooked";
import Table from "./components/Table";

function App() {

  const movies = [
    {
      title: "Bahubali",
      imag: "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
      year: "(2019)"
    },
    {
      title: "RRR",
      imag: "https://w0.peakpx.com/wallpaper/577/439/HD-wallpaper-jr-ntr-ramcharan-rrr-thumbnail.jpg",
      year: "(2022)"
    },
    {
      title: "KGF",
      imag: "https://naasongs.co/wp-content/uploads/2022/04/KGF-Chapter-2-2022-Telugu.jpg",
      year: "(2022)"
    },
    {
      title: "Karthikeya 2",
      imag: "https://upload.wikimedia.org/wikipedia/en/7/7e/Karthikeya_2_Poster.jpeg",
      year: "(2022)"
    },
    {
      title: "KGF",
      imag: "https://naasongs.co/wp-content/uploads/2022/04/KGF-Chapter-2-2022-Telugu.jpg",
      year: "(2022)"
    },
    {
      title: "Karthikeya 2",
      imag: "https://upload.wikimedia.org/wikipedia/en/7/7e/Karthikeya_2_Poster.jpeg",
      year: "(2022)"
    },
    {
      title: "KGF",
      imag: "https://naasongs.co/wp-content/uploads/2022/04/KGF-Chapter-2-2022-Telugu.jpg",
      year: "(2022)"
    },
    {
      title: "Karthikeya 2",
      imag: "https://upload.wikimedia.org/wikipedia/en/7/7e/Karthikeya_2_Poster.jpeg",
      year: "(2022)"
    },
    {
      title: "KGF",
      imag: "https://naasongs.co/wp-content/uploads/2022/04/KGF-Chapter-2-2022-Telugu.jpg",
      year: "(2022)"
    },
    {
      title: "Karthikeya 2",
      imag: "https://upload.wikimedia.org/wikipedia/en/7/7e/Karthikeya_2_Poster.jpeg",
      year: "(2022)"
    },
    {
      title: "KGF",
      imag: "https://naasongs.co/wp-content/uploads/2022/04/KGF-Chapter-2-2022-Telugu.jpg",
      year: "(2022)"
    },
    {
      title: "Karthikeya 2",
      imag: "https://upload.wikimedia.org/wikipedia/en/7/7e/Karthikeya_2_Poster.jpeg",
      year: "(2022)"
    },
    {
      title: "KGF",
      imag: "https://naasongs.co/wp-content/uploads/2022/04/KGF-Chapter-2-2022-Telugu.jpg",
      year: "(2022)"
    },
    {
      title: "Karthikeya 2",
      imag: "https://upload.wikimedia.org/wikipedia/en/7/7e/Karthikeya_2_Poster.jpeg",
      year: "(2022)"
    }
  ]
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<Table />} />
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/home" element={<Home_01 />} />
          <Route path="/colorChange" element={<ColorChange />} />
          <Route path="/hooked" element={<Hooked hookedMovies={movies} moviename='RRR' />} />
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}

export default App;
