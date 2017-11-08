<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>&nbsp;&nbsp;当前页面</el-breadcrumb-item>
                <el-breadcrumb-item>学员信息查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
                <el-select v-model="select_cate" placeholder="选择班级" class="handle-select mr10">
                    <el-option key="1" label="TC0806" value="TC0806"></el-option>
                    <el-option key="2" label="TC0807"sex value="TC0807"></el-option>
                    <el-option key="3" label="TC0808" value="TC0808"></el-option>
                </el-select>
                <el-input v-model="select_name" placeholder="学员姓名" class="handle-input mr10"></el-input>
                <el-input v-model="select_num" placeholder="学员学号" class="handle-input mr10"></el-input>
                <el-select v-model="select_sex" placeholder="性别" class="handle-select mr10">
                    <el-option key="1" label="男" value="男"></el-option>
                    <el-option key="2" label="女" value="女"></el-option>
                </el-select>
                <el-select v-model="select_xl" placeholder="学历" class="handle-select mr10">
                    <el-option key="1" label="硕士" value="硕士"></el-option>
                    <el-option key="2" label="本科" value="本科"></el-option>
                    <el-option key="3" label="大专" value="大专"></el-option>
                    <el-option key="4" label="高中" value="高中"></el-option>
                    <el-option key="5" label="其他" value="其他"></el-option>
                </el-select>
                <el-input v-model="select_phone" placeholder="联系电话" class="handle-select mr10"></el-input>

                <el-button type="primary" icon="search" @click="search">搜索</el-button>

        </div>
        <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="id" label="序号"  width="70">
            </el-table-column>
            <el-table-column prop="name" label="学员名称" width="100">
            </el-table-column>
            <el-table-column prop="sno" label="学号" width="120">
            </el-table-column>
            <el-table-column prop="grade" label="班级" width="120">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="100">
            </el-table-column>
            <el-table-column prop="education" label="学历" width="100">
            </el-table-column>
            <el-table-column prop="phone" label="联系号码"  :formatter="formatter" >
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
    export default {
        data() {
            return {
                url: './static/stufile.json',
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_name: '',
                select_num:'',
                select_sex:'',
                select_xl:'',
                select_phone:'',
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
                   /* let is_del = false;
                    for (let i = 0; i < self.del_list.length; i++) {
                        if(d.name === self.del_list[i].name){
                            is_del = true;
                            break;
                        }
                    }
                    if(!is_del){
                        if(d.address.indexOf(self.select_cate) > -1 &&
                            (d.name.indexOf(self.select_word) > -1 ||
                            d.address.indexOf(self.select_word) > -1)
                        ){
                            return d;
                        }
                    }*/
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
                    self.tableData = res.data.stufile;
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
        margin-bottom: 20px;
    }
    .handle-select{
        width: 120px;
    }
    .handle-input{
        width: 100px;
        display: inline-block;
    }
</style>
