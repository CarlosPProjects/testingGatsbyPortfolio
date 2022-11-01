import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImage } = data.markdownRemark.frontmatter
  console.log(data)

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage
            image={getImage(featuredImage.childImageSharp.gatsbyImageData)}
            alt="featured"
          />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

/**
 * En este caso en la query deberemos pasarle una variable '$slug', para que nos devuelva
 * el contenido de que estamos buscando ya que esta ira variando dependiendo de la pagina
 * vaya creando.
 *
 */
