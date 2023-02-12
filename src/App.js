import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [typeOfExcuse, setTypeOfExcuse] = useState("party");
  const [excuse, setExcuse] = useState("");

  const getExcuse = () => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${typeOfExcuse}`)
      .then((res) => {
        console.log(res.data);
        setExcuse(res.data[0].excuse);
      });
  };

  // useEffect(() => {
  //   axios
  //     .get(`https://excuser-three.vercel.app/v1/excuse/${typeOfExcuse}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setExcuse(res.data[0].excuse);
  //     });
  //   console.log(typeOfExcuse);
  // }, [typeOfExcuse]);

  return (
    <div>
      <h1>Generate an excuse</h1>
      <button
        onClick={
          ((e) => {
            setTypeOfExcuse(e.target.innerText);
          },
          getExcuse)
        }
      >
        party
      </button>
      <button
        onClick={
          ((e) => {
            setTypeOfExcuse(e.target.innerText);
          },
          getExcuse)
        }
      >
        family
      </button>
      <button
        onClick={
          ((e) => {
            setTypeOfExcuse(e.target.innerText);
          },
          getExcuse)
        }
      >
        office
      </button>
      <div>{excuse}</div>
    </div>
  );
  // const [name, setName] = useState("");
  // const [person, setPerson] = useState({});

  // const getPredictedAge = () => {
  //   axios.get(`https://api.agify.io?name=${name}`).then((res) => {
  //     setPerson(res.data);
  //   });
  // };

  // useEffect(() => {
  //   axios.get(`https://api.agify.io?name=${name}`);
  // }, []);

  // return (
  //   <div className="App">
  //     <input
  //       onChange={(e) => setName(e.target.value)}
  //       placeholder="Name"
  //     ></input>
  //     <button onClick={getPredictedAge}>Predict Age</button>
  //     <div>Name = {person?.name}</div>
  //     <div>Age = {person?.age}</div>
  //     <div>Count = {person?.count}</div>
  //   </div>
  // );
}

export default App;
