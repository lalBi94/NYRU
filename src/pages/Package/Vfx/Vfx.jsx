import Package from "../../../components/Package/Package"
import Layout from "../../../layout/Layout"
import config from "./data/vfx.json"
import Footer from "../../../components/Footer/Footer"

export default function Vfx() {
    return (
        <Layout>
            <Package name={{fr: "VFX", en: "VFX"}} data={config} isUniqueText={false} />
            <Footer/>
        </Layout>
    )
}