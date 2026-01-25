// ========================================================================
// Server init
// ========================================================================

// Filesystem reading functions
const fs = require('fs');

// Setup basic express server
var express = require('express');
var app = express();
var http = require("http");
const url = require('url');
var server = require('http').createServer(app, console.log());
app.use(express.static('./', {
  extensions: ['html']
}));
var meSpeak = require("mespeak")
meSpeak.loadConfig(require("mespeak/src/mespeak_config.json"))
meSpeak.loadVoice(require("mespeak/voices/en/en.json"))
console.log = function() { };
server.listenerCount(1);
// Start actually listening
server.listen(process.env.PORT || 5000);
app.get('/', function(req, res) {
  if (req.query.text && req.query.pitch && req.query.speed) {
    const text = req.query.text.replaceAll("[[", "").replaceAll("]]", "").replaceAll("- ", "minus ")
    var data = meSpeak.speak(text, { pitch: req.query.pitch, speed: req.query.speed, rawdata: "buffer" });

    fs.writeFileSync("test.wav", data);
    const stream = fs.createReadStream('test.wav')
    stream.pipe(res)
    return res.writeHead(200, {
      'Content-Type': 'audio/wav'
    });
  } else {
    res.send("Hello World")
  }
})

var https = require("https");
var axios = require("axios");

function guidGen() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  let id = '';
  for (let i = 0; i < 4; i++)
    id += s4();
  return id;
}

app.get('/voiceforge', function(req, res) {
  if (req.query.text && req.query.voice) {
    var random = Math.random();
    const q = new URLSearchParams({
      msg: req.query.text,
      voice: req.query.voice,
      email: "null"
    }).toString();

    https.get({
      hostname: "api.voiceforge.com",
      path: `/swift_engine?${q}`,
      headers: {
        "User-Agent": "just_audio/2.7.0 (Linux;Android 11) ExoPlayerLib/2.15.0",
        "HTTP_X_API_KEY": "8b3f76a8539",
        "Accept-Encoding": "identity",
        "Icy-Metadata": "1",
      }
    }, async (r) => {
      r.pipe(res);
    });
  } else {
    res.send("Hello World")
  }
  return res.writeHead(200, {
    'Content-Type': 'audio/wav'
  });
})