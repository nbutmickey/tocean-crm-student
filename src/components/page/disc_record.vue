
<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>&nbsp;&nbsp;当前页面</el-breadcrumb-item>
                <el-breadcrumb-item>学员违纪信息查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <el-form :inline="true"  class="demo-form-inline">
                <el-form-item label="班级：">
                    <el-select v-model="select_class" class="v-input">
                        <el-option key="1" label="TC0806" value="TC0806"></el-option>
                        <el-option key="2" label="TC0807"sex value="TC0807"></el-option>
                        <el-option key="3" label="TC0808" value="TC0808"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学员：">
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
        <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="id" label="序号"  width="70">
            </el-table-column>
            <el-table-column prop="name" label="学员" width="120">
            </el-table-column>
            <el-table-column prop="grade" label="班级" width="120">
            </el-table-column>
            <el-table-column prop="date" label="违纪时间" width="170">
            </el-table-column>
            <el-table-column prop="condition" label="违纪情况" width="170">
            </el-table-column>
            <el-table-column prop="attitude" label="学员违 纪态度"  :formatter="formatter">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template scope="scope">
                    <el-button size="small"
                               @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                               @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
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
    export default {
        components: {ElFormItem}, data() {
            return {
                url: './static/stufile.json',
                tableData: [],
                cur_page: 1,
                select_class:'',
                select_state:'',
                multipleSelection: [],
                del_list: [],
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
                    self.tableData = res.data.stuWeiji;
                })
            },
            search(){
                this.is_search = true;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            },
            delAll(){
                const self = this,
                    length = self.multipleSelection.length;
                let str = '';
                self.del_list = self.del_list.concat(self.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += self.multipleSelection[i].name + ' ';
                }
                self.$message.error('删除了'+str);
                self.multipleSelection = [];
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>
<style scoped>
    .handle-box{
        margin-bottom: 10px;
    }
    .handle-select{
        width: 120px;
    }
    .handle-input{
        width: 100px;
        display: inline-block;
    }
    .v-input{
        width: 120px;
    }
</style>
