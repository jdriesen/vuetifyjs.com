export default {
  header: 'Touch Support',
  headerText: 'De <code>v-touch</code> directive laat je toe om ´swipe´ bewegingen te ondervangen, en daar bi-directoinele callback functies aan toe te kennen.',
  components: ['v-touch'],
  examples: [{
    default: {
      header: 'Default',
      desc: 'Probeer op een mobiel toestel om in verschillende richtingen te swipen.',
      uninverted: true
    }
  }],
  props: [{
    'v-touch': [
      {
        name: '[up, down, left, right]',
        type: 'Function',
        default: 'null',
        desc: 'Ken een callback toe op basis van een swipe-richting. Gerelateerde (´Pairing´) x-axis en y-axis callbacks worden niet aanbevolen in deze callback functies',
      },
      {
        name: '[move, start, end]',
        type: 'Function',
        default: 'null',
        desc: 'Ken een callback toe op het moment (start, einde of tijdens) van een ´event-touch´.'
      }
    ]
  }]
}
