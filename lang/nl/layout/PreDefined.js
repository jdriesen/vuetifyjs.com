export default {
  header: 'Layouts',
  headerText: `Het layout systeem is het hart van elke applicatie. Hieronder vind je een aantal officieel gesupporteerde voorbeelden, gaande van desktop tot mobile applicaties. `,
  markupHeader: 'Standaard applicatie opmaak',
  markupText: 'Dit is een voorbeeld van de standaard applicatie opmaak for Vuetify. Je kan je layout elementen letterlijk overal plaatsen, eens je de **app** property eenmaal hebt toegekend. De sleutel component voor dit alles is het `v-content` element. Deze zal dynamisch vergroten / verkleinen afhankelijk van de structuur van je  **app** componenten. Dit laat je toe om mooie applicaties te bouwen.',
  appHeader: 'Alles over (all about) _app_',
  appText: 'In Vuetify helpen de `v-app` component en de **app** jouw applicatie om bij het vergroten / verkleinen van elementen in de `v-content`. Dit laat je toe om echt unieke interfaces te creeren, zonder je zorgen hoeven te maken om de layout. De `v-app` component is **NOODZAKELIJK** voor alle applicaties. Dit is het aanhechtingspunt voor vele van de Vuetify componenten en functies.',
  alert1: 'Om je applicatie vlot te laten werken,  **moet** je deze definieren in een `v-app` component. Deze component is noodzakelijk voor om de grid breakpointen van de layout te kunnen bepalen. Deze kan om **het even waar** gedefinieerd worden, maar dient de parent te zijn van  **ALLE** Vuetify componenten.',
  alert2: 'Het toekennen van de **app** prop omvat automatisch ook het toekennen van de positie: **fixed** aan het layout element. Indien jouw applicatie nood heeft aan een  _absolute_ element, kan je deze overschrijven met de **absolute** prop.',
  toc: [
    {
      text: 'Layouts',
      href: 'introduction'
    },
    {
      text: 'Standaard app opmaak',
      href: 'default-markup'
    },
    {
      text: 'Alles over (all about) app',
      href: 'all-about-app'
    }
  ]
}
