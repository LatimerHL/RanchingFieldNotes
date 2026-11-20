# 看护员商店完整商品池

> 版本：《史莱姆牧场2》1.3.0；2026-10-12并入。价格、获取配置与条件来自客户端固定商品表，名称采用官方简中。
> 营业、解锁与上架机制见 [看护员商店](caretaker.md)；立购坊总览见 [立购坊](prontomart.md)。

## 范围与读表规则

- 共 **85 条定义**，不是任意存档当前同时显示的商品数；需先满足商店、商品组和条目条件，再按拥有状态与对应货架规则展示。
- 价格单位为**彩晶**。这里是购买价格，**不是制造配方中的新币费用**。
- 商品组前置与条目额外条件须同时满足；“或／任一”满足其中一项即可，“且”要求全部满足。
- “设计图／单件物品”保留固定商品表的获取配置。装置设计图要另行制造；主题、风格按自身对象类型解锁使用，不是可以摆放的装置成品。
- “未设条目限额”只表示没有额外数值限购字段，**不代表设计图、风格或房间能无限重复购买**；仍受拥有/售罄处理约束。
- 无人机站点组件的多行表示不同价格阶段，不是不同种类组件，也不是每次开店重置购买次数。

> **辉光条件**：以下“已收集辉光史莱姆（任一）”列表中，每个物种都指它的**辉光形态**，普通粉红史莱姆等不满足。圣域房间另按编号逐级展示，见机制页。

## 看护员商店·圣域房间（8条）

**整组前置**：无额外组级条件；仍须满足商店开放条件。

依次为圣域房间1–8；同一时刻只展示第一间未拥有的房间，购买后推进下一间。初始免费房间不列入这8条付费商品。

| 商品（官中） | 类型 | 价格（彩晶） | 获取类型（配置） | 条目限购 | 条目额外条件／展示规则 | 内部ID |
| --- | --- | --- | --- | --- | --- | --- |
| 圣域房间1 | 圣域房间 | 100 | 单件物品 | 未设条目限额 | 无额外条目事件条件；按拥有状态逐级展示 | SanctuaryRoomDefinition.SanctuaryRoom_1 |
| 圣域房间2 | 圣域房间 | 200 | 单件物品 | 未设条目限额 | 无额外条目事件条件；需先拥有圣域房间1，按顺序推进 | SanctuaryRoomDefinition.SanctuaryRoom_2 |
| 圣域房间3 | 圣域房间 | 300 | 单件物品 | 未设条目限额 | 无额外条目事件条件；需先拥有圣域房间2，按顺序推进 | SanctuaryRoomDefinition.SanctuaryRoom_3 |
| 圣域房间4 | 圣域房间 | 400 | 单件物品 | 未设条目限额 | 无额外条目事件条件；需先拥有圣域房间3，按顺序推进 | SanctuaryRoomDefinition.SanctuaryRoom_4 |
| 圣域房间5 | 圣域房间 | 500 | 单件物品 | 未设条目限额 | 无额外条目事件条件；需先拥有圣域房间4，按顺序推进 | SanctuaryRoomDefinition.SanctuaryRoom_5 |
| 圣域房间6 | 圣域房间 | 600 | 单件物品 | 未设条目限额 | 无额外条目事件条件；需先拥有圣域房间5，按顺序推进 | SanctuaryRoomDefinition.SanctuaryRoom_Expansion_B1 |
| 圣域房间7 | 圣域房间 | 700 | 单件物品 | 未设条目限额 | 无额外条目事件条件；需先拥有圣域房间6，按顺序推进 | SanctuaryRoomDefinition.SanctuaryRoom_Expansion_B2 |
| 圣域房间8 | 圣域房间 | 800 | 单件物品 | 未设条目限额 | 无额外条目事件条件；需先拥有圣域房间7，按顺序推进 | SanctuaryRoomDefinition.SanctuaryRoom_Expansion_B3 |

## 看护员商店·常备货架（77条）

**整组前置**：无额外组级条件；仍须满足商店开放条件。

