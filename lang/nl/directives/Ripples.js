export default {
  header: 'Ripple directive',
  headerText: 'De <code>v-ripple</code> directive wordt gebruikt om een actie van een gebruiker te tonen. Deze directive kan toegepast worden op elk `block level` element. Ontelbare componenten hebben standaard de ripple directive ingebouwd. Enkele voorbeelden: `v-btn`, `v-tabs-item` en vele andere.',
  components: ['v-ripple'],
  examples: [{
    buttons: {
      header: 'Default',
      desc: 'Buttons hebben standaard het ripple effect. Dit kan ongedaan worden gemaakt met de optie  `:ripple="false`.',
      uninverted: true
    },
    customColor: {
      header: 'Custom color',
      desc: 'Door gebruik te maken van een helper class, kan je de kleur van de ripple wijzigen.',
      uninverted: true
    },
    tabs: {
      header: 'Tabs',
      desc: 'Tabs hebben standaard geen ripple effect. Het ripple effect kan toegepast worden met de **ripple** eigenschap (prop).',
      uninverted: true
    },
    navigationDrawers: {
      header: 'Navigation drawers',
      desc: 'List items hebben standaard geen ripple effect. Het ripple effect kan toegepast worden met de **ripple** eigenschap (prop).',
      uninverted: true
    },
    toolbars: {
      header: 'Toolbars',
      desc: 'Toolbar items hebben standaard geen ripple effect. Het ripple effect kan toegepast worden met de **ripple** eigenschap (prop).',
      uninverted: true
    },
    expansionPanels: {
      header: 'Expansion panels',
      desc: 'Expansion panels hebben standaard geen ripple effect. Het ripple effect kan toegepast worden met de **ripple** eigenschap (prop).',
      uninverted: true
    },
    htmlElement: {
      header: 'Standaard HTML element',
      desc: 'Het ripple effect kan toepast worden op een standaard HTML element. Het ripple effect kan toegepast worden met het `v-ripple` HTML attribuut (attribute).',
      uninverted: true
    }
  }],
  props: [{
    'v-ripple': [
      {
        name: 'class',
        type: 'String',
        default: 'undefined',
        desc: 'Kent een `custom class` toe aan een ripple; wordt gebruikt om de kleur te wijzigen'
      },
      {
        name: 'center',
        type: 'Boolean',
        default: 'False',
        desc: 'Forceert de ripple om vanaf het midden van het doel-element te beginnen'
      }
    ]
  }]
}
