import { getLaneFlowPoint, getRoadFlowPoint, getWaitAreaPoint } from "./flowPoint"
// 在canvas为800的基础上，使用以下配置值
const baseWidth = 800

// 路口固定配置，根据baseWidth来设置。会根据cross中size等比缩小
const CrossConstBase:any = {
  roadWidth: 40, // 单个车道宽度  // 2.5米  size：0.000720720720721   1个单位= 0.1米
  bicycleLaneWidth: 15, // 非机动车道
  greenWidth: 10, // 中间绿化带宽度
  doubleYellowLineInterval: 10, // 双黄线间距
  defaultSolidRoadLength: 80, // 进车道实线长度
  defaultRoadLength: 2000, // 道路长度
  defaultRoadNumber: 4, // 初始化道路数
  manRadianLength: 35, // 增加B点位置，释放出交叉口弧度
  manRoadLength: 30, // 马路间人行道长度
  manRoadInterval: 16, // 人行道间隔
  manRoadLineWidth: 1, // 线粗细
  manCarInterval: 4, // 人行道与车道停止线间隔
  walkwayWidth: 20, // 行人通道宽度
  dashLength: 12, // 虚线长度
  busDashLength: 30, // 公交专用车道虚线长度
  tidalDashLength: 24, // 潮汐车道虚线长度
  roadPole: 130 // 路杆子距离人行道距离  绘制非机动车的位置
}

