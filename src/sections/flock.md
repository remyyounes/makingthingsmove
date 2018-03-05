# Boids - Flock Simulation

The boids framework is often used in computer graphics, providing realistic-looking representations of flocks of birds and other creatures, such as schools of fish or herds of animals. It was for instance used in the 1998 video game Half-Life for the flying bird-like creatures seen at the end of the game on Xen, named "boid" in the game files.

In Cologne, Germany, two biologists from the University of Leeds demonstrated a flock-like behavior in humans. The group of people exhibited a very similar behavioral pattern to that of a flock, where if 5% of the flock would change direction the others would follow suit. When one person was designated as a predator and everyone else was to avoid him, the flock behaved very much like a school of fish.[13]

## Rules

* **Separation**: steer to avoid crowding local flockmates
* **Alignment**: steer towards the average heading of local flockmates
* **Cohesion**: steer to move toward the average position (center of mass) of local flockmates

![Separation](https://upload.wikimedia.org/wikipedia/commons/e/e1/Rule_separation.gif)
![Alignment](https://upload.wikimedia.org/wikipedia/commons/e/e1/Rule_alignment.gif)
![Cohesion](https://upload.wikimedia.org/wikipedia/commons/2/2b/Rule_cohesion.gif)

[wikipedia/Boids](https://en.wikipedia.org/wiki/Boids)

## Swarm Models

![MetricVsTopological](https://upload.wikimedia.org/wikipedia/commons/b/b8/Metric_vs_topological_distance_in_schools_of_fish.png)

In the `metric distance model` of a fish school (left), the focal fish (yellow) pays attention to all fish within:

* the small zone of repulsion (red)
* the zone of alignment (lighter red)
* and the larger zone of attraction (lightest red).

In the `topological distance model` (right), the focal fish:

* only pays attention to the six or seven closest fish (green), regardless of their distance.

[wikipedia/Swarm_behaviour](https://en.wikipedia.org/wiki/Swarm_behaviour)