| 商品（官中） | 类型 | 价格（彩晶） | 获取类型（配置） | 条目限购 | 条目额外条件／展示规则 | 内部ID |
| --- | --- | --- | --- | --- | --- | --- |
| 半圆形草地平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformHalfCircleGrass |
| 圆形草地平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformRoundGrass |
| 阶梯草地平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformStepGrass |
| 圆形石台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.StonePlatformRound |
| 半圆形冰平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformHalfCircleIce |
| 半圆形岩浆平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformHalfCircleMagma |
| 半圆形苔藓平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformHalfCircleMoss |
| 圆形冰平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformRoundIce |
| 圆形岩浆平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformRoundMagma |
| 圆形苔藓平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformRoundMoss |
| 阶梯冰平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformStepIce |
| 阶梯岩浆平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformStepMagma |
| 阶梯苔藓平台 | 装饰/装置 | 10 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PlatformStepMoss |
| 绿色圣域传送门 | 装饰/装置 | 50 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TeleporterSanctuaryGreen |
| 青色圣域传送门 | 装饰/装置 | 50 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TeleporterSanctuaryTeal |
| 紫色圣域传送门 | 装饰/装置 | 50 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TeleporterSanctuaryViolet |
| 紫色小蘑菇 | 装饰/装置 | 60 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SmallPurpleMushroom |
| 石质盆栽 | 装饰/装置 | 75 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.StonePottedPlant |
| 粉色荧光花 | 装饰/装置 | 75 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinkGlowFlowers |
| 雪景房间主题 | 房间主题 | 100 | 单件物品 | 未设条目限额 | 无额外条目条件 | ThemeDefinition.IceTheme |
| 岩浆房间主题 | 房间主题 | 100 | 单件物品 | 未设条目限额 | 无额外条目条件 | ThemeDefinition.MagmaTheme |
| 苔藓房间主题 | 房间主题 | 100 | 单件物品 | 未设条目限额 | 无额外条目条件 | ThemeDefinition.MossTheme |
| 雪景壁龛主题 | 壁龛主题 | 100 | 单件物品 | 未设条目限额 | 无额外条目条件 | ThemeDefinition.IceEndcapTheme |
| 岩浆壁龛主题 | 壁龛主题 | 100 | 单件物品 | 未设条目限额 | 无额外条目条件 | ThemeDefinition.MagmaEndcapTheme |
| 苔藓壁龛主题 | 壁龛主题 | 100 | 单件物品 | 未设条目限额 | 无额外条目条件 | ThemeDefinition.MossEndcapTheme |
| 简约石柱 | 装饰/装置 | 100 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SimpleStonePillar |
| 青翠松树 | 装饰/装置 | 100 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GreenPineTree1 |
| 高大棕榈树 | 装饰/装置 | 100 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TallPalm |
| 勃艮第真空枪风格 | 真空枪风格 | 100 | 设计图 | 未设条目限额 | 与看护员初次见面剧情结束 | Palette8c27001af815ab342b1e8dce857b8920 |
| 迷宫半拱廊 | 装饰/装置 | 125 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LabyrinthHalfArchway |
| 两株青翠松树 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GreenPineTree2 |
| 沙堆 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SandPile |
| 雪堆 | 装饰/装置 | 150 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.SnowPile |
| 冰雪王座壁龛主题 | 壁龛主题 | 200 | 单件物品 | 未设条目限额 | 已收集辉光史莱姆（任一）：安康史莱姆 / 水晶史莱姆 / 剑齿史莱姆 | ThemeDefinition.IceThroneEndcapTheme |
| 嘉年华壁龛主题 | 壁龛主题 | 200 | 单件物品 | 未设条目限额 | 已收集辉光史莱姆（任一）：炸弹史莱姆 / 棉兔史莱姆 / 超能史莱姆 / 浣熊史莱姆 | ThemeDefinition.CarnivalEndcapTheme |
| 音乐壁龛主题 | 壁龛主题 | 200 | 单件物品 | 未设条目限额 | 已收集辉光史莱姆（任一）：蝙蝠史莱姆 / 水晶史莱姆 / 超能史莱姆 / 浣熊史莱姆 / 剑齿史莱姆 | ThemeDefinition.MusicEndcapTheme |
| 彩虹原野壁龛主题 | 壁龛主题 | 200 | 单件物品 | 未设条目限额 | 已收集辉光史莱姆（任一）：棉兔史莱姆 / 蜂蜜史莱姆 / 粉红史莱姆 / 岩石史莱姆 / 喵喵史莱姆 | ThemeDefinition.RainbowFieldsEndcapTheme |
| 阴森壁龛主题 | 壁龛主题 | 200 | 单件物品 | 未设条目限额 | 已收集辉光史莱姆（任一）：蝙蝠史莱姆 / 火焰史莱姆 / 猎猫史莱姆 / 荧光史莱姆 / 岩石史莱姆 | ThemeDefinition.SpookyEndcapTheme |
| 外星人壁龛主题 | 壁龛主题 | 200 | 单件物品 | 未设条目限额 | 已收集辉光史莱姆（任一）：旋风史莱姆 / 粉红史莱姆 / 双生史莱姆 / 蛋黄史莱姆 | ThemeDefinition.UFOEndcapTheme |
| 石窟壁龛主题 | 壁龛主题 | 200 | 单件物品 | 未设条目限额 | 已收集辉光史莱姆（任一）：安康史莱姆 / 粉红史莱姆 / 水滴史莱姆 / 藤蔓史莱姆 | ThemeDefinition.WaterEndcapTheme |
| 瞌睡壁龛主题 | 壁龛主题 | 200 | 单件物品 | 未设条目限额 | 已收集辉光史莱姆（任一）：棉兔史莱姆 / 旋风史莱姆 / 荧光史莱姆 / 昏昏史莱姆 | ThemeDefinition.CloudEndcapTheme |
| 蜂蜜壁龛主题 | 壁龛主题 | 200 | 单件物品 | 未设条目限额 | 已收集辉光史莱姆（任一）：噗啦蝶史莱姆 / 蜂蜜史莱姆 / 藤蔓史莱姆 | ThemeDefinition.HoneyEndcapTheme |
| 岛屿壁龛主题 | 壁龛主题 | 200 | 单件物品 | 未设条目限额 | 已收集辉光史莱姆（任一）：安康史莱姆 / 蜂蜜史莱姆 / 猎猫史莱姆 / 水滴史莱姆 | ThemeDefinition.IslandEndcapTheme |
| 迷宫拱廊 | 装饰/装置 | 200 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.LabyrinthArchway |
| 愤怒史莱姆雕像 | 装饰/装置 | 200 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.AngryStoneStatue |
| 震惊史莱姆雕像 | 装饰/装置 | 200 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.ShockedStoneStatue |
| 漂浮遗迹方块 | 装饰/装置 | 200 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.FloatingRuinBlock |
| 黑暗房间主题 | 房间主题 | 250 | 单件物品 | 未设条目限额 | 无额外条目条件 | ThemeDefinition.CaveTheme |
| 黏黏房间主题 | 房间主题 | 250 | 单件物品 | 未设条目限额 | 无额外条目条件 | ThemeDefinition.StickyTheme |
| 粉色花球 | 装饰/装置 | 250 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.PinkFlowerBulb |
| 藤架拱廊 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.TrellisArchway |
| 浪涛壁龛主题 | 壁龛主题 | 300 | 设计图 | 未设条目限额 | 已收集辉光史莱姆（任一）：双生史莱姆 / 旋风史莱姆 / 安康史莱姆 / 水滴史莱姆 | ThemeDefinition.WavesEndcapTheme |
| 洞穴壁龛主题 | 壁龛主题 | 300 | 设计图 | 未设条目限额 | 已收集辉光史莱姆（任一）：昏昏史莱姆 / 浣熊史莱姆 / 荧光史莱姆 / 蝙蝠史莱姆 | ThemeDefinition.CaveEndcapTheme |
| 农场壁龛主题 | 壁龛主题 | 300 | 设计图 | 未设条目限额 | 已收集辉光史莱姆（任一）：噗啦蝶史莱姆 / 藤蔓史莱姆 / 蛋黄史莱姆 / 棉兔史莱姆 | ThemeDefinition.FarmEndcapTheme |
| 弹弹房间主题 | 房间主题 | 300 | 设计图 | 未设条目限额 | 无额外条目条件 | ThemeDefinition.BouncyTheme |
| 热带饮品 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 已拥有主题：岛屿壁龛主题 | GadgetDefinition.TropicalDrink |
| 干草捆 | 装饰/装置 | 300 | 设计图 | 未设条目限额 | 已拥有主题：农场壁龛主题 | GadgetDefinition.HayBales |
| 游泳圈 | 装饰/装置 | 400 | 设计图 | 未设条目限额 | 已拥有主题：浪涛壁龛主题 | GadgetDefinition.SwimTube |
| 冲浪板 | 装饰/装置 | 400 | 设计图 | 未设条目限额 | 已拥有主题：浪涛壁龛主题 | GadgetDefinition.Surfboard |
| 金色拱廊 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenArchway |
| 街机壁龛主题 | 壁龛主题 | 500 | 设计图 | 未设条目限额 | 已收集辉光史莱姆（任一）：双生史莱姆 / 浣熊史莱姆 / 水晶史莱姆 / 粉红史莱姆 | ThemeDefinition.ArcadeEndcapTheme |
| 苔藓真空枪风格 | 真空枪风格 | 500 | 设计图 | 未设条目限额 | 无额外条目条件 | Palette9b520145013494b42a304f8a46a80630 |
| 烹饪游戏柜 | 装饰/装置 | 500 | 设计图 | 未设条目限额 | 已拥有主题：街机壁龛主题 | GadgetDefinition.CookingGameCabinet |
| 蜂蜜罐 | 装饰/装置 | 600 | 设计图 | 未设条目限额 | 已拥有主题：蜂蜜壁龛主题 | GadgetDefinition.HoneyPot |
| 马戏平衡球 | 装饰/装置 | 750 | 设计图 | 未设条目限额 | 已拥有主题：嘉年华壁龛主题 | GadgetDefinition.CircusBall |
| 冰霜王座 | 装饰/装置 | 800 | 设计图 | 未设条目限额 | 已拥有主题：冰雪王座壁龛主题 | GadgetDefinition.IcyThrone |
| 冒险游戏柜 | 装饰/装置 | 800 | 设计图 | 未设条目限额 | 已拥有主题：街机壁龛主题 | GadgetDefinition.AdventureGameCabinet |
| 黄金水洼史莱姆雕像 | 装饰/装置 | 1000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenPuddleStatue |
| 黄金火焰史莱姆雕像 | 装饰/装置 | 1000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenFireStatue |
| 黄金轰隆史莱姆雕像 | 装饰/装置 | 1000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenBoomStatue |
| 黄金水晶史莱姆雕像 | 装饰/装置 | 1000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenCrystalStatue |
| 黄金浣熊史莱姆雕像 | 装饰/装置 | 1000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenRingtailStatue |
| 黄金岩石史莱姆雕像 | 装饰/装置 | 1000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenRockStatue |
| 黄金荧光史莱姆雕像 | 装饰/装置 | 1000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenPhosphorStatue |
| 黄金粉红史莱姆雕像 | 装饰/装置 | 1000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenPinkStatue |
| 黄金猎猫史莱姆雕像 | 装饰/装置 | 1000 | 设计图 | 未设条目限额 | 无额外条目条件 | GadgetDefinition.GoldenHunterStatue |
| 便携制造器 | 装饰/装置 | 1000 | 设计图 | 未设条目限额 | 主线通关剧情结束 | GadgetDefinition.PortableFabricator |

## 资料依据

- 底表：本地客户端产物 `scripts/sr2-re/out/sr2-caretaker-pool.csv`（85条）；条件节点与获取配置以对应资产查询为准。
- 时机：2026-10-10被动打点日志与原生 `PlayerReminders` 调用链；2026-10-12发明者补充确认购买前置后须重开商店才出现关联物品。
