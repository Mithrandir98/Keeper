import React from "react";
import Header from "../components/Header";
import Note from "../components/Note";
import notes from "../notes";
import Footer from "../components/Footer";


function App() {
    return (
        <div>
        <Header />
        <Note />
        <Footer />
        </div>
    );
}

export default App;