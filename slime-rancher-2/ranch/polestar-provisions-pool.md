# 极星供应站完整商品池

> 版本：《史莱姆牧场2》1.3.0；2026-10-12并入。价格、获取配置与条件来自客户端固定商品表，名称采用官方简中。
> 营业、解锁与上架机制见 [极星供应站](polestar-provisions.md)；立购坊总览见 [立购坊](prontomart.md)。

## 范围与读表规则

- 共 **178 条定义**，不是任意存档当前同时显示的商品数；需先满足商店、商品组和条目条件，再按拥有状态与对应货架规则展示。
- 价格单位为**新币**。这里是购买价格，**不是制造配方中的新币费用**。
- 商品组前置与条目额外条件须同时满足；“或／任一”满足其中一项即可，“且”要求全部满足。
- “设计图／单件物品”保留固定商品表的获取配置。装置设计图要另行制造；主题、风格按自身对象类型解锁使用，不是可以摆放的装置成品。
- “未设条目限额”只表示没有额外数值限购字段，**不代表设计图、风格或房间能无限重复购买**；仍受拥有/售罄处理约束。
- 无人机站点组件的多行表示不同价格阶段，不是不同种类组件，也不是每次开店重置购买次数。

> **条件校正**：梦幻流行真空枪风格要求**制造量子无人机站点**，不能用“仅获得设计图”替代；其查询 producer 为 `GadgetCrafted`。黄金雕像的具体吸取事件条件见各行，不统一加上主线通关门槛。

## 基础货架（102条）

**整组前置**：无额外组级条件；仍须满足商店开放条件。

