import Brochure from "./components/brochure/Brochure";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brochure />
      </main>
    </>
  );
};
export default App;
