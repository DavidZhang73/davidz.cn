<template>
  <div>
    <div
      class="relative cursor-grab filter invert dark:invert-[80%]"
      ref="canvas"
    ></div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute w-full inset-x-0 top-[-20px] mx-auto h-10 text-white dark:text-gray-300 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      @click="toggleMode"
    >
      <path
        v-if="isDark"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m9.663 17h4.673m-5.872-1.464c-3.1494-3.1502-0.91798-8.5348 3.536-8.5348 4.454 0 6.6854 5.3846 3.536 8.5348l-0.548 0.547c-0.63272 0.63284-0.98812 1.4911-0.988 2.386v0.531c0 2.6667-4 2.6667-4 0v-0.531c0-0.895-0.356-1.754-0.988-2.386z"
      />
      <path
        v-else
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
      <g v-if="!isDark" fill="#f0e020" stroke-width=".1">
        <path
          d="m10.119 15.813c-0.064156-0.090633-0.36646-0.4215-0.67179-0.73525-0.58916-0.60542-0.84776-0.94532-1.0465-1.3755-0.47371-1.0253-0.50809-2.112-0.10014-3.1648 0.40523-1.0458 1.2956-1.9054 2.3749-2.2932 0.43812-0.15739 0.7708-0.21018 1.3245-0.21018 0.42823 0 0.5592 0.010939 0.81416 0.068 0.59146 0.13238 1.1092 0.36977 1.5801 0.72446 1.3529 1.0191 1.9141 2.7874 1.3937 4.3912-0.22734 0.7006-0.48821 1.0918-1.2492 1.8735-0.3137 0.32223-0.61629 0.65382-0.67243 0.73686l-0.10207 0.15098-3.5286-0.001295z"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
// @ts-ignore
import Matter, { Engine as EngineType, IEventCollision } from 'matter-js'

const isDebug = false

const isDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
const setDarkMode = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    isDark.value = event.matches
    setDarkMode(event.matches)
  })
setDarkMode(isDark.value)
const toggleMode = () => {
  isDark.value = !isDark.value
  setDarkMode(isDark.value)
}

const canvas = ref()
const {
  Engine,
  Render,
  Runner,
  Bodies,
  Body,
  Composites,
  Composite,
  Constraint,
  Mouse,
  MouseConstraint,
  Events
} = Matter
onMounted(() => {
  // create engine
  const engine = Engine.create()
  const world = engine.world

  // create renderer
  const render = Render.create({
    element: canvas.value,
    engine: engine,
    options: {
      width: isDebug ? 250 : 70,
      height: isDebug ? 500 : 140,
      showVelocity: isDebug,
      wireframes: isDebug,
      background: 'transparent'
    }
  })
  Render.run(render)

  // create runner
  const runner = Runner.create()
  Runner.run(runner, engine)

  // add bodies
  const group = Body.nextGroup(true)
  const cord = Composites.stack(
    250,
    100,
    1,
    15,
    0,
    0,
    function (x: number, y: number) {
      return Bodies.rectangle(x, y - ((y - 100) / 20) * 7, 20, 50, {
        collisionFilter: { group: group },
        chamfer: { radius: 5 },
        density: 0.005,
        frictionAir: 0.05,
        render: {
          fillStyle: '#000000'
        }
      })
    }
  )
  Composites.chain(cord, 0, 0.35, 0, -0.35, {
    stiffness: 0.9,
    length: 0,
    angularStiffness: 0,
    render: {
      visible: false
    }
  })
  const handler = Bodies.circle(250, 800, 40, {
    collisionFilter: { group: group },
    render: {
      fillStyle: '#000000'
    }
  })
  const wallThick = 10
  const sensor = Bodies.rectangle(0, 800 - wallThick / 2, 1000, wallThick, {
    isStatic: true,
    render: { visible: isDebug }
  })
  const walls = Composite.create({
    bodies: [
      Bodies.rectangle(0, wallThick / 2, 1000, wallThick, {
        isStatic: true,
        render: { visible: isDebug }
      }),
      Bodies.rectangle(0, 1000 - wallThick / 2, 1000, wallThick, {
        isStatic: true,
        render: { visible: isDebug }
      }),
      Bodies.rectangle(wallThick / 2, 0, wallThick, 2000, {
        isStatic: true,
        render: { visible: isDebug }
      }),
      Bodies.rectangle(500 - wallThick / 2, 0, wallThick, 2000, {
        isStatic: true,
        render: { visible: isDebug }
      })
    ]
  })
  Composite.add(world, [
    cord,
    Constraint.create({
      pointA: { x: 250, y: 100 },
      bodyB: cord.bodies[0],
      pointB: { x: 0, y: -25 },
      length: 0,
      stiffness: 0.9,
      // @ts-ignore
      angularStiffness: 0.7,
      render: {
        visible: false
      }
    }),
    handler,
    Constraint.create({
      bodyA: cord.bodies.at(-1),
      pointA: { x: 0, y: 25 },
      bodyB: handler,
      pointB: { x: 0, y: 0 },
      length: 0,
      stiffness: 0.9,
      // @ts-ignore
      angularStiffness: 0.7,
      render: {
        visible: false
      }
    }),
    sensor,
    walls
  ])

  // add mouse control
  const mouse = Mouse.create(render.canvas)
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    // @ts-ignore
    constraint: {
      stiffness: 1,
      render: {
        visible: false
      }
    }
  })

  Composite.add(engine.world, mouseConstraint)

  // detect toggle
  let mouseEvent: MouseEvent
  let touchEvent: TouchEvent
  const handleMouseMove = (event: MouseEvent) => {
    mouseEvent = event
  }
  const handleTouchMove = (event: TouchEvent) => {
    touchEvent = event
  }
  canvas.value
    .querySelector('canvas')
    .addEventListener('mousemove', handleMouseMove)
  canvas.value
    .querySelector('canvas')
    .addEventListener('touchmove', handleTouchMove)
  Events.on(engine, 'collisionStart', (event: IEventCollision<EngineType>) => {
    const pairs = event.pairs
    for (let i = 0, j = pairs.length; i != j; ++i) {
      const pair = pairs[i]
      if (mouseEvent)
        canvas.value
          .querySelector('canvas')
          .dispatchEvent(new MouseEvent('mouseup', mouseEvent))
      else if (touchEvent)
        canvas.value.querySelector('canvas').dispatchEvent(
          new TouchEvent('touchend', {
            // @ts-ignore
            changedTouches: touchEvent.touches
          })
        )
      if (pair.bodyA === handler && pair.bodyB === sensor) {
        toggleMode()
        break
      }
    }
  })

  // keep the mouse in sync with rendering
  render.mouse = mouse

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 500, y: 1000 }
  })
})
</script>
