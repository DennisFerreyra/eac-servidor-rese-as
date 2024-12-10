const express = require('express');
const app = express();

app.get('/resenias', (_, res) => {
  res.send("Una reseña es un texto relativamente breve en el que se examina un acontecimiento, objeto, investigación u obra artística, a fin de ofrecer una evaluación o interpretación crítica de lo reseñado. Las reseñas pueden abordar temas de lo más diversos. Por ejemplo: un libro, un videojuego, una película, una exposición de arte, un disco, una obra de teatro, una investigación científica, un automóvil, un electrodoméstico, entre muchos otros.");
});
let pelicula = {
'Shrek 2': 'Sinopsis: Cuando Shrek y la princesa Fiona regresan de su luna de miel, los padres de ella los invitan a visitar el reino de Muy Muy Lejano para celebrar la boda. Para Shrek, al que nunca abandona su fiel amigo Asno, esto constituye un gran problema.'
}
 let resenia = {
  'Shrek 2' : '"Shrek 2" es una joya cinematográfica que deslumbra con su ingeniosa narrativa, humor afilado y personajes inolvidables. Esta secuela animada trasciende las expectativas, elevando el listón tanto en términos de creatividad como de calidad visual.'
 }

app.get('/:pelicula/:resenia', (_, res) =>{
res.send 
}
) ;




app.listen(3000); 