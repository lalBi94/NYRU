import Package from "../../../components/Package/Package"
import config from "./data/about.json"
import Layout from "../../../layout/Layout"
import Footer from "../../../components/Footer/Footer"

export default function About() {
    return (
        <Layout>
            <Package name={{fr: "A propos", en: "About me"}} data={config} isUniqueText={true} />
            <Footer/>
        </Layout>
    )
}