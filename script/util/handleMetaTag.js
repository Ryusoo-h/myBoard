
const handleMetaTag = (metaData) => {
  const template = `
    <title>${metaData.title}</title>
    <meta name="description" content="${metaData.description}">
    <meta name="keywords" content="${metaData.keywords}">
    <meta property="og:url" content="${location.href}" />
    <meta property="og:title" content="${metaData.title}" />
    <meta property="og:description" content="${metaData.description}" />
    <meta property="og:image" content="../../image/owo.png" />
  `;

  document.getElementsByTagName('head')[0].insertAdjacentHTML("afterbegin", template);
};

export default handleMetaTag;
