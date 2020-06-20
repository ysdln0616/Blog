export const state = () => ({
  blogsData:[
    {
    title: "私の人生 enjoy!",
    month:"June20",
    date:'2020-06-19',
    id:'19'
  },
  {
    title: "swift　テトリスもどき　その...?",
    month:"June20",
    date:'2020-06-06',
    id:'06'
  },
  {
    title: "Nuxt",
    date:'2020-06-14',
    month:"June20",
    id:'14'
  },
  {
    title: "ブログの工事をしました",
    date:'2020-05-22',
    month:"May20",
    id:'22'
  }
],
monthes:[
  {
    to:"May20",
    title:"2020年5月"
  },
  {
    to:"June20",
    title:"2020年6月"
  },
  
]
})


export const getters = {
    blogsData: state  => state.blogsData,
    monthes: state => state.monthes
}