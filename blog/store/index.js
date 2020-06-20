import Vuex from 'vuex'
// import blogData from './module/blogData'

// new Vuex.Store({
//   state:()=>({
//     blogsData:[
//       {
//         title: "私の人生 enjoy!",
//         date:'2020-06-19',
//         id:'19'
//       },
//       {
//         title: "swift　テトリスもどき　その...?",
//         date:'2020-06-06',
//         id:'06'
//       },
//       {
//         title: "Nuxt",
//         date:'2020-06-14',
//         id:'14'
//       }
//     ],
//   }),
//   getters:{
//     blogsData: (state)  => state.blogsData
//   }
// })

export const state = () => ({
  blogsData:[
    {
    title: "私の人生 enjoy!",
    date:'2020-06-19',
    id:'19'
  },
  {
    title: "swift　テトリスもどき　その...?",
    date:'2020-06-06',
    id:'06'
  },
  {
    title: "Nuxt",
    date:'2020-06-14',
    id:'14'
  }],
})


export const getters = {
    blogsData: state  => state.blogsData
}