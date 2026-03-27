export type RutaFaqItem = {
  pregunta: string;
  respuesta: string;
};

export type RutaContenido = {
  resumen: string;
  mejor: string[];
  peor: string[];
  descripcion: string;
  consejos: string[];
  mejorEpoca: string;
  advertencias: string;
  faq: RutaFaqItem[];
};

const contenidoRutasBase: Record<string, RutaContenido> = {
  "puentes-colgantes-chulilla": {
    mejor: [
      "Vistas del cañón del Turia",
      "Puentes colgantes muy llamativos",
      "Río accesible para refrescarse"
    ],
    peor: ["Poca sombra en casi todo", "Correa obligatoria todo el recorrido"],
    resumen:
      "La ruta Puentes Colgantes de Chulilla con perro Valencia discurre por un sendero lineal de unos 9 km dentro del Paraje Natural Los Calderones. Es un paseo sencillo pero requiere llevar al animal con correa en todo momento.",
    descripcion:
      "Cruzar los dos puentes colgantes del caÃ±Ã³n del Turia es una de las experiencias mÃ¡s populares cerca de Valencia. La senda estÃ¡ bien marcada y en 9 km de ida y vuelta enlaza Chulilla con el embalse de Loriguilla por un terreno con 300 m de desnivel. Debido a que el terreno es estrecho en algunos puntos y forma parte de un espacio protegido, se exige llevar a los perros atados.\n\nEl recorrido sigue el rÃ­o Turia y ofrece vistas espectaculares de los farallones y de los propios puentes colgantes. El agua estÃ¡ siempre cerca, aunque hay poca sombra, por lo que conviene evitar las horas centrales del dÃ­a. El acceso desde Valencia es de unos 50 minutos en coche y se puede estacionar en los aparcamientos seÃ±alizados.\n\nPara los senderistas mÃ¡s en forma, existe una variante circular de 16 km que amplÃ­a el paseo hasta la presa. Esta opciÃ³n requiere mÃ¡s tiempo y resistencia, y no es recomendable en los dÃ­as mÃ¡s calurosos. En cualquier caso, la ruta es una excelente oportunidad para compartir una jornada de senderismo con tu perro en un entorno natural impresionante.",
    consejos: [
      "Lleva correa y ÃºtilÃ­zala en todo el recorrido, ya que es obligatoria segÃºn las normas del Paraje Natural.",
      "Aprovecha los puntos junto al rÃ­o Turia para refrescar a tu perro, pero recuerda que hay poca sombra.",
      "Evita las horas centrales del dÃ­a y los meses mÃ¡s calurosos; la ruta no estÃ¡ recomendada en verano.",
      "SÃ­ eliges la variante circular de 16 km, asegÃºrate de que tu perro estÃ© en buena forma y lleva suficiente agua.",
      "Usa calzado antideslizante y controla a tu perro en los tramos estrechos de pasarela y puentes."
    ],
    mejorEpoca:
      "La mejor Ã©poca para visitar los Puentes Colgantes de Chulilla con tu perro es en otoÃ±o, invierno o primavera, cuando las temperaturas son suaves y el calor no aprieta. Dado que no hay mucha sombra y no es apta en verano, es preferible evitar los dÃ­as mÃ¡s calurosos.",
    advertencias:
      "Se trata de un espacio protegido con tramos estrechos, por lo que conviene mantener a los perros controlados y respetar la obligaciÃ³n de llevar correa. El riesgo de procesionaria es alto de enero a mayo; evita la ruta en ese periodo.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, siempre que vayan atados y se respete la normativa del paraje." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, el rÃ­o Turia acompaÃ±a gran parte del recorrido." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, la correa es obligatoria en todo el recorrido." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita la ruta entre enero y mayo y mantÃ©n a tu perro alejado de los pinos." }
    ]
  },
  "ruta-del-agua-chelva": {
    mejor: [
      "Fuentes y acequias muy vistosas",
      "Buen patrimonio durante la ruta",
      "Perro puede ir suelto"
    ],
    peor: ["Sombra solo moderada"],
    resumen:
      "La ruta Ruta del Agua de Chelva con perro Valencia ofrece un agradable paseo circular de 7 km que recorre acequias y fuentes tradicionales. Es ideal para disfrutar con tu perro gracias a la presencia de agua y sombra moderada.",
    descripcion:
      "Esta ruta comienza en la Plaza Mayor de Chelva y sigue un circuito de 7 km por el casco histÃ³rico, antiguas acequias y sendas junto al rÃ­o. Su dificultad es baja, con un desnivel moderado de 250 m, y permite disfrutar con calma de los elementos patrimoniales y naturales de la zona.\n\nEl recorrido estÃ¡ salpicado de fuentes, pequeÃ±as presas y merenderos, lo que lo convierte en un paseo especialmente atractivo para perros que disfrutan del agua. La sombra es moderada gracias a la vegetaciÃ³n de ribera, por lo que se puede realizar durante buena parte del aÃ±o. El acceso desde Valencia requiere aproximadamente 70 minutos en coche y cuenta con aparcamiento en el pueblo.\n\nAunque es un itinerario sencillo, conviene llevar un calzado cÃ³modo y respetar las Ã¡reas de riego y los cultivos. La ruta estÃ¡ muy bien seÃ±alizada y permite combinar naturaleza y cultura, por lo que es una opciÃ³n perfecta para familias con perro.",
    consejos: [
      "Deja que tu perro se refresque en las fuentes y acequias, pero controla que no beba agua estancada.",
      "Aunque la correa no es obligatoria, es recomendable llevarla para cruzar la zona urbana y respetar a otros visitantes.",
      "Aprovecha los merenderos para hacer una pausa y ofrecer agua y descanso a tu perro.",
      "Evita los dÃ­as de mucho calor; aunque hay sombra moderada, algunas zonas estÃ¡n expuestas al sol.",
      "Recoge siempre los excrementos de tu perro y respeta las zonas de riego y huertas."
    ],
    mejorEpoca:
      "Gracias a la presencia de agua y a la sombra moderada, esta ruta es apta en verano. Primavera y otoÃ±o son ideales para disfrutar de los colores del paisaje y evitar las aglomeraciones.",
    advertencias:
      "Parte del itinerario discurre por caminos vecinales y zonas de riego; respeta a los agricultores y mantÃ©n a tu perro bajo control. El riesgo de procesionaria es medio, asÃ­ que conviene vigilar las pinadas cercanas durante los meses de enero a mayo.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, los perros son bienvenidos y la correa no es obligatoria." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, encontrarÃ¡s fuentes y acequias en el recorrido." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No es obligatoria, pero se aconseja en zonas urbanas y concurridas." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Medio. Presta atenciÃ³n a las orugas en temporada y evita que tu perro se acerque a los pinos." }
    ]
  },
  "parque-fluvial-turia-masia-traver": {
    mejor: [
      "Ideal para perros mayores",
      "Terreno muy fácil y llano",
      "Muy accesible para escapada rápida"
    ],
    peor: ["Correa obligatoria todo el recorrido", "Sombra solo moderada"],
    resumen:
      "La ruta Parque Fluvial del Turia - Masia de Traver con perro Valencia es un paseo lineal de 5,5 km junto al cauce del Turia, ideal para principiantes y perros mayores. Ofrece sombra moderada y acceso al agua en diversos puntos.",
    descripcion:
      "Este tramo del Parque Fluvial del Turia comienza en la zona de la Masia de Traver y sigue el curso del rÃ­o a lo largo de 5,5 km. La dificultad es baja y cuenta con un desnivel mÃ­nimo de 56 m, por lo que resulta perfecto para personas que se inician en el senderismo con su perro o para animales senior.\n\nA lo largo del recorrido encontrarÃ¡s zonas de ribera con sombra moderada y numerosos accesos al agua para que tu perro pueda remojarse. El camino es ancho y transitado por ciclistas y corredores, asÃ­ que conviene compartir el espacio con civismo. El acceso desde Valencia es rÃ¡pido, apenas media hora en coche, y hay aparcamiento disponible en la Masia de Traver.\n\nEste tramo del parque forma parte del sendero de gran recorrido que une Valencia con la comarca del Camp de Turia y, aunque no tiene grandes desniveles, permite disfrutar de la vegetaciÃ³n de ribera y de los sonidos del agua.",
    consejos: [
      "MantÃ©n a tu perro atado, ya que en el parque la correa es obligatoria.",
      "Lleva toalla y juguetes acuÃ¡ticos para que pueda refrescarse en las zonas de baÃ±o.",
      "Aprovecha la sombra moderada para pasear en verano, pero evita las horas de mÃ¡xima insolacion.",
      "Presta atenciÃ³n a ciclistas y corredores; es una ruta popular, asÃ­ que respeta el paso y no invadas todo el camino.",
      "Los perros mayores agradeceran el terreno llano y la proximidad al agua; adapta el ritmo a su condiciÃ³n fÃ­sica."
    ],
    mejorEpoca:
      "La ruta es apta durante todo el aÃ±o y especialmente en verano gracias a la sombra moderada y al acceso al agua. Primavera y otoÃ±o ofrecen temperaturas agradables y menor afluencia de gente.",
    advertencias:
      "Aunque el sendero es fÃ¡cil, en Ã©poca de lluvias el nivel del rÃ­o puede subir y anegar algunos accesos; infÃ³rmate antes de ir. El riesgo de procesionaria es bajo, pero vigila a tu perro en las zonas de pinos.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, la ruta estÃ¡ pensada para ellos." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, el rÃ­o Turia proporciona numerosos puntos de agua." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, la normativa del parque obliga a llevar a los perros atados." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Bajo. Conviene supervisar a tu perro y evitar las pinadas durante los meses de riesgo." }
    ]
  },
  "bunol-molino-luz-alborache": {
    mejor: [
      "Río accesible en muchos puntos",
      "Perro puede ir suelto",
      "Se disfruta mejor con calor"
    ],
    peor: ["Sombra solo moderada"],
    resumen:
      "La ruta BuÃ±ol - Molino de la Luz - Alborache con perro Valencia es un circuito de 8,5 km que discurre junto al rÃ­o BuÃ±ol y por los alrededores de Alborache. Su dificultad es fÃ¡cil y permite a los perros disfrutar del agua en varios puntos.",
    descripcion:
      "El itinerario sale de BuÃ±ol y enlaza con el Molino de la Luz, siguiendo el cauce hasta la vecina localidad de Alborache. Son 8,5 km de recorrido con apenas 137 m de desnivel, lo que lo hace accesible a la mayorÃ­a de personas y perros.\n\nEl rÃ­o BuÃ±ol acompaÃ±a gran parte del trayecto y ofrece varios lugares donde los perros pueden beber y refrescarse. La sombra es moderada y el acceso desde Valencia dura unos 40 minutos en coche. El regreso al punto de inicio se hace por senderos seÃ±alizados que atraviesan huertas y campos.\n\nAdemÃ¡s de ser un paseo agradable, esta ruta es apta para perros de cualquier condiciÃ³n fÃ­sica. Los caminos son anchos y sin dificultades tÃ©cnicas, por lo que se puede disfrutar de un dÃ­a tranquilo en la naturaleza.",
    consejos: [
      "Aunque la correa no es obligatoria, es recomendable llevarla para respetar a otros senderistas y a la fauna local.",
      "Aprovecha los mÃºltiples accesos al rÃ­o para que tu perro se hidrate y se refresque.",
      "Lleva calzado cÃ³modo y evita dÃ­as muy calurosos; aunque hay sombra moderada, algunas partes estÃ¡n expuestas al sol.",
      "Ideal para perros mayores o con menos energia debido a su terreno llano y su escaso desnivel.",
      "Recoge los residuos y respeta las zonas de cultivo que atraviesa el camino."
    ],
    mejorEpoca:
      "Gracias al agua abundante y a la sombra moderada, la ruta se puede realizar durante todo el aÃ±o y es apta en verano. Primavera y otoÃ±o ofrecen un entorno mÃ¡s verde y temperaturas agradables.",
    advertencias:
      "Durante los fines de semana puede haber mÃ¡s gente, asÃ­ que si tu perro se pone nervioso conviene ir entre semana. El riesgo de procesionaria es medio; vigila los pinos y evita la ruta en plena temporada.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, y la correa no es obligatoria." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, el rÃ­o BuÃ±ol estÃ¡ accesible en varios puntos." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No, pero se recomienda llevarla por prudencia." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en Ã©poca de orugas y mantÃ©n a tu perro alejado de las pinadas." }
    ]
  },
  "embalse-bellus": {
    mejor: [
      "Terreno llano y muy cómodo",
      "Ideal para perros mayores",
      "Perro puede ir suelto"
    ],
    peor: ["Muy poca sombra"],
    resumen:
      "La ruta Embalse de Bellus con perro Valencia es un recorrido circular de 5,3 km alrededor del embalse que ofrece agua y vistas al rÃ­o Albaida. Es fÃ¡cil y apta para perros mayores gracias a su terreno llano.",
    descripcion:
      "Construido en 1995 sobre el rÃ­o Albaida, el embalse de Bellus cuenta con un sendero perimetral de 5,3 km y 57 m de desnivel. La dificultad es baja, por lo que resulta perfecta para personas con poco entrenamiento y perros con movilidad reducida.\n\nEl recorrido ofrece agua en todo momento y, aunque la sombra es escasa, la brisa del embalse ayuda a suavizar las temperaturas. Se tarda alrededor de 60 minutos en llegar desde Valencia en coche y hay aparcamiento cercano.\n\nLa ruta permite disfrutar de la tranquilidad del embalse y de la avifauna que lo habita. Es un lugar ideal para pasear en compaÃ±Ã­a de tu perro sin prisas y con amplias vistas a la sierra de la Costera.",
    consejos: [
      "Lleva suficiente agua para tu perro a pesar de estar junto al embalse; no siempre es recomendable que beban directamente.",
      "Aprovecha las zonas de sombra que encuentres, ya que son pocas y el sol puede ser intenso.",
      "Al ser un terreno llano, es ideal para perros mayores; ajusta el ritmo segÃºn su estado fÃ­sico.",
      "La correa no es obligatoria, pero conviene usarla en los tramos cercanos a la carretera o a zonas con fauna.",
      "Lleva bolsas para recoger los desechos y respeta las normas del embalse."
    ],
    mejorEpoca:
      "La ruta es apta en verano gracias a la presencia de agua, aunque la poca sombra recomienda realizarla en las primeras horas del dÃ­a o al atardecer. OtoÃ±o y primavera ofrecen temperaturas mÃ¡s suaves.",
    advertencias:
      "En dÃ­as ventosos el agua puede mojar el sendero y hacerlo resbaladizo. El riesgo de procesionaria es bajo, pero hay pinadas cercanas a algunas zonas.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, los perros pueden disfrutar libremente del paseo." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, el embalse estÃ¡ presente durante toda la ruta." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No es obligatoria, aunque se aconseja en los tramos con fauna o cerca del aparcamiento." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Bajo. Vigila las zonas arboladas en temporada y evita las orugas." }
    ]
  },
  "gorgo-escalera-anna": {
    mejor: [
      "Pozas naturales muy agradables",
      "Perro puede bañarse",
      "Perro puede ir suelto"
    ],
    peor: ["Escaleras incómodas con perro", "Sombra solo moderada"],
    resumen:
      "La ruta Gorgo de la Escalera (Anna) con perro Valencia es un corto recorrido lineal de 2,5 km hasta unas pozas naturales de aguas cristalinas. Su dificultad es baja y dispone de sombra moderada, lo que la convierte en una escapada refrescante.",
    descripcion:
      "El sendero comienza cerca del pueblo de Anna y se dirige hacia el paraje del Gorgo de la Escalera. Son solo 2,5 km de ida y vuelta con un desnivel de unos 120 m. La mayor parte del recorrido discurre junto a barrancos y en suave descenso hasta las pozas.\n\nEn el gorgo encontrarÃ¡s piscinas naturales donde los perros pueden nadar y refrescarse bajo la sombra moderada de la vegetaciÃ³n de ribera. El acceso desde Valencia dura unos 70 minutos y cuenta con aparcamiento cercano.\n\nAunque la ruta es corta, el desnivel de vuelta puede resultar cansado; lleva agua para ti y tu perro y toma descansos en las zonas de sombra.",
    consejos: [
      "Deja que tu perro disfrute del baÃ±o en las pozas, pero controla que no moleste a otros visitantes.",
      "La correa no es obligatoria, pero es recomendable en los tramos de escalera o cerca de precipicios.",
      "Utiliza calzado antideslizante para bajar a las pozas, ya que el terreno puede estar hÃºmedo.",
      "Evita las horas puntas de verano para encontrar el paraje menos concurrido y disfrutar del agua con tranquilidad.",
      "Lleva una toalla para secar a tu perro tras el baÃ±o y evita que suba al coche mojado."
    ],
    mejorEpoca:
      "Al contar con agua abundante y sombra, es una ruta muy apta para verano. Primavera y otoÃ±o tambiÃ©n son recomendables por la tranquilidad del paraje.",
    advertencias:
      "El acceso a las pozas tiene escaleras empinadas; presta atenciÃ³n para que tu perro no resbale. El riesgo de procesionaria es bajo, pero vigila los pinos en la subida.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, y pueden baÃ±arse en el gorgo." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, hay pozas naturales con agua." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No es obligatoria, aunque es aconsejable en las zonas de escaleras." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Bajo. Sin embargo, conviene evitar la zona en temporada de orugas." }
    ]
  },
  "cueva-turche": {
    mejor: [
      "Cascada muy vistosa al final",
      "Zona de baño agradable",
      "Buena opción para calor"
    ],
    peor: ["Muy concurrida en verano", "Correa obligatoria todo el recorrido"],
    resumen:
      "La ruta Cueva Turche (BuÃ±ol) con perro Valencia es un corto paseo de 1,5 km que conduce a una cascada y a una zona de baÃ±o en un entorno natural. Es fÃ¡cil y muy frecuentada en verano.",
    descripcion:
      "Desde el aparcamiento de la Cueva Turche, el sendero desciende suavemente durante 1,5 km hasta llegar a la cueva y a su impresionante cascada de unos 60 m. El desnivel es de aproximadamente 50 m, por lo que la ruta es apta para todos los pÃºblicos.\n\nEl camino transcurre entre pinos y vegetaciÃ³n de ribera que ofrecen sombra moderada. Al llegar al final se encuentran la cascada y una zona de baÃ±o donde es posible refrescarse. El acceso desde Valencia dura unos 40 minutos y la correa es obligatoria durante el recorrido.\n\nEn verano suele haber mucha gente, por lo que se recomienda acudir a primera hora del dÃ­a o en temporada baja para disfrutar del lugar con tranquilidad.",
    consejos: [
      "MantÃ©n a tu perro atado durante toda la ruta; es una zona muy visitada.",
      "Lleva correa corta para controlar mejor a tu perro en los tramos estrechos y cercanos al precipicio.",
      "Evita los fines de semana y los meses de verano, ya que la afluencia es muy alta.",
      "Deja que tu perro se refresque en la zona de baÃ±o, pero respeta a otros banistas y no permitas que salpique demasiado.",
      "Lleva calzado con agarre; la bajada puede estar humeda y resbaladiza."
    ],
    mejorEpoca:
      "La ruta es apta en verano gracias a la presencia de agua y sombra moderada, pero la mejor Ã©poca para disfrutarla sin aglomeraciones es la primavera o el otoÃ±o.",
    advertencias:
      "Es un lugar muy concurrido; si tu perro se estresa con las multitudes, busca horarios tranquilos. El riesgo de procesionaria es medio; extrema la precauciÃ³n entre enero y mayo.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pero deben ir atados." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, hay una zona de baÃ±o en la base de la cascada." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, es obligatoria durante todo el recorrido." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en temporada de orugas y vigila los pinos." }
    ]
  },
  "rÃ­o-sellent-bolbaite": {
    mejor: [
      "Muchísima sombra durante la ruta",
      "Perro puede ir suelto",
      "Muy tranquila entre semana"
    ],
    peor: ["Muy sencilla si buscáis reto"],
    resumen:
      "La ruta Rio Sellent (Bolbaite) con perro Valencia es un corto trayecto de 2 km ideal para los dÃ­as calurosos gracias a la abundante sombra y al agua fresca del rÃ­o. Es fÃ¡cil y permite dejar al perro suelto.",
    descripcion:
      "El sendero discurre paralelo al rÃ­o Sellent y permite disfrutar de sus aguas cristalinas y de un entorno muy sombreado. Con apenas 50 m de desnivel y 2 km de longitud, es perfecto para pasear con perros de todas las edades.\n\nDesde Valencia se tardan unos 75 minutos en llegar a Bolbaite y el acceso es sencillo. El camino atraviesa pequeÃ±as Ã¡reas de picnic y zonas de baÃ±o donde los perros pueden nadar libremente.\n\nAunque se trata de un recorrido corto, invita a pasar el dÃ­a en la ribera, jugando con el perro y descansando a la sombra de los Ã¡rboles.",
    consejos: [
      "Deja a tu perro suelto en las zonas de baÃ±o; la correa no es obligatoria.",
      "Aprovecha la abundante sombra para visitar la ruta en verano.",
      "Lleva repelente de insectos y revisa a tu perro despuÃ©s del baÃ±o para evitar parÃ¡sitos.",
      "Visita entre semana para encontrar el lugar mÃ¡s tranquilo, ya que los fines de semana puede haber mÃ¡s gente.",
      "Lleva comida y agua potable; aunque hay agua en el rÃ­o, siempre conviene tener agua limpia a mano."
    ],
    mejorEpoca:
      "Al contar con mucha sombra y agua, es una de las mejores rutas para el verano. En primavera y otoÃ±o tambiÃ©n es agradable, con menos visitantes.",
    advertencias:
      "Algunas zonas junto al rÃ­o pueden estar resbaladizas; vigila a tu perro para evitar caÃ­das. El riesgo de procesionaria es bajo.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, y pueden ir sueltos." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, el rÃ­o Sellent proporciona agua abundante." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No, la correa no es obligatoria." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Bajo. No obstante, supervisa a tu perro en las zonas con pinos." }
    ]
  },
  "ruta-albufera-saler": {
    mejor: [
      "Dunas y pinar muy distintos",
      "Espacio natural muy especial",
      "La escapada más cercana"
    ],
    peor: ["Poca sombra en casi todo", "Correa obligatoria todo el recorrido"],
    resumen:
      "La ruta Ruta Albufera - Dehesa del Saler con perro Valencia recorre 7 km dentro del Parque Natural de la Albufera, muy cerca de la ciudad. Es fÃ¡cil, pero la falta de sombra en verano y la obligatoriedad de llevar correa exigen planificar bien la visita.",
    descripcion:
      "Este itinerario circular de 7 km discurre por dunas y pinares de la Dehesa del Saler, bordeando la laguna y las playas del parque. El desnivel es mÃ­nimo (20 m), por lo que el paseo es accesible para todos. Se tarda unos 20 minutos en llegar en coche desde Valencia, lo que la convierte en una de las rutas mÃ¡s cercanas a la ciudad.\n\nA lo largo del recorrido hay zonas de agua y marjales que pueden servir para refrescar a tu perro. No obstante, la sombra es escasa y el calor en verano puede ser intenso. La correa es obligatoria en todo momento, ya que se trata de un Espacio Natural Protegido.\n\nAdemas de caminar, puedes aprovechar para acercarte a las playas aptas para perros en temporada baja, siempre respetando las normas del parque.",
    consejos: [
      "Lleva correa y usala durante todo el recorrido; es un requisito del parque.",
      "Evita realizar la ruta en pleno verano, ya que no hay sombra y las temperaturas pueden ser altas.",
      "Lleva agua abundante y protector solar para ti y tu perro; no hay fuentes en el camino.",
      "Aprovecha la cercania a Valencia para visitarla entre semana y evitar las multitudes.",
      "Respeta las Ã¡reas protegidas y no permitas que tu perro entre en zonas de nidificaciÃ³n o dunas restringidas."
    ],
    mejorEpoca:
      "La mejor Ã©poca es el otoÃ±o y la primavera, cuando las temperaturas son suaves y el sol no es tan intenso. La ruta no estÃ¡ recomendada en verano.",
    advertencias:
      "El fuerte sol y la falta de sombra pueden provocar golpes de calor en tu perro; planifica la visita y evita las horas centrales del dÃ­a. El riesgo de procesionaria es bajo, pero hay pinos en la zona.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pero deben ir siempre con correa." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, hay zonas de marjal y laguna, aunque conviene llevar agua potable." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, la correa es obligatoria." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Bajo. Sin embargo, vigila a tu perro en Ã¡reas con pinares." }
    ]
  },
  "rÃ­o-turia-manises-vilamarxant": {
    mejor: [
      "Muy accesible y cómoda",
      "Agua junto al recorrido",
      "Dentro del Parque Natural"
    ],
    peor: ["Frecuentada por ciclistas", "Correa obligatoria todo el recorrido"],
    resumen:
      "La ruta Rio Turia - Manises a Vilamarxant con perro Valencia recorre 10 km de senda lineal dentro del Parque Natural del Turia. Es un paseo fÃ¡cil con sombra moderada y numerosos accesos al agua.",
    descripcion:
      "Este tramo del rÃ­o Turia une las localidades de Manises y Vilamarxant a lo largo de 10 km con apenas 60 m de desnivel. Se puede hacer ida y vuelta o usar transporte para regresar. El acceso desde Valencia es rÃ¡pido, unos 20 minutos en coche.\n\nLa senda discurre por un paraje muy frecuentado por senderistas y ciclistas. Hay sombra moderada gracias a los Ã¡rboles de ribera y muchos puntos para que los perros se remojen en el agua. La correa es obligatoria segÃºn la normativa del parque.\n\nIdeal para paseos largos y tranquilos, esta ruta permite disfrutar del rÃ­o sin grandes desniveles. Puede ser especialmente agradable en los meses cÃ¡lidos por la presencia de agua y sombra.",
    consejos: [
      "Lleva correa y mantenla puesta en todo momento.",
      "Procura realizar la ruta entre semana para evitar el trÃ¡nsito de ciclistas y corredores en horas punta.",
      "Deja que tu perro se refresque en el rÃ­o, pero vigila las corrientes y evita las zonas profundas.",
      "Lleva agua potable y cuencos para tu perro, ya que el agua del rÃ­o puede estar turbia en algunos tramos.",
      "Recoge los residuos y respeta la fauna y flora del parque."
    ],
    mejorEpoca:
      "Con sombra moderada y abundancia de agua, esta ruta es apta todo el aÃ±o y especialmente agradable en verano.",
    advertencias:
      "En dÃ­as de lluvia el caudal del rÃ­o puede aumentar y dificultar el acceso a algunas zonas. El riesgo de procesionaria es bajo, pero existe en zonas de pinar.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, es una ruta pensada para ellos." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, el rÃ­o Turia ofrece agua en casi todo el recorrido." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, la normativa del parque exige que los perros vayan atados." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Bajo. MantÃ©n la precauciÃ³n en zonas con pinos." }
    ]
  },
  "cruz-montepicayo": {
    mejor: [
      "Vistas 360º desde la cima",
      "Escapada montañera muy cerca"
    ],
    peor: ["Terreno muy pedregoso", "Poca sombra casi siempre"],
    resumen:
      "La ruta Cruz de Montepicayo (GR-10) con perro Valencia es un itinerario circular de 5,1 km en la Sierra Calderona con desnivel moderado y terreno pedregoso. No hay agua en el recorrido y la correa es obligatoria.",
    descripcion:
      "Esta ruta parte de la Sierra Calderona y asciende hasta la Cruz de Montepicayo siguiendo el sendero GR-10. Con 5,1 km y 287 m de desnivel, la dificultad es media y el terreno es muy pedregoso. El acceso desde Valencia dura unos 30 minutos.\n\nNo hay puntos de agua ni fuentes en todo el recorrido, por lo que es imprescindible llevar agua suficiente para ti y tu perro. La sombra es escasa y la ruta no es apta en verano.\n\nEl esfuerzo se ve recompensado con panorÃ¡micas de 360 grados sobre la sierra desde la cruz. A pesar de su corta longitud, se requiere buena forma fÃ­sica debido al desnivel acumulado.",
    consejos: [
      "Lleva abundante agua para tu perro; no hay fuentes en el recorrido.",
      "Usa correa durante todo el trayecto, ya que es obligatoria en la zona.",
      "Evita hacer la ruta en dÃ­as de calor o en pleno verano.",
      "Utiliza calzado adecuado para terrenos pedregosos y comprueba las almohadillas de tu perro al finalizar.",
      "Comienza temprano para disfrutar de las vistas con buena luz y temperaturas mÃ¡s frescas."
    ],
    mejorEpoca:
      "La ruta es recomendable en otoÃ±o, invierno y primavera, cuando las temperaturas son mÃ¡s bajas y el sol no castiga tanto. No es apta en verano.",
    advertencias:
      "El terreno es muy pedregoso; vigila las patas de tu perro y no olvides agua suficiente. El riesgo de procesionaria es alto, asÃ­ que evita la ruta de enero a mayo.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pero deben ir con correa." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "No, no hay agua en el recorrido." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, es obligatoria." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita la ruta en temporada de orugas y revisa a tu perro despuÃ©s de la excursiÃ³n." }
    ]
  },
  "acueducto-romano-pena-cortada": {
    mejor: [
      "Acueducto romano del siglo I",
      "Paso histórico muy singular",
      "Perro puede ir suelto"
    ],
    peor: ["Paso estrecho sin protección", "Sin agua en ruta"],
    resumen:
      "La ruta Acueducto Romano de la PeÃ±a Cortada con perro Valencia es un circuito de 6,6 km que combina naturaleza y patrimonio. Su dificultad es media, no hay agua y la sombra es moderada.",
    descripcion:
      "Esta excursiÃ³n se adentra en el Paraje Natural de los Serranos para visitar el impresionante acueducto romano de PeÃ±a Cortada. La ruta circular de 6,6 km tiene un desnivel de 324 m y una dificultad media. Se llega en aproximadamente 65 minutos en coche desde Valencia.\n\nEl recorrido pasa por tramos excavados en roca y culmina en el acueducto, donde hay un paso estrecho de unos 2 m sin protecciÃ³n. No hay fuentes ni agua en todo el itinerario, por lo que conviene ir bien preparado. La sombra es moderada gracias a la vegetaciÃ³n mediterrÃ¡nea.\n\nAunque la correa no es obligatoria, es recomendable usarla en la zona del acueducto por seguridad. La mezcla de senderos y patrimonio histÃ³rico convierte esta ruta en una experiencia enriquecedora.",
    consejos: [
      "Lleva agua abundante para ti y tu perro; no hay puntos de agua en todo el recorrido.",
      "En el paso estrecho del acueducto, sujeta a tu perro con la correa para evitar caÃ­das.",
      "Evita las horas de mayor calor y lleva protecciÃ³n solar; la ruta no es apta en verano.",
      "Utiliza calzado adecuado para tramos de roca y controla a tu perro en los tÃºneles.",
      "Respeta el patrimonio y no dejes que tu perro orine en las estructuras historicas."
    ],
    mejorEpoca:
      "La ruta es ideal en otoÃ±o e invierno, cuando las temperaturas son mÃ¡s bajas. No es apta en verano debido al calor y a la falta de agua.",
    advertencias:
      "El paso por el acueducto es estrecho y no tiene barandillas; extrema la precauciÃ³n. El riesgo de procesionaria es alto, por lo que conviene evitar la ruta en temporada de orugas.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pueden ir sin correa, aunque es recomendable usarla en la zona del acueducto." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "No, no hay agua en la ruta." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No obligatoria, pero aconsejable en tramos peligrosos." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Alto. Mejor evitar los meses de enero a mayo." }
    ]
  },
  "gatova-pico-aguila-molino-ceja": {
    mejor: [
      "Vistas panorámicas de la Calderona",
      "Molino histórico en la ruta",
      "Buen plan si buscáis montaña"
    ],
    peor: ["Poca sombra casi siempre", "Sin agua en ruta"],
    resumen:
      "La ruta GÃ¡tova - Pico del Ãguila - Molino de la Ceja con perro Valencia es un circuito de 8,2 km con desnivel pronunciado y sin agua. Su dificultad es media y atraviesa zonas con poca sombra.",
    descripcion:
      "Partiendo del municipio de GÃ¡tova, el sendero asciende hacia el Pico del Ãguila y continÃºa hasta el Molino de la Ceja. El recorrido totaliza 8,2 km y 371 m de desnivel, lo que supone un esfuerzo moderado para perros acostumbrados al ejercicio. El acceso desde Valencia se realiza en unos 55 minutos.\n\nNo hay agua disponible en el camino, por lo que es imprescindible llevar la suficiente para tu perro. La sombra es poca, y la ruta no es apta en verano debido al calor. Desde la cima se obtienen vistas panorÃ¡micas de la Sierra Calderona.\n\nLa experiencia combina senderos en buen estado con tramos mÃ¡s rocosos cercanos al pico. Es una buena opciÃ³n para perros activos que disfrutan de rutas de montaÃ±a.",
    consejos: [
      "Lleva agua en abundancia para ti y tu perro, ya que no hay fuentes.",
      "MantÃ©n a tu perro atado, sobre todo en los tramos cercanos al pico y al molino.",
      "Evita realizar la ruta en verano y apuesta por otoÃ±o, invierno o primavera.",
      "Controla las almohadillas de tu perro al caminar por zonas rocosas y detente si notas signos de cansancio.",
      "Disfruta de las vistas desde el Pico del Ãguila y aprovecha para hacer fotos, pero no permitas que tu perro se acerque al borde."
    ],
    mejorEpoca:
      "La ruta es recomendable de otoÃ±o a primavera. No es apta en verano debido a la ausencia de agua y sombra.",
    advertencias:
      "Es una ruta sin agua y con poca sombra, por lo que el calor puede ser un riesgo serio para tu perro. El riesgo de procesionaria es alto, asÃ­ que evita la ruta en temporada de orugas.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pero conviene llevarlos atados." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "No, no hay agua disponible." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No obligatoria, pero recomendable en tramos peligrosos." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita la ruta de enero a mayo y revisa a tu perro tras la caminata." }
    ]
  },
  "ruta-pantaneros-loriguilla": {
    mejor: [
      "Zona protegida muy atractiva",
      "Agua en varios tramos",
      "Alternativa menos típica a Chulilla"
    ],
    peor: ["Poca sombra en casi todo", "Correa obligatoria todo el recorrido"],
    resumen:
      "La ruta de los Pantaneros - Embalse de Loriguilla con perro Valencia es un itinerario lineal de 7,9 km que atraviesa una zona protegida y ofrece acceso al agua, aunque con poca sombra. Su dificultad es media y se desaconseja en verano.",
    descripcion:
      "Esta ruta alternativa a los Puentes Colgantes se adentra en la zona protegida de Los Calderones y llega hasta el embalse de Loriguilla. Con 7,9 km de longitud y 287 m de desnivel, la dificultad es media. Se tarda unos 50 minutos en llegar desde Valencia.\n\nEl recorrido sigue senderos que bordean el rÃ­o y pasan por paisajes de montaÃ±a, permitiendo a los perros beber en algunos puntos de agua. La sombra es escasa y el calor puede ser intenso en verano, por lo que es mejor realizarla en estaciones frescas. La correa es obligatoria por tratarse de una zona protegida.\n\nAunque no es tan popular como los Puentes Colgantes, esta ruta ofrece tranquilidad y contacto directo con la naturaleza.",
    consejos: [
      "Lleva la correa puesta durante todo el recorrido, ya que es obligatoria.",
      "Asegurate de llevar agua adicional; aunque hay algunos puntos de agua, no son suficientes para todo el camino.",
      "Evita el verano; la sombra es poca y la ruta no es apta en los meses mÃ¡s calurosos.",
      "Respeta la zona protegida y no dejes el camino marcado para preservar la flora.",
      "SÃ­ tu perro disfruta de nadar, aprovecha las zonas de rÃ­o antes de llegar al embalse."
    ],
    mejorEpoca:
      "OtoÃ±o, invierno y primavera son las Ã©pocas ideales. No se recomienda en verano debido a la falta de sombra y al calor.",
    advertencias:
      "Es una zona protegida; respeta la flora y fauna y no dejes residuos. El riesgo de procesionaria es alto, por lo que conviene evitar los meses de enero a mayo.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pero deben ir con correa." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, aunque los puntos de agua son limitados." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, es obligatoria." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita la ruta entre enero y mayo." }
    ]
  },
  "ontinyent-senda-enginyers": {
    mejor: [
      "Buena para perros entrenados",
      "Perfil útil para entrenamiento",
      "Perro puede ir suelto"
    ],
    peor: ["Sin agua en ruta", "Tramos de asfalto"],
    resumen:
      "La ruta Ontinyent - Senda dels Enginyers con perro Valencia es un circuito de 9,8 km con desnivel moderado y sin puntos de agua. Su dificultad es media y combina tramos de asfalto y sendero.",
    descripcion:
      "Este itinerario parte de las afueras de Ontinyent y recorre 9,8 km con 312 m de desnivel. La ruta mezcla caminos asfaltados con senderos de montaÃ±a, lo que la convierte en una buena opciÃ³n de entrenamiento para perros activos. El acceso desde Valencia dura unos 75 minutos.\n\nNo hay agua en el camino, pero la sombra es moderada gracias a la vegetaciÃ³n de ribera y a los tramos de bosque. La correa no es obligatoria, aunque se recomienda tener control sobre el perro en las zonas de asfalto. La ruta no es apta en verano debido al calor.\n\nLa diversidad de terrenos ofrece un estimulo mental y fÃ­sico para perros acostumbrados a caminar distancias mÃ¡s largas.",
    consejos: [
      "Lleva agua suficiente para ti y tu perro, ya que no hay fuentes en el recorrido.",
      "Aprovecha las zonas de sombra para descansar y ofrecer agua a tu perro.",
      "Ajusta la correa en los tramos de asfalto para evitar peligros con vehiculos.",
      "Evita la ruta en verano; no es apta para altas temperaturas.",
      "Ideal para perros activos que necesitan recorrer distancias largas y combinar terrenos."
    ],
    mejorEpoca:
      "La mejor Ã©poca es otoÃ±o, invierno y primavera, cuando las temperaturas son suaves y la ruta se puede disfrutar sin calor. No apta en verano.",
    advertencias:
      "Debido a la longitud y al desnivel, asegÃºrate de que tu perro estÃ© en buena condiciÃ³n fÃ­sica. El riesgo de procesionaria es medio.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, y pueden ir sin correa en la mayor parte del recorrido." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "No, no hay puntos de agua." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No obligatoria, pero recomendable en tramos de asfalto." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Medio. Vigila las zonas con pinos y evita los meses de mÃ¡xima actividad." }
    ]
  },
  "sierra-aledua-pico-besori": {
    mejor: [
      "Vistas sobre la Ribera Alta",
      "Perro puede ir suelto",
      "Ruta para perros con fondo"
    ],
    peor: ["Bajadas técnicas sobre piedra", "Sin agua en ruta"],
    resumen:
      "La ruta Sierra de Aledua - Pico Besori con perro Valencia es un circuito de 8,5 km con dificultad media, sin agua y sombra moderada. La senda es tÃ©cnica con bajadas en piedra.",
    descripcion:
      "La ruta parte de la Ribera Alta y asciende al Pico Besori, recorriendo 8,5 km con 288 m de desnivel. Se llega en unos 40 minutos desde Valencia. Es una senda con tramos tÃ©cnicos de piedra suelta y descensos que requieren buena forma fÃ­sica y atenciÃ³n.\n\nNo hay fuentes ni puntos de agua, por lo que es esencial llevar la suficiente para el perro. La sombra es moderada gracias a algunas zonas boscosas, pero la ruta no es apta en verano. La correa no es obligatoria, aunque se aconseja en los tramos tÃ©cnicos.\n\nDesde la cima se obtienen amplias vistas de la Ribera y de la sierra. La combinacion de pendientes y bajadas la convierte en una ruta entretenida para perros con experiencia.",
    consejos: [
      "Lleva agua abundante para ti y tu perro; no hay fuentes.",
      "Usa arnÃ©s y correa en los descensos tÃ©cnicos para mejorar el control.",
      "Evita la ruta en verano; no es apta en los dÃ­as mÃ¡s calurosos.",
      "Vigila las almohadillas de tu perro al caminar sobre piedras sueltas.",
      "Empieza temprano para aprovechar la sombra moderada y las temperaturas frescas."
    ],
    mejorEpoca:
      "La ruta es adecuada en otoÃ±o, invierno y primavera. No se recomienda en verano debido al calor y a la falta de agua.",
    advertencias:
      "Al ser un itinerario tÃ©cnico, asegÃºrate de que tu perro tiene experiencia y buena condiciÃ³n fÃ­sica. El riesgo de procesionaria es alto; evita la ruta en temporada de orugas.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, y pueden ir sueltos en gran parte del recorrido." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "No, no hay agua disponible." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No obligatoria, pero recomendable en los tramos tÃ©cnicos." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita los meses de enero a mayo y revisa a tu perro tras la excursiÃ³n." }
    ]
  },
  "canones-jucar-jalance": {
    mejor: [
      "Cañones del Júcar impresionantes",
      "Perro puede ir suelto",
      "Ideal si buscáis ruta larga"
    ],
    peor: ["La más exigente por duración", "Mejor fuera de calor fuerte"],
    resumen:
      "La ruta Canones del JÃºcar (Jalance) con perro Valencia es un recorrido lineal de 11 km que sigue el rÃ­o JÃºcar y ofrece sombra moderada y numerosos accesos al agua. Su dificultad es media y requiere buena condiciÃ³n fÃ­sica.",
    descripcion:
      "Este itinerario recorre los espectaculares canones excavados por el rÃ­o JÃºcar en la comarca de Ayora-Cofrentes. Con 11 km de recorrido y 400 m de desnivel, es la ruta mÃ¡s larga del listado y se tarda unos 90 minutos en llegar desde Valencia.\n\nEl sendero sigue de cerca el cauce del JÃºcar, ofreciendo muchos puntos donde los perros pueden beber y refrescarse. La sombra es moderada gracias a los Ã¡rboles de ribera. La correa no es obligatoria, pero se recomienda llevarla en tramos escarpados o concurridos.\n\nPor su longitud y desnivel, es adecuada para perros con buena condiciÃ³n fÃ­sica. La ruta no es apta en verano debido al calor y a la exposicion en algunos tramos.",
    consejos: [
      "Planifica bien la ruta y lleva agua y alimento para tu perro; aunque hay agua en el rÃ­o, conviene tener agua potable.",
      "Evita la ruta en verano; las temperaturas y la longitud la hacen exigente.",
      "MantÃ©n a tu perro controlado en los tramos de caÃ±Ã³n y cerca de acantilados.",
      "Permite que se refresque en los puntos de agua, pero vigila las corrientes.",
      "Ideal para perros con buena forma fÃ­sica; si tu perro no estÃ¡ acostumbrado a distancias largas, elige una ruta mÃ¡s corta."
    ],
    mejorEpoca:
      "La ruta es aconsejable en otoÃ±o y primavera, cuando las temperaturas son suaves y el caudal del rÃ­o permite disfrutar del paisaje sin riesgos. No se recomienda en verano.",
    advertencias:
      "La longitud y la exigencia fÃ­sica requieren una buena planificaciÃ³n. El riesgo de procesionaria es medio; vigila a tu perro en las zonas de pinos.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, siempre que tengan buena condiciÃ³n fÃ­sica y se respeten las normas del paraje." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, el rÃ­o JÃºcar ofrece agua en muchos puntos." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No es obligatoria, pero recomendable en tramos escarpados." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Medio. Vigila las zonas arboladas y evita la ruta en temporada de orugas." }
    ]
  },
  "salto-novia-navajas": {
    mejor: [
      "Cascada de 30 metros",
      "Río Palancia junto al camino",
      "Ruta fácil para casi todos"
    ],
    peor: ["Muy concurrida en fin de semana", "Correa obligatoria todo el recorrido"],
    resumen:
      "La ruta Salto de la Novia (Navajas) con perro Valencia es un paseo lineal de 3 km que conduce a una cascada de 30 m. La dificultad es baja, pero se recomienda llevar correa por la afluencia de visitantes.",
    descripcion:
      "Ubicado en el municipio de Navajas, el Salto de la Novia es uno de los enclaves mÃ¡s conocidos de la comarca. La ruta de 3 km y 100 m de desnivel empieza en el parking del paraje y sigue el cauce del rÃ­o Palancia hasta la cascada de 30 m. Se tarda aproximadamente 60 minutos en llegar desde Valencia.\n\nEl camino discurre por bosques de ribera con sombra moderada y ofrece varias zonas para que los perros se refresquen. La correa es obligatoria en el paraje debido a la afluencia de visitantes, sobre todo los fines de semana. La ruta no es apta en verano debido al calor y a la multitud.\n\nEl entorno es muy popular; se recomienda llegar temprano para evitar colas y disfrutar de la cascada con tranquilidad.",
    consejos: [
      "Lleva correa y mantenla puesta durante toda la visita.",
      "Visita la ruta entre semana o en temporada baja para evitar aglomeraciones.",
      "Permite que tu perro se refresque en el rÃ­o Palancia, pero mantenlo alejado de la base de la cascada por seguridad.",
      "Lleva agua potable; aunque hay agua en el rÃ­o, conviene tener agua limpia siempre.",
      "Respeta las normas del paraje y recoge los residuos."
    ],
    mejorEpoca:
      "Es preferible visitar en otoÃ±o, invierno o primavera, cuando hay menos afluencia y la temperatura es agradable. No se recomienda en verano.",
    advertencias:
      "Las aglomeraciones pueden ser estresantes para algunos perros. El riesgo de procesionaria es medio; evita la ruta entre enero y mayo y vigila a tu perro en las zonas de pinos.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pero deben ir con correa." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, el rÃ­o Palancia ofrece puntos de agua." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, es obligatoria en el paraje." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en temporada de orugas y mantÃ©n a tu perro alejado de los pinos." }
    ]
  },
  "descenso-rÃ­o-fraile": {
    mejor: [
      "Tramo dentro del río",
      "Muy aventurera y diferente",
      "Perro puede ir suelto"
    ],
    peor: ["Solo perros que naden", "Recorrido más exigente técnicamente"],
    resumen:
      "La ruta Descenso del Rio Fraile (Cortes de PallÃ¡s) con perro Valencia es un recorrido lineal de 6 km que combina sendero y descenso por el rÃ­o. Su dificultad es media y es apta en verano, siempre que tu perro sepa nadar.",
    descripcion:
      "Este itinerario parte de las inmediaciones de Cortes de PallÃ¡s y baja hacia el cauce del rÃ­o Fraile. Con 6 km y 200 m de desnivel, se tarda unos 90 minutos en llegar desde Valencia. La peculiaridad es que parte del trayecto se realiza descendiendo por el propio rÃ­o, por lo que solo es adecuado para perros que esten acostumbrados a nadar.\n\nLa ruta cuenta con sombra moderada y varios puntos donde los perros pueden beber y baÃ±arse. La correa no es obligatoria, aunque conviene llevarla y utilizarla en los tramos de acceso o si hay otros excursionistas. La ruta es apta en verano gracias al agua fresca del rÃ­o.\n\nEs recomendable llevar bolsa estanca para proteger objetos de valor y planificar la logÃ­stica del regreso, ya que al tratarse de un descenso lineal puede ser necesario dejar un coche al final.",
    consejos: [
      "Asegurate de que tu perro disfruta y sabe nadar; una parte del recorrido discurre por el rÃ­o.",
      "Usa arnÃ©s para facilitar el agarre en los tramos acuÃ¡ticos.",
      "Lleva una bolsa estanca para proteger el mÃ³vil y la documentaciÃ³n.",
      "Evita realizar la ruta fuera del verano si el agua estÃ¡ muy frÃ­a y puede causar hipotermia a tu perro.",
      "Respeta la fauna del rÃ­o y no dejes residuos en el entorno."
    ],
    mejorEpoca:
      "Esta ruta es especialmente recomendable en verano, cuando el rÃ­o Fraile ofrece un alivio refrescante. En otras estaciones puede resultar demasiado frio.",
    advertencias:
      "El descenso por el rÃ­o puede ser resbaladizo; vigila a tu perro y ayudale en los tramos complicados. El riesgo de procesionaria es bajo.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pero conviene que sepan nadar." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, el rÃ­o ofrece agua abundante." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No obligatoria, pero recomendable en tramos concurridos." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Bajo. AÃºn asÃ­Ã­, vigila las zonas de pinos en los accesos." }
    ]
  },
  "ruta-chera": {
    mejor: [
      "Cascada durante el recorrido",
      "Agradable en meses calurosos"
    ],
    peor: ["Correa obligatoria todo el recorrido", "Nivel medio, no iniciación"],
    resumen:
      "La ruta de Chera con perro Valencia es un circuito de 7 km con dificultad media que incluye una cascada y ofrece sombra moderada y puntos de agua. Es apta en verano siempre que planifiques bien el acceso al agua.",
    descripcion:
      "Situada en la comarca de Hoya de BuÃ±ol, la ruta de Chera combina sendas de montaÃ±a con tramos junto al agua. Con 7 km y 300 m de desnivel, se llega en unos 70 minutos desde Valencia. Una cascada en medio del recorrido aÃ±ade un atractivo adicional.\n\nLa sombra es moderada y hay puntos de agua, pero conviene verificar los tramos de acceso al agua para el perro. La correa es obligatoria y la ruta es apta en verano si se evitan las horas centrales del dÃ­a.\n\nEl camino estÃ¡ bien seÃ±alizado y permite disfrutar de la naturaleza sin grandes dificultades tÃ©cnicas.",
    consejos: [
      "Lleva correa y usala durante todo el recorrido.",
      "Verifica los puntos donde tu perro puede acceder al agua antes de salir y planifica paradas.",
      "Evita las horas de mayor calor incluso en verano; aunque hay agua, la sombra es moderada.",
      "Lleva calzado cÃ³modo y sigue las senalizaciones para no perderte.",
      "Respeta el entorno y no salgas de los caminos marcados."
    ],
    mejorEpoca:
      "La ruta es apta en verano gracias a la presencia de agua, pero tambiÃ©n se disfruta mucho en primavera y otoÃ±o cuando el entorno estÃ¡ mÃ¡s verde.",
    advertencias:
      "Algunos tramos de acceso al agua pueden ser resbaladizos; vigila a tu perro. El riesgo de procesionaria es medio, asÃ­ que evita la ruta en temporada de orugas.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pero deben ir con correa." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, aunque hay que verificar los accesos." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, la correa es obligatoria." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en los meses de mayor actividad de la oruga." }
    ]
  },
  "xativa-cova-negra-bellus": {
    mejor: [
      "Cova Negra prehistórica",
      "90% por senda natural",
      "Fuentes en el recorrido"
    ],
    peor: ["Correa obligatoria todo el recorrido", "Nivel medio, no paseo fácil"],
    resumen:
      "La ruta XÃ tiva - Cova Negra - Bellus con perro Valencia es un circuito de 10 km que combina patrimonio y naturaleza. Hay varias fuentes en el camino y sombra moderada, lo que la hace apta en verano.",
    descripcion:
      "Esta ruta recorre los alrededores de XÃ tiva, siguiendo la senda que conecta la Cova Negra con el embalse de Bellus. Con 10 km de longitud y 350 m de desnivel, presenta una dificultad media. Se tarda unos 60 minutos en llegar desde Valencia.\n\nLa senda es predominantemente de tierra (90 %) y cuenta con varias fuentes para recargar agua. La sombra es moderada y la ruta es apta en verano gracias al acceso al agua y a la vegetaciÃ³n de ribera. La correa es obligatoria.\n\nAdemas de los valores naturales, la ruta atraviesa lugares histÃ³ricos como la Cova Negra, un yacimiento prehistorico. Es una excursiÃ³n variada que combina cultura y naturaleza.",
    consejos: [
      "Lleva correa y usala durante todo el recorrido.",
      "Aprovecha las fuentes para recargar agua, pero lleva tambiÃ©n tu propia provisiÃ³n.",
      "Evita las horas mÃ¡s calurosas del dÃ­a en verano, aunque la ruta es apta gracias a la sombra moderada.",
      "Ten cuidado en los tramos con desnivel y vigila a tu perro en las zonas rocosas.",
      "Respeta el patrimonio arqueolÃ³gico y no permitas que tu perro escarbe en la Cova Negra."
    ],
    mejorEpoca:
      "Aunque es apta en verano gracias al agua, primavera y otoÃ±o ofrecen temperaturas mÃ¡s agradables y menos afluencia.",
    advertencias:
      "El terreno puede resultar resbaladizo tras lluvias; lleva calzado adecuado. El riesgo de procesionaria es medio.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pero deben ir con correa." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, hay varias fuentes." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, la correa es obligatoria." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en temporada de orugas." }
    ]
  },
  "senda-portalet-gandia": {
    mejor: [
      "Formaciones calcáreas muy llamativas",
      "Ruta corta para improvisar",
      "Se hace bien en calor"
    ],
    peor: ["Sin agua en ruta", "Correa obligatoria todo el recorrido"],
    resumen:
      "La ruta Senda del Portalet (Gandia) con perro Valencia es un recorrido lineal de 2 km muy corto y fÃ¡cil. No hay agua, pero dispone de sombra moderada y es ideal como primera salida.",
    descripcion:
      "Situada en la comarca de La Safor, la Senda del Portalet es una excursiÃ³n de 2 km con 50 m de desnivel. Se tarda unos 70 minutos en llegar desde Valencia. La senda discurre por un paraje de formaciones calcÃ¡reas espectaculares.\n\nNo hay puntos de agua en el recorrido, pero la sombra es moderada gracias a la vegetaciÃ³n. La correa es obligatoria. Es una ruta muy corta, ideal para iniciarse en el senderismo con tu perro o como paseo rÃ¡pido en verano.",
    consejos: [
      "Lleva agua para ti y tu perro; no hay fuentes.",
      "Usa correa durante todo el recorrido.",
      "Aprovecha las formaciones calcÃ¡reas para hacer fotos, pero no permitas que tu perro escale por ellas.",
      "Es una ruta corta; aprovecha para complementar el dÃ­a con un paseo por Gandia o por la playa fuera de temporada.",
      "En verano, evita las horas de mayor calor y lleva sombrero y protector solar."
    ],
    mejorEpoca:
      "Gracias a su sombra moderada, es apta en verano, pero primavera y otoÃ±o ofrecen temperaturas mÃ¡s agradables.",
    advertencias:
      "Ruta corta y sencilla, pero sin agua. El riesgo de procesionaria es medio.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pero deben ir atados." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "No, no hay agua disponible." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, es obligatoria." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Medio. Vigila las pinadas y evita la ruta en temporada de orugas." }
    ]
  },
  "ruta-caves-requena": {
    mejor: [
      "Bodegas subterráneas muy singulares",
      "Ruta cultural diferente",
      "Perro puede ir suelto"
    ],
    peor: ["Sin agua en ruta", "Poca sombra en casi todo"],
    resumen:
      "La ruta de les Caves (Requena) con perro Valencia es un paseo cultural de 4 km por el casco histÃ³rico de Requena y sus bodegas subterrÃ¡neas. No hay agua y la sombra es escasa.",
    descripcion:
      "Este recorrido circular de 4 km y 100 m de desnivel explora las antiguas cuevas y bodegas de Requena. Se tarda unos 65 minutos en llegar desde Valencia. Es una ruta diferente, mÃ¡s urbana, que combina historia y enologÃ­a.\n\nNo hay agua natural disponible en el recorrido y la sombra es escasa, asÃ­ que conviene llevar agua para tu perro y evitar las horas de mÃ¡s calor. La correa no es obligatoria, pero se recomienda para respetar a otros visitantes.\n\nEl recorrido permite descubrir las calles empedradas de Requena y visitar las famosas cuevas donde se almacenaba el vino. Es un plan perfecto para combinar con gastronomÃ­a local.",
    consejos: [
      "Lleva agua suficiente para tu perro; no hay fuentes en el camino.",
      "Evita las horas centrales del dÃ­a, especialmente en verano, ya que hay poca sombra.",
      "Aunque la correa no es obligatoria, usala en zonas concurridas o cuando entres en las cuevas.",
      "Aprovecha para aprender sobre la historia de las bodegas, pero recuerda que los perros no pueden entrar a todas las instalaciones.",
      "Disfruta del casco histÃ³rico de Requena y respeta a los vecinos y comercios."
    ],
    mejorEpoca:
      "La ruta se puede hacer en cualquier Ã©poca, pero primavera y otoÃ±o son ideales por las temperaturas templadas. En verano se debe evitar el calor extremo.",
    advertencias:
      "No hay agua natural ni mucha sombra; planifica bien la visita. El riesgo de procesionaria es bajo.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pueden acompaÃ±arte en el recorrido urbano." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "No, no hay agua natural, asÃ­ que debes llevarla." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No obligatoria, pero aconsejable en zonas concurridas." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Bajo. AÃºn asÃ­Ã­, vigila las pinadas en los parques cercanos." }
    ]
  },
  "cova-negra-carcaixent": {
    mejor: [
      "Agua durante el recorrido",
      "Perro puede ir suelto",
      "Sirve para época cálida"
    ],
    peor: ["Datos aún por verificar", "Nivel medio, no paseo fácil"],
    resumen:
      "La ruta Cova Negra (Carcaixent) con perro Valencia es un circuito de 5 km con dificultad media y cuenta con agua y sombra moderada. Los datos estÃ¡n pendientes de verificaciÃ³n in situ.",
    descripcion:
      "Situada en la Ribera Alta, esta ruta recorre 5 km con 150 m de desnivel. Se tarda unos 45 minutos en llegar desde Valencia. La senda atraviesa bosques mediterrÃ¡neos con sombra moderada y puntos de agua para refrescarse.\n\nLa correa no es obligatoria, aunque se recomienda en zonas concurridas. La ruta es apta en verano gracias a la presencia de agua y sombra. Sin embargo, la informaciÃ³n de esta ficha aÃºn debe ser contrastada sobre el terreno.",
    consejos: [
      "Lleva suficiente agua y comprueba previamente los puntos de hidrataciÃ³n.",
      "La correa no es obligatoria, pero ÃºtilÃ­zala si hay otros senderistas.",
      "Aprovecha la sombra moderada para evitar las horas mÃ¡s calurosas.",
      "Sigue las indicaciones y no te salgas del camino para proteger el entorno.",
      "Revisa la ruta antes de ir, ya que algunos datos estÃ¡n pendientes de verificaciÃ³n."
    ],
    mejorEpoca:
      "Primavera y otoÃ±o son Ã©pocas Ã³ptimas, pero al haber agua y sombra tambiÃ©n es apta en verano.",
    advertencias:
      "Los datos de la ruta aÃºn no han sido verificados in situ, asÃ­ que conviene ser prudente. El riesgo de procesionaria es medio.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pueden ir sin correa." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, hay agua en el recorrido." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "No obligatoria, pero recomendable en zonas de trÃ¡nsito." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Medio. Evita la ruta en los meses de mÃ¡s actividad." }
    ]
  },
  "barranco-agua-negra": {
    mejor: [
      "Mucha sombra durante la ruta",
      "Agua para refrescar al perro",
      "Muy llevadera en calor"
    ],
    peor: ["Correa obligatoria todo el recorrido", "Datos aún por verificar"],
    resumen:
      "La ruta Barranco del Agua Negra (Bocairent) con perro Valencia es un itinerario lineal de 3 km con dificultad media, que ofrece mucha sombra y agua. Los datos estÃ¡n pendientes de verificaciÃ³n.",
    descripcion:
      "Esta ruta se encuentra en la comarca de El Comtat y sigue el barranco del Agua Negra. Con 3 km de longitud y 150 m de desnivel, se tarda unos 90 minutos en llegar desde Valencia. El sendero discurre bajo un denso arbolado, con mucha sombra y acceso continuo al agua.\n\nLa correa es obligatoria y la ruta es apta en verano gracias a la frescura del barranco. Sin embargo, la informaciÃ³n de esta ficha aÃºn debe ser verificada.",
    consejos: [
      "MantÃ©n a tu perro atado durante todo el recorrido.",
      "Lleva toalla y cuencos plegables; hay mucha agua para que tu perro beba.",
      "Aprovecha la sombra y visita la ruta en los dÃ­as calurosos.",
      "Ajusta el ritmo a tu perro; aunque la ruta es corta, puede haber tramos resbaladizos.",
      "Confirma la informaciÃ³n y el estado del sendero antes de ir, ya que los datos estÃ¡n pendientes de verificaciÃ³n."
    ],
    mejorEpoca:
      "Es apta en verano gracias a la abundante sombra y al agua. Primavera y otoÃ±o tambiÃ©n son buenas opciones.",
    advertencias:
      "Los datos de la ruta aÃºn no han sido confirmados; extremad la precauciÃ³n. El riesgo de procesionaria es alto; evita la ruta en temporada de orugas.",
    faq: [
      { pregunta: "Â¿Pueden ir los perros?", respuesta: "SÃ­, pero deben ir con correa." },
      { pregunta: "Â¿Hay agua para el perro?", respuesta: "SÃ­, el barranco ofrece agua en todo el recorrido." },
      { pregunta: "Â¿Es necesaria la correa?", respuesta: "SÃ­, es obligatoria." },
      { pregunta: "Â¿Hay riesgo de procesionaria?", respuesta: "Alto. Evita los meses de enero a mayo y vigila a tu perro en las zonas de pinos." }
    ]
  }
};

export const contenidoRutas: Record<string, RutaContenido> = contenidoRutasBase;

export function getContenidoRuta(slug: string): RutaContenido | undefined {
  return contenidoRutas[slug];
}

