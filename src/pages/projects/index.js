import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { portfolio, projectStyle } from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  // const img = data.image.nodes
  // console.log(img)

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projectStyle}>
          {projects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={getImage(
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  )}
                  alt="Banner"
                />
                <h3> {project.frontmatter.title} </h3>
                <p> {project.frontmatter.stack} </p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote! </p>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          stack
          slug
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`

/**
 * 
 * image: allFile(filter: { relativeDirectory: { eq: "thumbs" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
 * 
    En caso de no poder usar el AllMarkdownRemark, podemos utilizar esta query, añadiendo
    una variable para movernos por el array
 */


/**
 * If we want to sort by date, we must change those fields on graphql
 * And also check if we already have the 'date' added on our '.md' file
 */
