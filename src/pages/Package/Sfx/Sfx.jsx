import Package from "../../../components/Package/Package"
import config from "./data/sfx.json"
import Layout from "../../../layout/Layout"
import Footer from "../../../components/Footer/Footer"

export default function Sfx() {
    return (
        <Layout>
            <Package name={{fr: "SFX", en: "SFX"}} data={config} isUniqueText={false} />
            <Footer/>
        </Layout>
    )
}