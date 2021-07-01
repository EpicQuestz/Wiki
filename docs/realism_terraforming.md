---
id: terra
title: Terraforming Guide
sidebar_label: Terraforming
slug: /terraforming
---

import Pic1 from '@site/static/img/realism_terraforming/1.jpeg';
import Pic2 from '@site/static/img/realism_terraforming/2.jpeg';
import Pic3 from '@site/static/img/realism_terraforming/3.jpeg';
import Pic4 from '@site/static/img/realism_terraforming/4.jpeg';
import Pic5 from '@site/static/img/realism_terraforming/5.jpeg';
import Pic6 from '@site/static/img/realism_terraforming/6.jpeg';
import Pic7 from '@site/static/img/realism_terraforming/7.jpeg';
import Pic8 from '@site/static/img/realism_terraforming/8.jpeg';
import Pic9 from '@site/static/img/realism_terraforming/9.jpeg';
import Pic10 from '@site/static/img/realism_terraforming/10.jpeg';
import Pic0 from '@site/static/img/realism_terraforming/0.png';


<img src={Pic0} />

Here, Enoshade uses a small plot to demonstrate the basic principles of terraforming.

:::note Step-by-step
Above is the end result of this demonstration - below is how to get there!
:::


### Step 1

<img src={Pic1} />

Create a big flat area to work with. (Using a small plot for the purposes of the demonstration)

### Step 2

<img src={Pic2} />

Start placing huge balls (with a radius of between 10 and 30) to get the rough terrain shape. Cubes and cylinders also work and I sometimes use them.

### Step 3

<img src={Pic3} />

Use voxel sniper brushes to sculpt out the details. My favourite brush for this is `/b eb lift`, though some people prefer to use something like `/b eb fil`. You can remove the b from eb to make it so it simply does the main function without smoothing it out at the same time; this will probably mean a bit less time spent on smoothing later but you won’t see exactly how the terrain looks until you finish. Start out with extremely big ones (size 20 or so), slowly go down to about size 5 as you progressively get the terrain shape down. Depending on the terrain this is the most time-consuming part. This is also the part that requires the most experience, and reference plus knowledge of natural erosion processes can really help here.

### Step 4

<img src={Pic4} />

Smooth everything. Either selecting everything and doing the `//smooth` command (which can give nice curvy shapes depending on the parameters - though it may look too smooth. You could go over this with a slight layer of the lift brush to add roughness). You can also smooth by using `/b bb` and `/b e smooth` voxel sniper brushes, which takes longer and will probably require manual fixing of the staircasing effect created by these brushes.

:::caution Staircasing
Staircasing is very bad in terrain because it is a repeating pattern, and terrain is naturally random and organic. Staircasing looks too artificial and is, unfortunately, an artefact produced by many of Minecraft’s tools. See bottom of page for examples.
:::

### Step 5

<p float="left">
  <img src={Pic5} width="50%" />
  <img src={Pic6} width="50%" /> 
</p>

The texturing phase, this is my favourite. I use a combination of different masks in the `//replace` command to get the results I want. My favourite masks by far are the angle mask, `/[angle1d][angle2d]` and the simplex mask `#simplex[size][pattern]`. The most simple texturing is accomplished by replacing everything above or below a certain angle threshold with a placeholder block, then using two `#simplex` masks to place in the final blocks. Example of the simplex masks: `//replace diamond_block #simplex[18][1,1:5,3,3:1],#simplex[17.9][1,1:5,3,3:1]`.

The slightly smaller simplex mask makes it so that the blobby shapes become rougher and mixed with the other blocks.

:::note Other Masks for Complex Texturing
- Extrema mask (like angle mask but with ^ instead of /): [Example](https://twitter.com/jessepaleg/status/990594870858338305)
- Adjacency masks: [Tutorial](https://www.youtube.com/watch?v=JCj0Xpi1yMo)
- Any other new masks I pick up from other builders.
:::

### Step 6

<img src={Pic7} />

Paste in trees, vegetation, replace the air above certain blocks with tall grass and other kinds of plants, etc.

### Examples of Staircasing

<p float="left">
  <img src={Pic10} width="32%" />
  <img src={Pic9} width="32%" />
  <img src={Pic8} width="32%" /> 
</p>


:::note Congratulations
That's it, you're done! Send me any questions over Discord (Enoshade#3207)
:::

*Guide written by Enoshade, 03/19*