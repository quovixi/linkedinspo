# LinkedInspo

## Background

You can get any AI tool to generate a bunch of prompts and example posts for LinkedIn — it's even built into LinkedIn itself these days. But I think the net result of this trend is a bunch of posts that all follow the same format and have this uncanny valley tone, which makes for a pretty boring feed.

That said, I get that people feel a pressure to post on LinkedIn and are looking for ideas. I was originally going to put together a straightforward blog post with a round-up of post suggestions, but then I thought a random generator web-app would be more fun (for me and for the user).

## Features

Generate a random prompt at the click of a button, and see an accompanying example (which can be shown or hidden with a toggle switch). All prompts are included by default but, if you prefer, you can filter by category: Informative, Personal, Inspiring, or Engaging.

All the prompts and examples are written by me ([Vicky Carmichael](https://www.linkedin.com/in/vickycarmichael/)). Full disclosure: I haven't ever gone viral on LinkedIn myself. I make no guarantee that these ideas are algorithm winners. But they are an antidote to the repetitive dross that's currently flooding the platform, and I hope someone finds them useful. If you prefer, you can download all the prompts in one go as a csv file.

One thing I did use ChatGPT for is to help turn my ideas into code — particularly the JavaScript powering the random selection.

The trickiest part of this project was figuring out how to fade in an out between prompts. I didn't realise how complicated it is to try and animate the display property, so I ended up listening for `tranisitonend` events to manipulate the DOM, dynamically updating `opacity` and `visibility` at the right time.

## Try it out
[linkedinspo.quovixi.com](https://linkedinspo.quovixi.com/)
