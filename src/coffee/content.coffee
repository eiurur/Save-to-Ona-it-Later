$ ->

  save2Server = (data, token) ->
    return new Promise (resolve, reject) ->

      # 開発用(Win)
      destUrl = 'https://127.0.0.1:9021/api/posts'

      # 開発用(Vagrant)
      # destUrl = 'https://192.168.33.10:9021/api/posts'

      # 本番用
      # destUrl = 'https://ona-it-later.herokuapp.com/api/posts'

      $.ajax
        type: "POST"
        url: destUrl
        data:
          token: token
          post: data
        headers:
          "Access-Control-Allow-Origin": "*"
      .done (data) ->
        console.log data
        return resolve data

      .fail (err) ->
        console.log err
        return reject err

  getToken = ->
    return new Promise (resolve, reject) ->
      chrome.storage.sync.get ['token'], (item) ->
        console.log item
        return reject undefined　if item.token is undefined or item.token is ''
        return resolve item.token


  scrapingMetaData = ->
    return new Promise (resolve, reject) ->

      data = {}

      console.log '=============>'

      console.log '=======> info'
      console.log info
      # info = JSON.parse info
      # console.log info.srcUrl

      # タイトル
      console.log '=======> タイトル'

      title1 = $('head title').text()
      console.log title1

      title2 = $('meta[property="og:title"]').attr('content')
      console.log title2

      data.title = title1 or title2

      # サイトの名前
      console.log '=======> サイトの名前'

      siteName = $('meta[property="og:site_name"').text()
      console.log siteName

      data.siteName = siteName

      # サイトURL
      console.log '=======> サイトのURL'

      siteUrl1 = $(location).attr('href')
      console.log siteUrl1

      siteUrl2 = $('meta[property="og:url"]').attr('content')
      console.log siteUrl2

      data.siteUrl = siteUrl1 or siteUrl2

      # URL と type
      # .jpgとかのURL。
      # コンテキストメニューから、かつ画像なら image そうでないなら link
      if info?.mediaType? && info.mediaType is 'image'
        data.url = info.srcUrl
        data.type = 'image'
      else
        # bodyタグ内で一番最初の画像を引っ張ってくる
        # $('body').attr('src', $('img').get(0).src)
        firstImgUrlInBody = $('img').get(0).src
        data.url = firstImgUrlInBody
        data.type = 'link'

      # ホスト名
      hostName = location.host
      console.log hostName

      data.hostName = hostName

      # 説明
      console.log '=======> 説明'

      description1 = $('meta[name="description"]').attr('content')
      console.log description1

      description2 = $('meta[property="og:description"]').attr('content')
      console.log description2

      data.description = description1 or description2

      # 画像
      console.log '=======> サイトの画像'

      siteImage = $('meta[property="og:image"]').attr('content')
      console.log siteImage

      data.siteImage = siteImage

      # favixon
      console.log '=======> faviconのURL'

      favicon = $('link[rel="shortcut icon"]').prop('href')
      console.log favicon

      data.favicon = favicon

      # MongooseのDefaultが動作しないので、初期値を手動で設定
      data.isPrivate = true
      data.isArchive = false
      # data.isDone    = false

      console.log data

      return resolve data

  do ->

    alertify.log "保存中 ......"

    Promise.all [scrapingMetaData(), getToken()]
    .then ([data, token]) -> save2Server data, token
    .then (data) ->

      # アイコンに色をつけて、完了したことをわかるようにする
      chrome.runtime.sendMessage({ "newIconPath" : 'build/images/blue/icon19.png' })

      # 通知も行う
      alertify.success "保存しました。"

    .catch (err) ->

      # TODO: errに応じてメッセージを変える
      alertify.error "トークンに誤りがあります。\nもう一度確認してみてください。"
