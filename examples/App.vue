<template>
  <div>
    <span>路口模型</span>
    <div class="modelBox">
      <tf-inter-model :option="option"
                      ref="interModel" />
    </div>
  </div>

</template>
 
<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from "vue";
const interData = {
  acsId: 200001,
  name: "文化路-江寺路",
  latitude: 30.16417026083252,
  longitude: 120.26706699803397,
  entrances: [
    {
      name: "文化路东",
      degree: 0,
      orientation: 1,
      en_id: 1,
      id: 1,
      road_center_mode: "singleYellowLine", // 分割形式
      canalization: 0,
      twice_crossing_street: 1, // 二次过街
      exit_lanes: [
        {
          id: 1,
          lane_flow: 2,
        },
        {
          id: 2,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_flow: 2,
        },
      ],
      motor_lanes: [
        {
          id: 1,
          lane_flow: 1,
          lane_type: 0,
          has_waiting_area: true,
        },
        {
          id: 2,
          lane_flow: 2,
          lane_type: 0,
          has_waiting_area: true,
        },
        {
          id: 3,
          lane_type: 0,
          lane_flow: 3,
        },
      ],
    },
    {
      name: "江寺路南",
      degree: 90,
      orientation: 2,
      en_id: 2,
      road_center_mode: "greenArea",
      canalization: 0,
      id: 2,
      exit_lanes: [
        {
          id: 1,
          lane_flow: 2,
        },
        {
          id: 2,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_flow: 2,
        },
      ],
      motor_lanes: [
        {
          id: 1,
          lane_type: 0,
          lane_flow: 8,
        },
        {
          id: 2,
          lane_type: 2,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_type: 0,
          lane_flow: 3,
        },
        {
          id: 4,
          lane_type: 4,
          lane_flow: 3,
        },
      ],
    },
    {
      name: "文化路西",
      degree: 180,
      orientation: 3,
      en_id: 2,
      road_center_mode: "doubleYellowLine", // 分割形式
      canalization: 0,
      id: 3,
      exit_lanes: [
        {
          id: 1,
          lane_flow: 2,
        },
        {
          id: 2,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_flow: 2,
        },
      ],
      motor_lanes: [
        {
          id: 1,
          lane_type: 0,
          lane_flow: 10,
        },
        {
          id: 2,
          lane_type: 0,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_type: 0,
          lane_flow: 3,
        },
      ],
    },
    {
      name: "江寺路北",
      degree: 270,
      orientation: 4,
      en_id: 3,
      road_center_mode: "singleYellowLine", // 分割形式
      canalization: 0,
      id: 4,
      exit_lanes: [
        {
          id: 1,
          lane_flow: 2,
        },
        {
          id: 2,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_flow: 2,
        },
      ],
      motor_lanes: [
        {
          id: 1,
          lane_type: 0,
          lane_flow: 1,
        },
        {
          id: 2,
          lane_type: 0,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_type: 0,
          lane_flow: 10,
        },
      ],
    },
  ],
  is_have_son: 0, // 路口类型 0：普通路口  1：父子路口  2：匝道路口
  link_en: "",
  shape: 4,
  son_entrances: [
    {
      name: "文化路东子",
      degree: 0,
      orientation: 5,
      en_id: 5,
      id: 5,
      exit_lanes: [
        {
          id: 1,
          lane_flow: 2,
        },
        {
          id: 2,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_flow: 2,
        },
      ],
      motor_lanes: [
        {
          id: 1,
          lane_flow: 9,
        },
        {
          id: 2,
          lane_flow: 10,
        },
        {
          id: 3,
          lane_flow: 2,
        },
      ],
    },
    {
      name: "江寺路南子",
      degree: 90,
      orientation: 6,
      en_id: 6,
      id: 6,
      exit_lanes: [
        {
          id: 1,
          lane_flow: 2,
        },
        {
          id: 2,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_flow: 2,
        },
      ],
      motor_lanes: [
        {
          id: 1,
          lane_flow: 8,
        },
        {
          id: 2,
          lane_flow: 10,
        },
        {
          id: 3,
          lane_flow: 2,
        },
      ],
    },
    {
      name: "文化路西子",
      degree: 180,
      orientation: 7,
      en_id: 7,
      id: 7,
      exit_lanes: [
        {
          id: 1,
          lane_flow: 2,
        },
        {
          id: 2,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_flow: 2,
        },
      ],
      motor_lanes: [
        {
          id: 1,
          lane_flow: 10,
        },
        {
          id: 2,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_flow: 3,
        },
      ],
    },
    {
      name: "江寺路北子",
      degree: 270,
      orientation: 8,
      en_id: 8,
      id: 8,
      exit_lanes: [
        {
          id: 1,
          lane_flow: 2,
        },
        {
          id: 2,
          lane_flow: 2,
        },
        {
          id: 3,
          lane_flow: 2,
        },
      ],
      motor_lanes: [
        {
          id: 1,
          lane_flow: 1,
        },
        {
          id: 2,
          lane_flow: 2,
        },
        {
          id: 2,
          lane_flow: 10,
        },
      ],
    },
  ],
  son_pointer: 0,
  son_shape: 4,
};

