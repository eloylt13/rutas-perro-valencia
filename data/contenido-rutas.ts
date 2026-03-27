export type RutaFaqItem = {
  pregunta: string;
  respuesta: string;
};

export type RutaContenido = {
  resumen: string;
  descripcion: string;
  consejos: string[];
  mejorEpoca: string;
  advertencias: string;
  faq: RutaFaqItem[];
};

const textoRotoReplacements: Array<[RegExp, string]> = [
  [/ca\u00c3\u00b1\u00c3\u00b3n/g, "ca\u00f1\u00f3n"],
  [/\u00c2\u00bf/g, "\u00bf"],
  [/\bSi,/g, "S\u00ed,"],
  [/\brio\b/g, "r\u00edo"],
  [/\botono\b/g, "oto\u00f1o"],
  [/\bepoca\b/g, "\u00e9poca"],
  [/\bdia\b/g, "d\u00eda"],
  [/\bdias\b/g, "d\u00edas"],
  [/\bmas\b/g, "m\u00e1s"],
  [/\bsegun\b/g, "seg\u00fan"],
  [/\basegurate\b/g, "aseg\u00farate"],
  [/\bobligacion\b/g, "obligaci\u00f3n"],
  [/\bacompana\b/g, "acompa\u00f1a"],
  [/\bacompanarte\b/g, "acompa\u00f1arte"],
  [/\bcompania\b/g, "compa\u00f1\u00eda"],
  [/\bpequenas\b/g, "peque\u00f1as"],
  [/\bvegetacion\b/g, "vegetaci\u00f3n"],
  [/\bano\b/g, "a\u00f1o"],
  [/\bcomodo\b/g, "c\u00f3modo"],
  [/\bsenalizados\b/g, "se\u00f1alizados"],
  [/\bsenalizado\b/g, "se\u00f1alizado"],
  [/\bsenalizada\b/g, "se\u00f1alizada"],
  [/\bopcion\b/g, "opci\u00f3n"],
  [/\butilizala\b/g, "util\u00edzala"],
  [/\bencontraras\b/g, "encontrar\u00e1s"],
  [/\bminimo\b/g, "m\u00ednimo"],
  [/\bacuaticos\b/g, "acu\u00e1ticos"],
  [/\bbano\b/g, "ba\u00f1o"],
  [/\bfisica\b/g, "f\u00edsica"],
  [/\binformate\b/g, "inf\u00f3rmate"],
  [/\bmayoria\b/g, "mayor\u00eda"],
  [/\bmultiples\b/g, "m\u00faltiples"],
  [/\barboles\b/g, "\u00e1rboles"],
  [/\bpanoramicas\b/g, "panor\u00e1micas"],
  [/\bproteccion\b/g, "protecci\u00f3n"],
  [/\btuneles\b/g, "t\u00faneles"],
  [/\bGatova\b/g, "G\u00e1tova"],
  [/\bAguila\b/g, "\u00c1guila"],
  [/\bBunol\b/g, "Bu\u00f1ol"],
  [/\bJucar\b/g, "J\u00facar"],
  [/\bPena\b/g, "Pe\u00f1a"],
  [/\bXativa\b/g, "X\u00e0tiva"],
  [/\bPallas\b/g, "Pall\u00e1s"],
  [/\btransito\b/g, "tr\u00e1nsito"],
  [/\bpublicos\b/g, "p\u00fablicos"],
  [/\bcalcareas\b/g, "calc\u00e1reas"],
  [/\bsubterraneas\b/g, "subterr\u00e1neas"],
  [/\benologia\b/g, "enolog\u00eda"],
  [/\binformacion\b/g, "informaci\u00f3n"],
  [/\btecnica\b/g, "t\u00e9cnica"],
  [/\btecnicos\b/g, "t\u00e9cnicos"],
  [/\btecnicas\b/g, "t\u00e9cnicas"],
  [/\barnes\b/g, "arn\u00e9s"],
  [/\bmovil\b/g, "m\u00f3vil"],
  [/\bdocumentacion\b/g, "documentaci\u00f3n"],
  [/\banade\b/g, "a\u00f1ade"],
  [/\btambien\b/g, "tambi\u00e9n"],
  [/\barqueologico\b/g, "arqueol\u00f3gico"],
  [/\bnidificacion\b/g, "nidificaci\u00f3n"],
  [/\bfria\b/g, "fr\u00eda"],
  [/\bhidratacion\b/g, "hidrataci\u00f3n"],
  [/\boptimas\b/g, "\u00f3ptimas"],
  [/\bdespues\b/g, "despu\u00e9s"],
  [/\bhumedo\b/g, "h\u00famedo"],
  [/\bmaxima\b/g, "m\u00e1xima"],
  [/\brapido\b/g, "r\u00e1pido"],
  [/\bmontana\b/g, "monta\u00f1a"],
  [/\bcanon\b/g, "ca\u00f1\u00f3n"],
  [/\bcalidos\b/g, "c\u00e1lidos"],
  [/\bareas\b/g, "\u00e1reas"],
  [/\bestan\b/g, "est\u00e1n"],
  [/La senda esta/g, "La senda est\u00e1"],
  [/El recorrido esta/g, "El recorrido est\u00e1"],
  [/La ruta esta/g, "La ruta est\u00e1"],
  [/El agua esta/g, "El agua est\u00e1"],
  [/El camino esta/g, "El camino est\u00e1"]
];

function repararTextoRoto(texto: string): string {
  return textoRotoReplacements.reduce(
    (textoNormalizado, [pattern, replacement]) =>
      textoNormalizado.replace(pattern, replacement),
    texto
  );
}

function normalizarContenidoRuta(contenido: RutaContenido): RutaContenido {
  return {
    resumen: repararTextoRoto(contenido.resumen),
    descripcion: repararTextoRoto(contenido.descripcion),
    consejos: contenido.consejos.map(repararTextoRoto),
    mejorEpoca: repararTextoRoto(contenido.mejorEpoca),
    advertencias: repararTextoRoto(contenido.advertencias),
    faq: contenido.faq.map((item) => ({
      pregunta: repararTextoRoto(item.pregunta),
      respuesta: repararTextoRoto(item.respuesta)
    }))
  };
}

