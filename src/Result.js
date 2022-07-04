import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>No pet found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              key={pet.id}
              id={pet.id}
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
            />
          );
        })
      )}
    </div>
  );
};

export default Result;
