import express from 'express';
import cors from 'cors';
import cheerio from 'cheerio';
import axios from 'axios';

const app = express();

// Middlewares
app.use(
  cors({
    origin: '*', // Allow requests from this origin
    methods: ['POST'], // Specify the allowed HTTP methods
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.post('/', async (req, res) => {
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://leetcode.com/graphql/',
    headers: {
      'Content-Type': 'application/json',
      Cookie:
        'csrftoken=RlGIfg13kGoQIH3dxAC0Wlr3phrl2gxyWuWlSJMaUgXslCOrXe46SFnr5WJMMaLs',
    },
    data: req.body,
  };
  const response = await axios.request(config);
  const responseData = await response.data;
  return res.json({
    data: responseData.data,
  });
});

app.post('/interviewbit', async (req, res) => {
  const config = {
    method: 'get',
    url: `https://www.interviewbit.com/problems/${req.body.slug}`,
  };
  const response = await axios.request(config);
  const html = await response.data;
  const $ = cheerio.load(html);
  // Find meta tags with attribute 'name' equals to 'description'
  const description = $('meta[name="description"]').attr('content');
  if (description) {
    return res.json({
      data: description,
    });
  }
  return res.json({
    data: config.url,
  });
});

// Invalid request handler
app.use('*', (req, res) => {
  res.json({
    message: `INVALID REQUEST AT: ${req.originalUrl}`,
  });
});

export default app;
