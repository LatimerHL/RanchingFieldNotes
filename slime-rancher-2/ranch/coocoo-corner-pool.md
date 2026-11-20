# 啾啾角完整商品池（Coo-Coo Corner）

> 版本：《史莱姆牧场2》1.3.0；2026-10-12客户端商品表与官方简中语料核对。
> 刷新与轮转机制见 [啾啾角规律](coocoo-corner.md)；立购坊其他分店见 [立购坊](prontomart.md)。

## 目录范围与读表规则

- **通用定义池262条**：基础装置115、高阶商品102（101件装置/工具＋1种无人机站点组件）、普通玩具23、装置礼包22。另有4种互斥的平台独占玩具，分别只在对应平台进池；本机Steam客户端额外加入1种，因此定义总数为263。
- 这是**定义目录**，不是任何存档即时可用池。实际N要按区域、吸取物种、设计图等条件筛选；不能把262当所有存档固定池长。
- 本店列项均直接取得物品，**不是设计图**。装置类可直接获得成品而不先拿配方；礼包取得其配置内容，组件增加组件数量。
- 价格单位为**新币**；限购是对应货架刷新期的购买限额，不是终身持有上限。
- 出现权重是相对权重，**不是固定百分比**。实际机会还取决于同组已通过筛选的候选及轮转阶段。
- “无额外条目事件条件”指该条未设置额外事件查询，仍以商店/组可用及正常筛选为前提。
- 条件里的“且／或”保留客户端逻辑；啾啾角这些迷宫条目的入口查询不能直接替换成其他商店的四节点任一查询。
- 以下保留各来源表内部顺序，方便核对；这些行的先后不是最终每日抽取顺序。

## 通用商品池汇总

| 商品组 | 定义条目数 | 每次上架 | 来源 |
|---|---:|---:|---|
| 基础装置 | 115 | 3 | 一档24、二档48、三档43合并抽取 |
| 高阶商品 | 102 | 1 | 四档39、五档17、六档15、七档4、九档6、工具/组件21合并抽取 |
| 普通玩具 | 23 | 1 | 再按平台加入对应独占玩具 |
| 装置礼包 | 22 | 1 | 独立礼包池 |

## 基础装置

### 装饰·1档：24条

| 商品（官中） | 价格（新币） | 当期限购 | 权重 | 进池条件 | 内部ID |
|---|---:|---:|---:|---|---|
| 蓝色海葵 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.BlueAnemone |
| 琥珀色草 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.AmberGrass |
| 阿什花 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.AshBlooms |
| 极光花 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.AuroraGrass |
| 天蓝色草 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.AzureGrass |
| 灰烬穗花 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.CinderSpikeBlossoms |
| 卷曲海藻 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.CurlySeaweed |
| 翠绿色草 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.GreenGrass |
| 金瓣花 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.GoldpetalFlowers |
| 赭色罂粟花 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.OchrePoppies |
| 粉色海葵 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.PinkAnemone |
| 粉色海葵簇 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.PinkAnemoneCluster |
| 粉红色草 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.PinkGrass |
| 彩虹草 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.RainbowGrass |
| 深红色草 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.RedGrass |
| 海草 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.SeaGrass |
| 贝壳 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.Seashells |
| 贝壳群 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.SeashellCollection |
| 海藻 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.Seaweed |
| 星绽花 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.StarbloomFlowers |
| 阳炎雏菊 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.SunfireDaisies |
| 黄色礁丛 | 25 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.YellowReefBush |
| 靛蓝花 | 50 | 10 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 且 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.IndigoFlowers |
| 靛蓝草 | 50 | 10 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 且 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.IndigoGrass |

### 装饰·2档：48条

