
const icon_list = [
  {
    title: '餐饮',
    img: 'http://a2.qpic.cn/psb?/V10whb6D40YGkc/FWQpK50u9sdEOf6GLTlOrBV*wJG5LaCznH92se0yC7o!/m/dEkBAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '购物',
    img: 'http://a3.qpic.cn/psb?/V10whb6D40YGkc/mSG7iPR29RMD10WymvlW1w9D8HWXrvr1gUl5pkDs4zs!/m/dLYAAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '交通',
    img: 'http://a3.qpic.cn/psb?/V10whb6D40YGkc/4E*Rs0EphylPrgOmX20fr0E80UsXuW8.B8HCn5dre6U!/m/dL4AAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '运动',
    img: 'http://a2.qpic.cn/psb?/V10whb6D40YGkc/cD0CP*XDZ2tgFCt5HXDbLzAqIsWKkKmu3IwY*Ai6ztA!/m/dMUAAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '娱乐',
    img: 'http://a1.qpic.cn/psb?/V10whb6D40YGkc/tx9wWRCQL09o8kBSM0G7grHMYblnh2fJFoEGtP9vF9w!/m/dLgAAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '通讯',
    img: 'http://a4.qpic.cn/psb?/V10whb6D40YGkc/joa*xx935w0qi3ECNrCiBC7aqoCKY41OXKw4HFaBeJ8!/m/dL8AAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '住房',
    img: 'http://a2.qpic.cn/psb?/V10whb6D40YGkc/2*Pc1i6XSCXjAHHSeazBdg.fSkT89AE0UH9iNiU7BuU!/m/dDEBAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '孩子',
    img: 'http://a3.qpic.cn/psb?/V10whb6D40YGkc/DosHQt1MQX6Ty9L7pBLixReX5okTNnL*eO8K6zXfjow!/m/dL4AAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '旅行',
    img: 'http://a4.qpic.cn/psb?/V10whb6D40YGkc/uTCvDLo3U9ChGl8WIbCtx87j*ouenCRCt.YQEtIXFcg!/m/dFMBAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '汽车',
    img: 'http://a4.qpic.cn/psb?/V10whb6D40YGkc/BTJNTaeAq7MyPvHiz5rJZTa6gTpttqWDZoNXHolHUhY!/m/dFMBAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '医疗',
    img: 'http://a1.qpic.cn/psb?/V10whb6D40YGkc/wL*3D1woYgRGKekAnH9UFWsGEHrB7bYIrMdDBeW.pAg!/m/dMAAAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '学习',
    img: 'http://a2.qpic.cn/psb?/V10whb6D40YGkc/E5jbk*Q7L.HDW5VZEBX3ohxhw9VuZGgNZcOywSz*3tA!/m/dAUBAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '宠物',
    img: 'http://a3.qpic.cn/psb?/V10whb6D40YGkc/QZJ5knCmfmUM4WvT38IZe0qOd91ktOLEj*zW.ZhrKIc!/m/dFYBAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '礼金',
    img: 'http://a3.qpic.cn/psb?/V10whb6D40YGkc/oN.rcnTHc1FTa6*ngSxZk7gSuQjUyPzFlEsWvj4LKkQ!/m/dLYAAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '维修',
    img: 'http://a4.qpic.cn/psb?/V10whb6D40YGkc/03N8RXchBs1iKH.4vrV1423CPXfiBTsw*FQfbp5f23M!/m/dL8AAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '快递',
    img: 'http://a3.qpic.cn/psb?/V10whb6D40YGkc/j5tv2Ry3eIFGutRiWDvdxWpoBjGNZMArNN6msHO2NXw!/m/dE4BAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '电影',
    img: 'http://a3.qpic.cn/psb?/V10whb6D40YGkc/kUEnGR6sd9SXbvBd6rEsSaTyMzty5B8pVpJUI5w8vB4!/m/dLYAAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '日用品',
    img: 'http://a1.qpic.cn/psb?/V10whb6D40YGkc/yRKXgmFyBULvqCJ.K5fcYg2HnzmNdq5V*jp8rxrIJE8!/m/dFQBAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '化妆品',
    img: 'http://a1.qpic.cn/psb?/V10whb6D40YGkc/FYWBewAODSnLO*PKX93UIhJMyNvgIZzFhsQH1zeOi5A!/m/dLgAAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '其他',
    img: 'http://a3.qpic.cn/psb?/V10whb6D40YGkc/RHkeS8DLsVVEPfk3ezF8OvRrz7d5kcZmeF4eR8PWUv0!/m/dL4AAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  }
]
const icon_shou = [
  {
    title: '工资',
    img: 'http://a4.qpic.cn/psb?/V10whb6D40YGkc/yovWo5C271fyEFPq2.cFjxJS44by8L4KehZRcIjTOjE!/m/dL8AAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '兼职',
    img: 'http://a1.qpic.cn/psb?/V10whb6D40YGkc/obIJDn67iXCVEUZR1YqJ7V02*gEkPWH6KHfbxcC1vcw!/m/dMAAAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '生活费',
    img: 'http://a1.qpic.cn/psb?/V10whb6D40YGkc/56dwp0jWdT3iFKzOP3xhV7qJuOBxOZblDFMEb2hXTus!/m/dAgBAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '红包',
    img: 'http://a3.qpic.cn/psb?/V10whb6D40YGkc/ypj8jzbfUPrOr97tmThZfVYWt*KSbhZvbcKgtjWLBJ0!/m/dLYAAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '礼金',
    img: 'http://a2.qpic.cn/psb?/V10whb6D40YGkc/3..*PK2OOntrBVlk9hU64FCPl7enSsNzm68F6OcExdA!/m/dMUAAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '理财',
    img: 'http://a3.qpic.cn/psb?/V10whb6D40YGkc/589b.qExboktr0T0XJxTEP6CM1CpLJkZ.molUBDa83g!/m/dD4BAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '报销',
    img: 'http://a4.qpic.cn/psb?/V10whb6D40YGkc/0xjxHtiRL9YSxvFi6ExNiLOozUhV6bBFPqHH7rDKSko!/m/dL8AAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '退款',
    img: 'http://a1.qpic.cn/psb?/V10whb6D40YGkc/v5D6JpCgNoJ6mulrcJKspEyXCQx3jGq0qss8D0n7HDo!/m/dFQBAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '奖金',
    img: 'http://a4.qpic.cn/psb?/V10whb6D40YGkc/bySZPCCzQ2X1iFt4W85cKCuc2s3ZVht11aWDMG0wAUI!/m/dL8AAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  },
  {
    title: '其他',
    img: 'http://a1.qpic.cn/psb?/V10whb6D40YGkc/0*GRsPgbx1risb0aUEs7I1XCL0C48ovKEGX5PiUqukY!/m/dFQBAAAAAAAAnull&bo=PAA8AAAAAAADByI!&rf=photolist&t=5'
  }
]
export function pint_zhi(index = 1) {
  if (index == '') {
    return icon_list
  } else {
    return icon_list[index]
  }
}
export function pint_shou(index = 1) {
  if (index == '') {
    return icon_shou
  } else {
    return icon_shou[index]
  }
}
