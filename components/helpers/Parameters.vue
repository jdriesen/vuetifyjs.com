<template lang="pug">
  v-data-table(
    :headers="headers"
    :search="search"
    :items="computedItems"
    :pagination.sync="pagination"
    :hide-actions="this.items.length <= 10"
    :rows-per-page-items="[10, 25, { text: 'All', value: -1 }]"
  ).component-parameters
    template(slot="items" slot-scope="{ item }")
      td(
        v-for="(opt, i) in item"
        :key="i"
      )
        markdown(:source="opt.toString()")
</template>

<script>
  import { capitalize, camel } from '@/util/helpers'

  export default {
    data: () => ({
      pagination: {
        rowsPerPage: 10
      }
    }),

    props: {
      target: String,
      headers: {
        type: Array,
        default: () => ([])
      },
      items: {
        type: Array,
        default: () => ([])
      },
      namespace: String,
      search: String,
      type: String
    },

    computed: {
      computedItems () {
        return this.items.map(item => {
          const newItem = {}

          if (item !== Object(item)) {
            item = { name: item }
          }

          for (const header of this.headers) {
            const key = header.value
            const fn = this[`gen${capitalize(key)}`]

            if (fn) {
              newItem[key] = fn(item[key] || item.name, item)
            } else {
              newItem[key] = item[key] == null ? '' : item[key]
            }
          }

          return newItem
        })
      }
    },

    methods: {
      genDescription (name, item) {
        let description = ''
        let devPrepend = ''
        const camelSource = camel(item.source)

        const specialLevelDesc = `${this.namespace}.${this.type}.${this.target}['${name}']`
        const componentLevelDesc = `${this.namespace}.${this.type}['${name}']`
        const mixinDesc = `Mixins.${camelSource}.${this.type}['${name}']`
        const genericDesc = `Generic.${capitalize(this.type)}['${name}']`

        if (this.$te(specialLevelDesc)) {
          description = this.$t(specialLevelDesc)

          if (description.indexOf('Mixins.') > -1) {
            description = this.$t(description)
          }

          devPrepend = '**SPECIAL** - '
        } else if (this.$te(componentLevelDesc)) {
          description = this.$t(componentLevelDesc)
          
          if (description.indexOf('Mixins.') > -1) {
            description = this.$t(description)
          }

          devPrepend = '**COMPONENT** - '
        } else if (this.$te(mixinDesc)) {
          description = this.$t(mixinDesc)
          devPrepend = '**MIXIN** - '
        } else if (this.$te(genericDesc)) {
          description = this.$t(genericDesc)
          devPrepend = '**GENERIC** - '
        }

        const prepend = process.env.NODE_ENV === 'development' ? devPrepend : ''

        return `${prepend}${description}`
      },
      genName (name) {
        name = name || ''
        name = name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)

        return `<code>${name}</code>`
      },
      genType (type) {
        type = Array.isArray(type) ? type : [type]

        return type.map(t => {
          return this.$t(`Generic.Types.${t}`)
        }).join(', ')
      },
      genProps (props) {
        if (!Array.isArray(props)) return 'Missing data'

        return `<kbd>{ ${props.join(', ')} }</kbd>`
      }
    }
  }
</script>

<style lang="stylus">
  .component-parameters
    code
      white-space: nowrap

    p
      margin-bottom: 0
</style>
