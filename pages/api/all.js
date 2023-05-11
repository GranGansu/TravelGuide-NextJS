// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const paths = [
  { id: 1, name: 'Barcelona', url: '/barcelona' },
  { id: 2, name: 'Canarias', url: '/canarias' },
  { id: 3, name: 'Madrid', url: '/madrid' },
];
export default function handler(req, res) {
  const see = req.query.see;
  const doo = req.query.doo;
  const cat = req.query.cat;
  const ver = [
    { id: 1, c: 'see', must: true, cat: 1, name: 'Museo Picasso', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'picasso2.jpg' },
    { id: 2, c: 'see', must: false, cat: 5, name: 'Parque Guell', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'guell2.jpg' },
    { id: 3, c: 'see', must: false, cat: 2, name: 'Sagrada Familia', description: 'Descripción de este gran videojuego', year: 1992, img: 'sagrada2.jpg' },
    { id: 4, c: 'see', must: true, cat: 3, name: 'Catedral del Mar', description: 'Descripción de este gran videojuego', year: 1992, img: 'delmar.jpg' },
  ];
  const hacer = [
    { id: 1, c: 'do', must: true, cat: 2, name: 'Cinesa Diagonal', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'cinesa.webp' },
    { id: 2, c: 'do', must: false, cat: 1, name: 'Tibidabo', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'tibidabo.jpeg' },
    { id: 3, c: 'do', must: false, cat: 1, name: 'Port Aventura', description: 'Descripción de este gran videojuego', year: 1992, img: 'port.jpg' },
    { id: 4, c: 'do', must: true, cat: 5, name: 'Barceloneta', description: 'Descripción de este gran videojuego', year: 1992, img: 'barceloneta.jpg' },
  ];

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
  }
}
export const ver = [
  { id: 1, c: 'see', must: true, cat: 1, name: 'Museo Picasso', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'picasso2.jpg' },
  { id: 2, c: 'see', must: false, cat: 5, name: 'Parque Guell', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'guell2.jpg' },
  { id: 3, c: 'see', must: false, cat: 2, name: 'Sagrada Familia', description: 'Descripción de este gran videojuego', year: 1992, img: 'sagrada2.jpg' },
  { id: 4, c: 'see', must: true, cat: 3, name: 'Catedral del Mar', description: 'Descripción de este gran videojuego', year: 1992, img: 'delmar.jpg' },
];
export const hacer = [
  { id: 1, c: 'do', must: true, cat: 2, name: 'Cinesa Diagonal', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'cinesa.webp' },
  { id: 2, c: 'do', must: false, cat: 1, name: 'Tibidabo', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'tibidabo.jpeg' },
  { id: 3, c: 'do', must: false, cat: 1, name: 'Port Aventura', description: 'Descripción de este gran videojuego', year: 1992, img: 'port.jpg' },
  { id: 4, c: 'do', must: true, cat: 5, name: 'Barceloneta', description: 'Descripción de este gran videojuego', year: 1992, img: 'barceloneta.jpg' },
  { id: 5, c: 'do', must: true, cat: 2, name: 'Cinesa Diagonal', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'cinesa.webp' },
  { id: 6, c: 'do', must: false, cat: 1, name: 'Tibidabo', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'tibidabo.jpeg' },
  { id: 7, c: 'do', must: false, cat: 1, name: 'Port Aventura', description: 'Descripción de este gran videojuego', year: 1992, img: 'port.jpg' },
  { id: 8, c: 'do', must: true, cat: 5, name: 'Barceloneta', description: 'Descripción de este gran videojuego', year: 1992, img: 'barceloneta.jpg' },
];

export const verr = {
  barcelona: [
    { id: 1, c: 'see', must: true, cat: 1, name: 'Barcelona Picasso', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'picasso2.jpg' },
    { id: 2, c: 'see', must: false, cat: 5, name: 'Parque Guell', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'guell2.jpg' },
    { id: 3, c: 'see', must: false, cat: 2, name: 'Sagrada Familia', description: 'Descripción de este gran videojuego', year: 1992, img: 'sagrada2.jpg' },
    { id: 4, c: 'see', must: true, cat: 3, name: 'Catedral del Mar', description: 'Descripción de este gran videojuego', year: 1992, img: 'delmar.jpg' },
  ],
  canarias: [
    { id: 1, c: 'see', must: true, cat: 1, name: 'Acantilados de los Gigantes', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'gigantes.jpg' },
    { id: 2, c: 'see', must: false, cat: 5, name: 'Dunas Maspalomas', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'dunas.jpg' },
    { id: 3, c: 'see', must: false, cat: 2, name: 'Viñedos en La Geria', description: 'Descripción de este gran videojuego', year: 1992, img: 'geria.jpg' },
    { id: 4, c: 'see', must: true, cat: 3, name: 'Volcán Calderón Hondo', description: 'Descripción de este gran videojuego', year: 1992, img: 'volcan.jpg' },
  ],
  madrid: [
    { id: 1, c: 'see', must: true, cat: 2, name: 'Puerta del Sol', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'puerta.jpg' },
    { id: 2, c: 'see', must: false, cat: 1, name: 'Plaza Mayor', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'plaza.jpg' },
    { id: 3, c: 'see', must: false, cat: 1, name: 'Gran Vía', description: 'Descripción de este gran videojuego', year: 1992, img: 'gran.jpg' },
    { id: 4, c: 'see', must: true, cat: 5, name: 'Templo de Debod', description: 'Descripción de este gran videojuego', year: 1992, img: 'templo.jpg' },
  ],
};
export const hacerr = {
  madrid: [
    { id: 1, c: 'do', must: true, cat: 1, name: 'Madrid Picasso', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'picasso2.jpg' },
    { id: 2, c: 'do', must: false, cat: 5, name: 'Parque Guell', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'guell2.jpg' },
    { id: 3, c: 'do', must: false, cat: 2, name: 'Sagrada Familia', description: 'Descripción de este gran videojuego', year: 1992, img: 'sagrada2.jpg' },
    { id: 4, c: 'do', must: true, cat: 3, name: 'Catedral del Mar', description: 'Descripción de este gran videojuego', year: 1992, img: 'delmar.jpg' },
  ],
  canarias: [
    { id: 1, c: 'do', must: true, cat: 1, name: 'Canarias Picasso', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'picasso2.jpg' },
    { id: 2, c: 'do', must: false, cat: 5, name: 'Parque Guell', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'guell2.jpg' },
    { id: 3, c: 'do', must: false, cat: 2, name: 'Sagrada Familia', description: 'Descripción de este gran videojuego', year: 1992, img: 'sagrada2.jpg' },
    { id: 4, c: 'do', must: true, cat: 3, name: 'Catedral del Mar', description: 'Descripción de este gran videojuego', year: 1992, img: 'delmar.jpg' },
  ],
  barcelona: [
    { id: 1, c: 'do', must: true, cat: 2, name: 'Barcelona Diagonal', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'cinesa.webp' },
    { id: 2, c: 'do', must: false, cat: 1, name: 'Tibidabo', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'tibidabo.jpeg' },
    { id: 3, c: 'do', must: false, cat: 1, name: 'Port Aventura', description: 'Descripción de este gran videojuego', year: 1992, img: 'port.jpg' },
    { id: 4, c: 'do', must: true, cat: 5, name: 'Barceloneta', description: 'Descripción de este gran videojuego', year: 1992, img: 'barceloneta.jpg' },
  ],
};
