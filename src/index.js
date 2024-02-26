// マップを初期化
let map;

async function initMap() {
  // 東京駅の位置
  const position = { lat: 35.6811673, lng: 139.7670516 };

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
    zoom: 18,
    // 東京駅を中心として
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // img 要素生成
  const beachFlagImg = document.createElement("img");
  // 画像を指定
  beachFlagImg.src = "./img/maker.png";

  // 東京駅のマーカーを生成
  const marker = new AdvancedMarkerView({
    // マーカーを立てる地図を指定
    map,
    // 東京駅の位置に
    position,
    // マーカーを画像にする
    content: beachFlagImg,
  });

  // 情報ウィンドウに表示したい HTML
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">東京駅</h1>' +
    '<div id="bodyContent">' +
    "<p>テキストテキストテキスト</p>" +
    "<p>テキストテキストテキスト</p>" +
    "</div>" +
    "</div>";

  // 情報ウィンドウを作成
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "東京駅",
  });

  // クリック リスナーを追加し、情報ウィンドウを設定
  marker.addListener("gmp-click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

  // const request = {
  //   query: "Museum of Contemporary Art Australia",
  //   fields: ["name", "geometry"],
  // };

  // const service = new google.maps.places.PlacesService(map);

  // service.findPlaceFromQuery(request, (results, status) => {
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     for (let i = 0; i < results.length; i++) {
  //       createMarker(results[i]);
  //     }
  //     map.setCenter(results[0].geometry.location);
  //   }
  // });
}

initMap();

// Place ライブラリをインポート
const { Place } = await google.maps.importLibrary("places");

async function getPlaceDetails() {
  // プレイス ID を使用して、新しいプレイス インスタンスを作成
  const place = new google.maps.places.Place({
    id: "ChIJC3Cf2PuLGGAROO00ukl8JwA",
    requestedLanguage: "ja",
  });

  // Call fetchFields, passing the desired data fields.
  await place.fetchFields({
    fields: ["displayName", "formattedAddress", "servesVegetarianFood"],
  });
  // Show the result
  console.log(place.displayName);
  console.log(place.formattedAddress);
  console.log(place);
}
getPlaceDetails();
