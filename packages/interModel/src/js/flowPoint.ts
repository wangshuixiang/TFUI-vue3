import { CrossConst } from './interModel'
/**
 * @name wsx
 * @Date 2021-08-02 13:36:29
 * @introduction 获取车道流向点位
 * @description 详细描述
 * @param {参数类型} laneNumber 进口车道序号1/2/3
 * @param {参数类型} laneFlow 流向1/2/3
 * @param {参数类型} CrossConst 路口模型配置参数
 * @param {参数类型} self 当前进口到信息
 * @param {参数类型} type 待行驶区域 area/areaFlow
 * @return 无返回类型
 * @exception [违例类型] [违例类型说明]
 */
export function getLaneFlowPoint (laneNumber:any, laneFlow:any, CrossConst:any, self:any, type:any) {
  const points = [];
  // 绘制的顶点
  let { x: x1, y: y1 } = self.point.H0[self.in - laneNumber + 1]
  let { y: y2 } = self.point.H0[self.in - laneNumber]
  const roadWidth = CrossConst.roadWidth
  let offsetY = self.drawOption.laneFlowOffetStopLine * -roadWidth
  let cenY = (y1 + y2) / 2 + offsetY - 2 * roadWidth
  if (laneFlow === 1) { // 左
    if (type && type === 'waitAreaFlow') {
      x1 -= roadWidth / 3
      cenY += (roadWidth * 2.2 + CrossConst.manRoadLength + CrossConst.manCarInterval)
    }
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + roadWidth })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 3 * roadWidth / 8, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + roadWidth })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY })
  } else if (laneFlow === 2) { // 直
    if (type && type === 'waitAreaFlow') {
      cenY += (roadWidth * 2.2 + CrossConst.manRoadLength + CrossConst.manCarInterval)
    }
    points.push({ x: x1 + roadWidth / 2, y: cenY })
    points.push({ x: x1 + roadWidth / 2, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 5 * roadWidth / 8, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 3 * roadWidth / 8, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + roadWidth / 2, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 2, y: cenY })
  } else if (laneFlow === 3) { // 右
    points.push({ x: x1 + roadWidth / 4, y: cenY })
    points.push({ x: x1 + roadWidth / 4, y: cenY + roadWidth })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 5 * roadWidth / 8, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + roadWidth })
    points.push({ x: x1 + roadWidth / 4, y: cenY })
  } else if (laneFlow === 4) {
  } else if (laneFlow === 5) { // 左直
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + roadWidth })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 3 * roadWidth / 8, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + roadWidth })

    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 5 * roadWidth / 8, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 7 * roadWidth / 8, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 3 * roadWidth / 2 })

    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY })
  } else if (laneFlow === 6) { // 直右
    points.push({ x: x1 + roadWidth / 4, y: cenY })
    points.push({ x: x1 + roadWidth / 4, y: cenY + roadWidth })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 5 * roadWidth / 8, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + roadWidth })

    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 1 * roadWidth / 8, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 3 * roadWidth / 8, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })

    points.push({ x: x1 + roadWidth / 4, y: cenY })
  } else if (laneFlow === 7) { // 通行
    points.push({ x: x1 + roadWidth / 2, y: cenY })
    points.push({ x: x1 + roadWidth / 2, y: cenY + roadWidth })

    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 3 * roadWidth / 8, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 2, y: cenY + roadWidth })

    points.push({ x: x1 + roadWidth / 2, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 3 * roadWidth / 8, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 5 * roadWidth / 8, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + roadWidth / 2, y: cenY + 3 * roadWidth / 2 })

    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 5 * roadWidth / 5, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 7 * roadWidth / 8, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 2, y: cenY + roadWidth })

    points.push({ x: x1 + roadWidth / 2, y: cenY })
  } else if (laneFlow === 8) { // 掉头
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + roadWidth })
    points.push({ x: x1 + roadWidth / 8, y: cenY + 9 * roadWidth / 8 })
    points.push({ x: x1 + 3 * roadWidth / 8, y: cenY + 9 * roadWidth / 8 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + roadWidth })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY })
  } else if (laneFlow === 9) { // 左掉头
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + roadWidth })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: x1 + 3 * roadWidth / 8, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + roadWidth / 4, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + roadWidth })

    points.push({ x: x1 + 1 * roadWidth / 4, y: cenY + roadWidth })
    points.push({ x: x1 + 1 * roadWidth / 4, y: cenY + 1 * roadWidth / 2 })
    points.push({ x: x1 + 1 * roadWidth / 8, y: cenY + 5 * roadWidth / 8 })
    points.push({ x: x1 + 3 * roadWidth / 8, y: cenY + 5 * roadWidth / 8 })
    points.push({ x: x1 + 1 * roadWidth / 4, y: cenY + 1 * roadWidth / 2 })
    points.push({ x: x1 + 1 * roadWidth / 4, y: cenY + roadWidth })
    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY + roadWidth })

    points.push({ x: x1 + 3 * roadWidth / 4, y: cenY })
  } else if (laneFlow === 10) { // 可变车道 车道侧边斜线
    points.push({ x: x1 + roadWidth, y: y2 })
    points.push({ x: x1, y: y1 })
    let step = roadWidth / 5
    let leftY = CrossConst.defaultSolidRoadLength
    while (leftY > 0) {
      points.push({ x: x1, y: y1 - leftY })
      points.push({ x: x1 + step, y: y1 - leftY + 3 })
      points.push({ x: x1, y: y1 - leftY })
      points.push({ x: x1, y: Math.min(y1 - leftY + step, y1) })
      leftY -= step
    }
    points.push({ x: x1 + roadWidth, y: y2 })
    let rightY = step
    while (rightY <= CrossConst.defaultSolidRoadLength) {
      points.push({ x: x1 + roadWidth, y: y2 - rightY })
      points.push({ x: x1 + roadWidth - step, y: y2 - rightY + step })
      points.push({ x: x1 + roadWidth, y: y2 - rightY })
      rightY += step
    }

  } else if (laneFlow === 'variableClick') { // 可变车道圆点点击位置
    points.push({ x: x1 + roadWidth / 2, y: cenY })
  }
  return points
}

