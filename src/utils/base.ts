/**
 *
 * @param a_fun a接口promise对象
 * @param payload 参数
 */
export async function validate(a_fun: any, payload: any) {
  // 获取后端接口
  const res = await a_fun(payload);
  /**
   * 判断是否有token,这边我处理为没有token
   */
  const is_has_token = false;
  if (!is_has_token) {
    // 调取获取token的接口
    // const res1 = await get_token();
    //token获取成功后
    const res2 = await a_fun(payload);
    return res2;
  }
}


// 分香蕉

export const calculate_num = () => {
  let fen = 0;
  let old;
  while (true) {
    old = fen; // 存储旧值
    const a = fen % 5; // 1
    fen = fen - parseInt((fen / 5).toString()) - 1;
    const b = fen % 5; // 2
    fen = fen - parseInt((fen / 5).toString()) - 2;
    const c = fen % 5; // 3
    fen = fen - parseInt((fen / 5).toString()) - 3;
    const d = fen % 5; // 4
    fen = fen - parseInt((fen / 5).toString()) - 4;
    const e = fen % 5; // 0
    if (a === 1 && b === 2 && c === 3 && d === 4 && e === 0 && fen / 5 > 0) {
      // 找到值返回
      console.log(old, 'num');
      break;
    }
    fen = ++old; // 加一
  }
};

// const get_num = (array: []) => {
//   let x = 0, y = 0;
//   for (const i in array) {
//     Number(i) % 2 === 0 ? x += array[i] : y += array[i];
//   }
//   return x > y ? x : y
// };
// get_num([1,66])

