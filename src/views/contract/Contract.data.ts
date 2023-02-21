import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '合约编号',
    align:"center",
    dataIndex: 'contractNo'
   },
   {
    title: '合约名称',
    align:"center",
    dataIndex: 'displayName'
   },
   {
    title: 'orderNum',
    align:"center",
    dataIndex: 'orderNum'
   },
   {
    title: '开仓手续费',
    align:"center",
    dataIndex: 'openCommissionRate'
   },
   {
    title: '平仓手续费',
    align:"center",
    dataIndex: 'closeCommissionRate'
   },
   {
    title: 'slippage',
    align:"center",
    dataIndex: 'slippage'
   },
   {
    title: '最小交易单位',
    align:"center",
    dataIndex: 'minUnit'
   },
   {
    title: '最小交易量',
    align:"center",
    dataIndex: 'minAmount'
   },
   {
    title: '最大交易价',
    align:"center",
    dataIndex: 'maxAmount'
   },
   {
    title: '价格精度',
    align:"center",
    dataIndex: 'pricePrecision'
   },
   {
    title: '是否生效',
    align:"center",
    dataIndex: 'enabled'
   },
   {
    title: '支持的杠杆倍数',
    align:"center",
    dataIndex: 'levers'
   },
   {
    title: '单笔最大交易数量',
    align:"center",
    dataIndex: 'singleMaxVolume'
   },
   {
    title: '最大持仓数量',
    align:"center",
    dataIndex: 'maxPositionsQuantity'
   },
   {
    title: '过夜利息利率',
    align:"center",
    dataIndex: 'stayRate'
   },
   {
    title: '开仓价格范围',
    align:"center",
    dataIndex: 'openPriceRange'
   },
   {
    title: '合约单位',
    align:"center",
    dataIndex: 'unit'
   },
   {
    title: 'updatedDate',
    align:"center",
    dataIndex: 'updatedDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '合约乘数',
    align:"center",
    dataIndex: 'exchangeRate'
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
    title: '合约名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '合约介绍',
    align:"center",
    dataIndex: 'presentation'
   },
   {
    title: '语言',
    align:"center",
    dataIndex: 'language'
   },
   {
    title: '开多限制，1开启，0关闭',
    align:"center",
    dataIndex: 'bull'
   },
   {
    title: '开空限制，1开启，0关闭',
    align:"center",
    dataIndex: 'bear'
   },
  {
    title: '创建时间',
    align:"center",
    dataIndex: 'createTime'
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: 'contractNo',
    field: 'contractNo',
    component: 'Input',
  },
  {
    label: 'displayName',
    field: 'displayName',
    component: 'Input',
  },
  {
    label: 'orderNum',
    field: 'orderNum',
    component: 'InputNumber',
  },
  {
    label: 'openCommissionRate',
    field: 'openCommissionRate',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入openCommissionRate!'},
          ];
     },
  },
  {
    label: 'closeCommissionRate',
    field: 'closeCommissionRate',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入closeCommissionRate!'},
          ];
     },
  },
  {
    label: 'slippage',
    field: 'slippage',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入slippage!'},
          ];
     },
  },
  {
    label: '最小交易单位',
    field: 'minUnit',
    component: 'InputNumber',
  },
  {
    label: '最小交易量',
    field: 'minAmount',
    component: 'InputNumber',
  },
  {
    label: '最大交易价',
    field: 'maxAmount',
    component: 'InputNumber',
  },
  {
    label: '价格精度',
    field: 'pricePrecision',
    component: 'InputNumber',
  },
  {
    label: '是否生效',
    field: 'enabled',
    component: 'InputNumber',
  },
  {
    label: '支持的杠杆倍数',
    field: 'levers',
    component: 'Input',
  },
  {
    label: '单笔最大交易数量',
    field: 'singleMaxVolume',
    component: 'Input',
  },
  {
    label: '最大持仓数量',
    field: 'maxPositionsQuantity',
    component: 'Input',
  },
  {
    label: '过夜利息利率',
    field: 'stayRate',
    component: 'InputNumber',
  },
  {
    label: '开仓价格范围',
    field: 'openPriceRange',
    component: 'InputNumber',
  },
  {
    label: '合约单位',
    field: 'unit',
    component: 'InputNumber',
  },
  {
    label: 'updatedDate',
    field: 'updatedDate',
    component: 'DatePicker',
  },
  {
    label: '合约乘数',
    field: 'exchangeRate',
    component: 'InputNumber',
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
    label: '合约名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '合约介绍',
    field: 'presentation',
    component: 'InputTextArea',
  },
  {
    label: '语言',
    field: 'language',
    component: 'Input',
  },
  {
    label: '开多限制，1开启，0关闭',
    field: 'bull',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入开多限制，1开启，0关闭!'},
          ];
     },
  },
  {
    label: '开空限制，1开启，0关闭',
    field: 'bear',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入开空限制，1开启，0关闭!'},
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
