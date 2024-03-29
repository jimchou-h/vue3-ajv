// import { mount } from '@vue/test-utils'
// import themeDefault from '../../lib/theme-default'

// import { NumberField, StringField } from '../../lib/core'

// import TestComponent from './utils/TestComponent'

// describe('ObjectFiled', () => {
//   let schema: any
//   beforeEach(() => {
//     schema = {
//       type: 'object',
//       properties: {
//         name: {
//           type: 'string',
//         },
//         age: {
//           type: 'number',
//         },
//       },
//     }
//   })

//   it('should render properties to correct fileds', async () => {
//     const wrapper = mount(TestComponent, {
//       props: {
//         schema,
//         rootSchema: schema,
//         value: {},
//         onChange: () => ({}),
//         theme: themeDefault as any,
//       },
//     })

//     const strFiled = wrapper.findComponent(StringField)
//     const numField = wrapper.findComponent(NumberField)

//     expect(strFiled.exists()).toBeTruthy()
//     expect(numField.exists()).toBeTruthy()
//   })

//   it('should change value when sub fields trigger onChange', async () => {
//     let value: any = {}
//     const wrapper = mount(TestComponent, {
//       props: {
//         schema,
//         rootSchema: schema,
//         value: value,
//         onChange: (v: any) => {
//           value = v
//         },
//         theme: themeDefault as any,
//       },
//     })

//     const strFiled = wrapper.findComponent(StringField)
//     const numField = wrapper.findComponent(NumberField)

//     await strFiled.props('onChange')('1')
//     expect(value.name).toEqual('1')
//     await numField.props('onChange')(1)
//     expect(value.age).toEqual(1)
//     // expect(numField.exists()).toBeTruthy()
//   })

//   it('should render properties to correct fileds', async () => {
//     let value: any = {
//       name: '123',
//     }
//     const wrapper = mount(TestComponent, {
//       props: {
//         schema,
//         rootSchema: schema,
//         value: value,
//         onChange: (v: any) => {
//           value = v
//         },
//         theme: themeDefault as any,
//       },
//     })

//     const strFiled = wrapper.findComponent(StringField)
//     // const numField = wrapper.findComponent(NumberField)
//     await strFiled.props('onChange')(undefined)

//     expect(value.name).toBeUndefined()
//     // expect(numField.exists()).toBeTruthy()
//   })
// })
