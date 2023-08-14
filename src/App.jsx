import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Job from "./components/Job";
import data from "./utils/data.js";

function App() {
  return (
    <>
      <Header name="The Job Board" className="container header" />
      <div className="job-container">
        {data.map((item) => {
          return (
            <Job
              title={item.title}
              contractType={item.contractType}
              country={item.country}
              city={item.city}
              className="job"
              borderColor={item.borderColor}
              key={item.title}
            />
          );
        })}
      </div>
      <Footer
        className="container"
        link1="https://www.lereacteur.io"
        link2="https://github.com/btboubacar"
      ></Footer>
    </>
  );
}

export default App;
