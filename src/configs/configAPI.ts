const { default: axios } = require("axios");

export default axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export const API = "https://v1-rm-be-nestjs-785603e48f0d.herokuapp.com";
export const downLoadFile =
  "https://v1-rm-be-nestjs-785603e48f0d.herokuapp.com/api/v1/files/download-file";
export const loadFile = "https://drive.google.com";
//export const herokuAPI = "http://localhost:8000";
// export const herokuAPI =
//   "https://verbose-trout-wrrqg4pwx7p525499-8000.app.github.dev";