/**
 * @name wsx
 * @Date 2021-08-02 13:36:29
 * @introduction 获取饱和度流向点位
 * @description 详细描述
 * @param 流向类型 flowType:1/2/3
 * @param 路口模型参数：CrossConst
 * @param 当前车道 self
 * @return 无返回类型
 * @exception [违例类型] [违例类型说明]
 */
export function getRoadFlowPoint (flowType:any, CrossConst:any, self:any) {
  const points = []
  let flowTextPoint = {}
  // 绘制的顶点
  const { x: x1, y: y1 } = self.point.H0[self.in]
  const { y: y2 } = self.point.H0[self.in - 1]
  const roadWidth = CrossConst.roadWidth
  let offsetY = -2 * roadWidth
  // 左流向画第一个车道
  let offsetX = 0
  if (flowType === 1) {
    offsetX += 0
    offsetY += (y2 - y1) / 2
  } else if (flowType === 2) {
    if (self.in > 3) {
      offsetX += ((self.point.H0[0].x - self.point.H0[self.in].x) - roadWidth) / 2
      offsetY += (self.point.H0[0].y - self.point.H0[self.in].y) / 2
    } else {
      offsetX += roadWidth
      offsetY += ((y2 - y1) / 2) * 3
    }
  } else if (flowType === 3) {
    if (self.in > 3) {
      offsetX += (self.point.H0[0].x - self.point.H0[self.in].x) - roadWidth
      offsetY += (self.point.H0[0].y - self.point.H0[self.in].y) - (y2 - y1) / 2
    } else {
      offsetX += 2 * roadWidth
      offsetY += ((y2 - y1) / 2) * 5
    }
  } else if (flowType === 4) {
    offsetX = 0
    offsetY += (CrossConst.manCarInterval + CrossConst.manRoadLength / 2) + 2 * roadWidth
  }
  const manOffsetY = (y2 - y1) * self.in
  const manOffsetX = roadWidth * (self.in - 1)
  const leftX = x1 + offsetX
  const cenY = y1 + offsetY
  if (flowType === 1) { // 流向左
    points.push({ x: leftX + 7 * roadWidth / 8, y: cenY })
    points.push({ x: leftX + 7 * roadWidth / 8, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: leftX + 3 * roadWidth / 8, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: leftX + 3 * roadWidth / 8, y: cenY + 13 * roadWidth / 8 })
    points.push({ x: leftX + 1 * roadWidth / 8, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: leftX + 3 * roadWidth / 8, y: cenY + 9 * roadWidth / 8 })
    points.push({ x: leftX + 3 * roadWidth / 8, y: cenY + 5 * roadWidth / 4 })
    points.push({ x: leftX + 5 * roadWidth / 8, y: cenY + 5 * roadWidth / 4 })
    points.push({ x: leftX + 5 * roadWidth / 8, y: cenY })
    flowTextPoint = { x: leftX + 3 * roadWidth / 4, y: cenY - roadWidth / 2 }
  } else if (flowType === 2) { // 流向中
    points.push({ x: leftX + 3 * roadWidth / 8, y: cenY })
    points.push({ x: leftX + 3 * roadWidth / 8, y: cenY + 5 * roadWidth / 4 })
    points.push({ x: leftX + roadWidth / 4, y: cenY + 5 * roadWidth / 4 })
    points.push({ x: leftX + roadWidth / 2, y: cenY + 13 * roadWidth / 8 })
    points.push({ x: leftX + 3 * roadWidth / 4, y: cenY + 5 * roadWidth / 4 })
    points.push({ x: leftX + 5 * roadWidth / 8, y: cenY + 5 * roadWidth / 4 })
    points.push({ x: leftX + 5 * roadWidth / 8, y: cenY })
    flowTextPoint = { x: leftX + roadWidth / 2, y: cenY - roadWidth / 2 }
  } else if (flowType === 3) { // 流向右
    points.push({ x: leftX + 1 * roadWidth / 8, y: cenY })
    points.push({ x: leftX + 1 * roadWidth / 8, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: leftX + 5 * roadWidth / 8, y: cenY + 3 * roadWidth / 2 })
    points.push({ x: leftX + 5 * roadWidth / 8, y: cenY + 13 * roadWidth / 8 })
    points.push({ x: leftX + 7 * roadWidth / 8, y: cenY + 11 * roadWidth / 8 })
    points.push({ x: leftX + 5 * roadWidth / 8, y: cenY + 9 * roadWidth / 8 })
    points.push({ x: leftX + 5 * roadWidth / 8, y: cenY + 5 * roadWidth / 4 })
    points.push({ x: leftX + 3 * roadWidth / 8, y: cenY + 5 * roadWidth / 4 })
    points.push({ x: leftX + 3 * roadWidth / 8, y: cenY })
    flowTextPoint = { x: leftX + roadWidth / 4, y: cenY - roadWidth / 2 }
  } else if (flowType === 4) { // 流向人行
    points.push({ x: leftX, y: cenY })
    points.push({ x: leftX + 2 * roadWidth / 8, y: cenY - 2 * roadWidth / 8 })

    points.push({ x: leftX + 2 * roadWidth / 8, y: cenY - roadWidth / 8 })
    points.push({ x: leftX + 6 * roadWidth / 8 + manOffsetX, y: cenY - roadWidth / 8 + manOffsetY })

    points.push({ x: leftX + 6 * roadWidth / 8 + manOffsetX, y: cenY - 2 * roadWidth / 8 + manOffsetY })
    points.push({ x: leftX + roadWidth + manOffsetX, y: cenY + manOffsetY })
    points.push({ x: leftX + 6 * roadWidth / 8 + manOffsetX, y: cenY + 2 * roadWidth / 8 + manOffsetY })

    points.push({ x: leftX + 6 * roadWidth / 8 + manOffsetX, y: cenY + 1 * roadWidth / 8 + manOffsetY })
    points.push({ x: leftX + 2 * roadWidth / 8, y: cenY + 1 * roadWidth / 8 })

    points.push({ x: leftX + 2 * roadWidth / 8, y: cenY + 2 * roadWidth / 8 })
    points.push({ x: leftX, y: cenY })
  }
  return { roadFlowPoints: points, flowTextPoint: flowTextPoint }
}

