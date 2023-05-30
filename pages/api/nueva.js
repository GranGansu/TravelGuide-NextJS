import { ExecuteStatementCommand } from '@aws-sdk/client-dynamodb';
import { ddbDocClient } from '../../config';

export default async function handler(req, res) {
  const params = {
    Statement: `SELECT * FROM "ver"`,
  };

  try {
    const data = await ddbDocClient.send(new ExecuteStatementCommand(params));
    const datos = data['Items'].map((i) => {
      let nuevo = {};
      Object.entries(i).map((n) => {
        nuevo = { ...nuevo, [n[0]]: Object.values(n[1])[0] };
      });
      return nuevo;
    });

    return res.status(200).json(datos);
  } catch (err) {
    console.error(err);
    return res.status(200).json({ error: err.status });
  }
}
export const verr = {
  barcelona: [
INSERT INTO "ver" VALUE{'ver':'3', 'city': 'barcelona', 'id': '1', 'c': 'see', 'must': 'true', 'cat': '1', 'name': 'Barcelona Picasso', 'description': 'Esta película de 1993 estrenada en EEUU', 'year': '1992', 'img': 'picasso2.jpg' },
INSERT INTO "ver" VALUE{'ver':'4', 'city': 'barcelona', 'id': '2', 'c': 'see', 'must': 'false', 'cat': '5', 'name': 'Parc Guell', 'description': 'Esta película de 1993 estrenada en EEUU', 'year': '1992', 'img': 'guell2.jpg' },
INSERT INTO "ver" VALUE{'ver':'5', 'city': 'barcelona', 'id': '3', 'c': 'see', 'must': 'false', 'cat': '2', 'name': 'Sagrada Familia', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'sagrada2.jpg' },
INSERT INTO "ver" VALUE{'ver':'6', 'city': 'barcelona', 'id': '4', 'c': 'see', 'must': 'true', 'cat': '3', 'name': 'Catedral del Mar', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'delmar.jpg' },
  ],
  canarias: [
INSERT INTO "ver" VALUE{'ver':'7',
      'city': 'canarias',
      'id': '1',
      'c': 'see',
      'must': 'true',
      'cat': '1',
      'name': 'Acantilados de los Gigantes',
      'description': 'Esta película de 1993 estrenada en EEUU',
      'year': '1992',
      'img': 'gigantes.jpg',
    },
INSERT INTO "ver" VALUE{'ver':'8', 'city': 'canarias', 'id': '2', 'c': 'see', 'must': 'false', 'cat': '5', 'name': 'Dunas Maspalomas', 'description': 'Esta película de 1993 estrenada en EEUU', 'year': '1992', 'img': 'dunas.jpg' }

INSERT INTO "ver" VALUE{'ver':'9', 'city': 'canarias', 'id': '3', 'c': 'see', 'must': 'false', 'cat': '2', 'name': 'Viñedos en La Geria', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'geria.jpg' }

INSERT INTO "ver" VALUE{'ver':'10', 'city': 'canarias', 'id': '4', 'c': 'see', 'must': 'true', 'cat': '3', 'name': 'Volcán Calderón Hondo', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'volcan.jpg' }

  ],
  madrid: [
INSERT INTO "ver" VALUE{'ver':'11',
      'city': 'madrid',
      'id': '1',
      'c': 'see',
      'must': 'true',
      'cat': '2',
      'name': 'Puerta del Sol',
      'description': 'La Puerta del Sol es una plaza de la ciudad española de Madrid. ',
      'year': '1776',
      'img': 'puerta.jpg'
    }

INSERT INTO "ver" VALUE{'ver':'12', 'city': 'madrid', 'id': '2', 'c': 'see', 'must': 'false', 'cat': '1', 'name': 'Plaza Mayor', 'description': 'Esta película de 1993 estrenada en EEUU', 'year': '1992', 'img': 'plaza.jpg' }

INSERT INTO "ver" VALUE{'ver':'13', 'city': 'madrid', 'id': '3', 'c': 'see', 'must': 'false', 'cat': '1', 'name': 'Gran Vía', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'gran.jpg' }

INSERT INTO "ver" VALUE{'ver':'14', 'city': 'madrid', 'id': '4', 'c': 'see', 'must': 'true', 'cat': '5', 'name': 'Templo de Debod', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'templo.jpg' }

  ],
};







export const hacerr = {
  madrid: [
    { 'city': 'madrid', 'id': '1', 'c': 'do', 'must': 'true', 'cat': '1', 'name': 'Madrid Picasso', 'description': 'Esta película de 1993 estrenada en EEUU', 'year': '1992', 'img': 'picasso2.jpg' },
    { 'city': 'madrid', 'id': '2', 'c': 'do', 'must': 'false', 'cat': '5', 'name': 'Parque Guell', 'description': 'Esta película de 1993 estrenada en EEUU', 'year': '1992', 'img': 'guell2.jpg' },
    { 'city': 'madrid', 'id': '3', 'c': 'do', 'must': 'false', 'cat': '2', 'name': 'Sagrada Familia', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'sagrada2.jpg' },
    { 'city': 'madrid', 'id': '4', 'c': 'do', 'must': 'true', 'cat': '3', 'name': 'Catedral del Mar', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'delmar.jpg' },
  ],
  canarias: [
    { 'city': 'canarias', 'id': '1', 'c': 'do', 'must': 'true', 'cat': '1', 'name': 'Canarias Picasso', 'description': 'Esta película de 1993 estrenada en EEUU', 'year': '1992', 'img': 'picasso2.jpg' },
    { 'city': 'canarias', 'id': '2', 'c': 'do', 'must': 'false', 'cat': '5', 'name': 'Parque Guell', 'description': 'Esta película de 1993 estrenada en EEUU', 'year': '1992', 'img': 'guell2.jpg' },
    { 'city': 'canarias', 'id': '3', 'c': 'do', 'must': 'false', 'cat': '2', 'name': 'Sagrada Familia', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'sagrada2.jpg' },
    { 'city': 'canarias', 'id': '4', 'c': 'do', 'must': 'true', 'cat': '3', 'name': 'Catedral del Mar', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'delmar.jpg' },
  ],
  barcelona: [
    { 'city': 'barcelona', 'id': '1', 'c': 'do', 'must': 'true', 'cat': '2', 'name': 'Barcelona Diagonal', 'description': 'Esta película de 1993 estrenada en EEUU', 'year': '1992', 'img': 'cinesa.webp' },
    { 'city': 'barcelona', 'id': '2', 'c': 'do', 'must': 'false', 'cat': '1', 'name': 'Tibidabo', 'description': 'Esta película de 1993 estrenada en EEUU', 'year': '1992', 'img': 'tibidabo.jpeg' },
    { 'city': 'barcelona', 'id': '3', 'c': 'do', 'must': 'false', 'cat': '1', 'name': 'Port Aventura', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'port.jpg' },
    { 'city': 'barcelona', 'id': '4', 'c': 'do', 'must': 'true', 'cat': '5', 'name': 'Barceloneta', 'description': 'Descripción de este gran videojuego', 'year': '1992', 'img': 'barceloneta.jpg' },
  ],
};
