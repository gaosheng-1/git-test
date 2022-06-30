
<template>
    <CheckboxGroup v-model="border">
        <Checkbox label="香蕉" border></Checkbox>
        <Checkbox label="苹果" border></Checkbox>
        <Checkbox label="西瓜" border></Checkbox>
    </CheckboxGroup>
</template>
<script>
    export default {
        data () {
            return {
                border: ['香蕉']
            }
        }
    }
</script>

<script>
export default {

}
</script>

<style>

</style>