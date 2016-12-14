import * as Utils from '@flexui/utils';

// 默认 z-index 值
export var Z_INDEX = 1024;

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
