<template>
  <div class="sc-tf-inter-model"
       ref="tfInterModel">
    <!-- 路口模型 -->
    <div class="sc-tf-inter-box"
         ref="scTfInterBox"></div>
    <!-- 实时相位 -->
    <div class="overflow-box"
         v-show="drawOption.drawPhase"
         :style="{ width: phaseWidth + 'px' }">
      <div class="sc-tf-phase-box"
           ref="scTfPhaseBox"></div>
    </div>
  </div>
</template>
 
<script lang="ts">
import Konva from "konva";
import { defineComponent, reactive, toRefs, ref } from "vue";
import {
  getDrawFlowData,
  getLaneFlowPoint,
  getRealPhasePoint,
  getInterPhaseflowData,
  getFootLightData,
  getDirectionLightData,
} from "./js/flowPoint";
import { CrossInfo, Util, CrossConst } from "./js/interModel";
import { phaseMap } from "./js/common";
import { adjacentIcon, bikeIcon } from "./assets/iconBase64";
export default defineComponent({
  name: "tf-inter-model",
  props: {
    // 绘制配置参数
    option: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    let modelStage: any = null,
      baseLayer: any = null,
      realLayer: any = null,
      phaseStage: any = null,
      phaseLayer: any = null,
      cross: any = null,
      clientWidth: number = 0,
      clientHeight: number = 0,
      baseLayerWidth: number = 0,
      phaseWidth: number = 0,
      hoverBack: any = null,
      hoverText: any = null,
      ctrlWay: any = null,
      nearImg: any = null,
      bikeImg: any = null;
    const tfInterModel = ref();
    const scTfInterBox = ref();
    const scTfPhaseBox = ref();
    const state = reactive({
      phaseWidth: 100,
      drawOption: {
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
        redColor: "#FF0000", // 红色
        greenColor: "#00EC00", // 绿色
        yellowColor: "#E1E100", // 黄色
        greyColor: "#cccccc", // 灰色
      },
      interType: 0, // 0：普通路口  1：父子路口 2：匝道路口
    });
    const methods = {
      /**
       * @name wsx
       * @Date 2021-08-03 09:48:24
       * @introduction 初始化配置参数
       * @description 详细描述
       * @param {参数类型} 参数 参数说明
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      getDrawOption() {
        state.drawOption = Object.assign(
          {
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
            redColor: "#FF0000", // 红色
            greenColor: "#00EC00", // 绿色
            yellowColor: "#E1E100", // 黄色
            greyColor: "#cccccc", // 灰色
          },
          props.option
        );
      },

      clearHandler() {
        modelStage && modelStage.destroy();
        // 基础
        baseLayer && baseLayer.destroy();
        // 实时信息
        realLayer && realLayer.destroy();
        phaseStage && phaseStage.destroy();
        phaseLayer && phaseLayer.destroy();
        // 相邻路口
        // this.adjacentLayrt && this.adjacentLayrt.destroy()
        modelStage = null;
        baseLayer = null;
        realLayer = null;
        phaseStage = null;
        phaseLayer = null;
        // 路口数据
        cross = null;
      },
      /**
       * @name wsx
       * @Date 2021-07-21 19:37:23
       * @introduction 绘制路口模型
       * @description 详细描述
       * @param {参数类型} 参数 参数说明
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      init(interData: any) {
        if (modelStage) {
          this.clearHandler();
        }
        state.interType = interData.is_have_son;
        methods.getDrawOption();
        console.log();
        clientWidth = tfInterModel.value.clientWidth;
        clientHeight = tfInterModel.value.clientHeight;
        baseLayerWidth = Math.min(clientWidth, clientHeight);
        // 1、初始化canvas场景：Stage
        modelStage = new Konva.Stage({
          // scale: { x: 1, y: -1 },
          // container: this.$el,
          container: scTfInterBox.value,
          width: clientWidth,
          height: clientHeight,
        });
        // 1.1 保障路口基础图层是正方形，居中
        let width, height;
        let x = 0;
        let y = 0;
        // eslint-disable-next-line prefer-const
        width = height = baseLayerWidth;
        if (clientWidth > clientHeight) {
          x = (clientWidth - clientHeight) / 2;
        } else {
          y = -(clientWidth - clientHeight) / 2;
        }
        baseLayer = new Konva.Layer({
          x: state.drawOption.drawPhase
            ? x + width / 2 + width / 12
            : x + width / 2,
          y: y + height / 2,
        });
        baseLayer.height = height;
        baseLayer.width = height;
        modelStage.add(baseLayer);
        methods.drawInter(interData);
      },
      /**
       * @name wsx
       * @Date 2021-07-26 13:21:03
       * @introduction 简述
       * @description 详细描述
       * @param {参数类型} interData 路口模型数据
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      drawInter(interData: any) {
        const me = this;
        const drawInterData = this.resetInterData(interData);
        cross = new CrossInfo(drawInterData);
        // console.log(this.cross)
        // 根据数据绘画
        const roadPolygonShape = new Konva.Shape({
          stroke: "#23324b",
          strokeWidth: 5,
          fill: state.drawOption.laneBackColor,
          // a Konva.Canvas renderer is passed into the sceneFunc function
          sceneFunc(context: any, shape: any) {
            context.beginPath();
            const roadPolygon = cross.entranceArray
              .map((info: any) => {
                return info.polygonData.RoadPolygon;
              })
              .flat();
            roadPolygon.forEach((element: any, index: number) => {
              if (index === 0) {
                context.moveTo(element[0], -element[1]);
              } else {
                context.lineTo(element[0], -element[1]);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          },
        });
        baseLayer.add(roadPolygonShape);

        // 过滤匝道
        if (state.interType === 3) {
          drawMethods.drawRoundabout();
        }

        cross.entranceArray.map((info: any, index: number) => {
          // 1、白色划线部分：人行道、车道线、虚线
          const whitePolygonShape = new Konva.Shape({
            stroke: "#ffffff",
            fill: "#ffffff",
            strokeWidth: 1,
            opacity: 1,
            sceneFunc(context: any, shape: any) {
              context.beginPath();
              // 人行道
              if (state.drawOption.showManRoadLine) {
                info.lineData.manRoadLine.forEach((info: any) => {
                  info.forEach((element: any, index: number) => {
                    if (index === 0) {
                      context.moveTo(element[0], -element[1]);
                    } else {
                      context.lineTo(element[0], -element[1]);
                    }
                  });
                });
              }
              // 车道边线
              if (state.drawOption.showRoadAsideLine) {
                info.lineData.carRoadLine0.forEach((info: any, i: number) => {
                  info.forEach((element: any, index: number) => {
                    if (index === 0) {
                      context.moveTo(element[0], -element[1]);
                    } else {
                      context.lineTo(element[0], -element[1]);
                    }
                  });
                });
              }
              // 车道停车线
              if (state.drawOption.showStopLine) {
                info.lineData.carRoadLine1.forEach((info: any, i: number) => {
                  info.forEach((element: any, index: any) => {
                    if (index === 0) {
                      context.moveTo(element[0], -element[1]);
                    } else {
                      context.lineTo(element[0], -element[1]);
                    }
                  });
                });
              }
              // 虚线
              if (
                state.drawOption.showLaneDashedLine &&
                state.interType !== 2
              ) {
                info.lineData.carRoadLine2.forEach((info: any) => {
                  info.forEach((element: any, index: any) => {
                    if (index === 0) {
                      context.moveTo(element[0], -element[1]);
                    } else {
                      context.lineTo(element[0], -element[1]);
                    }
                  });
                });
              }
              context.closePath();
              context.fillStrokeShape(shape);
            },
          });
          baseLayer.add(whitePolygonShape);

          // 普通路口-父子路口
          if (state.interType !== 2) {
            // 显示道路虚线
            if (state.drawOption.showLaneDashedLine) {
              // 绘制公交专用车道/潮汐车道
              const yellowPolygonShape = new Konva.Shape({
                stroke: state.drawOption.yellowColor,
                fill: state.drawOption.yellowColor,
                strokeWidth: 1,
                opacity: 1,
                sceneFunc(context: any, shape: any) {
                  context.beginPath();
                  info.lineData.carRoadLine4.forEach((info: any) => {
                    info.forEach((element: any, index: any) => {
                      if (index === 0) {
                        context.moveTo(element[0], -element[1]);
                      } else {
                        context.lineTo(element[0], -element[1]);
                      }
                    });
                  });
                  context.closePath();
                  context.fillStrokeShape(shape);
                },
              });
              baseLayer.add(yellowPolygonShape);

              // 进口绘制辅道分割线
              const option = {
                stroke: state.drawOption.greenColor,
                strokeWidth: 2,
              };
              drawMethods.drawLine(info.lineData.fdsplitLine, option);

              // 待驶区
              info.correctPoint.pointWaitArea.forEach((it: any) => {
                const lineData: any = [];
                it.forEach((itt: any) => {
                  lineData.push(itt.x);
                  lineData.push(-itt.y);
                });
                let greenLine = new Konva.Line({
                  points: lineData,
                  stroke: "#ffffff",
                  strokeWidth: 1,
                  lineJoin: "round",
                  dash: [3, 5],
                  lineCap: "round",
                  // tension: 0.5
                });
                baseLayer.add(greenLine);
              });
            }

            // 绘制人行道
            if (state.drawOption.showManRoad) {
              const manRoadPolygonShape = new Konva.Shape({
                fill: "black",
                sceneFunc(context: any, shape: any) {
                  context.beginPath();
                  const data = [
                    info.polygonData.walkwayPolygonR,
                    cross.entranceArray[
                      index === 0 ? cross.entranceArray.length - 1 : index - 1
                    ].polygonData.walkwayPolygonL,
                  ].flat();
                  data.forEach((element, index) => {
                    if (index === 0) {
                      context.moveTo(element[0], -element[1]);
                    } else {
                      context.lineTo(element[0], -element[1]);
                    }
                  });
                  context.closePath();
                  context.fillStrokeShape(shape);
                },
              });
              baseLayer.add(manRoadPolygonShape);
            }
          } else {
            // 匝道
            if (state.drawOption.showLaneDashedLine) {
              info.lineData.carRoadLine2.forEach((info: any) => {
                var dash = new Konva.Line({
                  points: [info[0][0], -info[0][1], info[1][0], -info[1][1]],
                  stroke: "#ffffff",
                  strokeWidth: 1,
                  lineJoin: "round",
                  dash: [8, 8],
                });
                baseLayer.add(dash);
              });
            }
          }

          // 车道分割线部分：单黄线/双黄线/绿化带
          if (info.road_center_mode === "greenArea") {
            drawMethods.drawPolygon(info.lineData.carRoadLine3[0], {
              fill: state.drawOption.greenColor,
              stroke: state.drawOption.greenColor,
            });
          } else {
            drawMethods.drawLine(info.lineData.carRoadLine3, {
              stroke: state.drawOption.yellowColor,
            });
          }

          // 4、车道名称
          if (state.drawOption.showRoadName) {
            var roadText = new Konva.Text({
              x: info.correctPoint.roadName.x,
              y: -info.correctPoint.roadName.y,
              text: info.name,
              fontSize: 12,
              fontFamily: "Calibri",
              fill: state.drawOption.routeNameColor,
              rotation: drawMethods.getTextRotationByDegree(info.degree),
            });
            drawMethods.offsetText(roadText, info.degree);
            baseLayer.add(roadText);
          }
          // 绘制车道流向
          if (state.drawOption.showLaneFlow) {
            // 车道流向
            const laneFlowPolygonShape = new Konva.Shape({
              stroke: "white",
              strokeWidth: 1.5,
              sceneFunc(context: any, shape: any) {
                const data = info.polygonData.laneFlowPolygon;
                data.forEach((it: any, i: any) => {
                  context.beginPath();
                  it.forEach((itt: any, j: any) => {
                    if (j === 0) {
                      context.moveTo(itt[0], -itt[1]);
                    } else {
                      context.lineTo(itt[0], -itt[1]);
                    }
                  });
                  context.closePath();
                  context.fillStrokeShape(shape);
                });
              },
            });
            baseLayer.add(laneFlowPolygonShape);
          }
        });
        // 要在后面绘制，防止覆盖
        cross.entranceArray.map((info: any, index: any) => {
          if (state.interType !== 2) {
            // 绘制右转渠化
            info.canalization && drawMethods.drawCanalization(info.en_id);
            // 二次过街绘制 安全岛
            info.twice_crossing_street &&
              drawMethods.drawTwiceIsland(info.en_id);
            // 添加非机动车标志
            drawMethods.drawBikeLogo(info);
          }
        });
        baseLayer.draw();
      },

      // 重置路口数据
      resetInterData(interData: any) {
        // 判断是否有右转渠化
        const newData = JSON.parse(
          JSON.stringify({
            ...interData,
            drawOption: state.drawOption,
            baseWidth: baseLayerWidth,
            clientWidth: clientWidth,
            clientHeight: clientHeight,
            expandManRadian: false,
            centerLineMode: state.drawOption.centerLineMode,
          })
        );
        if (state.interType === 3) {
          newData.expandManRadian = true;
        }
        newData.entrances.forEach((it: any, i: any) => {
          if (it.canalization && it.canalization !== 0) {
            newData.expandManRadian = true;
            // 有单独出口的要添加右出口的出口车道
            if (it.canalization === 2 || it.canalization === 4) {
              const entrance =
                newData.entrances[i > 0 ? i - 1 : newData.entrances.length - 1];
              entrance.exit_lanes.push({
                id: entrance.exit_lanes.length + 1,
                lane_flow: 2,
              });
            }
          }
        });
        return newData;
      },
    };
    //---------------------------------------------drawMixins---------------------------------------------
    const drawMethods = {
      initLayer() {
        realLayer && realLayer.destroy();
        let width, height;
        let x = 0;
        let y = 0;
        width = height = baseLayerWidth;
        if (clientWidth > clientHeight) {
          x = (clientWidth - clientHeight) / 2;
        } else {
          y = -(clientWidth - clientHeight) / 2;
        }
        realLayer = new Konva.Layer({
          x: state.drawOption.drawPhase
            ? x + width / 2 + width / 12
            : x + width / 2,
          y: y + height / 2,
        });
        realLayer.height = height;
        realLayer.width = height;
        modelStage.add(realLayer);
      },
      // 绘制进口流向
      drawRoadFlow(movements: any, cb: any) {
        const sortMovement = this.getSortMovement(movements);
        sortMovement.forEach((it: any, i: any) => {
          if (cross.entranceArray[i].in) {
            // 主道流向
            it.flowList.forEach((itt: any, j: any) => {
              if (itt.if_control) {
                const entrance = cross.entranceArray[it.en_id - 1];
                const startPoint = this.getStartPoint(
                  itt.movements_type,
                  j,
                  it,
                  "main"
                );
                const flowData = getDrawFlowData(
                  startPoint,
                  CrossConst.roadWidth,
                  itt.movements_type,
                  entrance
                );
                const rotateFlowData = this.getRotateData(
                  flowData,
                  entrance.angle
                );
                this.drawRoadFlowWithData(rotateFlowData, itt, cb);
              }
            });
            // 辅道流向
            it.fdflowList.forEach((itt: any, j: any) => {
              if (itt.if_control) {
                const entrance = cross.entranceArray[it.en_id - 1];
                const startPoint = this.getStartPoint(
                  itt.movements_type,
                  j,
                  it,
                  "fd"
                );
                const flowData = getDrawFlowData(
                  startPoint,
                  CrossConst.roadWidth,
                  itt.movements_type,
                  entrance,
                  "fd"
                );
                const rotateFlowData = this.getRotateData(
                  flowData,
                  entrance.angle
                );
                this.drawRoadFlowWithData(rotateFlowData, itt, cb);
              }
            });
          }
        });
      },

      // 绘制进口流向
      drawRoadFlowWithData(rotateFlowData: any, itt: any, cb: any) {
        let roadFlowPolygonShape = new Konva.Shape({
          stroke: itt.if_release
            ? state.drawOption.HighLightFlowColor
            : state.drawOption.defaultFlowColor,
          fill: itt.if_release
            ? state.drawOption.HighLightFlowColor
            : state.drawOption.defaultFlowColor,
          strokeWidth: 1,
          info: itt,
          sceneFunc(context: any, shape: any) {
            context.beginPath();
            rotateFlowData.forEach((itt: any, j: any) => {
              if (j === 0) {
                context.moveTo(itt.x, -itt.y);
              } else {
                context.lineTo(itt.x, -itt.y);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          },
        });
        if (cb) {
          roadFlowPolygonShape.on("click", function (e: any) {
            cb(e.target.attrs.info);
          });
        }
        baseLayer.add(roadFlowPolygonShape);
      },

      // 获取旋转后点位
      getRotateData(flowData: any, angle: any) {
        let rotatePoins: any = [];
        if (Array.isArray(flowData)) {
          rotatePoins = [];
          flowData.forEach((info, index) => {
            if (Array.isArray(info)) {
              rotatePoins[index] = [];
              info.map((it) => {
                rotatePoins[index].push(
                  Util.pointRotateAngel(it, -angle, [0, 0])
                );
              });
            } else {
              rotatePoins.push(Util.pointRotateAngel(info, -angle, [0, 0]));
            }
          });
        } else {
          rotatePoins = Util.pointRotateAngel(flowData, -angle, [0, 0]);
        }
        return rotatePoins;
      },

      // 获取进口主道数量以及辅道数量
      getEntranceLaneNum(enterInfo: any) {
        let mainIn = enterInfo.in;
        let fdIn = 0;
        const index = enterInfo.motor_lanes.findIndex(
          (it: any) => it.lane_type === 4
        );
        if (index > -1) {
          fdIn = mainIn - index - 1;
          mainIn = index + 1;
        }
        return { mainIn, fdIn };
      },

      /**
       * @name wsx
       * @Date 2021-08-24 17:15:03
       * @introduction 获取绘制路口流向起始点位 左下角点位
       * @description 详细描述
       * @param {参数类型} 参数 en_id 进口id  movementsType 流向类型 j第几个流向  laneFlowTotal车道流向数量 ,type:主道'main'辅道'fd'
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      getStartPoint(movementsType: any, j: any, it: any, type: any) {
        const { en_id, laneFlowTotal, fdlaneFlowTotal } = it;
        let enterInfo = cross.entranceArray[en_id - 1];
        const { mainIn } = this.getEntranceLaneNum(enterInfo);
        // 绘制的顶点
        const { x: x1, y: y1 } = enterInfo.point.H0[enterInfo.in];
        const { y: y2 } = enterInfo.point.H0[enterInfo.in - 1];
        const roadWidth = CrossConst.roadWidth;
        let laneOffset = y2 - y1;
        let offsetX = 0;
        let offsetY = -2 * roadWidth;
        let startPoint = [0, 0];
        if (
          movementsType === 4 ||
          movementsType === 10 ||
          movementsType === 11
        ) {
          // 人行流向
          offsetX = 0;
          offsetY +=
            CrossConst.manCarInterval +
            CrossConst.manRoadLength / 2 +
            2 * roadWidth;
        } else if (
          movementsType === 12 ||
          movementsType === 13 ||
          movementsType === 14
        ) {
          if (fdlaneFlowTotal) {
            // 存在辅道流向
            if (enterInfo.in <= laneFlowTotal + fdlaneFlowTotal) {
              offsetX =
                (laneFlowTotal + fdlaneFlowTotal) * roadWidth +
                (roadWidth * (j - laneFlowTotal) * 3) / 4;
              offsetY +=
                laneOffset * (laneFlowTotal + fdlaneFlowTotal) +
                (laneOffset * (j - laneFlowTotal) * 3) / 4;
            } else {
              offsetX =
                enterInfo.in * roadWidth +
                (roadWidth * (j - laneFlowTotal) * 3) / 4;
              offsetY +=
                laneOffset * enterInfo.in +
                (laneOffset * (j - laneFlowTotal) * 3) / 4;
            }
          } else {
            // 不存在辅道流向
            if (enterInfo.in <= laneFlowTotal) {
              offsetX =
                laneFlowTotal * roadWidth +
                (roadWidth * (j - laneFlowTotal) * 3) / 4;
              offsetY +=
                laneOffset * laneFlowTotal +
                (laneOffset * (j - laneFlowTotal) * 3) / 4;
            } else {
              offsetX =
                enterInfo.in * roadWidth +
                (roadWidth * (j - laneFlowTotal) * 3) / 4;
              offsetY +=
                laneOffset * enterInfo.in +
                (laneOffset * (j - laneFlowTotal) * 3) / 4;
            }
          }
        } else {
          if (fdlaneFlowTotal) {
            // 存在辅道流向
            if (enterInfo.in <= laneFlowTotal + fdlaneFlowTotal) {
              if (type === "main") {
                offsetX += CrossConst.roadWidth * j;
                offsetY += laneOffset * j;
              } else if (type === "fd") {
                offsetX += CrossConst.roadWidth * (j + laneFlowTotal);
                offsetY += laneOffset * (j + laneFlowTotal);
              }
            } else {
              // 只有一个流向的话，根据流向确定位置
              if (type === "main") {
                if (laneFlowTotal === 1) {
                  // 流向直
                  if (movementsType === 2 || movementsType === 7) {
                    offsetX += (CrossConst.roadWidth * (mainIn - 1)) / 2;
                    offsetY +=
                      laneOffset * ((CrossConst.roadWidth * (mainIn - 1)) / 2);
                  }
                  // 流向带右边
                  if (movementsType === 3 || movementsType === 6) {
                    offsetX += CrossConst.roadWidth * (mainIn - 1);
                    offsetY += laneOffset * (mainIn - 1);
                  }
                }
                if (laneFlowTotal > 1) {
                  offsetX +=
                    ((CrossConst.roadWidth * (enterInfo.in - 1)) /
                      (laneFlowTotal - 1)) *
                    j;
                  offsetY +=
                    ((laneOffset * (enterInfo.in - 1)) / (laneFlowTotal - 1)) *
                    j;
                }
              } else if (type === "fd") {
                offsetX +=
                  ((CrossConst.roadWidth * (enterInfo.in - 1)) /
                    (laneFlowTotal + fdlaneFlowTotal - 1)) *
                  (j + laneFlowTotal);
                offsetY +=
                  ((laneOffset * (enterInfo.in - 1)) /
                    (laneFlowTotal + fdlaneFlowTotal - 1)) *
                  (j + laneFlowTotal);
              }
            }
          } else {
            // 不存在辅道流向
            if (enterInfo.in <= laneFlowTotal) {
              offsetX += CrossConst.roadWidth * j;
              offsetY += laneOffset * j;
            } else {
              // 只有一个流向的话，根据流向确定位置
              if (laneFlowTotal === 1) {
                // 流向直
                if (movementsType === 2 || movementsType === 7) {
                  offsetX += (CrossConst.roadWidth * (enterInfo.in - 1)) / 2;
                  offsetY +=
                    laneOffset *
                    ((CrossConst.roadWidth * (enterInfo.in - 1)) / 2);
                }
                // 流向带右边
                if (movementsType === 3 || movementsType === 6) {
                  offsetX += CrossConst.roadWidth * (enterInfo.in - 1);
                  offsetY += laneOffset * (enterInfo.in - 1);
                }
              }
              if (laneFlowTotal > 1) {
                offsetX +=
                  ((CrossConst.roadWidth * (enterInfo.in - 1)) /
                    (laneFlowTotal - 1)) *
                  j;
                offsetY +=
                  ((laneOffset * (enterInfo.in - 1)) / (laneFlowTotal - 1)) * j;
              }
            }
          }
        }
        startPoint = [x1 + offsetX, y1 + offsetY];
        return startPoint;
      },

      // 流向按照进口-左至右绘制顺序排序 enter_port_direction
      getSortMovement(movements: any) {
        let sortMovement: any = [];
        cross.entranceArray.forEach((it: any, i: any) => {
          const enterMove = movements.filter((itt: any) => {
            return itt.enter_port_direction === it.en_id && itt.if_control;
          });
          // 流向带左
          const leftArray = enterMove.filter((itt: any) => {
            return (
              (itt.movements_type === 1 ||
                itt.movements_type === 5 ||
                itt.movements_type === 8 ||
                itt.movements_type === 9) &&
              !itt.fd_flow
            );
          });
          // 辅道流向左边
          const leftFdArray = enterMove.filter((itt: any) => {
            return (
              (itt.movements_type === 1 ||
                itt.movements_type === 5 ||
                itt.movements_type === 8 ||
                itt.movements_type === 9) &&
              itt.fd_flow
            );
          });
          // 流向直
          const centerArray = enterMove.filter((itt: any) => {
            return (
              (itt.movements_type === 2 || itt.movements_type === 7) &&
              !itt.fd_flow
            );
          });
          // 辅道流向直
          const centerFdArray = enterMove.filter((itt: any) => {
            return (
              (itt.movements_type === 2 || itt.movements_type === 7) &&
              itt.fd_flow
            );
          });
          // 流向带右
          const rightArray = enterMove.filter((itt: any) => {
            return (
              (itt.movements_type === 3 || itt.movements_type === 6) &&
              !itt.fd_flow
            );
          });
          // 辅道流向带右
          const rightFdArray = enterMove.filter((itt: any) => {
            return (
              (itt.movements_type === 3 || itt.movements_type === 6) &&
              itt.fd_flow
            );
          });
          // 流向人行
          const manArray = enterMove.filter((itt: any) => {
            return (
              (itt.movements_type === 4 ||
                itt.movements_type === 10 ||
                itt.movements_type === 11) &&
              !itt.fd_flow
            );
          });
          // 非机动车左  直  左直
          const nonArray = enterMove.filter((itt: any) => {
            return (
              (itt.movements_type === 12 ||
                itt.movements_type === 13 ||
                itt.movements_type === 14) &&
              !itt.fd_flow
            );
          });
          sortMovement.push({
            en_id: it.en_id,
            laneFlowTotal:
              leftArray.length + centerArray.length + rightArray.length,
            flowList: [
              ...leftArray,
              ...centerArray,
              ...rightArray,
              ...nonArray,
              ...manArray,
            ],
            fdlaneFlowTotal:
              leftFdArray.length + centerFdArray.length + rightFdArray.length,
            fdflowList: [...leftFdArray, ...centerFdArray, ...rightFdArray],
          });
        });
        return sortMovement;
      },

      // 绘制流向饱和度
      drawFlowSaturation(flowSaturation: any) {
        flowSaturation.forEach((it: any, i: any) => {
          const enterInfo = cross.entranceArray[it.enter_port_direction - 1];
          if (enterInfo.in) {
            const flowData =
              enterInfo.polygonData.roadFlowPolygon[it.movements_type - 1];
            // 绘制饱和度流向
            const roadFlowPolygonShape = new Konva.Shape({
              stroke: state.drawOption.saturationFlowColor,
              fill: state.drawOption.saturationFlowColor,
              strokeWidth: 1,
              info: it,
              sceneFunc(context: any, shape: any) {
                context.beginPath();
                flowData.forEach((itt: any, j: any) => {
                  if (j === 0) {
                    context.moveTo(itt[0], -itt[1]);
                  } else {
                    context.lineTo(itt[0], -itt[1]);
                  }
                });
                context.closePath();
                context.fillStrokeShape(shape);
              },
            });
            baseLayer.add(roadFlowPolygonShape);

            const { x, y } =
              enterInfo.correctPoint.pointRoadFlowText[it.movements_type - 1];
            // 绘制饱和度
            let saturationText = new Konva.Text({
              x: x,
              y: -y,
              text: it.data,
              fontSize: 12,
              fontFamily: "Calibri",
              fill: state.drawOption.saturationFlowColor,
              rotation: this.getTextRotationByDegree(enterInfo.degree),
            });
            this.offsetText(saturationText, enterInfo.degree);
            baseLayer.add(saturationText);
          }
        });
      },
      // 绘制车道或者进出口背景
      fillEntranceOrLaneBack(fillData: any) {
        fillData.forEach((it: any) => {
          const enterInfo = cross.entranceArray[it.en_id - 1];
          const inNum = enterInfo.in;
          const outNum = enterInfo.out;
          let index1 = 0;
          let index2 = 0;
          let polygonData = [];
          // 1进口填充
          if (it.fillType === 1) {
            // 进口方向
            if (it.fillDirection === 1) {
              index1 = 0;
              index2 = inNum;
            } else if (it.fillDirection === 2) {
              // 出口方向
              index1 =
                inNum + this.getOutLineOffset(enterInfo.road_center_mode);
              index2 =
                inNum +
                outNum +
                this.getOutLineOffset(enterInfo.road_center_mode);
            }
          } else if (it.fillType === 2) {
            // 2车道填充
            if (it.fillDirection === 1) {
              index1 = inNum - it.laneNumber + 1;
              index2 = inNum - it.laneNumber;
            } else if (it.fillDirection === 2) {
              // 出口方向
              index1 =
                inNum +
                it.laneNumber +
                this.getOutLineOffset(enterInfo.road_center_mode);
              index2 =
                inNum +
                it.laneNumber +
                this.getOutLineOffset(enterInfo.road_center_mode) -
                1;
            }
          }
          const H0 = enterInfo.point.H0;
          const H2 = enterInfo.point.H2;
          let point1 = Util.pointRotateAngel(H0[index1], -enterInfo.angle);
          let point2 = Util.pointRotateAngel(H0[index2], -enterInfo.angle);
          let point3 = Util.pointRotateAngel(H2[index2], -enterInfo.angle);
          let point4 = Util.pointRotateAngel(H2[index1], -enterInfo.angle);
          if (it.length) {
            point3 = Util.pointRotateAngel(
              {
                x: H0[index2].x,
                y: H0[index2].y - CrossConst.roadWidth * it.length,
              },
              -enterInfo.angle
            );
            point4 = Util.pointRotateAngel(
              {
                x: H0[index1].x,
                y: H0[index1].y - CrossConst.roadWidth * it.length,
              },
              -enterInfo.angle
            );
          }
          polygonData = [
            [point1.x, point1.y],
            [point2.x, point2.y],
            [point3.x, point3.y],
            [point4.x, point4.y],
          ];
          this.drawPolygon(polygonData, it.style);
        });
      },

      getOutLineOffset(roadCenterMode: any) {
        let offset = 0;
        if (roadCenterMode && roadCenterMode !== "singleYellowLine") {
          offset = 1;
        }
        return offset;
      },

      // 绘制进口高亮
      drawEntranceHighLight(lightData: any) {
        lightData.forEach((it: any) => {
          const enterInfo = cross.entranceArray[it.en_id - 1];
          const inNum = enterInfo.in;
          let lineDatas = [];
          const H0 = enterInfo.point.H0;
          const H2 = enterInfo.point.H2;
          let point1 = Util.pointRotateAngel(H0[0], -enterInfo.angle);
          let point2 = Util.pointRotateAngel(H0[inNum], -enterInfo.angle);
          let point3 = Util.pointRotateAngel(H2[inNum], -enterInfo.angle);
          let point4 = Util.pointRotateAngel(H2[0], -enterInfo.angle);
          if (it.length) {
            point3 = Util.pointRotateAngel(
              {
                x: H0[inNum].x,
                y: H0[inNum].y - CrossConst.roadWidth * it.length,
              },
              -enterInfo.angle
            );
            point4 = Util.pointRotateAngel(
              { x: H0[0].x, y: H0[0].y - CrossConst.roadWidth * it.length },
              -enterInfo.angle
            );
          }
          lineDatas = [
            [
              [point1.x, point1.y],
              [point2.x, point2.y],
            ],
            [
              [point2.x, point2.y],
              [point3.x, point3.y],
            ],
            [
              [point1.x, point1.y],
              [point4.x, point4.y],
            ],
          ];
          this.drawLine(lineDatas, it.style);
        });
      },

      // 绘制相邻关系
      drawAdjacentInfo(adjacentList: any, cb: any) {
        const me = this;
        const adjacentMap: any = {};
        adjacentList.forEach((it: any) => {
          adjacentMap[it.entrance_id] = it;
        });
        cross.entranceArray.forEach((info: any) => {
          const adjacentInfo = adjacentMap[info.en_id];
          if (adjacentInfo) {
            const point = this.getNearPoint(info);
            let img = new Konva.Image({
              image: nearImg,
              width: CrossConst.roadWidth * 1.5,
              height: CrossConst.roadWidth * 1.5,
              x: point.x,
              y: -point.y,
              info: adjacentInfo,
              rotation: this.getImgRotationByDegree(info.degree, 2),
            });
            this.offsetImg(img, info.degree, 2);
            if (cb) {
              img.on("click", function (e: any) {
                const info = e.target.attrs.info;
                cb(info);
              });
              img.on("mouseover", function (e: any) {
                const { x, y } = e.target.attrs;
                me.drawHoverText(x, y, adjacentInfo.hoverText);
              });
              img.on("mouseout", function (e: any) {
                hoverText.remove();
                hoverBack.remove();
              });
            }
            baseLayer.add(img);
          }
        });
      },
      // 获取绘制相邻路口箭头的点位
      getNearPoint(curEntrance: any) {
        const { degree } = curEntrance;
        const width =
          (state.drawOption.drawPhase
            ? (clientWidth * 5) / 12
            : clientWidth / 2) -
          2 * CrossConst.roadWidth;
        const height = clientHeight / 2 - 2 * CrossConst.roadWidth;
        let x = 0;
        let y = 0;
        if (degree >= 0 && degree < 45) {
          x = width;
          y = -width * Math.tan(Util.toRadian(degree));
        } else if (degree >= 45 && degree < 90) {
          const calDegree = 90 - degree;
          x = height * Math.tan(Util.toRadian(calDegree));
          y = -height;
        } else if (degree >= 90 && degree < 135) {
          const calDegree = degree - 90;
          x = -height * Math.tan(Util.toRadian(calDegree));
          y = -height;
        } else if (degree >= 135 && degree < 180) {
          const calDegree = 180 - degree;
          x = -width;
          y = -width * Math.tan(Util.toRadian(calDegree));
        } else if (degree >= 180 && degree < 225) {
          const calDegree = degree - 180;
          x = -width;
          y = width * Math.tan(Util.toRadian(calDegree));
        } else if (degree >= 225 && degree < 270) {
          const calDegree = 270 - degree;
          x = -height * Math.tan(Util.toRadian(calDegree));
          y = height;
        } else if (degree >= 270 && degree < 315) {
          const calDegree = degree - 270;
          x = height * Math.tan(Util.toRadian(calDegree));
          y = height;
        } else if (degree >= 315 && degree <= 360) {
          const calDegree = 360 - degree;
          x = width;
          y = width * Math.tan(Util.toRadian(calDegree));
        }
        return { x, y };
      },

      // 绘制非机动车标志
      drawBikeLogo(info: any) {
        const imageList = [
          info.correctPoint.roadPole,
          info.correctPoint.roadPoleL,
        ];
        imageList.forEach((it, i) => {
          const { x, y } = it;
          let img = new Konva.Image({
            image: bikeImg,
            width: 0.5 * CrossConst.roadWidth,
            height: 0.5 * CrossConst.roadWidth,
            x: x,
            y: -y,
            rotation: this.getImgRotationByDegree(info.degree, 2),
          });
          this.offsetImg(img, info.degree, 2);
          baseLayer.add(img);
        });
      },

      // 绘制车道图标
      drawLaneImg(laneImgs: any, cb: any) {
        this.loadImg(laneImgs, (res: any) => {
          laneImgs.forEach((it: any, i: any) => {
            const enterInfo = cross.entranceArray[it.en_id - 1];
            if (enterInfo) {
              const { x, y } = this.getStopLinePointByLaneNum(it, enterInfo);
              let img = new Konva.Image({
                image: res[i],
                width: 1 * CrossConst.roadWidth,
                height: 1 * CrossConst.roadWidth,
                x: x,
                y: -y,
                info: it,
                rotation: this.getImgRotationByDegree(
                  enterInfo.degree,
                  it.rotateType
                ),
              });
              this.offsetImg(img, enterInfo.degree, it.rotateType);
              if (cb) {
                img.on("click", function (e: any) {
                  const info = e.target.attrs.info;
                  cb(info);
                });
              }
              baseLayer.add(img);
            }
          });
        });
      },

      // 提前加载图片
      loadImg(imageList: any, cb: any) {
        const loadImgs: any = [];
        imageList.forEach((it: any) => {
          const imgload = new window.Promise((resolve, reject) => {
            const image = new Image();
            image.onload = function () {
              resolve(image);
            };
            image.src = it.imgUrl;
          });
          loadImgs.push(imgload);
        });
        window.Promise.all(loadImgs)
          .then((res) => {
            if (cb) {
              cb(res);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },

      /**
       * @name wsx
       * @Date 2021-08-04 11:05:28
       * @introduction 获取根据车道id获取车道中心跟停车线偏移一定距离的旋转后的点位
       * @description 详细描述
       * @param {参数类型} laneNumber：车道号
       * @param {参数类型} inNumber：进口车道数
       * @param {参数类型} offetStopLine：偏移量 车道宽度的倍数
       * @param {参数类型} H0：停车线跟车道的交点数组
       * @param {参数类型} angle：车道角度
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      getStopLinePointByLaneNum(it: any, enterInfo: any) {
        let index = enterInfo.in - it.laneNumber + 1;
        if (it.laneDirection === 2) {
          index =
            enterInfo.in +
            it.laneNumber +
            this.getOutLineOffset(enterInfo.road_center_mode);
        }
        const { x, y } = enterInfo.point.H0[index];
        const orgPoint = {
          x: x + CrossConst.roadWidth / 2,
          y: y - (it.offetStopLine + 0.5) * CrossConst.roadWidth,
        };
        const armPoint = Util.pointRotateAngel(orgPoint, -enterInfo.angle);
        return armPoint;
      },

      // 获取图片旋转角度
      getImgRotationByDegree(degree: any, rotateType = 1) {
        if (rotateType === 2) {
          return degree - 90;
        }
        let rotation = degree;
        if (degree > 0 && degree <= 90) {
          rotation = degree - 90;
        } else if (degree > 90 && degree <= 180) {
          rotation = degree - 180;
        } else if (degree > 180 && degree <= 270) {
          rotation = degree - 270;
        }
        return rotation;
      },
      // 添加图片偏移量
      offsetImg(element: any, degree: any, rotateType = 1) {
        if (rotateType === 1) {
          if (degree > 0 && degree <= 90) {
            element.offsetX(element.width() / 2);
          } else if (degree > 90 && degree <= 180) {
            element.offsetX(element.width());
            element.offsetY(element.height() / 2);
          } else if (degree > 180 && degree <= 270) {
            element.offsetX(element.width() / 2);
            element.offsetY(element.height());
          } else {
            element.offsetY(element.height() / 2);
          }
        } else if (rotateType === 2) {
          if (degree >= 0 && degree <= 90) {
            element.offsetX(element.width() / 2);
          } else if (degree > 90 && degree <= 180) {
            element.offsetX(element.width() / 2);
          } else if (degree > 180 && degree <= 270) {
            element.offsetX(element.width() / 2);
          } else {
            element.offsetX(element.width() / 2);
          }
        }
      },

      // 获取文字旋转角度
      getTextRotationByDegree(degree: any) {
        let rotation = degree;
        if (degree > 90 && degree < 270) {
          rotation = degree + 180;
        }
        return rotation;
      },
      // 添加字偏移量
      offsetText(element: any, degree: any) {
        if (degree > 90 && degree < 270) {
          element.offsetX(element.width());
          element.offsetY(element.height() / 2);
        } else {
          element.offsetY(element.height() / 2);
        }
      },
      // 绘制可变车道-获取数据
      drawVariableLane(variableLaneData: any, click = false, cb: any) {
        variableLaneData.forEach((it: any, i: any) => {
          const enterInfo = cross.entranceArray[it.entrance_id - 1];
          if (enterInfo) {
            const flowData = getLaneFlowPoint(
              it.lane_id,
              it.status,
              CrossConst,
              enterInfo,
              null
            );
            const rotateFlowData = this.getRotateData(
              flowData,
              enterInfo.angle
            );
            this.drawVariableFlow(rotateFlowData);
            if (click) {
              const clickPoint = getLaneFlowPoint(
                it.lane_id,
                "variableClick",
                CrossConst,
                enterInfo,
                null
              );
              const rotateFlowData = this.getRotateData(
                clickPoint,
                enterInfo.angle
              );
              this.drawVariableClickPoint(rotateFlowData[0], it, cb);
            }
          }
        });
      },
      // 绘制可变车道 - 绘制
      drawVariableFlow(rotateFlowData: any) {
        // 车道流向
        const laneFlowPolygonShape = new Konva.Shape({
          stroke: state.drawOption.yellowColor,
          strokeWidth: 2,
          sceneFunc(context: any, shape: any) {
            context.beginPath();
            rotateFlowData.forEach((it: any, i: any) => {
              if (i === 0) {
                context.moveTo(it.x, -it.y);
              } else {
                context.lineTo(it.x, -it.y);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          },
        });
        baseLayer.add(laneFlowPolygonShape);
      },
      // 绘制可变车道可以点击的点
      drawVariableClickPoint(point: any, info: any, cb: any) {
        let clickPoint = new Konva.Circle({
          x: point.x,
          y: -point.y,
          radius: CrossConst.roadWidth / 4,
          info: info,
          fill: state.drawOption.yellowColor,
        });
        baseLayer.add(clickPoint);
        if (cb) {
          clickPoint.on("click", function (e: any) {
            const info = e.target.attrs.info;
            cb(info);
          });
        }
      },
      // 绘制二次过街安全岛
      drawTwiceIsland(en_id: any) {
        let index = en_id - 1;
        const curEntrance = cross.entranceArray[index];
        // 获取绘制安全岛点位
        const { y } = curEntrance.point.H0[curEntrance.in];
        const greenWidth = CrossConst.greenWidth; // 绿化带宽度
        // const doubleYellowLineInterval = CrossConst.doubleYellowLineInterval // 双黄线宽度
        const manRoadLength = CrossConst.manRoadLength; // 双黄线宽度
        const manCarInterval = CrossConst.manCarInterval; // 双黄线宽度
        const points: any = [];
        const width = greenWidth;
        // 单黄线
        if (curEntrance.road_center_mode === "singleYellowLine") {
          // const { x: x, y: y } = Util.pointRotateAngel(topPoint, -curEntrance.angle)
        }
        this.drawPolygon(points, { fill: "#2e8348", opacity: 0.8 });
        const { x: x1, y: y1 } = Util.pointRotateAngel(
          { x: -width, y: y + manCarInterval },
          -curEntrance.angle
        );
        const { x: x2, y: y2 } = Util.pointRotateAngel(
          { x: width, y: y + manCarInterval },
          -curEntrance.angle
        );
        const { x: x3, y: y3 } = Util.pointRotateAngel(
          { x: width, y: y + manCarInterval + manRoadLength },
          -curEntrance.angle
        );
        const { x: x4, y: y4 } = Util.pointRotateAngel(
          { x: -width, y: y + manCarInterval + manRoadLength },
          -curEntrance.angle
        );
        points.push([x1, y1]);
        points.push([x2, y2]);
        points.push([x3, y3]);
        points.push([x4, y4]);
        drawMethods.drawPolygon(points, { fill: "#2e8348", opacity: 0.8 });
      },
      // 绘制右转渠化 en_id 进口车道id 根据渠化类型，展示不通渠化
      drawCanalization(en_id: any) {
        let index = en_id - 1;
        const len = cross.entranceArray.length;
        const curEntrance = cross.entranceArray[index];
        const rightEntrance =
          cross.entranceArray[index > 0 ? index - 1 : len - 1];
        let topPoint = curEntrance.point.AR;
        if (curEntrance.canalization === 1 || curEntrance.canalization === 2) {
          let bottomPoint = {
            x: curEntrance.point.BRO.x,
            y:
              curEntrance.point.BRO.y +
              CrossConst.manCarInterval +
              CrossConst.manRoadLength +
              CrossConst.roadWidth,
          };
          let rightPoint = {
            x: rightEntrance.point.BLO.x,
            y:
              rightEntrance.point.BLO.y +
              CrossConst.manCarInterval +
              CrossConst.manRoadLength +
              CrossConst.roadWidth,
          };
          if (curEntrance.canalization === 2) {
            topPoint.y = topPoint.y + CrossConst.roadWidth;
            rightPoint.x = rightPoint.x + CrossConst.roadWidth;
            rightPoint.y = rightPoint.y - CrossConst.roadWidth;
          }
          const { x: x, y: y } = Util.pointRotateAngel(
            topPoint,
            -curEntrance.angle
          );
          const { x: x1, y: y1 } = Util.pointRotateAngel(
            bottomPoint,
            -curEntrance.angle
          );
          const { x: x3, y: y3 } = Util.pointRotateAngel(
            rightPoint,
            -rightEntrance.angle
          );
          let canalizationPoints = [[x, y]];
          const circlePoint = Util.getArcPoint([x1, y1], [x3, y3]);
          canalizationPoints = canalizationPoints.concat(circlePoint);
          canalizationPoints.push([x, y]);

          const quhuaArea = [];
          quhuaArea.push(canalizationPoints);
          const lineNum = 4;
          const stepX3 = Math.floor(x3 - x) / lineNum;
          const stepY3 = Math.floor(y3 - y) / lineNum;
          const stepX1 = Math.floor(x1 - x) / lineNum;
          const stepY1 = Math.floor(y1 - y) / lineNum;
          for (let i = 1; i <= lineNum / 2; i++) {
            const rowLine = [
              [x + i * stepX3, y + i * stepY3],
              [x + i * stepX1, y + i * stepY1],
            ];
            quhuaArea.push(rowLine);
          }
          this.drawLine(quhuaArea);
        } else if (
          curEntrance.canalization === 3 ||
          curEntrance.canalization === 4
        ) {
          let offsetDistanceY = [
            CrossConst.manCarInterval +
              CrossConst.manRoadLength +
              1.5 * CrossConst.roadWidth,
            CrossConst.manCarInterval,
            -1 * CrossConst.roadWidth,
            -3 * CrossConst.roadWidth,
            -3 * CrossConst.roadWidth,
          ];
          let offsetDistanceX = [0, 0, 0, 0, CrossConst.walkwayWidth];
          const { x: cx, y: cy } = curEntrance.point.BR;
          const colPoints = offsetDistanceY.map((it, i) => {
            const itX = offsetDistanceX[i];
            const { x: x, y: y } = Util.pointRotateAngel(
              { x: cx - 1 + itX, y: cy + it },
              -curEntrance.angle
            );
            return [x, y];
          });

          let { x: rx, y: ry } = rightEntrance.point.BL;
          // 固体岛有专门出口
          if (curEntrance.canalization === 4) {
            rx += CrossConst.roadWidth;
            offsetDistanceY = [
              CrossConst.manCarInterval +
                CrossConst.manRoadLength +
                0.5 * CrossConst.roadWidth,
              CrossConst.manCarInterval,
              -1 * CrossConst.roadWidth,
              -1 * CrossConst.roadWidth,
              -1 * CrossConst.roadWidth,
            ];
            offsetDistanceX = [
              0,
              0,
              0,
              CrossConst.roadWidth,
              CrossConst.roadWidth + CrossConst.walkwayWidth,
            ];
          }
          const rowPoints = offsetDistanceY.map((it, i) => {
            const itX = offsetDistanceX[i];
            const { x: x, y: y } = Util.pointRotateAngel(
              { x: rx + 1 - itX, y: ry + it },
              -rightEntrance.angle
            );
            return [x, y];
          });
          this.getGtdPolygonData(rowPoints, colPoints);
          this.getGtdLineData(rowPoints, colPoints);
        }
      },
      // 获取绘制固体岛的数据
      getGtdLineData(rowPoints: any, colPoints: any) {
        const quhuaArea = [];
        let rangeArea: any = [];
        const circlePoint0 = Util.getArcPoint(colPoints[0], rowPoints[0]);
        const circlePoint1 = Util.getArcPoint(colPoints[2], rowPoints[2]);
        rangeArea = rangeArea.concat(circlePoint1);
        for (let i = circlePoint0.length - 1; i > 0; i--) {
          rangeArea.push(circlePoint0[i]);
        }
        rangeArea = rangeArea.concat(circlePoint1);
        quhuaArea.push(rangeArea);
        const circlePoint2 = Util.getArcPoint(colPoints[3], rowPoints[3]);
        quhuaArea.push(circlePoint2);
        // 绘制渠化白色线条
        this.drawLine(quhuaArea);
      },
      // 获取绘制固体岛区域的数据
      getGtdPolygonData(rowPoints: any, colPoints: any) {
        const circlePoint0 = Util.getArcPoint(colPoints[0], rowPoints[0]);
        const circlePoint1 = Util.getArcPoint(colPoints[2], rowPoints[2]);
        const circlePoint2 = Util.getArcPoint(colPoints[3], rowPoints[3]);
        const circlePoint3 = Util.getArcPoint(colPoints[4], rowPoints[4]);
        // 固体岛绿色区域
        let gtdGreenPolygon = [];
        for (let i = circlePoint0.length - 1; i > 0; i--) {
          gtdGreenPolygon.push(circlePoint0[i]);
        }
        gtdGreenPolygon = gtdGreenPolygon.concat(circlePoint1);
        this.drawPolygon(gtdGreenPolygon, { fill: "green" });

        // 固体岛红色区域
        // const gtdRedPolygon = []
        // 固体岛道路区域
        let gtdRoadPolygon = [];
        for (let i = circlePoint1.length - 1; i > 0; i--) {
          gtdRoadPolygon.push(circlePoint1[i]);
        }
        gtdRoadPolygon = gtdRoadPolygon.concat(circlePoint2);
        this.drawPolygon(gtdRoadPolygon, { fill: "#23324b" });
        // 固体岛非机动车区域
        let gtdNonMotorPolygon = [];
        for (let i = circlePoint3.length - 1; i > 0; i--) {
          gtdNonMotorPolygon.push(circlePoint3[i]);
        }
        gtdNonMotorPolygon = gtdNonMotorPolygon.concat(circlePoint2);
        this.drawPolygon(gtdNonMotorPolygon, { fill: "#000000" });
      },
      // 绘制线条 color = '#fff'
      drawLine(lineDatas: any, option = {}) {
        const param = {
          stroke: "green",
          strokeWidth: 1,
          ...option,
        };
        lineDatas.forEach((it: any) => {
          const points: any = [];
          it.forEach((itt: any) => {
            points.push(itt[0]);
            points.push(-itt[1]);
          });
          const line = new Konva.Line({
            points: points,
            ...param,
          });
          baseLayer.add(line);
        });
      },
      // 绘制区域
      drawPolygon(polygonData: any, option: any) {
        if (!polygonData) {
          return;
        }
        const param = {
          fill: "#fff",
          strokeWidth: 1,
          // stroke: '#fff',
          ...option,
        };
        const polygonShape = new Konva.Shape({
          // stroke: borderColor ? borderColor : '',
          strokeWidth: 1,
          // opacity: 1,
          ...param,
          // a Konva.Canvas renderer is passed into the sceneFunc function
          sceneFunc(context: any, shape: any) {
            context.beginPath();
            polygonData.forEach((element: any, index: any) => {
              if (index === 0) {
                context.moveTo(element[0], -element[1]);
              } else {
                context.lineTo(element[0], -element[1]);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          },
        });
        baseLayer.add(polygonShape);
      },

      // 绘制hovertext
      drawHoverText(x: any, y: any, text: any) {
        hoverText = new Konva.Text({
          x: x,
          y: y,
          text: text,
          fontSize: 12,
          fontFamily: "Calibri",
          fill: "#fff",
        });
        let width = hoverText.width();
        hoverBack = new Konva.Rect({
          x: x,
          y: y,
          width: width + 10,
          height: 20,
          fill: "#3b4859",
          shadowBlur: 10,
          cornerRadius: 10,
        });
        if (x > 0) {
          hoverText.offsetX(width);
          hoverBack.offsetX(width + 5);
        } else {
          hoverBack.offsetX(5);
        }
        hoverBack.offsetY(4);
        baseLayer.add(hoverBack);
        baseLayer.add(hoverText);
      },

      // 绘制环岛
      drawRoundabout() {
        const { roadWidth, manRoadLength, manCarInterval } = CrossConst;
        // 环岛半径
        let circlrRadia = 5 * roadWidth;
        // 进口环岛障碍物
        cross.entranceArray.forEach((it: any) => {
          let polygonData = [];
          const { H0 } = it.point;
          let { x, y } = H0[it.in];
          y = y + manRoadLength + manCarInterval + 4;
          const offsetY = Math.max((-y - 2 * roadWidth) / 3, 0);
          circlrRadia = Math.min(circlrRadia, offsetY * 2);
          const { x: x1, y: y1 } = Util.pointRotateAngel(
            { x: x - roadWidth / 2, y: y + offsetY },
            -it.angle
          );
          const { x: x2, y: y2 } = Util.pointRotateAngel({ x, y }, -it.angle);
          const { x: x3, y: y3 } = Util.pointRotateAngel(
            { x: x + roadWidth / 2, y: y + offsetY },
            -it.angle
          );
          const circlePoint = Util.getArcPoint([x3, y3], [x1, y1]);
          polygonData.push([x2, y2]);
          polygonData = polygonData.concat(circlePoint);
          this.drawPolygon(polygonData, { fill: "#2e8348", opacity: 0.8 });
        });
        // 环岛中心岛
        let circle = new Konva.Circle({
          x: 0,
          y: 0,
          radius: Math.max(circlrRadia, roadWidth),
          fill: "#2e8348",
        });
        baseLayer.add(circle);

        let dashCircle = new Konva.Circle({
          x: 0,
          y: 0,
          radius: Math.max(circlrRadia, roadWidth) + roadWidth,
          stroke: "#fff",
          opacity: 0.5,
          strokeWidth: 1,
          dash: [6, 6],
        });
        baseLayer.add(dashCircle);
      },
    };
    //---------------------------------------------drawRealMixins---------------------------------------------//
    const drawRealMethods = {
      // 绘制实时信息
      drawRealInfo(realInfo: any, movements: any) {
        drawMethods.initLayer();
        // 设置实时信息基础信息
        this.setRealBaseInfo(realInfo);
        // 绘制左边相位
        this.drawPhases(realInfo, movements);
        // 绘制倒计时
        this.drawPhaseRemainTime(realInfo.current_phase_remaining_time);
        // 绘制行人灯
        cross.is_have_son !== 2 && this.drawWalkMan(realInfo, movements);
        // 绘制路口模型中间流向
        this.drawInterPhase(realInfo, movements);
        // 绘制红绿灯
        this.drawGreenRedLight(realInfo, movements);
      },
      setRealBaseInfo(realInfo: any) {
        const { ctrl_way } = realInfo;
        ctrlWay = ctrl_way;
      },
      // 绘制左边相位
      drawPhases(realInfo: any, movements: any) {
        // 创建相位图层
        phaseStage && phaseStage.destroy();
        phaseLayer && phaseLayer.destroy();

        phaseWidth = baseLayerWidth / 6;
        phaseStage = new Konva.Stage({
          container: scTfPhaseBox.value,
          width: phaseWidth,
          height: Math.max(clientHeight, phaseWidth * realInfo.phase_num),
        });
        phaseLayer = new Konva.Layer({
          x: 0,
          y: 0,
        });
        phaseLayer.width = phaseWidth;
        phaseLayer.height = Math.max(
          clientHeight,
          phaseWidth * realInfo.phase_num
        );
        phaseStage.add(phaseLayer);
        let phaseBack = new Konva.Rect({
          x: 0,
          y: 0,
          width: phaseWidth,
          height: Math.max(clientHeight, phaseWidth * realInfo.phase_num),
          fill: state.drawOption.phaseBackColor,
        });
        phaseLayer.add(phaseBack);
        // 如果关灯，就不要绘制具体相位了
        if (realInfo.ctrl_way === 7) {
          return;
        }
        realInfo.phase_movements_info.forEach((it: any, i: any) => {
          if (it) {
            const phaseNum = i + 1;
            // 主道流向
            const phaseList = this.getEntrancePhaseList(it, movements, "main");
            // 辅道流向
            const fdPhaseList = this.getEntrancePhaseList(it, movements, "fd");
            this.darwPhaseWithPhaseList(realInfo, phaseList, phaseNum, "main");
            this.darwPhaseWithPhaseList(realInfo, fdPhaseList, phaseNum, "fd");
          }
        });
        this.slideToCurPhase(realInfo.current_phase_num);
      },

      // 绘制具体相位
      darwPhaseWithPhaseList(
        realInfo: any,
        phaseList: any,
        phaseNum: any,
        road_type: any
      ) {
        const phasePolygonShap: any = [];
        phaseList.forEach((it: any, i: any) => {
          const enterFlowPoint: any = [];
          if (cross.is_have_son !== 2 || i === 2) {
            it.forEach((itt: any, j: any) => {
              const phasePoints = getRealPhasePoint(
                phaseNum,
                itt,
                phaseWidth,
                road_type
              );
              enterFlowPoint.push(phasePoints);
            });
          }
          const rotatePoints = this.rotatePoint(phaseNum, i, enterFlowPoint);
          phasePolygonShap.push(rotatePoints);
        });
        this.drawPhaseBox(
          phaseWidth,
          phaseNum,
          phasePolygonShap,
          realInfo.current_phase_num
        );
      },

      // 滚动到当前相位
      slideToCurPhase(currentPhaseNum: any) {
        scTfPhaseBox.value.scrollTop = phaseWidth * (currentPhaseNum - 1);
      },
      // 绘制每一个相位
      drawPhaseBox(
        phaseWidth: any,
        phaseNum: any,
        realPhasePolygonShap: any,
        currentPhase: any
      ) {
        // 绘制相位框
        let phase = new Konva.Rect({
          x: 2,
          y: (phaseNum - 1) * phaseWidth + 2,
          width: phaseWidth - 4,
          height: phaseWidth - 4,
          // fill: '#000',
          stroke: currentPhase === phaseNum ? "#ff0000" : "#446a86",
          strokeWidth: 2,
        });
        phaseLayer.add(phase);

        // 绘制相位编号 A B C
        let phaseCode = new Konva.Text({
          x: 2 + 2,
          y: phaseNum * phaseWidth - 18,
          text: phaseMap.get(phaseNum),
          fontSize: 16,
          fontFamily: "Calibri",
          fill: state.drawOption.phaseNumColor,
        });
        phaseLayer.add(phaseCode);

        // 绘制每个相位流向
        realPhasePolygonShap.forEach((it: any) => {
          it.forEach((itt: any) => {
            let phaseFlowPolygonShape = new Konva.Shape({
              stroke: state.drawOption.greenColor,
              fill: state.drawOption.greenColor,
              strokeWidth: 1,
              sceneFunc(context: any, shape: any) {
                context.beginPath();
                itt.forEach((ittt: any, j: any) => {
                  if (j === 0) {
                    context.moveTo(ittt.x, -ittt.y);
                  } else {
                    context.lineTo(ittt.x, -ittt.y);
                  }
                });
                context.closePath();
                context.fillStrokeShape(shape);
              },
            });
            phaseLayer.add(phaseFlowPolygonShape);
          });
        });
      },
      // 根据10进制的相位信息,以及流向配置/获取相位信息
      getEntrancePhaseList(
        DecMovements: any,
        movementParas: any,
        road_type: any
      ) {
        let moveList = DecMovements.toString(2).split("");
        moveList.reverse();
        const movenents = this.getPhaseListWithBin(
          moveList,
          movementParas,
          "phase",
          road_type
        );
        return movenents;
      },
      /**
       * @name wsx
       * @Date 2022-03-03 16:25:52
       * @introduction 根据二进制的相位信息,以及流向配置/获取相位信息
       * @param {参数类型} 参数 参数说明
       * @param {参数类型} type:'inter' 路口中央的流向1红/2黄/3绿  'phase'方案的流向1放行/2取消 flowType:main fd 主流向还是辅道流向
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      getPhaseListWithBin(
        moveList: any,
        movementParas: any,
        type = "inter",
        road_type = "main"
      ) {
        const movenents: any = [];
        let movementMap: any = {};
        movementParas.forEach((it: any) => {
          movementMap[it.num_movements] = it;
        });
        cross.entranceArray.forEach((it: any, i: any) => {
          const list: any = [];
          moveList.forEach((itt: any, j: any) => {
            const flow = movementMap[j + 1];
            let bool = false;
            if (road_type === "fd") {
              if (flow && flow.fd_flow) {
                bool = true;
              }
            } else {
              if (flow && !flow.fd_flow) {
                bool = true;
              }
            }
            if (
              flow &&
              flow.enter_port_direction === it.en_id &&
              flow.if_control &&
              bool
            ) {
              if (type === "phase") {
                if (Number(itt)) {
                  list.push(flow.movements_type);
                }
              } else if (type === "run") {
                if (Number(itt) === 2 || Number(itt) === 3) {
                  list.push(flow.movements_type);
                }
              } else {
                if (Number(itt) !== 1 && Number(itt) !== 0) {
                  list.push(flow.movements_type);
                }
              }
            }
          });
          const phaseMovemenes = this.getPhaseMovementType(list);
          movenents.push(phaseMovemenes);
        });
        return movenents;
        // return [[1, 2], [1, 2, 3, 4], [1, 2], [1, 2, 3, 4]]
      },

      /**
       * @name wsx
       * @Date 2022-03-03 17:23:22
       * @introduction 简述
       * @description  获取绿灯相位信息列表
       * @param {参数类型} type 0灰/1红/2黄/3绿  road_type 主道辅道
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      getTypePhaseListWithBin(
        moveList: any,
        movementParas: any,
        type = 1,
        road_type = "main"
      ) {
        const movenents: any = [];
        let movementMap: any = {};
        movementParas.forEach((it: any) => {
          movementMap[it.num_movements] = it;
        });
        const fdFlow = road_type !== "main";
        cross.entranceArray.forEach((it: any, i: any) => {
          const list: any = [];
          moveList.forEach((itt: any, j: any) => {
            const flow = movementMap[j + 1];
            if (flow) {
              flow.fd_flow = !!flow.fd_flow;
              if (
                flow.enter_port_direction === it.en_id &&
                flow.if_control &&
                flow.fd_flow === fdFlow
              ) {
                if (Number(itt) === type) {
                  list.push(flow.movements_type);
                }
              }
            }
          });
          const phaseMovemenes = this.getPhaseMovementType(list);
          movenents.push(phaseMovemenes);
        });
        return movenents;
        // return [[1, 2], [1, 2, 3, 4], [1, 2], [1, 2, 3, 4]]
      },

      // 路口流向转换成相位流向
      getPhaseMovementType(phaseMovemenes: any) {
        const movemenes: any = [];
        // 相位上展示的基础流向
        const baseFlowType = [1, 2, 3, 4, 8, 10, 11, 12, 13];
        phaseMovemenes.forEach((it: any) => {
          if (baseFlowType.includes(it)) {
            movemenes.push(it);
          } else if (it === 5) {
            movemenes.push(1);
            movemenes.push(2);
          } else if (it === 6) {
            movemenes.push(2);
            movemenes.push(3);
          } else if (it === 7) {
            movemenes.push(1);
            movemenes.push(2);
            movemenes.push(3);
          } else if (it === 9) {
            movemenes.push(1);
            movemenes.push(8);
          } else if (it === 14) {
            movemenes.push(12);
            movemenes.push(13);
          }
        });
        /* eslint-disable */
        return Array.from(new Set(movemenes));
      },
      // 实时相位信息旋转 i 0 / 1 /2  进口序号
      rotatePoint(phaseNum: any, i: any, phasePoints: any) {
        const enterInfo = cross.entranceArray[i];
        const phaseCenterPoint = [
          phaseWidth / 2 + 2,
          -phaseWidth * (phaseNum - 0.5) - 2,
        ];
        let rotatePoins: any = [];
        if (Array.isArray(phasePoints)) {
          rotatePoins = [];
          phasePoints.forEach((info, index) => {
            if (Array.isArray(info)) {
              rotatePoins[index] = [];
              info.map((it) => {
                rotatePoins[index].push(
                  Util.pointRotateByPoint(
                    it,
                    -enterInfo.angle,
                    phaseCenterPoint
                  )
                );
              });
            } else {
              rotatePoins.push(
                Util.pointRotateByPoint(
                  info,
                  -enterInfo.angle,
                  phaseCenterPoint
                )
              );
            }
          });
        } else {
          rotatePoins = Util.pointRotateByPoint(
            phasePoints,
            -enterInfo.angle,
            phaseCenterPoint
          );
        }
        return rotatePoins;
      },
      // 绘制路口模型上当前流向 current_phase_num
      drawInterPhase(realInfo: any, movements: any) {
        const phaseList = this.getPhaseListWithBin(
          realInfo.movements_state,
          movements,
          "inter",
          "main"
        );
        const fdPhaseList = this.getPhaseListWithBin(
          realInfo.movements_state,
          movements,
          "inter",
          "fd"
        );
        this.drawInterPhaseWithPhaseList(
          realInfo,
          movements,
          phaseList,
          "main"
        );
        this.drawInterPhaseWithPhaseList(
          realInfo,
          movements,
          fdPhaseList,
          "fd"
        );
      },
      drawInterPhaseWithPhaseList(
        realInfo: any,
        movements: any,
        phaseList: any,
        road_type: any
      ) {
        phaseList.forEach((it: any, i: any) => {
          it.forEach((itt: any, j: any) => {
            const entrance = cross.entranceArray[i];
            // 匝道并且不是第三个进口就不绘制
            if (cross.is_have_son !== 2 || entrance.en_id === 3) {
              if (cross.entranceArray[i].in) {
                const flowData = getInterPhaseflowData(
                  itt,
                  entrance,
                  road_type
                );
                const rotateFlowData = drawMethods.getRotateData(
                  flowData,
                  entrance.angle
                );
                const color = this.getInterPhaseFlowColor(
                  realInfo.movements_state,
                  movements,
                  i,
                  itt,
                  road_type
                );
                this.drawInterPhaseFlow(rotateFlowData, color);
              }
            }
          });
        });
      },

      // 获取绘制路口中流向的颜色
      getInterPhaseFlowColor(
        movements_state: any,
        movementParas: any,
        index: any,
        flowType: any,
        road_type: any
      ) {
        let color = state.drawOption.yellowColor;
        // 当前进口
        const curEntrance = cross.entranceArray[index];
        const fdFlow = road_type !== "main";
        let greenFlowList: any = [];
        movementParas.forEach((it: any) => {
          if (it.if_control) {
            if (
              it.enter_port_direction === curEntrance.en_id &&
              it.fd_flow === fdFlow
            ) {
              if (movements_state[it.num_movements - 1] === 3) {
                greenFlowList.push(it.movements_type);
              }
            }
          }
        });
        const greenPhaseMovemenes = this.getPhaseMovementType(greenFlowList);
        if (greenPhaseMovemenes.includes(flowType)) {
          color = state.drawOption.greenColor;
        }
        return color;
      },

      // 绘制路口上的相位的单个流向
      drawInterPhaseFlow(rotateFlowData: any, color: any) {
        let interPhaseFlowPolygonShape = new Konva.Shape({
          stroke: color,
          fill: color,
          strokeWidth: 1,
          sceneFunc(context: any, shape: any) {
            context.beginPath();
            rotateFlowData.forEach((it: any, i: any) => {
              if (i === 0) {
                context.moveTo(it.x, -it.y);
              } else {
                context.lineTo(it.x, -it.y);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          },
        });
        // this.baseLayer.add(interPhaseFlowPolygonShape)
        realLayer.add(interPhaseFlowPolygonShape);
      },
      // 绘制相位倒计时
      drawPhaseRemainTime(time: any) {
        let remainTime = new Konva.Text({
          x: 0,
          y: 0,
          text: time,
          fontSize: 14,
          fontFamily: "Calibri",
          fill: "#ffffff",
          cornerRadius: 10,
        });
        remainTime.offsetX(remainTime.width() / 2);
        remainTime.offsetY(remainTime.height() / 2);
        let circle = new Konva.Circle({
          x: 0,
          y: 0,
          radius: (CrossConst.roadWidth * 2) / 3,
          fill: "#3a3b45",
        });
        realLayer.add(circle);
        realLayer.add(remainTime);
      },
      // 绘制人行灯
      drawWalkMan(realInfo: any, movements: any) {
        const phaseList = this.getPhaseListWithBin(
          realInfo.movements_state,
          movements,
          "run",
          "main"
        );
        const greyPhaseList = drawRealMethods.getTypePhaseListWithBin(
          realInfo.movements_state,
          movements,
          0,
          "main"
        );
        const redPhaseList = drawRealMethods.getTypePhaseListWithBin(
          realInfo.movements_state,
          movements,
          1,
          "main"
        );
        const yellowPhaseList = drawRealMethods.getTypePhaseListWithBin(
          realInfo.movements_state,
          movements,
          2,
          "main"
        );
        const greenPhaseList = drawRealMethods.getTypePhaseListWithBin(
          realInfo.movements_state,
          movements,
          3,
          "main"
        );
        phaseList.forEach((it: any, i: any) => {
          const greyPhases = greyPhaseList[i];
          const redPhases = redPhaseList[i];
          const yellowPhases = yellowPhaseList[i];
          const greenPhases = greenPhaseList[i];
          let runColor = this.getRuncolor(
            "run",
            greyPhases,
            redPhases,
            yellowPhases,
            greenPhases
          );
          let run1Color = this.getRuncolor(
            "run1",
            greyPhases,
            redPhases,
            yellowPhases,
            greenPhases
          );
          let run2Color = this.getRuncolor(
            "run2",
            greyPhases,
            redPhases,
            yellowPhases,
            greenPhases
          );
          const entrance = cross.entranceArray[i];
          const manPoint = this.getEntranceManPoint(entrance);
          // 人行数据 绿灯
          if (it.includes(4)) {
            drawRealMethods.drawFootLight(
              manPoint[0],
              "green",
              entrance.angle,
              runColor
            );
            drawRealMethods.drawFootLight(
              manPoint[3],
              "green",
              entrance.angle,
              runColor
            );
          } else {
            if (it.includes(10) || it.includes(11)) {
              if (it.includes(10)) {
                // 人行1
                drawRealMethods.drawFootLight(
                  manPoint[0],
                  "green",
                  entrance.angle,
                  run1Color
                );
                drawRealMethods.drawFootLight(
                  manPoint[1],
                  "green",
                  entrance.angle,
                  run1Color
                );
              } else {
                drawRealMethods.drawFootLight(
                  manPoint[0],
                  "red",
                  entrance.angle,
                  run1Color
                );
                drawRealMethods.drawFootLight(
                  manPoint[1],
                  "red",
                  entrance.angle,
                  run1Color
                );
              }
              if (it.includes(11)) {
                // 人行2
                drawRealMethods.drawFootLight(
                  manPoint[2],
                  "green",
                  entrance.angle,
                  run2Color
                );
                drawRealMethods.drawFootLight(
                  manPoint[3],
                  "green",
                  entrance.angle,
                  run2Color
                );
              } else {
                // 人行2
                drawRealMethods.drawFootLight(
                  manPoint[2],
                  "red",
                  entrance.angle,
                  run2Color
                );
                drawRealMethods.drawFootLight(
                  manPoint[3],
                  "red",
                  entrance.angle,
                  run2Color
                );
              }
            } else {
              //红灯
              drawRealMethods.drawFootLight(
                manPoint[0],
                "red",
                entrance.angle,
                runColor
              );
              drawRealMethods.drawFootLight(
                manPoint[3],
                "red",
                entrance.angle,
                runColor
              );
            }
          }
        });
      },
      // 获取每个车道的人行等绘制位置
      getEntranceManPoint(entrance: any) {
        // 车道相对高度差
        const laneOffsetHeight =
          (entrance.point.H0[0].y - entrance.point.H0[1].y) / 2;
        const offsetY =
          CrossConst.manCarInterval +
          CrossConst.manRoadLength / 2 +
          laneOffsetHeight;
        const offsetX = CrossConst.roadWidth / 2;
        const manPoint: any = [];
        const outOfsset = drawMethods.getOutLineOffset(
          entrance.road_center_mode
        );
        const pointIndex = [
          1,
          entrance.in,
          entrance.in + 1 + outOfsset,
          entrance.in + entrance.out + outOfsset,
        ];
        pointIndex.forEach((it) => {
          manPoint.push([
            entrance.point.H0[it].x + offsetX,
            entrance.point.H0[it].y + offsetY,
          ]);
        });
        return manPoint;
      },
      // 绘制绿灯通行/红灯禁止通行
      drawFootLight(point: any, type: any, angle: any, color: any) {
        const centerPoint = Util.pointRotateAngel(
          { x: point[0], y: point[1] },
          -angle,
          [0, 0]
        );
        let circle = new Konva.Circle({
          x: centerPoint.x,
          y: -centerPoint.y,
          radius: (CrossConst.roadWidth * 2) / 5,
          fill: "#000",
        });
        realLayer.add(circle);
        const manData = getFootLightData(centerPoint, type);

        let interPhaseFlowPolygonShape = new Konva.Shape({
          stroke: color,
          fill: color,
          strokeWidth: 0.2,
          sceneFunc(context: any, shape: any) {
            context.beginPath();
            manData.forEach((it: any, k: any) => {
              if (k === 0) {
                context.moveTo(it.x, -it.y);
              } else {
                context.lineTo(it.x, -it.y);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          },
        });
        realLayer.add(interPhaseFlowPolygonShape);
      },
      // 绘制红绿灯
      drawGreenRedLight(realInfo: any, movements: any) {
        // 主道红绿灯
        this.drawGreenRedLightWithType(realInfo, movements, "main");
        // 绘制辅道红绿灯
        this.drawGreenRedLightWithType(realInfo, movements, "fd");
      },
      // 绘制红绿灯
      drawGreenRedLightWithType(
        realInfo: any,
        movements: any,
        road_type = "main"
      ) {
        const phaseList = this.getPhaseListWithBin(
          realInfo.movements_state,
          movements,
          "inter",
          road_type
        );
        const greyPhaseList = this.getTypePhaseListWithBin(
          realInfo.movements_state,
          movements,
          0,
          road_type
        );
        const redPhaseList = this.getTypePhaseListWithBin(
          realInfo.movements_state,
          movements,
          1,
          road_type
        );
        const yellowPhaseList = this.getTypePhaseListWithBin(
          realInfo.movements_state,
          movements,
          2,
          road_type
        );
        const greenPhaseList = this.getTypePhaseListWithBin(
          realInfo.movements_state,
          movements,
          3,
          road_type
        );
        phaseList.forEach((it: any, i: any) => {
          if (it.length || road_type === "main") {
            const greyPhases = greyPhaseList[i];
            const redPhases = redPhaseList[i];
            const yellowPhases = yellowPhaseList[i];
            const greenPhases = greenPhaseList[i];
            // 获取绘制红绿灯位置的点
            const { points, angle } = this.getEntranceLightPoint(i, road_type);
            const xAngle = this.getxAngle(points, angle);
            // 绘制红绿灯背景
            this.drawLightHandler(
              points[1],
              "back",
              angle,
              null,
              xAngle,
              road_type
            );
            let leftColor = this.getLightcolor(
              "left",
              greyPhases,
              redPhases,
              yellowPhases,
              greenPhases
            );
            let centerColor = this.getLightcolor(
              "center",
              greyPhases,
              redPhases,
              yellowPhases,
              greenPhases
            );
            let rightColor = this.getLightcolor(
              "right",
              greyPhases,
              redPhases,
              yellowPhases,
              greenPhases
            );
            // 绘制红绿灯左转
            this.drawLightHandler(points[0], "left", angle, leftColor, xAngle);
            // 绘制红绿灯直行
            this.drawLightHandler(points[1], "center", angle, centerColor);
            // 绘制红绿灯右转
            this.drawLightHandler(
              points[2],
              "right",
              angle,
              rightColor,
              xAngle
            );
            // 绘制非机动车左转
            if (
              redPhases.includes(12) ||
              yellowPhases.includes(12) ||
              greenPhases.includes(12)
            ) {
              let nonLeftColor = this.getLightcolor(
                "nonLeft",
                greyPhases,
                redPhases,
                yellowPhases,
                greenPhases
              );
              if (nonLeftColor) {
                this.drawLightHandler(
                  points[3],
                  "nonBack",
                  angle,
                  null,
                  xAngle,
                  road_type
                );
                this.drawLightHandler(
                  points[3],
                  "nonLeft",
                  angle,
                  nonLeftColor,
                  xAngle
                );
              }
            }
            // 绘制非机动车直行
            if (
              redPhases.includes(13) ||
              yellowPhases.includes(13) ||
              greenPhases.includes(13)
            ) {
              let nonCenterColor = this.getLightcolor(
                "nonCenter",
                greyPhases,
                redPhases,
                yellowPhases,
                greenPhases
              );
              if (nonCenterColor) {
                this.drawLightHandler(
                  points[4],
                  "nonBack",
                  angle,
                  null,
                  xAngle,
                  road_type
                );
                this.drawLightHandler(
                  points[4],
                  "nonCenter",
                  angle,
                  nonCenterColor,
                  xAngle
                );
              }
            }
          }
        });
      },

      // 获取红绿灯颜色
      getLightcolor(
        type: any,
        greyPhases: any,
        redPhases: any,
        yellowPhases: any,
        greenPhases: any
      ) {
        const phaseMap = [
          { phase: greyPhases, color: state.drawOption.greyColor },
          { phase: redPhases, color: state.drawOption.redColor },
          { phase: yellowPhases, color: state.drawOption.yellowColor },
          { phase: greenPhases, color: state.drawOption.greenColor },
        ];
        let color = "";
        if (type === "left") {
          // const flowMap = [1, 5, 7, 8, 9]
          phaseMap.forEach((it) => {
            if (
              it.phase.includes(1) ||
              it.phase.includes(5) ||
              it.phase.includes(7) ||
              it.phase.includes(8) ||
              it.phase.includes(9)
            ) {
              color = it.color;
            }
          });
        } else if (type === "center") {
          // const flowMap = [2, 5, 6, 7]
          phaseMap.forEach((it) => {
            if (
              it.phase.includes(2) ||
              it.phase.includes(5) ||
              it.phase.includes(6) ||
              it.phase.includes(7)
            ) {
              color = it.color;
            }
          });
        } else if (type === "right") {
          // const flowMap = [3, 6, 7]
          phaseMap.forEach((it) => {
            if (
              it.phase.includes(3) ||
              it.phase.includes(6) ||
              it.phase.includes(7)
            ) {
              color = it.color;
            }
          });
        } else if (type === "nonLeft") {
          // const flowMap = [12]
          phaseMap.forEach((it) => {
            if (it.phase.includes(12)) {
              color = it.color;
            }
          });
        } else if (type === "nonCenter") {
          // const flowMap = [13]
          phaseMap.forEach((it) => {
            if (it.phase.includes(13)) {
              color = it.color;
            }
          });
        }
        return color;
      },

      // 获取人行颜色
      getRuncolor(
        type: any,
        greyPhases: any,
        redPhases: any,
        yellowPhases: any,
        greenPhases: any
      ) {
        // 关灯
        if (ctrlWay === 7) {
          return state.drawOption.greyColor;
        } else if (ctrlWay === 9) {
          return state.drawOption.redColor;
        }
        const phaseMap = [
          { phase: greenPhases, color: state.drawOption.greenColor },
          { phase: yellowPhases, color: state.drawOption.yellowColor },
          { phase: redPhases, color: state.drawOption.redColor },
          { phase: greyPhases, color: state.drawOption.greyColor },
        ];
        let color = state.drawOption.redColor;
        if (type === "run") {
          phaseMap.forEach((it) => {
            if (it.phase.includes(4)) {
              color = it.color;
            }
          });
        } else if (type === "run1") {
          phaseMap.forEach((it) => {
            if (it.phase.includes(10)) {
              color = it.color;
            }
          });
        } else if (type === "run2") {
          phaseMap.forEach((it) => {
            if (it.phase.includes(11)) {
              color = it.color;
            }
          });
        }
        return color;
      },

      // 获取绘制红绿灯的绘制位置
      getEntranceLightPoint(i: any, road_type = "main") {
        const enNum = cross.entranceArray.length;
        let points = [];
        let angle = [];

        if (enNum === 2) {
          // 一字路口
          // 获取到对面的进口
          const drawEntrance = cross.entranceArray[(i + 1) % 2];
          const pointInfo = this.calculateEntranceLightPoint(
            drawEntrance,
            road_type
          );
          points = pointInfo.points;
          angle = pointInfo.angle;
        } else if (enNum === 3) {
          // T型路口
          const entrance = cross.entranceArray[i];
          const leftIndex = (i + 4) % 3;
          const rightIndex = i - 1 >= 0 ? i - 1 : 2;
          if ((entrance.degreeLeft + 360 - entrance.degree) % 360 >= 180) {
            const drawEntrance = cross.entranceArray[leftIndex];
            const pointInfo = this.calculateEntranceLightPoint(
              drawEntrance,
              road_type
            );
            points = pointInfo.points;
            angle = pointInfo.angle;
          } else if (
            (entrance.degree + 360 - entrance.degreeRight) % 360 >=
            180
          ) {
            const drawEntrance = cross.entranceArray[rightIndex];
            const pointInfo = this.calculateEntranceLightPoint(
              drawEntrance,
              road_type
            );
            points = pointInfo.points;
            angle = pointInfo.angle;
          } else {
            // 画路口对面
            const drawEntrance = cross.entranceArray[i];
            const prevEntrance = cross.entranceArray[rightIndex];
            const nextEntrance = cross.entranceArray[leftIndex];
            const pointInfo = this.calculateEntranceFaceLightPoint(
              drawEntrance,
              prevEntrance,
              nextEntrance,
              road_type
            );
            points = pointInfo.points;
            angle = pointInfo.angle + 180;
          }
        } else if (enNum === 4) {
          // 十字路口
          // 获取到对面的进口
          const drawEntrance = cross.entranceArray[(i + 2) % 4];
          const pointInfo = this.calculateEntranceLightPoint(
            drawEntrance,
            road_type
          );
          points = pointInfo.points;
          angle = pointInfo.angle;
        } else {
          // 五岔路口 以及以上
          const drawEntrance = cross.entranceArray[i];
          const pointInfo = this.calculateCircleLightPoint(
            drawEntrance,
            road_type
          );
          points = pointInfo.points;
          angle = pointInfo.angle;
        }
        return { points, angle };
      },
      // 计算绘制在进口的点位
      calculateEntranceLightPoint(drawEntrance: any, road_type: any) {
        // 红绿灯半径
        const radius = CrossConst.roadWidth / 3;
        let points = [];
        let angle = [];
        const inNum = drawEntrance.in;
        const outNum = drawEntrance.out;
        const margin = 1;
        const fdOffset = road_type === "fd" ? CrossConst.roadWidth : 0;
        const laneOffsetHeight =
          (drawEntrance.point.H0[0].y - drawEntrance.point.H0[1].y) / 2;
        const offsetHeight =
          (drawEntrance.point.H0[0].y - drawEntrance.point.H0[1].y) /
          CrossConst.roadWidth;
        const centerPoint = [
          drawEntrance.point.H0[inNum].x - (CrossConst.roadWidth * outNum) / 2,
          drawEntrance.point.H0[inNum].y -
            laneOffsetHeight * outNum -
            radius -
            margin -
            fdOffset,
        ];
        const rightPoint = [
          centerPoint[0] - radius * 2 - margin,
          centerPoint[1] - offsetHeight * (radius * 2 + margin),
        ];
        const leftPoint = [
          centerPoint[0] + radius * 2 + margin,
          centerPoint[1] + offsetHeight * (radius * 2 + margin),
        ];
        const nonLeftPoint = [
          centerPoint[0] - radius * 6,
          centerPoint[1] - offsetHeight * (radius * 5),
        ]; //非机动车左
        const nonCenterPoint = [
          centerPoint[0] - radius * 8 - margin,
          centerPoint[1] - offsetHeight * (radius * 8 + margin),
        ]; //非机动车直
        points = [
          leftPoint,
          centerPoint,
          rightPoint,
          nonLeftPoint,
          nonCenterPoint,
        ];
        angle = drawEntrance.angle;
        return { points, angle };
      },
      // 计算三岔路口对面红绿灯的点位
      calculateEntranceFaceLightPoint(
        drawEntrance: any,
        prevEntrance: any,
        nextEntrance: any,
        road_type: any
      ) {
        const radius = CrossConst.roadWidth / 3;
        let points = [];
        let angle = [];
        const inNum = drawEntrance.in;
        const margin = 1;
        const fdOffset = road_type === "fd" ? CrossConst.roadWidth : 0;
        const offsetHeight =
          (drawEntrance.point.H0[0].y - drawEntrance.point.H0[1].y) /
          CrossConst.roadWidth;
        const centerPoint = [
          drawEntrance.point.H0[0].x - (CrossConst.roadWidth * inNum) / 2,
          ((nextEntrance.out + prevEntrance.in) / 2) * CrossConst.roadWidth +
            radius * 2 +
            margin +
            fdOffset,
        ];
        const rightPoint = [
          centerPoint[0] - radius * 2 - margin,
          centerPoint[1] - offsetHeight * (radius * 2 + margin),
        ];
        const leftPoint = [
          centerPoint[0] + radius * 2 + margin,
          centerPoint[1] + offsetHeight * (radius * 2 + margin),
        ];
        points = [leftPoint, centerPoint, rightPoint];
        angle = drawEntrance.angle + 180;
        return { points, angle };
      },
      // 计算五岔路口 以及以上红绿灯的点位
      calculateCircleLightPoint(drawEntrance: any, road_type: any) {
        // 红绿灯半径
        const radius = CrossConst.roadWidth / 3;
        let points = [];
        let angle = [];
        const margin = 1;
        const offsetHeight =
          (drawEntrance.point.H0[0].y - drawEntrance.point.H0[1].y) /
          CrossConst.roadWidth;
        const fdOffset = road_type === "fd" ? CrossConst.roadWidth : 0;
        const centerPoint = [
          // drawEntrance.point.H0[0].x - CrossConst.roadWidth * inNum / 2,
          0 - CrossConst.roadWidth,
          CrossConst.roadWidth * 2.8 - fdOffset,
        ];
        const rightPoint = [
          centerPoint[0] - radius * 2 - margin,
          centerPoint[1] - offsetHeight * (radius * 2 + margin),
        ];
        const leftPoint = [
          centerPoint[0] + radius * 2 + margin,
          centerPoint[1] + offsetHeight * (radius * 2 + margin),
        ];
        points = [leftPoint, centerPoint, rightPoint];
        angle = drawEntrance.angle + 180;
        return { points, angle };
      },

      // 获取绘制红绿灯
      drawLightHandler(
        point: any,
        drawType: any,
        angle: any,
        color: any,
        xAngle = 0,
        road_type = "main"
      ) {
        // 红绿灯半径
        const radius = CrossConst.roadWidth / 3;
        const centerPoint = Util.pointRotateAngel(
          { x: point[0], y: point[1] },
          -angle,
          [0, 0]
        );
        // 绘制红绿灯背景
        if (drawType === "back") {
          let lightBack = new Konva.Rect({
            x: centerPoint.x,
            y: -centerPoint.y,
            width: radius * 6 + 8,
            height: radius * 2 + 2,
            fill: road_type === "main" ? "#fff" : "#999",
            rotation: xAngle,
            cornerRadius: radius,
          });
          lightBack.offsetX(lightBack.width() / 2);
          lightBack.offsetY(lightBack.height() / 2);
          realLayer.add(lightBack);
        } else if (drawType === "nonBack") {
          let lightBack = new Konva.Rect({
            x: centerPoint.x,
            y: -centerPoint.y,
            width: radius * 2 + 2,
            height: radius * 2 + 2,
            fill: road_type === "main" ? "#888" : "#666",
            rotation: xAngle,
            cornerRadius: radius,
          });
          lightBack.offsetX(lightBack.width() / 2);
          lightBack.offsetY(lightBack.height() / 2);
          realLayer.add(lightBack);
        } else {
          // 红绿灯黑底
          let circle = new Konva.Circle({
            x: centerPoint.x,
            y: -centerPoint.y,
            radius: CrossConst.roadWidth / 3,
            fill: "#000",
          });
          realLayer.add(circle);
          if (drawType === "center") {
            let centerCircle = new Konva.Circle({
              x: centerPoint.x,
              y: -centerPoint.y,
              radius: CrossConst.roadWidth / 3,
              fill: color,
            });
            realLayer.add(centerCircle);
          } else if (drawType === "left" || drawType === "right") {
            const lightData = getDirectionLightData(
              { x: point[0], y: point[1] },
              drawType
            );
            const rotateLightData = drawMethods.getRotateData(lightData, angle);
            let lightPolygonShape = new Konva.Shape({
              stroke: color,
              fill: color,
              strokeWidth: 0.2,
              sceneFunc(context: any, shape: any) {
                context.beginPath();
                rotateLightData.forEach((it: any, k: any) => {
                  if (k === 0) {
                    context.moveTo(it.x, -it.y);
                  } else {
                    context.lineTo(it.x, -it.y);
                  }
                });
                context.closePath();
                context.fillStrokeShape(shape);
              },
            });
            realLayer.add(lightPolygonShape);
          } else if (drawType === "nonLeft" || drawType === "nonCenter") {
            console.log(drawType);
            const ponitInfo: any = getDirectionLightData(
              { x: point[0], y: point[1] },
              drawType
            );
            const { point1, point2, polygon1, polygon2, polygon3 } = ponitInfo;
            const rotatePoint1 = drawMethods.getRotateData(point1, angle);
            const rotatePoint2 = drawMethods.getRotateData(point2, angle);
            const rotatePolygon1 = drawMethods.getRotateData(polygon1, angle);
            const rotatePolygon2 = drawMethods.getRotateData(polygon2, angle);
            const rotatePolygon3 = drawMethods.getRotateData(polygon3, angle);
            // 绘制两个圆
            let circle1 = new Konva.Circle({
              x: rotatePoint1.x,
              y: -rotatePoint1.y,
              radius: ((CrossConst.roadWidth / 3) * 4) / 5 / 3,
              fill: color,
            });
            let circle2 = new Konva.Circle({
              x: rotatePoint1.x,
              y: -rotatePoint1.y,
              radius: ((CrossConst.roadWidth / 3) * 4) / 5 / 4,
              fill: "#000000",
            });
            let circle3 = new Konva.Circle({
              x: rotatePoint2.x,
              y: -rotatePoint2.y,
              radius: ((CrossConst.roadWidth / 3) * 4) / 5 / 3,
              fill: color,
            });
            let circle4 = new Konva.Circle({
              x: rotatePoint2.x,
              y: -rotatePoint2.y,
              radius: ((CrossConst.roadWidth / 3) * 4) / 5 / 4,
              fill: "#000000",
            });

            let polygonShape1 = new Konva.Shape({
              stroke: color,
              fill: color,
              strokeWidth: 0.2,
              sceneFunc(context, shape) {
                context.beginPath();
                rotatePolygon1.forEach((it: any, k: any) => {
                  if (k === 0) {
                    context.moveTo(it.x, -it.y);
                  } else {
                    context.lineTo(it.x, -it.y);
                  }
                });
                context.closePath();
                context.fillStrokeShape(shape);
              },
            });
            let polygonShape2 = new Konva.Shape({
              stroke: color,
              fill: color,
              strokeWidth: 0.2,
              sceneFunc(context, shape) {
                context.beginPath();
                rotatePolygon2.forEach((it: any, k: any) => {
                  if (k === 0) {
                    context.moveTo(it.x, -it.y);
                  } else {
                    context.lineTo(it.x, -it.y);
                  }
                });
                context.closePath();
                context.fillStrokeShape(shape);
              },
            });
            let polygonShape3 = new Konva.Shape({
              stroke: color,
              fill: color,
              strokeWidth: 0.2,
              sceneFunc(context, shape) {
                context.beginPath();
                rotatePolygon3.forEach((it: any, k: any) => {
                  if (k === 0) {
                    context.moveTo(it.x, -it.y);
                  } else {
                    context.lineTo(it.x, -it.y);
                  }
                });
                context.closePath();
                context.fillStrokeShape(shape);
              },
            });

            realLayer.add(circle1);
            realLayer.add(circle2);
            realLayer.add(circle3);
            realLayer.add(circle4);
            realLayer.add(polygonShape1);
            realLayer.add(polygonShape2);
            realLayer.add(polygonShape3);
          }
        }
      },
      // 获取红绿灯偏移角度
      getxAngle(points: any, angle: any) {
        const [point1, point2] = points;
        const P1 = Util.pointRotateAngel(
          { x: point1[0], y: point1[1] },
          -angle,
          [0, 0]
        );
        const P2 = Util.pointRotateAngel(
          { x: point2[0], y: point2[1] },
          -angle,
          [0, 0]
        );
        // 因为点位y跟直角坐标系是相反的，所以P1.y - P2.y
        const degree = Math.atan2(P1.y - P2.y, P2.x - P1.x);
        return degree * (180 / Math.PI);
      },
      // 红绿灯点位旋转车道倾斜角度
      getRotateLightData2(rotateLightData: any, xAngle: any, centerPoint: any) {
        const rotateLightData2: any = [];
        rotateLightData.forEach((it: any) => {
          const point = Util.pointRotateByPoint(it, xAngle, [
            centerPoint.x,
            centerPoint.y,
          ]);
          rotateLightData2.push(point);
        });
        return rotateLightData2;
      },
    };
    //---------------------------------------------imageLoadMixins---------------------------------------------//
    const imageLoadMethods = {
      initImg() {
        // 相邻路口图片
        nearImg = new Image();
        nearImg.src = adjacentIcon;

        // 非机动车道自行车图片
        const bikeImg = new Image();
        bikeImg.src = bikeIcon;
      },
    };
    imageLoadMethods.initImg();
    return {
      ...toRefs(state),
      tfInterModel,
      scTfInterBox,
      scTfPhaseBox,
      ...methods,
      ...drawMethods,
      ...drawRealMethods,
      ...imageLoadMethods,
    };
  },
});
</script>
 
<style scoped lang="scss">
.sc-tf-inter-model {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .sc-tf-inter-box {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .overflow-box {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    width: auto;
    height: 100%;
    z-index: 2;
  }
  .sc-tf-phase-box {
    // position: absolute;
    // left: 0;
    // top: 0;
    // z-index: 2;
    width: calc(100% + 20px);
    // background-color: #fff;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
}
</style>