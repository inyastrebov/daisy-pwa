const informationContentItems = document.querySelectorAll('[data-info-target]');
const informationTabItems = document.querySelectorAll('.information__tab');

informationTabItems.forEach((elem, index) => {
    if (index == 0) {
        elem.classList.add('information__tab_active');
    }
    elem.addEventListener('click', e => {
        informationTabItems.forEach(item => item.classList.remove('information__tab_active'));
        elem.classList.add('information__tab_active');

        informationContentItems.forEach(content => {
            if (content.dataset.infoTarget === elem.dataset.infoNav) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    })
})