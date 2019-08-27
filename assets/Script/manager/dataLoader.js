class LocalDataLoader {
    constructor() {
        this.title = ["搞笑", "古风"];
        this.keywords = [["坏", "程度", "世上", "麽", "说", "想", "信念", "做事", "绝不", "后悔", "现在", "将来", "总是", "依赖", "永远", "长不大", "会", "死", "久", "活着", "一定", "开心", "想", "成为", "一个", "温柔", "温柔", "深深", "了解", "那种", "温柔", "相待", "感觉", "有来生", "我要", "当条", "被子", "躺", "床上", "晒太阳", "清楚", "知道", "无法", "保证", "将来", "永远", "一起", "横亘", "面前", "沉重", "人生", "漫长", "时间", "望而却步", "梦", "不会", "逃走", "逃走", "一直", "心满意足", "享受", "一点", "快乐", "走向", "幸福", "唯一", "途径", "教练", "想", "打篮球", "到底", "速度", "生活", "再次", "相遇", "没有", "实力", "越爱", "说大话", "世界", "没有", "实力", "整天", "希望", "赞赏", "不到", "最后", "绝不", "轻言", "放弃", "放弃", "比赛", "结束", "没有", "杀", "觉悟", "没有", "杀戮", "资格", "一切都在", "意料之中", "总是", "轻言", "放弃", "多久", "只会", "原地踏步", "夜晚", "黑暗", "黎明", "总是", "会", "到来", "记住", "名字", "世界", "地方", "一定", "会", "见", "前方", "路", "多苦", "走", "方向", "正确", "崎岖不平", "站", "原地", "更", "接近", "幸福", "世界", "也许", "有人", "喜欢", "孤独", "没有", "人能", "承受", "孤独"],
        ["寥落", "古", "行宫", "宫花", "寂寞", "红", "白头", "宫女", "闲坐", "说", "玄宗", "白日", "依山", "黄河", "入海流", "欲穷千里目", "更上一层楼", "三日", "入厨", "洗手", "作", "羹汤", "未谙", "姑", "食性", "先遣", "小姑", "尝", "红豆", "生", "南国", "春来", "发", "几枝", "愿君", "采撷", "此物", "相思", "山中", "相送", "罢", "日暮", "掩", "柴扉", "春草", "明年", "绿", "王孙", "归不归", "绿蚁", "新", "醅", "酒", "红泥", "火炉", "晚来", "天欲雪", "饮", "一杯", "北斗七星", "高", "哥舒夜", "带", "刀", "窥", "牧马", "不敢", "临洮", "鸣筝", "金粟柱", "素手玉", "房前", "欲", "周郎顾", "时时", "误", "拂弦", "岭外", "音书断", "经冬复", "历春", "近", "乡情", "更怯", "不敢", "问来", "江流", "石不转", "遗恨", "失吞", "吴", "客路", "青山", "外", "行舟", "绿水", "前", "潮平两岸阔", "风正一帆悬", "海日生", "残夜", "江春入", "旧年", "乡书", "达", "归雁", "洛阳"]];
        this.corpus = [["人哪有好的，只是坏的程度不一样而已。", "我不管这个世上的人怎麽说我，我只想依照我的信念做事，绝不后悔，不管现在将来都一样。", "总是依赖别人的话，就永远长不大。", "我们会死很久，所以活着的时候一定要开心。", "我想成为一个温柔的人，因为曾被温柔的人那样对待，深深了解那种被温柔相待的感觉。", "如果有来生，我要当条被子，不是躺在床上就是在晒太阳！", "我清楚地知道，我们无法保证将来能永远在一起，横亘在我们面前的是那沉重的人生和漫长的时间，让人望而却步。", "梦不会逃走，逃走的一直都是自己。", "心满意足享受每一点快乐，是走向幸福的唯一途径。", "教练，我想打篮球。", "到底要以怎样的速度生活，才能与你再次相遇。", "人就是这样，越是没有实力越爱说大话。世界上只有没有实力的人，才整天希望别人赞赏。", "不到最后绝不轻言放弃，一旦放弃了，比赛也就结束了。", "没有被杀的觉悟，就没有杀戮的资格。", "一切都在我的意料之中，除了你。", "你总是这样轻言放弃的话，无论多久都只会原地踏步。", "不管夜晚多么黑暗，黎明总是会到来。", "只要记住你的名字，不管你在世界的哪个地方，我一定会去见你。", "不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。", "世界上也许有人喜欢孤独，但却没有人能承受孤独。"],
        ["寥落古行宫，宫花寂寞红。", "白头宫女在，闲坐说玄宗。", "白日依山尽，黄河入海流。", "欲穷千里目，更上一层楼。", "三日入厨下，洗手作羹汤。", "未谙姑食性，先遣小姑尝。", "红豆生南国，春来发几枝。", "愿君多采撷，此物最相思。", "山中相送罢，日暮掩柴扉。", "春草明年绿，王孙归不归？", "绿蚁新醅酒，红泥小火炉。", "晚来天欲雪，能饮一杯无？", "北斗七星高，哥舒夜带刀。", "至今窥牧马，不敢过临洮。", "鸣筝金粟柱，素手玉房前。", "欲得周郎顾，时时误拂弦。", "岭外音书断，经冬复历春。", "近乡情更怯，不敢问来人。", "江流石不转，遗恨失吞吴。", "客路青山外，行舟绿水前。", "潮平两岸阔，风正一帆悬。", "海日生残夜，江春入旧年。", "乡书何处达？归雁洛阳边。"]];
    }

    getTitle(index){
        return this.title[index];
    }

    getKeywords(index){
        return this.keywords[index];
    }

    getCorpus(index){
        return this.corpus[index];
    }

}

const localDataLoader = new LocalDataLoader();
module.exports = localDataLoader;

// const res = localDataLoader.getTitle(0)