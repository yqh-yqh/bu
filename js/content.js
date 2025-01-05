const needTips = !!/MicroMessenger/i.test(navigator.userAgent);

function showTips() {
    if (needTips) {
        // 如果是微信则直接提示浏览器打开
        document.getElementById('JweixinTip').style.display = 'block';
    }
}

function doTips() {
    let countDown = 3
    const node = document.getElementsByClassName("timeTips")?.[0]
    setInterval(() => {
        if (countDown === 0) {
            if (needTips) return
            window.location.href="https://wcth0105.haiyijhotel.com:19582/6cd3bh?c78cad8a=7c0dd632fb73ceea772483f085d05c11"
        } else {
            countDown--;
            node.innerText = `${countDown}s后跳转到下一页面`
        }

    }, 1000)
}
