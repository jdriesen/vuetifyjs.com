export default {
  header: 'Spatiering (Spacing)',
  headerText: 'Update jouw layout zonder dat je zelf nieuwe klasses dient te definieren. Spacing helpers zijn een grote hulp wanneer je paddings en margins dient aan te passen.',
  toc: [
    {
      text: 'Inleiding',
      href: 'introduction'
    },
    {
      text: 'Hoe werkt het',
      href: 'how-it-works'
    },
    {
      text: 'Voorbeelden',
      href: 'examples'
    },
    {
      text: 'Horizontaal centreren',
      href: 'horizontal-centering'
    }
  ],
  howText: 'Definieer een **margin** of **padding** voor een element met een waarde van  _0 tot 5_. Elke grootte-stap is gedefinieerd met de gebruikelijke Material Design spacing waarden. Deze klassen kunnen kunnen gedefinieerd worden volgens het format `{property}{direction}-{size}`.',
  propertyText: 'De _property_ betekent het type van spacing:',
  properties: [
    '`m` - betekent `margin`',
    '`p` - betekent `padding`'
  ],
  directionText: 'De _direction_ bepaalt de zijde (side) waar de property op betrekking heeft:',
  directions: [
    '`t` - kent de property toe aan `margin-top` of `padding-top`',
    '`b` - kent de property toe aan `margin-bottom` of `padding-bottom`',
    '`l` - kent de property toe aan `margin-left` of `padding-left`',
    '`r` - kent de property toe aan `margin-right` of `padding-right`',
    '`x` - kent de property toe aan beide `*-left` en `*-right`',
    '`y` - kent de property toe aan beide `*-top` en `*-bottom`'
  ],
  sizeText: 'De _size_ bepaalt de grootte-stap van de property:',
  sizes: [
    '`0` - verwijdert de property voor `margin` of `padding` door deze als `0` te definieren',
    '`1` - definieert de `margin` of `padding` property als `$spacer * .25`',
    '`2` - definieert de `margin` of `padding` property als `$spacer * .5`',
    '`3` - definieert de `margin` of `padding` property als `$spacer`',
    '`4` - definieert de `margin` of `padding` property als `$spacer * 1.5`',
    '`5` - definieert de `margin` of `padding` property als `$spacer * 3`',
  ],
  horizontalHeader: 'Horizontale centering',
  horizontalText: 'Voor block elementen meet een vast-toegekende breedte; je kan `.mx-auto` gebruiken om de inhoud horizontaal te centeren.'
}
