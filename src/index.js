// マップを初期化
let map;

async function initMap() {
  // 近所のコメダ珈琲の位置
  const position = { lat: 35.2713215, lng: 139.1797686 };

  /* 実行時に追加のライブラリを読み込むには、await 演算子を使用して
   async 関数内から importLibrary() を呼び出す */
  // @ts-ignore ←?
  // Map ライブラリをインポート
  const { Map } = await google.maps.importLibrary("maps");

  // AdvancedMarkerView ライブラリをインポート
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // 東京駅を中心としたマップを id="map" の要素に生成
  // 第二引数はオプション
  map = new Map(document.getElementById("map"), {
    // 拡大レベル
    zoom: 19,
    // 中心にする位置（コメダ）
    center: position,
    mapId: "DEMO_MAP_ID", // ←?
  });

  // img 要素生成
  const beachFlagImg = document.createElement("img");
  // 画像を指定
  beachFlagImg.src = "./img/maker.png";

  // マーカーを生成
  const marker = new AdvancedMarkerView({
    // マーカーを立てる地図を指定
    map,
    // 位置を指定（コメダ）
    position,
    // マーカーを画像にする
    content: beachFlagImg,
  });

  // Place ライブラリをインポート
  const { Place } = await google.maps.importLibrary("places");

  async function getPlaceDetails() {
    // プレイス ID を使用して、新しいプレイス インスタンスを作成
    const place = new google.maps.places.Place({
      // コメダの place ID
      id: "ChIJc7EbuqOlGWARFlPcoQG-ItU",
      requestedLanguage: "ja",
    });

    // fetchFields を呼び出して、取得したいフィールド(データの種類)を指定
    await place.fetchFields({
      fields: [
        "displayName", // スポット名
        "formattedAddress", // 住所
        "websiteURI",
        "viewport",
        "nationalPhoneNumber",
        "regularOpeningHours", // 営業時間
        "priceLevel", // 価格帯
        "rating", // 評価
        "reviews", // クチコミ
        "photos",
        "location", // 緯度・経度
        "servesVegetarianFood", // ベジタリアン料理があるお店
      ],
    });

    console.log(place);
    const photoUrl = place.photos[0].getURI();
    const encodedName = encodeURI(place.displayName);

    // 情報ウィンドウに表示したい HTML
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      `<h1 id="firstHeading" class="firstHeading">${place.displayName}</h1>` +
      `<img style="height: 200px; width: 200px" src=${photoUrl}>` +
      '<div id="bodyContent">' +
      `<p>ホームページ：${place.websiteURI}</p>` +
      `<p>営業時間：${place.regularOpeningHours.Gg[0]}</p>` +
      `<p>評価：${place.rating}</p>` +
      `<p>レビュー：${place.reviews[0].Fg}</p>` +
      `<a href="https://www.google.com/maps/search/?api=1&query=${encodedName}">Googleマップで見る</a>` +
      "</div>" +
      "</div>";

    // 情報ウィンドウを作成
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "コメダ",
    });

    // クリック リスナーを追加し、情報ウィンドウを設定
    marker.addListener("gmp-click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }

  getPlaceDetails();
}

initMap();
