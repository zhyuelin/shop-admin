<template>
    <div class="admin">
        <el-container class="admin_container">
            <el-aside width="200px">
                <app-aside></app-aside>
            </el-aside>
            <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Aside from '../components/Aside'
export default {
    name: "admin",
    components: {
        "app-aside": Aside
    }
};
</script>

<style>
    .admin {
        position: fixed;
        width: 100%;
        top: 0;
        bottom: 0;
    }

    .admin_container {
        height: 100%;
    }

    .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
