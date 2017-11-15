<template>
    <div>
        <!-- 编辑页面标题 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-edit"></i> 功能</el-breadcrumb-item>
                <el-breadcrumb-item>提交作业</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">基本资料<span class="Little_Font">(+ 单击标题栏展开)</span></template>
                <div  class="v-div">
                    <el-input class="v-input">
                        <template slot="prepend">标题：</template>
                    </el-input>
                    <el-input class="v-input">
                        <template slot="prepend">学员：</template>
                    </el-input>
                </div>
                <div  class="v-div" >
                    <el-input type="file" class="upload">
                        <template slot="prepend">源代码和文档：</template>
                    </el-input>
                </div>
            </el-collapse-item>
        </el-collapse>

        <div class=" bg-div  center">
            <el-button>确认提交</el-button>
            <el-button>重新输入</el-button>
        </div>
    </div>
</template>


<style scoped>
    .Little_Font{
        margin-left: 10px;
        font-size:10px;
        font-weight:normal;
    }
    .v-input{
        width: 50%;
        margin-bottom: 25px;
    }
    .v-div{
        display: flex;
        flex-direction: row;
    }
    .center{
        text-align: center;
    }
    .bg-div {
        background: #99a9bf;
        border: 1px solid  #d3e0e9;
    }
</style>
