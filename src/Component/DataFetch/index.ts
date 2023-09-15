import axios from 'axios';

export const getSlugFromURL = (url: string) => {
  const newUrl = url.replace(/\/+$/, '');
  const urlParts = newUrl.split('/');
  return urlParts[urlParts.length - 1];
};

const makeRequest = async (link: string) => {
  const slug = getSlugFromURL(link);
  if (link.includes('leetcode')) {
    return axios
      .post('http://127.0.0.1:5000/', {
        query:
          '\n    query questionContent($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    content\n    mysqlSchemas\n    dataSchemas\n  }\n}\n    ',
        variables: {
          titleSlug: `${slug}`,
        },
        operationName: 'questionContent',
      })
      .then((response) => response.data.data.question.content);
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
  return '<p>Neither leetcode not codingninjas</p>';
};

export default makeRequest;
