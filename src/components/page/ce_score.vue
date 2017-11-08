<template>
    <div>
        <!-- 编辑页面标题 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> 功能</el-breadcrumb-item>
                <el-breadcrumb-item>综合考评分</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="handle-box">
            <el-form :inline="true"  class="demo-form-inline">
                <el-form-item label="班级："  >
                    <el-select v-model="select_class"class="v-input" >
                        <el-option
                            v-for="item in select_classes"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学员：" >
                    <el-input class="v-input"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="search" >搜索</el-button>
                </el-form-item>
            </el-form>
        </div>


        <el-table
            :data="data"
            border
            style="width: 100%;text-align: center"
            height="700"
            ref="multipleTable">
            <el-table-column
                prop="index"
                label="序号">
            </el-table-column>
            <el-table-column
                prop="member"
                label="学员">
            </el-table-column>
            <el-table-column
                prop="classroom"
                label="班级">
            </el-table-column>
            <el-table-column
                prop="attendance"
                label="考勤扣分">
            </el-table-column>
            <el-table-column
                prop="Discipline"
                label="违纪扣分">
            </el-table-column>
            <el-table-column
                prop="praise"
                label="表扬加分">
            </el-table-column>
            <el-table-column
                prop="score"
                label="考评加分">
            </el-table-column>
            <el-table-column
                prop="raw"
                label="原始分">
            </el-table-column>
            <el-table-column
                prop="diathesis"
                label="职业素质分">
            </el-table-column>
            <el-table-column
                prop="project"
                label="项目分">
            </el-table-column>
            <el-table-column
                prop="task"
                label="作业分">
            </el-table-column>
            <el-table-column
                prop="raw2"
                label="原始分">
            </el-table-column>
            <el-table-column
                prop="technical "
                label="技术能力分">
            </el-table-column>
            <el-table-column
                prop="communication"
                label="沟通能力分">
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                @current-change ="handleCurrentChange"
                layout="prev, pager, next"
                :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_class: '',
                is_search: false,
                select_classes: ['ASD08061', 'ASD08062', 'ASD0807','ASD0808','0803','0804','SD0806','SD0808']
            }
        },
        created(){
            this.getData();
        },computed: {
            data(){
                const self = this;
                return self.tableData.filter(function(d){
                    return true;
                })
            }
        },
        methods: {
            handleCurrentChange(val){
                this.cur_page = val;
                this.getData();
            },
            getData(){
                let self = this;
                if(process.env.NODE_ENV === 'development'){
                    self.url = '/ms/vue/stu';
                };
                self.$axios.post(self.url, {page:self.cur_page}).then((res) => {
                    self.tableData = res.data.stuScore;
                })
            },
            search(){
                this.is_search = true;
            }
        }
    }

</script>

<style scoped>
    .v-input{
        width: 120px;
    }
    .el-table .cell{
        text-align: center;
    }
</style>
