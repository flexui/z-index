import * as Utils from '@flexui/utils';

// 默认 z-index 值
var Z_INDEX = 1024;

/**
 * 设置初始 z-index 值
 *
 * @export
 * @param {Number} value
 * @returns {Number} Z_INDEX
 */
export function setZIndex(value) {
  if (Utils.number(value) && value > 0 && value !== Infinity) {
    Z_INDEX = value;
  }

  return Z_INDEX;
}

/**
 * 获取当前 z-index 值
 *
 * @export
 * @param {Boolean} increment 是否自增
 * @returns {Number} Z_INDEX
 */
export function getZIndex(increment) {
  return increment ? Z_INDEX++ : Z_INDEX;
}
