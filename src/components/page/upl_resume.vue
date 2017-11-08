<template>
    <div>
        <!-- 编辑页面标题 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-upload2"></i> 功能</el-breadcrumb-item>
                <el-breadcrumb-item>上传简历</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">基本资料<span class="Little_Font">(+ 单击标题栏展开)</span></template>
                <el-row>
                    <el-col :span="3">
                        <div class="grid-content bg-blue">简历：</div>
                    </el-col>
                    <el-col :span="17">
                        <div class="grid-content flex">
                            <el-upload
                                action="/api/posts/"
                                multiple>
                                <el-input></el-input>
                            </el-upload>
                        </div>

                    </el-col>
                </el-row>
            </el-collapse-item>
        </el-collapse>

        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark  center-hr">
                    <el-button  >确认提交</el-button>
                    <el-button  >重新输入</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
    @import "/static/css/style.css";
</style>
