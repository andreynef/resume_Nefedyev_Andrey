import React from 'react';
import styles from './App.css';
import Header from "../components/Header/Header";
import {DropList} from "../components/DropList/DropList";
import {Footer} from "../components/Footer/Footer";
import Proposition from "../components/Proposition/Proposition";
import Stack from "../components/Stack/Stack";

function App() {

    return (
        <div className={styles.paperContainer}>
          <Header/>
          <Proposition/>
          <Stack/>
          <DropList/>
          <Footer/>
        </div>
    );
}

export default App;
