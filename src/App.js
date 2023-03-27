import Header from './components/Header';
import LinksContainer from "./components/LinksContainer";
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8 -mt-8 space-y-6 App">
      <Header />
      <LinksContainer />
      <SocialLinks />
    </div>
  );
}

export default App;
