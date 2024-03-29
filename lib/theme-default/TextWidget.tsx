import { CommonWidgetPropsDefine } from '../../types/types'
import { computed, DefineComponent, defineComponent } from 'vue'
import { withFormItem } from './FormItem'

const TextWidget: DefineComponent<typeof CommonWidgetPropsDefine> =
  withFormItem(
    defineComponent({
      name: 'TextWidget',
      props: CommonWidgetPropsDefine,
      setup(props) {
        const handleChange = (e: any) => {
          const value = e.target.value
          e.target.value = props.value || ''
          props.onChange(value)
        }

        const styleRef = computed(() => {
          return {
            color: (props.options && props.options.color) || 'black',
          }
        })

        return () => {
          return (
            <input
              type="text"
              value={props.value as any}
              onInput={handleChange}
              style={styleRef.value}
            />
          )
        }
      },
    }),
  )

export default TextWidget
