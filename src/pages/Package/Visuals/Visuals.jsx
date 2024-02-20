import Package from "../../../components/Package/Package"
import config from "./data/visuals.json"
import Layout from "../../../layout/Layout"
import Footer from "../../../components/Footer/Footer"

export default function Visuals() {
    return (
        <Layout>
            <Package name={{fr: "Visuels", en: "Visuals"}} data={config} isUniqueText={false} />
            <Footer/>
        </Layout>
    )
}