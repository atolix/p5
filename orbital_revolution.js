const rat = [50, 80, 110, 150, 190, 230, 270, 310]
const planetColors = ['yellow', 'gray', 'orange', 'blue', 'red', 'lightblue', 'brown', 'lightgreen']
const planetNames = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus']
let angles = Array(rat.length).fill(0)

const orbitalPeriods = [1, 88, 225, 365, 687, 4333, 10759, 30687]

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(12)
  fill(255)
}

function draw() {
  clear()

  translate(width / 2, height / 2)

  fill(planetColors[0])
  noStroke()
  circle(0, 0, 40)
  fill(255)
  text(planetNames[0], 25, 0)

  let earthX = cos(angles[3]) * rat[3];
  let earthY = sin(angles[3]) * rat[3];

  for (let i = 1; i < rat.length; i++) {
    let r = rat[i]
    const x = cos(angles[i]) * r
    const y = sin(angles[i]) * r

    fill(planetColors[i])
    noStroke()
    circle(x, y, 20)

    push()
    stroke(240)
    noFill()
    circle(0, 0, r * 2)
    pop()

    if (i !== 3) {
      let distance = dist(x, y, earthX, earthY)
      fill(255)
      text(planetNames[i] + ': ' + nf(distance, 1, 5), x + 15, y)
    }

    if (i === 3) {
      fill(255)
      text(planetNames[i], x + 15, y)
    }

    angles[i] += (TWO_PI / orbitalPeriods[i]) * 0.9
  }
}
