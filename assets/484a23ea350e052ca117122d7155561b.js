(function() {

	const utcTimestamp = new Date().getTime() + 10  ;


  var _id = "484a23ea350e052ca117122d7155561b";
  while (document.getElementById("timer" + _id)) _id = _id + "0";
  document.write("<div id='timer" + _id + "' style='min-width:243px;height:45px;'></div>");
  var _t = document.createElement("script");
  _t.src = "//megatimer.ru/timer/timer.min.js?v=1";
  var _f = function(_k) {
    var l = new MegaTimer(_id, {
      "view": [0, 0, 1, 1],
      "type": {
        "currentType": "2",
        "params": {
          "startByFirst": false,
         
          "days": "0",
         
          "hours": "0",
          "minutes": "10",
          "utc": utcTimestamp
        }
      },
      "design": {
        "type": "plate",
        "params": {
          "round": "10",
          "background": "solid",
          "background-color": "#eee",
          "effect": "flipchart",
          "space": "0",
          "separator-margin": "8",
          "number-font-family": {
            "family": "Comfortaa",
            "link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
          },
          "number-font-size": "18",
          "number-font-color": "#000",
          "padding": "12",
          "separator-on": false,
          "separator-text": ":",
          "text-on": false,
          "text-font-family": {
            "family": "Comfortaa",
            "link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
          },
          "text-font-size": "15",
          "text-font-color": "red"
        }
      },
      "designId": 2,
      "theme": "white",
      "width": 243,
      "height": 45
    });
    if (_k != null) l.run();
  };
  _t.onload = _f;
  _t.onreadystatechange = function() {
    if (_t.readyState == "loaded") _f(1);
  };
  var _h = document.head || document.getElementsByTagName("head")[0];
  _h.appendChild(_t);
}).call(this);