/* eslint-disable */
let phaseMap = new Map();
phaseMap.set(1, 'A');
phaseMap.set(2, 'B');
phaseMap.set(3, 'C');
phaseMap.set(4, 'D');
phaseMap.set(5, 'E');
phaseMap.set(6, 'F');
phaseMap.set(7, 'G');
phaseMap.set(8, 'H');
phaseMap.set(9, 'I');
phaseMap.set(10, 'J');
phaseMap.set(11, 'K');
phaseMap.set(12, 'L');
phaseMap.set(13, 'M');
phaseMap.set(14, 'N');
phaseMap.set(15, 'O');
phaseMap.set(16, 'P');
phaseMap.set(17, 'Q');
phaseMap.set(18, 'R');
phaseMap.set(19, 'S');
phaseMap.set(20, 'T');
phaseMap.set(21, 'U');
phaseMap.set(22, 'V');
phaseMap.set(23, 'W');
phaseMap.set(24, 'X');
phaseMap.set(25, 'Y');
phaseMap.set(26, 'Z');
phaseMap.set(27, 'a');
phaseMap.set(28, 'b');
phaseMap.set(29, 'c');
phaseMap.set(30, 'd');
phaseMap.set(31, 'e');
phaseMap.set(32, 'f');

// 流向类型字典
let enterFlowMap = new Map();
enterFlowMap.set(1, "左转");
enterFlowMap.set(2, "直行");
enterFlowMap.set(3, "右转");
enterFlowMap.set(4, "人行");
enterFlowMap.set(5, "左直");
enterFlowMap.set(6, "直右");
enterFlowMap.set(7, "通行");
enterFlowMap.set(8, "掉头");
enterFlowMap.set(9, "左掉头");
enterFlowMap.set(10, "人行1");
enterFlowMap.set(11, "人行2");
enterFlowMap.set(12, "非机动车左");
enterFlowMap.set(13, "非机动车直");
enterFlowMap.set(14, "非机动车左直");
enterFlowMap.set(32, "可变车道");

let enterDirectionMap = new Map();
enterDirectionMap.set(1, "东");
enterDirectionMap.set(2, "南");
enterDirectionMap.set(3, "西");
enterDirectionMap.set(4, "北");
enterDirectionMap.set(5, "方向1");
enterDirectionMap.set(6, "方向2");
enterDirectionMap.set(7, "方向3");
enterDirectionMap.set(8, "方向4");
enterDirectionMap.set(9, "方向5");
enterDirectionMap.set(10, "方向6");

export {
  phaseMap,
  enterFlowMap,
  enterDirectionMap
};