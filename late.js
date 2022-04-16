// start coding your function here!

function running_late(date) {
    let timeStr = date.charAt(date.length - 8) + date.charAt(date.length - 7)
    if (parseInt(timeStr) >= 22) {
      return 'It is late!'
    } else {
      return 'It is still early!'
    }
}

exports.running_late = running_late
