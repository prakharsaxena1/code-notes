const getSlugFromURL = (url: string) => {
  const newUrl = url.replace(/\/+$/, '');
  const urlParts = newUrl.split('/');
  return urlParts[urlParts.length - 1];
};

const makeLeetcodeRequest = (link: string) => {
  const slug = getSlugFromURL(link);
  const myHeaders = new Headers();
  myHeaders.append(
    'Cookie',
    'csrftoken=RlGIfg13kGoQIH3dxAC0Wlr3phrl2gxyWuWlSJMaUgXslCOrXe46SFnr5WJMMaLs',
  );
  myHeaders.append('User-Agent', 'PostmanRuntime/7.32.3');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Cookie',
    'csrftoken=RlGIfg13kGoQIH3dxAC0Wlr3phrl2gxyWuWlSJMaUgXslCOrXe46SFnr5WJMMaLs',
  );
  const raw = JSON.stringify({
    query:
      '\n    query questionContent($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    content\n    mysqlSchemas\n    dataSchemas\n  }\n}\n    ',
    variables: {
      titleSlug: `${slug}`,
    },
    operationName: 'questionContent',
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  return fetch('https://leetcode.com/graphql/', requestOptions as any);
};

export default makeLeetcodeRequest;