const contenidoRutasBase: Record<string, RutaContenido> = {
  "puentes-colgantes-chulilla": {
    resumen:
      "La ruta Puentes Colgantes de Chulilla con perro Valencia discurre por un sendero lineal de unos 9 km dentro del Paraje Natural Los Calderones. Es un paseo sencillo pero requiere llevar al animal con correa en todo momento.",
    descripcion:
      "Cruzar los dos puentes colgantes del cañón del Turia es una de las experiencias mas populares cerca de Valencia. La senda esta bien marcada y en 9 km de ida y vuelta enlaza Chulilla con el embalse de Loriguilla por un terreno con 300 m de desnivel. Debido a que el terreno es estrecho en algunos puntos y forma parte de un espacio protegido, se exige llevar a los perros atados.\n\nEl recorrido sigue el rio Turia y ofrece vistas espectaculares de los farallones y de los propios puentes colgantes. El agua esta siempre cerca, aunque hay poca sombra, por lo que conviene evitar las horas centrales del dia. El acceso desde Valencia es de unos 50 minutos en coche y se puede estacionar en los aparcamientos senalizados.\n\nPara los senderistas mas en forma, existe una variante circular de 16 km que amplia el paseo hasta la presa. Esta opcion requiere mas tiempo y resistencia, y no es recomendable en los dias mas calurosos. En cualquier caso, la ruta es una excelente oportunidad para compartir una jornada de senderismo con tu perro en un entorno natural impresionante.",
    consejos: [
      "Lleva correa y utilizala en todo el recorrido, ya que es obligatoria segun las normas del Paraje Natural.",
      "Aprovecha los puntos junto al rio Turia para refrescar a tu perro, pero recuerda que hay poca sombra.",
      "Evita las horas centrales del dia y los meses mas calurosos; la ruta no esta recomendada en verano.",
      "Si eliges la variante circular de 16 km, asegurate de que tu perro este en buena forma y lleva suficiente agua.",
      "Usa calzado antideslizante y controla a tu perro en los tramos estrechos de pasarela y puentes."
    ],
    mejorEpoca:
      "La mejor epoca para visitar los Puentes Colgantes de Chulilla con tu perro es en otono, invierno o primavera, cuando las temperaturas son suaves y el calor no aprieta. Dado que no hay mucha sombra y no es apta en verano, es preferible evitar los dias mas calurosos.",
    advertencias:
      "Se trata de un espacio protegido con tramos estrechos, por lo que conviene mantener a los perros controlados y respetar la obligacion de llevar correa. El riesgo de procesionaria es alto de enero a mayo; evita la ruta en ese periodo.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, siempre que vayan atados y se respete la normativa del paraje." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, el rio Turia acompana gran parte del recorrido." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, la correa es obligatoria en todo el recorrido." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita la ruta entre enero y mayo y manten a tu perro alejado de los pinos." }
    ]
  },
  "ruta-del-agua-chelva": {
    resumen:
      "La ruta Ruta del Agua de Chelva con perro Valencia ofrece un agradable paseo circular de 7 km que recorre acequias y fuentes tradicionales. Es ideal para disfrutar con tu perro gracias a la presencia de agua y sombra moderada.",
    descripcion:
      "Esta ruta comienza en la Plaza Mayor de Chelva y sigue un circuito de 7 km por el casco historico, antiguas acequias y sendas junto al rio. Su dificultad es baja, con un desnivel moderado de 250 m, y permite disfrutar con calma de los elementos patrimoniales y naturales de la zona.\n\nEl recorrido esta salpicado de fuentes, pequenas presas y merenderos, lo que lo convierte en un paseo especialmente atractivo para perros que disfrutan del agua. La sombra es moderada gracias a la vegetacion de ribera, por lo que se puede realizar durante buena parte del ano. El acceso desde Valencia requiere aproximadamente 70 minutos en coche y cuenta con aparcamiento en el pueblo.\n\nAunque es un itinerario sencillo, conviene llevar un calzado comodo y respetar las areas de riego y los cultivos. La ruta esta muy bien senalizada y permite combinar naturaleza y cultura, por lo que es una opcion perfecta para familias con perro.",
    consejos: [
      "Deja que tu perro se refresque en las fuentes y acequias, pero controla que no beba agua estancada.",
      "Aunque la correa no es obligatoria, es recomendable llevarla para cruzar la zona urbana y respetar a otros visitantes.",
      "Aprovecha los merenderos para hacer una pausa y ofrecer agua y descanso a tu perro.",
      "Evita los dias de mucho calor; aunque hay sombra moderada, algunas zonas estan expuestas al sol.",
      "Recoge siempre los excrementos de tu perro y respeta las zonas de riego y huertas."
    ],
    mejorEpoca:
      "Gracias a la presencia de agua y a la sombra moderada, esta ruta es apta en verano. Primavera y otono son ideales para disfrutar de los colores del paisaje y evitar las aglomeraciones.",
    advertencias:
      "Parte del itinerario discurre por caminos vecinales y zonas de riego; respeta a los agricultores y manten a tu perro bajo control. El riesgo de procesionaria es medio, asi que conviene vigilar las pinadas cercanas durante los meses de enero a mayo.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, los perros son bienvenidos y la correa no es obligatoria." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, encontraras fuentes y acequias en el recorrido." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No es obligatoria, pero se aconseja en zonas urbanas y concurridas." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Medio. Presta atencion a las orugas en temporada y evita que tu perro se acerque a los pinos." }
    ]
  },
  "parque-fluvial-turia-masia-traver": {
    resumen:
      "La ruta Parque Fluvial del Turia - Masia de Traver con perro Valencia es un paseo lineal de 5,5 km junto al cauce del Turia, ideal para principiantes y perros mayores. Ofrece sombra moderada y acceso al agua en diversos puntos.",
    descripcion:
      "Este tramo del Parque Fluvial del Turia comienza en la zona de la Masia de Traver y sigue el curso del rio a lo largo de 5,5 km. La dificultad es baja y cuenta con un desnivel minimo de 56 m, por lo que resulta perfecto para personas que se inician en el senderismo con su perro o para animales senior.\n\nA lo largo del recorrido encontraras zonas de ribera con sombra moderada y numerosos accesos al agua para que tu perro pueda remojarse. El camino es ancho y transitado por ciclistas y corredores, asi que conviene compartir el espacio con civismo. El acceso desde Valencia es rapido, apenas media hora en coche, y hay aparcamiento disponible en la Masia de Traver.\n\nEste tramo del parque forma parte del sendero de gran recorrido que une Valencia con la comarca del Camp de Turia y, aunque no tiene grandes desniveles, permite disfrutar de la vegetacion de ribera y de los sonidos del agua.",
    consejos: [
      "Manten a tu perro atado, ya que en el parque la correa es obligatoria.",
      "Lleva toalla y juguetes acuaticos para que pueda refrescarse en las zonas de bano.",
      "Aprovecha la sombra moderada para pasear en verano, pero evita las horas de maxima insolacion.",
      "Presta atencion a ciclistas y corredores; es una ruta popular, asi que respeta el paso y no invadas todo el camino.",
      "Los perros mayores agradeceran el terreno llano y la proximidad al agua; adapta el ritmo a su condicion fisica."
    ],
    mejorEpoca:
      "La ruta es apta durante todo el ano y especialmente en verano gracias a la sombra moderada y al acceso al agua. Primavera y otono ofrecen temperaturas agradables y menor afluencia de gente.",
    advertencias:
      "Aunque el sendero es facil, en epoca de lluvias el nivel del rio puede subir y anegar algunos accesos; informate antes de ir. El riesgo de procesionaria es bajo, pero vigila a tu perro en las zonas de pinos.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, la ruta esta pensada para ellos." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, el rio Turia proporciona numerosos puntos de agua." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, la normativa del parque obliga a llevar a los perros atados." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Bajo. Conviene supervisar a tu perro y evitar las pinadas durante los meses de riesgo." }
    ]
  },
  "bunol-molino-luz-alborache": {
    resumen:
      "La ruta Bunol - Molino de la Luz - Alborache con perro Valencia es un circuito de 8,5 km que discurre junto al rio Bunol y por los alrededores de Alborache. Su dificultad es facil y permite a los perros disfrutar del agua en varios puntos.",
    descripcion:
      "El itinerario sale de Bunol y enlaza con el Molino de la Luz, siguiendo el cauce hasta la vecina localidad de Alborache. Son 8,5 km de recorrido con apenas 137 m de desnivel, lo que lo hace accesible a la mayoria de personas y perros.\n\nEl rio Bunol acompana gran parte del trayecto y ofrece varios lugares donde los perros pueden beber y refrescarse. La sombra es moderada y el acceso desde Valencia dura unos 40 minutos en coche. El regreso al punto de inicio se hace por senderos senalizados que atraviesan huertas y campos.\n\nAdemas de ser un paseo agradable, esta ruta es apta para perros de cualquier condicion fisica. Los caminos son anchos y sin dificultades tecnicas, por lo que se puede disfrutar de un dia tranquilo en la naturaleza.",
    consejos: [
      "Aunque la correa no es obligatoria, es recomendable llevarla para respetar a otros senderistas y a la fauna local.",
      "Aprovecha los multiples accesos al rio para que tu perro se hidrate y se refresque.",
      "Lleva calzado comodo y evita dias muy calurosos; aunque hay sombra moderada, algunas partes estan expuestas al sol.",
      "Ideal para perros mayores o con menos energia debido a su terreno llano y su escaso desnivel.",
      "Recoge los residuos y respeta las zonas de cultivo que atraviesa el camino."
    ],
    mejorEpoca:
      "Gracias al agua abundante y a la sombra moderada, la ruta se puede realizar durante todo el ano y es apta en verano. Primavera y otono ofrecen un entorno mas verde y temperaturas agradables.",
    advertencias:
      "Durante los fines de semana puede haber mas gente, asi que si tu perro se pone nervioso conviene ir entre semana. El riesgo de procesionaria es medio; vigila los pinos y evita la ruta en plena temporada.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, y la correa no es obligatoria." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, el rio Bunol esta accesible en varios puntos." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No, pero se recomienda llevarla por prudencia." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en epoca de orugas y manten a tu perro alejado de las pinadas." }
    ]
  },
  "embalse-bellus": {
    resumen:
      "La ruta Embalse de Bellus con perro Valencia es un recorrido circular de 5,3 km alrededor del embalse que ofrece agua y vistas al rio Albaida. Es facil y apta para perros mayores gracias a su terreno llano.",
    descripcion:
      "Construido en 1995 sobre el rio Albaida, el embalse de Bellus cuenta con un sendero perimetral de 5,3 km y 57 m de desnivel. La dificultad es baja, por lo que resulta perfecta para personas con poco entrenamiento y perros con movilidad reducida.\n\nEl recorrido ofrece agua en todo momento y, aunque la sombra es escasa, la brisa del embalse ayuda a suavizar las temperaturas. Se tarda alrededor de 60 minutos en llegar desde Valencia en coche y hay aparcamiento cercano.\n\nLa ruta permite disfrutar de la tranquilidad del embalse y de la avifauna que lo habita. Es un lugar ideal para pasear en compania de tu perro sin prisas y con amplias vistas a la sierra de la Costera.",
    consejos: [
      "Lleva suficiente agua para tu perro a pesar de estar junto al embalse; no siempre es recomendable que beban directamente.",
      "Aprovecha las zonas de sombra que encuentres, ya que son pocas y el sol puede ser intenso.",
      "Al ser un terreno llano, es ideal para perros mayores; ajusta el ritmo segun su estado fisico.",
      "La correa no es obligatoria, pero conviene usarla en los tramos cercanos a la carretera o a zonas con fauna.",
      "Lleva bolsas para recoger los desechos y respeta las normas del embalse."
    ],
    mejorEpoca:
      "La ruta es apta en verano gracias a la presencia de agua, aunque la poca sombra recomienda realizarla en las primeras horas del dia o al atardecer. Otono y primavera ofrecen temperaturas mas suaves.",
    advertencias:
      "En dias ventosos el agua puede mojar el sendero y hacerlo resbaladizo. El riesgo de procesionaria es bajo, pero hay pinadas cercanas a algunas zonas.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, los perros pueden disfrutar libremente del paseo." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, el embalse esta presente durante toda la ruta." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No es obligatoria, aunque se aconseja en los tramos con fauna o cerca del aparcamiento." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Bajo. Vigila las zonas arboladas en temporada y evita las orugas." }
    ]
  },
  "gorgo-escalera-anna": {
    resumen:
      "La ruta Gorgo de la Escalera (Anna) con perro Valencia es un corto recorrido lineal de 2,5 km hasta unas pozas naturales de aguas cristalinas. Su dificultad es baja y dispone de sombra moderada, lo que la convierte en una escapada refrescante.",
    descripcion:
      "El sendero comienza cerca del pueblo de Anna y se dirige hacia el paraje del Gorgo de la Escalera. Son solo 2,5 km de ida y vuelta con un desnivel de unos 120 m. La mayor parte del recorrido discurre junto a barrancos y en suave descenso hasta las pozas.\n\nEn el gorgo encontraras piscinas naturales donde los perros pueden nadar y refrescarse bajo la sombra moderada de la vegetacion de ribera. El acceso desde Valencia dura unos 70 minutos y cuenta con aparcamiento cercano.\n\nAunque la ruta es corta, el desnivel de vuelta puede resultar cansado; lleva agua para ti y tu perro y toma descansos en las zonas de sombra.",
    consejos: [
      "Deja que tu perro disfrute del bano en las pozas, pero controla que no moleste a otros visitantes.",
      "La correa no es obligatoria, pero es recomendable en los tramos de escalera o cerca de precipicios.",
      "Utiliza calzado antideslizante para bajar a las pozas, ya que el terreno puede estar humedo.",
      "Evita las horas puntas de verano para encontrar el paraje menos concurrido y disfrutar del agua con tranquilidad.",
      "Lleva una toalla para secar a tu perro tras el bano y evita que suba al coche mojado."
    ],
    mejorEpoca:
      "Al contar con agua abundante y sombra, es una ruta muy apta para verano. Primavera y otono tambien son recomendables por la tranquilidad del paraje.",
    advertencias:
      "El acceso a las pozas tiene escaleras empinadas; presta atencion para que tu perro no resbale. El riesgo de procesionaria es bajo, pero vigila los pinos en la subida.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, y pueden banarse en el gorgo." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, hay pozas naturales con agua." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No es obligatoria, aunque es aconsejable en las zonas de escaleras." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Bajo. Sin embargo, conviene evitar la zona en temporada de orugas." }
    ]
  },
  "cueva-turche": {
    resumen:
      "La ruta Cueva Turche (Bunol) con perro Valencia es un corto paseo de 1,5 km que conduce a una cascada y a una zona de bano en un entorno natural. Es facil y muy frecuentada en verano.",
    descripcion:
      "Desde el aparcamiento de la Cueva Turche, el sendero desciende suavemente durante 1,5 km hasta llegar a la cueva y a su impresionante cascada de unos 60 m. El desnivel es de aproximadamente 50 m, por lo que la ruta es apta para todos los publicos.\n\nEl camino transcurre entre pinos y vegetacion de ribera que ofrecen sombra moderada. Al llegar al final se encuentran la cascada y una zona de bano donde es posible refrescarse. El acceso desde Valencia dura unos 40 minutos y la correa es obligatoria durante el recorrido.\n\nEn verano suele haber mucha gente, por lo que se recomienda acudir a primera hora del dia o en temporada baja para disfrutar del lugar con tranquilidad.",
    consejos: [
      "Manten a tu perro atado durante toda la ruta; es una zona muy visitada.",
      "Lleva correa corta para controlar mejor a tu perro en los tramos estrechos y cercanos al precipicio.",
      "Evita los fines de semana y los meses de verano, ya que la afluencia es muy alta.",
      "Deja que tu perro se refresque en la zona de bano, pero respeta a otros banistas y no permitas que salpique demasiado.",
      "Lleva calzado con agarre; la bajada puede estar humeda y resbaladiza."
    ],
    mejorEpoca:
      "La ruta es apta en verano gracias a la presencia de agua y sombra moderada, pero la mejor epoca para disfrutarla sin aglomeraciones es la primavera o el otono.",
    advertencias:
      "Es un lugar muy concurrido; si tu perro se estresa con las multitudes, busca horarios tranquilos. El riesgo de procesionaria es medio; extrema la precaucion entre enero y mayo.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pero deben ir atados." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, hay una zona de bano en la base de la cascada." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, es obligatoria durante todo el recorrido." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en temporada de orugas y vigila los pinos." }
    ]
  },
  "rio-sellent-bolbaite": {
    resumen:
      "La ruta Rio Sellent (Bolbaite) con perro Valencia es un corto trayecto de 2 km ideal para los dias calurosos gracias a la abundante sombra y al agua fresca del rio. Es facil y permite dejar al perro suelto.",
    descripcion:
      "El sendero discurre paralelo al rio Sellent y permite disfrutar de sus aguas cristalinas y de un entorno muy sombreado. Con apenas 50 m de desnivel y 2 km de longitud, es perfecto para pasear con perros de todas las edades.\n\nDesde Valencia se tardan unos 75 minutos en llegar a Bolbaite y el acceso es sencillo. El camino atraviesa pequenas areas de picnic y zonas de bano donde los perros pueden nadar libremente.\n\nAunque se trata de un recorrido corto, invita a pasar el dia en la ribera, jugando con el perro y descansando a la sombra de los arboles.",
    consejos: [
      "Deja a tu perro suelto en las zonas de bano; la correa no es obligatoria.",
      "Aprovecha la abundante sombra para visitar la ruta en verano.",
      "Lleva repelente de insectos y revisa a tu perro despues del bano para evitar parasitos.",
      "Visita entre semana para encontrar el lugar mas tranquilo, ya que los fines de semana puede haber mas gente.",
      "Lleva comida y agua potable; aunque hay agua en el rio, siempre conviene tener agua limpia a mano."
    ],
    mejorEpoca:
      "Al contar con mucha sombra y agua, es una de las mejores rutas para el verano. En primavera y otono tambien es agradable, con menos visitantes.",
    advertencias:
      "Algunas zonas junto al rio pueden estar resbaladizas; vigila a tu perro para evitar caidas. El riesgo de procesionaria es bajo.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, y pueden ir sueltos." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, el rio Sellent proporciona agua abundante." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No, la correa no es obligatoria." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Bajo. No obstante, supervisa a tu perro en las zonas con pinos." }
    ]
  },
  "ruta-albufera-saler": {
    resumen:
      "La ruta Ruta Albufera - Dehesa del Saler con perro Valencia recorre 7 km dentro del Parque Natural de la Albufera, muy cerca de la ciudad. Es facil, pero la falta de sombra en verano y la obligatoriedad de llevar correa exigen planificar bien la visita.",
    descripcion:
      "Este itinerario circular de 7 km discurre por dunas y pinares de la Dehesa del Saler, bordeando la laguna y las playas del parque. El desnivel es minimo (20 m), por lo que el paseo es accesible para todos. Se tarda unos 20 minutos en llegar en coche desde Valencia, lo que la convierte en una de las rutas mas cercanas a la ciudad.\n\nA lo largo del recorrido hay zonas de agua y marjales que pueden servir para refrescar a tu perro. No obstante, la sombra es escasa y el calor en verano puede ser intenso. La correa es obligatoria en todo momento, ya que se trata de un Espacio Natural Protegido.\n\nAdemas de caminar, puedes aprovechar para acercarte a las playas aptas para perros en temporada baja, siempre respetando las normas del parque.",
    consejos: [
      "Lleva correa y usala durante todo el recorrido; es un requisito del parque.",
      "Evita realizar la ruta en pleno verano, ya que no hay sombra y las temperaturas pueden ser altas.",
      "Lleva agua abundante y protector solar para ti y tu perro; no hay fuentes en el camino.",
      "Aprovecha la cercania a Valencia para visitarla entre semana y evitar las multitudes.",
      "Respeta las areas protegidas y no permitas que tu perro entre en zonas de nidificacion o dunas restringidas."
    ],
    mejorEpoca:
      "La mejor epoca es el otono y la primavera, cuando las temperaturas son suaves y el sol no es tan intenso. La ruta no esta recomendada en verano.",
    advertencias:
      "El fuerte sol y la falta de sombra pueden provocar golpes de calor en tu perro; planifica la visita y evita las horas centrales del dia. El riesgo de procesionaria es bajo, pero hay pinos en la zona.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pero deben ir siempre con correa." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, hay zonas de marjal y laguna, aunque conviene llevar agua potable." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, la correa es obligatoria." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Bajo. Sin embargo, vigila a tu perro en areas con pinares." }
    ]
  },
  "rio-turia-manises-vilamarxant": {
    resumen:
      "La ruta Rio Turia - Manises a Vilamarxant con perro Valencia recorre 10 km de senda lineal dentro del Parque Natural del Turia. Es un paseo facil con sombra moderada y numerosos accesos al agua.",
    descripcion:
      "Este tramo del rio Turia une las localidades de Manises y Vilamarxant a lo largo de 10 km con apenas 60 m de desnivel. Se puede hacer ida y vuelta o usar transporte para regresar. El acceso desde Valencia es rapido, unos 20 minutos en coche.\n\nLa senda discurre por un paraje muy frecuentado por senderistas y ciclistas. Hay sombra moderada gracias a los arboles de ribera y muchos puntos para que los perros se remojen en el agua. La correa es obligatoria segun la normativa del parque.\n\nIdeal para paseos largos y tranquilos, esta ruta permite disfrutar del rio sin grandes desniveles. Puede ser especialmente agradable en los meses calidos por la presencia de agua y sombra.",
    consejos: [
      "Lleva correa y mantenla puesta en todo momento.",
      "Procura realizar la ruta entre semana para evitar el transito de ciclistas y corredores en horas punta.",
      "Deja que tu perro se refresque en el rio, pero vigila las corrientes y evita las zonas profundas.",
      "Lleva agua potable y cuencos para tu perro, ya que el agua del rio puede estar turbia en algunos tramos.",
      "Recoge los residuos y respeta la fauna y flora del parque."
    ],
    mejorEpoca:
      "Con sombra moderada y abundancia de agua, esta ruta es apta todo el ano y especialmente agradable en verano.",
    advertencias:
      "En dias de lluvia el caudal del rio puede aumentar y dificultar el acceso a algunas zonas. El riesgo de procesionaria es bajo, pero existe en zonas de pinar.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, es una ruta pensada para ellos." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, el rio Turia ofrece agua en casi todo el recorrido." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, la normativa del parque exige que los perros vayan atados." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Bajo. Manten la precaucion en zonas con pinos." }
    ]
  },
  "cruz-montepicayo": {
    resumen:
      "La ruta Cruz de Montepicayo (GR-10) con perro Valencia es un itinerario circular de 5,1 km en la Sierra Calderona con desnivel moderado y terreno pedregoso. No hay agua en el recorrido y la correa es obligatoria.",
    descripcion:
      "Esta ruta parte de la Sierra Calderona y asciende hasta la Cruz de Montepicayo siguiendo el sendero GR-10. Con 5,1 km y 287 m de desnivel, la dificultad es media y el terreno es muy pedregoso. El acceso desde Valencia dura unos 30 minutos.\n\nNo hay puntos de agua ni fuentes en todo el recorrido, por lo que es imprescindible llevar agua suficiente para ti y tu perro. La sombra es escasa y la ruta no es apta en verano.\n\nEl esfuerzo se ve recompensado con panoramicas de 360 grados sobre la sierra desde la cruz. A pesar de su corta longitud, se requiere buena forma fisica debido al desnivel acumulado.",
    consejos: [
      "Lleva abundante agua para tu perro; no hay fuentes en el recorrido.",
      "Usa correa durante todo el trayecto, ya que es obligatoria en la zona.",
      "Evita hacer la ruta en dias de calor o en pleno verano.",
      "Utiliza calzado adecuado para terrenos pedregosos y comprueba las almohadillas de tu perro al finalizar.",
      "Comienza temprano para disfrutar de las vistas con buena luz y temperaturas mas frescas."
    ],
    mejorEpoca:
      "La ruta es recomendable en otono, invierno y primavera, cuando las temperaturas son mas bajas y el sol no castiga tanto. No es apta en verano.",
    advertencias:
      "El terreno es muy pedregoso; vigila las patas de tu perro y no olvides agua suficiente. El riesgo de procesionaria es alto, asi que evita la ruta de enero a mayo.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pero deben ir con correa." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "No, no hay agua en el recorrido." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, es obligatoria." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita la ruta en temporada de orugas y revisa a tu perro despues de la excursion." }
    ]
  },
  "acueducto-romano-pena-cortada": {
    resumen:
      "La ruta Acueducto Romano de la Pena Cortada con perro Valencia es un circuito de 6,6 km que combina naturaleza y patrimonio. Su dificultad es media, no hay agua y la sombra es moderada.",
    descripcion:
      "Esta excursion se adentra en el Paraje Natural de los Serranos para visitar el impresionante acueducto romano de Pena Cortada. La ruta circular de 6,6 km tiene un desnivel de 324 m y una dificultad media. Se llega en aproximadamente 65 minutos en coche desde Valencia.\n\nEl recorrido pasa por tramos excavados en roca y culmina en el acueducto, donde hay un paso estrecho de unos 2 m sin proteccion. No hay fuentes ni agua en todo el itinerario, por lo que conviene ir bien preparado. La sombra es moderada gracias a la vegetacion mediterranea.\n\nAunque la correa no es obligatoria, es recomendable usarla en la zona del acueducto por seguridad. La mezcla de senderos y patrimonio historico convierte esta ruta en una experiencia enriquecedora.",
    consejos: [
      "Lleva agua abundante para ti y tu perro; no hay puntos de agua en todo el recorrido.",
      "En el paso estrecho del acueducto, sujeta a tu perro con la correa para evitar caidas.",
      "Evita las horas de mayor calor y lleva proteccion solar; la ruta no es apta en verano.",
      "Utiliza calzado adecuado para tramos de roca y controla a tu perro en los tuneles.",
      "Respeta el patrimonio y no dejes que tu perro orine en las estructuras historicas."
    ],
    mejorEpoca:
      "La ruta es ideal en otono e invierno, cuando las temperaturas son mas bajas. No es apta en verano debido al calor y a la falta de agua.",
    advertencias:
      "El paso por el acueducto es estrecho y no tiene barandillas; extrema la precaucion. El riesgo de procesionaria es alto, por lo que conviene evitar la ruta en temporada de orugas.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pueden ir sin correa, aunque es recomendable usarla en la zona del acueducto." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "No, no hay agua en la ruta." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No obligatoria, pero aconsejable en tramos peligrosos." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Alto. Mejor evitar los meses de enero a mayo." }
    ]
  },
  "gatova-pico-aguila-molino-ceja": {
    resumen:
      "La ruta Gatova - Pico del Aguila - Molino de la Ceja con perro Valencia es un circuito de 8,2 km con desnivel pronunciado y sin agua. Su dificultad es media y atraviesa zonas con poca sombra.",
    descripcion:
      "Partiendo del municipio de Gatova, el sendero asciende hacia el Pico del Aguila y continua hasta el Molino de la Ceja. El recorrido totaliza 8,2 km y 371 m de desnivel, lo que supone un esfuerzo moderado para perros acostumbrados al ejercicio. El acceso desde Valencia se realiza en unos 55 minutos.\n\nNo hay agua disponible en el camino, por lo que es imprescindible llevar la suficiente para tu perro. La sombra es poca, y la ruta no es apta en verano debido al calor. Desde la cima se obtienen vistas panoramicas de la Sierra Calderona.\n\nLa experiencia combina senderos en buen estado con tramos mas rocosos cercanos al pico. Es una buena opcion para perros activos que disfrutan de rutas de montana.",
    consejos: [
      "Lleva agua en abundancia para ti y tu perro, ya que no hay fuentes.",
      "Manten a tu perro atado, sobre todo en los tramos cercanos al pico y al molino.",
      "Evita realizar la ruta en verano y apuesta por otono, invierno o primavera.",
      "Controla las almohadillas de tu perro al caminar por zonas rocosas y detente si notas signos de cansancio.",
      "Disfruta de las vistas desde el Pico del Aguila y aprovecha para hacer fotos, pero no permitas que tu perro se acerque al borde."
    ],
    mejorEpoca:
      "La ruta es recomendable de otono a primavera. No es apta en verano debido a la ausencia de agua y sombra.",
    advertencias:
      "Es una ruta sin agua y con poca sombra, por lo que el calor puede ser un riesgo serio para tu perro. El riesgo de procesionaria es alto, asi que evita la ruta en temporada de orugas.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pero conviene llevarlos atados." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "No, no hay agua disponible." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No obligatoria, pero recomendable en tramos peligrosos." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita la ruta de enero a mayo y revisa a tu perro tras la caminata." }
    ]
  },
  "ruta-pantaneros-loriguilla": {
    resumen:
      "La ruta de los Pantaneros - Embalse de Loriguilla con perro Valencia es un itinerario lineal de 7,9 km que atraviesa una zona protegida y ofrece acceso al agua, aunque con poca sombra. Su dificultad es media y se desaconseja en verano.",
    descripcion:
      "Esta ruta alternativa a los Puentes Colgantes se adentra en la zona protegida de Los Calderones y llega hasta el embalse de Loriguilla. Con 7,9 km de longitud y 287 m de desnivel, la dificultad es media. Se tarda unos 50 minutos en llegar desde Valencia.\n\nEl recorrido sigue senderos que bordean el rio y pasan por paisajes de montana, permitiendo a los perros beber en algunos puntos de agua. La sombra es escasa y el calor puede ser intenso en verano, por lo que es mejor realizarla en estaciones frescas. La correa es obligatoria por tratarse de una zona protegida.\n\nAunque no es tan popular como los Puentes Colgantes, esta ruta ofrece tranquilidad y contacto directo con la naturaleza.",
    consejos: [
      "Lleva la correa puesta durante todo el recorrido, ya que es obligatoria.",
      "Asegurate de llevar agua adicional; aunque hay algunos puntos de agua, no son suficientes para todo el camino.",
      "Evita el verano; la sombra es poca y la ruta no es apta en los meses mas calurosos.",
      "Respeta la zona protegida y no dejes el camino marcado para preservar la flora.",
      "Si tu perro disfruta de nadar, aprovecha las zonas de rio antes de llegar al embalse."
    ],
    mejorEpoca:
      "Otono, invierno y primavera son las epocas ideales. No se recomienda en verano debido a la falta de sombra y al calor.",
    advertencias:
      "Es una zona protegida; respeta la flora y fauna y no dejes residuos. El riesgo de procesionaria es alto, por lo que conviene evitar los meses de enero a mayo.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pero deben ir con correa." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, aunque los puntos de agua son limitados." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, es obligatoria." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita la ruta entre enero y mayo." }
    ]
  },
  "ontinyent-senda-enginyers": {
    resumen:
      "La ruta Ontinyent - Senda dels Enginyers con perro Valencia es un circuito de 9,8 km con desnivel moderado y sin puntos de agua. Su dificultad es media y combina tramos de asfalto y sendero.",
    descripcion:
      "Este itinerario parte de las afueras de Ontinyent y recorre 9,8 km con 312 m de desnivel. La ruta mezcla caminos asfaltados con senderos de montana, lo que la convierte en una buena opcion de entrenamiento para perros activos. El acceso desde Valencia dura unos 75 minutos.\n\nNo hay agua en el camino, pero la sombra es moderada gracias a la vegetacion de ribera y a los tramos de bosque. La correa no es obligatoria, aunque se recomienda tener control sobre el perro en las zonas de asfalto. La ruta no es apta en verano debido al calor.\n\nLa diversidad de terrenos ofrece un estimulo mental y fisico para perros acostumbrados a caminar distancias mas largas.",
    consejos: [
      "Lleva agua suficiente para ti y tu perro, ya que no hay fuentes en el recorrido.",
      "Aprovecha las zonas de sombra para descansar y ofrecer agua a tu perro.",
      "Ajusta la correa en los tramos de asfalto para evitar peligros con vehiculos.",
      "Evita la ruta en verano; no es apta para altas temperaturas.",
      "Ideal para perros activos que necesitan recorrer distancias largas y combinar terrenos."
    ],
    mejorEpoca:
      "La mejor epoca es otono, invierno y primavera, cuando las temperaturas son suaves y la ruta se puede disfrutar sin calor. No apta en verano.",
    advertencias:
      "Debido a la longitud y al desnivel, asegurate de que tu perro este en buena condicion fisica. El riesgo de procesionaria es medio.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, y pueden ir sin correa en la mayor parte del recorrido." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "No, no hay puntos de agua." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No obligatoria, pero recomendable en tramos de asfalto." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Medio. Vigila las zonas con pinos y evita los meses de maxima actividad." }
    ]
  },
  "sierra-aledua-pico-besori": {
    resumen:
      "La ruta Sierra de Aledua - Pico Besori con perro Valencia es un circuito de 8,5 km con dificultad media, sin agua y sombra moderada. La senda es tecnica con bajadas en piedra.",
    descripcion:
      "La ruta parte de la Ribera Alta y asciende al Pico Besori, recorriendo 8,5 km con 288 m de desnivel. Se llega en unos 40 minutos desde Valencia. Es una senda con tramos tecnicos de piedra suelta y descensos que requieren buena forma fisica y atencion.\n\nNo hay fuentes ni puntos de agua, por lo que es esencial llevar la suficiente para el perro. La sombra es moderada gracias a algunas zonas boscosas, pero la ruta no es apta en verano. La correa no es obligatoria, aunque se aconseja en los tramos tecnicos.\n\nDesde la cima se obtienen amplias vistas de la Ribera y de la sierra. La combinacion de pendientes y bajadas la convierte en una ruta entretenida para perros con experiencia.",
    consejos: [
      "Lleva agua abundante para ti y tu perro; no hay fuentes.",
      "Usa arnes y correa en los descensos tecnicos para mejorar el control.",
      "Evita la ruta en verano; no es apta en los dias mas calurosos.",
      "Vigila las almohadillas de tu perro al caminar sobre piedras sueltas.",
      "Empieza temprano para aprovechar la sombra moderada y las temperaturas frescas."
    ],
    mejorEpoca:
      "La ruta es adecuada en otono, invierno y primavera. No se recomienda en verano debido al calor y a la falta de agua.",
    advertencias:
      "Al ser un itinerario tecnico, asegurate de que tu perro tiene experiencia y buena condicion fisica. El riesgo de procesionaria es alto; evita la ruta en temporada de orugas.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, y pueden ir sueltos en gran parte del recorrido." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "No, no hay agua disponible." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No obligatoria, pero recomendable en los tramos tecnicos." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita los meses de enero a mayo y revisa a tu perro tras la excursion." }
    ]
  },
  "canones-jucar-jalance": {
    resumen:
      "La ruta Canones del Jucar (Jalance) con perro Valencia es un recorrido lineal de 11 km que sigue el rio Jucar y ofrece sombra moderada y numerosos accesos al agua. Su dificultad es media y requiere buena condicion fisica.",
    descripcion:
      "Este itinerario recorre los espectaculares canones excavados por el rio Jucar en la comarca de Ayora-Cofrentes. Con 11 km de recorrido y 400 m de desnivel, es la ruta mas larga del listado y se tarda unos 90 minutos en llegar desde Valencia.\n\nEl sendero sigue de cerca el cauce del Jucar, ofreciendo muchos puntos donde los perros pueden beber y refrescarse. La sombra es moderada gracias a los arboles de ribera. La correa no es obligatoria, pero se recomienda llevarla en tramos escarpados o concurridos.\n\nPor su longitud y desnivel, es adecuada para perros con buena condicion fisica. La ruta no es apta en verano debido al calor y a la exposicion en algunos tramos.",
    consejos: [
      "Planifica bien la ruta y lleva agua y alimento para tu perro; aunque hay agua en el rio, conviene tener agua potable.",
      "Evita la ruta en verano; las temperaturas y la longitud la hacen exigente.",
      "Manten a tu perro controlado en los tramos de canon y cerca de acantilados.",
      "Permite que se refresque en los puntos de agua, pero vigila las corrientes.",
      "Ideal para perros con buena forma fisica; si tu perro no esta acostumbrado a distancias largas, elige una ruta mas corta."
    ],
    mejorEpoca:
      "La ruta es aconsejable en otono y primavera, cuando las temperaturas son suaves y el caudal del rio permite disfrutar del paisaje sin riesgos. No se recomienda en verano.",
    advertencias:
      "La longitud y la exigencia fisica requieren una buena planificacion. El riesgo de procesionaria es medio; vigila a tu perro en las zonas de pinos.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, siempre que tengan buena condicion fisica y se respeten las normas del paraje." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, el rio Jucar ofrece agua en muchos puntos." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No es obligatoria, pero recomendable en tramos escarpados." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Medio. Vigila las zonas arboladas y evita la ruta en temporada de orugas." }
    ]
  },
  "salto-novia-navajas": {
    resumen:
      "La ruta Salto de la Novia (Navajas) con perro Valencia es un paseo lineal de 3 km que conduce a una cascada de 30 m. La dificultad es baja, pero se recomienda llevar correa por la afluencia de visitantes.",
    descripcion:
      "Ubicado en el municipio de Navajas, el Salto de la Novia es uno de los enclaves mas conocidos de la comarca. La ruta de 3 km y 100 m de desnivel empieza en el parking del paraje y sigue el cauce del rio Palancia hasta la cascada de 30 m. Se tarda aproximadamente 60 minutos en llegar desde Valencia.\n\nEl camino discurre por bosques de ribera con sombra moderada y ofrece varias zonas para que los perros se refresquen. La correa es obligatoria en el paraje debido a la afluencia de visitantes, sobre todo los fines de semana. La ruta no es apta en verano debido al calor y a la multitud.\n\nEl entorno es muy popular; se recomienda llegar temprano para evitar colas y disfrutar de la cascada con tranquilidad.",
    consejos: [
      "Lleva correa y mantenla puesta durante toda la visita.",
      "Visita la ruta entre semana o en temporada baja para evitar aglomeraciones.",
      "Permite que tu perro se refresque en el rio Palancia, pero mantenlo alejado de la base de la cascada por seguridad.",
      "Lleva agua potable; aunque hay agua en el rio, conviene tener agua limpia siempre.",
      "Respeta las normas del paraje y recoge los residuos."
    ],
    mejorEpoca:
      "Es preferible visitar en otono, invierno o primavera, cuando hay menos afluencia y la temperatura es agradable. No se recomienda en verano.",
    advertencias:
      "Las aglomeraciones pueden ser estresantes para algunos perros. El riesgo de procesionaria es medio; evita la ruta entre enero y mayo y vigila a tu perro en las zonas de pinos.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pero deben ir con correa." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, el rio Palancia ofrece puntos de agua." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, es obligatoria en el paraje." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en temporada de orugas y manten a tu perro alejado de los pinos." }
    ]
  },
  "descenso-rio-fraile": {
    resumen:
      "La ruta Descenso del Rio Fraile (Cortes de Pallas) con perro Valencia es un recorrido lineal de 6 km que combina sendero y descenso por el rio. Su dificultad es media y es apta en verano, siempre que tu perro sepa nadar.",
    descripcion:
      "Este itinerario parte de las inmediaciones de Cortes de Pallas y baja hacia el cauce del rio Fraile. Con 6 km y 200 m de desnivel, se tarda unos 90 minutos en llegar desde Valencia. La peculiaridad es que parte del trayecto se realiza descendiendo por el propio rio, por lo que solo es adecuado para perros que esten acostumbrados a nadar.\n\nLa ruta cuenta con sombra moderada y varios puntos donde los perros pueden beber y banarse. La correa no es obligatoria, aunque conviene llevarla y utilizarla en los tramos de acceso o si hay otros excursionistas. La ruta es apta en verano gracias al agua fresca del rio.\n\nEs recomendable llevar bolsa estanca para proteger objetos de valor y planificar la logistica del regreso, ya que al tratarse de un descenso lineal puede ser necesario dejar un coche al final.",
    consejos: [
      "Asegurate de que tu perro disfruta y sabe nadar; una parte del recorrido discurre por el rio.",
      "Usa arnes para facilitar el agarre en los tramos acuaticos.",
      "Lleva una bolsa estanca para proteger el movil y la documentacion.",
      "Evita realizar la ruta fuera del verano si el agua esta muy fria y puede causar hipotermia a tu perro.",
      "Respeta la fauna del rio y no dejes residuos en el entorno."
    ],
    mejorEpoca:
      "Esta ruta es especialmente recomendable en verano, cuando el rio Fraile ofrece un alivio refrescante. En otras estaciones puede resultar demasiado frio.",
    advertencias:
      "El descenso por el rio puede ser resbaladizo; vigila a tu perro y ayudale en los tramos complicados. El riesgo de procesionaria es bajo.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pero conviene que sepan nadar." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, el rio ofrece agua abundante." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No obligatoria, pero recomendable en tramos concurridos." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Bajo. Aun asi, vigila las zonas de pinos en los accesos." }
    ]
  },
  "ruta-chera": {
    resumen:
      "La ruta de Chera con perro Valencia es un circuito de 7 km con dificultad media que incluye una cascada y ofrece sombra moderada y puntos de agua. Es apta en verano siempre que planifiques bien el acceso al agua.",
    descripcion:
      "Situada en la comarca de Hoya de Bunol, la ruta de Chera combina sendas de montana con tramos junto al agua. Con 7 km y 300 m de desnivel, se llega en unos 70 minutos desde Valencia. Una cascada en medio del recorrido anade un atractivo adicional.\n\nLa sombra es moderada y hay puntos de agua, pero conviene verificar los tramos de acceso al agua para el perro. La correa es obligatoria y la ruta es apta en verano si se evitan las horas centrales del dia.\n\nEl camino esta bien senalizado y permite disfrutar de la naturaleza sin grandes dificultades tecnicas.",
    consejos: [
      "Lleva correa y usala durante todo el recorrido.",
      "Verifica los puntos donde tu perro puede acceder al agua antes de salir y planifica paradas.",
      "Evita las horas de mayor calor incluso en verano; aunque hay agua, la sombra es moderada.",
      "Lleva calzado comodo y sigue las senalizaciones para no perderte.",
      "Respeta el entorno y no salgas de los caminos marcados."
    ],
    mejorEpoca:
      "La ruta es apta en verano gracias a la presencia de agua, pero tambien se disfruta mucho en primavera y otono cuando el entorno esta mas verde.",
    advertencias:
      "Algunos tramos de acceso al agua pueden ser resbaladizos; vigila a tu perro. El riesgo de procesionaria es medio, asi que evita la ruta en temporada de orugas.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pero deben ir con correa." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, aunque hay que verificar los accesos." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, la correa es obligatoria." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en los meses de mayor actividad de la oruga." }
    ]
  },
  "xativa-cova-negra-bellus": {
    resumen:
      "La ruta Xativa - Cova Negra - Bellus con perro Valencia es un circuito de 10 km que combina patrimonio y naturaleza. Hay varias fuentes en el camino y sombra moderada, lo que la hace apta en verano.",
    descripcion:
      "Esta ruta recorre los alrededores de Xativa, siguiendo la senda que conecta la Cova Negra con el embalse de Bellus. Con 10 km de longitud y 350 m de desnivel, presenta una dificultad media. Se tarda unos 60 minutos en llegar desde Valencia.\n\nLa senda es predominantemente de tierra (90 %) y cuenta con varias fuentes para recargar agua. La sombra es moderada y la ruta es apta en verano gracias al acceso al agua y a la vegetacion de ribera. La correa es obligatoria.\n\nAdemas de los valores naturales, la ruta atraviesa lugares historicos como la Cova Negra, un yacimiento prehistorico. Es una excursion variada que combina cultura y naturaleza.",
    consejos: [
      "Lleva correa y usala durante todo el recorrido.",
      "Aprovecha las fuentes para recargar agua, pero lleva tambien tu propia provision.",
      "Evita las horas mas calurosas del dia en verano, aunque la ruta es apta gracias a la sombra moderada.",
      "Ten cuidado en los tramos con desnivel y vigila a tu perro en las zonas rocosas.",
      "Respeta el patrimonio arqueologico y no permitas que tu perro escarbe en la Cova Negra."
    ],
    mejorEpoca:
      "Aunque es apta en verano gracias al agua, primavera y otono ofrecen temperaturas mas agradables y menos afluencia.",
    advertencias:
      "El terreno puede resultar resbaladizo tras lluvias; lleva calzado adecuado. El riesgo de procesionaria es medio.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pero deben ir con correa." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, hay varias fuentes." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, la correa es obligatoria." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en temporada de orugas." }
    ]
  },
  "senda-portalet-gandia": {
    resumen:
      "La ruta Senda del Portalet (Gandia) con perro Valencia es un recorrido lineal de 2 km muy corto y facil. No hay agua, pero dispone de sombra moderada y es ideal como primera salida.",
    descripcion:
      "Situada en la comarca de La Safor, la Senda del Portalet es una excursion de 2 km con 50 m de desnivel. Se tarda unos 70 minutos en llegar desde Valencia. La senda discurre por un paraje de formaciones calcareas espectaculares.\n\nNo hay puntos de agua en el recorrido, pero la sombra es moderada gracias a la vegetacion. La correa es obligatoria. Es una ruta muy corta, ideal para iniciarse en el senderismo con tu perro o como paseo rapido en verano.",
    consejos: [
      "Lleva agua para ti y tu perro; no hay fuentes.",
      "Usa correa durante todo el recorrido.",
      "Aprovecha las formaciones calcareas para hacer fotos, pero no permitas que tu perro escale por ellas.",
      "Es una ruta corta; aprovecha para complementar el dia con un paseo por Gandia o por la playa fuera de temporada.",
      "En verano, evita las horas de mayor calor y lleva sombrero y protector solar."
    ],
    mejorEpoca:
      "Gracias a su sombra moderada, es apta en verano, pero primavera y otono ofrecen temperaturas mas agradables.",
    advertencias:
      "Ruta corta y sencilla, pero sin agua. El riesgo de procesionaria es medio.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pero deben ir atados." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "No, no hay agua disponible." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, es obligatoria." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Medio. Vigila las pinadas y evita la ruta en temporada de orugas." }
    ]
  },
  "ruta-caves-requena": {
    resumen:
      "La ruta de les Caves (Requena) con perro Valencia es un paseo cultural de 4 km por el casco historico de Requena y sus bodegas subterraneas. No hay agua y la sombra es escasa.",
    descripcion:
      "Este recorrido circular de 4 km y 100 m de desnivel explora las antiguas cuevas y bodegas de Requena. Se tarda unos 65 minutos en llegar desde Valencia. Es una ruta diferente, mas urbana, que combina historia y enologia.\n\nNo hay agua natural disponible en el recorrido y la sombra es escasa, asi que conviene llevar agua para tu perro y evitar las horas de mas calor. La correa no es obligatoria, pero se recomienda para respetar a otros visitantes.\n\nEl recorrido permite descubrir las calles empedradas de Requena y visitar las famosas cuevas donde se almacenaba el vino. Es un plan perfecto para combinar con gastronomia local.",
    consejos: [
      "Lleva agua suficiente para tu perro; no hay fuentes en el camino.",
      "Evita las horas centrales del dia, especialmente en verano, ya que hay poca sombra.",
      "Aunque la correa no es obligatoria, usala en zonas concurridas o cuando entres en las cuevas.",
      "Aprovecha para aprender sobre la historia de las bodegas, pero recuerda que los perros no pueden entrar a todas las instalaciones.",
      "Disfruta del casco historico de Requena y respeta a los vecinos y comercios."
    ],
    mejorEpoca:
      "La ruta se puede hacer en cualquier epoca, pero primavera y otono son ideales por las temperaturas templadas. En verano se debe evitar el calor extremo.",
    advertencias:
      "No hay agua natural ni mucha sombra; planifica bien la visita. El riesgo de procesionaria es bajo.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pueden acompanarte en el recorrido urbano." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "No, no hay agua natural, asi que debes llevarla." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No obligatoria, pero aconsejable en zonas concurridas." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Bajo. Aun asi, vigila las pinadas en los parques cercanos." }
    ]
  },
  "cova-negra-carcaixent": {
    resumen:
      "La ruta Cova Negra (Carcaixent) con perro Valencia es un circuito de 5 km con dificultad media y cuenta con agua y sombra moderada. Los datos estan pendientes de verificacion in situ.",
    descripcion:
      "Situada en la Ribera Alta, esta ruta recorre 5 km con 150 m de desnivel. Se tarda unos 45 minutos en llegar desde Valencia. La senda atraviesa bosques mediterraneos con sombra moderada y puntos de agua para refrescarse.\n\nLa correa no es obligatoria, aunque se recomienda en zonas concurridas. La ruta es apta en verano gracias a la presencia de agua y sombra. Sin embargo, la informacion de esta ficha aun debe ser contrastada sobre el terreno.",
    consejos: [
      "Lleva suficiente agua y comprueba previamente los puntos de hidratacion.",
      "La correa no es obligatoria, pero utilizala si hay otros senderistas.",
      "Aprovecha la sombra moderada para evitar las horas mas calurosas.",
      "Sigue las indicaciones y no te salgas del camino para proteger el entorno.",
      "Revisa la ruta antes de ir, ya que algunos datos estan pendientes de verificacion."
    ],
    mejorEpoca:
      "Primavera y otono son epocas optimas, pero al haber agua y sombra tambien es apta en verano.",
    advertencias:
      "Los datos de la ruta aun no han sido verificados in situ, asi que conviene ser prudente. El riesgo de procesionaria es medio.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pueden ir sin correa." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, hay agua en el recorrido." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "No obligatoria, pero recomendable en zonas de transito." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en los meses de mas actividad." }
    ]
  },
  "barranco-agua-negra": {
    resumen:
      "La ruta Barranco del Agua Negra (Bocairent) con perro Valencia es un itinerario lineal de 3 km con dificultad media, que ofrece mucha sombra y agua. Los datos estan pendientes de verificacion.",
    descripcion:
      "Esta ruta se encuentra en la comarca de El Comtat y sigue el barranco del Agua Negra. Con 3 km de longitud y 150 m de desnivel, se tarda unos 90 minutos en llegar desde Valencia. El sendero discurre bajo un denso arbolado, con mucha sombra y acceso continuo al agua.\n\nLa correa es obligatoria y la ruta es apta en verano gracias a la frescura del barranco. Sin embargo, la informacion de esta ficha aun debe ser verificada.",
    consejos: [
      "Manten a tu perro atado durante todo el recorrido.",
      "Lleva toalla y cuencos plegables; hay mucha agua para que tu perro beba.",
      "Aprovecha la sombra y visita la ruta en los dias calurosos.",
      "Ajusta el ritmo a tu perro; aunque la ruta es corta, puede haber tramos resbaladizos.",
      "Confirma la informacion y el estado del sendero antes de ir, ya que los datos estan pendientes de verificacion."
    ],
    mejorEpoca:
      "Es apta en verano gracias a la abundante sombra y al agua. Primavera y otono tambien son buenas opciones.",
    advertencias:
      "Los datos de la ruta aun no han sido confirmados; extremad la precaucion. El riesgo de procesionaria es alto; evita la ruta en temporada de orugas.",
    faq: [
      { pregunta: "¿Pueden ir los perros?", respuesta: "Si, pero deben ir con correa." },
      { pregunta: "¿Hay agua para el perro?", respuesta: "Si, el barranco ofrece agua en todo el recorrido." },
      { pregunta: "¿Es necesaria la correa?", respuesta: "Si, es obligatoria." },
      { pregunta: "¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita los meses de enero a mayo y vigila a tu perro en las zonas de pinos." }
    ]
  }
};

export const contenidoRutas: Record<string, RutaContenido> = Object.fromEntries(
  Object.entries(contenidoRutasBase).map(([slug, contenido]) => [
    slug,
    normalizarContenidoRuta(contenido)
  ])
);

export function getContenidoRuta(slug: string): RutaContenido | undefined {
  return contenidoRutas[slug];
}
