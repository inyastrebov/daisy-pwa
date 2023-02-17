let date = new Date('Feb 27 2023 14:00:00')

function counts() {
  let nowDate = new Date()
  let gap = date - nowDate

  let days = Math.floor(gap / 1000 / 60 / 60 / 24)
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24
  let minutes = Math.floor(gap / 1000 / 60) % 60
  let second = Math.floor(gap / 1000) % 60

  if (gap < 0) {
    document.querySelector('.timer').innerText = ''
  } else {

    let hashDay = document.querySelector('#days')
    hashDay.innerText = days
    if (hashDay.innerText < 10) {
      hashDay.innerText = "0" + days
    }

    let hashHours = document.querySelector('#hours')
    hashHours.innerText = hours
    if (hashHours.innerText < 10) {
      hashHours.innerText = "0" + hours
    }

    let hashMinutes = document.querySelector('#minutes')
    hashMinutes.innerText = minutes
    if (hashMinutes.innerText < 10) {
      hashMinutes.innerText = "0" + minutes
    }

    let hashSecond = document.querySelector('#second')
    hashSecond.innerText = second
    if (hashSecond.innerText < 10) {
      hashSecond.innerText = "0" + second
    }
  }
}

counts()

setInterval(counts, 1000)



let dateCount1 = new Date('Feb 29 2023 14:00:00')

function countsBlock1() {
  let nowDate = new Date()
  let gap = dateCount1 - nowDate

  let days = Math.floor(gap / 1000 / 60 / 60 / 24)
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24
  let minutes = Math.floor(gap / 1000 / 60) % 60
  let second = Math.floor(gap / 1000) % 60

  if (gap < 0) {
    document.querySelector('.timer-count-1').innerText = ''
  } else {
    let hashDay = document.querySelector('#count-days-1')
    hashDay.innerText = days
    if (hashDay.innerText < 10) {
      hashDay.innerText = "0" + days
    }

    let hashHours = document.querySelector('#count-hours-1')
    hashHours.innerText = hours
    if (hashHours.innerText < 10) {
      hashHours.innerText = "0" + hours
    }

    let hashMinutes = document.querySelector('#count-minutes-1')
    hashMinutes.innerText = minutes
    if (hashMinutes.innerText < 10) {
      hashMinutes.innerText = "0" + minutes
    }

    let hashSecond = document.querySelector('#count-second-1')
    hashSecond.innerText = second
    if (hashSecond.innerText < 10) {
      hashSecond.innerText = "0" + second
    }
  }

}

countsBlock1()

setInterval(countsBlock1, 1000)



let dateCount2 = new Date('Feb 28 2023 14:00:00')

function countsBlock2() {
  let nowDate = new Date()
  let gap = dateCount2 - nowDate

  let days = Math.floor(gap / 1000 / 60 / 60 / 24)
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24
  let minutes = Math.floor(gap / 1000 / 60) % 60
  let second = Math.floor(gap / 1000) % 60

  if (gap < 0) {
    document.querySelector('.timer-count-2').innerText = ''
  } else {
    let hashDay = document.querySelector('#count-days-2')
    hashDay.innerText = days
    if (hashDay.innerText < 10) {
      hashDay.innerText = "0" + days
    }

    let hashHours = document.querySelector('#count-hours-2')
    hashHours.innerText = hours
    if (hashHours.innerText < 10) {
      hashHours.innerText = "0" + hours
    }

    let hashMinutes = document.querySelector('#count-minutes-2')
    hashMinutes.innerText = minutes
    if (hashMinutes.innerText < 10) {
      hashMinutes.innerText = "0" + minutes
    }

    let hashSecond = document.querySelector('#count-second-2')
    hashSecond.innerText = second
    if (hashSecond.innerText < 10) {
      hashSecond.innerText = "0" + second
    }
  }

}

countsBlock2()

setInterval(countsBlock2, 1000)



let dateCount3 = new Date('Feb 26 2023 14:00:00')

function countsBlock3() {
  let nowDate = new Date()
  let gap = dateCount3 - nowDate

  let days = Math.floor(gap / 1000 / 60 / 60 / 24)
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24
  let minutes = Math.floor(gap / 1000 / 60) % 60
  let second = Math.floor(gap / 1000) % 60

  if (gap < 0) {
    document.querySelector('.timer-count-3').innerText = ''
  } else {
    let hashDay = document.querySelector('#count-days-3')
    hashDay.innerText = days
    if (hashDay.innerText < 10) {
      hashDay.innerText = "0" + days
    }

    let hashHours = document.querySelector('#count-hours-3')
    hashHours.innerText = hours
    if (hashHours.innerText < 10) {
      hashHours.innerText = "0" + hours
    }

    let hashMinutes = document.querySelector('#count-minutes-3')
    hashMinutes.innerText = minutes
    if (hashMinutes.innerText < 10) {
      hashMinutes.innerText = "0" + minutes
    }

    let hashSecond = document.querySelector('#count-second-3')
    hashSecond.innerText = second
    if (hashSecond.innerText < 10) {
      hashSecond.innerText = "0" + second
    }
  }

}

countsBlock3()

setInterval(countsBlock3, 1000)