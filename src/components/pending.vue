<template>
    <div>
        <div class="row text-right">
            <router-link to="/" class="btn btn-primary"><i class="glyphicon glyphicon-arrow-left"></i> Go to Pantry</router-link>
        </div>

        <div class="row jumbotron">
            <AddGrocery @groceryAdded="groceryAdded"></AddGrocery>
        </div>

        <div class="row jumbotron" v-if="pendingGroceries.length > 0">
            <h3>Pending items</h3>
            <hr/>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Re-Order Point</th>
                        <th>Add to cart</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="grocery in pendingGroceries">
                        <td>
                            {{grocery.name}}
                        </td>
                        <td>
                            {{grocery.quantity}}
                        </td>
                        <td>
                            {{grocery.reOrderPoint}}
                        </td>
                        <td>
                            <input type="number" v-model="grocery.onCart" @blur="addtoCart(grocery)">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="row jumbotron" v-if="cartGroceries.length > 0">
            <h3>Cart</h3>
            <hr/>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Re-Order Point</th>
                        <th>Added to cart</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="grocery in cartGroceries">
                        <td>
                            {{grocery.name}}
                        </td>
                        <td>
                            {{grocery.quantity}}
                        </td>
                        <td>
                            {{grocery.reOrderPoint}}
                        </td>
                        <td>
                            <input type="number" v-model="grocery.onCart" @blur="addtoCart(grocery)">
                        </td>
                    </tr>
                </tbody>
            </table>

            <button class="btn btn-success" @click.prevent="saveCart">Add to pantry</button>
        </div>

        <div class="row jumbotron" v-if="cartGroceries.length <= 0 && pendingGroceries.length > 0">
            <p>No items on cart. Add some from the pending list just typing how many of that item you will add to the cart.</p>
        </div>
    </div>
</template>

<script>
    import AddGrocery from 'components/AddGrocery';
    import localStorageService from 'core/localStorageService';

    export default {
        components: {
            AddGrocery
        },
        data() {
            return {
                groceries: []
            }
        },
        mounted() {
            this.groceries = localStorageService.getGroceries();
        },
        computed: {
            pendingGroceries: {
                cache: false,
                get: function () {
                    return this.groceries.filter(grocery => grocery.quantity < grocery.reOrderPoint && (grocery.onCart === undefined || grocery.onCart <= 0));
                }
            },
            cartGroceries: {
                cache: false,
                get: function () {
                    return this.groceries.filter(grocery => grocery.onCart > 0);
                }
            }
        },
        methods: {
            groceryAdded(grocery) {
                this.groceries = localStorageService.addGrocery(grocery);
            },
            addtoCart(grocery) {
                let selected = this.groceries.find(current => current.id === grocery.id);
                selected.onCart = grocery.onCart;
            },
            saveCart() {
                //removing onCart property
                this.groceries = this.groceries.map(current => {
                    current.quantity += current.onCart | 0;
                    delete current.onCart
                    return current;
                });
                localStorageService.setGroceries(this.groceries);
            }
        }
    }

</script>