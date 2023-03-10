import { computed, defineComponent, PropType } from 'vue'
import { useVJSFContext } from './context'
import ArrayField from './fields/ArrayField'
import NumberField from './fields/NumberField'
import ObjectField from './fields/ObjectField'
import StringField from './fields/StringField'
import { SchemaTypes, FiledPropsDefine } from './types'
import { retrieveSchema } from './utils'

export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    const formContext = useVJSFContext()

    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return formContext.transformSchemaRef.value(
        retrieveSchema(schema, rootSchema, value),
      )
    })

    return () => {
      const { schema } = props

      const retrievedSchema = retrievedSchemaRef.value

      // 如果 type 没有指定，我们需要猜测这个 type

      const type = schema.type
      let Component: any

      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        case SchemaTypes.OBJECT: {
          Component = ObjectField
          break
        }
        case SchemaTypes.ARRAY: {
          Component = ArrayField
          break
        }
        default: {
          console.warn(`${type} is not supported`)
        }
      }

      return <Component {...props} schema={retrievedSchema} />
    }
  },
})
