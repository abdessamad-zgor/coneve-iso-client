const express = require('express');
const fetch = require('../../helpers/fetch').default;

let router = new express.Router();

router.post('/login', async (req, res) => {
  try {
    let response = await fetch({
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.API_KEY}`,
      body: req.body,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    res.status(200).json(response);
  } catch (e) {
    if (e.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(e.response.data);
      console.log(e.response.status);
      console.log(e.response.headers);
      res.status(500).json({ status: 'error', error: e.response });
    } else if (e.request) {
      // The request was made but no response was received
      // `e.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(e.request);
      res.status(500).json({ status: 'error', error: e.request });
    } else {
      console.log('Error', e.message);
      res.status(500).json({ status: 'error', error: e.message });
    }
  }
});

router.post('/signup', async (req, res) => {
  try {
    let response = await fetch({
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.API_KEY}`,
      body: req.body,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    res.status(200).json(response);
  } catch (e) {
    if (e.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(e.response.data);
      console.log(e.response.status);
      console.log(e.response.headers);
      res.status(500).json({ status: 'error', error: e.response });
    } else if (e.request) {
      // The request was made but no response was received
      // `e.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(e.request);
      res.status(500).json({ status: 'error', error: e.request });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Something else');
      console.log('Error', e.message);
      res.status(500).json({ status: 'error', error: e.message });
    }
  }
});

module.exports = router;
