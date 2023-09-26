import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

const BannerLandingPage: React.FC<PageProps> = () =>
    <Layout.Default>
        <StaticImage src="../images/background.jpg" alt="Hintergrund" placeholder="blurred" layout="constrained" />
    </Layout.Default>

export default BannerLandingPage
export const Head: HeadFC = () => <title>JazzOfCourse</title>