| 商品（官中） | 类型 | 价格（新币） | 获取类型（配置） | 条目限购 | 条目额外条件／展示规则 | 内部ID |
| --- | --- | --- | --- | --- | --- | --- |
| 黄金蛋黄雕像 | 装饰/装置 | 10000 | 设计图 | 未设条目限额 | 已用真空枪吸取过：蛋黄史莱姆 | GadgetDefinition.GoldenYolkyStatue |
| 梦幻灯笼 | 装饰/装置 | 5000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.DreamLantern |
| 黄金蝙蝠史莱姆雕像 | 装饰/装置 | 4000 | 设计图 | 未设条目限额 | 已用真空枪吸取过：蝙蝠史莱姆 | GadgetDefinition.GoldenBattyStatue |
| 黄金喵喵史莱姆雕像 | 装饰/装置 | 4000 | 设计图 | 未设条目限额 | 已用真空枪吸取过：喵喵史莱姆 | GadgetDefinition.GoldenTabbyStatue |
| 分拣器 | 装饰/装置 | 4000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LaZeeDistributor |
| 黄金蜂蜜史莱姆雕像 | 装饰/装置 | 4000 | 设计图 | 未设条目限额 | 已用真空枪吸取过：蜂蜜史莱姆 | GadgetDefinition.GoldenHoneyStatue |
| 黄金剑齿史莱姆雕像 | 装饰/装置 | 4000 | 设计图 | 未设条目限额 | 已用真空枪吸取过：剑齿史莱姆 | GadgetDefinition.GoldenSaberStatue |
| 薄荷旋转木马 | 装饰/装置 | 3500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.CarouselMint |
| 蓝色旋转木马 | 装饰/装置 | 3500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.CarouselBlue |
| 薄荷摩天轮 | 装饰/装置 | 3500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FerrisWheelMint |
| 蓝色摩天轮 | 装饰/装置 | 3500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FerrisWheelBlue |
| 瓶中船 | 装饰/装置 | 3000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.ShipInABottle |
| 琥珀色传送器 | 装饰/装置 | 3000 | 设计图 | 未设条目限额 | 已解锁区域：星光滨岸 且 灰烬山谷 | GadgetDefinition.TeleporterAmber |
| 蓝莓色传送器 | 装饰/装置 | 3000 | 设计图 | 未设条目限额 | 已解锁区域：星光滨岸 且 灰烬山谷 | GadgetDefinition.TeleporterBerry |
| 史莱姆篮球大作战 | 装饰/装置 | 2500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SlimeballGoal |
| 红色传送器 | 装饰/装置 | 2500 | 设计图 | 未设条目限额 | 已解锁区域：星光滨岸 且 灰烬山谷 | GadgetDefinition.TeleporterRed |
| 绿色传送器 | 装饰/装置 | 2500 | 设计图 | 未设条目限额 | 已解锁区域：星光滨岸 且 灰烬山谷 | GadgetDefinition.TeleporterGreen |
| 潮水池真空枪风格 | 真空枪风格 | 1500 | 单件物品 | 未设条目限额 | 已购买任意牧场扩建 | Palette43bdb823e4850ff45aecc85501ddc09d |
| 资源探测器 | 玩具 | 1000 | 单件物品 | 未设条目限额 | 已解锁区域：星光滨岸 且 灰烬山谷 | ToyDefinition.ResourceDetector |
| 梦幻流行真空枪风格 | 真空枪风格 | 1000 | 单件物品 | 未设条目限额 | 已制造量子无人机站点 | Palette24fea8ab88251db4eac1b2debc7a7ec8 |
| 跷跷板 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.Seesaw |
| 蓝色跷跷板 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SeesawBlue |
| 薄荷跷跷板 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SeesawMint |
| 灰色手提音响 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.BoomboxGrey |
| 粉色手提音响 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.BoomboxPink |
| 薄荷特技大炮 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.CannonMint |
| 蓝色特技大炮 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.CannonBlue |
| 蓝色秋千 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SwingBlue |
| 薄荷秋千 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SwingMint |
| 蓝色连接大炮 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LinkedCannon |
| 灰色连接大炮 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LinkedCannonGrey |
| 粉色连接大炮 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LinkedCannonPink |
| 红色连接大炮 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LinkedCannonRed |
| 绿色连接大炮 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LinkedCannonGreen |
| 蓝色熔岩灯 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LavaLampBlue |
| 金色熔岩灯 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LavaLampGold |
| 绿色熔岩灯 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LavaLampGreen |
| 红色熔岩灯 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LavaLampRed |
| 天使真空枪风格 | 真空枪风格 | 350 | 单件物品 | 未设条目限额 | 已用真空枪吸取过：蛋黄史莱姆 | Palettea650a53a2984f6d4983870ccb6f95239 |
| 大型简约长椅 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LargeSimpleBench |
| 史莱姆监狱立牌 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SlimeJailStandie |
| 向日葵立牌 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 已用真空枪吸取过：藤蔓史莱姆 | GadgetDefinition.SunflowerStandie |
| 薄荷圆形障碍 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.BumperMint |
| 蓝色圆形障碍 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.BumperBlue |
| 粉色简易微风扇 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FanPink |
| 焦油怪风扇 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FanTarr |
| 大型薄荷茶杯 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TeacupLargeMint |
| 大型蓝色茶杯 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TeacupLargeBlue |
| 精致薄荷茶杯 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TeacupSmallMint |
| 精致蓝色茶杯 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TeacupSmallBlue |
| 科学家书桌 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.ScientistDesk |
| 粉色真空枪风格 | 真空枪风格 | 300 | 单件物品 | 未设条目限额 | 已进行牧场主对话：鲍勃 | Paletteb7ba7640dfca67d4a964e58844b8b9e1 |
| 单色#1史莱姆舞台 | 装饰/装置 | 250 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SlimeStageMonochromatic |
| 柔彩#1史莱姆舞台 | 装饰/装置 | 250 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SlimeStagePastel |
| 红色真空枪风格 | 真空枪风格 | 250 | 单件物品 | 未设条目限额 | 已进行牧场主对话：索拉 | Palette4d66c52691c02fb4ba5755f2c041b186 |
| 绿色真空枪风格 | 真空枪风格 | 200 | 单件物品 | 未设条目限额 | 已进行牧场主对话：奥格登 | Palette9eec905352f0ab84cbc1ad308508c175 |
| 礁桌 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.ReefTable |
| 礁椅 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.ReefChair |
| 薄荷条纹灯 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinkStripedLampMint |
| 蓝色条纹灯 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinkStripedLampBlue |
| 粉色柠檬沙滩伞 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.UmbrellaBeachPinkLemonade |
| 青色沙滩伞 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.UmbrellaBeachTeal |
| 琥珀色传送站 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.WarpDepotAmber |
| 蓝莓色传送站 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.WarpDepotBerry |
| 金色传送站 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.WarpDepotGold |
| 绿色传送站 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.WarpDepotGreen |
| 红色传送站 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.WarpDepotRed |
| 紫色真空枪风格 | 真空枪风格 | 150 | 单件物品 | 未设条目限额 | 已进行牧场主对话：莫奇 | Paletteced4508c5c195f74e8ff3e49471e6b81 |
| 音乐地砖 | 装饰/装置 | 100 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.MusicTile |
| 音乐柱子 | 装饰/装置 | 100 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.MusicPillar |
| 科学家座椅 | 装饰/装置 | 100 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.ScientistChair |
| 短款舒适沙发 | 装饰/装置 | 100 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.CouchSeat |
| 长款舒适沙发 | 装饰/装置 | 100 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.DoubleCouchSeat |
| 蓝色真空枪风格 | 真空枪风格 | 100 | 单件物品 | 未设条目限额 | 已进行牧场主对话：维克多 | Palette555ed98a3ef2cf341926bbd7828460a4 |
| 蜂巢资源旗帜 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlagHive |
| 矿物资源旗帜 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlagMineral |
| 水坑资源旗帜 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlagSpout |
| 粉色礁树丛 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinkReefTreeCluster |
| 粉色礁树 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinkReefTree |
| 高大粉色礁树 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TallPinkReefTree |
| 蓝色螺旋树 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.BlueSwirlTree |
| 高大粉色花礁 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TallPinkFlowerReef |
| 矮小粉色花礁 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.ShortPinkFlowerReef |
| 粉色花礁 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinkFlowerReef |
| 沙黄色珊瑚 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SandyYellowCoral |
| 粉色礁丛 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinkReefBush |
| 蓝色礁丛 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.BlueReefBush |
| 大型粉色柠檬风车 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinwheelLargePinkLemonade |
| 大型青色风车 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinwheelLargeTeal |
| 小型粉色柠檬风车 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinwheelSmallPinkLemonade |
| 小型青色风车 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinwheelSmallTeal |
| 骄傲旗帜 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PrideFlag |
| 史莱姆旗帜 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SlimeFlag |
| 黄色礁丛 | 装饰/装置 | 20 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.YellowReefBush |
| 粉色海葵 | 装饰/装置 | 20 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinkAnemone |
| 粉色海葵簇 | 装饰/装置 | 20 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinkAnemoneCluster |
| 蓝色海葵 | 装饰/装置 | 20 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.BlueAnemone |
| 贝壳 | 装饰/装置 | 20 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.Seashells |
| 贝壳群 | 装饰/装置 | 20 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SeashellCollection |
| 海草 | 装饰/装置 | 20 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SeaGrass |
| 海藻 | 装饰/装置 | 20 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.Seaweed |
| 卷曲海藻 | 装饰/装置 | 20 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.CurlySeaweed |

