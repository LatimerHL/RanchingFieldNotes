# 看护员与看护员商店（Caretaker & Caretaker's Shop）

> 来源：游戏内通讯站对话（本地化 CommStation 表，中英）+ fandom（NPC概况）+ 1.3.0客户端商品/查询数据、原生代码与发明者实机确认（商店）。
> 适用：二代

## 概况

看护员（Caretaker）是 1.2.0「辉光史莱姆圣域」更新新增的 NPC，管理圣域（The Sanctuary）。它是灰色迷宫中众多机器人中唯一尚未腐朽或离去的一个。看护员说话带有独特的断句风格（如“开心开心”）。

## 解锁流程

- 圣域入口位于灰色迷宫；进入灰色迷宫后，前往**奇异天空（Impossible Sky）**区域
- 该区域有 **3 个损坏的看护员机器人**；首次互动时触发对话（“在哪里......照料......”“......辉光......”），之后互动只会显示“（它已经无法运转了。）”
- 互动后**圣域坐标加入你的船**，可从温室旁的船前往圣域
- 首次找到损坏看护员时，附近会有一只辉光史莱姆
- 圣域解锁后，所有辉光史莱姆的洗牌袋缩小至 95%（辉光出现率约 +5%）

## 看护员商店（Caretaker's Shop）

位于圣域内的商店，用**彩晶**（Sprinkles）购买商品。将彩晶存入商店入口旁的装置后即可购物；购买后左下角会显示所购物品与看护员的“好-好！”标志。

> 彩晶由圣域房间中的史莱姆/装置/辉光史莱姆产出（详见 [彩晶](../resources/other/sprinkles.md)）

### 商品目录与获取

客户端1.3.0固定目录共**85条**：**8条圣域房间**商品＋**77条常备货架**（23个主题、52个装饰/装置、2款真空枪风格）。完整官中名称、价格、获取配置和逐件前置见 [看护员商店完整商品池](caretaker-shop-pool.md)。

- 圣域房间1–8分别为**100、200、300、400、500、600、700、800彩晶**；这是8间**付费商品**，初始免费房间不算在这8条里。
- 常备目录不是77件从开局全部无条件可买：仍要按辉光收集、拥有主题、剧情等条件筛选。
- 主题按主题对象解锁；装置设计图需要另行制造；风格按配色对象解锁，不把“购买主题”“制造装置”“放置装置”混为同一事件。

### 辉光、主题与剧情前置

- **14个壁龛主题**挂“收集指定物种的辉光史莱姆，任一即可”的条件（`RadiantSlimeCollected`）。必须是**辉光形态**，普通粉红史莱姆等不算；不要求把列表物种全部收齐。
- 例如**街机壁龛主题**（500彩晶）：已收集过辉光双生／浣熊／水晶／粉红史莱姆中的任意一种。
- **9个关联装饰**要求**已经拥有对应壁龛主题**，不是要求主题已应用到某个房间：马戏平衡球→嘉年华；游泳圈／冲浪板→浪涛；烹饪游戏柜／冒险游戏柜→街机；冰霜王座→冰雪王座；蜂蜜罐→蜂蜜；热带饮品→岛屿；干草捆→农场。
- **便携制造器**（1000彩晶）：主线通关剧情结束。
- **勃艮第真空枪风格**（100彩晶）：与看护员初次见面剧情结束；发明者已实测对话后重新开店上架。
- 房间递进判据是**是否拥有前面的房间**。已核对的静态门控未发现“累计消费达到某金额”条件，不能把按拥有状态递进说成消费额门槛；也不据符号搜索断言其他未核系统绝不可能存在消费机制。

### 上架与新品提示：不是定时补货

> **2026-10-10日志／原生代码＋2026-10-12实机补充确认**：条件记录、货架界面快照和新品提醒是不同环节；不需要等次日或某个补货时刻。

1. **达成前置**：收集辉光史莱姆、取得主题、完成对应剧情等记录各自的条件。
2. **开店生成货架**：新开店会话清除旧商品缓存，随后界面读取商品、按当前条件构建货架。
3. **本次界面不即时加入关联商品**：发明者观察确认，**在店内买下前置物品后，要关闭并重新打开商店，关联物品才出现**。街机主题→两个游戏柜已验证；不是买完还要等游戏时间推进。
4. **返圣域新品提醒**：圣域场景组加载时比较当前库存条目数与上次开店记录的已看过条目数。当前数更大时触发看护员商店的新品/补货提示；打开商店会更新“已看过”的计数。

