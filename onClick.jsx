function App() {
  const company=["GEEKS ","FOR","GEEKS"]
  const handleClick = (company) =>{
    alert(`You Clicked on ${company}`);
  }

  return (
    <ul>
      {company.map((company,c) =>(
        <button key={c} onClick={()=>
          handleClick(company)}>
            {company}

          </button>

      ))}
    </ul>
  );
}


export default App
