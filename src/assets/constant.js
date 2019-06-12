export const shuttleParam = {
    'common': [{
      key: 'tabBtn1',
      className: (target) => { return ['icon', 'iconfont', target === 'tabBtn1' ? 'icon-timeout' : 'icon-play-circle'] },
      textKey: 'tabBtn1',
      that: null
    }, {
      key: 'tabBtn2',
      className: () => { return ['icon', 'iconfont', 'icon-setting'] },
      textKey: 'tabBtn2',
      that: null
    }, {
      key: 'tabBtn3',
      className: () => { return ['icon', 'iconfont', 'icon-setting'] },
      textKey: 'tabBtn3',
      that: null
    }, {
      key: 'tabBtn4',
      className: () => { return ['icon', 'iconfont', 'icon-file-text'] },
      textKey: 'tabBtn4',
      that: null
    }, {
      key: 'otherBtn1',
      that: null
    }, {
      key: 'otherBtn2',
      that: null
    }],
    'confirm': [{
      key: 'cancel'
    }, {
      key: 'ok'
    }],
    'changeType': [{
      key: 'typeChange',
      name: 'type1'
    }, {
      key: 'typeChange',
      name: 'type2'
    }, {
      key: 'typeChange',
      name: 'type3'
    }, {
      key: 'typeChange',
      name: 'type4'
    }, {
      key: 'typeChange',
      name: 'type5'
    }, {
      key: 'cancel',
      name: 'cancel'
    }]
  }