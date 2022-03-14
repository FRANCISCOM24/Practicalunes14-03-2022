import './App.css';
function Componente4()
{
  return(
    alert('Hola mundo')
  );
}

function Componente3(props)
{
return(

  <h4>{props.parametro1} {props.parametro2}</h4>

);

}

function Componente2()
{
return(
<h3>Jalate perro</h3>

);

}

function Componente1()
{
return(
  <h2>ESTA ES UNA ETIQUETA</h2>
  );

}

function App() {
  return (
    <div className="App">
      Hola mundo (⊃｡•́‿•̀｡)⊃
      <Componente1></Componente1>
      <Componente2></Componente2>
     <Componente3 parametro1="Jesus" parametro2= "Francisco"></Componente3>
      <button onClick={Componente4}>Click aqui </button>
  

    
    </div>
  );
}

export default App;
