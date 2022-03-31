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