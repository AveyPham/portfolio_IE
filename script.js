const datas = [
    {
        name: 'Department of Italian Language at HaNU',
        time: '43.5h',
        link: 'https://dungpq.thuctap.inevn.com/tt1/index.html',
    },
    {
        name: 'Personal Portfolio',
        time: '24h',
        link: 'https://dungpq.thuctap.inevn.com/tt2/index.html',
    },
    {
        name: 'Mini Website Game ',
        time: '43.5h',
        link: 'https://dungpq.thuctap.inevn.com/tt3/index.html',
    },
    {
        name: "Have knowledge and use INEVO's CSS",
        time: '40h',
        link: 'https://dungpq.thuctap.inevn.com/tt4/index.html',
    },
    {
        name: 'Use INEVO for designing and coding dynamic website',
        time: '40h',
        link: 'https://dungpq.thuctap.inevn.com/tt5/index.html',
    },
    {
        name: 'Upgrade dynamic website',
        time: '67.5h',
        link: 'https://dungpq.thuctap.inevn.com/tt6/index.html',
    },
    {
        name: 'Design UI for system',
        time: '73h',
        link: 'https://dungpq.thuctap.inevn.com/tt7/index.html',
    },
    {
        name: "Use INEVO's dashboard to create system control personal blog",
        time: '79h',
        link: 'https://dungpq.thuctap.inevn.com/tt8/index.html',
    }, 
]

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= '+id+']').classList.add('active');
            })
        }
    })
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    // animation footer on scroll
}

function renderData() {
    const listContainer = document.getElementById('container-challenge');
  
    listContainer.innerHTML = datas.map((item, index) =>(
        `
            <li  id=${index} onclick="showDiv(${index})">
                 <div>
                      <div class="seemore ${index}" >
                       <span>Challenge ${index}</span>
                        <p class="title">
                             ${item.name}
                         </p>
                      </div>
                      <div class="panel ${index}">
                          <div style="display: flex;"><span>Time: </span><p>&nbsp; ${item.time}</p></div>
                         <div><a target="_blank" href=${item.link}>Link to challenge's code</a></div>
                     </div>
                 </div>
            </li>
      `
    )).join("");

    console.log(listContainer)
    // console.log(listItems)
    // listContainer.innerHTML = listItems;

  }
  
  renderData();


function showDiv(id) {
    $(".panel."+id).slideToggle();
}

(function () {
    
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
        else {
            items[i].classList.remove("in-view")
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();