/**
 * @name wsx
 * @Date 2021-08-05 14:58:40
 * @introduction 获取实时信号机相位点位
 * @description 详细描述
 * @param {参数类型} phaseNum 相位号 1/2/3/4
 * @param {参数类型} flowType 1/2/3/4 左/直/右/人行
 * @param {参数类型} baseLayerWidth 绘制相位dom宽度
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */
export function getRealPhasePoint (phaseNum:any, flowType:any, baseLayerWidth:any, fd_flow = 'main') {
  const points = []
  let x = baseLayerWidth / 3 + 2
  let y = -phaseNum * (baseLayerWidth) + 2 + 1 * baseLayerWidth / 12
  let roadWidth = baseLayerWidth / 9
  // let roadWidth = baseLayerWidth / 15
  if (fd_flow === 'fd') {
    roadWidth = roadWidth * 0.5
    x = x + 5 * roadWidth
  }
  if (flowType === 2) {
    x = x + roadWidth
  } else if (flowType === 3) {
    x = x + 2 * roadWidth
  } else if (flowType === 4) {
    y = y - 3 * roadWidth / 8
    x = x + roadWidth / 8
  } else if (flowType === 10) {
    y = y - 3 * roadWidth / 8
    x = x + roadWidth / 8 + 1.5 * roadWidth
  } else if (flowType === 11) {
    y = y - 3 * roadWidth / 8
    x = x + roadWidth / 8 - 1.5 * roadWidth
  } else if (flowType === 12) {
    x = x + 4.5 * roadWidth
    roadWidth = baseLayerWidth / 20
  } else if (flowType === 13) {
    x = x + 5 * roadWidth
    roadWidth = baseLayerWidth / 20
  }
  // 流向左
  if (flowType === 1) {
    points.push({ x: x + 7 * roadWidth / 8, y: y })
    points.push({ x: x + 7 * roadWidth / 8, y: y + 10 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 13 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 15 * roadWidth / 8 })
    points.push({ x: x, y: y + 12 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 9 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y + 9 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y })
  } else if (flowType === 2) { // 流向直
    points.push({ x: x + 3 * roadWidth / 8, y: y })
    points.push({ x: x + 3 * roadWidth / 8, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + roadWidth / 4, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + roadWidth / 2, y: y + 15 * roadWidth / 8 })
    points.push({ x: x + 3 * roadWidth / 4, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y })
  } else if (flowType === 3) { // 流向右
    points.push({ x: x + 1 * roadWidth / 8, y: y })
    points.push({ x: x + 1 * roadWidth / 8, y: y + 10 * roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8, y: y + 13 * roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8, y: y + 15 * roadWidth / 8 })
    points.push({ x: x + roadWidth, y: y + 12 * roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8, y: y + 9 * roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + 3 * roadWidth / 8, y: y + 9 * roadWidth / 8 })
    points.push({ x: x + 3 * roadWidth / 8, y: y })
  } else if (flowType === 4) { // 人行
    points.push({ x: x, y: y })
    points.push({ x: x + 2 * roadWidth / 8, y: y - 2 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y - roadWidth / 8 })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y - roadWidth / 8 })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y - 2 * roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8 + 2 * roadWidth, y: y })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y + 2 * roadWidth / 8 })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y + 1 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 1 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 2 * roadWidth / 8 })
    points.push({ x: x, y: y })
  } else if (flowType === 8) { // 掉头
    points.push({ x: x + 7 * roadWidth / 8, y: y })
    points.push({ x: x + 7 * roadWidth / 8, y: y + 8 * roadWidth / 8 })
    points.push({ x: x + 1 * roadWidth / 8, y: y + 8 * roadWidth / 8 })
    points.push({ x: x + 1 * roadWidth / 8, y: y + 4 * roadWidth / 8 })
    points.push({ x: x + 0 * roadWidth / 8, y: y + 4 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 2 * roadWidth / 8 })
    points.push({ x: x + 4 * roadWidth / 8, y: y + 4 * roadWidth / 8 })
    points.push({ x: x + 3 * roadWidth / 8, y: y + 4 * roadWidth / 8 })
    points.push({ x: x + 3 * roadWidth / 8, y: y + 6 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y + 6 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y })
  } else if (flowType === 10) { // 人行1
    points.push({ x: x, y: y })
    points.push({ x: x + 2 * roadWidth / 8, y: y - 2 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y - roadWidth / 8 })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y - roadWidth / 8 })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y - 2 * roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8 + 2 * roadWidth, y: y })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y + 2 * roadWidth / 8 })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y + 1 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 1 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 2 * roadWidth / 8 })
    points.push({ x: x, y: y })
  } else if (flowType === 11) { // 人行2
    points.push({ x: x, y: y })
    points.push({ x: x + 2 * roadWidth / 8, y: y - 2 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y - roadWidth / 8 })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y - roadWidth / 8 })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y - 2 * roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8 + 2 * roadWidth, y: y })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y + 2 * roadWidth / 8 })
    points.push({ x: x + 4 * roadWidth / 8 + 2 * roadWidth, y: y + 1 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 1 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 2 * roadWidth / 8 })
    points.push({ x: x, y: y })
  } else if (flowType === 12) { // 非机动车左
    points.push({ x: x + 7 * roadWidth / 8, y: y })
    points.push({ x: x + 7 * roadWidth / 8, y: y + 10 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 13 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 15 * roadWidth / 8 })
    points.push({ x: x, y: y + 12 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 9 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y + 9 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y })
  } else if (flowType === 13) { // 非机动车直
    points.push({ x: x + 3 * roadWidth / 8, y: y })
    points.push({ x: x + 3 * roadWidth / 8, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + roadWidth / 4, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + roadWidth / 2, y: y + 15 * roadWidth / 8 })
    points.push({ x: x + 3 * roadWidth / 4, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y })
  }
  return points
}

