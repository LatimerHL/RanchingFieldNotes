# 限时活动（Events）

> 来源：Slime Rancher Wiki（fandom：Party Weekend / Wiggly Wonderland）+ 游戏内文本
> 版本：Slime Rancher 1

## 派对周末（Party Weekend）

**简介**：每周五至周日（当地时间）举办的常驻活动，1.2.2「派对开启更新」引入，是游戏内持续最长的活动。

### 活动内容

- **派对巨型史莱姆**：每周一只，出现在致远牧星某个固定位置（游戏代码中登记 30 个位置，实际使用 29 个，1 个标注 DEBUG 未使用），每周位置不同；**喂 10 个任意食物**即可撑爆
- **撑爆掉落**：4 只戴派对眼镜与帽子的粉红史莱姆 + **1 个稀有装饰** + **8 个派对箱**（每个含 1 个装饰）——共 9 个装饰
- **派对礼物**：活动期间（周五至周日全天），致远牧星各地可随机发现特殊礼物（派对箱），普通箱子有 **50% 概率**变成派对箱
- **稀有装饰**：普通装饰有 **5% 概率**变为稀有装饰（招财/焦油怪/黄金/彩虹/派对巨型主题装饰）；派对巨型史莱姆撑爆必掉稀有
- **过期派对箱**：周末结束后遗留的派对箱仍可开启，但只会掉落粉红装饰或稀有装饰

### 历史特殊事件

- **2019 万圣节派对**：2019-10-30 至 11-01 举办万圣节主题派对巨型活动，紧接 11-01 至 11-03 常规派对周末——11 月 1 日成为唯一同时存在两只派对巨型、三种常规装饰可掉落的日子
- **2020 跨年派对**：2020-12-31 至 2021-01-01 的额外派对巨型与常规周末（1 月 1 日为周五）重叠，同日出现两只派对巨型
- **Switch 版排期**：Plortable Edition 首发时缺少 2021 年排期，2021-09-17 才正式出现第一只派对巨型

### 历史排期（1.4.4 常驻化前，2018~2021）

1.4.4 之前派对排期为 Monomi Park 每年手动硬编码（周号连续不重置：2018 W1 → 2021 W184）；2021-12 起按 ISO 周号自动运行。完整逐周数据：`scripts/party-gordo/party-historical.json`（188 条，含区域/位置图/装饰），脚本 `node party-gordo.js <往年日期>` 自动走历史排期（2018-05-25 ~ 2021-11-26）。

- **2018**（1.2.2，5 月 25 日首周）：W1~W32，共 32 周；万圣为独立 Special（10/30~11/1，#10 靛蓝采石场，南瓜灯装饰）
- **2019**：W33~W84，共 52 周；万圣 Special（10/30~11/1，#10 靛蓝采石场）；另有 **Special: Christmas Eve**（12/24 单日，#7 靛蓝采石场，焦油灯笼装饰）
- **2020**：W85~W136 共 52 周 + 跨年额外派对（12/31~1/1，#2 干涸岩礁）；万圣未单列（W128 常规条目，10/30~11/1，#14 被苔岛·蘑菇湖，南瓜灯+焦油灯笼）
- **2021**：W137~W184 共 48 周（至 11/26，随后 1.4.4 常驻化）
- 万圣位置变迁：**#10 靛蓝采石场（2018/2019）→ #14 被苔岛·蘑菇湖（2020 起，含常驻版 W44）**
- 往年位置全部落在 29 个登记位置内，位置图与现版共用（无重复图片）

## 嘟嘟乐园（Wiggly Wonderland）

**简介**：每年 12 月下旬举办的节日活动，1.1.2（2017-12-19）首次举办，灵感来自「圣诞十二天」（Twelve Days of Christmas）。官方口径活动持续 **12 天**，实际日程为 **12 月 18 日至 30 日共 13 天**（每天一只星闪闪）。

### 活动内容

- **星闪闪史莱姆**：活动期间每天一只，在预定位置出现（被苔岛、干涸岩礁、靛蓝采石场、蘑菇湖、古代遗迹、玻璃荒漠、环礁岛、灰烬岛等轮换）；接近时它会唱歌，随后自行爆炸
- **钟声**：星闪闪爆炸后产生大量**钟声**（共 13 种音调：C/C#/D/D#/E/F/F#/G/G#/A/A#/B/C^；C^ 为 1.4.1 加入）；每次遭遇数量固定——2018 年每天 100 个（12 音调，无 C^）、13 天合计 1306；2019 年起每天 108 个（含 C^，12/30 为 114 个）、13 天合计 1410；一次遭遇就有可能集齐全部音调（2018 为 12 种、2019 起 13 种）
- **传送门**：星闪闪消失处生成返回牧场的传送点，持续到现实时间当日午夜
- **钟声管理器（Chime Changer）**：1.4.1（2019 活动）引入的牧场设施，位于 Decorizer（装饰机）旁；按按钮循环切换已解锁乐器，对所有钟声同时生效，解锁后该存档永久保留。**解锁**：爆 2 只星闪闪获得**钢琴**后管理器出现（存档在更新前已有钟声、或 12/30 爆出「史莱姆歌声」的只需爆 1 只）。**乐器共 9 种**（解锁顺序）：马林巴琴（默认）→ 钢琴 → 钟琴 → 八音盒 → 科拉琴 → 史莱姆歌声 → 小提琴 → 长笛 → 芯片音乐（后 3 种为 2020/1.4.3 新增）

