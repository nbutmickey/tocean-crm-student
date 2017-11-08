<template>
    <div>
        <!-- 编辑页面标题 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-document"></i> 功能</el-breadcrumb-item>
                <el-breadcrumb-item>提交项目</el-breadcrumb-item>
            </el-breadcrumb>
        </div>


        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">基本资料<span class="Little_Font">(+ 单击标题栏展开)</span></template>
                <el-row>
                    <el-col :span="3" >
                        <div class="grid-content bg-blue">项目：</div>
                    </el-col>
                    <el-col :span="7">
                        <el-input class="grid-content bg-white"></el-input>
                    </el-col>
                    <el-col :span="3">
                    <div class="grid-content bg-blue">班级：</div>
                </el-col>
                    <el-col :span="7">
                        <el-input class="grid-content bg-white"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3" >
                        <div class="grid-content bg-blue">小组：</div>
                    </el-col>
                    <el-col :span="7">
                        <el-input class="grid-content bg-white"></el-input>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-blue">考评类型：</div>
                    </el-col>
                    <el-col :span="7">
                        <el-input class="grid-content bg-white"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <div class="grid-content bg-blue">源代码和文档：</div>
                    </el-col>
                    <el-col :span="17">
                        <div class="grid-content flex">
                            <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                            >
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
                    <el-button>确认提交</el-button>
                    <el-button>重新输入</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    @import "/static/css/style.css";
</style>