/**
 * @name wsx
 * @Date 2021-08-27 14:19:20
 * @introduction 获取路口模型中当前相位的点位
 * @description 详细描述
 * @param {参数类型} 参数 参数说明
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */
export function getInterPhaseflowData (flowType:any, entrance:any, fd_flow = 'main') {
  const points = []
  let { x, y } = entrance.point.H0[entrance.in]
  const { y: y1 } = entrance.point.H0[entrance.in]
  const { y: y2 } = entrance.point.H0[entrance.in - 1]
  let laneOffset = y2 - y1
  let roadWidth = CrossConst.roadWidth * 0.75
  y += CrossConst.manCarInterval + CrossConst.manRoadLength + 0.5 * roadWidth
  if (fd_flow === 'fd') {
    x += 3 * roadWidth
    roadWidth = roadWidth * 0.8
  }
  // 流向左
  if (flowType === 1) {
    points.push({ x: x + 7 * roadWidth / 8, y: y })
    points.push({ x: x + 7 * roadWidth / 8, y: y + 10 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 13 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 15 * roadWidth / 8 })
    points.push({ x: x, y: y + 12 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 9 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y + 9 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y })
  } else if (flowType === 2) { // 流向直
    x += roadWidth
    y += laneOffset
    points.push({ x: x + 3 * roadWidth / 8, y: y })
    points.push({ x: x + 3 * roadWidth / 8, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + roadWidth / 4, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + roadWidth / 2, y: y + 15 * roadWidth / 8 })
    points.push({ x: x + 3 * roadWidth / 4, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y })
  } else if (flowType === 3) { // 流向右
    x += 2 * roadWidth
    y += laneOffset * 2
    points.push({ x: x + 1 * roadWidth / 8, y: y })
    points.push({ x: x + 1 * roadWidth / 8, y: y + 10 * roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8, y: y + 13 * roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8, y: y + 15 * roadWidth / 8 })
    points.push({ x: x + roadWidth, y: y + 12 * roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8, y: y + 9 * roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8, y: y + 11 * roadWidth / 8 })
    points.push({ x: x + 3 * roadWidth / 8, y: y + 9 * roadWidth / 8 })
    points.push({ x: x + 3 * roadWidth / 8, y: y })
  } else if (flowType === 4 || flowType === 10) { // 流向人行或者人行1
    // const manOffsetX = roadWidth * (entrance.in - 1)
    const manOffsetX = roadWidth
    roadWidth = roadWidth * 0.5
    const { y: y1 } = entrance.point.H0[entrance.in]
    const { y: y2 } = entrance.point.H0[entrance.in - 1]
    // const manOffsetY = (y2 - y1) * entrance.in
    x = x + roadWidth * 1.5
    const manOffsetY = (y2 - y1) * 3
    y += laneOffset * 2 - roadWidth * 0.5
    points.push({ x: x, y: y })
    points.push({ x: x + 2 * roadWidth / 8, y: y - 2 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y - roadWidth / 8 })
    points.push({ x: x + 6 * roadWidth / 8 + manOffsetX, y: y - roadWidth / 8 + manOffsetY })
    points.push({ x: x + 6 * roadWidth / 8 + manOffsetX, y: y - 2 * roadWidth / 8 + manOffsetY })
    points.push({ x: x + roadWidth + manOffsetX, y: y + manOffsetY })
    points.push({ x: x + 6 * roadWidth / 8 + manOffsetX, y: y + 2 * roadWidth / 8 + manOffsetY })
    points.push({ x: x + 6 * roadWidth / 8 + manOffsetX, y: y + 1 * roadWidth / 8 + manOffsetY })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 1 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 2 * roadWidth / 8 })
    points.push({ x: x, y: y })
  } else if (flowType === 8) { // 掉头
    points.push({ x: x + 7 * roadWidth / 8, y: y })
    points.push({ x: x + 7 * roadWidth / 8, y: y + 8 * roadWidth / 8 })
    points.push({ x: x + 1 * roadWidth / 8, y: y + 8 * roadWidth / 8 })
    points.push({ x: x + 1 * roadWidth / 8, y: y + 4 * roadWidth / 8 })
    points.push({ x: x + 0 * roadWidth / 8, y: y + 4 * roadWidth / 8 })
    points.push({ x: x + 2 * roadWidth / 8, y: y + 2 * roadWidth / 8 })
    points.push({ x: x + 4 * roadWidth / 8, y: y + 4 * roadWidth / 8 })
    points.push({ x: x + 3 * roadWidth / 8, y: y + 4 * roadWidth / 8 })
    points.push({ x: x + 3 * roadWidth / 8, y: y + 6 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y + 6 * roadWidth / 8 })
    points.push({ x: x + 5 * roadWidth / 8, y: y })
  } else if (flowType === 11) { // 流向人行2
    // const manOffsetX = -roadWidth * (entrance.out - 1)
    const manOffsetX = -roadWidth
    roadWidth = roadWidth * 0.5
    x = x - roadWidth * 1.5
    const { y: y1 } = entrance.point.H0[entrance.in]
    const { y: y2 } = entrance.point.H0[entrance.in - 1]
    // const manOffsetY = (y1 - y2) * entrance.out
    const manOffsetY = (y1 - y2) * 3
    y -= roadWidth * 0.2
    points.push({ x: x, y: y })
    points.push({ x: x - 2 * roadWidth / 8, y: y - 2 * roadWidth / 8 })
    points.push({ x: x - 2 * roadWidth / 8, y: y - roadWidth / 8 })
    points.push({ x: x - 6 * roadWidth / 8 + manOffsetX, y: y - roadWidth / 8 + manOffsetY })
    points.push({ x: x - 6 * roadWidth / 8 + manOffsetX, y: y - 2 * roadWidth / 8 + manOffsetY })
    points.push({ x: x - roadWidth + manOffsetX, y: y + manOffsetY })
    points.push({ x: x - 6 * roadWidth / 8 + manOffsetX, y: y + 2 * roadWidth / 8 + manOffsetY })
    points.push({ x: x - 6 * roadWidth / 8 + manOffsetX, y: y + 1 * roadWidth / 8 + manOffsetY })
    points.push({ x: x - 2 * roadWidth / 8, y: y + 1 * roadWidth / 8 })
    points.push({ x: x - 2 * roadWidth / 8, y: y + 2 * roadWidth / 8 })
    points.push({ x: x, y: y })
  } else if (flowType === 12) { // 非机动车左
    x += 5.5 * roadWidth
    const nonWidth = roadWidth / 2
    points.push({ x: x + 7 * nonWidth / 8, y: y })
    points.push({ x: x + 7 * nonWidth / 8, y: y + 3 * nonWidth / 2 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 3 * nonWidth / 2 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 13 * nonWidth / 8 })
    points.push({ x: x + 1 * nonWidth / 8, y: y + 11 * nonWidth / 8 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 9 * nonWidth / 8 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + 5 * nonWidth / 8, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + 5 * nonWidth / 8, y: y })
  } else if (flowType === 13) { // 非机动车直
    const nonWidth = roadWidth / 2
    x += 5.5 * roadWidth + nonWidth
    points.push({ x: x + 3 * nonWidth / 8, y: y })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + nonWidth / 4, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + nonWidth / 2, y: y + 13 * nonWidth / 8 })
    points.push({ x: x + 3 * nonWidth / 4, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + 5 * nonWidth / 8, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + 5 * nonWidth / 8, y: y })
  }
  return points
}

