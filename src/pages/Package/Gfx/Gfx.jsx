import Package from "../../../components/Package/Package"
import config from "./data/gfx.json"
import Layout from "../../../layout/Layout"
import Footer from "../../../components/Footer/Footer"

export default function Gfx() {
    return (
        <Layout>
            <Package name={{fr: "GFX", en: "GFX"}} data={config} isUniqueText={false} />
            <Footer/>
        </Layout>
    )
}