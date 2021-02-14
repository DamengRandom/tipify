### CSS General recalls

1. inline block vs block vs inline

inline block:
  - respect `top bottom left right` margin and paddings

inline:
  - respect `right and left` margins and paddings, <b>not</b> allow top and bottom margins
  - not allow to set width and height

block:
  - respect `top bottom left right` margin and paddings
  - force line break
  - acquires full width if width is not defined

Visual comparison:

![inline vs inline block vs block](https://res.cloudinary.com/dameng/image/upload/v1612006266/tipify/block_inline-block_inline.png)

2. 