/**
 * @name wsx
 * @Date 2021-08-24 15:30:00
 * @introduction 根据初始点位获取绘制车道流向的数据
 * @description 详细描述
 * @param {参数类型} originPoint：绘制的左下角点
 * @param {参数类型} baseWidth：基础宽度
 * @param {参数类型} flowType：流向类型
 * @param {参数类型} entrance：进口信息
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */
export function getDrawFlowData (originPoint:any, oriBaseWidth:any, flowType:any, entrance:any, type = 'main') {
  let baseWidth = type === 'fd' ? oriBaseWidth * 0.8 : oriBaseWidth
  const points = []
  const [x, y] = originPoint
  if (flowType === 1) { // 流向左
    points.push({ x: x + 7 * baseWidth / 8, y: y })
    points.push({ x: x + 7 * baseWidth / 8, y: y + 3 * baseWidth / 2 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 3 * baseWidth / 2 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 13 * baseWidth / 8 })
    points.push({ x: x + 1 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 9 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 5 * baseWidth / 4 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 5 * baseWidth / 4 })
    points.push({ x: x + 5 * baseWidth / 8, y: y })
  } else if (flowType === 2) { // 流向中
    points.push({ x: x + 3 * baseWidth / 8, y: y })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 5 * baseWidth / 4 })
    points.push({ x: x + baseWidth / 4, y: y + 5 * baseWidth / 4 })
    points.push({ x: x + baseWidth / 2, y: y + 13 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 4, y: y + 5 * baseWidth / 4 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 5 * baseWidth / 4 })
    points.push({ x: x + 5 * baseWidth / 8, y: y })
  } else if (flowType === 3) { // 流向右
    points.push({ x: x + 1 * baseWidth / 8, y: y })
    points.push({ x: x + 1 * baseWidth / 8, y: y + 3 * baseWidth / 2 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 3 * baseWidth / 2 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 13 * baseWidth / 8 })
    points.push({ x: x + 7 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 9 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 5 * baseWidth / 4 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 5 * baseWidth / 4 })
    points.push({ x: x + 3 * baseWidth / 8, y: y })
  } else if (flowType === 4 || flowType === 10) { // 流向人行 或者人行1
    const manOffsetX = baseWidth * (entrance.in - 1)
    const { y: y1 } = entrance.point.H0[entrance.in]
    const { y: y2 } = entrance.point.H0[entrance.in - 1]
    const manOffsetY = (y2 - y1) * entrance.in
    points.push({ x: x, y: y })
    points.push({ x: x + 2 * baseWidth / 8, y: y - 2 * baseWidth / 8 })
    points.push({ x: x + 2 * baseWidth / 8, y: y - baseWidth / 8 })
    points.push({ x: x + 6 * baseWidth / 8 + manOffsetX, y: y - baseWidth / 8 + manOffsetY })
    points.push({ x: x + 6 * baseWidth / 8 + manOffsetX, y: y - 2 * baseWidth / 8 + manOffsetY })
    points.push({ x: x + baseWidth + manOffsetX, y: y + manOffsetY })
    points.push({ x: x + 6 * baseWidth / 8 + manOffsetX, y: y + 2 * baseWidth / 8 + manOffsetY })
    points.push({ x: x + 6 * baseWidth / 8 + manOffsetX, y: y + 1 * baseWidth / 8 + manOffsetY })
    points.push({ x: x + 2 * baseWidth / 8, y: y + 1 * baseWidth / 8 })
    points.push({ x: x + 2 * baseWidth / 8, y: y + 2 * baseWidth / 8 })
    points.push({ x: x, y: y })
  } else if (flowType === 5) { // 流向左直
    points.push({ x: x + 7 * baseWidth / 8, y: y })
    points.push({ x: x + 7 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 8 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 6 * baseWidth / 8, y: y + 13 * baseWidth / 8 })
    points.push({ x: x + 4 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 9 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 9 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 10 * baseWidth / 8 })
    points.push({ x: x + 1 * baseWidth / 8, y: y + 8 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 6 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 7 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 7 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y })
  } else if (flowType === 6) { // 流向直右
    points.push({ x: x + 1 * baseWidth / 8, y: y })
    points.push({ x: x + 1 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 0 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 2 * baseWidth / 8, y: y + 13 * baseWidth / 8 })
    points.push({ x: x + 4 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 9 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 9 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 10 * baseWidth / 8 })
    points.push({ x: x + 7 * baseWidth / 8, y: y + 8 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 6 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 7 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 7 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y })
  } else if (flowType === 7) { // 流向通行
    points.push({ x: x + 5 * baseWidth / 8, y: y })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 7 * baseWidth / 8 })
    points.push({ x: x + 6 * baseWidth / 8, y: y + 7 * baseWidth / 8 })
    points.push({ x: x + 6 * baseWidth / 8, y: y + 6 * baseWidth / 8 })
    points.push({ x: x + 8 * baseWidth / 8, y: y + 8 * baseWidth / 8 })
    points.push({ x: x + 6 * baseWidth / 8, y: y + 10 * baseWidth / 8 })
    points.push({ x: x + 6 * baseWidth / 8, y: y + 9 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 9 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 6 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 4 * baseWidth / 8, y: y + 13 * baseWidth / 8 })
    points.push({ x: x + 2 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 9 * baseWidth / 8 })
    points.push({ x: x + 2 * baseWidth / 8, y: y + 9 * baseWidth / 8 })
    points.push({ x: x + 2 * baseWidth / 8, y: y + 10 * baseWidth / 8 })
    points.push({ x: x + 0 * baseWidth / 8, y: y + 8 * baseWidth / 8 })
    points.push({ x: x + 2 * baseWidth / 8, y: y + 6 * baseWidth / 8 })
    points.push({ x: x + 2 * baseWidth / 8, y: y + 7 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 7 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y })
  } else if (flowType === 8) { // 流向掉头
    points.push({ x: x + 7 * baseWidth / 8, y: y })
    points.push({ x: x + 7 * baseWidth / 8, y: y + 13 * baseWidth / 8 })
    points.push({ x: x + 1 * baseWidth / 8, y: y + 13 * baseWidth / 8 })
    points.push({ x: x + 1 * baseWidth / 8, y: y + 8 * baseWidth / 8 })
    points.push({ x: x + 0 * baseWidth / 8, y: y + 8 * baseWidth / 8 })
    points.push({ x: x + 2 * baseWidth / 8, y: y + 6 * baseWidth / 8 })
    points.push({ x: x + 4 * baseWidth / 8, y: y + 8 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 8 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y })
  } else if (flowType === 9) { // 流向左掉头
    points.push({ x: x + 7 * baseWidth / 8, y: y })
    points.push({ x: x + 7 * baseWidth / 8, y: y + 12 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 12 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 13 * baseWidth / 8 })
    points.push({ x: x + 0 * baseWidth / 8, y: y + 11 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 9 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 10 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 10 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 8 * baseWidth / 8 })
    points.push({ x: x + 1 * baseWidth / 8, y: y + 8 * baseWidth / 8 })
    points.push({ x: x + 1 * baseWidth / 8, y: y + 4 * baseWidth / 8 })
    points.push({ x: x + 0 * baseWidth / 8, y: y + 4 * baseWidth / 8 })
    points.push({ x: x + 2 * baseWidth / 8, y: y + 2 * baseWidth / 8 })
    points.push({ x: x + 4 * baseWidth / 8, y: y + 4 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 4 * baseWidth / 8 })
    points.push({ x: x + 3 * baseWidth / 8, y: y + 6 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y + 6 * baseWidth / 8 })
    points.push({ x: x + 5 * baseWidth / 8, y: y })
  } else if (flowType === 10) { // 流向人行1 跟 flowType === 4人行一样画

  } else if (flowType === 11) { // 流向人行2
    const manOffsetX = -baseWidth * (entrance.out - 1)
    const { y: y1 } = entrance.point.H0[entrance.in]
    const { y: y2 } = entrance.point.H0[entrance.in - 1]
    const manOffsetY = (y1 - y2) * entrance.out
    points.push({ x: x, y: y })
    points.push({ x: x - 2 * baseWidth / 8, y: y - 2 * baseWidth / 8 })
    points.push({ x: x - 2 * baseWidth / 8, y: y - baseWidth / 8 })
    points.push({ x: x - 6 * baseWidth / 8 + manOffsetX, y: y - baseWidth / 8 + manOffsetY })
    points.push({ x: x - 6 * baseWidth / 8 + manOffsetX, y: y - 2 * baseWidth / 8 + manOffsetY })
    points.push({ x: x - baseWidth + manOffsetX, y: y + manOffsetY })
    points.push({ x: x - 6 * baseWidth / 8 + manOffsetX, y: y + 2 * baseWidth / 8 + manOffsetY })
    points.push({ x: x - 6 * baseWidth / 8 + manOffsetX, y: y + 1 * baseWidth / 8 + manOffsetY })
    points.push({ x: x - 2 * baseWidth / 8, y: y + 1 * baseWidth / 8 })
    points.push({ x: x - 2 * baseWidth / 8, y: y + 2 * baseWidth / 8 })
    points.push({ x: x, y: y })
  } else if (flowType === 12) { // 非机动车左
    const nonWidth = baseWidth * 0.6
    points.push({ x: x + 7 * nonWidth / 8, y: y })
    points.push({ x: x + 7 * nonWidth / 8, y: y + 3 * nonWidth / 2 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 3 * nonWidth / 2 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 13 * nonWidth / 8 })
    points.push({ x: x + 1 * nonWidth / 8, y: y + 11 * nonWidth / 8 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 9 * nonWidth / 8 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + 5 * nonWidth / 8, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + 5 * nonWidth / 8, y: y })
  } else if (flowType === 13) { // 非机动车直
    const nonWidth = baseWidth * 0.6
    points.push({ x: x + 3 * nonWidth / 8, y: y })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + nonWidth / 4, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + nonWidth / 2, y: y + 13 * nonWidth / 8 })
    points.push({ x: x + 3 * nonWidth / 4, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + 5 * nonWidth / 8, y: y + 5 * nonWidth / 4 })
    points.push({ x: x + 5 * nonWidth / 8, y: y })
  } else if (flowType === 14) { // 非机动车左直
    const nonWidth = baseWidth * 0.6
    points.push({ x: x + 7 * nonWidth / 8, y: y })
    points.push({ x: x + 7 * nonWidth / 8, y: y + 11 * nonWidth / 8 })
    points.push({ x: x + 8 * nonWidth / 8, y: y + 11 * nonWidth / 8 })
    points.push({ x: x + 6 * nonWidth / 8, y: y + 13 * nonWidth / 8 })
    points.push({ x: x + 4 * nonWidth / 8, y: y + 11 * nonWidth / 8 })
    points.push({ x: x + 5 * nonWidth / 8, y: y + 11 * nonWidth / 8 })
    points.push({ x: x + 5 * nonWidth / 8, y: y + 9 * nonWidth / 8 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 9 * nonWidth / 8 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 10 * nonWidth / 8 })
    points.push({ x: x + 1 * nonWidth / 8, y: y + 8 * nonWidth / 8 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 6 * nonWidth / 8 })
    points.push({ x: x + 3 * nonWidth / 8, y: y + 7 * nonWidth / 8 })
    points.push({ x: x + 5 * nonWidth / 8, y: y + 7 * nonWidth / 8 })
    points.push({ x: x + 5 * nonWidth / 8, y: y })
  }
  return points
}