新品提醒采用**数量比较**，不是逐件GUID做新旧差集；“有新品提示”不意味着周期补货。两条固定规则的随机重置频率为`NEVER_RESET`，也没有营业日程限制，常驻营业。

原生调用链：`PlayerReminders.OnSceneGroupLoaded` → `GetInStockItemCount` → 与 `SeenItemsInStock` 比较 → `ForceSetHasNewStock`；开店时 `HandleShopOpened` 更新该计数。被动日志另确认 `StartUISession → ClearCachedItems`，再由界面读取重建缓存。

本轮返圣域日志新增的是**彩虹原野壁龛主题**；街机主题此前已在缓存中。购买街机主题后重开新增两个游戏柜、对话后重开新增勃艮第风格。这个区分只用于证据归属，不把玩家首次注意到某商品当成首次解锁。

### 圣域房间的逐级展示

房间规则设置展示上限1，并选择**第一件尚未拥有的商品**；因此按圣域房间1→8推进。规则在全部拥有后选择最后一件已拥有的商品，这不等于重新开放重复购买。常备货架没有同样的“只展示1件”限制，但仍按每件条件筛选。

## 看护员对话

### CaretakerSharedFeelings

天空......不一样了。

> Sky... not-same.


### CaretakerRuinedFunctionality

很好。还能、能用。

> Good. Still work-works.


### CaretakerANewHome

史莱姆之家~ 一个非、非常适合史莱姆的家。

> Home for slimes~ Good good home make for-for slimes.


### CaretakerSlimeSurprises

你、你好。

> Hello-lo.


### CaretakerInevitableChange

你、你好。

> Hello-lo.


### CaretakerRestoration

哗啦哗啦......哗啦哗啦。

> Splish-splish... splash-splash.


### CaretakerRoughEdges

啊，很好，修、修好了。

> Ahh. Good. Fix-fix.


### CaretakerShadowsOfThePast

很好。这、这里有暗影。

> Good. Shadow here-here.


### CaretakerDeepRoots

总是不一样......但又总是一样、一样。

> Always not-same...but always same-same, too-too.


### CaretakerOutOfReach

（你的脑海中闪过一丝画面。你伸出手，试图触碰，但穿越时空，期待着有什么东西落入你的手中，被你握住，然后转身看到......那是什么东西？某个人？画面模糊不清。影像褪色、模糊、断断续续。太多东西都已在时间的长河中消逝。）

