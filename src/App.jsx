import logo from './logo.svg';
import './styles/styles.css';
import logoNavbar from './media/logo.png';
import borderCollie from './media/bordercollie.jpg';
import rhodesian from './media/rhodesian.jpg';

function App() {
  return (
    <div className="App">
      <header>
        
       <ul className="navbar">
           <li>
            <img src={logoNavbar} alt="imagen" className="logo" />
           </li>
           <li>
               <button className="  botonGenerico mainButton">Nuevo post test</button>
           </li>
           <li>
               <div className="buscar">
                <input placeholder="Buscar una raza"/>
                <i className="fas fa-search botonGenerico iconoBusqueda" ></i>
               </div>
           </li>
           <li><button className="botonGenerico secondaryButton">Login</button> </li>
           <li><button className="botonGenerico mainButton">Registro</button></li>
       </ul>
   </header>
   <main>
       <section>
           <h1>Razas de Perros</h1>
           <ul className="breedCardContainer">
               <li className="breedCar">
                   <div className="contenedorImagen">
                    <img src={borderCollie} alt="Border Collie"/>
                   </div>
                   
                   <span className="breedTitle">Border Collie</span>
                </li>
               <li className="breedCar">
                <div className="contenedorImagen">
                    <img src={rhodesian} alt="Border Collie"/>
                </div>
                <span className="breedTitle">Rhodesian</span>   
                </li>
           </ul>
       </section>
       <section></section>
   </main>
   <footer>
       <CardRazasPerros />
    </footer> 
    </div>
  );
}

function CardRazasPerros(){
    return<div>Hola soy un componente</div>
    
}

export default App;
