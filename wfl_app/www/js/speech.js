var marker = [];

var image = {
url : 'images/map/marker.png',
scaledSize : new google.maps.Size(34, 50)
// ↑ここで画像のサイズを指定
}

var infoWindow = [];



var markerData = [ // マーカーを立てる場所名・緯度・経度
    {
        name: 'にこ淵',
        lat: 33.705816, 
        lng: 133.341167,
        icon: image 
    }, {
        name: '大樽の滝',
        lat: 33.521375, 
        lng: 133.242819,
        icon: image 
    }, {
        name: '瀬戸川渓谷',
        lat: 33.737271, 
        lng: 133.403390,
        icon: image 
    }
];

window.onload =function() {
  if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
		  //var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		  var latlng = new google.maps.LatLng(33.615562, 133.337790);
		  var options = {
			  zoom: 11,
			  center: latlng,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
		  };
		  var map = new google.maps.Map(document.getElementById('map_canvas'), options);
		  /*var marker = new google.maps.Marker({
			  position: latlng,
			  map: map,
			  title: '現在地'
		  });*/
		  
		  
		// マーカー毎の処理
			for (var i = 0; i < markerData.length; i++) {
				markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
				marker[i] = new google.maps.Marker({ // マーカーの追加
					position: markerLatLng, // マーカーを立てる位置を指定
					map: map, // マーカーを立てる地図を指定
					icon: image
				});

				infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
					content: '<a href="taki' + i + '.html"><div class="sample">' + markerData[i]['name'] + '</div></a>' // 吹き出しに表示する内容
				});
				
				markerEvent(i); // マーカーにクリックイベントを追加
			}

			function markerEvent(i) {
				var openFlag = [0];
				marker[i].addListener('click', function(){
					var id=this.get("id");
					if(openFlag[id]==0){
						infoWindow[i].open(map, this);
						openFlag[id]=1;
					}else{
						infoWindow[i].close();
						openFlag[id]=0;
					};
				})
			};
		  
		  
		  
	  }, function(e) {
		  document.getElementById('message').innerHTML = typeof e == 'string' ? e : e.message;
	  });
  } else {
	  document.getElementById('message').innerHTML = 'Location APIがサポートされていません。';
  }
};