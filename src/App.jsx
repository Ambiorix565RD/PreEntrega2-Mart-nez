import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ProductsComponents/ItemListContainer'
import NavBar from './components/NavBarComponents/NavBar'
import ItemDetailContainer from './components/ProductsDetails/ItemDetailContainer';
import CategoryListContainer from './components/ProductsComponents/CategoryListContainer';


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path ="/" element = {<ItemListContainer greeting={"¡Bienvenidos a la mejor tienda de instrumentos musicales!"}/>} />
        <Route exact path ="/category/:id" element = {<CategoryListContainer greeting={"¡Categorías!"}/>} />
        <Route exact path ="/item/:id" element = {<ItemDetailContainer greeting={"¡Más detalles!"}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App