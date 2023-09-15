import axios from 'axios';

export const getSlugFromURL = (url: string) => {
  const newUrl = url.replace(/\/+$/, '');
  const urlParts = newUrl.split('/');
  return urlParts[urlParts.length - 1];
};

const makeLeetcodeRequest = async (link: string) => {
  const slug = getSlugFromURL(link);
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
};

export default makeLeetcodeRequest;
