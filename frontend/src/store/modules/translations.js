import translationData from "@/assets/translations.json";

const translations = {
    namespaced: true,
    state: {
        language: 'en',
        registeredLanguages: ['en', 'nl'],
        translations: translationData
    },
    mutations: {
        setLanguage: (state, payload) => state.language = payload
    },
    actions: {
        changeLanguage(state, payload) {
            state.commit('setLanguage', payload)
        }
    },
    getters: {
        getAllTranslations: state => state.translations,
        getCurrentLanguage: state => state.language,
        getRegisteredLanguages: state => state.registeredLanguages,
        getTranslationsByPageName: (state, getters) => (name) => {
            const page = state.translations.pages.find(page => page.name === name);
            if(!page) {
                throw new Error("requested page doesn't exist!");
            }

            return getters['getTranslatedCopy'](page.copy);
        },
        getGlobalTranslation: (state, getters) => (key) => {
            const globalTranslation = state.translations.global[key];

            if(!globalTranslation) throw new Error("requested translation doesn't exist!");

            return getters['getTranslatedCopy'](state.translations.global[key]);
        },
        getTranslatedCopy: (state, getters) => (copy) => {
            const output = {};
            const languages = getters['getRegisteredLanguages'];

            for(const key of Object.keys(copy)) {
                if(Object.keys(copy[key]).filter(subKey => languages.includes(subKey)).length === 0) {
                    output[key] = getters['getTranslatedCopy'](copy[key]);
                } else {
                    output[key] = getters['getTranslation'](copy[key]);
                }
            }

            return output;
        },
        getTranslation: (state, getters) => (input) => {
            if (typeof input === "string") {
                if (input.startsWith("##")) {
                    const parts = input.split("##");
                    if (parts.length >= 2) {
                        return getters['getTranslationFromObject'](state[parts[1]]);
                    }
                }
                return input;
            } else if (typeof input === "object") {
                return getters['getTranslationFromObject'](input);
            } else {
                return "";
            }
        },
        getTranslationFromObject: (state, getters) => (input) => {
            const currentLanguage = getters['getCurrentLanguage'];

            //Extract correct item
            if (input) {
                return currentLanguage in input ? (input)[currentLanguage] : input.en;
            } else {
                return "";
            }
        }
    }
}

export default translations;