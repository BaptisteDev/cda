import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <div>
        <h1 className="pinkColor">Vite</h1>
      </div>
      <p>Apprendre React</p>
      <Card
        title="React"
        text="Apprendre le framework JS le plus utilisé"
        btnText="Modifier"
      ></Card>
      <Card
        title="Tailwind"
        text="Apprendre le framework CSS le plus tendance"
        btnText="Ajouter"
      ></Card>
      <Card
        title="Git"
        text="Besoin de sauvegarder votre code ?"
        btnText="Supprimer"
      ></Card>
    </>
  );
}

export default App;
