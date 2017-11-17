<template>
    <div>
        <!-- 编辑页面标题 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-star-on"></i> 功能</el-breadcrumb-item>
                <el-breadcrumb-item>提交项目</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">申请列表<span class="Little_Font">(+ 单击标题栏展开)</span></template>
                <template>
                    <el-table
                        :data="tableData"
                        style="width: 100%"
                        border>
                        <el-table-column label="姓名">
                            <template slot-scope="scope">
                                <el-input v-model="name"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="班级">
                            <template slot-scope="scope">
                                <el-input v-model="classroom"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="期望就业方向">
                            <template slot-scope="scope">
                                <el-select v-model="direction">
                                    <el-option
                                        v-for="item in directions"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column label="期望就业地点">
                            <template slot-scope="scope">
                                <el-select v-model="place">
                                    <el-option
                                        v-for="item in places"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column label="期望推荐时间">
                            <template slot-scope="scope">
                                <el-input v-model="time"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="是否需要推荐">
                            <template slot-scope="scope">
                                <el-select v-model="recommendation" >
                                    <el-option
                                        v-for="item in recommendations"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-collapse-item>
        </el-collapse>

        <div class=" bg-div  center">
            <el-button>确认提交</el-button>
            <el-button>重新输入</el-button>
        </div>
    </div>
</template>

<script >
    export default {
        data(){
            return {
                tableData: [{}],
                name: '余子荣',
                classroom: 'SD0806',
                time:'',
                recommendation: '是',
                recommendations: ['是', '否'],
                place:'广州',
                places: [ '广州', '深圳','佛山','东莞','上海', '北京'],
                direction:'Android',
                directions: ['Android', 'Java', '运维',  '前端',  'PHP', 'Python','C++', 'C#']
            }
        }
    }

</script>
<style scoped>

    .Little_Font{
        margin-left: 10px;
        font-size:12px;
        font-weight:normal;
    }
    .center{
        text-align: center;
    }
    .bg-div {
        background: #99a9bf;
        border: 1px solid  #d3e0e9;;
    }
    .el-input{
        padding: 18px 0;
    }
</style>
