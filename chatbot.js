function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    // إضافة رسالة المستخدم
    let userMessage = document.createElement("p");
    userMessage.textContent = "أنت: " + userInput;
    chatBox.appendChild(userMessage);

    // الردود النفسية الذكية
    let botMessage = document.createElement("p");
    botMessage.className = "bot-message";
    botMessage.textContent = getResponse(userInput);
    chatBox.appendChild(botMessage);

    // تصفير خانة الإدخال
    document.getElementById("user-input").value = "";

    // التمرير لأسفل
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(input) {
    input = input.toLowerCase();

    if (input.includes("قلق") || input.includes("توتر")) {
        return "يبدو أنك تشعر بالقلق، جرب تقنية التنفس العميق وأرح عقلك.";
    } else if (input.includes("حزين") || input.includes("اكتئاب")) {
        return "أنا آسفة أنك تشعر بالحزن. هل جربت مشاركة مشاعرك مع صديق مقرب؟";
    } else if (input.includes("سعيد") || input.includes("فرحان")) {
        return "هذا رائع! حافظ على هذه الطاقة الإيجابية واستمتع بيومك.";
    } else {
        return "أنا هنا لأساعدك. هل يمكنك شرح حالتك أكثر؟";
    }
}