| 商品（官中） | 价格（新币） | 当期限购 | 权重 | 进池条件 | 内部ID |
|---|---:|---:|---:|---|---|
| 加速器 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.Accelerator |
| 琥珀色柏树 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.AmberCypress |
| 琥珀色灌木 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.AmberShrubs |
| 注意旗帜 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.FlagAttention |
| 谨慎旗帜 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.FlagCautious |
| 好奇旗帜 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.FlagCurious |
| 水果旗帜 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.FlagFruit |
| 蜂巢资源旗帜 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.FlagHive |
| 肉类旗帜 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.FlagMeat |
| 矿物资源旗帜 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.FlagMineral |
| 水坑资源旗帜 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.FlagSpout |
| 蔬菜旗帜 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.FlagVeggie |
| 天蓝色灌木 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.AzureShrubs |
| 蓝色礁丛 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.BlueReefBush |
| 蓝色螺旋树 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.BlueSwirlTree |
| 冰晶塔 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.CrystalSpires |
| 翠绿柏树 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.EmeraldCypress |
| 翠绿灌木 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.EmeraldShrubs |
| 粉色花礁 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.PinkFlowerReef |
| 粉色礁丛 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.PinkReefBush |
| 粉色礁树 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.PinkReefTree |
| 粉色礁树丛 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.PinkReefTreeCluster |
| 三角旗 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.SimpleFlag |
| 彩虹块 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.RainbowLumps |
| 彩虹堆 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.RainbowMound |
| 岩石堆 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.RockClump |
| 岩石簇 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.RockCluster |
| 岩石碎片 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.RockFragments |
| 沙黄色珊瑚 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.SandyYellowCoral |
| 围巾飘带 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.StreamerScarf |
| 尖锐巨砾 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.SharpBoulder |
| 矮小粉色花礁 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.ShortPinkFlowerReef |
| 小块砾岩 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.SmallBoulder |
| 石笋 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.Stalagmite |
| 小型风车 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.PinwheelSmall |
| 丝状飘带 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.Streamer |
| 高大琥珀色柏树 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.TallAmberCypress |
| 高大翠绿柏树 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.TallEmeraldCypress |
| 高大粉色花礁 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.TallPinkFlowerReef |
| 高大粉色礁树 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.TallPinkReefTree |
| 洞穴支柱（薄） | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.ThinCavePillar |
| 风向袋 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.WindSocks |
| 大型风车 | 50 | 10 | 1 | 无额外条目事件条件 | GadgetDefinition.PinwheelLarge |
| 稳定器旗帜 | 50 | 10 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.FlagStabilizer |
| 靛蓝柏树 | 50 | 10 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.IndigoCypress |
| 靛蓝灌木 | 50 | 10 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.IndigoShrubs |
| 高大靛蓝柏树 | 50 | 10 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.TallIndigoCypress |
| 史莱姆旗帜 | 50 | 10 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.SlimeFlag |

### 装饰·3档：43条

| 商品（官中） | 价格（新币） | 当期限购 | 权重 | 进池条件 | 内部ID |
|---|---:|---:|---:|---|---|
| 琥珀色柏树丛 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.AmberCypressCluster |
| 天蓝色荧光蘑菇 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.AzureGlowShroom |
| 洞穴支柱 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.CavePillar |
| 海岸岩石 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.CoastalRock |
| 海岸岩柱 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.CoastalRockPillar |
| 温室长椅 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.SimpleBench |
| 温室椅子 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.SimpleChair |
| 温室桌子 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.SimpleTable |
| 翠绿柏树丛 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.EmeraldCypressCluster |
| 小型翠绿棚架 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.EmeraldVineTrellis |
| 冰川结晶 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.GlacialCrystal |
| 粗糙灰木 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.GnarledAshwood |
| 中型网 | 400 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.Net |
| 小型网 | 300 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.NetPost |
| 大型网 | 900 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.NetTall |
| 冰方体 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.IceCubed |
| 棕榈（中等） | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.MediumPalm |
| 蘑菇盆 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.MushroomPlanter |
| 粉色荧光蘑菇 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.PinkGlowShroom |
| 盆栽植物 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.PottedPlants |
| 拱状根 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.RootArches |
| 盘错根 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.RootTangle |
| 岩浆堆（矮） | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.ShortMagmaClump |
| 棕榈（矮） | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.ShortPalm |
| 粉色珊瑚柱（矮） | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.ShortPinkCoralColumns |
| 红色灰木（矮） | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.ShortRedAshwood |
| 小型棚架 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.trellisSmall |
| 覆雪灌木 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.SnowyBush |
| 石笋簇 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.StalagmiteCluster |
| 条纹沙滩毯 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.BeachBlanketStriped |
| 高大灰木 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.TallAshwood |
| 岩浆堆（高） | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.TallMagmaClump |
| 粉色珊瑚柱（高） | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.TallPinkCoralColumns |
| 蓝紫色螺旋蘑菇（高） | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.TallVioletSwirlShroom |
| 蓝紫色螺旋蘑菇 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.VioletSwirlShroom |
| 手推车 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.Wheelbarrow |
| 挖掘灯 | 120 | 5 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.ExcavationLights |
| 盆栽熔岩植物 | 120 | 5 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.PottedLavaPlants |
| 古代圆形支柱 | 120 | 5 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.AncientRoundPillar |
| 靛蓝柏树丛 | 120 | 5 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.IndigoCypressCluster |
| 科学家座椅 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.ScientistChair |
| 长款舒适沙发 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.DoubleCouchSeat |
| 短款舒适沙发 | 120 | 5 | 1 | 无额外条目事件条件 | GadgetDefinition.CouchSeat |

