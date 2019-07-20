<template>
  <el-container style="height: 100%;" id="buy">

    <el-form ref="form" :model="form" :inline="true" label-width="100px">
      <el-row >
        <el-col :span="24" style="text-align: right;">
          <el-button type="primary" @click="dialogFormVisible=true">收货确认</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="经办人">
            <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="经办部门">
            <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="经办人公司">
            <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="申请日期">
            <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="需求人">
            <el-input v-model="form.name" disabled="" placeholder="弹窗选取"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="需求部门">
            <el-input v-model="form.name" disabled="" placeholder="根据需求人自动获取"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <H1>物资基本信息</H1>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="组织分类">
            <el-select v-model="value" disabled="" placeholder="请选择">
              <el-option
                v-for="item in option1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="管理层级">
            <el-select v-model="value" disabled="" placeholder="请选择">
              <el-option
                v-for="item in option2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="物资类别">
            <el-select v-model="value1" disabled="" placeholder="请选择">
              <el-option
                v-for="item in option3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="物资类型">
            <el-select v-model="value" disabled="" placeholder="请选择">
              <el-option
                v-for="item in option4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="京东平台">
            <el-radio v-model="radio" disabled="" label="1">是</el-radio>
            <el-radio v-model="radio" disabled="" label="2">否</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="京东账号">
            <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <div v-show="radio==2">
        <el-row>
          <el-col :span="24">
            <h3>收货信息</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="收货人">
              <el-input v-model="form.name" disabled="" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="收货地址">
              <el-input v-model="form.name" disabled="" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="联系电话">
              <el-input v-model="form.name" disabled="" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="收货备注">
              <el-input v-model="form.name" disabled="" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <h3>开票信息</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="开票抬头">
              <el-input v-model="form.name" disabled="" placeholder="选取"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="税号">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="注册电话">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="注册地址">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="开户账户">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="开户银行">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">

            <el-form-item label="总价">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <table class="add-table">
          <thead>
          <tr>
            <td>物资类别</td>
            <td>明细分类</td>
            <td>物资名称</td>
            <td>型号</td>
            <td>数量</td>
            <td>单位</td>
            <td>单价（估）</td>
            <td>期望到达时间</td>
            <td>备注</td>
            <td>供应商名称</td>
            <td>邮箱</td>
            <td>电话</td>

          </tr>
          </thead>
          <tbody>
          <tr>
            <td>自动获取</td>
            <td>
              <el-input size="mini" v-model="form.name" class="mini" disabled="" placeholder="自动获取"></el-input>
            </td>
            <td>
              <el-input size="mini" v-model="form.name" class="mini" disabled="" placeholder="选取"></el-input>
            </td>
            <td>自动获取</td>
            <td>自动获取</td>
            <td>自动获取</td>
            <td>自动获取</td>
            <td>
              <el-input size="mini" v-model="form.name" class="mini" disabled="" placeholder="选取"></el-input>
            </td>
            <td>
              <el-input size="mini" v-model="form.name" class="mini" disabled="" placeholder="选取"></el-input>
            </td>
            <td>自动获取</td>
            <td>自动获取</td>
            <td>自动获取</td>
          </tr>
          </tbody>
        </table>

      </div>
      <div v-show="radio==1">
        <el-row style="padding-bottom: 10px;text-align: center;">
          <el-col :span="12" style="text-align: center;">
            <el-button type="primary">跳转京东平台</el-button>
          </el-col>
          <el-col :span="12" style="text-align: center;">
            <el-button type="primary">获取京东订单</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">

            <el-form-item label="下单时间">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">

            <el-form-item label="订单号">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">

            <el-form-item label="下单人">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">

            <el-form-item label="所属部门">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">

            <el-form-item label="收货人">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">

            <el-form-item label="收货地址">
              <el-input v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">

            <el-form-item label="备注">
              <el-input type="textarea" v-model="form.name" disabled="" placeholder="自动获取"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-table
          :data="table1"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="序号"
          >
          </el-table-column>
          <el-table-column
            prop="商品信息"
            label="姓名"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="商品数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="商品价格">
          </el-table-column>
          <el-table-column
            prop="address"
            label="税额">
          </el-table-column>
          <el-table-column
            prop="address"
            label="运费">
          </el-table-column>
          <el-table-column
            prop="address"
            label="合计">
          </el-table-column>
        </el-table>

      </div>
    </el-form>

    <el-dialog title="确认收货" :visible.sync="dialogFormVisible">


      <el-button>上传凭证</el-button>

      凭证列表
      <ul>
        <li>
          1、凭证列表1（可上传图片、pdf、word、excl）
        </li>
        <li>
          2、凭证2
        </li>
      </ul>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </el-container>
</template>

<script>
export default {
  name: 'buy',
  data () {
    return {
      form: {
        name: ''

      },
      dialogFormVisible:false,
      tableData: [],
      table1: [],
      radio: '2',
      value1: '',
      value: '',
      option1: [
        {
          label: '集团公司',
          value: '1'
        },
        {
          label: '物流集团',
          value: '2'
        },
        {
          label: '化学集团',
          value: '3'
        },
        {
          label: '农业（来春/园林）',
          value: '4'
        },
        {
          label: '科技城',
          value: '5'
        },
        {
          label: '生物公司',
          value: '6'
        }
      ],
      option2: [
        {
          label: '公路港',
          value: '1'
        },
        {
          label: '大区',
          value: '2'
        },
        {
          label: '各事业部下属公司',
          value: '3'
        },
        {
          label: '各事业部中台部门',
          value: '4'
        },
        {
          label: '总部智能部门',
          value: '5'
        }
      ],
      option3: [
        {
          label: '固定资产',
          value: '1'
        },
        {
          label: '低值易耗品',
          value: '2'
        },
        {
          label: '营销物资',
          value: '3'
        },
        {
          label: '礼品',
          value: '4'
        },
        {
          label: '福利',
          value: '5'
        }
      ],
      option4: [],
      option41: [
        {
          label: '办公用品',
          value: '1'
        },
        {
          label: '信息类',
          value: '2'
        },
        {
          label: '劳保用品',
          value: '3'
        },
        {
          label: '生活用品',
          value: '4'
        },
        {
          label: '其他用品',
          value: '5'
        }
      ],
      option42: [
        {
          label: '办公设备',
          value: '1'
        },
        {
          label: '信息类',
          value: '2'
        }
      ],
      option43: [
        {
          label: '礼品',
          value: '1'
        }
      ],
      option44: [
        {
          label: '营销物资',
          value: '1'
        }
      ],
      option45: [
        {
          label: '福利类',
          value: '1'
        }
      ]
    }
  }, mounted () {
    this.option4 = []
    this.option4.push(...this.option41)
  },
  methods: {},
  watch: {
    'value1': function (val1, val2) {

      let name = 'option4' + val1

      this.option4 = []
      this.option4.push(...this[name])
    }
  }
}
</script>

<style scoped>
.el-col {
  text-align: left;
}

.el-form {
  width: 100%;
}
.el-dialog__body{
  text-align: left;
}
.add-table {
  width: 100%;
  border-left: 1px solid #888;
  border-top: 1px solid #888;
}

.add-table td {
  padding: 12px 0;
  border-right: 1px solid #888;
  border-bottom: 1px solid #888;
}

.mini {
  width: 80px;
}
</style>