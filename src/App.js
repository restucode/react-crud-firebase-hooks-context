import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import css
import './App.css';

// import siswacontextprovider
import SiswaContextProvider from "./contexts/SiswaContext";
import GuruContextProvider from './contexts/GuruContext';

// import component
import { Header } from './components/layout/Header';
import { Home } from './components/home/Home';
import { ListSiswa } from './components/siswa/ListSiswa';
import { ListGuru } from './components/guru/ListGuru';
import { TambahSiswa } from './components/siswa/TambahSiswa';
import { EditSiswa } from './components/siswa/EditSiswa';
import { DetailSiswa } from './components/siswa/DetailSiswa';
import { TambahGuru } from './components/guru/TambahGuru';
import { DetailGuru } from './components/guru/DetailGuru';
import { EditGuru } from './components/guru/EditGuru';


function App() {

  return (
    <Router>
      <SiswaContextProvider>
        <GuruContextProvider>
          <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/siswa" component={ListSiswa} />
            <Route path="/siswa/tambah" component={TambahSiswa} />
            <Route path="/siswa/edit/:id" component={EditSiswa} />
            <Route path="/siswa/detail/:id" component={DetailSiswa} />
            <Route exact path="/guru" component={ListGuru} />
            <Route path="/guru/tambah" component={TambahGuru} />
            <Route path="/guru/edit/:id" component={EditGuru} />
            <Route path="/guru/detail/:id" component={DetailGuru} />
          </Switch>
          </div>
        </GuruContextProvider>
      </SiswaContextProvider>
    </Router>
   
  );
}

export default App;
