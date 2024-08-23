import { CardsList } from "./components/CardsList";

export const App = () => {
  return (
    <div className="container">
      <h2>New bank program</h2>
      <h1>Issuing New Cards</h1>
      <p className="page-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <CardsList />
    </div>
  );
};
