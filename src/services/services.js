export default class ZServices {
    static LANG = {fr: "FR", en: "EN", stocker_name: "nyru_lang"}

    static goTo(url, refresh=null) {
        window.location.href = url
        if(refresh) window.location.reload()
    }

    static changeTitle(title) {
        document.title = title
    }

    static isFrench(selectedLang) {
        return selectedLang === this.LANG.fr
    }
}  