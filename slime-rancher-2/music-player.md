# 音乐播放器（Music Player）

> 来源：游戏内本地化 Pedia 表（m.music.* 曲目名，官中）+ UI 表（b.music / b.toggle_media_play / b.stop / b.no_music_playing，官中）
> 适用：二代（1.3.0 新增）

## 概况

音乐播放器可在游戏内播放本作原声音乐。

- 入口：史莱姆百科 > **音乐播放器**（Music Player）
- 空列表提示：当前没有播放内容。请选择一首歌曲播放！
- 曲目列表以「区域 + 时段」为主要组织方式，并有剧情／活动曲目与**收音机**（Radio）系列独立曲目

## 曲目一览（官中）

### 收音机（Radio）

| 曲目 | 原文 |
|------|------|
| 收音机（庭院小憩） | Radio (Courtyard Chill) |
| 收音机（远方的家） | Radio (Distant Home) |
| 收音机（靛蓝古董） | Radio (Indigo Antiquity) |
| 收音机（最后一舞） | Radio (Last Dance) |
| 收音机（光年之外） | Radio (Lightyears Away) |
| 收音机（小人国进行曲） | Radio (Lilliput March) |
| 收音机（苔藓节拍） | Radio (Mossy Beat) |
| 收音机（量子回忆） | Radio (Quantum Memories) |

> 注：其中**奇异天空（Impossible Sky）／梦幻之地（Dream Land）／熔岩深渊（Lava Depths）／生态箱（The Terrarium）／水务设施（Waterworks）** 即**灰色迷宫**的 5 个子区域（详见 `world/labyrinth.md`）；这组曲目名也是这些子区域**官中名称**的确认来源（此前中文社区多用俗称「中枢／熔岩深壑／水厂」）。

### 区域主题（按时段）

| 区域 | 时段变体 |
|------|---------|
| 温室（The Conservatory） | 白昼 / 梦境 / 深夜 / 夜晚 / 悠然 / 静谧 |
| 星光滨岸（Starlight Strand） | 白昼 / 梦境 / 深夜 / 夜晚 / 悠然 / 静谧 |
| 彩虹原野（Rainbow Fields） | 白昼 / 梦境 / 深夜 / 夜晚 / 悠然 / 静谧 |
| 落粉峭壁（Powderfall Bluffs） | 白昼 / 梦境 / 深夜 / 夜晚 / 悠然 / 静谧 |
| 灰烬山谷（Ember Valley） | 白昼 / 梦境 / 深夜 / 夜晚 / 悠然 / 静谧 |
| 梦幻之地（Dream Land） | 白昼 / 白昼流转 / 夜晚 / 夜色渐逝 |
| 奇异天空（Impossible Sky） | 白昼 / 白昼流转 / 夜晚 / 夜色渐逝 |
| 熔岩深渊（Lava Depths） | 白昼 / 白昼流转 / 夜晚 / 夜色渐逝 |
| 生态箱（Terrarium） | 白昼 / 白昼流转 / 夜晚 / 夜色渐逝 |
| 水务设施（Waterworks） | 白昼 / 白昼流转 / 夜晚 / 夜色渐逝 |

### 剧情／活动曲目

| 曲目 | 原文 |
|------|------|
| 添加至立购坊购物车 | Add to Cart, ProntoMart |
| 未来的每一天 | All The Days Ahead |
| 悄然升起的彩虹 | Creeping Rainbows |
| 有志者事竟成 | Some Day, Somehow |
| 夜市 | The Night Market |
| 小小雪花 | Tiny Snowflakes |
| 雷霆轰鸣 | Crashing Lightning |
| 雨中水洼 | Puddles in the Rain |
| 缠绕藤蔓 | Tangling Vines |
| 旋转旋风 | Whirling Dervish |
| 一切都归结于此 | It All Comes Down to This |
| 棱镜核心（不和谐） | The Prismacore (Discordant) |
| 棱镜核心（和谐） | The Prismacore (Harmonized) |
| 棱镜干扰 | Prisma Disruption |

## 事件音乐开关

播放器相关的氛围机制可关闭：设置中的**事件音乐**（Event Music）项可以禁止游戏在特定事件时切换音乐（如焦油怪出现、天气突变等），见 `options/audio.md`。
