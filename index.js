const express = require('express');
const app = express();

app.get('/resenias', (_, res) => {
  res.send("Una reseña es un texto relativamente breve en el que se examina un acontecimiento, objeto, investigación u obra artística, a fin de ofrecer una evaluación o interpretación crítica de lo reseñado. Las reseñas pueden abordar temas de lo más diversos. Por ejemplo: un libro, un videojuego, una película, una exposición de arte, un disco, una obra de teatro, una investigación científica, un automóvil, un electrodoméstico, entre muchos otros.");
});

let pelicula = {
  'Shrek 2': 'Sinopsis: Cuando Shrek y la princesa Fiona regresan de su luna de miel, los padres de ella los invitan a visitar el reino de Muy Muy Lejano para celebrar la boda. Para Shrek, al que nunca abandona su fiel amigo Asno, esto constituye un gran problema.',
  'The Dark Knight': 'Sinopsis: Batman se enfrenta al Joker, un genio criminal que siembra el caos en Gotham City.',
  'Inception': 'Sinopsis: Un ladrón que roba secretos a través del uso de la tecnología de sueño compartido se le da la tarea inversa de plantar una idea en la mente de un C.E.O.',
  'Titanic': 'Sinopsis: Una joven de la alta sociedad se enamora de un pobre artista a bordo del lujoso y malogrado R.M.S. Titanic.'
};

let resenia = {
  'Shrek 2': '"Shrek 2" es una joya cinematográfica que deslumbra con su ingeniosa narrativa, humor afilado y personajes inolvidables. Esta secuela animada trasciende las expectativas, elevando el listón tanto en términos de creatividad como de calidad visual.',
  'The Dark Knight': '"The Dark Knight" es una obra maestra del género de superhéroes, con actuaciones poderosas y una narrativa intensa que redefine el género.',
  'Inception': '"Inception" es un thriller de ciencia ficción que combina una trama intrincada con impresionantes efectos visuales, ofreciendo una experiencia cinematográfica única y emocionante.',
  'Titanic': '"Titanic" es una épica romántica que mezcla maravillosamente la historia con la ficción, capturando la tragedia y la belleza del famoso naufragio.'
};


app.get('/:pelicula', (req, res) => {
  const peliculaNombre = req.params.pelicula;
  const sinopsis = pelicula[peliculaNombre];
  res.send(sinopsis);
});


app.get('/:pelicula/resenias', (req, res) => {
  const peliculaNombre = req.params.pelicula;
  const reseniaTexto = resenia[peliculaNombre];
  res.send(reseniaTexto);
});

app.listen(3000);