## 迷宫解锁（48条）

**整组前置**：已解锁区域：灰色迷宫（梦幻之地） 或 灰色迷宫（奇异天空枢纽） 或 灰色迷宫（星光滨岸入口） 或 灰色迷宫（灰烬山谷入口）。

| 商品（官中） | 类型 | 价格（新币） | 获取类型（配置） | 条目限购 | 条目额外条件／展示规则 | 内部ID |
| --- | --- | --- | --- | --- | --- | --- |
| 暗影必杀 | 升级组件 | 5000 | 单件物品 | 1 | 无额外条目条件 | UpgradeComponent.ShadowSureShotComponent |
| 梦境真空枪风格 | 真空枪风格 | 2000 | 设计图 | 未设条目限额 | 需先解锁：梦幻之地（需按下入口能量光束开关） | Palette223b2eb72a61dd64a8db8e95e95a44b7 |
| 专家级巨型史莱姆诱捕器 | 装饰/装置 | 1200 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GordoSnareMaster |
| 热棒真空枪风格 | 真空枪风格 | 1000 | 设计图 | 未设条目限额 | 需先解锁：生态箱（需按下能量光束接收器开关） | Paletteb7d0aa090abec2249b1d291445f72995 |
| 丁香迷情真空枪风格 | 真空枪风格 | 1000 | 设计图 | 未设条目限额 | 需先解锁：水务设施（需解锁星光滨岸入口） | Palettee45502f7cd655854f9a15e1dcb74581e |
| 朋克真空枪风格 | 真空枪风格 | 1000 | 设计图 | 未设条目限额 | 需先解锁：熔岩深渊（需解锁灰烬山谷入口） | Palette33158edebaa3e90498e12dcb3f87ecc3 |
| 蓝色花冠史莱姆树 | 装饰/装置 | 800 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerSlimeTree |
| 蓝色花形灯 | 装饰/装置 | 800 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerLamp |
| 橙色花形灯 | 装饰/装置 | 800 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerLampOrange |
| 粉色花形灯 | 装饰/装置 | 800 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerLampPink |
| 紫色花形灯 | 装饰/装置 | 800 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerLampPurple |
| 珊瑚花冠史莱姆树 | 装饰/装置 | 800 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerSlimeTreeCoral |
| 紫色花冠史莱姆树 | 装饰/装置 | 800 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerSlimeTreePurple |
| 黄色花冠史莱姆树 | 装饰/装置 | 800 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerSlimeTreeYellow |
| 蜜桃真空枪风格 | 真空枪风格 | 800 | 设计图 | 未设条目限额 | 琪琪初次登场剧情结束 | Palette313294ab4ff023e4fb96cbff42f7b828 |
| 粉色花冠史莱姆舞台 | 装饰/装置 | 750 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SlimeStageFloral |
| 蓝色花冠史莱姆舞台 | 装饰/装置 | 750 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SlimeStageFloralBlue |
| 紫色花冠史莱姆舞台 | 装饰/装置 | 750 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SlimeStageFloralPurple |
| 黄色花冠史莱姆舞台 | 装饰/装置 | 750 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SlimeStageFloralYellow |
| 黄金史莱姆地板 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldSlimeFloorPanel |
| 金色连接大炮 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LinkedCannonGold |
| 紫色连接大炮 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LinkedCannonViolet |
| 暗影熔岩灯 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LavaLampGrey |
| 大型蓝色花朵抱枕 | 装饰/装置 | 200 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerPillowLarge |
| 大型珊瑚花抱枕 | 装饰/装置 | 200 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerPillowLargeCoral |
| 大型紫花抱枕 | 装饰/装置 | 200 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerPillowLargePurple |
| 大型黄花抱枕 | 装饰/装置 | 200 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerPillowLargeYellow |
| 直型石栅栏 | 装饰/装置 | 160 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.StraightStoneFence |
| 弧形石栅栏 | 装饰/装置 | 160 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.CurvedStoneFence |
| 巨型茎秆 | 装饰/装置 | 160 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TwistyOvergrownTree |
| 繁茂睡莲 | 装饰/装置 | 160 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.OvergrownLilypad |
| 碧蓝水花 | 装饰/装置 | 160 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.BlueSwampFlower |
| 小型粉色花朵抱枕 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerPillowSmall |
| 小型蓝花抱枕 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerPillowSmallBlue |
| 小型紫花抱枕 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerPillowSmallPurple |
| 小型黄花抱枕 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FlowerPillowSmallYellow |
| 迷宫立灯 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LabyrinthStandingLamp |
| 迷宫壁灯 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LabyrinthWallLamp |
| 木栅栏 | 装饰/装置 | 100 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.WoodenFence |
| 古代圆形支柱 | 装饰/装置 | 80 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.AncientRoundPillar |
| 挖掘灯 | 装饰/装置 | 80 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.ExcavationLights |
| 古代拱形墙 | 装饰/装置 | 80 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.AncientArchedWall |
| 靛蓝柏树丛 | 装饰/装置 | 50 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.IndigoCypressCluster |
| 靛蓝柏树 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.IndigoCypress |
| 靛蓝灌木 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.IndigoShrubs |
| 高大靛蓝柏树 | 装饰/装置 | 40 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TallIndigoCypress |
| 靛蓝花 | 装饰/装置 | 25 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.IndigoFlowers |
| 靛蓝草 | 装饰/装置 | 25 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.IndigoGrass |