## 高阶商品

### 装饰·4档：39条

| 商品（官中） | 价格（新币） | 当期限购 | 权重 | 进池条件 | 内部ID |
|---|---:|---:|---:|---|---|
| 天蓝色红树林 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.AzureMangrove |
| 沙滩灯笼 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.LanternBeach |
| 沙滩伞 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.UmbrellaBeach |
| 温室灯 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.ConservatoryLamp |
| 霜覆贝壳 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.IceFrostedShell |
| 冰灯 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.IceLamp |
| 冰树 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.IceTreeo |
| 粉色盆栽（大） | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.LargePinkBonsai |
| 岩浆池 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.MagmaPool |
| 粉色珊瑚柱（中等） | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.MediumPinkCoralColumns |
| 红色灰木（中等） | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.MediumRedAshwood |
| 音乐柱子 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.MusicPillar |
| 音乐地砖 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.MusicTile |
| 粉色盆栽 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.PinkBonsai |
| 粉色红树林 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.PinkMangrove |
| 粉红条纹灯 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.PinkStripedLamp |
| 礁椅 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.ReefChair |
| 礁桌 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.ReefTable |
| 圆形岩浆池 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.RoundedMagmaPool |
| 樱花伞 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.UmbrellaCherryBlossom |
| 向日葵伞 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.UmbrellaSunflower |
| 拱形棚架 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.TrellisArch |
| 宽型翠绿棚架 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.EmeraldVineTrellisLarge |
| 宽型棚架 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.TrellisLarge |
| 风铃 | 160 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.WindChimes |
| 壁灯 | 160 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.WallLighting |
| 古代拱形墙 | 160 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.AncientArchedWall |
| 古代紫橡树 | 160 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.PurpleOak |
| 年轻的雪松橡木 | 160 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.YoungCedaroak |
| 木栅栏 | 160 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.WoodenFence |
| 直型石栅栏 | 160 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.StraightStoneFence |
| 弧形石栅栏 | 160 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.CurvedStoneFence |
| 巨型茎秆 | 160 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.TwistyOvergrownTree |
| 繁茂睡莲 | 160 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.OvergrownLilypad |
| 碧蓝水花 | 160 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.BlueSwampFlower |
| 迷宫立灯 | 200 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.LabyrinthStandingLamp |
| 迷宫壁灯 | 200 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.LabyrinthWallLamp |
| 大型蓝色花朵抱枕 | 200 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.FlowerPillowLarge |
| 小型粉色花朵抱枕 | 200 | 3 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.FlowerPillowSmall |

### 装饰·5档：17条

| 商品（官中） | 价格（新币） | 当期限购 | 权重 | 进池条件 | 内部ID |
|---|---:|---:|---:|---|---|
| 大型茶杯 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.TeacupLarge |
| 欢喜雕像 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.CheerfulStatue |
| 寒冰史莱姆堆 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.ChillySlimeStack |
| 蛤蜊王座 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.ClamThrone |
| 大型简约长椅 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.LargeSimpleBench |
| 简易微风扇 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.Fan |
| 火焰花 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.FireFlower |
| 开心雕像 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.HappyStatue |
| 大型沙堡 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.LargeSandcastle |
| 狂喜雕像 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.OverjoyedStatue |
| 圆形障碍 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.Bumper |
| 史莱姆监狱立牌 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.SlimeJailStandie |
| 小型沙堡 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.SmallSandcastle |
| 雪人立牌 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.SnowmanStandie |
| 向日葵立牌 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.SunflowerStandie |
| 焦油怪立牌 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.TarrStandie |
| 精致茶杯 | 400 | 3 | 1 | 无额外条目事件条件 | GadgetDefinition.TeacupSmall |

