// Routes
import { Routes, Route } from "react-router-dom";

// Views Components
  // Home
  import { HomeView } from "./views/HomeView";

  // Products
  import { ProductsView } from "./views/ProductsView";

  // Categories
  import { CategoriesView } from "./views/CategoriesView";

  // Contact Us
  import { ContactUsView } from "./views/ContactUsView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index Component={HomeView} />
        <Route path="/products" Component={ProductsView} />
        <Route path="/categories" Component={CategoriesView} />
        <Route path="/contact-us" Component={ContactUsView} />
      </Routes>
    </>
  );
}

export default App;
