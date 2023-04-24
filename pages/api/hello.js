// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const peliculas = [
    { id: 1, name: 'Super Mario', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'Poster.jpg' },
    { id: 2, name: 'Donkey Kong', description: 'Descripción de este gran videojuego', year: 1992, img: 'donkey.jpg' },
    {
      id: 3,
      name: 'Lala land',
      description:
        'Mia y Sebastian son dos jóvenes que quieren abrirse camino en el mundo de Hollywood. Mia es una joven aspirante a actriz que trabaja como camarera mientras acude a castings y Sebastian toca el piano en bares.',
      year: 1992,
      img: 'land.jpg',
    },
    {
      id: 4,
      name: 'Matilda',
      description: 'Una niña desarrolla una capacidad mental extraordinaria, a pesar de sus padres descuidados y de una directora abusiva.',
      year: 1992,
      img: 'matilda.jpeg',
    },
  ];
  if (req.query.id !== undefined) {
    res.status(200).json(
      peliculas.find((p) => {
        return p.id === Number(req.query.id);
      })
    );
  } else {
    res.status(200).json(peliculas);
  }
}
