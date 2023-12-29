const setReadBtn = document.querySelector('.notifications__btn');
const unreadNumber = document.querySelector('.notifications__badge');
const notificationCards = document.querySelectorAll('.notification-card');


const setNotificationsRead = () => {
    notificationCards
        .forEach(card => card.classList.add('notification-card--read'));
}

const setUnreadNumber = (num=0) => {
    unreadNumber.innerText = num;
}

setReadBtn.addEventListener('click', () => {
    setNotificationsRead();
    setUnreadNumber();
});
