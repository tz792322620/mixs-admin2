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
    title: '合约标的',
    align:"center",
    dataIndex: 'contractNo'
   },
   {
    title: '标的开仓数量',
    align:"center",
    dataIndex: 'amount'
   },
   {
    title: '杠杆倍数',
    align:"center",
    dataIndex: 'lever'
   },
   {
    title: '开仓价',
    align:"center",
    dataIndex: 'openPrice'
   },
   {
    title: '币种',
    align:"center",
    dataIndex: 'currency'
   },
   {
    title: '委托单类型（LIMITED：限价单，MARKET：市价单）',
    align:"center",
    dataIndex: 'orderType'
   },
   {
    title: '交易方向（BULL：买涨，BEAR：卖空）',
    align:"center",
    dataIndex: 'direction'
   },
   {
    title: '开仓手续费',
    align:"center",
    dataIndex: 'openCommissionFee'
   },
   {
    title: '保证金价格',
    align:"center",
    dataIndex: 'marginPrice'
   },
   {
    title: '根据开仓价、保证金等试算出来的强平价',
    align:"center",
    dataIndex: 'exitPrice'
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
    title: '止盈价',
    align:"center",
    dataIndex: 'profitPrice'
   },
   {
    title: '止损价',
    align:"center",
    dataIndex: 'lossPrice'
   },
   {
    title: '持仓状态，HOLDING：持仓中，CLOSED：已平仓',
    align:"center",
    dataIndex: 'holdStatus'
   },
   {
    title: '平仓时间',
    align:"center",
    dataIndex: 'closeDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '定时出场时间',
    align:"center",
    dataIndex: 'delayCloseMins'
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
    title: '合约乘数',
    align:"center",
    dataIndex: 'exchangeRate'
   },
   {
    title: '总持仓利息',
    align:"center",
    dataIndex: 'holdingFee'
   },
   {
    title: '新旧结算单标记: 0旧的,1新的',
    align:"center",
    dataIndex: 'marking'
   },
   {
    title: '止盈数量限制',
    align:"center",
    dataIndex: 'limitProfitAmount'
   },
   {
    title: '止盈或者止损数量限制',
    align:"center",
    dataIndex: 'limitAmount'
   },
   {
    title: '止损数量限制',
    align:"center",
    dataIndex: 'limitLossAmount'
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
    label: '合约标的',
    field: 'contractNo',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入合约标的!'},
          ];
     },
  },
  {
    label: '标的开仓数量',
    field: 'amount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入标的开仓数量!'},
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
    label: '委托单类型（LIMITED：限价单，MARKET：市价单）',
    field: 'orderType',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入委托单类型（LIMITED：限价单，MARKET：市价单）!'},
          ];
     },
  },
  {
    label: '交易方向（BULL：买涨，BEAR：卖空）',
    field: 'direction',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入交易方向（BULL：买涨，BEAR：卖空）!'},
          ];
     },
  },
  {
    label: '开仓手续费',
    field: 'openCommissionFee',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入开仓手续费!'},
          ];
     },
  },
  {
    label: '保证金价格',
    field: 'marginPrice',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入保证金价格!'},
          ];
     },
  },
  {
    label: '根据开仓价、保证金等试算出来的强平价',
    field: 'exitPrice',
    component: 'InputNumber',
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
    label: '止盈价',
    field: 'profitPrice',
    component: 'InputNumber',
  },
  {
    label: '止损价',
    field: 'lossPrice',
    component: 'InputNumber',
  },
  {
    label: '持仓状态，HOLDING：持仓中，CLOSED：已平仓',
    field: 'holdStatus',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入持仓状态，HOLDING：持仓中，CLOSED：已平仓!'},
          ];
     },
  },
  {
    label: '平仓时间',
    field: 'closeDate',
    component: 'DatePicker',
  },
  {
    label: '定时出场时间',
    field: 'delayCloseMins',
    component: 'InputNumber',
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
    label: '总持仓利息',
    field: 'holdingFee',
    component: 'InputNumber',
  },
  {
    label: '新旧结算单标记: 0旧的,1新的',
    field: 'marking',
    component: 'InputNumber',
  },
  {
    label: '止盈数量限制',
    field: 'limitProfitAmount',
    component: 'InputNumber',
  },
  {
    label: '止盈或者止损数量限制',
    field: 'limitAmount',
    component: 'InputNumber',
  },
  {
    label: '止损数量限制',
    field: 'limitLossAmount',
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