// const express = require('express');
// const path = require('path');

// const app = express();

// app.use(express.static(__dirname + '/dist/coc'));
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/coc/index.html'));
// });

// app.listen(process.env.PORT,(x) => {
//   console.log("Express server listening on port %d in %s mode", x, app.settings.env);
// });

// function requireHTTPS(req, res, next) {
//   // The 'x-forwarded-proto' check is for Heroku
//   if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//       return res.redirect('https://' + req.get('host') + req.url);
//   }
//   next();
// }
// const express = require('express');
// const app = express();
// app.use(requireHTTPS);

// app.use(express.static('/dist/coc/'));

// app.get('/*', function(req, res) {
//   res.sendFile('index.html', {root: 'dist/coc/'}
// );
// });

// app.listen(8080, (x) => {
//     console.log("Express server listening on port %d in %s mode", 8080, app.settings.env);
//   });

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/coc'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/coc/index.html'));});
app.listen(process.env.PORT || 8080);