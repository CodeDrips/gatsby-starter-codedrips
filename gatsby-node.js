const query = `
{
  allWpPage {
    nodes {
      id
      uri
      settings {
        header
      }
    }
  }
  allWpPost {
    nodes {
      id
      uri
    }
  }
}
`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const res = await graphql(query)

  res.data.allWpPage.nodes.map((node) => {
    createPage({
      path: node.uri,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: node.id,
        header: node.settings.header,
      },
    })
  })

  res.data.allWpPost.nodes.map((node) => {
    createPage({
      path: node.uri,
      component: require.resolve("./src/templates/post.js"),
      context: {
        id: node.id,
        header: 'white',
      },
    })
  })

}