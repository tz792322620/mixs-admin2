import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '持仓订单号',
    align:"center",
    dataIndex: 'holdSn'
   },
   {
    title: '用户ID',
    align:"center",
    dataIndex: 'userId'
   },
   {
    title: '开仓价',
    align:"center",
    dataIndex: 'openPrice'
   },
   {
    title: '止盈止损的委托时间',
    align:"center",
    dataIndex: 'orderTime'
   },
   {
    title: '止盈止损的委托价格',
    align:"center",
    dataIndex: 'orderPrice'
   },
   {
    title: '方向',
    align:"center",
    dataIndex: 'direction'
   },
   {
    title: '委托平仓类型：止盈/止损',
    align:"center",
    dataIndex: 'closeType'
   },
   {
    title: '委托状态',
    align:"center",
    dataIndex: 'orderStatus'
   },
   {
    title: '平仓时间',
    align:"center",
    dataIndex: 'closeTime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '平仓价格',
    align:"center",
    dataIndex: 'closePrice'
   },
   {
    title: 'remark',
    align:"center",
    dataIndex: 'remark'
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
    title: 'lastModifiedDate',
    align:"center",
    dataIndex: 'lastModifiedDate',
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
    title: '合约乘数',
    align:"center",
    dataIndex: 'exchangeRate'
   },

];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '持仓订单号',
    field: 'holdSn',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入持仓订单号!'},
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
    label: '开仓价',
    field: 'openPrice',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入开仓价!'},
          ];
     },
  },
  {
    label: '止盈止损的委托时间',
    field: 'orderTime',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入止盈止损的委托时间!'},
          ];
     },
  },
  {
    label: '止盈止损的委托价格',
    field: 'orderPrice',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入止盈止损的委托价格!'},
          ];
     },
  },
  {
    label: '方向',
    field: 'direction',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入方向!'},
          ];
     },
  },
  {
    label: '委托平仓类型：止盈/止损',
    field: 'closeType',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入委托平仓类型：止盈/止损!'},
          ];
     },
  },
  {
    label: '委托状态',
    field: 'orderStatus',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入委托状态!'},
          ];
     },
  },
  {
    label: '平仓时间',
    field: 'closeTime',
    component: 'DatePicker',
  },
  {
    label: '平仓价格',
    field: 'closePrice',
    component: 'InputNumber',
  },
  {
    label: 'remark',
    field: 'remark',
    component: 'Input',
  },
  {
    label: 'createdDate',
    field: 'createdDate',
    component: 'DatePicker',
  },
  {
    label: 'lastModifiedDate',
    field: 'lastModifiedDate',
    component: 'DatePicker',
  },
  {
    label: '交易所编号',
    field: 'exchId',
    component: 'Input',
  },
  {
    label: '合约乘数',
    field: 'exchangeRate',
    component: 'InputNumber',
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
