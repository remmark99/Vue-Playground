<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <label>
                        Your First Name:
                        <input type="text" v-model.lazy="firstName">
                    </label>
                    <label>
                        Your Last Name:
                        <input type="text" v-model.lazy="lastName">
                    </label>
                    <label>
                        Your Full Name:
                        <full-name v-model="fullName"></full-name>
                    </label>
                    <label>
                        Your emal:
                        <input type="email" v-model.lazy="email">
                    </label>
                    <label>
                        Your password:
                        <input type="password" v-model.lazy="password">
                    </label>
                    <p>Would you like to store data?</p>
                    <div>
                        <label>
                            Yes
                            <input type="radio" value="yes" v-model.lazy="store">
                        </label>
                        <label>No
                            <input type="radio" value="no" v-model.lazy="store">   
                        </label>
                    </div>
                    <input type="submit" value="Submit" @click.prevent="isOn = !isOn">
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isOn">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ firstName }} {{ lastName }}</p>
                        <p>Custom Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ store }}</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'

    export default {
        data() {
            return {
                firstName: "",
                lastName: "",
                fullName: "",
                email: "",
                password: "",
                store: "",
                isOn: false
            }
        },
        components: {
            'fullName': FullName
        }
    }
</script>

<style>
</style>
