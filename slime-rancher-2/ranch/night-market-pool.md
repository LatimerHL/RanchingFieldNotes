# 夜市完整商品池

> 版本：《史莱姆牧场2》1.3.0；2026-10-12并入。价格、获取配置与条件来自客户端固定商品表，名称采用官方简中。
> 营业、解锁与上架机制见 [夜市](night-market.md)；立购坊总览见 [立购坊](prontomart.md)。

## 范围与读表规则

- 共 **44 条定义**，不是任意存档当前同时显示的商品数；需先满足商店、商品组和条目条件，再按拥有状态与对应货架规则展示。
- 价格单位为**彩虹币**。这里是购买价格，**不是制造配方中的新币费用**。
- 商品组前置与条目额外条件须同时满足；“或／任一”满足其中一项即可，“且”要求全部满足。
- “设计图／单件物品”保留固定商品表的获取配置。装置设计图要另行制造；主题、风格按自身对象类型解锁使用，不是可以摆放的装置成品。
- “未设条目限额”只表示没有额外数值限购字段，**不代表设计图、风格或房间能无限重复购买**；仍受拥有/售罄处理约束。
- 无人机站点组件的多行表示不同价格阶段，不是不同种类组件，也不是每次开店重置购买次数。

> **整店前置**：首次兑换彩虹币后，仍需在游戏时间20:00–次日04:00购物；干扰探测器没有独立额外门槛，但不绕过整店前置。

## 夜市·常规货架（39条）

**整组前置**：无额外组级条件；仍须满足商店开放条件。

| 商品（官中） | 类型 | 价格（彩虹币） | 获取类型（配置） | 条目限购 | 条目额外条件／展示规则 | 内部ID |
| --- | --- | --- | --- | --- | --- | --- |
| 小型棱彩风车 | 装饰/装置 | 1 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinwheelSmallPrismatic |
| 大型棱彩风车 | 装饰/装置 | 1 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinwheelLargePrismatic |
| 干扰探测器 | 装饰/装置 | 1 | 设计图 | 未设条目限额 | 无额外门槛（条件为空壳） | GadgetDefinition.PrismaDisruptionDetector |
| 弧形棱彩石栅栏 | 装饰/装置 | 2 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.CurvedStoneFencePrismatic |
| 直棱彩石栅栏 | 装饰/装置 | 2 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.StraightStoneFencePrismatic |
| 棱彩草 | 装饰/装置 | 2 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PrismaticGrass |
| 棱彩螺旋蘑菇 | 装饰/装置 | 3 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.VioletSwirlShroomPrismatic |
| 棱彩螺旋树 | 装饰/装置 | 3 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.BlueSwirlTreePrismatic |
| 中型棱彩灰木 | 装饰/装置 | 3 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.MediumRedAshwoodPrismatic |
| 高棱彩花礁 | 装饰/装置 | 3 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TallPinkFlowerReefPrismatic |
| 中型棱彩棕榈 | 装饰/装置 | 3 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.MediumPalmPrismatic |
| 棱彩巨型茎秆 | 装饰/装置 | 3 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TwistyOvergrownTreePrismatic |
| 棱彩熔岩灯 | 装饰/装置 | 3 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LavaLampViolet |
| 大型棱彩盆栽 | 装饰/装置 | 4 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LargePinkBonsaiPrismatic |
| 棱彩寒冰史莱姆堆 | 装饰/装置 | 4 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.ChillySlimeStackPrismatic |
| 精致棱彩茶杯 | 装饰/装置 | 4 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TeacupSmallPrismatic |
| 大型棱彩茶杯 | 装饰/装置 | 4 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TeacupLargePrismatic |
| 辉光水晶簇 | 装饰/装置 | 4 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.RadiantCrystalCluster |
| 棱彩苔藓母鸡雕像 | 装饰/装置 | 5 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.MossyHenStatuePrismatic |
| 棱彩冰焰 | 装饰/装置 | 5 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FrozenFlamePrismatic |
| 电子柱灯 | 装饰/装置 | 5 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.ElectricLampPillar |
| 高科技电池 | 装饰/装置 | 5 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GigiBattery |
| 高科技墙 | 装饰/装置 | 5 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GigisCoreBarrier |
| 棱彩条纹灯 | 装饰/装置 | 5 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinkStripedLampPrismatic |
| 棱彩跷跷板 | 装饰/装置 | 5 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SeesawPrismatic |
| 棱彩秋千 | 装饰/装置 | 5 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SwingPrismatic |
| 棱彩#1史莱姆舞台 | 装饰/装置 | 5 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SlimeStagePrismatic |
| 微型风车 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.MiniatureWindmill |
| 棱彩微型风车 | 装饰/装置 | 15 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.MiniatureWindmillPrismatic |
| 棱彩旋转木马 | 装饰/装置 | 15 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.CarouselPrismatic |
| 注射器组件 | 升级组件 | 15 | 单件物品 | 1 | 无额外条目条件 | UpgradeComponent.PowerInjectorComponent |
| 再生组件 | 升级组件 | 15 | 单件物品 | 1 | 无额外条目条件 | UpgradeComponent.RegenComponent |
| 糖果真空枪风格 | 真空枪风格 | 15 | 设计图 | 未设条目限额 | 已用真空枪吸取过：蜜饯母鸡 或 已用真空枪吸取过：蜜饯鸡仔儿 | Paletteec1bd9fabb4bf764f86004bac2db8dab |
| 棱彩摩天轮 | 装饰/装置 | 20 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FerrisWheelPrismatic |
| 棱彩真空枪风格 | 真空枪风格 | 20 | 设计图 | 未设条目限额 | 无额外条目条件 | Palette10ffac933e98b584f94d99354f8d576d |
| 黄金昏昏雕像 | 装饰/装置 | 25 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenSloomberStatue |
| 黄金超能雕像 | 装饰/装置 | 25 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenHyperStatue |
| 黄金双生雕像 | 装饰/装置 | 25 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenTwinStatue |
| 黄金真空枪风格 | 真空枪风格 | 25 | 设计图 | 未设条目限额 | 主线通关剧情结束 | Palettee0486dcdae603f0448a06cc4eeef48a5 |

## 夜市·无人机组件（5条）

**整组前置**：已获得量子无人机站点设计图。

按表中价格顺序逐级购买，每级限购1；先取得量子无人机站点设计图。获取组件本身不会反向解锁该设计图，详见 [量子无人机](../blueprints/quantum_drones.md)。

| 商品（官中） | 类型 | 价格（彩虹币） | 获取类型（配置） | 条目限购 | 条目额外条件／展示规则 | 内部ID |
| --- | --- | --- | --- | --- | --- | --- |
| 无人机站点组件 | 升级组件 | 10 | 单件物品 | 1 | 无额外条目条件 | UpgradeComponent.DroneStationComponent |
| 无人机站点组件 | 升级组件 | 20 | 单件物品 | 1 | 无额外条目条件 | UpgradeComponent.DroneStationComponent |
| 无人机站点组件 | 升级组件 | 30 | 单件物品 | 1 | 无额外条目条件 | UpgradeComponent.DroneStationComponent |
| 无人机站点组件 | 升级组件 | 40 | 单件物品 | 1 | 无额外条目条件 | UpgradeComponent.DroneStationComponent |
| 无人机站点组件 | 升级组件 | 50 | 单件物品 | 1 | 无额外条目条件 | UpgradeComponent.DroneStationComponent |

## 资料依据

- 底表：本地客户端产物 `scripts/sr2-re/out/sr2-nightmarket-pool.csv`（44条）；条件节点与获取配置以对应资产查询为准。
