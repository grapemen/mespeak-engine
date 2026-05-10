
// fuck you xomdjl_
// in all seriousness credit goes to wrapper offline devs
app.get("/eric", async function(req, res) {
  if (req.query) {
    if (req.query.text) {
      const text = req.query.text;
      const request = https.request(
        {
          host: "readloud.net",
          path: "/english/american/3-male-voice-eric.html",
		  method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
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
          path: "/english/american/28-female-voice-jennifer.html",
         		  method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
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
          path: "/english/british/1-male-voice-brian.html",
         		  method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
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
          path: "/english/british/1-male-voice-brian.html",
          		  method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
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
          path: "/icelandic/31-male-rodd-karl.html",
         		  method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
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
          path: "/english/american/29-male-voice-joey.html",
          		  method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
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
          path: "/danish/37-mandlig-stemme-mads.html",
          		  method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
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
          path: "/english/american/2-girl-s-voice-sally.html",
          		  method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
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
          path: "/english/american/25-child-s-girl-voice-ivy.html",
          		  method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
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
          path: "/english/australian/48-male-voice-russell.html",
          		  method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
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
          path: "/english/american/30-child-s-boy-voice-justin.html",
          		  method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
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
          path: "/portuguese/brasilian/46-voz-masculina-ricardo.html",
          method: "POST",
		  headers: { 							
		  "Content-Type": "application/x-www-form-urlencoded",
			},
		  },
		(r) => {
								let buffers = [];
								r.on("error", (e) => rej(e));
								r.on("data", (b) => buffers.push(b));
								r.on("end", () => {
									const html = Buffer.concat(buffers);
									const beg = html.indexOf("/tmp/");
									const end = html.indexOf("mp3", beg) + 3;
									const sub = html.subarray(beg, end).toString();

            https.get(
              {
                host: "readloud.net",
                path: sub,
                headers: {
			"Content-Type": "application/x-www-form-urlencoded",
                },
              },
              (r) => {
                buffers = [];
                r.on("data", (d) => buffers.push(d));
                r.on("end", async () => {

                  try {
                    const url = "https://readloud.net" + sub;
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
          butt0: "Submit",
        }).toString()
      );
      return res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    } else {
      res.send("No");
    }
  }
});
