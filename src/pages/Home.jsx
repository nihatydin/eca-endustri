import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
// import ProductFeatures from "../components/ProductFeatures";
import PromoSection from "../components/PromoSection";
// import TrustSection from "../components/TrustSection";
// import Trio from "../components/Trio";
import Support from "../Support";

function Home() {
  return (
    <div>
      <PromoSection />
      {/* <TrustSection /> */}
      <Support />
      <Categories />
      {/* <ProductFeatures /> */}
      <ProductList />
      {/* <Trio /> */}
    </div>
  );
}

export default Home;
