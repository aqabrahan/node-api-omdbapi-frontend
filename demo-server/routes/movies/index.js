const express = require('express')
const http = require('http')
const response2 = require('../../../../second-exercise/examples/response2.js')
const response3 = require('../../../../second-exercise/examples/response3.js')
const axios = require('axios');
const router = express.Router()

const client = axios.create({
  baseURL: 'http://www.omdbapi.com'
});

router.get('/:imdbId', async (req, res, next) => {
  try {
    const params = {
      apiKey: process.env.OMDBKEY,
      i: req.params.imdbId
    }
    client.get(``,{ params })
    .then(resp => {
      res.json(resp.data);
    })
    .catch(err => {
      res.status(500).json({message: 'Error'})
    });
  } catch (e) {
    next(e)
  }
})

router.get('/:imdbId/cast', async (req, res, next) => {
  try {
    res.json(response3);
  } catch (e) {
    next(e)
  }
})

module.exports = router