## 星光滨岸解锁（8条）

**整组前置**：已解锁区域：星光滨岸。

| 商品（官中） | 类型 | 价格（新币） | 获取类型（配置） | 条目限购 | 条目额外条件／展示规则 | 内部ID |
| --- | --- | --- | --- | --- | --- | --- |
| 星光滨岸真空枪风格 | 真空枪风格 | 1500 | 设计图 | 未设条目限额 | 无额外条目条件 | Palette91d93b8061f604c47923eb6cecbb2495 |
| 大型网 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.NetTall |
| 小型沙堡 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SmallSandcastle |
| 大型沙堡 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LargeSandcastle |
| 蛤蜊王座 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.ClamThrone |
| 中型网 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.Net |
| 小型网 | 装饰/装置 | 200 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.NetPost |
| 波浪沙滩毯 | 装饰/装置 | 80 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.BeachBlanketWaves |

## 灰烬山谷解锁（15条）

**整组前置**：已解锁区域：灰烬山谷。

| 商品（官中） | 类型 | 价格（新币） | 获取类型（配置） | 条目限购 | 条目额外条件／展示规则 | 内部ID |
| --- | --- | --- | --- | --- | --- | --- |
| 岩浆真空枪风格 | 真空枪风格 | 1500 | 设计图 | 未设条目限额 | 无额外条目条件 | Palette7c4a4d1f1af22aa459cdffacc7160042 |
| 焦油怪立牌 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TarrStandie |
| 樱花伞 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.UmbrellaCherryBlossom |
| 宽型翠绿棚架 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.EmeraldVineTrellisLarge |
| 向日葵伞 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.UmbrellaSunflower |
| 向月葵伞 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.UmbrellaMoonflower |
| 桃色向日葵伞 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.UmbrellaSunflowerPeach |
| 条纹沙滩毯 | 装饰/装置 | 80 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.BeachBlanketStriped |
| 小型棚架 | 装饰/装置 | 80 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.trellisSmall |
| 金色加速器 | 装饰/装置 | 50 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.AcceleratorGold |
| 绿色加速器 | 装饰/装置 | 50 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.AcceleratorGreen |
| 灰色加速器 | 装饰/装置 | 50 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.AcceleratorGrey |
| 粉色加速器 | 装饰/装置 | 50 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.AcceleratorPink |
| 紫色加速器 | 装饰/装置 | 50 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.AcceleratorPurple |
| 红色加速器 | 装饰/装置 | 50 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.AcceleratorRed |

