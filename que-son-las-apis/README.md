# ¿Qué es una API y para qué sirve? Cómo funcionan y porqué son tan valiosas.

![APIs y sus aplicaciones más utilizadas](https://miro.medium.com/max/750/1*TNt5E-8yPDs1-8fMqzWXbw.png)

## ¿Qué es una API?

Una API (_Application Programming Interface_) es como un mozo en un restaurante: Se encarga de llevar tus pedidos (_requests_) que elegiste del menú (_API Spec_) hacia la cocina (_Server_). Una vez que la comida está hecha, el mozo se encarga de traerte a la mesa lo que pediste (_Response_).

Esto mismo explica Mulesoft en su [video](https://youtu.be/s7wmiS2mSXY) o [blogpost](https://www.mulesoft.com/resources/api/what-is-an-api) sobre el tema.

Una API es un software intermediario que permite a dos aplicaciones hablarse entre si. Cada vez que abrís una red social en tu iPhone o Android, toda esa información fue pedida y provista por una API.

Existen muchos protocolos a los cuales las APIs se adhieren, como [RPC](https://www.ionos.es/digitalguide/servidores/know-how/que-es-rpc/), [SOAP](https://www.tutorialspoint.com/soap/what_is_soap.htm), [Async](https://www.asyncapi.com/docs/getting-started/), [GraphQL](https://graphql.org/), pero para este post en particular vamos a estar hablando del protocolo más usado, [REST](https://www.mulesoft.com/resources/api/what-is-rest-api-design).

Además, una API provee una capa importante de seguridad. Ya que las llamadas y el intercambio de información es explícito y sucinto, la información de tu celular nunca queda expuesta. Solo se comunica y se obtiene lo que es necesario, como comprar comida sin bajarse del auto, vos decís qué querés, ellos te dicen que quieren a cambio, y finalmente obtienes tu comida. Fácil, continuemos.

## ¿Qué es una API Specification?

![Cómo se ve una API Specification, a grandes rasgos](https://miro.medium.com/max/750/1*g_2fugyFMt9D_f0Alp-o9w.png)

> "Una API Specification es una forma estandarizada y estructurada de describir una API HTTP de forma que sea legible por humanos y máquinas" - Ariel Mirra

Querés comprar un pasaje de avión. Entrás a una página llamada Aterrizar.com que tiene información de múltiples aerolíneas, le preguntás qué pasajes hay para el lugar X en la fecha Y cuyo precio sea menor a Z, la página te devuelve todos los pasajes que cumplen tus requisitos. ¿Cómo les pidió la información a las aerolíneas? Ahí es donde las especificaciones de APIs vienen al rescate.

Aterrizar.com se dedica a pedirle a las aerolíneas, según como éstas lo tenga en su especificación, la información que vos querés y mostrártela toda junta. Es capaz de hacer esto porque cada aerolínea tiene una API Spec pública que muestra cómo pedirle información y cómo ésta es devuelta.

Eso es una API Specification, detalla toda la información y recursos que la API expone en un lenguaje legible por humanos y máquinas, en su mayoría [JSON](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON) y YAML.

## Genial... ¿Y para qué sirve?

![La estructura de una API Specification](https://miro.medium.com/max/1050/1*xuDNZkmBEirOVTcyB9pu7g.png)

Las API Specs son las que hacen posible toda la interacción entre sistemas independientes que hoy en día nos rodea. Pero eso no es lo único:

### Generación automática de documentación

Todos odiamos escribir documentación, con una buena especificación podemos generar un documento o incluso una página interactiva en tiempo real que muestre:

- **Información sobre la API:** Quién la hizo, qué versión, que licencia, en qué server y mucho más.
- **Qué recursos ofrece:** Cuales son los endpoints, qué métodos tienen disponibles, cuáles son los parámetros que aceptan.
- **Cómo es el esquema de los datos** a enviar y recibir, junto con ejemplos de cada uno de ellos.
- **Probar la [API en vivo](https://swagger.io/tools/swagger-ui/)** utilizando o cambiando los ejemplos provistos y explorando los diferentes resultados posibles.

### Automatización en todos lados

Una especificación detallada nos dá la posibilidad de:

- **Crear su [implementación de forma automática](https://docs.mulesoft.com/mule-runtime/4.3/build-application-from-api)**, generando código en diferentes lenguajes o incluso pudiendo importar, publicar y testear la API especificada en servicios como [AWS](http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-from-example.html), [Azure](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-rest-api) o [Google Cloud](https://cloud.google.com/endpoints/docs/openapi/about-cloud-endpoints).
- **Automatizar el monitoreo y testeo** de APIs con servicios como [Smartbear](https://support.smartbear.com/alertsite/docs/monitors/api/soapui/create.html), ya que la especificación funciona como un contrato de funcionamiento donde se sabe de antemano que recibe y que devuelve, y se valida que esto suceda.

## Suficiente, quiero crear mi propia API Specification

Tengo una buena noticia para vos y te aliento a que transformes conocimiento a sabiduría a través de acción:

### En menos de 5 minutos podés hacerlo

Llegó la hora de poner en acción todo lo dicho en palabras. Tomate 5 minutos para explorar alguna de estas herramientas de creación de especificaciones de APIs, te va a ayudar a cimentar el conocimiento adquirido de forma gratuita y sin tener que descargar nada:

- [Spotlight.io](https://stoplight.io/studio/)
- [Swagger Editor](http://editor.swagger.io/)

O si querés saber más y probar todas las posibilidades que mencioné antes, te recomiendo echarle un vistazo a [Mulesoft’s Anypoint Platform](https://www.mulesoft.com/platform/enterprise-integration).

Si llegaste hasta acá quiero darte las gracias y hacerte saber que te estas yendo mejor de lo que llegaste, ¡Seguí así!

Un saludo, [Ariel Mirra](https://linktr.ee/arielmirra).

[instagram](https://www.instagram.com/arielmirra) | [linkedin](https://linkedin.com/in/ariel-mirra) | [otros proyectos](https://linktr.ee/arielmirra)
