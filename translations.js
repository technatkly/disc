const translations = {
    'zh-CN': {
        title: 'DISC 性格测试',
        submitButton: '提交问卷',
        resultsTitle: '您的结果',
        questions: [
            {
                text: "大家最有可能使用哪些词语来描述我：",
                options: [
                    {text: "友善的，合作的，持之以恒的，有耐心的", category: "S"},
                    {text: "健谈的，热情的，乐观的，精力充沛的", category: "I"},
                    {text: "自信的，有竞争力的，善于完成任务的", category: "D"},
                    {text: "谨慎的，仔细的，高标准的", category: "C"}
                ]
            },
            {
                text: "我喜欢在哪种事奉环境中：",
                options: [
                    {text: "繁忙的，创新性的，以目标为本", category: "D"},
                    {text: "有结构性的，有组织的，以质量为本", category: "C"},
                    {text: "轻松的，稳定的，以人际矣系为本", category: "S"},
                    {text: "刺激性的，互动的，以人为本", category: "I"}
                ]
            },
            {
                text: "我在事奉环境中何时感到最舒服：",
                options: [
                    {text: "有很好的灵活可变性可以做我想做的", category: "I"},
                    {text: "对于将要发生的事我能够给出指引", category: "D"},
                    {text: "我知道具体我被要求做什么", category: "C"},
                    {text: "我享受好的团队生活", category: "S"}
                ]
            },
            {
                text: "在事奉上我会感到成功：",
                options: [
                    {text: "如果我带领好并且达到我所设定的目标", category: "D"},
                    {text: "如果我享受其中并且能够影响别人的建议", category: "I"},
                    {text: "如果我能做好工作并让我的同工依靠我", category: "S"},
                    {text: "如果我能在正确的时间用正确的方法把事情做好", category: "C"}
                ]
            },
            {
                text: "我在哪一种事奉中感到最不舒服：",
                options: [
                    {text: "没做好工作，被催促，被评论或者被拒绝", category: "C"},
                    {text: "被排挤，别人不接纳不听我的建议", category: "I"},
                    {text: "受到别人糟糕的待遇或者彼此很难相处", category: "S"},
                    {text: "给予责任但没有权力，被压制或者被牵制", category: "D"}
                ]
            },
            {
                text: "我会被以下的情况激怒：",
                options: [
                    {text: "没效率，犹豫不决的，缓慢的", category: "D"},
                    {text: "迟钝的，没有耐心的，突变的", category: "S"},
                    {text: "紧急关头的要求，不可预测的，粗心的", category: "C"},
                    {text: "一成不变的工作，不得不遵守规定，正规化的做事模式", category: "I"}
                ]
            },
            {
                text: "我的决定会趋向于：",
                options: [
                    {text: "有胆量的", category: "D"},
                    {text: "关心其他人的", category: "S"},
                    {text: "自然及自发的", category: "I"},
                    {text: "深思熟虑的", category: "C"}
                ]
            },
            {
                text: "我的弱点是：",
                options: [
                    {text: "缺乏持之以恒的，冲动的，半途而废", category: "I"},
                    {text: "拒绝改变，拖延，犹豫不决，过度谦虚", category: "S"},
                    {text: "没有耐心，不留心听意见，固执的", category: "D"},
                    {text: "过于严格对自己和别人，慢于接受新想法，陷人細節", category: "C"}
                ]
            }
        ],
        selectPrompt: '选择...',
        ratingOptions: [
            '1 (最不符合)',
            '2',
            '3',
            '4 (最符合)'
        ],
        validationError: '请确保所有选项都已排序1-4，每个问题中每个数字使用一次。',
        topTraitsText: '您的前两个特质是：'
    },
    'zh-HK': {
        title: 'DISC 性格測試',
        submitButton: '提交問卷',
        resultsTitle: '您的結果',
        questions: [
            {
                text: "大家最有可能使用哪些詞語來描述我：",
                options: [
                    {text: "友善的，合作的，持之以恆的，有耐性的", category: "S"},
                    {text: "健談的，熱情的，樂觀的，精力充沛的", category: "I"},
                    {text: "自信的，有競爭力的，善於完成任務的", category: "D"},
                    {text: "謹慎的，仔細的，高標準的", category: "C"}
                ]
            },
            {
                text: "我喜歡在哪種事奉環境中：",
                options: [
                    {text: "繁忙的，創新性的，以目標為本", category: "D"},
                    {text: "有結構性的，有組織的，以質量為本", category: "C"},
                    {text: "輕鬆的，穩定的，以人際關係為本", category: "S"},
                    {text: "刺激性的，互動的，以人為本", category: "I"}
                ]
            },
            {
                text: "我在事奉環境中何時感到最舒服：",
                options: [
                    {text: "有很好的靈活可變性可以做我想做的", category: "I"},
                    {text: "對於將要發生的事我能夠給出指引", category: "D"},
                    {text: "我知道具體我被要求做什麼", category: "C"},
                    {text: "我享受好的團隊生活", category: "S"}
                ]
            },
            {
                text: "在事奉上我會感到成功：",
                options: [
                    {text: "如果我帶領好並且達到我所設定的目標", category: "D"},
                    {text: "如果我享受其中並且能夠影響別人的建議", category: "I"},
                    {text: "如果我能做好工作並讓我的同工依靠我", category: "S"},
                    {text: "如果我能在正確的時間用正確的方法把事情做好", category: "C"}
                ]
            },
            {
                text: "我在哪一種事奉中感到最不舒服：",
                options: [
                    {text: "冇做好工作，被催促，被評論或者被拒絕", category: "C"},
                    {text: "被排擠，別人不接納不聽我的建議", category: "I"},
                    {text: "受到別人糟糕的待遇或者彼此很難相處", category: "S"},
                    {text: "給予責任但冇權力，被壓制或者被牽制", category: "D"}
                ]
            },
            {
                text: "我會被以下的情況激怒：",
                options: [
                    {text: "冇效率，猶豫不決的，緩慢的", category: "D"},
                    {text: "遲鈍的，冇耐性的，突變的", category: "S"},
                    {text: "緊急關頭的要求，不可預測的，粗心的", category: "C"},
                    {text: "一成不變的工作，不得不遵守規定，正規化的做事模式", category: "I"}
                ]
            },
            {
                text: "我的決定會趨向於：",
                options: [
                    {text: "有膽量的", category: "D"},
                    {text: "關心其他人的", category: "S"},
                    {text: "自然及自發的", category: "I"},
                    {text: "深思熟慮的", category: "C"}
                ]
            },
            {
                text: "我的弱點是：",
                options: [
                    {text: "缺乏持之以恆的，衝動的，半途而廢", category: "I"},
                    {text: "拒絕改變，拖延，猶豫不決，過度謙虛", category: "S"},
                    {text: "冇耐性，不留心聽意見，固執的", category: "D"},
                    {text: "過於嚴格對自己和別人，慢於接受新想法，陷人細節", category: "C"}
                ]
            }
        ],
        selectPrompt: '選擇...',
        ratingOptions: [
            '1 (最不符合)',
            '2',
            '3',
            '4 (最符合)'
        ],
        validationError: '請確保所有選項都已排序1-4，每個問題中每個數字使用一次。',
        topTraitsText: '您的前兩個特質是：'
    }
}