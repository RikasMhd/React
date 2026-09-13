function App() {

  const users = [
    { id: 1, name: 'Geeks', age: 30 },
    { id: 2, name: 'for', age: 25 },
    { id: 3, name: 'Geeks', age: 20 },
  ];

  function sortedUser(users){
    return [...users].sort((a,b) => a.age-b.age);
  }

  const sorted=sortedUser(users);

  return (
    <>
    <ul>
      {sorted.map((user)=>(
        <li key={user.id}>I'm {user.name}. I'm {user.age} old.</li>
      ))}
    </ul>      //sorted by age and print


    <ul>
      {sorted.map((u)=>
        u.name > 22 ?(
          <li key={u.id}>{u.name} age greater than 22.</li>
        ) : (<li key={u.id}>{u.name} age less than 22.</li>)
      )}
    </ul>    //print age by conditions.

    </>
  );
}


export default App
