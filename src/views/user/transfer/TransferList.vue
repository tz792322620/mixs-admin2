<template>
  <div>
    <!--引用表格-->
   <BasicTable @register="registerTable" :rowSelection="rowSelection">
     <!--插槽:table标题-->
      <template #tableTitle>
<!--          <a-button type="primary" @click="handleAdd" preIcon="ant-design:plus-outlined"> 新增</a-button>-->
<!--          <a-button  type="primary" preIcon="ant-design:export-outlined" @click="onExportXls"> 导出</a-button>-->
<!--          <j-upload-button  type="primary" preIcon="ant-design:import-outlined" @click="onImportXls">导入</j-upload-button>-->
          <a-dropdown v-if="selectedRowKeys.length > 0">
              <template #overlay>
                <a-menu>
                  <a-menu-item key="1" @click="batchHandleDelete">
                    <Icon icon="ant-design:delete-outlined"></Icon>
                    删除
                  </a-menu-item>
                </a-menu>
              </template>
              <a-button>批量操作
                <Icon icon="mdi:chevron-down"></Icon>
              </a-button>
        </a-dropdown>
      </template>
       <!--操作栏-->
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" :dropDownActions="getDropDownAction(record)"/>
      </template>
      <!--字段回显插槽-->
      <template #htmlSlot="{text}">
         <div v-html="text"></div>
      </template>
      <!--省市区字段回显插槽-->
      <template #pcaSlot="{text}">
        {{ getAreaTextByCode(text) }}
      </template>
      <template #fileSlot="{text}">
         <span v-if="!text" style="font-size: 12px;font-style: italic;">无文件</span>
         <a-button v-else :ghost="true" type="primary" preIcon="ant-design:download-outlined" size="small" @click="downloadFile(text)">下载</a-button>
      </template>
    </BasicTable>
    <!-- 表单区域 -->
    <TransferModal @register="registerModal" @success="handleSuccess"></TransferModal>
  </div>
</template>

<script lang="ts" name="transfer-transfer" setup>
  import {ref, computed, unref} from 'vue';
  import {BasicTable, useTable, TableAction} from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage'
  import {useModal} from '/@/components/Modal';
  import TransferModal from './components/TransferModal.vue'
  import {columns, searchFormSchema} from './Transfer.data';
  import {list, deleteOne, batchDelete, getImportUrl,getExportUrl} from './Transfer.api';
  import {downloadFile} from '/@/utils/common/renderUtils';
  import { defHttp } from "/@/utils/http/axios";
  const checkedKeys = ref<Array<string | number>>([]);
  //注册model
  const [registerModal, {openModal}] = useModal();
   //注册table数据
  const { prefixCls,tableContext,onExportXls,onImportXls } = useListPage({
      tableProps:{
           title: '会员提币申请',
           api: list,
           columns,
           canResize:false,
           formConfig: {
                //labelWidth: 120,
                schemas: searchFormSchema,
                autoSubmitOnEnter:true,
                showAdvancedButton:true,
                fieldMapToNumber: [
                ],
                fieldMapToTime: [
                ],
            },
           actionColumn: {
               width: 260,
               fixed:'right'
           },
        },
        exportConfig: {
            name:"会员提币申请",
            url: getExportUrl,
        },
        importConfig: {
            url: getImportUrl,
            success: handleSuccess
        },
    })

  const [registerTable, {reload},{ rowSelection, selectedRowKeys }] = tableContext

   /**
    * 新增事件
    */
  function handleAdd() {
     openModal(true, {
       isUpdate: false,
       showFooter: true,
     });
  }
   /**
    * 编辑事件
    */
  function handleEdit(record: Recordable) {
     openModal(true, {
       record,
       isUpdate: true,
       showFooter: true,
     });
   }
   /**
    * 详情
   */
  function handleDetail(record: Recordable) {
     openModal(true, {
       record,
       isUpdate: true,
       showFooter: false,
     });
   }
   /**
    * 删除事件
    */
  async function handleDelete(record) {
     await deleteOne({id: record.id}, handleSuccess);
   }
   /**
    * 批量删除事件
    */
  async function batchHandleDelete() {
     await batchDelete({ids: selectedRowKeys.value},handleSuccess);
   }
   /**
    * 成功回调
    */
  function handleSuccess() {
      (selectedRowKeys.value = []) && reload();
   }
   /**
      * 操作栏
      */
  function getTableAction(record){
       return [
         {
           label: '审核通过',
           onClick: handleok.bind(null, record),
         },
         {
           label: '审核不通过',
           onClick: handleno.bind(null, record),
         },
         {
           label: '编辑',
           onClick: handleEdit.bind(null, record),
         },

       ]
   }


  /**
   * 下拉操作栏
   */
  function getDropDownAction(record){
    return [
      {
        label: '详情',
        onClick: handleDetail.bind(null, record),
      }, {
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
        }
      }
    ]
  }
  /**
   * 审核通过
   */
  function handleok(record: Recordable) {
    // console.log(record);
    // record.status=1
    // record.authorizeLevel=3
    defHttp.post({url: '/transfer/transfer/applyOk', params:{id:record.id}}).then(res=>{
      console.log(res)
      reload();
    });
  }

  /**
   * 审核不通过
   */
  function handleno(record: Recordable){
    // xx.value = record
    // visible.value = true;
    // record.status=2
    // record.authorizeLevel=4
    // record.reason="审核拒绝！"
    defHttp.post({url: '/transfer/transfer/applyNo', params:{id:record.id}}).then(res=>{
      console.log(res)
      reload();
    });
  }
</script>

<style scoped>

</style>
