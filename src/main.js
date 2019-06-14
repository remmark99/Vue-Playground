import Vue from 'vue'
import App from './App.vue'

Vue.filter('countChars', function(string) {
    return `${string} (${string.length})`;
});

Vue.mixin({
    computed: {
        reversedText() {
            return this.text.split('').reverse().join('');
        },
        textWithLength() {
            return `${this.text} (${this.text.length})`;
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
