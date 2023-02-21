import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '结算订单号',
    align:"center",
    dataIndex: 'statementSn'
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
    title: '订单类型',
    align:"center",
    dataIndex: 'orderType'
   },
   {
    title: '交易方向：BULL买涨，BEAR：买跌',
    align:"center",
    dataIndex: 'direction'
   },
   {
    title: '标的数量',
    align:"center",
    dataIndex: 'amount'
   },
   {
    title: '开仓价格',
    align:"center",
    dataIndex: 'openPrice'
   },
   {
    title: '杠杆倍数',
    align:"center",
    dataIndex: 'lever'
   },
   {
    title: '初始保证金',
    align:"center",
    dataIndex: 'initMargin'
   },
   {
    title: '手续费（开仓+平仓）',
    align:"center",
    dataIndex: 'commissionFee'
   },
   {
    title: '持仓费/利息',
    align:"center",
    dataIndex: 'holdingFee'
   },
   {
    title: '平仓价格',
    align:"center",
    dataIndex: 'closePrice'
   },
   {
    title: '浮动盈亏',
    align:"center",
    dataIndex: 'floatingProfit'
   },
   {
    title: '结算盈亏',
    align:"center",
    dataIndex: 'settledProfit'
   },
   {
    title: '平仓类型',
    align:"center",
    dataIndex: 'closeType'
   },
   {
    title: '备注',
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
    title: '交易所编号',
    align:"center",
    dataIndex: 'exchId'
   },
   {
    title: '币种',
    align:"center",
    dataIndex: 'currency'
   },
   {
    title: '合约乘数',
    align:"center",
    dataIndex: 'exchangeRate'
   },
   {
    title: '新旧结算单标记: 0旧的,1新的',
    align:"center",
    dataIndex: 'marking'
   },

];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '结算订单号',
    field: 'statementSn',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入结算订单号!'},
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
    label: '订单类型',
    field: 'orderType',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入订单类型!'},
          ];
     },
  },
  {
    label: '交易方向：BULL买涨，BEAR：买跌',
    field: 'direction',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入交易方向：BULL买涨，BEAR：买跌!'},
          ];
     },
  },
  {
    label: '标的数量',
    field: 'amount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入标的数量!'},
          ];
     },
  },
  {
    label: '开仓价格',
    field: 'openPrice',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入开仓价格!'},
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
    label: '手续费（开仓+平仓）',
    field: 'commissionFee',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入手续费（开仓+平仓）!'},
          ];
     },
  },
  {
    label: '持仓费/利息',
    field: 'holdingFee',
    component: 'InputNumber',
  },
  {
    label: '平仓价格',
    field: 'closePrice',
    component: 'InputNumber',
  },
  {
    label: '浮动盈亏',
    field: 'floatingProfit',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入浮动盈亏!'},
          ];
     },
  },
  {
    label: '结算盈亏',
    field: 'settledProfit',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入结算盈亏!'},
          ];
     },
  },
  {
    label: '平仓类型',
    field: 'closeType',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
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
    label: '币种',
    field: 'currency',
    component: 'Input',
  },
  {
    label: '合约乘数',
    field: 'exchangeRate',
    component: 'InputNumber',
  },
  {
    label: '新旧结算单标记: 0旧的,1新的',
    field: 'marking',
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
