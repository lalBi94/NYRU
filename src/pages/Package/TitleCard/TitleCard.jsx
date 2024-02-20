import Package from "../../../components/Package/Package"
import config from "./data/title_card.json"
import Layout from "../../../layout/Layout"
import Footer from "../../../components/Footer/Footer"

export default function TitleCard() {
    return (
        <Layout>
            <Package name={{fr: "Cartes de titre", en: "Title cards"}} data={config} isUniqueText={true} />
            <Footer/>
        </Layout>
    )
}