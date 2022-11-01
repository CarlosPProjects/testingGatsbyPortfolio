import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)

  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX desgigner & web developer based in Valencia</p>
          <Link className={btn} to="/projects">
            My Portfolio Project
          </Link>
        </div>
        <GatsbyImage image={image} alt="Banner" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
