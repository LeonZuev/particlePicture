# Link to check up:
https://leonzuev.github.io/particlePicture/

## Description:
This project creates an animated particle effect on an HTML canvas.
It utilizes JavaScript to generate and manipulate particles that move
and interact based on the user's mouse movements.
The particles are rendered using the 2D rendering context of the canvas element.

## Main components:
### Particle class:
Represents individual particles in the effect.
Each particle has properties such as position, color, size, velocity, and force.
The particles are drawn on the canvas and updated based on the user's mouse interactions.

### Effect class:
Represents the overall particle effect on the canvas.
It initializes the effect by loading an image onto the canvas and creating an array
of particles based on the image's pixels. The effect continuously updates and draws
the particles on the canvas, resulting in an animated particle effect.
---
The project provides interactivity through the mouse movement.
As the user moves the mouse, the particles react to its position and create visual patterns.
Additionally, there is a "warp" button that triggers a distortion effect by randomly repositioning the particles.
This code does not contain any libraries, only mathematical methods. This effect works on pure JavaScript.