/**
 * @name wsx
 * @Date 2021-10-11 15:55:00
 * @introduction 获取绘制红绿灯点位数据
 * @description 详细描述
 * @param {参数类型} point：中心点为
 * @param {参数类型} type：green/red
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */
export function getFootLightData (point:any, type:any) {
  const roadWidth = CrossConst.roadWidth
  const { x, y } = point
  const points = []
  if (type === 'green') {
    points.push({ x: x, y: y - roadWidth / 4 })
    points.push({ x: x - roadWidth * 3 / 64, y: y + roadWidth / 4 - roadWidth / 64 })
    points.push({ x: x - roadWidth / 32, y: y + roadWidth * 6 / 32 })
    points.push({ x: x - roadWidth / 64, y: y + roadWidth * 6 / 32 })
    points.push({ x: x - roadWidth / 64, y: y + roadWidth * 11 / 64 })
    points.push({ x: x - roadWidth * 3 / 64, y: y + roadWidth * 10 / 64 })
    points.push({ x: x - roadWidth * 3 / 32, y: y + roadWidth * 5 / 64 })
    points.push({ x: x - roadWidth * 11 / 64, y: y + roadWidth / 32 })
    points.push({ x: x - roadWidth * 9 / 64, y: y + roadWidth / 64 })
    points.push({ x: x - roadWidth / 16, y: y + roadWidth / 16 })
    points.push({ x: x - roadWidth * 3 / 64, y: y + roadWidth * 3 / 32 })
    points.push({ x: x - roadWidth / 64, y: y })
    points.push({ x: x - roadWidth * 15 / 128, y: y - roadWidth * 17 / 128 })
    points.push({ x: x - roadWidth * 9 / 64, y: y - roadWidth * 17 / 128 })
    points.push({ x: x - roadWidth * 5 / 32, y: y - roadWidth * 19 / 128 })
    points.push({ x: x - roadWidth * 7 / 64, y: y - roadWidth * 11 / 64 })
    points.push({ x: x + roadWidth / 64, y: y - roadWidth * 3 / 64 })
    points.push({ x: x + roadWidth * 7 / 64, y: y - roadWidth * 9 / 64 })
    points.push({ x: x + roadWidth * 3 / 32, y: y - roadWidth * 11 / 64 })
    points.push({ x: x + roadWidth * 7 / 64, y: y - roadWidth * 6 / 32 })
    points.push({ x: x + roadWidth * 5 / 32, y: y - roadWidth * 5 / 32 })
    points.push({ x: x + roadWidth * 7 / 128, y: y + roadWidth / 128 })
    points.push({ x: x + roadWidth * 7 / 128, y: y + roadWidth * 7 / 64 })
    points.push({ x: x + roadWidth * 3 / 32, y: y + roadWidth * 2 / 32 })
    points.push({ x: x + roadWidth * 7 / 64, y: y - roadWidth / 64 })
    points.push({ x: x + roadWidth * 9 / 64, y: y })
    points.push({ x: x + roadWidth * 4 / 32, y: y + roadWidth * 3 / 32 })
    points.push({ x: x + roadWidth * 2 / 32, y: y + roadWidth * 5 / 32 })
    points.push({ x: x + roadWidth / 64, y: y + roadWidth * 11 / 64 })
    points.push({ x: x + roadWidth / 64, y: y + roadWidth / 4 - roadWidth / 64 })
    points.push({ x: x, y: y - roadWidth / 4 })
  } else if (type === 'red') {
    points.push({ x: x - roadWidth / 32, y: y + roadWidth / 4 - roadWidth / 32 })
    points.push({ x: x - roadWidth / 32 + roadWidth / 32 / 4, y: y + roadWidth * 7 / 32 - roadWidth * 3 / 64 })
    points.push({ x: x - roadWidth * 5 / 64, y: y + roadWidth / 4 - roadWidth * 3 / 32 })
    points.push({ x: x - roadWidth * 7 / 64, y: y + roadWidth / 4 - roadWidth * 3 / 32 })
    points.push({ x: x - roadWidth * 3 / 32 - roadWidth / 32 / 4, y: y - roadWidth / 64 })
    points.push({ x: x - roadWidth * 5 / 64, y: y - roadWidth / 32 })
    points.push({ x: x - roadWidth * 5 / 64, y: y + roadWidth * 2 / 32 })
    points.push({ x: x - roadWidth * 2 / 32, y: y + roadWidth * 4 / 32 })
    points.push({ x: x - roadWidth / 32 - roadWidth / 64, y: y + roadWidth / 64 })
    points.push({ x: x - roadWidth * 5 / 64 - roadWidth / 64, y: y - roadWidth * 6 / 32 })
    points.push({ x: x - roadWidth * 7 / 64 + roadWidth * 4 / 64, y: y - roadWidth * 7 / 32 })
    points.push({ x: x, y: y - roadWidth / 32 })
    points.push({ x: x + roadWidth * 7 / 64 - roadWidth * 4 / 64, y: y - roadWidth * 7 / 32 })
    points.push({ x: x + roadWidth * 7 / 64, y: y - roadWidth * 7 / 32 })
    points.push({ x: x + roadWidth / 32 + roadWidth / 64, y: y - roadWidth / 64 })
    points.push({ x: x + roadWidth * 2 / 32, y: y + roadWidth * 4 / 32 })
    points.push({ x: x + roadWidth * 5 / 64, y: y + roadWidth * 2 / 32 })
    points.push({ x: x + roadWidth * 3 / 32 + roadWidth / 32 / 4, y: y - roadWidth / 64 })
    points.push({ x: x + roadWidth * 7 / 64, y: y + roadWidth / 4 - roadWidth * 11 / 64 })
    points.push({ x: x + roadWidth * 5 / 64, y: y + roadWidth / 4 - roadWidth * 3 / 32 })
    points.push({ x: x + roadWidth / 32 - roadWidth / 32 / 4, y: y + roadWidth * 7 / 32 - roadWidth * 3 / 64 })
    points.push({ x: x + roadWidth / 32, y: y + roadWidth / 4 - roadWidth / 32 })
  }
  return points
}

