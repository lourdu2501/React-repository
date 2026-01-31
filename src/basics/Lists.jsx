
function List() {
  let Players = ["kholi", "ABD", "Gyle", "KL","stain", "Starc"];

  let Result = Players.map((player) => {
    return <h3 key={player.id}>{player}</h3>;
  });

  return (
    <div>
      <h1>2019 Star Players List</h1>
      {Result}
    </div>
  );
}

export default List;
