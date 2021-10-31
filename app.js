addEventListener('load', () => {
    const audios = document.querySelectorAll('.audio')
    const pads = document.querySelectorAll('.pads > div')
    const visible = document.querySelector('.visual')
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
    pads.forEach((pad, index) => {
        pad.addEventListener('click', (e) => {
            pad.firstElementChild.currentTime = 0;
            pad.firstElementChild.play()

            createBubble(index, e.clientX)
        })
    })
    const createBubble = function (index, position) {
        const bubble = document.createElement('div')
        visible.appendChild(bubble)
        bubble.style.background = colors[index]
        bubble.style.setProperty('--i', `${position}px`)
        bubble.style.animation = ''
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener('animationend', function () {
            // visible.removeChild(this)
        })
    }
})
