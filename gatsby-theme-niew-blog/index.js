const createPosts = (createPage, createRedirect, edges) => {
  edges.forEach(({ node }, i) => {
    // ...

    createPage({
      path: pagePath,
      component: require.resolve(`./src/templates/post.js`),
      context: {
        id: node.id,
        prev,
        next,
      },
    });
  });
};
