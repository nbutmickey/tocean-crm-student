<template>
    <div>
        <!-- 编辑页面标题 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-upload2"></i> 功能</el-breadcrumb-item>
                <el-breadcrumb-item>上传简历</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-card class="box-card">
            <div slot="header" class="card_header">
                <span class="label">简历名称</span>
                <el-input placeholder="请填写简历名称"></el-input>
            </div>
            <el-collapse>
                <el-collapse-item title="简历备注" >
                    <textarea class="disc"></textarea>
                </el-collapse-item>
                <el-collapse-item title="简历上传">
                    <input type="file" />
                </el-collapse-item>
                <el-collapse-item title="图片上传">
                    <input type="file"/>
                </el-collapse-item>
            </el-collapse>
        </el-card>
    </div>
</template>
<script>

</script>
<style>
    .label{
        width: 8%;
        margin: auto;
    }
    .card_header{
        display: flex;
        flex-direction: row;
    }
    .disc{
        width: 100%;
        background: none;
        padding: 10px 0;
        border: solid 1px #DFE6EC;
    }



</style>
