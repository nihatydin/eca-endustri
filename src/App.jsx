import "./App.css";
import RouterConfig from "./config/RouterConfig";
// import PageContainer from "./container/PageContainer";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Section from "./components/section/Section";

function App() {
  return (
    <div>
      {/* <PageContainer> */}
      <Navbar />
      <RouterConfig />
      <Section />
      <Footer />
      {/* </PageContainer> */}
    </div>
  );
}

export default App;
