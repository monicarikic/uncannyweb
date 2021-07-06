// Options the user could type in
const prompts = [
 ["hola", "hola", "hola", "buenos dias", "buenas tardes"],
    ["cemo estes", "como esta la vida", "cómo estan las cosas"],
    ["qué estás haciendo", "que esta pasando", "que esta pasando"],
    ["Cuántos años tienes"],
    ["quién eres", "eres humano", "eres bot", "eres humano o bot"],
    ["quién te creó", "quién te hizo"],
    ["tu nombre por favor",
      "tu nombre",
      "puedo saber tu nombre",
      "cual es tu nombre",
      "cómo te llamas a ti mismo"
    ],
    ["te quiero"],
    ["feliz", "bueno", "divertido", "maravilloso", "fantastico", "genial"],
    ["malo", "aburrido", "cansado"],
    ["ayúdame", "cuentame una historia", "cuéntame un chiste"],
    ["ah", "sí", "ok", "ok", "agradable"],
    ["adios", "adios", "adios", "nos vemos luego"],
    ["que debo comer hoy"],
    ["hermano"],
    ["qué", "por que", "como", "dónde", "cuando"],
    ["no", "no estoy seguro", "tal vez", "no, gracias"],
    [""],
    ["jaja", "ja", "jajaja", "jeje", "gracioso", "broma"]
]

// Possible responses, in corresponding order

const replies = [
 ["¡Hola!", "¡Hola!", "¡Oye!", "¡Hola!", "Hola"],
    [
      "¿Bien como estas tu?",
      "Bastante bien, ¿cómo estás?",
      "Fantástico, ¿cómo estás?"
    ],
    [
      "Poco",
      "A punto de irse a dormir",
      "¿Puedes adivinar?",
      "No lo sé en realidad"
    ],
    ["Soy infinito"],
    ["Solo soy un bot", "Soy un bot. ¿Qué eres tú?"],
    ["El único Dios verdadero, JavaScript"],
    ["No tengo nombre", "No tengo nombre"],
    ["Yo también te amo", "Yo también"],
    ["¿Alguna vez te has sentido mal?", "Me alegra oírlo"],
    ["¿Por qué?", "¿Por qué? ¡No deberías!", "Prueba a ver televisión"],
    ["¿Sobre qué?", "Érase una vez ..."],
    ["Cuéntame una historia", "Cuéntame un chiste", "Cuéntame sobre ti"],
    ["Adiós", "Adiós", "Hasta luego"],
    ["Sushi", "Pizza"],
    ["¡Hermano!"],
    ["Gran pregunta"],
    ["Está bien", "Entiendo", "¿De qué quieres hablar?"],
    ["Por favor di algo :("],
    ["¡Jaja!", "¡Buena!"]
]

// Random for any other user input

const alternative = [
"Igual",
   "Sigue...",
   "Hermano...",
   "Intentar otra vez",
   "Estoy escuchando...",
   "No entiendo :/"
]

// Whatever else you want :)

const coronavirus = ["Por favor, quédese en casa", "Use una máscara", "Afortunadamente, no tengo COVID", "Estos son tiempos inciertos"]