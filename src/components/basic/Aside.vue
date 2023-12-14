<script setup>
import { ref } from 'vue';
const menuItems = ref([
    {
        index: '1',
        title: '1',
        children: [
            {
                index: '1-1',
                title: '1-1',
                children: [
                    {
                        index: '1-1-1',
                        title: '1-1-1'
                    },
                    {
                        index: '1-1-2',
                        title: '1-1-2'
                    },
                    {
                        index: '1-1-3',
                        title: '1-1-3'
                    }
                ]               
            },
            {
                index: '1-2',
                title: '1-2',
                children: [
                    {
                        index: '1-2-2',
                        title: '1-2-2'
                    },
                    {
                        index: '1-2-2',
                        title: '1-2-2'
                    },
                    {
                        index: '1-2-3',
                        title: '1-2-3'
                    }
                ]
            }
        ]
    }
]);
</script>


<template>
    <el-aside width="18vw" style="height: 90vh;">
        <el-scrollbar>
            <el-menu :default-openeds="[menuItems[0].index]">
                <template v-for="menuItem in menuItems">
                    <el-sub-menu :index="menuItem.index">
                        <template #title>{{ menuItem.title }}</template>
                        <template v-for="child in menuItem.children">
                            <el-sub-menu :index="child.index">
                                <template #title>{{ child.title }}</template>
                                <el-menu-item v-for="subChild in child.children" :index="subChild.index">
                                    <template #title>{{ subChild.title }}</template>
                                </el-menu-item>
                            </el-sub-menu>
                        </template>
                    </el-sub-menu>
                </template>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<style>
.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}
</style>