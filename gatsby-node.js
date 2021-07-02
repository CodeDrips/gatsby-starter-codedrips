// const path = require("path")

// const query = `
// {
//   allWpPage {
//     edges {
//       node {
//         id
//         slug
//         title
//       }
//     }
//   }
// }
// `

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const res = await graphql(query)

//   res.data.allWpPage.edges.map((edge) => {
//     let pathName = `/${edge.node.slug}/`
//     if (edge.node.slug === "test-page" ) return
//     if (edge.node.slug === "home") pathName = "/"
//     createPage({
//       path: pathName,
//       component: path.resolve("./src/templates/page.js"),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })
// }
