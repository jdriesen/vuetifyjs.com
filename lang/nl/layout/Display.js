export default {
  header: 'Tonen (Display)',
  headerText: 'De display helpers helpen jou te bepalen wanneer de inhoud getoond wordt. Dit omvat tevens het geconditioneerd tonen op basis van de huidige viewport, of het huidige display type van het element.',
  toc: [
    {
      text: 'Inleiding',
      href: 'introduction'
    },
    {
      text: 'Visibility',
      href: 'visibility'
    },
    {
      text: 'Tonen (Display)',
      href: 'display'
    },
    {
      text: 'Voorbeelden',
      href: 'examples'
    }
  ],
  visibilityHeader: 'Zichtbaarheid (Visibility)',
  visibilityText: 'Geconditioneerd tonen van een element op basis van de huidige **viewport**. Deze classes kunnen op toegepast worden op basis van het format `hidden-{breakpoint}-{condition}`',
  breakpointText: 'Het _breakpoint_ definieert de viewport size:',
  breakpoints: [
    '`xs` - extra kleine toestellen (extra small devices)',
    '`sm` - kleine toestellen (small devices)',
    '`md` - medium toestellen (medium devices)',
    '`lg` - grote toestellen (large devices)',
    '`xl` - extra grote toestellen (extra large)',
  ],
  conditionText: 'De _condition_ kent de klasse toe op basis van :',
  conditions: [
    '`only` - verberg het element alleen voor `xs` tot `xl` breakpoints',
    '`and-down` - verberg het element voor hetgespecifieerde breakpoint en kleiner `sm` tot `lg` breakpoints',
    '`and-up` - verberg het element voor het specifieke breakpoint en groter `sm` tot `lg` breakpoints'
  ],
  displayHeader: 'Tonen (Display)',
  displayText: 'Specifieert de `display` property van het element. Deze classes kunnen toegekend worden basis van het format `d-{display}`.',
  displays: [
    '`d-inline-flex` - definieert de element display property als `inline-flex`',
    '`d-flex` - definieert de element display property als `flex`',
    '`d-inline-block` - definieert de element display property als `inline-block`',
    '`d-block` - definieert de element display property als `block`',
    '`d-inline` - definieert de element display property als `inline`'
  ]
}
