
<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>当前页面</el-breadcrumb-item>
                <el-breadcrumb-item>分组讨论查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="handle-box">
            <el-form :inline="true"  class="demo-form-inline">
                <el-form-item label="班级：">
                    <el-select v-model="select_class" class="v-input">
                        <el-option
                            v-for="item in select_classes"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="分组：">
                    <el-select v-model="select_group" class="v-input">
                        <el-option
                            v-for="item in select_groups"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="项目经理：">
                    <el-input class="v-input"></el-input>
                </el-form-item>
                <el-form-item label="时间：">
                    <el-input class="v-input"></el-input>
                </el-form-item>
                <el-form-item label="至">
                    <el-input class="v-input"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="search" >搜索</el-button>
                </el-form-item>
            </el-form>
        </div>


        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">分组讨论信息列表 <span class="Little_Font">(+ 单击标题栏展开)</span></template>
                    <el-table
                        :data="data"
                        border
                        style="width: 100%;text-align: center"
                        ref="multipleTable"
                        height="720"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            prop="index"
                            label="序号">
                        </el-table-column>
                        <el-table-column
                            prop="class"
                            label="班级">
                        </el-table-column>
                        <el-table-column
                            prop="member"
                            label="学员">
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            label="演讲日期">
                        </el-table-column>
                        <el-table-column
                            prop="content"
                            label="演讲内容">
                        </el-table-column>
                        <el-table-column
                            prop="manager"
                            label="项目经理">
                        </el-table-column>
                        <el-table-column
                            prop="evaluate"
                            label="评价">
                        </el-table-column>
                        <el-table-column
                            prop="score"
                            label="评分">
                        </el-table-column>
                    </el-table>
                    <div class="pagination">
                        <el-pagination
                            @current-change ="handleCurrentChange"
                            layout="prev, pager, next"
                            :total="1000">
                        </el-pagination>
                    </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
    export default {
        components: {ElFormItem}, data() {
            return {
                url: './static/stufile.json',
                tableData: [],
                cur_page: 1,
                select_class:'',
                select_classes: ['ASD08061', 'ASD08062', 'ASD0807','ASD0808','0803','0804','SD0806','SD0808'],
                select_group:'',
                select_groups:['第一小组','第二小组','第三小组','第四小组','第五小组','第六小组','第七小组','第八小组'],
                select_state:'',
                multipleSelection: [],
                is_search: false
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
                    self.tableData = res.data.stuGroup;
                })
            },
            search(){
                this.is_search = true;
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
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