### 装饰·6档：15条

| 商品（官中） | 价格（新币） | 当期限购 | 权重 | 进池条件 | 内部ID |
|---|---:|---:|---:|---|---|
| 手提音响 | 800 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.Boombox |
| 展示箱 | 800 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.ItemDisplay |
| 苔藓母鸡雕像 | 1200 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.MossyHenStatue |
| 跷跷板 | 800 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.Seesaw |
| 史莱姆篮球大作战 | 4000 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.SlimeballGoal |
| 雪椅 | 800 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.SnowZBench |
| 石蛋灯 | 1200 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.StonyEggLamp |
| 特技大炮 | 800 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.Cannon |
| 秋千 | 1000 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.Swing |
| 黄金史莱姆地板 | 1200 | 1 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.GoldSlimeFloorPanel |
| 黄金扭曲之树 | 1200 | 1 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.GoldTwistedTree |
| 蓝色花形灯 | 1500 | 1 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.FlowerLamp |
| 蓝色花冠史莱姆树 | 1500 | 1 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.FlowerSlimeTree |
| 科学家书桌 | 500 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.ScientistDesk |
| 蓝色熔岩灯 | 500 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.LavaLampBlue |

### 装饰·7档：4条

| 商品（官中） | 价格（新币） | 当期限购 | 权重 | 进池条件 | 内部ID |
|---|---:|---:|---:|---|---|
| 极光松 | 2500 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.AuroraPine |
| 冰焰 | 3000 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.FrozenFlame |
| 雄伟雪花 | 3000 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.MajesticSnowflake |
| 水族缸 | 4000 | 1 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.Aquarium |

### 装饰·9档：6条

| 商品（官中） | 价格（新币） | 当期限购 | 权重 | 进池条件 | 内部ID |
|---|---:|---:|---:|---|---|
| 旋转木马 | 9000 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.Carousel |
| 摩天轮 | 9000 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.FerrisWheel |
| 瓶中船 | 9000 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.ShipInABottle |
| 雪花球 | 9000 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.SnowGlobe |
| 安康喷泉 | 8000 | 1 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.AnglerFountain |
| 岩浆喷泉 | 5000 | 1 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | GadgetDefinition.LavaFountain |

### 工具/组件：21条

| 商品（官中） | 价格（新币） | 当期限购 | 权重 | 进池条件 | 内部ID |
|---|---:|---:|---:|---|---|
| 头号史莱姆展示台 | 250 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.SlimeStage |
| 高级巨型史莱姆诱捕器 | 250 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.GordoSnareAdvanced |
| 冲刺垫 | 250 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.DashPad |
| 史莱姆诱饵（水果） | 150 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.PortableSlimeBaitFruit |
| 喷水花洒 | 500 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.HydroShower |
| 喷水炮台 | 250 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.HydroTurret |
| 小市场 | 250 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.MarketLink |
| 史莱姆诱饵（肉类） | 150 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.PortableSlimeBaitMeat |
| 史莱姆诱饵（蔬菜） | 150 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.PortableSlimeBaitVeggie |
| 医疗站 | 100 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.MedStation |
| 新手巨型史莱姆诱捕器 | 250 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.GordoSnareNovice |
| 便携稻草焦油怪 | 150 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.PortableScareSlime |
| 便携水龙头 | 150 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.PortableWaterTap |
| 精炼链接 | 250 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.RefineryLink |
| 雪球机 | 1000 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.SnowballMachine |
| 弹簧板 | 250 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.SpringPad |
| 超级喷水炮台 | 500 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.SuperHydroTurret |
| 驯兽铃 | 150 | 1 | 1 | 无额外条目事件条件 | GadgetDefinition.TamingBell |
| 无人机站点组件 | 25000 | 1 | 0.01 | 已获得量子无人机站点设计图（仅持有组件不算） | UpgradeComponent.DroneStationComponent |
| 专家级巨型史莱姆诱捕器 | 2000 | 1 | 1 | 已解锁区域：灰色迷宫（灰烬山谷入口） 或 已解锁区域：灰色迷宫（星光滨岸入口） | GadgetDefinition.GordoSnareMaster |
| 粉色花冠史莱姆舞台 | 1000 | 1 | 1 | 已解锁区域：灰色迷宫（灰烬山谷入口） 或 已解锁区域：灰色迷宫（星光滨岸入口） | GadgetDefinition.SlimeStageFloral |

