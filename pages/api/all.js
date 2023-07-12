// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const paths = [
  { id: 1, name: 'Barcelona', url: '/barcelona' },
  { id: 2, name: 'Canarias', url: '/canarias' },
  { id: 3, name: 'Madrid', url: '/madrid' },
];
export const filtrosver = [
  { id: 1, name: 'museums' },
  { id: 2, name: 'churches' },
  { id: 3, name: 'cathedrals' },
  { id: 4, name: 'monuments' },
  { id: 5, name: 'parks' },
  { id: 6, name: 'views' },
];
export const filtroshacer = [
  { id: 1, name: 'amusement' },
  { id: 2, name: 'cinemas' },
  { id: 3, name: 'music' },
  { id: 4, name: 'theatres' },
  { id: 5, name: 'beaches' },
  { id: 6, name: 'nature' },
  { id: 7, name: 'languageexchange' },
];
export default function handler(req, res) {
  /*   const see = req.query.see;
  const doo = req.query.doo;
  const cat = req.query.cat;

  if (cat === 'all') {
    res.status(200).json([...ver, ...hacer]);
  } else if (cat === 'see') {
    res.status(200).json(ver);
  } else if (cat === 'do') {
    res.status(200).json(hacer);
  } else {
    const newArray = [];
    if (see) {
      ver.filter((v) => {
        if (see.split('-').includes(v.id.toString())) {
          newArray.push(v);
        }
      });
    }
    if (doo) {
      hacer.filter((d) => {
        if (doo.split('-').includes(d.id.toString())) {
          newArray.push(d);
        }
      });
    }
    res.status(200).json(newArray);
  } */
}

/* export const verr = {
  barcelona: [
    { city: 'barcelona', id: 1, c: 'see', must: true, cat: 1, name: 'Barcelona Picasso', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'picasso2.jpg' },
    { city: 'barcelona', id: 2, c: 'see', must: false, cat: 5, name: 'Parc Guell', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'guell2.jpg' },
    { city: 'barcelona', id: 3, c: 'see', must: false, cat: 2, name: 'Sagrada Familia', description: 'Descripción de este gran videojuego', year: 1992, img: 'sagrada2.jpg' },
    { city: 'barcelona', id: 4, c: 'see', must: true, cat: 3, name: 'Catedral del Mar', description: 'Descripción de este gran videojuego', year: 1992, img: 'delmar.jpg' },
  ],
  canarias: [
    {
      city: 'canarias',
      id: 1,
      c: 'see',
      must: true,
      cat: 1,
      name: 'Acantilados de los Gigantes',
      description: 'Esta película de 1993 estrenada en EEUU',
      year: 1992,
      img: 'gigantes.jpg',
    },
    { city: 'canarias', id: 2, c: 'see', must: false, cat: 5, name: 'Dunas Maspalomas', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'dunas.jpg' },
    { city: 'canarias', id: 3, c: 'see', must: false, cat: 2, name: 'Viñedos en La Geria', description: 'Descripción de este gran videojuego', year: 1992, img: 'geria.jpg' },
    { city: 'canarias', id: 4, c: 'see', must: true, cat: 3, name: 'Volcán Calderón Hondo', description: 'Descripción de este gran videojuego', year: 1992, img: 'volcan.jpg' },
  ],
  madrid: [
    {
      city: 'madrid',
      id: 1,
      c: 'see',
      must: true,
      cat: 2,
      name: 'Puerta del Sol',
      description: 'La Puerta del Sol es una plaza de la ciudad española de Madrid. ',
      year: 1776,
      img: 'puerta.jpg',
    },
    { city: 'madrid', id: 2, c: 'see', must: false, cat: 1, name: 'Plaza Mayor', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'plaza.jpg' },
    { city: 'madrid', id: 3, c: 'see', must: false, cat: 1, name: 'Gran Vía', description: 'Descripción de este gran videojuego', year: 1992, img: 'gran.jpg' },
    { city: 'madrid', id: 4, c: 'see', must: true, cat: 5, name: 'Templo de Debod', description: 'Descripción de este gran videojuego', year: 1992, img: 'templo.jpg' },
  ],
};
export const hacerr = {
  madrid: [
    { city: 'madrid', id: 1, c: 'do', must: true, cat: 1, name: 'Madrid Picasso', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'picasso2.jpg' },
    { city: 'madrid', id: 2, c: 'do', must: false, cat: 5, name: 'Parque Guell', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'guell2.jpg' },
    { city: 'madrid', id: 3, c: 'do', must: false, cat: 2, name: 'Sagrada Familia', description: 'Descripción de este gran videojuego', year: 1992, img: 'sagrada2.jpg' },
    { city: 'madrid', id: 4, c: 'do', must: true, cat: 3, name: 'Catedral del Mar', description: 'Descripción de este gran videojuego', year: 1992, img: 'delmar.jpg' },
  ],
  canarias: [
    { city: 'canarias', id: 1, c: 'do', must: true, cat: 1, name: 'Canarias Picasso', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'picasso2.jpg' },
    { city: 'canarias', id: 2, c: 'do', must: false, cat: 5, name: 'Parque Guell', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'guell2.jpg' },
    { city: 'canarias', id: 3, c: 'do', must: false, cat: 2, name: 'Sagrada Familia', description: 'Descripción de este gran videojuego', year: 1992, img: 'sagrada2.jpg' },
    { city: 'canarias', id: 4, c: 'do', must: true, cat: 3, name: 'Catedral del Mar', description: 'Descripción de este gran videojuego', year: 1992, img: 'delmar.jpg' },
  ],
  barcelona: [
    { city: 'barcelona', id: 1, c: 'do', must: true, cat: 2, name: 'Barcelona Diagonal', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'cinesa.webp' },
    { city: 'barcelona', id: 2, c: 'do', must: false, cat: 1, name: 'Tibidabo', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'tibidabo.jpeg' },
    { city: 'barcelona', id: 3, c: 'do', must: false, cat: 1, name: 'Port Aventura', description: 'Descripción de este gran videojuego', year: 1992, img: 'port.jpg' },
    { city: 'barcelona', id: 4, c: 'do', must: true, cat: 5, name: 'Barceloneta', description: 'Descripción de este gran videojuego', year: 1992, img: 'barceloneta.jpg' },
  ],
};
 */