### 历年钟声掉落

- 2018/2019/2020/2021+ 完整逐日掉落表：`scripts/twinkle-slime/chime-loot.json`（每天每种音调数量）
- 各音调年度合计（逐日求和与 fandom 表一致）：
  - 2018（12 音调，无 C^）：C 114 / C# 104 / D 113 / D# 104 / E 119 / F 103 / F# 105 / G 117 / G# 110 / A 105 / A# 106 / B 106，合计 **1306**
  - 2019、2020（13 音调）：上述 12 音调合计相同，另加 C^ 每年 104（每天 8 个），合计 **1410**
  - **2021+（1.4.4 常驻版）＝ 2020 表**：排期未来化后掉落固定不再逐年变（每天 108 个，12/30 为 114 个）
- 2017 年无星闪闪、无钟声（箱子按日期掉落装饰）

### 历届活动（常驻化之前）

> 2021 年 1.4.4 起排期未来化，嘟嘟乐园成为**常驻年度活动**（每年自动运行，无需版本更新）；以下为常驻前的各年度版：

| 年份 | 版本 | 日期（本地时间） | 特色 |
|------|------|------------------|------|
| 2017 | 1.1.2 | 12 月 20 日 - 次年 1 月 1 日 | 首次活动；**无星闪闪**——所有箱子按本地日期掉落对应装饰 |
| 2018 | 1.3.2 | 12 月 18 日 - 12 月 30 日 | **星闪闪史莱姆首次加入**，活动核心玩法成形（唱歌→钟声→传送门） |
| 2019 | 1.4.1 | 12 月 18 日 - 12 月 30 日 | 引入**钟声管理器**及其音色；新增 C^ 钟声音调 |
| 2020 | 1.4.3 | 12 月 18 日 - 12 月 30 日 | 第四次活动；新增芯片音乐/小提琴/长笛音色 |
| 2021+ | 1.4.4 | 每年 12 月 18 日 - 12 月 30 日 | **排期未来化**，活动常驻（最终版） |

#### 2017（1.1.2）逐日装饰掉落表

> 无星闪闪史莱姆；活动期（12/20~次年 1/1）所有箱子按**电脑本地日期**掉落对应装饰；1 月 1 日当天所有普通装饰等概率掉落；焦油怪/招财猫/黄金装饰在整个窗口内低概率替换普通装饰。

| 日期 | 装饰 |
|------|------|
| December 20th | 粉红装饰（Pink Ornament） |
| December 21st | 荧光装饰（Phosphor Ornament） |
| December 22nd | 喵喵装饰（Tabby Ornament） |
| December 23rd | 炸弹装饰（Boom Ornament） |
| December 24th | 辐射装饰（Rad Ornament） |
| December 25th | 蜂蜜装饰（Honey Ornament） |
| December 26th | 量子装饰（Quantum Ornament） |
| December 27th | 猎猫装饰（Hunter Ornament） |
| December 28th | 水滴装饰（Puddle Ornament） |
| December 29th | 旋风装饰（Dervish Ornament） |
| December 30th | 藤蔓装饰（Tangle Ornament） |
| December 31st | 马赛克装饰（Mosaic Ornament） |
| January 1st | 全部普通装饰等概率 |

#### 2018（1.3.2）逐日日程（星闪闪首次加入）

> 爆炸产生钟声（**12 种音调，无 C^**）；12/20 起箱子额外掉落上年 15 种装饰；钟声掉落表与常驻版不同。

| 日期 | 位置 | 图（实景/地图/爆炸后） |
|------|------|------|
| December 18th | 被苔岛·蘑菇湖 | `WigglyWonderlandTS1.png` `WigglyWonderlandTSMap1.png` `WigglyWonderlandTS1Aftermath.png` |
| December 19th | 靛蓝采石场 | `WigglyWonderlandTS2.png` `WigglyWonderlandTSMap2.png` `WigglyWonderlandTS2Aftermath.png` |
| December 20th | 干涸岩礁 | `WigglyWonderlandTS3.png` `WigglyWonderlandTSMap3.png` `WigglyWonderlandTS3Aftermath.png` |
| December 21st | 古代遗迹 | `WigglyWonderlandTS4.png` `WigglyWonderlandTSMap4.png` `WigglyWonderlandTS4Aftermath.png` |
| December 22nd | 干涸岩礁·环礁岛 | `WigglyWonderlandTS5.png` `WigglyWonderlandTSMap5.png` `WigglyWonderlandTS5Aftermath.png` |
| December 23rd | 靛蓝采石场 | `WigglyWonderlandTS6.png` `WigglyWonderlandTSMap6.png` `WigglyWonderlandTS6Aftermath.png` |
| December 24th | 被苔岛 | `WigglyWonderlandTS7.png` `WigglyWonderlandTSMap7.png` `WigglyWonderlandTS7Aftermath.gif` |
| December 25th | 古代遗迹 | `WigglyWonderlandTS8.png` `WigglyWonderlandTSMap8.png` `WigglyWonderlandTS8Aftermath.png` |
| December 26th | 玻璃荒漠 | `WigglyWonderlandTS9.png` `WigglyWonderlandTSMap9.png` `WigglyWonderlandTS9Aftermath.png` |
| December 27th | 被苔岛 | `WigglyWonderlandTS10.png` `WigglyWonderlandTSMap10.png` `WigglyWonderlandTS10Aftermath.png` |
| December 28th | 靛蓝采石场·灰烬岛 | `WigglyWonderlandTS11.png` `WigglyWonderlandTSMap11.png` `WigglyWonderlandTS11Aftermath.png` |
| December 29th | 古代遗迹 | `WigglyWonderlandTS12.png` `WigglyWonderlandTSMap12.png` `WigglyWonderlandTS12Aftermath.png` |
| December 30th | 干涸岩礁 | `WigglyWonderlandTS13.png` `WigglyWonderlandTSMap13.png` `WigglyWonderlandTS13Aftermath.png` |