## 普通玩具

### 玩具：23条

| 商品（官中） | 价格（新币） | 当期限购 | 权重 | 进池条件 | 内部ID |
|---|---:|---:|---:|---|---|
| 沙滩球 | 500 | 1 | 2 | 无额外条目事件条件 | ToyDefinition.BeachBall |
| 毛线球 | 500 | 1 | 1 | 已吸取过：喵喵史莱姆 | ToyDefinition.YarnBall |
| 爆炸球 | 750 | 1 | 1 | 已吸取过：炸弹史莱姆 | ToyDefinition.BombBall |
| 橡胶鸭 | 1000 | 1 | 1 | 已吸取过：水滴史莱姆 | ToyDefinition.RubberDucky |
| 弹力球 | 500 | 1 | 1 | 已吸取过：棉兔史莱姆 | ToyDefinition.BouncyBall |
| 光虫 | 1000 | 1 | 1 | 已吸取过：噗啦蝶史莱姆 | ToyDefinition.Glowbug |
| 毛绒河豚 | 750 | 1 | 1 | 已吸取过：安康史莱姆 | ToyDefinition.Puffer |
| 满月球 | 750 | 1 | 1 | 已吸取过：蝙蝠史莱姆 | ToyDefinition.FullMoon |
| 垃圾桶 | 1000 | 1 | 1 | 已吸取过：浣熊史莱姆 | ToyDefinition.Trashcan |
| 大石块 | 500 | 1 | 1 | 已吸取过：岩石史莱姆 | ToyDefinition.BigRock |
| 夜灯 | 500 | 1 | 1 | 已吸取过：荧光史莱姆 | ToyDefinition.NightLight |
| 嗡嗡蜜蜂 | 750 | 1 | 1 | 已吸取过：蜂蜜史莱姆 | ToyDefinition.BuzzyBee |
| 水晶球 | 750 | 1 | 1 | 已吸取过：水晶史莱姆 | ToyDefinition.CrystalBall |
| 毛绒鸡 | 750 | 1 | 1 | 已吸取过：猎猫史莱姆 | ToyDefinition.StuffedChicken |
| 陀螺顶 | 750 | 1 | 1 | 已吸取过：旋风史莱姆 | ToyDefinition.GyroTop |
| 太阳伴侣 | 750 | 1 | 1 | 已吸取过：藤蔓史莱姆 | ToyDefinition.SolMate |
| 木炭砖 | 2000 | 1 | 1 | 已吸取过：火焰史莱姆 | ToyDefinition.CharcoalBrick |
| 剑龙伙伴 | 750 | 1 | 1 | 已吸取过：剑齿史莱姆 | ToyDefinition.StegoBuddy |
| 火箭飞船 | 1000 | 1 | 1 | 已吸取过：超能史莱姆 | ToyDefinition.RocketShip |
| 毛绒绵羊 | 1000 | 1 | 1 | 已吸取过：昏昏史莱姆 | ToyDefinition.StuffedSheep |
| 旋转玩具 | 1000 | 1 | 1 | 已吸取过：双生史莱姆 | ToyDefinition.SpinnerToy |
| 快乐面包抱枕 | 2000 | 1 | 1 | 已吸取过：蛋黄史莱姆 | ToyDefinition.HappyPlushBreadLoaf |
| 资源探测器 | 500 | 1 | 1 | 已解锁区域：星光滨岸 且 已解锁区域：灰烬山谷 | ToyDefinition.ResourceDetector |

## 装置礼包

### 礼包：22条

