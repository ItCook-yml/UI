<script setup lang="ts">
import { ref } from 'vue';




//用户头像
const userImg = "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"

const personalCenter = () =>{
    alert("personalCenter");
}

const exit = () =>{
    alert("exit");
}

</script>

<template>
    <div class="user">
        <el-space :size="13">
            <el-text class="mx-1" size="large"><slot>未登录</slot></el-text>
            <el-avatar :src=userImg />


            <el-dropdown>
                <el-icon :size="22" color="#606266">
                    <MoreFilled />
                </el-icon>
                <template #dropdown>
                    <el-dropdown-item @click="personalCenter">个人中心</el-dropdown-item>
                    <el-dropdown-item @click="exit" divided>退出登录</el-dropdown-item>
                </template>
            </el-dropdown>


        </el-space>

    </div>
</template>

<style scoped>
.user {
    position: absolute;
    top: 2vh;
    right: 1vw;
}

.block-col-2 .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>