const CrossConst:any = {}
// 固定值， 不会变化
const CrossAngle = {
  radian: 0, // 各个方向间使用一个弧度，该值为偏移角度，越大弧度越平滑。
  interval: 1 // 每个几度取一个点。
}
// 道路中心区域模式
const RoadCenterMode = {
  doubleYellowLine: 'doubleYellowLine', // 双黄线
  greenArea: 'greenArea', // 绿化带
  singleYellowLine: 'singleYellowLine' // 单黄实线
}
// 工具类
const Util = {
  // 弧度转换成角度
  toAngle: (radian:any) => {
    return radian * 180 / Math.PI
  },
  // 角度转换成弧度
  toRadian: (angle:any) => {
    return angle * Math.PI / 180
  },
  //偏移-旋转-偏移
  pointRotateByPoint: (point:any, angle:any, rotateCenter = [0, 0]) => {
    const x = point.x - rotateCenter[0]
    const y = point.y - rotateCenter[1]
    let angleXY = Util.toAngle(Math.atan(y / x))
    if (x < 0) {
      angleXY += 180
    }
    const L = Math.sqrt(x * x + y * y)
    return {
      x: Math.cos(Util.toRadian(angleXY - angle)) * L + rotateCenter[0],
      y: Math.sin(Util.toRadian(angleXY - angle)) * L + rotateCenter[1]
    }
  },
  // 旋转点位偏移[{x,y}]
  pointRotateAngel: (point:any, angle:any, move = [0, 0]) => {
    const { x, y } = point
    let angleXY = Util.toAngle(Math.atan(y / x))
    if (x < 0) {
      angleXY += 180
    }
    const L = Math.sqrt(x * x + y * y)
    return {
      x: Math.cos(Util.toRadian(angleXY - angle)) * L + move[0],
      y: Math.sin(Util.toRadian(angleXY - angle)) * L + move[1]
    }
  },
  // 获取距离
  getDistance: (x1:any, y1:any, x2:any, y2:any) => {
    const dx = Math.abs(x2 - x1)
    const dy = Math.abs(y2 - y1)
    const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
    return distance
  },
  /**
   * @desc 二阶贝塞尔
   * @param {number} t 当前百分比
   * @param {Array} p1 起点坐标
   * @param {Array} p2 终点坐标
   * @param {Array} cp 控制点
   */
  twoBezier: (t:any, p1:any, cp:any, p2:any) => {
    const [x1, y1] = p1
    const [cx, cy] = cp
    const [x2, y2] = p2
    const x = (1 - t) * (1 - t) * x1 + 2 * t * (1 - t) * cx + t * t * x2
    const y = (1 - t) * (1 - t) * y1 + 2 * t * (1 - t) * cy + t * t * y2
    return [x, y]
  },
  // 获取两个点之前那的弧线角度 返回二维点位数组
  getArcPoint: (pointA:any, pointB:any) => {
    let angelA = 20
    const pointList = []
    let [x1, y1] = pointA
    let [x3, y3] = pointB
    if (x1 > x3) {
      angelA = -20;
      [x1, y1, x3, y3] = [x3, y3, x1, y1]
    }
    let x2 = x1 + Math.cos(Util.toRadian(angelA + Util.toAngle(Math.atan((y3 - y1) / (x3 - x1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - x1) * (x3 - x1)) / 2 / Math.cos(Util.toRadian(angelA))
    let y2 = y1 + Math.sin(Util.toRadian(angelA + Util.toAngle(Math.atan((y3 - y1) / (x3 - x1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - x1) * (x3 - x1)) / 2 / Math.cos(Util.toRadian(angelA))
    for (let i = 0; i < 1; i += 0.01) {
      const erPoint = Util.twoBezier(i, [x1, y1], [x2, y2], [x3, y3])
      pointList.push(erPoint)
    }
    return pointList
  },
  //计算两个点位的弧度
  calculateAngle (leftDegree:any, rightDegree:any) {
    let degree = leftDegree - rightDegree
    if (degree < 0) {
      degree += 360
    }
    return degree
  },

  // os的角度degree转换成路口模型的角度angle
  degreeToAngle: (agree:any) => {
    let angle = 0
    if (agree >= 0 && agree <= 90) {
      angle = 90 - agree
    } else if (agree > 90 && agree < 180) {
      angle = 360 - agree + 90
    } else if (agree >= 180 && agree <= 270) {
      angle = 270 - agree + 180
    } else if (agree > 270 && agree <= 360) {
      angle = 360 - agree + 90
    }
    return angle
  },

  // 计算左右两边道路的计算弧度
  calculateLeftRightRadian (leftDegree:any, rightDegree:any) {
    let degree = leftDegree - rightDegree
    let degreeRadia = 0
    if (degree < 0) {
      degree += 360
    }
    if (degree <= 90) {
      degreeRadia = Util.toRadian(90 - degree)
    } else if (degree > 90 &&  degree< 180) {
      degreeRadia = Util.toRadian(degree - 90)
    }
    return degreeRadia
  },

  // 根据两个点位以及分割距离计算分割的每一段的点位
  getSplitPoint (point1:any, point2:any, spliceLength:any) {
    const spliteArr = []
    const d = Util.getDistance(point1.x, point1.y, point2.x, point2.y)
    const dx = (point2.x - point1.x) / d * spliceLength
    const dy = (point2.y - point1.y) / d * spliceLength
    const length = Math.ceil(d / spliceLength / 2)
    for (let j = 0; j < length; j++) {
      spliteArr.push([
        [point1.x + dx * 2 * j, point1.y + dy * 2 * j],
        [point1.x + dx * (2 * j + 1), point1.y + dy * (2 * j + 1)]
      ])
    }
    return spliteArr
  }

}
// 经纬度

/**
 * @description 方向对象
 * @author wsx
 * @Date  2021-07-29 13:10:27
 */
class CrossInfo {

  entrances:any
  origin:any
  centerLineMode : any
  roadNumber : any
  drawOption :any
  is_have_son:any
  baseWidth :any
  clientWidth :any
  clientHeight:any
  entranceArray:any

  constructor(param:any) {
    const option = Object.assign({
      entrances: [], // 各个方向数据
      origin: [0, 0], // 经纬度或者canvas的原点
      // size: 400, // 控制大小， 经纬度大小或者canvas画布大小
      centerLineMode: false, // true：道路中心线交叉原点、false:黄线对齐。
      drawOption: {},  // 绘制参数
      is_have_son: 0, // 0普通路口 1父子路口 2匝道
      baseWidth: 800,
      clientWidth: 800,
      clientHeight: 800,
    }, param)
    const scale = option.is_have_son == 2 ? 1.1 : 0.8

    for (const prop in CrossConstBase) {
      CrossConst[prop] = (option.baseWidth * scale) / baseWidth * CrossConstBase[prop]
    }
    if (option.expandManRadian) {
      CrossConst.manRadianLength = CrossConst.manRadianLength * 3
    }
    this.entrances = option.entrances
    this.origin = option.origin
    this.centerLineMode = option.centerLineMode
    this.roadNumber = this.entrances.length
    this.drawOption = option.drawOption
    this.is_have_son = option.is_have_son
    this.baseWidth = option.baseWidth
    this.clientWidth = option.clientWidth
    this.clientHeight = option.clientHeight
    if (this.roadNumber < 2) {
      console.error('路口模型不能小于两个方向。')
      return
    }
    this.init()
  }

  init () {
    this.entranceArray = this.entrances.map((info:any, index:any) => {
      info.roadNumber = this.roadNumber
      info.number = index
      info.origin = this.origin
      info.centerLineMode = this.centerLineMode
      info.drawOption = this.drawOption
      info.entranceNum = this.entrances.length
      info.is_have_son = this.is_have_son
      info.baseWidth = this.baseWidth
      info.clientWidth = this.clientWidth
      info.clientHeight = this.clientHeight

      // 第二个进口的进口数量,绘制匝道
      info.secondIn = this.entrances[1].motor_lanes.length
      if (this.is_have_son === 2) {
        return new CrossRampObject(info)
      } else {
        return new CrossDirectionObject(info)
      }
    })
    // 普通路口做计算
    if (this.is_have_son != 2) {
      this.entranceArray.map((info:any, index:any) => {
        const param = {
          degreeLeft: index === this.roadNumber - 1 ? this.entranceArray[0].degree : this.entranceArray[index + 1].degree,
          degreeRight: index === 0 ? this.entranceArray[this.roadNumber - 1].degree : this.entranceArray[index - 1].degree,
          widthLeft: index === this.roadNumber - 1 ? this.entranceArray[0].rightWidth : this.entranceArray[index + 1].rightWidth,
          widthRight: index === 0 ? this.entranceArray[this.roadNumber - 1].leftWidth : this.entranceArray[index - 1].leftWidth,
        }
        info.setLeftAndRight(param)
      })
    }
  }
}
/**
 * @description 方向对象
 * @author wsx
 * @Date  2021-07-29 13:10:27
 */
class CrossDirectionObject {
  // 进口数
  entranceNum :any
  // 进口id
  en_id :any
  name :any
  // 进路口车道数
  in :any
  // 进路口非机动车道数
  inBicycleLane :any
  // 出路口车道数
  out :any
  // 出路口非机动车道数
  outBicycleLane :any
  origin :any
  centerLineMode :any
  drawOption :any
  // 道路中间类型。 双黄线、绿化带、单黄线等
  road_center_mode :any
  canalization :any
  // 车道流向
  motor_lanes :any
  degree :any
  // 路口方向相对正南方向偏移角度  （ -360 / CrossConst.defaultRoadNumber, 360 / CrossConst.defaultRoadNumber ）
  angle:any
  // this.angle = option.angle
  // 道路长度
  roadLength :any
  // 路口类型，几方向路口
  roadNumber :any
  // 当前是第几个方向，正在方为0，逆时针数
  number :any
  centerToManRoadDistance :any
  // 核心点位
  point :any
  // 转换正后的坐标
  correctPoint :any
  // 准确计算后的点线面数据
  pointData :any
  lineData :any
  polygonData :any
  angleLeft :any
  angleRight :any
  degreeLeft:any
  degreeRight :any
  widthLeft :any
  widthRight:any
  leftWidth:any
  rightWidth:any
  width:any

  constructor(param:any) {
    const option = Object.assign({
      entranceNum: 4,
      en_id: 1,
      in: 2,
      inBicycleLane: 0,
      out: 2,
      name: '道路',
      outBicycleLane: 0,
      origin: [0, 0],
      centerLineMode: true,
      road_center_mode: RoadCenterMode.singleYellowLine,
      canalization: 0, // 右转渠化
      drawOption: {},
      motor_lanes: [], // 进口车道流向
      degree: 0, //道路角度 根据os提供的角度
      angle: 0, //道路角度 根据os提供的角度进行转换
      roadNumber: CrossConst.defaultRoadNumber,
      number: 0,
      roadLength: CrossConst.defaultRoadLength,
      centerToManRoadDistance: 0
    }, param)

    // 进口数
    this.entranceNum = option.entranceNum
    // 进口id
    this.en_id = option.en_id
    this.name = option.name
    // 进路口车道数
    this.in = option.motor_lanes.length
    // 进路口非机动车道数
    this.inBicycleLane = option.inBicycleLane
    // 出路口车道数
    this.out = option.exit_lanes.length
    // 出路口非机动车道数
    this.outBicycleLane = option.outBicycleLane
    this.origin = option.origin
    this.centerLineMode = option.centerLineMode
    this.drawOption = option.drawOption
    // 道路中间类型。 双黄线、绿化带、单黄线等
    this.road_center_mode = option.road_center_mode
    this.canalization = option.canalization
    // 车道流向
    this.motor_lanes = option.motor_lanes
    this.degree = option.degree
    // 路口方向相对正南方向偏移角度  （ -360 / CrossConst.defaultRoadNumber, 360 / CrossConst.defaultRoadNumber ）
    this.angle = Util.degreeToAngle(option.degree)
    // this.angle = option.angle
    // 道路长度
    this.roadLength = option.roadLength
    // 路口类型，几方向路口
    this.roadNumber = option.roadNumber
    // 当前是第几个方向，正在方为0，逆时针数
    this.number = option.number
    this.centerToManRoadDistance = option.centerToManRoadDistance
    this.calculation('width')

    // 核心点位
    this.point = {

    }
    // 转换正后的坐标
    this.correctPoint = {}
    // 准确计算后的点线面数据
    this.pointData = {}
    this.lineData = {}
    this.polygonData = {}
  }

  // 设置左右方向参数
  setLeftAndRight (param:any):void {
    const option = Object.assign({
      angleLeft: 0,
      angleRight: 0,
      degreeLeft: 0,
      degreeRight: 0,
      widthLeft: 4 * CrossConst.roadWidth,
      widthRight: 4 * CrossConst.roadWidth
    }, param)
    // 该路口左右测路口信息。
    this.angleLeft = option.angleLeft
    this.angleRight = option.angleRight
    this.degreeLeft = option.degreeLeft
    this.degreeRight = option.degreeRight
    this.widthLeft = option.widthLeft
    this.widthRight = option.widthRight
    this.calculation('point')
  }

  // 计算关联属性
  calculation (prop:any):void {
    let angleLeft2 = Util.calculateLeftRightRadian(this.degreeLeft, this.degree)
    let angleRight2 = Util.calculateLeftRightRadian(this.degree, this.degreeRight)
    let toLeftAngle = Util.calculateAngle(this.degreeLeft, this.degree)
    let toRightAngle = Util.calculateAngle(this.degree, this.degreeRight)

    let x = 0; let y = 0; let dy = 0; let dw = 0
    // 根据中心区域不同类型设置, 黄实线的宽度
    switch (this.road_center_mode) {
      case RoadCenterMode.doubleYellowLine:
        dw = CrossConst.doubleYellowLineInterval
        break
      case RoadCenterMode.greenArea:
        dw = CrossConst.greenWidth
        break
      case RoadCenterMode.singleYellowLine:
        dw = 0
        break
    }
    switch (prop) {
      // 道路宽度
      case 'width':
        // this.width = (this.in + this.out) * CrossConst.roadWidth + dw + (this.inBicycleLane + this.outBicycleLane) * CrossConst.bicycleLaneWidth
        // 自身左右道路长度
        this.leftWidth = this.out * CrossConst.roadWidth + dw / 2 + this.outBicycleLane * CrossConst.bicycleLaneWidth
        this.rightWidth = this.in * CrossConst.roadWidth + dw / 2 + this.inBicycleLane * CrossConst.bicycleLaneWidth
        this.width = this.leftWidth + this.rightWidth
        if (this.centerLineMode) {
          this.leftWidth = this.rightWidth = this.width / 2
        }
        break
      // 核心点位
      case 'point':
        this.point = {
          // 左顶点
          AL: {
            x: this.centerLineMode ? -this.width / 2 : -(this.out * CrossConst.roadWidth + dw / 2 + this.outBicycleLane * CrossConst.bicycleLaneWidth)
          },
          // 右顶点
          AR: {
            x: this.centerLineMode ? this.width / 2 : this.in * CrossConst.roadWidth + dw / 2 + this.inBicycleLane * CrossConst.bicycleLaneWidth
          }
        }
        if (toLeftAngle <= 90) {
          this.point.AL.y = Math.tan(angleLeft2) * this.point.AL.x - this.widthLeft / Math.cos(angleLeft2)
        } else if (toLeftAngle > 90 && toLeftAngle < 180) {
          this.point.AL.y = -Math.tan(angleLeft2) * this.point.AL.x - this.widthLeft / Math.cos(angleLeft2)
        } else {
          this.point.AL.y = -20
        }

        if (toRightAngle <= 90) {
          this.point.AR.y = -Math.tan(angleRight2) * this.point.AR.x - this.widthRight / Math.cos(angleRight2)
        } else if (toRightAngle > 90 && toRightAngle < 180) {
          this.point.AR.y = Math.tan(angleRight2) * this.point.AR.x - this.widthRight / Math.cos(angleRight2)
        }

        if (toLeftAngle >= 180) {
          this.point.AL.y = this.point.AR.y
        }
        if (toRightAngle >= 180) {
          this.point.AR.y = this.point.AL.y
        }

        if (this.entranceNum === 2) {
          this.point.AL.y = -CrossConst.roadWidth * 2.5
          this.point.AR.y = -CrossConst.roadWidth * 2.5
        }

        // eslint-disable-next-line no-case-declarations
        // const minY = this.point.AL.y < this.point.AR.y ? this.point.AL.y : this.point.AR.y
        // const MINY = Number(Math.min(this.point.AL.y , this.point.AR.y))
        this.point.CL = {
          x: this.point.AL.x,
          y: Math.min(this.point.AL.y , this.point.AR.y) - CrossConst.defaultRoadLength
        }
        this.point.CR = {
          x: this.point.AR.x,
          y: Math.min(this.point.AL.y , this.point.AR.y) - CrossConst.defaultRoadLength
        }
        // 使每个路口都垂直，所以关键点位8的高度要一致
        // let MINH =Number( Math.min(this.point.AL.y, this.point.AR.y))
        // 记录原来的B点位 BLO  BRO
        this.point.BLO = {
          x: this.point.AL.x,
          y: this.centerToManRoadDistance !== 0 ? -this.centerToManRoadDistance : this.point.AL.y - (CrossConst.manRoadLength + CrossConst.manRadianLength)
        }
        this.point.BRO = {
          x: this.point.AR.x,
          y: this.centerToManRoadDistance !== 0 ? -this.centerToManRoadDistance : this.point.AR.y - (CrossConst.manRoadLength + CrossConst.manRadianLength)
        }
        this.point.BL = {
          x: this.point.AL.x,
          y: this.centerToManRoadDistance !== 0 ? -this.centerToManRoadDistance : Math.min(this.point.AL.y, this.point.AR.y) - (CrossConst.manRoadLength + CrossConst.manRadianLength)
        }
        this.point.BR = {
          x: this.point.AR.x,
          y: this.centerToManRoadDistance !== 0 ? -this.centerToManRoadDistance : Math.min(this.point.AL.y, this.point.AR.y) - (CrossConst.manRoadLength + CrossConst.manRadianLength)
        }
        // 设备杆位置
        this.point.roadPole = {
          x: this.point.BR.x + CrossConst.walkwayWidth / 2,
          y: this.point.BR.y - CrossConst.roadPole
        }
        // 右边设备杆
        this.point.roadPoleL = {
          x: this.point.BL.x - CrossConst.walkwayWidth / 2,
          y: this.point.BL.y - CrossConst.roadPole
        }
        this.point.B1L = {
          x: this.point.BL.x - CrossConst.walkwayWidth,
          y: this.point.BL.y
        }
        this.point.B1R = {
          x: this.point.BR.x + CrossConst.walkwayWidth,
          y: this.point.BR.y
        }
        this.point.C1L = {
          x: this.point.AL.x - CrossConst.walkwayWidth,
          y: Math.min(this.point.AL.y , this.point.AR.y) - CrossConst.defaultRoadLength
        }
        this.point.C1R = {
          x: this.point.AR.x + CrossConst.walkwayWidth,
          y: Math.min(this.point.AL.y , this.point.AR.y) - CrossConst.defaultRoadLength
        }
        // 道路名称位置
        this.point.roadName = {
          x: this.point.BL.x - CrossConst.walkwayWidth - 12,
          y: this.point.BL.y
        }
        // 道路中心绿化带区域点位
        if (this.road_center_mode === RoadCenterMode.greenArea) {
          this.point.E1 = {
            x: this.point.CL.x + this.out * CrossConst.roadWidth + this.outBicycleLane * CrossConst.bicycleLaneWidth,
            y: Math.min(this.point.AL.y , this.point.AR.y) - CrossConst.defaultRoadLength
          }
          this.point.F1 = {
            x: this.point.CL.x + this.out * CrossConst.roadWidth + CrossConst.greenWidth + this.outBicycleLane * CrossConst.bicycleLaneWidth,
            y: Math.min(this.point.AL.y , this.point.AR.y) - CrossConst.defaultRoadLength
          }
          this.point.FToE = []
          let angleIndex = 0
          const dx = this.point.CL.x + this.out * CrossConst.roadWidth + this.outBicycleLane * CrossConst.bicycleLaneWidth + CrossConst.greenWidth / 2
          const dy =
            this.point.BL.y + (this.out * CrossConst.roadWidth + this.outBicycleLane * CrossConst.bicycleLaneWidth + CrossConst.greenWidth / 2) /
            (this.point.BR.x - this.point.BL.x) * (this.point.BR.y - this.point.BL.y) -
            CrossConst.greenWidth / 2
          do {
            this.point.FToE.push({
              x: dx + Math.cos(Util.toRadian(angleIndex)) * CrossConst.greenWidth / 2,
              y: dy + Math.sin(Util.toRadian(angleIndex)) * CrossConst.greenWidth / 2
            })
            angleIndex += CrossAngle.interval
          } while (angleIndex <= 180)
        }

        this.calculation('point2')
        break
      case 'point2':
        // 计算从B到D点间弧度的点。
        this.calculation('BToD')
        // 计算人行道点
        this.calculation('ALToAR')
        // 人行道点位确定
        this.calculation('pointH')
        // 计算 车道 流向点位
        this.calculation('pointLaneFlow')
        // 计算 进口 流向点位
        this.calculation('pointRoadFlow')
        // 计算待驶区的点位
        this.calculation('pointWaitArea')
        for (const prop in this.point) {
          if (Array.isArray(this.point[prop])) {
            this.correctPoint[prop] = []
            this.point[prop].forEach((info:any, index:any) => {
              if (Array.isArray(info)) {
                this.correctPoint[prop][index] = []
                info.map(it => {
                  this.correctPoint[prop][index].push(Util.pointRotateAngel(it, -this.angle, this.origin))
                })
              } else {
                this.correctPoint[prop].push(Util.pointRotateAngel(info, -this.angle, this.origin))
              }
            })
          } else {
            this.correctPoint[prop] = Util.pointRotateAngel(this.point[prop], -this.angle, this.origin)
          }
        }
        // 道路面数据计算
        this.calculation('RoadPolygon')
        this.calculation('walkwayPolygonR')
        this.calculation('walkwayPolygonL')
        this.calculation('manRoadLine')
        this.calculation('carRoadLine0')
        this.calculation('carRoadLine1')
        this.calculation('carRoadLine2')
        this.calculation('carRoadLine3')
        this.calculation('carRoadLine4')
        this.calculation('fdsplitLine')
        this.calculation('laneFlowPolygon')
        this.calculation('roadFlowPolygon')
        if (this.road_center_mode === RoadCenterMode.greenArea) {
          this.calculation('greenPolygon')
        }
        break
      // 计算从B到D点间弧度的点。
      case 'BToD':
        // eslint-disable-next-line no-case-declarations
        // const angelA = 20
        // eslint-disable-next-line no-case-declarations
        let rightPoint = {
          x: this.point.AR.x + Math.cos(angleRight2) * (CrossConst.manRoadLength + CrossConst.manRadianLength),
          y: this.point.AR.y + Math.sin(angleRight2) * (CrossConst.manRoadLength + CrossConst.manRadianLength)
        }
        if (toRightAngle <= 90) {
          rightPoint = {
            x: this.point.AR.x + Math.cos(angleRight2) * (CrossConst.manRoadLength + CrossConst.manRadianLength),
            y: this.point.AR.y - Math.sin(angleRight2) * (CrossConst.manRoadLength + CrossConst.manRadianLength)
          }
        } else if (toRightAngle > 180) {  // todo 待验证
          rightPoint = {
            x: this.point.AR.x,
            y: this.point.AR.y - Math.sin(angleRight2) * (CrossConst.manRoadLength + CrossConst.manRadianLength)
          }
        }
        this.point.BToDR = []
        this.point.B1ToD1R = []
        let { x: x1, y: y1 } = this.point.BR
        let { x: x3, y: y3 } = rightPoint
        let X1=this.point.BR.x
        let x2 = X1 + Math.cos(Util.toRadian(20 + Util.toAngle(Math.atan((y3 - y1) / (x3 - X1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - X1) * (x3 - X1)) / 2 / Math.cos(Util.toRadian(20))
        let y2 = y1 + Math.sin(Util.toRadian(20 + Util.toAngle(Math.atan((y3 - y1) / (x3 - X1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - X1) * (x3 - X1)) / 2 / Math.cos(Util.toRadian(20))
        if (toRightAngle < 180 && this.entranceNum !== 2) {
          for (let index = 0; index < 1; index += 0.01) {
            const [x, y] = Util.twoBezier(index, [X1, y1], [x2, y2], [x3, y3])
            this.point.BToDR.push({ x, y })
          }
        } else {
          this.point.BToDR = [{ x: X1, y: y1 }, { x: x3, y: y3 }]
        }
        // 边缘内容
        rightPoint = {
          x: rightPoint.x + Math.sin(angleRight2) * CrossConst.walkwayWidth,
          y: rightPoint.y - Math.cos(angleRight2) * CrossConst.walkwayWidth
        }
        this.point.rightPoint = rightPoint
        X1 += CrossConst.walkwayWidth
        x3 = rightPoint.x
        y3 = rightPoint.y
        x2 = X1 + Math.cos(Util.toRadian(20 + Util.toAngle(Math.atan((y3 - y1) / (x3 - X1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - X1) * (x3 - X1)) / 2 / Math.cos(Util.toRadian(20))
        y2 = y1 + Math.sin(Util.toRadian(20 + Util.toAngle(Math.atan((y3 - y1) / (x3 - X1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - X1) * (x3 - X1)) / 2 / Math.cos(Util.toRadian(20))
        this.point.OOO = {
          x: x2,
          y: y2
        }
        if (toRightAngle < 180 && this.entranceNum !== 2) {
          for (let index = 0; index < 1; index += 0.01) {
            const [x, y] = Util.twoBezier(index, [X1, y1], [x2, y2], [x3, y3])
            this.point.B1ToD1R.push({ x, y })
          }
        } else {
          this.point.B1ToD1R = [{ x: X1, y: y1 }, { x: x3, y: y3 }]
        }
        break
      // ALToAR 和 BLToBR
      case 'ALToAR':
        this.point.ALToAR = []
        this.point.BLToBR = []
        // eslint-disable-next-line prefer-destructuring
        x = this.point.BL.x
        dy = (this.point.BR.y - this.point.BL.y) / this.width * CrossConst.manRoadInterval
        // eslint-disable-next-line prefer-destructuring
        y = this.point.BL.y
        do {
          this.point.ALToAR.push({ x, y: y + CrossConst.manRoadLength })
          this.point.BLToBR.push({ x, y })
          x += CrossConst.manRoadInterval
          y += dy
        } while (x <= this.point.BR.x)
        break
      case 'pointH':
        dy = (this.point.BR.y - this.point.BL.y) / (this.point.BR.x - this.point.BL.x) * CrossConst.roadWidth
        // 车道数据
        this.point.H0 = []
        this.point.H1 = []
        this.point.H2 = []
        for (let i = 0; i < (this.in + this.out + 1); i++) {
          switch (this.road_center_mode) {
            case RoadCenterMode.doubleYellowLine:
              const dInterval = (this.point.BR.y - this.point.BL.y) / (this.point.BR.x - this.point.BL.x) * CrossConst.doubleYellowLineInterval
              x = this.point.BR.x - CrossConst.roadWidth * i - (i < this.in ? 0 : CrossConst.doubleYellowLineInterval) - this.inBicycleLane * CrossConst.bicycleLaneWidth
              y = this.point.BR.y - CrossConst.manCarInterval - dy * i - (i < this.in ? 0 : dInterval) - dy * this.inBicycleLane * CrossConst.bicycleLaneWidth / CrossConst.roadWidth
              break
            case RoadCenterMode.greenArea:
              const dGreeny = (this.point.BR.y - this.point.BL.y) / (this.point.BR.x - this.point.BL.x) * CrossConst.greenWidth
              x = this.point.BR.x - CrossConst.roadWidth * i - (i < this.in ? 0 : CrossConst.greenWidth) - this.inBicycleLane * CrossConst.bicycleLaneWidth
              y = this.point.BR.y - CrossConst.manCarInterval - dy * i - (i < this.in ? 0 : dGreeny) - dy * this.inBicycleLane * CrossConst.bicycleLaneWidth / CrossConst.roadWidth
              break
            case RoadCenterMode.singleYellowLine:
              x = this.point.BR.x - CrossConst.roadWidth * i - this.inBicycleLane * CrossConst.bicycleLaneWidth
              y = this.point.BR.y - CrossConst.manCarInterval - dy * i - dy * this.inBicycleLane * CrossConst.bicycleLaneWidth / CrossConst.roadWidth
              break
          }
          this.point.H0.push({
            x: x,
            y: y
          })
          this.point.H1.push({
            x: x,
            y: y - CrossConst.defaultSolidRoadLength
          })
          this.point.H2.push({
            x: x,
            y: this.point.CR.y
          })
          if ((this.road_center_mode === RoadCenterMode.greenArea || this.road_center_mode === RoadCenterMode.doubleYellowLine) &&
            i === this.in - 1) {
            switch (this.road_center_mode) {
              case RoadCenterMode.doubleYellowLine:
                x = this.point.BR.x - CrossConst.roadWidth * (i + 1) - this.inBicycleLane * CrossConst.bicycleLaneWidth
                y = this.point.BR.y - CrossConst.manCarInterval - dy * (i + 1) - dy * this.inBicycleLane * CrossConst.bicycleLaneWidth / CrossConst.roadWidth
                break
              case RoadCenterMode.greenArea:
                x = this.point.BR.x - CrossConst.roadWidth * (i + 1) - this.inBicycleLane * CrossConst.bicycleLaneWidth
                y = this.point.BR.y - CrossConst.manCarInterval - dy * (i + 1) - dy * this.inBicycleLane * CrossConst.bicycleLaneWidth / CrossConst.roadWidth
                break
            }
            this.point.H0.push({
              x: x,
              y: y
            })
            this.point.H1.push({
              x: x,
              y: y - CrossConst.defaultSolidRoadLength
            })
            this.point.H2.push({
              x: x,
              y: this.point.CR.y
            })
          }
        }
        break
      // 计算每个车道流向绘制的点位
      case 'pointLaneFlow':
        this.point.pointLaneFlow = []
        this.motor_lanes.forEach((it:any, i:any) => {
          // 车道里面的流向
          const laneFlowPoints = getLaneFlowPoint(it.id, it.lane_flow, CrossConst, this,null)
          this.point.pointLaneFlow.push(laneFlowPoints)

          // 左转待行驶区域的流向
          if (it.has_waiting_area && (it.lane_flow === 1 || it.lane_flow === 2)) {
            const waitAreaFlowPoints = getLaneFlowPoint(it.id, it.lane_flow, CrossConst, this, 'waitAreaFlow')
            const waitAreaPoints = getLaneFlowPoint(it.id, it.lane_flow, CrossConst, this, 'waitArea')
            this.point.pointLaneFlow.push(waitAreaFlowPoints)
            this.point.pointLaneFlow.push(waitAreaPoints)
          }
        })
        break
      // 计算流向点位
      case 'pointRoadFlow':
        this.point.pointRoadFlow = []
        this.point.pointRoadFlowText = []
        for (let i = 1; i <= 4; i++) {
          const { roadFlowPoints, flowTextPoint } = getRoadFlowPoint(i, CrossConst, this)
          this.point.pointRoadFlow.push(roadFlowPoints)
          this.point.pointRoadFlowText.push(flowTextPoint)
        }
        break
      // 计算待驶区的点位
      case 'pointWaitArea':
        this.point.pointWaitArea = []
        this.motor_lanes.forEach((it:any, i:any) => {
          // 左转待行驶区域的流向
          if (it.has_waiting_area && (it.lane_flow === 1 || it.lane_flow === 2)) {
            const waitAreaPoints = getWaitAreaPoint(it.id, it.lane_flow, CrossConst, this)
            this.point.pointWaitArea.push(waitAreaPoints)
          }
        })
        break
      // 道路面数据计算
      case 'RoadPolygon':
        this.polygonData[prop] = []
        for (let i = this.correctPoint.BToDR.length - 1; i >= 0; i--) {
          const point = this.correctPoint.BToDR[i]
          this.polygonData[prop].push([point.x, point.y])
        }
        this.polygonData[prop].push([this.correctPoint.CR.x, this.correctPoint.CR.y])
        this.polygonData[prop].push([this.correctPoint.CL.x, this.correctPoint.CL.y])
        this.polygonData[prop].push([this.correctPoint.BL.x, this.correctPoint.BL.y])
        // debugger
        break
      // 行人通道面积-- 右
      case 'walkwayPolygonR':
        this.polygonData[prop] = []
        for (let i = this.correctPoint.BToDR.length - 1; i > 0; i--) {
          this.polygonData[prop].push([this.correctPoint.BToDR[i].x, this.correctPoint.BToDR[i].y])
        }
        this.polygonData[prop].push([this.correctPoint.CR.x, this.correctPoint.CR.y])
        this.polygonData[prop].push([this.correctPoint.C1R.x, this.correctPoint.C1R.y])
        this.correctPoint.B1ToD1R.map((info:any) => {
          this.polygonData[prop].push([info.x, info.y])
        })
        break
      // 行人通道面积-- 左
      case 'walkwayPolygonL':
        this.polygonData[prop] = []
        this.polygonData[prop].push([this.correctPoint.B1L.x, this.correctPoint.B1L.y])
        this.polygonData[prop].push([this.correctPoint.C1L.x, this.correctPoint.C1L.y])
        this.polygonData[prop].push([this.correctPoint.CL.x, this.correctPoint.CL.y])
        this.polygonData[prop].push([this.correctPoint.BL.x, this.correctPoint.BL.y])
        break
      // 绿化地
      case 'greenPolygon':
        this.polygonData[prop] = []
        this.correctPoint.FToE.map((info:any) => {
          this.polygonData[prop].push([info.x, info.y])
        })
        this.polygonData[prop].push([this.correctPoint.E1.x, this.correctPoint.E1.y])
        this.polygonData[prop].push([this.correctPoint.F1.x, this.correctPoint.F1.y])
        break
      // 人行道线路
      case 'manRoadLine':
        this.lineData[prop] = []
        for (let i = 0, len = this.correctPoint.ALToAR.length; i < len; i++) {
          this.lineData[prop].push([[this.correctPoint.ALToAR[i].x, this.correctPoint.ALToAR[i].y], [this.correctPoint.BLToBR[i].x, this.correctPoint.BLToBR[i].y]])
        }
        break
      // 车道边线
      case 'carRoadLine0':
        this.lineData[prop] = []
        // 道路边线
        this.lineData[prop].push([
          [this.correctPoint.H2[0].x, this.correctPoint.H2[0].y],
          [this.correctPoint.H0[0].x, this.correctPoint.H0[0].y]
        ])
        this.lineData[prop].push([
          [this.correctPoint.H2[this.correctPoint.H2.length - 1].x, this.correctPoint.H2[this.correctPoint.H2.length - 1].y],
          [this.correctPoint.H0[this.correctPoint.H2.length - 1].x, this.correctPoint.H0[this.correctPoint.H2.length - 1].y]
        ])
        break
      // 车道线路  白实线部分
      case 'carRoadLine1':
        this.lineData[prop] = []
        for (let i = 0, len = this.in; i < len; i++) {
          if (i) {
            const right_lane_type = this.motor_lanes[this.in - i].lane_type
            const left_lane_type = this.motor_lanes[this.in - (i + 1)] ? this.motor_lanes[this.in - (i + 1)].lane_type : 0
            // 特殊车道类型公交车道/潮汐车道不画侧边停车线         
            if (right_lane_type === 1 || right_lane_type === 2 || left_lane_type === 1 || left_lane_type === 2) {
              this.lineData[prop].push([
                [this.correctPoint.H0[i].x, this.correctPoint.H0[i].y],
                [this.correctPoint.H0[i + 1].x, this.correctPoint.H0[i + 1].y]
              ])
            } else {
              this.lineData[prop].push([
                [this.correctPoint.H1[i].x, this.correctPoint.H1[i].y],
                [this.correctPoint.H0[i].x, this.correctPoint.H0[i].y],
                [this.correctPoint.H0[i + 1].x, this.correctPoint.H0[i + 1].y],
                [this.correctPoint.H0[i].x, this.correctPoint.H0[i].y]
              ])
            }
          } else {
            this.lineData[prop].push([
              [this.correctPoint.H0[i].x, this.correctPoint.H0[i].y],
              [this.correctPoint.H0[i + 1].x, this.correctPoint.H0[i + 1].y]
            ])
          }
        }
        break
      //  车道线路  白虚线部分
      case 'carRoadLine2':
        this.lineData[prop] = []
        for (let i = 1, len = this.correctPoint.H0.length; i < len; i++) {
          // if (this.road_center_mode === RoadCenterMode.doubleYellowLine ||
          //   this.road_center_mode === RoadCenterMode.greenArea) {
          //   if (i === this.in + 1) {
          //     continue
          //   }
          // }        
          if (i === this.in) {
            continue
          }
          if (i < this.in + 1) {
            const right_lane_type = this.motor_lanes[this.in - i].lane_type
            const left_lane_type = this.motor_lanes[this.in - (i + 1)] ? this.motor_lanes[this.in - (i + 1)].lane_type : 0
            // 特殊车道1：潮汐/2公交 不用画虚线
            if (right_lane_type === 1 || right_lane_type === 2 || left_lane_type === 1 || left_lane_type === 2) {
              continue
            }
            const lineDate = Util.getSplitPoint(this.correctPoint.H1[i], this.correctPoint.H2[i], CrossConst.dashLength)
            this.lineData[prop] = this.lineData[prop].concat(lineDate)
          } else {
            const lineDate = Util.getSplitPoint(this.correctPoint.H0[i], this.correctPoint.H2[i], CrossConst.dashLength)
            this.lineData[prop] = this.lineData[prop].concat(lineDate)
          }
        }
        break
      //  车道线路  中间部分，双实线、实线、绿化带
      case 'carRoadLine3':
        this.lineData[prop] = []
        // 根据中心区域不同类型设置宽度
        switch (this.road_center_mode) {
          case RoadCenterMode.greenArea:
            this.lineData[prop].push([
              [this.correctPoint.H0[this.in].x, this.correctPoint.H0[this.in].y],
              [this.correctPoint.H2[this.in].x, this.correctPoint.H2[this.in].y],
              [this.correctPoint.H2[this.in + 1].x, this.correctPoint.H2[this.in + 1].y],
              [this.correctPoint.H0[this.in + 1].x, this.correctPoint.H0[this.in + 1].y]
            ])
            break
          case RoadCenterMode.doubleYellowLine:
            this.lineData[prop].push([
              [this.correctPoint.H0[this.in].x, this.correctPoint.H0[this.in].y],
              [this.correctPoint.H2[this.in].x, this.correctPoint.H2[this.in].y]
            ])
            this.lineData[prop].push([
              [this.correctPoint.H0[this.in + 1].x, this.correctPoint.H0[this.in + 1].y],
              [this.correctPoint.H2[this.in + 1].x, this.correctPoint.H2[this.in + 1].y]
            ])
            break
          case RoadCenterMode.singleYellowLine:
            this.lineData[prop].push([
              [this.correctPoint.H0[this.in].x, this.correctPoint.H0[this.in].y],
              [this.correctPoint.H2[this.in].x, this.correctPoint.H2[this.in].y]
            ])
            break
        }
        break
      // 特殊黄色车道线  公交专用车道  潮汐车道
      case 'carRoadLine4':
        this.lineData[prop] = []
        this.motor_lanes.forEach((it:any, i:any) => {
          const leftIndex = this.in - i // 车道左边index
          const rightIndex = this.in - (i + 1) // 车道右边index
          // 潮汐车道
          if (it.lane_type === 1) {
            const leftH0 = Util.pointRotateAngel({ x: this.point.H0[leftIndex].x + 3, y: this.point.H0[leftIndex].y }, -this.angle, this.origin)
            const leftH2 = Util.pointRotateAngel({ x: this.point.H2[leftIndex].x + 3, y: this.point.H2[leftIndex].y }, -this.angle, this.origin)
            const rightH0 = Util.pointRotateAngel({ x: this.point.H0[rightIndex].x - 3, y: this.point.H0[rightIndex].y }, -this.angle, this.origin)
            const rightH2 = Util.pointRotateAngel({ x: this.point.H2[rightIndex].x - 3, y: this.point.H2[rightIndex].y }, -this.angle, this.origin)
            const lineDate1 = Util.getSplitPoint(this.correctPoint.H0[leftIndex], this.correctPoint.H2[leftIndex], CrossConst.tidalDashLength)
            const lineDate2 = Util.getSplitPoint(leftH0, leftH2, CrossConst.tidalDashLength)
            const lineDate3 = Util.getSplitPoint(this.correctPoint.H0[rightIndex], this.correctPoint.H2[rightIndex], CrossConst.tidalDashLength)
            const lineDate4 = Util.getSplitPoint(rightH0, rightH2, CrossConst.tidalDashLength)
            this.lineData[prop] = this.lineData[prop].concat(lineDate1).concat(lineDate2).concat(lineDate3).concat(lineDate4)
          } else if (it.lane_type === 2) { // 公交专用车道
            const lineDate1 = Util.getSplitPoint(this.correctPoint.H0[leftIndex], this.correctPoint.H2[leftIndex], CrossConst.busDashLength)
            const lineDate2 = Util.getSplitPoint(this.correctPoint.H0[rightIndex], this.correctPoint.H2[rightIndex], CrossConst.busDashLength)
            this.lineData[prop] = this.lineData[prop].concat(lineDate1).concat(lineDate2)
          }
        })
        break
      // 辅道分割线
      case 'fdsplitLine':
        this.lineData[prop] = []
        const fdLaneNum = this.motor_lanes.findIndex((it:any) => { return it.lane_type === 4 })
        if (fdLaneNum > -1) {
          const { x: x1, y: y1 } = this.correctPoint.H0[this.in - fdLaneNum]
          const { x: x2, y: y2 } = this.correctPoint.H2[this.in - fdLaneNum]
          this.lineData[prop].push([[x1, y1], [x2, y2]])
        }
        break
      // 车道流向 
      case 'laneFlowPolygon':
        this.polygonData[prop] = []
        this.correctPoint.pointLaneFlow.forEach((it:any, i:any) => {
          this.polygonData[prop][i] = []
          it.forEach((itt:any) => {
            this.polygonData[prop][i].push([itt.x, itt.y])
          })
        })
        break
      // 进口流向 
      case 'roadFlowPolygon':
        this.polygonData[prop] = []
        this.correctPoint.pointRoadFlow.forEach((it:any, i:any) => {
          this.polygonData[prop][i] = []
          it.forEach((itt:any) => {
            this.polygonData[prop][i].push([itt.x, itt.y])
          })
        })
        break
      default:
        break
    }
  }
}

/**
 * @description 匝道方向对象
 * @author wsx
 * @Date  2021-10-20 13:20:50
 */
class CrossRampObject {
  en_id:any
  name:any
  in:any
  motor_lanes:any
  road_center_mode:any
  degree:any
  angle:any
  origin:any
  secondIn:any
  drawOption:any
  baseWidth:any
  clientWidth:any
  clientHeight:any
  point:any
  correctPoint:any
  pointData:any
  lineData:any
  polygonData:any
  constructor(param:any) {
    const option = Object.assign({
      en_id: 1,
      in: 2,
      name: '道路',
      origin: [0, 0],
      degree: 0, //道路角度 根据os提供的角度
      angle: 0, //道路角度 根据os提供的角度进行转换
      road_center_mode: RoadCenterMode.singleYellowLine,
      motor_lanes: [], // 进口车道流向
      secondIn: 3,
      baseWidth: 800,
      clientWidth: 800,
      clientHeight: 800
    }, param)
    // 进口id
    this.en_id = option.en_id
    // 进口名称
    this.name = option.name
    // 进路口车道数
    this.in = option.motor_lanes.length
    // 车道流向
    this.motor_lanes = option.motor_lanes
    // 间隔线类型
    this.road_center_mode = option.road_center_mode
    this.degree = this.getDegreeByEnId(this.en_id)
    // 路口方向相对正南方向偏移角度  （ -360 / CrossConst.defaultRoadNumber, 360 / CrossConst.defaultRoadNumber ）
    this.angle = Util.degreeToAngle(this.degree)
    this.origin = option.origin
    this.secondIn = option.secondIn
    this.drawOption = option.drawOption
    this.baseWidth = option.baseWidth
    this.clientWidth = option.baseWidth
    this.clientHeight = option.clientHeight

    // 核心点位
    this.point = {}
    // 转换正后的坐标
    this.correctPoint = {}
    // 准确计算后的点线面数据
    this.pointData = {}
    this.lineData = {}
    this.polygonData = {}

    this.calculation('point')
  }
  getDegreeByEnId (en_id:any):void {
    const degreeMap:any = {
      1: 270,
      2: 90,
      3: 75
    }
    return degreeMap[en_id]
  }
  // 计算关键点位数据
  calculation (prop:any):void {
    let dw = 0
    switch (this.road_center_mode) {
      case RoadCenterMode.doubleYellowLine:
        dw = CrossConst.doubleYellowLineInterval
        break
      case RoadCenterMode.greenArea:
        dw = CrossConst.greenWidth
        break
      case RoadCenterMode.singleYellowLine:
        dw = 0
        break
    }
    switch (prop) {
      case 'point':
        if (this.en_id === 1) {
          const x = CrossConst.roadWidth * (this.secondIn) + dw
          const x2 = CrossConst.roadWidth * (this.secondIn + this.in) + dw
          const y = this.clientHeight / 2
          this.point = {
            AL: { x: x, y: y },
            AR: { x: x2, y: y },
            BL: { x: x, y: -y },
            BR: { x: x2, y: -y },
          }
        } else if (this.en_id === 2) {
          const x = CrossConst.roadWidth * this.in
          const y = this.clientHeight / 2
          this.point = {
            AL: { x: -x, y: y },
            AR: { x: 0, y: y },
            BL: { x: -x, y: -y },
            BR: { x: 0, y: -y },
          }
        } else if (this.en_id === 3) {
          const x = CrossConst.roadWidth * this.in / 2
          const y = (CrossConst.roadWidth * this.in / 2) / Math.tan(this.angle * Math.PI / 180)
          this.point = {
            AL: { x: -x, y: -y },
            AR: { x: x, y: -y },
            BL: { x: -x, y: -y - CrossConst.defaultRoadLength },
            BR: { x: x, y: -y - CrossConst.defaultRoadLength },
          }
        }
        // 道路名称位置
        this.point.roadName = {
          x: this.point.AR.x + 12,
          y: this.point.AR.y
        }
        this.calculation('point2')
        break
      case 'point2':
        // 计算人行道点位
        this.calculation('pointH')
        // 计算车道流向点位
        this.calculation('pointLaneFlow')
        // 计算进口流向点位
        this.calculation('pointRoadFlow')
        for (const prop in this.point) {
          if (Array.isArray(this.point[prop])) {
            this.correctPoint[prop] = []
            this.point[prop].forEach((info:any, index:any) => {
              if (Array.isArray(info)) {
                this.correctPoint[prop][index] = []
                info.map(it => {
                  this.correctPoint[prop][index].push(Util.pointRotateAngel(it, -this.angle, this.origin))
                })
              } else {
                this.correctPoint[prop].push(Util.pointRotateAngel(info, -this.angle, this.origin))
              }
            })
          } else {
            this.correctPoint[prop] = Util.pointRotateAngel(this.point[prop], -this.angle, this.origin)
          }
        }
        // 道路面数据计算
        this.calculation('RoadPolygon')
        // 车道边线
        this.calculation('carRoadLine0')
        // 车道线路  白实线部分
        this.calculation('carRoadLine1')
        //  车道线路  白虚线部分
        this.calculation('carRoadLine2')
        //  车道线路  中间部分，双实线、实线、绿化带
        this.calculation('carRoadLine3')
        this.calculation('laneFlowPolygon')
        this.calculation('roadFlowPolygon')
        // 补充匝道面数据        
        this.calculation('poly')
        this.calculation('line')
        break
      case 'pointH':
        let x = 0; let y = 0;
        this.point.H0 = []
        this.point.H1 = []
        this.point.H2 = []
        for (let i = 0; i < (this.in + 1); i++) {
          this.point.H0.push({
            x: this.point.AR.x - i * CrossConst.roadWidth,
            y: this.point.AR.y
          })
          this.point.H1.push({
            x: this.point.BR.x - i * CrossConst.roadWidth,
            y: this.point.BR.y
          })
          this.point.H2.push({
            x: this.point.BR.x - i * CrossConst.roadWidth,
            y: this.point.BR.y
          })

          if ((this.road_center_mode === RoadCenterMode.greenArea || this.road_center_mode === RoadCenterMode.doubleYellowLine) &&
            i === this.in && this.en_id === 1) {
            x = this.point.AR.x - i * CrossConst.roadWidth - dw
            y = this.point.AR.y
            this.point.H0.push({
              x: x,
              y: this.point.AR.y
            })
            this.point.H1.push({
              x: x,
              y: this.point.BR.y
            })
            this.point.H2.push({
              x: x,
              y: this.point.BR.y
            })
          }
        }
        break
      // 计算每个车道流向绘制的点位
      case 'pointLaneFlow':
        this.point.pointLaneFlow = []
        this.motor_lanes.forEach((it:any, i:any) => {
          const laneFlowPoints = getLaneFlowPoint(it.id, it.lane_flow, CrossConst, this,null)
          this.point.pointLaneFlow.push(laneFlowPoints)
        })
        break
      // 计算流向点位
      case 'pointRoadFlow':
        this.point.pointRoadFlow = []
        this.point.pointRoadFlowText = []
        for (let i = 1; i <= 14; i++) {
          const { roadFlowPoints, flowTextPoint } = getRoadFlowPoint(i, CrossConst, this)
          this.point.pointRoadFlow.push(roadFlowPoints)
          this.point.pointRoadFlowText.push(flowTextPoint)
        }
        break
      case 'RoadPolygon':
        this.polygonData[prop] = []
        if (this.en_id === 3) {
          this.polygonData[prop].push([0, CrossConst.roadWidth * 6])
          this.polygonData[prop].push([this.correctPoint.AR.x, this.correctPoint.AR.y])
          this.polygonData[prop].push([this.correctPoint.BR.x, this.correctPoint.BR.y])
          this.polygonData[prop].push([this.correctPoint.BL.x, this.correctPoint.BL.y])
          this.polygonData[prop].push([this.correctPoint.AL.x, this.correctPoint.AL.y])
        } else {
          this.polygonData[prop].push([this.correctPoint.AL.x, this.correctPoint.AL.y])
          this.polygonData[prop].push([this.correctPoint.AR.x, this.correctPoint.AR.y])
          this.polygonData[prop].push([this.correctPoint.BR.x, this.correctPoint.BR.y])
          this.polygonData[prop].push([this.correctPoint.BL.x, this.correctPoint.BL.y])
        }
      // 车道边线
      case 'carRoadLine0':
        this.lineData[prop] = []
        if (this.en_id === 1) {
          this.lineData[prop].push([
            [this.correctPoint.H1[0].x, this.correctPoint.H1[0].y],
            [this.correctPoint.H0[0].x, this.correctPoint.H0[0].y]
          ])
        } else if (this.en_id === 2) {
          this.lineData[prop].push([
            [this.correctPoint.H0[0].x, this.correctPoint.H0[0].y],
            [this.correctPoint.H1[0].x, CrossConst.roadWidth * 6]
          ])
          this.lineData[prop].push([
            [this.correctPoint.H0[0].x, -CrossConst.roadWidth],
            [this.correctPoint.H1[0].x, this.correctPoint.H1[0].y]
          ])
        } else if (this.en_id === 3) {
          this.lineData[prop].push([
            [this.correctPoint.H0[this.in].x, this.correctPoint.H0[this.in].y],
            [this.correctPoint.H1[this.in].x, this.correctPoint.H1[this.in].y]
          ])
          this.lineData[prop].push([
            [0, CrossConst.roadWidth * 6],
            [this.correctPoint.H0[0].x, this.correctPoint.H0[0].y]
          ])
          this.lineData[prop].push([
            [this.correctPoint.H0[0].x, this.correctPoint.H0[0].y],
            [this.correctPoint.H1[0].x, this.correctPoint.H1[0].y]
          ])
        }
        break
      // 车道线路  白实线部分
      case 'carRoadLine1':
        this.lineData[prop] = []
        if (this.en_id === 3) {
          this.lineData[prop].push([
            [this.correctPoint.H0[0].x, this.correctPoint.H0[0].y],
            [this.correctPoint.H0[this.in].x, this.correctPoint.H0[this.in].y]
          ])
        }
        break
      //  车道线路  白虚线部分
      case 'carRoadLine2':
        this.lineData[prop] = []
        for (let i = 1; i < this.in; i++) {
          this.lineData[prop].push([
            [this.correctPoint.H0[i].x, this.correctPoint.H0[i].y],
            [this.correctPoint.H1[i].x, this.correctPoint.H1[i].y]
          ])
        }
        if (this.en_id === 3) {
          this.lineData[prop].push([
            [this.correctPoint.H0[this.in].x, -CrossConst.roadWidth],
            [this.correctPoint.H0[this.in].x, CrossConst.roadWidth * 6],
          ])
        }
        break
      //  车道线路  中间部分，双实线、实线、绿化带
      case 'carRoadLine3':
        this.lineData[prop] = []
        // 根据中心区域不同类型设置宽度
        if (this.en_id == 1) {
          switch (this.road_center_mode) {
            case RoadCenterMode.greenArea:
              this.lineData[prop].push([
                [this.correctPoint.H0[this.in].x, this.correctPoint.H0[this.in].y],
                [this.correctPoint.H2[this.in].x, this.correctPoint.H2[this.in].y],
                [this.correctPoint.H2[this.in + 1].x, this.correctPoint.H2[this.in + 1].y],
                [this.correctPoint.H0[this.in + 1].x, this.correctPoint.H0[this.in + 1].y]
              ])
              break
            case RoadCenterMode.doubleYellowLine:
              this.lineData[prop].push([
                [this.correctPoint.H0[this.in].x, this.correctPoint.H0[this.in].y],
                [this.correctPoint.H2[this.in].x, this.correctPoint.H2[this.in].y]
              ])
              this.lineData[prop].push([
                [this.correctPoint.H0[this.in + 1].x, this.correctPoint.H0[this.in + 1].y],
                [this.correctPoint.H2[this.in + 1].x, this.correctPoint.H2[this.in + 1].y]
              ])
              break
            case RoadCenterMode.singleYellowLine:
              this.lineData[prop].push([
                [this.correctPoint.H0[this.in].x, this.correctPoint.H0[this.in].y],
                [this.correctPoint.H1[this.in].x, this.correctPoint.H1[this.in].y]
              ])
              break
          }
        }
        break
      // 车道流向 
      case 'laneFlowPolygon':
        this.polygonData[prop] = []
        this.correctPoint.pointLaneFlow.forEach((it:any, i:any) => {
          this.polygonData[prop][i] = []
          it.forEach((itt:any) => {
            this.polygonData[prop][i].push([itt.x, itt.y])
          })
        })
        break
      // 进口流向 
      case 'roadFlowPolygon':
        this.polygonData[prop] = []
        this.correctPoint.pointRoadFlow.forEach((it:any, i:any) => {
          this.polygonData[prop][i] = []
          it.forEach((itt:any) => {
            this.polygonData[prop][i].push([itt.x, itt.y])
          })
        })
        break
      case 'poly':
        this.polygonData.walkwayPolygonL = []
        this.polygonData.walkwayPolygonR = []
        break
      case 'line':
        this.lineData.manRoadLine = []
        break
      case 'greenPolygon':
        this.polygonData.greenPolygon = []
        break
    }
  }
}

export { baseWidth, CrossConst, CrossInfo, RoadCenterMode, Util }
