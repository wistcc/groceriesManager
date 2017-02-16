<template>
    <div>
        <div class="row text-right">
            <router-link to="/pending" class="btn btn-primary">Go to pending</router-link>
        </div>
        <div class="row jumbotron">
            <div v-if="pantryGroceries.length > 0">
                <h3>Items on pantry</h3>
                <hr/>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Re-Order Point</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="grocery in pantryGroceries" :class="{ danger : (grocery.quantity < grocery.reOrderPoint) }">
                            <td>
                                {{grocery.name}}
                            </td>
                            <td>
                                <button class="btn btn-danger" @click="decreaseQuantity(grocery)">-</button>
                                <span> {{grocery.quantity}} </span>
                                <button class="btn btn-success" @click="increaseQuantity(grocery)">+</button>
                            </td>
                            <td>
                                {{grocery.reOrderPoint}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="pantryGroceries.length <= 0">
                <p>No items on pantry. <router-link to="/pending">Let's add some items.</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
    import localStorageService from 'core/localStorageService';

    export default {
        data() {
            return {
                groceries: []
            }
        },
        mounted() {
            this.groceries = localStorageService.getGroceries();
        },
        computed: {
            pantryGroceries() {
                return this.groceries.filter(grocery => grocery.quantity > 0);
            }
        },
        methods: {
            decreaseQuantity(grocery) {
                grocery.quantity--;
                localStorageService.setGroceries(this.groceries);
            },

            increaseQuantity(grocery) {
                grocery.quantity++;
                localStorageService.setGroceries(this.groceries);
            }
        }
    }

</script>