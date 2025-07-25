const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.proxyToAppsScript = functions.https.onRequest(async (req, res) => {
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbx7qwofGZ0EqYWl_7Qtg5ij2V16nARR-wtdGGD4BC8jo9mv2nqOb10ybHVjNUbX-piF/exec';

  try {
    const response = await fetch(scriptUrl, {
      method: 'GET', // atau 'POST' jika perlu
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    // Tambahkan header CORS
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(data);

  } catch (error) {
    console.error('Error:', error);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error: 'Proxy error', details: error.message });
  }
});