const movements: any = [];
const entrances = interData.entrances.length;
for (let i = 0; i < entrances * 4; i++) {
  const movement = {
    if_release: i % 2 ? true : false, //是否放行
    enter_port_direction: Math.ceil((i + 1) / 4), //进口方向 目前===进口id
    if_control: 1, // 是否参与控制
    fd_flow: false, // 是否辅道流向
    movements_type: (i % 4) + 1, // 流向类型 流向类型 1左 2直 3右 4人行
    num_movements: i + 1,
  };
  movements.push(movement);
}
const realInfo: any = {
  acs_id: 300040,
  auto_or_manual: 0,
  coordinate_phase_num: 1,
  ctrl_mode: 1,
  ctrl_way: 10,
  ctrl_way_last: 0,
  current_phase_num: 1,
  current_phase_remaining_time: 10,
  current_phase_time: 30,
  cyc_flag: 0,
  cyc_remaining_time: 50,
  cyc_time: 90,
  datetime: "2021-08-04 20:49:46",
  day_plan_num: 1,
  dayplan_schedule_num: 1,
  degrade_state: 0,
  error_info: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  light_infos: [],
  main_day_plan_num: 1,
  main_time_period_num: 1,
  movements_state: [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  off_set: 6,
  phase_movements_info: [
    257, 28792, 16448, 4112, 1797, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  phase_num: 4,
  phase_order: [
    { id: "A", length: 30, green_time: 0, yellow_time: 0, red_time: 0 },
    { id: "B", length: 30, green_time: 0, yellow_time: 0, red_time: 0 },
    { id: "C", length: 30, green_time: 0, yellow_time: 0, red_time: 0 },
  ],
  phase_scheme_num: 2,
  queue_infos: [],
  time_period_num: 6,
};

export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      option: {
        centerLineMode: false, // 是否道路中线对齐
        drawPhase: true, // 是否绘制左侧相位
        showRoadAsideLine: true, // 显示道路边线
        showLaneDashedLine: true, // 显示道路虚线
        showManRoadLine: true, // 显示斑马线
        showStopLine: true, // 显示停车线
        showManRoad: true, // 显示行人车道
        showLaneFlow: true, // 显示车道流向
        showRoadName: true, // 显示路口名称
        laneFlowOffetStopLine: 0, // 车道流向离停车线的距离 车道宽度的倍数
        routeNameColor: "#000000", // 默认路口名称颜色
        defaultFlowColor: "#008aaf", // 默认流向颜色
        HighLightFlowColor: "#00ec00", // 高亮流向颜色
        saturationFlowColor: "#ffffff", // 饱和度流向颜色
        phaseBackColor: "#ffffff", // 相位背景颜色
        laneBackColor: "#283349", // 车道背景颜色
        phaseNumColor: "#446a86", // 相位号颜色
      },
    });
    const interModel = ref();
    const drawInterModel = (interData: any) => {
      setTimeout(() => {
        console.log(interModel, interModel.value);
        interModel.value.init(interData);
        interModel.value.drawRealInfo(realInfo, movements);
      }, 1000);
    };
    onMounted(() => {
      drawInterModel(interData);
    });
    return {
      ...toRefs(state),
      interModel,
      drawInterModel,
    };
  },
});
</script>
 
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .modelBox {
    width: 500px;
    height: 500px;
    border: 1px solid #ccc;
  }
}
</style>