const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}

/**
 * Generaremos una pagina automatica para cada proyecto creado en nuestra carpeta projects
 * Generaremos una query que recoja el slug para luego crear una pagina con esa ruta
 *
 *
 */
