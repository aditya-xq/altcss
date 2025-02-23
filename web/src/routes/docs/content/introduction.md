### Introduction

Over the last few years, I noticed various problems working with CSS.

1. I rarely use even 50% of the classes these CSS libraries provide. When I look at the documentation, I see that it is filled with so many things that are irrelevant to me, bloated, and clumsy. Most people do not use most of the features and classes provided in most use cases. It doesn't affect performance, as unused classes are removed anyway, but it doesn't feel light with development.

2. I often end up overwriting the CSS or creating my own classes on top of the available ones because, let's face it — no library is perfect for our own unique contexts. Over time, I see a lot of repetition of work across my projects.

3. I do not like using multiple CSS classes, even for simple things. If you look at Tailwind CSS, you'd almost always have six or even seven classes clamped together to one element. The class names can quickly get too long — clumsy to write, remember, read, and maintain. Otherwise, you have to put wrapper classes on top of them.

To solve the above issues, I created an opinionated CSS library that works well for me — and not necessarily for everyone else. In short, this library will probably be unusable or follow practices that don't align with many people. Hence, I decided to call this library — AltCSS.
