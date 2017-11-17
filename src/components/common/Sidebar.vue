<template>
    <div class="sidebar" >

        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item :index="items[0].index">
                <i :class="items[0].icon"></i>{{ items[0].title }}
            </el-menu-item>

            <template v-for="(item,index) in items" v-if="!!username && index>=1">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'Readme',
                        title: '首页'
                    }, {
                        icon: 'el-icon-edit',
                        index: 'sub_job',
                        title: '提交作业'
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'sub_proj',
                        title: '提交项目'
                    },
                    {
                        icon: 'el-icon-star-off',
                        index: 'sub_repo',
                        title: '提交报告',
                        subs: [
                            {
                                index: 'sub-daily',
                                title: '提交日报'
                            },
                            {
                                index: 'sub-weekly',
                                title: '提交周报'
                            },
                            {
                                index: 'history-daily',
                                title: '历史日报'
                            },
                            {
                                index: 'history-weekly',
                                title: '历史周报'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-warning',
                        index: 'questionnaires',
                        title: '问卷调查',
                        subs: [
                            {
                                index: 'fill-Ques',
                                title: '填写问卷'
                            },
                            {
                                index: 'history-Ques',
                                title: '历史问卷'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'upl-resume',
                        title: '上传简历'
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'job-apply',
                        title: '就业申请'
                    },
                    {
                        icon: 'el-icon-search',
                        index: 'stu_info',
                        title: '学员信息查询',
                        subs: [
                           {
                                index: 'timing_record',
                                title:'考勤记录'
                            },{
                                index: 'disc_record',
                                title:'违纪记录'
                            },{
                                index: 'praise_record',
                                title:'	表扬记录'
                            },{
                                index: 'job_compl',
                                title:'	作业完成情况'
                            },{
                                index: 'proj_assessment',
                                title:'	项目考核情况'
                            },{
                                index: 'class_initiative',
                                title:'	班级管理积极性'
                            },{
                                index: 'speech_query',
                                title:'	演讲查询'
                            },{
                                index: 'group_disc',
                                title:'	分组讨论查询'
                            },{
                                index: 'ce_score',
                                title:'	综合考评分'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{

            onRoutes(){
                return this.$route.path.replace('/','');
            },
            username(){
                let username = localStorage.getItem('USERNAME');
                return username ;
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
        overflow-x: scroll;
        /*i don‘t know add it*/
        -webkit-scrollbar: none;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