| 商品（官中） | 价格（新币） | 当期限购 | 权重 | 进池条件 | 内部ID |
|---|---:|---:|---:|---|---|
| 彩虹原野捆绑包 | 1450 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.RainbowBundle |
| 潮池捆绑包 | 2500 | 1 | 1 | 已解锁区域：星光滨岸 | ShopBundleDefinition.TidePoolsBundle |
| 草类捆绑包 | 1750 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.GrassBundle |
| 花朵捆绑包 | 1750 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.FlowersBundle |
| 温室捆绑包 | 4300 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.ConservatoryBundle |
| 地图标记捆绑包 | 3500 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.MapMarkersBundle |
| 工程师入门捆绑包 | 12900 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.EngineerStarterBundle |
| 星光滨岸捆绑包 | 1700 | 1 | 1 | 已解锁区域：星光滨岸 | ShopBundleDefinition.StarlightStrandBundle |
| 灰烬山谷捆绑包 | 2050 | 1 | 1 | 已解锁区域：灰烬山谷 | ShopBundleDefinition.EmberValleyBundle |
| 栅栏和墙壁捆绑包 | 4800 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.FencesAndWallsBundle |
| 音乐捆绑包 | 4000 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.MusicBundle |
| 灯类捆绑包 | 11000 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.LightsBundle |
| 海滩日捆绑包 | 2800 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.BeachDayBundle |
| 花盆捆绑包 | 5200 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.PlanterBundle |
| 落粉峭壁捆绑包 | 16350 | 1 | 1 | 已解锁区域：落粉峭壁 | ShopBundleDefinition.PowderfallBluffsBundle |
| 诱饵捆绑包 | 2000 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.BaitBundle |
| 岩浆捆绑包 | 3700 | 1 | 1 | 已解锁区域：灰烬山谷 | ShopBundleDefinition.MagmaBundle |
| 洞穴捆绑包 | 3650 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.CaveBundle |
| 迷宫捆绑包 | 8600 | 1 | 1 | 已解锁区域：灰色迷宫（星光滨岸入口） 或 已解锁区域：灰色迷宫（灰烬山谷入口） | ShopBundleDefinition.LabyrinthBundle |
| 风捆绑包 | 3000 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.WindBundle |
| 珊瑚礁捆绑包 | 2250 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.ReefsBundle |
| 科学家捆绑包 | 8600 | 1 | 1 | 无额外条目事件条件 | ShopBundleDefinition.ScientistBundle |

## 平台独占玩具（只加入对应平台）

| 商品（官中） | 平台 | 价格（新币） |
|---|---|---:|
| 咕噜咕噜狐狸皮 | Steam | 500 |
| 咕噜咕噜小青蛙 | Xbox | 500 |
| 咕噜咕噜鸭鸭 | Epic | 500 |
| 咕噜咕噜小企鹅 | PlayStation 5 | 500 |

Steam补充表已核：咕噜咕噜狐狸皮（ToyDefinition.SteamFox），权重1、当期限购1、无额外条目事件条件；来源链接归属玩具组，实机也已捕获该项。其他平台名称与价格沿用 [玩具条目](../resources/toys.md) 并核官中语料，本机未做这些平台的运行时验证，不给它们臆测权重或来源排序。

## 特别说明

- 无人机站点组件：25000新币、当期限购1、权重0.01（**随机上架概率极低**），须先获得量子无人机站点设计图；已实测正常刷新后再次上架可以再次购买，**不是终身限购1**。详情见 [啾啾角组件机制](coocoo-corner.md) 和 [量子无人机](../blueprints/quantum_drones.md)。
- 资源探测器也在啾啾角普通玩具池，售价500、限购1，要求已解锁星光滨岸且灰烬山谷；极星供应站的1000新币不限量购买是另一店的价格/限额，不能混用。

## 数据来源

通用表来自客户端 ShopRandomItemsTable 与各来源链接；名词按Pedia/UI官方简中语言表的名称键关联，未将描述键当名称。价格、限购、获取类型、权重与条件连接词逐条对照已有原始导出。
外部工作区证据：`scripts/sr2-re/scratch/out/dailydeals-tables.json`、`scripts/sr2-re/out/sr2-coocoo-pool.xlsx`、`scripts/sr2-re/scratch/out/cond-map.json`；本次名称及完整字段核验见 `scripts/sr2-re/scratch/out/coocoo-kb-update-20261012/catalog-audit.json`。
