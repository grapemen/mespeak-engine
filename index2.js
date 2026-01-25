
// fuck you xomdjl_
// in all seriousness credit goes to wrapper offline devs
app.get("/eric", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/english/american/3-male-voice-eric.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/jennifer", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/english/american/28-female-voice-jennifer.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/brian", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/english/british/1-male-voice-brian.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/brian", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/english/british/1-male-voice-brian.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/karl", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/icelandic/31-male-rodd-karl.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/joey", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/english/american/29-male-voice-joey.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/mads", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/danish/37-mandlig-stemme-mads.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/sally", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/english/american/2-girl-s-voice-sally.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/ivy", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/english/american/25-child-s-girl-voice-ivy.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/russell", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/english/australian/48-male-voice-russell.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/justin", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/english/american/30-child-s-boy-voice-justin.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});
app.get("/ricardo", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          port: 443,
          path: "/portuguese/brasilian/46-voz-masculina-ricardo.html",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
          },
        },
        (r) => {
          var buffers = [];
          r.on("data", (d) => buffers.push(d));
          r.on("end", () => {
            const html = Buffer.concat(buffers);
            const beg = html.indexOf("/tmp/");
            const end = html.indexOf(".mp3", beg) + 4;
            const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "http://readloud.net/" + sub;
                    const response = await axios({
                      url,
                      method: "GET",
                      responseType: "stream",
                    });
                    response.data.pipe(res);
                  } catch (e) {
                    console.error(e)
                  }

                })
              }
            );
          });
          r.on("error", function(e) {
            console.log(e);
          });
        }
      );
      request.end(
        new URLSearchParams({
          but1: text,
          butS: 0,
          butP: 0,
          butPauses: 0,
          but: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mp3'
      });
    } else {
      res.send("Missing parameters!\nThe parameters are: text");
    }
  }
});