#### 2019（1.4.1）逐日日程

> 钟声管理器（Chime Changer）首次加入，新增 C^ 音调（13 种）；2017/2018 的箱子装饰掉落不再回归；钟声掉落表与常驻版不同。

| 日期 | 位置 | 图（实景/地图/爆炸后） |
|------|------|------|
| December 18th | 靛蓝采石场 | `WigglyWonderland19TS1.png` `WigglyWonderland19TSMap1.png` `WigglyWonderland19TS1Aftermath.png` |
| December 19th | 被苔岛 | `WigglyWonderland19TS2.png` `WigglyWonderland19TSMap2.png` `WigglyWonderland19TS2Aftermath.gif` |
| December 20th | 古代遗迹·庭院 | `WigglyWonderland19TS3.png` `WigglyWonderland19TSMap3.png` `WigglyWonderland19TS3Aftermath.png` |
| December 21st | 干涸岩礁 | `WigglyWonderland19TS4.png` `WigglyWonderland19TSMap4.png` `WigglyWonderland19TS4Aftermath.png` |
| December 22nd | 靛蓝采石场 | `WigglyWonderland19TS5.png` `WigglyWonderland19TSMap5.png` `WigglyWonderland19TS5Aftermath.png` |
| December 23rd | 古代遗迹 | `WigglyWonderland19TS6.png` `WigglyWonderland19TSMap6.png` `WigglyWonderland19TS6Aftermath.png` |
| December 24th | 被苔岛·蘑菇湖 | `WigglyWonderland19TS7.png` `WigglyWonderland19TSMap7.png` `WigglyWonderland19TS7Aftermath.png` |
| December 25th | 靛蓝采石场·灰烬岛 | `WigglyWonderland19TS8.png` `WigglyWonderland19TSMap8.png` `WigglyWonderland19TS8Aftermath.png` |
| December 26th | 干涸岩礁·环礁岛 | `WigglyWonderland19TS9.png` `WigglyWonderland19TSMap9.png` `WigglyWonderland19TS9Aftermath.png` |
| December 27th | 古代遗迹 | `WigglyWonderland19TS10.png` `WigglyWonderland19TSMap10.png` `WigglyWonderland19TS10Aftermath.png` |
| December 28th | 玻璃荒漠 | `WigglyWonderland19TS11.png` `WigglyWonderland19TSMap11.png` `WigglyWonderland19TS11Aftermath.gif` |
| December 29th | 被苔岛 | `WigglyWonderland19TS12.png` `WigglyWonderland19TSMap12.png` `WigglyWonderland19TS12Aftermath.png` |
| December 30th | 干涸岩礁 | `WigglyWonderland19TS13.png` `WigglyWonderland19TSMap13.png` `WigglyWonderland19TS13Aftermath.png` |

#### 2020（1.4.3）逐日日程

> 新增芯片音乐/小提琴/长笛三种钟声乐器（共 9 种）；**逐日位置与常驻化后（2021+）完全一致**，图片沿用 `WigglyWonderlandLocation{N}` 系列，不重复收录。

#### 数据文件

> 历年逐日数据存于 `scripts/twinkle-slime/wiggly-historical.json`（2017 装饰表 + 2018/2019/2020 逐日位置与图片），图片存于 `scripts/twinkle-slime/images/`；生成脚本 `parse-historical.js`，抓图脚本 `fetch-historical-images.js`。

### 细节

- 活动使用**电脑本地时钟**判断是否激活——理论上改系统时间可随时体验（游戏运行中改时间需重启游戏才会刷新星闪闪）
- 装饰品（58 种）中部分为派对周末/嘟嘟乐园限定来源

## 关联资料

- 派对巨型史莱姆：`slimes/party_gordo_slime.md`
- 星闪闪史莱姆：`slimes/echo_note_gordo_slime.md`
- 钟声与乐器：`resources/unique/echo_notes.md`
- 装饰品（58 种）：`resources/unique/ornaments.md`
- 更新版本记录：`overview.md`
