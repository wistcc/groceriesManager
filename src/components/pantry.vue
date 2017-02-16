<template>
    <div>
        <div class="row text-right">
            <router-link to="/pending" class="btn btn-primary">Go to pending!</router-link>
        </div>
        <div class="row">
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
                            <button @click="decreaseQuantity(grocery)">-</button>
                            <span> {{grocery.quantity}} </span>
                            <button @click="increaseQuantity(grocery)">+</button>
                        </td>
                        <td>
                            {{grocery.reOrderPoint}}
                        </td>
                    </tr>
                </tbody>
            </table>
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