export default {
  header: 'Resize directive',
  headerText: 'De <code>v-resize</code> directive kan gebruikt worden om specifieke functies aan te roepen wanneer uw `window` van grootte verandert.',
  components: ['v-resize'],
  examples: [{
    default: {
      header: 'Default',
      desc: 'Vergroot / verklein uw window en bekijk de veranderende waarde.',
      uninverted: true
    }
  }],
  params: [{
    'v-resize': [
      {
        name: 'callback',
        type: 'Function',
        default: 'null'
      },
      {
        name: 'quiet',
        type: 'Boolean',
        default: 'false',
        desc: 'Maak geen gebruik van een `callback methode` wanneer de directive gebonden is'
      },
      {
        name: 'debounce',
        type: 'Number',
        default: '200'
      }
    ]
  }]
}
