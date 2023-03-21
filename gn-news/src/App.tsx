import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './styles/styles.css';
import {setList, setGrid} from './store/layoutSlice'
import { RootState } from './store/store';
import fetchNews from './api/fetchNews';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Popup from './components/Popup';

function App() {

  const layout = useSelector(
    (state: RootState) => state.layout.layoutState
  );
  const dispatch = useDispatch();

    useEffect(() => {
      return () => {
        fetchNews('pl')
      };
    }, [])

  return (
    <>
      {/* <Popup /> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