/**
 * @name wsx
 * @Date 2021-10-15 10:46:14
 * @introduction 简述
 * @description 获取红绿灯左 右的绘制数据
 * @param {参数类型} point：中心点为
 * @param {参数类型} type：left/right
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */
export function getDirectionLightData (point:any, type:any) {
  const roadWidth = CrossConst.roadWidth
  let { x, y } = point
  y = y - roadWidth / 3
  const points = []
  if (type === 'left') {
    x = x + roadWidth / 3
    points.push({ x: x - roadWidth / 3 / 5, y: y + roadWidth / 3 })
    points.push({ x: x - roadWidth / 3 + roadWidth / 3 / 6 + roadWidth / 3 / 15, y: y + roadWidth * 2 / 3 / 5 - roadWidth / 3 / 10 })
    points.push({ x: x - roadWidth / 3 - roadWidth / 3 / 5 + roadWidth / 3 / 15, y: y + roadWidth * 2 / 3 / 5 - roadWidth / 3 / 10 })
    points.push({ x: x - roadWidth * 4 / 3 / 5 + roadWidth / 3 / 15, y: y + roadWidth / 3 - roadWidth / 3 / 6 })
    points.push({ x: x - roadWidth * 8 / 3 / 5, y: y + roadWidth / 3 - roadWidth / 3 / 6 })
    points.push({ x: x - roadWidth * 8 / 3 / 5, y: y + roadWidth / 3 + roadWidth / 3 / 6 })
    points.push({ x: x - roadWidth * 4 / 3 / 5 + roadWidth / 3 / 15, y: y + roadWidth / 3 + roadWidth / 3 / 6 })
    points.push({ x: x - roadWidth / 3 - roadWidth / 3 / 5 + roadWidth / 3 / 15, y: y + roadWidth * 8 / 3 / 5 + roadWidth / 3 / 10 })
    points.push({ x: x - roadWidth / 3 + roadWidth / 3 / 6 + roadWidth / 3 / 15, y: y + roadWidth * 8 / 3 / 5 + roadWidth / 3 / 10 })
    points.push({ x: x - roadWidth / 3 / 5, y: y + roadWidth / 3 })
  } else if (type === 'right') {
    x = x - roadWidth / 3
    points.push({ y: y + roadWidth / 3, x: x + roadWidth / 3 / 5 })
    points.push({ y: y + roadWidth * 2 / 3 / 5 - roadWidth / 3 / 10, x: x + roadWidth / 3 - roadWidth / 3 / 6 - roadWidth / 3 / 15 })
    points.push({ y: y + roadWidth * 2 / 3 / 5 - roadWidth / 3 / 10, x: x + roadWidth / 3 + roadWidth / 3 / 5 - roadWidth / 3 / 15 })
    points.push({ y: y + roadWidth / 3 - roadWidth / 3 / 6, x: x + roadWidth * 4 / 3 / 5 - roadWidth / 3 / 15 })
    points.push({ y: y + roadWidth / 3 - roadWidth / 3 / 6, x: x + roadWidth * 8 / 3 / 5 })
    points.push({ y: y + roadWidth / 3 + roadWidth / 3 / 6, x: x + roadWidth * 8 / 3 / 5 })
    points.push({ y: y + roadWidth / 3 + roadWidth / 3 / 6, x: x + roadWidth * 4 / 3 / 5 - roadWidth / 3 / 15 })
    points.push({ y: y + roadWidth * 8 / 3 / 5 + roadWidth / 3 / 10, x: x + roadWidth / 3 + roadWidth / 3 / 5 - roadWidth / 3 / 15 })
    points.push({ y: y + roadWidth * 8 / 3 / 5 + roadWidth / 3 / 10, x: x + roadWidth / 3 - roadWidth / 3 / 6 - roadWidth / 3 / 15 })
    points.push({ y: y + roadWidth / 3, x: x + roadWidth / 3 / 5 })
  }
  return points
}

