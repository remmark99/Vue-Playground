<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>{{ text | reverse }}</h1>
                <h1>{{ text | countChars }}</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->


                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h1>{{ reversedText }}</h1>
                <h1>{{ textWithLength }}</h1>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <app-second></app-second>
            </div>
        </div>
    </div>
</template>

<script>
    import Second from './Second.vue'

    export default {
        data() {
            return {
                text: "Filters & Mixins"
            }
        },
        filters: {
            reverse(string) {
                return string.split('').reverse().join('');
            }
        },
        computed: {
            reversedText() {
                return this.text.split('').reverse().join('');
            },
            textWithLength() {
                return `${this.text} (${this.text.length})`;
            }
        },
        components: {
            'appSecond': Second
        }
    }
</script>

<style>
</style>
