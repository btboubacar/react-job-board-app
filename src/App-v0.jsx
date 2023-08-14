import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Job from "./components/Job";

function App() {
  return (
    <>
      <Header name="The Job Board" className="container header" />
      <div className="job-container">
        <Job
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
          className="job"
          borderColor="red"
        />
        <Job
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
          className="job"
          borderColor="#3EA535"
        />
        <Job
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
          className="job"
          borderColor="#FFEE00"
        />
        <Job
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
          className="job"
          borderColor="#039FE3"
        />
        <Job
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
          className="job"
          borderColor="#F8C5AF"
        />
        <Job
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
          className="job"
          borderColor="#E30413"
        />
        <Job
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
          className="job"
          borderColor="#3EA535"
        />
        <Job
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
          className="job"
          borderColor="#FFEE00"
        />
        <Job
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
          className="job"
          borderColor="#039FE3"
        />
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
