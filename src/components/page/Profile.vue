<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 学生个人基本信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <h3>个人信息</h3>
            <article>
                    <el-row :gutter="15">
                        <el-col :span="18">
                         <div>
                             <el-row :gutter="15">
                                 <el-col :span="8"><div class="grid-content ">姓名: {{profile.loginName}}</div></el-col>
                                 <el-col :span="8"><div class="grid-content ">学号：{{profile.studentnumber}}</div></el-col>
                                 <el-col :span="8"><div class="grid-content ">学习时间: {{profile.traintime}}个月</div></el-col>
                             </el-row>
                             <el-row :gutter="15">
                                 <el-col :span="8"><div class="grid-content ">性别：{{profile.sex}}</div></el-col>
                                 <el-col :span="8"><div class="grid-content ">专业：{{profile.collegemajor}}</div></el-col>
                                 <el-col :span="8"><div class="grid-content ">入学日期：{{profile.graduatedate}}</div></el-col>
                             </el-row>
                             <el-row :gutter="15">
                                 <el-col :span="8"><div class="grid-content ">民族：{{profile.nation}}</div></el-col>
                                 <el-col :span="8"><div class="grid-content ">联系电话：{{profile.telephone}}</div></el-col>
                                 <el-col :span="8"><div class="grid-content ">邮箱:{{profile.email}}</div></el-col>
                             </el-row>
                        </div>
                        </el-col>
                        <el-col :span="6">
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :headers="{ 'Authorization':header }"
                                :on-success="handleChange"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-col>
                    </el-row>
                    <el-row :gutter="15">
                        <el-col :span="6"><div class="grid-content ">籍贯：{{profile.homeaddress}}</div></el-col>
                        <el-col :span="6"><div class="grid-content ">学历层次：{{profile.schoolrecord}}</div></el-col>
                        <el-col :span="6"><div class="grid-content ">院校：{{profile.school}}</div></el-col>
                        <el-col :span="6"><div class="grid-content ">就业方向：{{profile.jobdesign}}</div></el-col>
                    </el-row>
           </article>
            </div>
    </div>
</template>

<script>
    import ElRow from "../../../node_modules/element-ui/packages/row/src/row";
    export default {
        components: {ElRow}, data: function(){
            return {
                imageUrl: '',
                profile:{},
                fileName:'',
                logoImg:'',
                header: '',
            }
        },
        created(){
            this.getData();
        },
        computed: {
            data(){
                const self = this;
                return self.tableData.filter(function(d){
                    return true;
                })

            }
        },
        methods: {
            // 上传图片方法
            handleChange(response, file, fileList){
                this.fileName = response.result.fileName
                this.logoImg = response.result.url
                this.addData.logo = response.result.url
            },
            //原本的element自带图片上传方法
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            //上传图片的对图片判定的筛选处理。。在上传文件之前调用的函数。
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            //接口数据的获取和绑定
            getData(){
                let self = this;
                if(process.env.NODE_ENV === 'development'){
                    self.url = '/student/api/findstudent';
                };
                self.$axios.get(self.url, {page:self.cur_page}).then((res) => {
                    self.profile = res.data.result;
                })
            },
        }
    }
</script>

<style>
    .ms-doc{
        width:100%;
        max-width: 1080px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        font-size: 16px;
    }
    .el-row {
        margin-bottom: 35px;
    }
    .el-row:last-child {
         margin-bottom: 0;
     }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .avatar-uploader{
        width:200px;
        display: inline-block;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width:180px;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
        float: right;
    }
</style>
