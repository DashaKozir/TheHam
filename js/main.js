
// Our services

const tab = document.querySelectorAll('.item_filter')
tab.forEach(function(el) {
    el.addEventListener('click', function() {
        const id = this.getAttribute('data-filter'),
            content = document.querySelector('.wrapper_item[data-filter="'+id+'"]'),
            activeTab = document.querySelector('.item_filter.active'),
            activeContent = document.querySelector('.wrapper_item.unhidden');

        activeTab.classList.remove('active');
        el.classList.add('active');
        activeContent.classList.remove('unhidden');
        content.classList.add('unhidden');
    });
});

// amazing work

const buttonLoad = document.getElementById('loadMore')
const loadingAnimation = document.querySelector('.lds-ellipsis')

const count = 12;
let position = 0;
const picturesData = [
    { category: 'graphic-design', src: './img/graphic%20design/graphic-design1.jpg' },
    { category: 'graphic-design', src: './img/graphic%20design/graphic-design2.jpg' },
    { category: 'graphic-design', src: './img/graphic%20design/graphic-design3.jpg' },
    { category: 'web-design', src: './img/web%20design/web-design1.jpg' },
    { category: 'landing-pages', src: './img/web%20design/web-design2.jpg'},
    { category: 'wordpress', src: './img/web%20design/web-design3.jpg' },
    { category: 'wordpress', src: './img/web%20design/web-design4.jpg' },
    { category: 'wordpress', src: './img/landing%20page/landing-page2.jpg' },
    { category: 'wordpress', src: './img/landing%20page/landing-page1.jpg' },
    { category: 'wordpress', src: './img/landing%20page/landing-page3.jpg' },
    { category: 'web-design', src: './img/wordpress/wordpress1.jpg' },
    { category: 'web-design', src: './img/wordpress/wordpress2.jpg' },
    { category: 'web-design', src: './img/wordpress/wordpress3.jpg' },
    { category: 'landing-pages', src: './img/wordpress/wordpress4.jpg' },
    { category: 'landing-pages', src: './img/landing%20page/landing-page4.jpg' },
    { category: 'landing-pages', src: './img/landing%20page/landing-page5.jpg' },
    { category: 'landing-pages', src: './img/landing%20page/landing-page6.jpg' },
    { category: 'graphic-design', src: './img/graphic%20design/graphic-design4.jpg' },
    { category: 'graphic-design', src: './img/graphic%20design/graphic-design5.jpg' },
    { category: 'web-design', src: './img/web%20design/web-design5.jpg' },
    { category: 'web-design', src: './img/web%20design/web-design6.jpg' },
    { category: 'wordpress', src: './img/wordpress/wordpress7.jpg' },
    { category: 'wordpress', src: './img/wordpress/wordpress8.jpg' },
    { category: 'wordpress', src: './img/wordpress/wordpress9.jpg' },
];

function loadMore() {
    position += 12;
    let res;
    res = picturesData.slice(position, position + count);
    res.map((item) => {
        const img = document.createElement('img');
        img.src = item.src;
        document.getElementById('pictures').appendChild(img);
    });
}

const loadMoreAnimation = () => {
    buttonLoad.hidden = true;
    loadingAnimation.classList.remove('hidden')
    setTimeout(() => {
        buttonLoad.hidden = true;
        loadingAnimation.classList.add('hidden')
        loadMore();
    }, 1500);
};
buttonLoad.addEventListener('click', loadMoreAnimation);

function setCategory(category) {
    document.getElementById('pictures').innerHTML = '';
    if (category) {
        const res = picturesData
               .reduce((accum, item) => {
                if (item.category === category) {
                    accum.push(item);
                }
                return accum;
            }, [])
        res.map((item) => {
            const img = document.createElement('img');
            img.src = item.src;
            document.getElementById('pictures').appendChild(img);
        });
    } else {
        const res = picturesData.slice(0, count);
        res.map((item) => {
            const img = document.createElement('img');
            img.src = item.src;
            document.getElementById('pictures').appendChild(img);
        });
    }
}

//amazing work end

// what people say about us start

const imgPeople = document.querySelectorAll('.swiper-slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const tabs = document.querySelector('.tabs-list');
const tabsItem = document.querySelectorAll('.tabs-image');
let counter = 0;

next.addEventListener('click', () => {
    imgPeople[counter].classList.remove('active-img');
    tabsItem[counter].classList.remove('active-tabs');
    counter++;
    if (counter === imgPeople.length) {
        counter = 0;
    }
    tabsItem[counter].classList.add('active-tabs');
    imgPeople[counter].classList.add('active-img');
});
prev.addEventListener('click', () => {
    imgPeople[counter].classList.remove('active-img');
    tabsItem[counter].classList.remove('active-tabs');
    if (counter === 0) {
        counter = imgPeople.length;
    }
    counter--;
    tabsItem[counter].classList.add('active-tabs');
    imgPeople[counter].classList.add('active-img');
});

tabs.addEventListener('click', event => {
    if (!event.target.classList.contains('tabs-image')) {
        return;
    }
    tabsItem.forEach(currentItem => {
        currentItem.classList.remove('active-tabs');
    });
    imgPeople.forEach((item, index) => {
        if (event.target.dataset.slide === item.dataset.slide) {
            item.classList.add('active-img');
            counter = index;
        } else {
            item.classList.remove('active-img');
        }
    });
    event.target.classList.add('active-tabs');
});

// what people say about us end