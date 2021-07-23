import {h, resolveComponent} from 'vue'

export default {
    setup() {
        const ButtonCounter = resolveComponent('button-counter')
        return () => h(ButtonCounter, {a:'a'},['text'],);
    }
}