/**
 * @name wsx
 * @Date 2021-08-02 13:36:29
 * @introduction 获取车道流向点位
 * @description 详细描述
 * @param {参数类型} laneNumber 进口车道序号1/2/3
 * @param {参数类型} laneFlow 流向1/2/3
 * @param {参数类型} CrossConst 路口模型配置参数
 * @param {参数类型} self 当前进口到信息
 * @return 无返回类型
 * @exception [违例类型] [违例类型说明]
 */
export function getWaitAreaPoint (laneNumber:any, laneFlow:any, CrossConst:any, self:any) {
  const points = [];
  // 绘制的顶点
  let { x: x1, y: y1 } = self.point.H0[self.in - laneNumber + 1]
  let { x: x2, y: y2 } = self.point.H0[self.in - laneNumber]
  const roadWidth = CrossConst.roadWidth
  const offset = CrossConst.manRoadLength + CrossConst.manCarInterval
  // 左转
  if (laneFlow === 1) {
    points.push({ x: x1, y: y1 + offset })
    points.push({ x: x1 - roadWidth / 16, y: y1 + offset + roadWidth * 5 / 8 })
    points.push({ x: x1 - roadWidth * 3 / 16, y: y1 + offset + roadWidth * 9 / 8 })
    points.push({ x: x1 - roadWidth * 6 / 16, y: y1 + offset + roadWidth * 13 / 8 })
    points.push({ x: x1 - roadWidth * 9 / 16, y: y1 + offset + roadWidth * 15 / 8 })
    points.push({ x: x1 - roadWidth * 12 / 16, y: y1 + offset + roadWidth * 16 / 8 })
    points.push({ x: x2 - roadWidth * 15 / 16, y: y2 + offset + roadWidth * 18 / 8 })
    points.push({ x: x2 - roadWidth * 12 / 16, y: y2 + offset + roadWidth * 16 / 8 })
    points.push({ x: x2 - roadWidth * 9 / 16, y: y2 + offset + roadWidth * 15 / 8 })
    points.push({ x: x2 - roadWidth * 6 / 16, y: y2 + offset + roadWidth * 13 / 8 })
    points.push({ x: x2 - roadWidth * 3 / 16, y: y2 + offset + roadWidth * 9 / 8 })
    points.push({ x: x2, y: y2 + offset })
  } else if (laneFlow === 2) { // 直行
    points.push({ x: x1, y: y1 + offset })
    points.push({ x: x1, y: y1 + offset + 2 * roadWidth })
    points.push({ x: x2, y: y2 + offset + 2 * roadWidth })
    points.push({ x: x2, y: y2 + offset })
  }
  return points
}
