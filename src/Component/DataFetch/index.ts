import axios from 'axios';

export const getSlugFromURL = (url: string) => {
  const newUrl = url.replace(/\/+$/, '');
  const urlParts = newUrl.split('/');
  return urlParts[urlParts.length - 1];
};

const makeRequest = async (link: string) => {
  const slug = getSlugFromURL(link);
  if (link.includes('leetcode')) {
    // // Check for vercel
    // const { href } = window.location;
    // if (href.includes('vercel')) {
    //   return '<h1>Cannot fetch from leetcode without proxy</h1>';
    // }
    return axios
      .post('https://proxyserver-1bit.onrender.com/', {
        query:
          '\n    query questionContent($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    content\n    mysqlSchemas\n    dataSchemas\n  }\n}\n    ',
        variables: {
          titleSlug: `${slug}`,
        },
        operationName: 'questionContent',
      })
      .then((response) => {
        return response.data.data.question.content;
      });
  }
  if (link.includes('codingninjas')) {
    return axios
      .get(
        `https://api.codingninjas.com/api/v3/public_section/problem_detail?slug=${slug}`,
      )
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { description, sample_testcase } =
          response.data.data.offerable.problem;
        const code = `<div>
        ${description}
        <br />
        ${sample_testcase}
        </div>`;
        return code;
      });
  }
  if (link.includes('interviewbit')) {
    return axios.post('https://proxyserver-1bit.onrender.com/interviewbit', {
      slug,
    });
  }
  return '<p>GFG article</p>';
};

export default makeRequest;
