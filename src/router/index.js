import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/sub_job',
                    component: resolve => require(['../components/page/sub_job.vue'], resolve)
                },
                {
                    path: '/sub_proj',
                    component: resolve => require(['../components/page/sub_proj.vue'], resolve)
                },
                {
                    path: '/sub-daily',
                    component: resolve => require(['../components/page/sub_daily.vue'], resolve)
                },
                {
                    path: '/sub-weekly',
                    component: resolve => require(['../components/page/sub_weekly.vue'], resolve)
                },
                {
                    path: '/history-daily',
                    component: resolve => require(['../components/page/history_daily.vue'], resolve)
                },
                {
                    path: '/history-weekly',
                    component: resolve => require(['../components/page/history_weekly.vue'], resolve)
                },
                {
                    path: '/fill-Ques',
                    component: resolve => require(['../components/page/fill_ques.vue'], resolve)
                },
                {
                    path: '/history-Ques',
                    component: resolve => require(['../components/page/history_ques.vue'], resolve)
                },
                {
                    path: '/upl-resume',
                    component: resolve => require(['../components/page/upl_resume.vue'], resolve)
                },
                {
                    path: '/job-apply',
                    component: resolve => require(['../components/page/job_apply.vue'], resolve)
                },
                {
                    path: '/stu_files',
                    component: resolve => require(['../components/page/stu_files.vue'], resolve)
                },
                {
                    path: '/timing_record',
                    component: resolve => require(['../components/page/timing_record.vue'], resolve)
                },
                {
                    path: '/disc_record',
                    component: resolve => require(['../components/page/disc_record.vue'], resolve)
                },
                {
                    path: '/praise_record',
                    component: resolve => require(['../components/page/praise_record.vue'], resolve)
                },
                {
                    path: '/job_compl',
                    component: resolve => require(['../components/page/job_compl.vue'], resolve)
                },
                {
                    path: '/proj_assessment',
                    component: resolve => require(['../components/page/proj_assessment.vue'], resolve)
                },
                {
                    path: '/class_initiative',
                    component: resolve => require(['../components/page/class_initiative.vue'], resolve)
                },
                {
                    path: '/speech_query',
                    component: resolve => require(['../components/page/speech_query.vue'], resolve)
                },
                {
                    path: '/group_disc',
                    component: resolve => require(['../components/page/group_disc.vue'], resolve)
                },
                {
                    path: '/ce_score',
                    component: resolve => require(['../components/page/ce_score.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
