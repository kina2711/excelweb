let completedTasks = 0;
const totalTasks = document.querySelectorAll('.checklist li').length;

function openTab(evt, tabName) {
    var i, tabcontent, tabs;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function updateProgress() {
    const percentage = (completedTasks / totalTasks) * 100;
    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `Tiến độ: ${completedTasks}/${totalTasks} bài tập hoàn thành`;
}

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI' && e.target.parentElement.classList.contains('checklist')) {
        e.target.classList.toggle('completed');
        if (e.target.classList.contains('completed')) {
            completedTasks++;
        } else {
            completedTasks--;
        }
        updateProgress();
    }
});

// Khởi tạo tiến độ
updateProgress();
