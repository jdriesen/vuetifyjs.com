export default {
  header: 'Scrolling directive',
  headerText: 'De <code>v-scroll</code> directive laat toe om callback functies uit te voeren tijdens het scroll-event van een window of ander gedefineerd element.',
  components: ['v-scroll'],
  examples: [{
    default: {
      header: 'Default',
      desc: 'Standaard wordt deze directive gebonden met het window. Wanneer geen extra configuratie nodig is, kan je hier eenvoudigweg je callback functie definieren.',
      uninverted: true
    },
    options: {
      header: 'Scroll met opties',
      desc: 'Indien je meer gedetailleerd wil werken, kan je beslissen, kan je het doel-element bepalen dat naar op het scroll-event dient te reageren.',
      uninverted: true
    }
  }],
  params: [{
    'v-scroll': [
      {
        name: 'callback',
        type: 'Function',
        default: 'null'
      },
      {
        name: 'target',
        type: 'String',
        default: 'null',
        desc: 'Het DOM element dat dient gebonden te worden met de event listener'
      },
      {
        name: 'debounce',
        type: 'Object',
        default: '{ _passive_: **true** }',
        desc: 'Opties die dienen doorgegeven te worden aan de event listener van het gebonden doel-element'
      }
    ]
  }]
}
