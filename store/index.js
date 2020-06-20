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
    },
    {
      title: "MAYBELLINE イベント",
      date:'2019-06-13',
      month:"June19",
      id:'13'
    },
    {
      title: "うちの犬の誕生日",
      date:'2019-06-15',
      month:"June19",
      id:'15'
    },
    {
      title: "ブログ欄を作ったよ",
      date:'2019-05-20',
      month:"May19",
      id:'20'
    },
    {
      title: "誕生日",
      date:'2019-05-21',
      month:"May19",
      id:'21'

    },
    {
      title: "東京駅",
      date:'2019-05-31',
      month:"May19",
      id:'31'
    }
  ],

  monthes:[
    {
      to:"June20",
      title:"2020年6月"
    },
    {
      to:"May20",
      title:"2020年5月"
    },
    {
      to:"June19",
      title:"2019年6月"
    },
    {
      to:"May19",
      title:"2019年5月"
    }
  ]
})

export const getters = {
    blogsData: state  => state.blogsData,
    monthes: state => state.monthes
}