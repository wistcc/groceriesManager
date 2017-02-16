<template>
    <div>
        <h3>Add new item</h3>
        <hr/>
        <form class="form-inline">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" v-model="newGrocery.name">
            </div>
            <div class="form-group">
                <label for="reOrderPoint">Re-order point:</label>
                <input type="number" class="form-control" id="reOrderPoint" v-model="newGrocery.reOrderPoint">
            </div>
            <button type="submit" class="btn btn-success" @click.prevent="onClick">Add grocery</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newGrocery: {
                }
            }
        },
        methods: {
            onClick() {
                this.newGrocery.quantity = 0;
                this.$emit("groceryAdded", this.newGrocery);
                this.newGrocery = {};
            }
        }
    }

</script>