## 落粉峭壁解锁（3条）

**整组前置**：已解锁区域：落粉峭壁。

| 商品（官中） | 类型 | 价格（新币） | 获取类型（配置） | 条目限购 | 条目额外条件／展示规则 | 内部ID |
| --- | --- | --- | --- | --- | --- | --- |
| 落粉峭壁真空枪风格 | 真空枪风格 | 2000 | 设计图 | 未设条目限额 | 无额外条目条件 | Palette80be4443999475249be998a4e504f8d4 |
| 灰色真空枪风格 | 真空枪风格 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | Paletteec8010e7bda2a294ea16d2fd1ac38a9f |
| 雪人立牌 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SnowmanStandie |

## 无人机（2条）

**整组前置**：已获得量子无人机站点设计图。

按表中价格顺序逐级购买，每级限购1；先取得量子无人机站点设计图。获取组件本身不会反向解锁该设计图，详见 [量子无人机](../blueprints/quantum_drones.md)。

| 商品（官中） | 类型 | 价格（新币） | 获取类型（配置） | 条目限购 | 条目额外条件／展示规则 | 内部ID |
| --- | --- | --- | --- | --- | --- | --- |
| 无人机站点组件 | 升级组件 | 100000 | 单件物品 | 1 | 无额外条目条件 | UpgradeComponent.DroneStationComponent |
| 无人机站点组件 | 升级组件 | 20000 | 单件物品 | 1 | 无额外条目条件 | UpgradeComponent.DroneStationComponent |

## 资料依据

- 底表：本地客户端产物 `scripts/sr2-re/out/sr2-polestar-pool.csv`（178条）；条件节点与获取配置以对应资产查询为准。
- 梦幻流行条件补证：原始 `rangeexchange-tables.json` 中该条为 `GadgetEventQueryComponent`，producer 指向 `GadgetCrafted`；已获得设计图与已制造是不同事件。
