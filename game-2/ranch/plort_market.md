# 结晶市场（Plort Market）

> 来源：游戏内《史莱姆百科》（本地化文本 Pedia / PediaPage 表）+ fandom（Plort Market (二代) 页面，价格）
> 条目ID：plort_market（t.plort_market / m.intro.plort_market / m.desc.plort_market）
> 适用：二代
> 补充核验：1.3.0 本体代码与实机记录，2026-10-14；下方机制要点与资源页同步。

## 名称
结晶市场（Plort Market）

**原文参考：**

> Plort Market

## 简介
喂食史莱姆。收集结晶。换钱。

**原文参考：**

> Feed slimes. Collect plorts. Get paid.

## 内容
结晶市场是连接着全宇宙结晶买家与卖家的大型网络。牧场主们可以使用牧场上的结晶市场终端机出售结晶。将结晶射入机器之后，牧场主会立即按照当时市价获得报酬。

结晶市场的报价会上下波动，聪明的牧场主会把某些特定的结晶囤上几天，等价格飙升后再大批出售。这一点对稀有结晶尤为适用。

**原文参考：**

> The plort market is a network of buyers and sellers of plorts across the galaxy. Ranchers use plort market machines on their ranch to send plorts to the market for sale. Ranchers are paid immediately when depositing plorts at the plort's current market value.

> Plort market values fluctuate and some of the more savvy ranchers will hoard certain plorts for days when sale prices are high, especially rare plorts.

## 补充资料（fandom）

**说明**：结晶市场是温室内的自带建筑，无需购买；用于出售结晶换取新币。完整价格表与机制见 [结晶与结晶市场](../resources/plorts.md)。

## 使用与结算要点（1.3.0 核验）

- **当日报价缓存至午夜重新定价**；卖出只增加该种结晶的饱和度，不会每卖一颗就当场降价。
- **整数单价先取整，再乘数量**；同一种结晶、同一报价下逐颗和批量收益一致，没有普通市场的批量折扣或溢价。
- 市场终端和无人机站点量子云“发送到市场”共用该种结晶的同一份饱和度；不同种类的结晶各自计数。
- 每次正常日恢复先把饱和度 **乘 0.75**，再计算新报价；不是每天清零，也不是固定减 0.25。
- 本体午夜闭市约 **00:00～00:05**；普通终端投放在闭市阶段拒收，不登记出售或增加饱和度。
- 已验证同日保存回菜单后重读恢复当天价、前日价与饱和度，不额外衰减或靠重读重抽正常保存的报价。
- 新档初始化先写 50% 满值、再乘一次 0.75，实际进入第 1 天时为 **37.5% 满值**；首日报价仍受噪声影响。
- 囤货等高报价再出售是选择出售时机，不是批量路径本身会额外更赚。噪声公式、初值、饱和超限和适用边界统一以 [资源页机制总结](../resources/plorts.md) 为准。
