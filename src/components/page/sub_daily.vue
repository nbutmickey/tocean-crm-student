<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-star-off"></i> 提交报告</el-breadcrumb-item>
                <el-breadcrumb-item>提交日报</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="调查列表 (+ 单击标题栏展开)" name="1">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="number" label="序号" width="200"></el-table-column>
                        <el-table-column prop="tname" label="调查名称" width="200"></el-table-column>
                        <el-table-column prop="tcontent" label="调查内容" width="200"></el-table-column>
                        <el-table-column prop="tpeople" label="考评对象" width="200"></el-table-column>
                        <el-table-column prop="ttime" label="调查时间" width="200"></el-table-column>
                        <el-table-column></el-table-column>
                    </el-table>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>


<script>

</script>