> (There is a flicker of an image in your mind. Reaching up, reaching out, but through time, through space, expecting something to land in your hand, to be taken, to turn and see some…thing? Someone? It's vague. The image is faded, blurred, glitchy. So much has been lost to the distance of time.)

......

> ...


### CaretakerIncidental01

你好......欢、欢迎。

> Hello… welcome-come.


### CaretakerIncidental02

发现了史莱姆......？

> Found slimes…?


### CaretakerIncidental03

史莱姆......需、需要照料。

> Slimes… care for-for.


### CaretakerIncidental04

嗨，你好，你好。

> Hi, hello, hello.


### CaretakerIncidental05

辉光......史莱姆......？

> Radiant… slimes…?


### CaretakerIncidental06

找、找到了吗？

> Found any-any?


### CaretakerIncidental07

史莱姆在这里安全安全。

> Safe here for-for slimes.


### CaretakerIncidental08

史莱姆......？

> Have slimes…?


### CaretakerIncidental09

史莱姆......需要。

> Slimes… need.


### CaretakerIncidental10

寻找......带来很、很多。

> Find… bring many-many.


### CaretakerCaretakersDuty

这里......史莱姆......史莱姆？

> Here... slimes... slimes?


### CaretakersDutyNeed

需求？不。是照料。看护员......照、照料。

> Need...? No. Care. Caretaker... care-cares.

责任。是去......照料。

> Duty. To...to care.


### CaretakersDutyDuty

记忆......很遥远。无、无触及。但......是为、为了......照料而生。

> Memory ...far away. Can't reach-reach. But... built to-to... care.

辉光史莱姆，所有史莱姆。如果受、受伤，我会修复。辉光伤、伤害......

> Radiant Slimes, all slimes. If harm-harmed, I fix. Radiant harm-harm...

（一幅画面再次闪现在你的脑海中：看护员正从一只颜色奇特的史莱姆身上拂去透亮的彩晶。一股莫名的情绪涌上心头。你感到强烈的......责任感，是的没错，但这种感觉又与一种渴望交织在一起：渴望找到一个你命中注定要去的地方。）

> (An image flickers into your mind again, the Caretaker brushing crystalline sprinkles off an oddly-colored slime. Feelings—ones that feel strange to you—well up. You get the intense sense of... yes, duty, but it overlaps with a longing, a place in the world that you were custom made for.)

我负、负责照料。我负责修理。

> I care for-for. I fix.


### CaretakersDutyGoodbye

找到......很、很多。

> Find ... many-many.


### BrokenRobotDone

（已停止运行。）

> (It's no longer functioning.)


### BrokenRobotLine1

在哪里......照料......

> Where... care...

（你的船只添加坐标：圣域。）

> (New coordinates added to your boat: Sanctuary.)


### BrokenRobot

寻找......

> Find...


### MeetingTheCaretaker

......辉光......

> ... ... ...Radiant...

（你突然被一股强烈的情绪冲击。这感觉很奇怪，很遥远，几乎像是从你的外部涌来的。当你看着机器人时，这种感觉更加强烈，一个模糊的画面开始在你脑海中形成：一只闪闪发光、颜色奇特的史莱姆，被小心翼翼地呵护着。还没等你理解这一幕，画面就消失了。）

> (You are hit, suddenly, by a wave of emotion. It's odd, distant, almost outside of you. As you look at the robot, the feeling intensifies, and a flickering image begins to form in your mind: a slime of a shimmering, unusual color, being cradled and protected. It's gone almost before you can understand it.)


### MeetingTheCaretakerCaretake

辉光史莱姆......！......我......照料。

> Radiant Slimes...! .... I... care for-for.

很、很久。看......护......

> For-for far-time. Care...take...

......史莱姆......史莱姆......

> ....slimes... slimes...


### MeetingTheCaretakerGoodbye

带上，很好，很好。

> Bring, yes. Yes.


### SharedFeelings

（你的脑海中浮现出一幅转瞬即逝的画面：一片古老的星空，繁星模糊不清。一种难以言喻的感觉涌上心头......是岁月的痕迹？是浩瀚无垠的空间？某种难以名状却又无比遥远的距离？）

> (There is a brief image in your mind: an ancient sky, with unrecognizable stars. There is a sense, hard to name, of ...age? Space...? Some kind of undefinable but immense distance.)


### SharedFeelingsDistant

不一样了......很久很久以前......

> Not-same...far, far time ago-go...

够不着......但又不一样。新的。

> Can't reach-reach... but not-same. New.


### SharedFeelingsEmpathy

是的，我的确想更了解史莱姆。

> Yes, I do. Do to know slimes better-better.

认识我，认识你，认识我们......越来越好。变得......越来越好。

> Know I, you, we... better-better. Reach... better-better.

我感觉到了，你感觉到了，我们都感觉到了。从里到外。

> I feel, you feel, we feel. In-in, out-out.

天空......不一样了。我，我们，你......也不一样了。但......继续照料。

> Sky... not-same. I, we, you... not-same. Yet... care-care.


### RuinedFunctionality

很老很老。我也是，很久很久以前就建好了。

> Old-old. I too-too, built far-far ago.

我，我们一起工作。我修，我修，我修。它能、能用了。

> I, we work. I fix, I fix, I fix. It work-works.

注视，守护，抵达，照、照料。

> Watch. Hold. Reach. Care-care.


### RuinedFunctionalityLabyrinth

记忆......消失了？遥不可及。飘向远方。

> Memory...gone? Not-reach. Far-far.

迷宫、圣域，建造是一样一样。

> Labyrinth, Sanctuary, built same-same.

辉光史莱姆......棱镜核心会伤、伤害。

> Radiant Slimes... Prismacore harm-harm.

所以，带来这、这里。这里很安全。没有棱镜核心。安全安全。

> So bring here-here. Here safe. Not-Prismacore. Safe-safe.


### GrowingPatterns

生、生长。向前，向上，向外，生长......

> Grow-grow. For-forward, up, out, grow...

时、时间流逝，变化，生、生长。

> Time-time grow, change, grow-grow.


### GrowingPatternsGrowth

（你看到一幅闪烁的画面：一株植物长得和这株一模一样。然后：画面变了。干燥的环境中，植物长得像杂草一样，虽然瘦弱但还能存活。然后：画面变了。湿地里，植物蔓延开来，在水面上开花。画面重叠，然后消失了。）

> (You see a flickering image: A plant growing to look exactly like this one. Then: different. A dry environment, the plant growing weedy, thin, but surviving. Then: different. Wetlands, a plant spreading wide, flowering on the surface of the water. They overlap, and the image is gone.)

不、不知道，猜、猜不出。

> No-no know, no-no guess.

让它生、生长。成、成为圣域。

> Grow-grow this. Sanctuary this.

如果圣域不是这样，那植物就不是这样。

> If Sanctuary not-this, then plant not-this.


### GrowingPatternsChange

棱镜核心、热量、水、寒冷、阳光、食、食物。一切都在变化。

> Prismacore, heat, water, cold, sun, food-food. All change-change.

我、我，你、你，这里、这里，史莱姆、史莱姆......世界造就你，你造就世界。就是这样。

> I-I, you-you, here-here, slimes-slimes... World make you, you make world. Yes.


### ANewHome

这里的家会让史莱姆开心开心吗？

> Home here make slimes happy-happy?


### ANewHomeHappy

是的......史莱姆在哪里都很开、开心。

> Yes... Slime happy-happy anywhere.

但最好还是待在家里，安全安全，对吧？

> But better when home safe-safe. Yes?


### ANewHomeSafe

迷宫不安全，是、是的。会伤害史莱姆。

> Labyrinth not-safe, yes-yes. Harm-harm slimes.

迷宫......史莱姆不一样。带到这里来，保证安全安全。

> Labyrinth... slimes not-same. Bring here, keep safe-safe.


### ANewHomeGoodbye

史莱姆懂、懂的，知道最、最好的时机。

> Slimes know when best-best. Always know-know.


### SlimeSurprisesBed

床......很久很久以前的事了。记忆......浮现。

> Bed... was far-far-ago. Memory... reached.

辉光棉兔史莱姆......辉光藤蔓史莱姆......

> Radiant Cotton Slime... Radiant Tangle Slime...


### SlimeSurprisesCotton

棉兔史莱姆跳上......然后弹跳。

> Cotton Slime went up... then bounce-bounce.

（你脑海中闪过一幅画面：看护员神采奕奕。一只辉光棉兔史莱姆，坐在它的腿上，开始兴奋地上下弹跳。看护员试图起身，却发现自己被按倒在地。喜悦之情涌上，那是一种简单的快乐。）

> (You see a mental image flicker: The Caretaker, fresh and shiny. A Radiant Cotton Slime, sitting in its lap, starts to excitedly bounce up and down. The Caretaker tries to get up, and it realizes it had been pushed into the ground. Delight sparks, a simple pleasure.)


### SlimeSurprisesTangle

藤蔓史莱姆扭来扭去......然后我也扭来扭去。

> Tangle Slime wiggle wiggle... then I wiggle-wiggle.

（另一个简短的画面：看护员正忙着什么，没有注意到腿上的辉光藤蔓史莱姆正将藤蔓缠绕进它的身体。突然，你感觉到有什么东西被拉扯了一下，一种深层而奇特的连结让看护员开始不受控制地旋转，非常刺激！）

> (Another brief image: The Caretaker, occupied with something and not noticing as the Radiant Tangle Slime in its lap winds vines into its body. Suddenly, you feel wires get tugged, a deep and odd connection that causes the Caretaker to spin around in uncontrolled, exhilarating circles!)


### SlimeSurprisesGoodbye

好玩好玩！

> Fun-fun!


### InevitableChangeOthers

啊......受、受伤了。看护员......走、走了？时间的伤害。缓慢。

> Oh... harm-harmed. Caretakers... gone-gone...? Time harm. Slow.

迷宫......伤害迅、迅速。大、大量伤害。现在没了。

> The Labyrinth... harm-harm fast. Many-many harm. Gone now.

（脑海中一闪而过。时间无可避免地流逝，苔藓爬满了这里的看护员。在迷宫的另一边，棱镜干扰贯穿了其他人：一阵疼痛、缓慢、困惑、记忆的丧失、磨砺、停滞。对你而言，这是一种平静的、无奈的失去，既陌生又如此真切。）

> (A brief flicker, in your mind. An inevitable progression of time, moss crawling over the Caretaker, here. There, in the Labyrinth, Prisma Disruptions run through the others: an ache, a slow, a confusion, loss of memory, a grinding, a halt. For you, a calm resignation of loss that feels both alien yet so very immediate.)

......我在这、这里，不在那里。所以，最、最后。

> ...I here-here, not-there. So, last-last.


### InevitableChangeHarm

时间总是伤害。棱镜核心......加速伤害。

> Time-harm always. Prismacore... fast-harm.

你、你，我、我，现在这里，未来已逝、逝去。伤害不伤害，未来已逝、逝去。

> You-you, I-I, here now, gone-gone future. Harm or not-harm, gone-gone future.


### InevitableChangeGoodbye

我们就在这里？是的。我照、照料。你照、照料.....很好。

> Here, us? Yes. I care-care. You care-care. ...Good.


### RestorationWater

不，不。不伤害。水能修、修复。

> No, no. Not-harm. Water fix-fix.

水......从、从前抵达。带、带到现在。

> Water... reach place before-fore. Bring to-to now.


### RestorationFix

水能解、解决大部分问题，但并非全部。会损、损害饥饿之口。

> Water fix-fix most. Not all. Harm-harm hungry-mouths.


### RestorationTarr

（脑海中闪过一幅画面：噼啪作响的彩虹能量，下方是一大团焦油怪，被水流冲击。焦油怪被摧毁，你感到无比振奋！但这种感觉几乎瞬间消失。）

> (There is a brief image in your mind, crackling rainbow energy, a huge blob of tarr beneath it, hit by water. Triumph as the tarr is destroyed! The feeling is gone almost instantly.)

焦油怪？是的......如果是焦油怪，那就是焦油怪。危险，很危险。

> Tarr? Yes... if tarr, then tarr. Harm-harm.


### RestorationGoodbye

是的！水会损害焦油怪，修复非焦油怪。

> Yes! Water harm tarr, fix not-tarr.


### RoughEdgesBreak

坏了，是的，坏掉了。兴奋的史、史莱姆受伤，坏了。

> Break, yes, broke. Excited slime-slime harm-broke.

快乐的史莱姆，愤怒的史莱姆，都闹腾又好玩。

> Happy slime, angry slime, both rough-fun.


### RoughEdgesMochi

莫、莫奇？

> Mochi-mochi?


### RoughEdgesGoodbye

我、你、我们、史莱姆，都会在伤害中改变。快乐也会带来改变。

> I, you, us, slimes, both harm-change. Happy-change too.

你和这些史莱姆也一样。看护员们也、也一样。

> Same-same, slimes, you. Caretakers too-too.

一样一样。

> Same-same.


### PassageOfTime

哦！你在这儿？

> Oh! You here?


### PassageOfTimeWait

不。等等。遥远过去，没有史莱姆。没有你，没有我们。只有一个。

> Not. Wait-wait. Far-time, no slimes. No you, no we. One-one only.

（脑海中闪过一幅短暂而模糊的画面：日日夜夜，仿佛转瞬即逝，漫长得如同几个世纪，而你始终坐着，等待着去做你命中注定要做的事，一个遭到拒绝和挫败的目标，但它一定还会再次到来。等待，等待，再等待。）

> (A brief, flickering image pops into your mind: days and nights, one after another, taking aeons all in an instant, and through it all, sitting, waiting to be able to do what you were meant to do, a purpose denied and frustrated, but which surely, surely would come again. Waiting and waiting and waiting.)


### PassageOfTimeChange

会、会改变。总、总是改变。

> Would-would change. Change-change always.

等待，等待，等待，过去。未来，等待，等待，等待。现在，我照、照料。

> Wait, wait, wait, past. Future, wait, wait, wait. Now, I care-caretake.


### PassageOfTimeGoodbye

未来无需等待？或许可以实现。未来还很远。

> Future not-wait? Maybe can-do. Future far-far.

但是，我、你、我们、史莱姆，都在现、现在。

> But I, you, we, slimes, all now-now.


### PotMeetKettle

工、工作，照、照料......

> Work-work, care-care...


### PotMeetKettleMove

是的，小、小心，慢、慢来。我个子大，我脑子笨。有受伤风险。

> Yes, careful-ful, slow-slow. I big, I dense. Harm-harm risk.

史莱姆很安全，不会伤人。伤人的是其他......也许是你。

> Slimes safe, can't-harm. Things-harm... maybe you-harm.


### PotMeetKettleThings

是的。没有伤人！小、小心。伤人的是其他，没错......

> Yes. Have not! Careful-ful. Things-harm, yes...

（脑海中闪过一幅画面：看护员慢悠悠地走着。它转过一个弯，胳膊腿大摇大摆，撞到了一大堆罐子，罐子摔得粉碎。里面的东西散落一地，发出巨大的撞击声！看护员慌忙地试图把它们重新拼起来，结果却只是把它们堆成了一大堆。画面渐渐淡出。）

> (An image flickers into your mind: the Caretaker, ambling along. As it rounds a corner, its widely-swinging arms and legs bump into a big stack of pots, which shatter. The contents go flying everywhere with a huge crash! The Caretaker scrambles, trying to put them back together, but actually just gathering everything into a huge pile. The image fades.)

我负责修理！不想弄坏，不想造成伤害，所以慢慢来。

> I fix! Want not-break, want not-harm, so move slow.


### PotMeetKettleGoodbye

嗯......真是越来越担心。

> Hmm... worry more-more.


### ShadowsofthePast

有暗影总是很、很好。

> Always good-good have shadow.


### ShadowsofthePastShadow

暗影史莱姆也一样。暗影，棱镜，一对。

> Shadow Slimes too-too. Shadow, prisma, pair.


### ShadowsofthePastPair

成对，回溯。造就，成长为一对。成为一体。

> Pair, back-backward. Built, grown pair. One-one.

棱镜核心附近，一切都好好。没有伤害。

> Good-good near Prismacore. Not-harm.


### ShadowsofthePastGoodbye

工作、配对、建造未建造的。这是责任......

> Work, pair, built-not-built. ...Duty.

是的，责任。

> Yes, duty.


### DeepRoots

虫子变了，但还在。植物变了，但还在。史莱姆变了，但还在。

> Bugs not-same, still here. Plants not-same, still here. Slimes not-same, still here.


### DeepRootsTime

过去，未来......无法改变现在。

> Past, future... not now-change.

遥远的过去，遥远的未来，遥远的变迁。

> Far ago, far future, far-change.


### DeepRootsOld

只看现在，不要都看。只有活得久才能都看。

> Look-now, not look-both. Only live-far can look-both.


### DeepRootsGoodbye

嗯。来这里，很、很多次......但现在，永远在。所以：看现在。

> Hmmm. Here, many-many time... But now-always. So: look-now.

但看过过去。所以：都看......？

> But looked-then. So: look-both...?

......很好，都、都看，很开心。

> ...Is good, happy, to-to look-both.


### OutOfReachLook

伸手去够、够固定墙......但是......伸手去、去够......其他东西。

> Reach for-for fix wall... but...reach for-for... other.

其他......没有。没了？没了。

> Other... not-had. Gone? Gone.


### OutOfReachFind

现、现在，永远。我看护。照、照料。如果走了，那就走、走了。

> Now-now always. I caretake. Take care-care. If gone, then gone-gone.


### OutOfReachGoodbye

为、为了不让未来逝去。停止我、你，阻止我们......不断追寻......嗯。

> For-for make future not-gone. Stop I, you, us reach-reaching. ...Yes.

小碧，我在这、这里。

> Bea, I here-here.

