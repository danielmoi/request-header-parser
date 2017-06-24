const express = require('express');

const router = express.Router();

router.get('/*', (req, res) => {
  const ipaddress = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

  const language = req.headers['accept-language'].split(',')[0];

  const software = req.headers['user-agent'].split(') ')[0].split(' (')[1];

  res.send({
    ipaddress,
    language,
    software,
  });
});

module.exports = router;
