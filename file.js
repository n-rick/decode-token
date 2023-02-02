"use strict";
exports.__esModule = true;
var jwt_decode_1 = require("jwt-decode");
var jeton = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJvYXV0aC1qd3QiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY3NTMyOTY4MCwiaWF0IjoxNjc1MzI5NjIwLCJzY29wZSI6IlJPTEVfQURNSU4ifQ.e-V3R5TetCdIcD0dEu1LQlc09fpSKNVExiP3QwMu823PQWf0XAKlLw5Hu6d-f894WrZmE7Uozv0wLvzv8OVkDo_YV8H0HA4BJU6zcDnncETCC_bIRr2xDjMIBkBfFiS4UcxOYjrUltdFdJP7VxhHMx6R1fiKmCx58SVx0iq7t0uq-LYjVR_r5WpC3LmZvsgLfIG-VyUvhBExIMQncdGwTa7OEG_7AbxUpUM1yP7WsQoNrn7-a2iRtGUUqKNNQyQ3aUFLR8a10G1JoEFuP0JE8kisMMibzNgEcbWHX03WOr-W0szXwK8wXbPWoP6BZ1EMbea4snGwtl8xm56ILz091w";
var decoded = (0, jwt_decode_1["default"])(jeton);
console.log(decoded);
console.log(decoded.exp); // date d'expiration géénérée par Spring,
console.log(Date.now()); // date actuelle
var expiration = decoded.exp * 1000; // conversion en millisecondes
console.log(expiration > Date.now());
