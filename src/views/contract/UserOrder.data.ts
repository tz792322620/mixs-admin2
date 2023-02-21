import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '委托订单号',
    align:"center",
    dataIndex: 'orderSn'
   },
   {
    title: '用户ID',
    align:"center",
    dataIndex: 'userId'
   },
   {
    title: '标的合约',
    align:"center",
    dataIndex: 'contractNo'
   },
   {
    title: '交易方向（BULL：买涨、BEAR：卖空）',
    align:"center",
    dataIndex: 'direction'
   },
   {
    title: '交易类型（LIMITED：限价，MARKET：市价）',
    align:"center",
    dataIndex: 'orderType'
   },
   {
    title: '币种',
    align:"center",
    dataIndex: 'currency'
   },
   {
    title: '委托价',
    align:"center",
    dataIndex: 'orderPrice'
   },
   {
    title: '合约数量',
    align:"center",
    dataIndex: 'amount'
   },
   {
    title: '杠杆倍数',
    align:"center",
    dataIndex: 'lever'
   },
   {
    title: '保证金价',
    align:"center",
    dataIndex: 'marginPrice'
   },
   {
    title: '初始保证金',
    align:"center",
    dataIndex: 'initMargin'
   },
   {
    title: '剩于保证金',
    align:"center",
    dataIndex: 'leftMargin'
   },
   {
    title: '委托状态：CANCEL：已撤销，DEALED：已成交，WAIT：已委托',
    align:"center",
    dataIndex: 'orderStatus'
   },
   {
    title: '描述',
    align:"center",
    dataIndex: 'description'
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
    title: 'lastModifiedDate',
    align:"center",
    dataIndex: 'lastModifiedDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '止盈价格',
    align:"center",
    dataIndex: 'profitPrice'
   },
   {
    title: '止损价格',
    align:"center",
    dataIndex: 'lossPrice'
   },
   {
    title: '定时出场时间',
    align:"center",
    dataIndex: 'delayCloseMins'
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
   {
    title: '记录开仓时的手续费',
    align:"center",
    dataIndex: 'openFee'
   },

];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '委托订单号',
    field: 'orderSn',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入委托订单号!'},
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
    label: '标的合约',
    field: 'contractNo',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入标的合约!'},
          ];
     },
  },
  {
    label: '交易方向（BULL：买涨、BEAR：卖空）',
    field: 'direction',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入交易方向（BULL：买涨、BEAR：卖空）!'},
          ];
     },
  },
  {
    label: '交易类型（LIMITED：限价，MARKET：市价）',
    field: 'orderType',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入交易类型（LIMITED：限价，MARKET：市价）!'},
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
    label: '委托价',
    field: 'orderPrice',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入委托价!'},
          ];
     },
  },
  {
    label: '合约数量',
    field: 'amount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入合约数量!'},
          ];
     },
  },
  {
    label: '杠杆倍数',
    field: 'lever',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入杠杆倍数!'},
          ];
     },
  },
  {
    label: '保证金价',
    field: 'marginPrice',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入保证金价!'},
          ];
     },
  },
  {
    label: '初始保证金',
    field: 'initMargin',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入初始保证金!'},
          ];
     },
  },
  {
    label: '剩于保证金',
    field: 'leftMargin',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入剩于保证金!'},
          ];
     },
  },
  {
    label: '委托状态：CANCEL：已撤销，DEALED：已成交，WAIT：已委托',
    field: 'orderStatus',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入委托状态：CANCEL：已撤销，DEALED：已成交，WAIT：已委托!'},
          ];
     },
  },
  {
    label: '描述',
    field: 'description',
    component: 'Input',
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
    label: 'lastModifiedDate',
    field: 'lastModifiedDate',
    component: 'DatePicker',
  },
  {
    label: '止盈价格',
    field: 'profitPrice',
    component: 'InputNumber',
  },
  {
    label: '止损价格',
    field: 'lossPrice',
    component: 'InputNumber',
  },
  {
    label: '定时出场时间',
    field: 'delayCloseMins',
    component: 'InputNumber',
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
  {
    label: '记录开仓时的手续费',
    field: 'openFee',
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
