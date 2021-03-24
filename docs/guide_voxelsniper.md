---
id: voxel
title: VoxelSniper Basics
sidebar_label: VoxelSniper
slug: /voxelsniper
---

*When I started out using this plugin a few years ago I couldn't find a basic, simple guide online. I will attempt to do that now.*

### Basics

1.  *The two most basic commands are /b and /v.*

-   /b selects the brush type you wish to use.
-   /v selects the voxel (material you wish to use).
-   /vr selects the replace material (ignore this for now)

1.  *In the main, you will work with Voxelsniper through two tools.*

-   Right clicking with an arrow in your hand will carry out whatever you have told it to using /b and /v.
-   Right clicking with gunpowder in your hand differs depending on the brush, but usually it either executes the brush adjacent to, rather than 'in' the block you have aimed at, or does the opposite of what the arrow would do.

### Important Commands

1.  /b [size]: Sets brush size - usually radius.
2.  /b [brush type]: Sets the type of brush you wish to use - more below.
3.  /v [block ID]: Sets your material to said ID. Here's a list.
4.  /u and /u [number]: Undoes previous actions - identical to //undo in Worldedit.
5.  /vs: Displays current brush settings.
6.  /d : Resets all settings to default.

### Important Brushes

*There are a large number of brushes, many of which are not relevant to the beginner. All brushes can be viewed using* */vs brushes* *, and info on individual brushes can be viewed using* */b [brush] info* .

*Shape Brushes:*

1.  Snipe: /b s : Affects only one block.
2.  Ball: /b b : Places a sphere.
3.  Disc: /b d : Places a horizontal disc.
4.  Disc Face: /b df : Places a vertical disc.
5.  Voxel: /b v : Places a cube.
6.  Voxel Disc: /b vd : Places a horizontal square.
7.  Voxel Disc Face: /b vdf . Places a vertical square.
8.  Cylinder: /b c : Places a cylinder.

*Erosion Brushes:*\
*Most of these do what seems obvious by the name.*

1.  Erode: /b e\
    -- This brush comes with quite a few complex parameters, which you can learn about more with the /b e info command. It is probably best to use the below presets, which are already set up.\
    -- Lift: /b e lift\
    -- Melt: /b e melt\
    -- Fill: /b e fill
2.  Smooth: /b e smooth
3.  Random Erode: /b re
4.  Special blend/erode: /b eb - used similarly to /b e

### Performers

Before we look at any more brushes, it is important to mention another aspect of Voxelsniper: performers. These alter how the brush interacts with the environment, and how it carries out its task. As with the brushes, there are many performers - and the beginner need not know about most of them.

1.  Material: /b [brush] m\
    -- This is the basic, default performer - it affects brushes as you might expect.

2.  Material Replace: /b [brush] mm\
    -- This performer takes your principle material ( /v [id] ), and replaces it with your replace material ( /vr [id] ).

3.  No-physics: /b [brush] [performer 1]p\
    -- This is added onto the end of a normal performer, for example:\
    -- /b s mp and /v 0 , when pointed at the top half of a door, would delete that top half of the door but not the button.\
    -- Useful for creating floating ladders and torches, along with separating pistons into their extended and non-extendable parts.

*There are a vast number of performers, which can act as really powerful in-game tools. I will talk more about these in a future advanced tutorial.*

### Further Brushes

*Again, there are a vast number of brushes, some of which I will cover in a future Guide. Here are some important ones:*

*Blend Brushes:*

-   Principally, /b bb . Other brushes are ' bd ', ' bv ', and ' bvd '.

*Splatter Brushes:*

-   Explained perfectly in [this video 3](https://www.youtube.com/watch?v=bTlaWFfl3R0).

*Overlay Brush:*

-   /b over d[depth] creates an overlay using your material, fairly simple.

*In the next guide I will go into further things you can do with this brilliant plugin, such as using ink, far more extensive information on performers and masks, how to bind brushes to tools, more brushes, and stencils. In the meantime, if you have an issue talk to a Designer, Artist or Creator - who should be able to help.*

*Guide written by Tobberz, 03/19*