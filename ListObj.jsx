const users = [
  { id: 1, name: 'Geeks', age: 30 },
  { id: 2, name: 'for', age: 25 },
  { id: 3, name: 'Geeks', age: 20 },
];
const App = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} is {user.age} years old.
        </li>
      ))}
    </ul>
  );
}
export default App;
