import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '账号ID',
    align:"center",
    dataIndex: 'accountNo'
   },
   {
    title: '币种',
    align:"center",
    dataIndex: 'currency'
   },
   {
    title: '用户ID',
    align:"center",
    dataIndex: 'userId'
   },
   {
    title: '账号余额',
    align:"center",
    dataIndex: 'accountAmount'
   },
   {
    title: '账号类型（GENERAL:基本户，MARGIN：冻结保证金户，BONUS：赠金户）',
    align:"center",
    dataIndex: 'accountType'
   },
   {
    title: 'version',
    align:"center",
    dataIndex: 'version'
   },
   {
    title: 'createdDate',
    align:"center",
    dataIndex: 'createdDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '交易所编号',
    align:"center",
    dataIndex: 'exchId'
   },
   {
    title: '更新时间',
    align:"center",
    dataIndex: 'updateDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },

];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '账号ID',
    field: 'accountNo',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入账号ID!'},
          ];
     },
  },
  {
    label: '币种',
    field: 'currency',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入币种!'},
          ];
     },
  },
  {
    label: '用户ID',
    field: 'userId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户ID!'},
          ];
     },
  },
  {
    label: '账号余额',
    field: 'accountAmount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入账号余额!'},
          ];
     },
  },
  {
    label: '账号类型（GENERAL:基本户，MARGIN：冻结保证金户，BONUS：赠金户）',
    field: 'accountType',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入账号类型（GENERAL:基本户，MARGIN：冻结保证金户，BONUS：赠金户）!'},
          ];
     },
  },
  {
    label: 'version',
    field: 'version',
    component: 'InputNumber',
  },
  {
    label: 'createdDate',
    field: 'createdDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入createdDate!'},
          ];
     },
  },
  {
    label: '交易所编号',
    field: 'exchId',
    component: 'Input',
  },
  {
    label: '更新时间',
    field: 'updateDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入更新时间!'},
          ];
     },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
