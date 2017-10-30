let imageMachining = (value,location)=>{
  return `https://xyk.cebbank.com${value}`;
};
let trimMachining = (value)=>{
  return value.trim();
};
let hrefMachining = (value)=>{
  if(/javascript:goToHref/.test(value)){
    return value.slice(21,-2);
  }else{
    return value;
  }
};
module.exports = {
  url: 'https://xyk.cebbank.com/mallwap/index',
  encode: 'utf8',
  content: {
    'name':'data',
    'selector': '.my-content',
    'value':[
      {
        'name':'bannerInfo',
        'selector':'.js-swiper-container .swiper-slide a',
        'value':[
          {
            'name':'href',
            'value':['attr','onclick'],
            'machining':hrefMachining
          },
          {
            'name':'src',
            'selector':'img',
            'value':['attr','src'],
            'machining':imageMachining
          }
        ]
      },
      {
        'name':'floorsInfo',
        'selector':'.goods_show_style_1 .goods_show_main ',
        'value':[
          {
            'name':'floorName',
            'selector':'.goods_type',
            'value':['text'],
            'machining': trimMachining
          },
          {
            'name':'floorLink',
            'selector':'.goods_type a',
            'value':['attr',"onclick"],
            'machining': hrefMachining
          },
          {
            'name':'floorImage',
            'selector':'.goods-pic-style-1 img',
            'value':['data',"original"],
            'machining': imageMachining
          },
          {
            'name':'floorImageLink',
            'selector':'.goods-pic-style-1',
            'value':['attr',"onclick"],
            'machining': hrefMachining
          },
          {
            'name':'goods2',
            'selector':'.grid-row-2',
            'value':[
              {
                'name':'goodsImage',
                'selector':'li img',
                'eq':0,
                'value':['data','original'],
                'machining': imageMachining
              },{
                'name':'goodsName',
                'selector':'li',
                'eq':1,
                'value':['text'],
                'machining': trimMachining
              },{
                'name':'goodsLink',
                'selector':'.goods-pic-style-2',
                'value':['attr','onclick'],
                'machining': hrefMachining
              },{
                'name':'goodsPrice',
                'selector':'li',
                'eq':3,
                'value':['text'],
                'machining': (value)=>{
                  return value.split('×')[0].trim();
                }
              },
              {
                'name':'goodsInstalments',
                'selector':'li',
                'eq':3,
                'value':['text'],
                'machining': (value)=>{
                  return value.split('×')[1].trim();
                }
              }
            ]
          },
          {
            'name':'goods4',
            'selector':'.grid-row-4',
            'value':[
              {
                'name':'goodsImage',
                'selector':'li img',
                'eq':0,
                'value':['data','original'],
                'machining':imageMachining
              },{
                'name':'goodsName',
                'selector':'li',
                'eq':1,
                'value':['text'],
                'machining': trimMachining
              },{
                'name':'goodsLink',
                'selector':'.goods-pic-style-3',
                'value':['attr','onclick'],
                'machining': hrefMachining
              },{
                'name':'goodsPrice',
                'selector':'li',
                'eq':3,
                'value':['text'],
                'machining': trimMachining
              },
              {
                'name':'goodsInstalments',
                'selector':'.instalments',
                'value':['text'],
                'machining': trimMachining
              },
            ]
          }
        ]
      }
    ]
  }
};