const questions = [
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
];

function createQuiz() {
    const quizContainer = document.getElementById('quiz');
    questions.forEach((question, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<h3>Question ${qIndex + 1}: ${question.text}</h3>`;

        question.options.forEach((option, oIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                        <span class="option-text">${option.text}</span>
                        <select id="q${qIndex}o${oIndex}">
                            <option value="">Select...</option>
                            <option value="1">1 (Least like me)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4 (Most like me)</option>
                        </select>
                    `;
            questionDiv.appendChild(optionDiv);
        });
        quizContainer.appendChild(questionDiv);
    });
}

function authenticateAndFill() {
    const password = prompt("Enter developer password:");
    if (password === "technatkly") {
        fillTestValues();
    } else {
        alert("Incorrect password");
    }
}

mySeq = [[2,1,3,4],[2,4,1,3],[1,3,2,4],[4,3,2,1],[2,3,4,1],[3,4,2,1],[1,3,2,4],[3,4,1,2]]

function fillTestValues() {
    questions.forEach((question, qIndex) => {
        const sequence = mySeq[qIndex % mySeq.length];  // Select the sequence based on the question index
        question.options.forEach((option, oIndex) => {
            const select = document.getElementById(`q${qIndex}o${oIndex}`);
            select.value = sequence[oIndex];  // Fill 1, 2, 3, 4 in sequence
        });
    });
}

function calculateResults() {
    const scores = {D: 0, I: 0, S: 0, C: 0};
    let isValid = true;

    questions.forEach((question, qIndex) => {
        const questionValues = new Set();
        question.options.forEach((option, oIndex) => {
            const select = document.getElementById(`q${qIndex}o${oIndex}`);
            const value = select.value;

            if (value === "") {
                isValid = false;
            } else {
                questionValues.add(value);
                scores[option.category] += parseInt(value);
            }
        });

        if (questionValues.size !== 4) {
            isValid = false;
        }
    });

    if (!isValid) {
        alert("Please ensure all options are ranked 1-4, using each number once per question.");
        return;
    }

    displayResults(scores);
}

function displayResults(scores) {
    const resultsDiv = document.getElementById('results');
    const scoresP = document.getElementById('scores');
    const topTraitsP = document.getElementById('topTraits');

    scoresP.innerHTML = `
                D (Dominance): ${scores.D}<br>
                I (Influence): ${scores.I}<br>
                S (Steadiness): ${scores.S}<br>
                C (Conscientiousness): ${scores.C}
            `;

    const sortedScores = Object.entries(scores)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 2);

    topTraitsP.innerHTML = `Your top two traits are:<br>
                1. ${sortedScores[0][0]} (${sortedScores[0][1]} points)<br>
                2. ${sortedScores[1][0]} (${sortedScores[1][1]} points)`;

    resultsDiv.style.display = 'block';
}

// Initialize the quiz when the page loads
createQuiz();