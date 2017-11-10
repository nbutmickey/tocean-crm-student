<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-warning"></i> 学员信息查询</el-breadcrumb-item>
                <el-breadcrumb-item>演讲查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="班级：">
                    <el-select v-model="formInline.fclass" placeholder="">
                        <el-option label="" value="0093"></el-option>
                        <el-option label="" value="0241"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学员：">
                    <el-input v-model="formInline.fstudent" placeholder="" style="width: 150px;"></el-input>
                </el-form-item>
                <el-form-item label="项目经理：">
                    <el-input v-model="formInline.fprojectManager" placeholder="" style="width: 150px;"></el-input>
                </el-form-item>
                <el-form-item label="时间:">
                    <div v-model="formInline.ftime" placeholder="" style="width: 200px;">
                    <el-input></el-input>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="调查列表 (+ 单击标题栏展开)" name="1">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column type="selection" width="50"></el-table-column>
                    <el-table-column prop="number" label="序号" width="80"></el-table-column>
                    <el-table-column prop="class" label="班级" width="100"></el-table-column>
                    <el-table-column prop="student" label="学员" width="90"></el-table-column>
                    <el-table-column label="演讲日期"  width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column prop="content" label="演讲内容" width="200"></el-table-column>
                    <el-table-column prop="projectManager" label="项目经理" width="90"></el-table-column>
                    <el-table-column prop="evaluate" label="评价"></el-table-column>
                    <el-table-column prop="score" label="评分" width="50"></el-table-column>
                </el-table>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="pagination">
            <el-pagination
                @current-change ="handleCurrentChange"
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    export default {
        components: {ElInput, ElFormItem}, data() {
            return {
                tableData: [{
                    number:'1',
                    class:'0903',
                    student: '张鑫 ',
                    date: '2009-08-12',
                    content:'Struts知识回顾',
                    projectManager:'尹伟明',
                    evaluate:'准备充分，条理清楚，与观众沟通较多，较有吸引力 ',
                    score: '1'
                }, {
                    number:'1',
                    class:'0903',
                    student: '张鑫 ',
                    date: '2009-08-12',
                    content:'Struts知识回顾',
                    projectManager:'尹伟明',
                    evaluate:'准备充分，条理清楚，与观众沟通较多，较有吸引力 ',
                    score: '1'
                }, {
                    number:'1',
                    class:'0903',
                    student: '张鑫 ',
                    date: '2009-08-12',
                    content:'Struts知识回顾',
                    projectManager:'尹伟明',
                    evaluate:'准备充分，条理清楚，与观众沟通较多，较有吸引力 ',
                    score: '1'
                }],
                formInline: {
                    fclass: '',
                    fstudent: '',
                    fprojectManager:'',
                    ftime:''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleCurrentChange(val){
                this.cur_page = val;
                this.getData();
            }/*,
            getData(){
                let self = this;
                if(process.env.NODE_ENV === 'development'){
                    self.url = '/ms/vue/stu';
                };
                self.$axios.post(self.url, {page:self.cur_page}).then((res) => {
                    self.tableData = res.data.stuCheck;
                })
            }*/
        }
    }
</script>
